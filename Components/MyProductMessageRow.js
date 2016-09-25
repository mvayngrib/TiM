'use strict'

var utils = require('../utils/utils');
var translate = utils.translate
var ArticleView = require('./ArticleView');
var NewResource = require('./NewResource');
var Icon = require('react-native-vector-icons/Ionicons');
var constants = require('@tradle/constants');
var RowMixin = require('./RowMixin');
var equal = require('deep-equal')

var reactMixin = require('react-mixin');

const MY_PRODUCT = 'tradle.MyProduct'

import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  Alert,
  Modal,
  Navigator,
  View,
} from 'react-native'

import React, { Component } from 'react'

class MyProductMessageRow extends Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState) {
    return !equal(this.props.resource, nextProps.resource) ||
           !equal(this.props.to, nextProps.to)
  }

  render() {
    var resource = this.props.resource;
    var model = utils.getModel(resource[constants.TYPE] || resource.id).value;
    var renderedRow = [];

    var ret = this.formatRow(false, renderedRow);
    let onPressCall = ret ? ret.onPressCall : null

    let addStyle = [addStyle, styles.verificationBody, {backgroundColor: this.props.bankStyle.PRODUCT_BG_COLOR , borderColor: this.props.bankStyle.CONFIRMATION_COLOR}];
    let rowStyle = [styles.row,  {backgroundColor: this.props.bankStyle.BACKGROUND_COLOR}];
    var val = this.getTime(resource);
    var date = val
             ? <Text style={styles.date} numberOfLines={1}>{val}</Text>
             : <View />;

    // var viewStyle = {flexDirection: 'row', alignSelf: 'flex-start', width: DeviceWidth - 50};

    var hdrStyle = {backgroundColor: '#289427'} //this.props.bankStyle.PRODUCT_BG_COLOR ? {backgroundColor: this.props.bankStyle.PRODUCT_BG_COLOR} : {backgroundColor: '#289427'}
    var orgName = resource.from.organization  ? resource.from.organization.title : ''
    renderedRow.splice(0, 0, <View  key={this.getNextKey()} style={[styles.verifiedHeader, hdrStyle, {marginHorizontal: -8, marginTop: -7, marginBottom: 7, paddingBottom: 5}]}>
                       <Text style={{fontSize: 17, alignSelf: 'center', color: '#fff'}}>{translate('issuedBy', orgName)}</Text>
                    </View>
                    );
    let title = translate(model)
    if (title.length > 30)
      title = title.substring(0, 27) + '...'

    renderedRow.push(<Text  key={this.getNextKey()} style={[styles.formType, {color: '#289427'}]}>{title}</Text>);
    rowStyle = addStyle ? [styles.textContainer, addStyle] : styles.textContainer

    let messageBody =
      <TouchableHighlight onPress={onPressCall ? onPressCall : () => {}} underlayColor='transparent'>
        <View style={[styles.viewStyle, {marginRight: 50}]}>
          {this.getOwnerPhoto()}
          <View style={rowStyle}>
            <View style={{flex: 1}}>
              {renderedRow}
           </View>
          </View>
        </View>
      </TouchableHighlight>


    var viewStyle = { margin: 1, paddingTop: 7} //, backgroundColor: this.props.bankStyle.BACKGROUND_COLOR }
    return (
      <View style={viewStyle} key={this.getNextKey()}>
        {date}
        {messageBody}
      </View>
    );
  }

  onPress(event) {
    this.props.navigator.push({
      id: 7,
      component: ArticleView,
      passProps: {url: this.props.resource.message}
    });
  }

  formatRow(isMyMessage, renderedRow) {
    var resource = this.props.resource;
    var model = utils.getModel(resource[constants.TYPE] || resource.id).value;

    var viewCols = model.gridCols || model.viewCols;
    if (!viewCols)
      return
    var first = true;
    var self = this;

    var properties = model.properties;
    var noMessage = !resource.message  ||  !resource.message.length;
    var onPressCall;

    var cnt = 0;
    var self = this

    var vCols = [];
    viewCols.forEach(function(v) {
      if (properties[v].type === 'array'  ||  properties[v].type === 'date')
        return;

      if (properties[v].ref) {
        if (resource[v]) {
          vCols.push(self.getPropRow(properties[v], resource, resource[v].title || resource[v]))
          first = false;
        }
        return;
      }
      var style = styles.description; //resourceTitle; //(first) ? styles.resourceTitle : styles.description;
      if (isMyMessage)
        style = [style, {justifyContent: 'flex-end', color: '#2892C6'}];

      if (resource[v]                      &&
          properties[v].type === 'string'  &&
          (resource[v].indexOf('http://') == 0  ||  resource[v].indexOf('https://') == 0)) {
        onPressCall = self.onPress.bind(self);
        vCols.push(<Text style={style} numberOfLines={first ? 2 : 1} key={self.getNextKey()}>{resource[v]}</Text>);
      }
      else if (!model.autoCreate) {
        var val = (properties[v].displayAs)
                ? utils.templateIt(properties[v], resource)
                : properties[v].type === 'boolean' ? (resource[v] ? 'Yes' : 'No') : resource[v];

        if (!val)
          return
        if (model.properties.verifications  &&  !isMyMessage)
          onPressCall = self.verify.bind(self);
        if (!isMyMessage)
          style = [style, {paddingBottom: 10, color: '#2892C6'}];
        vCols.push(self.getPropRow(properties[v], resource, val))
      }
      else {
        if (!resource[v]  ||  !resource[v].length)
          return
        isConfirmation = resource[v].indexOf('Congratulations!') !== -1

        if (isConfirmation) {
          style = [style, {color: self.props.bankStyle.CONFIRMATION_COLOR, fontSize: 17}]
          vCols.push(
            <View key={self.getNextKey()}>
              <Text style={[style]}>{resource[v]}</Text>
              <Icon style={[{color: self.props.bankStyle.CONFIRMATION_COLOR, alignSelf: 'flex-end', width: 50, height: 50, marginTop: -45, opacity: 0.2}]} size={50} name={'ios-flower'} />
              <Icon style={{color: self.props.bankStyle.CONFIRMATION_COLOR, alignSelf: 'flex-end', marginTop: -10}} size={30} name={'ios-done-all'} />
            </View>
          );

        }
        else
          vCols.push(<Text style={style} key={self.getNextKey()}>{resource[v]}</Text>);
      }
      first = false;

    });
    if (vCols  &&  vCols.length) {
      vCols.forEach(function(v) {
        renderedRow.push(v);
      })
    }
    if (onPressCall)
      return {onPressCall: onPressCall}
    return {onPressCall: this.props.onSelect.bind(this, resource, null)}
  }
}

var styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  date: {
    flex: 1,
    color: '#999999',
    fontSize: 12,
    alignSelf: 'center',
    paddingTop: 10
  },
  row: {
    backgroundColor: '#f7f7f7',
    flexDirection: 'row',
  },
  description: {
    // flexWrap: 'wrap',
    color: '#757575',
    fontSize: 14,
  },
  formType: {
    color: '#EBFCFF',
    fontSize: 20,
    fontWeight: '600',
    opacity: 0.5,
    alignSelf: 'flex-end',
    marginTop: 10
  },
  verifiedHeader: {
    flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: 7,
    marginHorizontal: -8,
    marginTop: -6,
    justifyContent: 'center'
  },
  verificationBody: {
    paddingVertical: 5,
    paddingHorizontal: 7,
    borderRadius: 10,
    borderWidth: 1,
    marginVertical: 2
  },
  viewStyle: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
  }
});
reactMixin(MyProductMessageRow.prototype, RowMixin);

module.exports = MyProductMessageRow;
