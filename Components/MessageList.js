'use strict';

var React = require('react-native');
var SearchBar = require('react-native-search-bar');
var MessageView = require('./MessageView');
var NoResources = require('./NoResources');
var NewResource = require('./NewResource');
var ResourceTypesScreen = require('./ResourceTypesScreen');
var AddNewMessage = require('./AddNewMessage');
// var CameraView = require('./CameraView');
var utils = require('../utils/utils');
var reactMixin = require('react-mixin');
var Store = require('../Store/Store');
var Actions = require('../Actions/Actions');
var Reflux = require('reflux');
var InvertibleScrollView = require('react-native-invertible-scroll-view');
var constants = require('tradle-constants');

var {
  ListView,
  Component,
  StyleSheet,
  Navigator,
  View,
} = React;

var currentMessageTime;

class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: utils.getModels() ? false : true,
      selectedAssets: {},
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) =>  row1 !== row2
      }),
      filter: this.props.filter,
      userInput: ''
    };
  }
  componentWillMount() {
    var params = {
      modelName: this.props.modelName, 
      to: this.props.resource,
      prop: this.props.prop, 
    }
    if (this.props.isAggregation)
      params.isAggregation = true;
    Actions.messageList(params);    
  }
  componentDidMount() {
    this.listenTo(Store, 'onAction');
  }

  onAction(params) {
    if (params.error)
      return;
    if (params.action === 'addItem'  ||  params.action === 'addVerification') {
      var actionParams = {
        query: this.state.filter,
        modelName: this.props.modelName, 
        to: this.props.resource,
      }

      Actions.messageList(actionParams);
      return;      
    }

    if (params.action !== 'messageList' ||  !params.list || params.isAggregation !== this.props.isAggregation)
      return;
    var list = params.list;
    if (list.length || (this.state.filter  &&  this.state.filter.length)) {
      var type = list[0][constants.TYPE];
      if (type  !== this.props.modelName) {
        var model = utils.getModel(this.props.modelName).value;
        if (!model.isInterface)
          return;
        
        var rModel = utils.getModel(type).value;
        if (!rModel.interfaces  ||  rModel.interfaces.indexOf(this.props.modelName) === -1) 
          return;
      }
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(list),
        isLoading: false,
        verificationsToShare: params.verificationsToShare
      });
    }
    else {
      var first = true
      this.setState({isLoading: false})
    }
  }

  selectResource(resource) {
    // Case when resource is a model. In this case the form for creating a new resource of this type will be displayed
    if (!resource[constants.TYPE]) 
      return;
    var model = utils.getModel(resource[constants.TYPE]).value;
    var title = model.title; //utils.getDisplayName(resource, model.properties);
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
      title: newTitle,
      id: 5,
      backButtonTitle: 'Back',
      component: MessageView,
      parentMeta: model,
      passProps: {resource: resource},
    }
    this.props.navigator.push(route);
  }

  onSearchChange(event) {
    var actionParams = {
      query: event.nativeEvent.text.toLowerCase(),
      modelName: this.props.modelName, 
      to: this.props.resource,
    }

    Actions.messageList(actionParams);
  }

  renderRow(resource)  {
    var model = utils.getModel(resource[constants.TYPE] || resource.id).value;
    var isMessage = model.interfaces  &&  model.interfaces.indexOf('tradle.Message') != -1;
    var isAggregation = this.props.isAggregation; 
    var me = utils.getMe();
    var MessageRow = require('./MessageRow');
    var previousMessageTime = currentMessageTime;
    currentMessageTime = resource.time;
    return  (
      <MessageRow 
        onSelect={this.selectResource.bind(this, resource)}
        resource={resource}
        isAggregation={isAggregation}
        navigator={this.props.navigator}
        verificationsToShare={this.state.verificationsToShare}
        previousMessageTime={previousMessageTime}
        to={isAggregation ? resource.to : this.props.resource} />
      );
  }
  addedMessage(text) {
    Actions.messageList({modelName: this.props.modelName, to: this.props.resource});
  }

  render() {
    if (this.state.isLoading) 
      return <View/>
    currentMessageTime = null;
    var content;
    var model = utils.getModel(this.props.modelName).value;
    if (this.state.dataSource.getRowCount() === 0)
      content =  <NoResources
                  filter={this.state.filter}
                  model={model}
                  isLoading={this.state.isLoading}/> 
    else {
      var isAllMessages = model.isInterface  &&  model.id === 'tradle.Message';
          // renderScrollView={(props) => <InvertibleScrollView {...props} inverted />}
      content = <ListView ref='listview' style={{marginHorizontal: 10}}
          dataSource={this.state.dataSource}
          initialListSize={1000}
          renderRow={this.renderRow.bind(this)}
          automaticallyAdjustContentInsets={false}
          keyboardDismissMode='on-drag'
          keyboardShouldPersistTaps={true}
          showsVerticalScrollIndicator={false} />;
      if (isAllMessages)      
        content = 
          <InvertibleScrollView
            ref='messages'
            inverted
            automaticallyAdjustContentInsets={false}
            scrollEventThrottle={200}>
          {content}
          </InvertibleScrollView>    
    
      
    }

    var addNew = (model.isInterface) 
           ? <AddNewMessage navigator={this.props.navigator} 
                            resource={this.props.resource} 
                            modelName={this.props.modelName} 
                            onAddNewPressed={this.onAddNewPressed.bind(this)}
                            onPhotoSelect={this.onPhotoSelect.bind(this)}
                            callback={this.addedMessage.bind(this)} />
           : <View></View>;
                            // onTakePicPressed={this.onTakePicPressed.bind(this)}
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
        {addNew}
      </View>
    );
  }
  onPhotoSelect(asset) {
    var selectedAssets = this.state.selectedAssets;
    // unselect if was selected before
    if (selectedAssets[asset.node.image.uri])
      delete selectedAssets[asset.node.image.uri];
    else
      selectedAssets[asset.node.image.uri] = asset;
  }
  onAddNewPressed(sendForm) {
    var modelName = this.props.modelName;
    var model = utils.getModel(modelName).value;
    var isInterface = model.isInterface;
    if (!isInterface) 
      return;

    var self = this;
    var currentRoutes = self.props.navigator.getCurrentRoutes();
    this.props.navigator.push({
      title: utils.makeLabel(model.title) + ' type',
      id: 2,
      component: ResourceTypesScreen,
      sceneConfig: Navigator.SceneConfigs.FloatFromBottom,
      backButtonTitle: 'Chat',
      passProps: {
        resource: self.props.resource, 
        returnRoute: currentRoutes[currentRoutes.length - 1],
        modelName: modelName,
        sendForm: sendForm,
        callback: this.props.callback
      },
      rightButtonTitle: 'ion|plus',
      onRightButtonPress: {
        id: 4,
        title: 'New model url',
        component: NewResource,
        backButtonTitle: 'Back',
        titleTextColor: '#7AAAC3',
        rightButtonTitle: 'Done',
        passProps: {
          model: utils.getModel('tradle.NewMessageModel').value,
          callback: this.modelAdded.bind(this)
        }        
      }
    });
  }
  modelAdded(resource) {
    if (resource.url) 
      Actions.addModelFromUrl(resource.url);    
  }  
  // onTakePicPressed() {
  //   var self = this;
  //   this.props.navigator.push({
  //     title: 'Take a pic',
  //     backButtonTitle: 'Cancel',
  //     id: 12,
  //     component: CameraView,
  //     sceneConfig: Navigator.SceneConfigs.FloatFromBottom,
  //     passProps: {
  //       onTakePic: self.onTakePic.bind(this),
  //     }
  //   });
  // }
  onTakePic(data) {
    var msg = {
      from: utils.getMe(), 
      to: this.props.resource,
      time: new Date().getTime(),
      photos: [{
        url: data
      }]
    }
    msg[constants.TYPE] = 'tradle.SimpleMessage';
    this.props.navigator.pop();
    Actions.addMessage(msg);
  }
}
reactMixin(MessageList.prototype, Reflux.ListenerMixin);

var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
    backgroundColor: '#f7f7f7',
  },
  centerText: {
    alignItems: 'center',
  },
  separator: {
    height: 1,
    backgroundColor: '#cccccc',
  }
});
module.exports = MessageList;

