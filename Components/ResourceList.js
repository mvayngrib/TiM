'use strict';

var React = require('react-native');
var SearchBar = require('react-native-search-bar'); //('./SearchBar');
var NoResources = require('./NoResources');
var ResourceRow = require('./ResourceRow');
var ResourceView = require('./ResourceView');
var VerificationRow = require('./VerificationRow');
var NewResource = require('./NewResource');
var MessageList = require('./MessageList');
var utils = require('../utils/utils');
var reactMixin = require('react-mixin');
var Store = require('../Store/Store');
var Actions = require('../Actions/Actions');
var Reflux = require('reflux');
var constants = require('tradle-constants');
var Icon = require('react-native-vector-icons/Ionicons');
// var GridList = require('./GridList');
// var DEAL_MODEL = 'tradle.Offer';
// var VENDOR_MODEL = 'tradle.Organization';
var {
  ListView,
  Component,
  StyleSheet,
  Navigator,
  TouchableHighlight,
  Image,
  StatusBarIOS,
  View,
  Text
} = React;

class ResourceList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: utils.getModels() ? false : true,
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      filter: this.props.filter,
      userInput: ''
    };
    var isRegistration = this.props.resource  &&  this.props.resource[constants.TYPE] === constants.TYPES.IDENTITY  &&  !this.props.resource[constants.ROOT_HASH];
    if (isRegistration)
      this.state.isRegistration = isRegistration;    
  }
  componentWillMount() {
    StatusBarIOS.setHidden(false);
    var params = {
      modelName: this.props.modelName, 
      to: this.props.resource
    };
    if (this.props.isAggregation)
      params.isAggregation = true;
    if (this.props.sortProperty)
      params.sortProperty = this.props.sortProperty;
    if (this.props.prop) 
      params.prop = utils.getModel(this.props.resource[constants.TYPE]).value.properties[this.props.prop.name];
    
    this.state.isLoading = true;
    Actions.list(params);    
  }
  componentDidMount() {
    this.listenTo(Store, 'onListUpdate');
  }

  onListUpdate(params) {
    if (params.error)
      return;
    var action = params.action;
    if (action === 'addItem'  ||  action === 'addMessage') {
      var model = action === 'addMessage' 
                ? utils.getModel(this.props.modelName).value
                : utils.getModel(params.resource[constants.TYPE]).value;

      this.state.isLoading = true;
      Actions.list({
        query: this.state.filter, 
        modelName: model.id,
        to: this.props.resource,
        sortProperty: model.sort
      });
      console.log('Actions.list');
      return;      
    }

    if (action !== 'list' ||  !params.list || params.isAggregation !== this.props.isAggregation)
      return;
    var list = params.list;
    if (!list.length  &&  (!this.state.filter  ||  !this.state.filter.length))  {
      this.setState({
        isLoading: false
      })

      return;
    }
    var type = list[0][constants.TYPE];
    // if (type === 'tradle.Organization')
    //   return;
    // if (type  !== this.props.modelName) 
    //   return;
    if (type  !== this.props.modelName) {
      var m = utils.getModel(type).value;
      if (!m.subClassOf  ||  m.subClassOf != this.props.modelName)
        return;
      // if (!params.prop  ||  !params.prop.items  ||  !params.prop.items.ref  ||  !params.prop.items.backlink)
      //   return;
      // var m = utils.getModel(params.prop.items.ref).value;
      // if (m.properties[params.prop.items.backlink].ref !== this.props.modelName) 
      //   return;
    }
    // var n = Math.floor(5, list.length);
    // for (var i=0; i<n; i++) {
    //   var rnd = this.getRandomInt(1, list.length - 1);
    //   list[rnd].online = true; 
    // }

    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(list),
      isLoading: false
    })
  }
  // getRandomInt(min, max) {
  //   return Math.floor(Math.random() * (max - min + 1)) + min;
  // }

  selectResource(resource) {
    var me = utils.getMe();
    // Case when resource is a model. In this case the form for creating a new resource of this type will be displayed
    var model = utils.getModel(this.props.modelName);
    var isIdentity = this.props.modelName === constants.TYPES.IDENTITY;
    var isOrganization = this.props.modelName === 'tradle.Organization';
    if (!isIdentity         &&  
        !isOrganization     &&
        !this.props.callback) {
      var m = utils.getModel(resource[constants.TYPE]).value;
      this.props.navigator.push({
        title: utils.makeTitle(utils.getDisplayName(resource, m.properties)),
        id: 3,
        component: ResourceView,
        titleTextColor: '#7AAAC3',
        backButtonTitle: 'Back',
        rightButtonTitle: 'Edit',
        onRightButtonPress: {
          title: title,
          id: 4,
          component: NewResource,
          titleTextColor: '#7AAAC3',
          backButtonTitle: 'Back',
          rightButtonTitle: 'Done',
          passProps: {
            model: m,
            resource: resource
          }
        },

        passProps: {resource: resource}
      });
      return;
    }
    if (this.props.prop) { 
      if (me  &&  this.props.modelName != constants.TYPES.IDENTITY) {
        this._selectResource(resource);
        return;
      }
      if (!me) {
        if (this.state.isRegistration) {
          this._selectResource(resource);
          return;
        }
      }
      else if (me[constants.ROOT_HASH] === resource[constants.ROOT_HASH]  ||  
         (this.props.resource  &&  me[constants.ROOT_HASH] === this.props.resource[constants.ROOT_HASH]  && this.props.prop)) {
        this._selectResource(resource);
        return;
      }
    }
    var title = isIdentity ? resource.firstName : resource.name; //utils.getDisplayName(resource, model.value.properties);
    var modelName = 'tradle.Message';
    var self = this;
    var route = {
      title: title,
      component: MessageList,
      id: 11,
      passProps: {
        resource: resource, 
        filter: '',
        modelName: modelName,
      },
    }
    if (isIdentity) {
      route.rightButtonTitle = 'Profile';
      route.onRightButtonPress = {
        title: title,
        id: 3,
        component: ResourceView,
        titleTextColor: '#7AAAC3',
        backButtonTitle: 'Back',
        rightButtonTitle: 'Edit',
        onRightButtonPress: {
          title: title,
          id: 4,
          component: NewResource,
          titleTextColor: '#7AAAC3',
          backButtonTitle: 'Back',
          rightButtonTitle: 'Done',
          passProps: {
            model: utils.getModel(resource[constants.TYPE]).value,
            resource: resource
          }
        },
        passProps: {resource: resource}
      }      
    }
    this.props.navigator.push(route);
  }

  _selectResource(resource) {
    var model = utils.getModel(this.props.modelName);
    var title = utils.getDisplayName(resource, model.value.properties);
    var newTitle = title;
    if (title.length > 20) {
      var t = title.split(' ');
      newTitle = '';
      t.forEach(function(word) {
        if (newTitle.length + word.length > 20)
          return;
        newTitle += newTitle.length ? ' ' + word : word;
      })
    }

    var route = {
      title: utils.makeTitle(newTitle),
      id: 3,
      component: ResourceView,
      parentMeta: model,
      backButtonTitle: 'Back',
      passProps: {resource: resource},
    }
    // Edit resource
    var me = utils.getMe();
    if ((me || this.state.isRegistration) &&  this.props.prop) {
      this.props.callback(this.props.prop, resource); // HACK for now
      this.props.navigator.popToRoute(this.props.returnRoute);
      return;
    }
    if (me                       &&  
       !model.value.isInterface  &&  
       (resource[constants.ROOT_HASH] === me[constants.ROOT_HASH]  ||  resource[constants.TYPE] !== constants.TYPES.IDENTITY)) {
      var self = this ;
      route.rightButtonTitle = 'Edit';
      route.onRightButtonPress = /*() =>*/ {
        title: 'Edit',
        id: 4,
        component: NewResource,
        rightButtonTitle: 'Done',
        titleTextColor: '#7AAAC3',
        passProps: {
          model: utils.getModel(resource[constants.TYPE]).value,
          resource: me
        }
      };
    }
    this.props.navigator.push(route);
  }
  showRefResources(resource, prop) {
    var props = utils.getModel(resource[constants.TYPE]).value.properties;
    var propJson = props[prop];
    var resourceTitle = utils.getDisplayName(resource, props);
    resourceTitle = utils.makeTitle(resourceTitle);

    var backlinksTitle = propJson.title + ' - ' + resourceTitle;
    backlinksTitle = utils.makeTitle(backlinksTitle);
    var modelName = propJson.items.ref;

    this.props.navigator.push({
      title: backlinksTitle,
      id: 10,
      component: ResourceList,
      backButtonTitle: 'Back',
      titleTextColor: '#7AAAC3',
      passProps: {
        resource: resource,
        prop: prop,
        modelName: modelName
      },
      rightButtonTitle: 'Details',
      onRightButtonPress: {
        title: resourceTitle,
        id: 3,
        component: ResourceView,
        titleTextColor: '#7AAAC3',
        backButtonTitle: 'Back',
        rightButtonTitle: 'Edit',
        onRightButtonPress: {
          title: resourceTitle,
          id: 4,
          component: NewResource,
          titleTextColor: '#7AAAC3',
          backButtonTitle: 'Back',
          rightButtonTitle: 'Done',
          passProps: {
            model: utils.getModel(resource[constants.TYPE]).value,
            resource: resource
          }
        },

        passProps: {resource: resource}
      }
    });
  }

  onSearchChange(filter) {
    Actions.list({
      query: filter, 
      modelName: this.props.modelName, 
      to: this.props.resource
    });
  }

  onSearchChange1(event) {
    var filter = event.nativeEvent.text.toLowerCase();
    Actions.list({
      query: filter, 
      modelName: this.props.modelName, 
      to: this.props.resource
    });
  }

  renderRow(resource)  {
    var model = utils.getModel(this.props.modelName).value;

    return model.id === 'tradle.Verification' ||  (model.subClassOf  &&  model.subClassOf === 'tradle.Verification')
    ? (<VerificationRow
        onSelect={() => this.selectResource(resource.document)}
        key={resource[constants.ROOT_HASH]}
        prop={this.props.prop}
        resource={resource} />
      )
    : (<ResourceRow
        onSelect={() => this.selectResource(resource)}
        key={resource[constants.ROOT_HASH]}
        showRefResources={this.showRefResources.bind(this)}
        resource={resource} />
    );
  }
  renderFooter() {
    var me = utils.getMe();
    if (!me  ||  (this.props.prop  &&  this.props.prop.readOnly))
      return <View />;

    return (
      <View style={styles.footer}>
        <TouchableHighlight underlayColor='transparent' onPress={this.addNew.bind(this)}>
          <View>
            <Icon name='plus'  size={30}  color='#999999' style={styles.icon} /> 
          </View>
        </TouchableHighlight>
      </View>
    );
  }
        // <TouchableHighlight underlayColor='transparent' onPress={this.showBanks.bind(this)}>
        //   <View>
        //     <Image source={require('image!banking')} style={styles.image} /> 
        //   </View>
        // </TouchableHighlight>
      // <View>
        //   <TouchableHighlight underlayColor='transparent' onPress={this.showDeals.bind(this, DEAL_MODEL)}>
        //     <View>
        //       <Icon name='ion|nuclear'  size={30}  color='#999999'  style={styles.icon} /> 
        //     </View>
        //   </TouchableHighlight>
        // </View>  
  // showDeals(modelName) {
  //   var model = utils.getModel(modelName).value;
  //   // var model = utils.getModel(this.props.modelName).value;
  //   this.props.navigator.push({
  //     title: model.title,
  //     id: 10,
  //     component: ResourceList,
  //     titleTextColor: '#7AAAC3',
  //     backButtonTitle: 'Back',
  //     passProps: {
  //       filter: '',
  //       modelName: DEAL_MODEL,
  //     },
  //   })
  // }
  showBanks() {
    this.props.navigator.push({
      title: 'Banks',
      id: 10,
      component: ResourceList,
      backButtonTitle: 'Back',
      titleTextColor: '#7AAAC3',
      passProps: {
        modelName: 'tradle.Organization'
      }
    });    
  }
  addNew() {
    var model = utils.getModel(this.props.modelName).value;
    var r;
    // resource if present is a container resource as for example subreddit for posts or post for comments
    // if to is passed then resources only of this container need to be returned
    if (this.props.resource) {
      var props = model.properties;
      for (var p in props) {
        var isBacklink = props[p].ref  &&  props[p].ref === this.props.resource[constants.TYPE];
        if (props[p].ref  &&  !isBacklink) {
          if (utils.getModel(props[p].ref).value.isInterface  &&  model.interfaces  &&  model.interfaces.indexOf(props[p].ref) !== -1)
            isBacklink = true;
        }
        if (isBacklink) {  
          r = {};
          r[constants.TYPE] = this.props.modelName;
          r[p] = { id: this.props.resource[constants.TYPE] + '_' + this.props.resource[constants.ROOT_HASH] };
        
          if (this.props.resource.relatedTo  &&  props.relatedTo) // HACK for now for main container
            r.relatedTo = this.props.resource.relatedTo;
        }
      }
    }
    this.props.navigator.push({
      title: model.title,
      id: 4,
      component: NewResource,
      titleTextColor: '#7AAAC3',
      backButtonTitle: 'Back',
      rightButtonTitle: 'Done',
      passProps: {
        model: model,
        resource: r,
        callback: () => Actions.list({
          modelName: this.props.modelName, 
          to: this.props.resource
        }),
      }      
    })
  }
  render() {
    if (this.state.isLoading) 
      return <View/>
    var content;
    var model = utils.getModel(this.props.modelName).value;
    if (this.state.dataSource.getRowCount() === 0)
      content =  <NoResources
                  filter={this.state.filter}
                  model={model}
                  isLoading={this.state.isLoading}/> 
    else {
      var model = utils.getModel(this.props.modelName).value; 
      content = <ListView 
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}
          renderHeader={this.renderHeader.bind(this)}
          automaticallyAdjustContentInsets={false}
          keyboardDismissMode='on-drag'
          keyboardShouldPersistTaps={true}
          showsVerticalScrollIndicator={false} />;
    }
    var model = utils.getModel(this.props.modelName).value;
    var Footer = this.renderFooter();
    var header = this.renderHeader();
    return (
      <View style={styles.container}> 
        <SearchBar
          onChangeText={this.onSearchChange.bind(this)}
          placeholder='Search'
          showsCancelButton={false}          
          hideBackground={true}
          />
        <View style={styles.separator} />
        {content}
        {Footer}
      </View>
    );
  }
  renderHeader() {
    return (this.props.modelName === constants.TYPES.IDENTITY)
          ? <View style={{padding: 5, backgroundColor: '#D7E9F3'}}>
              <TouchableHighlight underlayColor='transparent' onPress={this.showBanks.bind(this)}>
                <View style={styles.row}>
                  <View>
                    <Image source={require('image!banking')} style={styles.cellImage} /> 
                  </View>
                  <View style={styles.textContainer} key={this.props.key + '2'}>
                    <Text style={styles.resourceTitle}>Official Accounts</Text>
                  </View>
                </View>
              </TouchableHighlight>
            </View>
          : <View />

  }

}
reactMixin(ResourceList.prototype, Reflux.ListenerMixin);

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    // backgroundColor: 'white',
    marginTop: 60
  },
  centerText: {
    alignItems: 'center',
  },
  separator: {
    height: 1,
    backgroundColor: '#cccccc',
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 5,
    // color: '#cccccc'
  },
  image: {
    width: 25,
    height: 25,
    marginRight: 5,
    // color: '#cccccc'
  },
  footer: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    height: 45, 
    paddingTop: 5, 
    paddingHorizontal: 10, 
    backgroundColor: '#eeeeee', 
    borderBottomColor: '#eeeeee', 
    borderRightColor: '#eeeeee', 
    borderLeftColor: '#eeeeee', 
    borderWidth: 1,
    borderTopColor: '#cccccc',
  },
  row: {
    // backgroundColor: 'white',
    // justifyContent: 'space-around',
    flexDirection: 'row',
    padding: 5,
  },
  textContainer: {
    flex: 1,
  },
  resourceTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: '400',
    marginBottom: 2,
    paddingLeft: 5
  },
  cellImage: {
    // backgroundColor: '#dddddd',
    height: 50,
    marginRight: 10,
    width: 50,
    // borderColor: '#7AAAc3',
    // borderRadius: 30,
    // borderWidth: 1,
  },

});

module.exports = ResourceList;

