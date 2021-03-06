'use strict';
 
var React = require('react-native');
var utils = require('../utils/utils');
var Reflux = require('reflux');
var Actions = require('../Actions/Actions');
var reactMixin = require('react-mixin');
var buttonStyles = require('../styles/buttonStyles');
var constants = require('tradle-constants');
var Icon = require('react-native-vector-icons/Ionicons');


var {
  View,
  Text,
  TouchableHighlight,
  Component
} = React;
class SwitchIdentity extends Component { 
  render() {
    var resource = this.props.resource;
    return resource[constants.ROOT_HASH] === utils.getMe()[constants.ROOT_HASH]
           ? <View style={[buttonStyles.container]}>
               <TouchableHighlight onPress={this.showIdentities.bind(this)} underlayColor='transparent'>
                 <View style={{alignItems: 'center'}}>                 
                   <Icon name='arrow-swap'  size={25}  color='#ffffff'  style={buttonStyles.icon}/>
                   <Text style={buttonStyles.text}>Switch Identity</Text>
                 </View>
               </TouchableHighlight>
             </View>
           : null;    
  }
  showIdentities() {
    Actions.showIdentityList(utils.getMe());
  }
}
reactMixin(SwitchIdentity.prototype, Reflux.ListenerMixin);

module.exports = SwitchIdentity;