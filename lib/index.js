Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src/index.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _reactNative=require('react-native');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}








var styles=_reactNative.StyleSheet.create({
container:{
flexDirection:'row',
position:'relative'},

line:{
position:'absolute',
borderRadius:10}});var



CrossMarker=function(_Component){_inherits(CrossMarker,_Component);function CrossMarker(){var _ref;var _temp,_this,_ret;_classCallCheck(this,CrossMarker);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=CrossMarker.__proto__||Object.getPrototypeOf(CrossMarker)).call.apply(_ref,[this].concat(args))),_this),_this.















toCross=function(){var
onMarkPress=_this.props.onMarkPress;

if(typeof onMarkPress==='function')onMarkPress();
_this.startAnimation(1);
},_this.

toMark=function(){var
onCrossPress=_this.props.onCrossPress;

if(typeof onCrossPress==='function')onCrossPress();
_this.startAnimation(0);
},_this.

changeMode=function(){
_this.cross?_this.toMark():_this.toCross();
_this.cross=!_this.cross;
},_this.

renderLine=function(angle,offset){var _this$props=
_this.props,color=_this$props.color,height=_this$props.height,width=_this$props.width;

return _react2.default.createElement(_reactNative.Animated.View,{
style:[
styles.line,
{
backgroundColor:color,
height:height,
width:width,
transform:[
{rotateZ:angle}],

left:offset}],__source:{fileName:_jsxFileName,lineNumber:61}});



},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(CrossMarker,[{key:'componentWillMount',value:function componentWillMount(){this.animatedValue=new _reactNative.Animated.Value(0);this.cross=false;}},{key:'startAnimation',value:function startAnimation(target){_reactNative.Animated.timing(this.animatedValue,{toValue:target,duration:this.props.delay,easing:_reactNative.Easing.linear}).start();}},{key:'render',value:function render()

{var _props=
this.props,height=_props.height,width=_props.width,
origin={
x:height,
y:height/2};


var leftLinePos=this.animatedValue.interpolate({
inputRange:[0,1],
outputRange:[origin.x-height/3,origin.x]});


var rightLinePos=this.animatedValue.interpolate({
inputRange:[0,1],
outputRange:[origin.x+height/3,origin.x]});


return _react2.default.createElement(_reactNative.TouchableWithoutFeedback,{onPress:this.changeMode,__source:{fileName:_jsxFileName,lineNumber:94}},
_react2.default.createElement(_reactNative.View,{style:[styles.container,{height:height,width:height*2}],__source:{fileName:_jsxFileName,lineNumber:95}},
this.renderLine('-45 deg',leftLinePos),
this.renderLine('45 deg',rightLinePos)));


}}]);return CrossMarker;}(_react.Component);exports.default=CrossMarker;


CrossMarker.propTypes={
color:_propTypes2.default.string,
delay:_propTypes2.default.number,
height:_propTypes2.default.number,
width:_propTypes2.default.number,
onCrossPress:_propTypes2.default.func,
onMarkPress:_propTypes2.default.func,
onCrossTransformed:_propTypes2.default.func,
onMarkTransformed:_propTypes2.default.func};


CrossMarker.defaultProps={
color:'#000',
delay:500,
height:30,
width:4,
onCrossPress:function onCrossPress(){},
onMarkPress:function onMarkPress(){}};