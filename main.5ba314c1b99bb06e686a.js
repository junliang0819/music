!function(e){function t(t){for(var a,i,l=t[0],c=t[1],s=t[2],f=0,p=[];f<l.length;f++)i=l[f],r[i]&&p.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);for(u&&u(t);p.length;)p.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,l=1;l<n.length;l++){var c=n[l];0!==r[c]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={1:0},o=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var l=window.webpackJsonp=window.webpackJsonp||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var u=c;o.push([201,0,5]),n()}({162:function(e,t,n){e.exports=n.p+"2405c211eaa4d11da52e83bcf9f873fc.eot"},201:function(e,t,n){"use strict";var a=i(n(202)),r=n(15),o=i(n(1));function i(e){return e&&e.__esModule?e:{default:e}}(0,r.render)(o.default.createElement(a.default,null),document.getElementById("app"))},202:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var a=function(e){return e&&e.__esModule?e:{default:e}}(n(203)),r=n(34);n(317),function(){var t=n(34).enterModule;t&&t(e)}();var o=(0,r.hot)(e)(a.default);t.default=o,function(){var t=n(34).default,a=n(34).leaveModule;t&&(t.register(o,"default","/Users/jlchen/Desktop/repositories/musicApp/src/views/index.js"),a(e))}()}).call(this,n(97)(e))},203:function(module,exports,__webpack_require__){"use strict";(function(module){Object.defineProperty(exports,"__esModule",{value:!0});var _tabBar=__webpack_require__(204),_tabBar2=_interopRequireDefault(_tabBar),_navBar=__webpack_require__(254),_navBar2=_interopRequireDefault(_navBar),_icon=__webpack_require__(255),_icon2=_interopRequireDefault(_icon),_popover=__webpack_require__(257),_popover2=_interopRequireDefault(_popover),_createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();__webpack_require__(270),__webpack_require__(284),__webpack_require__(287),__webpack_require__(290);var _react=__webpack_require__(1),_react2=_interopRequireDefault(_react),_api=__webpack_require__(293),_api2=_interopRequireDefault(_api);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}__webpack_require__(315),function(){var e=__webpack_require__(34).enterModule;e&&e(module)}();var Item=_popover2.default.Item,App=function(_Component){function App(){var e,t,n;_classCallCheck(this,App);for(var a=arguments.length,r=Array(a),o=0;o<a;o++)r[o]=arguments[o];return t=n=_possibleConstructorReturn(this,(e=App.__proto__||Object.getPrototypeOf(App)).call.apply(e,[this].concat(r))),n.player=null,n.state={visible:!1,selected:"",isPlaying:!0,album:"专辑",name:"歌名",singer:"",selectedTab:"playing"},n.onSelect=function(e){n.setState({visible:!1,selected:e.props.value})},n.handleVisibleChange=function(e){n.setState({visible:e})},n.toggle=function(){n.setState({isPlaying:!n.state.isPlaying},function(){n.player.toggle()})},n.playPrev=function(){n.player.playPrev()},n.playNext=function(){n.player.playNext()},_possibleConstructorReturn(n,t)}return _inherits(App,_Component),_createClass(App,[{key:"componentDidMount",value:function(){var e=this;this.player=new QMplayer({target:"auto"}),this.player.play(["003b5v7L0MfcEN","002R32LQ2u9c4z","003IPDsn4ZWb5H"]),this.player.on("play",function(t){var n=t.song;e.setState({album:n.album.name,name:n.name,singer:n.singer[0].name})});_api2.default.get("/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1533283387864").then(function(e){console.log(e)})}},{key:"render",value:function(){var e=this,t=this.state.isPlaying,n=function(e){return _react2.default.createElement("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/"+e+".svg",className:"am-icon am-icon-xs",alt:""})};return _react2.default.createElement("div",{className:"container"},_react2.default.createElement(_navBar2.default,{mode:"light",rightContent:_react2.default.createElement(_popover2.default,{mask:!0,overlayClassName:"fortest",overlayStyle:{color:"currentColor"},visible:this.state.visible,overlay:[_react2.default.createElement(Item,{key:"4",value:"scan",icon:n("tOtXhkIWzwotgGSeptou"),"data-seed":"logId"},"扫一扫"),_react2.default.createElement(Item,{key:"5",value:"special",icon:n("PKAgAqZWJVNwKsAJSmXd"),style:{whiteSpace:"nowrap"}},"我的二维码"),_react2.default.createElement(Item,{key:"6",value:"button ct",icon:n("uQIYTFeRrjPELImDRrPt")},_react2.default.createElement("span",{style:{marginRight:5}},"帮助"))],align:{overflow:{adjustY:0,adjustX:0},offset:[-10,0]},onVisibleChange:this.handleVisibleChange,onSelect:this.onSelect},_react2.default.createElement("div",{style:{height:"100%",padding:"0 15px",marginRight:"-15px",display:"flex",alignItems:"center"}},_react2.default.createElement(_icon2.default,{type:"ellipsis"})))},"正在播放"),_react2.default.createElement("section",null,_react2.default.createElement("div",{className:"header"},_react2.default.createElement("p",{className:"title"},this.state.name),_react2.default.createElement("p",{className:"subtitle"},this.state.album)),_react2.default.createElement("div",{className:t?"player animation-play":"player"},_react2.default.createElement("div",null)),_react2.default.createElement("div",{className:"info"},"演唱: ",this.state.singer),_react2.default.createElement("div",{className:"control"},_react2.default.createElement("i",{className:"iconfont icon-prev",onClick:this.playPrev}),_react2.default.createElement("i",{className:t?"iconfont icon-pause":"iconfont icon-next",onClick:this.toggle}),_react2.default.createElement("i",{className:"iconfont icon-next1",onClick:this.playNext}))),_react2.default.createElement("footer",null,_react2.default.createElement(_tabBar2.default,{unselectedTintColor:"#949494",tintColor:"#33A3F4",barTintColor:"white"},_react2.default.createElement(_tabBar2.default.Item,{title:"首页",key:"home",icon:_react2.default.createElement("i",{className:"iconfont icon-home",style:{fontSize:20}}),selectedIcon:_react2.default.createElement("i",{className:"iconfont icon-home",style:{color:"rgb(51, 163, 244)",fontSize:20}}),selected:"home"===this.state.selectedTab,onPress:function(){e.setState({selectedTab:"home"})},"data-seed":"logId"}),_react2.default.createElement(_tabBar2.default.Item,{title:"正在播放",key:"playing",icon:_react2.default.createElement("i",{className:"iconfont icon-music",style:{fontSize:20}}),selectedIcon:_react2.default.createElement("i",{className:"iconfont icon-music",style:{color:"rgb(51, 163, 244)",fontSize:20}}),selected:"playing"===this.state.selectedTab,onPress:function(){e.setState({selectedTab:"playing"})},"data-seed":"logId"}),_react2.default.createElement(_tabBar2.default.Item,{title:"我的",key:"me",icon:_react2.default.createElement("i",{className:"iconfont icon-iconme",style:{fontSize:20}}),selectedIcon:_react2.default.createElement("i",{className:"iconfont icon-iconme",style:{color:"rgb(51, 163, 244)",fontSize:20}}),selected:"me"===this.state.selectedTab,badge:1,onPress:function(){e.setState({selectedTab:"me"})},"data-seed":"logId"}))))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),App}(_react.Component),_default=App;exports.default=_default,function(){var e=__webpack_require__(34).default,t=__webpack_require__(34).leaveModule;e&&(e.register(Item,"Item","/Users/jlchen/Desktop/repositories/musicApp/src/views/app/app.jsx"),e.register(App,"App","/Users/jlchen/Desktop/repositories/musicApp/src/views/app/app.jsx"),e.register(_default,"default","/Users/jlchen/Desktop/repositories/musicApp/src/views/app/app.jsx"),t(module))}()}).call(this,__webpack_require__(97)(module))},293:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var a=function(e){return e&&e.__esModule?e:{default:e}}(n(294));!function(){var t=n(34).enterModule;t&&t(e)}();var r={get:function(e,t){return a.default.get(e,{params:t})},post:function(){}},o=r;t.default=o,function(){var t=n(34).default,a=n(34).leaveModule;t&&(t.register(r,"api","/Users/jlchen/Desktop/repositories/musicApp/src/utils/api.js"),t.register(o,"default","/Users/jlchen/Desktop/repositories/musicApp/src/utils/api.js"),a(e))}()}).call(this,n(97)(e))},315:function(e,t,n){var a=n(316);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(33)(a,r);a.locals&&(e.exports=a.locals)},316:function(e,t,n){(e.exports=n(32)(!1)).push([e.i,".container .header {\n  text-align: center;\n}\n.container .header .title {\n  font-size: 24px;\n  color: green;\n}\n.container .player {\n  width: 80%;\n  height: 300px;\n  margin: 20px auto;\n  border-radius: 50%;\n  background: black;\n  border: 4px solid red;\n}\n.container .player div {\n  width: 150px;\n  height: 150px;\n  border-radius: 50%;\n  margin: 75px auto;\n  background: wheat;\n}\n.container .info {\n  text-align: center;\n  margin-bottom: 20px;\n}\n.container .control {\n  display: flex;\n  justify-content: space-around;\n}\n.container .iconfont {\n  font-size: 32px;\n}\n.container .animation-play {\n  animation: play 8s linear infinite;\n}\n.container footer {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n@keyframes play {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n",""])},317:function(e,t,n){var a=n(318);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(33)(a,r);a.locals&&(e.exports=a.locals)},318:function(e,t,n){var a=n(319);(e.exports=n(32)(!1)).push([e.i,'@font-face {\n  font-family: "iconfont";\n  src: url('+a(n(162))+");\n  /* IE9*/\n  src: url("+a(n(162))+"#iefix) format('embedded-opentype'),  url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'), url("+a(n(320))+") format('truetype'),  url("+a(n(321))+'#iconfont) format(\'svg\');\n  /* iOS 4.1- */\n}\n.iconfont {\n  font-family: "iconfont" !important;\n  font-size: 16px;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.icon-iconme:before {\n  content: "\\E600";\n}\n.icon-home:before {\n  content: "\\E693";\n}\n.icon-music:before {\n  content: "\\E66B";\n}\n.icon-prev:before {\n  content: "\\E619";\n}\n.icon-next:before {\n  content: "\\E61A";\n}\n.icon-next1:before {\n  content: "\\E622";\n}\n.icon-pause:before {\n  content: "\\E63B";\n}\n',""])},320:function(e,t,n){e.exports=n.p+"6fae6d20ebb1131ece60c20c211a26c6.ttf"},321:function(e,t,n){e.exports=n.p+"432b852fed2c13f4318655300f9e9c68.svg"}});