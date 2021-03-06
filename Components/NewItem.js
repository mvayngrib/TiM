'use strict';
 
var React = require('react-native');
var t = require('tcomb-form-native');
var utils = require('../utils/utils');
var extend = require('extend');
var logError = require('logError');
var SelectPhotoList = require('./SelectPhotoList');
var myStyles = require('../styles/styles');
var constants = require('tradle-constants');

var Form = t.form.Form;
Form.stylesheet = myStyles;

var {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Component,
  TouchableHighlight,
} = React;

class NewItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedAssets: {}
    }
    var currentRoutes = this.props.navigator.getCurrentRoutes();
    var currentRoutesLength = currentRoutes.length;
    currentRoutes[currentRoutesLength - 1].onRightButtonPress = {
      stateChange: this.onSavePressed.bind(this)
    };
  }
  onSavePressed() {
    var value = this.refs.form.getValue();
    if (!value)
      return;
    var propName = this.props.metadata.name;
    var item = JSON.parse(JSON.stringify(value));
    if (!this.validateValues(this.props.metadata, item)) 
      return;
    
    // if (this.props.metadata.items.backlink) 
    //   item[this.props.metadata.items.backlink] = this.props.resource[constants.TYPE] + '_' + this.props.resource[constants.ROOT_HASH];
    
    if (utils.isEmpty(this.state.selectedAssets)) 
      this.props.onAddItem(propName, item);
    else {
      for (var assetUri in this.state.selectedAssets) {
        var newItem = {};
        extend(newItem, item);
        newItem = {url: assetUri, title: 'photo'};
        this.props.onAddItem(propName, newItem);    
      }
    }
    this.props.navigator.pop();
  }
  validateValues(prop, item) {
    var required = prop.required;
    var hasError;
    this.state.options = {
      fields: {}
    };
    if (required) {
      for (var p of required)
        if (!item[p]  &&  prop.name == 'photos') {
          if (!utils.isEmpty(this.state.selectedAssets)) 
            continue;
          hasError = true;
          this.setState({err: 'Select the photo please'});
        }
    }
    if (!hasError)
      this.state.options = null;
    return !hasError;
  }
  addItem() {
    var propName = this.props.metadata.name;
    var json = JSON.parse(JSON.stringify(value));
    this.props.onAddItem(propName, json);    
    return true;
  }
  render() {
    var props = this.props;
    var parentBG = {backgroundColor: '#7AAAC3'};
    var err = props.err || this.state.err || '';
    var errStyle = err ? styles.err : {'padding': 0, 'height': 0};
    var error = err
              ? <Text style={errStyle}>{err}</Text>
              : <View />


    var meta =  props.metadata;
    var model = {};
    var params = {
        meta: meta,
        model: model,
        onSubmitEditing: this.onSavePressed.bind(this)
    };
    
    var options = utils.getFormFields(params);
    var Model = t.struct(model);
    if (this.state.options) {
      for (var fieldName in this.state.options.fields) {
        var fields = this.state.options.fields[fieldName]
        for (var f in fields) {
          options.fields[fieldName][f] = fields[f];
        }
      }
    }

    return (
      <View style={styles.container}>
        <View style={{padding: 15, marginBottom: 15 }}>
          <Form ref='form' type={Model} options={options} />
        </View>
        {error}
        <SelectPhotoList style={{marginTop: -40}}
          metadata={this.props.metadata} 
          navigator={this.props.navigator} 
          onSelect={this.onSelect.bind(this)} />
      </View>
    );
  }
  onSelect(asset) {    
    var selectedAssets = this.state.selectedAssets;
    // unselect if was selected before
    if (selectedAssets[asset.node.image.uri])
      delete selectedAssets[asset.node.image.uri];
    else
      selectedAssets[asset.node.image.uri] = asset;
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60
  },
  imageContainer: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    alignSelf: 'center'
  },
  buttons: { 
    flex: 1,
    flexDirection: 'row',
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    alignSelf: 'center',
  },
  button: {
    height: 36,
    width: 100,
    flex: 1,
    backgroundColor: '#ffffff',
    borderColor: '#6093ae',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  err: {
    paddingVertical: 10,
    fontSize: 20,
    color: 'darkred',
  },

});
module.exports = NewItem;

// tryiing to add custom validation of typed props e.g email
    // if (propName == 'contact'  &&  value.type === 'email') {
    //    var validated = /(.)+@(.)+/.test(value);
    //   if (!validate) {
    //      this.setState({
    //         options: {
    //           fields: {
    //             identifier: {
    //               hasError: true,
    //               error: 'Invalid email'
    //             }
    //           }
    //         }
    //     });        
    //     return;
    //   }

    // }
