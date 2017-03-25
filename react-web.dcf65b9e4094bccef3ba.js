webpackJsonp([3,7],Array(300).concat([
/* 300 */
/***/ function(module, exports, __webpack_require__) {

	
	
	'use strict';
	Object.defineProperty(exports, "__esModule", { value: true });exports.processColor = exports.Platform = exports.NativeModules = exports.AppState = exports.NetInfo = exports.StyleSheet = exports.PixelRatio = exports.PanResponder = exports.LayoutAnimation = exports.InteractionManager = exports.Easing = exports.Dimensions = exports.AsyncStorage = exports.AppRegistry = exports.Animated = exports.AlertIOS = exports.Alert = exports.ViewPager = exports.ViewPagerAndroid = exports.View = exports.RefreshControl = exports.TouchableBounce = exports.TouchableWithoutFeedback = exports.TouchableOpacity = exports.TouchableHighlight = exports.Touchable = exports.Toast = exports.ToastAndroid = exports.TextInput = exports.Text = exports.TabBarIOS = exports.SwitchIOS = exports.SwitchAndroid = exports.StatusBar = exports.Switch = exports.SliderIOS = exports.SegmentedControlIOS = exports.ScrollView = exports.ProgressViewIOS = exports.Picker = exports.PickerIOS = exports.Navigator = exports.Modal = exports.Linking = exports.ListView = exports.Image = exports.DrawerLayoutAndroid = exports.ActivityIndicator = exports.ActivityIndicatorIOS = undefined;
	
	var _react = __webpack_require__(301);
	
	Object.keys(_react).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;Object.defineProperty(exports, key, { enumerable: true, get: function get() {
	      return _react[key];
	    } });
	});var _react2 = _interopRequireDefault(_react);var _ReactStyleSheet = __webpack_require__(333);var _ReactStyleSheet2 = _interopRequireDefault(_ReactStyleSheet);var _ReactActivityIndicator = __webpack_require__(342);var _ReactActivityIndicator2 = _interopRequireDefault(_ReactActivityIndicator);var _ReactDrawerLayout = __webpack_require__(495);var _ReactDrawerLayout2 = _interopRequireDefault(_ReactDrawerLayout);var _ReactImage = __webpack_require__(580);var _ReactImage2 = _interopRequireDefault(_ReactImage);var _ReactListView = __webpack_require__(595);var _ReactListView2 = _interopRequireDefault(_ReactListView);var _ReactLinking = __webpack_require__(606);var _ReactLinking2 = _interopRequireDefault(_ReactLinking);var _ReactModal = __webpack_require__(607);var _ReactModal2 = _interopRequireDefault(_ReactModal);var _ReactNavigator = __webpack_require__(608);var _ReactNavigator2 = _interopRequireDefault(_ReactNavigator);var _ReactPicker = __webpack_require__(719);var _ReactPicker2 = _interopRequireDefault(_ReactPicker);var _ReactProgressView = __webpack_require__(720);var _ReactProgressView2 = _interopRequireDefault(_ReactProgressView);var _ReactScrollView = __webpack_require__(600);var _ReactScrollView2 = _interopRequireDefault(_ReactScrollView);var _ReactSegmentedControl = __webpack_require__(721);var _ReactSegmentedControl2 = _interopRequireDefault(_ReactSegmentedControl);var _ReactSlider = __webpack_require__(722);var _ReactSlider2 = _interopRequireDefault(_ReactSlider);var _ReactSwitch = __webpack_require__(723);var _ReactSwitch2 = _interopRequireDefault(_ReactSwitch);var _ReactStatusBar = __webpack_require__(724);var _ReactStatusBar2 = _interopRequireDefault(_ReactStatusBar);var _ReactTabBar = __webpack_require__(725);var _ReactTabBar2 = _interopRequireDefault(_ReactTabBar);var _ReactText = __webpack_require__(584);var _ReactText2 = _interopRequireDefault(_ReactText);var _ReactTextInput = __webpack_require__(728);var _ReactTextInput2 = _interopRequireDefault(_ReactTextInput);var _ReactToast = __webpack_require__(729);var _ReactToast2 = _interopRequireDefault(_ReactToast);var _ReactTouchable = __webpack_require__(585);var _ReactTouchable2 = _interopRequireDefault(_ReactTouchable);var _ReactTouchableHighlight = __webpack_require__(731);var _ReactTouchableHighlight2 = _interopRequireDefault(_ReactTouchableHighlight);var _ReactTouchableOpacity = __webpack_require__(733);var _ReactTouchableOpacity2 = _interopRequireDefault(_ReactTouchableOpacity);var _ReactTouchableWithoutFeedback = __webpack_require__(732);var _ReactTouchableWithoutFeedback2 = _interopRequireDefault(_ReactTouchableWithoutFeedback);var _ReactTouchableBounce = __webpack_require__(734);var _ReactTouchableBounce2 = _interopRequireDefault(_ReactTouchableBounce);var _ReactRefreshControl = __webpack_require__(735);var _ReactRefreshControl2 = _interopRequireDefault(_ReactRefreshControl);var _ReactView = __webpack_require__(343);var _ReactView2 = _interopRequireDefault(_ReactView);var _ReactViewPager = __webpack_require__(736);var _ReactViewPager2 = _interopRequireDefault(_ReactViewPager);var _ReactAlert = __webpack_require__(738);var _ReactAlert2 = _interopRequireDefault(_ReactAlert);var _ReactAnimated = __webpack_require__(496);var _ReactAnimated2 = _interopRequireDefault(_ReactAnimated);var _ReactAppRegistry = __webpack_require__(739);var _ReactAppRegistry2 = _interopRequireDefault(_ReactAppRegistry);var _ReactAsyncStorage = __webpack_require__(741);var _ReactAsyncStorage2 = _interopRequireDefault(_ReactAsyncStorage);var _ReactDimensions = __webpack_require__(594);var _ReactDimensions2 = _interopRequireDefault(_ReactDimensions);var _Easing2 = __webpack_require__(567);var _Easing3 = _interopRequireDefault(_Easing2);var _ReactInteractionManager = __webpack_require__(747);var _ReactInteractionManager2 = _interopRequireDefault(_ReactInteractionManager);var _ReactLayoutAnimation = __webpack_require__(748);var _ReactLayoutAnimation2 = _interopRequireDefault(_ReactLayoutAnimation);var _ReactPanResponder = __webpack_require__(587);var _ReactPanResponder2 = _interopRequireDefault(_ReactPanResponder);var _ReactPixelRatio = __webpack_require__(698);var _ReactPixelRatio2 = _interopRequireDefault(_ReactPixelRatio);var _ReactNetInfo = __webpack_require__(749);var _ReactNetInfo2 = _interopRequireDefault(_ReactNetInfo);var _ReactAppState = __webpack_require__(751);var _ReactAppState2 = _interopRequireDefault(_ReactAppState);var _ReactNativeModules = __webpack_require__(752);var _ReactNativeModules2 = _interopRequireDefault(_ReactNativeModules);var _ReactPlatform = __webpack_require__(695);var _ReactPlatform2 = _interopRequireDefault(_ReactPlatform);var _ReactProcessColor = __webpack_require__(753);var _ReactProcessColor2 = _interopRequireDefault(_ReactProcessColor);function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}(0, _ReactStyleSheet.extendCreateElement)(_react2.default);exports.ActivityIndicatorIOS = _ReactActivityIndicator2.default;exports.ActivityIndicator = _ReactActivityIndicator2.default;exports.DrawerLayoutAndroid = _ReactDrawerLayout2.default;exports.Image = _ReactImage2.default;exports.ListView = _ReactListView2.default;exports.Linking = _ReactLinking2.default;exports.Modal = _ReactModal2.default;exports.Navigator = _ReactNavigator2.default;exports.PickerIOS = _ReactPicker2.default;exports.Picker = _ReactPicker2.default;exports.ProgressViewIOS = _ReactProgressView2.default;exports.ScrollView = _ReactScrollView2.default;exports.SegmentedControlIOS = _ReactSegmentedControl2.default;exports.SliderIOS = _ReactSlider2.default;exports.Switch = _ReactSwitch2.default;exports.StatusBar = _ReactStatusBar2.default;exports.SwitchAndroid = _ReactSwitch2.default;exports.SwitchIOS = _ReactSwitch2.default;exports.TabBarIOS = _ReactTabBar2.default;exports.Text = _ReactText2.default;exports.TextInput = _ReactTextInput2.default;exports.ToastAndroid = _ReactToast2.default;exports.Toast = _ReactToast2.default;exports.Touchable = _ReactTouchable2.default;exports.TouchableHighlight = _ReactTouchableHighlight2.default;exports.TouchableOpacity = _ReactTouchableOpacity2.default;exports.TouchableWithoutFeedback = _ReactTouchableWithoutFeedback2.default;exports.TouchableBounce = _ReactTouchableBounce2.default;exports.RefreshControl = _ReactRefreshControl2.default;exports.View = _ReactView2.default;exports.ViewPagerAndroid = _ReactViewPager2.default;exports.ViewPager = _ReactViewPager2.default;exports.Alert = _ReactAlert2.default;exports.AlertIOS = _ReactAlert2.default;exports.Animated = _ReactAnimated2.default;exports.AppRegistry = _ReactAppRegistry2.default;exports.AsyncStorage = _ReactAsyncStorage2.default;exports.Dimensions = _ReactDimensions2.default;exports.Easing = _Easing3.default;exports.InteractionManager = _ReactInteractionManager2.default;exports.LayoutAnimation = _ReactLayoutAnimation2.default;exports.PanResponder = _ReactPanResponder2.default;exports.PixelRatio = _ReactPixelRatio2.default;exports.StyleSheet = _ReactStyleSheet2.default;exports.NetInfo = _ReactNetInfo2.default;exports.AppState = _ReactAppState2.default;exports.NativeModules = _ReactNativeModules2.default;exports.Platform = _ReactPlatform2.default;exports.processColor = _ReactProcessColor2.default;exports.default = module.exports;

/***/ },
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */
/***/ function(module, exports, __webpack_require__) {

	
	
	'use strict';
	
	var _extendProperties = __webpack_require__(334);var _extendProperties2 = _interopRequireDefault(_extendProperties);
	var _reference = __webpack_require__(338);var _reference2 = _interopRequireDefault(_reference);
	var _setDefaultStyle = __webpack_require__(339);var _setDefaultStyle2 = _interopRequireDefault(_setDefaultStyle);
	
	var _extendCreateElement2 = __webpack_require__(340);var _extendCreateElement3 = _interopRequireDefault(_extendCreateElement2);
	var _flattenStyle = __webpack_require__(341);var _flattenStyle2 = _interopRequireDefault(_flattenStyle);function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	var inited = false;
	
	var ROOT_CLASS_NAME = 'react-root';
	var VIEW_CLASS_NAME = 'react-view';
	
	var StyleSheet = {
	  hairlineWidth: 1,
	  create: function create(styles) {
	    return styles;
	  },
	  extendCreateElement: function extendCreateElement(React, nativeComponents) {
	    (0, _extendCreateElement3.default)(React, function (style) {
	      if (!inited) {
	        inited = true;
	        (0, _setDefaultStyle2.default)({
	          reference: _reference2.default.getWidth(),
	          rootClassName: ROOT_CLASS_NAME,
	          viewClassName: VIEW_CLASS_NAME });
	      }
	
	      return (0, _flattenStyle2.default)(style, _extendProperties2.default);
	    }, nativeComponents);
	  },
	  setReferenceWidth: _reference2.default.setWidth,
	  rootClassName: ROOT_CLASS_NAME,
	  viewClassName: VIEW_CLASS_NAME,
	  flatten: _flattenStyle2.default };
	
	module.exports = StyleSheet;

/***/ },
/* 334 */
/***/ function(module, exports, __webpack_require__) {

	
	
	
	
	
	'use strict';
	
	var _getVendorPropertyName=__webpack_require__(335);var _getVendorPropertyName2=_interopRequireDefault(_getVendorPropertyName);
	var _CSSProperty=__webpack_require__(337);var _CSSProperty2=_interopRequireDefault(_CSSProperty);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
	
	var shorthandProperties={
	margin:true,
	padding:true,
	borderWidth:true,
	borderRadius:true};
	
	
	
	var numberProperties={
	lineHeight:true};
	
	
	var boxProperties={
	paddingHorizontal:true,
	paddingVertical:true,
	marginHorizontal:true,
	marginVertical:true};
	
	
	var borderProperties={
	borderColor:true,
	borderWidth:true,
	borderTopColor:true,
	borderRightColor:true,
	borderBottomColor:true,
	borderLeftColor:true,
	borderTopWidth:true,
	borderRightWidth:true,
	borderBottomWidth:true,
	borderLeftWidth:true};
	
	
	
	var flexboxProperties={
	flex:'WebkitBoxFlex',
	order:'WebkitBoxOrdinalGroup',
	
	flexDirection:'WebkitBoxOrient',
	
	alignItems:'WebkitBoxAlign',
	
	justifyContent:'WebkitBoxPack',
	flexWrap:null,
	alignSelf:null};
	
	
	var oldFlexboxValues={
	'flex-end':'end',
	'flex-start':'start',
	'space-between':'justify',
	'space-around':'distribute'};
	
	
	var builtinStyle=document.createElement('div').style;
	var flexboxSpec;
	if('alignSelf'in builtinStyle)flexboxSpec='final';else
	if('webkitAlignSelf'in builtinStyle)flexboxSpec='finalVendor';else
	flexboxSpec='2009';
	
	
	var isUCBrowser=/UCBrowser/i.test(navigator.userAgent);
	if(isUCBrowser)flexboxSpec='2009';
	
	var isIE=/Trident/i.test(navigator.userAgent);
	var isSafari=
	navigator.userAgent.indexOf('Safari')!==-1&&
	navigator.userAgent.indexOf('Chrome')===-1;
	
	var FLEX_AUTO='1 1 auto';
	var FLEX_INITIAL='0 1 auto';
	var DEFAULT_BASIS=isIE||isSafari?'auto':'0%';
	var DEFAULT_SHRINK=isSafari?'0':'1';
	
	
	function prefixOldFlexbox(property,value,result){
	
	if(flexboxSpec==='2009'){
	var oldValue=oldFlexboxValues[value]||value;
	var oldProperty=flexboxProperties[property]||property;
	if(oldProperty==='WebkitBoxOrient'){
	
	if(value.indexOf('row')!=-1){
	oldValue='horizontal';
	}else{
	oldValue='vertical';
	}
	
	var dir='';
	if(value.indexOf('reverse')!=-1){
	dir='reverse';
	}else{
	dir='normal';
	}
	result.WebkitBoxDirection=dir;
	}
	return result[oldProperty]=oldValue;
	
	}else if(flexboxSpec==='finalVendor'){
	return result[(0,_getVendorPropertyName2.default)(property)]=value;
	
	}else{
	return result[property]=value;
	
	}
	}
	
	
	
	
	
	
	
	
	function getFlexExpansion(style){
	
	var flex=style.flex;
	if(flex==null){
	if(style.flexGrow==null&&style.flexShrink==null&&style.flexBasis==null){
	return FLEX_INITIAL;
	}
	
	
	var grow=style.flexGrow||'0';
	var shrink=style.flexShrink||DEFAULT_SHRINK;
	var basis=style.flexBasis||DEFAULT_BASIS;
	return grow+' '+shrink+' '+basis;
	}
	
	
	
	if(!isNaN(flex)){
	return flex+' '+DEFAULT_SHRINK+' '+DEFAULT_BASIS;
	}
	
	
	if(flex==='auto'){
	return FLEX_AUTO;
	}else if(flex==='initial'){
	return FLEX_INITIAL;
	}
	
	
	return flex;
	}
	
	function defaultFlexExpansion(style,result){
	result.flex=getFlexExpansion(style);
	}
	
	function extendBoxProperties(property,value,result){
	var padding='padding';
	var margin='margin';
	var horizontal='Horizontal';
	var vertical='Vertical';
	var type=property.indexOf(margin)==0?margin:padding;
	var directionType=property.indexOf(vertical)!==-1?vertical:horizontal;
	
	if(directionType==horizontal){
	result[type+'Left']=result[type+'Right']=value;
	}else if(directionType==vertical){
	result[type+'Top']=result[type+'Bottom']=value;
	}
	}
	
	function isValidValue(value){
	return value!==''&&value!==null&&value!==undefined;
	}
	
	function processValueForProp(value,prop){
	
	if(typeof value=='number'){
	
	if(!_CSSProperty2.default.isUnitlessNumber[prop]&&value>0&&value<1){
	value=1;
	}
	
	
	if(numberProperties[prop]&&typeof value=='number'){
	value+='px';
	}
	}
	
	
	
	
	
	
	if(shorthandProperties[prop]&&typeof value=='string'){
	value=value.replace(/\d*\.?\d+(rem|em|in|cm|mm|pt|pc|px|vh|vw|vmin|vmax|%)*/g,function(val,unit){
	return unit?val:val+'px';
	});
	}
	
	return value;
	}
	
	function defaultBorderStyle(style,result){
	if(!style.borderStyle&&!result.borderStyle){
	result.borderStyle='solid';
	}
	
	if(!style.borderWidth&&!result.borderWidth){
	result.borderWidth=0;
	}
	
	if(!style.borderColor&&!result.borderColor){
	result.borderColor='black';
	}
	}
	
	function extendProperties(style){
	var result={};
	
	for(var property in style){
	var value=style[property];
	if(!isValidValue(value)){
	continue;
	}
	
	if(borderProperties[property]){
	defaultBorderStyle(style,result);
	}
	
	if(boxProperties[property]){
	extendBoxProperties(property,value,result);
	}else if(flexboxProperties[property]){
	prefixOldFlexbox(property,value,result);
	if(property==='flex'){
	defaultFlexExpansion(style,result);
	}
	}else{
	value=processValueForProp(value,property);
	property=(0,_getVendorPropertyName2.default)(property);
	result[property]=value;
	}
	}
	
	return result;
	}
	
	module.exports=extendProperties;


/***/ },
/* 335 */,
/* 336 */,
/* 337 */
/***/ function(module, exports) {

	
	
	'use strict';
	
	var isUnitlessNumber = {
	  animationIterationCount: true,
	  boxFlex: true,
	  boxFlexGroup: true,
	  boxOrdinalGroup: true,
	  columnCount: true,
	  flex: true,
	  flexGrow: true,
	  flexPositive: true,
	  flexShrink: true,
	  flexNegative: true,
	  flexOrder: true,
	  fontWeight: true,
	  lineClamp: true,
	  lineHeight: true,
	  opacity: true,
	  order: true,
	  orphans: true,
	  tabSize: true,
	  widows: true,
	  zIndex: true,
	  zoom: true,
	
	  fillOpacity: true,
	  stopOpacity: true,
	  strokeDashoffset: true,
	  strokeOpacity: true,
	  strokeWidth: true };
	
	function prefixKey(prefix, key) {
	  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
	}
	
	var prefixes = ['Webkit', 'ms', 'Moz', 'O'];
	
	Object.keys(isUnitlessNumber).forEach(function (prop) {
	  prefixes.forEach(function (prefix) {
	    isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
	  });
	});
	
	var shorthandPropertyExpansions = {
	  background: {
	    backgroundAttachment: true,
	    backgroundColor: true,
	    backgroundImage: true,
	    backgroundPositionX: true,
	    backgroundPositionY: true,
	    backgroundRepeat: true },
	
	  backgroundPosition: {
	    backgroundPositionX: true,
	    backgroundPositionY: true },
	
	  border: {
	    borderWidth: true,
	    borderStyle: true,
	    borderColor: true },
	
	  borderBottom: {
	    borderBottomWidth: true,
	    borderBottomStyle: true,
	    borderBottomColor: true },
	
	  borderLeft: {
	    borderLeftWidth: true,
	    borderLeftStyle: true,
	    borderLeftColor: true },
	
	  borderRight: {
	    borderRightWidth: true,
	    borderRightStyle: true,
	    borderRightColor: true },
	
	  borderTop: {
	    borderTopWidth: true,
	    borderTopStyle: true,
	    borderTopColor: true },
	
	  font: {
	    fontStyle: true,
	    fontVariant: true,
	    fontWeight: true,
	    fontSize: true,
	    lineHeight: true,
	    fontFamily: true },
	
	  outline: {
	    outlineWidth: true,
	    outlineStyle: true,
	    outlineColor: true } };
	
	var CSSProperty = {
	  isUnitlessNumber: isUnitlessNumber,
	  shorthandPropertyExpansions: shorthandPropertyExpansions };
	
	module.exports = CSSProperty;

/***/ },
/* 338 */
/***/ function(module, exports) {

	
	
	'use strict';
	
	var referenceWidth = 750 / 100;
	
	module.exports = {
	  setWidth: function setWidth(width) {
	    referenceWidth = width;
	  },
	  getWidth: function getWidth() {
	    return referenceWidth;
	  } };

/***/ },
/* 339 */
/***/ function(module, exports) {

	
	
	'use strict';
	
	function appendSytle(_ref) {
	  var reference = _ref.reference;var rootClassName = _ref.rootClassName;var viewClassName = _ref.viewClassName;
	
	  var docEl = document.documentElement;
	  var styleEl = document.createElement('style');
	  docEl.firstElementChild.appendChild(styleEl);
	  var rem = docEl.clientWidth / reference;
	
	  var boxStyle = '\n  box-sizing: border-box;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  ';
	
	  styleEl.innerHTML = '\n  html {\n    font-size: ' + rem + 'px!important;\n  }\n  body {\n    font-size: 14px;\n    margin: 0;\n  }\n  .' + rootClassName + ' {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    overflow: hidden;\n  }\n  .' + rootClassName + ' > .' + viewClassName + ' {\n    height: 100%;\n  }\n  .' + rootClassName + ' .' + viewClassName + ' {\n    position: relative;\n    ' + boxStyle + '\n  }\n  ';
	}
	
	function setDefaultStyle(options) {
	  var metaEl = document.querySelector('meta[name="viewport"]');
	  if (!metaEl) {
	    return console.warn('Viewport meta not set');
	  }
	
	  window.addEventListener('resize', function () {
	    appendSytle(options);
	  }, false);
	
	  appendSytle(options);
	}
	
	module.exports = setDefaultStyle;

/***/ },
/* 340 */
/***/ function(module, exports) {

	
	
	
	
	
	'use strict';
	
	function extendCreateElement(React,processor){
	var originalCreateElement=React.createElement;
	React.createElement=function(type,props){
	var args=arguments;
	
	if(
	props&&props.style&&(
	Array.isArray(props.style)||typeof props.style==='object')&&
	type.isReactNativeComponent)
	
	{
	var style=processor(props.style);
	
	var target={};
	for(var key in props){
	if(Object.prototype.hasOwnProperty.call(props,key)){
	target[key]=props[key];
	}
	}
	target.style=style;
	props=target;
	}
	
	return originalCreateElement.apply(this,[type,props].concat(Array.prototype.slice.call(args,2)));
	};
	}
	
	module.exports=extendCreateElement;


/***/ },
/* 341 */
/***/ function(module, exports) {

	
	
	'use strict';
	
	function flattenStyle(style, processor) {
	  if (!style) {
	    return undefined;
	  }
	
	  if (!Array.isArray(style)) {
	    return processor && processor(style) || style;
	  } else {
	
	    var result = {};
	    for (var i = 0; i < style.length; ++i) {
	      var computedStyle = flattenStyle(style[i]);
	      if (computedStyle) {
	        for (var key in computedStyle) {
	          result[key] = computedStyle[key];
	        }
	      }
	    }
	
	    return processor && processor(result) || result;;
	  }
	}
	
	module.exports = flattenStyle;

/***/ },
/* 342 */
/***/ function(module, exports, __webpack_require__) {

	
	
	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _react = __webpack_require__(301);var _react2 = _interopRequireDefault(_react);
	var _ReactView = __webpack_require__(343);var _ReactView2 = _interopRequireDefault(_ReactView);
	var _ReactStyleSheet = __webpack_require__(333);var _ReactStyleSheet2 = _interopRequireDefault(_ReactStyleSheet);
	var _appendVendorPrefix = __webpack_require__(487);var _appendVendorPrefix2 = _interopRequireDefault(_appendVendorPrefix);
	var _insertKeyframesRule = __webpack_require__(488);var _insertKeyframesRule2 = _interopRequireDefault(_insertKeyframesRule);
	var _NativeMethodsMixin = __webpack_require__(484);
	var _reactMixin = __webpack_require__(491);var _reactMixin2 = _interopRequireDefault(_reactMixin);
	var _autobindDecorator = __webpack_require__(494);var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var keyframes = {
	  '50%': {
	    opacity: 0.3 },
	
	  '100%': {
	    opacity: 1 } };
	
	var GRAY = '#999999';
	
	var animationName = (0, _insertKeyframesRule2.default)(keyframes);var ActivityIndicator = function (_Component) {
	  _inherits(ActivityIndicator, _Component);function ActivityIndicator() {
	    _classCallCheck(this, ActivityIndicator);return _possibleConstructorReturn(this, (ActivityIndicator.__proto__ || Object.getPrototypeOf(ActivityIndicator)).apply(this, arguments));
	  }_createClass(ActivityIndicator, [{ key: 'getAnimationStyle', value: function getAnimationStyle(i) {
	      var animation = [animationName, '1.2s', i * 0.12 + 's', 'infinite', 'ease-in-out'].join(' ');
	      var animationFillMode = 'both';
	
	      return {
	        animation: animation,
	        animationFillMode: animationFillMode };
	    } }, { key: 'getLineStyle', value: function getLineStyle(i, lines) {
	      return {
	        backgroundColor: this.props.color,
	        position: 'absolute',
	
	        top: -3,
	        left: -1,
	        transform: 'rotate(' + ~~(360 / lines * i) + 'deg) translate(0, -' + (this.props.size === 'large' ? 12 : 7) + 'px)' };
	    } }, { key: 'getStyle', value: function getStyle(i, lines) {
	      var sizeLineStyle = this.props.size === 'large' ? styles.sizeLargeLine : styles.sizeSmallLine;
	      return (0, _appendVendorPrefix2.default)(this.getAnimationStyle(i), this.getLineStyle(i, lines), sizeLineStyle);
	    } }, { key: 'render', value: function render() {
	      var lines = [];
	      var sizeContainerStyle = this.props.size === 'large' ? styles.sizeLargeContainer : styles.sizeSmallContainer;
	
	      if (this.props.animating) {
	        for (var i = 1; i <= 12; i++) {
	          lines.push(_react2.default.createElement(_ReactView2.default, { key: i, style: this.getStyle(i, 12) }));
	        }
	      }
	
	      return _react2.default.createElement(_ReactView2.default, { style: [styles.container, sizeContainerStyle, this.props.style] }, _react2.default.createElement(_ReactView2.default, null, lines));
	    } }]);return ActivityIndicator;
	}(_react.Component);ActivityIndicator.propTypes = { animating: _react.PropTypes.bool, color: _react.PropTypes.string, size: _react.PropTypes.oneOf(['small', 'large']) };ActivityIndicator.defaultProps = { animating: true, color: GRAY, size: 'small' };
	
	var styles = _ReactStyleSheet2.default.create({
	  container: {
	    position: 'relative',
	    fontSize: 0,
	    alignItems: 'center',
	    justifyContent: 'center' },
	
	  sizeSmallContainer: {
	    width: 20,
	    height: 20 },
	
	  sizeLargeContainer: {
	    width: 36,
	    height: 36 },
	
	  sizeSmallLine: {
	    width: 2,
	    height: 5,
	    borderRadius: 2 },
	
	  sizeLargeLine: {
	    width: 3,
	    height: 9,
	    borderRadius: 3 } });
	
	_reactMixin2.default.onClass(ActivityIndicator, _NativeMethodsMixin.Mixin);
	
	ActivityIndicator.isReactNativeComponent = true;exports.default = ActivityIndicator;

/***/ },
/* 343 */
/***/ function(module, exports, __webpack_require__) {

	
	
	'use strict';
	Object.defineProperty(exports, "__esModule", { value: true });var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};
	
	var _react = __webpack_require__(301);var _react2 = _interopRequireDefault(_react);
	var _ReactStyleSheet = __webpack_require__(333);var _ReactStyleSheet2 = _interopRequireDefault(_ReactStyleSheet);
	var _ReactLayoutMixin = __webpack_require__(344);
	var _NativeMethodsMixin = __webpack_require__(484);function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	var View = _react2.default.createClass({ displayName: 'View',
	  mixins: [_ReactLayoutMixin.Mixin, _NativeMethodsMixin.Mixin],
	
	  propTypes: {
	
	    testID: _react.PropTypes.string,
	
	    onMoveShouldSetResponder: _react.PropTypes.func,
	    onResponderGrant: _react.PropTypes.func,
	    onResponderMove: _react.PropTypes.func,
	    onResponderReject: _react.PropTypes.func,
	    onResponderRelease: _react.PropTypes.func,
	    onResponderTerminate: _react.PropTypes.func,
	    onResponderTerminationRequest: _react.PropTypes.func,
	    onStartShouldSetResponder: _react.PropTypes.func,
	    onStartShouldSetResponderCapture: _react.PropTypes.func,
	
	    onLayout: _react.PropTypes.func,
	
	    pointerEvents: _react.PropTypes.oneOf(['box-none', 'none', 'box-only', 'auto']),
	
	    style: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.array]) },
	
	  render: function render() {
	    return _react2.default.createElement('div', _extends({ className: _ReactStyleSheet2.default.viewClassName }, this.props), this.props.children);
	  } });
	
	View.isReactNativeComponent = true;exports.default = View;

/***/ },
/* 344 */
/***/ function(module, exports, __webpack_require__) {

	
	
	'use strict';
	
	var _react = __webpack_require__(301);var _react2 = _interopRequireDefault(_react);
	var _reactDom = __webpack_require__(345);var _reactDom2 = _interopRequireDefault(_reactDom);
	var _ReactGetLayout = __webpack_require__(483);var _ReactGetLayout2 = _interopRequireDefault(_ReactGetLayout);function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	var LayoutMixin = {
	  getInitialState: function getInitialState() {
	    return { layout: {} };
	  },
	
	  componentDidMount: function componentDidMount() {
	    this.layoutHandle();
	  },
	
	  componentDidUpdate: function componentDidUpdate() {
	    this.layoutHandle();
	  },
	
	  layoutHandle: function layoutHandle() {
	    if (this.props.onLayout) {
	
	      var layout = (0, _ReactGetLayout2.default)(_reactDom2.default.findDOMNode(this));
	      var stateLayout = this.state.layout;
	      if (stateLayout.x !== layout.x || stateLayout.y !== layout.y || stateLayout.width !== layout.width || stateLayout.height !== layout.height) {
	        this.props.onLayout({ nativeEvent: { layout: layout } });
	        this.setState({ layout: layout });
	      }
	    }
	  } };
	
	module.exports = {
	  Mixin: LayoutMixin };

/***/ },
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */,
/* 371 */,
/* 372 */,
/* 373 */,
/* 374 */,
/* 375 */,
/* 376 */,
/* 377 */,
/* 378 */,
/* 379 */,
/* 380 */,
/* 381 */,
/* 382 */,
/* 383 */,
/* 384 */,
/* 385 */,
/* 386 */,
/* 387 */,
/* 388 */,
/* 389 */,
/* 390 */,
/* 391 */,
/* 392 */,
/* 393 */,
/* 394 */,
/* 395 */,
/* 396 */,
/* 397 */,
/* 398 */,
/* 399 */,
/* 400 */,
/* 401 */,
/* 402 */,
/* 403 */,
/* 404 */,
/* 405 */,
/* 406 */,
/* 407 */,
/* 408 */,
/* 409 */,
/* 410 */,
/* 411 */,
/* 412 */,
/* 413 */,
/* 414 */,
/* 415 */,
/* 416 */,
/* 417 */,
/* 418 */,
/* 419 */,
/* 420 */,
/* 421 */,
/* 422 */,
/* 423 */,
/* 424 */,
/* 425 */,
/* 426 */,
/* 427 */,
/* 428 */,
/* 429 */,
/* 430 */,
/* 431 */,
/* 432 */,
/* 433 */,
/* 434 */,
/* 435 */,
/* 436 */,
/* 437 */,
/* 438 */,
/* 439 */,
/* 440 */,
/* 441 */,
/* 442 */,
/* 443 */,
/* 444 */,
/* 445 */,
/* 446 */,
/* 447 */,
/* 448 */,
/* 449 */,
/* 450 */,
/* 451 */,
/* 452 */,
/* 453 */,
/* 454 */,
/* 455 */,
/* 456 */,
/* 457 */,
/* 458 */,
/* 459 */,
/* 460 */,
/* 461 */,
/* 462 */,
/* 463 */,
/* 464 */,
/* 465 */,
/* 466 */,
/* 467 */,
/* 468 */,
/* 469 */,
/* 470 */,
/* 471 */,
/* 472 */,
/* 473 */,
/* 474 */,
/* 475 */,
/* 476 */,
/* 477 */,
/* 478 */,
/* 479 */,
/* 480 */,
/* 481 */,
/* 482 */,
/* 483 */
/***/ function(module, exports) {

	
	
	'use strict';
	
	function getCumulativeOffset(obj) {
	  var left, top;
	  left = top = 0;
	  if (obj.offsetParent) {
	    do {
	      left += obj.offsetLeft;
	      top += obj.offsetTop;
	    } while (obj = obj.offsetParent);
	  }
	  return {
	    x: left,
	    y: top };
	}
	
	function getLayout(element) {
	  var rect = getCumulativeOffset(element);
	  return {
	    x: rect.x,
	    y: rect.y,
	    width: element.offsetWidth,
	    height: element.offsetHeight };
	}
	
	module.exports = getLayout;

/***/ },
/* 484 */
/***/ function(module, exports, __webpack_require__) {

	
	
	'use strict';
	
	var _UIManager = __webpack_require__(485);var _UIManager2 = _interopRequireDefault(_UIManager);
	
	var _reactDom = __webpack_require__(345);var _reactDom2 = _interopRequireDefault(_reactDom);
	var _setNativeProps2 = __webpack_require__(486);var _setNativeProps3 = _interopRequireDefault(_setNativeProps2);function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	var NativeMethodsMixin = {
	
	  measure: function measure(callback) {
	    _UIManager2.default.measure(_reactDom2.default.findDOMNode(this), mountSafeCallback(this, callback));
	  },
	
	  measureLayout: function measureLayout(relativeToNativeNode, onSuccess, onFail) {
	    _UIManager2.default.measureLayout(_reactDom2.default.findDOMNode(this), relativeToNativeNode, mountSafeCallback(this, onFail), mountSafeCallback(this, onSuccess));
	  },
	
	  setNativeProps: function setNativeProps(nativeProps) {
	    (0, _setNativeProps3.default)(_reactDom2.default.findDOMNode(this), nativeProps, this._reactInternalInstance);
	  },
	
	  focus: function focus() {
	    _reactDom2.default.findDOMNode(this).focus();
	  },
	
	  blur: function blur() {
	    _reactDom2.default.findDOMNode(this).blur();
	  } };
	
	var mountSafeCallback = function mountSafeCallback(context, callback) {
	  return function () {
	    if (!callback || context.isMounted && !context.isMounted()) {
	      return;
	    }
	    return callback.apply(context, arguments);
	  };
	};
	
	module.exports = { Mixin: NativeMethodsMixin };

/***/ },
/* 485 */
/***/ function(module, exports) {

	"use strict";
	
	var UIManager = {
	  measure: function measure(ref, callback) {
	    var rect = ref.getBoundingClientRect();
	    callback(0, 0, rect.width, rect.height, rect.left, rect.top);
	  },
	  measureLayout: function measureLayout(ref, relativeTo, errorCallback, callback) {
	    var rect = ref.getBoundingClientRect();
	    var relativeRef = relativeTo.getBoundingClientRect();
	    callback(rect.left - relativeRef.left, rect.top - relativeRef.top, rect.width, rect.height);
	  } };
	
	module.exports = UIManager;

/***/ },
/* 486 */
/***/ function(module, exports, __webpack_require__) {

	
	
	'use strict';
	
	var CSSPropertyOperations = __webpack_require__(408);
	
	var numberTransformProperties = {
	  translateX: true,
	  translateY: true,
	  translateZ: true };
	
	function processTransformValue(value, key) {
	  if (numberTransformProperties[key] && typeof value == 'number') {
	    value += 'px';
	  }
	  return value;
	}
	
	function convertTransform(style) {
	  var result = {};
	  var transform = '';
	  for (var k in style) {
	    if (k === 'transformMatrix') {
	
	      transform += 'matrix3d(' + style[k].join(',') + ') ';
	    }if (k === 'transform') {
	      var value = style[k];
	      if (Array.isArray(value)) {
	
	        var transformations = [];
	        value.forEach(function (transformation) {
	
	          var key = Object.keys(transformation)[0];
	          var val = transformation[key];
	
	          if (Array.isArray(val)) {
	
	            var len = val.length;
	
	            if (key === 'matrix' && len === 16 || key === 'translate' && len === 3) {
	              key += '3d';
	            }
	
	            val = val.map(function (v) {
	              return processTransformValue(v, key);
	            }).join(',');
	          } else {
	            val = processTransformValue(val, key);
	          }
	
	          transformations.push(key + '(' + val + ')');
	        });
	
	        transform += transformations.join(' ');
	      }
	    } else {
	      result[k] = style[k];
	    }
	  }
	
	  if (transform) {
	    result.transform = transform;
	  }
	
	  return result;
	}
	
	function setNativeProps(node, props, component) {
	
	  for (var name in props) {
	    if (name === 'style') {
	      var style = props[name];
	      if ('transformMatrix' in style || 'transform' in style) {
	        style = convertTransform(style);
	      }
	
	      CSSPropertyOperations.setValueForStyles(node, style, component);
	    } else {
	      node.setAttribute(name, props[name]);
	    }
	  }
	}
	
	module.exports = setNativeProps;

/***/ },
/* 487 */,
/* 488 */,
/* 489 */,
/* 490 */,
/* 491 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var mixin = __webpack_require__(492);
	var assign = __webpack_require__(493);
	
	var mixinProto = mixin({
	  // lifecycle stuff is as you'd expect
	  componentDidMount: mixin.MANY,
	  componentWillMount: mixin.MANY,
	  componentWillReceiveProps: mixin.MANY,
	  shouldComponentUpdate: mixin.ONCE,
	  componentWillUpdate: mixin.MANY,
	  componentDidUpdate: mixin.MANY,
	  componentWillUnmount: mixin.MANY,
	  getChildContext: mixin.MANY_MERGED
	});
	
	function setDefaultProps(reactMixin) {
	  var getDefaultProps = reactMixin.getDefaultProps;
	
	  if (getDefaultProps) {
	    reactMixin.defaultProps = getDefaultProps();
	
	    delete reactMixin.getDefaultProps;
	  }
	}
	
	function setInitialState(reactMixin) {
	  var getInitialState = reactMixin.getInitialState;
	  var componentWillMount = reactMixin.componentWillMount;
	
	  function applyInitialState(instance) {
	    var state = instance.state || {};
	    assign(state, getInitialState.call(instance));
	    instance.state = state;
	  }
	
	  if (getInitialState) {
	    if (!componentWillMount) {
	      reactMixin.componentWillMount = function () {
	        applyInitialState(this);
	      };
	    } else {
	      reactMixin.componentWillMount = function () {
	        applyInitialState(this);
	        componentWillMount.call(this);
	      };
	    }
	
	    delete reactMixin.getInitialState;
	  }
	}
	
	function mixinClass(reactClass, reactMixin) {
	  setDefaultProps(reactMixin);
	  setInitialState(reactMixin);
	
	  var prototypeMethods = {};
	  var staticProps = {};
	
	  Object.keys(reactMixin).forEach(function (key) {
	    if (key === 'mixins') {
	      return; // Handled below to ensure proper order regardless of property iteration order
	    }
	    if (key === 'statics') {
	      return; // gets special handling
	    } else if (typeof reactMixin[key] === 'function') {
	      prototypeMethods[key] = reactMixin[key];
	    } else {
	      staticProps[key] = reactMixin[key];
	    }
	  });
	
	  mixinProto(reactClass.prototype, prototypeMethods);
	
	  var mergePropTypes = function mergePropTypes(left, right, key) {
	    if (!left) return right;
	    if (!right) return left;
	
	    var result = {};
	    Object.keys(left).forEach(function (leftKey) {
	      if (!right[leftKey]) {
	        result[leftKey] = left[leftKey];
	      }
	    });
	
	    Object.keys(right).forEach(function (rightKey) {
	      if (left[rightKey]) {
	        result[rightKey] = function checkBothContextTypes() {
	          return right[rightKey].apply(this, arguments) && left[rightKey].apply(this, arguments);
	        };
	      } else {
	        result[rightKey] = right[rightKey];
	      }
	    });
	
	    return result;
	  };
	
	  mixin({
	    childContextTypes: mergePropTypes,
	    contextTypes: mergePropTypes,
	    propTypes: mixin.MANY_MERGED_LOOSE,
	    defaultProps: mixin.MANY_MERGED_LOOSE
	  })(reactClass, staticProps);
	
	  // statics is a special case because it merges directly onto the class
	  if (reactMixin.statics) {
	    Object.getOwnPropertyNames(reactMixin.statics).forEach(function (key) {
	      var left = reactClass[key];
	      var right = reactMixin.statics[key];
	
	      if (left !== undefined && right !== undefined) {
	        throw new TypeError('Cannot mixin statics because statics.' + key + ' and Component.' + key + ' are defined.');
	      }
	
	      reactClass[key] = left !== undefined ? left : right;
	    });
	  }
	
	  // If more mixins are defined, they need to run. This emulate's react's behavior.
	  // See behavior in code at:
	  // https://github.com/facebook/react/blob/41aa3496aa632634f650edbe10d617799922d265/src/isomorphic/classic/class/ReactClass.js#L468
	  // Note the .reverse(). In React, a fresh constructor is created, then all mixins are mixed in recursively,
	  // then the actual spec is mixed in last.
	  //
	  // With ES6 classes, the properties are already there, so smart-mixin mixes functions (a, b) -> b()a(), which is
	  // the opposite of how React does it. If we reverse this array, we basically do the whole logic in reverse,
	  // which makes the result the same. See the test for more.
	  // See also:
	  // https://github.com/facebook/react/blob/41aa3496aa632634f650edbe10d617799922d265/src/isomorphic/classic/class/ReactClass.js#L853
	  if (reactMixin.mixins) {
	    reactMixin.mixins.reverse().forEach(mixinClass.bind(null, reactClass));
	  }
	
	  return reactClass;
	}
	
	module.exports = function () {
	  var reactMixin = mixinProto;
	
	  reactMixin.onClass = function (reactClass, mixin) {
	    return mixinClass(reactClass, mixin);
	  };
	
	  reactMixin.decorate = function (mixin) {
	    return function (reactClass) {
	      return reactMixin.onClass(reactClass, mixin);
	    };
	  };
	
	  return reactMixin;
	}();

/***/ },
/* 492 */,
/* 493 */
/***/ function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
	
	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	
	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}
	
			// Detect buggy property enumeration order in older V8 versions.
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}
	
			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}
	
	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;
	
		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);
	
			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}
	
			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}
	
		return to;
	};


/***/ },
/* 494 */,
/* 495 */
/***/ function(module, exports, __webpack_require__) {

	
	
	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	Object.defineProperty(exports, "__esModule", { value: true });var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _react = __webpack_require__(301);var _react2 = _interopRequireDefault(_react);
	var _ReactStyleSheet = __webpack_require__(333);var _ReactStyleSheet2 = _interopRequireDefault(_ReactStyleSheet);
	var _ReactView = __webpack_require__(343);var _ReactView2 = _interopRequireDefault(_ReactView);
	var _ReactAnimated = __webpack_require__(496);var _ReactAnimated2 = _interopRequireDefault(_ReactAnimated);
	var _ReactPanResponder = __webpack_require__(587);var _ReactPanResponder2 = _interopRequireDefault(_ReactPanResponder);
	var _ReactDimensions = __webpack_require__(594);var _ReactDimensions2 = _interopRequireDefault(_ReactDimensions);
	var _NativeMethodsMixin = __webpack_require__(484);
	var _reactMixin = __webpack_require__(491);var _reactMixin2 = _interopRequireDefault(_reactMixin);
	var _autobindDecorator = __webpack_require__(494);var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var DEVICE_WIDTH = parseFloat(_ReactDimensions2.default.get('window').width);
	var THRESHOLD = DEVICE_WIDTH / 2;
	var VX_MAX = 0.1;
	
	var IDLE = 'Idle';
	var DRAGGING = 'Dragging';
	var SETTLING = 'Settling';var DrawerLayout = function (_Component) {
	  _inherits(DrawerLayout, _Component);function DrawerLayout() {
	    var _ref;var _temp, _this, _ret;_classCallCheck(this, DrawerLayout);for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DrawerLayout.__proto__ || Object.getPrototypeOf(DrawerLayout)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      openValue: new _ReactAnimated2.default.Value(0) }, _temp), _possibleConstructorReturn(_this, _ret);
	  }_createClass(DrawerLayout, [{ key: 'componentWillMount', value: function componentWillMount() {
	      var _this2 = this;var openValue = this.state.openValue;
	
	      openValue.addListener(function (_ref2) {
	        var value = _ref2.value;
	        _this2._lastOpenValue = value;
	        _this2.props.onDrawerSlide && _this2.props.onDrawerSlide({ nativeEvent: { offset: value } });
	      });
	
	      this._panResponder = _ReactPanResponder2.default.create({
	        onMoveShouldSetPanResponder: this._shouldSetPanResponder,
	        onPanResponderGrant: this._panResponderGrant,
	        onPanResponderMove: this._panResponderMove,
	        onPanResponderTerminationRequest: function onPanResponderTerminationRequest(evt, gestureState) {
	          return true;
	        },
	        onPanResponderRelease: this._panResponderRelease,
	        onPanResponderTerminate: function onPanResponderTerminate(evt, gestureState) {} });
	    } }, { key: 'render', value: function render() {
	      var openValue = this.state.openValue;var _props = this.props;var drawerPosition = _props.drawerPosition;var drawerWidth = _props.drawerWidth;
	      var dynamicDrawerStyles = {};
	      dynamicDrawerStyles[drawerPosition] = 0;
	      dynamicDrawerStyles.width = drawerWidth;
	
	      var outputRange = void 0;
	
	      if (drawerPosition === 'left') {
	        outputRange = [-drawerWidth, 0];
	      } else {
	        outputRange = [drawerWidth, 0];
	      }
	
	      var drawerTranslateX = openValue.interpolate({
	        inputRange: [0, 1],
	        outputRange: outputRange,
	        extrapolate: 'clamp' });
	
	      var animatedDrawerStyles = { transform: [{ translateX: drawerTranslateX }] };
	
	      var overlayOpacity = openValue.interpolate({
	        inputRange: [0, 1],
	        outputRange: [0, 0.7],
	        extrapolate: 'clamp' });
	
	      var animatedOverlayStyles = { opacity: overlayOpacity };
	
	      return _react2.default.createElement(_ReactView2.default, _extends({ style: { flex: 1, backgroundColor: 'transparent' } }, this._panResponder.panHandlers), _react2.default.createElement(_ReactAnimated2.default.View, { style: styles.main }, this.props.children), _react2.default.createElement(_ReactAnimated2.default.View, { style: [styles.overlay, animatedOverlayStyles], onClick: this.close }), _react2.default.createElement(_ReactAnimated2.default.View, { style: [styles.drawer, dynamicDrawerStyles, animatedDrawerStyles] }, this.props.renderNavigationView()));
	    } }, { key: '_emitStateChanged', value: function _emitStateChanged(newState) {
	      this.props.onDrawerStateChanged && this.props.onDrawerStateChanged(newState);
	    } }, { key: 'open', value: function open() {
	      var _this3 = this;var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	      this._emitStateChanged(SETTLING);
	      _ReactAnimated2.default.spring(this.state.openValue, _extends({ toValue: 1, bounciness: 0, restSpeedThreshold: 0.1 }, options)).start(function () {
	        _this3.props.onDrawerOpen && _this3.props.onDrawerOpen();
	        _this3._emitStateChanged(IDLE);
	      });
	    } }, { key: 'close', value: function close() {
	      var _this4 = this;var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	      this._emitStateChanged(SETTLING);
	      _ReactAnimated2.default.spring(this.state.openValue, _extends({ toValue: 0, bounciness: 0, restSpeedThreshold: 1 }, options)).start(function () {
	        _this4.props.onDrawerClose && _this4.props.onDrawerClose();
	        _this4._emitStateChanged(IDLE);
	      });
	    } }, { key: '_handleDrawerOpen', value: function _handleDrawerOpen() {
	      this.props.onDrawerOpen && this.props.onDrawerOpen();
	    } }, { key: '_handleDrawerClose', value: function _handleDrawerClose() {
	      this.props.onDrawerClose && this.props.onDrawerClose();
	    } }, { key: '_shouldSetPanResponder', value: function _shouldSetPanResponder(e, _ref3) {
	      var moveX = _ref3.moveX;var dx = _ref3.dx;var dy = _ref3.dy;var drawerPosition = this.props.drawerPosition;
	
	      if (drawerPosition === 'left') {
	        var overlayArea = DEVICE_WIDTH - (DEVICE_WIDTH - this.props.drawerWidth);
	
	        if (this._lastOpenValue === 1) {
	          if (dx < 0 && Math.abs(dx) > Math.abs(dy) * 3 || moveX > overlayArea) {
	            this._isClosing = true;
	            this._closingAnchorValue = this._getOpenValueForX(moveX);
	            return true;
	          }
	        } else {
	          if (moveX <= 35 && dx > 0) {
	            this._isClosing = false;
	            return true;
	          } else {
	            return false;
	          }
	        }
	      } else {
	        var _overlayArea = DEVICE_WIDTH - this.props.drawerWidth;
	
	        if (this._lastOpenValue === 1) {
	          if (dx > 0 && Math.abs(dx) > Math.abs(dy) * 3 || moveX < _overlayArea) {
	            this._isClosing = true;
	            this._closingAnchorValue = this._getOpenValueForX(moveX);
	            return true;
	          }
	        } else {
	          if (moveX >= DEVICE_WIDTH - 35 && dx < 0) {
	            this._isClosing = false;
	            return true;
	          } else {
	            return false;
	          }
	        }
	      }
	    } }, { key: '_panResponderGrant', value: function _panResponderGrant() {
	      this._emitStateChanged(DRAGGING);
	    } }, { key: '_panResponderMove', value: function _panResponderMove(e, _ref4) {
	      var moveX = _ref4.moveX;
	      var openValue = this._getOpenValueForX(moveX);
	
	      if (this._isClosing) {
	        openValue = 1 - (this._closingAnchorValue - openValue);
	      }
	
	      if (openValue > 1) {
	        openValue = 1;
	      } else if (openValue < 0) {
	        openValue = 0;
	      }
	
	      this.state.openValue.setValue(openValue);
	    } }, { key: '_panResponderRelease', value: function _panResponderRelease(e, _ref5) {
	      var moveX = _ref5.moveX;var vx = _ref5.vx;var drawerPosition = this.props.drawerPosition;
	
	      var previouslyOpen = this._isClosing;
	      var isWithinVelocityThreshold = vx < VX_MAX && vx > -VX_MAX;
	
	      if (drawerPosition === 'left') {
	        if (vx > 0 && moveX > THRESHOLD || vx >= VX_MAX || isWithinVelocityThreshold && previouslyOpen && moveX > THRESHOLD) {
	          this.open({ velocity: vx });
	        } else if (vx < 0 && moveX < THRESHOLD || vx < -VX_MAX || isWithinVelocityThreshold && !previouslyOpen) {
	          this.close({ velocity: vx });
	        } else if (previouslyOpen) {
	          this.open();
	        } else {
	          this.close();
	        }
	      } else {
	        if (vx < 0 && moveX < THRESHOLD || vx <= -VX_MAX || isWithinVelocityThreshold && previouslyOpen && moveX < THRESHOLD) {
	          this.open({ velocity: -1 * vx });
	        } else if (vx > 0 && moveX > THRESHOLD || vx > VX_MAX || isWithinVelocityThreshold && !previouslyOpen) {
	          this.close({ velocity: -1 * vx });
	        } else if (previouslyOpen) {
	          this.open();
	        } else {
	          this.close();
	        }
	      }
	    } }, { key: '_getOpenValueForX', value: function _getOpenValueForX(x) {
	      var _props2 = this.props;var drawerPosition = _props2.drawerPosition;var drawerWidth = _props2.drawerWidth;
	
	      if (drawerPosition === 'left') {
	        return x / drawerWidth;
	      } else if (drawerPosition === 'right') {
	        return (DEVICE_WIDTH - x) / drawerWidth;
	      }
	    } }]);return DrawerLayout;
	}(_react.Component);DrawerLayout.positions = { Left: 'left', Right: 'right' };DrawerLayout.defaultProps = { drawerWidth: 0, drawerPosition: 'left' };DrawerLayout.propTypes = { drawerWidth: _react.PropTypes.number.isRequired, drawerPosition: _react.PropTypes.oneOf(['left', 'right']).isRequired, renderNavigationView: _react.PropTypes.func.isRequired, onDrawerSlide: _react.PropTypes.func, onDrawerStateChanged: _react.PropTypes.func, onDrawerOpen: _react.PropTypes.func, onDrawerClose: _react.PropTypes.func, keyboardDismissMode: _react.PropTypes.oneOf(['none', 'on-drag']) };
	
	var styles = _ReactStyleSheet2.default.create({
	  drawer: {
	    position: 'absolute',
	    top: 0,
	    bottom: 0 },
	
	  main: {
	    flex: 1 },
	
	  overlay: {
	    backgroundColor: '#000',
	    position: 'absolute',
	    top: 0,
	    left: 0,
	    bottom: 0,
	    right: 0 } });
	
	_reactMixin2.default.onClass(DrawerLayout, _NativeMethodsMixin.Mixin);
	(0, _autobindDecorator2.default)(DrawerLayout);
	
	DrawerLayout.isReactNativeComponent = true;exports.default = DrawerLayout;

/***/ },
/* 496 */
/***/ function(module, exports, __webpack_require__) {

	
	
	'use strict';
	Object.defineProperty(exports, "__esModule", { value: true });var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};
	
	var _animated = __webpack_require__(497);var _animated2 = _interopRequireDefault(_animated);
	var _CSSPropertyOperations = __webpack_require__(408);var _CSSPropertyOperations2 = _interopRequireDefault(_CSSPropertyOperations);
	
	var _ReactFlattenStyle = __webpack_require__(341);var _ReactFlattenStyle2 = _interopRequireDefault(_ReactFlattenStyle);
	var _ReactImage = __webpack_require__(580);var _ReactImage2 = _interopRequireDefault(_ReactImage);
	var _ReactText = __webpack_require__(584);var _ReactText2 = _interopRequireDefault(_ReactText);
	var _ReactView = __webpack_require__(343);var _ReactView2 = _interopRequireDefault(_ReactView);function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function mapTransform(t) {
	  var k = Object.keys(t)[0];
	  return k + '(' + t[k] + ')';
	}
	
	function mapStyle(style) {
	  if (style && style.transform && typeof style.transform !== 'string') {
	
	    style.transform = style.transform.map(mapTransform).join(' ');
	  }
	  return style;
	}
	
	function ApplyAnimatedValues(instance, props) {
	  if (instance.setNativeProps) {
	    instance.setNativeProps(props);
	  } else if (instance.nodeType && instance.setAttribute !== undefined) {
	    _CSSPropertyOperations2.default.setValueForStyles(instance, mapStyle(props.style));
	  } else {
	    return false;
	  }
	}
	
	_animated2.default.inject.ApplyAnimatedValues(ApplyAnimatedValues);
	_animated2.default.inject.FlattenStyle(_ReactFlattenStyle2.default);exports.default = _extends({}, _animated2.default, {
	
	  View: _animated2.default.createAnimatedComponent(_ReactView2.default),
	  Text: _animated2.default.createAnimatedComponent(_ReactText2.default),
	  Image: _animated2.default.createAnimatedComponent(_ReactImage2.default) });

/***/ },
/* 497 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	'use strict';var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};
	
	var invariant=__webpack_require__(498);
	
	var Animated=__webpack_require__(499);
	var AnimatedValue=__webpack_require__(500);
	var AnimatedValueXY=__webpack_require__(559);
	var AnimatedAddition=__webpack_require__(560);
	var AnimatedMultiplication=__webpack_require__(561);
	var AnimatedModulo=__webpack_require__(562);
	var AnimatedTemplate=__webpack_require__(563);
	var AnimatedTracking=__webpack_require__(564);
	var isAnimated=__webpack_require__(565);
	
	var Animation=__webpack_require__(507);
	var TimingAnimation=__webpack_require__(566);
	var DecayAnimation=__webpack_require__(571);
	var SpringAnimation=__webpack_require__(572);
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	var maybeVectorAnim=function(
	value,
	config,
	anim)
	{
	if(value instanceof AnimatedValueXY){
	var configX=_extends({},config);
	var configY=_extends({},config);
	for(var key in config){var _config$key=
	config[key];var x=_config$key.x;var y=_config$key.y;
	if(x!==undefined&&y!==undefined){
	configX[key]=x;
	configY[key]=y;}}
	
	
	var aX=anim(value.x,configX);
	var aY=anim(value.y,configY);
	// We use `stopTogether: false` here because otherwise tracking will break
	// because the second animation will get stopped before it can update.
	return parallel([aX,aY],{stopTogether:false});}
	
	return null;};
	
	
	var spring=function(
	value,
	config)
	{
	return maybeVectorAnim(value,config,spring)||{
	start:function(callback){
	var singleValue=value;
	var singleConfig=config;
	singleValue.stopTracking();
	if(config.toValue instanceof Animated){
	singleValue.track(new AnimatedTracking(
	singleValue,
	config.toValue,
	SpringAnimation,
	singleConfig,
	callback));}else 
	
	{
	singleValue.animate(new SpringAnimation(singleConfig),callback);}},
	
	
	
	stop:function(){
	value.stopAnimation();}};};
	
	
	
	
	var timing=function(
	value,
	config)
	{
	return maybeVectorAnim(value,config,timing)||{
	start:function(callback){
	var singleValue=value;
	var singleConfig=config;
	singleValue.stopTracking();
	if(config.toValue instanceof Animated){
	singleValue.track(new AnimatedTracking(
	singleValue,
	config.toValue,
	TimingAnimation,
	singleConfig,
	callback));}else 
	
	{
	singleValue.animate(new TimingAnimation(singleConfig),callback);}},
	
	
	
	stop:function(){
	value.stopAnimation();}};};
	
	
	
	
	var decay=function(
	value,
	config)
	{
	return maybeVectorAnim(value,config,decay)||{
	start:function(callback){
	var singleValue=value;
	var singleConfig=config;
	singleValue.stopTracking();
	singleValue.animate(new DecayAnimation(singleConfig),callback);},
	
	
	stop:function(){
	value.stopAnimation();}};};
	
	
	
	
	var sequence=function(
	animations)
	{
	var current=0;
	return {
	start:function(callback){
	var onComplete=function(result){
	if(!result.finished){
	callback&&callback(result);
	return;}
	
	
	current++;
	
	if(current===animations.length){
	callback&&callback(result);
	return;}
	
	
	animations[current].start(onComplete);};
	
	
	if(animations.length===0){
	callback&&callback({finished:true});}else 
	{
	animations[current].start(onComplete);}},
	
	
	
	stop:function(){
	if(current<animations.length){
	animations[current].stop();}}};};
	
	
	
	
	
	
	// If one is stopped, stop all.  default: true
	
	var parallel=function(
	animations,
	config)
	{
	var doneCount=0;
	// Make sure we only call stop() at most once for each animation
	var hasEnded={};
	var stopTogether=!(config&&config.stopTogether===false);
	
	var result={
	start:function(callback){
	if(doneCount===animations.length){
	callback&&callback({finished:true});
	return;}
	
	
	animations.forEach(function(animation,idx){
	var cb=function(endResult){
	hasEnded[idx]=true;
	doneCount++;
	if(doneCount===animations.length){
	doneCount=0;
	callback&&callback(endResult);
	return;}
	
	
	if(!endResult.finished&&stopTogether){
	result.stop();}};
	
	
	
	if(!animation){
	cb({finished:true});}else 
	{
	animation.start(cb);}});},
	
	
	
	
	stop:function(){
	animations.forEach(function(animation,idx){
	!hasEnded[idx]&&animation.stop();
	hasEnded[idx]=true;});}};
	
	
	
	
	return result;};
	
	
	var delay=function(time){
	// Would be nice to make a specialized implementation
	return timing(new AnimatedValue(0),{toValue:0,delay:time,duration:0});};
	
	
	var stagger=function(
	time,
	animations)
	{
	return parallel(animations.map(function(animation,i){
	return sequence([
	delay(time*i),
	animation]);}));};
	
	
	
	
	
	
	
	var event=function(
	argMapping,
	config)
	{
	return function(){for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}
	var traverse=function(recMapping,recEvt,key){
	if(typeof recEvt==='number'){
	invariant(
	recMapping instanceof AnimatedValue,
	'Bad mapping of type '+typeof recMapping+' for key '+key+
	', event value must map to AnimatedValue');
	
	recMapping.setValue(recEvt);
	return;}
	
	invariant(
	typeof recMapping==='object',
	'Bad mapping of type '+typeof recMapping+' for key '+key);
	
	invariant(
	typeof recEvt==='object',
	'Bad event of type '+typeof recEvt+' for key '+key);
	
	for(var key in recMapping){
	traverse(recMapping[key],recEvt[key],key);}};
	
	
	argMapping.forEach(function(mapping,idx){
	traverse(mapping,args[idx],'arg'+idx);});
	
	if(config&&config.listener){
	config.listener.apply(null,args);}};};
	
	
	
	
	/**
	 * Animations are an important part of modern UX, and the `Animated`
	 * library is designed to make them fluid, powerful, and easy to build and
	 * maintain.
	 *
	 * The simplest workflow is to create an `Animated.Value`, hook it up to one or
	 * more style attributes of an animated component, and then drive updates either
	 * via animations, such as `Animated.timing`, or by hooking into gestures like
	 * panning or scrolling via `Animated.event`.  `Animated.Value` can also bind to
	 * props other than style, and can be interpolated as well.  Here is a basic
	 * example of a container view that will fade in when it's mounted:
	 *
	 *```javascript
	 *  class FadeInView extends React.Component {
	 *    constructor(props) {
	 *      super(props);
	 *      this.state = {
	 *        fadeAnim: new Animated.Value(0), // init opacity 0
	 *      };
	 *    }
	 *    componentDidMount() {
	 *      Animated.timing(          // Uses easing functions
	 *        this.state.fadeAnim,    // The value to drive
	 *        {toValue: 1},           // Configuration
	 *      ).start();                // Don't forget start!
	 *    }
	 *    render() {
	 *      return (
	 *        <Animated.View          // Special animatable View
	 *          style={{opacity: this.state.fadeAnim}}> // Binds
	 *          {this.props.children}
	 *        </Animated.View>
	 *      );
	 *    }
	 *  }
	 *```
	 *
	 * Note that only animatable components can be animated.  `View`, `Text`, and
	 * `Image` are already provided, and you can create custom ones with
	 * `createAnimatedComponent`.  These special components do the magic of binding
	 * the animated values to the properties, and do targeted native updates to
	 * avoid the cost of the react render and reconciliation process on every frame.
	 * They also handle cleanup on unmount so they are safe by default.
	 *
	 * Animations are heavily configurable.  Custom and pre-defined easing
	 * functions, delays, durations, decay factors, spring constants, and more can
	 * all be tweaked depending on the type of animation.
	 *
	 * A single `Animated.Value` can drive any number of properties, and each
	 * property can be run through an interpolation first.  An interpolation maps
	 * input ranges to output ranges, typically using a linear interpolation but
	 * also supports easing functions.  By default, it will extrapolate the curve
	 * beyond the ranges given, but you can also have it clamp the output value.
	 *
	 * For example, you may want to think about your `Animated.Value` as going from
	 * 0 to 1, but animate the position from 150px to 0px and the opacity from 0 to
	 * 1. This can easily be done by modifying `style` in the example above like so:
	 *
	 *```javascript
	 *  style={{
	 *    opacity: this.state.fadeAnim, // Binds directly
	 *    transform: [{
	 *      translateY: this.state.fadeAnim.interpolate({
	 *        inputRange: [0, 1],
	 *        outputRange: [150, 0]  // 0 : 150, 0.5 : 75, 1 : 0
	 *      }),
	 *    }],
	 *  }}>
	 *```
	 *
	 * Animations can also be combined in complex ways using composition functions
	 * such as `sequence` and `parallel`, and can also be chained together simply
	 * by setting the `toValue` of one animation to be another `Animated.Value`.
	 *
	 * `Animated.ValueXY` is handy for 2D animations, like panning, and there are
	 * other helpful additions like `setOffset` and `getLayout` to aid with typical
	 * interaction patterns, like drag-and-drop.
	 *
	 * You can see more example usage in `AnimationExample.js`, the Gratuitous
	 * Animation App, and [Animations documentation guide](docs/animations.html).
	 *
	 * Note that `Animated` is designed to be fully serializable so that animations
	 * can be run in a high performance way, independent of the normal JavaScript
	 * event loop. This does influence the API, so keep that in mind when it seems a
	 * little trickier to do something compared to a fully synchronous system.
	 * Checkout `Animated.Value.addListener` as a way to work around some of these
	 * limitations, but use it sparingly since it might have performance
	 * implications in the future.
	 */
	module.exports={
	/**
	   * Standard value class for driving animations.  Typically initialized with
	   * `new Animated.Value(0);`
	   */
	Value:AnimatedValue,
	/**
	   * 2D value class for driving 2D animations, such as pan gestures.
	   */
	ValueXY:AnimatedValueXY,
	
	/**
	   * Animates a value from an initial velocity to zero based on a decay
	   * coefficient.
	   */
	decay:decay,
	/**
	   * Animates a value along a timed easing curve.  The `Easing` module has tons
	   * of pre-defined curves, or you can use your own function.
	   */
	timing:timing,
	/**
	   * Spring animation based on Rebound and Origami.  Tracks velocity state to
	   * create fluid motions as the `toValue` updates, and can be chained together.
	   */
	spring:spring,
	
	/**
	   * Creates a new Animated value composed from two Animated values added
	   * together.
	   */
	add:function add(a,b){
	return new AnimatedAddition(a,b);},
	
	/**
	   * Creates a new Animated value composed from two Animated values multiplied
	   * together.
	   */
	multiply:function multiply(a,b){
	return new AnimatedMultiplication(a,b);},
	
	
	/**
	   * Creates a new Animated value that is the (non-negative) modulo of the
	   * provided Animated value
	   */
	modulo:function modulo(a,modulus){
	return new AnimatedModulo(a,modulus);},
	
	
	/**
	   * Creates a new Animated value that is the specified string, with each
	   * substitution expression being separately animated and interpolated.
	   */
	template:function template(strings){for(var _len2=arguments.length,values=Array(_len2>1?_len2-1:0),_key2=1;_key2<_len2;_key2++){values[_key2-1]=arguments[_key2];}
	return new AnimatedTemplate(strings,values);},
	
	
	/**
	   * Starts an animation after the given delay.
	   */
	delay:delay,
	/**
	   * Starts an array of animations in order, waiting for each to complete
	   * before starting the next.  If the current running animation is stopped, no
	   * following animations will be started.
	   */
	sequence:sequence,
	/**
	   * Starts an array of animations all at the same time.  By default, if one
	   * of the animations is stopped, they will all be stopped.  You can override
	   * this with the `stopTogether` flag.
	   */
	parallel:parallel,
	/**
	   * Array of animations may run in parallel (overlap), but are started in
	   * sequence with successive delays.  Nice for doing trailing effects.
	   */
	stagger:stagger,
	
	/**
	   *  Takes an array of mappings and extracts values from each arg accordingly,
	   *  then calls `setValue` on the mapped outputs.  e.g.
	   *
	   *```javascript
	   *  onScroll={Animated.event(
	   *    [{nativeEvent: {contentOffset: {x: this._scrollX}}}]
	   *    {listener},          // Optional async listener
	   *  )
	   *  ...
	   *  onPanResponderMove: Animated.event([
	   *    null,                // raw event arg ignored
	   *    {dx: this._panX},    // gestureState arg
	   *  ]),
	   *```
	   */
	event:event,
	
	/**
	   * Existential test to figure out if an object is an instance of the Animated
	   * class or not.
	   */
	isAnimated:isAnimated,
	
	/**
	   * Make any React component Animatable.  Used to create `Animated.View`, etc.
	   */
	createAnimatedComponent:__webpack_require__(574),
	
	inject:{
	ApplyAnimatedValues:__webpack_require__(579).inject,
	InteractionManager:__webpack_require__(502).inject,
	FlattenStyle:__webpack_require__(578).inject,
	RequestAnimationFrame:__webpack_require__(569).inject,
	CancelAnimationFrame:__webpack_require__(570).inject},
	
	
	__PropsOnlyForTests:__webpack_require__(575)};

/***/ },
/* 498 */,
/* 499 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	'use strict';
	
	// Note(vjeux): this would be better as an interface but flow doesn't
	// support them yet
	var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var Animated=function(){function Animated(){_classCallCheck(this,Animated);}_createClass(Animated,[{key:'__attach',value:function __attach()
	{}},{key:'__detach',value:function __detach()
	{}},{key:'__getValue',value:function __getValue()
	{}},{key:'__getAnimatedValue',value:function __getAnimatedValue()
	{return this.__getValue();}},{key:'__addChild',value:function __addChild(
	child){}},{key:'__removeChild',value:function __removeChild(
	child){}},{key:'__getChildren',value:function __getChildren()
	{return [];}}]);return Animated;}();
	
	
	module.exports=Animated;

/***/ },
/* 500 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	'use strict';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}
	
	var AnimatedWithChildren=__webpack_require__(501);
	var InteractionManager=__webpack_require__(502);
	var AnimatedInterpolation=__webpack_require__(503);
	var Interpolation=__webpack_require__(504);
	var Animation=__webpack_require__(507);
	var guid=__webpack_require__(506);
	var Set=__webpack_require__(508);
	
	
	
	
	
	
	/**
	 * Animated works by building a directed acyclic graph of dependencies
	 * transparently when you render your Animated components.
	 *
	 *               new Animated.Value(0)
	 *     .interpolate()        .interpolate()    new Animated.Value(1)
	 *         opacity               translateY      scale
	 *          style                         transform
	 *         View#234                         style
	 *                                         View#123
	 *
	 * A) Top Down phase
	 * When an Animated.Value is updated, we recursively go down through this
	 * graph in order to find leaf nodes: the views that we flag as needing
	 * an update.
	 *
	 * B) Bottom Up phase
	 * When a view is flagged as needing an update, we recursively go back up
	 * in order to build the new value that it needs. The reason why we need
	 * this two-phases process is to deal with composite props such as
	 * transform which can receive values from multiple parents.
	 */
	function _flush(rootNode){
	var animatedStyles=new Set();
	function findAnimatedStyles(node){
	if(typeof node.update==='function'){
	animatedStyles.add(node);}else 
	{
	node.__getChildren().forEach(findAnimatedStyles);}}
	
	
	findAnimatedStyles(rootNode);
	animatedStyles.forEach(function(animatedStyle){return animatedStyle.update();});}
	
	
	/**
	 * Standard value for driving animations.  One `Animated.Value` can drive
	 * multiple properties in a synchronized fashion, but can only be driven by one
	 * mechanism at a time.  Using a new mechanism (e.g. starting a new animation,
	 * or calling `setValue`) will stop any previous ones.
	 */var 
	AnimatedValue=function(_AnimatedWithChildren){_inherits(AnimatedValue,_AnimatedWithChildren);
	
	
	
	
	
	
	function AnimatedValue(value){_classCallCheck(this,AnimatedValue);var _this=_possibleConstructorReturn(this,Object.getPrototypeOf(AnimatedValue).call(this));
	
	_this._value=value;
	_this._offset=0;
	_this._animation=null;
	_this._listeners={};return _this;}_createClass(AnimatedValue,[{key:'__detach',value:function __detach()
	
	
	{
	this.stopAnimation();}},{key:'__getValue',value:function __getValue()
	
	
	{
	return this._value+this._offset;}
	
	
	/**
	   * Directly set the value.  This will stop any animations running on the value
	   * and update all the bound properties.
	   */},{key:'setValue',value:function setValue(
	value){
	if(this._animation){
	this._animation.stop();
	this._animation=null;}
	
	this._updateValue(value);}
	
	
	/**
	   * Sets an offset that is applied on top of whatever value is set, whether via
	   * `setValue`, an animation, or `Animated.event`.  Useful for compensating
	   * things like the start of a pan gesture.
	   */},{key:'setOffset',value:function setOffset(
	offset){
	this._offset=offset;}
	
	
	/**
	   * Merges the offset value into the base value and resets the offset to zero.
	   * The final output of the value is unchanged.
	   */},{key:'flattenOffset',value:function flattenOffset()
	{
	this._value+=this._offset;
	this._offset=0;}
	
	
	/**
	   * Adds an asynchronous listener to the value so you can observe updates from
	   * animations.  This is useful because there is no way to
	   * synchronously read the value because it might be driven natively.
	   */},{key:'addListener',value:function addListener(
	callback){
	var id=guid();
	this._listeners[id]=callback;
	return id;}},{key:'removeListener',value:function removeListener(
	
	
	id){
	delete this._listeners[id];}},{key:'removeAllListeners',value:function removeAllListeners()
	
	
	{
	this._listeners={};}
	
	
	/**
	   * Stops any running animation or tracking.  `callback` is invoked with the
	   * final value after stopping the animation, which is useful for updating
	   * state to match the animation position with layout.
	   */},{key:'stopAnimation',value:function stopAnimation(
	callback){
	this.stopTracking();
	this._animation&&this._animation.stop();
	this._animation=null;
	callback&&callback(this.__getValue());}
	
	
	/**
	   * Interpolates the value before updating the property, e.g. mapping 0-1 to
	   * 0-10.
	   */},{key:'interpolate',value:function interpolate(
	config){
	return new AnimatedInterpolation(this,Interpolation.create(config));}
	
	
	/**
	   * Typically only used internally, but could be used by a custom Animation
	   * class.
	   */},{key:'animate',value:function animate(
	animation,callback){var _this2=this;
	var handle=null;
	if(animation.__isInteraction){
	handle=InteractionManager.current.createInteractionHandle();}
	
	var previousAnimation=this._animation;
	this._animation&&this._animation.stop();
	this._animation=animation;
	animation.start(
	this._value,
	function(value){
	_this2._updateValue(value);},
	
	function(result){
	_this2._animation=null;
	if(handle!==null){
	InteractionManager.current.clearInteractionHandle(handle);}
	
	callback&&callback(result);},
	
	previousAnimation);}
	
	
	
	/**
	   * Typically only used internally.
	   */},{key:'stopTracking',value:function stopTracking()
	{
	this._tracking&&this._tracking.__detach();
	this._tracking=null;}
	
	
	/**
	   * Typically only used internally.
	   */},{key:'track',value:function track(
	tracking){
	this.stopTracking();
	this._tracking=tracking;}},{key:'_updateValue',value:function _updateValue(
	
	
	value){
	this._value=value;
	_flush(this);
	for(var key in this._listeners){
	this._listeners[key]({value:this.__getValue()});}}}]);return AnimatedValue;}(AnimatedWithChildren);
	
	
	
	
	module.exports=AnimatedValue;

/***/ },
/* 501 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	'use strict';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}
	
	var Animated=__webpack_require__(499);var 
	
	AnimatedWithChildren=function(_Animated){_inherits(AnimatedWithChildren,_Animated);
	
	
	function AnimatedWithChildren(){_classCallCheck(this,AnimatedWithChildren);var _this=_possibleConstructorReturn(this,Object.getPrototypeOf(AnimatedWithChildren).call(this));
	
	_this._children=[];return _this;}_createClass(AnimatedWithChildren,[{key:'__addChild',value:function __addChild(
	
	
	child){
	if(this._children.length===0){
	this.__attach();}
	
	this._children.push(child);}},{key:'__removeChild',value:function __removeChild(
	
	
	child){
	var index=this._children.indexOf(child);
	if(index===-1){
	console.warn('Trying to remove a child that doesn\'t exist');
	return;}
	
	this._children.splice(index,1);
	if(this._children.length===0){
	this.__detach();}}},{key:'__getChildren',value:function __getChildren()
	
	
	
	{
	return this._children;}}]);return AnimatedWithChildren;}(Animated);
	
	
	
	module.exports=AnimatedWithChildren;

/***/ },
/* 502 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	'use strict';
	
	var InteractionManager={
	current:{
	createInteractionHandle:function(){},
	clearInteractionHandle:function(){}},
	
	inject:function(manager){
	InteractionManager.current=manager;}};
	
	
	
	module.exports=InteractionManager;

/***/ },
/* 503 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	'use strict';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}
	
	var Animated=__webpack_require__(499);
	var AnimatedWithChildren=__webpack_require__(501);
	var invariant=__webpack_require__(498);
	var Interpolation=__webpack_require__(504);
	var guid=__webpack_require__(506);var 
	
	
	
	AnimatedInterpolation=function(_AnimatedWithChildren){_inherits(AnimatedInterpolation,_AnimatedWithChildren);
	
	
	
	
	
	function AnimatedInterpolation(parent,interpolation){_classCallCheck(this,AnimatedInterpolation);var _this=_possibleConstructorReturn(this,Object.getPrototypeOf(AnimatedInterpolation).call(this));
	
	_this._parent=parent;
	_this._interpolation=interpolation;
	_this._listeners={};return _this;}_createClass(AnimatedInterpolation,[{key:'__getValue',value:function __getValue()
	
	
	{
	var parentValue=this._parent.__getValue();
	invariant(
	typeof parentValue==='number',
	'Cannot interpolate an input which is not a number.');
	
	return this._interpolation(parentValue);}},{key:'addListener',value:function addListener(
	
	
	callback){var _this2=this;
	if(!this._parentListener){
	this._parentListener=this._parent.addListener(function(){
	for(var key in _this2._listeners){
	_this2._listeners[key]({value:_this2.__getValue()});}});}
	
	
	
	var id=guid();
	this._listeners[id]=callback;
	return id;}},{key:'removeListener',value:function removeListener(
	
	
	id){
	delete this._listeners[id];}},{key:'interpolate',value:function interpolate(
	
	
	config){
	return new AnimatedInterpolation(this,Interpolation.create(config));}},{key:'__attach',value:function __attach()
	
	
	{
	this._parent.__addChild(this);}},{key:'__detach',value:function __detach()
	
	
	{
	this._parent.__removeChild(this);
	this._parentListener=this._parent.removeListener(this._parentListener);}}]);return AnimatedInterpolation;}(AnimatedWithChildren);
	
	
	
	module.exports=AnimatedInterpolation;

/***/ },
/* 504 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	/* eslint no-bitwise: 0 */
	'use strict';var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}
	
	var normalizeColor=__webpack_require__(505);
	
	var invariant=__webpack_require__(498);
	
	
	
	
	
	
	
	
	
	
	
	
	var linear=function(t){return t;};
	
	/**
	 * Very handy helper to map input ranges to output ranges with an easing
	 * function and custom behavior outside of the ranges.
	 */var 
	Interpolation=function(){function Interpolation(){_classCallCheck(this,Interpolation);}_createClass(Interpolation,null,[{key:'create',value:function create(
	config){
	
	if(config.outputRange&&typeof config.outputRange[0]==='string'){
	return createInterpolationFromStringOutputRange(config);}
	
	
	var outputRange=config.outputRange;
	checkInfiniteRange('outputRange',outputRange);
	
	var inputRange=config.inputRange;
	checkInfiniteRange('inputRange',inputRange);
	checkValidInputRange(inputRange);
	
	invariant(
	inputRange.length===outputRange.length,
	'inputRange ('+inputRange.length+') and outputRange ('+
	outputRange.length+') must have the same length');
	
	
	var easing=config.easing||linear;
	
	var extrapolateLeft='extend';
	if(config.extrapolateLeft!==undefined){
	extrapolateLeft=config.extrapolateLeft;}else 
	if(config.extrapolate!==undefined){
	extrapolateLeft=config.extrapolate;}
	
	
	var extrapolateRight='extend';
	if(config.extrapolateRight!==undefined){
	extrapolateRight=config.extrapolateRight;}else 
	if(config.extrapolate!==undefined){
	extrapolateRight=config.extrapolate;}
	
	
	return function(input){
	invariant(
	typeof input==='number',
	'Cannot interpolation an input which is not a number');
	
	
	var range=findRange(input,inputRange);
	return interpolate(
	input,
	inputRange[range],
	inputRange[range+1],
	outputRange[range],
	outputRange[range+1],
	easing,
	extrapolateLeft,
	extrapolateRight);};}}]);return Interpolation;}();
	
	
	
	
	
	function interpolate(
	input,
	inputMin,
	inputMax,
	outputMin,
	outputMax,
	easing,
	extrapolateLeft,
	extrapolateRight)
	{
	var result=input;
	
	// Extrapolate
	if(result<inputMin){
	if(extrapolateLeft==='identity'){
	return result;}else 
	if(extrapolateLeft==='clamp'){
	result=inputMin;}else 
	if(extrapolateLeft==='extend'){
	// noop
	}}
	
	
	if(result>inputMax){
	if(extrapolateRight==='identity'){
	return result;}else 
	if(extrapolateRight==='clamp'){
	result=inputMax;}else 
	if(extrapolateRight==='extend'){
	// noop
	}}
	
	
	if(outputMin===outputMax){
	return outputMin;}
	
	
	if(inputMin===inputMax){
	if(input<=inputMin){
	return outputMin;}
	
	return outputMax;}
	
	
	// Input Range
	if(inputMin===-Infinity){
	result=-result;}else 
	if(inputMax===Infinity){
	result=result-inputMin;}else 
	{
	result=(result-inputMin)/(inputMax-inputMin);}
	
	
	// Easing
	result=easing(result);
	
	// Output Range
	if(outputMin===-Infinity){
	result=-result;}else 
	if(outputMax===Infinity){
	result=result+outputMin;}else 
	{
	result=result*(outputMax-outputMin)+outputMin;}
	
	
	return result;}
	
	
	function colorToRgba(input){
	var int32Color=normalizeColor(input);
	if(int32Color===null){
	return input;}
	
	
	int32Color=int32Color||0; // $FlowIssue
	
	var r=(int32Color&0xff000000)>>>24;
	var g=(int32Color&0x00ff0000)>>>16;
	var b=(int32Color&0x0000ff00)>>>8;
	var a=(int32Color&0x000000ff)/255;
	
	return 'rgba('+r+', '+g+', '+b+', '+a+')';}
	
	
	var stringShapeRegex=/[0-9\.-]+/g;
	
	/**
	 * Supports string shapes by extracting numbers so new values can be computed,
	 * and recombines those values into new strings of the same shape.  Supports
	 * things like:
	 *
	 *   rgba(123, 42, 99, 0.36) // colors
	 *   -45deg                  // values with units
	 */
	function createInterpolationFromStringOutputRange(
	config)
	{
	var outputRange=config.outputRange;
	invariant(outputRange.length>=2,'Bad output range');
	outputRange=outputRange.map(colorToRgba);
	checkPattern(outputRange);
	
	// ['rgba(0, 100, 200, 0)', 'rgba(50, 150, 250, 0.5)']
	// ->
	// [
	//   [0, 50],
	//   [100, 150],
	//   [200, 250],
	//   [0, 0.5],
	// ]
	/* $FlowFixMe(>=0.18.0): `outputRange[0].match()` can return `null`. Need to
	   * guard against this possibility.
	   */
	var outputRanges=outputRange[0].match(stringShapeRegex).map(function(){return [];});
	outputRange.forEach(function(value){
	/* $FlowFixMe(>=0.18.0): `value.match()` can return `null`. Need to guard
	     * against this possibility.
	     */
	value.match(stringShapeRegex).forEach(function(number,i){
	outputRanges[i].push(+number);});});
	
	
	
	/* $FlowFixMe(>=0.18.0): `outputRange[0].match()` can return `null`. Need to
	   * guard against this possibility.
	   */
	var interpolations=outputRange[0].match(stringShapeRegex).map(function(value,i){
	return Interpolation.create(_extends({},
	config,{
	outputRange:outputRanges[i]}));});
	
	
	
	// rgba requires that the r,g,b are integers.... so we want to round them, but we *dont* want to
	// round the opacity (4th column).
	var shouldRound=/^rgb/.test(outputRange[0]);
	
	return function(input){
	var i=0;
	// 'rgba(0, 100, 200, 0)'
	// ->
	// 'rgba(${interpolations[0](input)}, ${interpolations[1](input)}, ...'
	return outputRange[0].replace(stringShapeRegex,function(){
	var val=interpolations[i++](input);
	return String(shouldRound&&i<4?Math.round(val):val);});};}
	
	
	
	
	function checkPattern(arr){
	var pattern=arr[0].replace(stringShapeRegex,'');
	for(var i=1;i<arr.length;++i){
	invariant(
	pattern===arr[i].replace(stringShapeRegex,''),
	'invalid pattern '+arr[0]+' and '+arr[i]);}}
	
	
	
	
	function findRange(input,inputRange){
	for(var i=1;i<inputRange.length-1;++i){
	if(inputRange[i]>=input){
	break;}}
	
	
	return i-1;}
	
	
	function checkValidInputRange(arr){
	invariant(arr.length>=2,'inputRange must have at least 2 elements');
	for(var i=1;i<arr.length;++i){
	invariant(
	arr[i]>=arr[i-1],
	/* $FlowFixMe(>=0.13.0) - In the addition expression below this comment,
	       * one or both of the operands may be something that doesn't cleanly
	       * convert to a string, like undefined, null, and object, etc. If you really
	       * mean this implicit string conversion, you can do something like
	       * String(myThing)
	       */
	'inputRange must be monotonically increasing '+arr);}}
	
	
	
	
	function checkInfiniteRange(name,arr){
	invariant(arr.length>=2,name+' must have at least 2 elements');
	invariant(
	arr.length!==2||arr[0]!==-Infinity||arr[1]!==Infinity,
	/* $FlowFixMe(>=0.13.0) - In the addition expression below this comment,
	     * one or both of the operands may be something that doesn't cleanly convert
	     * to a string, like undefined, null, and object, etc. If you really mean
	     * this implicit string conversion, you can do something like
	     * String(myThing)
	     */
	name+'cannot be ]-infinity;+infinity[ '+arr);}
	
	
	
	module.exports=Interpolation;

/***/ },
/* 505 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	/* eslint no-bitwise: 0 */
	'use strict';
	
	function normalizeColor(color){
	var match;
	
	if(typeof color==='number'){
	if(color>>>0===color&&color>=0&&color<=0xffffffff){
	return color;}
	
	return null;}
	
	
	// Ordered based on occurrences on Facebook codebase
	if(match=matchers.hex6.exec(color)){
	return parseInt(match[1]+'ff',16)>>>0;}
	
	
	if(names.hasOwnProperty(color)){
	return names[color];}
	
	
	if(match=matchers.rgb.exec(color)){
	return (
	parse255(match[1])<<24| // r
	parse255(match[2])<<16| // g
	parse255(match[3])<<8| // b
	0x000000ff // a
	)>>>0;}
	
	
	if(match=matchers.rgba.exec(color)){
	return (
	parse255(match[1])<<24| // r
	parse255(match[2])<<16| // g
	parse255(match[3])<<8| // b
	parse1(match[4]) // a
	)>>>0;}
	
	
	if(match=matchers.hex3.exec(color)){
	return parseInt(
	match[1]+match[1]+ // r
	match[2]+match[2]+ // g
	match[3]+match[3]+ // b
	'ff', // a
	16)>>>
	0;}
	
	
	// https://drafts.csswg.org/css-color-4/#hex-notation
	if(match=matchers.hex8.exec(color)){
	return parseInt(match[1],16)>>>0;}
	
	
	if(match=matchers.hex4.exec(color)){
	return parseInt(
	match[1]+match[1]+ // r
	match[2]+match[2]+ // g
	match[3]+match[3]+ // b
	match[4]+match[4], // a
	16)>>>
	0;}
	
	
	if(match=matchers.hsl.exec(color)){
	return (
	hslToRgb(
	parse360(match[1]), // h
	parsePercentage(match[2]), // s
	parsePercentage(match[3]) // l
	)|
	0x000000ff // a
	)>>>0;}
	
	
	if(match=matchers.hsla.exec(color)){
	return (
	hslToRgb(
	parse360(match[1]), // h
	parsePercentage(match[2]), // s
	parsePercentage(match[3]) // l
	)|
	parse1(match[4]) // a
	)>>>0;}
	
	
	return null;}
	
	
	function hue2rgb(p,q,t){
	if(t<0){
	t+=1;}
	
	if(t>1){
	t-=1;}
	
	if(t<1/6){
	return p+(q-p)*6*t;}
	
	if(t<1/2){
	return q;}
	
	if(t<2/3){
	return p+(q-p)*(2/3-t)*6;}
	
	return p;}
	
	
	function hslToRgb(h,s,l){
	var q=l<0.5?l*(1+s):l+s-l*s;
	var p=2*l-q;
	var r=hue2rgb(p,q,h+1/3);
	var g=hue2rgb(p,q,h);
	var b=hue2rgb(p,q,h-1/3);
	
	return (
	Math.round(r*255)<<24|
	Math.round(g*255)<<16|
	Math.round(b*255)<<8);}
	
	
	
	// var INTEGER = '[-+]?\\d+';
	var NUMBER='[-+]?\\d*\\.?\\d+';
	var PERCENTAGE=NUMBER+'%';
	
	function call(){for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}
	return '\\(\\s*('+args.join(')\\s*,\\s*(')+')\\s*\\)';}
	
	
	var matchers={
	rgb:new RegExp('rgb'+call(NUMBER,NUMBER,NUMBER)),
	rgba:new RegExp('rgba'+call(NUMBER,NUMBER,NUMBER,NUMBER)),
	hsl:new RegExp('hsl'+call(NUMBER,PERCENTAGE,PERCENTAGE)),
	hsla:new RegExp('hsla'+call(NUMBER,PERCENTAGE,PERCENTAGE,NUMBER)),
	hex3:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
	hex4:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
	hex6:/^#([0-9a-fA-F]{6})$/,
	hex8:/^#([0-9a-fA-F]{8})$/};
	
	
	function parse255(str){
	var int=parseInt(str,10);
	if(int<0){
	return 0;}
	
	if(int>255){
	return 255;}
	
	return int;}
	
	
	function parse360(str){
	var int=parseFloat(str);
	return (int%360+360)%360/360;}
	
	
	function parse1(str){
	var num=parseFloat(str);
	if(num<0){
	return 0;}
	
	if(num>1){
	return 255;}
	
	return Math.round(num*255);}
	
	
	function parsePercentage(str){
	// parseFloat conveniently ignores the final %
	var int=parseFloat(str,10);
	if(int<0){
	return 0;}
	
	if(int>100){
	return 1;}
	
	return int/100;}
	
	
	var names={
	transparent:0x00000000,
	
	// http://www.w3.org/TR/css3-color/#svg-color
	aliceblue:0xf0f8ffff,
	antiquewhite:0xfaebd7ff,
	aqua:0x00ffffff,
	aquamarine:0x7fffd4ff,
	azure:0xf0ffffff,
	beige:0xf5f5dcff,
	bisque:0xffe4c4ff,
	black:0x000000ff,
	blanchedalmond:0xffebcdff,
	blue:0x0000ffff,
	blueviolet:0x8a2be2ff,
	brown:0xa52a2aff,
	burlywood:0xdeb887ff,
	burntsienna:0xea7e5dff,
	cadetblue:0x5f9ea0ff,
	chartreuse:0x7fff00ff,
	chocolate:0xd2691eff,
	coral:0xff7f50ff,
	cornflowerblue:0x6495edff,
	cornsilk:0xfff8dcff,
	crimson:0xdc143cff,
	cyan:0x00ffffff,
	darkblue:0x00008bff,
	darkcyan:0x008b8bff,
	darkgoldenrod:0xb8860bff,
	darkgray:0xa9a9a9ff,
	darkgreen:0x006400ff,
	darkgrey:0xa9a9a9ff,
	darkkhaki:0xbdb76bff,
	darkmagenta:0x8b008bff,
	darkolivegreen:0x556b2fff,
	darkorange:0xff8c00ff,
	darkorchid:0x9932ccff,
	darkred:0x8b0000ff,
	darksalmon:0xe9967aff,
	darkseagreen:0x8fbc8fff,
	darkslateblue:0x483d8bff,
	darkslategray:0x2f4f4fff,
	darkslategrey:0x2f4f4fff,
	darkturquoise:0x00ced1ff,
	darkviolet:0x9400d3ff,
	deeppink:0xff1493ff,
	deepskyblue:0x00bfffff,
	dimgray:0x696969ff,
	dimgrey:0x696969ff,
	dodgerblue:0x1e90ffff,
	firebrick:0xb22222ff,
	floralwhite:0xfffaf0ff,
	forestgreen:0x228b22ff,
	fuchsia:0xff00ffff,
	gainsboro:0xdcdcdcff,
	ghostwhite:0xf8f8ffff,
	gold:0xffd700ff,
	goldenrod:0xdaa520ff,
	gray:0x808080ff,
	green:0x008000ff,
	greenyellow:0xadff2fff,
	grey:0x808080ff,
	honeydew:0xf0fff0ff,
	hotpink:0xff69b4ff,
	indianred:0xcd5c5cff,
	indigo:0x4b0082ff,
	ivory:0xfffff0ff,
	khaki:0xf0e68cff,
	lavender:0xe6e6faff,
	lavenderblush:0xfff0f5ff,
	lawngreen:0x7cfc00ff,
	lemonchiffon:0xfffacdff,
	lightblue:0xadd8e6ff,
	lightcoral:0xf08080ff,
	lightcyan:0xe0ffffff,
	lightgoldenrodyellow:0xfafad2ff,
	lightgray:0xd3d3d3ff,
	lightgreen:0x90ee90ff,
	lightgrey:0xd3d3d3ff,
	lightpink:0xffb6c1ff,
	lightsalmon:0xffa07aff,
	lightseagreen:0x20b2aaff,
	lightskyblue:0x87cefaff,
	lightslategray:0x778899ff,
	lightslategrey:0x778899ff,
	lightsteelblue:0xb0c4deff,
	lightyellow:0xffffe0ff,
	lime:0x00ff00ff,
	limegreen:0x32cd32ff,
	linen:0xfaf0e6ff,
	magenta:0xff00ffff,
	maroon:0x800000ff,
	mediumaquamarine:0x66cdaaff,
	mediumblue:0x0000cdff,
	mediumorchid:0xba55d3ff,
	mediumpurple:0x9370dbff,
	mediumseagreen:0x3cb371ff,
	mediumslateblue:0x7b68eeff,
	mediumspringgreen:0x00fa9aff,
	mediumturquoise:0x48d1ccff,
	mediumvioletred:0xc71585ff,
	midnightblue:0x191970ff,
	mintcream:0xf5fffaff,
	mistyrose:0xffe4e1ff,
	moccasin:0xffe4b5ff,
	navajowhite:0xffdeadff,
	navy:0x000080ff,
	oldlace:0xfdf5e6ff,
	olive:0x808000ff,
	olivedrab:0x6b8e23ff,
	orange:0xffa500ff,
	orangered:0xff4500ff,
	orchid:0xda70d6ff,
	palegoldenrod:0xeee8aaff,
	palegreen:0x98fb98ff,
	paleturquoise:0xafeeeeff,
	palevioletred:0xdb7093ff,
	papayawhip:0xffefd5ff,
	peachpuff:0xffdab9ff,
	peru:0xcd853fff,
	pink:0xffc0cbff,
	plum:0xdda0ddff,
	powderblue:0xb0e0e6ff,
	purple:0x800080ff,
	rebeccapurple:0x663399ff,
	red:0xff0000ff,
	rosybrown:0xbc8f8fff,
	royalblue:0x4169e1ff,
	saddlebrown:0x8b4513ff,
	salmon:0xfa8072ff,
	sandybrown:0xf4a460ff,
	seagreen:0x2e8b57ff,
	seashell:0xfff5eeff,
	sienna:0xa0522dff,
	silver:0xc0c0c0ff,
	skyblue:0x87ceebff,
	slateblue:0x6a5acdff,
	slategray:0x708090ff,
	slategrey:0x708090ff,
	snow:0xfffafaff,
	springgreen:0x00ff7fff,
	steelblue:0x4682b4ff,
	tan:0xd2b48cff,
	teal:0x008080ff,
	thistle:0xd8bfd8ff,
	tomato:0xff6347ff,
	turquoise:0x40e0d0ff,
	violet:0xee82eeff,
	wheat:0xf5deb3ff,
	white:0xffffffff,
	whitesmoke:0xf5f5f5ff,
	yellow:0xffff00ff,
	yellowgreen:0x9acd32ff};
	
	
	module.exports=normalizeColor;

/***/ },
/* 506 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	'use strict';
	
	var _uniqueId=0;
	
	module.exports=function uniqueId(){
	return String(_uniqueId++);};

/***/ },
/* 507 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	'use strict';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}
	
	
	
	
	
	
	
	// Important note: start() and stop() will only be called at most once.
	// Once an animation has been stopped or finished its course, it will
	// not be reused.
	var Animation=function(){function Animation(){_classCallCheck(this,Animation);}_createClass(Animation,[{key:'start',value:function start(
	
	
	
	
	fromValue,
	onUpdate,
	onEnd,
	previousAnimation)
	{}},{key:'stop',value:function stop()
	{}
	// Helper function for subclasses to make sure onEnd is only called once.
	},{key:'__debouncedOnEnd',value:function __debouncedOnEnd(result){
	var onEnd=this.__onEnd;
	this.__onEnd=null;
	onEnd&&onEnd(result);}}]);return Animation;}();
	
	
	
	module.exports=Animation;

/***/ },
/* 508 */,
/* 509 */,
/* 510 */,
/* 511 */,
/* 512 */,
/* 513 */,
/* 514 */,
/* 515 */,
/* 516 */,
/* 517 */,
/* 518 */,
/* 519 */,
/* 520 */,
/* 521 */,
/* 522 */,
/* 523 */,
/* 524 */,
/* 525 */,
/* 526 */,
/* 527 */,
/* 528 */,
/* 529 */,
/* 530 */,
/* 531 */,
/* 532 */,
/* 533 */,
/* 534 */,
/* 535 */,
/* 536 */,
/* 537 */,
/* 538 */,
/* 539 */,
/* 540 */,
/* 541 */,
/* 542 */,
/* 543 */,
/* 544 */,
/* 545 */,
/* 546 */,
/* 547 */,
/* 548 */,
/* 549 */,
/* 550 */,
/* 551 */,
/* 552 */,
/* 553 */,
/* 554 */,
/* 555 */,
/* 556 */,
/* 557 */,
/* 558 */,
/* 559 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	'use strict';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}
	
	var Animated=__webpack_require__(499);
	var AnimatedValue=__webpack_require__(500);
	var AnimatedWithChildren=__webpack_require__(501);
	var invariant=__webpack_require__(498);
	var guid=__webpack_require__(506);
	
	
	
	/**
	 * 2D Value for driving 2D animations, such as pan gestures.  Almost identical
	 * API to normal `Animated.Value`, but multiplexed.  Contains two regular
	 * `Animated.Value`s under the hood.  Example:
	 *
	 *```javascript
	 *  class DraggableView extends React.Component {
	 *    constructor(props) {
	 *      super(props);
	 *      this.state = {
	 *        pan: new Animated.ValueXY(), // inits to zero
	 *      };
	 *      this.state.panResponder = PanResponder.create({
	 *        onStartShouldSetPanResponder: () => true,
	 *        onPanResponderMove: Animated.event([null, {
	 *          dx: this.state.pan.x, // x,y are Animated.Value
	 *          dy: this.state.pan.y,
	 *        }]),
	 *        onPanResponderRelease: () => {
	 *          Animated.spring(
	 *            this.state.pan,         // Auto-multiplexed
	 *            {toValue: {x: 0, y: 0}} // Back to zero
	 *          ).start();
	 *        },
	 *      });
	 *    }
	 *    render() {
	 *      return (
	 *        <Animated.View
	 *          {...this.state.panResponder.panHandlers}
	 *          style={this.state.pan.getLayout()}>
	 *          {this.props.children}
	 *        </Animated.View>
	 *      );
	 *    }
	 *  }
	 *```
	 */var 
	AnimatedValueXY=function(_AnimatedWithChildren){_inherits(AnimatedValueXY,_AnimatedWithChildren);
	
	
	
	
	function AnimatedValueXY(valueIn){_classCallCheck(this,AnimatedValueXY);var _this=_possibleConstructorReturn(this,Object.getPrototypeOf(AnimatedValueXY).call(this));
	
	var value=valueIn||{x:0,y:0}; // fixme: shouldn't need `: any`
	if(typeof value.x==='number'&&typeof value.y==='number'){
	_this.x=new AnimatedValue(value.x);
	_this.y=new AnimatedValue(value.y);}else 
	{
	invariant(
	value.x instanceof AnimatedValue&&
	value.y instanceof AnimatedValue,
	'AnimatedValueXY must be initalized with an object of numbers or '+
	'AnimatedValues.');
	
	_this.x=value.x;
	_this.y=value.y;}
	
	_this._listeners={};return _this;}_createClass(AnimatedValueXY,[{key:'setValue',value:function setValue(
	
	
	value){
	this.x.setValue(value.x);
	this.y.setValue(value.y);}},{key:'setOffset',value:function setOffset(
	
	
	offset){
	this.x.setOffset(offset.x);
	this.y.setOffset(offset.y);}},{key:'flattenOffset',value:function flattenOffset()
	
	
	{
	this.x.flattenOffset();
	this.y.flattenOffset();}},{key:'__getValue',value:function __getValue()
	
	
	{
	return {
	x:this.x.__getValue(),
	y:this.y.__getValue()};}},{key:'stopAnimation',value:function stopAnimation(
	
	
	
	callback){
	this.x.stopAnimation();
	this.y.stopAnimation();
	callback&&callback(this.__getValue());}},{key:'addListener',value:function addListener(
	
	
	callback){var _this2=this;
	var id=guid();
	var jointCallback=function(_ref){var number=_ref.value;
	callback(_this2.__getValue());};
	
	this._listeners[id]={
	x:this.x.addListener(jointCallback),
	y:this.y.addListener(jointCallback)};
	
	return id;}},{key:'removeListener',value:function removeListener(
	
	
	id){
	this.x.removeListener(this._listeners[id].x);
	this.y.removeListener(this._listeners[id].y);
	delete this._listeners[id];}
	
	
	/**
	   * Converts `{x, y}` into `{left, top}` for use in style, e.g.
	   *
	   *```javascript
	   *  style={this.state.anim.getLayout()}
	   *```
	   */},{key:'getLayout',value:function getLayout()
	{
	return {
	left:this.x,
	top:this.y};}
	
	
	
	/**
	   * Converts `{x, y}` into a useable translation transform, e.g.
	   *
	   *```javascript
	   *  style={{
	   *    transform: this.state.anim.getTranslateTransform()
	   *  }}
	   *```
	   */},{key:'getTranslateTransform',value:function getTranslateTransform()
	{
	return [
	{translateX:this.x},
	{translateY:this.y}];}}]);return AnimatedValueXY;}(AnimatedWithChildren);
	
	
	
	
	module.exports=AnimatedValueXY;

/***/ },
/* 560 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	'use strict';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}
	
	var AnimatedWithChildren=__webpack_require__(501);
	var Animated=__webpack_require__(499);
	var AnimatedValue=__webpack_require__(500);
	var Interpolation=__webpack_require__(504);
	var AnimatedInterpolation=__webpack_require__(503);var 
	
	
	
	AnimatedAddition=function(_AnimatedWithChildren){_inherits(AnimatedAddition,_AnimatedWithChildren);
	
	
	
	function AnimatedAddition(a,b){_classCallCheck(this,AnimatedAddition);var _this=_possibleConstructorReturn(this,Object.getPrototypeOf(AnimatedAddition).call(this));
	
	_this._a=typeof a==='number'?new AnimatedValue(a):a;
	_this._b=typeof b==='number'?new AnimatedValue(b):b;return _this;}_createClass(AnimatedAddition,[{key:'__getValue',value:function __getValue()
	
	
	{
	return this._a.__getValue()+this._b.__getValue();}},{key:'interpolate',value:function interpolate(
	
	
	config){
	return new AnimatedInterpolation(this,Interpolation.create(config));}},{key:'__attach',value:function __attach()
	
	
	{
	this._a.__addChild(this);
	this._b.__addChild(this);}},{key:'__detach',value:function __detach()
	
	
	{
	this._a.__removeChild(this);
	this._b.__removeChild(this);}}]);return AnimatedAddition;}(AnimatedWithChildren);
	
	
	
	module.exports=AnimatedAddition;

/***/ },
/* 561 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	'use strict';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}
	
	var AnimatedWithChildren=__webpack_require__(501);
	var Animated=__webpack_require__(499);
	var AnimatedValue=__webpack_require__(500);
	var AnimatedInterpolation=__webpack_require__(503);
	var Interpolation=__webpack_require__(504);var 
	
	
	
	AnimatedMultiplication=function(_AnimatedWithChildren){_inherits(AnimatedMultiplication,_AnimatedWithChildren);
	
	
	
	function AnimatedMultiplication(a,b){_classCallCheck(this,AnimatedMultiplication);var _this=_possibleConstructorReturn(this,Object.getPrototypeOf(AnimatedMultiplication).call(this));
	
	_this._a=typeof a==='number'?new AnimatedValue(a):a;
	_this._b=typeof b==='number'?new AnimatedValue(b):b;return _this;}_createClass(AnimatedMultiplication,[{key:'__getValue',value:function __getValue()
	
	
	{
	return this._a.__getValue()*this._b.__getValue();}},{key:'interpolate',value:function interpolate(
	
	
	config){
	return new AnimatedInterpolation(this,Interpolation.create(config));}},{key:'__attach',value:function __attach()
	
	
	{
	this._a.__addChild(this);
	this._b.__addChild(this);}},{key:'__detach',value:function __detach()
	
	
	{
	this._a.__removeChild(this);
	this._b.__removeChild(this);}}]);return AnimatedMultiplication;}(AnimatedWithChildren);
	
	
	
	module.exports=AnimatedMultiplication;

/***/ },
/* 562 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	'use strict';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}
	
	var Animated=__webpack_require__(499);
	var AnimatedWithChildren=__webpack_require__(501);
	var AnimatedInterpolation=__webpack_require__(503);
	var Interpolation=__webpack_require__(504);var 
	
	
	
	AnimatedModulo=function(_AnimatedWithChildren){_inherits(AnimatedModulo,_AnimatedWithChildren);
	
	// TODO(lmr): Make modulus able to be an animated value
	
	function AnimatedModulo(a,modulus){_classCallCheck(this,AnimatedModulo);var _this=_possibleConstructorReturn(this,Object.getPrototypeOf(AnimatedModulo).call(this));
	
	_this._a=a;
	_this._modulus=modulus;return _this;}_createClass(AnimatedModulo,[{key:'__getValue',value:function __getValue()
	
	
	{
	return (this._a.__getValue()%this._modulus+this._modulus)%this._modulus;}},{key:'interpolate',value:function interpolate(
	
	
	config){
	return new AnimatedInterpolation(this,Interpolation.create(config));}},{key:'__attach',value:function __attach()
	
	
	{
	this._a.__addChild(this);}},{key:'__detach',value:function __detach()
	
	
	{
	this._a.__removeChild(this);}}]);return AnimatedModulo;}(AnimatedWithChildren);
	
	
	
	module.exports=AnimatedModulo;

/***/ },
/* 563 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	'use strict';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}
	
	var Animated=__webpack_require__(499);
	var AnimatedWithChildren=__webpack_require__(501);var 
	
	AnimatedTemplate=function(_AnimatedWithChildren){_inherits(AnimatedTemplate,_AnimatedWithChildren);
	
	
	
	function AnimatedTemplate(strings,values){_classCallCheck(this,AnimatedTemplate);var _this=_possibleConstructorReturn(this,Object.getPrototypeOf(AnimatedTemplate).call(this));
	
	_this._strings=strings;
	_this._values=values;return _this;}_createClass(AnimatedTemplate,[{key:'__transformValue',value:function __transformValue(
	
	
	value){
	if(value instanceof Animated){
	return value.__getValue();}else 
	{
	return value;}}},{key:'__getValue',value:function __getValue()
	
	
	
	{
	var value=this._strings[0];
	for(var i=0;i<this._values.length;++i){
	value+=this.__transformValue(this._values[i])+this._strings[1+i];}
	
	return value;}},{key:'__attach',value:function __attach()
	
	
	{
	for(var i=0;i<this._values.length;++i){
	if(this._values[i] instanceof Animated){
	this._values[i].__addChild(this);}}}},{key:'__detach',value:function __detach()
	
	
	
	
	{
	for(var i=0;i<this._values.length;++i){
	if(this._values[i] instanceof Animated){
	this._values[i].__removeChild(this);}}}}]);return AnimatedTemplate;}(AnimatedWithChildren);
	
	
	
	
	
	module.exports=AnimatedTemplate;

/***/ },
/* 564 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	'use strict';var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}
	
	var Animated=__webpack_require__(499);
	var AnimatedValue=__webpack_require__(500);var 
	
	
	
	AnimatedTracking=function(_Animated){_inherits(AnimatedTracking,_Animated);
	
	
	
	
	
	
	function AnimatedTracking(
	value,
	parent,
	animationClass,
	animationConfig,
	callback)
	{_classCallCheck(this,AnimatedTracking);var _this=_possibleConstructorReturn(this,Object.getPrototypeOf(AnimatedTracking).call(this));
	
	_this._value=value;
	_this._parent=parent;
	_this._animationClass=animationClass;
	_this._animationConfig=animationConfig;
	_this._callback=callback;
	_this.__attach();return _this;}_createClass(AnimatedTracking,[{key:'__getValue',value:function __getValue()
	
	
	{
	return this._parent.__getValue();}},{key:'__attach',value:function __attach()
	
	
	{
	this._parent.__addChild(this);}},{key:'__detach',value:function __detach()
	
	
	{
	this._parent.__removeChild(this);}},{key:'update',value:function update()
	
	
	{
	this._value.animate(new this._animationClass(_extends({},
	this._animationConfig,{
	toValue:this._animationConfig.toValue.__getValue()})),
	this._callback);}}]);return AnimatedTracking;}(Animated);
	
	
	
	module.exports=AnimatedTracking;

/***/ },
/* 565 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	'use strict';
	
	var Animated=__webpack_require__(499);
	
	function isAnimated(obj){
	return obj instanceof Animated;}
	
	
	module.exports=isAnimated;

/***/ },
/* 566 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	'use strict';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}
	
	var Animation=__webpack_require__(507);
	var AnimatedValue=__webpack_require__(500);
	var Easing=__webpack_require__(567);
	var RequestAnimationFrame=__webpack_require__(569);
	var CancelAnimationFrame=__webpack_require__(570);
	
	
	
	var easeInOut=Easing.inOut(Easing.ease);var 
	
	
	
	
	
	
	
	
	TimingAnimation=function(_Animation){_inherits(TimingAnimation,_Animation);
	
	
	
	
	
	
	
	
	
	
	function TimingAnimation(
	config)
	{_classCallCheck(this,TimingAnimation);var _this=_possibleConstructorReturn(this,Object.getPrototypeOf(TimingAnimation).call(this));
	
	_this._toValue=config.toValue;
	_this._easing=config.easing!==undefined?config.easing:easeInOut;
	_this._duration=config.duration!==undefined?config.duration:500;
	_this._delay=config.delay!==undefined?config.delay:0;
	_this.__isInteraction=config.isInteraction!==undefined?config.isInteraction:true;return _this;}_createClass(TimingAnimation,[{key:'start',value:function start(
	
	
	
	fromValue,
	onUpdate,
	onEnd)
	{var _this2=this;
	this.__active=true;
	this._fromValue=fromValue;
	this._onUpdate=onUpdate;
	this.__onEnd=onEnd;
	
	var start=function(){
	if(_this2._duration===0){
	_this2._onUpdate(_this2._toValue);
	_this2.__debouncedOnEnd({finished:true});}else 
	{
	_this2._startTime=Date.now();
	_this2._animationFrame=RequestAnimationFrame.current(_this2.onUpdate.bind(_this2));}};
	
	
	if(this._delay){
	this._timeout=setTimeout(start,this._delay);}else 
	{
	start();}}},{key:'onUpdate',value:function onUpdate()
	
	
	
	{
	var now=Date.now();
	if(now>=this._startTime+this._duration){
	if(this._duration===0){
	this._onUpdate(this._toValue);}else 
	{
	this._onUpdate(
	this._fromValue+this._easing(1)*(this._toValue-this._fromValue));}
	
	
	this.__debouncedOnEnd({finished:true});
	return;}
	
	
	this._onUpdate(
	this._fromValue+
	this._easing((now-this._startTime)/this._duration)*(
	this._toValue-this._fromValue));
	
	if(this.__active){
	this._animationFrame=RequestAnimationFrame.current(this.onUpdate.bind(this));}}},{key:'stop',value:function stop()
	
	
	
	{
	this.__active=false;
	clearTimeout(this._timeout);
	CancelAnimationFrame.current(this._animationFrame);
	this.__debouncedOnEnd({finished:false});}}]);return TimingAnimation;}(Animation);
	
	
	
	module.exports=TimingAnimation;

/***/ },
/* 567 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	'use strict';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}
	
	var _bezier=__webpack_require__(568);
	
	/**
	 * This class implements common easing functions. The math is pretty obscure,
	 * but this cool website has nice visual illustrations of what they represent:
	 * http://xaedes.de/dev/transitions/
	 */var 
	Easing=function(){function Easing(){_classCallCheck(this,Easing);}_createClass(Easing,null,[{key:'step0',value:function step0(
	n){
	return n>0?1:0;}},{key:'step1',value:function step1(
	
	
	n){
	return n>=1?1:0;}},{key:'linear',value:function linear(
	
	
	t){
	return t;}},{key:'ease',value:function ease(
	
	
	t){
	return _ease(t);}},{key:'quad',value:function quad(
	
	
	t){
	return t*t;}},{key:'cubic',value:function cubic(
	
	
	t){
	return t*t*t;}},{key:'poly',value:function poly(
	
	
	n){
	return function(t){return Math.pow(t,n);};}},{key:'sin',value:function sin(
	
	
	t){
	return 1-Math.cos(t*Math.PI/2);}},{key:'circle',value:function circle(
	
	
	t){
	return 1-Math.sqrt(1-t*t);}},{key:'exp',value:function exp(
	
	
	t){
	return Math.pow(2,10*(t-1));}
	
	
	/**
	   * A simple elastic interaction, similar to a spring.  Default bounciness
	   * is 1, which overshoots a little bit once.  0 bounciness doesn't overshoot
	   * at all, and bounciness of N > 1 will overshoot about N times.
	   *
	   * Wolfram Plots:
	   *
	   *   http://tiny.cc/elastic_b_1 (default bounciness = 1)
	   *   http://tiny.cc/elastic_b_3 (bounciness = 3)
	   */},{key:'elastic',value:function elastic()
	{var bounciness=arguments.length<=0||arguments[0]===undefined?1:arguments[0];
	var p=bounciness*Math.PI;
	return function(t){return 1-Math.pow(Math.cos(t*Math.PI/2),3)*Math.cos(t*p);};}},{key:'back',value:function back(
	
	
	s){
	if(s===undefined){
	s=1.70158;}
	
	return function(t){return t*t*((s+1)*t-s);};}},{key:'bounce',value:function bounce(
	
	
	t){
	if(t<1/2.75){
	return 7.5625*t*t;}
	
	
	if(t<2/2.75){
	t-=1.5/2.75;
	return 7.5625*t*t+0.75;}
	
	
	if(t<2.5/2.75){
	t-=2.25/2.75;
	return 7.5625*t*t+0.9375;}
	
	
	t-=2.625/2.75;
	return 7.5625*t*t+0.984375;}},{key:'bezier',value:function bezier(
	
	
	
	x1,
	y1,
	x2,
	y2)
	{
	return _bezier(x1,y1,x2,y2);}},{key:'in',value:function _in(
	
	
	
	easing)
	{
	return easing;}
	
	
	/**
	   * Runs an easing function backwards.
	   */},{key:'out',value:function out(
	
	easing)
	{
	return function(t){return 1-easing(1-t);};}
	
	
	/**
	   * Makes any easing function symmetrical.
	   */},{key:'inOut',value:function inOut(
	
	easing)
	{
	return function(t){
	if(t<0.5){
	return easing(t*2)/2;}
	
	return 1-easing((1-t)*2)/2;};}}]);return Easing;}();
	
	
	
	
	var _ease=Easing.bezier(0.42,0,1,1);
	
	
	
	module.exports=Easing;

/***/ },
/* 568 */
/***/ function(module, exports) {

	/**
	 * https://github.com/gre/bezier-easing
	 * BezierEasing - use bezier curve for transition easing function
	 * by Gaëtan Renaudeau 2014 - 2015 – MIT License
	 * @nolint
	 */
	
	// These values are established by empiricism with tests (tradeoff: performance VS precision)
	var NEWTON_ITERATIONS=4;
	var NEWTON_MIN_SLOPE=0.001;
	var SUBDIVISION_PRECISION=0.0000001;
	var SUBDIVISION_MAX_ITERATIONS=10;
	
	var kSplineTableSize=11;
	var kSampleStepSize=1.0/(kSplineTableSize-1.0);
	
	var float32ArraySupported=typeof Float32Array==='function';
	
	function A(aA1,aA2){return 1.0-3.0*aA2+3.0*aA1;}
	function B(aA1,aA2){return 3.0*aA2-6.0*aA1;}
	function C(aA1){return 3.0*aA1;}
	
	// Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
	function calcBezier(aT,aA1,aA2){return ((A(aA1,aA2)*aT+B(aA1,aA2))*aT+C(aA1))*aT;}
	
	// Returns dx/dt given t, x1, and x2, or dy/dt given t, y1, and y2.
	function getSlope(aT,aA1,aA2){return 3.0*A(aA1,aA2)*aT*aT+2.0*B(aA1,aA2)*aT+C(aA1);}
	
	function binarySubdivide(aX,aA,aB,mX1,mX2){
	var currentX,currentT,i=0;
	do {
	currentT=aA+(aB-aA)/2.0;
	currentX=calcBezier(currentT,mX1,mX2)-aX;
	if(currentX>0.0){
	aB=currentT;}else 
	{
	aA=currentT;}}while(
	
	Math.abs(currentX)>SUBDIVISION_PRECISION&&++i<SUBDIVISION_MAX_ITERATIONS);
	return currentT;}
	
	
	function newtonRaphsonIterate(aX,aGuessT,mX1,mX2){
	for(var i=0;i<NEWTON_ITERATIONS;++i){
	var currentSlope=getSlope(aGuessT,mX1,mX2);
	if(currentSlope===0.0){
	return aGuessT;}
	
	var currentX=calcBezier(aGuessT,mX1,mX2)-aX;
	aGuessT-=currentX/currentSlope;}
	
	return aGuessT;}
	
	
	module.exports=function bezier(mX1,mY1,mX2,mY2){
	if(!(0<=mX1&&mX1<=1&&0<=mX2&&mX2<=1)){ // eslint-disable-line yoda
	throw new Error('bezier x values must be in [0, 1] range');}
	
	
	// Precompute samples table
	var sampleValues=float32ArraySupported?new Float32Array(kSplineTableSize):new Array(kSplineTableSize);
	if(mX1!==mY1||mX2!==mY2){
	for(var i=0;i<kSplineTableSize;++i){
	sampleValues[i]=calcBezier(i*kSampleStepSize,mX1,mX2);}}
	
	
	
	function getTForX(aX){
	var intervalStart=0.0;
	var currentSample=1;
	var lastSample=kSplineTableSize-1;
	
	for(;currentSample!==lastSample&&sampleValues[currentSample]<=aX;++currentSample){
	intervalStart+=kSampleStepSize;}
	
	--currentSample;
	
	// Interpolate to provide an initial guess for t
	var dist=(aX-sampleValues[currentSample])/(sampleValues[currentSample+1]-sampleValues[currentSample]);
	var guessForT=intervalStart+dist*kSampleStepSize;
	
	var initialSlope=getSlope(guessForT,mX1,mX2);
	if(initialSlope>=NEWTON_MIN_SLOPE){
	return newtonRaphsonIterate(aX,guessForT,mX1,mX2);}else 
	if(initialSlope===0.0){
	return guessForT;}else 
	{
	return binarySubdivide(aX,intervalStart,intervalStart+kSampleStepSize,mX1,mX2);}}
	
	
	
	return function BezierEasing(x){
	if(mX1===mY1&&mX2===mY2){
	return x; // linear
	}
	// Because JavaScript number are imprecise, we should guarantee the extremes are right.
	if(x===0){
	return 0;}
	
	if(x===1){
	return 1;}
	
	return calcBezier(getTForX(x),mY1,mY2);};};

/***/ },
/* 569 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	'use strict';
	
	var RequestAnimationFrame={
	current:function(cb){return global.requestAnimationFrame(cb);},
	inject:function(injected){
	RequestAnimationFrame.current=injected;}};
	
	
	
	module.exports=RequestAnimationFrame;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 570 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	'use strict';
	
	var CancelAnimationFrame={
	current:function(id){return global.cancelAnimationFrame(id);},
	inject:function(injected){
	CancelAnimationFrame.current=injected;}};
	
	
	
	module.exports=CancelAnimationFrame;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 571 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	'use strict';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}
	
	var Animation=__webpack_require__(507);
	var RequestAnimationFrame=__webpack_require__(569);
	var CancelAnimationFrame=__webpack_require__(570);var 
	
	
	
	
	
	
	
	
	DecayAnimation=function(_Animation){_inherits(DecayAnimation,_Animation);
	
	
	
	
	
	
	
	
	function DecayAnimation(
	config)
	{_classCallCheck(this,DecayAnimation);var _this=_possibleConstructorReturn(this,Object.getPrototypeOf(DecayAnimation).call(this));
	
	_this._deceleration=config.deceleration!==undefined?config.deceleration:0.998;
	_this._velocity=config.velocity;
	_this.__isInteraction=config.isInteraction!==undefined?config.isInteraction:true;return _this;}_createClass(DecayAnimation,[{key:'start',value:function start(
	
	
	
	fromValue,
	onUpdate,
	onEnd)
	{
	this.__active=true;
	this._lastValue=fromValue;
	this._fromValue=fromValue;
	this._onUpdate=onUpdate;
	this.__onEnd=onEnd;
	this._startTime=Date.now();
	this._animationFrame=RequestAnimationFrame.current(this.onUpdate.bind(this));}},{key:'onUpdate',value:function onUpdate()
	
	
	{
	var now=Date.now();
	
	var value=this._fromValue+
	this._velocity/(1-this._deceleration)*(
	1-Math.exp(-(1-this._deceleration)*(now-this._startTime)));
	
	this._onUpdate(value);
	
	if(Math.abs(this._lastValue-value)<0.1){
	this.__debouncedOnEnd({finished:true});
	return;}
	
	
	this._lastValue=value;
	if(this.__active){
	this._animationFrame=RequestAnimationFrame.current(this.onUpdate.bind(this));}}},{key:'stop',value:function stop()
	
	
	
	{
	this.__active=false;
	CancelAnimationFrame.current(this._animationFrame);
	this.__debouncedOnEnd({finished:false});}}]);return DecayAnimation;}(Animation);
	
	
	
	module.exports=DecayAnimation;

/***/ },
/* 572 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	'use strict';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}
	
	var Animation=__webpack_require__(507);
	var AnimatedValue=__webpack_require__(500);
	var RequestAnimationFrame=__webpack_require__(569);
	var CancelAnimationFrame=__webpack_require__(570);
	var invariant=__webpack_require__(498);
	var SpringConfig=__webpack_require__(573);
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function withDefault(value,defaultValue){
	if(value===undefined||value===null){
	return defaultValue;}
	
	return value;}var 
	
	
	SpringAnimation=function(_Animation){_inherits(SpringAnimation,_Animation);
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function SpringAnimation(
	config)
	{_classCallCheck(this,SpringAnimation);var _this=_possibleConstructorReturn(this,Object.getPrototypeOf(SpringAnimation).call(this));
	
	
	_this._overshootClamping=withDefault(config.overshootClamping,false);
	_this._restDisplacementThreshold=withDefault(config.restDisplacementThreshold,0.001);
	_this._restSpeedThreshold=withDefault(config.restSpeedThreshold,0.001);
	_this._initialVelocity=config.velocity;
	_this._lastVelocity=withDefault(config.velocity,0);
	_this._toValue=config.toValue;
	_this.__isInteraction=config.isInteraction!==undefined?config.isInteraction:true;
	
	var springConfig;
	if(config.bounciness!==undefined||config.speed!==undefined){
	invariant(
	config.tension===undefined&&config.friction===undefined,
	'You can only define bounciness/speed or tension/friction but not both');
	
	springConfig=SpringConfig.fromBouncinessAndSpeed(
	withDefault(config.bounciness,8),
	withDefault(config.speed,12));}else 
	
	{
	springConfig=SpringConfig.fromOrigamiTensionAndFriction(
	withDefault(config.tension,40),
	withDefault(config.friction,7));}
	
	
	_this._tension=springConfig.tension;
	_this._friction=springConfig.friction;return _this;}_createClass(SpringAnimation,[{key:'start',value:function start(
	
	
	
	fromValue,
	onUpdate,
	onEnd,
	previousAnimation)
	{
	this.__active=true;
	this._startPosition=fromValue;
	this._lastPosition=this._startPosition;
	
	this._onUpdate=onUpdate;
	this.__onEnd=onEnd;
	this._lastTime=Date.now();
	
	if(previousAnimation instanceof SpringAnimation){
	var internalState=previousAnimation.getInternalState();
	this._lastPosition=internalState.lastPosition;
	this._lastVelocity=internalState.lastVelocity;
	this._lastTime=internalState.lastTime;}
	
	if(this._initialVelocity!==undefined&&
	this._initialVelocity!==null){
	this._lastVelocity=this._initialVelocity;}
	
	this.onUpdate();}},{key:'getInternalState',value:function getInternalState()
	
	
	{
	return {
	lastPosition:this._lastPosition,
	lastVelocity:this._lastVelocity,
	lastTime:this._lastTime};}},{key:'onUpdate',value:function onUpdate()
	
	
	
	{
	var position=this._lastPosition;
	var velocity=this._lastVelocity;
	
	var tempPosition=this._lastPosition;
	var tempVelocity=this._lastVelocity;
	
	// If for some reason we lost a lot of frames (e.g. process large payload or
	// stopped in the debugger), we only advance by 4 frames worth of
	// computation and will continue on the next frame. It's better to have it
	// running at faster speed than jumping to the end.
	var MAX_STEPS=64;
	var now=Date.now();
	if(now>this._lastTime+MAX_STEPS){
	now=this._lastTime+MAX_STEPS;}
	
	
	// We are using a fixed time step and a maximum number of iterations.
	// The following post provides a lot of thoughts into how to build this
	// loop: http://gafferongames.com/game-physics/fix-your-timestep/
	var TIMESTEP_MSEC=1;
	var numSteps=Math.floor((now-this._lastTime)/TIMESTEP_MSEC);
	
	for(var i=0;i<numSteps;++i){
	// Velocity is based on seconds instead of milliseconds
	var step=TIMESTEP_MSEC/1000;
	
	// This is using RK4. A good blog post to understand how it works:
	// http://gafferongames.com/game-physics/integration-basics/
	var aVelocity=velocity;
	var aAcceleration=this._tension*(this._toValue-tempPosition)-this._friction*tempVelocity;
	var tempPosition=position+aVelocity*step/2;
	var tempVelocity=velocity+aAcceleration*step/2;
	
	var bVelocity=tempVelocity;
	var bAcceleration=this._tension*(this._toValue-tempPosition)-this._friction*tempVelocity;
	tempPosition=position+bVelocity*step/2;
	tempVelocity=velocity+bAcceleration*step/2;
	
	var cVelocity=tempVelocity;
	var cAcceleration=this._tension*(this._toValue-tempPosition)-this._friction*tempVelocity;
	tempPosition=position+cVelocity*step/2;
	tempVelocity=velocity+cAcceleration*step/2;
	
	var dVelocity=tempVelocity;
	var dAcceleration=this._tension*(this._toValue-tempPosition)-this._friction*tempVelocity;
	tempPosition=position+cVelocity*step/2;
	tempVelocity=velocity+cAcceleration*step/2;
	
	var dxdt=(aVelocity+2*(bVelocity+cVelocity)+dVelocity)/6;
	var dvdt=(aAcceleration+2*(bAcceleration+cAcceleration)+dAcceleration)/6;
	
	position+=dxdt*step;
	velocity+=dvdt*step;}
	
	
	this._lastTime=now;
	this._lastPosition=position;
	this._lastVelocity=velocity;
	
	this._onUpdate(position);
	if(!this.__active){ // a listener might have stopped us in _onUpdate
	return;}
	
	
	// Conditions for stopping the spring animation
	var isOvershooting=false;
	if(this._overshootClamping&&this._tension!==0){
	if(this._startPosition<this._toValue){
	isOvershooting=position>this._toValue;}else 
	{
	isOvershooting=position<this._toValue;}}
	
	
	var isVelocity=Math.abs(velocity)<=this._restSpeedThreshold;
	var isDisplacement=true;
	if(this._tension!==0){
	isDisplacement=Math.abs(this._toValue-position)<=this._restDisplacementThreshold;}
	
	
	if(isOvershooting||isVelocity&&isDisplacement){
	if(this._tension!==0){
	// Ensure that we end up with a round value
	this._onUpdate(this._toValue);}
	
	
	this.__debouncedOnEnd({finished:true});
	return;}
	
	this._animationFrame=RequestAnimationFrame.current(this.onUpdate.bind(this));}},{key:'stop',value:function stop()
	
	
	{
	this.__active=false;
	CancelAnimationFrame.current(this._animationFrame);
	this.__debouncedOnEnd({finished:false});}}]);return SpringAnimation;}(Animation);
	
	
	
	module.exports=SpringAnimation;

/***/ },
/* 573 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	
	'use strict';
	
	
	
	
	
	
	function tensionFromOrigamiValue(oValue){
	return (oValue-30)*3.62+194;}
	
	
	function frictionFromOrigamiValue(oValue){
	return (oValue-8)*3+25;}
	
	
	function fromOrigamiTensionAndFriction(
	tension,
	friction)
	{
	return {
	tension:tensionFromOrigamiValue(tension),
	friction:frictionFromOrigamiValue(friction)};}
	
	
	
	function fromBouncinessAndSpeed(
	bounciness,
	speed)
	{
	function normalize(value,startValue,endValue){
	return (value-startValue)/(endValue-startValue);}
	
	
	function projectNormal(n,start,end){
	return start+n*(end-start);}
	
	
	function linearInterpolation(t,start,end){
	return t*end+(1-t)*start;}
	
	
	function quadraticOutInterpolation(t,start,end){
	return linearInterpolation(2*t-t*t,start,end);}
	
	
	function b3Friction1(x){
	return 0.0007*Math.pow(x,3)-
	0.031*Math.pow(x,2)+0.64*x+1.28;}
	
	
	function b3Friction2(x){
	return 0.000044*Math.pow(x,3)-
	0.006*Math.pow(x,2)+0.36*x+2;}
	
	
	function b3Friction3(x){
	return 0.00000045*Math.pow(x,3)-
	0.000332*Math.pow(x,2)+0.1078*x+5.84;}
	
	
	function b3Nobounce(tension){
	if(tension<=18){
	return b3Friction1(tension);}else 
	if(tension>18&&tension<=44){
	return b3Friction2(tension);}else 
	{
	return b3Friction3(tension);}}
	
	
	
	var b=normalize(bounciness/1.7,0,20);
	b=projectNormal(b,0,0.8);
	var s=normalize(speed/1.7,0,20);
	var bouncyTension=projectNormal(s,0.5,200);
	var bouncyFriction=quadraticOutInterpolation(
	b,
	b3Nobounce(bouncyTension),
	0.01);
	
	
	return {
	tension:tensionFromOrigamiValue(bouncyTension),
	friction:frictionFromOrigamiValue(bouncyFriction)};}
	
	
	
	module.exports={
	fromOrigamiTensionAndFriction:fromOrigamiTensionAndFriction,
	fromBouncinessAndSpeed:fromBouncinessAndSpeed};

/***/ },
/* 574 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	'use strict';var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}
	
	var React=__webpack_require__(301);
	var AnimatedProps=__webpack_require__(575);
	var ApplyAnimatedValues=__webpack_require__(579);
	
	function createAnimatedComponent(Component){
	var refName='node';var 
	
	AnimatedComponent=function(_React$Component){_inherits(AnimatedComponent,_React$Component);function AnimatedComponent(){_classCallCheck(this,AnimatedComponent);return _possibleConstructorReturn(this,Object.getPrototypeOf(AnimatedComponent).apply(this,arguments));}_createClass(AnimatedComponent,[{key:'componentWillUnmount',value:function componentWillUnmount()
	
	
	{
	this._propsAnimated&&this._propsAnimated.__detach();}},{key:'setNativeProps',value:function setNativeProps(
	
	
	props){
	var didUpdate=ApplyAnimatedValues.current(this.refs[refName],props);
	if(didUpdate===false){
	this.forceUpdate();}}},{key:'componentWillMount',value:function componentWillMount()
	
	
	
	{
	this.attachProps(this.props);}},{key:'attachProps',value:function attachProps(
	
	
	nextProps){var _this2=this;
	var oldPropsAnimated=this._propsAnimated;
	
	// The system is best designed when setNativeProps is implemented. It is
	// able to avoid re-rendering and directly set the attributes that
	// changed. However, setNativeProps can only be implemented on leaf
	// native components. If you want to animate a composite component, you
	// need to re-render it. In this case, we have a fallback that uses
	// forceUpdate.
	var callback=function(){
	var didUpdate=ApplyAnimatedValues.current(_this2.refs[refName],_this2._propsAnimated.__getAnimatedValue());
	if(didUpdate===false){
	_this2.forceUpdate();}};
	
	
	
	this._propsAnimated=new AnimatedProps(
	nextProps,
	callback);
	
	
	// When you call detach, it removes the element from the parent list
	// of children. If it goes to 0, then the parent also detaches itself
	// and so on.
	// An optimization is to attach the new elements and THEN detach the old
	// ones instead of detaching and THEN attaching.
	// This way the intermediate state isn't to go to 0 and trigger
	// this expensive recursive detaching to then re-attach everything on
	// the very next operation.
	oldPropsAnimated&&oldPropsAnimated.__detach();}},{key:'componentWillReceiveProps',value:function componentWillReceiveProps(
	
	
	nextProps){
	this.attachProps(nextProps);}},{key:'render',value:function render()
	
	
	{
	return (
	React.createElement(Component,_extends({},
	this._propsAnimated.__getValue(),{
	ref:refName})));}}]);return AnimatedComponent;}(React.Component);
	
	
	
	
	AnimatedComponent.propTypes={
	style:function(props,propName,componentName){
	if(!Component.propTypes){
	return;}
	
	
	// TODO(lmr): We will probably bring this back in at some point, but maybe
	// just a subset of the proptypes... We should have a common set of props
	// that will be used for all platforms.
	//
	// for (var key in ViewStylePropTypes) {
	//   if (!Component.propTypes[key] && props[key] !== undefined) {
	//     console.error(
	//       'You are setting the style `{ ' + key + ': ... }` as a prop. You ' +
	//       'should nest it in a style object. ' +
	//       'E.g. `{ style: { ' + key + ': ... } }`'
	//     );
	//   }
	// }
	}};
	
	
	return AnimatedComponent;}
	
	
	module.exports=createAnimatedComponent;

/***/ },
/* 575 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	'use strict';var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}
	
	var Animated=__webpack_require__(499);
	var AnimatedStyle=__webpack_require__(576);var 
	
	AnimatedProps=function(_Animated){_inherits(AnimatedProps,_Animated);
	
	
	
	function AnimatedProps(
	props,
	callback)
	{_classCallCheck(this,AnimatedProps);var _this=_possibleConstructorReturn(this,Object.getPrototypeOf(AnimatedProps).call(this));
	
	if(props.style){
	props=_extends({},
	props,{
	style:new AnimatedStyle(props.style)});}
	
	
	_this._props=props;
	_this._callback=callback;
	_this.__attach();return _this;}_createClass(AnimatedProps,[{key:'__getValue',value:function __getValue()
	
	
	{
	var props={};
	for(var key in this._props){
	var value=this._props[key];
	if(value instanceof Animated){
	props[key]=value.__getValue();}else 
	{
	props[key]=value;}}
	
	
	return props;}},{key:'__getAnimatedValue',value:function __getAnimatedValue()
	
	
	{
	var props={};
	for(var key in this._props){
	var value=this._props[key];
	if(value instanceof Animated){
	props[key]=value.__getAnimatedValue();}}
	
	
	return props;}},{key:'__attach',value:function __attach()
	
	
	{
	for(var key in this._props){
	var value=this._props[key];
	if(value instanceof Animated){
	value.__addChild(this);}}}},{key:'__detach',value:function __detach()
	
	
	
	
	{
	for(var key in this._props){
	var value=this._props[key];
	if(value instanceof Animated){
	value.__removeChild(this);}}}},{key:'update',value:function update()
	
	
	
	
	{
	this._callback();}}]);return AnimatedProps;}(Animated);
	
	
	
	module.exports=AnimatedProps;

/***/ },
/* 576 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	'use strict';var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}
	
	var Animated=__webpack_require__(499);
	var AnimatedWithChildren=__webpack_require__(501);
	var AnimatedTransform=__webpack_require__(577);
	var FlattenStyle=__webpack_require__(578);var 
	
	AnimatedStyle=function(_AnimatedWithChildren){_inherits(AnimatedStyle,_AnimatedWithChildren);
	
	
	function AnimatedStyle(style){_classCallCheck(this,AnimatedStyle);var _this=_possibleConstructorReturn(this,Object.getPrototypeOf(AnimatedStyle).call(this));
	
	style=FlattenStyle.current(style)||{};
	if(style.transform&&!(style.transform instanceof Animated)){
	style=_extends({},
	style,{
	transform:new AnimatedTransform(style.transform)});}
	
	
	_this._style=style;return _this;}_createClass(AnimatedStyle,[{key:'__getValue',value:function __getValue()
	
	
	{
	var style={};
	for(var key in this._style){
	var value=this._style[key];
	if(value instanceof Animated){
	style[key]=value.__getValue();}else 
	{
	style[key]=value;}}
	
	
	return style;}},{key:'__getAnimatedValue',value:function __getAnimatedValue()
	
	
	{
	var style={};
	for(var key in this._style){
	var value=this._style[key];
	if(value instanceof Animated){
	style[key]=value.__getAnimatedValue();}}
	
	
	return style;}},{key:'__attach',value:function __attach()
	
	
	{
	for(var key in this._style){
	var value=this._style[key];
	if(value instanceof Animated){
	value.__addChild(this);}}}},{key:'__detach',value:function __detach()
	
	
	
	
	{
	for(var key in this._style){
	var value=this._style[key];
	if(value instanceof Animated){
	value.__removeChild(this);}}}}]);return AnimatedStyle;}(AnimatedWithChildren);
	
	
	
	
	
	module.exports=AnimatedStyle;

/***/ },
/* 577 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	'use strict';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}
	
	var Animated=__webpack_require__(499);
	var AnimatedWithChildren=__webpack_require__(501);var 
	
	AnimatedTransform=function(_AnimatedWithChildren){_inherits(AnimatedTransform,_AnimatedWithChildren);
	
	
	function AnimatedTransform(transforms){_classCallCheck(this,AnimatedTransform);var _this=_possibleConstructorReturn(this,Object.getPrototypeOf(AnimatedTransform).call(this));
	
	_this._transforms=transforms;return _this;}_createClass(AnimatedTransform,[{key:'__getValue',value:function __getValue()
	
	
	{
	return this._transforms.map(function(transform){
	var result={};
	for(var key in transform){
	var value=transform[key];
	if(value instanceof Animated){
	result[key]=value.__getValue();}else 
	{
	result[key]=value;}}
	
	
	return result;});}},{key:'__getAnimatedValue',value:function __getAnimatedValue()
	
	
	
	{
	return this._transforms.map(function(transform){
	var result={};
	for(var key in transform){
	var value=transform[key];
	if(value instanceof Animated){
	result[key]=value.__getAnimatedValue();}else 
	{
	// All transform components needed to recompose matrix
	result[key]=value;}}
	
	
	return result;});}},{key:'__attach',value:function __attach()
	
	
	
	{var _this2=this;
	this._transforms.forEach(function(transform){
	for(var key in transform){
	var value=transform[key];
	if(value instanceof Animated){
	value.__addChild(_this2);}}});}},{key:'__detach',value:function __detach()
	
	
	
	
	
	{var _this3=this;
	this._transforms.forEach(function(transform){
	for(var key in transform){
	var value=transform[key];
	if(value instanceof Animated){
	value.__removeChild(_this3);}}});}}]);return AnimatedTransform;}(AnimatedWithChildren);
	
	
	
	
	
	
	module.exports=AnimatedTransform;

/***/ },
/* 578 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	'use strict';
	
	var FlattenStyle={
	current:function(style){return style;},
	inject:function(flatten){
	FlattenStyle.current=flatten;}};
	
	
	
	module.exports=FlattenStyle;

/***/ },
/* 579 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	'use strict';
	
	var ApplyAnimatedValues={
	current:function ApplyAnimatedValues(instance,props){
	if(instance.setNativeProps){
	instance.setNativeProps(props);}else 
	{
	return false;}},
	
	
	inject:function(apply){
	ApplyAnimatedValues.current=apply;}};
	
	
	
	module.exports=ApplyAnimatedValues;

/***/ },
/* 580 */
/***/ function(module, exports, __webpack_require__) {

	
	
	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	Object.defineProperty(exports, "__esModule", { value: true });var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _react = __webpack_require__(301);var _react2 = _interopRequireDefault(_react);
	var _ReactView = __webpack_require__(343);var _ReactView2 = _interopRequireDefault(_ReactView);
	var _ReactLayoutMixin = __webpack_require__(344);
	var _ImageResizeMode = __webpack_require__(581);var _ImageResizeMode2 = _interopRequireDefault(_ImageResizeMode);
	var _NativeMethodsMixin = __webpack_require__(484);
	var _reactMixin = __webpack_require__(491);var _reactMixin2 = _interopRequireDefault(_reactMixin);function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}var Image = function (_Component) {
	  _inherits(Image, _Component);function Image() {
	    _classCallCheck(this, Image);return _possibleConstructorReturn(this, (Image.__proto__ || Object.getPrototypeOf(Image)).apply(this, arguments));
	  }_createClass(Image, [{ key: 'render', value: function render() {
	
	      var props = _extends({}, this.props);
	      props.src = typeof props.source === 'string' ? props.source : props.source.uri;
	
	      var resizeMode = this.props.resizeMode;
	
	      if ((this.props.children || resizeMode && resizeMode !== 'stretch') && !this.context.isInAParentText) {
	        var containerStyles = props.style ? props.style : {};
	        containerStyles.backgroundImage = 'url("' + props.src + '")';
	        containerStyles.backgroundSize = resizeMode || 'cover';
	        containerStyles.backgroundRepeat = 'no-repeat';
	        containerStyles.backgroundPosition = '50%';
	
	        return _react2.default.createElement(_ReactView2.default, { style: containerStyles, 'data-src': props.src }, this.props.children);
	      } else {
	        return _react2.default.createElement('img', props);
	      }
	    } }]);return Image;
	}(_react.Component);Image.resizeMode = _ImageResizeMode2.default;Image.contextTypes = { isInAParentText: _react2.default.PropTypes.bool };Image.getSize = function (url, success, failure) {
	  var wrap = document.createElement('div'),
	      img = new window.Image(),
	      loadedHandler = function loadedHandler() {
	    img.removeEventListener('load', loadedHandler);success && success(img.offsetWidth, img.offsetHeight);
	  },
	      errorHandler = function errorHandler() {
	    img.removeEventListener('error', errorHandler);failure && failure();
	  };wrap.style.cssText = 'height:0px;width:0px;overflow:hidden;visibility:hidden;';wrap.appendChild(img);document.body.appendChild(wrap);img.src = url;if (!img.complete) {
	    img.addEventListener('error', errorHandler);img.addEventListener('load', loadedHandler);
	  } else {
	    loadedHandler();
	  }
	};
	
	_reactMixin2.default.onClass(Image, _ReactLayoutMixin.Mixin);
	_reactMixin2.default.onClass(Image, _NativeMethodsMixin.Mixin);
	
	Image.isReactNativeComponent = true;exports.default = Image;

/***/ },
/* 581 */
/***/ function(module, exports, __webpack_require__) {

	
	
	'use strict';
	
	var _keyMirror = __webpack_require__(582);var _keyMirror2 = _interopRequireDefault(_keyMirror);function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	var ImageResizeMode = (0, _keyMirror2.default)({
	
	  contain: null,
	
	  cover: null,
	
	  stretch: null });
	
	module.exports = ImageResizeMode;

/***/ },
/* 582 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks static-only
	 */
	
	'use strict';
	
	var invariant = __webpack_require__(583);
	
	/**
	 * Constructs an enumeration with keys equal to their value.
	 *
	 * For example:
	 *
	 *   var COLORS = keyMirror({blue: null, red: null});
	 *   var myColor = COLORS.blue;
	 *   var isColorValid = !!COLORS[myColor];
	 *
	 * The last line could not be performed if the values of the generated enum were
	 * not equal to their keys.
	 *
	 *   Input:  {key1: val1, key2: val2}
	 *   Output: {key1: key1, key2: key2}
	 *
	 * @param {object} obj
	 * @return {object}
	 */
	var keyMirror = function keyMirror(obj) {
	  var ret = {};
	  var key;
	  !(obj instanceof Object && !Array.isArray(obj)) ?  true ? invariant(false, 'keyMirror(...): Argument must be an object.') : invariant(false) : void 0;
	  for (key in obj) {
	    if (!obj.hasOwnProperty(key)) {
	      continue;
	    }
	    ret[key] = key;
	  }
	  return ret;
	};
	
	module.exports = keyMirror;

/***/ },
/* 583 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */
	
	function invariant(condition, format, a, b, c, d, e, f) {
	  if (true) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }
	
	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }
	
	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}
	
	module.exports = invariant;

/***/ },
/* 584 */
/***/ function(module, exports, __webpack_require__) {

	
	
	'use strict';
	Object.defineProperty(exports, "__esModule", { value: true });var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};
	
	var _react = __webpack_require__(301);var _react2 = _interopRequireDefault(_react);
	var _ReactTouchable = __webpack_require__(585);
	var _ReactLayoutMixin = __webpack_require__(344);
	var _NativeMethodsMixin = __webpack_require__(484);function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	var Text = _react2.default.createClass({ displayName: 'Text',
	
	  mixins: [_ReactLayoutMixin.Mixin, _ReactTouchable.Mixin, _NativeMethodsMixin.Mixin],
	
	  propTypes: {
	
	    numberOfLines: _react2.default.PropTypes.number,
	
	    onLayout: _react2.default.PropTypes.func,
	
	    onPress: _react2.default.PropTypes.func,
	
	    suppressHighlighting: _react2.default.PropTypes.bool,
	
	    testID: _react2.default.PropTypes.string,
	
	    allowFontScaling: _react2.default.PropTypes.bool },
	
	  getInitialState: function getInitialState() {
	    return _extends({}, this.touchableGetInitialState(), {
	      isHighlighted: false });
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      allowFontScaling: true };
	  },
	
	  onStartShouldSetResponder: function onStartShouldSetResponder() {
	    var shouldSetFromProps = this.props.onStartShouldSetResponder && this.props.onStartShouldSetResponder();
	    return shouldSetFromProps || !!this.props.onPress;
	  },
	
	  handleResponderTerminationRequest: function handleResponderTerminationRequest() {
	
	    var allowTermination = this.touchableHandleResponderTerminationRequest();
	    if (allowTermination && this.props.onResponderTerminationRequest) {
	      allowTermination = this.props.onResponderTerminationRequest();
	    }
	    return allowTermination;
	  },
	
	  handleResponderGrant: function handleResponderGrant(e, dispatchID) {
	    this.touchableHandleResponderGrant(e, dispatchID);
	    this.props.onResponderGrant && this.props.onResponderGrant.apply(this, arguments);
	  },
	
	  handleResponderMove: function handleResponderMove(e) {
	    this.touchableHandleResponderMove(e);
	    this.props.onResponderMove && this.props.onResponderMove.apply(this, arguments);
	  },
	
	  handleResponderRelease: function handleResponderRelease(e) {
	    this.touchableHandleResponderRelease(e);
	    this.props.onResponderRelease && this.props.onResponderRelease.apply(this, arguments);
	  },
	
	  handleResponderTerminate: function handleResponderTerminate(e) {
	    this.touchableHandleResponderTerminate(e);
	    this.props.onResponderTerminate && this.props.onResponderTerminate.apply(this, arguments);
	  },
	
	  touchableHandleActivePressIn: function touchableHandleActivePressIn() {
	    if (this.props.suppressHighlighting || !this.props.onPress) {
	      return;
	    }
	    this.setState({
	      isHighlighted: true });
	  },
	
	  touchableHandleActivePressOut: function touchableHandleActivePressOut() {
	    if (this.props.suppressHighlighting || !this.props.onPress) {
	      return;
	    }
	    this.setState({
	      isHighlighted: false });
	  },
	
	  touchableHandlePress: function touchableHandlePress() {
	    this.props.onPress && this.props.onPress();
	  },
	
	  touchableGetPressRectOffset: function touchableGetPressRectOffset() {
	    return PRESS_RECT_OFFSET;
	  },
	
	  getChildContext: function getChildContext() {
	    return { isInAParentText: true };
	  },
	
	  contextTypes: {
	    isInAParentText: _react2.default.PropTypes.bool },
	
	  childContextTypes: {
	    isInAParentText: _react2.default.PropTypes.bool },
	
	  render: function render() {
	    var props = _extends({}, this.props);
	
	    if (props.accessible !== false) {
	      props.accessible = true;
	    }
	    props.isHighlighted = this.state.isHighlighted;
	    props.onStartShouldSetResponder = this.onStartShouldSetResponder;
	    props.onResponderTerminationRequest = this.handleResponderTerminationRequest;
	    props.onResponderGrant = this.handleResponderGrant;
	    props.onResponderMove = this.handleResponderMove;
	    props.onResponderRelease = this.handleResponderRelease;
	    props.onResponderTerminate = this.handleResponderTerminate;var numberOfLines = props.numberOfLines;var style = props.style;
	
	    style = _extends({}, props.style);
	
	    if (typeof style.lineHeight == 'number') {
	      style.lineHeight += 'px';
	    }
	
	    var lineHeight = style.lineHeight || (style.fontSize || 16) * 1.2;
	    if (typeof lineHeight == 'number') {
	      lineHeight += 'px';
	    }
	    style.lineHeight = lineHeight;
	
	    if (style.textDecorationLine) {
	      style.textDecoration = style.textDecorationLine;
	    }
	
	    if (!props.children) {}
	
	    return _react2.default.createElement('span', _extends({}, props, {
	      style: _extends({
	        display: this.context.isInAParentText ? 'inline' : 'inline-block',
	        margin: 0,
	        padding: 0,
	        wordWrap: 'break-word',
	        fontFamily: 'Helvetica Neue, STHeiTi, sans-serif' }, style, numberOfLines && {
	        overflow: 'hidden',
	        textOverflow: 'ellipsis',
	        wordWrap: 'break-word',
	        display: '-webkit-box',
	        WebkitLineClamp: numberOfLines,
	        WebkitBoxOrient: 'vertical',
	        maxHeight: parseFloat(lineHeight) * numberOfLines }) }));
	  } });
	
	var PRESS_RECT_OFFSET = { top: 20, left: 20, right: 20, bottom: 30 };
	
	Text.isReactNativeComponent = true;exports.default = Text;

/***/ },
/* 585 */
/***/ function(module, exports, __webpack_require__) {

	
	
	'use strict';
	
	var _TouchEventUtils = __webpack_require__(586);var _TouchEventUtils2 = _interopRequireDefault(_TouchEventUtils);
	var _keyMirror = __webpack_require__(582);var _keyMirror2 = _interopRequireDefault(_keyMirror);function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	var States = (0, _keyMirror2.default)({
	  NOT_RESPONDER: null,
	  RESPONDER_INACTIVE_PRESS_IN: null,
	  RESPONDER_INACTIVE_PRESS_OUT: null,
	  RESPONDER_ACTIVE_PRESS_IN: null,
	  RESPONDER_ACTIVE_PRESS_OUT: null,
	  RESPONDER_ACTIVE_LONG_PRESS_IN: null,
	  RESPONDER_ACTIVE_LONG_PRESS_OUT: null,
	  ERROR: null });
	
	var IsActive = {
	  RESPONDER_ACTIVE_PRESS_OUT: true,
	  RESPONDER_ACTIVE_PRESS_IN: true };
	
	var IsPressingIn = {
	  RESPONDER_INACTIVE_PRESS_IN: true,
	  RESPONDER_ACTIVE_PRESS_IN: true,
	  RESPONDER_ACTIVE_LONG_PRESS_IN: true };
	
	var IsLongPressingIn = {
	  RESPONDER_ACTIVE_LONG_PRESS_IN: true };
	
	var Signals = (0, _keyMirror2.default)({
	  DELAY: null,
	  RESPONDER_GRANT: null,
	  RESPONDER_RELEASE: null,
	  RESPONDER_TERMINATED: null,
	  ENTER_PRESS_RECT: null,
	  LEAVE_PRESS_RECT: null,
	  LONG_PRESS_DETECTED: null });
	
	var Transitions = {
	  NOT_RESPONDER: {
	    DELAY: States.ERROR,
	    RESPONDER_GRANT: States.RESPONDER_INACTIVE_PRESS_IN,
	    RESPONDER_RELEASE: States.ERROR,
	    RESPONDER_TERMINATED: States.ERROR,
	    ENTER_PRESS_RECT: States.ERROR,
	    LEAVE_PRESS_RECT: States.ERROR,
	    LONG_PRESS_DETECTED: States.ERROR },
	
	  RESPONDER_INACTIVE_PRESS_IN: {
	    DELAY: States.RESPONDER_ACTIVE_PRESS_IN,
	    RESPONDER_GRANT: States.ERROR,
	    RESPONDER_RELEASE: States.NOT_RESPONDER,
	    RESPONDER_TERMINATED: States.NOT_RESPONDER,
	    ENTER_PRESS_RECT: States.RESPONDER_INACTIVE_PRESS_IN,
	    LEAVE_PRESS_RECT: States.RESPONDER_INACTIVE_PRESS_OUT,
	    LONG_PRESS_DETECTED: States.ERROR },
	
	  RESPONDER_INACTIVE_PRESS_OUT: {
	    DELAY: States.RESPONDER_ACTIVE_PRESS_OUT,
	    RESPONDER_GRANT: States.ERROR,
	    RESPONDER_RELEASE: States.NOT_RESPONDER,
	    RESPONDER_TERMINATED: States.NOT_RESPONDER,
	    ENTER_PRESS_RECT: States.RESPONDER_INACTIVE_PRESS_IN,
	    LEAVE_PRESS_RECT: States.RESPONDER_INACTIVE_PRESS_OUT,
	    LONG_PRESS_DETECTED: States.ERROR },
	
	  RESPONDER_ACTIVE_PRESS_IN: {
	    DELAY: States.ERROR,
	    RESPONDER_GRANT: States.ERROR,
	    RESPONDER_RELEASE: States.NOT_RESPONDER,
	    RESPONDER_TERMINATED: States.NOT_RESPONDER,
	    ENTER_PRESS_RECT: States.RESPONDER_ACTIVE_PRESS_IN,
	    LEAVE_PRESS_RECT: States.RESPONDER_ACTIVE_PRESS_OUT,
	    LONG_PRESS_DETECTED: States.RESPONDER_ACTIVE_LONG_PRESS_IN },
	
	  RESPONDER_ACTIVE_PRESS_OUT: {
	    DELAY: States.ERROR,
	    RESPONDER_GRANT: States.ERROR,
	    RESPONDER_RELEASE: States.NOT_RESPONDER,
	    RESPONDER_TERMINATED: States.NOT_RESPONDER,
	    ENTER_PRESS_RECT: States.RESPONDER_ACTIVE_PRESS_IN,
	    LEAVE_PRESS_RECT: States.RESPONDER_ACTIVE_PRESS_OUT,
	    LONG_PRESS_DETECTED: States.ERROR },
	
	  RESPONDER_ACTIVE_LONG_PRESS_IN: {
	    DELAY: States.ERROR,
	    RESPONDER_GRANT: States.ERROR,
	    RESPONDER_RELEASE: States.NOT_RESPONDER,
	    RESPONDER_TERMINATED: States.NOT_RESPONDER,
	    ENTER_PRESS_RECT: States.RESPONDER_ACTIVE_LONG_PRESS_IN,
	    LEAVE_PRESS_RECT: States.RESPONDER_ACTIVE_LONG_PRESS_OUT,
	    LONG_PRESS_DETECTED: States.RESPONDER_ACTIVE_LONG_PRESS_IN },
	
	  RESPONDER_ACTIVE_LONG_PRESS_OUT: {
	    DELAY: States.ERROR,
	    RESPONDER_GRANT: States.ERROR,
	    RESPONDER_RELEASE: States.NOT_RESPONDER,
	    RESPONDER_TERMINATED: States.NOT_RESPONDER,
	    ENTER_PRESS_RECT: States.RESPONDER_ACTIVE_LONG_PRESS_IN,
	    LEAVE_PRESS_RECT: States.RESPONDER_ACTIVE_LONG_PRESS_OUT,
	    LONG_PRESS_DETECTED: States.ERROR },
	
	  error: {
	    DELAY: States.NOT_RESPONDER,
	    RESPONDER_GRANT: States.RESPONDER_INACTIVE_PRESS_IN,
	    RESPONDER_RELEASE: States.NOT_RESPONDER,
	    RESPONDER_TERMINATED: States.NOT_RESPONDER,
	    ENTER_PRESS_RECT: States.NOT_RESPONDER,
	    LEAVE_PRESS_RECT: States.NOT_RESPONDER,
	    LONG_PRESS_DETECTED: States.NOT_RESPONDER } };
	
	var HIGHLIGHT_DELAY_MS = 130;
	
	var PRESS_EXPAND_PX = 20;
	
	var LONG_PRESS_THRESHOLD = 500;
	
	var LONG_PRESS_DELAY_MS = LONG_PRESS_THRESHOLD - HIGHLIGHT_DELAY_MS;
	
	var LONG_PRESS_ALLOWED_MOVEMENT = 10;
	
	var TouchableMixin = {
	
	  touchableGetInitialState: function touchableGetInitialState() {
	    return {
	      touchable: {
	        touchState: undefined,
	        responderID: null } };
	  },
	
	  touchableHandleResponderTerminationRequest: function touchableHandleResponderTerminationRequest() {
	    return !this.props.rejectResponderTermination;
	  },
	
	  touchableHandleStartShouldSetResponder: function touchableHandleStartShouldSetResponder() {
	    return true;
	  },
	
	  touchableLongPressCancelsPress: function touchableLongPressCancelsPress() {
	    return true;
	  },
	
	  touchableHandleResponderGrant: function touchableHandleResponderGrant(e, dispatchID) {
	
	    e.persist();
	
	    this.pressOutDelayTimeout && clearTimeout(this.pressOutDelayTimeout);
	    this.pressOutDelayTimeout = null;
	
	    this.state.touchable.touchState = States.NOT_RESPONDER;
	    this.state.touchable.responderID = dispatchID;
	    this._receiveSignal(Signals.RESPONDER_GRANT, e);
	    var delayMS = this.touchableGetHighlightDelayMS !== undefined ? Math.max(this.touchableGetHighlightDelayMS(), 0) : HIGHLIGHT_DELAY_MS;
	    delayMS = isNaN(delayMS) ? HIGHLIGHT_DELAY_MS : delayMS;
	    if (delayMS !== 0) {
	      this.touchableDelayTimeout = setTimeout(this._handleDelay.bind(this, e), delayMS);
	    } else {
	      this._handleDelay(e);
	    }
	
	    var longDelayMS = this.touchableGetLongPressDelayMS !== undefined ? Math.max(this.touchableGetLongPressDelayMS(), 10) : LONG_PRESS_DELAY_MS;
	    longDelayMS = isNaN(longDelayMS) ? LONG_PRESS_DELAY_MS : longDelayMS;
	    this.longPressDelayTimeout = setTimeout(this._handleLongDelay.bind(this, e), longDelayMS + delayMS);
	  },
	
	  touchableHandleResponderRelease: function touchableHandleResponderRelease(e) {
	    this._receiveSignal(Signals.RESPONDER_RELEASE, e);
	  },
	
	  touchableHandleResponderTerminate: function touchableHandleResponderTerminate(e) {
	    this._receiveSignal(Signals.RESPONDER_TERMINATED, e);
	  },
	
	  touchableHandleResponderMove: function touchableHandleResponderMove(e) {
	
	    if (this.state.touchable.touchState === States.RESPONDER_INACTIVE_PRESS_IN) {
	      return;
	    }
	
	    if (!this.state.touchable.positionOnActivate) {
	      return;
	    }
	
	    var positionOnActivate = this.state.touchable.positionOnActivate;
	    var dimensionsOnActivate = this.state.touchable.dimensionsOnActivate;
	    var pressRectOffset = this.touchableGetPressRectOffset ? this.touchableGetPressRectOffset() : null;
	    var pressExpandLeft = pressRectOffset.left != null ? pressRectOffset.left : PRESS_EXPAND_PX;
	    var pressExpandTop = pressRectOffset.top != null ? pressRectOffset.top : PRESS_EXPAND_PX;
	    var pressExpandRight = pressRectOffset.right != null ? pressRectOffset.right : PRESS_EXPAND_PX;
	    var pressExpandBottom = pressRectOffset.bottom != null ? pressRectOffset.bottom : PRESS_EXPAND_PX;
	
	    var touch = _TouchEventUtils2.default.extractSingleTouch(e.nativeEvent);
	    var pageX = touch && touch.pageX;
	    var pageY = touch && touch.pageY;
	
	    if (this.pressInLocation) {
	      var movedDistance = this._getDistanceBetweenPoints(pageX, pageY, this.pressInLocation.pageX, this.pressInLocation.pageY);
	      if (movedDistance > LONG_PRESS_ALLOWED_MOVEMENT) {
	        this._cancelLongPressDelayTimeout();
	      }
	    }
	
	    var isTouchWithinActive = pageX > positionOnActivate.left - pressExpandLeft && pageY > positionOnActivate.top - pressExpandTop && pageX < positionOnActivate.left + dimensionsOnActivate.width + pressExpandRight && pageY < positionOnActivate.top + dimensionsOnActivate.height + pressExpandBottom;
	    if (isTouchWithinActive) {
	      this._receiveSignal(Signals.ENTER_PRESS_RECT, e);
	    } else {
	      this._cancelLongPressDelayTimeout();
	      this._receiveSignal(Signals.LEAVE_PRESS_RECT, e);
	    }
	  },
	
	  _remeasureMetricsOnActivation: function _remeasureMetricsOnActivation(e) {
	
	    var target = e.nativeEvent.target;
	    this._handleQueryLayout(target.clientLeft, target.clientTop, target.clientWidth, target.clientHeight, target.offsetLeft, target.offsetTop);
	  },
	
	  _handleQueryLayout: function _handleQueryLayout(l, t, w, h, globalX, globalY) {
	    if (this.state.touchable.positionOnActivate) {
	      this.state.touchable.positionOnActivate = null;
	    }
	
	    if (this.state.touchable.dimensionsOnActivate) {
	      this.state.touchable.dimensionsOnActivate = null;
	    }
	
	    this.state.touchable.positionOnActivate = {
	      left: globalX,
	      top: globalY };
	
	    this.state.touchable.dimensionsOnActivate = {
	      width: w,
	      height: h };
	  },
	
	  _handleDelay: function _handleDelay(e) {
	    this.touchableDelayTimeout = null;
	    this._receiveSignal(Signals.DELAY, e);
	  },
	
	  _handleLongDelay: function _handleLongDelay(e) {
	    this.longPressDelayTimeout = null;
	    this._receiveSignal(Signals.LONG_PRESS_DETECTED, e);
	  },
	
	  _receiveSignal: function _receiveSignal(signal, e) {
	    var curState = this.state.touchable.touchState;
	    if (!(Transitions[curState] && Transitions[curState][signal])) {
	      throw new Error('Unrecognized signal `' + signal + '` or state `' + curState + '` for Touchable responder `' + this.state.touchable.responderID + '`');
	    }
	    var nextState = Transitions[curState][signal];
	    if (nextState === States.ERROR) {
	      throw new Error('Touchable cannot transition from `' + curState + '` to `' + signal + '` for responder `' + this.state.touchable.responderID + '`');
	    }
	    if (curState !== nextState) {
	      this._performSideEffectsForTransition(curState, nextState, signal, e);
	      this.state.touchable.touchState = nextState;
	    }
	  },
	
	  _cancelLongPressDelayTimeout: function _cancelLongPressDelayTimeout() {
	    this.longPressDelayTimeout && clearTimeout(this.longPressDelayTimeout);
	    this.longPressDelayTimeout = null;
	  },
	
	  _isHighlight: function _isHighlight(state) {
	    return state === States.RESPONDER_ACTIVE_PRESS_IN || state === States.RESPONDER_ACTIVE_LONG_PRESS_IN;
	  },
	
	  _savePressInLocation: function _savePressInLocation(e) {
	    var touch = _TouchEventUtils2.default.extractSingleTouch(e.nativeEvent);
	    var pageX = touch && touch.pageX;
	    var pageY = touch && touch.pageY;
	    this.pressInLocation = {
	      pageX: pageX,
	      pageY: pageY };
	  },
	
	  _getDistanceBetweenPoints: function _getDistanceBetweenPoints(aX, aY, bX, bY) {
	    var deltaX = aX - bX;
	    var deltaY = aY - bY;
	    return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
	  },
	
	  _performSideEffectsForTransition: function _performSideEffectsForTransition(curState, nextState, signal, e) {
	    var curIsHighlight = this._isHighlight(curState);
	    var newIsHighlight = this._isHighlight(nextState);
	
	    var isFinalSignal = signal === Signals.RESPONDER_TERMINATED || signal === Signals.RESPONDER_RELEASE;
	
	    if (isFinalSignal) {
	      this._cancelLongPressDelayTimeout();
	    }
	
	    if (!IsActive[curState] && IsActive[nextState]) {
	      this._remeasureMetricsOnActivation(e);
	    }
	
	    if (IsPressingIn[curState] && signal === Signals.LONG_PRESS_DETECTED) {
	      this.touchableHandleLongPress && this.touchableHandleLongPress(e);
	    }
	
	    if (newIsHighlight && !curIsHighlight) {
	      this._savePressInLocation(e);
	      this.touchableHandleActivePressIn && this.touchableHandleActivePressIn(e);
	    } else if (!newIsHighlight && curIsHighlight && this.touchableHandleActivePressOut) {
	      if (this.touchableGetPressOutDelayMS && this.touchableGetPressOutDelayMS()) {
	        this.pressOutDelayTimeout = this.setTimeout(function () {
	          this.touchableHandleActivePressOut(e);
	        }, this.touchableGetPressOutDelayMS());
	      } else {
	        this.touchableHandleActivePressOut(e);
	      }
	    }
	
	    if (IsPressingIn[curState] && signal === Signals.RESPONDER_RELEASE) {
	      var hasLongPressHandler = !!this.props.onLongPress;
	      var pressIsLongButStillCallOnPress = IsLongPressingIn[curState] && (!hasLongPressHandler || !this.touchableLongPressCancelsPress());
	
	      var shouldInvokePress = !IsLongPressingIn[curState] || pressIsLongButStillCallOnPress;
	      if (shouldInvokePress && this.touchableHandlePress) {
	        this.touchableHandlePress(e);
	      }
	    }
	
	    this.touchableDelayTimeout && clearTimeout(this.touchableDelayTimeout);
	    this.touchableDelayTimeout = null;
	  } };
	
	var Touchable = {
	  Mixin: TouchableMixin };
	
	module.exports = Touchable;

/***/ },
/* 586 */
/***/ function(module, exports) {

	"use strict";
	
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	var TouchEventUtils = {
	  /**
	   * Utility function for common case of extracting out the primary touch from a
	   * touch event.
	   * - `touchEnd` events usually do not have the `touches` property.
	   *   http://stackoverflow.com/questions/3666929/
	   *   mobile-sarai-touchend-event-not-firing-when-last-touch-is-removed
	   *
	   * @param {Event} nativeEvent Native event that may or may not be a touch.
	   * @return {TouchesObject?} an object with pageX and pageY or null.
	   */
	  extractSingleTouch: function extractSingleTouch(nativeEvent) {
	    var touches = nativeEvent.touches;
	    var changedTouches = nativeEvent.changedTouches;
	    var hasTouches = touches && touches.length > 0;
	    var hasChangedTouches = changedTouches && changedTouches.length > 0;
	
	    return !hasTouches && hasChangedTouches ? changedTouches[0] : hasTouches ? touches[0] : nativeEvent;
	  }
	};
	
	module.exports = TouchEventUtils;

/***/ },
/* 587 */
/***/ function(module, exports, __webpack_require__) {

	
	
	'use strict';
	Object.defineProperty(exports, "__esModule", { value: true });
	
	__webpack_require__(588);
	var _TouchHistoryMath = __webpack_require__(593);var _TouchHistoryMath2 = _interopRequireDefault(_TouchHistoryMath);function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	var currentCentroidXOfTouchesChangedAfter = _TouchHistoryMath2.default.currentCentroidXOfTouchesChangedAfter;
	var currentCentroidYOfTouchesChangedAfter = _TouchHistoryMath2.default.currentCentroidYOfTouchesChangedAfter;
	var previousCentroidXOfTouchesChangedAfter = _TouchHistoryMath2.default.previousCentroidXOfTouchesChangedAfter;
	var previousCentroidYOfTouchesChangedAfter = _TouchHistoryMath2.default.previousCentroidYOfTouchesChangedAfter;
	var currentCentroidX = _TouchHistoryMath2.default.currentCentroidX;
	var currentCentroidY = _TouchHistoryMath2.default.currentCentroidY;
	
	var PanResponder = {
	
	  _initializeGestureState: function _initializeGestureState(gestureState) {
	    gestureState.moveX = 0;
	    gestureState.moveY = 0;
	    gestureState.x0 = 0;
	    gestureState.y0 = 0;
	    gestureState.dx = 0;
	    gestureState.dy = 0;
	    gestureState.vx = 0;
	    gestureState.vy = 0;
	    gestureState.numberActiveTouches = 0;
	
	    gestureState._accountsForMovesUpTo = 0;
	  },
	
	  _updateGestureStateOnMove: function _updateGestureStateOnMove(gestureState, touchHistory) {
	    gestureState.numberActiveTouches = touchHistory.numberActiveTouches;
	    gestureState.moveX = currentCentroidXOfTouchesChangedAfter(touchHistory, gestureState._accountsForMovesUpTo);
	
	    gestureState.moveY = currentCentroidYOfTouchesChangedAfter(touchHistory, gestureState._accountsForMovesUpTo);
	
	    var movedAfter = gestureState._accountsForMovesUpTo;
	    var prevX = previousCentroidXOfTouchesChangedAfter(touchHistory, movedAfter);
	    var x = currentCentroidXOfTouchesChangedAfter(touchHistory, movedAfter);
	    var prevY = previousCentroidYOfTouchesChangedAfter(touchHistory, movedAfter);
	    var y = currentCentroidYOfTouchesChangedAfter(touchHistory, movedAfter);
	    var nextDX = gestureState.dx + (x - prevX);
	    var nextDY = gestureState.dy + (y - prevY);
	
	    var dt = touchHistory.mostRecentTimeStamp - gestureState._accountsForMovesUpTo;
	    gestureState.vx = (nextDX - gestureState.dx) / dt;
	    gestureState.vy = (nextDY - gestureState.dy) / dt;
	
	    gestureState.dx = nextDX;
	    gestureState.dy = nextDY;
	    gestureState._accountsForMovesUpTo = touchHistory.mostRecentTimeStamp;
	  },
	
	  create: function create(config) {
	    var gestureState = {
	
	      stateID: Math.random() };
	
	    PanResponder._initializeGestureState(gestureState);
	    var panHandlers = {
	      onStartShouldSetResponder: function onStartShouldSetResponder(e) {
	        return config.onStartShouldSetPanResponder === undefined ? false : config.onStartShouldSetPanResponder(e, gestureState);
	      },
	      onMoveShouldSetResponder: function onMoveShouldSetResponder(e) {
	        return config.onMoveShouldSetPanResponder === undefined ? false : config.onMoveShouldSetPanResponder(e, gestureState);
	      },
	      onStartShouldSetResponderCapture: function onStartShouldSetResponderCapture(e) {
	        if (!e.nativeEvent.touches) {
	          return false;
	        }
	
	        if (e.nativeEvent.touches.length === 1) {
	          PanResponder._initializeGestureState(gestureState);
	        }
	        gestureState.numberActiveTouches = e.touchHistory.numberActiveTouches;
	        return config.onStartShouldSetPanResponderCapture !== undefined ? config.onStartShouldSetPanResponderCapture(e, gestureState) : false;
	      },
	
	      onMoveShouldSetResponderCapture: function onMoveShouldSetResponderCapture(e) {
	        var touchHistory = e.touchHistory;
	
	        if (gestureState._accountsForMovesUpTo === touchHistory.mostRecentTimeStamp) {
	          return false;
	        }
	        PanResponder._updateGestureStateOnMove(gestureState, touchHistory);
	        return config.onMoveShouldSetPanResponderCapture ? config.onMoveShouldSetPanResponderCapture(e, gestureState) : false;
	      },
	
	      onResponderGrant: function onResponderGrant(e) {
	        gestureState.x0 = currentCentroidX(e.touchHistory);
	        gestureState.y0 = currentCentroidY(e.touchHistory);
	        gestureState.dx = 0;
	        gestureState.dy = 0;
	        config.onPanResponderGrant && config.onPanResponderGrant(e, gestureState);
	
	        return config.onShouldBlockNativeResponder === undefined ? true : config.onShouldBlockNativeResponder();
	      },
	
	      onResponderReject: function onResponderReject(e) {
	        config.onPanResponderReject && config.onPanResponderReject(e, gestureState);
	      },
	
	      onResponderRelease: function onResponderRelease(e) {
	        config.onPanResponderRelease && config.onPanResponderRelease(e, gestureState);
	        PanResponder._initializeGestureState(gestureState);
	      },
	
	      onResponderStart: function onResponderStart(e) {
	        var touchHistory = e.touchHistory;
	        gestureState.numberActiveTouches = touchHistory.numberActiveTouches;
	        config.onPanResponderStart && config.onPanResponderStart(e, gestureState);
	      },
	
	      onResponderMove: function onResponderMove(e) {
	        var touchHistory = e.touchHistory;
	
	        if (gestureState._accountsForMovesUpTo === touchHistory.mostRecentTimeStamp) {
	          return;
	        }
	
	        PanResponder._updateGestureStateOnMove(gestureState, touchHistory);
	        config.onPanResponderMove && config.onPanResponderMove(e, gestureState);
	      },
	
	      onResponderEnd: function onResponderEnd(e) {
	        var touchHistory = e.touchHistory;
	        gestureState.numberActiveTouches = touchHistory.numberActiveTouches;
	        config.onPanResponderEnd && config.onPanResponderEnd(e, gestureState);
	      },
	
	      onResponderTerminate: function onResponderTerminate(e) {
	        config.onPanResponderTerminate && config.onPanResponderTerminate(e, gestureState);
	        PanResponder._initializeGestureState(gestureState);
	      },
	
	      onResponderTerminationRequest: function onResponderTerminationRequest(e) {
	        return config.onPanResponderTerminationRequest === undefined ? true : config.onPanResponderTerminationRequest(e, gestureState);
	      } };
	
	    return { panHandlers: panHandlers };
	  } };exports.default = PanResponder;

/***/ },
/* 588 */
/***/ function(module, exports, __webpack_require__) {

	
	
	'use strict';
	
	var _EventPluginRegistry = __webpack_require__(355);var _EventPluginRegistry2 = _interopRequireDefault(_EventPluginRegistry);
	var _ResponderEventPlugin = __webpack_require__(589);var _ResponderEventPlugin2 = _interopRequireDefault(_ResponderEventPlugin);
	var _EventConstants = __webpack_require__(352);var _EventConstants2 = _interopRequireDefault(_EventConstants);
	var _ResponderTouchHistoryStore = __webpack_require__(591);var _ResponderTouchHistoryStore2 = _interopRequireDefault(_ResponderTouchHistoryStore);function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	var topLevelTypes = _EventConstants2.default.topLevelTypes;
	
	var eventTypes = _ResponderEventPlugin2.default.eventTypes;
	eventTypes.startShouldSetResponder.dependencies = [topLevelTypes.topTouchStart];
	
	eventTypes.scrollShouldSetResponder.dependencies = [topLevelTypes.topScroll];
	
	eventTypes.selectionChangeShouldSetResponder.dependencies = [topLevelTypes.topSelectionChange];
	
	eventTypes.moveShouldSetResponder.dependencies = [topLevelTypes.topTouchMove];
	
	['responderStart', 'responderMove', 'responderEnd', 'responderRelease', 'responderTerminationRequest', 'responderGrant', 'responderReject', 'responderTerminate'].forEach(function (type) {
	  var dependencies = void 0;
	  if ('ontouchstart' in window) {
	    dependencies = [topLevelTypes.topTouchStart, topLevelTypes.topTouchCancel, topLevelTypes.topTouchEnd, topLevelTypes.topTouchMove];
	  } else {
	
	    dependencies = [topLevelTypes.topMouseDown, topLevelTypes.topMouseUp];
	  }
	
	  eventTypes[type].dependencies = dependencies;
	});
	
	function toArray(collection) {
	  return collection && Array.prototype.slice.call(collection) || [];
	}
	
	function fixIdentifier(identifier) {
	
	  if (identifier > 20) {
	    return identifier % 20;
	  }
	
	  return identifier;
	}
	
	var normalizeTouches = function normalizeTouches(touches, nativeEvent) {
	  var timestamp = nativeEvent.timestamp || nativeEvent.timeStamp;
	
	  return toArray(touches).map(function (touch) {
	
	    return {
	      clientX: touch.clientX,
	      clientY: touch.clientY,
	      force: touch.force,
	      pageX: touch.pageX,
	      pageY: touch.pageY,
	      radiusX: touch.radiusX,
	      radiusY: touch.radiusY,
	      rotationAngle: touch.rotationAngle,
	      screenX: touch.screenX,
	      screenY: touch.screenY,
	      target: touch.target,
	      timestamp: timestamp,
	      identifier: fixIdentifier(touch.identifier) };
	  });
	};
	
	var originRecordTouchTrack = _ResponderTouchHistoryStore2.default.recordTouchTrack;
	_ResponderTouchHistoryStore2.default.recordTouchTrack = function (topLevelType, nativeEvent) {
	
	  originRecordTouchTrack.call(_ResponderTouchHistoryStore2.default, topLevelType, {
	    changedTouches: normalizeTouches(nativeEvent.changedTouches, nativeEvent),
	    touches: normalizeTouches(nativeEvent.touches, nativeEvent) });
	};
	
	_EventPluginRegistry2.default.injectEventPluginsByName({
	  ResponderEventPlugin: _ResponderEventPlugin2.default });

/***/ },
/* 589 */,
/* 590 */,
/* 591 */,
/* 592 */,
/* 593 */
/***/ function(module, exports) {

	
	
	'use strict';
	Object.defineProperty(exports, "__esModule", { value: true });
	
	var TouchHistoryMath = {
	
	  centroidDimension: function centroidDimension(touchHistory, touchesChangedAfter, isXAxis, ofCurrent) {
	    var touchBank = touchHistory.touchBank;
	    var total = 0;
	    var count = 0;
	
	    var oneTouchData = touchHistory.numberActiveTouches === 1 ? touchHistory.touchBank[touchHistory.indexOfSingleActiveTouch] : null;
	
	    if (oneTouchData !== null) {
	      if (oneTouchData.touchActive && oneTouchData.currentTimeStamp > touchesChangedAfter) {
	        total += ofCurrent && isXAxis ? oneTouchData.currentPageX : ofCurrent && !isXAxis ? oneTouchData.currentPageY : !ofCurrent && isXAxis ? oneTouchData.previousPageX : oneTouchData.previousPageY;
	        count = 1;
	      }
	    } else {
	      for (var i = 0; i < touchBank.length; i++) {
	        var touchTrack = touchBank[i];
	        if (touchTrack !== null && touchTrack !== undefined && touchTrack.touchActive && touchTrack.currentTimeStamp >= touchesChangedAfter) {
	          var toAdd = void 0;
	          if (ofCurrent && isXAxis) {
	            toAdd = touchTrack.currentPageX;
	          } else if (ofCurrent && !isXAxis) {
	            toAdd = touchTrack.currentPageY;
	          } else if (!ofCurrent && isXAxis) {
	            toAdd = touchTrack.previousPageX;
	          } else {
	            toAdd = touchTrack.previousPageY;
	          }
	          total += toAdd;
	          count++;
	        }
	      }
	    }
	    return count > 0 ? total / count : TouchHistoryMath.noCentroid;
	  },
	
	  currentCentroidXOfTouchesChangedAfter: function currentCentroidXOfTouchesChangedAfter(touchHistory, touchesChangedAfter) {
	    return TouchHistoryMath.centroidDimension(touchHistory, touchesChangedAfter, true, true);
	  },
	
	  currentCentroidYOfTouchesChangedAfter: function currentCentroidYOfTouchesChangedAfter(touchHistory, touchesChangedAfter) {
	    return TouchHistoryMath.centroidDimension(touchHistory, touchesChangedAfter, false, true);
	  },
	
	  previousCentroidXOfTouchesChangedAfter: function previousCentroidXOfTouchesChangedAfter(touchHistory, touchesChangedAfter) {
	    return TouchHistoryMath.centroidDimension(touchHistory, touchesChangedAfter, true, false);
	  },
	
	  previousCentroidYOfTouchesChangedAfter: function previousCentroidYOfTouchesChangedAfter(touchHistory, touchesChangedAfter) {
	    return TouchHistoryMath.centroidDimension(touchHistory, touchesChangedAfter, false, false);
	  },
	
	  currentCentroidX: function currentCentroidX(touchHistory) {
	    return TouchHistoryMath.centroidDimension(touchHistory, 0, true, true);
	  },
	
	  currentCentroidY: function currentCentroidY(touchHistory) {
	    return TouchHistoryMath.centroidDimension(touchHistory, 0, false, true);
	  },
	
	  noCentroid: -1 };exports.default = TouchHistoryMath;

/***/ },
/* 594 */
/***/ function(module, exports) {

	
	
	'use strict';
	Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	var dimensions = {
	
	  window: {
	    get width() {
	      return document.documentElement.clientWidth;
	    },
	    get height() {
	      return document.documentElement.clientHeight;
	    },
	    get scale() {
	      return window.devicePixelRatio || 1;
	    } },
	
	  modalFullscreenView: {
	    width: screen.width,
	    height: screen.height } };var Dimensions = function () {
	  function Dimensions() {
	    _classCallCheck(this, Dimensions);
	  }_createClass(Dimensions, null, [{ key: 'get', value: function get(dim) {
	      return dimensions[dim];
	    } }]);return Dimensions;
	}();exports.default = Dimensions;

/***/ },
/* 595 */
/***/ function(module, exports, __webpack_require__) {

	
	
	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	Object.defineProperty(exports, "__esModule", { value: true });var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _react = __webpack_require__(301);var _react2 = _interopRequireDefault(_react);
	var _reactDom = __webpack_require__(345);var _reactDom2 = _interopRequireDefault(_reactDom);
	var _ReactListViewDataSource = __webpack_require__(596);var _ReactListViewDataSource2 = _interopRequireDefault(_ReactListViewDataSource);
	var _ReactScrollView = __webpack_require__(600);var _ReactScrollView2 = _interopRequireDefault(_ReactScrollView);
	var _ReactScrollResponder = __webpack_require__(601);var _ReactScrollResponder2 = _interopRequireDefault(_ReactScrollResponder);
	var _ReactStaticRenderer = __webpack_require__(603);var _ReactStaticRenderer2 = _interopRequireDefault(_ReactStaticRenderer);
	var _reactTimerMixin = __webpack_require__(604);var _reactTimerMixin2 = _interopRequireDefault(_reactTimerMixin);
	var _reactMixin = __webpack_require__(491);var _reactMixin2 = _interopRequireDefault(_reactMixin);
	var _objectAssign = __webpack_require__(605);var _objectAssign2 = _interopRequireDefault(_objectAssign);
	var _autobindDecorator = __webpack_require__(494);var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}function _objectWithoutProperties(obj, keys) {
	  var target = {};for (var i in obj) {
	    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	  }return target;
	}function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var DEFAULT_PAGE_SIZE = 1;
	var DEFAULT_INITIAL_ROWS = 10;
	var DEFAULT_SCROLL_RENDER_AHEAD = 1000;
	var DEFAULT_END_REACHED_THRESHOLD = 1000;
	var DEFAULT_SCROLL_CALLBACK_THROTTLE = 50;
	var SCROLLVIEW_REF = 'listviewscroll';var ListView = function (_Component) {
	  _inherits(ListView, _Component);function ListView() {
	    var _ref;var _temp, _this, _ret;_classCallCheck(this, ListView);for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ListView.__proto__ || Object.getPrototypeOf(ListView)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      curRenderedRowsCount: _this.props.initialListSize,
	      highlightedRow: {} }, _temp), _possibleConstructorReturn(_this, _ret);
	  }_createClass(ListView, [{ key: 'getMetrics', value: function getMetrics() {
	      return {
	        contentLength: this.scrollProperties.contentLength,
	        totalRows: this.props.dataSource.getRowCount(),
	        renderedRows: this.state.curRenderedRowsCount,
	        visibleRows: Object.keys(this._visibleRows).length };
	    } }, { key: 'getScrollResponder', value: function getScrollResponder() {
	      return this.refs[SCROLLVIEW_REF] && this.refs[SCROLLVIEW_REF].getScrollResponder && this.refs[SCROLLVIEW_REF].getScrollResponder();
	    } }, { key: 'scrollTo', value: function scrollTo() {
	      var _refs$SCROLLVIEW_REF;
	      this.refs[SCROLLVIEW_REF] && this.refs[SCROLLVIEW_REF].scrollTo && (_refs$SCROLLVIEW_REF = this.refs[SCROLLVIEW_REF]).scrollTo.apply(_refs$SCROLLVIEW_REF, arguments);
	    } }, { key: 'setNativeProps', value: function setNativeProps(props) {
	      this.refs[SCROLLVIEW_REF] && this.refs[SCROLLVIEW_REF].setNativeProps(props);
	    } }, { key: 'getInnerViewNode', value: function getInnerViewNode() {
	      return this.refs[SCROLLVIEW_REF].getInnerViewNode();
	    } }, { key: 'componentWillMount', value: function componentWillMount() {
	
	      this.scrollProperties = {
	        visibleLength: null,
	        contentLength: null,
	        offset: 0 };
	
	      this._childFrames = [];
	      this._visibleRows = {};
	      this._prevRenderedRowsCount = 0;
	      this._sentEndForContentLength = null;
	    } }, { key: 'componentDidMount', value: function componentDidMount() {
	      var _this2 = this;
	
	      this.requestAnimationFrame(function () {
	        _this2._measureAndUpdateScrollProps();
	      });
	    } }, { key: 'componentWillReceiveProps', value: function componentWillReceiveProps(nextProps) {
	      var _this3 = this;
	      if (this.props.dataSource !== nextProps.dataSource || this.props.initialListSize !== nextProps.initialListSize) {
	        this.setState(function (state, props) {
	          _this3._prevRenderedRowsCount = 0;
	          return {
	            curRenderedRowsCount: Math.min(Math.max(state.curRenderedRowsCount, props.initialListSize), props.dataSource.getRowCount()) };
	        }, function () {
	          return _this3._renderMoreRowsIfNeeded();
	        });
	      }
	    } }, { key: 'componentDidUpdate', value: function componentDidUpdate() {
	      var _this4 = this;
	      this.requestAnimationFrame(function () {
	        _this4._measureAndUpdateScrollProps();
	      });
	    } }, { key: 'onRowHighlighted', value: function onRowHighlighted(sectionID, rowID) {
	      this.setState({ highlightedRow: { sectionID: sectionID, rowID: rowID } });
	    } }, { key: 'render', value: function render() {
	      var bodyComponents = [];
	
	      var dataSource = this.props.dataSource;
	      var allRowIDs = dataSource.rowIdentities;
	      var rowCount = 0;
	      var sectionHeaderIndices = [];
	
	      var header = this.props.renderHeader && this.props.renderHeader();
	      var footer = this.props.renderFooter && this.props.renderFooter();
	      var totalIndex = header ? 1 : 0;
	
	      for (var sectionIdx = 0; sectionIdx < allRowIDs.length; sectionIdx++) {
	        var sectionID = dataSource.sectionIdentities[sectionIdx];
	        var rowIDs = allRowIDs[sectionIdx];
	        if (rowIDs.length === 0) {
	          continue;
	        }
	
	        if (this.props.renderSectionHeader) {
	          var shouldUpdateHeader = rowCount >= this._prevRenderedRowsCount && dataSource.sectionHeaderShouldUpdate(sectionIdx);
	          bodyComponents.push(_react2.default.createElement(_ReactStaticRenderer2.default, {
	            key: 's_' + sectionID,
	            shouldUpdate: !!shouldUpdateHeader,
	            render: this.props.renderSectionHeader.bind(null, dataSource.getSectionHeaderData(sectionIdx), sectionID) }));
	
	          sectionHeaderIndices.push(totalIndex++);
	        }
	
	        for (var rowIdx = 0; rowIdx < rowIDs.length; rowIdx++) {
	          var rowID = rowIDs[rowIdx];
	          var comboID = sectionID + '_' + rowID;
	          var shouldUpdateRow = rowCount >= this._prevRenderedRowsCount && dataSource.rowShouldUpdate(sectionIdx, rowIdx);
	          var row = _react2.default.createElement(_ReactStaticRenderer2.default, {
	            key: 'r_' + comboID,
	            shouldUpdate: !!shouldUpdateRow,
	            render: this.props.renderRow.bind(null, dataSource.getRowData(sectionIdx, rowIdx), sectionID, rowID, this.onRowHighlighted) });
	
	          bodyComponents.push(row);
	          totalIndex++;
	
	          if (this.props.renderSeparator && (rowIdx !== rowIDs.length - 1 || sectionIdx === allRowIDs.length - 1)) {
	            var adjacentRowHighlighted = this.state.highlightedRow.sectionID === sectionID && (this.state.highlightedRow.rowID === rowID || this.state.highlightedRow.rowID === rowIDs[rowIdx + 1]);
	
	            var separator = this.props.renderSeparator(sectionID, rowID, adjacentRowHighlighted);
	
	            if (separator) {
	              bodyComponents.push(separator);
	              totalIndex++;
	            }
	          }
	          if (++rowCount === this.state.curRenderedRowsCount) {
	            break;
	          }
	        }
	        if (rowCount >= this.state.curRenderedRowsCount) {
	          break;
	        }
	      }var _props = this.props;var renderScrollComponent = _props.renderScrollComponent;var props = _objectWithoutProperties(_props, ['renderScrollComponent']);
	      if (!props.scrollEventThrottle) {
	        props.scrollEventThrottle = DEFAULT_SCROLL_CALLBACK_THROTTLE;
	      }
	      if (props.removeClippedSubviews === undefined) {
	        props.removeClippedSubviews = true;
	      }
	      (0, _objectAssign2.default)(props, {
	        onScroll: this._onScroll,
	        stickyHeaderIndices: this.props.stickyHeaderIndices.concat(sectionHeaderIndices),
	
	        onKeyboardWillShow: undefined,
	        onKeyboardWillHide: undefined,
	        onKeyboardDidShow: undefined,
	        onKeyboardDidHide: undefined });
	
	      return _react2.default.cloneElement(renderScrollComponent(props), {
	        ref: SCROLLVIEW_REF,
	        onContentSizeChange: this._onContentSizeChange,
	        onLayout: this._onLayout }, header, bodyComponents, footer);
	    } }, { key: '_measureAndUpdateScrollProps', value: function _measureAndUpdateScrollProps() {
	      var scrollComponent = this.getScrollResponder();
	      if (!scrollComponent || !scrollComponent.getInnerViewNode) {
	        return;
	      }
	    } }, { key: '_onContentSizeChange', value: function _onContentSizeChange(width, height) {
	      var contentLength = !this.props.horizontal ? height : width;
	      if (contentLength !== this.scrollProperties.contentLength) {
	        this.scrollProperties.contentLength = contentLength;
	        this._updateVisibleRows();
	        this._renderMoreRowsIfNeeded();
	      }
	      this.props.onContentSizeChange && this.props.onContentSizeChange(width, height);
	    } }, { key: '_onLayout', value: function _onLayout(event) {
	      var _event$nativeEvent$la = event.nativeEvent.layout;var width = _event$nativeEvent$la.width;var height = _event$nativeEvent$la.height;
	      var visibleLength = !this.props.horizontal ? height : width;
	      if (visibleLength !== this.scrollProperties.visibleLength) {
	        this.scrollProperties.visibleLength = visibleLength;
	        this._updateVisibleRows();
	        this._renderMoreRowsIfNeeded();
	      }
	      this.props.onLayout && this.props.onLayout(event);
	    } }, { key: '_maybeCallOnEndReached', value: function _maybeCallOnEndReached(event) {
	      if (this.props.onEndReached && this.scrollProperties.contentLength !== this._sentEndForContentLength && this._getDistanceFromEnd(this.scrollProperties) < this.props.onEndReachedThreshold && this.state.curRenderedRowsCount === this.props.dataSource.getRowCount()) {
	        this._sentEndForContentLength = this.scrollProperties.contentLength;
	        this.props.onEndReached(event);
	        return true;
	      }
	      return false;
	    } }, { key: '_renderMoreRowsIfNeeded', value: function _renderMoreRowsIfNeeded() {
	      if (this.scrollProperties.contentLength === null || this.scrollProperties.visibleLength === null || this.state.curRenderedRowsCount === this.props.dataSource.getRowCount()) {
	        this._maybeCallOnEndReached();
	        return;
	      }
	
	      var distanceFromEnd = this._getDistanceFromEnd(this.scrollProperties);
	      if (distanceFromEnd < this.props.scrollRenderAheadDistance) {
	        this._pageInNewRows();
	      }
	    } }, { key: '_pageInNewRows', value: function _pageInNewRows() {
	      var _this5 = this;
	      this.setState(function (state, props) {
	        var rowsToRender = Math.min(state.curRenderedRowsCount + props.pageSize, props.dataSource.getRowCount());
	
	        _this5._prevRenderedRowsCount = state.curRenderedRowsCount;
	        return {
	          curRenderedRowsCount: rowsToRender };
	      }, function () {
	        _this5._measureAndUpdateScrollProps();
	        _this5._prevRenderedRowsCount = _this5.state.curRenderedRowsCount;
	      });
	    } }, { key: '_getDistanceFromEnd', value: function _getDistanceFromEnd(scrollProperties) {
	      return scrollProperties.contentLength - scrollProperties.visibleLength - scrollProperties.offset;
	    } }, { key: '_updateVisibleRows', value: function _updateVisibleRows(updatedFrames) {} }, { key: '_onScroll', value: function _onScroll(e) {
	      var isVertical = !this.props.horizontal;
	
	      var target = _reactDom2.default.findDOMNode(this.refs[SCROLLVIEW_REF]);
	      this.scrollProperties.visibleLength = target[isVertical ? 'offsetHeight' : 'offsetWidth'];
	
	      this.scrollProperties.contentLength = target[isVertical ? 'scrollHeight' : 'scrollWidth'];
	
	      this.scrollProperties.offset = target[isVertical ? 'scrollTop' : 'scrollLeft'];
	
	      if (!this._maybeCallOnEndReached(e)) {
	        this._renderMoreRowsIfNeeded();
	      }
	
	      if (this.props.onEndReached && this._getDistanceFromEnd(this.scrollProperties) > this.props.onEndReachedThreshold) {
	
	        this._sentEndForContentLength = null;
	      }
	
	      this.props.onScroll && this.props.onScroll(e);
	    } }]);return ListView;
	}(_react.Component);ListView.DataSource = _ReactListViewDataSource2.default;ListView.propTypes = _extends({}, _ReactScrollView2.default.propTypes, { dataSource: _react.PropTypes.instanceOf(_ReactListViewDataSource2.default).isRequired, renderSeparator: _react.PropTypes.func, renderRow: _react.PropTypes.func.isRequired, initialListSize: _react.PropTypes.number, onEndReached: _react.PropTypes.func, onEndReachedThreshold: _react.PropTypes.number, pageSize: _react.PropTypes.number, renderFooter: _react.PropTypes.func, renderHeader: _react.PropTypes.func, renderSectionHeader: _react.PropTypes.func, renderScrollComponent: _react2.default.PropTypes.func.isRequired, scrollRenderAheadDistance: _react2.default.PropTypes.number, onChangeVisibleRows: _react2.default.PropTypes.func, removeClippedSubviews: _react2.default.PropTypes.bool, stickyHeaderIndices: _react.PropTypes.arrayOf(_react.PropTypes.number) });ListView.defaultProps = { initialListSize: DEFAULT_INITIAL_ROWS, pageSize: DEFAULT_PAGE_SIZE, renderScrollComponent: function renderScrollComponent(props) {
	    return _react2.default.createElement(_ReactScrollView2.default, props);
	  }, scrollRenderAheadDistance: DEFAULT_SCROLL_RENDER_AHEAD, onEndReachedThreshold: DEFAULT_END_REACHED_THRESHOLD, stickyHeaderIndices: [] };
	
	_reactMixin2.default.onClass(ListView, _ReactScrollResponder2.default.Mixin);
	_reactMixin2.default.onClass(ListView, _reactTimerMixin2.default);
	(0, _autobindDecorator2.default)(ListView);
	
	ListView.isReactNativeComponent = true;exports.default = ListView;

/***/ },
/* 596 */
/***/ function(module, exports, __webpack_require__) {

	
	
	'use strict';
	Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _invariant = __webpack_require__(583);var _invariant2 = _interopRequireDefault(_invariant);
	var _isEmpty = __webpack_require__(597);var _isEmpty2 = _interopRequireDefault(_isEmpty);
	var _warning = __webpack_require__(598);var _warning2 = _interopRequireDefault(_warning);function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function defaultGetRowData(dataBlob, sectionID, rowID) {
	  return dataBlob[sectionID][rowID];
	}
	
	function defaultGetSectionHeaderData(dataBlob, sectionID) {
	  return dataBlob[sectionID];
	}var ListViewDataSource = function () {
	
	  function ListViewDataSource(params) {
	    _classCallCheck(this, ListViewDataSource);
	    (0, _invariant2.default)(params && typeof params.rowHasChanged === 'function', 'Must provide a rowHasChanged function.');
	
	    this._rowHasChanged = params.rowHasChanged;
	    this._getRowData = params.getRowData || defaultGetRowData;
	    this._sectionHeaderHasChanged = params.sectionHeaderHasChanged;
	    this._getSectionHeaderData = params.getSectionHeaderData || defaultGetSectionHeaderData;
	
	    this._dataBlob = null;
	    this._dirtyRows = [];
	    this._dirtySections = [];
	    this._cachedRowCount = 0;
	
	    this.rowIdentities = [];
	    this.sectionIdentities = [];
	  }_createClass(ListViewDataSource, [{ key: 'cloneWithRows', value: function cloneWithRows(dataBlob, rowIdentities) {
	      var rowIds = rowIdentities ? [rowIdentities] : null;
	      if (!this._sectionHeaderHasChanged) {
	        this._sectionHeaderHasChanged = function () {
	          return false;
	        };
	      }
	      return this.cloneWithRowsAndSections({ s1: dataBlob }, ['s1'], rowIds);
	    } }, { key: 'cloneWithRowsAndSections', value: function cloneWithRowsAndSections(dataBlob, sectionIdentities, rowIdentities) {
	      (0, _invariant2.default)(typeof this._sectionHeaderHasChanged === 'function', 'Must provide a sectionHeaderHasChanged function with section data.');
	
	      (0, _invariant2.default)(!sectionIdentities || !rowIdentities || sectionIdentities.length === rowIdentities.length, 'row and section ids lengths must be the same');
	
	      var newSource = new ListViewDataSource({
	        getRowData: this._getRowData,
	        getSectionHeaderData: this._getSectionHeaderData,
	        rowHasChanged: this._rowHasChanged,
	        sectionHeaderHasChanged: this._sectionHeaderHasChanged });
	
	      newSource._dataBlob = dataBlob;
	      if (sectionIdentities) {
	        newSource.sectionIdentities = sectionIdentities;
	      } else {
	        newSource.sectionIdentities = Object.keys(dataBlob);
	      }
	      if (rowIdentities) {
	        newSource.rowIdentities = rowIdentities;
	      } else {
	        newSource.rowIdentities = [];
	        newSource.sectionIdentities.forEach(function (sectionID) {
	          newSource.rowIdentities.push(Object.keys(dataBlob[sectionID]));
	        });
	      }
	      newSource._cachedRowCount = countRows(newSource.rowIdentities);
	
	      newSource._calculateDirtyArrays(this._dataBlob, this.sectionIdentities, this.rowIdentities);
	
	      return newSource;
	    } }, { key: 'getRowCount', value: function getRowCount() {
	      return this._cachedRowCount;
	    } }, { key: 'getRowAndSectionCount', value: function getRowAndSectionCount() {
	      return this._cachedRowCount + this.sectionIdentities.length;
	    } }, { key: 'rowShouldUpdate', value: function rowShouldUpdate(sectionIndex, rowIndex) {
	      var needsUpdate = this._dirtyRows[sectionIndex][rowIndex];
	      (0, _warning2.default)(needsUpdate !== undefined, 'missing dirtyBit for section, row: ' + sectionIndex + ', ' + rowIndex);
	      return needsUpdate;
	    } }, { key: 'getRowData', value: function getRowData(sectionIndex, rowIndex) {
	      var sectionID = this.sectionIdentities[sectionIndex];
	      var rowID = this.rowIdentities[sectionIndex][rowIndex];
	      (0, _warning2.default)(sectionID !== undefined && rowID !== undefined, 'rendering invalid section, row: ' + sectionIndex + ', ' + rowIndex);
	
	      return this._getRowData(this._dataBlob, sectionID, rowID);
	    } }, { key: 'getRowIDForFlatIndex', value: function getRowIDForFlatIndex(index) {
	      var accessIndex = index;
	      for (var ii = 0; ii < this.sectionIdentities.length; ii++) {
	        if (accessIndex >= this.rowIdentities[ii].length) {
	          accessIndex -= this.rowIdentities[ii].length;
	        } else {
	          return this.rowIdentities[ii][accessIndex];
	        }
	      }
	      return null;
	    } }, { key: 'getSectionIDForFlatIndex', value: function getSectionIDForFlatIndex(index) {
	      var accessIndex = index;
	      for (var ii = 0; ii < this.sectionIdentities.length; ii++) {
	        if (accessIndex >= this.rowIdentities[ii].length) {
	          accessIndex -= this.rowIdentities[ii].length;
	        } else {
	          return this.sectionIdentities[ii];
	        }
	      }
	      return null;
	    } }, { key: 'getSectionLengths', value: function getSectionLengths() {
	      var results = [];
	      for (var ii = 0; ii < this.sectionIdentities.length; ii++) {
	        results.push(this.rowIdentities[ii].length);
	      }
	      return results;
	    } }, { key: 'sectionHeaderShouldUpdate', value: function sectionHeaderShouldUpdate(sectionIndex) {
	      var needsUpdate = this._dirtySections[sectionIndex];
	      (0, _warning2.default)(needsUpdate !== undefined, 'missing dirtyBit for section: ' + sectionIndex);
	      return needsUpdate;
	    } }, { key: 'getSectionHeaderData', value: function getSectionHeaderData(sectionIndex) {
	      if (!this._getSectionHeaderData) {
	        return null;
	      }
	      var sectionID = this.sectionIdentities[sectionIndex];
	      (0, _warning2.default)(sectionID !== undefined, 'renderSection called on invalid section: ' + sectionIndex);
	      return this._getSectionHeaderData(this._dataBlob, sectionID);
	    } }, { key: '_calculateDirtyArrays', value: function _calculateDirtyArrays(prevDataBlob, prevSectionIDs, prevRowIDs) {
	
	      var prevSectionsHash = keyedDictionaryFromArray(prevSectionIDs);
	      var prevRowsHash = {};
	      for (var ii = 0; ii < prevRowIDs.length; ii++) {
	        var sectionID = prevSectionIDs[ii];
	        (0, _warning2.default)(!prevRowsHash[sectionID], 'SectionID appears more than once: ' + sectionID);
	
	        prevRowsHash[sectionID] = keyedDictionaryFromArray(prevRowIDs[ii]);
	      }
	
	      this._dirtySections = [];
	      this._dirtyRows = [];
	
	      var dirty;
	      for (var sIndex = 0; sIndex < this.sectionIdentities.length; sIndex++) {
	        var sectionID = this.sectionIdentities[sIndex];
	
	        dirty = !prevSectionsHash[sectionID];
	        var sectionHeaderHasChanged = this._sectionHeaderHasChanged;
	        if (!dirty && sectionHeaderHasChanged) {
	          dirty = sectionHeaderHasChanged(this._getSectionHeaderData(prevDataBlob, sectionID), this._getSectionHeaderData(this._dataBlob, sectionID));
	        }
	        this._dirtySections.push(!!dirty);
	
	        this._dirtyRows[sIndex] = [];
	        for (var rIndex = 0; rIndex < this.rowIdentities[sIndex].length; rIndex++) {
	          var rowID = this.rowIdentities[sIndex][rIndex];
	
	          dirty = !prevSectionsHash[sectionID] || !prevRowsHash[sectionID][rowID] || this._rowHasChanged(this._getRowData(prevDataBlob, sectionID, rowID), this._getRowData(this._dataBlob, sectionID, rowID));
	
	          this._dirtyRows[sIndex].push(!!dirty);
	        }
	      }
	    } }]);return ListViewDataSource;
	}();
	
	function countRows(allRowIDs) {
	  var totalRows = 0;
	  for (var sectionIdx = 0; sectionIdx < allRowIDs.length; sectionIdx++) {
	    var rowIDs = allRowIDs[sectionIdx];
	    totalRows += rowIDs.length;
	  }
	  return totalRows;
	}
	
	function keyedDictionaryFromArray(arr) {
	  if ((0, _isEmpty2.default)(arr)) {
	    return {};
	  }
	  var result = {};
	  for (var ii = 0; ii < arr.length; ii++) {
	    var key = arr[ii];
	    (0, _warning2.default)(!result[key], 'Value appears more than once in array: ' + key);
	    result[key] = true;
	  }
	  return result;
	}exports.default = ListViewDataSource;

/***/ },
/* 597 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	
	'use strict';
	
	/* eslint-disable fb-www/typeof-undefined */
	/* eslint-disable no-unused-vars */
	
	var invariant = __webpack_require__(583);
	
	/**
	 * Checks if a value is empty.
	 */
	function isEmpty(value) {
	  if (Array.isArray(value)) {
	    return value.length === 0;
	  } else if (typeof value === 'object') {
	    if (value) {
	      !(!isIterable(value) || value.size === undefined) ?  true ? invariant(false, 'isEmpty() does not support iterable collections.') : invariant(false) : void 0;
	      for (var _ in value) {
	        return false;
	      }
	    }
	    return true;
	  } else {
	    return !value;
	  }
	}
	
	function isIterable(value) {
	  if (typeof Symbol === 'undefined') {
	    return false;
	  }
	  return value[Symbol.iterator];
	}
	
	module.exports = isEmpty;

/***/ },
/* 598 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	var emptyFunction = __webpack_require__(599);
	
	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */
	
	var warning = emptyFunction;
	
	if (true) {
	  warning = function warning(condition, format) {
	    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	      args[_key - 2] = arguments[_key];
	    }
	
	    if (format === undefined) {
	      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	    }
	
	    if (format.indexOf('Failed Composite propType: ') === 0) {
	      return; // Ignore CompositeComponent proptype check.
	    }
	
	    if (!condition) {
	      var argIndex = 0;
	      var message = 'Warning: ' + format.replace(/%s/g, function () {
	        return args[argIndex++];
	      });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // --- Welcome to debugging React ---
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch (x) {}
	    }
	  };
	}
	
	module.exports = warning;

/***/ },
/* 599 */
/***/ function(module, exports) {

	"use strict";
	
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	
	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}
	
	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction = function emptyFunction() {};
	
	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};
	
	module.exports = emptyFunction;

/***/ },
/* 600 */
/***/ function(module, exports, __webpack_require__) {

	
	
	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	Object.defineProperty(exports, "__esModule", { value: true });var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _react = __webpack_require__(301);var _react2 = _interopRequireDefault(_react);
	var _reactDom = __webpack_require__(345);var _reactDom2 = _interopRequireDefault(_reactDom);
	var _ReactScrollResponder = __webpack_require__(601);var _ReactScrollResponder2 = _interopRequireDefault(_ReactScrollResponder);
	var _ReactStyleSheet = __webpack_require__(333);var _ReactStyleSheet2 = _interopRequireDefault(_ReactStyleSheet);
	var _ReactView = __webpack_require__(343);var _ReactView2 = _interopRequireDefault(_ReactView);
	var _throttle = __webpack_require__(602);var _throttle2 = _interopRequireDefault(_throttle);
	var _reactMixin = __webpack_require__(491);var _reactMixin2 = _interopRequireDefault(_reactMixin);
	var _autobindDecorator = __webpack_require__(494);var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}function _objectWithoutProperties(obj, keys) {
	  var target = {};for (var i in obj) {
	    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	  }return target;
	}function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var SCROLLVIEW = 'ScrollView';
	var INNERVIEW = 'InnerScrollView';
	var CONTENT_EXT_STYLE = ['padding', 'paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'];var ScrollView = function (_Component) {
	  _inherits(ScrollView, _Component);function ScrollView() {
	    var _ref;var _temp, _this, _ret;_classCallCheck(this, ScrollView);for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ScrollView.__proto__ || Object.getPrototypeOf(ScrollView)).call.apply(_ref, [this].concat(args))), _this), _this.state = _this.scrollResponderMixinGetInitialState(), _temp), _possibleConstructorReturn(_this, _ret);
	  }_createClass(ScrollView, [{ key: 'getScrollResponder', value: function getScrollResponder() {
	      return this;
	    } }, { key: 'getInnerViewNode', value: function getInnerViewNode() {
	      return this.refs[INNERVIEW];
	    } }, { key: 'scrollTo', value: function scrollTo(opts) {
	
	      if (typeof opts === 'number') {
	        opts = { y: opts, x: arguments[1] };
	      }
	
	      this.scrollWithoutAnimationTo(opts.y, opts.x);
	    } }, { key: 'scrollWithoutAnimationTo', value: function scrollWithoutAnimationTo(destY, destX) {
	
	      var scrollView = _reactDom2.default.findDOMNode(this.refs[SCROLLVIEW]);
	      scrollView.scrollTop = destY || 0;
	      scrollView.scrollLeft = destX || 0;
	    } }, { key: 'handleScroll', value: function handleScroll(e) {
	
	      this.props.onScroll && this.props.onScroll(e);
	    } }, { key: 'render', value: function render() {
	      var _props = this.props;var style = _props.style;var otherProps = _objectWithoutProperties(_props, ['style']);
	
	      var contentContainerExtStyle = {};
	
	      if (style) {
	        for (var i = 0; i < CONTENT_EXT_STYLE.length; i++) {
	          if (typeof style[CONTENT_EXT_STYLE[i]] === 'number') {
	            contentContainerExtStyle[CONTENT_EXT_STYLE[i]] = style[CONTENT_EXT_STYLE[i]];
	          }
	        }
	      }
	
	      var contentContainerStyle = [styles.contentContainer, this.props.horizontal && styles.contentContainerHorizontal, this.props.contentContainerStyle, contentContainerExtStyle];
	
	      var contentContainer = _react2.default.createElement(_ReactView2.default, {
	        ref: INNERVIEW,
	        style: contentContainerStyle,
	        removeClippedSubviews: this.props.removeClippedSubviews,
	        collapsable: false }, this.props.children);
	
	      var alwaysBounceHorizontal = this.props.alwaysBounceHorizontal !== undefined ? this.props.alwaysBounceHorizontal : this.props.horizontal;
	
	      var alwaysBounceVertical = this.props.alwaysBounceVertical !== undefined ? this.props.alwaysBounceVertical : !this.props.horizontal;
	
	      var handleScroll = function handleScroll() {};
	      if (this.props.scrollEventThrottle && this.props.onScroll) {
	        handleScroll = (0, _throttle2.default)(this.handleScroll, this.props.scrollEventThrottle);
	      }
	
	      var orientationStyle = this.props.horizontal ? styles.horizontal : styles.vertical;
	
	      var props = _extends({}, otherProps, {
	        alwaysBounceHorizontal: alwaysBounceHorizontal,
	        alwaysBounceVertical: alwaysBounceVertical,
	        style: [styles.base, orientationStyle, this.props.style],
	        onTouchStart: this.scrollResponderHandleTouchStart,
	        onTouchMove: this.scrollResponderHandleTouchMove,
	        onTouchEnd: this.scrollResponderHandleTouchEnd,
	        onScrollBeginDrag: this.scrollResponderHandleScrollBeginDrag,
	        onScrollEndDrag: this.scrollResponderHandleScrollEndDrag,
	        onMomentumScrollBegin: this.scrollResponderHandleMomentumScrollBegin,
	        onMomentumScrollEnd: this.scrollResponderHandleMomentumScrollEnd,
	        onStartShouldSetResponder: this.scrollResponderHandleStartShouldSetResponder,
	        onStartShouldSetResponderCapture: this.scrollResponderHandleStartShouldSetResponderCapture,
	
	        onScrollShouldSetResponder: handleScroll,
	
	        onScroll: function onScroll() {},
	        onResponderGrant: this.scrollResponderHandleResponderGrant,
	        onResponderTerminationRequest: this.scrollResponderHandleTerminationRequest,
	        onResponderTerminate: this.scrollResponderHandleTerminate,
	        onResponderRelease: this.scrollResponderHandleResponderRelease,
	        onResponderReject: this.scrollResponderHandleResponderReject });
	
	      return _react2.default.createElement(_ReactView2.default, _extends({}, props, { ref: SCROLLVIEW }), contentContainer);
	    } }]);return ScrollView;
	}(_react.Component);
	;
	
	var styles = _ReactStyleSheet2.default.create({
	  base: {
	    WebkitOverflowScrolling: 'touch',
	    flex: 1 },
	
	  horizontal: {
	    overflowX: 'scroll',
	    overflowY: 'hidden' },
	
	  vertical: {
	    overflowX: 'hidden',
	    overflowY: 'scroll' },
	
	  contentContainer: {
	    position: 'absolute',
	    minWidth: '100%' },
	
	  contentContainerHorizontal: {
	    alignSelf: 'flex-start',
	    flexDirection: 'row' } });
	
	_reactMixin2.default.onClass(ScrollView, _ReactScrollResponder2.default.Mixin);
	(0, _autobindDecorator2.default)(ScrollView);
	
	ScrollView.isReactNativeComponent = true;exports.default = ScrollView;

/***/ },
/* 601 */
/***/ function(module, exports, __webpack_require__) {

	
	
	'use strict';
	
	var _react = __webpack_require__(301);var _react2 = _interopRequireDefault(_react);
	var _reactDom = __webpack_require__(345);var _reactDom2 = _interopRequireDefault(_reactDom);
	var _warning = __webpack_require__(598);var _warning2 = _interopRequireDefault(_warning);function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	var IS_ANIMATING_TOUCH_START_THRESHOLD_MS = 16;
	
	var ScrollResponderMixin = {
	
	  scrollResponderMixinGetInitialState: function scrollResponderMixinGetInitialState() {
	    return {
	      isTouching: false,
	      lastMomentumScrollBeginTime: 0,
	      lastMomentumScrollEndTime: 0,
	
	      observedScrollSinceBecomingResponder: false,
	      becameResponderWhileAnimating: false };
	  },
	
	  scrollResponderHandleScrollShouldSetResponder: function scrollResponderHandleScrollShouldSetResponder() {
	    return this.state.isTouching;
	  },
	
	  scrollResponderHandleStartShouldSetResponder: function scrollResponderHandleStartShouldSetResponder() {
	    return false;
	  },
	
	  scrollResponderHandleStartShouldSetResponderCapture: function scrollResponderHandleStartShouldSetResponderCapture(e) {
	
	    return this.scrollResponderIsAnimating();
	  },
	
	  scrollResponderHandleMoveShouldSetResponderCapture: function scrollResponderHandleMoveShouldSetResponderCapture(e) {
	    return true;
	  },
	
	  scrollResponderHandleResponderReject: function scrollResponderHandleResponderReject() {
	    (0, _warning2.default)(false, "ScrollView doesn't take rejection well - scrolls anyway");
	  },
	
	  scrollResponderHandleTerminationRequest: function scrollResponderHandleTerminationRequest() {
	    return !this.state.observedScrollSinceBecomingResponder;
	  },
	
	  scrollResponderHandleTouchEnd: function scrollResponderHandleTouchEnd(e) {
	    var nativeEvent = e.nativeEvent;
	    this.state.isTouching = nativeEvent.touches.length !== 0;
	    this.props.onTouchEnd && this.props.onTouchEnd(e);
	  },
	
	  scrollResponderHandleResponderRelease: function scrollResponderHandleResponderRelease(e) {
	    this.props.onResponderRelease && this.props.onResponderRelease(e);
	
	    if (!this.props.keyboardShouldPersistTaps && !this.state.observedScrollSinceBecomingResponder && !this.state.becameResponderWhileAnimating) {
	      this.props.onScrollResponderKeyboardDismissed && this.props.onScrollResponderKeyboardDismissed(e);
	    }
	  },
	
	  scrollResponderHandleScroll: function scrollResponderHandleScroll(e) {
	    this.state.observedScrollSinceBecomingResponder = true;
	    this.props.onScroll && this.props.onScroll(e);
	  },
	
	  scrollResponderHandleResponderGrant: function scrollResponderHandleResponderGrant(e) {
	    this.state.observedScrollSinceBecomingResponder = false;
	    this.props.onResponderGrant && this.props.onResponderGrant(e);
	    this.state.becameResponderWhileAnimating = this.scrollResponderIsAnimating();
	  },
	
	  scrollResponderHandleScrollBeginDrag: function scrollResponderHandleScrollBeginDrag(e) {
	    this.props.onScrollBeginDrag && this.props.onScrollBeginDrag(e);
	  },
	
	  scrollResponderHandleScrollEndDrag: function scrollResponderHandleScrollEndDrag(e) {
	    this.props.onScrollEndDrag && this.props.onScrollEndDrag(e);
	  },
	
	  scrollResponderHandleMomentumScrollBegin: function scrollResponderHandleMomentumScrollBegin(e) {
	    this.state.lastMomentumScrollBeginTime = Date.now();
	    this.props.onMomentumScrollBegin && this.props.onMomentumScrollBegin(e);
	  },
	
	  scrollResponderHandleMomentumScrollEnd: function scrollResponderHandleMomentumScrollEnd(e) {
	    this.state.lastMomentumScrollEndTime = Date.now();
	    this.props.onMomentumScrollEnd && this.props.onMomentumScrollEnd(e);
	  },
	
	  scrollResponderHandleTouchStart: function scrollResponderHandleTouchStart(e) {
	    this.state.isTouching = true;
	    this.props.onTouchStart && this.props.onTouchStart(e);
	  },
	
	  scrollResponderHandleTouchMove: function scrollResponderHandleTouchMove(e) {
	    this.props.onTouchMove && this.props.onTouchMove(e);
	  },
	
	  scrollResponderIsAnimating: function scrollResponderIsAnimating() {
	    var now = Date.now();
	    var timeSinceLastMomentumScrollEnd = now - this.state.lastMomentumScrollEndTime;
	    var isAnimating = timeSinceLastMomentumScrollEnd < IS_ANIMATING_TOUCH_START_THRESHOLD_MS || this.state.lastMomentumScrollEndTime < this.state.lastMomentumScrollBeginTime;
	    return isAnimating;
	  },
	
	  scrollResponderScrollTo: function scrollResponderScrollTo(offsetX, offsetY) {
	
	    this.scrollResponderScrollWithouthAnimationTo(offsetX, offsetY);
	  },
	
	  scrollResponderScrollWithouthAnimationTo: function scrollResponderScrollWithouthAnimationTo(offsetX, offsetY) {
	
	    var node = _reactDom2.default.findDOMNode(this);
	    node.offsetX = offsetX;
	    node.offsetY = offsetY;
	  },
	
	  scrollResponderZoomTo: function scrollResponderZoomTo(rect) {},
	
	  scrollResponderScrollNativeHandleToKeyboard: function scrollResponderScrollNativeHandleToKeyboard(nodeHandle, additionalOffset, preventNegativeScrollOffset) {
	    this.additionalScrollOffset = additionalOffset || 0;
	    this.preventNegativeScrollOffset = !!preventNegativeScrollOffset;
	  },
	
	  scrollResponderInputMeasureAndScrollToKeyboard: function scrollResponderInputMeasureAndScrollToKeyboard(left, top, width, height) {
	    if (this.keyboardWillOpenTo) {
	      var scrollOffsetY = top - this.keyboardWillOpenTo.endCoordinates.screenY + height + this.additionalScrollOffset;
	
	      if (this.preventNegativeScrollOffset) {
	        scrollOffsetY = Math.max(0, scrollOffsetY);
	      }
	      this.scrollResponderScrollTo(0, scrollOffsetY);
	    }
	    this.additionalOffset = 0;
	    this.preventNegativeScrollOffset = false;
	  },
	
	  scrollResponderTextInputFocusError: function scrollResponderTextInputFocusError(e) {
	    console.error('Error measuring text field: ', e);
	  },
	
	  componentWillMount: function componentWillMount() {},
	
	  scrollResponderKeyboardWillShow: function scrollResponderKeyboardWillShow(e) {
	    this.keyboardWillOpenTo = e;
	    this.props.onKeyboardWillShow && this.props.onKeyboardWillShow(e);
	  },
	
	  scrollResponderKeyboardWillHide: function scrollResponderKeyboardWillHide(e) {
	    this.keyboardWillOpenTo = null;
	    this.props.onKeyboardWillHide && this.props.onKeyboardWillHide(e);
	  },
	
	  scrollResponderKeyboardDidShow: function scrollResponderKeyboardDidShow(e) {
	
	    if (e) {
	      this.keyboardWillOpenTo = e;
	    }
	    this.props.onKeyboardDidShow && this.props.onKeyboardDidShow(e);
	  },
	
	  scrollResponderKeyboardDidHide: function scrollResponderKeyboardDidHide() {
	    this.keyboardWillOpenTo = null;
	    this.props.onKeyboardDidHide && this.props.onKeyboardDidHide();
	  } };
	
	var ScrollResponder = {
	  Mixin: ScrollResponderMixin };
	
	module.exports = ScrollResponder;

/***/ },
/* 602 */,
/* 603 */
/***/ function(module, exports, __webpack_require__) {

	
	
	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _react = __webpack_require__(301);var _react2 = _interopRequireDefault(_react);function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}var StaticRenderer = function (_Component) {
	  _inherits(StaticRenderer, _Component);function StaticRenderer() {
	    _classCallCheck(this, StaticRenderer);return _possibleConstructorReturn(this, (StaticRenderer.__proto__ || Object.getPrototypeOf(StaticRenderer)).apply(this, arguments));
	  }_createClass(StaticRenderer, [{ key: 'shouldComponentUpdate', value: function shouldComponentUpdate(nextProps) {
	      return nextProps.shouldUpdate;
	    } }, { key: 'render', value: function render() {
	      return this.props.render();
	    } }]);return StaticRenderer;
	}(_react.Component);StaticRenderer.propTypes = { shouldUpdate: _react.PropTypes.bool.isRequired, render: _react.PropTypes.func.isRequired };
	;exports.default = StaticRenderer;

/***/ },
/* 604 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/*
	 *  Copyright (c) 2015-present, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	'use strict';
	
	var GLOBAL = typeof window === 'undefined' ? global : window;
	
	var setter = function setter(_setter, _clearer, array) {
	  return function (callback, delta) {
	    var id = _setter(function () {
	      _clearer.call(this, id);
	      callback.apply(this, arguments);
	    }.bind(this), delta);
	
	    if (!this[array]) {
	      this[array] = [id];
	    } else {
	      this[array].push(id);
	    }
	    return id;
	  };
	};
	
	var clearer = function clearer(_clearer, array) {
	  return function (id) {
	    if (this[array]) {
	      var index = this[array].indexOf(id);
	      if (index !== -1) {
	        this[array].splice(index, 1);
	      }
	    }
	    _clearer(id);
	  };
	};
	
	var _timeouts = 'TimerMixin_timeouts';
	var _clearTimeout = clearer(GLOBAL.clearTimeout, _timeouts);
	var _setTimeout = setter(GLOBAL.setTimeout, _clearTimeout, _timeouts);
	
	var _intervals = 'TimerMixin_intervals';
	var _clearInterval = clearer(GLOBAL.clearInterval, _intervals);
	var _setInterval = setter(GLOBAL.setInterval, function () {/* noop */}, _intervals);
	
	var _immediates = 'TimerMixin_immediates';
	var _clearImmediate = clearer(GLOBAL.clearImmediate, _immediates);
	var _setImmediate = setter(GLOBAL.setImmediate, _clearImmediate, _immediates);
	
	var _rafs = 'TimerMixin_rafs';
	var _cancelAnimationFrame = clearer(GLOBAL.cancelAnimationFrame, _rafs);
	var _requestAnimationFrame = setter(GLOBAL.requestAnimationFrame, _cancelAnimationFrame, _rafs);
	
	var TimerMixin = {
	  componentWillUnmount: function componentWillUnmount() {
	    this[_timeouts] && this[_timeouts].forEach(this.clearTimeout);
	    this[_intervals] && this[_intervals].forEach(this.clearInterval);
	    this[_immediates] && this[_immediates].forEach(this.clearImmediate);
	    this[_rafs] && this[_rafs].forEach(this.cancelAnimationFrame);
	  },
	
	  setTimeout: _setTimeout,
	  clearTimeout: _clearTimeout,
	
	  setInterval: _setInterval,
	  clearInterval: _clearInterval,
	
	  setImmediate: _setImmediate,
	  clearImmediate: _clearImmediate,
	
	  requestAnimationFrame: _requestAnimationFrame,
	  cancelAnimationFrame: _cancelAnimationFrame
	};
	
	module.exports = TimerMixin;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 605 */
/***/ function(module, exports) {

	'use strict';
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	
	function ToObject(val) {
		if (val == null) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	function ownEnumerableKeys(obj) {
		var keys = Object.getOwnPropertyNames(obj);
	
		if (Object.getOwnPropertySymbols) {
			keys = keys.concat(Object.getOwnPropertySymbols(obj));
		}
	
		return keys.filter(function (key) {
			return propIsEnumerable.call(obj, key);
		});
	}
	
	module.exports = Object.assign || function (target, source) {
		var from;
		var keys;
		var to = ToObject(target);
	
		for (var s = 1; s < arguments.length; s++) {
			from = arguments[s];
			keys = ownEnumerableKeys(Object(from));
	
			for (var i = 0; i < keys.length; i++) {
				to[keys[i]] = from[keys[i]];
			}
		}
	
		return to;
	};


/***/ },
/* 606 */
/***/ function(module, exports) {

	
	
	'use strict';
	
	var emptyFunction = function emptyFunction() {};
	
	var Linking = {
	  addEventListener: emptyFunction,
	  removeEventListener: emptyFunction,
	  openURL: function openURL(url) {
	    if (window) {
	      window.open(url);
	    }
	  },
	  canOpenURL: function canOpenURL(url) {
	    return true;
	  },
	  getInitialURL: emptyFunction };
	
	module.exports = Linking;

/***/ },
/* 607 */
/***/ function(module, exports, __webpack_require__) {

	
	
	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _react = __webpack_require__(301);var _react2 = _interopRequireDefault(_react);
	var _ReactStyleSheet = __webpack_require__(333);var _ReactStyleSheet2 = _interopRequireDefault(_ReactStyleSheet);
	var _ReactView = __webpack_require__(343);var _ReactView2 = _interopRequireDefault(_ReactView);function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}var Modal = function (_Component) {
	  _inherits(Modal, _Component);function Modal() {
	    _classCallCheck(this, Modal);return _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).apply(this, arguments));
	  }_createClass(Modal, [{ key: 'render', value: function render() {
	      if (this.props.visible === false) {
	        if (this.shown) {
	          this.props.onDismiss && this.props.onDismiss();
	        }
	        this.shown = false;
	        return null;
	      }
	
	      this.shown = true;
	
	      if (this.props.transparent) {
	        var modalBackgroundColor = { backgroundColor: 'transparent' };
	      }
	
	      return _react2.default.createElement(_ReactView2.default, { style: [styles.modal, modalBackgroundColor] }, _react2.default.createElement(_ReactView2.default, { style: [styles.container] }, this.props.children));
	    } }]);return Modal;
	}(_react.Component);
	
	Modal.propTypes = {
	  animated: _react.PropTypes.bool,
	  transparent: _react.PropTypes.bool,
	  onDismiss: _react.PropTypes.func };
	
	var styles = _ReactStyleSheet2.default.create({
	  modal: {
	    position: 'fixed',
	    left: 0,
	    right: 0,
	    bottom: 0,
	    top: 0,
	    backgroundColor: '#fff',
	    zIndex: 9999 },
	
	  container: {
	    position: 'absolute',
	    left: 0,
	    right: 0,
	    bottom: 0,
	    top: 0 } });
	
	Modal.isReactNativeComponent = true;exports.default = Modal;

/***/ },
/* 608 */
/***/ function(module, exports, __webpack_require__) {

	
	
	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	Object.defineProperty(exports, "__esModule", { value: true });var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};
	
	var _react = __webpack_require__(301);var _react2 = _interopRequireDefault(_react);
	var _ReactDimensions = __webpack_require__(594);var _ReactDimensions2 = _interopRequireDefault(_ReactDimensions);
	var _ReactInteractionMixin = __webpack_require__(609);var _ReactInteractionMixin2 = _interopRequireDefault(_ReactInteractionMixin);
	var _map = __webpack_require__(610);var _map2 = _interopRequireDefault(_map);
	var _ReactNavigationContext = __webpack_require__(678);var _ReactNavigationContext2 = _interopRequireDefault(_ReactNavigationContext);
	var _ReactNavigatorBreadcrumbNavigationBar = __webpack_require__(688);var _ReactNavigatorBreadcrumbNavigationBar2 = _interopRequireDefault(_ReactNavigatorBreadcrumbNavigationBar);
	var _ReactNavigatorNavigationBar = __webpack_require__(696);var _ReactNavigatorNavigationBar2 = _interopRequireDefault(_ReactNavigatorNavigationBar);
	var _ReactNavigatorSceneConfigs = __webpack_require__(697);var _ReactNavigatorSceneConfigs2 = _interopRequireDefault(_ReactNavigatorSceneConfigs);
	var _ReactPanResponder = __webpack_require__(587);var _ReactPanResponder2 = _interopRequireDefault(_ReactPanResponder);
	var _ReactStyleSheet = __webpack_require__(333);var _ReactStyleSheet2 = _interopRequireDefault(_ReactStyleSheet);
	var _Subscribable = __webpack_require__(699);var _Subscribable2 = _interopRequireDefault(_Subscribable);
	var _reactTimerMixin = __webpack_require__(604);var _reactTimerMixin2 = _interopRequireDefault(_reactTimerMixin);
	var _ReactView = __webpack_require__(343);var _ReactView2 = _interopRequireDefault(_ReactView);
	var _clamp = __webpack_require__(700);var _clamp2 = _interopRequireDefault(_clamp);
	var _ReactFlattenStyle = __webpack_require__(341);var _ReactFlattenStyle2 = _interopRequireDefault(_ReactFlattenStyle);
	var _invariant = __webpack_require__(583);var _invariant2 = _interopRequireDefault(_invariant);
	var _rebound = __webpack_require__(701);var _rebound2 = _interopRequireDefault(_rebound);
	var _createHashHistory = __webpack_require__(703);var _createHashHistory2 = _interopRequireDefault(_createHashHistory);function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	var history = (0, _createHashHistory2.default)();
	var _unlisten = void 0;
	
	var hiddenStyle = {
	  opacity: 0,
	  visibility: 'hidden' };
	
	var visibleStyle = {
	  opacity: 1,
	  visibility: 'visible' };
	
	var SCREEN_WIDTH = _ReactDimensions2.default.get('window').width;
	var SCREEN_HEIGHT = _ReactDimensions2.default.get('window').height;
	var SCENE_DISABLED_NATIVE_PROPS = {
	  pointerEvents: 'none',
	  style: hiddenStyle };
	
	var styles = _ReactStyleSheet2.default.create({
	  container: {
	    flex: 1,
	    overflow: 'hidden' },
	
	  defaultSceneStyle: {
	    position: 'absolute',
	    left: 0,
	    right: 0,
	    bottom: 0,
	    top: 0,
	    visibility: 'visible' },
	
	  baseScene: {
	    position: 'absolute',
	    overflow: 'hidden',
	    left: 0,
	    right: 0,
	    bottom: 0,
	    top: 0 },
	
	  transitioner: {
	    flex: 1,
	    backgroundColor: 'transparent',
	    overflow: 'hidden' } });
	
	var GESTURE_ACTIONS = ['pop', 'jumpBack', 'jumpForward'];
	
	var Navigator = _react2.default.createClass({ displayName: 'Navigator',
	
	  propTypes: {
	
	    configureScene: _react.PropTypes.func,
	
	    renderScene: _react.PropTypes.func.isRequired,
	
	    initialRoute: _react.PropTypes.object,
	
	    initialRouteStack: _react.PropTypes.arrayOf(_react.PropTypes.object),
	
	    onWillFocus: _react.PropTypes.func,
	
	    onDidFocus: _react.PropTypes.func,
	
	    navigationBar: _react.PropTypes.node,
	
	    navigator: _react.PropTypes.object,
	
	    sceneStyle: _ReactView2.default.propTypes.style },
	
	  statics: {
	    BreadcrumbNavigationBar: _ReactNavigatorBreadcrumbNavigationBar2.default,
	    NavigationBar: _ReactNavigatorNavigationBar2.default,
	    SceneConfigs: _ReactNavigatorSceneConfigs2.default },
	
	  mixins: [_reactTimerMixin2.default, _ReactInteractionMixin2.default, _Subscribable2.default.Mixin],
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      configureScene: function configureScene() {
	        return _ReactNavigatorSceneConfigs2.default.PushFromRight;
	      },
	      sceneStyle: styles.defaultSceneStyle };
	  },
	
	  getInitialState: function getInitialState() {
	    var _this = this;
	    this._renderedSceneMap = new _map2.default();
	
	    var routeStack = this.props.initialRouteStack || [this.props.initialRoute];
	    (0, _invariant2.default)(routeStack.length >= 1, 'Navigator requires props.initialRoute or props.initialRouteStack.');
	
	    var initialRouteIndex = routeStack.length - 1;
	    if (this.props.initialRoute) {
	      initialRouteIndex = routeStack.indexOf(this.props.initialRoute);
	      (0, _invariant2.default)(initialRouteIndex !== -1, 'initialRoute is not in initialRouteStack.');
	    }
	    return {
	      sceneConfigStack: routeStack.map(function (route) {
	        return _this.props.configureScene(route);
	      }),
	
	      routeStack: routeStack,
	      presentedIndex: initialRouteIndex,
	      transitionFromIndex: null,
	      activeGesture: null,
	      pendingGestureProgress: null,
	      transitionQueue: [] };
	  },
	
	  componentWillMount: function componentWillMount() {
	    var _this2 = this;
	
	    this.__defineGetter__('navigationContext', this._getNavigationContext);
	
	    this._subRouteFocus = [];
	    this.parentNavigator = this.props.navigator;
	    this._handlers = {};
	    this.springSystem = new _rebound2.default.SpringSystem();
	    this.spring = this.springSystem.createSpring();
	    this.spring.setRestSpeedThreshold(0.05);
	    this.spring.setCurrentValue(0).setAtRest();
	    this.spring.addListener({
	      onSpringEndStateChange: function onSpringEndStateChange() {
	        if (!_this2._interactionHandle) {
	          _this2._interactionHandle = _this2.createInteractionHandle();
	        }
	      },
	      onSpringUpdate: function onSpringUpdate() {
	        _this2._handleSpringUpdate();
	      },
	      onSpringAtRest: function onSpringAtRest() {
	        _this2._completeTransition();
	      } });
	
	    this.panGesture = _ReactPanResponder2.default.create({
	      onMoveShouldSetPanResponder: this._handleMoveShouldSetPanResponder,
	      onPanResponderGrant: this._handlePanResponderGrant,
	      onPanResponderRelease: this._handlePanResponderRelease,
	      onPanResponderMove: this._handlePanResponderMove,
	      onPanResponderTerminate: this._handlePanResponderTerminate });
	
	    this._interactionHandle = null;
	    this._emitWillFocus(this.state.routeStack[this.state.presentedIndex]);
	    this.hashChanged = false;
	  },
	
	  componentDidMount: function componentDidMount() {
	    this._handleSpringUpdate();
	    this._emitDidFocus(this.state.routeStack[this.state.presentedIndex]);
	
	    _unlisten = history.listen(function (location) {
	      var destIndex = 0;
	      if (location.pathname.indexOf('/scene_') != -1) {
	        destIndex = parseInt(location.pathname.replace('/scene_', ''));
	      }
	      if (destIndex < this.state.routeStack.length) {
	        this.hashChanged = true;
	        this._jumpN(destIndex - this.state.presentedIndex);
	
	        this._cleanScenesPastIndex(destIndex);
	
	        this.hashChanged = false;
	      }
	    }.bind(this));
	  },
	
	  componentWillUnmount: function componentWillUnmount() {
	    if (this._navigationContext) {
	      this._navigationContext.dispose();
	      this._navigationContext = null;
	    }
	
	    _unlisten();
	  },
	
	  _nextRouteID: function _nextRouteID(replace) {
	    return this.state.routeStack.length - (replace ? 1 : 0);
	  },
	
	  _getRouteID: function _getRouteID(route, action) {
	    if (route === null || (typeof route === 'undefined' ? 'undefined' : _typeof(route)) !== 'object') {
	      return String(route);
	    }
	
	    return this.state.routeStack.indexOf(route);
	  },
	
	  immediatelyResetRouteStack: function immediatelyResetRouteStack(nextRouteStack) {
	    var _this3 = this;
	    console.warn('navigator.immediatelyResetRouteStack breaks the back button!');
	
	    var self = this;
	    var prevLength = this.state.routeStack.length;
	    var destIndex = nextRouteStack.length - 1;
	    this.setState({
	      routeStack: nextRouteStack,
	      sceneConfigStack: nextRouteStack.map(this.props.configureScene),
	
	      presentedIndex: destIndex,
	      activeGesture: null,
	      transitionFromIndex: null,
	      transitionQueue: [] }, function () {
	      _this3._handleSpringUpdate();
	    });
	  },
	
	  _transitionTo: function _transitionTo(destIndex, velocity, jumpSpringTo, cb) {
	    if (destIndex === this.state.presentedIndex) {
	      this._hideScenes();
	      return;
	    }
	    if (this.state.transitionFromIndex !== null) {
	      this.state.transitionQueue.push({
	        destIndex: destIndex,
	        velocity: velocity,
	        cb: cb });
	
	      return;
	    }
	
	    var transitionFromIndex = this.state.presentedIndex;
	
	    this.setState({
	      presentedIndex: destIndex,
	      transitionFromIndex: transitionFromIndex,
	      transitionCb: cb });
	
	    this._onAnimationStart();
	
	    var sceneConfig = this.state.sceneConfigStack[transitionFromIndex] || this.state.sceneConfigStack[destIndex];
	    (0, _invariant2.default)(sceneConfig, 'Cannot configure scene at index ' + transitionFromIndex);
	
	    if (jumpSpringTo != null) {
	      this.spring.setCurrentValue(jumpSpringTo);
	    }
	    this.spring.setOvershootClampingEnabled(true);
	    this.spring.getSpringConfig().friction = sceneConfig.springFriction;
	    this.spring.getSpringConfig().tension = sceneConfig.springTension;
	    this.spring.setVelocity(velocity || sceneConfig.defaultTransitionVelocity);
	    this.spring.setEndValue(1);
	  },
	
	  _handleSpringUpdate: function _handleSpringUpdate() {
	
	    if (this.state.transitionFromIndex != null) {
	      this._transitionBetween(this.state.transitionFromIndex, this.state.presentedIndex, this.spring.getCurrentValue());
	    } else if (this.state.activeGesture != null) {
	      var presentedToIndex = this.state.presentedIndex + this._deltaForGestureAction(this.state.activeGesture);
	      this._transitionBetween(this.state.presentedIndex, presentedToIndex, this.spring.getCurrentValue());
	    }
	  },
	
	  _completeTransition: function _completeTransition() {
	    if (this.spring.getCurrentValue() !== 1 && this.spring.getCurrentValue() !== 0) {
	
	      if (this.state.pendingGestureProgress) {
	        this.state.pendingGestureProgress = null;
	      }
	      return;
	    }
	    this._onAnimationEnd();
	    var presentedIndex = this.state.presentedIndex;
	    var didFocusRoute = this._subRouteFocus[presentedIndex] || this.state.routeStack[presentedIndex];
	    this._emitDidFocus(didFocusRoute);
	
	    this.state.transitionFromIndex = null;
	    this.spring.setCurrentValue(0).setAtRest();
	    this._hideScenes();
	    if (this.state.transitionCb) {
	      this.state.transitionCb();
	      this.state.transitionCb = null;
	    }
	    if (this._interactionHandle) {
	      this.clearInteractionHandle(this._interactionHandle);
	      this._interactionHandle = null;
	    }
	    if (this.state.pendingGestureProgress) {
	
	      var gestureToIndex = this.state.presentedIndex + this._deltaForGestureAction(this.state.activeGesture);
	      this._enableScene(gestureToIndex);
	      this.spring.setEndValue(this.state.pendingGestureProgress);
	      return;
	    }
	    if (this.state.transitionQueue.length) {
	      var queuedTransition = this.state.transitionQueue.shift();
	      this._enableScene(queuedTransition.destIndex);
	      this._emitWillFocus(this.state.routeStack[queuedTransition.destIndex]);
	      this._transitionTo(queuedTransition.destIndex, queuedTransition.velocity, null, queuedTransition.cb);
	    }
	  },
	
	  _emitDidFocus: function _emitDidFocus(route) {
	    this.navigationContext.emit('didfocus', { route: route });
	
	    if (this.props.onDidFocus) {
	      this.props.onDidFocus(route);
	    }
	  },
	
	  _emitWillFocus: function _emitWillFocus(route) {
	    this.navigationContext.emit('willfocus', { route: route });
	
	    var navBar = this._navBar;
	    if (navBar && navBar.handleWillFocus) {
	      navBar.handleWillFocus(route);
	    }
	    if (this.props.onWillFocus) {
	      this.props.onWillFocus(route);
	    }
	  },
	
	  _hideScenes: function _hideScenes() {
	    var gesturingToIndex = null;
	    if (this.state.activeGesture) {
	      gesturingToIndex = this.state.presentedIndex + this._deltaForGestureAction(this.state.activeGesture);
	    }
	    for (var i = 0; i < this.state.routeStack.length; i++) {
	      if (i === this.state.presentedIndex || i === this.state.transitionFromIndex || i === gesturingToIndex) {
	        continue;
	      }
	      this._disableScene(i);
	    }
	  },
	
	  _disableScene: function _disableScene(sceneIndex) {
	    this.refs['scene_' + sceneIndex] && this.refs['scene_' + sceneIndex].setNativeProps(SCENE_DISABLED_NATIVE_PROPS);
	  },
	
	  _enableScene: function _enableScene(sceneIndex) {
	
	    var sceneStyle = (0, _ReactFlattenStyle2.default)([styles.baseScene, this.props.sceneStyle]);
	
	    var sceneNativeProps = {
	      pointerEvents: 'auto',
	      style: _extends({
	        top: sceneStyle.top,
	        bottom: sceneStyle.bottom }, visibleStyle) };
	
	    this.refs['scene_' + sceneIndex] && this.refs['scene_' + sceneIndex].setNativeProps(sceneNativeProps);
	  },
	
	  _onAnimationStart: function _onAnimationStart() {
	    var fromIndex = this.state.presentedIndex;
	    var toIndex = this.state.presentedIndex;
	    if (this.state.transitionFromIndex != null) {
	      fromIndex = this.state.transitionFromIndex;
	    } else if (this.state.activeGesture) {
	      toIndex = this.state.presentedIndex + this._deltaForGestureAction(this.state.activeGesture);
	    }
	    this._setRenderSceneToHardwareTextureAndroid(fromIndex, true);
	    this._setRenderSceneToHardwareTextureAndroid(toIndex, true);
	    var navBar = this._navBar;
	    if (navBar && navBar.onAnimationStart) {
	      navBar.onAnimationStart(fromIndex, toIndex);
	    }
	  },
	
	  _onAnimationEnd: function _onAnimationEnd() {
	    var max = this.state.routeStack.length - 1;
	    for (var index = 0; index <= max; index++) {
	      this._setRenderSceneToHardwareTextureAndroid(index, false);
	    }
	
	    var navBar = this._navBar;
	    if (navBar && navBar.onAnimationEnd) {
	      navBar.onAnimationEnd();
	    }
	  },
	
	  _setRenderSceneToHardwareTextureAndroid: function _setRenderSceneToHardwareTextureAndroid(sceneIndex, shouldRenderToHardwareTexture) {
	    var viewAtIndex = this.refs['scene_' + sceneIndex];
	    if (viewAtIndex === null || viewAtIndex === undefined) {
	      return;
	    }
	    viewAtIndex.setNativeProps({ renderToHardwareTextureAndroid: shouldRenderToHardwareTexture });
	  },
	
	  _handleTouchStart: function _handleTouchStart() {
	    this._eligibleGestures = GESTURE_ACTIONS;
	  },
	
	  _handleMoveShouldSetPanResponder: function _handleMoveShouldSetPanResponder(e, gestureState) {
	    var sceneConfig = this.state.sceneConfigStack[this.state.presentedIndex];
	    if (!sceneConfig) {
	      return false;
	    }
	    this._expectingGestureGrant = this._matchGestureAction(this._eligibleGestures, sceneConfig.gestures, gestureState);
	    return !!this._expectingGestureGrant;
	  },
	
	  _doesGestureOverswipe: function _doesGestureOverswipe(gestureName) {
	    var wouldOverswipeBack = this.state.presentedIndex <= 0 && (gestureName === 'pop' || gestureName === 'jumpBack');
	    var wouldOverswipeForward = this.state.presentedIndex >= this.state.routeStack.length - 1 && gestureName === 'jumpForward';
	    return wouldOverswipeForward || wouldOverswipeBack;
	  },
	
	  _handlePanResponderGrant: function _handlePanResponderGrant(e, gestureState) {
	    (0, _invariant2.default)(this._expectingGestureGrant, 'Responder granted unexpectedly.');
	
	    this._attachGesture(this._expectingGestureGrant);
	    this._onAnimationStart();
	    this._expectingGestureGrant = null;
	  },
	
	  _deltaForGestureAction: function _deltaForGestureAction(gestureAction) {
	    switch (gestureAction) {
	      case 'pop':
	      case 'jumpBack':
	        return -1;
	      case 'jumpForward':
	        return 1;
	      default:
	        (0, _invariant2.default)(false, 'Unsupported gesture action ' + gestureAction);
	        return;}
	  },
	
	  _handlePanResponderRelease: function _handlePanResponderRelease(e, gestureState) {
	    var _this4 = this;
	    var sceneConfig = this.state.sceneConfigStack[this.state.presentedIndex];
	    var releaseGestureAction = this.state.activeGesture;
	    if (!releaseGestureAction) {
	
	      return;
	    }
	    var releaseGesture = sceneConfig.gestures[releaseGestureAction];
	    var destIndex = this.state.presentedIndex + this._deltaForGestureAction(this.state.activeGesture);
	    if (this.spring.getCurrentValue() === 0) {
	
	      this.spring.setCurrentValue(0).setAtRest();
	      this._completeTransition();
	      return;
	    }
	    var isTravelVertical = releaseGesture.direction === 'top-to-bottom' || releaseGesture.direction === 'bottom-to-top';
	    var isTravelInverted = releaseGesture.direction === 'right-to-left' || releaseGesture.direction === 'bottom-to-top';
	    var velocity = void 0,
	        gestureDistance = void 0;
	    if (isTravelVertical) {
	      velocity = isTravelInverted ? -gestureState.vy : gestureState.vy;
	      gestureDistance = isTravelInverted ? -gestureState.dy : gestureState.dy;
	    } else {
	      velocity = isTravelInverted ? -gestureState.vx : gestureState.vx;
	      gestureDistance = isTravelInverted ? -gestureState.dx : gestureState.dx;
	    }
	    var transitionVelocity = (0, _clamp2.default)(-10, velocity, 10);
	    if (Math.abs(velocity) < releaseGesture.notMoving) {
	
	      var hasGesturedEnoughToComplete = gestureDistance > releaseGesture.fullDistance * releaseGesture.stillCompletionRatio;
	      transitionVelocity = hasGesturedEnoughToComplete ? releaseGesture.snapVelocity : -releaseGesture.snapVelocity;
	    }
	    if (transitionVelocity < 0 || this._doesGestureOverswipe(releaseGestureAction)) {
	
	      if (this.state.transitionFromIndex == null) {
	
	        var transitionBackToPresentedIndex = this.state.presentedIndex;
	
	        this.state.presentedIndex = destIndex;
	        this._transitionTo(transitionBackToPresentedIndex, -transitionVelocity, 1 - this.spring.getCurrentValue());
	      }
	    } else {
	
	      this._emitWillFocus(this.state.routeStack[destIndex]);
	      this._transitionTo(destIndex, transitionVelocity, null, function () {
	        if (releaseGestureAction === 'pop') {
	          _this4._cleanScenesPastIndex(destIndex);
	        }
	      });
	    }
	    this._detachGesture();
	  },
	
	  _handlePanResponderTerminate: function _handlePanResponderTerminate(e, gestureState) {
	    if (this.state.activeGesture == null) {
	      return;
	    }
	    var destIndex = this.state.presentedIndex + this._deltaForGestureAction(this.state.activeGesture);
	    this._detachGesture();
	    var transitionBackToPresentedIndex = this.state.presentedIndex;
	
	    this.state.presentedIndex = destIndex;
	    this._transitionTo(transitionBackToPresentedIndex, null, 1 - this.spring.getCurrentValue());
	  },
	
	  _attachGesture: function _attachGesture(gestureId) {
	    this.state.activeGesture = gestureId;
	    var gesturingToIndex = this.state.presentedIndex + this._deltaForGestureAction(this.state.activeGesture);
	    this._enableScene(gesturingToIndex);
	  },
	
	  _detachGesture: function _detachGesture() {
	    this.state.activeGesture = null;
	    this.state.pendingGestureProgress = null;
	    this._hideScenes();
	  },
	
	  _handlePanResponderMove: function _handlePanResponderMove(e, gestureState) {
	    var sceneConfig = this.state.sceneConfigStack[this.state.presentedIndex];
	    if (this.state.activeGesture) {
	      var gesture = sceneConfig.gestures[this.state.activeGesture];
	      return this._moveAttachedGesture(gesture, gestureState);
	    }
	    var matchedGesture = this._matchGestureAction(GESTURE_ACTIONS, sceneConfig.gestures, gestureState);
	    if (matchedGesture) {
	      this._attachGesture(matchedGesture);
	    }
	  },
	
	  _moveAttachedGesture: function _moveAttachedGesture(gesture, gestureState) {
	    var isTravelVertical = gesture.direction === 'top-to-bottom' || gesture.direction === 'bottom-to-top';
	    var isTravelInverted = gesture.direction === 'right-to-left' || gesture.direction === 'bottom-to-top';
	    var distance = isTravelVertical ? gestureState.dy : gestureState.dx;
	    distance = isTravelInverted ? -distance : distance;
	    var gestureDetectMovement = gesture.gestureDetectMovement;
	    var nextProgress = (distance - gestureDetectMovement) / (gesture.fullDistance - gestureDetectMovement);
	    if (nextProgress < 0 && gesture.isDetachable) {
	      var gesturingToIndex = this.state.presentedIndex + this._deltaForGestureAction(this.state.activeGesture);
	      this._transitionBetween(this.state.presentedIndex, gesturingToIndex, 0);
	      this._detachGesture();
	      if (this.state.pendingGestureProgress != null) {
	        this.spring.setCurrentValue(0);
	      }
	      return;
	    }
	    if (this._doesGestureOverswipe(this.state.activeGesture)) {
	      var frictionConstant = gesture.overswipe.frictionConstant;
	      var frictionByDistance = gesture.overswipe.frictionByDistance;
	      var frictionRatio = 1 / (frictionConstant + Math.abs(nextProgress) * frictionByDistance);
	      nextProgress *= frictionRatio;
	    }
	    nextProgress = (0, _clamp2.default)(0, nextProgress, 1);
	    if (this.state.transitionFromIndex != null) {
	      this.state.pendingGestureProgress = nextProgress;
	    } else if (this.state.pendingGestureProgress) {
	      this.spring.setEndValue(nextProgress);
	    } else {
	      this.spring.setCurrentValue(nextProgress);
	    }
	  },
	
	  _matchGestureAction: function _matchGestureAction(eligibleGestures, gestures, gestureState) {
	    var _this5 = this;
	    if (!gestures) {
	      return null;
	    }
	    var matchedGesture = null;
	    eligibleGestures.some(function (gestureName, gestureIndex) {
	      var gesture = gestures[gestureName];
	      if (!gesture) {
	        return;
	      }
	      if (gesture.overswipe == null && _this5._doesGestureOverswipe(gestureName)) {
	
	        return false;
	      }
	      var isTravelVertical = gesture.direction === 'top-to-bottom' || gesture.direction === 'bottom-to-top';
	      var isTravelInverted = gesture.direction === 'right-to-left' || gesture.direction === 'bottom-to-top';
	      var currentLoc = isTravelVertical ? gestureState.moveY : gestureState.moveX;
	      var travelDist = isTravelVertical ? gestureState.dy : gestureState.dx;
	      var oppositeAxisTravelDist = isTravelVertical ? gestureState.dx : gestureState.dy;
	      var edgeHitWidth = gesture.edgeHitWidth;
	      if (isTravelInverted) {
	        currentLoc = -currentLoc;
	        travelDist = -travelDist;
	        oppositeAxisTravelDist = -oppositeAxisTravelDist;
	        edgeHitWidth = isTravelVertical ? -(SCREEN_HEIGHT - edgeHitWidth) : -(SCREEN_WIDTH - edgeHitWidth);
	      }
	      var moveStartedInRegion = gesture.edgeHitWidth == null || currentLoc < edgeHitWidth;
	      if (!moveStartedInRegion) {
	        return false;
	      }
	      var moveTravelledFarEnough = travelDist >= gesture.gestureDetectMovement;
	      if (!moveTravelledFarEnough) {
	        return false;
	      }
	      var directionIsCorrect = Math.abs(travelDist) > Math.abs(oppositeAxisTravelDist) * gesture.directionRatio;
	      if (directionIsCorrect) {
	        matchedGesture = gestureName;
	        return true;
	      } else {
	        _this5._eligibleGestures = _this5._eligibleGestures.slice().splice(gestureIndex, 1);
	      }
	    });
	    return matchedGesture;
	  },
	
	  _transitionSceneStyle: function _transitionSceneStyle(fromIndex, toIndex, progress, index) {
	    var viewAtIndex = this.refs['scene_' + index];
	    if (viewAtIndex === null || viewAtIndex === undefined) {
	      return;
	    }
	
	    var sceneConfigIndex = fromIndex < toIndex ? toIndex : fromIndex;
	    var sceneConfig = this.state.sceneConfigStack[sceneConfigIndex];
	
	    if (!sceneConfig) {
	      sceneConfig = this.state.sceneConfigStack[sceneConfigIndex - 1];
	    }
	    var styleToUse = {};
	    var useFn = index < fromIndex || index < toIndex ? sceneConfig.animationInterpolators.out : sceneConfig.animationInterpolators.into;
	    var directionAdjustedProgress = fromIndex < toIndex ? progress : 1 - progress;
	    var didChange = useFn(styleToUse, directionAdjustedProgress);
	    if (didChange) {
	      viewAtIndex.setNativeProps({ style: styleToUse });
	    }
	  },
	
	  _transitionBetween: function _transitionBetween(fromIndex, toIndex, progress) {
	    this._transitionSceneStyle(fromIndex, toIndex, progress, fromIndex);
	    this._transitionSceneStyle(fromIndex, toIndex, progress, toIndex);
	    var navBar = this._navBar;
	    if (navBar && navBar.updateProgress && toIndex >= 0 && fromIndex >= 0) {
	      navBar.updateProgress(progress, fromIndex, toIndex);
	    }
	  },
	
	  _handleResponderTerminationRequest: function _handleResponderTerminationRequest() {
	    return false;
	  },
	
	  _getDestIndexWithinBounds: function _getDestIndexWithinBounds(n) {
	    var currentIndex = this.state.presentedIndex;
	    var destIndex = currentIndex + n;
	    (0, _invariant2.default)(destIndex >= 0, 'Cannot jump before the first route.');
	
	    var maxIndex = this.state.routeStack.length - 1;
	    (0, _invariant2.default)(maxIndex >= destIndex, 'Cannot jump past the last route.');
	
	    return destIndex;
	  },
	
	  _jumpN: function _jumpN(n) {
	    var destIndex = this._getDestIndexWithinBounds(n);
	    this._enableScene(destIndex);
	    var route = this.state.routeStack[destIndex];
	    this._emitWillFocus(route);
	    this._transitionTo(destIndex);
	    if (!this.hashChanged) {
	      if (n > 0) {
	        history.pushState({ index: destIndex }, '/scene_' + this._getRouteID(route));
	      } else {
	        history.go(n);
	      }
	      return;
	    }
	  },
	
	  jumpTo: function jumpTo(route) {
	    var destIndex = this.state.routeStack.indexOf(route);
	    (0, _invariant2.default)(destIndex !== -1, 'Cannot jump to route that is not in the route stack');
	
	    this._jumpN(destIndex - this.state.presentedIndex);
	  },
	
	  jumpForward: function jumpForward() {
	    this._jumpN(1);
	  },
	
	  jumpBack: function jumpBack() {
	    this._jumpN(-1);
	  },
	
	  push: function push(route) {
	    var _this6 = this;
	    (0, _invariant2.default)(!!route, 'Must supply route to push');
	    var activeLength = this.state.presentedIndex + 1;
	    var activeStack = this.state.routeStack.slice(0, activeLength);
	    var activeAnimationConfigStack = this.state.sceneConfigStack.slice(0, activeLength);
	    var nextStack = activeStack.concat([route]);
	    var destIndex = nextStack.length - 1;
	    var nextAnimationConfigStack = activeAnimationConfigStack.concat([this.props.configureScene(route)]);
	
	    this._emitWillFocus(nextStack[destIndex]);
	    this.setState({
	      routeStack: nextStack,
	      sceneConfigStack: nextAnimationConfigStack }, function () {
	      history.pushState({ index: destIndex }, '/scene_' + _this6._getRouteID(route));
	      _this6._enableScene(destIndex);
	      _this6._transitionTo(destIndex);
	    });
	  },
	
	  _popN: function _popN(n) {
	    var _this7 = this;
	    if (n === 0) {
	      return;
	    }
	    (0, _invariant2.default)(this.state.presentedIndex - n >= 0, 'Cannot pop below zero');
	
	    var popIndex = this.state.presentedIndex - n;
	    this._enableScene(popIndex);
	    this._emitWillFocus(this.state.routeStack[popIndex]);
	    this._transitionTo(popIndex, null, null, function () {
	      history.go(-n);
	      _this7._cleanScenesPastIndex(popIndex);
	    });
	  },
	
	  pop: function pop() {
	    if (this.state.transitionQueue.length) {
	
	      return;
	    }
	
	    if (this.state.presentedIndex > 0) {
	      this._popN(1);
	    }
	  },
	
	  replaceAtIndex: function replaceAtIndex(route, index, cb) {
	    var _this8 = this;
	    (0, _invariant2.default)(!!route, 'Must supply route to replace');
	    if (index < 0) {
	      index += this.state.routeStack.length;
	    }
	
	    if (this.state.routeStack.length <= index) {
	      return;
	    }
	
	    var replaceCurrent = index === this.state.presentedIndex;
	    if (!replaceCurrent) {
	      console.warn('navigator.replaceAtIndex for the non-current route breaks the back button!');
	    }
	
	    var nextRouteStack = this.state.routeStack.slice();
	    var nextAnimationModeStack = this.state.sceneConfigStack.slice();
	    nextRouteStack[index] = route;
	    nextAnimationModeStack[index] = this.props.configureScene(route);
	
	    if (index === this.state.presentedIndex) {
	      this._emitWillFocus(route);
	    }
	    this.setState({
	      routeStack: nextRouteStack,
	      sceneConfigStack: nextAnimationModeStack,
	      presentedIndex: index,
	      transitionFromIndex: null }, function () {
	      if (index === _this8.state.presentedIndex) {
	        _this8._emitDidFocus(route);
	      }
	
	      if (replaceCurrent) {
	        history.replaceState({ index: index }, '/scene_' + _this8._getRouteID(route));
	      }
	
	      cb && cb();
	    });
	  },
	
	  replace: function replace(route) {
	    this.replaceAtIndex(route, this.state.presentedIndex);
	  },
	
	  replacePrevious: function replacePrevious(route) {
	    this.replaceAtIndex(route, this.state.presentedIndex - 1);
	  },
	
	  popToTop: function popToTop() {
	    this.popToRoute(this.state.routeStack[0]);
	  },
	
	  popToRoute: function popToRoute(route) {
	    var indexOfRoute = this.state.routeStack.indexOf(route);
	    (0, _invariant2.default)(indexOfRoute !== -1, 'Calling popToRoute for a route that doesn\'t exist!');
	
	    var numToPop = this.state.presentedIndex - indexOfRoute;
	    this._popN(numToPop);
	  },
	
	  replacePreviousAndPop: function replacePreviousAndPop(route) {
	    if (this.state.routeStack.length < 2) {
	      return;
	    }
	    this.replacePrevious(route);
	    this.pop();
	  },
	
	  resetTo: function resetTo(route) {
	    var _this9 = this;
	    (0, _invariant2.default)(!!route, 'Must supply route to push');
	    this.replaceAtIndex(route, 0, function () {
	
	      if (_this9.state.presentedIndex > 0) {
	        _this9._popN(_this9.state.presentedIndex);
	      }
	    });
	  },
	
	  getCurrentRoutes: function getCurrentRoutes() {
	
	    return this.state.routeStack.slice();
	  },
	
	  _cleanScenesPastIndex: function _cleanScenesPastIndex(index) {
	    var newStackLength = index + 1;
	
	    if (newStackLength < this.state.routeStack.length) {
	      this.setState({
	        sceneConfigStack: this.state.sceneConfigStack.slice(0, newStackLength),
	        routeStack: this.state.routeStack.slice(0, newStackLength),
	        presentedIndex: index });
	    }
	  },
	
	  _renderScene: function _renderScene(route, i) {
	    var _this10 = this;
	
	    var pointerEvents = 'auto';
	    if (i !== this.state.presentedIndex) {
	
	      pointerEvents = 'none';
	    }
	
	    var routeId = this._getRouteID(route);
	    return _react2.default.createElement(_ReactView2.default, {
	      key: 'scene_' + routeId,
	      ref: 'scene_' + routeId,
	      onStartShouldSetResponderCapture: function onStartShouldSetResponderCapture() {
	        return _this10.state.transitionFromIndex != null || _this10.state.transitionFromIndex != null;
	      },
	      pointerEvents: pointerEvents,
	      style: [styles.baseScene, this.props.sceneStyle] }, this.props.renderScene(route, this));
	  },
	
	  _renderNavigationBar: function _renderNavigationBar() {
	    var _this11 = this;
	    if (!this.props.navigationBar) {
	      return null;
	    }
	    return _react2.default.cloneElement(this.props.navigationBar, {
	      ref: function ref(navBar) {
	        _this11._navBar = navBar;
	      },
	      navigator: this,
	      navState: this.state });
	  },
	
	  render: function render() {
	    var _this12 = this;
	    var newRenderedSceneMap = new _map2.default();
	    var scenes = this.state.routeStack.map(function (route, index) {
	      var renderedScene = void 0;
	      if (_this12._renderedSceneMap.has(route) && index !== _this12.state.presentedIndex) {
	        renderedScene = _this12._renderedSceneMap.get(route);
	      } else {
	        renderedScene = _this12._renderScene(route, index);
	      }
	      newRenderedSceneMap.set(route, renderedScene);
	      return renderedScene;
	    });
	    this._renderedSceneMap = newRenderedSceneMap;
	    return _react2.default.createElement(_ReactView2.default, { style: [styles.container, this.props.style] }, _react2.default.createElement(_ReactView2.default, _extends({
	      style: styles.transitioner }, this.panGesture.panHandlers, {
	      onTouchStart: this._handleTouchStart,
	      onResponderTerminationRequest: this._handleResponderTerminationRequest }), scenes), this._renderNavigationBar());
	  },
	
	  _getNavigationContext: function _getNavigationContext() {
	    if (!this._navigationContext) {
	      this._navigationContext = new _ReactNavigationContext2.default();
	    }
	    return this._navigationContext;
	  } });
	
	Navigator.isReactNativeComponent = true;exports.default = Navigator;

/***/ },
/* 609 */
/***/ function(module, exports) {

	
	
	'use strict';
	
	var InteractionMixin = {
	  componentWillUnmount: function componentWillUnmount() {},
	
	  _interactionMixinHandles: [],
	
	  createInteractionHandle: function createInteractionHandle() {},
	
	  clearInteractionHandle: function clearInteractionHandle(clearHandle) {},
	
	  runAfterInteractions: function runAfterInteractions(callback) {} };
	
	module.exports = InteractionMixin;

/***/ },
/* 610 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(611);
	__webpack_require__(612);
	__webpack_require__(656);
	__webpack_require__(660);
	__webpack_require__(675);
	module.exports = __webpack_require__(620).Map;

/***/ },
/* 611 */
/***/ function(module, exports) {



/***/ },
/* 612 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(613)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(616)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 613 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(614)
	  , defined   = __webpack_require__(615);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 614 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 615 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 616 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(617)
	  , $export        = __webpack_require__(618)
	  , redefine       = __webpack_require__(633)
	  , hide           = __webpack_require__(623)
	  , has            = __webpack_require__(634)
	  , Iterators      = __webpack_require__(635)
	  , $iterCreate    = __webpack_require__(636)
	  , setToStringTag = __webpack_require__(652)
	  , getPrototypeOf = __webpack_require__(654)
	  , ITERATOR       = __webpack_require__(653)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';
	
	var returnThis = function(){ return this; };
	
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 617 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 618 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(619)
	  , core      = __webpack_require__(620)
	  , ctx       = __webpack_require__(621)
	  , hide      = __webpack_require__(623)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 619 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 620 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.2.2'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 621 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(622);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 622 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 623 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(624)
	  , createDesc = __webpack_require__(632);
	module.exports = __webpack_require__(628) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 624 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(625)
	  , IE8_DOM_DEFINE = __webpack_require__(627)
	  , toPrimitive    = __webpack_require__(631)
	  , dP             = Object.defineProperty;
	
	exports.f = __webpack_require__(628) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 625 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(626);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 626 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 627 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(628) && !__webpack_require__(629)(function(){
	  return Object.defineProperty(__webpack_require__(630)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 628 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(629)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 629 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 630 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(626)
	  , document = __webpack_require__(619).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 631 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(626);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 632 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 633 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(623);

/***/ },
/* 634 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 635 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 636 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(637)
	  , descriptor     = __webpack_require__(632)
	  , setToStringTag = __webpack_require__(652)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(623)(IteratorPrototype, __webpack_require__(653)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 637 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(625)
	  , dPs         = __webpack_require__(638)
	  , enumBugKeys = __webpack_require__(650)
	  , IE_PROTO    = __webpack_require__(647)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(630)('iframe')
	    , i      = enumBugKeys.length
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(651).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write('<script>document.F=Object</script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};
	
	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};

/***/ },
/* 638 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(624)
	  , anObject = __webpack_require__(625)
	  , getKeys  = __webpack_require__(639);
	
	module.exports = __webpack_require__(628) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 639 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(640)
	  , enumBugKeys = __webpack_require__(650);
	
	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 640 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(634)
	  , toIObject    = __webpack_require__(641)
	  , arrayIndexOf = __webpack_require__(644)(false)
	  , IE_PROTO     = __webpack_require__(647)('IE_PROTO');
	
	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 641 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(642)
	  , defined = __webpack_require__(615);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 642 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(643);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 643 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 644 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(641)
	  , toLength  = __webpack_require__(645)
	  , toIndex   = __webpack_require__(646);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 645 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(614)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 646 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(614)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 647 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(648)('keys')
	  , uid    = __webpack_require__(649);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 648 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(619)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 649 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 650 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 651 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(619).document && document.documentElement;

/***/ },
/* 652 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(624).f
	  , has = __webpack_require__(634)
	  , TAG = __webpack_require__(653)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 653 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(648)('wks')
	  , uid        = __webpack_require__(649)
	  , Symbol     = __webpack_require__(619).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';
	module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

/***/ },
/* 654 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(634)
	  , toObject    = __webpack_require__(655)
	  , IE_PROTO    = __webpack_require__(647)('IE_PROTO')
	  , ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 655 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(615);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 656 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(657);
	var global        = __webpack_require__(619)
	  , hide          = __webpack_require__(623)
	  , Iterators     = __webpack_require__(635)
	  , TO_STRING_TAG = __webpack_require__(653)('toStringTag');
	
	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 657 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(658)
	  , step             = __webpack_require__(659)
	  , Iterators        = __webpack_require__(635)
	  , toIObject        = __webpack_require__(641);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(616)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 658 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 659 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 660 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(661);
	
	// 23.1 Map Objects
	module.exports = __webpack_require__(671)('Map', function(get){
	  return function Map(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.1.3.6 Map.prototype.get(key)
	  get: function get(key){
	    var entry = strong.getEntry(this, key);
	    return entry && entry.v;
	  },
	  // 23.1.3.9 Map.prototype.set(key, value)
	  set: function set(key, value){
	    return strong.def(this, key === 0 ? 0 : key, value);
	  }
	}, strong, true);

/***/ },
/* 661 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var dP          = __webpack_require__(624).f
	  , create      = __webpack_require__(637)
	  , hide        = __webpack_require__(623)
	  , redefineAll = __webpack_require__(662)
	  , ctx         = __webpack_require__(621)
	  , anInstance  = __webpack_require__(663)
	  , defined     = __webpack_require__(615)
	  , forOf       = __webpack_require__(664)
	  , $iterDefine = __webpack_require__(616)
	  , step        = __webpack_require__(659)
	  , setSpecies  = __webpack_require__(669)
	  , DESCRIPTORS = __webpack_require__(628)
	  , fastKey     = __webpack_require__(670).fastKey
	  , SIZE        = DESCRIPTORS ? '_s' : 'size';
	
	var getEntry = function(that, key){
	  // fast case
	  var index = fastKey(key), entry;
	  if(index !== 'F')return that._i[index];
	  // frozen object case
	  for(entry = that._f; entry; entry = entry.n){
	    if(entry.k == key)return entry;
	  }
	};
	
	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      anInstance(that, C, NAME, '_i');
	      that._i = create(null); // index
	      that._f = undefined;    // first entry
	      that._l = undefined;    // last entry
	      that[SIZE] = 0;         // size
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.1.3.1 Map.prototype.clear()
	      // 23.2.3.2 Set.prototype.clear()
	      clear: function clear(){
	        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
	          entry.r = true;
	          if(entry.p)entry.p = entry.p.n = undefined;
	          delete data[entry.i];
	        }
	        that._f = that._l = undefined;
	        that[SIZE] = 0;
	      },
	      // 23.1.3.3 Map.prototype.delete(key)
	      // 23.2.3.4 Set.prototype.delete(value)
	      'delete': function(key){
	        var that  = this
	          , entry = getEntry(that, key);
	        if(entry){
	          var next = entry.n
	            , prev = entry.p;
	          delete that._i[entry.i];
	          entry.r = true;
	          if(prev)prev.n = next;
	          if(next)next.p = prev;
	          if(that._f == entry)that._f = next;
	          if(that._l == entry)that._l = prev;
	          that[SIZE]--;
	        } return !!entry;
	      },
	      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	      forEach: function forEach(callbackfn /*, that = undefined */){
	        anInstance(this, C, 'forEach');
	        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
	          , entry;
	        while(entry = entry ? entry.n : this._f){
	          f(entry.v, entry.k, this);
	          // revert to the last existing entry
	          while(entry && entry.r)entry = entry.p;
	        }
	      },
	      // 23.1.3.7 Map.prototype.has(key)
	      // 23.2.3.7 Set.prototype.has(value)
	      has: function has(key){
	        return !!getEntry(this, key);
	      }
	    });
	    if(DESCRIPTORS)dP(C.prototype, 'size', {
	      get: function(){
	        return defined(this[SIZE]);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var entry = getEntry(that, key)
	      , prev, index;
	    // change existing entry
	    if(entry){
	      entry.v = value;
	    // create new entry
	    } else {
	      that._l = entry = {
	        i: index = fastKey(key, true), // <- index
	        k: key,                        // <- key
	        v: value,                      // <- value
	        p: prev = that._l,             // <- previous entry
	        n: undefined,                  // <- next entry
	        r: false                       // <- removed
	      };
	      if(!that._f)that._f = entry;
	      if(prev)prev.n = entry;
	      that[SIZE]++;
	      // add to index
	      if(index !== 'F')that._i[index] = entry;
	    } return that;
	  },
	  getEntry: getEntry,
	  setStrong: function(C, NAME, IS_MAP){
	    // add .keys, .values, .entries, [@@iterator]
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	    $iterDefine(C, NAME, function(iterated, kind){
	      this._t = iterated;  // target
	      this._k = kind;      // kind
	      this._l = undefined; // previous
	    }, function(){
	      var that  = this
	        , kind  = that._k
	        , entry = that._l;
	      // revert to the last existing entry
	      while(entry && entry.r)entry = entry.p;
	      // get next entry
	      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
	        // or finish the iteration
	        that._t = undefined;
	        return step(1);
	      }
	      // return step by kind
	      if(kind == 'keys'  )return step(0, entry.k);
	      if(kind == 'values')return step(0, entry.v);
	      return step(0, [entry.k, entry.v]);
	    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);
	
	    // add [@@species], 23.1.2.2, 23.2.2.2
	    setSpecies(NAME);
	  }
	};

/***/ },
/* 662 */
/***/ function(module, exports, __webpack_require__) {

	var hide = __webpack_require__(623);
	module.exports = function(target, src, safe){
	  for(var key in src){
	    if(safe && target[key])target[key] = src[key];
	    else hide(target, key, src[key]);
	  } return target;
	};

/***/ },
/* 663 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name, forbiddenField){
	  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};

/***/ },
/* 664 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(621)
	  , call        = __webpack_require__(665)
	  , isArrayIter = __webpack_require__(666)
	  , anObject    = __webpack_require__(625)
	  , toLength    = __webpack_require__(645)
	  , getIterFn   = __webpack_require__(667);
	module.exports = function(iterable, entries, fn, that, ITERATOR){
	  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    call(iterator, f, step.value, entries);
	  }
	};

/***/ },
/* 665 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(625);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 666 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(635)
	  , ITERATOR   = __webpack_require__(653)('iterator')
	  , ArrayProto = Array.prototype;
	
	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 667 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(668)
	  , ITERATOR  = __webpack_require__(653)('iterator')
	  , Iterators = __webpack_require__(635);
	module.exports = __webpack_require__(620).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 668 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(643)
	  , TAG = __webpack_require__(653)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 669 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global      = __webpack_require__(619)
	  , core        = __webpack_require__(620)
	  , dP          = __webpack_require__(624)
	  , DESCRIPTORS = __webpack_require__(628)
	  , SPECIES     = __webpack_require__(653)('species');
	
	module.exports = function(KEY){
	  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 670 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(649)('meta')
	  , isObject = __webpack_require__(626)
	  , has      = __webpack_require__(634)
	  , setDesc  = __webpack_require__(624).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(629)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 671 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global         = __webpack_require__(619)
	  , $export        = __webpack_require__(618)
	  , meta           = __webpack_require__(670)
	  , fails          = __webpack_require__(629)
	  , hide           = __webpack_require__(623)
	  , redefineAll    = __webpack_require__(662)
	  , forOf          = __webpack_require__(664)
	  , anInstance     = __webpack_require__(663)
	  , isObject       = __webpack_require__(626)
	  , setToStringTag = __webpack_require__(652)
	  , dP             = __webpack_require__(624).f
	  , each           = __webpack_require__(672)(0)
	  , DESCRIPTORS    = __webpack_require__(628);
	
	module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
	  var Base  = global[NAME]
	    , C     = Base
	    , ADDER = IS_MAP ? 'set' : 'add'
	    , proto = C && C.prototype
	    , O     = {};
	  if(!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
	    new C().entries().next();
	  }))){
	    // create collection constructor
	    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
	    redefineAll(C.prototype, methods);
	    meta.NEED = true;
	  } else {
	    C = wrapper(function(target, iterable){
	      anInstance(target, C, NAME, '_c');
	      target._c = new Base;
	      if(iterable != undefined)forOf(iterable, IS_MAP, target[ADDER], target);
	    });
	    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','),function(KEY){
	      var IS_ADDER = KEY == 'add' || KEY == 'set';
	      if(KEY in proto && !(IS_WEAK && KEY == 'clear'))hide(C.prototype, KEY, function(a, b){
	        anInstance(this, C, KEY);
	        if(!IS_ADDER && IS_WEAK && !isObject(a))return KEY == 'get' ? undefined : false;
	        var result = this._c[KEY](a === 0 ? 0 : a, b);
	        return IS_ADDER ? this : result;
	      });
	    });
	    if('size' in proto)dP(C.prototype, 'size', {
	      get: function(){
	        return this._c.size;
	      }
	    });
	  }
	
	  setToStringTag(C, NAME);
	
	  O[NAME] = C;
	  $export($export.G + $export.W + $export.F, O);
	
	  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);
	
	  return C;
	};

/***/ },
/* 672 */
/***/ function(module, exports, __webpack_require__) {

	// 0 -> Array#forEach
	// 1 -> Array#map
	// 2 -> Array#filter
	// 3 -> Array#some
	// 4 -> Array#every
	// 5 -> Array#find
	// 6 -> Array#findIndex
	var ctx      = __webpack_require__(621)
	  , IObject  = __webpack_require__(642)
	  , toObject = __webpack_require__(655)
	  , toLength = __webpack_require__(645)
	  , asc      = __webpack_require__(673);
	module.exports = function(TYPE, $create){
	  var IS_MAP        = TYPE == 1
	    , IS_FILTER     = TYPE == 2
	    , IS_SOME       = TYPE == 3
	    , IS_EVERY      = TYPE == 4
	    , IS_FIND_INDEX = TYPE == 6
	    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX
	    , create        = $create || asc;
	  return function($this, callbackfn, that){
	    var O      = toObject($this)
	      , self   = IObject(O)
	      , f      = ctx(callbackfn, that, 3)
	      , length = toLength(self.length)
	      , index  = 0
	      , result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined
	      , val, res;
	    for(;length > index; index++)if(NO_HOLES || index in self){
	      val = self[index];
	      res = f(val, index, O);
	      if(TYPE){
	        if(IS_MAP)result[index] = res;            // map
	        else if(res)switch(TYPE){
	          case 3: return true;                    // some
	          case 5: return val;                     // find
	          case 6: return index;                   // findIndex
	          case 2: result.push(val);               // filter
	        } else if(IS_EVERY)return false;          // every
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
	  };
	};

/***/ },
/* 673 */
/***/ function(module, exports, __webpack_require__) {

	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
	var isObject = __webpack_require__(626)
	  , isArray  = __webpack_require__(674)
	  , SPECIES  = __webpack_require__(653)('species');
	module.exports = function(original, length){
	  var C;
	  if(isArray(original)){
	    C = original.constructor;
	    // cross-realm fallback
	    if(typeof C == 'function' && (C === Array || isArray(C.prototype)))C = undefined;
	    if(isObject(C)){
	      C = C[SPECIES];
	      if(C === null)C = undefined;
	    }
	  } return new (C === undefined ? Array : C)(length);
	};

/***/ },
/* 674 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(643);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 675 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(618);
	
	$export($export.P + $export.R, 'Map', {toJSON: __webpack_require__(676)('Map')});

/***/ },
/* 676 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var classof = __webpack_require__(668)
	  , from    = __webpack_require__(677);
	module.exports = function(NAME){
	  return function toJSON(){
	    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
	    return from(this);
	  };
	};

/***/ },
/* 677 */
/***/ function(module, exports, __webpack_require__) {

	var forOf = __webpack_require__(664);
	
	module.exports = function(iter, ITERATOR){
	  var result = [];
	  forOf(iter, false, result.push, result, ITERATOR);
	  return result;
	};


/***/ },
/* 678 */
/***/ function(module, exports, __webpack_require__) {

	
	
	'use strict';
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _ReactNavigationEvent = __webpack_require__(679);var _ReactNavigationEvent2 = _interopRequireDefault(_ReactNavigationEvent);
	var _ReactNavigationEventEmitter = __webpack_require__(680);var _ReactNavigationEventEmitter2 = _interopRequireDefault(_ReactNavigationEventEmitter);
	var _ReactNavigationTreeNode = __webpack_require__(686);var _ReactNavigationTreeNode2 = _interopRequireDefault(_ReactNavigationTreeNode);
	var _emptyFunction = __webpack_require__(599);var _emptyFunction2 = _interopRequireDefault(_emptyFunction);
	var _invariant = __webpack_require__(583);var _invariant2 = _interopRequireDefault(_invariant);function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}var AT_TARGET = _ReactNavigationEvent2.default.AT_TARGET;var BUBBLING_PHASE = _ReactNavigationEvent2.default.BUBBLING_PHASE;var CAPTURING_PHASE = _ReactNavigationEvent2.default.CAPTURING_PHASE;var NavigationContext = function () {
	
	  function NavigationContext() {
	    _classCallCheck(this, NavigationContext);
	    this._bubbleEventEmitter = new _ReactNavigationEventEmitter2.default(this);
	    this._captureEventEmitter = new _ReactNavigationEventEmitter2.default(this);
	    this._currentRoute = null;
	
	    this.__node = new _ReactNavigationTreeNode2.default(this);
	
	    this._emitCounter = 0;
	    this._emitQueue = [];
	
	    this.addListener('willfocus', this._onFocus, this);
	    this.addListener('didfocus', this._onFocus, this);
	  }_createClass(NavigationContext, [{ key: 'appendChild', value: function appendChild(childContext) {
	      this.__node.appendChild(childContext.__node);
	    } }, { key: 'addListener', value: function addListener(eventType, listener, context, useCapture) {
	      var emitter = useCapture ? this._captureEventEmitter : this._bubbleEventEmitter;
	      if (emitter) {
	        return emitter.addListener(eventType, listener, context);
	      } else {
	        return { remove: _emptyFunction2.default };
	      }
	    } }, { key: 'emit', value: function emit(eventType, data, didEmitCallback) {
	      var _this = this;
	      if (this._emitCounter > 0) {
	
	        var args = Array.prototype.slice.call(arguments);
	        this._emitQueue.push(args);
	        return;
	      }
	
	      this._emitCounter++;
	
	      var targets = [this];
	      var parentTarget = this.parent;
	      while (parentTarget) {
	        targets.unshift(parentTarget);
	        parentTarget = parentTarget.parent;
	      }
	
	      var propagationStopped = false;
	      var defaultPrevented = false;
	      var callback = function callback(event) {
	        propagationStopped = propagationStopped || event.isPropagationStopped();
	        defaultPrevented = defaultPrevented || event.defaultPrevented;
	      };
	
	      targets.some(function (currentTarget) {
	        if (propagationStopped) {
	          return true;
	        }
	
	        var extraInfo = {
	          defaultPrevented: defaultPrevented,
	          eventPhase: CAPTURING_PHASE,
	          propagationStopped: propagationStopped,
	          target: _this };
	
	        currentTarget.__emit(eventType, data, callback, extraInfo);
	      }, this);
	
	      targets.reverse().some(function (currentTarget) {
	        if (propagationStopped) {
	          return true;
	        }
	        var extraInfo = {
	          defaultPrevented: defaultPrevented,
	          eventPhase: BUBBLING_PHASE,
	          propagationStopped: propagationStopped,
	          target: _this };
	
	        currentTarget.__emit(eventType, data, callback, extraInfo);
	      }, this);
	
	      if (didEmitCallback) {
	        var event = _ReactNavigationEvent2.default.pool(eventType, this, data);
	        propagationStopped && event.stopPropagation();
	        defaultPrevented && event.preventDefault();
	        didEmitCallback.call(this, event);
	        event.dispose();
	      }
	
	      this._emitCounter--;
	      while (this._emitQueue.length) {
	        var args = this._emitQueue.shift();
	        this.emit.apply(this, args);
	      }
	    } }, { key: 'dispose', value: function dispose() {
	
	      this._bubbleEventEmitter && this._bubbleEventEmitter.removeAllListeners();
	      this._captureEventEmitter && this._captureEventEmitter.removeAllListeners();
	      this._bubbleEventEmitter = null;
	      this._captureEventEmitter = null;
	      this._currentRoute = null;
	    } }, { key: '__emit', value: function __emit(eventType, data, didEmitCallback, extraInfo) {
	      var emitter;
	      switch (extraInfo.eventPhase) {
	        case CAPTURING_PHASE:
	          emitter = this._captureEventEmitter;
	          break;
	        case BUBBLING_PHASE:
	          emitter = this._bubbleEventEmitter;
	          break;
	        default:
	          (0, _invariant2.default)(false, 'invalid event phase %s', extraInfo.eventPhase);}
	
	      if (extraInfo.target === this) {
	
	        extraInfo.eventPhase = AT_TARGET;
	      }
	
	      if (emitter) {
	        emitter.emit(eventType, data, didEmitCallback, extraInfo);
	      }
	    } }, { key: '_onFocus', value: function _onFocus(event) {
	      (0, _invariant2.default)(event.data && event.data.hasOwnProperty('route'), 'didfocus event should provide route');
	
	      this._currentRoute = event.data.route;
	    } }, { key: 'parent', get: function get() {
	      var parent = this.__node.getParent();return parent ? parent.getValue() : null;
	    } }, { key: 'currentRoute', get: function get() {
	      return this._currentRoute;
	    } }]);return NavigationContext;
	}();
	
	module.exports = NavigationContext;

/***/ },
/* 679 */
/***/ function(module, exports, __webpack_require__) {

	
	
	'use strict';
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _invariant = __webpack_require__(583);var _invariant2 = _interopRequireDefault(_invariant);function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}var NavigationEventPool = function () {
	
	  function NavigationEventPool() {
	    _classCallCheck(this, NavigationEventPool);
	    this._list = [];
	  }_createClass(NavigationEventPool, [{ key: 'get', value: function get(type, currentTarget, data) {
	      var event;
	      if (this._list.length > 0) {
	        event = this._list.pop();
	        event.constructor.call(event, type, currentTarget, data);
	      } else {
	        event = new NavigationEvent(type, currentTarget, data);
	      }
	      return event;
	    } }, { key: 'put', value: function put(event) {
	      this._list.push(event);
	    } }]);return NavigationEventPool;
	}();
	
	var _navigationEventPool = new NavigationEventPool();var NavigationEvent = function () {
	  _createClass(NavigationEvent, null, [{ key: 'pool', value: function pool(type, currentTarget, data) {
	      return _navigationEventPool.get(type, currentTarget, data);
	    } }]);
	
	  function NavigationEvent(type, currentTarget, data) {
	    _classCallCheck(this, NavigationEvent);
	    this.target = currentTarget;
	    this.eventPhase = NavigationEvent.NONE;
	
	    this._type = type;
	    this._currentTarget = currentTarget;
	    this._data = data;
	    this._defaultPrevented = false;
	    this._disposed = false;
	    this._propagationStopped = false;
	  }_createClass(NavigationEvent, [{ key: 'preventDefault', value: function preventDefault() {
	      this._defaultPrevented = true;
	    } }, { key: 'stopPropagation', value: function stopPropagation() {
	      this._propagationStopped = true;
	    } }, { key: 'stop', value: function stop() {
	      this.preventDefault();
	      this.stopPropagation();
	    } }, { key: 'isPropagationStopped', value: function isPropagationStopped() {
	      return this._propagationStopped;
	    } }, { key: 'dispose', value: function dispose() {
	      (0, _invariant2.default)(!this._disposed, 'NavigationEvent is already disposed');
	      this._disposed = true;
	
	      this.target = null;
	      this.eventPhase = NavigationEvent.NONE;
	      this._type = null;
	      this._currentTarget = null;
	      this._data = null;
	      this._defaultPrevented = false;
	
	      _navigationEventPool.put(this);
	    } }, { key: 'type', get: function get() {
	      return this._type;
	    } }, { key: 'currentTarget', get: function get() {
	      return this._currentTarget;
	    } }, { key: 'data', get: function get() {
	      return this._data;
	    } }, { key: 'defaultPrevented', get: function get() {
	      return this._defaultPrevented;
	    } }]);return NavigationEvent;
	}();
	
	NavigationEvent.NONE = 0;
	
	NavigationEvent.CAPTURING_PHASE = 1;
	
	NavigationEvent.AT_TARGET = 2;
	
	NavigationEvent.BUBBLING_PHASE = 3;
	
	module.exports = NavigationEvent;

/***/ },
/* 680 */
/***/ function(module, exports, __webpack_require__) {

	
	
	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();var _get = function get(object, property, receiver) {
	  if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	    var parent = Object.getPrototypeOf(object);if (parent === null) {
	      return undefined;
	    } else {
	      return get(parent, property, receiver);
	    }
	  } else if ("value" in desc) {
	    return desc.value;
	  } else {
	    var getter = desc.get;if (getter === undefined) {
	      return undefined;
	    }return getter.call(receiver);
	  }
	};
	
	var _EventEmitter2 = __webpack_require__(681);var _EventEmitter3 = _interopRequireDefault(_EventEmitter2);
	var _ReactNavigationEvent = __webpack_require__(679);var _ReactNavigationEvent2 = _interopRequireDefault(_ReactNavigationEvent);function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}var NavigationEventEmitter = function (_EventEmitter) {
	  _inherits(NavigationEventEmitter, _EventEmitter);
	
	  function NavigationEventEmitter(target) {
	    _classCallCheck(this, NavigationEventEmitter);var _this = _possibleConstructorReturn(this, (NavigationEventEmitter.__proto__ || Object.getPrototypeOf(NavigationEventEmitter)).call(this));
	
	    _this._emitting = false;
	    _this._emitQueue = [];
	    _this._target = target;return _this;
	  }_createClass(NavigationEventEmitter, [{ key: 'emit', value: function emit(eventType, data, didEmitCallback, extraInfo) {
	      if (this._emitting) {
	
	        var args = Array.prototype.slice.call(arguments);
	        this._emitQueue.unshift(args);
	        return;
	      }
	
	      this._emitting = true;
	
	      var event = _ReactNavigationEvent2.default.pool(eventType, this._target, data);
	
	      if (extraInfo) {
	        if (extraInfo.target) {
	          event.target = extraInfo.target;
	        }
	
	        if (extraInfo.eventPhase) {
	          event.eventPhase = extraInfo.eventPhase;
	        }
	
	        if (extraInfo.defaultPrevented) {
	          event.preventDefault();
	        }
	
	        if (extraInfo.propagationStopped) {
	          event.stopPropagation();
	        }
	      }
	
	      _get(NavigationEventEmitter.prototype.__proto__ || Object.getPrototypeOf(NavigationEventEmitter.prototype), 'emit', this).call(this, String(eventType), event);
	
	      if (typeof didEmitCallback === 'function') {
	        didEmitCallback.call(this._target, event);
	      }
	      event.dispose();
	
	      this._emitting = false;
	
	      while (this._emitQueue.length) {
	        var args = this._emitQueue.shift();
	        this.emit.apply(this, args);
	      }
	    } }]);return NavigationEventEmitter;
	}(_EventEmitter3.default);
	
	module.exports = NavigationEventEmitter;

/***/ },
/* 681 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _ReactEmitterSubscription = __webpack_require__(682);var _ReactEmitterSubscription2 = _interopRequireDefault(_ReactEmitterSubscription);
	var _ReactErrorUtils = __webpack_require__(684);var _ReactErrorUtils2 = _interopRequireDefault(_ReactErrorUtils);
	var _ReactEventSubscriptionVendor = __webpack_require__(685);var _ReactEventSubscriptionVendor2 = _interopRequireDefault(_ReactEventSubscriptionVendor);
	var _emptyFunction = __webpack_require__(599);var _emptyFunction2 = _interopRequireDefault(_emptyFunction);
	var _invariant = __webpack_require__(583);var _invariant2 = _interopRequireDefault(_invariant);function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}var EventEmitter = function () {
	
	  function EventEmitter() {
	    _classCallCheck(this, EventEmitter);
	    this._subscriber = new _ReactEventSubscriptionVendor2.default();
	  }_createClass(EventEmitter, [{ key: 'addListener', value: function addListener(eventType, listener, context) {
	      return this._subscriber.addSubscription(eventType, new _ReactEmitterSubscription2.default(this._subscriber, listener, context));
	    } }, { key: 'once', value: function once(eventType, listener, context) {
	      var emitter = this;
	      return this.addListener(eventType, function () {
	        emitter.removeCurrentListener();
	        listener.apply(context, arguments);
	      });
	    } }, { key: 'removeAllListeners', value: function removeAllListeners(eventType) {
	      this._subscriber.removeAllSubscriptions(eventType);
	    } }, { key: 'removeCurrentListener', value: function removeCurrentListener() {
	      (0, _invariant2.default)(!!this._currentSubscription, 'Not in an emitting cycle; there is no current subscription');
	
	      this._subscriber.removeSubscription(this._currentSubscription);
	    } }, { key: 'listeners', value: function listeners(eventType) {
	      var subscriptions = this._subscriber.getSubscriptionsForType(eventType);
	      return subscriptions ? subscriptions.filter(_emptyFunction2.default.thatReturnsTrue).map(function (subscription) {
	        return subscription.listener;
	      }) : [];
	    } }, { key: 'emit', value: function emit(eventType) {
	      var subscriptions = this._subscriber.getSubscriptionsForType(eventType);
	      if (subscriptions) {
	        var keys = Object.keys(subscriptions);
	        for (var ii = 0; ii < keys.length; ii++) {
	          var key = keys[ii];
	          var subscription = subscriptions[key];
	
	          if (subscription) {
	            this._currentSubscription = subscription;
	
	            _ReactErrorUtils2.default.applyWithGuard(subscription.listener, subscription.context, Array.prototype.slice.call(arguments, 1), null, 'EventEmitter:' + eventType);
	          }
	        }
	        this._currentSubscription = null;
	      }
	    } }]);return EventEmitter;
	}();
	
	module.exports = EventEmitter;

/***/ },
/* 682 */
/***/ function(module, exports, __webpack_require__) {

	
	
	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _ReactEventSubscription = __webpack_require__(683);var _ReactEventSubscription2 = _interopRequireDefault(_ReactEventSubscription);function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}var EmitterSubscription = function (_EventSubscription) {
	  _inherits(EmitterSubscription, _EventSubscription);
	
	  function EmitterSubscription(subscriber, listener, context) {
	    _classCallCheck(this, EmitterSubscription);var _this = _possibleConstructorReturn(this, (EmitterSubscription.__proto__ || Object.getPrototypeOf(EmitterSubscription)).call(this, subscriber));
	    _this.listener = listener;
	    _this.context = context;return _this;
	  }return EmitterSubscription;
	}(_ReactEventSubscription2.default);
	
	module.exports = EmitterSubscription;

/***/ },
/* 683 */
/***/ function(module, exports) {

	
	
	'use strict';
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}var EventSubscription = function () {
	
	  function EventSubscription(subscriber) {
	    _classCallCheck(this, EventSubscription);
	    this.subscriber = subscriber;
	  }_createClass(EventSubscription, [{ key: 'remove', value: function remove() {
	      this.subscriber.removeSubscription(this);
	    } }]);return EventSubscription;
	}();
	
	module.exports = EventSubscription;

/***/ },
/* 684 */
/***/ function(module, exports) {

	'use strict';
	
	(function (global) {
	  var ErrorUtils = {
	    _inGuard: 0,
	    _globalHandler: null,
	    setGlobalHandler: function setGlobalHandler(fun) {
	      ErrorUtils._globalHandler = fun;
	    },
	    reportError: function reportError(error) {
	      ErrorUtils._globalHandler && ErrorUtils._globalHandler(error);
	    },
	    reportFatalError: function reportFatalError(error) {
	      ErrorUtils._globalHandler && ErrorUtils._globalHandler(error, true);
	    },
	    applyWithGuard: function applyWithGuard(fun, context, args) {
	      try {
	        ErrorUtils._inGuard++;
	        return fun.apply(context, args);
	      } catch (e) {
	        ErrorUtils.reportError(e);
	      } finally {
	        ErrorUtils._inGuard--;
	      }
	    },
	    applyWithGuardIfNeeded: function applyWithGuardIfNeeded(fun, context, args) {
	      if (ErrorUtils.inGuard()) {
	        return fun.apply(context, args);
	      } else {
	        ErrorUtils.applyWithGuard(fun, context, args);
	      }
	    },
	    inGuard: function inGuard() {
	      return ErrorUtils._inGuard;
	    },
	    guard: function guard(fun, name, context) {
	      if (typeof fun !== 'function') {
	        console.warn('A function must be passed to ErrorUtils.guard, got ', fun);
	        return null;
	      }
	      name = name || fun.name || '<generated guard>';
	      function guarded() {
	        return ErrorUtils.applyWithGuard(fun, context || this, arguments, null, name);
	      }
	
	      return guarded;
	    } };
	
	  global.ErrorUtils = ErrorUtils;
	
	  function setupErrorGuard() {
	    var onError = function onError(e) {
	      global.console.error('Error: ' + '\n stack: ' + e.stack + '\n line: ' + e.line + '\n message: ' + e.message, e);
	    };
	    global.ErrorUtils.setGlobalHandler(onError);
	  }
	
	  setupErrorGuard();
	})(window);
	
	module.exports = ErrorUtils;

/***/ },
/* 685 */
/***/ function(module, exports, __webpack_require__) {

	
	
	'use strict';
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _invariant = __webpack_require__(583);var _invariant2 = _interopRequireDefault(_invariant);function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}var EventSubscriptionVendor = function () {
	
	  function EventSubscriptionVendor() {
	    _classCallCheck(this, EventSubscriptionVendor);
	    this._subscriptionsForType = {};
	    this._currentSubscription = null;
	  }_createClass(EventSubscriptionVendor, [{ key: 'addSubscription', value: function addSubscription(eventType, subscription) {
	      (0, _invariant2.default)(subscription.subscriber === this, 'The subscriber of the subscription is incorrectly set.');
	      if (!this._subscriptionsForType[eventType]) {
	        this._subscriptionsForType[eventType] = [];
	      }
	      var key = this._subscriptionsForType[eventType].length;
	      this._subscriptionsForType[eventType].push(subscription);
	      subscription.eventType = eventType;
	      subscription.key = key;
	      return subscription;
	    } }, { key: 'removeAllSubscriptions', value: function removeAllSubscriptions(eventType) {
	      if (eventType === undefined) {
	        this._subscriptionsForType = {};
	      } else {
	        delete this._subscriptionsForType[eventType];
	      }
	    } }, { key: 'removeSubscription', value: function removeSubscription(subscription) {
	      var eventType = subscription.eventType;
	      var key = subscription.key;
	
	      var subscriptionsForType = this._subscriptionsForType[eventType];
	      if (subscriptionsForType) {
	        delete subscriptionsForType[key];
	      }
	    } }, { key: 'getSubscriptionsForType', value: function getSubscriptionsForType(eventType) {
	      return this._subscriptionsForType[eventType];
	    } }]);return EventSubscriptionVendor;
	}();
	
	module.exports = EventSubscriptionVendor;

/***/ },
/* 686 */
/***/ function(module, exports, __webpack_require__) {

	
	
	'use strict';
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _invariant = __webpack_require__(583);var _invariant2 = _interopRequireDefault(_invariant);
	var _immutable = __webpack_require__(687);function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}var NavigationTreeNode = function () {
	
	  function NavigationTreeNode(value) {
	    _classCallCheck(this, NavigationTreeNode);
	    this.__parent = null;
	    this._children = new _immutable.List();
	    this._value = value;
	  }_createClass(NavigationTreeNode, [{ key: 'getValue', value: function getValue() {
	      return this._value;
	    } }, { key: 'getParent', value: function getParent() {
	      return this.__parent;
	    } }, { key: 'getChildrenCount', value: function getChildrenCount() {
	      return this._children.size;
	    } }, { key: 'getChildAt', value: function getChildAt(index) {
	      return index > -1 && index < this._children.size ? this._children.get(index) : null;
	    } }, { key: 'appendChild', value: function appendChild(child) {
	      if (child.__parent) {
	        child.__parent.removeChild(child);
	      }
	      child.__parent = this;
	      this._children = this._children.push(child);
	    } }, { key: 'removeChild', value: function removeChild(child) {
	      var index = this._children.indexOf(child);
	
	      (0, _invariant2.default)(index > -1, 'The node to be removed is not a child of this node.');
	
	      child.__parent = null;
	
	      this._children = this._children.splice(index, 1);
	    } }, { key: 'indexOf', value: function indexOf(child) {
	      return this._children.indexOf(child);
	    } }, { key: 'forEach', value: function forEach(callback, context) {
	      this._children.forEach(callback, context);
	    } }, { key: 'map', value: function map(callback, context) {
	      return this._children.map(callback, context).toJS();
	    } }, { key: 'some', value: function some(callback, context) {
	      return this._children.some(callback, context);
	    } }]);return NavigationTreeNode;
	}();
	
	module.exports = NavigationTreeNode;

/***/ },
/* 687 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 *  Copyright (c) 2014-2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	(function (global, factory) {
	   true ? module.exports = factory() :
	  typeof define === 'function' && define.amd ? define(factory) :
	  global.Immutable = factory();
	}(this, function () { 'use strict';var SLICE$0 = Array.prototype.slice;
	
	  function createClass(ctor, superClass) {
	    if (superClass) {
	      ctor.prototype = Object.create(superClass.prototype);
	    }
	    ctor.prototype.constructor = ctor;
	  }
	
	  function Iterable(value) {
	      return isIterable(value) ? value : Seq(value);
	    }
	
	
	  createClass(KeyedIterable, Iterable);
	    function KeyedIterable(value) {
	      return isKeyed(value) ? value : KeyedSeq(value);
	    }
	
	
	  createClass(IndexedIterable, Iterable);
	    function IndexedIterable(value) {
	      return isIndexed(value) ? value : IndexedSeq(value);
	    }
	
	
	  createClass(SetIterable, Iterable);
	    function SetIterable(value) {
	      return isIterable(value) && !isAssociative(value) ? value : SetSeq(value);
	    }
	
	
	
	  function isIterable(maybeIterable) {
	    return !!(maybeIterable && maybeIterable[IS_ITERABLE_SENTINEL]);
	  }
	
	  function isKeyed(maybeKeyed) {
	    return !!(maybeKeyed && maybeKeyed[IS_KEYED_SENTINEL]);
	  }
	
	  function isIndexed(maybeIndexed) {
	    return !!(maybeIndexed && maybeIndexed[IS_INDEXED_SENTINEL]);
	  }
	
	  function isAssociative(maybeAssociative) {
	    return isKeyed(maybeAssociative) || isIndexed(maybeAssociative);
	  }
	
	  function isOrdered(maybeOrdered) {
	    return !!(maybeOrdered && maybeOrdered[IS_ORDERED_SENTINEL]);
	  }
	
	  Iterable.isIterable = isIterable;
	  Iterable.isKeyed = isKeyed;
	  Iterable.isIndexed = isIndexed;
	  Iterable.isAssociative = isAssociative;
	  Iterable.isOrdered = isOrdered;
	
	  Iterable.Keyed = KeyedIterable;
	  Iterable.Indexed = IndexedIterable;
	  Iterable.Set = SetIterable;
	
	
	  var IS_ITERABLE_SENTINEL = '@@__IMMUTABLE_ITERABLE__@@';
	  var IS_KEYED_SENTINEL = '@@__IMMUTABLE_KEYED__@@';
	  var IS_INDEXED_SENTINEL = '@@__IMMUTABLE_INDEXED__@@';
	  var IS_ORDERED_SENTINEL = '@@__IMMUTABLE_ORDERED__@@';
	
	  // Used for setting prototype methods that IE8 chokes on.
	  var DELETE = 'delete';
	
	  // Constants describing the size of trie nodes.
	  var SHIFT = 5; // Resulted in best performance after ______?
	  var SIZE = 1 << SHIFT;
	  var MASK = SIZE - 1;
	
	  // A consistent shared value representing "not set" which equals nothing other
	  // than itself, and nothing that could be provided externally.
	  var NOT_SET = {};
	
	  // Boolean references, Rough equivalent of `bool &`.
	  var CHANGE_LENGTH = { value: false };
	  var DID_ALTER = { value: false };
	
	  function MakeRef(ref) {
	    ref.value = false;
	    return ref;
	  }
	
	  function SetRef(ref) {
	    ref && (ref.value = true);
	  }
	
	  // A function which returns a value representing an "owner" for transient writes
	  // to tries. The return value will only ever equal itself, and will not equal
	  // the return of any subsequent call of this function.
	  function OwnerID() {}
	
	  // http://jsperf.com/copy-array-inline
	  function arrCopy(arr, offset) {
	    offset = offset || 0;
	    var len = Math.max(0, arr.length - offset);
	    var newArr = new Array(len);
	    for (var ii = 0; ii < len; ii++) {
	      newArr[ii] = arr[ii + offset];
	    }
	    return newArr;
	  }
	
	  function ensureSize(iter) {
	    if (iter.size === undefined) {
	      iter.size = iter.__iterate(returnTrue);
	    }
	    return iter.size;
	  }
	
	  function wrapIndex(iter, index) {
	    // This implements "is array index" which the ECMAString spec defines as:
	    //
	    //     A String property name P is an array index if and only if
	    //     ToString(ToUint32(P)) is equal to P and ToUint32(P) is not equal
	    //     to 2^32−1.
	    //
	    // http://www.ecma-international.org/ecma-262/6.0/#sec-array-exotic-objects
	    if (typeof index !== 'number') {
	      var uint32Index = index >>> 0; // N >>> 0 is shorthand for ToUint32
	      if ('' + uint32Index !== index || uint32Index === 4294967295) {
	        return NaN;
	      }
	      index = uint32Index;
	    }
	    return index < 0 ? ensureSize(iter) + index : index;
	  }
	
	  function returnTrue() {
	    return true;
	  }
	
	  function wholeSlice(begin, end, size) {
	    return (begin === 0 || (size !== undefined && begin <= -size)) &&
	      (end === undefined || (size !== undefined && end >= size));
	  }
	
	  function resolveBegin(begin, size) {
	    return resolveIndex(begin, size, 0);
	  }
	
	  function resolveEnd(end, size) {
	    return resolveIndex(end, size, size);
	  }
	
	  function resolveIndex(index, size, defaultIndex) {
	    return index === undefined ?
	      defaultIndex :
	      index < 0 ?
	        Math.max(0, size + index) :
	        size === undefined ?
	          index :
	          Math.min(size, index);
	  }
	
	  /* global Symbol */
	
	  var ITERATE_KEYS = 0;
	  var ITERATE_VALUES = 1;
	  var ITERATE_ENTRIES = 2;
	
	  var REAL_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator';
	
	  var ITERATOR_SYMBOL = REAL_ITERATOR_SYMBOL || FAUX_ITERATOR_SYMBOL;
	
	
	  function Iterator(next) {
	      this.next = next;
	    }
	
	    Iterator.prototype.toString = function() {
	      return '[Iterator]';
	    };
	
	
	  Iterator.KEYS = ITERATE_KEYS;
	  Iterator.VALUES = ITERATE_VALUES;
	  Iterator.ENTRIES = ITERATE_ENTRIES;
	
	  Iterator.prototype.inspect =
	  Iterator.prototype.toSource = function () { return this.toString(); }
	  Iterator.prototype[ITERATOR_SYMBOL] = function () {
	    return this;
	  };
	
	
	  function iteratorValue(type, k, v, iteratorResult) {
	    var value = type === 0 ? k : type === 1 ? v : [k, v];
	    iteratorResult ? (iteratorResult.value = value) : (iteratorResult = {
	      value: value, done: false
	    });
	    return iteratorResult;
	  }
	
	  function iteratorDone() {
	    return { value: undefined, done: true };
	  }
	
	  function hasIterator(maybeIterable) {
	    return !!getIteratorFn(maybeIterable);
	  }
	
	  function isIterator(maybeIterator) {
	    return maybeIterator && typeof maybeIterator.next === 'function';
	  }
	
	  function getIterator(iterable) {
	    var iteratorFn = getIteratorFn(iterable);
	    return iteratorFn && iteratorFn.call(iterable);
	  }
	
	  function getIteratorFn(iterable) {
	    var iteratorFn = iterable && (
	      (REAL_ITERATOR_SYMBOL && iterable[REAL_ITERATOR_SYMBOL]) ||
	      iterable[FAUX_ITERATOR_SYMBOL]
	    );
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }
	
	  function isArrayLike(value) {
	    return value && typeof value.length === 'number';
	  }
	
	  createClass(Seq, Iterable);
	    function Seq(value) {
	      return value === null || value === undefined ? emptySequence() :
	        isIterable(value) ? value.toSeq() : seqFromValue(value);
	    }
	
	    Seq.of = function(/*...values*/) {
	      return Seq(arguments);
	    };
	
	    Seq.prototype.toSeq = function() {
	      return this;
	    };
	
	    Seq.prototype.toString = function() {
	      return this.__toString('Seq {', '}');
	    };
	
	    Seq.prototype.cacheResult = function() {
	      if (!this._cache && this.__iterateUncached) {
	        this._cache = this.entrySeq().toArray();
	        this.size = this._cache.length;
	      }
	      return this;
	    };
	
	    // abstract __iterateUncached(fn, reverse)
	
	    Seq.prototype.__iterate = function(fn, reverse) {
	      return seqIterate(this, fn, reverse, true);
	    };
	
	    // abstract __iteratorUncached(type, reverse)
	
	    Seq.prototype.__iterator = function(type, reverse) {
	      return seqIterator(this, type, reverse, true);
	    };
	
	
	
	  createClass(KeyedSeq, Seq);
	    function KeyedSeq(value) {
	      return value === null || value === undefined ?
	        emptySequence().toKeyedSeq() :
	        isIterable(value) ?
	          (isKeyed(value) ? value.toSeq() : value.fromEntrySeq()) :
	          keyedSeqFromValue(value);
	    }
	
	    KeyedSeq.prototype.toKeyedSeq = function() {
	      return this;
	    };
	
	
	
	  createClass(IndexedSeq, Seq);
	    function IndexedSeq(value) {
	      return value === null || value === undefined ? emptySequence() :
	        !isIterable(value) ? indexedSeqFromValue(value) :
	        isKeyed(value) ? value.entrySeq() : value.toIndexedSeq();
	    }
	
	    IndexedSeq.of = function(/*...values*/) {
	      return IndexedSeq(arguments);
	    };
	
	    IndexedSeq.prototype.toIndexedSeq = function() {
	      return this;
	    };
	
	    IndexedSeq.prototype.toString = function() {
	      return this.__toString('Seq [', ']');
	    };
	
	    IndexedSeq.prototype.__iterate = function(fn, reverse) {
	      return seqIterate(this, fn, reverse, false);
	    };
	
	    IndexedSeq.prototype.__iterator = function(type, reverse) {
	      return seqIterator(this, type, reverse, false);
	    };
	
	
	
	  createClass(SetSeq, Seq);
	    function SetSeq(value) {
	      return (
	        value === null || value === undefined ? emptySequence() :
	        !isIterable(value) ? indexedSeqFromValue(value) :
	        isKeyed(value) ? value.entrySeq() : value
	      ).toSetSeq();
	    }
	
	    SetSeq.of = function(/*...values*/) {
	      return SetSeq(arguments);
	    };
	
	    SetSeq.prototype.toSetSeq = function() {
	      return this;
	    };
	
	
	
	  Seq.isSeq = isSeq;
	  Seq.Keyed = KeyedSeq;
	  Seq.Set = SetSeq;
	  Seq.Indexed = IndexedSeq;
	
	  var IS_SEQ_SENTINEL = '@@__IMMUTABLE_SEQ__@@';
	
	  Seq.prototype[IS_SEQ_SENTINEL] = true;
	
	
	
	  createClass(ArraySeq, IndexedSeq);
	    function ArraySeq(array) {
	      this._array = array;
	      this.size = array.length;
	    }
	
	    ArraySeq.prototype.get = function(index, notSetValue) {
	      return this.has(index) ? this._array[wrapIndex(this, index)] : notSetValue;
	    };
	
	    ArraySeq.prototype.__iterate = function(fn, reverse) {
	      var array = this._array;
	      var maxIndex = array.length - 1;
	      for (var ii = 0; ii <= maxIndex; ii++) {
	        if (fn(array[reverse ? maxIndex - ii : ii], ii, this) === false) {
	          return ii + 1;
	        }
	      }
	      return ii;
	    };
	
	    ArraySeq.prototype.__iterator = function(type, reverse) {
	      var array = this._array;
	      var maxIndex = array.length - 1;
	      var ii = 0;
	      return new Iterator(function() 
	        {return ii > maxIndex ?
	          iteratorDone() :
	          iteratorValue(type, ii, array[reverse ? maxIndex - ii++ : ii++])}
	      );
	    };
	
	
	
	  createClass(ObjectSeq, KeyedSeq);
	    function ObjectSeq(object) {
	      var keys = Object.keys(object);
	      this._object = object;
	      this._keys = keys;
	      this.size = keys.length;
	    }
	
	    ObjectSeq.prototype.get = function(key, notSetValue) {
	      if (notSetValue !== undefined && !this.has(key)) {
	        return notSetValue;
	      }
	      return this._object[key];
	    };
	
	    ObjectSeq.prototype.has = function(key) {
	      return this._object.hasOwnProperty(key);
	    };
	
	    ObjectSeq.prototype.__iterate = function(fn, reverse) {
	      var object = this._object;
	      var keys = this._keys;
	      var maxIndex = keys.length - 1;
	      for (var ii = 0; ii <= maxIndex; ii++) {
	        var key = keys[reverse ? maxIndex - ii : ii];
	        if (fn(object[key], key, this) === false) {
	          return ii + 1;
	        }
	      }
	      return ii;
	    };
	
	    ObjectSeq.prototype.__iterator = function(type, reverse) {
	      var object = this._object;
	      var keys = this._keys;
	      var maxIndex = keys.length - 1;
	      var ii = 0;
	      return new Iterator(function()  {
	        var key = keys[reverse ? maxIndex - ii : ii];
	        return ii++ > maxIndex ?
	          iteratorDone() :
	          iteratorValue(type, key, object[key]);
	      });
	    };
	
	  ObjectSeq.prototype[IS_ORDERED_SENTINEL] = true;
	
	
	  createClass(IterableSeq, IndexedSeq);
	    function IterableSeq(iterable) {
	      this._iterable = iterable;
	      this.size = iterable.length || iterable.size;
	    }
	
	    IterableSeq.prototype.__iterateUncached = function(fn, reverse) {
	      if (reverse) {
	        return this.cacheResult().__iterate(fn, reverse);
	      }
	      var iterable = this._iterable;
	      var iterator = getIterator(iterable);
	      var iterations = 0;
	      if (isIterator(iterator)) {
	        var step;
	        while (!(step = iterator.next()).done) {
	          if (fn(step.value, iterations++, this) === false) {
	            break;
	          }
	        }
	      }
	      return iterations;
	    };
	
	    IterableSeq.prototype.__iteratorUncached = function(type, reverse) {
	      if (reverse) {
	        return this.cacheResult().__iterator(type, reverse);
	      }
	      var iterable = this._iterable;
	      var iterator = getIterator(iterable);
	      if (!isIterator(iterator)) {
	        return new Iterator(iteratorDone);
	      }
	      var iterations = 0;
	      return new Iterator(function()  {
	        var step = iterator.next();
	        return step.done ? step : iteratorValue(type, iterations++, step.value);
	      });
	    };
	
	
	
	  createClass(IteratorSeq, IndexedSeq);
	    function IteratorSeq(iterator) {
	      this._iterator = iterator;
	      this._iteratorCache = [];
	    }
	
	    IteratorSeq.prototype.__iterateUncached = function(fn, reverse) {
	      if (reverse) {
	        return this.cacheResult().__iterate(fn, reverse);
	      }
	      var iterator = this._iterator;
	      var cache = this._iteratorCache;
	      var iterations = 0;
	      while (iterations < cache.length) {
	        if (fn(cache[iterations], iterations++, this) === false) {
	          return iterations;
	        }
	      }
	      var step;
	      while (!(step = iterator.next()).done) {
	        var val = step.value;
	        cache[iterations] = val;
	        if (fn(val, iterations++, this) === false) {
	          break;
	        }
	      }
	      return iterations;
	    };
	
	    IteratorSeq.prototype.__iteratorUncached = function(type, reverse) {
	      if (reverse) {
	        return this.cacheResult().__iterator(type, reverse);
	      }
	      var iterator = this._iterator;
	      var cache = this._iteratorCache;
	      var iterations = 0;
	      return new Iterator(function()  {
	        if (iterations >= cache.length) {
	          var step = iterator.next();
	          if (step.done) {
	            return step;
	          }
	          cache[iterations] = step.value;
	        }
	        return iteratorValue(type, iterations, cache[iterations++]);
	      });
	    };
	
	
	
	
	  // # pragma Helper functions
	
	  function isSeq(maybeSeq) {
	    return !!(maybeSeq && maybeSeq[IS_SEQ_SENTINEL]);
	  }
	
	  var EMPTY_SEQ;
	
	  function emptySequence() {
	    return EMPTY_SEQ || (EMPTY_SEQ = new ArraySeq([]));
	  }
	
	  function keyedSeqFromValue(value) {
	    var seq =
	      Array.isArray(value) ? new ArraySeq(value).fromEntrySeq() :
	      isIterator(value) ? new IteratorSeq(value).fromEntrySeq() :
	      hasIterator(value) ? new IterableSeq(value).fromEntrySeq() :
	      typeof value === 'object' ? new ObjectSeq(value) :
	      undefined;
	    if (!seq) {
	      throw new TypeError(
	        'Expected Array or iterable object of [k, v] entries, '+
	        'or keyed object: ' + value
	      );
	    }
	    return seq;
	  }
	
	  function indexedSeqFromValue(value) {
	    var seq = maybeIndexedSeqFromValue(value);
	    if (!seq) {
	      throw new TypeError(
	        'Expected Array or iterable object of values: ' + value
	      );
	    }
	    return seq;
	  }
	
	  function seqFromValue(value) {
	    var seq = maybeIndexedSeqFromValue(value) ||
	      (typeof value === 'object' && new ObjectSeq(value));
	    if (!seq) {
	      throw new TypeError(
	        'Expected Array or iterable object of values, or keyed object: ' + value
	      );
	    }
	    return seq;
	  }
	
	  function maybeIndexedSeqFromValue(value) {
	    return (
	      isArrayLike(value) ? new ArraySeq(value) :
	      isIterator(value) ? new IteratorSeq(value) :
	      hasIterator(value) ? new IterableSeq(value) :
	      undefined
	    );
	  }
	
	  function seqIterate(seq, fn, reverse, useKeys) {
	    var cache = seq._cache;
	    if (cache) {
	      var maxIndex = cache.length - 1;
	      for (var ii = 0; ii <= maxIndex; ii++) {
	        var entry = cache[reverse ? maxIndex - ii : ii];
	        if (fn(entry[1], useKeys ? entry[0] : ii, seq) === false) {
	          return ii + 1;
	        }
	      }
	      return ii;
	    }
	    return seq.__iterateUncached(fn, reverse);
	  }
	
	  function seqIterator(seq, type, reverse, useKeys) {
	    var cache = seq._cache;
	    if (cache) {
	      var maxIndex = cache.length - 1;
	      var ii = 0;
	      return new Iterator(function()  {
	        var entry = cache[reverse ? maxIndex - ii : ii];
	        return ii++ > maxIndex ?
	          iteratorDone() :
	          iteratorValue(type, useKeys ? entry[0] : ii - 1, entry[1]);
	      });
	    }
	    return seq.__iteratorUncached(type, reverse);
	  }
	
	  function fromJS(json, converter) {
	    return converter ?
	      fromJSWith(converter, json, '', {'': json}) :
	      fromJSDefault(json);
	  }
	
	  function fromJSWith(converter, json, key, parentJSON) {
	    if (Array.isArray(json)) {
	      return converter.call(parentJSON, key, IndexedSeq(json).map(function(v, k)  {return fromJSWith(converter, v, k, json)}));
	    }
	    if (isPlainObj(json)) {
	      return converter.call(parentJSON, key, KeyedSeq(json).map(function(v, k)  {return fromJSWith(converter, v, k, json)}));
	    }
	    return json;
	  }
	
	  function fromJSDefault(json) {
	    if (Array.isArray(json)) {
	      return IndexedSeq(json).map(fromJSDefault).toList();
	    }
	    if (isPlainObj(json)) {
	      return KeyedSeq(json).map(fromJSDefault).toMap();
	    }
	    return json;
	  }
	
	  function isPlainObj(value) {
	    return value && (value.constructor === Object || value.constructor === undefined);
	  }
	
	  /**
	   * An extension of the "same-value" algorithm as [described for use by ES6 Map
	   * and Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#Key_equality)
	   *
	   * NaN is considered the same as NaN, however -0 and 0 are considered the same
	   * value, which is different from the algorithm described by
	   * [`Object.is`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is).
	   *
	   * This is extended further to allow Objects to describe the values they
	   * represent, by way of `valueOf` or `equals` (and `hashCode`).
	   *
	   * Note: because of this extension, the key equality of Immutable.Map and the
	   * value equality of Immutable.Set will differ from ES6 Map and Set.
	   *
	   * ### Defining custom values
	   *
	   * The easiest way to describe the value an object represents is by implementing
	   * `valueOf`. For example, `Date` represents a value by returning a unix
	   * timestamp for `valueOf`:
	   *
	   *     var date1 = new Date(1234567890000); // Fri Feb 13 2009 ...
	   *     var date2 = new Date(1234567890000);
	   *     date1.valueOf(); // 1234567890000
	   *     assert( date1 !== date2 );
	   *     assert( Immutable.is( date1, date2 ) );
	   *
	   * Note: overriding `valueOf` may have other implications if you use this object
	   * where JavaScript expects a primitive, such as implicit string coercion.
	   *
	   * For more complex types, especially collections, implementing `valueOf` may
	   * not be performant. An alternative is to implement `equals` and `hashCode`.
	   *
	   * `equals` takes another object, presumably of similar type, and returns true
	   * if the it is equal. Equality is symmetrical, so the same result should be
	   * returned if this and the argument are flipped.
	   *
	   *     assert( a.equals(b) === b.equals(a) );
	   *
	   * `hashCode` returns a 32bit integer number representing the object which will
	   * be used to determine how to store the value object in a Map or Set. You must
	   * provide both or neither methods, one must not exist without the other.
	   *
	   * Also, an important relationship between these methods must be upheld: if two
	   * values are equal, they *must* return the same hashCode. If the values are not
	   * equal, they might have the same hashCode; this is called a hash collision,
	   * and while undesirable for performance reasons, it is acceptable.
	   *
	   *     if (a.equals(b)) {
	   *       assert( a.hashCode() === b.hashCode() );
	   *     }
	   *
	   * All Immutable collections implement `equals` and `hashCode`.
	   *
	   */
	  function is(valueA, valueB) {
	    if (valueA === valueB || (valueA !== valueA && valueB !== valueB)) {
	      return true;
	    }
	    if (!valueA || !valueB) {
	      return false;
	    }
	    if (typeof valueA.valueOf === 'function' &&
	        typeof valueB.valueOf === 'function') {
	      valueA = valueA.valueOf();
	      valueB = valueB.valueOf();
	      if (valueA === valueB || (valueA !== valueA && valueB !== valueB)) {
	        return true;
	      }
	      if (!valueA || !valueB) {
	        return false;
	      }
	    }
	    if (typeof valueA.equals === 'function' &&
	        typeof valueB.equals === 'function' &&
	        valueA.equals(valueB)) {
	      return true;
	    }
	    return false;
	  }
	
	  function deepEqual(a, b) {
	    if (a === b) {
	      return true;
	    }
	
	    if (
	      !isIterable(b) ||
	      a.size !== undefined && b.size !== undefined && a.size !== b.size ||
	      a.__hash !== undefined && b.__hash !== undefined && a.__hash !== b.__hash ||
	      isKeyed(a) !== isKeyed(b) ||
	      isIndexed(a) !== isIndexed(b) ||
	      isOrdered(a) !== isOrdered(b)
	    ) {
	      return false;
	    }
	
	    if (a.size === 0 && b.size === 0) {
	      return true;
	    }
	
	    var notAssociative = !isAssociative(a);
	
	    if (isOrdered(a)) {
	      var entries = a.entries();
	      return b.every(function(v, k)  {
	        var entry = entries.next().value;
	        return entry && is(entry[1], v) && (notAssociative || is(entry[0], k));
	      }) && entries.next().done;
	    }
	
	    var flipped = false;
	
	    if (a.size === undefined) {
	      if (b.size === undefined) {
	        if (typeof a.cacheResult === 'function') {
	          a.cacheResult();
	        }
	      } else {
	        flipped = true;
	        var _ = a;
	        a = b;
	        b = _;
	      }
	    }
	
	    var allEqual = true;
	    var bSize = b.__iterate(function(v, k)  {
	      if (notAssociative ? !a.has(v) :
	          flipped ? !is(v, a.get(k, NOT_SET)) : !is(a.get(k, NOT_SET), v)) {
	        allEqual = false;
	        return false;
	      }
	    });
	
	    return allEqual && a.size === bSize;
	  }
	
	  createClass(Repeat, IndexedSeq);
	
	    function Repeat(value, times) {
	      if (!(this instanceof Repeat)) {
	        return new Repeat(value, times);
	      }
	      this._value = value;
	      this.size = times === undefined ? Infinity : Math.max(0, times);
	      if (this.size === 0) {
	        if (EMPTY_REPEAT) {
	          return EMPTY_REPEAT;
	        }
	        EMPTY_REPEAT = this;
	      }
	    }
	
	    Repeat.prototype.toString = function() {
	      if (this.size === 0) {
	        return 'Repeat []';
	      }
	      return 'Repeat [ ' + this._value + ' ' + this.size + ' times ]';
	    };
	
	    Repeat.prototype.get = function(index, notSetValue) {
	      return this.has(index) ? this._value : notSetValue;
	    };
	
	    Repeat.prototype.includes = function(searchValue) {
	      return is(this._value, searchValue);
	    };
	
	    Repeat.prototype.slice = function(begin, end) {
	      var size = this.size;
	      return wholeSlice(begin, end, size) ? this :
	        new Repeat(this._value, resolveEnd(end, size) - resolveBegin(begin, size));
	    };
	
	    Repeat.prototype.reverse = function() {
	      return this;
	    };
	
	    Repeat.prototype.indexOf = function(searchValue) {
	      if (is(this._value, searchValue)) {
	        return 0;
	      }
	      return -1;
	    };
	
	    Repeat.prototype.lastIndexOf = function(searchValue) {
	      if (is(this._value, searchValue)) {
	        return this.size;
	      }
	      return -1;
	    };
	
	    Repeat.prototype.__iterate = function(fn, reverse) {
	      for (var ii = 0; ii < this.size; ii++) {
	        if (fn(this._value, ii, this) === false) {
	          return ii + 1;
	        }
	      }
	      return ii;
	    };
	
	    Repeat.prototype.__iterator = function(type, reverse) {var this$0 = this;
	      var ii = 0;
	      return new Iterator(function() 
	        {return ii < this$0.size ? iteratorValue(type, ii++, this$0._value) : iteratorDone()}
	      );
	    };
	
	    Repeat.prototype.equals = function(other) {
	      return other instanceof Repeat ?
	        is(this._value, other._value) :
	        deepEqual(other);
	    };
	
	
	  var EMPTY_REPEAT;
	
	  function invariant(condition, error) {
	    if (!condition) throw new Error(error);
	  }
	
	  createClass(Range, IndexedSeq);
	
	    function Range(start, end, step) {
	      if (!(this instanceof Range)) {
	        return new Range(start, end, step);
	      }
	      invariant(step !== 0, 'Cannot step a Range by 0');
	      start = start || 0;
	      if (end === undefined) {
	        end = Infinity;
	      }
	      step = step === undefined ? 1 : Math.abs(step);
	      if (end < start) {
	        step = -step;
	      }
	      this._start = start;
	      this._end = end;
	      this._step = step;
	      this.size = Math.max(0, Math.ceil((end - start) / step - 1) + 1);
	      if (this.size === 0) {
	        if (EMPTY_RANGE) {
	          return EMPTY_RANGE;
	        }
	        EMPTY_RANGE = this;
	      }
	    }
	
	    Range.prototype.toString = function() {
	      if (this.size === 0) {
	        return 'Range []';
	      }
	      return 'Range [ ' +
	        this._start + '...' + this._end +
	        (this._step > 1 ? ' by ' + this._step : '') +
	      ' ]';
	    };
	
	    Range.prototype.get = function(index, notSetValue) {
	      return this.has(index) ?
	        this._start + wrapIndex(this, index) * this._step :
	        notSetValue;
	    };
	
	    Range.prototype.includes = function(searchValue) {
	      var possibleIndex = (searchValue - this._start) / this._step;
	      return possibleIndex >= 0 &&
	        possibleIndex < this.size &&
	        possibleIndex === Math.floor(possibleIndex);
	    };
	
	    Range.prototype.slice = function(begin, end) {
	      if (wholeSlice(begin, end, this.size)) {
	        return this;
	      }
	      begin = resolveBegin(begin, this.size);
	      end = resolveEnd(end, this.size);
	      if (end <= begin) {
	        return new Range(0, 0);
	      }
	      return new Range(this.get(begin, this._end), this.get(end, this._end), this._step);
	    };
	
	    Range.prototype.indexOf = function(searchValue) {
	      var offsetValue = searchValue - this._start;
	      if (offsetValue % this._step === 0) {
	        var index = offsetValue / this._step;
	        if (index >= 0 && index < this.size) {
	          return index
	        }
	      }
	      return -1;
	    };
	
	    Range.prototype.lastIndexOf = function(searchValue) {
	      return this.indexOf(searchValue);
	    };
	
	    Range.prototype.__iterate = function(fn, reverse) {
	      var maxIndex = this.size - 1;
	      var step = this._step;
	      var value = reverse ? this._start + maxIndex * step : this._start;
	      for (var ii = 0; ii <= maxIndex; ii++) {
	        if (fn(value, ii, this) === false) {
	          return ii + 1;
	        }
	        value += reverse ? -step : step;
	      }
	      return ii;
	    };
	
	    Range.prototype.__iterator = function(type, reverse) {
	      var maxIndex = this.size - 1;
	      var step = this._step;
	      var value = reverse ? this._start + maxIndex * step : this._start;
	      var ii = 0;
	      return new Iterator(function()  {
	        var v = value;
	        value += reverse ? -step : step;
	        return ii > maxIndex ? iteratorDone() : iteratorValue(type, ii++, v);
	      });
	    };
	
	    Range.prototype.equals = function(other) {
	      return other instanceof Range ?
	        this._start === other._start &&
	        this._end === other._end &&
	        this._step === other._step :
	        deepEqual(this, other);
	    };
	
	
	  var EMPTY_RANGE;
	
	  createClass(Collection, Iterable);
	    function Collection() {
	      throw TypeError('Abstract');
	    }
	
	
	  createClass(KeyedCollection, Collection);function KeyedCollection() {}
	
	  createClass(IndexedCollection, Collection);function IndexedCollection() {}
	
	  createClass(SetCollection, Collection);function SetCollection() {}
	
	
	  Collection.Keyed = KeyedCollection;
	  Collection.Indexed = IndexedCollection;
	  Collection.Set = SetCollection;
	
	  var imul =
	    typeof Math.imul === 'function' && Math.imul(0xffffffff, 2) === -2 ?
	    Math.imul :
	    function imul(a, b) {
	      a = a | 0; // int
	      b = b | 0; // int
	      var c = a & 0xffff;
	      var d = b & 0xffff;
	      // Shift by 0 fixes the sign on the high part.
	      return (c * d) + ((((a >>> 16) * d + c * (b >>> 16)) << 16) >>> 0) | 0; // int
	    };
	
	  // v8 has an optimization for storing 31-bit signed numbers.
	  // Values which have either 00 or 11 as the high order bits qualify.
	  // This function drops the highest order bit in a signed number, maintaining
	  // the sign bit.
	  function smi(i32) {
	    return ((i32 >>> 1) & 0x40000000) | (i32 & 0xBFFFFFFF);
	  }
	
	  function hash(o) {
	    if (o === false || o === null || o === undefined) {
	      return 0;
	    }
	    if (typeof o.valueOf === 'function') {
	      o = o.valueOf();
	      if (o === false || o === null || o === undefined) {
	        return 0;
	      }
	    }
	    if (o === true) {
	      return 1;
	    }
	    var type = typeof o;
	    if (type === 'number') {
	      var h = o | 0;
	      if (h !== o) {
	        h ^= o * 0xFFFFFFFF;
	      }
	      while (o > 0xFFFFFFFF) {
	        o /= 0xFFFFFFFF;
	        h ^= o;
	      }
	      return smi(h);
	    }
	    if (type === 'string') {
	      return o.length > STRING_HASH_CACHE_MIN_STRLEN ? cachedHashString(o) : hashString(o);
	    }
	    if (typeof o.hashCode === 'function') {
	      return o.hashCode();
	    }
	    if (type === 'object') {
	      return hashJSObj(o);
	    }
	    if (typeof o.toString === 'function') {
	      return hashString(o.toString());
	    }
	    throw new Error('Value type ' + type + ' cannot be hashed.');
	  }
	
	  function cachedHashString(string) {
	    var hash = stringHashCache[string];
	    if (hash === undefined) {
	      hash = hashString(string);
	      if (STRING_HASH_CACHE_SIZE === STRING_HASH_CACHE_MAX_SIZE) {
	        STRING_HASH_CACHE_SIZE = 0;
	        stringHashCache = {};
	      }
	      STRING_HASH_CACHE_SIZE++;
	      stringHashCache[string] = hash;
	    }
	    return hash;
	  }
	
	  // http://jsperf.com/hashing-strings
	  function hashString(string) {
	    // This is the hash from JVM
	    // The hash code for a string is computed as
	    // s[0] * 31 ^ (n - 1) + s[1] * 31 ^ (n - 2) + ... + s[n - 1],
	    // where s[i] is the ith character of the string and n is the length of
	    // the string. We "mod" the result to make it between 0 (inclusive) and 2^31
	    // (exclusive) by dropping high bits.
	    var hash = 0;
	    for (var ii = 0; ii < string.length; ii++) {
	      hash = 31 * hash + string.charCodeAt(ii) | 0;
	    }
	    return smi(hash);
	  }
	
	  function hashJSObj(obj) {
	    var hash;
	    if (usingWeakMap) {
	      hash = weakMap.get(obj);
	      if (hash !== undefined) {
	        return hash;
	      }
	    }
	
	    hash = obj[UID_HASH_KEY];
	    if (hash !== undefined) {
	      return hash;
	    }
	
	    if (!canDefineProperty) {
	      hash = obj.propertyIsEnumerable && obj.propertyIsEnumerable[UID_HASH_KEY];
	      if (hash !== undefined) {
	        return hash;
	      }
	
	      hash = getIENodeHash(obj);
	      if (hash !== undefined) {
	        return hash;
	      }
	    }
	
	    hash = ++objHashUID;
	    if (objHashUID & 0x40000000) {
	      objHashUID = 0;
	    }
	
	    if (usingWeakMap) {
	      weakMap.set(obj, hash);
	    } else if (isExtensible !== undefined && isExtensible(obj) === false) {
	      throw new Error('Non-extensible objects are not allowed as keys.');
	    } else if (canDefineProperty) {
	      Object.defineProperty(obj, UID_HASH_KEY, {
	        'enumerable': false,
	        'configurable': false,
	        'writable': false,
	        'value': hash
	      });
	    } else if (obj.propertyIsEnumerable !== undefined &&
	               obj.propertyIsEnumerable === obj.constructor.prototype.propertyIsEnumerable) {
	      // Since we can't define a non-enumerable property on the object
	      // we'll hijack one of the less-used non-enumerable properties to
	      // save our hash on it. Since this is a function it will not show up in
	      // `JSON.stringify` which is what we want.
	      obj.propertyIsEnumerable = function() {
	        return this.constructor.prototype.propertyIsEnumerable.apply(this, arguments);
	      };
	      obj.propertyIsEnumerable[UID_HASH_KEY] = hash;
	    } else if (obj.nodeType !== undefined) {
	      // At this point we couldn't get the IE `uniqueID` to use as a hash
	      // and we couldn't use a non-enumerable property to exploit the
	      // dontEnum bug so we simply add the `UID_HASH_KEY` on the node
	      // itself.
	      obj[UID_HASH_KEY] = hash;
	    } else {
	      throw new Error('Unable to set a non-enumerable property on object.');
	    }
	
	    return hash;
	  }
	
	  // Get references to ES5 object methods.
	  var isExtensible = Object.isExtensible;
	
	  // True if Object.defineProperty works as expected. IE8 fails this test.
	  var canDefineProperty = (function() {
	    try {
	      Object.defineProperty({}, '@', {});
	      return true;
	    } catch (e) {
	      return false;
	    }
	  }());
	
	  // IE has a `uniqueID` property on DOM nodes. We can construct the hash from it
	  // and avoid memory leaks from the IE cloneNode bug.
	  function getIENodeHash(node) {
	    if (node && node.nodeType > 0) {
	      switch (node.nodeType) {
	        case 1: // Element
	          return node.uniqueID;
	        case 9: // Document
	          return node.documentElement && node.documentElement.uniqueID;
	      }
	    }
	  }
	
	  // If possible, use a WeakMap.
	  var usingWeakMap = typeof WeakMap === 'function';
	  var weakMap;
	  if (usingWeakMap) {
	    weakMap = new WeakMap();
	  }
	
	  var objHashUID = 0;
	
	  var UID_HASH_KEY = '__immutablehash__';
	  if (typeof Symbol === 'function') {
	    UID_HASH_KEY = Symbol(UID_HASH_KEY);
	  }
	
	  var STRING_HASH_CACHE_MIN_STRLEN = 16;
	  var STRING_HASH_CACHE_MAX_SIZE = 255;
	  var STRING_HASH_CACHE_SIZE = 0;
	  var stringHashCache = {};
	
	  function assertNotInfinite(size) {
	    invariant(
	      size !== Infinity,
	      'Cannot perform this action with an infinite size.'
	    );
	  }
	
	  createClass(Map, KeyedCollection);
	
	    // @pragma Construction
	
	    function Map(value) {
	      return value === null || value === undefined ? emptyMap() :
	        isMap(value) && !isOrdered(value) ? value :
	        emptyMap().withMutations(function(map ) {
	          var iter = KeyedIterable(value);
	          assertNotInfinite(iter.size);
	          iter.forEach(function(v, k)  {return map.set(k, v)});
	        });
	    }
	
	    Map.prototype.toString = function() {
	      return this.__toString('Map {', '}');
	    };
	
	    // @pragma Access
	
	    Map.prototype.get = function(k, notSetValue) {
	      return this._root ?
	        this._root.get(0, undefined, k, notSetValue) :
	        notSetValue;
	    };
	
	    // @pragma Modification
	
	    Map.prototype.set = function(k, v) {
	      return updateMap(this, k, v);
	    };
	
	    Map.prototype.setIn = function(keyPath, v) {
	      return this.updateIn(keyPath, NOT_SET, function()  {return v});
	    };
	
	    Map.prototype.remove = function(k) {
	      return updateMap(this, k, NOT_SET);
	    };
	
	    Map.prototype.deleteIn = function(keyPath) {
	      return this.updateIn(keyPath, function()  {return NOT_SET});
	    };
	
	    Map.prototype.update = function(k, notSetValue, updater) {
	      return arguments.length === 1 ?
	        k(this) :
	        this.updateIn([k], notSetValue, updater);
	    };
	
	    Map.prototype.updateIn = function(keyPath, notSetValue, updater) {
	      if (!updater) {
	        updater = notSetValue;
	        notSetValue = undefined;
	      }
	      var updatedValue = updateInDeepMap(
	        this,
	        forceIterator(keyPath),
	        notSetValue,
	        updater
	      );
	      return updatedValue === NOT_SET ? undefined : updatedValue;
	    };
	
	    Map.prototype.clear = function() {
	      if (this.size === 0) {
	        return this;
	      }
	      if (this.__ownerID) {
	        this.size = 0;
	        this._root = null;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return emptyMap();
	    };
	
	    // @pragma Composition
	
	    Map.prototype.merge = function(/*...iters*/) {
	      return mergeIntoMapWith(this, undefined, arguments);
	    };
	
	    Map.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
	      return mergeIntoMapWith(this, merger, iters);
	    };
	
	    Map.prototype.mergeIn = function(keyPath) {var iters = SLICE$0.call(arguments, 1);
	      return this.updateIn(
	        keyPath,
	        emptyMap(),
	        function(m ) {return typeof m.merge === 'function' ?
	          m.merge.apply(m, iters) :
	          iters[iters.length - 1]}
	      );
	    };
	
	    Map.prototype.mergeDeep = function(/*...iters*/) {
	      return mergeIntoMapWith(this, deepMerger, arguments);
	    };
	
	    Map.prototype.mergeDeepWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
	      return mergeIntoMapWith(this, deepMergerWith(merger), iters);
	    };
	
	    Map.prototype.mergeDeepIn = function(keyPath) {var iters = SLICE$0.call(arguments, 1);
	      return this.updateIn(
	        keyPath,
	        emptyMap(),
	        function(m ) {return typeof m.mergeDeep === 'function' ?
	          m.mergeDeep.apply(m, iters) :
	          iters[iters.length - 1]}
	      );
	    };
	
	    Map.prototype.sort = function(comparator) {
	      // Late binding
	      return OrderedMap(sortFactory(this, comparator));
	    };
	
	    Map.prototype.sortBy = function(mapper, comparator) {
	      // Late binding
	      return OrderedMap(sortFactory(this, comparator, mapper));
	    };
	
	    // @pragma Mutability
	
	    Map.prototype.withMutations = function(fn) {
	      var mutable = this.asMutable();
	      fn(mutable);
	      return mutable.wasAltered() ? mutable.__ensureOwner(this.__ownerID) : this;
	    };
	
	    Map.prototype.asMutable = function() {
	      return this.__ownerID ? this : this.__ensureOwner(new OwnerID());
	    };
	
	    Map.prototype.asImmutable = function() {
	      return this.__ensureOwner();
	    };
	
	    Map.prototype.wasAltered = function() {
	      return this.__altered;
	    };
	
	    Map.prototype.__iterator = function(type, reverse) {
	      return new MapIterator(this, type, reverse);
	    };
	
	    Map.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      var iterations = 0;
	      this._root && this._root.iterate(function(entry ) {
	        iterations++;
	        return fn(entry[1], entry[0], this$0);
	      }, reverse);
	      return iterations;
	    };
	
	    Map.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        this.__altered = false;
	        return this;
	      }
	      return makeMap(this.size, this._root, ownerID, this.__hash);
	    };
	
	
	  function isMap(maybeMap) {
	    return !!(maybeMap && maybeMap[IS_MAP_SENTINEL]);
	  }
	
	  Map.isMap = isMap;
	
	  var IS_MAP_SENTINEL = '@@__IMMUTABLE_MAP__@@';
	
	  var MapPrototype = Map.prototype;
	  MapPrototype[IS_MAP_SENTINEL] = true;
	  MapPrototype[DELETE] = MapPrototype.remove;
	  MapPrototype.removeIn = MapPrototype.deleteIn;
	
	
	  // #pragma Trie Nodes
	
	
	
	    function ArrayMapNode(ownerID, entries) {
	      this.ownerID = ownerID;
	      this.entries = entries;
	    }
	
	    ArrayMapNode.prototype.get = function(shift, keyHash, key, notSetValue) {
	      var entries = this.entries;
	      for (var ii = 0, len = entries.length; ii < len; ii++) {
	        if (is(key, entries[ii][0])) {
	          return entries[ii][1];
	        }
	      }
	      return notSetValue;
	    };
	
	    ArrayMapNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	      var removed = value === NOT_SET;
	
	      var entries = this.entries;
	      var idx = 0;
	      for (var len = entries.length; idx < len; idx++) {
	        if (is(key, entries[idx][0])) {
	          break;
	        }
	      }
	      var exists = idx < len;
	
	      if (exists ? entries[idx][1] === value : removed) {
	        return this;
	      }
	
	      SetRef(didAlter);
	      (removed || !exists) && SetRef(didChangeSize);
	
	      if (removed && entries.length === 1) {
	        return; // undefined
	      }
	
	      if (!exists && !removed && entries.length >= MAX_ARRAY_MAP_SIZE) {
	        return createNodes(ownerID, entries, key, value);
	      }
	
	      var isEditable = ownerID && ownerID === this.ownerID;
	      var newEntries = isEditable ? entries : arrCopy(entries);
	
	      if (exists) {
	        if (removed) {
	          idx === len - 1 ? newEntries.pop() : (newEntries[idx] = newEntries.pop());
	        } else {
	          newEntries[idx] = [key, value];
	        }
	      } else {
	        newEntries.push([key, value]);
	      }
	
	      if (isEditable) {
	        this.entries = newEntries;
	        return this;
	      }
	
	      return new ArrayMapNode(ownerID, newEntries);
	    };
	
	
	
	
	    function BitmapIndexedNode(ownerID, bitmap, nodes) {
	      this.ownerID = ownerID;
	      this.bitmap = bitmap;
	      this.nodes = nodes;
	    }
	
	    BitmapIndexedNode.prototype.get = function(shift, keyHash, key, notSetValue) {
	      if (keyHash === undefined) {
	        keyHash = hash(key);
	      }
	      var bit = (1 << ((shift === 0 ? keyHash : keyHash >>> shift) & MASK));
	      var bitmap = this.bitmap;
	      return (bitmap & bit) === 0 ? notSetValue :
	        this.nodes[popCount(bitmap & (bit - 1))].get(shift + SHIFT, keyHash, key, notSetValue);
	    };
	
	    BitmapIndexedNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	      if (keyHash === undefined) {
	        keyHash = hash(key);
	      }
	      var keyHashFrag = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
	      var bit = 1 << keyHashFrag;
	      var bitmap = this.bitmap;
	      var exists = (bitmap & bit) !== 0;
	
	      if (!exists && value === NOT_SET) {
	        return this;
	      }
	
	      var idx = popCount(bitmap & (bit - 1));
	      var nodes = this.nodes;
	      var node = exists ? nodes[idx] : undefined;
	      var newNode = updateNode(node, ownerID, shift + SHIFT, keyHash, key, value, didChangeSize, didAlter);
	
	      if (newNode === node) {
	        return this;
	      }
	
	      if (!exists && newNode && nodes.length >= MAX_BITMAP_INDEXED_SIZE) {
	        return expandNodes(ownerID, nodes, bitmap, keyHashFrag, newNode);
	      }
	
	      if (exists && !newNode && nodes.length === 2 && isLeafNode(nodes[idx ^ 1])) {
	        return nodes[idx ^ 1];
	      }
	
	      if (exists && newNode && nodes.length === 1 && isLeafNode(newNode)) {
	        return newNode;
	      }
	
	      var isEditable = ownerID && ownerID === this.ownerID;
	      var newBitmap = exists ? newNode ? bitmap : bitmap ^ bit : bitmap | bit;
	      var newNodes = exists ? newNode ?
	        setIn(nodes, idx, newNode, isEditable) :
	        spliceOut(nodes, idx, isEditable) :
	        spliceIn(nodes, idx, newNode, isEditable);
	
	      if (isEditable) {
	        this.bitmap = newBitmap;
	        this.nodes = newNodes;
	        return this;
	      }
	
	      return new BitmapIndexedNode(ownerID, newBitmap, newNodes);
	    };
	
	
	
	
	    function HashArrayMapNode(ownerID, count, nodes) {
	      this.ownerID = ownerID;
	      this.count = count;
	      this.nodes = nodes;
	    }
	
	    HashArrayMapNode.prototype.get = function(shift, keyHash, key, notSetValue) {
	      if (keyHash === undefined) {
	        keyHash = hash(key);
	      }
	      var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
	      var node = this.nodes[idx];
	      return node ? node.get(shift + SHIFT, keyHash, key, notSetValue) : notSetValue;
	    };
	
	    HashArrayMapNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	      if (keyHash === undefined) {
	        keyHash = hash(key);
	      }
	      var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
	      var removed = value === NOT_SET;
	      var nodes = this.nodes;
	      var node = nodes[idx];
	
	      if (removed && !node) {
	        return this;
	      }
	
	      var newNode = updateNode(node, ownerID, shift + SHIFT, keyHash, key, value, didChangeSize, didAlter);
	      if (newNode === node) {
	        return this;
	      }
	
	      var newCount = this.count;
	      if (!node) {
	        newCount++;
	      } else if (!newNode) {
	        newCount--;
	        if (newCount < MIN_HASH_ARRAY_MAP_SIZE) {
	          return packNodes(ownerID, nodes, newCount, idx);
	        }
	      }
	
	      var isEditable = ownerID && ownerID === this.ownerID;
	      var newNodes = setIn(nodes, idx, newNode, isEditable);
	
	      if (isEditable) {
	        this.count = newCount;
	        this.nodes = newNodes;
	        return this;
	      }
	
	      return new HashArrayMapNode(ownerID, newCount, newNodes);
	    };
	
	
	
	
	    function HashCollisionNode(ownerID, keyHash, entries) {
	      this.ownerID = ownerID;
	      this.keyHash = keyHash;
	      this.entries = entries;
	    }
	
	    HashCollisionNode.prototype.get = function(shift, keyHash, key, notSetValue) {
	      var entries = this.entries;
	      for (var ii = 0, len = entries.length; ii < len; ii++) {
	        if (is(key, entries[ii][0])) {
	          return entries[ii][1];
	        }
	      }
	      return notSetValue;
	    };
	
	    HashCollisionNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	      if (keyHash === undefined) {
	        keyHash = hash(key);
	      }
	
	      var removed = value === NOT_SET;
	
	      if (keyHash !== this.keyHash) {
	        if (removed) {
	          return this;
	        }
	        SetRef(didAlter);
	        SetRef(didChangeSize);
	        return mergeIntoNode(this, ownerID, shift, keyHash, [key, value]);
	      }
	
	      var entries = this.entries;
	      var idx = 0;
	      for (var len = entries.length; idx < len; idx++) {
	        if (is(key, entries[idx][0])) {
	          break;
	        }
	      }
	      var exists = idx < len;
	
	      if (exists ? entries[idx][1] === value : removed) {
	        return this;
	      }
	
	      SetRef(didAlter);
	      (removed || !exists) && SetRef(didChangeSize);
	
	      if (removed && len === 2) {
	        return new ValueNode(ownerID, this.keyHash, entries[idx ^ 1]);
	      }
	
	      var isEditable = ownerID && ownerID === this.ownerID;
	      var newEntries = isEditable ? entries : arrCopy(entries);
	
	      if (exists) {
	        if (removed) {
	          idx === len - 1 ? newEntries.pop() : (newEntries[idx] = newEntries.pop());
	        } else {
	          newEntries[idx] = [key, value];
	        }
	      } else {
	        newEntries.push([key, value]);
	      }
	
	      if (isEditable) {
	        this.entries = newEntries;
	        return this;
	      }
	
	      return new HashCollisionNode(ownerID, this.keyHash, newEntries);
	    };
	
	
	
	
	    function ValueNode(ownerID, keyHash, entry) {
	      this.ownerID = ownerID;
	      this.keyHash = keyHash;
	      this.entry = entry;
	    }
	
	    ValueNode.prototype.get = function(shift, keyHash, key, notSetValue) {
	      return is(key, this.entry[0]) ? this.entry[1] : notSetValue;
	    };
	
	    ValueNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	      var removed = value === NOT_SET;
	      var keyMatch = is(key, this.entry[0]);
	      if (keyMatch ? value === this.entry[1] : removed) {
	        return this;
	      }
	
	      SetRef(didAlter);
	
	      if (removed) {
	        SetRef(didChangeSize);
	        return; // undefined
	      }
	
	      if (keyMatch) {
	        if (ownerID && ownerID === this.ownerID) {
	          this.entry[1] = value;
	          return this;
	        }
	        return new ValueNode(ownerID, this.keyHash, [key, value]);
	      }
	
	      SetRef(didChangeSize);
	      return mergeIntoNode(this, ownerID, shift, hash(key), [key, value]);
	    };
	
	
	
	  // #pragma Iterators
	
	  ArrayMapNode.prototype.iterate =
	  HashCollisionNode.prototype.iterate = function (fn, reverse) {
	    var entries = this.entries;
	    for (var ii = 0, maxIndex = entries.length - 1; ii <= maxIndex; ii++) {
	      if (fn(entries[reverse ? maxIndex - ii : ii]) === false) {
	        return false;
	      }
	    }
	  }
	
	  BitmapIndexedNode.prototype.iterate =
	  HashArrayMapNode.prototype.iterate = function (fn, reverse) {
	    var nodes = this.nodes;
	    for (var ii = 0, maxIndex = nodes.length - 1; ii <= maxIndex; ii++) {
	      var node = nodes[reverse ? maxIndex - ii : ii];
	      if (node && node.iterate(fn, reverse) === false) {
	        return false;
	      }
	    }
	  }
	
	  ValueNode.prototype.iterate = function (fn, reverse) {
	    return fn(this.entry);
	  }
	
	  createClass(MapIterator, Iterator);
	
	    function MapIterator(map, type, reverse) {
	      this._type = type;
	      this._reverse = reverse;
	      this._stack = map._root && mapIteratorFrame(map._root);
	    }
	
	    MapIterator.prototype.next = function() {
	      var type = this._type;
	      var stack = this._stack;
	      while (stack) {
	        var node = stack.node;
	        var index = stack.index++;
	        var maxIndex;
	        if (node.entry) {
	          if (index === 0) {
	            return mapIteratorValue(type, node.entry);
	          }
	        } else if (node.entries) {
	          maxIndex = node.entries.length - 1;
	          if (index <= maxIndex) {
	            return mapIteratorValue(type, node.entries[this._reverse ? maxIndex - index : index]);
	          }
	        } else {
	          maxIndex = node.nodes.length - 1;
	          if (index <= maxIndex) {
	            var subNode = node.nodes[this._reverse ? maxIndex - index : index];
	            if (subNode) {
	              if (subNode.entry) {
	                return mapIteratorValue(type, subNode.entry);
	              }
	              stack = this._stack = mapIteratorFrame(subNode, stack);
	            }
	            continue;
	          }
	        }
	        stack = this._stack = this._stack.__prev;
	      }
	      return iteratorDone();
	    };
	
	
	  function mapIteratorValue(type, entry) {
	    return iteratorValue(type, entry[0], entry[1]);
	  }
	
	  function mapIteratorFrame(node, prev) {
	    return {
	      node: node,
	      index: 0,
	      __prev: prev
	    };
	  }
	
	  function makeMap(size, root, ownerID, hash) {
	    var map = Object.create(MapPrototype);
	    map.size = size;
	    map._root = root;
	    map.__ownerID = ownerID;
	    map.__hash = hash;
	    map.__altered = false;
	    return map;
	  }
	
	  var EMPTY_MAP;
	  function emptyMap() {
	    return EMPTY_MAP || (EMPTY_MAP = makeMap(0));
	  }
	
	  function updateMap(map, k, v) {
	    var newRoot;
	    var newSize;
	    if (!map._root) {
	      if (v === NOT_SET) {
	        return map;
	      }
	      newSize = 1;
	      newRoot = new ArrayMapNode(map.__ownerID, [[k, v]]);
	    } else {
	      var didChangeSize = MakeRef(CHANGE_LENGTH);
	      var didAlter = MakeRef(DID_ALTER);
	      newRoot = updateNode(map._root, map.__ownerID, 0, undefined, k, v, didChangeSize, didAlter);
	      if (!didAlter.value) {
	        return map;
	      }
	      newSize = map.size + (didChangeSize.value ? v === NOT_SET ? -1 : 1 : 0);
	    }
	    if (map.__ownerID) {
	      map.size = newSize;
	      map._root = newRoot;
	      map.__hash = undefined;
	      map.__altered = true;
	      return map;
	    }
	    return newRoot ? makeMap(newSize, newRoot) : emptyMap();
	  }
	
	  function updateNode(node, ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	    if (!node) {
	      if (value === NOT_SET) {
	        return node;
	      }
	      SetRef(didAlter);
	      SetRef(didChangeSize);
	      return new ValueNode(ownerID, keyHash, [key, value]);
	    }
	    return node.update(ownerID, shift, keyHash, key, value, didChangeSize, didAlter);
	  }
	
	  function isLeafNode(node) {
	    return node.constructor === ValueNode || node.constructor === HashCollisionNode;
	  }
	
	  function mergeIntoNode(node, ownerID, shift, keyHash, entry) {
	    if (node.keyHash === keyHash) {
	      return new HashCollisionNode(ownerID, keyHash, [node.entry, entry]);
	    }
	
	    var idx1 = (shift === 0 ? node.keyHash : node.keyHash >>> shift) & MASK;
	    var idx2 = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
	
	    var newNode;
	    var nodes = idx1 === idx2 ?
	      [mergeIntoNode(node, ownerID, shift + SHIFT, keyHash, entry)] :
	      ((newNode = new ValueNode(ownerID, keyHash, entry)), idx1 < idx2 ? [node, newNode] : [newNode, node]);
	
	    return new BitmapIndexedNode(ownerID, (1 << idx1) | (1 << idx2), nodes);
	  }
	
	  function createNodes(ownerID, entries, key, value) {
	    if (!ownerID) {
	      ownerID = new OwnerID();
	    }
	    var node = new ValueNode(ownerID, hash(key), [key, value]);
	    for (var ii = 0; ii < entries.length; ii++) {
	      var entry = entries[ii];
	      node = node.update(ownerID, 0, undefined, entry[0], entry[1]);
	    }
	    return node;
	  }
	
	  function packNodes(ownerID, nodes, count, excluding) {
	    var bitmap = 0;
	    var packedII = 0;
	    var packedNodes = new Array(count);
	    for (var ii = 0, bit = 1, len = nodes.length; ii < len; ii++, bit <<= 1) {
	      var node = nodes[ii];
	      if (node !== undefined && ii !== excluding) {
	        bitmap |= bit;
	        packedNodes[packedII++] = node;
	      }
	    }
	    return new BitmapIndexedNode(ownerID, bitmap, packedNodes);
	  }
	
	  function expandNodes(ownerID, nodes, bitmap, including, node) {
	    var count = 0;
	    var expandedNodes = new Array(SIZE);
	    for (var ii = 0; bitmap !== 0; ii++, bitmap >>>= 1) {
	      expandedNodes[ii] = bitmap & 1 ? nodes[count++] : undefined;
	    }
	    expandedNodes[including] = node;
	    return new HashArrayMapNode(ownerID, count + 1, expandedNodes);
	  }
	
	  function mergeIntoMapWith(map, merger, iterables) {
	    var iters = [];
	    for (var ii = 0; ii < iterables.length; ii++) {
	      var value = iterables[ii];
	      var iter = KeyedIterable(value);
	      if (!isIterable(value)) {
	        iter = iter.map(function(v ) {return fromJS(v)});
	      }
	      iters.push(iter);
	    }
	    return mergeIntoCollectionWith(map, merger, iters);
	  }
	
	  function deepMerger(existing, value, key) {
	    return existing && existing.mergeDeep && isIterable(value) ?
	      existing.mergeDeep(value) :
	      is(existing, value) ? existing : value;
	  }
	
	  function deepMergerWith(merger) {
	    return function(existing, value, key)  {
	      if (existing && existing.mergeDeepWith && isIterable(value)) {
	        return existing.mergeDeepWith(merger, value);
	      }
	      var nextValue = merger(existing, value, key);
	      return is(existing, nextValue) ? existing : nextValue;
	    };
	  }
	
	  function mergeIntoCollectionWith(collection, merger, iters) {
	    iters = iters.filter(function(x ) {return x.size !== 0});
	    if (iters.length === 0) {
	      return collection;
	    }
	    if (collection.size === 0 && !collection.__ownerID && iters.length === 1) {
	      return collection.constructor(iters[0]);
	    }
	    return collection.withMutations(function(collection ) {
	      var mergeIntoMap = merger ?
	        function(value, key)  {
	          collection.update(key, NOT_SET, function(existing )
	            {return existing === NOT_SET ? value : merger(existing, value, key)}
	          );
	        } :
	        function(value, key)  {
	          collection.set(key, value);
	        }
	      for (var ii = 0; ii < iters.length; ii++) {
	        iters[ii].forEach(mergeIntoMap);
	      }
	    });
	  }
	
	  function updateInDeepMap(existing, keyPathIter, notSetValue, updater) {
	    var isNotSet = existing === NOT_SET;
	    var step = keyPathIter.next();
	    if (step.done) {
	      var existingValue = isNotSet ? notSetValue : existing;
	      var newValue = updater(existingValue);
	      return newValue === existingValue ? existing : newValue;
	    }
	    invariant(
	      isNotSet || (existing && existing.set),
	      'invalid keyPath'
	    );
	    var key = step.value;
	    var nextExisting = isNotSet ? NOT_SET : existing.get(key, NOT_SET);
	    var nextUpdated = updateInDeepMap(
	      nextExisting,
	      keyPathIter,
	      notSetValue,
	      updater
	    );
	    return nextUpdated === nextExisting ? existing :
	      nextUpdated === NOT_SET ? existing.remove(key) :
	      (isNotSet ? emptyMap() : existing).set(key, nextUpdated);
	  }
	
	  function popCount(x) {
	    x = x - ((x >> 1) & 0x55555555);
	    x = (x & 0x33333333) + ((x >> 2) & 0x33333333);
	    x = (x + (x >> 4)) & 0x0f0f0f0f;
	    x = x + (x >> 8);
	    x = x + (x >> 16);
	    return x & 0x7f;
	  }
	
	  function setIn(array, idx, val, canEdit) {
	    var newArray = canEdit ? array : arrCopy(array);
	    newArray[idx] = val;
	    return newArray;
	  }
	
	  function spliceIn(array, idx, val, canEdit) {
	    var newLen = array.length + 1;
	    if (canEdit && idx + 1 === newLen) {
	      array[idx] = val;
	      return array;
	    }
	    var newArray = new Array(newLen);
	    var after = 0;
	    for (var ii = 0; ii < newLen; ii++) {
	      if (ii === idx) {
	        newArray[ii] = val;
	        after = -1;
	      } else {
	        newArray[ii] = array[ii + after];
	      }
	    }
	    return newArray;
	  }
	
	  function spliceOut(array, idx, canEdit) {
	    var newLen = array.length - 1;
	    if (canEdit && idx === newLen) {
	      array.pop();
	      return array;
	    }
	    var newArray = new Array(newLen);
	    var after = 0;
	    for (var ii = 0; ii < newLen; ii++) {
	      if (ii === idx) {
	        after = 1;
	      }
	      newArray[ii] = array[ii + after];
	    }
	    return newArray;
	  }
	
	  var MAX_ARRAY_MAP_SIZE = SIZE / 4;
	  var MAX_BITMAP_INDEXED_SIZE = SIZE / 2;
	  var MIN_HASH_ARRAY_MAP_SIZE = SIZE / 4;
	
	  createClass(List, IndexedCollection);
	
	    // @pragma Construction
	
	    function List(value) {
	      var empty = emptyList();
	      if (value === null || value === undefined) {
	        return empty;
	      }
	      if (isList(value)) {
	        return value;
	      }
	      var iter = IndexedIterable(value);
	      var size = iter.size;
	      if (size === 0) {
	        return empty;
	      }
	      assertNotInfinite(size);
	      if (size > 0 && size < SIZE) {
	        return makeList(0, size, SHIFT, null, new VNode(iter.toArray()));
	      }
	      return empty.withMutations(function(list ) {
	        list.setSize(size);
	        iter.forEach(function(v, i)  {return list.set(i, v)});
	      });
	    }
	
	    List.of = function(/*...values*/) {
	      return this(arguments);
	    };
	
	    List.prototype.toString = function() {
	      return this.__toString('List [', ']');
	    };
	
	    // @pragma Access
	
	    List.prototype.get = function(index, notSetValue) {
	      index = wrapIndex(this, index);
	      if (index >= 0 && index < this.size) {
	        index += this._origin;
	        var node = listNodeFor(this, index);
	        return node && node.array[index & MASK];
	      }
	      return notSetValue;
	    };
	
	    // @pragma Modification
	
	    List.prototype.set = function(index, value) {
	      return updateList(this, index, value);
	    };
	
	    List.prototype.remove = function(index) {
	      return !this.has(index) ? this :
	        index === 0 ? this.shift() :
	        index === this.size - 1 ? this.pop() :
	        this.splice(index, 1);
	    };
	
	    List.prototype.insert = function(index, value) {
	      return this.splice(index, 0, value);
	    };
	
	    List.prototype.clear = function() {
	      if (this.size === 0) {
	        return this;
	      }
	      if (this.__ownerID) {
	        this.size = this._origin = this._capacity = 0;
	        this._level = SHIFT;
	        this._root = this._tail = null;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return emptyList();
	    };
	
	    List.prototype.push = function(/*...values*/) {
	      var values = arguments;
	      var oldSize = this.size;
	      return this.withMutations(function(list ) {
	        setListBounds(list, 0, oldSize + values.length);
	        for (var ii = 0; ii < values.length; ii++) {
	          list.set(oldSize + ii, values[ii]);
	        }
	      });
	    };
	
	    List.prototype.pop = function() {
	      return setListBounds(this, 0, -1);
	    };
	
	    List.prototype.unshift = function(/*...values*/) {
	      var values = arguments;
	      return this.withMutations(function(list ) {
	        setListBounds(list, -values.length);
	        for (var ii = 0; ii < values.length; ii++) {
	          list.set(ii, values[ii]);
	        }
	      });
	    };
	
	    List.prototype.shift = function() {
	      return setListBounds(this, 1);
	    };
	
	    // @pragma Composition
	
	    List.prototype.merge = function(/*...iters*/) {
	      return mergeIntoListWith(this, undefined, arguments);
	    };
	
	    List.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
	      return mergeIntoListWith(this, merger, iters);
	    };
	
	    List.prototype.mergeDeep = function(/*...iters*/) {
	      return mergeIntoListWith(this, deepMerger, arguments);
	    };
	
	    List.prototype.mergeDeepWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
	      return mergeIntoListWith(this, deepMergerWith(merger), iters);
	    };
	
	    List.prototype.setSize = function(size) {
	      return setListBounds(this, 0, size);
	    };
	
	    // @pragma Iteration
	
	    List.prototype.slice = function(begin, end) {
	      var size = this.size;
	      if (wholeSlice(begin, end, size)) {
	        return this;
	      }
	      return setListBounds(
	        this,
	        resolveBegin(begin, size),
	        resolveEnd(end, size)
	      );
	    };
	
	    List.prototype.__iterator = function(type, reverse) {
	      var index = 0;
	      var values = iterateList(this, reverse);
	      return new Iterator(function()  {
	        var value = values();
	        return value === DONE ?
	          iteratorDone() :
	          iteratorValue(type, index++, value);
	      });
	    };
	
	    List.prototype.__iterate = function(fn, reverse) {
	      var index = 0;
	      var values = iterateList(this, reverse);
	      var value;
	      while ((value = values()) !== DONE) {
	        if (fn(value, index++, this) === false) {
	          break;
	        }
	      }
	      return index;
	    };
	
	    List.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        return this;
	      }
	      return makeList(this._origin, this._capacity, this._level, this._root, this._tail, ownerID, this.__hash);
	    };
	
	
	  function isList(maybeList) {
	    return !!(maybeList && maybeList[IS_LIST_SENTINEL]);
	  }
	
	  List.isList = isList;
	
	  var IS_LIST_SENTINEL = '@@__IMMUTABLE_LIST__@@';
	
	  var ListPrototype = List.prototype;
	  ListPrototype[IS_LIST_SENTINEL] = true;
	  ListPrototype[DELETE] = ListPrototype.remove;
	  ListPrototype.setIn = MapPrototype.setIn;
	  ListPrototype.deleteIn =
	  ListPrototype.removeIn = MapPrototype.removeIn;
	  ListPrototype.update = MapPrototype.update;
	  ListPrototype.updateIn = MapPrototype.updateIn;
	  ListPrototype.mergeIn = MapPrototype.mergeIn;
	  ListPrototype.mergeDeepIn = MapPrototype.mergeDeepIn;
	  ListPrototype.withMutations = MapPrototype.withMutations;
	  ListPrototype.asMutable = MapPrototype.asMutable;
	  ListPrototype.asImmutable = MapPrototype.asImmutable;
	  ListPrototype.wasAltered = MapPrototype.wasAltered;
	
	
	
	    function VNode(array, ownerID) {
	      this.array = array;
	      this.ownerID = ownerID;
	    }
	
	    // TODO: seems like these methods are very similar
	
	    VNode.prototype.removeBefore = function(ownerID, level, index) {
	      if (index === level ? 1 << level : 0 || this.array.length === 0) {
	        return this;
	      }
	      var originIndex = (index >>> level) & MASK;
	      if (originIndex >= this.array.length) {
	        return new VNode([], ownerID);
	      }
	      var removingFirst = originIndex === 0;
	      var newChild;
	      if (level > 0) {
	        var oldChild = this.array[originIndex];
	        newChild = oldChild && oldChild.removeBefore(ownerID, level - SHIFT, index);
	        if (newChild === oldChild && removingFirst) {
	          return this;
	        }
	      }
	      if (removingFirst && !newChild) {
	        return this;
	      }
	      var editable = editableVNode(this, ownerID);
	      if (!removingFirst) {
	        for (var ii = 0; ii < originIndex; ii++) {
	          editable.array[ii] = undefined;
	        }
	      }
	      if (newChild) {
	        editable.array[originIndex] = newChild;
	      }
	      return editable;
	    };
	
	    VNode.prototype.removeAfter = function(ownerID, level, index) {
	      if (index === (level ? 1 << level : 0) || this.array.length === 0) {
	        return this;
	      }
	      var sizeIndex = ((index - 1) >>> level) & MASK;
	      if (sizeIndex >= this.array.length) {
	        return this;
	      }
	
	      var newChild;
	      if (level > 0) {
	        var oldChild = this.array[sizeIndex];
	        newChild = oldChild && oldChild.removeAfter(ownerID, level - SHIFT, index);
	        if (newChild === oldChild && sizeIndex === this.array.length - 1) {
	          return this;
	        }
	      }
	
	      var editable = editableVNode(this, ownerID);
	      editable.array.splice(sizeIndex + 1);
	      if (newChild) {
	        editable.array[sizeIndex] = newChild;
	      }
	      return editable;
	    };
	
	
	
	  var DONE = {};
	
	  function iterateList(list, reverse) {
	    var left = list._origin;
	    var right = list._capacity;
	    var tailPos = getTailOffset(right);
	    var tail = list._tail;
	
	    return iterateNodeOrLeaf(list._root, list._level, 0);
	
	    function iterateNodeOrLeaf(node, level, offset) {
	      return level === 0 ?
	        iterateLeaf(node, offset) :
	        iterateNode(node, level, offset);
	    }
	
	    function iterateLeaf(node, offset) {
	      var array = offset === tailPos ? tail && tail.array : node && node.array;
	      var from = offset > left ? 0 : left - offset;
	      var to = right - offset;
	      if (to > SIZE) {
	        to = SIZE;
	      }
	      return function()  {
	        if (from === to) {
	          return DONE;
	        }
	        var idx = reverse ? --to : from++;
	        return array && array[idx];
	      };
	    }
	
	    function iterateNode(node, level, offset) {
	      var values;
	      var array = node && node.array;
	      var from = offset > left ? 0 : (left - offset) >> level;
	      var to = ((right - offset) >> level) + 1;
	      if (to > SIZE) {
	        to = SIZE;
	      }
	      return function()  {
	        do {
	          if (values) {
	            var value = values();
	            if (value !== DONE) {
	              return value;
	            }
	            values = null;
	          }
	          if (from === to) {
	            return DONE;
	          }
	          var idx = reverse ? --to : from++;
	          values = iterateNodeOrLeaf(
	            array && array[idx], level - SHIFT, offset + (idx << level)
	          );
	        } while (true);
	      };
	    }
	  }
	
	  function makeList(origin, capacity, level, root, tail, ownerID, hash) {
	    var list = Object.create(ListPrototype);
	    list.size = capacity - origin;
	    list._origin = origin;
	    list._capacity = capacity;
	    list._level = level;
	    list._root = root;
	    list._tail = tail;
	    list.__ownerID = ownerID;
	    list.__hash = hash;
	    list.__altered = false;
	    return list;
	  }
	
	  var EMPTY_LIST;
	  function emptyList() {
	    return EMPTY_LIST || (EMPTY_LIST = makeList(0, 0, SHIFT));
	  }
	
	  function updateList(list, index, value) {
	    index = wrapIndex(list, index);
	
	    if (index !== index) {
	      return list;
	    }
	
	    if (index >= list.size || index < 0) {
	      return list.withMutations(function(list ) {
	        index < 0 ?
	          setListBounds(list, index).set(0, value) :
	          setListBounds(list, 0, index + 1).set(index, value)
	      });
	    }
	
	    index += list._origin;
	
	    var newTail = list._tail;
	    var newRoot = list._root;
	    var didAlter = MakeRef(DID_ALTER);
	    if (index >= getTailOffset(list._capacity)) {
	      newTail = updateVNode(newTail, list.__ownerID, 0, index, value, didAlter);
	    } else {
	      newRoot = updateVNode(newRoot, list.__ownerID, list._level, index, value, didAlter);
	    }
	
	    if (!didAlter.value) {
	      return list;
	    }
	
	    if (list.__ownerID) {
	      list._root = newRoot;
	      list._tail = newTail;
	      list.__hash = undefined;
	      list.__altered = true;
	      return list;
	    }
	    return makeList(list._origin, list._capacity, list._level, newRoot, newTail);
	  }
	
	  function updateVNode(node, ownerID, level, index, value, didAlter) {
	    var idx = (index >>> level) & MASK;
	    var nodeHas = node && idx < node.array.length;
	    if (!nodeHas && value === undefined) {
	      return node;
	    }
	
	    var newNode;
	
	    if (level > 0) {
	      var lowerNode = node && node.array[idx];
	      var newLowerNode = updateVNode(lowerNode, ownerID, level - SHIFT, index, value, didAlter);
	      if (newLowerNode === lowerNode) {
	        return node;
	      }
	      newNode = editableVNode(node, ownerID);
	      newNode.array[idx] = newLowerNode;
	      return newNode;
	    }
	
	    if (nodeHas && node.array[idx] === value) {
	      return node;
	    }
	
	    SetRef(didAlter);
	
	    newNode = editableVNode(node, ownerID);
	    if (value === undefined && idx === newNode.array.length - 1) {
	      newNode.array.pop();
	    } else {
	      newNode.array[idx] = value;
	    }
	    return newNode;
	  }
	
	  function editableVNode(node, ownerID) {
	    if (ownerID && node && ownerID === node.ownerID) {
	      return node;
	    }
	    return new VNode(node ? node.array.slice() : [], ownerID);
	  }
	
	  function listNodeFor(list, rawIndex) {
	    if (rawIndex >= getTailOffset(list._capacity)) {
	      return list._tail;
	    }
	    if (rawIndex < 1 << (list._level + SHIFT)) {
	      var node = list._root;
	      var level = list._level;
	      while (node && level > 0) {
	        node = node.array[(rawIndex >>> level) & MASK];
	        level -= SHIFT;
	      }
	      return node;
	    }
	  }
	
	  function setListBounds(list, begin, end) {
	    // Sanitize begin & end using this shorthand for ToInt32(argument)
	    // http://www.ecma-international.org/ecma-262/6.0/#sec-toint32
	    if (begin !== undefined) {
	      begin = begin | 0;
	    }
	    if (end !== undefined) {
	      end = end | 0;
	    }
	    var owner = list.__ownerID || new OwnerID();
	    var oldOrigin = list._origin;
	    var oldCapacity = list._capacity;
	    var newOrigin = oldOrigin + begin;
	    var newCapacity = end === undefined ? oldCapacity : end < 0 ? oldCapacity + end : oldOrigin + end;
	    if (newOrigin === oldOrigin && newCapacity === oldCapacity) {
	      return list;
	    }
	
	    // If it's going to end after it starts, it's empty.
	    if (newOrigin >= newCapacity) {
	      return list.clear();
	    }
	
	    var newLevel = list._level;
	    var newRoot = list._root;
	
	    // New origin might need creating a higher root.
	    var offsetShift = 0;
	    while (newOrigin + offsetShift < 0) {
	      newRoot = new VNode(newRoot && newRoot.array.length ? [undefined, newRoot] : [], owner);
	      newLevel += SHIFT;
	      offsetShift += 1 << newLevel;
	    }
	    if (offsetShift) {
	      newOrigin += offsetShift;
	      oldOrigin += offsetShift;
	      newCapacity += offsetShift;
	      oldCapacity += offsetShift;
	    }
	
	    var oldTailOffset = getTailOffset(oldCapacity);
	    var newTailOffset = getTailOffset(newCapacity);
	
	    // New size might need creating a higher root.
	    while (newTailOffset >= 1 << (newLevel + SHIFT)) {
	      newRoot = new VNode(newRoot && newRoot.array.length ? [newRoot] : [], owner);
	      newLevel += SHIFT;
	    }
	
	    // Locate or create the new tail.
	    var oldTail = list._tail;
	    var newTail = newTailOffset < oldTailOffset ?
	      listNodeFor(list, newCapacity - 1) :
	      newTailOffset > oldTailOffset ? new VNode([], owner) : oldTail;
	
	    // Merge Tail into tree.
	    if (oldTail && newTailOffset > oldTailOffset && newOrigin < oldCapacity && oldTail.array.length) {
	      newRoot = editableVNode(newRoot, owner);
	      var node = newRoot;
	      for (var level = newLevel; level > SHIFT; level -= SHIFT) {
	        var idx = (oldTailOffset >>> level) & MASK;
	        node = node.array[idx] = editableVNode(node.array[idx], owner);
	      }
	      node.array[(oldTailOffset >>> SHIFT) & MASK] = oldTail;
	    }
	
	    // If the size has been reduced, there's a chance the tail needs to be trimmed.
	    if (newCapacity < oldCapacity) {
	      newTail = newTail && newTail.removeAfter(owner, 0, newCapacity);
	    }
	
	    // If the new origin is within the tail, then we do not need a root.
	    if (newOrigin >= newTailOffset) {
	      newOrigin -= newTailOffset;
	      newCapacity -= newTailOffset;
	      newLevel = SHIFT;
	      newRoot = null;
	      newTail = newTail && newTail.removeBefore(owner, 0, newOrigin);
	
	    // Otherwise, if the root has been trimmed, garbage collect.
	    } else if (newOrigin > oldOrigin || newTailOffset < oldTailOffset) {
	      offsetShift = 0;
	
	      // Identify the new top root node of the subtree of the old root.
	      while (newRoot) {
	        var beginIndex = (newOrigin >>> newLevel) & MASK;
	        if (beginIndex !== (newTailOffset >>> newLevel) & MASK) {
	          break;
	        }
	        if (beginIndex) {
	          offsetShift += (1 << newLevel) * beginIndex;
	        }
	        newLevel -= SHIFT;
	        newRoot = newRoot.array[beginIndex];
	      }
	
	      // Trim the new sides of the new root.
	      if (newRoot && newOrigin > oldOrigin) {
	        newRoot = newRoot.removeBefore(owner, newLevel, newOrigin - offsetShift);
	      }
	      if (newRoot && newTailOffset < oldTailOffset) {
	        newRoot = newRoot.removeAfter(owner, newLevel, newTailOffset - offsetShift);
	      }
	      if (offsetShift) {
	        newOrigin -= offsetShift;
	        newCapacity -= offsetShift;
	      }
	    }
	
	    if (list.__ownerID) {
	      list.size = newCapacity - newOrigin;
	      list._origin = newOrigin;
	      list._capacity = newCapacity;
	      list._level = newLevel;
	      list._root = newRoot;
	      list._tail = newTail;
	      list.__hash = undefined;
	      list.__altered = true;
	      return list;
	    }
	    return makeList(newOrigin, newCapacity, newLevel, newRoot, newTail);
	  }
	
	  function mergeIntoListWith(list, merger, iterables) {
	    var iters = [];
	    var maxSize = 0;
	    for (var ii = 0; ii < iterables.length; ii++) {
	      var value = iterables[ii];
	      var iter = IndexedIterable(value);
	      if (iter.size > maxSize) {
	        maxSize = iter.size;
	      }
	      if (!isIterable(value)) {
	        iter = iter.map(function(v ) {return fromJS(v)});
	      }
	      iters.push(iter);
	    }
	    if (maxSize > list.size) {
	      list = list.setSize(maxSize);
	    }
	    return mergeIntoCollectionWith(list, merger, iters);
	  }
	
	  function getTailOffset(size) {
	    return size < SIZE ? 0 : (((size - 1) >>> SHIFT) << SHIFT);
	  }
	
	  createClass(OrderedMap, Map);
	
	    // @pragma Construction
	
	    function OrderedMap(value) {
	      return value === null || value === undefined ? emptyOrderedMap() :
	        isOrderedMap(value) ? value :
	        emptyOrderedMap().withMutations(function(map ) {
	          var iter = KeyedIterable(value);
	          assertNotInfinite(iter.size);
	          iter.forEach(function(v, k)  {return map.set(k, v)});
	        });
	    }
	
	    OrderedMap.of = function(/*...values*/) {
	      return this(arguments);
	    };
	
	    OrderedMap.prototype.toString = function() {
	      return this.__toString('OrderedMap {', '}');
	    };
	
	    // @pragma Access
	
	    OrderedMap.prototype.get = function(k, notSetValue) {
	      var index = this._map.get(k);
	      return index !== undefined ? this._list.get(index)[1] : notSetValue;
	    };
	
	    // @pragma Modification
	
	    OrderedMap.prototype.clear = function() {
	      if (this.size === 0) {
	        return this;
	      }
	      if (this.__ownerID) {
	        this.size = 0;
	        this._map.clear();
	        this._list.clear();
	        return this;
	      }
	      return emptyOrderedMap();
	    };
	
	    OrderedMap.prototype.set = function(k, v) {
	      return updateOrderedMap(this, k, v);
	    };
	
	    OrderedMap.prototype.remove = function(k) {
	      return updateOrderedMap(this, k, NOT_SET);
	    };
	
	    OrderedMap.prototype.wasAltered = function() {
	      return this._map.wasAltered() || this._list.wasAltered();
	    };
	
	    OrderedMap.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      return this._list.__iterate(
	        function(entry ) {return entry && fn(entry[1], entry[0], this$0)},
	        reverse
	      );
	    };
	
	    OrderedMap.prototype.__iterator = function(type, reverse) {
	      return this._list.fromEntrySeq().__iterator(type, reverse);
	    };
	
	    OrderedMap.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      var newMap = this._map.__ensureOwner(ownerID);
	      var newList = this._list.__ensureOwner(ownerID);
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        this._map = newMap;
	        this._list = newList;
	        return this;
	      }
	      return makeOrderedMap(newMap, newList, ownerID, this.__hash);
	    };
	
	
	  function isOrderedMap(maybeOrderedMap) {
	    return isMap(maybeOrderedMap) && isOrdered(maybeOrderedMap);
	  }
	
	  OrderedMap.isOrderedMap = isOrderedMap;
	
	  OrderedMap.prototype[IS_ORDERED_SENTINEL] = true;
	  OrderedMap.prototype[DELETE] = OrderedMap.prototype.remove;
	
	
	
	  function makeOrderedMap(map, list, ownerID, hash) {
	    var omap = Object.create(OrderedMap.prototype);
	    omap.size = map ? map.size : 0;
	    omap._map = map;
	    omap._list = list;
	    omap.__ownerID = ownerID;
	    omap.__hash = hash;
	    return omap;
	  }
	
	  var EMPTY_ORDERED_MAP;
	  function emptyOrderedMap() {
	    return EMPTY_ORDERED_MAP || (EMPTY_ORDERED_MAP = makeOrderedMap(emptyMap(), emptyList()));
	  }
	
	  function updateOrderedMap(omap, k, v) {
	    var map = omap._map;
	    var list = omap._list;
	    var i = map.get(k);
	    var has = i !== undefined;
	    var newMap;
	    var newList;
	    if (v === NOT_SET) { // removed
	      if (!has) {
	        return omap;
	      }
	      if (list.size >= SIZE && list.size >= map.size * 2) {
	        newList = list.filter(function(entry, idx)  {return entry !== undefined && i !== idx});
	        newMap = newList.toKeyedSeq().map(function(entry ) {return entry[0]}).flip().toMap();
	        if (omap.__ownerID) {
	          newMap.__ownerID = newList.__ownerID = omap.__ownerID;
	        }
	      } else {
	        newMap = map.remove(k);
	        newList = i === list.size - 1 ? list.pop() : list.set(i, undefined);
	      }
	    } else {
	      if (has) {
	        if (v === list.get(i)[1]) {
	          return omap;
	        }
	        newMap = map;
	        newList = list.set(i, [k, v]);
	      } else {
	        newMap = map.set(k, list.size);
	        newList = list.set(list.size, [k, v]);
	      }
	    }
	    if (omap.__ownerID) {
	      omap.size = newMap.size;
	      omap._map = newMap;
	      omap._list = newList;
	      omap.__hash = undefined;
	      return omap;
	    }
	    return makeOrderedMap(newMap, newList);
	  }
	
	  createClass(ToKeyedSequence, KeyedSeq);
	    function ToKeyedSequence(indexed, useKeys) {
	      this._iter = indexed;
	      this._useKeys = useKeys;
	      this.size = indexed.size;
	    }
	
	    ToKeyedSequence.prototype.get = function(key, notSetValue) {
	      return this._iter.get(key, notSetValue);
	    };
	
	    ToKeyedSequence.prototype.has = function(key) {
	      return this._iter.has(key);
	    };
	
	    ToKeyedSequence.prototype.valueSeq = function() {
	      return this._iter.valueSeq();
	    };
	
	    ToKeyedSequence.prototype.reverse = function() {var this$0 = this;
	      var reversedSequence = reverseFactory(this, true);
	      if (!this._useKeys) {
	        reversedSequence.valueSeq = function()  {return this$0._iter.toSeq().reverse()};
	      }
	      return reversedSequence;
	    };
	
	    ToKeyedSequence.prototype.map = function(mapper, context) {var this$0 = this;
	      var mappedSequence = mapFactory(this, mapper, context);
	      if (!this._useKeys) {
	        mappedSequence.valueSeq = function()  {return this$0._iter.toSeq().map(mapper, context)};
	      }
	      return mappedSequence;
	    };
	
	    ToKeyedSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      var ii;
	      return this._iter.__iterate(
	        this._useKeys ?
	          function(v, k)  {return fn(v, k, this$0)} :
	          ((ii = reverse ? resolveSize(this) : 0),
	            function(v ) {return fn(v, reverse ? --ii : ii++, this$0)}),
	        reverse
	      );
	    };
	
	    ToKeyedSequence.prototype.__iterator = function(type, reverse) {
	      if (this._useKeys) {
	        return this._iter.__iterator(type, reverse);
	      }
	      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
	      var ii = reverse ? resolveSize(this) : 0;
	      return new Iterator(function()  {
	        var step = iterator.next();
	        return step.done ? step :
	          iteratorValue(type, reverse ? --ii : ii++, step.value, step);
	      });
	    };
	
	  ToKeyedSequence.prototype[IS_ORDERED_SENTINEL] = true;
	
	
	  createClass(ToIndexedSequence, IndexedSeq);
	    function ToIndexedSequence(iter) {
	      this._iter = iter;
	      this.size = iter.size;
	    }
	
	    ToIndexedSequence.prototype.includes = function(value) {
	      return this._iter.includes(value);
	    };
	
	    ToIndexedSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      var iterations = 0;
	      return this._iter.__iterate(function(v ) {return fn(v, iterations++, this$0)}, reverse);
	    };
	
	    ToIndexedSequence.prototype.__iterator = function(type, reverse) {
	      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
	      var iterations = 0;
	      return new Iterator(function()  {
	        var step = iterator.next();
	        return step.done ? step :
	          iteratorValue(type, iterations++, step.value, step)
	      });
	    };
	
	
	
	  createClass(ToSetSequence, SetSeq);
	    function ToSetSequence(iter) {
	      this._iter = iter;
	      this.size = iter.size;
	    }
	
	    ToSetSequence.prototype.has = function(key) {
	      return this._iter.includes(key);
	    };
	
	    ToSetSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      return this._iter.__iterate(function(v ) {return fn(v, v, this$0)}, reverse);
	    };
	
	    ToSetSequence.prototype.__iterator = function(type, reverse) {
	      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
	      return new Iterator(function()  {
	        var step = iterator.next();
	        return step.done ? step :
	          iteratorValue(type, step.value, step.value, step);
	      });
	    };
	
	
	
	  createClass(FromEntriesSequence, KeyedSeq);
	    function FromEntriesSequence(entries) {
	      this._iter = entries;
	      this.size = entries.size;
	    }
	
	    FromEntriesSequence.prototype.entrySeq = function() {
	      return this._iter.toSeq();
	    };
	
	    FromEntriesSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      return this._iter.__iterate(function(entry ) {
	        // Check if entry exists first so array access doesn't throw for holes
	        // in the parent iteration.
	        if (entry) {
	          validateEntry(entry);
	          var indexedIterable = isIterable(entry);
	          return fn(
	            indexedIterable ? entry.get(1) : entry[1],
	            indexedIterable ? entry.get(0) : entry[0],
	            this$0
	          );
	        }
	      }, reverse);
	    };
	
	    FromEntriesSequence.prototype.__iterator = function(type, reverse) {
	      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
	      return new Iterator(function()  {
	        while (true) {
	          var step = iterator.next();
	          if (step.done) {
	            return step;
	          }
	          var entry = step.value;
	          // Check if entry exists first so array access doesn't throw for holes
	          // in the parent iteration.
	          if (entry) {
	            validateEntry(entry);
	            var indexedIterable = isIterable(entry);
	            return iteratorValue(
	              type,
	              indexedIterable ? entry.get(0) : entry[0],
	              indexedIterable ? entry.get(1) : entry[1],
	              step
	            );
	          }
	        }
	      });
	    };
	
	
	  ToIndexedSequence.prototype.cacheResult =
	  ToKeyedSequence.prototype.cacheResult =
	  ToSetSequence.prototype.cacheResult =
	  FromEntriesSequence.prototype.cacheResult =
	    cacheResultThrough;
	
	
	  function flipFactory(iterable) {
	    var flipSequence = makeSequence(iterable);
	    flipSequence._iter = iterable;
	    flipSequence.size = iterable.size;
	    flipSequence.flip = function()  {return iterable};
	    flipSequence.reverse = function () {
	      var reversedSequence = iterable.reverse.apply(this); // super.reverse()
	      reversedSequence.flip = function()  {return iterable.reverse()};
	      return reversedSequence;
	    };
	    flipSequence.has = function(key ) {return iterable.includes(key)};
	    flipSequence.includes = function(key ) {return iterable.has(key)};
	    flipSequence.cacheResult = cacheResultThrough;
	    flipSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
	      return iterable.__iterate(function(v, k)  {return fn(k, v, this$0) !== false}, reverse);
	    }
	    flipSequence.__iteratorUncached = function(type, reverse) {
	      if (type === ITERATE_ENTRIES) {
	        var iterator = iterable.__iterator(type, reverse);
	        return new Iterator(function()  {
	          var step = iterator.next();
	          if (!step.done) {
	            var k = step.value[0];
	            step.value[0] = step.value[1];
	            step.value[1] = k;
	          }
	          return step;
	        });
	      }
	      return iterable.__iterator(
	        type === ITERATE_VALUES ? ITERATE_KEYS : ITERATE_VALUES,
	        reverse
	      );
	    }
	    return flipSequence;
	  }
	
	
	  function mapFactory(iterable, mapper, context) {
	    var mappedSequence = makeSequence(iterable);
	    mappedSequence.size = iterable.size;
	    mappedSequence.has = function(key ) {return iterable.has(key)};
	    mappedSequence.get = function(key, notSetValue)  {
	      var v = iterable.get(key, NOT_SET);
	      return v === NOT_SET ?
	        notSetValue :
	        mapper.call(context, v, key, iterable);
	    };
	    mappedSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
	      return iterable.__iterate(
	        function(v, k, c)  {return fn(mapper.call(context, v, k, c), k, this$0) !== false},
	        reverse
	      );
	    }
	    mappedSequence.__iteratorUncached = function (type, reverse) {
	      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
	      return new Iterator(function()  {
	        var step = iterator.next();
	        if (step.done) {
	          return step;
	        }
	        var entry = step.value;
	        var key = entry[0];
	        return iteratorValue(
	          type,
	          key,
	          mapper.call(context, entry[1], key, iterable),
	          step
	        );
	      });
	    }
	    return mappedSequence;
	  }
	
	
	  function reverseFactory(iterable, useKeys) {
	    var reversedSequence = makeSequence(iterable);
	    reversedSequence._iter = iterable;
	    reversedSequence.size = iterable.size;
	    reversedSequence.reverse = function()  {return iterable};
	    if (iterable.flip) {
	      reversedSequence.flip = function () {
	        var flipSequence = flipFactory(iterable);
	        flipSequence.reverse = function()  {return iterable.flip()};
	        return flipSequence;
	      };
	    }
	    reversedSequence.get = function(key, notSetValue) 
	      {return iterable.get(useKeys ? key : -1 - key, notSetValue)};
	    reversedSequence.has = function(key )
	      {return iterable.has(useKeys ? key : -1 - key)};
	    reversedSequence.includes = function(value ) {return iterable.includes(value)};
	    reversedSequence.cacheResult = cacheResultThrough;
	    reversedSequence.__iterate = function (fn, reverse) {var this$0 = this;
	      return iterable.__iterate(function(v, k)  {return fn(v, k, this$0)}, !reverse);
	    };
	    reversedSequence.__iterator =
	      function(type, reverse)  {return iterable.__iterator(type, !reverse)};
	    return reversedSequence;
	  }
	
	
	  function filterFactory(iterable, predicate, context, useKeys) {
	    var filterSequence = makeSequence(iterable);
	    if (useKeys) {
	      filterSequence.has = function(key ) {
	        var v = iterable.get(key, NOT_SET);
	        return v !== NOT_SET && !!predicate.call(context, v, key, iterable);
	      };
	      filterSequence.get = function(key, notSetValue)  {
	        var v = iterable.get(key, NOT_SET);
	        return v !== NOT_SET && predicate.call(context, v, key, iterable) ?
	          v : notSetValue;
	      };
	    }
	    filterSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
	      var iterations = 0;
	      iterable.__iterate(function(v, k, c)  {
	        if (predicate.call(context, v, k, c)) {
	          iterations++;
	          return fn(v, useKeys ? k : iterations - 1, this$0);
	        }
	      }, reverse);
	      return iterations;
	    };
	    filterSequence.__iteratorUncached = function (type, reverse) {
	      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
	      var iterations = 0;
	      return new Iterator(function()  {
	        while (true) {
	          var step = iterator.next();
	          if (step.done) {
	            return step;
	          }
	          var entry = step.value;
	          var key = entry[0];
	          var value = entry[1];
	          if (predicate.call(context, value, key, iterable)) {
	            return iteratorValue(type, useKeys ? key : iterations++, value, step);
	          }
	        }
	      });
	    }
	    return filterSequence;
	  }
	
	
	  function countByFactory(iterable, grouper, context) {
	    var groups = Map().asMutable();
	    iterable.__iterate(function(v, k)  {
	      groups.update(
	        grouper.call(context, v, k, iterable),
	        0,
	        function(a ) {return a + 1}
	      );
	    });
	    return groups.asImmutable();
	  }
	
	
	  function groupByFactory(iterable, grouper, context) {
	    var isKeyedIter = isKeyed(iterable);
	    var groups = (isOrdered(iterable) ? OrderedMap() : Map()).asMutable();
	    iterable.__iterate(function(v, k)  {
	      groups.update(
	        grouper.call(context, v, k, iterable),
	        function(a ) {return (a = a || [], a.push(isKeyedIter ? [k, v] : v), a)}
	      );
	    });
	    var coerce = iterableClass(iterable);
	    return groups.map(function(arr ) {return reify(iterable, coerce(arr))});
	  }
	
	
	  function sliceFactory(iterable, begin, end, useKeys) {
	    var originalSize = iterable.size;
	
	    // Sanitize begin & end using this shorthand for ToInt32(argument)
	    // http://www.ecma-international.org/ecma-262/6.0/#sec-toint32
	    if (begin !== undefined) {
	      begin = begin | 0;
	    }
	    if (end !== undefined) {
	      end = end | 0;
	    }
	
	    if (wholeSlice(begin, end, originalSize)) {
	      return iterable;
	    }
	
	    var resolvedBegin = resolveBegin(begin, originalSize);
	    var resolvedEnd = resolveEnd(end, originalSize);
	
	    // begin or end will be NaN if they were provided as negative numbers and
	    // this iterable's size is unknown. In that case, cache first so there is
	    // a known size and these do not resolve to NaN.
	    if (resolvedBegin !== resolvedBegin || resolvedEnd !== resolvedEnd) {
	      return sliceFactory(iterable.toSeq().cacheResult(), begin, end, useKeys);
	    }
	
	    // Note: resolvedEnd is undefined when the original sequence's length is
	    // unknown and this slice did not supply an end and should contain all
	    // elements after resolvedBegin.
	    // In that case, resolvedSize will be NaN and sliceSize will remain undefined.
	    var resolvedSize = resolvedEnd - resolvedBegin;
	    var sliceSize;
	    if (resolvedSize === resolvedSize) {
	      sliceSize = resolvedSize < 0 ? 0 : resolvedSize;
	    }
	
	    var sliceSeq = makeSequence(iterable);
	
	    // If iterable.size is undefined, the size of the realized sliceSeq is
	    // unknown at this point unless the number of items to slice is 0
	    sliceSeq.size = sliceSize === 0 ? sliceSize : iterable.size && sliceSize || undefined;
	
	    if (!useKeys && isSeq(iterable) && sliceSize >= 0) {
	      sliceSeq.get = function (index, notSetValue) {
	        index = wrapIndex(this, index);
	        return index >= 0 && index < sliceSize ?
	          iterable.get(index + resolvedBegin, notSetValue) :
	          notSetValue;
	      }
	    }
	
	    sliceSeq.__iterateUncached = function(fn, reverse) {var this$0 = this;
	      if (sliceSize === 0) {
	        return 0;
	      }
	      if (reverse) {
	        return this.cacheResult().__iterate(fn, reverse);
	      }
	      var skipped = 0;
	      var isSkipping = true;
	      var iterations = 0;
	      iterable.__iterate(function(v, k)  {
	        if (!(isSkipping && (isSkipping = skipped++ < resolvedBegin))) {
	          iterations++;
	          return fn(v, useKeys ? k : iterations - 1, this$0) !== false &&
	                 iterations !== sliceSize;
	        }
	      });
	      return iterations;
	    };
	
	    sliceSeq.__iteratorUncached = function(type, reverse) {
	      if (sliceSize !== 0 && reverse) {
	        return this.cacheResult().__iterator(type, reverse);
	      }
	      // Don't bother instantiating parent iterator if taking 0.
	      var iterator = sliceSize !== 0 && iterable.__iterator(type, reverse);
	      var skipped = 0;
	      var iterations = 0;
	      return new Iterator(function()  {
	        while (skipped++ < resolvedBegin) {
	          iterator.next();
	        }
	        if (++iterations > sliceSize) {
	          return iteratorDone();
	        }
	        var step = iterator.next();
	        if (useKeys || type === ITERATE_VALUES) {
	          return step;
	        } else if (type === ITERATE_KEYS) {
	          return iteratorValue(type, iterations - 1, undefined, step);
	        } else {
	          return iteratorValue(type, iterations - 1, step.value[1], step);
	        }
	      });
	    }
	
	    return sliceSeq;
	  }
	
	
	  function takeWhileFactory(iterable, predicate, context) {
	    var takeSequence = makeSequence(iterable);
	    takeSequence.__iterateUncached = function(fn, reverse) {var this$0 = this;
	      if (reverse) {
	        return this.cacheResult().__iterate(fn, reverse);
	      }
	      var iterations = 0;
	      iterable.__iterate(function(v, k, c) 
	        {return predicate.call(context, v, k, c) && ++iterations && fn(v, k, this$0)}
	      );
	      return iterations;
	    };
	    takeSequence.__iteratorUncached = function(type, reverse) {var this$0 = this;
	      if (reverse) {
	        return this.cacheResult().__iterator(type, reverse);
	      }
	      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
	      var iterating = true;
	      return new Iterator(function()  {
	        if (!iterating) {
	          return iteratorDone();
	        }
	        var step = iterator.next();
	        if (step.done) {
	          return step;
	        }
	        var entry = step.value;
	        var k = entry[0];
	        var v = entry[1];
	        if (!predicate.call(context, v, k, this$0)) {
	          iterating = false;
	          return iteratorDone();
	        }
	        return type === ITERATE_ENTRIES ? step :
	          iteratorValue(type, k, v, step);
	      });
	    };
	    return takeSequence;
	  }
	
	
	  function skipWhileFactory(iterable, predicate, context, useKeys) {
	    var skipSequence = makeSequence(iterable);
	    skipSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
	      if (reverse) {
	        return this.cacheResult().__iterate(fn, reverse);
	      }
	      var isSkipping = true;
	      var iterations = 0;
	      iterable.__iterate(function(v, k, c)  {
	        if (!(isSkipping && (isSkipping = predicate.call(context, v, k, c)))) {
	          iterations++;
	          return fn(v, useKeys ? k : iterations - 1, this$0);
	        }
	      });
	      return iterations;
	    };
	    skipSequence.__iteratorUncached = function(type, reverse) {var this$0 = this;
	      if (reverse) {
	        return this.cacheResult().__iterator(type, reverse);
	      }
	      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
	      var skipping = true;
	      var iterations = 0;
	      return new Iterator(function()  {
	        var step, k, v;
	        do {
	          step = iterator.next();
	          if (step.done) {
	            if (useKeys || type === ITERATE_VALUES) {
	              return step;
	            } else if (type === ITERATE_KEYS) {
	              return iteratorValue(type, iterations++, undefined, step);
	            } else {
	              return iteratorValue(type, iterations++, step.value[1], step);
	            }
	          }
	          var entry = step.value;
	          k = entry[0];
	          v = entry[1];
	          skipping && (skipping = predicate.call(context, v, k, this$0));
	        } while (skipping);
	        return type === ITERATE_ENTRIES ? step :
	          iteratorValue(type, k, v, step);
	      });
	    };
	    return skipSequence;
	  }
	
	
	  function concatFactory(iterable, values) {
	    var isKeyedIterable = isKeyed(iterable);
	    var iters = [iterable].concat(values).map(function(v ) {
	      if (!isIterable(v)) {
	        v = isKeyedIterable ?
	          keyedSeqFromValue(v) :
	          indexedSeqFromValue(Array.isArray(v) ? v : [v]);
	      } else if (isKeyedIterable) {
	        v = KeyedIterable(v);
	      }
	      return v;
	    }).filter(function(v ) {return v.size !== 0});
	
	    if (iters.length === 0) {
	      return iterable;
	    }
	
	    if (iters.length === 1) {
	      var singleton = iters[0];
	      if (singleton === iterable ||
	          isKeyedIterable && isKeyed(singleton) ||
	          isIndexed(iterable) && isIndexed(singleton)) {
	        return singleton;
	      }
	    }
	
	    var concatSeq = new ArraySeq(iters);
	    if (isKeyedIterable) {
	      concatSeq = concatSeq.toKeyedSeq();
	    } else if (!isIndexed(iterable)) {
	      concatSeq = concatSeq.toSetSeq();
	    }
	    concatSeq = concatSeq.flatten(true);
	    concatSeq.size = iters.reduce(
	      function(sum, seq)  {
	        if (sum !== undefined) {
	          var size = seq.size;
	          if (size !== undefined) {
	            return sum + size;
	          }
	        }
	      },
	      0
	    );
	    return concatSeq;
	  }
	
	
	  function flattenFactory(iterable, depth, useKeys) {
	    var flatSequence = makeSequence(iterable);
	    flatSequence.__iterateUncached = function(fn, reverse) {
	      var iterations = 0;
	      var stopped = false;
	      function flatDeep(iter, currentDepth) {var this$0 = this;
	        iter.__iterate(function(v, k)  {
	          if ((!depth || currentDepth < depth) && isIterable(v)) {
	            flatDeep(v, currentDepth + 1);
	          } else if (fn(v, useKeys ? k : iterations++, this$0) === false) {
	            stopped = true;
	          }
	          return !stopped;
	        }, reverse);
	      }
	      flatDeep(iterable, 0);
	      return iterations;
	    }
	    flatSequence.__iteratorUncached = function(type, reverse) {
	      var iterator = iterable.__iterator(type, reverse);
	      var stack = [];
	      var iterations = 0;
	      return new Iterator(function()  {
	        while (iterator) {
	          var step = iterator.next();
	          if (step.done !== false) {
	            iterator = stack.pop();
	            continue;
	          }
	          var v = step.value;
	          if (type === ITERATE_ENTRIES) {
	            v = v[1];
	          }
	          if ((!depth || stack.length < depth) && isIterable(v)) {
	            stack.push(iterator);
	            iterator = v.__iterator(type, reverse);
	          } else {
	            return useKeys ? step : iteratorValue(type, iterations++, v, step);
	          }
	        }
	        return iteratorDone();
	      });
	    }
	    return flatSequence;
	  }
	
	
	  function flatMapFactory(iterable, mapper, context) {
	    var coerce = iterableClass(iterable);
	    return iterable.toSeq().map(
	      function(v, k)  {return coerce(mapper.call(context, v, k, iterable))}
	    ).flatten(true);
	  }
	
	
	  function interposeFactory(iterable, separator) {
	    var interposedSequence = makeSequence(iterable);
	    interposedSequence.size = iterable.size && iterable.size * 2 -1;
	    interposedSequence.__iterateUncached = function(fn, reverse) {var this$0 = this;
	      var iterations = 0;
	      iterable.__iterate(function(v, k) 
	        {return (!iterations || fn(separator, iterations++, this$0) !== false) &&
	        fn(v, iterations++, this$0) !== false},
	        reverse
	      );
	      return iterations;
	    };
	    interposedSequence.__iteratorUncached = function(type, reverse) {
	      var iterator = iterable.__iterator(ITERATE_VALUES, reverse);
	      var iterations = 0;
	      var step;
	      return new Iterator(function()  {
	        if (!step || iterations % 2) {
	          step = iterator.next();
	          if (step.done) {
	            return step;
	          }
	        }
	        return iterations % 2 ?
	          iteratorValue(type, iterations++, separator) :
	          iteratorValue(type, iterations++, step.value, step);
	      });
	    };
	    return interposedSequence;
	  }
	
	
	  function sortFactory(iterable, comparator, mapper) {
	    if (!comparator) {
	      comparator = defaultComparator;
	    }
	    var isKeyedIterable = isKeyed(iterable);
	    var index = 0;
	    var entries = iterable.toSeq().map(
	      function(v, k)  {return [k, v, index++, mapper ? mapper(v, k, iterable) : v]}
	    ).toArray();
	    entries.sort(function(a, b)  {return comparator(a[3], b[3]) || a[2] - b[2]}).forEach(
	      isKeyedIterable ?
	      function(v, i)  { entries[i].length = 2; } :
	      function(v, i)  { entries[i] = v[1]; }
	    );
	    return isKeyedIterable ? KeyedSeq(entries) :
	      isIndexed(iterable) ? IndexedSeq(entries) :
	      SetSeq(entries);
	  }
	
	
	  function maxFactory(iterable, comparator, mapper) {
	    if (!comparator) {
	      comparator = defaultComparator;
	    }
	    if (mapper) {
	      var entry = iterable.toSeq()
	        .map(function(v, k)  {return [v, mapper(v, k, iterable)]})
	        .reduce(function(a, b)  {return maxCompare(comparator, a[1], b[1]) ? b : a});
	      return entry && entry[0];
	    } else {
	      return iterable.reduce(function(a, b)  {return maxCompare(comparator, a, b) ? b : a});
	    }
	  }
	
	  function maxCompare(comparator, a, b) {
	    var comp = comparator(b, a);
	    // b is considered the new max if the comparator declares them equal, but
	    // they are not equal and b is in fact a nullish value.
	    return (comp === 0 && b !== a && (b === undefined || b === null || b !== b)) || comp > 0;
	  }
	
	
	  function zipWithFactory(keyIter, zipper, iters) {
	    var zipSequence = makeSequence(keyIter);
	    zipSequence.size = new ArraySeq(iters).map(function(i ) {return i.size}).min();
	    // Note: this a generic base implementation of __iterate in terms of
	    // __iterator which may be more generically useful in the future.
	    zipSequence.__iterate = function(fn, reverse) {
	      /* generic:
	      var iterator = this.__iterator(ITERATE_ENTRIES, reverse);
	      var step;
	      var iterations = 0;
	      while (!(step = iterator.next()).done) {
	        iterations++;
	        if (fn(step.value[1], step.value[0], this) === false) {
	          break;
	        }
	      }
	      return iterations;
	      */
	      // indexed:
	      var iterator = this.__iterator(ITERATE_VALUES, reverse);
	      var step;
	      var iterations = 0;
	      while (!(step = iterator.next()).done) {
	        if (fn(step.value, iterations++, this) === false) {
	          break;
	        }
	      }
	      return iterations;
	    };
	    zipSequence.__iteratorUncached = function(type, reverse) {
	      var iterators = iters.map(function(i )
	        {return (i = Iterable(i), getIterator(reverse ? i.reverse() : i))}
	      );
	      var iterations = 0;
	      var isDone = false;
	      return new Iterator(function()  {
	        var steps;
	        if (!isDone) {
	          steps = iterators.map(function(i ) {return i.next()});
	          isDone = steps.some(function(s ) {return s.done});
	        }
	        if (isDone) {
	          return iteratorDone();
	        }
	        return iteratorValue(
	          type,
	          iterations++,
	          zipper.apply(null, steps.map(function(s ) {return s.value}))
	        );
	      });
	    };
	    return zipSequence
	  }
	
	
	  // #pragma Helper Functions
	
	  function reify(iter, seq) {
	    return isSeq(iter) ? seq : iter.constructor(seq);
	  }
	
	  function validateEntry(entry) {
	    if (entry !== Object(entry)) {
	      throw new TypeError('Expected [K, V] tuple: ' + entry);
	    }
	  }
	
	  function resolveSize(iter) {
	    assertNotInfinite(iter.size);
	    return ensureSize(iter);
	  }
	
	  function iterableClass(iterable) {
	    return isKeyed(iterable) ? KeyedIterable :
	      isIndexed(iterable) ? IndexedIterable :
	      SetIterable;
	  }
	
	  function makeSequence(iterable) {
	    return Object.create(
	      (
	        isKeyed(iterable) ? KeyedSeq :
	        isIndexed(iterable) ? IndexedSeq :
	        SetSeq
	      ).prototype
	    );
	  }
	
	  function cacheResultThrough() {
	    if (this._iter.cacheResult) {
	      this._iter.cacheResult();
	      this.size = this._iter.size;
	      return this;
	    } else {
	      return Seq.prototype.cacheResult.call(this);
	    }
	  }
	
	  function defaultComparator(a, b) {
	    return a > b ? 1 : a < b ? -1 : 0;
	  }
	
	  function forceIterator(keyPath) {
	    var iter = getIterator(keyPath);
	    if (!iter) {
	      // Array might not be iterable in this environment, so we need a fallback
	      // to our wrapped type.
	      if (!isArrayLike(keyPath)) {
	        throw new TypeError('Expected iterable or array-like: ' + keyPath);
	      }
	      iter = getIterator(Iterable(keyPath));
	    }
	    return iter;
	  }
	
	  createClass(Record, KeyedCollection);
	
	    function Record(defaultValues, name) {
	      var hasInitialized;
	
	      var RecordType = function Record(values) {
	        if (values instanceof RecordType) {
	          return values;
	        }
	        if (!(this instanceof RecordType)) {
	          return new RecordType(values);
	        }
	        if (!hasInitialized) {
	          hasInitialized = true;
	          var keys = Object.keys(defaultValues);
	          setProps(RecordTypePrototype, keys);
	          RecordTypePrototype.size = keys.length;
	          RecordTypePrototype._name = name;
	          RecordTypePrototype._keys = keys;
	          RecordTypePrototype._defaultValues = defaultValues;
	        }
	        this._map = Map(values);
	      };
	
	      var RecordTypePrototype = RecordType.prototype = Object.create(RecordPrototype);
	      RecordTypePrototype.constructor = RecordType;
	
	      return RecordType;
	    }
	
	    Record.prototype.toString = function() {
	      return this.__toString(recordName(this) + ' {', '}');
	    };
	
	    // @pragma Access
	
	    Record.prototype.has = function(k) {
	      return this._defaultValues.hasOwnProperty(k);
	    };
	
	    Record.prototype.get = function(k, notSetValue) {
	      if (!this.has(k)) {
	        return notSetValue;
	      }
	      var defaultVal = this._defaultValues[k];
	      return this._map ? this._map.get(k, defaultVal) : defaultVal;
	    };
	
	    // @pragma Modification
	
	    Record.prototype.clear = function() {
	      if (this.__ownerID) {
	        this._map && this._map.clear();
	        return this;
	      }
	      var RecordType = this.constructor;
	      return RecordType._empty || (RecordType._empty = makeRecord(this, emptyMap()));
	    };
	
	    Record.prototype.set = function(k, v) {
	      if (!this.has(k)) {
	        throw new Error('Cannot set unknown key "' + k + '" on ' + recordName(this));
	      }
	      var newMap = this._map && this._map.set(k, v);
	      if (this.__ownerID || newMap === this._map) {
	        return this;
	      }
	      return makeRecord(this, newMap);
	    };
	
	    Record.prototype.remove = function(k) {
	      if (!this.has(k)) {
	        return this;
	      }
	      var newMap = this._map && this._map.remove(k);
	      if (this.__ownerID || newMap === this._map) {
	        return this;
	      }
	      return makeRecord(this, newMap);
	    };
	
	    Record.prototype.wasAltered = function() {
	      return this._map.wasAltered();
	    };
	
	    Record.prototype.__iterator = function(type, reverse) {var this$0 = this;
	      return KeyedIterable(this._defaultValues).map(function(_, k)  {return this$0.get(k)}).__iterator(type, reverse);
	    };
	
	    Record.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      return KeyedIterable(this._defaultValues).map(function(_, k)  {return this$0.get(k)}).__iterate(fn, reverse);
	    };
	
	    Record.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      var newMap = this._map && this._map.__ensureOwner(ownerID);
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        this._map = newMap;
	        return this;
	      }
	      return makeRecord(this, newMap, ownerID);
	    };
	
	
	  var RecordPrototype = Record.prototype;
	  RecordPrototype[DELETE] = RecordPrototype.remove;
	  RecordPrototype.deleteIn =
	  RecordPrototype.removeIn = MapPrototype.removeIn;
	  RecordPrototype.merge = MapPrototype.merge;
	  RecordPrototype.mergeWith = MapPrototype.mergeWith;
	  RecordPrototype.mergeIn = MapPrototype.mergeIn;
	  RecordPrototype.mergeDeep = MapPrototype.mergeDeep;
	  RecordPrototype.mergeDeepWith = MapPrototype.mergeDeepWith;
	  RecordPrototype.mergeDeepIn = MapPrototype.mergeDeepIn;
	  RecordPrototype.setIn = MapPrototype.setIn;
	  RecordPrototype.update = MapPrototype.update;
	  RecordPrototype.updateIn = MapPrototype.updateIn;
	  RecordPrototype.withMutations = MapPrototype.withMutations;
	  RecordPrototype.asMutable = MapPrototype.asMutable;
	  RecordPrototype.asImmutable = MapPrototype.asImmutable;
	
	
	  function makeRecord(likeRecord, map, ownerID) {
	    var record = Object.create(Object.getPrototypeOf(likeRecord));
	    record._map = map;
	    record.__ownerID = ownerID;
	    return record;
	  }
	
	  function recordName(record) {
	    return record._name || record.constructor.name || 'Record';
	  }
	
	  function setProps(prototype, names) {
	    try {
	      names.forEach(setProp.bind(undefined, prototype));
	    } catch (error) {
	      // Object.defineProperty failed. Probably IE8.
	    }
	  }
	
	  function setProp(prototype, name) {
	    Object.defineProperty(prototype, name, {
	      get: function() {
	        return this.get(name);
	      },
	      set: function(value) {
	        invariant(this.__ownerID, 'Cannot set on an immutable record.');
	        this.set(name, value);
	      }
	    });
	  }
	
	  createClass(Set, SetCollection);
	
	    // @pragma Construction
	
	    function Set(value) {
	      return value === null || value === undefined ? emptySet() :
	        isSet(value) && !isOrdered(value) ? value :
	        emptySet().withMutations(function(set ) {
	          var iter = SetIterable(value);
	          assertNotInfinite(iter.size);
	          iter.forEach(function(v ) {return set.add(v)});
	        });
	    }
	
	    Set.of = function(/*...values*/) {
	      return this(arguments);
	    };
	
	    Set.fromKeys = function(value) {
	      return this(KeyedIterable(value).keySeq());
	    };
	
	    Set.prototype.toString = function() {
	      return this.__toString('Set {', '}');
	    };
	
	    // @pragma Access
	
	    Set.prototype.has = function(value) {
	      return this._map.has(value);
	    };
	
	    // @pragma Modification
	
	    Set.prototype.add = function(value) {
	      return updateSet(this, this._map.set(value, true));
	    };
	
	    Set.prototype.remove = function(value) {
	      return updateSet(this, this._map.remove(value));
	    };
	
	    Set.prototype.clear = function() {
	      return updateSet(this, this._map.clear());
	    };
	
	    // @pragma Composition
	
	    Set.prototype.union = function() {var iters = SLICE$0.call(arguments, 0);
	      iters = iters.filter(function(x ) {return x.size !== 0});
	      if (iters.length === 0) {
	        return this;
	      }
	      if (this.size === 0 && !this.__ownerID && iters.length === 1) {
	        return this.constructor(iters[0]);
	      }
	      return this.withMutations(function(set ) {
	        for (var ii = 0; ii < iters.length; ii++) {
	          SetIterable(iters[ii]).forEach(function(value ) {return set.add(value)});
	        }
	      });
	    };
	
	    Set.prototype.intersect = function() {var iters = SLICE$0.call(arguments, 0);
	      if (iters.length === 0) {
	        return this;
	      }
	      iters = iters.map(function(iter ) {return SetIterable(iter)});
	      var originalSet = this;
	      return this.withMutations(function(set ) {
	        originalSet.forEach(function(value ) {
	          if (!iters.every(function(iter ) {return iter.includes(value)})) {
	            set.remove(value);
	          }
	        });
	      });
	    };
	
	    Set.prototype.subtract = function() {var iters = SLICE$0.call(arguments, 0);
	      if (iters.length === 0) {
	        return this;
	      }
	      iters = iters.map(function(iter ) {return SetIterable(iter)});
	      var originalSet = this;
	      return this.withMutations(function(set ) {
	        originalSet.forEach(function(value ) {
	          if (iters.some(function(iter ) {return iter.includes(value)})) {
	            set.remove(value);
	          }
	        });
	      });
	    };
	
	    Set.prototype.merge = function() {
	      return this.union.apply(this, arguments);
	    };
	
	    Set.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
	      return this.union.apply(this, iters);
	    };
	
	    Set.prototype.sort = function(comparator) {
	      // Late binding
	      return OrderedSet(sortFactory(this, comparator));
	    };
	
	    Set.prototype.sortBy = function(mapper, comparator) {
	      // Late binding
	      return OrderedSet(sortFactory(this, comparator, mapper));
	    };
	
	    Set.prototype.wasAltered = function() {
	      return this._map.wasAltered();
	    };
	
	    Set.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      return this._map.__iterate(function(_, k)  {return fn(k, k, this$0)}, reverse);
	    };
	
	    Set.prototype.__iterator = function(type, reverse) {
	      return this._map.map(function(_, k)  {return k}).__iterator(type, reverse);
	    };
	
	    Set.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      var newMap = this._map.__ensureOwner(ownerID);
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        this._map = newMap;
	        return this;
	      }
	      return this.__make(newMap, ownerID);
	    };
	
	
	  function isSet(maybeSet) {
	    return !!(maybeSet && maybeSet[IS_SET_SENTINEL]);
	  }
	
	  Set.isSet = isSet;
	
	  var IS_SET_SENTINEL = '@@__IMMUTABLE_SET__@@';
	
	  var SetPrototype = Set.prototype;
	  SetPrototype[IS_SET_SENTINEL] = true;
	  SetPrototype[DELETE] = SetPrototype.remove;
	  SetPrototype.mergeDeep = SetPrototype.merge;
	  SetPrototype.mergeDeepWith = SetPrototype.mergeWith;
	  SetPrototype.withMutations = MapPrototype.withMutations;
	  SetPrototype.asMutable = MapPrototype.asMutable;
	  SetPrototype.asImmutable = MapPrototype.asImmutable;
	
	  SetPrototype.__empty = emptySet;
	  SetPrototype.__make = makeSet;
	
	  function updateSet(set, newMap) {
	    if (set.__ownerID) {
	      set.size = newMap.size;
	      set._map = newMap;
	      return set;
	    }
	    return newMap === set._map ? set :
	      newMap.size === 0 ? set.__empty() :
	      set.__make(newMap);
	  }
	
	  function makeSet(map, ownerID) {
	    var set = Object.create(SetPrototype);
	    set.size = map ? map.size : 0;
	    set._map = map;
	    set.__ownerID = ownerID;
	    return set;
	  }
	
	  var EMPTY_SET;
	  function emptySet() {
	    return EMPTY_SET || (EMPTY_SET = makeSet(emptyMap()));
	  }
	
	  createClass(OrderedSet, Set);
	
	    // @pragma Construction
	
	    function OrderedSet(value) {
	      return value === null || value === undefined ? emptyOrderedSet() :
	        isOrderedSet(value) ? value :
	        emptyOrderedSet().withMutations(function(set ) {
	          var iter = SetIterable(value);
	          assertNotInfinite(iter.size);
	          iter.forEach(function(v ) {return set.add(v)});
	        });
	    }
	
	    OrderedSet.of = function(/*...values*/) {
	      return this(arguments);
	    };
	
	    OrderedSet.fromKeys = function(value) {
	      return this(KeyedIterable(value).keySeq());
	    };
	
	    OrderedSet.prototype.toString = function() {
	      return this.__toString('OrderedSet {', '}');
	    };
	
	
	  function isOrderedSet(maybeOrderedSet) {
	    return isSet(maybeOrderedSet) && isOrdered(maybeOrderedSet);
	  }
	
	  OrderedSet.isOrderedSet = isOrderedSet;
	
	  var OrderedSetPrototype = OrderedSet.prototype;
	  OrderedSetPrototype[IS_ORDERED_SENTINEL] = true;
	
	  OrderedSetPrototype.__empty = emptyOrderedSet;
	  OrderedSetPrototype.__make = makeOrderedSet;
	
	  function makeOrderedSet(map, ownerID) {
	    var set = Object.create(OrderedSetPrototype);
	    set.size = map ? map.size : 0;
	    set._map = map;
	    set.__ownerID = ownerID;
	    return set;
	  }
	
	  var EMPTY_ORDERED_SET;
	  function emptyOrderedSet() {
	    return EMPTY_ORDERED_SET || (EMPTY_ORDERED_SET = makeOrderedSet(emptyOrderedMap()));
	  }
	
	  createClass(Stack, IndexedCollection);
	
	    // @pragma Construction
	
	    function Stack(value) {
	      return value === null || value === undefined ? emptyStack() :
	        isStack(value) ? value :
	        emptyStack().unshiftAll(value);
	    }
	
	    Stack.of = function(/*...values*/) {
	      return this(arguments);
	    };
	
	    Stack.prototype.toString = function() {
	      return this.__toString('Stack [', ']');
	    };
	
	    // @pragma Access
	
	    Stack.prototype.get = function(index, notSetValue) {
	      var head = this._head;
	      index = wrapIndex(this, index);
	      while (head && index--) {
	        head = head.next;
	      }
	      return head ? head.value : notSetValue;
	    };
	
	    Stack.prototype.peek = function() {
	      return this._head && this._head.value;
	    };
	
	    // @pragma Modification
	
	    Stack.prototype.push = function(/*...values*/) {
	      if (arguments.length === 0) {
	        return this;
	      }
	      var newSize = this.size + arguments.length;
	      var head = this._head;
	      for (var ii = arguments.length - 1; ii >= 0; ii--) {
	        head = {
	          value: arguments[ii],
	          next: head
	        };
	      }
	      if (this.__ownerID) {
	        this.size = newSize;
	        this._head = head;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return makeStack(newSize, head);
	    };
	
	    Stack.prototype.pushAll = function(iter) {
	      iter = IndexedIterable(iter);
	      if (iter.size === 0) {
	        return this;
	      }
	      assertNotInfinite(iter.size);
	      var newSize = this.size;
	      var head = this._head;
	      iter.reverse().forEach(function(value ) {
	        newSize++;
	        head = {
	          value: value,
	          next: head
	        };
	      });
	      if (this.__ownerID) {
	        this.size = newSize;
	        this._head = head;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return makeStack(newSize, head);
	    };
	
	    Stack.prototype.pop = function() {
	      return this.slice(1);
	    };
	
	    Stack.prototype.unshift = function(/*...values*/) {
	      return this.push.apply(this, arguments);
	    };
	
	    Stack.prototype.unshiftAll = function(iter) {
	      return this.pushAll(iter);
	    };
	
	    Stack.prototype.shift = function() {
	      return this.pop.apply(this, arguments);
	    };
	
	    Stack.prototype.clear = function() {
	      if (this.size === 0) {
	        return this;
	      }
	      if (this.__ownerID) {
	        this.size = 0;
	        this._head = undefined;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return emptyStack();
	    };
	
	    Stack.prototype.slice = function(begin, end) {
	      if (wholeSlice(begin, end, this.size)) {
	        return this;
	      }
	      var resolvedBegin = resolveBegin(begin, this.size);
	      var resolvedEnd = resolveEnd(end, this.size);
	      if (resolvedEnd !== this.size) {
	        // super.slice(begin, end);
	        return IndexedCollection.prototype.slice.call(this, begin, end);
	      }
	      var newSize = this.size - resolvedBegin;
	      var head = this._head;
	      while (resolvedBegin--) {
	        head = head.next;
	      }
	      if (this.__ownerID) {
	        this.size = newSize;
	        this._head = head;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return makeStack(newSize, head);
	    };
	
	    // @pragma Mutability
	
	    Stack.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        this.__altered = false;
	        return this;
	      }
	      return makeStack(this.size, this._head, ownerID, this.__hash);
	    };
	
	    // @pragma Iteration
	
	    Stack.prototype.__iterate = function(fn, reverse) {
	      if (reverse) {
	        return this.reverse().__iterate(fn);
	      }
	      var iterations = 0;
	      var node = this._head;
	      while (node) {
	        if (fn(node.value, iterations++, this) === false) {
	          break;
	        }
	        node = node.next;
	      }
	      return iterations;
	    };
	
	    Stack.prototype.__iterator = function(type, reverse) {
	      if (reverse) {
	        return this.reverse().__iterator(type);
	      }
	      var iterations = 0;
	      var node = this._head;
	      return new Iterator(function()  {
	        if (node) {
	          var value = node.value;
	          node = node.next;
	          return iteratorValue(type, iterations++, value);
	        }
	        return iteratorDone();
	      });
	    };
	
	
	  function isStack(maybeStack) {
	    return !!(maybeStack && maybeStack[IS_STACK_SENTINEL]);
	  }
	
	  Stack.isStack = isStack;
	
	  var IS_STACK_SENTINEL = '@@__IMMUTABLE_STACK__@@';
	
	  var StackPrototype = Stack.prototype;
	  StackPrototype[IS_STACK_SENTINEL] = true;
	  StackPrototype.withMutations = MapPrototype.withMutations;
	  StackPrototype.asMutable = MapPrototype.asMutable;
	  StackPrototype.asImmutable = MapPrototype.asImmutable;
	  StackPrototype.wasAltered = MapPrototype.wasAltered;
	
	
	  function makeStack(size, head, ownerID, hash) {
	    var map = Object.create(StackPrototype);
	    map.size = size;
	    map._head = head;
	    map.__ownerID = ownerID;
	    map.__hash = hash;
	    map.__altered = false;
	    return map;
	  }
	
	  var EMPTY_STACK;
	  function emptyStack() {
	    return EMPTY_STACK || (EMPTY_STACK = makeStack(0));
	  }
	
	  /**
	   * Contributes additional methods to a constructor
	   */
	  function mixin(ctor, methods) {
	    var keyCopier = function(key ) { ctor.prototype[key] = methods[key]; };
	    Object.keys(methods).forEach(keyCopier);
	    Object.getOwnPropertySymbols &&
	      Object.getOwnPropertySymbols(methods).forEach(keyCopier);
	    return ctor;
	  }
	
	  Iterable.Iterator = Iterator;
	
	  mixin(Iterable, {
	
	    // ### Conversion to other types
	
	    toArray: function() {
	      assertNotInfinite(this.size);
	      var array = new Array(this.size || 0);
	      this.valueSeq().__iterate(function(v, i)  { array[i] = v; });
	      return array;
	    },
	
	    toIndexedSeq: function() {
	      return new ToIndexedSequence(this);
	    },
	
	    toJS: function() {
	      return this.toSeq().map(
	        function(value ) {return value && typeof value.toJS === 'function' ? value.toJS() : value}
	      ).__toJS();
	    },
	
	    toJSON: function() {
	      return this.toSeq().map(
	        function(value ) {return value && typeof value.toJSON === 'function' ? value.toJSON() : value}
	      ).__toJS();
	    },
	
	    toKeyedSeq: function() {
	      return new ToKeyedSequence(this, true);
	    },
	
	    toMap: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return Map(this.toKeyedSeq());
	    },
	
	    toObject: function() {
	      assertNotInfinite(this.size);
	      var object = {};
	      this.__iterate(function(v, k)  { object[k] = v; });
	      return object;
	    },
	
	    toOrderedMap: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return OrderedMap(this.toKeyedSeq());
	    },
	
	    toOrderedSet: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return OrderedSet(isKeyed(this) ? this.valueSeq() : this);
	    },
	
	    toSet: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return Set(isKeyed(this) ? this.valueSeq() : this);
	    },
	
	    toSetSeq: function() {
	      return new ToSetSequence(this);
	    },
	
	    toSeq: function() {
	      return isIndexed(this) ? this.toIndexedSeq() :
	        isKeyed(this) ? this.toKeyedSeq() :
	        this.toSetSeq();
	    },
	
	    toStack: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return Stack(isKeyed(this) ? this.valueSeq() : this);
	    },
	
	    toList: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return List(isKeyed(this) ? this.valueSeq() : this);
	    },
	
	
	    // ### Common JavaScript methods and properties
	
	    toString: function() {
	      return '[Iterable]';
	    },
	
	    __toString: function(head, tail) {
	      if (this.size === 0) {
	        return head + tail;
	      }
	      return head + ' ' + this.toSeq().map(this.__toStringMapper).join(', ') + ' ' + tail;
	    },
	
	
	    // ### ES6 Collection methods (ES6 Array and Map)
	
	    concat: function() {var values = SLICE$0.call(arguments, 0);
	      return reify(this, concatFactory(this, values));
	    },
	
	    includes: function(searchValue) {
	      return this.some(function(value ) {return is(value, searchValue)});
	    },
	
	    entries: function() {
	      return this.__iterator(ITERATE_ENTRIES);
	    },
	
	    every: function(predicate, context) {
	      assertNotInfinite(this.size);
	      var returnValue = true;
	      this.__iterate(function(v, k, c)  {
	        if (!predicate.call(context, v, k, c)) {
	          returnValue = false;
	          return false;
	        }
	      });
	      return returnValue;
	    },
	
	    filter: function(predicate, context) {
	      return reify(this, filterFactory(this, predicate, context, true));
	    },
	
	    find: function(predicate, context, notSetValue) {
	      var entry = this.findEntry(predicate, context);
	      return entry ? entry[1] : notSetValue;
	    },
	
	    findEntry: function(predicate, context) {
	      var found;
	      this.__iterate(function(v, k, c)  {
	        if (predicate.call(context, v, k, c)) {
	          found = [k, v];
	          return false;
	        }
	      });
	      return found;
	    },
	
	    findLastEntry: function(predicate, context) {
	      return this.toSeq().reverse().findEntry(predicate, context);
	    },
	
	    forEach: function(sideEffect, context) {
	      assertNotInfinite(this.size);
	      return this.__iterate(context ? sideEffect.bind(context) : sideEffect);
	    },
	
	    join: function(separator) {
	      assertNotInfinite(this.size);
	      separator = separator !== undefined ? '' + separator : ',';
	      var joined = '';
	      var isFirst = true;
	      this.__iterate(function(v ) {
	        isFirst ? (isFirst = false) : (joined += separator);
	        joined += v !== null && v !== undefined ? v.toString() : '';
	      });
	      return joined;
	    },
	
	    keys: function() {
	      return this.__iterator(ITERATE_KEYS);
	    },
	
	    map: function(mapper, context) {
	      return reify(this, mapFactory(this, mapper, context));
	    },
	
	    reduce: function(reducer, initialReduction, context) {
	      assertNotInfinite(this.size);
	      var reduction;
	      var useFirst;
	      if (arguments.length < 2) {
	        useFirst = true;
	      } else {
	        reduction = initialReduction;
	      }
	      this.__iterate(function(v, k, c)  {
	        if (useFirst) {
	          useFirst = false;
	          reduction = v;
	        } else {
	          reduction = reducer.call(context, reduction, v, k, c);
	        }
	      });
	      return reduction;
	    },
	
	    reduceRight: function(reducer, initialReduction, context) {
	      var reversed = this.toKeyedSeq().reverse();
	      return reversed.reduce.apply(reversed, arguments);
	    },
	
	    reverse: function() {
	      return reify(this, reverseFactory(this, true));
	    },
	
	    slice: function(begin, end) {
	      return reify(this, sliceFactory(this, begin, end, true));
	    },
	
	    some: function(predicate, context) {
	      return !this.every(not(predicate), context);
	    },
	
	    sort: function(comparator) {
	      return reify(this, sortFactory(this, comparator));
	    },
	
	    values: function() {
	      return this.__iterator(ITERATE_VALUES);
	    },
	
	
	    // ### More sequential methods
	
	    butLast: function() {
	      return this.slice(0, -1);
	    },
	
	    isEmpty: function() {
	      return this.size !== undefined ? this.size === 0 : !this.some(function()  {return true});
	    },
	
	    count: function(predicate, context) {
	      return ensureSize(
	        predicate ? this.toSeq().filter(predicate, context) : this
	      );
	    },
	
	    countBy: function(grouper, context) {
	      return countByFactory(this, grouper, context);
	    },
	
	    equals: function(other) {
	      return deepEqual(this, other);
	    },
	
	    entrySeq: function() {
	      var iterable = this;
	      if (iterable._cache) {
	        // We cache as an entries array, so we can just return the cache!
	        return new ArraySeq(iterable._cache);
	      }
	      var entriesSequence = iterable.toSeq().map(entryMapper).toIndexedSeq();
	      entriesSequence.fromEntrySeq = function()  {return iterable.toSeq()};
	      return entriesSequence;
	    },
	
	    filterNot: function(predicate, context) {
	      return this.filter(not(predicate), context);
	    },
	
	    findLast: function(predicate, context, notSetValue) {
	      return this.toKeyedSeq().reverse().find(predicate, context, notSetValue);
	    },
	
	    first: function() {
	      return this.find(returnTrue);
	    },
	
	    flatMap: function(mapper, context) {
	      return reify(this, flatMapFactory(this, mapper, context));
	    },
	
	    flatten: function(depth) {
	      return reify(this, flattenFactory(this, depth, true));
	    },
	
	    fromEntrySeq: function() {
	      return new FromEntriesSequence(this);
	    },
	
	    get: function(searchKey, notSetValue) {
	      return this.find(function(_, key)  {return is(key, searchKey)}, undefined, notSetValue);
	    },
	
	    getIn: function(searchKeyPath, notSetValue) {
	      var nested = this;
	      // Note: in an ES6 environment, we would prefer:
	      // for (var key of searchKeyPath) {
	      var iter = forceIterator(searchKeyPath);
	      var step;
	      while (!(step = iter.next()).done) {
	        var key = step.value;
	        nested = nested && nested.get ? nested.get(key, NOT_SET) : NOT_SET;
	        if (nested === NOT_SET) {
	          return notSetValue;
	        }
	      }
	      return nested;
	    },
	
	    groupBy: function(grouper, context) {
	      return groupByFactory(this, grouper, context);
	    },
	
	    has: function(searchKey) {
	      return this.get(searchKey, NOT_SET) !== NOT_SET;
	    },
	
	    hasIn: function(searchKeyPath) {
	      return this.getIn(searchKeyPath, NOT_SET) !== NOT_SET;
	    },
	
	    isSubset: function(iter) {
	      iter = typeof iter.includes === 'function' ? iter : Iterable(iter);
	      return this.every(function(value ) {return iter.includes(value)});
	    },
	
	    isSuperset: function(iter) {
	      iter = typeof iter.isSubset === 'function' ? iter : Iterable(iter);
	      return iter.isSubset(this);
	    },
	
	    keySeq: function() {
	      return this.toSeq().map(keyMapper).toIndexedSeq();
	    },
	
	    last: function() {
	      return this.toSeq().reverse().first();
	    },
	
	    max: function(comparator) {
	      return maxFactory(this, comparator);
	    },
	
	    maxBy: function(mapper, comparator) {
	      return maxFactory(this, comparator, mapper);
	    },
	
	    min: function(comparator) {
	      return maxFactory(this, comparator ? neg(comparator) : defaultNegComparator);
	    },
	
	    minBy: function(mapper, comparator) {
	      return maxFactory(this, comparator ? neg(comparator) : defaultNegComparator, mapper);
	    },
	
	    rest: function() {
	      return this.slice(1);
	    },
	
	    skip: function(amount) {
	      return this.slice(Math.max(0, amount));
	    },
	
	    skipLast: function(amount) {
	      return reify(this, this.toSeq().reverse().skip(amount).reverse());
	    },
	
	    skipWhile: function(predicate, context) {
	      return reify(this, skipWhileFactory(this, predicate, context, true));
	    },
	
	    skipUntil: function(predicate, context) {
	      return this.skipWhile(not(predicate), context);
	    },
	
	    sortBy: function(mapper, comparator) {
	      return reify(this, sortFactory(this, comparator, mapper));
	    },
	
	    take: function(amount) {
	      return this.slice(0, Math.max(0, amount));
	    },
	
	    takeLast: function(amount) {
	      return reify(this, this.toSeq().reverse().take(amount).reverse());
	    },
	
	    takeWhile: function(predicate, context) {
	      return reify(this, takeWhileFactory(this, predicate, context));
	    },
	
	    takeUntil: function(predicate, context) {
	      return this.takeWhile(not(predicate), context);
	    },
	
	    valueSeq: function() {
	      return this.toIndexedSeq();
	    },
	
	
	    // ### Hashable Object
	
	    hashCode: function() {
	      return this.__hash || (this.__hash = hashIterable(this));
	    }
	
	
	    // ### Internal
	
	    // abstract __iterate(fn, reverse)
	
	    // abstract __iterator(type, reverse)
	  });
	
	  // var IS_ITERABLE_SENTINEL = '@@__IMMUTABLE_ITERABLE__@@';
	  // var IS_KEYED_SENTINEL = '@@__IMMUTABLE_KEYED__@@';
	  // var IS_INDEXED_SENTINEL = '@@__IMMUTABLE_INDEXED__@@';
	  // var IS_ORDERED_SENTINEL = '@@__IMMUTABLE_ORDERED__@@';
	
	  var IterablePrototype = Iterable.prototype;
	  IterablePrototype[IS_ITERABLE_SENTINEL] = true;
	  IterablePrototype[ITERATOR_SYMBOL] = IterablePrototype.values;
	  IterablePrototype.__toJS = IterablePrototype.toArray;
	  IterablePrototype.__toStringMapper = quoteString;
	  IterablePrototype.inspect =
	  IterablePrototype.toSource = function() { return this.toString(); };
	  IterablePrototype.chain = IterablePrototype.flatMap;
	  IterablePrototype.contains = IterablePrototype.includes;
	
	  // Temporary warning about using length
	  (function () {
	    try {
	      Object.defineProperty(IterablePrototype, 'length', {
	        get: function () {
	          if (!Iterable.noLengthWarning) {
	            var stack;
	            try {
	              throw new Error();
	            } catch (error) {
	              stack = error.stack;
	            }
	            if (stack.indexOf('_wrapObject') === -1) {
	              console && console.warn && console.warn(
	                'iterable.length has been deprecated, '+
	                'use iterable.size or iterable.count(). '+
	                'This warning will become a silent error in a future version. ' +
	                stack
	              );
	              return this.size;
	            }
	          }
	        }
	      });
	    } catch (e) {}
	  })();
	
	
	
	  mixin(KeyedIterable, {
	
	    // ### More sequential methods
	
	    flip: function() {
	      return reify(this, flipFactory(this));
	    },
	
	    findKey: function(predicate, context) {
	      var entry = this.findEntry(predicate, context);
	      return entry && entry[0];
	    },
	
	    findLastKey: function(predicate, context) {
	      return this.toSeq().reverse().findKey(predicate, context);
	    },
	
	    keyOf: function(searchValue) {
	      return this.findKey(function(value ) {return is(value, searchValue)});
	    },
	
	    lastKeyOf: function(searchValue) {
	      return this.findLastKey(function(value ) {return is(value, searchValue)});
	    },
	
	    mapEntries: function(mapper, context) {var this$0 = this;
	      var iterations = 0;
	      return reify(this,
	        this.toSeq().map(
	          function(v, k)  {return mapper.call(context, [k, v], iterations++, this$0)}
	        ).fromEntrySeq()
	      );
	    },
	
	    mapKeys: function(mapper, context) {var this$0 = this;
	      return reify(this,
	        this.toSeq().flip().map(
	          function(k, v)  {return mapper.call(context, k, v, this$0)}
	        ).flip()
	      );
	    }
	
	  });
	
	  var KeyedIterablePrototype = KeyedIterable.prototype;
	  KeyedIterablePrototype[IS_KEYED_SENTINEL] = true;
	  KeyedIterablePrototype[ITERATOR_SYMBOL] = IterablePrototype.entries;
	  KeyedIterablePrototype.__toJS = IterablePrototype.toObject;
	  KeyedIterablePrototype.__toStringMapper = function(v, k)  {return JSON.stringify(k) + ': ' + quoteString(v)};
	
	
	
	  mixin(IndexedIterable, {
	
	    // ### Conversion to other types
	
	    toKeyedSeq: function() {
	      return new ToKeyedSequence(this, false);
	    },
	
	
	    // ### ES6 Collection methods (ES6 Array and Map)
	
	    filter: function(predicate, context) {
	      return reify(this, filterFactory(this, predicate, context, false));
	    },
	
	    findIndex: function(predicate, context) {
	      var entry = this.findEntry(predicate, context);
	      return entry ? entry[0] : -1;
	    },
	
	    indexOf: function(searchValue) {
	      var key = this.toKeyedSeq().keyOf(searchValue);
	      return key === undefined ? -1 : key;
	    },
	
	    lastIndexOf: function(searchValue) {
	      var key = this.toKeyedSeq().reverse().keyOf(searchValue);
	      return key === undefined ? -1 : key;
	
	      // var index =
	      // return this.toSeq().reverse().indexOf(searchValue);
	    },
	
	    reverse: function() {
	      return reify(this, reverseFactory(this, false));
	    },
	
	    slice: function(begin, end) {
	      return reify(this, sliceFactory(this, begin, end, false));
	    },
	
	    splice: function(index, removeNum /*, ...values*/) {
	      var numArgs = arguments.length;
	      removeNum = Math.max(removeNum | 0, 0);
	      if (numArgs === 0 || (numArgs === 2 && !removeNum)) {
	        return this;
	      }
	      // If index is negative, it should resolve relative to the size of the
	      // collection. However size may be expensive to compute if not cached, so
	      // only call count() if the number is in fact negative.
	      index = resolveBegin(index, index < 0 ? this.count() : this.size);
	      var spliced = this.slice(0, index);
	      return reify(
	        this,
	        numArgs === 1 ?
	          spliced :
	          spliced.concat(arrCopy(arguments, 2), this.slice(index + removeNum))
	      );
	    },
	
	
	    // ### More collection methods
	
	    findLastIndex: function(predicate, context) {
	      var key = this.toKeyedSeq().findLastKey(predicate, context);
	      return key === undefined ? -1 : key;
	    },
	
	    first: function() {
	      return this.get(0);
	    },
	
	    flatten: function(depth) {
	      return reify(this, flattenFactory(this, depth, false));
	    },
	
	    get: function(index, notSetValue) {
	      index = wrapIndex(this, index);
	      return (index < 0 || (this.size === Infinity ||
	          (this.size !== undefined && index > this.size))) ?
	        notSetValue :
	        this.find(function(_, key)  {return key === index}, undefined, notSetValue);
	    },
	
	    has: function(index) {
	      index = wrapIndex(this, index);
	      return index >= 0 && (this.size !== undefined ?
	        this.size === Infinity || index < this.size :
	        this.indexOf(index) !== -1
	      );
	    },
	
	    interpose: function(separator) {
	      return reify(this, interposeFactory(this, separator));
	    },
	
	    interleave: function(/*...iterables*/) {
	      var iterables = [this].concat(arrCopy(arguments));
	      var zipped = zipWithFactory(this.toSeq(), IndexedSeq.of, iterables);
	      var interleaved = zipped.flatten(true);
	      if (zipped.size) {
	        interleaved.size = zipped.size * iterables.length;
	      }
	      return reify(this, interleaved);
	    },
	
	    last: function() {
	      return this.get(-1);
	    },
	
	    skipWhile: function(predicate, context) {
	      return reify(this, skipWhileFactory(this, predicate, context, false));
	    },
	
	    zip: function(/*, ...iterables */) {
	      var iterables = [this].concat(arrCopy(arguments));
	      return reify(this, zipWithFactory(this, defaultZipper, iterables));
	    },
	
	    zipWith: function(zipper/*, ...iterables */) {
	      var iterables = arrCopy(arguments);
	      iterables[0] = this;
	      return reify(this, zipWithFactory(this, zipper, iterables));
	    }
	
	  });
	
	  IndexedIterable.prototype[IS_INDEXED_SENTINEL] = true;
	  IndexedIterable.prototype[IS_ORDERED_SENTINEL] = true;
	
	
	
	  mixin(SetIterable, {
	
	    // ### ES6 Collection methods (ES6 Array and Map)
	
	    get: function(value, notSetValue) {
	      return this.has(value) ? value : notSetValue;
	    },
	
	    includes: function(value) {
	      return this.has(value);
	    },
	
	
	    // ### More sequential methods
	
	    keySeq: function() {
	      return this.valueSeq();
	    }
	
	  });
	
	  SetIterable.prototype.has = IterablePrototype.includes;
	
	
	  // Mixin subclasses
	
	  mixin(KeyedSeq, KeyedIterable.prototype);
	  mixin(IndexedSeq, IndexedIterable.prototype);
	  mixin(SetSeq, SetIterable.prototype);
	
	  mixin(KeyedCollection, KeyedIterable.prototype);
	  mixin(IndexedCollection, IndexedIterable.prototype);
	  mixin(SetCollection, SetIterable.prototype);
	
	
	  // #pragma Helper functions
	
	  function keyMapper(v, k) {
	    return k;
	  }
	
	  function entryMapper(v, k) {
	    return [k, v];
	  }
	
	  function not(predicate) {
	    return function() {
	      return !predicate.apply(this, arguments);
	    }
	  }
	
	  function neg(predicate) {
	    return function() {
	      return -predicate.apply(this, arguments);
	    }
	  }
	
	  function quoteString(value) {
	    return typeof value === 'string' ? JSON.stringify(value) : value;
	  }
	
	  function defaultZipper() {
	    return arrCopy(arguments);
	  }
	
	  function defaultNegComparator(a, b) {
	    return a < b ? 1 : a > b ? -1 : 0;
	  }
	
	  function hashIterable(iterable) {
	    if (iterable.size === Infinity) {
	      return 0;
	    }
	    var ordered = isOrdered(iterable);
	    var keyed = isKeyed(iterable);
	    var h = ordered ? 1 : 0;
	    var size = iterable.__iterate(
	      keyed ?
	        ordered ?
	          function(v, k)  { h = 31 * h + hashMerge(hash(v), hash(k)) | 0; } :
	          function(v, k)  { h = h + hashMerge(hash(v), hash(k)) | 0; } :
	        ordered ?
	          function(v ) { h = 31 * h + hash(v) | 0; } :
	          function(v ) { h = h + hash(v) | 0; }
	    );
	    return murmurHashOfSize(size, h);
	  }
	
	  function murmurHashOfSize(size, h) {
	    h = imul(h, 0xCC9E2D51);
	    h = imul(h << 15 | h >>> -15, 0x1B873593);
	    h = imul(h << 13 | h >>> -13, 5);
	    h = (h + 0xE6546B64 | 0) ^ size;
	    h = imul(h ^ h >>> 16, 0x85EBCA6B);
	    h = imul(h ^ h >>> 13, 0xC2B2AE35);
	    h = smi(h ^ h >>> 16);
	    return h;
	  }
	
	  function hashMerge(a, b) {
	    return a ^ b + 0x9E3779B9 + (a << 6) + (a >> 2) | 0; // int
	  }
	
	  var Immutable = {
	
	    Iterable: Iterable,
	
	    Seq: Seq,
	    Collection: Collection,
	    Map: Map,
	    OrderedMap: OrderedMap,
	    List: List,
	    Stack: Stack,
	    Set: Set,
	    OrderedSet: OrderedSet,
	
	    Record: Record,
	    Range: Range,
	    Repeat: Repeat,
	
	    is: is,
	    fromJS: fromJS
	
	  };
	
	  return Immutable;
	
	}));

/***/ },
/* 688 */
/***/ function(module, exports, __webpack_require__) {

	
	
	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _react = __webpack_require__(301);var _react2 = _interopRequireDefault(_react);
	var _ReactNavigatorBreadcrumbNavigationBarStyles = __webpack_require__(689);var _ReactNavigatorBreadcrumbNavigationBarStyles2 = _interopRequireDefault(_ReactNavigatorBreadcrumbNavigationBarStyles);
	var _ReactNavigatorNavigationBarStylesAndroid = __webpack_require__(694);var _ReactNavigatorNavigationBarStylesAndroid2 = _interopRequireDefault(_ReactNavigatorNavigationBarStylesAndroid);
	var _ReactNavigatorNavigationBarStylesIOS = __webpack_require__(690);var _ReactNavigatorNavigationBarStylesIOS2 = _interopRequireDefault(_ReactNavigatorNavigationBarStylesIOS);
	var _ReactPlatform = __webpack_require__(695);var _ReactPlatform2 = _interopRequireDefault(_ReactPlatform);
	var _ReactStyleSheet = __webpack_require__(333);var _ReactStyleSheet2 = _interopRequireDefault(_ReactStyleSheet);
	var _ReactView = __webpack_require__(343);var _ReactView2 = _interopRequireDefault(_ReactView);
	var _immutable = __webpack_require__(687);
	var _invariant = __webpack_require__(583);var _invariant2 = _interopRequireDefault(_invariant);
	var _autobindDecorator = __webpack_require__(494);var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var Interpolators = _ReactNavigatorBreadcrumbNavigationBarStyles2.default.Interpolators;
	var NavigatorNavigationBarStyles = _ReactPlatform2.default.OS === 'android' ? _ReactNavigatorNavigationBarStylesAndroid2.default : _ReactNavigatorNavigationBarStylesIOS2.default;
	
	var CRUMB_PROPS = Interpolators.map(function () {
	  return { style: {} };
	});
	var ICON_PROPS = Interpolators.map(function () {
	  return { style: {} };
	});
	var SEPARATOR_PROPS = Interpolators.map(function () {
	  return { style: {} };
	});
	var TITLE_PROPS = Interpolators.map(function () {
	  return { style: {} };
	});
	var RIGHT_BUTTON_PROPS = Interpolators.map(function () {
	  return { style: {} };
	});
	
	var navStatePresentedIndex = function navStatePresentedIndex(navState) {
	  if (navState.presentedIndex !== undefined) {
	    return navState.presentedIndex;
	  }
	
	  return navState.observedTopOfStack;
	};
	
	var initStyle = function initStyle(index, presentedIndex) {
	  return index === presentedIndex ? _ReactNavigatorBreadcrumbNavigationBarStyles2.default.Center[index] : index < presentedIndex ? _ReactNavigatorBreadcrumbNavigationBarStyles2.default.Left[index] : _ReactNavigatorBreadcrumbNavigationBarStyles2.default.Right[index];
	};var NavigatorBreadcrumbNavigationBar = function (_Component) {
	  _inherits(NavigatorBreadcrumbNavigationBar, _Component);function NavigatorBreadcrumbNavigationBar() {
	    _classCallCheck(this, NavigatorBreadcrumbNavigationBar);return _possibleConstructorReturn(this, (NavigatorBreadcrumbNavigationBar.__proto__ || Object.getPrototypeOf(NavigatorBreadcrumbNavigationBar)).apply(this, arguments));
	  }_createClass(NavigatorBreadcrumbNavigationBar, [{ key: '_updateIndexProgress', value: function _updateIndexProgress(progress, index, fromIndex, toIndex) {
	      var amount = toIndex > fromIndex ? progress : 1 - progress;
	      var oldDistToCenter = index - fromIndex;
	      var newDistToCenter = index - toIndex;
	      var interpolate;
	      (0, _invariant2.default)(Interpolators[index], 'Cannot find breadcrumb interpolators for ' + index);
	
	      if (oldDistToCenter > 0 && newDistToCenter === 0 || newDistToCenter > 0 && oldDistToCenter === 0) {
	        interpolate = Interpolators[index].RightToCenter;
	      } else if (oldDistToCenter < 0 && newDistToCenter === 0 || newDistToCenter < 0 && oldDistToCenter === 0) {
	        interpolate = Interpolators[index].CenterToLeft;
	      } else if (oldDistToCenter === newDistToCenter) {
	        interpolate = Interpolators[index].RightToCenter;
	      } else {
	        interpolate = Interpolators[index].RightToLeft;
	      }
	
	      if (interpolate.Crumb(CRUMB_PROPS[index].style, amount)) {
	        this._setPropsIfExists('crumb_' + index, CRUMB_PROPS[index]);
	      }
	      if (interpolate.Icon(ICON_PROPS[index].style, amount)) {
	        this._setPropsIfExists('icon_' + index, ICON_PROPS[index]);
	      }
	      if (interpolate.Separator(SEPARATOR_PROPS[index].style, amount)) {
	        this._setPropsIfExists('separator_' + index, SEPARATOR_PROPS[index]);
	      }
	      if (interpolate.Title(TITLE_PROPS[index].style, amount)) {
	        this._setPropsIfExists('title_' + index, TITLE_PROPS[index]);
	      }
	      var right = this.refs['right_' + index];
	      if (right && interpolate.RightItem(RIGHT_BUTTON_PROPS[index].style, amount)) {
	        right.setNativeProps(RIGHT_BUTTON_PROPS[index]);
	      }
	    } }, { key: 'updateProgress', value: function updateProgress(progress, fromIndex, toIndex) {
	      var max = Math.max(fromIndex, toIndex);
	      var min = Math.min(fromIndex, toIndex);
	      for (var index = min; index <= max; index++) {
	        this._updateIndexProgress(progress, index, fromIndex, toIndex);
	      }
	    } }, { key: 'onAnimationStart', value: function onAnimationStart(fromIndex, toIndex) {
	      var max = Math.max(fromIndex, toIndex);
	      var min = Math.min(fromIndex, toIndex);
	      for (var index = min; index <= max; index++) {
	        this._setRenderViewsToHardwareTextureAndroid(index, true);
	      }
	    } }, { key: 'onAnimationEnd', value: function onAnimationEnd() {
	      var max = this.props.navState.routeStack.length - 1;
	      for (var index = 0; index <= max; index++) {
	        this._setRenderViewsToHardwareTextureAndroid(index, false);
	      }
	    } }, { key: '_setRenderViewsToHardwareTextureAndroid', value: function _setRenderViewsToHardwareTextureAndroid(index, renderToHardwareTexture) {
	      var props = {
	        renderToHardwareTextureAndroid: renderToHardwareTexture };
	
	      this._setPropsIfExists('icon_' + index, props);
	      this._setPropsIfExists('separator_' + index, props);
	      this._setPropsIfExists('title_' + index, props);
	      this._setPropsIfExists('right_' + index, props);
	    } }, { key: 'componentWillMount', value: function componentWillMount() {
	      this._descriptors = {
	        crumb: new _immutable.Map(),
	        title: new _immutable.Map(),
	        right: new _immutable.Map() };
	    } }, { key: 'render', value: function render() {
	      var navState = this.props.navState;
	      var icons = navState && navState.routeStack.map(this._getBreadcrumb);
	      var titles = navState.routeStack.map(this._getTitle);
	      var buttons = navState.routeStack.map(this._getRightButton);
	      return _react2.default.createElement(_ReactView2.default, { style: [styles.breadCrumbContainer, this.props.style] }, titles, icons, buttons);
	    } }, { key: '_getBreadcrumb', value: function _getBreadcrumb(route, index) {
	      if (this._descriptors.crumb.has(route)) {
	        return this._descriptors.crumb.get(route);
	      }
	
	      var navBarRouteMapper = this.props.routeMapper;
	      var firstStyles = initStyle(index, navStatePresentedIndex(this.props.navState));
	
	      var breadcrumbDescriptor = _react2.default.createElement(_ReactView2.default, { ref: 'crumb_' + index, style: firstStyles.Crumb }, _react2.default.createElement(_ReactView2.default, { ref: 'icon_' + index, style: firstStyles.Icon }, navBarRouteMapper.iconForRoute(route, this.props.navigator)), _react2.default.createElement(_ReactView2.default, { ref: 'separator_' + index, style: firstStyles.Separator }, navBarRouteMapper.separatorForRoute(route, this.props.navigator)));
	
	      this._descriptors.crumb = this._descriptors.crumb.set(route, breadcrumbDescriptor);
	      return breadcrumbDescriptor;
	    } }, { key: '_getTitle', value: function _getTitle(route, index) {
	      if (this._descriptors.title.has(route)) {
	        return this._descriptors.title.get(route);
	      }
	
	      var titleContent = this.props.routeMapper.titleContentForRoute(this.props.navState.routeStack[index], this.props.navigator);
	
	      var firstStyles = initStyle(index, navStatePresentedIndex(this.props.navState));
	
	      var titleDescriptor = _react2.default.createElement(_ReactView2.default, { ref: 'title_' + index, style: firstStyles.Title }, titleContent);
	
	      this._descriptors.title = this._descriptors.title.set(route, titleDescriptor);
	      return titleDescriptor;
	    } }, { key: '_getRightButton', value: function _getRightButton(route, index) {
	      if (this._descriptors.right.has(route)) {
	        return this._descriptors.right.get(route);
	      }
	      var rightContent = this.props.routeMapper.rightContentForRoute(this.props.navState.routeStack[index], this.props.navigator);
	
	      if (!rightContent) {
	        this._descriptors.right = this._descriptors.right.set(route, null);
	        return null;
	      }
	      var firstStyles = initStyle(index, navStatePresentedIndex(this.props.navState));
	      var rightButtonDescriptor = _react2.default.createElement(_ReactView2.default, { ref: 'right_' + index, style: firstStyles.RightItem }, rightContent);
	
	      this._descriptors.right = this._descriptors.right.set(route, rightButtonDescriptor);
	      return rightButtonDescriptor;
	    } }, { key: '_setPropsIfExists', value: function _setPropsIfExists(ref, props) {
	      var ref = this.refs[ref];
	      ref && ref.setNativeProps(props);
	    } }]);return NavigatorBreadcrumbNavigationBar;
	}(_react.Component);NavigatorBreadcrumbNavigationBar.propTypes = { navigator: _react.PropTypes.shape({ push: _react.PropTypes.func, pop: _react.PropTypes.func, replace: _react.PropTypes.func, popToRoute: _react.PropTypes.func, popToTop: _react.PropTypes.func }), routeMapper: _react.PropTypes.shape({ rightContentForRoute: _react.PropTypes.func, titleContentForRoute: _react.PropTypes.func, iconForRoute: _react.PropTypes.func }), navState: _react2.default.PropTypes.shape({ routeStack: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.object), presentedIndex: _react2.default.PropTypes.number }), style: _ReactView2.default.propTypes.style };NavigatorBreadcrumbNavigationBar.statics = { Styles: _ReactNavigatorBreadcrumbNavigationBarStyles2.default };
	
	;
	
	var styles = _ReactStyleSheet2.default.create({
	  breadCrumbContainer: {
	    overflow: 'hidden',
	    position: 'absolute',
	    height: NavigatorNavigationBarStyles.General.TotalNavHeight,
	    top: 0,
	    left: 0,
	    right: 0 } });
	
	(0, _autobindDecorator2.default)(NavigatorBreadcrumbNavigationBar);
	
	module.exports = NavigatorBreadcrumbNavigationBar;

/***/ },
/* 689 */
/***/ function(module, exports, __webpack_require__) {

	
	
	'use strict';
	
	var _ReactDimensions = __webpack_require__(594);var _ReactDimensions2 = _interopRequireDefault(_ReactDimensions);
	var _ReactNavigatorNavigationBarStylesIOS = __webpack_require__(690);var _ReactNavigatorNavigationBarStylesIOS2 = _interopRequireDefault(_ReactNavigatorNavigationBarStylesIOS);
	var _buildStyleInterpolator = __webpack_require__(691);var _buildStyleInterpolator2 = _interopRequireDefault(_buildStyleInterpolator);
	var _merge = __webpack_require__(693);var _merge2 = _interopRequireDefault(_merge);function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	var SCREEN_WIDTH = _ReactDimensions2.default.get('window').width;
	var STATUS_BAR_HEIGHT = _ReactNavigatorNavigationBarStylesIOS2.default.General.StatusBarHeight;
	var NAV_BAR_HEIGHT = _ReactNavigatorNavigationBarStylesIOS2.default.General.NavBarHeight;
	
	var SPACING = 4;
	var ICON_WIDTH = 40;
	var SEPARATOR_WIDTH = 9;
	var CRUMB_WIDTH = ICON_WIDTH + SEPARATOR_WIDTH;
	
	var OPACITY_RATIO = 100;
	var ICON_INACTIVE_OPACITY = 0.6;
	var MAX_BREADCRUMBS = 10;
	
	var CRUMB_BASE = {
	  position: 'absolute',
	  flexDirection: 'row',
	  top: STATUS_BAR_HEIGHT,
	  width: CRUMB_WIDTH,
	  height: NAV_BAR_HEIGHT,
	  backgroundColor: 'transparent' };
	
	var ICON_BASE = {
	  width: ICON_WIDTH,
	  height: NAV_BAR_HEIGHT };
	
	var SEPARATOR_BASE = {
	  width: SEPARATOR_WIDTH,
	  height: NAV_BAR_HEIGHT };
	
	var TITLE_BASE = {
	  position: 'absolute',
	  top: STATUS_BAR_HEIGHT,
	  height: NAV_BAR_HEIGHT,
	  backgroundColor: 'transparent' };
	
	var FIRST_TITLE_BASE = (0, _merge2.default)(TITLE_BASE, {
	  left: 0,
	  right: 0,
	  alignItems: 'center',
	  height: NAV_BAR_HEIGHT });
	
	var RIGHT_BUTTON_BASE = {
	  position: 'absolute',
	  top: STATUS_BAR_HEIGHT,
	  right: SPACING,
	  overflow: 'hidden',
	  opacity: 1,
	  height: NAV_BAR_HEIGHT,
	  backgroundColor: 'transparent' };
	
	var LEFT = [];
	var CENTER = [];
	var RIGHT = [];
	for (var i = 0; i < MAX_BREADCRUMBS; i++) {
	  var crumbLeft = CRUMB_WIDTH * i + SPACING;
	  LEFT[i] = {
	    Crumb: (0, _merge2.default)(CRUMB_BASE, { left: crumbLeft }),
	    Icon: (0, _merge2.default)(ICON_BASE, { opacity: ICON_INACTIVE_OPACITY }),
	    Separator: (0, _merge2.default)(SEPARATOR_BASE, { opacity: 1 }),
	    Title: (0, _merge2.default)(TITLE_BASE, { left: crumbLeft, opacity: 0 }),
	    RightItem: (0, _merge2.default)(RIGHT_BUTTON_BASE, { opacity: 0 }) };
	
	  CENTER[i] = {
	    Crumb: (0, _merge2.default)(CRUMB_BASE, { left: crumbLeft }),
	    Icon: (0, _merge2.default)(ICON_BASE, { opacity: 1 }),
	    Separator: (0, _merge2.default)(SEPARATOR_BASE, { opacity: 0 }),
	    Title: (0, _merge2.default)(TITLE_BASE, {
	      left: crumbLeft + ICON_WIDTH,
	      opacity: 1 }),
	
	    RightItem: (0, _merge2.default)(RIGHT_BUTTON_BASE, { opacity: 1 }) };
	
	  var crumbRight = SCREEN_WIDTH - 100;
	  RIGHT[i] = {
	    Crumb: (0, _merge2.default)(CRUMB_BASE, { left: crumbRight }),
	    Icon: (0, _merge2.default)(ICON_BASE, { opacity: 0 }),
	    Separator: (0, _merge2.default)(SEPARATOR_BASE, { opacity: 0 }),
	    Title: (0, _merge2.default)(TITLE_BASE, {
	      left: crumbRight + ICON_WIDTH,
	      opacity: 0 }),
	
	    RightItem: (0, _merge2.default)(RIGHT_BUTTON_BASE, { opacity: 0 }) };
	}
	
	CENTER[0] = {
	  Crumb: (0, _merge2.default)(CRUMB_BASE, { left: SCREEN_WIDTH / 4 }),
	  Icon: (0, _merge2.default)(ICON_BASE, { opacity: 0 }),
	  Separator: (0, _merge2.default)(SEPARATOR_BASE, { opacity: 0 }),
	  Title: (0, _merge2.default)(FIRST_TITLE_BASE, { opacity: 1 }),
	  RightItem: CENTER[0].RightItem };
	
	LEFT[0].Title = (0, _merge2.default)(FIRST_TITLE_BASE, { left: -SCREEN_WIDTH / 4, opacity: 0 });
	RIGHT[0].Title = (0, _merge2.default)(FIRST_TITLE_BASE, { opacity: 0 });
	
	var buildIndexSceneInterpolator = function buildIndexSceneInterpolator(startStyles, endStyles) {
	  return {
	    Crumb: (0, _buildStyleInterpolator2.default)({
	      left: {
	        type: 'linear',
	        from: startStyles.Crumb.left,
	        to: endStyles.Crumb.left,
	        min: 0,
	        max: 1,
	        extrapolate: true } }),
	
	    Icon: (0, _buildStyleInterpolator2.default)({
	      opacity: {
	        type: 'linear',
	        from: startStyles.Icon.opacity,
	        to: endStyles.Icon.opacity,
	        min: 0,
	        max: 1 } }),
	
	    Separator: (0, _buildStyleInterpolator2.default)({
	      opacity: {
	        type: 'linear',
	        from: startStyles.Separator.opacity,
	        to: endStyles.Separator.opacity,
	        min: 0,
	        max: 1 } }),
	
	    Title: (0, _buildStyleInterpolator2.default)({
	      opacity: {
	        type: 'linear',
	        from: startStyles.Title.opacity,
	        to: endStyles.Title.opacity,
	        min: 0,
	        max: 1 },
	
	      left: {
	        type: 'linear',
	        from: startStyles.Title.left,
	        to: endStyles.Title.left,
	        min: 0,
	        max: 1,
	        extrapolate: true } }),
	
	    RightItem: (0, _buildStyleInterpolator2.default)({
	      opacity: {
	        type: 'linear',
	        from: startStyles.RightItem.opacity,
	        to: endStyles.RightItem.opacity,
	        min: 0,
	        max: 1,
	        round: OPACITY_RATIO } }) };
	};
	
	var Interpolators = CENTER.map(function (_, ii) {
	  return {
	
	    RightToCenter: buildIndexSceneInterpolator(RIGHT[ii], CENTER[ii]),
	
	    CenterToLeft: buildIndexSceneInterpolator(CENTER[ii], LEFT[ii]),
	
	    RightToLeft: buildIndexSceneInterpolator(RIGHT[ii], LEFT[ii]) };
	});
	
	module.exports = {
	  Interpolators: Interpolators,
	  Left: LEFT,
	  Center: CENTER,
	  Right: RIGHT,
	  IconWidth: ICON_WIDTH,
	  IconHeight: NAV_BAR_HEIGHT,
	  SeparatorWidth: SEPARATOR_WIDTH,
	  SeparatorHeight: NAV_BAR_HEIGHT };

/***/ },
/* 690 */
/***/ function(module, exports, __webpack_require__) {

	
	
	'use strict';
	
	var _ReactDimensions = __webpack_require__(594);var _ReactDimensions2 = _interopRequireDefault(_ReactDimensions);
	var _buildStyleInterpolator = __webpack_require__(691);var _buildStyleInterpolator2 = _interopRequireDefault(_buildStyleInterpolator);
	var _merge = __webpack_require__(693);var _merge2 = _interopRequireDefault(_merge);function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	var NAV_BAR_HEIGHT = 44;
	var STATUS_BAR_HEIGHT = 20;
	var NAV_HEIGHT = NAV_BAR_HEIGHT + STATUS_BAR_HEIGHT;
	
	var BASE_STYLES = {
	  Title: {
	    position: 'absolute',
	    top: STATUS_BAR_HEIGHT,
	    left: 0,
	    right: 0,
	    alignItems: 'center',
	    height: NAV_BAR_HEIGHT,
	    backgroundColor: 'transparent' },
	
	  LeftButton: {
	    position: 'absolute',
	    top: STATUS_BAR_HEIGHT,
	    left: 0,
	    overflow: 'hidden',
	    opacity: 1,
	    height: NAV_BAR_HEIGHT,
	    backgroundColor: 'transparent' },
	
	  RightButton: {
	    position: 'absolute',
	    top: STATUS_BAR_HEIGHT,
	    right: 0,
	    overflow: 'hidden',
	    opacity: 1,
	    alignItems: 'flex-end',
	    height: NAV_BAR_HEIGHT,
	    backgroundColor: 'transparent' } };
	
	var caches = {};
	var opacityRatio = 100;
	
	function calcStyles(screenWidth) {
	  var Stages = {
	    Left: {
	      Title: (0, _merge2.default)(BASE_STYLES.Title, { left: -screenWidth / 2, opacity: 0 }),
	      LeftButton: (0, _merge2.default)(BASE_STYLES.LeftButton, { left: -screenWidth / 3, opacity: 1 }),
	      RightButton: (0, _merge2.default)(BASE_STYLES.RightButton, { left: screenWidth / 3, opacity: 0 }) },
	
	    Center: {
	      Title: (0, _merge2.default)(BASE_STYLES.Title, { left: 0, opacity: 1 }),
	      LeftButton: (0, _merge2.default)(BASE_STYLES.LeftButton, { left: 0, opacity: 1 }),
	      RightButton: (0, _merge2.default)(BASE_STYLES.RightButton, { left: 2 * screenWidth / 3 - 0, opacity: 1 }) },
	
	    Right: {
	      Title: (0, _merge2.default)(BASE_STYLES.Title, { left: screenWidth / 2, opacity: 0 }),
	      LeftButton: (0, _merge2.default)(BASE_STYLES.LeftButton, { left: 0, opacity: 0 }),
	      RightButton: (0, _merge2.default)(BASE_STYLES.RightButton, { left: screenWidth, opacity: 0 }) } };
	
	  var Interpolators = {
	
	    RightToCenter: buildSceneInterpolators(Stages.Right, Stages.Center),
	
	    CenterToLeft: buildSceneInterpolators(Stages.Center, Stages.Left),
	
	    RightToLeft: buildSceneInterpolators(Stages.Right, Stages.Left) };
	
	  return {
	    Stages: Stages,
	    Interpolators: Interpolators };
	};
	
	function buildSceneInterpolators(startStyles, endStyles) {
	  return {
	    Title: (0, _buildStyleInterpolator2.default)({
	      opacity: {
	        type: 'linear',
	        from: startStyles.Title.opacity,
	        to: endStyles.Title.opacity,
	        min: 0,
	        max: 1 },
	
	      left: {
	        type: 'linear',
	        from: startStyles.Title.left,
	        to: endStyles.Title.left,
	        min: 0,
	        max: 1,
	        extrapolate: true } }),
	
	    LeftButton: (0, _buildStyleInterpolator2.default)({
	      opacity: {
	        type: 'linear',
	        from: startStyles.LeftButton.opacity,
	        to: endStyles.LeftButton.opacity,
	        min: 0,
	        max: 1,
	        round: opacityRatio },
	
	      left: {
	        type: 'linear',
	        from: startStyles.LeftButton.left,
	        to: endStyles.LeftButton.left,
	        min: 0,
	        max: 1 } }),
	
	    RightButton: (0, _buildStyleInterpolator2.default)({
	      opacity: {
	        type: 'linear',
	        from: startStyles.RightButton.opacity,
	        to: endStyles.RightButton.opacity,
	        min: 0,
	        max: 1,
	        round: opacityRatio },
	
	      left: {
	        type: 'linear',
	        from: startStyles.RightButton.left,
	        to: endStyles.RightButton.left,
	        min: 0,
	        max: 1,
	        extrapolate: true } }) };
	}
	
	function getStyles() {
	  var screenWidth = _ReactDimensions2.default.get('window').width;
	  if (!caches[screenWidth]) {
	    caches[screenWidth] = calcStyles(screenWidth);
	  }
	
	  return caches[screenWidth];
	}
	
	module.exports = {
	  General: {
	    NavBarHeight: NAV_BAR_HEIGHT,
	    StatusBarHeight: STATUS_BAR_HEIGHT,
	    TotalNavHeight: NAV_HEIGHT },
	
	  get Interpolators() {
	    return getStyles().Interpolators;
	  },
	  get Stages() {
	    return getStyles().Stages;
	  } };

/***/ },
/* 691 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _keyOf = __webpack_require__(692);var _keyOf2 = _interopRequireDefault(_keyOf);function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	var X_DIM = (0, _keyOf2.default)({ x: null });
	var Y_DIM = (0, _keyOf2.default)({ y: null });
	var Z_DIM = (0, _keyOf2.default)({ z: null });
	var W_DIM = (0, _keyOf2.default)({ w: null });
	
	var TRANSFORM_ROTATE_NAME = (0, _keyOf2.default)({ transformRotateRadians: null });
	
	var ShouldAllocateReusableOperationVars = {
	  transformRotateRadians: true,
	  transformScale: true,
	  transformTranslate: true };
	
	var InitialOperationField = {
	  transformRotateRadians: [0, 0, 0, 1],
	  transformTranslate: [0, 0, 0],
	  transformScale: [1, 1, 1] };
	
	var ARGUMENT_NAMES_RE = /([^\s,]+)/g;
	
	var inline = function inline(func, replaceWithArgs) {
	  var fnStr = func.toString();
	  var parameterNames = fnStr.slice(fnStr.indexOf('(') + 1, fnStr.indexOf(')')).match(ARGUMENT_NAMES_RE) || [];
	  var replaceRegexStr = parameterNames.map(function (paramName) {
	    return '\\b' + paramName + '\\b';
	  }).join('|');
	  var replaceRegex = new RegExp(replaceRegexStr, 'g');
	  var fnBody = fnStr.substring(fnStr.indexOf('{') + 1, fnStr.lastIndexOf('}'));
	  var newFnBody = fnBody.replace(replaceRegex, function (parameterName) {
	    var indexInParameterNames = parameterNames.indexOf(parameterName);
	    var replacementName = replaceWithArgs[indexInParameterNames];
	    return replacementName;
	  });
	  return newFnBody.split('\n');
	};
	
	var MatrixOps = {
	  unroll: function unroll(matVar, m0, m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, m13, m14, m15) {
	    m0 = matVar[0];
	    m1 = matVar[1];
	    m2 = matVar[2];
	    m3 = matVar[3];
	    m4 = matVar[4];
	    m5 = matVar[5];
	    m6 = matVar[6];
	    m7 = matVar[7];
	    m8 = matVar[8];
	    m9 = matVar[9];
	    m10 = matVar[10];
	    m11 = matVar[11];
	    m12 = matVar[12];
	    m13 = matVar[13];
	    m14 = matVar[14];
	    m15 = matVar[15];
	  },
	
	  matrixDiffers: function matrixDiffers(retVar, matVar, m0, m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, m13, m14, m15) {
	    retVar = retVar || m0 !== matVar[0] || m1 !== matVar[1] || m2 !== matVar[2] || m3 !== matVar[3] || m4 !== matVar[4] || m5 !== matVar[5] || m6 !== matVar[6] || m7 !== matVar[7] || m8 !== matVar[8] || m9 !== matVar[9] || m10 !== matVar[10] || m11 !== matVar[11] || m12 !== matVar[12] || m13 !== matVar[13] || m14 !== matVar[14] || m15 !== matVar[15];
	  },
	
	  transformScale: function transformScale(matVar, opVar) {
	
	    var x = opVar[0];
	    var y = opVar[1];
	    var z = opVar[2];
	    matVar[0] = matVar[0] * x;
	    matVar[1] = matVar[1] * x;
	    matVar[2] = matVar[2] * x;
	    matVar[3] = matVar[3] * x;
	    matVar[4] = matVar[4] * y;
	    matVar[5] = matVar[5] * y;
	    matVar[6] = matVar[6] * y;
	    matVar[7] = matVar[7] * y;
	    matVar[8] = matVar[8] * z;
	    matVar[9] = matVar[9] * z;
	    matVar[10] = matVar[10] * z;
	    matVar[11] = matVar[11] * z;
	    matVar[12] = matVar[12];
	    matVar[13] = matVar[13];
	    matVar[14] = matVar[14];
	    matVar[15] = matVar[15];
	  },
	
	  transformTranslate: function transformTranslate(matVar, opVar) {
	
	    var x = opVar[0];
	    var y = opVar[1];
	    var z = opVar[2];
	    matVar[12] = matVar[0] * x + matVar[4] * y + matVar[8] * z + matVar[12];
	    matVar[13] = matVar[1] * x + matVar[5] * y + matVar[9] * z + matVar[13];
	    matVar[14] = matVar[2] * x + matVar[6] * y + matVar[10] * z + matVar[14];
	    matVar[15] = matVar[3] * x + matVar[7] * y + matVar[11] * z + matVar[15];
	  },
	
	  transformRotateRadians: function transformRotateRadians(matVar, q) {
	
	    var xQuat = q[0],
	        yQuat = q[1],
	        zQuat = q[2],
	        wQuat = q[3];
	    var x2Quat = xQuat + xQuat;
	    var y2Quat = yQuat + yQuat;
	    var z2Quat = zQuat + zQuat;
	    var xxQuat = xQuat * x2Quat;
	    var xyQuat = xQuat * y2Quat;
	    var xzQuat = xQuat * z2Quat;
	    var yyQuat = yQuat * y2Quat;
	    var yzQuat = yQuat * z2Quat;
	    var zzQuat = zQuat * z2Quat;
	    var wxQuat = wQuat * x2Quat;
	    var wyQuat = wQuat * y2Quat;
	    var wzQuat = wQuat * z2Quat;
	
	    var quatMat0 = 1 - (yyQuat + zzQuat);
	    var quatMat1 = xyQuat + wzQuat;
	    var quatMat2 = xzQuat - wyQuat;
	    var quatMat4 = xyQuat - wzQuat;
	    var quatMat5 = 1 - (xxQuat + zzQuat);
	    var quatMat6 = yzQuat + wxQuat;
	    var quatMat8 = xzQuat + wyQuat;
	    var quatMat9 = yzQuat - wxQuat;
	    var quatMat10 = 1 - (xxQuat + yyQuat);
	
	    var a00 = matVar[0];
	    var a01 = matVar[1];
	    var a02 = matVar[2];
	    var a03 = matVar[3];
	    var a10 = matVar[4];
	    var a11 = matVar[5];
	    var a12 = matVar[6];
	    var a13 = matVar[7];
	    var a20 = matVar[8];
	    var a21 = matVar[9];
	    var a22 = matVar[10];
	    var a23 = matVar[11];
	
	    var b0 = quatMat0,
	        b1 = quatMat1,
	        b2 = quatMat2;
	    matVar[0] = b0 * a00 + b1 * a10 + b2 * a20;
	    matVar[1] = b0 * a01 + b1 * a11 + b2 * a21;
	    matVar[2] = b0 * a02 + b1 * a12 + b2 * a22;
	    matVar[3] = b0 * a03 + b1 * a13 + b2 * a23;
	    b0 = quatMat4;b1 = quatMat5;b2 = quatMat6;
	    matVar[4] = b0 * a00 + b1 * a10 + b2 * a20;
	    matVar[5] = b0 * a01 + b1 * a11 + b2 * a21;
	    matVar[6] = b0 * a02 + b1 * a12 + b2 * a22;
	    matVar[7] = b0 * a03 + b1 * a13 + b2 * a23;
	    b0 = quatMat8;b1 = quatMat9;b2 = quatMat10;
	    matVar[8] = b0 * a00 + b1 * a10 + b2 * a20;
	    matVar[9] = b0 * a01 + b1 * a11 + b2 * a21;
	    matVar[10] = b0 * a02 + b1 * a12 + b2 * a22;
	    matVar[11] = b0 * a03 + b1 * a13 + b2 * a23;
	  } };
	
	var MatrixOpsInitial = {
	  transformScale: function transformScale(matVar, opVar) {
	
	    matVar[0] = opVar[0];
	    matVar[1] = 0;
	    matVar[2] = 0;
	    matVar[3] = 0;
	    matVar[4] = 0;
	    matVar[5] = opVar[1];
	    matVar[6] = 0;
	    matVar[7] = 0;
	    matVar[8] = 0;
	    matVar[9] = 0;
	    matVar[10] = opVar[2];
	    matVar[11] = 0;
	    matVar[12] = 0;
	    matVar[13] = 0;
	    matVar[14] = 0;
	    matVar[15] = 1;
	  },
	
	  transformTranslate: function transformTranslate(matVar, opVar) {
	
	    matVar[0] = 1;
	    matVar[1] = 0;
	    matVar[2] = 0;
	    matVar[3] = 0;
	    matVar[4] = 0;
	    matVar[5] = 1;
	    matVar[6] = 0;
	    matVar[7] = 0;
	    matVar[8] = 0;
	    matVar[9] = 0;
	    matVar[10] = 1;
	    matVar[11] = 0;
	    matVar[12] = opVar[0];
	    matVar[13] = opVar[1];
	    matVar[14] = opVar[2];
	    matVar[15] = 1;
	  },
	
	  transformRotateRadians: function transformRotateRadians(matVar, q) {
	
	    var xQuat = q[0],
	        yQuat = q[1],
	        zQuat = q[2],
	        wQuat = q[3];
	    var x2Quat = xQuat + xQuat;
	    var y2Quat = yQuat + yQuat;
	    var z2Quat = zQuat + zQuat;
	    var xxQuat = xQuat * x2Quat;
	    var xyQuat = xQuat * y2Quat;
	    var xzQuat = xQuat * z2Quat;
	    var yyQuat = yQuat * y2Quat;
	    var yzQuat = yQuat * z2Quat;
	    var zzQuat = zQuat * z2Quat;
	    var wxQuat = wQuat * x2Quat;
	    var wyQuat = wQuat * y2Quat;
	    var wzQuat = wQuat * z2Quat;
	
	    var quatMat0 = 1 - (yyQuat + zzQuat);
	    var quatMat1 = xyQuat + wzQuat;
	    var quatMat2 = xzQuat - wyQuat;
	    var quatMat4 = xyQuat - wzQuat;
	    var quatMat5 = 1 - (xxQuat + zzQuat);
	    var quatMat6 = yzQuat + wxQuat;
	    var quatMat8 = xzQuat + wyQuat;
	    var quatMat9 = yzQuat - wxQuat;
	    var quatMat10 = 1 - (xxQuat + yyQuat);
	
	    var b0 = quatMat0,
	        b1 = quatMat1,
	        b2 = quatMat2;
	    matVar[0] = b0;
	    matVar[1] = b1;
	    matVar[2] = b2;
	    matVar[3] = 0;
	    b0 = quatMat4;b1 = quatMat5;b2 = quatMat6;
	    matVar[4] = b0;
	    matVar[5] = b1;
	    matVar[6] = b2;
	    matVar[7] = 0;
	    b0 = quatMat8;b1 = quatMat9;b2 = quatMat10;
	    matVar[8] = b0;
	    matVar[9] = b1;
	    matVar[10] = b2;
	    matVar[11] = 0;
	    matVar[12] = 0;
	    matVar[13] = 0;
	    matVar[14] = 0;
	    matVar[15] = 1;
	  } };
	
	var setNextValAndDetectChange = function setNextValAndDetectChange(name, tmpVarName) {
	  return '  if (!didChange) {\n' + '    var prevVal = result.' + name + ';\n' + '    result.' + name + ' = ' + tmpVarName + ';\n' + '    didChange = didChange  || (' + tmpVarName + ' !== prevVal);\n' + '  } else {\n' + '    result.' + name + ' = ' + tmpVarName + ';\n' + '  }\n';
	};
	
	var computeNextValLinear = function computeNextValLinear(anim, from, to, tmpVarName) {
	  var hasRoundRatio = 'round' in anim;
	  var roundRatio = anim.round;
	  var fn = '  ratio = (value - ' + anim.min + ') / ' + (anim.max - anim.min) + ';\n';
	  if (!anim.extrapolate) {
	    fn += '  ratio = ratio > 1 ? 1 : (ratio < 0 ? 0 : ratio);\n';
	  }
	
	  var roundOpen = hasRoundRatio ? 'Math.round(' + roundRatio + ' * ' : '';
	  var roundClose = hasRoundRatio ? ') / ' + roundRatio : '';
	  fn += '  ' + tmpVarName + ' = ' + roundOpen + '(' + from + ' * (1 - ratio) + ' + to + ' * ratio)' + roundClose + ';\n';
	  return fn;
	};
	
	var computeNextValLinearScalar = function computeNextValLinearScalar(anim) {
	  return computeNextValLinear(anim, anim.from, anim.to, 'nextScalarVal');
	};
	
	var computeNextValConstant = function computeNextValConstant(anim) {
	  var constantExpression = JSON.stringify(anim.value);
	  return '  nextScalarVal = ' + constantExpression + ';\n';
	};
	
	var computeNextValStep = function computeNextValStep(anim) {
	  return '  nextScalarVal = value >= ' + (anim.threshold + ' ? ' + anim.to + ' : ' + anim.from) + ';\n';
	};
	
	var computeNextValIdentity = function computeNextValIdentity(anim) {
	  return '  nextScalarVal = value;\n';
	};
	
	var operationVar = function operationVar(name) {
	  return name + 'ReuseOp';
	};
	
	var createReusableOperationVars = function createReusableOperationVars(anims) {
	  var ret = '';
	  for (var name in anims) {
	    if (ShouldAllocateReusableOperationVars[name]) {
	      ret += 'var ' + operationVar(name) + ' = [];\n';
	    }
	  }
	  return ret;
	};
	
	var newlines = function newlines(statements) {
	  return '\n' + statements.join('\n') + '\n';
	};
	
	var computeNextMatrixOperationField = function computeNextMatrixOperationField(anim, name, dimension, index) {
	  var fieldAccess = operationVar(name) + '[' + index + ']';
	  if (anim.from[dimension] !== undefined && anim.to[dimension] !== undefined) {
	    return '  ' + anim.from[dimension] !== anim.to[dimension] ? computeNextValLinear(anim, anim.from[dimension], anim.to[dimension], fieldAccess) : fieldAccess + ' = ' + anim.from[dimension] + ';';
	  } else {
	    return '  ' + fieldAccess + ' = ' + InitialOperationField[name][index] + ';';
	  }
	};
	
	var unrolledVars = [];
	for (var varIndex = 0; varIndex < 16; varIndex++) {
	  unrolledVars.push('m' + varIndex);
	}
	var setNextMatrixAndDetectChange = function setNextMatrixAndDetectChange(orderedMatrixOperations) {
	  var fn = ['  var transformMatrix = result.transformMatrix !== undefined ? ' + 'result.transformMatrix : (result.transformMatrix = []);'];
	
	  fn.push.apply(fn, inline(MatrixOps.unroll, ['transformMatrix'].concat(unrolledVars)));
	
	  for (var i = 0; i < orderedMatrixOperations.length; i++) {
	    var opName = orderedMatrixOperations[i];
	    if (i === 0) {
	      fn.push.apply(fn, inline(MatrixOpsInitial[opName], ['transformMatrix', operationVar(opName)]));
	    } else {
	      fn.push.apply(fn, inline(MatrixOps[opName], ['transformMatrix', operationVar(opName)]));
	    }
	  }
	  fn.push.apply(fn, inline(MatrixOps.matrixDiffers, ['didChange', 'transformMatrix'].concat(unrolledVars)));
	
	  return fn;
	};
	
	var InterpolateMatrix = {
	  transformTranslate: true,
	  transformRotateRadians: true,
	  transformScale: true };
	
	var createFunctionString = function createFunctionString(anims) {
	
	  var orderedMatrixOperations = [];
	
	  var fn = 'return (function() {\n';
	  fn += createReusableOperationVars(anims);
	  fn += 'return function(result, value) {\n';
	  fn += '  var didChange = false;\n';
	  fn += '  var nextScalarVal;\n';
	  fn += '  var ratio;\n';
	
	  for (var name in anims) {
	    var anim = anims[name];
	    if (anim.type === 'linear') {
	      if (InterpolateMatrix[name]) {
	        orderedMatrixOperations.push(name);
	        var setOperations = [computeNextMatrixOperationField(anim, name, X_DIM, 0), computeNextMatrixOperationField(anim, name, Y_DIM, 1), computeNextMatrixOperationField(anim, name, Z_DIM, 2)];
	
	        if (name === TRANSFORM_ROTATE_NAME) {
	          setOperations.push(computeNextMatrixOperationField(anim, name, W_DIM, 3));
	        }
	        fn += newlines(setOperations);
	      } else {
	        fn += computeNextValLinearScalar(anim, 'nextScalarVal');
	        fn += setNextValAndDetectChange(name, 'nextScalarVal');
	      }
	    } else if (anim.type === 'constant') {
	      fn += computeNextValConstant(anim);
	      fn += setNextValAndDetectChange(name, 'nextScalarVal');
	    } else if (anim.type === 'step') {
	      fn += computeNextValStep(anim);
	      fn += setNextValAndDetectChange(name, 'nextScalarVal');
	    } else if (anim.type === 'identity') {
	      fn += computeNextValIdentity(anim);
	      fn += setNextValAndDetectChange(name, 'nextScalarVal');
	    }
	  }
	  if (orderedMatrixOperations.length) {
	    fn += newlines(setNextMatrixAndDetectChange(orderedMatrixOperations));
	  }
	  fn += '  return didChange;\n';
	  fn += '};\n';
	  fn += '})()';
	  return fn;
	};
	
	var buildStyleInterpolator = function buildStyleInterpolator(anims) {
	  return Function(createFunctionString(anims))();
	};
	
	module.exports = buildStyleInterpolator;

/***/ },
/* 692 */
/***/ function(module, exports) {

	"use strict";
	
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	/**
	 * Allows extraction of a minified key. Let's the build system minify keys
	 * without losing the ability to dynamically use key strings as values
	 * themselves. Pass in an object with a single key/val pair and it will return
	 * you the string key of that single record. Suppose you want to grab the
	 * value for a key 'className' inside of an object. Key/val minification may
	 * have aliased that key to be 'xa12'. keyOf({className: null}) will return
	 * 'xa12' in that case. Resolve keys you want to use once at startup time, then
	 * reuse those resolutions.
	 */
	var keyOf = function keyOf(oneKeyObj) {
	  var key;
	  for (key in oneKeyObj) {
	    if (!oneKeyObj.hasOwnProperty(key)) {
	      continue;
	    }
	    return key;
	  }
	  return null;
	};
	
	module.exports = keyOf;

/***/ },
/* 693 */
/***/ function(module, exports) {

	
	
	'use strict';
	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};
	
	function merge(one, two) {
	  return _extends({}, one, two);
	}
	
	module.exports = merge;

/***/ },
/* 694 */
/***/ function(module, exports, __webpack_require__) {

	
	
	'use strict';
	
	var _buildStyleInterpolator = __webpack_require__(691);var _buildStyleInterpolator2 = _interopRequireDefault(_buildStyleInterpolator);
	var _merge = __webpack_require__(693);var _merge2 = _interopRequireDefault(_merge);function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	var NAV_BAR_HEIGHT = 56;
	var TITLE_LEFT = 72;
	var BUTTON_SIZE = 24;
	var TOUCH_TARGT_SIZE = 48;
	var BUTTON_HORIZONTAL_MARGIN = 16;
	
	var BUTTON_EFFECTIVE_MARGIN = BUTTON_HORIZONTAL_MARGIN - (TOUCH_TARGT_SIZE - BUTTON_SIZE) / 2;
	var NAV_ELEMENT_HEIGHT = NAV_BAR_HEIGHT;
	
	var BASE_STYLES = {
	  Title: {
	    position: 'absolute',
	    bottom: 0,
	    left: 0,
	    right: 0,
	    alignItems: 'flex-start',
	    height: NAV_ELEMENT_HEIGHT,
	    backgroundColor: 'transparent',
	    marginLeft: TITLE_LEFT },
	
	  LeftButton: {
	    position: 'absolute',
	    top: 0,
	    left: BUTTON_EFFECTIVE_MARGIN,
	    overflow: 'hidden',
	    height: NAV_ELEMENT_HEIGHT,
	    backgroundColor: 'transparent' },
	
	  RightButton: {
	    position: 'absolute',
	    top: 0,
	    right: BUTTON_EFFECTIVE_MARGIN,
	    overflow: 'hidden',
	    alignItems: 'flex-end',
	    height: NAV_ELEMENT_HEIGHT,
	    backgroundColor: 'transparent' } };
	
	var Stages = {
	  Left: {
	    Title: (0, _merge2.default)(BASE_STYLES.Title, { opacity: 0 }),
	    LeftButton: (0, _merge2.default)(BASE_STYLES.LeftButton, { opacity: 0 }),
	    RightButton: (0, _merge2.default)(BASE_STYLES.RightButton, { opacity: 0 }) },
	
	  Center: {
	    Title: (0, _merge2.default)(BASE_STYLES.Title, { opacity: 1 }),
	    LeftButton: (0, _merge2.default)(BASE_STYLES.LeftButton, { opacity: 1 }),
	    RightButton: (0, _merge2.default)(BASE_STYLES.RightButton, { opacity: 1 }) },
	
	  Right: {
	    Title: (0, _merge2.default)(BASE_STYLES.Title, { opacity: 0 }),
	    LeftButton: (0, _merge2.default)(BASE_STYLES.LeftButton, { opacity: 0 }),
	    RightButton: (0, _merge2.default)(BASE_STYLES.RightButton, { opacity: 0 }) } };
	
	var opacityRatio = 100;
	
	function buildSceneInterpolators(startStyles, endStyles) {
	  return {
	    Title: (0, _buildStyleInterpolator2.default)({
	      opacity: {
	        type: 'linear',
	        from: startStyles.Title.opacity,
	        to: endStyles.Title.opacity,
	        min: 0,
	        max: 1 },
	
	      left: {
	        type: 'linear',
	        from: startStyles.Title.left,
	        to: endStyles.Title.left,
	        min: 0,
	        max: 1,
	        extrapolate: true } }),
	
	    LeftButton: (0, _buildStyleInterpolator2.default)({
	      opacity: {
	        type: 'linear',
	        from: startStyles.LeftButton.opacity,
	        to: endStyles.LeftButton.opacity,
	        min: 0,
	        max: 1,
	        round: opacityRatio },
	
	      left: {
	        type: 'linear',
	        from: startStyles.LeftButton.left,
	        to: endStyles.LeftButton.left,
	        min: 0,
	        max: 1 } }),
	
	    RightButton: (0, _buildStyleInterpolator2.default)({
	      opacity: {
	        type: 'linear',
	        from: startStyles.RightButton.opacity,
	        to: endStyles.RightButton.opacity,
	        min: 0,
	        max: 1,
	        round: opacityRatio },
	
	      left: {
	        type: 'linear',
	        from: startStyles.RightButton.left,
	        to: endStyles.RightButton.left,
	        min: 0,
	        max: 1,
	        extrapolate: true } }) };
	}
	
	var Interpolators = {
	
	  RightToCenter: buildSceneInterpolators(Stages.Right, Stages.Center),
	
	  CenterToLeft: buildSceneInterpolators(Stages.Center, Stages.Left),
	
	  RightToLeft: buildSceneInterpolators(Stages.Right, Stages.Left) };
	
	module.exports = {
	  General: {
	    NavBarHeight: NAV_BAR_HEIGHT,
	    StatusBarHeight: 0,
	    TotalNavHeight: NAV_BAR_HEIGHT },
	
	  Interpolators: Interpolators,
	  Stages: Stages };

/***/ },
/* 695 */
/***/ function(module, exports) {

	
	
	'use strict';
	
	var Platform = {
	  OS: 'web',
	  select: function select(platform) {
	    return platform.web || platform.ios;
	  } };
	
	module.exports = Platform;

/***/ },
/* 696 */
/***/ function(module, exports, __webpack_require__) {

	
	
	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _react = __webpack_require__(301);var _react2 = _interopRequireDefault(_react);
	var _ReactNavigatorNavigationBarStylesAndroid = __webpack_require__(694);var _ReactNavigatorNavigationBarStylesAndroid2 = _interopRequireDefault(_ReactNavigatorNavigationBarStylesAndroid);
	var _ReactNavigatorNavigationBarStylesIOS = __webpack_require__(690);var _ReactNavigatorNavigationBarStylesIOS2 = _interopRequireDefault(_ReactNavigatorNavigationBarStylesIOS);
	var _ReactStyleSheet = __webpack_require__(333);var _ReactStyleSheet2 = _interopRequireDefault(_ReactStyleSheet);
	
	var _ReactView = __webpack_require__(343);var _ReactView2 = _interopRequireDefault(_ReactView);
	var _ReactDimensions = __webpack_require__(594);var _ReactDimensions2 = _interopRequireDefault(_ReactDimensions);
	var _immutable = __webpack_require__(687);
	var _autobindDecorator = __webpack_require__(494);var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var COMPONENT_NAMES = ['Title', 'LeftButton', 'RightButton'];
	
	var NavigatorNavigationBarStyles = _ReactStyleSheet2.default.OS === 'android' ? _ReactNavigatorNavigationBarStylesAndroid2.default : _ReactNavigatorNavigationBarStylesIOS2.default;
	
	var navStatePresentedIndex = function navStatePresentedIndex(navState) {
	  if (navState.presentedIndex !== undefined) {
	    return navState.presentedIndex;
	  }
	
	  return navState.observedTopOfStack;
	};var NavigatorNavigationBar = function (_Component) {
	  _inherits(NavigatorNavigationBar, _Component);
	
	  function NavigatorNavigationBar(props) {
	    _classCallCheck(this, NavigatorNavigationBar);var _this = _possibleConstructorReturn(this, (NavigatorNavigationBar.__proto__ || Object.getPrototypeOf(NavigatorNavigationBar)).call(this, props));
	
	    _this._components = {};
	    _this._descriptors = {};
	
	    COMPONENT_NAMES.forEach(function (componentName) {
	      _this._components[componentName] = new _immutable.Map();
	      _this._descriptors[componentName] = new _immutable.Map();
	    });
	
	    _this._handleResize = _this._handleResize.bind(_this);return _this;
	  }_createClass(NavigatorNavigationBar, [{ key: '_getReusableProps', value: function _getReusableProps(componentName, index) {
	      if (!this._reusableProps) {
	        this._reusableProps = {};
	      }
	      var propStack = this._reusableProps[componentName];
	      if (!propStack) {
	        propStack = this._reusableProps[componentName] = [];
	      }
	      var props = propStack[index];
	      if (!props) {
	        props = propStack[index] = { style: {} };
	      }
	      return props;
	    } }, { key: '_updateIndexProgress', value: function _updateIndexProgress(progress, index, fromIndex, toIndex) {
	      var amount = toIndex > fromIndex ? progress : 1 - progress;
	      var oldDistToCenter = index - fromIndex;
	      var newDistToCenter = index - toIndex;
	      var interpolate;
	      if (oldDistToCenter > 0 && newDistToCenter === 0 || newDistToCenter > 0 && oldDistToCenter === 0) {
	        interpolate = this.props.navigationStyles.Interpolators.RightToCenter;
	      } else if (oldDistToCenter < 0 && newDistToCenter === 0 || newDistToCenter < 0 && oldDistToCenter === 0) {
	        interpolate = this.props.navigationStyles.Interpolators.CenterToLeft;
	      } else if (oldDistToCenter === newDistToCenter) {
	        interpolate = this.props.navigationStyles.Interpolators.RightToCenter;
	      } else {
	        interpolate = this.props.navigationStyles.Interpolators.RightToLeft;
	      }
	
	      COMPONENT_NAMES.forEach(function (componentName) {
	        var component = this._components[componentName].get(this.props.navState.routeStack[index]);
	        var props = this._getReusableProps(componentName, index);
	        if (component && interpolate[componentName](props.style, amount)) {
	          component.setNativeProps(props);
	        }
	      }, this);
	    } }, { key: 'updateProgress', value: function updateProgress(progress, fromIndex, toIndex) {
	      var max = Math.max(fromIndex, toIndex);
	      var min = Math.min(fromIndex, toIndex);
	      for (var index = min; index <= max; index++) {
	        this._updateIndexProgress(progress, index, fromIndex, toIndex);
	      }
	    } }, { key: 'componentWillMount', value: function componentWillMount() {
	      window.addEventListener('resize', this._handleResize);
	    } }, { key: 'componentWillUnmount', value: function componentWillUnmount() {
	      window.removeEventListener('resize', this._handleResize);
	      clearTimeout(this._resizeTimeout);
	    } }, { key: '_handleResize', value: function _handleResize() {
	      var self = this;
	      clearTimeout(this._resizeTimeout);
	
	      this._resizeTimeout = setTimeout(function () {
	        self.setState({ dimensions: _ReactDimensions2.default.get('window') });
	      }, 100);
	    } }, { key: 'render', value: function render() {
	      var navBarStyle = {
	        height: this.props.navigationStyles.General.TotalNavHeight };
	
	      var navState = this.props.navState;
	      var components = COMPONENT_NAMES.map(function (componentName) {
	        return navState.routeStack.map(this._getComponent.bind(this, componentName));
	      }, this);
	
	      return _react2.default.createElement(_ReactView2.default, { style: [styles.navBarContainer, navBarStyle, this.props.style] }, components);
	    } }, { key: '_getComponent', value: function _getComponent(componentName, route, index) {
	      var _this2 = this;
	      if (this._descriptors[componentName].includes(route)) {
	        return this._descriptors[componentName].get(route);
	      }
	
	      var rendered = null;
	
	      var content = this.props.routeMapper[componentName](this.props.navState.routeStack[index], this.props.navigator, index, this.props.navState);
	
	      if (!content) {
	        return null;
	      }
	
	      var initialStage = index === navStatePresentedIndex(this.props.navState) ? this.props.navigationStyles.Stages.Center : this.props.navigationStyles.Stages.Left;
	      rendered = _react2.default.createElement(_ReactView2.default, {
	        ref: function ref(_ref) {
	          _this2._components[componentName] = _this2._components[componentName].set(route, _ref);
	        },
	        style: initialStage[componentName] }, content);
	
	      this._descriptors[componentName] = this._descriptors[componentName].set(route, rendered);
	      return rendered;
	    } }]);return NavigatorNavigationBar;
	}(_react.Component);NavigatorNavigationBar.propTypes = { navigator: _react.PropTypes.object, routeMapper: _react.PropTypes.shape({ Title: _react.PropTypes.func.isRequired, LeftButton: _react.PropTypes.func.isRequired, RightButton: _react.PropTypes.func.isRequired }).isRequired, navState: _react.PropTypes.shape({ routeStack: _react.PropTypes.arrayOf(_react.PropTypes.object), presentedIndex: _react.PropTypes.number }), navigationStyles: _react.PropTypes.object, style: _ReactView2.default.propTypes.style };NavigatorNavigationBar.statics = { Styles: NavigatorNavigationBarStyles, StylesAndroid: _ReactNavigatorNavigationBarStylesAndroid2.default, StylesIOS: _ReactNavigatorNavigationBarStylesIOS2.default };NavigatorNavigationBar.defaultProps = { navigationStyles: NavigatorNavigationBarStyles };
	
	;
	
	var styles = _ReactStyleSheet2.default.create({
	  navBarContainer: {
	    position: 'absolute',
	    top: 0,
	    left: 0,
	    right: 0,
	    backgroundColor: 'transparent' } });
	
	(0, _autobindDecorator2.default)(NavigatorNavigationBar);
	
	module.exports = NavigatorNavigationBar;

/***/ },
/* 697 */
/***/ function(module, exports, __webpack_require__) {

	
	
	'use strict';
	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};
	
	var _ReactDimensions = __webpack_require__(594);var _ReactDimensions2 = _interopRequireDefault(_ReactDimensions);
	var _ReactPixelRatio = __webpack_require__(698);var _ReactPixelRatio2 = _interopRequireDefault(_ReactPixelRatio);
	var _buildStyleInterpolator = __webpack_require__(691);var _buildStyleInterpolator2 = _interopRequireDefault(_buildStyleInterpolator);function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	var SCREEN_WIDTH = _ReactDimensions2.default.get('window').width;
	var SCREEN_HEIGHT = _ReactDimensions2.default.get('window').height;
	
	var FadeToTheLeft = {
	
	  transformTranslate: {
	    from: { x: 0, y: 0, z: 0 },
	    to: { x: -Math.round(_ReactDimensions2.default.get('window').width * 0.3), y: 0, z: 0 },
	    min: 0,
	    max: 1,
	    type: 'linear',
	    extrapolate: true,
	    round: _ReactPixelRatio2.default.get() },
	
	  transformScale: {
	    from: { x: 1, y: 1, z: 1 },
	    to: { x: 0.95, y: 0.95, z: 1 },
	    min: 0,
	    max: 1,
	    type: 'linear',
	    extrapolate: true },
	
	  opacity: {
	    from: 1,
	    to: 0.3,
	    min: 0,
	    max: 1,
	    type: 'linear',
	    extrapolate: false,
	    round: 100 },
	
	  translateX: {
	    from: 0,
	    to: -Math.round(_ReactDimensions2.default.get('window').width * 0.3),
	    min: 0,
	    max: 1,
	    type: 'linear',
	    extrapolate: true,
	    round: _ReactPixelRatio2.default.get() },
	
	  scaleX: {
	    from: 1,
	    to: 0.95,
	    min: 0,
	    max: 1,
	    type: 'linear',
	    extrapolate: true },
	
	  scaleY: {
	    from: 1,
	    to: 0.95,
	    min: 0,
	    max: 1,
	    type: 'linear',
	    extrapolate: true } };
	
	var FadeToTheRight = _extends({}, FadeToTheLeft, {
	  transformTranslate: {
	    from: { x: 0, y: 0, z: 0 },
	    to: { x: Math.round(SCREEN_WIDTH * 0.3), y: 0, z: 0 } },
	
	  translateX: {
	    from: 0,
	    to: Math.round(SCREEN_WIDTH * 0.3) } });
	
	var FadeIn = {
	  opacity: {
	    from: 0,
	    to: 1,
	    min: 0.5,
	    max: 1,
	    type: 'linear',
	    extrapolate: false,
	    round: 100 } };
	
	var FadeOut = {
	  opacity: {
	    from: 1,
	    to: 0,
	    min: 0,
	    max: 0.5,
	    type: 'linear',
	    extrapolate: false,
	    round: 100 } };
	
	var ToTheLeft = {
	  transformTranslate: {
	    from: { x: 0, y: 0, z: 0 },
	    to: { x: -_ReactDimensions2.default.get('window').width, y: 0, z: 0 },
	    min: 0,
	    max: 1,
	    type: 'linear',
	    extrapolate: true,
	    round: _ReactPixelRatio2.default.get() },
	
	  opacity: {
	    value: 1.0,
	    type: 'constant' },
	
	  translateX: {
	    from: 0,
	    to: -_ReactDimensions2.default.get('window').width,
	    min: 0,
	    max: 1,
	    type: 'linear',
	    extrapolate: true,
	    round: _ReactPixelRatio2.default.get() } };
	
	var ToTheUp = {
	  transformTranslate: {
	    from: { x: 0, y: 0, z: 0 },
	    to: { x: 0, y: -_ReactDimensions2.default.get('window').height, z: 0 },
	    min: 0,
	    max: 1,
	    type: 'linear',
	    extrapolate: true,
	    round: _ReactPixelRatio2.default.get() },
	
	  opacity: {
	    value: 1.0,
	    type: 'constant' },
	
	  translateY: {
	    from: 0,
	    to: -_ReactDimensions2.default.get('window').height,
	    min: 0,
	    max: 1,
	    type: 'linear',
	    extrapolate: true,
	    round: _ReactPixelRatio2.default.get() } };
	
	var ToTheDown = {
	  transformTranslate: {
	    from: { x: 0, y: 0, z: 0 },
	    to: { x: 0, y: _ReactDimensions2.default.get('window').height, z: 0 },
	    min: 0,
	    max: 1,
	    type: 'linear',
	    extrapolate: true,
	    round: _ReactPixelRatio2.default.get() },
	
	  opacity: {
	    value: 1.0,
	    type: 'constant' },
	
	  translateY: {
	    from: 0,
	    to: _ReactDimensions2.default.get('window').height,
	    min: 0,
	    max: 1,
	    type: 'linear',
	    extrapolate: true,
	    round: _ReactPixelRatio2.default.get() } };
	
	var FromTheRight = {
	  opacity: {
	    value: 1.0,
	    type: 'constant' },
	
	  transformTranslate: {
	    from: { x: _ReactDimensions2.default.get('window').width, y: 0, z: 0 },
	    to: { x: 0, y: 0, z: 0 },
	    min: 0,
	    max: 1,
	    type: 'linear',
	    extrapolate: true,
	    round: _ReactPixelRatio2.default.get() },
	
	  translateX: {
	    from: _ReactDimensions2.default.get('window').width,
	    to: 0,
	    min: 0,
	    max: 1,
	    type: 'linear',
	    extrapolate: true,
	    round: _ReactPixelRatio2.default.get() },
	
	  scaleX: {
	    value: 1,
	    type: 'constant' },
	
	  scaleY: {
	    value: 1,
	    type: 'constant' } };
	
	var FromTheLeft = _extends({}, FromTheRight, {
	  transformTranslate: {
	    from: { x: -SCREEN_WIDTH, y: 0, z: 0 },
	    to: { x: 0, y: 0, z: 0 },
	    min: 0,
	    max: 1,
	    type: 'linear',
	    extrapolate: true,
	    round: _ReactPixelRatio2.default.get() },
	
	  translateX: {
	    from: -SCREEN_WIDTH,
	    to: 0,
	    min: 0,
	    max: 1,
	    type: 'linear',
	    extrapolate: true,
	    round: _ReactPixelRatio2.default.get() } });
	
	var FromTheDown = _extends({}, FromTheRight, {
	  transformTranslate: {
	    from: { y: SCREEN_HEIGHT, x: 0, z: 0 },
	    to: { x: 0, y: 0, z: 0 },
	    min: 0,
	    max: 1,
	    type: 'linear',
	    extrapolate: true,
	    round: _ReactPixelRatio2.default.get() },
	
	  translateY: {
	    from: SCREEN_HEIGHT,
	    to: 0,
	    min: 0,
	    max: 1,
	    type: 'linear',
	    extrapolate: true,
	    round: _ReactPixelRatio2.default.get() } });
	
	var FromTheTop = _extends({}, FromTheRight, {
	  transformTranslate: {
	    from: { y: -SCREEN_HEIGHT, x: 0, z: 0 },
	    to: { x: 0, y: 0, z: 0 },
	    min: 0,
	    max: 1,
	    type: 'linear',
	    extrapolate: true,
	    round: _ReactPixelRatio2.default.get() },
	
	  translateY: {
	    from: -SCREEN_HEIGHT,
	    to: 0,
	    min: 0,
	    max: 1,
	    type: 'linear',
	    extrapolate: true,
	    round: _ReactPixelRatio2.default.get() } });
	
	var ToTheBack = {
	
	  transformTranslate: {
	    from: { x: 0, y: 0, z: 0 },
	    to: { x: 0, y: 0, z: 0 },
	    min: 0,
	    max: 1,
	    type: 'linear',
	    extrapolate: true,
	    round: _ReactPixelRatio2.default.get() },
	
	  transformScale: {
	    from: { x: 1, y: 1, z: 1 },
	    to: { x: 0.95, y: 0.95, z: 1 },
	    min: 0,
	    max: 1,
	    type: 'linear',
	    extrapolate: true },
	
	  opacity: {
	    from: 1,
	    to: 0.3,
	    min: 0,
	    max: 1,
	    type: 'linear',
	    extrapolate: false,
	    round: 100 },
	
	  scaleX: {
	    from: 1,
	    to: 0.95,
	    min: 0,
	    max: 1,
	    type: 'linear',
	    extrapolate: true },
	
	  scaleY: {
	    from: 1,
	    to: 0.95,
	    min: 0,
	    max: 1,
	    type: 'linear',
	    extrapolate: true } };
	
	var FromTheFront = {
	  opacity: {
	    value: 1.0,
	    type: 'constant' },
	
	  transformTranslate: {
	    from: { x: 0, y: _ReactDimensions2.default.get('window').height, z: 0 },
	    to: { x: 0, y: 0, z: 0 },
	    min: 0,
	    max: 1,
	    type: 'linear',
	    extrapolate: true,
	    round: _ReactPixelRatio2.default.get() },
	
	  translateY: {
	    from: _ReactDimensions2.default.get('window').height,
	    to: 0,
	    min: 0,
	    max: 1,
	    type: 'linear',
	    extrapolate: true,
	    round: _ReactPixelRatio2.default.get() },
	
	  scaleX: {
	    value: 1,
	    type: 'constant' },
	
	  scaleY: {
	    value: 1,
	    type: 'constant' } };
	
	var ToTheBackAndroid = {
	  opacity: {
	    value: 1,
	    type: 'constant' } };
	
	var FromTheFrontAndroid = {
	  opacity: {
	    from: 0,
	    to: 1,
	    min: 0.5,
	    max: 1,
	    type: 'linear',
	    extrapolate: false,
	    round: 100 },
	
	  transformTranslate: {
	    from: { x: 0, y: 100, z: 0 },
	    to: { x: 0, y: 0, z: 0 },
	    min: 0,
	    max: 1,
	    type: 'linear',
	    extrapolate: true,
	    round: _ReactPixelRatio2.default.get() },
	
	  translateY: {
	    from: 100,
	    to: 0,
	    min: 0,
	    max: 1,
	    type: 'linear',
	    extrapolate: true,
	    round: _ReactPixelRatio2.default.get() } };
	
	var BaseOverswipeConfig = {
	  frictionConstant: 1,
	  frictionByDistance: 1.5 };
	
	var BaseLeftToRightGesture = {
	
	  isDetachable: false,
	
	  gestureDetectMovement: 2,
	
	  notMoving: 0.3,
	
	  directionRatio: 0.66,
	
	  snapVelocity: 2,
	
	  edgeHitWidth: 30,
	
	  stillCompletionRatio: 3 / 5,
	
	  fullDistance: SCREEN_WIDTH,
	
	  direction: 'left-to-right' };
	
	var BaseRightToLeftGesture = _extends({}, BaseLeftToRightGesture, {
	  direction: 'right-to-left' });
	
	var BaseDownUpGesture = _extends({}, BaseLeftToRightGesture, {
	  fullDistance: SCREEN_HEIGHT,
	  direction: 'down-to-up' });
	
	var BaseUpDownGesture = _extends({}, BaseLeftToRightGesture, {
	  fullDistance: SCREEN_HEIGHT,
	  direction: 'up-to-down' });
	
	var BaseConfig = {
	
	  gestures: {
	    pop: BaseLeftToRightGesture },
	
	  springFriction: 26,
	  springTension: 200,
	
	  defaultTransitionVelocity: 1.5,
	
	  animationInterpolators: {
	    into: (0, _buildStyleInterpolator2.default)(FromTheRight),
	    out: (0, _buildStyleInterpolator2.default)(FadeToTheLeft) } };
	
	var NavigatorSceneConfigs = {
	  PushFromRight: _extends({}, BaseConfig),
	
	  FloatFromRight: _extends({}, BaseConfig),
	
	  FloatFromLeft: _extends({}, BaseConfig, {
	    animationInterpolators: {
	      into: (0, _buildStyleInterpolator2.default)(FromTheLeft),
	      out: (0, _buildStyleInterpolator2.default)(FadeToTheRight) } }),
	
	  FloatFromBottom: _extends({}, BaseConfig, {
	    gestures: {
	      pop: _extends({}, BaseLeftToRightGesture, {
	        edgeHitWidth: 150,
	        direction: 'top-to-bottom',
	        fullDistance: SCREEN_HEIGHT }) },
	
	    animationInterpolators: {
	      into: (0, _buildStyleInterpolator2.default)(FromTheFront),
	      out: (0, _buildStyleInterpolator2.default)(ToTheBack) } }),
	
	  FloatFromBottomAndroid: _extends({}, BaseConfig, {
	    gestures: null,
	    defaultTransitionVelocity: 3,
	    springFriction: 20,
	    animationInterpolators: {
	      into: (0, _buildStyleInterpolator2.default)(FromTheFrontAndroid),
	      out: (0, _buildStyleInterpolator2.default)(ToTheBackAndroid) } }),
	
	  FadeAndroid: _extends({}, BaseConfig, {
	    gestures: null,
	    animationInterpolators: {
	      into: (0, _buildStyleInterpolator2.default)(FadeIn),
	      out: (0, _buildStyleInterpolator2.default)(FadeOut) } }),
	
	  HorizontalSwipeJump: _extends({}, BaseConfig, {
	    gestures: {
	      jumpBack: _extends({}, BaseLeftToRightGesture, {
	        overswipe: BaseOverswipeConfig,
	        edgeHitWidth: null,
	        isDetachable: true }),
	
	      jumpForward: _extends({}, BaseRightToLeftGesture, {
	        overswipe: BaseOverswipeConfig,
	        edgeHitWidth: null,
	        isDetachable: true }) },
	
	    animationInterpolators: {
	      into: (0, _buildStyleInterpolator2.default)(FromTheRight),
	      out: (0, _buildStyleInterpolator2.default)(ToTheLeft) } }),
	
	  VerticalUpSwipeJump: _extends({}, BaseConfig, {
	    gestures: {
	      jumpBack: _extends({}, BaseDownUpGesture, {
	        overswipe: BaseOverswipeConfig,
	        edgeHitWidth: null,
	        isDetachable: true }),
	
	      jumpForward: _extends({}, BaseDownUpGesture, {
	        overswipe: BaseOverswipeConfig,
	        edgeHitWidth: null,
	        isDetachable: true }) },
	
	    animationInterpolators: {
	      into: (0, _buildStyleInterpolator2.default)(FromTheDown),
	      out: (0, _buildStyleInterpolator2.default)(ToTheUp) } }),
	
	  VerticalDownSwipeJump: _extends({}, BaseConfig, {
	    gestures: {
	      jumpBack: _extends({}, BaseUpDownGesture, {
	        overswipe: BaseOverswipeConfig,
	        edgeHitWidth: null,
	        isDetachable: true }),
	
	      jumpForward: _extends({}, BaseUpDownGesture, {
	        overswipe: BaseOverswipeConfig,
	        edgeHitWidth: null,
	        isDetachable: true }) },
	
	    animationInterpolators: {
	      into: (0, _buildStyleInterpolator2.default)(FromTheTop),
	      out: (0, _buildStyleInterpolator2.default)(ToTheDown) } }) };
	
	module.exports = NavigatorSceneConfigs;

/***/ },
/* 698 */
/***/ function(module, exports, __webpack_require__) {

	
	
	'use strict';
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _ReactDimensions = __webpack_require__(594);var _ReactDimensions2 = _interopRequireDefault(_ReactDimensions);function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}var PixelRatio = function () {
	  function PixelRatio() {
	    _classCallCheck(this, PixelRatio);
	  }_createClass(PixelRatio, null, [{ key: 'get', value: function get() {
	      return _ReactDimensions2.default.get('window').scale;
	    } }, { key: 'getFontScale', value: function getFontScale() {
	      return _ReactDimensions2.default.get('window').fontScale || PixelRatio.get();
	    } }, { key: 'getPixelSizeForLayoutSize', value: function getPixelSizeForLayoutSize(layoutSize) {
	      return Math.round(layoutSize * PixelRatio.get());
	    } }, { key: 'startDetecting', value: function startDetecting() {} }]);return PixelRatio;
	}();
	
	module.exports = PixelRatio;

/***/ },
/* 699 */
/***/ function(module, exports) {

	
	
	'use strict';
	
	var Subscribable = {};
	
	Subscribable.Mixin = {
	
	  componentWillMount: function componentWillMount() {
	    this._subscribableSubscriptions = [];
	  },
	
	  componentWillUnmount: function componentWillUnmount() {
	    this._subscribableSubscriptions.forEach(function (subscription) {
	      return subscription.remove();
	    });
	
	    this._subscribableSubscriptions = null;
	  },
	
	  addListenerOn: function addListenerOn(eventEmitter, eventType, listener, context) {
	    this._subscribableSubscriptions.push(eventEmitter.addListener(eventType, listener, context));
	  } };
	
	module.exports = Subscribable;

/***/ },
/* 700 */
/***/ function(module, exports) {

	"use strict";
	
	function clamp(min, value, max) {
	  if (value < min) {
	    return min;
	  }
	  if (value > max) {
	    return max;
	  }
	  return value;
	}
	
	module.exports = clamp;

/***/ },
/* 701 */,
/* 702 */,
/* 703 */,
/* 704 */,
/* 705 */,
/* 706 */,
/* 707 */,
/* 708 */,
/* 709 */,
/* 710 */,
/* 711 */,
/* 712 */,
/* 713 */,
/* 714 */,
/* 715 */,
/* 716 */,
/* 717 */,
/* 718 */,
/* 719 */
/***/ function(module, exports, __webpack_require__) {

	
	
	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	Object.defineProperty(exports, "__esModule", { value: true });var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _react = __webpack_require__(301);var _react2 = _interopRequireDefault(_react);
	var _autobindDecorator = __webpack_require__(494);var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var PICKER = 'picker';var Picker = function (_Component) {
	  _inherits(Picker, _Component);function Picker() {
	    _classCallCheck(this, Picker);return _possibleConstructorReturn(this, (Picker.__proto__ || Object.getPrototypeOf(Picker)).apply(this, arguments));
	  }_createClass(Picker, [{ key: '_onChange', value: function _onChange(event) {
	
	      event.nativeEvent.newValue = this.refs[PICKER].value;
	
	      if (this.props.onChange) {
	        this.props.onChange(event);
	      }
	
	      if (this.props.onValueChange) {
	        this.props.onValueChange(event.nativeEvent.newValue);
	      }
	    } }, { key: 'render', value: function render() {
	      return _react2.default.createElement('select', {
	        ref: PICKER,
	        value: this.props.selectedValue,
	        style: _extends({
	          margin: 10,
	          color: 'inherit',
	          font: 'inherit' }, this.props.style),
	        onChange: this._onChange }, this.props.children);
	    } }]);return Picker;
	}(_react.Component);Picker.propTypes = { onValueChange: _react.PropTypes.func, selectedValue: _react.PropTypes.any };
	;
	
	Picker.Item = _react2.default.createClass({ displayName: 'Item',
	  propTypes: {
	    value: _react.PropTypes.any,
	    label: _react.PropTypes.string },
	
	  render: function render() {
	    return _react2.default.createElement('option', { value: this.props.value }, this.props.label);
	  } });
	
	(0, _autobindDecorator2.default)(Picker);
	
	Picker.isReactNativeComponent = true;exports.default = Picker;

/***/ },
/* 720 */
/***/ function(module, exports, __webpack_require__) {

	
	
	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _react = __webpack_require__(301);var _react2 = _interopRequireDefault(_react);
	var _ReactView = __webpack_require__(343);var _ReactView2 = _interopRequireDefault(_ReactView);
	var _ReactStyleSheet = __webpack_require__(333);var _ReactStyleSheet2 = _interopRequireDefault(_ReactStyleSheet);
	var _NativeMethodsMixin = __webpack_require__(484);
	var _reactMixin = __webpack_require__(491);var _reactMixin2 = _interopRequireDefault(_reactMixin);
	var _autobindDecorator = __webpack_require__(494);var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}var ProgressView = function (_Component) {
	  _inherits(ProgressView, _Component);function ProgressView() {
	    _classCallCheck(this, ProgressView);return _possibleConstructorReturn(this, (ProgressView.__proto__ || Object.getPrototypeOf(ProgressView)).apply(this, arguments));
	  }_createClass(ProgressView, [{ key: 'render', value: function render() {
	
	      var specificStyle = {
	        progressTint: {},
	        progressTrack: {} };
	
	      if (this.props.trackImage) {
	        specificStyle.progressTrack.background = 'url(' + this.props.trackImage.uri + ') no-repeat 0 0';
	        specificStyle.progressTrack.backgroundSize = '100% 100%';
	      }
	
	      if (this.props.trackTintColor) {
	        specificStyle.progressTrack.background = this.props.trackTintColor;
	      }
	
	      if (this.props.progressViewStyle == 'bar') {
	        specificStyle.progressTrack.background = 'transparent';
	      }
	
	      if (this.props.progressImage) {
	        specificStyle.progressTint.background = 'url(' + this.props.progressImage.uri + ') no-repeat 0 0';
	        specificStyle.progressTint.backgroundSize = '100% 100%';
	      }
	
	      if (this.props.progressTintColor) {
	        specificStyle.progressTint.background = this.props.progressTintColor;
	      }
	
	      var progress = this.props.progress;
	      if (progress >= 1) {
	        progress = 1;
	      } else if (progress <= 0) {
	        progress = 0;
	      }
	
	      specificStyle.progressTint.width = 100 * progress + '%';
	
	      specificStyle = _ReactStyleSheet2.default.create(specificStyle);
	
	      return _react2.default.createElement(_ReactView2.default, { style: [styles.progressView, this.props.style] }, _react2.default.createElement(_ReactView2.default, { style: [styles.progressTrack, specificStyle.progressTrack] }, _react2.default.createElement(_ReactView2.default, { style: [styles.progressTint, specificStyle.progressTint] })));
	    } }]);return ProgressView;
	}(_react.Component);
	;
	
	var styles = _ReactStyleSheet2.default.create({
	  progressView: {
	    display: 'block',
	    height: '2px',
	    width: '100%' },
	
	  progressTint: {
	    position: 'absolute',
	    left: 0,
	    width: 0,
	    height: '100%',
	    background: '#0079fe' },
	
	  progressTrack: {
	    position: 'relative',
	    width: '100%',
	    height: '100%',
	    background: '#b4b4b4' } });
	
	_reactMixin2.default.onClass(ProgressView, _NativeMethodsMixin.Mixin);
	(0, _autobindDecorator2.default)(ProgressView);
	ProgressView.isReactNativeComponent = true;exports.default = ProgressView;

/***/ },
/* 721 */
/***/ function(module, exports, __webpack_require__) {

	
	
	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	Object.defineProperty(exports, "__esModule", { value: true });var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _react = __webpack_require__(301);var _react2 = _interopRequireDefault(_react);
	var _ReactView = __webpack_require__(343);var _ReactView2 = _interopRequireDefault(_ReactView);
	var _ReactText = __webpack_require__(584);var _ReactText2 = _interopRequireDefault(_ReactText);
	var _ReactStyleSheet = __webpack_require__(333);var _ReactStyleSheet2 = _interopRequireDefault(_ReactStyleSheet);
	var _NativeMethodsMixin = __webpack_require__(484);
	var _reactMixin = __webpack_require__(491);var _reactMixin2 = _interopRequireDefault(_reactMixin);
	var _autobindDecorator = __webpack_require__(494);var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}var SegmentedControl = function (_Component) {
	  _inherits(SegmentedControl, _Component);function SegmentedControl() {
	    var _ref;var _temp, _this, _ret;_classCallCheck(this, SegmentedControl);for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SegmentedControl.__proto__ || Object.getPrototypeOf(SegmentedControl)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      selectedIndex: _this.props.selectedIndex,
	      momentary: false }, _temp), _possibleConstructorReturn(_this, _ret);
	  }_createClass(SegmentedControl, [{ key: '_onChange', value: function _onChange(value, index, event) {
	      var _this2 = this;
	
	      if (this.state.selectedIndex == index) return;
	
	      this.setState({
	        selectedIndex: index });
	
	      if (!event) {
	        event = {
	          nativeEvent: {} };
	      }
	
	      event.nativeEvent.value = value;
	      event.nativeEvent.selectedSegmentIndex = index;
	      this.props.onChange && this.props.onChange(event);
	      this.props.onValueChange && this.props.onValueChange(event.nativeEvent.value);
	
	      if (this.props.momentary) {
	        setTimeout(function () {
	          return _this2.setState({
	            selectedIndex: null });
	        }, 300);
	      }
	    } }, { key: 'render', value: function render() {
	      var _this3 = this;
	      var props = this.props;
	
	      var items = props.values.map(function (value, index) {
	        return _react2.default.createElement(_ReactView2.default, { key: index, style: [styles.segmentedControlItem, props.tintColor ? { borderColor: props.tintColor } : null, _this3.state.selectedIndex === index ? [styles.segmentedControlItemSelected, props.tintColor ? { backgroundColor: props.tintColor } : null] : null, index === 0 ? styles.firstChild : styles.otherChild, index === props.values.length - 1 ? styles.lastChild : null] }, _react2.default.createElement(_ReactText2.default, { style: [styles.segmentedControlText, props.tintColor ? {
	            color: props.tintColor } : null, _this3.state.selectedIndex === index ? styles.segmentedControlTextSelected : null],
	
	          onPress: props.enabled ? _this3._onChange.bind(_this3, value, index) : null }, ' ', value, ' '));
	      });
	
	      return _react2.default.createElement(_ReactView2.default, _extends({}, this.props, { style: [styles.segmentedControl, props.enabled ? null : styles.disable, this.props.style] }), items);
	    } }]);return SegmentedControl;
	}(_react.Component);SegmentedControl.propTypes = { values: _react.PropTypes.arrayOf(_react.PropTypes.string), selectedIndex: _react.PropTypes.number, onValueChange: _react.PropTypes.func, onChange: _react.PropTypes.func, enabled: _react.PropTypes.bool, tintColor: _react.PropTypes.string, momentary: _react.PropTypes.bool };SegmentedControl.defaultProps = { values: [], enabled: true };
	;
	
	var defaultColor = '#007AFF';
	
	var styles = _ReactStyleSheet2.default.create({
	  segmentedControl: {
	    height: 28,
	    justifyContent: 'center',
	    flexDirection: 'row' },
	
	  segmentedControlItem: {
	    flex: 1,
	    backgroundColor: 'white',
	    borderColor: defaultColor,
	    borderStyle: 'solid',
	    borderTopWidth: 1,
	    borderBottomWidth: 1,
	    borderRightWidth: 1,
	    borderLeftWidth: 1 },
	
	  segmentedControlItemSelected: {
	    backgroundColor: defaultColor },
	
	  segmentedControlText: {
	    color: defaultColor,
	    fontSize: 12,
	    lineHeight: 12,
	    padding: '7 0',
	    textAlign: 'center' },
	
	  segmentedControlTextSelected: {
	    color: 'white' },
	
	  disable: {
	    opacity: 0.5 },
	
	  firstChild: {
	    borderTopLeftRadius: 3,
	    borderBottomLeftRadius: 3,
	    borderRightWidth: 0 },
	
	  otherChild: {
	    borderRightWidth: 0 },
	
	  lastChild: {
	    borderTopRightRadius: 3,
	    borderBottomRightRadius: 3,
	    borderRightWidth: 1 } });
	
	_reactMixin2.default.onClass(SegmentedControl, _NativeMethodsMixin.Mixin);
	(0, _autobindDecorator2.default)(SegmentedControl);
	
	SegmentedControl.isReactNativeComponent = true;exports.default = SegmentedControl;

/***/ },
/* 722 */
/***/ function(module, exports, __webpack_require__) {

	
	
	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	Object.defineProperty(exports, "__esModule", { value: true });var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _react = __webpack_require__(301);var _react2 = _interopRequireDefault(_react);
	var _reactDom = __webpack_require__(345);var _reactDom2 = _interopRequireDefault(_reactDom);
	var _ReactStyleSheet = __webpack_require__(333);var _ReactStyleSheet2 = _interopRequireDefault(_ReactStyleSheet);
	var _ReactView = __webpack_require__(343);var _ReactView2 = _interopRequireDefault(_ReactView);
	var _ReactImage = __webpack_require__(580);var _ReactImage2 = _interopRequireDefault(_ReactImage);
	var _ReactPanResponder = __webpack_require__(587);var _ReactPanResponder2 = _interopRequireDefault(_ReactPanResponder);function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}function _objectWithoutProperties(obj, keys) {
	  var target = {};for (var i in obj) {
	    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	  }return target;
	}function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var TRACK_SIZE = 4;
	var THUMB_SIZE = 20;
	
	function noop() {}var Slider = function (_Component) {
	  _inherits(Slider, _Component);
	  function Slider(props) {
	    _classCallCheck(this, Slider);var _this = _possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).call(this, props));
	    _this.state = {
	      value: props.value };return _this;
	  }_createClass(Slider, [{ key: 'componentWillMount', value: function componentWillMount() {
	      this._panResponder = _ReactPanResponder2.default.create({
	        onStartShouldSetPanResponder: this._handleStartShouldSetPanResponder.bind(this),
	        onMoveShouldSetPanResponder: this._handleMoveShouldSetPanResponder.bind(this),
	        onPanResponderGrant: this._handlePanResponderGrant.bind(this),
	        onPanResponderMove: this._handlePanResponderMove.bind(this),
	        onPanResponderRelease: this._handlePanResponderEnd.bind(this),
	        onPanResponderTerminate: this._handlePanResponderEnd.bind(this) });
	    } }, { key: 'render', value: function render() {
	      var _props = this.props;var minimumTrackTintColor = _props.minimumTrackTintColor;var maximumTrackTintColor = _props.maximumTrackTintColor;var styles = _props.styles;var style = _props.style;var trackStyle = _props.trackStyle;var thumbStyle = _props.thumbStyle;var thumbTintColor = _props.thumbTintColor;var thumbImage = _props.thumbImage;var disabled = _props.disabled;var other = _objectWithoutProperties(_props, ['minimumTrackTintColor', 'maximumTrackTintColor', 'styles', 'style', 'trackStyle', 'thumbStyle', 'thumbTintColor', 'thumbImage', 'disabled']);
	      var mainStyles = styles || defaultStyles;
	      var trackHeight = trackStyle && trackStyle.height || defaultStyles.track.height;
	      var thumbHeight = thumbStyle && thumbStyle.height || defaultStyles.thumb.height;
	      var minTrackWidth = this._getMinTrackWidth();
	      var minimumTrackStyle = {
	        width: minTrackWidth,
	        marginTop: -trackHeight,
	        backgroundColor: minimumTrackTintColor };
	
	      return _react2.default.createElement(_ReactView2.default, { style: [mainStyles.container, style] }, _react2.default.createElement(_ReactView2.default, { ref: 'totalTrack',
	        style: [{ backgroundColor: maximumTrackTintColor }, mainStyles.track, trackStyle, disabled && { backgroundColor: mainStyles.disabled.backgroundColor }] }), _react2.default.createElement(_ReactView2.default, { ref: 'minTrack', style: [mainStyles.track, trackStyle, minimumTrackStyle] }), thumbImage && thumbImage.uri && _react2.default.createElement(_ReactImage2.default, _extends({ ref: 'thumb', source: thumbImage, style: [{ width: mainStyles.thumb.width, height: mainStyles.thumb.height }, thumbStyle, { left: minTrackWidth, position: 'relative', display: 'block' }, { marginLeft: -thumbHeight / 2, marginTop: -(thumbHeight + trackHeight) / 2 }] }, this._panResponder.panHandlers)) || _react2.default.createElement(_ReactView2.default, _extends({ ref: 'thumb', style: [{ backgroundColor: thumbTintColor, left: minTrackWidth }, mainStyles.thumb, thumbStyle, { marginLeft: -thumbHeight / 2, marginTop: -(thumbHeight + trackHeight) / 2 }, disabled && { boxShadow: mainStyles.disabled.boxShadow }] }, this._panResponder.panHandlers)));
	    } }, { key: '_handleStartShouldSetPanResponder', value: function _handleStartShouldSetPanResponder() {
	      return !this.props.disabled;
	    } }, { key: '_handleMoveShouldSetPanResponder', value: function _handleMoveShouldSetPanResponder() {
	      return false;
	    } }, { key: '_handlePanResponderGrant', value: function _handlePanResponderGrant(e, gestureState) {
	      this.previousLeft = this._getWidth('minTrack');
	      this.previousValue = this.state.value;
	      this._fireProcessEvent('onSlidingStart');
	    } }, { key: '_handlePanResponderMove', value: function _handlePanResponderMove(e, gestureState) {
	      this.setState({ value: this._getValue(gestureState) });
	      this._fireProcessEvent('onValueChange');
	    } }, { key: '_handlePanResponderEnd', value: function _handlePanResponderEnd(e, gestureState) {
	      this.setState({ value: this._getValue(gestureState) });
	      this._fireProcessEvent('onSlidingComplete');
	    } }, { key: '_fireProcessEvent', value: function _fireProcessEvent(event) {
	      if (this.props[event]) {
	        this.props[event](this.state.value);
	      }
	    } }, { key: '_getValue', value: function _getValue(gestureState) {
	      var _props2 = this.props;var step = _props2.step;var maximumValue = _props2.maximumValue;var minimumValue = _props2.minimumValue;
	      var totalWidth = this._getWidth('totalTrack');
	      var thumbLeft = Math.min(totalWidth, Math.max(0, this.previousLeft + gestureState.dx)),
	          ratio = thumbLeft / totalWidth,
	          newValue = ratio * (maximumValue - minimumValue) + minimumValue;
	      if (step > 0) {
	        return Math.round(newValue / step) * step;
	      } else {
	        return newValue;
	      }
	    } }, { key: '_getWidth', value: function _getWidth(ref) {
	      if (this.refs[ref]) {
	        var node = _reactDom2.default.findDOMNode(this.refs[ref]),
	            rect = node.getBoundingClientRect();
	        return rect.width;
	      }
	    } }, { key: '_getMinTrackWidth', value: function _getMinTrackWidth() {
	      var value = this.state.value;
	      return 100 * (value - this.props.minimumValue) / (this.props.maximumValue - this.props.minimumValue) + '%';
	    } }]);return Slider;
	}(_react.Component);
	
	Slider.propTypes = {
	
	  style: _ReactView2.default.propTypes.style,
	
	  value: _react.PropTypes.number,
	
	  step: _react.PropTypes.number,
	
	  minimumValue: _react.PropTypes.number,
	
	  maximumValue: _react.PropTypes.number,
	
	  minimumTrackTintColor: _react.PropTypes.string,
	
	  maximumTrackTintColor: _react.PropTypes.string,
	
	  disabled: _react.PropTypes.bool,
	
	  trackImage: _react.PropTypes.any,
	
	  thumbImage: _react.PropTypes.any,
	
	  onValueChange: _react.PropTypes.func,
	
	  onSlidingComplete: _react.PropTypes.func };
	
	Slider.defaultProps = {
	  value: 0,
	  step: 0,
	  minimumValue: 0,
	  maximumValue: 1,
	  minimumTrackTintColor: '#0f85fb',
	  maximumTrackTintColor: '#b3b3b3',
	  thumbTintColor: '#fff',
	  disabled: false,
	  onValueChange: noop,
	  onSlidingComplete: noop };
	
	var defaultStyles = _ReactStyleSheet2.default.create({
	  container: {
	    height: 40,
	    justifyContent: 'center',
	    position: 'relative' },
	
	  track: {
	    height: TRACK_SIZE,
	    borderRadius: TRACK_SIZE / 2 },
	
	  thumb: {
	    width: THUMB_SIZE,
	    height: THUMB_SIZE,
	    borderRadius: THUMB_SIZE / 2,
	    boxShadow: '2px 3px 10px rgba(0,0,0,0.75)' },
	
	  disabled: {
	    backgroundColor: '#dadada',
	    boxShadow: '2px 3px 10px rgba(0,0,0,0.25)' } });
	
	Slider.isReactNativeComponent = true;exports.default = Slider;

/***/ },
/* 723 */
/***/ function(module, exports, __webpack_require__) {

	
	
	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	Object.defineProperty(exports, "__esModule", { value: true });var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _react = __webpack_require__(301);var _react2 = _interopRequireDefault(_react);
	var _NativeMethodsMixin = __webpack_require__(484);
	var _ReactStyleSheet = __webpack_require__(333);var _ReactStyleSheet2 = _interopRequireDefault(_ReactStyleSheet);
	var _reactMixin = __webpack_require__(491);var _reactMixin2 = _interopRequireDefault(_reactMixin);
	var _autobindDecorator = __webpack_require__(494);var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}var Switch = function (_Component) {
	  _inherits(Switch, _Component);function Switch() {
	    var _ref;var _temp, _this, _ret;_classCallCheck(this, Switch);for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Switch.__proto__ || Object.getPrototypeOf(Switch)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      value: _this.props.value,
	      disabled: _this.props.disabled }, _temp), _possibleConstructorReturn(_this, _ret);
	  }_createClass(Switch, [{ key: 'componentWillReceiveProps', value: function componentWillReceiveProps(nextProps) {
	      this.setState({
	        value: nextProps.value,
	        disabled: nextProps.disabled });
	    } }, { key: 'getStyles', value: function getStyles() {
	      return _ReactStyleSheet2.default.create({
	        span: {
	          position: 'relative',
	          display: 'inline-block',
	          margin: 2,
	          height: 30,
	          width: 50,
	          cursor: 'default',
	          verticalAlign: 'middle',
	          borderRadius: 20,
	          borderColor: '#dfdfdf',
	          borderWidth: 1,
	          borderStyle: 'solid',
	          WebkitUserSelect: 'none',
	          WebkitBoxSizing: 'content-box',
	          WebkitBackfaceVisibility: 'hidden' },
	
	        checkedSpan: {
	          borderColor: this.props.onTintColor,
	          backgroundColor: this.props.onTintColor,
	          boxShadow: this.props.onTintColor + ' 0 0 0 16px inset',
	          WebkitTransition: 'border 0.2s, box-shadow 0.2s, background-color 1s' },
	
	        uncheckedSpan: {
	          borderColor: '#dfdfdf',
	          backgroundColor: this.props.tintColor,
	          boxShadow: '#dfdfdf 0 0 0 0 inset',
	          WebkitTransition: 'border 0.2s, box-shadow 0.2s' },
	
	        disabledSpan: {
	          opacity: 0.5,
	          cursor: 'not-allowed',
	          boxShadow: 'none' },
	
	        small: {
	          position: 'absolute',
	          top: 0,
	          width: 30,
	          height: 30,
	          backgroundColor: this.props.thumbTintColor,
	          borderRadius: '100%',
	          boxShadow: '0 1px 3px rgba(0,0,0,0.4)',
	          WebkitTransition: '-webkit-transform 0.2s ease-in' },
	
	        checkedSmall: {
	          WebkitTransform: 'translateX(20px)' },
	
	        uncheckedSmall: {
	          WebkitTransform: 'translateX(0)' } });
	    } }, { key: 'handleClick', value: function handleClick(e) {
	      if (this.state.disabled) {
	        return null;
	      }
	
	      var newVal = !this.state.value;
	      this.props.onValueChange && this.props.onValueChange.call(this, newVal);
	      this.setState({
	        value: newVal });
	
	      var oldValue = this.props.value;
	      setTimeout(function () {
	        if (this.props.value == oldValue) {
	          this.setState({
	            value: this.props.value });
	        }
	      }.bind(this), 200);
	    } }, { key: 'render', value: function render() {
	      var styles = this.getStyles();
	      var spancss = this.state.value ? _extends({}, styles.span, styles.checkedSpan) : _extends({}, styles.span, styles.uncheckedSpan);
	      var smallcss = this.state.value ? _extends({}, styles.small, styles.checkedSmall) : _extends({}, styles.small, styles.uncheckedSmall);
	      spancss = this.state.disabled ? _extends({}, spancss, styles.disabledSpan) : spancss;
	
	      return _react2.default.createElement('span', { onClick: this.handleClick, style: spancss }, _react2.default.createElement('small', { style: smallcss }));
	    } }]);return Switch;
	}(_react.Component);Switch.propTypes = { value: _react.PropTypes.bool, disabled: _react.PropTypes.bool, onValueChange: _react.PropTypes.func, onTintColor: _react.PropTypes.string, thumbTintColor: _react.PropTypes.string, tintColor: _react.PropTypes.string };Switch.defaultProps = { onTintColor: '#00e158', thumbTintColor: '#fff', tintColor: '#fff' };
	
	;
	
	_reactMixin2.default.onClass(Switch, _NativeMethodsMixin.Mixin);
	(0, _autobindDecorator2.default)(Switch);
	
	Switch.isReactNativeComponent = true;exports.default = Switch;

/***/ },
/* 724 */
/***/ function(module, exports) {

	
	
	'use strict';
	
	var emptyFunction = function emptyFunction() {};
	
	var StatusBar = {
	  setHidden: emptyFunction,
	  setBarStyle: emptyFunction,
	  setNetworkActivityIndicatorVisible: emptyFunction,
	  setBackgroundColor: emptyFunction,
	  setTranslucent: emptyFunction };
	
	module.exports = StatusBar;

/***/ },
/* 725 */
/***/ function(module, exports, __webpack_require__) {

	
	
	'use strict';
	Object.defineProperty(exports, "__esModule", { value: true });
	
	var _react = __webpack_require__(301);var _react2 = _interopRequireDefault(_react);
	var _ReactView = __webpack_require__(343);var _ReactView2 = _interopRequireDefault(_ReactView);
	var _TabBarItem = __webpack_require__(726);var _TabBarItem2 = _interopRequireDefault(_TabBarItem);
	var _TabBarContents = __webpack_require__(727);var _TabBarContents2 = _interopRequireDefault(_TabBarContents);
	var _objectAssign = __webpack_require__(605);var _objectAssign2 = _interopRequireDefault(_objectAssign);
	var _ReactStyleSheet = __webpack_require__(333);var _ReactStyleSheet2 = _interopRequireDefault(_ReactStyleSheet);function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	var TabBar = _react2.default.createClass({ displayName: 'TabBar',
	  getInitialState: function getInitialState() {
	    return {
	      selectedIndex: 0 };
	  },
	
	  statics: {
	    Item: _TabBarItem2.default },
	
	  propTypes: {
	    style: _react2.default.PropTypes.object,
	
	    tintColor: _react2.default.PropTypes.string,
	
	    barTintColor: _react2.default.PropTypes.string,
	
	    clientHeight: _react2.default.PropTypes.number },
	
	  getStyles: function getStyles() {
	    return _ReactStyleSheet2.default.create({
	      container: {
	        width: '100%',
	        height: this.props.clientHeight || document.documentElement.clientHeight,
	        position: 'relative',
	        overflow: 'hidden' },
	
	      content: {
	        width: '100%',
	        height: '100%' },
	
	      bar: {
	        width: '100%',
	        position: 'absolute',
	        padding: 0,
	        margin: 0,
	        listStyle: 'none',
	        left: 0,
	        bottom: 0,
	
	        backgroundColor: 'rgba(250,250,250,.96)',
	        display: 'table' } });
	  },
	
	  handleTouchTap: function handleTouchTap(index) {
	    this.setState({
	      selectedIndex: index });
	  },
	
	  render: function render() {
	    var self = this;
	    var styles = self.getStyles();
	    var barStyle = (0, _objectAssign2.default)(styles.bar, this.props.style || {}, this.props.barTintColor ? {
	      backgroundColor: this.props.barTintColor } : {});
	
	    var tabContent = [];
	
	    var tabs = _react2.default.Children.map(this.props.children, function (tab, index) {
	      if (tab.type.displayName === 'TabBarItem') {
	        if (tab.props.children) {
	          tabContent.push(_react2.default.createElement(_TabBarContents2.default, {
	            key: index,
	            selected: self.state.selectedIndex === index }, tab.props.children));
	        } else {
	          tabContent.push(undefined);
	        }
	
	        return _react2.default.cloneElement(tab, {
	          index: index,
	          selected: self.state.selectedIndex === index,
	          selectedColor: self.props.tintColor,
	          handleTouchTap: self.handleTouchTap });
	      } else {
	        var type = tab.type.displayName || tab.type;
	        throw 'Tabbar only accepts TabBar.Item Components as children. Found ' + type + ' as child number ' + (index + 1) + ' of Tabbar';
	      }
	    });
	
	    return _react2.default.createElement(_ReactView2.default, { style: styles.container }, _react2.default.createElement(_ReactView2.default, { style: styles.content }, tabContent), _react2.default.createElement('ul', { style: barStyle }, tabs));
	  } });
	
	TabBar.isReactNativeComponent = true;exports.default = TabBar;

/***/ },
/* 726 */
/***/ function(module, exports, __webpack_require__) {

	
	
	'use strict';
	Object.defineProperty(exports, "__esModule", { value: true });var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};
	
	var _react = __webpack_require__(301);var _react2 = _interopRequireDefault(_react);
	var _ReactImage = __webpack_require__(580);var _ReactImage2 = _interopRequireDefault(_ReactImage);
	var _ReactText = __webpack_require__(584);var _ReactText2 = _interopRequireDefault(_ReactText);
	var _ReactView = __webpack_require__(343);var _ReactView2 = _interopRequireDefault(_ReactView);
	var _ReactStyleSheet = __webpack_require__(333);var _ReactStyleSheet2 = _interopRequireDefault(_ReactStyleSheet);function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	var TabBarItem = _react2.default.createClass({ displayName: 'TabBarItem',
	  propTypes: {
	
	    badge: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
	
	    icon: _react.PropTypes.object,
	
	    selectedIcon: _react.PropTypes.string,
	
	    onPress: _react.PropTypes.func,
	
	    selected: _react.PropTypes.bool,
	
	    style: _react.PropTypes.object,
	
	    title: _react.PropTypes.string,
	
	    selectedColor: _react.PropTypes.string },
	
	  _onClick: function _onClick() {
	    if (this.props.onPress) {
	      this.props.onPress();
	    }
	    if (this.props.handleTouchTap) {
	      this.props.handleTouchTap(this.props.index);
	    }
	  },
	
	  render: function render() {
	
	    var tabStyle = _extends({}, styles.tab, this.props.style || {}, { color: this.props.selectedColor && this.props.selected ? this.props.selectedColor : null });
	
	    return _react2.default.createElement('li', { style: tabStyle }, _react2.default.createElement('a', { onClick: this._onClick, style: styles.link }, this.props.badge ? _react2.default.createElement('em', { style: styles.badge }, this.props.badge) : '', _react2.default.createElement(_ReactImage2.default, { source: this.props.selected && this.props.selectedIcon ? this.props.selectedIcon : this.props.icon, style: styles.icon }), _react2.default.createElement(_ReactView2.default, { style: { marginTop: 4 } }, _react2.default.createElement(_ReactText2.default, { style: styles.title }, this.props.title))));
	  } });
	
	var styles = _ReactStyleSheet2.default.create({
	  tab: {
	    display: 'table-cell',
	    textAlign: 'center',
	    position: 'relative' },
	
	  link: {
	    display: 'block',
	    padding: '0.3em 0' },
	
	  badge: {
	    display: 'inline-block',
	    position: 'absolute',
	    top: 0,
	    left: '52%',
	    color: '#FFF',
	    backgroundColor: '#FF0000',
	    height: '1.6em',
	    lineHeight: '1.6em',
	    minWidth: '1.6em',
	    fontSize: '0.7em',
	    borderRadius: '0.8em',
	    fontStyle: 'normal' },
	
	  icon: {
	    width: '1.875em',
	    height: '1.875em' },
	
	  title: {
	    fontSize: 12 } });exports.default = TabBarItem;

/***/ },
/* 727 */
/***/ function(module, exports, __webpack_require__) {

	
	
	'use strict';
	Object.defineProperty(exports, "__esModule", { value: true });
	
	var _react = __webpack_require__(301);var _react2 = _interopRequireDefault(_react);
	var _ReactView = __webpack_require__(343);var _ReactView2 = _interopRequireDefault(_ReactView);
	var _ReactStyleSheet = __webpack_require__(333);var _ReactStyleSheet2 = _interopRequireDefault(_ReactStyleSheet);function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	var TabBarContents = _react2.default.createClass({ displayName: 'TabBarContents',
	
	  getInitialState: function getInitialState() {
	    return {
	      hasBeenSelected: false };
	  },
	
	  componentWillMount: function componentWillMount() {
	    if (this.props.selected) {
	      this.setState({
	        hasBeenSelected: true });
	    }
	  },
	
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    if (this.state.hasBeenSelected || nextProps.selected) {
	      this.setState({
	        hasBeenSelected: true });
	    }
	  },
	
	  render: function render() {
	
	    var styles = _ReactStyleSheet2.default.create({
	      'display': 'none',
	      'width': '100%',
	      'height': '100%',
	      'position': 'relative' });
	
	    if (this.props.selected) {
	      delete styles.display;
	    }
	
	    var tabContents = null;
	
	    if (this.state.hasBeenSelected) {
	      tabContents = _react2.default.createElement(_ReactView2.default, { style: styles }, this.props.children);
	    }
	
	    return tabContents;
	  } });exports.default = TabBarContents;

/***/ },
/* 728 */
/***/ function(module, exports, __webpack_require__) {

	
	
	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	Object.defineProperty(exports, "__esModule", { value: true });var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _react = __webpack_require__(301);var _react2 = _interopRequireDefault(_react);
	var _reactDom = __webpack_require__(345);var _reactDom2 = _interopRequireDefault(_reactDom);
	var _ReactView = __webpack_require__(343);var _ReactView2 = _interopRequireDefault(_ReactView);
	var _autobindDecorator = __webpack_require__(494);var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var typeMap = {
	  'default': 'text',
	  'ascii-capable': 'text',
	  'numbers-and-punctuation': 'number',
	  'url': 'url',
	  'number-pad': 'number',
	  'phone-pad': 'tel',
	  'name-phone-pad': 'text',
	  'email-address': 'email',
	  'decimal-pad': 'number',
	  'twitter': 'text',
	  'web-search': 'search',
	  'numeric': 'number' };var TextInput = function (_Component) {
	  _inherits(TextInput, _Component);function TextInput() {
	    _classCallCheck(this, TextInput);return _possibleConstructorReturn(this, (TextInput.__proto__ || Object.getPrototypeOf(TextInput)).apply(this, arguments));
	  }_createClass(TextInput, [{ key: '_onBlur', value: function _onBlur(e) {
	      var onBlur = this.props.onBlur;
	      if (onBlur) {
	        e.nativeEvent.text = e.target.value;
	        onBlur(e);
	      }
	    } }, { key: '_onChange', value: function _onChange(e) {
	      var _props = this.props;var onChange = _props.onChange;var onChangeText = _props.onChangeText;
	      if (onChangeText) onChangeText(e.target.value);
	      if (onChange) {
	        e.nativeEvent.text = e.target.value;
	        onChange(e);
	      }
	    } }, { key: '_onFocus', value: function _onFocus(e) {
	      var _props2 = this.props;var clearTextOnFocus = _props2.clearTextOnFocus;var onFocus = _props2.onFocus;var selectTextOnFocus = _props2.selectTextOnFocus;
	      var node = _reactDom2.default.findDOMNode(this);
	      if (clearTextOnFocus) node.value = '';
	      if (selectTextOnFocus) node.select();
	      if (onFocus) {
	        e.nativeEvent.text = e.target.value;
	        onFocus(e);
	      }
	    } }, { key: '_onSelectionChange', value: function _onSelectionChange(e) {
	      var onSelectionChange = this.props.onSelectionChange;
	
	      if (onSelectionChange) {
	        var _e$target = e.target;var selectionDirection = _e$target.selectionDirection;var selectionEnd = _e$target.selectionEnd;var selectionStart = _e$target.selectionStart;
	        e.nativeEvent.text = e.target.value;
	        var event = {
	          selectionDirection: selectionDirection,
	          selectionEnd: selectionEnd,
	          selectionStart: selectionStart,
	          nativeEvent: e.nativeEvent };
	
	        onSelectionChange(event);
	      }
	    } }, { key: 'componentDidMount', value: function componentDidMount() {
	      if (this.props.autoFocus) {
	        _reactDom2.default.findDOMNode(this.refs.input).focus();
	      }
	    } }, { key: 'render', value: function render() {
	      var _props3 = this.props;var accessibilityLabel = _props3.accessibilityLabel;var autoComplete = _props3.autoComplete;var autoFocus = _props3.autoFocus;var defaultValue = _props3.defaultValue;var editable = _props3.editable;var keyboardType = _props3.keyboardType;var maxLength = _props3.maxLength;var maxNumberOfLines = _props3.maxNumberOfLines;var multiline = _props3.multiline;var numberOfLines = _props3.numberOfLines;var onBlur = _props3.onBlur;var onChange = _props3.onChange;var onKeyDown = _props3.onKeyDown;var onKeyUp = _props3.onKeyUp;var onKeyPress = _props3.onKeyPress;var onChangeText = _props3.onChangeText;var onSelectionChange = _props3.onSelectionChange;var placeholder = _props3.placeholder;var password = _props3.password;var secureTextEntry = _props3.secureTextEntry;var style = _props3.style;var testID = _props3.testID;var value = _props3.value;
	
	      var propsCommon = {
	        ref: 'input',
	        'aria-label': accessibilityLabel,
	        autoComplete: autoComplete && 'on',
	        autoFocus: autoFocus,
	        defaultValue: defaultValue,
	        maxLength: maxLength,
	        onBlur: onBlur && this._onBlur,
	        onChange: (onChange || onChangeText) && this._onChange,
	        onFocus: this._onFocus,
	        onSelect: onSelectionChange && this._onSelectionChange,
	        placeholder: placeholder,
	        readOnly: !editable,
	        style: _extends({}, styles.initial, style),
	
	        testID: testID,
	        value: value,
	        onKeyDown: onKeyDown,
	        onKeyUp: onKeyUp,
	        onKeyPress: onKeyPress };
	
	      var input = void 0;
	      if (multiline) {
	        var propsMultiline = _extends({}, propsCommon, {
	          maxRows: maxNumberOfLines || numberOfLines,
	          minRows: numberOfLines });
	
	        input = _react2.default.createElement('textarea', propsMultiline);
	      } else {
	
	        var type = typeMap[keyboardType];
	
	        if (password || secureTextEntry) {
	          type = 'password';
	        }
	
	        var propsSingleline = _extends({}, propsCommon, {
	          type: type });
	
	        input = _react2.default.createElement('input', propsSingleline);
	      }
	
	      if (this.props.children) {
	        return _react2.default.createElement(_ReactView2.default, null, input, this.props.children);
	      } else {
	        return input;
	      }
	    } }]);return TextInput;
	}(_react.Component);TextInput.defaultProps = { editable: true, multiline: false, secureTextEntry: false, keyboardType: 'default', autoFocus: false };
	;
	
	var styles = {
	  initial: {
	    appearance: 'none',
	    backgroundColor: 'transparent',
	    borderColor: 'black',
	    borderWidth: 0,
	    boxSizing: 'border-box',
	    color: 'inherit',
	    font: 'inherit',
	    padding: 0,
	    height: 30 } };
	
	(0, _autobindDecorator2.default)(TextInput);
	
	TextInput.isReactNativeComponent = true;exports.default = TextInput;

/***/ },
/* 729 */
/***/ function(module, exports, __webpack_require__) {

	
	
	'use strict';
	Object.defineProperty(exports, "__esModule", { value: true });
	
	var _react = __webpack_require__(301);var _react2 = _interopRequireDefault(_react);
	var _ReactPortal = __webpack_require__(730);var _ReactPortal2 = _interopRequireDefault(_ReactPortal);
	var _ReactText = __webpack_require__(584);var _ReactText2 = _interopRequireDefault(_ReactText);
	var _ReactStyleSheet = __webpack_require__(333);var _ReactStyleSheet2 = _interopRequireDefault(_ReactStyleSheet);function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	var LONG_DELAY = 3500;
	var SHORT_DELAY = 2000;
	
	var Toast = {
	
	  SHORT: SHORT_DELAY,
	  LONG: LONG_DELAY,
	
	  show: function show(message, duration) {
	    _ReactPortal2.default.showModal('toast', _react2.default.createElement(_ReactText2.default, { style: styles.container }, message));
	    setTimeout(function () {
	      return _ReactPortal2.default.closeModal('toast');
	    }, duration);
	  } };
	
	var styles = _ReactStyleSheet2.default.create({
	  container: {
	    backgroundColor: 'rgba(0,0,0,.65)',
	    color: '#ffffff',
	    padding: '4 8',
	    position: 'absolute',
	    left: '50%',
	    bottom: '50%',
	    fontSize: 14,
	    lineHeight: 18,
	    borderRadius: 2,
	    transform: 'translateX(-50%)' } });exports.default = Toast;

/***/ },
/* 730 */
/***/ function(module, exports, __webpack_require__) {

	
	
	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _react = __webpack_require__(301);var _react2 = _interopRequireDefault(_react);
	var _ReactPlatform = __webpack_require__(695);var _ReactPlatform2 = _interopRequireDefault(_ReactPlatform);
	var _ReactStyleSheet = __webpack_require__(333);var _ReactStyleSheet2 = _interopRequireDefault(_ReactStyleSheet);
	var _ReactView = __webpack_require__(343);var _ReactView2 = _interopRequireDefault(_ReactView);
	var _autobindDecorator = __webpack_require__(494);var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var _portalRef;
	
	var lastUsedTag = 0;var Portal = function (_Component) {
	  _inherits(Portal, _Component);function Portal() {
	    var _ref;var _temp, _this, _ret;_classCallCheck(this, Portal);for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Portal.__proto__ || Object.getPrototypeOf(Portal)).call.apply(_ref, [this].concat(args))), _this), _this.state = { modals: {} }, _temp), _possibleConstructorReturn(_this, _ret);
	  }_createClass(Portal, [{ key: '_showModal', value: function _showModal(tag, component) {
	
	      if (this._getOpenModals().length === 0 && this.props.onModalVisibilityChanged) {
	        this.props.onModalVisibilityChanged(true);
	      }
	
	      this.setState(function (state) {
	        var modals = state.modals;
	        modals[tag] = component;
	        return { modals: modals };
	      });
	    } }, { key: '_closeModal', value: function _closeModal(tag) {
	      if (!this.state.modals.hasOwnProperty(tag)) {
	        return;
	      }
	
	      if (this._getOpenModals().length === 1 && this.props.onModalVisibilityChanged) {
	        this.props.onModalVisibilityChanged(false);
	      }
	
	      this.setState(function (state) {
	        var modals = state.modals;
	        delete modals[tag];
	        return { modals: modals };
	      });
	    } }, { key: '_getOpenModals', value: function _getOpenModals() {
	      return Object.keys(this.state.modals);
	    } }, { key: 'render', value: function render() {
	      _portalRef = this;
	      if (!this.state.modals) {
	        return null;
	      }
	      var modals = [];
	      for (var tag in this.state.modals) {
	        modals.push(this.state.modals[tag]);
	      }
	      if (modals.length === 0) {
	        return null;
	      }
	      return _react2.default.createElement(_ReactView2.default, {
	        style: styles.modalsContainer }, modals);
	    } }], [{ key: 'allocateTag', value: function allocateTag() {
	      return '__modal_' + ++lastUsedTag;
	    } }, { key: 'showModal', value: function showModal(tag, component) {
	      if (!_portalRef) {
	        console.error('Calling showModal but no Portal has been rendered.');return;
	      }_portalRef._showModal(tag, component);
	    } }, { key: 'closeModal', value: function closeModal(tag) {
	      if (!_portalRef) {
	        console.error('Calling closeModal but no Portal has been rendered.');return;
	      }_portalRef._closeModal(tag);
	    } }, { key: 'getOpenModals', value: function getOpenModals() {
	      if (!_portalRef) {
	        console.error('Calling getOpenModals but no Portal has been rendered.');return [];
	      }return _portalRef._getOpenModals();
	    } }]);return Portal;
	}(_react.Component);
	
	;
	
	var styles = _ReactStyleSheet2.default.create({
	  modalsContainer: {
	    position: 'absolute',
	    left: 0,
	    top: 0,
	    right: 0,
	    bottom: 0 } });
	
	Portal.isReactNativeComponent = true;
	
	(0, _autobindDecorator2.default)(Portal);exports.default = Portal;

/***/ },
/* 731 */
/***/ function(module, exports, __webpack_require__) {

	
	
	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _react = __webpack_require__(301);var _react2 = _interopRequireDefault(_react);
	var _ReactView = __webpack_require__(343);var _ReactView2 = _interopRequireDefault(_ReactView);
	var _reactTimerMixin = __webpack_require__(604);var _reactTimerMixin2 = _interopRequireDefault(_reactTimerMixin);
	var _ReactTouchableWithoutFeedback = __webpack_require__(732);var _ReactTouchableWithoutFeedback2 = _interopRequireDefault(_ReactTouchableWithoutFeedback);
	var _ReactTouchable = __webpack_require__(585);
	var _NativeMethodsMixin = __webpack_require__(484);
	var _ReactStyleSheet = __webpack_require__(333);var _ReactStyleSheet2 = _interopRequireDefault(_ReactStyleSheet);
	var _reactMixin = __webpack_require__(491);var _reactMixin2 = _interopRequireDefault(_reactMixin);
	var _autobindDecorator = __webpack_require__(494);var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var DEFAULT_PROPS = {
	  activeOpacity: 0.8,
	  underlayColor: 'black',
	  style: _ReactStyleSheet2.default.create({
	    cursor: 'pointer' }) };
	
	var PRESS_RECT_OFFSET = { top: 20, left: 20, right: 20, bottom: 30 };
	var CHILD_REF = 'childRef';
	var UNDERLAY_REF = 'underlayRef';
	var INACTIVE_CHILD_PROPS = {
	  style: _ReactStyleSheet2.default.create({ x: { opacity: 1.0 } }).x };
	
	var INACTIVE_UNDERLAY_PROPS = {
	  style: _ReactStyleSheet2.default.create({ x: { backgroundColor: 'transparent' } }).x };var TouchableHighlight = function (_Component) {
	  _inherits(TouchableHighlight, _Component);function TouchableHighlight() {
	    var _ref;var _temp, _this, _ret;_classCallCheck(this, TouchableHighlight);for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TouchableHighlight.__proto__ || Object.getPrototypeOf(TouchableHighlight)).call.apply(_ref, [this].concat(args))), _this), _this.state = _extends({}, _this.touchableGetInitialState(), _this.computeSyntheticState(_this.props)), _temp), _possibleConstructorReturn(_this, _ret);
	  }_createClass(TouchableHighlight, [{ key: 'computeSyntheticState', value: function computeSyntheticState(props) {
	      return {
	        activeProps: {
	          style: {
	            opacity: props.activeOpacity } },
	
	        activeUnderlayProps: {
	          style: {
	            backgroundColor: props.underlayColor } },
	
	        underlayStyle: [DEFAULT_PROPS.style, INACTIVE_UNDERLAY_PROPS.style, props.style] };
	    } }, { key: 'componentDidUpdate', value: function componentDidUpdate() {} }, { key: 'componentWillReceiveProps', value: function componentWillReceiveProps(nextProps) {
	
	      if (nextProps.activeOpacity !== this.props.activeOpacity || nextProps.underlayColor !== this.props.underlayColor || nextProps.style !== this.props.style) {
	        this.setState(this.computeSyntheticState(nextProps));
	      }
	    } }, { key: 'touchableHandleActivePressIn', value: function touchableHandleActivePressIn(e) {
	      this.clearTimeout(this._hideTimeout);
	      this._hideTimeout = null;
	      this._showUnderlay();
	      this.props.onPressIn && this.props.onPressIn(e);
	    } }, { key: 'touchableHandleActivePressOut', value: function touchableHandleActivePressOut(e) {
	      if (!this._hideTimeout) {
	        this._hideUnderlay();
	      }
	      this.props.onPressOut && this.props.onPressOut(e);
	    } }, { key: 'touchableHandlePress', value: function touchableHandlePress(e) {
	      this.clearTimeout(this._hideTimeout);
	      this._showUnderlay();
	      this._hideTimeout = this.setTimeout(this._hideUnderlay, this.props.delayPressOut || 100);
	
	      var touchBank = e.touchHistory.touchBank[e.touchHistory.indexOfSingleActiveTouch];
	      if (touchBank) {
	        var offset = Math.sqrt(Math.pow(touchBank.startPageX - touchBank.currentPageX, 2) + Math.pow(touchBank.startPageY - touchBank.currentPageY, 2));
	        var velocity = offset / (touchBank.currentTimeStamp - touchBank.startTimeStamp) * 1000;
	        if (velocity < 100) this.props.onPress && this.props.onPress(e);
	      } else {
	        this.props.onPress && this.props.onPress(e);
	      }
	    } }, { key: 'touchableHandleLongPress', value: function touchableHandleLongPress(e) {
	      this.props.onLongPress && this.props.onLongPress(e);
	    } }, { key: 'touchableGetPressRectOffset', value: function touchableGetPressRectOffset() {
	      return PRESS_RECT_OFFSET;
	    } }, { key: 'touchableGetHighlightDelayMS', value: function touchableGetHighlightDelayMS() {
	      return this.props.delayPressIn;
	    } }, { key: 'touchableGetLongPressDelayMS', value: function touchableGetLongPressDelayMS() {
	      return this.props.delayLongPress;
	    } }, { key: 'touchableGetPressOutDelayMS', value: function touchableGetPressOutDelayMS() {
	      return this.props.delayPressOut;
	    } }, { key: '_showUnderlay', value: function _showUnderlay() {
	
	      this.refs[UNDERLAY_REF].setNativeProps(this.state.activeUnderlayProps);
	      this.refs[CHILD_REF].setNativeProps(this.state.activeProps);
	      this.props.onShowUnderlay && this.props.onShowUnderlay();
	    } }, { key: '_hideUnderlay', value: function _hideUnderlay() {
	      this.clearTimeout(this._hideTimeout);
	      this._hideTimeout = null;
	      if (this.refs[UNDERLAY_REF]) {
	        this.refs[CHILD_REF].setNativeProps(INACTIVE_CHILD_PROPS);
	        this.refs[UNDERLAY_REF].setNativeProps(_extends({}, INACTIVE_UNDERLAY_PROPS, {
	          style: this.state.underlayStyle }));
	
	        this.props.onHideUnderlay && this.props.onHideUnderlay();
	      }
	    } }, { key: 'render', value: function render() {
	
	      return _react2.default.createElement(_ReactView2.default, {
	        accessible: true,
	        accessibilityComponentType: this.props.accessibilityComponentType,
	        accessibilityTraits: this.props.accessibilityTraits,
	        ref: UNDERLAY_REF,
	        style: this.state.underlayStyle,
	        onLayout: this.props.onLayout,
	        onStartShouldSetResponder: this.touchableHandleStartShouldSetResponder,
	        onResponderTerminationRequest: this.touchableHandleResponderTerminationRequest,
	        onResponderGrant: this.touchableHandleResponderGrant,
	        onResponderMove: this.touchableHandleResponderMove,
	        onResponderRelease: this.touchableHandleResponderRelease,
	        onResponderTerminate: this.touchableHandleResponderTerminate,
	        testID: this.props.testID }, _react2.default.cloneElement(_react2.default.Children.only(this.props.children), {
	        ref: CHILD_REF }));
	    } }]);return TouchableHighlight;
	}(_react.Component);TouchableHighlight.propTypes = _extends({}, _ReactTouchableWithoutFeedback2.default.propTypes, { activeOpacity: _react2.default.PropTypes.number, underlayColor: _react2.default.PropTypes.string, onShowUnderlay: _react2.default.PropTypes.func, onHideUnderlay: _react2.default.PropTypes.func });TouchableHighlight.defaultProps = DEFAULT_PROPS;
	
	;
	
	_reactMixin2.default.onClass(TouchableHighlight, _reactTimerMixin2.default);
	_reactMixin2.default.onClass(TouchableHighlight, _ReactTouchable.Mixin);
	_reactMixin2.default.onClass(TouchableHighlight, _NativeMethodsMixin.Mixin);
	(0, _autobindDecorator2.default)(TouchableHighlight);
	
	module.exports = TouchableHighlight;

/***/ },
/* 732 */
/***/ function(module, exports, __webpack_require__) {

	
	
	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	__webpack_require__(587);
	var _react = __webpack_require__(301);var _react2 = _interopRequireDefault(_react);
	var _ReactTouchable = __webpack_require__(585);var _ReactTouchable2 = _interopRequireDefault(_ReactTouchable);
	var _reactMixin = __webpack_require__(491);var _reactMixin2 = _interopRequireDefault(_reactMixin);
	var _autobindDecorator = __webpack_require__(494);var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var PRESS_RECT_OFFSET = {
	  top: 20,
	  left: 20,
	  right: 20,
	  bottom: 30 };var TouchableWithoutFeedback = function (_Component) {
	  _inherits(TouchableWithoutFeedback, _Component);function TouchableWithoutFeedback() {
	    var _ref;var _temp, _this, _ret;_classCallCheck(this, TouchableWithoutFeedback);for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TouchableWithoutFeedback.__proto__ || Object.getPrototypeOf(TouchableWithoutFeedback)).call.apply(_ref, [this].concat(args))), _this), _this.state = _this.touchableGetInitialState(), _temp), _possibleConstructorReturn(_this, _ret);
	  }_createClass(TouchableWithoutFeedback, [{ key: 'componentWillReceiveProps', value: function componentWillReceiveProps(nextProps) {} }, { key: 'touchableHandlePress', value: function touchableHandlePress(e) {
	      var touchBank = e.touchHistory.touchBank[e.touchHistory.indexOfSingleActiveTouch];
	      if (touchBank) {
	        var offset = Math.sqrt(Math.pow(touchBank.startPageX - touchBank.currentPageX, 2) + Math.pow(touchBank.startPageY - touchBank.currentPageY, 2));
	        var velocity = offset / (touchBank.currentTimeStamp - touchBank.startTimeStamp) * 1000;
	        if (velocity < 100) this.props.onPress && this.props.onPress(e);
	      } else {
	        this.props.onPress && this.props.onPress(e);
	      }
	    } }, { key: 'touchableHandleActivePressIn', value: function touchableHandleActivePressIn(e) {
	      this.props.onPressIn && this.props.onPressIn(e);
	    } }, { key: 'touchableHandleActivePressOut', value: function touchableHandleActivePressOut(e) {
	      this.props.onPressOut && this.props.onPressOut(e);
	    } }, { key: 'touchableHandleLongPress', value: function touchableHandleLongPress(e) {
	      this.props.onLongPress && this.props.onLongPress(e);
	    } }, { key: 'touchableGetPressRectOffset', value: function touchableGetPressRectOffset() {
	      return PRESS_RECT_OFFSET;
	    } }, { key: 'touchableGetHighlightDelayMS', value: function touchableGetHighlightDelayMS() {
	      return this.props.delayPressIn || 0;
	    } }, { key: 'touchableGetLongPressDelayMS', value: function touchableGetLongPressDelayMS() {
	      return this.props.delayLongPress === 0 ? 0 : this.props.delayLongPress || 500;
	    } }, { key: 'touchableGetPressOutDelayMS', value: function touchableGetPressOutDelayMS() {
	      return this.props.delayPressOut || 0;
	    } }, { key: 'render', value: function render() {
	
	      return _react2.default.cloneElement(_react2.default.Children.only(this.props.children), {
	        onStartShouldSetResponder: this.touchableHandleStartShouldSetResponder,
	        onResponderTerminationRequest: this.touchableHandleResponderTerminationRequest,
	        onResponderGrant: this.touchableHandleResponderGrant,
	        onResponderMove: this.touchableHandleResponderMove,
	        onResponderRelease: this.touchableHandleResponderRelease,
	        onResponderTerminate: this.touchableHandleResponderTerminate });
	    } }]);return TouchableWithoutFeedback;
	}(_react.Component);TouchableWithoutFeedback.propTypes = { onPress: _react2.default.PropTypes.func, onPressIn: _react2.default.PropTypes.func, onPressOut: _react2.default.PropTypes.func, onLongPress: _react2.default.PropTypes.func, delayPressIn: _react2.default.PropTypes.number, delayPressOut: _react2.default.PropTypes.number, delayLongPress: _react2.default.PropTypes.number };
	
	;
	
	_reactMixin2.default.onClass(TouchableWithoutFeedback, _ReactTouchable2.default.Mixin);
	(0, _autobindDecorator2.default)(TouchableWithoutFeedback);
	
	module.exports = TouchableWithoutFeedback;

/***/ },
/* 733 */
/***/ function(module, exports, __webpack_require__) {

	
	
	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _ReactAnimated = __webpack_require__(496);var _ReactAnimated2 = _interopRequireDefault(_ReactAnimated);
	var _react = __webpack_require__(301);var _react2 = _interopRequireDefault(_react);
	var _reactTimerMixin = __webpack_require__(604);var _reactTimerMixin2 = _interopRequireDefault(_reactTimerMixin);
	var _ReactTouchable = __webpack_require__(585);
	var _ReactTouchableWithoutFeedback = __webpack_require__(732);var _ReactTouchableWithoutFeedback2 = _interopRequireDefault(_ReactTouchableWithoutFeedback);
	var _NativeMethodsMixin = __webpack_require__(484);
	var _reactMixin = __webpack_require__(491);var _reactMixin2 = _interopRequireDefault(_reactMixin);
	var _autobindDecorator = __webpack_require__(494);var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);
	var _ReactStyleSheet = __webpack_require__(333);var _ReactStyleSheet2 = _interopRequireDefault(_ReactStyleSheet);function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var flattenStyle = __webpack_require__(341);
	
	var DEFAULT_PROPS = {
	  activeOpacity: 0.2,
	  style: _ReactStyleSheet2.default.create({
	    cursor: 'pointer' }) };var TouchableOpacity = function (_React$Component) {
	  _inherits(TouchableOpacity, _React$Component);function TouchableOpacity() {
	    var _ref;var _temp, _this, _ret;_classCallCheck(this, TouchableOpacity);for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TouchableOpacity.__proto__ || Object.getPrototypeOf(TouchableOpacity)).call.apply(_ref, [this].concat(args))), _this), _this.state = _extends({}, _this.touchableGetInitialState(), {
	      anim: new _ReactAnimated2.default.Value(1) }), _temp), _possibleConstructorReturn(_this, _ret);
	  }_createClass(TouchableOpacity, [{ key: 'componentWillReceiveProps', value: function componentWillReceiveProps(nextProps) {} }, { key: 'setOpacityTo', value: function setOpacityTo(value) {
	      _ReactAnimated2.default.timing(this.state.anim, { toValue: value, duration: 150 }).start();
	    } }, { key: 'touchableHandleActivePressIn', value: function touchableHandleActivePressIn(e) {
	      this.clearTimeout(this._hideTimeout);
	      this._hideTimeout = null;
	      this._opacityActive();
	      this.props.onPressIn && this.props.onPressIn(e);
	    } }, { key: 'touchableHandleActivePressOut', value: function touchableHandleActivePressOut(e) {
	      if (!this._hideTimeout) {
	        this._opacityInactive();
	      }
	      this.props.onPressOut && this.props.onPressOut(e);
	    } }, { key: 'touchableHandlePress', value: function touchableHandlePress(e) {
	      this.clearTimeout(this._hideTimeout);
	      this._opacityActive();
	      this._hideTimeout = this.setTimeout(this._opacityInactive, this.props.delayPressOut || 100);
	
	      var touchBank = e.touchHistory.touchBank[e.touchHistory.indexOfSingleActiveTouch];
	      if (touchBank) {
	        var offset = Math.sqrt(Math.pow(touchBank.startPageX - touchBank.currentPageX, 2) + Math.pow(touchBank.startPageY - touchBank.currentPageY, 2));
	        var velocity = offset / (touchBank.currentTimeStamp - touchBank.startTimeStamp) * 1000;
	        if (velocity < 100) this.props.onPress && this.props.onPress(e);
	      } else {
	        this.props.onPress && this.props.onPress(e);
	      }
	    } }, { key: 'touchableHandleLongPress', value: function touchableHandleLongPress(e) {
	      this.props.onLongPress && this.props.onLongPress(e);
	    } }, { key: 'touchableGetPressRectOffset', value: function touchableGetPressRectOffset() {
	      return PRESS_RECT_OFFSET;
	    } }, { key: 'touchableGetHighlightDelayMS', value: function touchableGetHighlightDelayMS() {
	      return this.props.delayPressIn || 0;
	    } }, { key: 'touchableGetLongPressDelayMS', value: function touchableGetLongPressDelayMS() {
	      return this.props.delayLongPress === 0 ? 0 : this.props.delayLongPress || 500;
	    } }, { key: 'touchableGetPressOutDelayMS', value: function touchableGetPressOutDelayMS() {
	      return this.props.delayPressOut;
	    } }, { key: '_opacityActive', value: function _opacityActive() {
	      this.setOpacityTo(this.props.activeOpacity);
	    } }, { key: '_opacityInactive', value: function _opacityInactive() {
	      this.clearTimeout(this._hideTimeout);
	      this._hideTimeout = null;
	      var childStyle = flattenStyle(this.props.style) || {};
	      this.setOpacityTo(childStyle.opacity === undefined ? 1 : childStyle.opacity);
	    } }, { key: 'render', value: function render() {
	      return _react2.default.createElement(_ReactAnimated2.default.View, {
	        accessible: true,
	        accessibilityComponentType: this.props.accessibilityComponentType,
	        accessibilityTraits: this.props.accessibilityTraits,
	        style: [DEFAULT_PROPS.style, this.props.style, { opacity: this.state.anim }],
	        testID: this.props.testID,
	        onLayout: this.props.onLayout,
	        onStartShouldSetResponder: this.touchableHandleStartShouldSetResponder,
	        onResponderTerminationRequest: this.touchableHandleResponderTerminationRequest,
	        onResponderGrant: this.touchableHandleResponderGrant,
	        onResponderMove: this.touchableHandleResponderMove,
	        onResponderRelease: this.touchableHandleResponderRelease,
	        onResponderTerminate: this.touchableHandleResponderTerminate }, this.props.children);
	    } }]);return TouchableOpacity;
	}(_react2.default.Component);TouchableOpacity.propTypes = _extends({}, _ReactTouchableWithoutFeedback2.default.propTypes, { activeOpacity: _react2.default.PropTypes.number });TouchableOpacity.defaultProps = DEFAULT_PROPS;
	
	;
	
	var PRESS_RECT_OFFSET = { top: 20, left: 20, right: 20, bottom: 30 };
	
	_reactMixin2.default.onClass(TouchableOpacity, _reactTimerMixin2.default);
	_reactMixin2.default.onClass(TouchableOpacity, _ReactTouchable.Mixin);
	_reactMixin2.default.onClass(TouchableOpacity, _NativeMethodsMixin.Mixin);
	(0, _autobindDecorator2.default)(TouchableOpacity);
	
	module.exports = TouchableOpacity;

/***/ },
/* 734 */
/***/ function(module, exports, __webpack_require__) {

	
	
	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _ReactAnimated = __webpack_require__(496);var _ReactAnimated2 = _interopRequireDefault(_ReactAnimated);
	var _react = __webpack_require__(301);var _react2 = _interopRequireDefault(_react);
	var _ReactTouchable = __webpack_require__(585);
	var _reactMixin = __webpack_require__(491);var _reactMixin2 = _interopRequireDefault(_reactMixin);
	var _autobindDecorator = __webpack_require__(494);var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var PRESS_RECT_OFFSET = { top: 20, left: 20, right: 20, bottom: 30 };var TouchableBounce = function (_Component) {
	  _inherits(TouchableBounce, _Component);function TouchableBounce() {
	    var _ref;var _temp, _this, _ret;_classCallCheck(this, TouchableBounce);for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TouchableBounce.__proto__ || Object.getPrototypeOf(TouchableBounce)).call.apply(_ref, [this].concat(args))), _this), _this.state = _extends({}, _this.touchableGetInitialState(), {
	      scale: new _ReactAnimated2.default.Value(1) }), _temp), _possibleConstructorReturn(_this, _ret);
	  }_createClass(TouchableBounce, [{ key: 'bounceTo', value: function bounceTo(value, velocity, bounciness, callback) {
	      _ReactAnimated2.default.spring(this.state.scale, {
	        toValue: value,
	        velocity: velocity,
	        bounciness: bounciness }).start(callback);
	    } }, { key: 'touchableHandleActivePressIn', value: function touchableHandleActivePressIn(e) {
	      this.bounceTo(0.93, 0.1, 0);
	      this.props.onPressIn && this.props.onPressIn(e);
	    } }, { key: 'touchableHandleActivePressOut', value: function touchableHandleActivePressOut(e) {
	      this.bounceTo(1, 0.4, 0);
	      this.props.onPressOut && this.props.onPressOut(e);
	    } }, { key: 'touchableHandlePress', value: function touchableHandlePress(e) {
	      var _this2 = this;
	      var onPressWithCompletion = this.props.onPressWithCompletion;
	      if (onPressWithCompletion) {
	        onPressWithCompletion(function () {
	          _this2.state.scale.setValue(0.93);
	          _this2.bounceTo(1, 10, 10, _this2.props.onPressAnimationComplete);
	        });
	        return;
	      }
	
	      this.bounceTo(1, 10, 10, this.props.onPressAnimationComplete);
	      this.props.onPress && this.props.onPress(e);
	    } }, { key: 'touchableGetPressRectOffset', value: function touchableGetPressRectOffset() {
	      return PRESS_RECT_OFFSET;
	    } }, { key: 'touchableGetHighlightDelayMS', value: function touchableGetHighlightDelayMS() {
	      return 0;
	    } }, { key: 'render', value: function render() {
	      return _react2.default.createElement(_ReactAnimated2.default.View, {
	        style: [{ transform: [{ scale: this.state.scale }] }, this.props.style],
	        accessible: true,
	        testID: this.props.testID,
	        onStartShouldSetResponder: this.touchableHandleStartShouldSetResponder,
	        onResponderTerminationRequest: this.touchableHandleResponderTerminationRequest,
	        onResponderGrant: this.touchableHandleResponderGrant,
	        onResponderMove: this.touchableHandleResponderMove,
	        onResponderRelease: this.touchableHandleResponderRelease,
	        onResponderTerminate: this.touchableHandleResponderTerminate }, this.props.children);
	    } }]);return TouchableBounce;
	}(_react.Component);TouchableBounce.propTypes = { onPress: _react2.default.PropTypes.func, onPressIn: _react2.default.PropTypes.func, onPressOut: _react2.default.PropTypes.func, onPressWithCompletion: _react2.default.PropTypes.func, onPressAnimationComplete: _react2.default.PropTypes.func };
	
	;
	
	_reactMixin2.default.onClass(TouchableBounce, _ReactTouchable.Mixin);
	(0, _autobindDecorator2.default)(TouchableBounce);
	
	module.exports = TouchableBounce;

/***/ },
/* 735 */
/***/ function(module, exports, __webpack_require__) {

	
	
	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	Object.defineProperty(exports, "__esModule", { value: true });var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _react = __webpack_require__(301);var _react2 = _interopRequireDefault(_react);
	var _ReactActivityIndicator = __webpack_require__(342);var _ReactActivityIndicator2 = _interopRequireDefault(_ReactActivityIndicator);
	var _NativeMethodsMixin = __webpack_require__(484);
	var _reactMixin = __webpack_require__(491);var _reactMixin2 = _interopRequireDefault(_reactMixin);
	var _autobindDecorator = __webpack_require__(494);var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var RefreshLayoutConsts = { SIZE: {} };var RefreshControl = function (_Component) {
	  _inherits(RefreshControl, _Component);function RefreshControl() {
	    _classCallCheck(this, RefreshControl);return _possibleConstructorReturn(this, (RefreshControl.__proto__ || Object.getPrototypeOf(RefreshControl)).apply(this, arguments));
	  }_createClass(RefreshControl, [{ key: 'componentDidMount', value: function componentDidMount() {
	      this._lastNativeRefreshing = this.props.refreshing;
	    } }, { key: 'componentDidUpdate', value: function componentDidUpdate(prevProps) {
	
	      if (this.props.refreshing !== prevProps.refreshing) {
	        this._lastNativeRefreshing = this.props.refreshing;
	      } else if (this.props.refreshing !== this._lastNativeRefreshing) {
	        this._nativeRef.setNativeProps({ refreshing: this.props.refreshing });
	        this._lastNativeRefreshing = this.props.refreshing;
	      }
	    } }, { key: 'render', value: function render() {
	      var _this2 = this;
	
	      return _react2.default.createElement(_ReactActivityIndicator2.default, _extends({}, this.props, {
	        ref: function ref(_ref) {
	          return _this2._nativeRef = _ref;
	        },
	        onRefresh: this._onRefresh }));
	    } }, { key: '_onRefresh', value: function _onRefresh() {
	      this._lastNativeRefreshing = true;
	
	      this.props.onRefresh && this.props.onRefresh();
	
	      this.forceUpdate();
	    } }]);return RefreshControl;
	}(_react.Component);RefreshControl.SIZE = RefreshLayoutConsts.SIZE;
	
	_reactMixin2.default.onClass(RefreshControl, _NativeMethodsMixin.Mixin);
	(0, _autobindDecorator2.default)(RefreshControl);
	RefreshControl.isReactNativeComponent = true;exports.default = RefreshControl;

/***/ },
/* 736 */
/***/ function(module, exports, __webpack_require__) {

	
	
	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	Object.defineProperty(exports, "__esModule", { value: true });var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _react = __webpack_require__(301);var _react2 = _interopRequireDefault(_react);
	var _objectAssign = __webpack_require__(605);var _objectAssign2 = _interopRequireDefault(_objectAssign);
	var _ReactView = __webpack_require__(343);var _ReactView2 = _interopRequireDefault(_ReactView);
	var _ReactAnimated = __webpack_require__(496);var _ReactAnimated2 = _interopRequireDefault(_ReactAnimated);
	var _ReactDimensions = __webpack_require__(594);var _ReactDimensions2 = _interopRequireDefault(_ReactDimensions);
	var _ReactPanResponder = __webpack_require__(587);var _ReactPanResponder2 = _interopRequireDefault(_ReactPanResponder);
	var _ReactDismissKeyboard = __webpack_require__(737);var _ReactDismissKeyboard2 = _interopRequireDefault(_ReactDismissKeyboard);
	var _NativeMethodsMixin = __webpack_require__(484);
	var _reactMixin = __webpack_require__(491);var _reactMixin2 = _interopRequireDefault(_reactMixin);
	var _autobindDecorator = __webpack_require__(494);var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var deviceSize = _ReactDimensions2.default.get('window');
	var VIEWPAGER_REF = 'viewpager';var ViewPager = function (_React$Component) {
	  _inherits(ViewPager, _React$Component);function ViewPager() {
	    var _ref;var _temp, _this, _ret;_classCallCheck(this, ViewPager);for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ViewPager.__proto__ || Object.getPrototypeOf(ViewPager)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      selectedPage: _this.props.initialPage,
	      pageWidth: deviceSize.width,
	      pageCount: _this.props.children.length,
	      offsetLeft: new _ReactAnimated2.default.Value(0) }, _temp), _possibleConstructorReturn(_this, _ret);
	  }_createClass(ViewPager, [{ key: 'getInnerViewNode', value: function getInnerViewNode() {
	      return this.refs[VIEWPAGER_REF].childNodes[0];
	    } }, { key: 'componentWillMount', value: function componentWillMount() {
	
	      this._panResponder = _ReactPanResponder2.default.create({
	        onStartShouldSetResponder: function onStartShouldSetResponder() {
	          return true;
	        },
	        onMoveShouldSetPanResponder: this._shouldSetPanResponder,
	        onPanResponderGrant: function onPanResponderGrant() {},
	        onPanResponderMove: this._panResponderMove,
	        onPanResponderTerminationRequest: function onPanResponderTerminationRequest() {
	          return true;
	        },
	        onPanResponderRelease: this._panResponderRelease,
	        onPanResponderTerminate: function onPanResponderTerminate() {} });
	    } }, { key: 'componentDidMount', value: function componentDidMount() {
	      this.setPage(this.state.selectedPage);
	    } }, { key: '_childrenWithOverridenStyle', value: function _childrenWithOverridenStyle() {
	
	      return _react2.default.Children.map(this.props.children, function (child) {
	        var style = (0, _objectAssign2.default)({}, child.props.style, { width: deviceSize.width });
	        var newProps = {
	          style: style,
	          collapsable: false };
	
	        return (0, _react.cloneElement)(child, (0, _objectAssign2.default)({}, child.props, newProps));
	      });
	    } }, { key: 'render', value: function render() {
	      var children = this._childrenWithOverridenStyle();var _state = this.state;var offsetLeft = _state.offsetLeft;var pageWidth = _state.pageWidth;var pageCount = _state.pageCount;
	      var width = pageWidth * pageCount;
	      var count = pageCount - 1;
	
	      var translateX = offsetLeft.interpolate({
	        inputRange: [0, count],
	        outputRange: [0, -(pageWidth * count)],
	        extrapolate: 'clamp' });
	
	      return _react2.default.createElement(_ReactView2.default, _extends({ ref: VIEWPAGER_REF,
	        style: this.props.style }, this._panResponder.panHandlers), _react2.default.createElement(_ReactAnimated2.default.View, { style: {
	          width: width,
	          position: 'absolute',
	          top: 0,
	          left: translateX,
	          bottom: 0,
	          flexDirection: 'row' } }, children));
	    } }, { key: '_onPageScroll', value: function _onPageScroll(event) {
	      if (this.props.onPageScroll) {
	        this.props.onPageScroll(event);
	      }
	      if (this.props.keyboardDismissMode === 'on-drag') {
	        (0, _ReactDismissKeyboard2.default)();
	      }
	    } }, { key: '_shouldSetPanResponder', value: function _shouldSetPanResponder() {
	      var _this2 = this;
	      if (this._scrolling) {
	        this.state.offsetLeft.stopAnimation(function () {
	          _this2._scrolling = false;
	        });
	        return false;
	      }
	
	      return true;
	    } }, { key: '_panResponderMove', value: function _panResponderMove(ev, _ref2) {
	      var dx = _ref2.dx;
	      var val = this.state.selectedPage + dx / this.state.pageWidth * -1;
	      this.state.offsetLeft.setValue(val);
	    } }, { key: '_panResponderRelease', value: function _panResponderRelease(ev, _ref3) {
	      var dx = _ref3.dx;var _state2 = this.state;var selectedPage = _state2.selectedPage;var pageWidth = _state2.pageWidth;
	      var range = Math.abs(dx) / pageWidth;
	      var threshold = 1 / 5;
	
	      if (range > threshold) {
	        if (dx > 0) {
	          selectedPage -= 1;
	        } else {
	          selectedPage += 1;
	        }
	      }
	
	      this.setPage(selectedPage);
	    } }, { key: 'setPage', value: function setPage(index) {
	      var _this3 = this;
	      if (index < 0) {
	        index = 0;
	      } else if (index >= this.state.pageCount) {
	        index = this.state.pageCount - 1;
	      }
	
	      this._scrolling = true;
	
	      _ReactAnimated2.default.spring(this.state.offsetLeft, {
	        toValue: index,
	        bounciness: 0,
	        restSpeedThreshold: 1 }).start(function () {
	
	        _this3._onPageScroll({
	          nativeEvent: {
	            position: index,
	            offset: 0 } });
	
	        _this3._scrolling = false;
	
	        _this3.setState({
	          selectedPage: index }, function () {
	          _this3.props.onPageSelected && _this3.props.onPageSelected({ nativeEvent: { position: index } });
	        });
	      });
	    } }]);return ViewPager;
	}(_react2.default.Component);ViewPager.propTypes = { initialPage: _react.PropTypes.number, onPageScroll: _react.PropTypes.func, onPageSelected: _react.PropTypes.func, keyboardDismissMode: _react.PropTypes.oneOf(['none', 'on-drag']) };ViewPager.defaultProps = { initialPage: 0 };
	
	;
	
	_reactMixin2.default.onClass(ViewPager, _NativeMethodsMixin.Mixin);
	(0, _autobindDecorator2.default)(ViewPager);
	
	ViewPager.isReactNativeComponent = true;exports.default = ViewPager;

/***/ },
/* 737 */
/***/ function(module, exports) {

	
	
	'use strict';
	
	function dismissKeyboard() {
	  document.activeElement.blur();
	}
	
	module.exports = dismissKeyboard;

/***/ },
/* 738 */
/***/ function(module, exports) {

	
	
	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	var DEFAULT_BUTTON_TEXT = 'OK';
	var DEFAULT_BUTTON = {
	  text: DEFAULT_BUTTON_TEXT,
	  onPress: null };
	
	var noop = function noop() {};var AlertIOS = function () {
	  function AlertIOS() {
	    _classCallCheck(this, AlertIOS);
	  }_createClass(AlertIOS, null, [{ key: 'alert', value: function (_alert) {
	      function alert(_x, _x2, _x3, _x4) {
	        return _alert.apply(this, arguments);
	      }alert.toString = function () {
	        return _alert.toString();
	      };return alert;
	    }(function (title, message, buttons, type) {
	      var callbacks = [];
	      var buttonsSpec = [];
	      title = title || '';
	      message = message || '';
	      buttons = buttons || [DEFAULT_BUTTON];
	      type = type || '';
	
	      buttons.forEach(function (btn, index) {
	        callbacks[index] = btn.onPress;
	        var btnDef = {};
	        btnDef[index] = btn.text || DEFAULT_BUTTON_TEXT;
	        buttonsSpec.push(btnDef);
	      });
	
	      var confirmCallback = callbacks.pop() || noop;
	      var cancelCallback = callbacks.pop() || noop;
	      if (buttons.length === 1) {
	        alert(title);
	        confirmCallback();
	      } else if (buttons.length === 2) {
	        if (confirm(title)) {
	          confirmCallback();
	        } else {
	          cancelCallback();
	        }
	      } else {
	        throw new Error('max two buttons supported: [negativeActionBtn, positiveActionBtn]');
	      }
	    }) }, { key: 'prompt', value: function (_prompt) {
	      function prompt(_x5, _x6, _x7, _x8) {
	        return _prompt.apply(this, arguments);
	      }prompt.toString = function () {
	        return _prompt.toString();
	      };return prompt;
	    }(function (title, value, buttons, callback) {
	      if (arguments.length === 2) {
	        if ((typeof value === "undefined" ? "undefined" : _typeof(value)) === 'object') {
	          buttons = value;
	          value = undefined;
	        } else if (typeof value === 'function') {
	          callback = value;
	          value = undefined;
	        }
	      } else if (arguments.length === 3 && typeof buttons === 'function') {
	        callback = buttons;
	        buttons = undefined;
	      }
	
	      if (!buttons) {
	        buttons = [{
	          text: 'Cancel' }, {
	          text: 'OK',
	          onPress: callback }];
	      }
	
	      var ret = prompt(title);
	      if (ret && callback) {
	        callback();
	      }
	    }) }]);return AlertIOS;
	}();exports.default = AlertIOS;

/***/ },
/* 739 */
/***/ function(module, exports, __webpack_require__) {

	
	
	'use strict';
	Object.defineProperty(exports, "__esModule", { value: true });
	
	var _ReactRenderApplication = __webpack_require__(740);var _ReactRenderApplication2 = _interopRequireDefault(_ReactRenderApplication);function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	var runnables = {};
	
	var AppRegistry = {
	  registerConfig: function registerConfig(config) {
	    for (var i = 0; i < config.length; ++i) {
	      var appConfig = config[i];
	      if (appConfig.run) {
	        AppRegistry.registerRunnable(appConfig.appKey, appConfig.run);
	      } else {
	        AppRegistry.registerComponent(appConfig.appKey, appConfig.component);
	      }
	    }
	  },
	
	  registerComponent: function registerComponent(appKey, getComponentFunc) {
	    runnables[appKey] = {
	      run: function run(appParameters) {
	        return (0, _ReactRenderApplication2.default)(getComponentFunc(), appParameters.initialProps, appParameters.rootTag);
	      } };
	
	    return appKey;
	  },
	
	  registerRunnable: function registerRunnable(appKey, func) {
	    runnables[appKey] = {
	      run: func };
	
	    return appKey;
	  },
	
	  getAppKeys: function getAppKeys() {
	    return Object.keys(runnables);
	  },
	
	  runApplication: function runApplication(appKey, appParameters) {
	    runnables[appKey].run(appParameters);
	  } };exports.default = AppRegistry;

/***/ },
/* 740 */
/***/ function(module, exports, __webpack_require__) {

	
	
	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	Object.defineProperty(exports, "__esModule", { value: true });var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _react = __webpack_require__(301);var _react2 = _interopRequireDefault(_react);
	var _reactDom = __webpack_require__(345);var _reactDom2 = _interopRequireDefault(_reactDom);
	var _ReactStyleSheet = __webpack_require__(333);var _ReactStyleSheet2 = _interopRequireDefault(_ReactStyleSheet);
	var _ReactView = __webpack_require__(343);var _ReactView2 = _interopRequireDefault(_ReactView);
	var _ReactPortal = __webpack_require__(730);var _ReactPortal2 = _interopRequireDefault(_ReactPortal);function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}var AppContainer = function (_Component) {
	  _inherits(AppContainer, _Component);function AppContainer() {
	    _classCallCheck(this, AppContainer);return _possibleConstructorReturn(this, (AppContainer.__proto__ || Object.getPrototypeOf(AppContainer)).apply(this, arguments));
	  }_createClass(AppContainer, [{ key: 'render', value: function render() {
	      var RootComponent = this.props.rootComponent;
	      var appView = _react2.default.createElement(_ReactView2.default, {
	        ref: 'main',
	        className: _ReactStyleSheet2.default.rootClassName,
	        style: styles.appContainer }, _react2.default.createElement(RootComponent, _extends({}, this.props.initialProps, {
	        rootTag: this.props.rootTag })), _react2.default.createElement(_ReactPortal2.default, null));
	
	      return appView;
	    } }]);return AppContainer;
	}(_react.Component);
	
	function renderApplication(RootComponent, initialProps, rootTag) {
	
	  _reactDom2.default.render(_react2.default.createElement(AppContainer, {
	    rootComponent: RootComponent,
	    initialProps: initialProps,
	    rootTag: rootTag }), rootTag);
	}
	
	var styles = _ReactStyleSheet2.default.create({
	
	  appContainer: {
	    position: 'absolute',
	    left: 0,
	    top: 0,
	    right: 0,
	    bottom: 0 } });exports.default = renderApplication;

/***/ },
/* 741 */
/***/ function(module, exports, __webpack_require__) {

	
	
	'use strict';
	
	var _ReactPromise = __webpack_require__(742);var _ReactPromise2 = _interopRequireDefault(_ReactPromise);function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	var localStorage = window.localStorage;
	
	function merge(obj1, obj2) {
	  var obj3 = {};
	  for (var attrname in obj1) {
	    obj3[attrname] = obj1[attrname];
	  }
	  for (var attrname in obj2) {
	    obj3[attrname] = obj2[attrname];
	  }
	  return obj3;
	}
	
	var AsyncStorage = {};
	
	var bothMethods = ['getItem', 'setItem', 'removeItem', 'clear'];
	
	bothMethods.forEach(function (item) {
	
	  var promiseMethod = function promiseMethod() {
	
	    var args = arguments;
	
	    return new _ReactPromise2.default(function (resolve, reject) {
	
	      try {
	
	        var result = localStorage[item].apply(localStorage, args);
	        resolve(result);
	      } catch (err) {
	
	        reject(err);
	      }
	    });
	  };
	  AsyncStorage[item] = promiseMethod;
	});
	
	AsyncStorage.mergeItem = function (key, value) {
	
	  return new _ReactPromise2.default(function (resolve, reject) {
	
	    try {
	      var oldValue = localStorage.getItem(key);
	      var oldObj = JSON.parse(oldValue);
	      var newObj = JSON.parse(value);
	
	      var mergedObj = merge(oldObj, newObj);
	
	      localStorage.setItem(key, JSON.stringify(mergedObj));
	      resolve();
	    } catch (err) {
	      reject(err);
	    }
	  });
	};
	
	AsyncStorage.getAllKeys = function () {
	
	  var keys = [];
	
	  for (var i = 0, len = localStorage.length; i < len; ++i) {
	    keys.push(localStorage.key(i));
	  }
	
	  return new _ReactPromise2.default(function (resolve, reject) {
	    resolve(keys);
	  });
	};
	
	AsyncStorage.multiGet = function () {
	
	  var keys = [].splice.call(arguments);
	  var results = null;
	
	  return new _ReactPromise2.default(function (resolve, reject) {
	
	    try {
	
	      results = keys.map(function (key) {
	        return [key, localStorage.getItem(key)];
	      });
	
	      resolve(results);
	    } catch (err) {
	      reject(err);
	    }
	  });
	};
	
	AsyncStorage.multiSet = function () {
	
	  var args = [].splice.call(arguments);
	
	  return new _ReactPromise2.default(function (resolve, reject) {
	
	    try {
	
	      args.forEach(function (item) {
	        return localStorage.setItem(item[0], item[1]);
	      });
	
	      resolve();
	    } catch (err) {
	      reject(err);
	    }
	  });
	};
	
	AsyncStorage.multiRemove = function () {
	
	  var keys = [].splice.call(arguments);
	
	  return new _ReactPromise2.default(function (resolve, reject) {
	
	    try {
	
	      keys.forEach(function (key) {
	        return localStorage.removeItem(key);
	      });
	
	      resolve();
	    } catch (err) {
	      reject(err);
	    }
	  });
	};
	
	AsyncStorage.multiMerge = function () {
	
	  var self = this;
	  var args = [].splice.call(arguments);
	
	  return new _ReactPromise2.default(function (resolve, reject) {
	    try {
	      var promiseQueue = args.map(function (arg) {
	        return self.mergeItem(arg[0], arg[1]);
	      });
	      resolve(_ReactPromise2.default.all(promiseQueue));
	    } catch (err) {
	      reject(err);
	    }
	  });
	};
	
	module.exports = AsyncStorage;

/***/ },
/* 742 */
/***/ function(module, exports, __webpack_require__) {

	
	
	'use strict';
	
	var _es6Extensions = __webpack_require__(743);var _es6Extensions2 = _interopRequireDefault(_es6Extensions);
	__webpack_require__(746);function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	_es6Extensions2.default.prototype.finally = function (onSettled) {
	  return this.then(onSettled, onSettled);
	};
	
	module.exports = _es6Extensions2.default;

/***/ },
/* 743 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	//This file contains the ES6 extensions to the core Promises/A+ API
	
	var Promise = __webpack_require__(744);
	
	module.exports = Promise;
	
	/* Static Functions */
	
	var TRUE = valuePromise(true);
	var FALSE = valuePromise(false);
	var NULL = valuePromise(null);
	var UNDEFINED = valuePromise(undefined);
	var ZERO = valuePromise(0);
	var EMPTYSTRING = valuePromise('');
	
	function valuePromise(value) {
	  var p = new Promise(Promise._99);
	  p._37 = 1;
	  p._12 = value;
	  return p;
	}
	Promise.resolve = function (value) {
	  if (value instanceof Promise) return value;
	
	  if (value === null) return NULL;
	  if (value === undefined) return UNDEFINED;
	  if (value === true) return TRUE;
	  if (value === false) return FALSE;
	  if (value === 0) return ZERO;
	  if (value === '') return EMPTYSTRING;
	
	  if (typeof value === 'object' || typeof value === 'function') {
	    try {
	      var then = value.then;
	      if (typeof then === 'function') {
	        return new Promise(then.bind(value));
	      }
	    } catch (ex) {
	      return new Promise(function (resolve, reject) {
	        reject(ex);
	      });
	    }
	  }
	  return valuePromise(value);
	};
	
	Promise.all = function (arr) {
	  var args = Array.prototype.slice.call(arr);
	
	  return new Promise(function (resolve, reject) {
	    if (args.length === 0) return resolve([]);
	    var remaining = args.length;
	    function res(i, val) {
	      if (val && (typeof val === 'object' || typeof val === 'function')) {
	        if (val instanceof Promise && val.then === Promise.prototype.then) {
	          while (val._37 === 3) {
	            val = val._12;
	          }
	          if (val._37 === 1) return res(i, val._12);
	          if (val._37 === 2) reject(val._12);
	          val.then(function (val) {
	            res(i, val);
	          }, reject);
	          return;
	        } else {
	          var then = val.then;
	          if (typeof then === 'function') {
	            var p = new Promise(then.bind(val));
	            p.then(function (val) {
	              res(i, val);
	            }, reject);
	            return;
	          }
	        }
	      }
	      args[i] = val;
	      if (--remaining === 0) {
	        resolve(args);
	      }
	    }
	    for (var i = 0; i < args.length; i++) {
	      res(i, args[i]);
	    }
	  });
	};
	
	Promise.reject = function (value) {
	  return new Promise(function (resolve, reject) {
	    reject(value);
	  });
	};
	
	Promise.race = function (values) {
	  return new Promise(function (resolve, reject) {
	    values.forEach(function(value){
	      Promise.resolve(value).then(resolve, reject);
	    });
	  });
	};
	
	/* Prototype Methods */
	
	Promise.prototype['catch'] = function (onRejected) {
	  return this.then(null, onRejected);
	};


/***/ },
/* 744 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var asap = __webpack_require__(745);
	
	function noop() {}
	
	// States:
	//
	// 0 - pending
	// 1 - fulfilled with _value
	// 2 - rejected with _value
	// 3 - adopted the state of another promise, _value
	//
	// once the state is no longer pending (0) it is immutable
	
	// All `_` prefixed properties will be reduced to `_{random number}`
	// at build time to obfuscate them and discourage their use.
	// We don't use symbols or Object.defineProperty to fully hide them
	// because the performance isn't good enough.
	
	
	// to avoid using try/catch inside critical functions, we
	// extract them to here.
	var LAST_ERROR = null;
	var IS_ERROR = {};
	function getThen(obj) {
	  try {
	    return obj.then;
	  } catch (ex) {
	    LAST_ERROR = ex;
	    return IS_ERROR;
	  }
	}
	
	function tryCallOne(fn, a) {
	  try {
	    return fn(a);
	  } catch (ex) {
	    LAST_ERROR = ex;
	    return IS_ERROR;
	  }
	}
	function tryCallTwo(fn, a, b) {
	  try {
	    fn(a, b);
	  } catch (ex) {
	    LAST_ERROR = ex;
	    return IS_ERROR;
	  }
	}
	
	module.exports = Promise;
	
	function Promise(fn) {
	  if (typeof this !== 'object') {
	    throw new TypeError('Promises must be constructed via new');
	  }
	  if (typeof fn !== 'function') {
	    throw new TypeError('not a function');
	  }
	  this._37 = 0;
	  this._12 = null;
	  this._59 = [];
	  if (fn === noop) return;
	  doResolve(fn, this);
	}
	Promise._99 = noop;
	
	Promise.prototype.then = function(onFulfilled, onRejected) {
	  if (this.constructor !== Promise) {
	    return safeThen(this, onFulfilled, onRejected);
	  }
	  var res = new Promise(noop);
	  handle(this, new Handler(onFulfilled, onRejected, res));
	  return res;
	};
	
	function safeThen(self, onFulfilled, onRejected) {
	  return new self.constructor(function (resolve, reject) {
	    var res = new Promise(noop);
	    res.then(resolve, reject);
	    handle(self, new Handler(onFulfilled, onRejected, res));
	  });
	};
	function handle(self, deferred) {
	  while (self._37 === 3) {
	    self = self._12;
	  }
	  if (self._37 === 0) {
	    self._59.push(deferred);
	    return;
	  }
	  asap(function() {
	    var cb = self._37 === 1 ? deferred.onFulfilled : deferred.onRejected;
	    if (cb === null) {
	      if (self._37 === 1) {
	        resolve(deferred.promise, self._12);
	      } else {
	        reject(deferred.promise, self._12);
	      }
	      return;
	    }
	    var ret = tryCallOne(cb, self._12);
	    if (ret === IS_ERROR) {
	      reject(deferred.promise, LAST_ERROR);
	    } else {
	      resolve(deferred.promise, ret);
	    }
	  });
	}
	function resolve(self, newValue) {
	  // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
	  if (newValue === self) {
	    return reject(
	      self,
	      new TypeError('A promise cannot be resolved with itself.')
	    );
	  }
	  if (
	    newValue &&
	    (typeof newValue === 'object' || typeof newValue === 'function')
	  ) {
	    var then = getThen(newValue);
	    if (then === IS_ERROR) {
	      return reject(self, LAST_ERROR);
	    }
	    if (
	      then === self.then &&
	      newValue instanceof Promise
	    ) {
	      self._37 = 3;
	      self._12 = newValue;
	      finale(self);
	      return;
	    } else if (typeof then === 'function') {
	      doResolve(then.bind(newValue), self);
	      return;
	    }
	  }
	  self._37 = 1;
	  self._12 = newValue;
	  finale(self);
	}
	
	function reject(self, newValue) {
	  self._37 = 2;
	  self._12 = newValue;
	  finale(self);
	}
	function finale(self) {
	  for (var i = 0; i < self._59.length; i++) {
	    handle(self, self._59[i]);
	  }
	  self._59 = null;
	}
	
	function Handler(onFulfilled, onRejected, promise){
	  this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
	  this.onRejected = typeof onRejected === 'function' ? onRejected : null;
	  this.promise = promise;
	}
	
	/**
	 * Take a potentially misbehaving resolver function and make sure
	 * onFulfilled and onRejected are only called once.
	 *
	 * Makes no guarantees about asynchrony.
	 */
	function doResolve(fn, promise) {
	  var done = false;
	  var res = tryCallTwo(fn, function (value) {
	    if (done) return;
	    done = true;
	    resolve(promise, value);
	  }, function (reason) {
	    if (done) return;
	    done = true;
	    reject(promise, reason);
	  })
	  if (!done && res === IS_ERROR) {
	    done = true;
	    reject(promise, LAST_ERROR);
	  }
	}


/***/ },
/* 745 */,
/* 746 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Promise = __webpack_require__(744);
	
	module.exports = Promise;
	Promise.prototype.done = function (onFulfilled, onRejected) {
	  var self = arguments.length ? this.then.apply(this, arguments) : this;
	  self.then(null, function (err) {
	    setTimeout(function () {
	      throw err;
	    }, 0);
	  });
	};


/***/ },
/* 747 */
/***/ function(module, exports) {

	
	
	'use strict';
	
	module.exports = {
	  createInteractionHandle: function createInteractionHandle() {},
	  clearInteractionHandle: function clearInteractionHandle() {},
	  runAfterInteractions: function runAfterInteractions(cb) {
	    cb();
	  } };

/***/ },
/* 748 */
/***/ function(module, exports) {

	
	
	'use strict';
	
	var LayoutAnimation = {
	  Types: {},
	  Properties: {},
	  configureNext: function configureNext() {} };
	
	module.exports = LayoutAnimation;

/***/ },
/* 749 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _ExecutionEnvironment = __webpack_require__(750);var _ExecutionEnvironment2 = _interopRequireDefault(_ExecutionEnvironment);
	var _invariant = __webpack_require__(583);var _invariant2 = _interopRequireDefault(_invariant);function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	var connection = _ExecutionEnvironment2.default.canUseDOM && (window.navigator.connection || window.navigator.mozConnection || window.navigator.webkitConnection);
	
	var eventTypes = ['change'];
	
	var NetInfo = {
	  addEventListener: function addEventListener(type, handler) {
	    (0, _invariant2.default)(eventTypes.indexOf(type) !== -1, 'Trying to subscribe to unknown event: "%s"', type);
	    if (!connection) {
	      console.error('Network Connection API is not supported. Not listening for connection type changes.');
	      return {
	        remove: function remove() {} };
	    }
	
	    connection.addEventListener(type, handler);
	    return {
	      remove: function remove() {
	        return NetInfo.removeEventListener(type, handler);
	      } };
	  },
	
	  removeEventListener: function removeEventListener(type, handler) {
	    (0, _invariant2.default)(eventTypes.indexOf(type) !== -1, 'Trying to subscribe to unknown event: "%s"', type);
	    if (!connection) {
	      return;
	    }
	    connection.removeEventListener(type, handler);
	  },
	
	  fetch: function fetch() {
	    return new Promise(function (resolve, reject) {
	      try {
	        resolve(connection.type);
	      } catch (err) {
	        resolve('unknown');
	      }
	    });
	  },
	
	  isConnected: {
	    addEventListener: function addEventListener(type, handler) {
	      (0, _invariant2.default)(eventTypes.indexOf(type) !== -1, 'Trying to subscribe to unknown event: "%s"', type);
	      window.addEventListener('online', handler.bind(null, true), false);
	      window.addEventListener('offline', handler.bind(null, false), false);
	
	      return {
	        remove: function remove() {
	          return NetInfo.isConnected.removeEventListener(type, handler);
	        } };
	    },
	
	    removeEventListener: function removeEventListener(type, handler) {
	      (0, _invariant2.default)(eventTypes.indexOf(type) !== -1, 'Trying to subscribe to unknown event: "%s"', type);
	      window.removeEventListener('online', handler.bind(null, true), false);
	      window.removeEventListener('offline', handler.bind(null, false), false);
	    },
	
	    fetch: function fetch() {
	      return new Promise(function (resolve, reject) {
	        try {
	          resolve(window.navigator.onLine);
	        } catch (err) {
	          resolve(true);
	        }
	      });
	    } } };
	
	module.exports = NetInfo;

/***/ },
/* 750 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
	
	/**
	 * Simple, lightweight module assisting with the detection and context of
	 * Worker. Helps avoid circular dependencies and allows code to reason about
	 * whether or not they are in a Worker, even if they never include the main
	 * `ReactWorker` dependency.
	 */
	var ExecutionEnvironment = {
	
	  canUseDOM: canUseDOM,
	
	  canUseWorkers: typeof Worker !== 'undefined',
	
	  canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),
	
	  canUseViewport: canUseDOM && !!window.screen,
	
	  isInWorker: !canUseDOM // For now, this is true - might change in the future.
	
	};
	
	module.exports = ExecutionEnvironment;

/***/ },
/* 751 */
/***/ function(module, exports, __webpack_require__) {

	
	
	'use strict';
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	var logError = console.error;
	var invariant = __webpack_require__(583);var AppState = function () {
	
	  function AppState() {
	    var _this = this;_classCallCheck(this, AppState);
	    this.currentState = 'active';
	    this._handlers = {
	      change: [],
	      memoryWarning: [] };
	
	    var hidden, visibilityChange;
	    if (typeof document.hidden !== "undefined") {
	      hidden = "hidden";
	      visibilityChange = "visibilitychange";
	    } else if (typeof document.msHidden !== "undefined") {
	      hidden = "msHidden";
	      visibilityChange = "msvisibilitychange";
	    } else if (typeof document.webkitHidden !== "undefined") {
	      hidden = "webkitHidden";
	      visibilityChange = "webkitvisibilitychange";
	    }
	
	    document.addEventListener(visibilityChange, function () {
	      _this.currentState = document[hidden] ? 'background' : 'active';
	      _this._handlers.change.forEach(function (handler) {
	        return handler(_this.currentState);
	      });
	    }, false);
	  }_createClass(AppState, [{ key: 'addEventListener', value: function addEventListener(type, handler) {
	      var _this2 = this;
	      invariant(['change', 'memoryWarning'].indexOf(type) !== -1, 'Trying to subscribe to unknown event: "%s"', type);
	
	      if (type !== 'change') return;
	
	      this._handlers[type].push(handler);
	      return function () {
	        return _this2.removeEventListener(type, handler);
	      };
	    } }, { key: 'removeEventListener', value: function removeEventListener(type, handler) {
	      invariant(['change', 'memoryWarning'].indexOf(type) !== -1, 'Trying to remove listener for unknown event: "%s"', type);
	
	      var idx = this._handlers[type];
	      if (idx !== -1) {
	        this._handlers[type].splice(idx, 1);
	      }
	    } }]);return AppState;
	}();
	
	module.exports = new AppState();

/***/ },
/* 752 */
/***/ function(module, exports) {

	
	
	'use strict';
	
	module.exports = {};

/***/ },
/* 753 */
/***/ function(module, exports) {

	
	
	'use strict';
	
	function processColor(color) {
	  return color;
	}
	
	module.exports = processColor;

/***/ }
]));
//# sourceMappingURL=react-web.dcf65b9e4094bccef3ba.js.map