webpackJsonp([35783957827783],[,,,,,,,,,function(e,t,n){function r(e,t){for(var n=e.length;n--;)if(o(e[n][0],t))return n;return-1}var o=n(103);e.exports=r},function(e,t,n){function r(e,t){var n=e.__data__;return o(t)?n["string"==typeof t?"string":"hash"]:n.map}var o=n(86);e.exports=r},function(e,t,n){var r=n(29),o=r(Object,"create");e.exports=o},,,function(e,t,n){var r=n(15),o=r.Symbol;e.exports=o},function(e,t,n){var r=n(77),o="object"==typeof self&&self&&self.Object===Object&&self,a=r||o||Function("return this")();e.exports=a},function(e,t){var n=Array.isArray;e.exports=n},function(e,t,n){function r(e){return"symbol"==typeof e||a(e)&&o(e)==i}var o=n(28),a=n(106),i="[object Symbol]";e.exports=r},,,,,,,,,,,function(e,t,n){function r(e){return null==e?void 0===e?c:u:s&&s in Object(e)?a(e):i(e)}var o=n(14),a=n(78),i=n(99),u="[object Null]",c="[object Undefined]",s=o?o.toStringTag:void 0;e.exports=r},function(e,t,n){function r(e,t){var n=a(e,t);return o(n)?n:void 0}var o=n(73),a=n(79);e.exports=r},function(e,t){function n(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}e.exports=n},function(e,t){t.__esModule=!0;var n=(t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"}),r=(t.VALID_TAG_NAMES=Object.keys(n).map(function(e){return n[e]}),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(r).reduce(function(e,t){return e[r[t]]=t,e},{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},,,,,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(){return"undefined"==typeof g&&"undefined"!=typeof window&&window.IntersectionObserver&&(g=new window.IntersectionObserver(function(e){e.forEach(function(e){A.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(g.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),g}t.__esModule=!0;var a=n(32),i=r(a),u=n(39),c=r(u),s=n(38),l=r(s),f=n(121),p=r(f),d=n(120),h=r(d),T=n(1),y=r(T),E=n(6),m=r(E),v=function(e){var t=(0,h.default)({},e);return t.responsiveResolution&&(t.resolutions=t.responsiveResolution,delete t.responsiveResolution),t.responsiveSizes&&(t.sizes=t.responsiveSizes,delete t.responsiveSizes),t},b={},_=function(e){var t=v(e),n=t.sizes?t.sizes.src:t.resolutions.src;return!!b[n]||(b[n]=!0,!1)},g=void 0,A=[],S=function(e,t){o().observe(e),A.push([e,t])},w=null,O=function(){if(null!==w)return w;var e="undefined"!=typeof window?window.document.createElement("canvas"):{};return w=!(!e.getContext||!e.getContext("2d"))&&0===e.toDataURL("image/webp").indexOf("data:image/webp")},P=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',n=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.sizes?'sizes="'+e.sizes+'" ':"",o=e.title?'title="'+e.title+'" ':"",a=e.alt?'alt="'+e.alt+'" ':'alt="" ',i=e.width?'width="'+e.width+'" ':"",u=e.height?'height="'+e.height+'" ':"",c=e.opacity?e.opacity:"1",s=e.transitionDelay?e.transitionDelay:"0.5s";return"<img "+i+u+t+n+a+o+r+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+s+";opacity:"+c+';width:100%;height:100%;object-fit:cover;object-position:center"/>'},R=function(e){var t=e.style,n=e.onLoad,r=(0,p.default)(e,["style","onLoad"]);return y.default.createElement("img",(0,h.default)({},r,{onLoad:n,style:(0,h.default)({position:"absolute",top:0,left:0,transition:"opacity 0.5s",width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},t)}))};R.propTypes={style:m.default.object,onLoad:m.default.func};var M=function(e){function t(n){(0,i.default)(this,t);var r=(0,c.default)(this,e.call(this,n)),o=!0,a=!0,u=!1,s=_(n);return!s&&"undefined"!=typeof window&&window.IntersectionObserver&&(o=!1,a=!1,u=!0),"undefined"==typeof window&&(o=!1,a=!1),r.state={isVisible:o,imgLoaded:a,IOSupported:u},r.handleRef=r.handleRef.bind(r),r}return(0,l.default)(t,e),t.prototype.handleRef=function(e){var t=this;this.state.IOSupported&&e&&S(e,function(){t.setState({isVisible:!0,imgLoaded:!1})})},t.prototype.render=function(){var e=this,t=v(this.props),n=t.title,r=t.alt,o=t.className,a=t.outerWrapperClassName,i=t.style,u=void 0===i?{}:i,c=t.imgStyle,s=void 0===c?{}:c,l=t.placeholderStyle,f=void 0===l?{}:l,p=t.sizes,d=t.resolutions,T=t.backgroundColor,E=t.Tag,m=void 0;m="boolean"==typeof T?"lightgray":T;var b=(0,h.default)({opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s"},s,f),_=(0,h.default)({opacity:this.state.imgLoaded||this.props.fadeIn===!1?1:0},s);if(p){var g=p;return g.srcWebp&&g.srcSetWebp&&O()&&(g.src=g.srcWebp,g.srcSet=g.srcSetWebp),y.default.createElement(E,{className:(a?a:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===u.position?"initial":"relative"}},y.default.createElement(E,{className:(o?o:"")+" gatsby-image-wrapper",style:(0,h.default)({position:"relative",overflow:"hidden"},u),ref:this.handleRef},y.default.createElement(E,{style:{width:"100%",paddingBottom:100/g.aspectRatio+"%"}}),g.base64&&y.default.createElement(R,{alt:r,title:n,src:g.base64,style:b}),g.tracedSVG&&y.default.createElement(R,{alt:r,title:n,src:g.tracedSVG,style:b}),m&&y.default.createElement(E,{title:n,style:{backgroundColor:m,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&y.default.createElement(R,{alt:r,title:n,srcSet:g.srcSet,src:g.src,sizes:g.sizes,style:_,onLoad:function(){e.state.IOSupported&&e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),y.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:P((0,h.default)({alt:r,title:n},g))}})))}if(d){var A=d,S=(0,h.default)({position:"relative",overflow:"hidden",display:"inline-block",width:A.width,height:A.height},u);return"inherit"===u.display&&delete S.display,A.srcWebp&&A.srcSetWebp&&O()&&(A.src=A.srcWebp,A.srcSet=A.srcSetWebp),y.default.createElement(E,{className:(a?a:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===u.position?"initial":"relative"}},y.default.createElement(E,{className:(o?o:"")+" gatsby-image-wrapper",style:S,ref:this.handleRef},A.base64&&y.default.createElement(R,{alt:r,title:n,src:A.base64,style:b}),A.tracedSVG&&y.default.createElement(R,{alt:r,title:n,src:A.tracedSVG,style:b}),m&&y.default.createElement(E,{title:n,style:{backgroundColor:m,width:A.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:A.height}}),this.state.isVisible&&y.default.createElement(R,{alt:r,title:n,width:A.width,height:A.height,srcSet:A.srcSet,src:A.src,style:_,onLoad:function(){e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),y.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:P((0,h.default)({alt:r,title:n,width:A.width,height:A.height},A))}})))}return null},t}(y.default.Component);M.defaultProps={fadeIn:!0,alt:"",Tag:"div"},M.propTypes={responsiveResolution:m.default.object,responsiveSizes:m.default.object,resolutions:m.default.object,sizes:m.default.object,fadeIn:m.default.bool,title:m.default.string,alt:m.default.string,className:m.default.oneOfType([m.default.string,m.default.object]),outerWrapperClassName:m.default.oneOfType([m.default.string,m.default.object]),style:m.default.object,imgStyle:m.default.object,placeholderStyle:m.default.object,position:m.default.string,backgroundColor:m.default.oneOfType([m.default.string,m.default.bool]),onLoad:m.default.func,Tag:m.default.string},t.default=M},,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){function r(e){return null===e||void 0===e}function o(e){return!(!e||"object"!=typeof e||"number"!=typeof e.length)&&("function"==typeof e.copy&&"function"==typeof e.slice&&!(e.length>0&&"number"!=typeof e[0]))}function a(e,t,n){var a,l;if(r(e)||r(t))return!1;if(e.prototype!==t.prototype)return!1;if(c(e))return!!c(t)&&(e=i.call(e),t=i.call(t),s(e,t,n));if(o(e)){if(!o(t))return!1;if(e.length!==t.length)return!1;for(a=0;a<e.length;a++)if(e[a]!==t[a])return!1;return!0}try{var f=u(e),p=u(t)}catch(e){return!1}if(f.length!=p.length)return!1;for(f.sort(),p.sort(),a=f.length-1;a>=0;a--)if(f[a]!=p[a])return!1;for(a=f.length-1;a>=0;a--)if(l=f[a],!s(e[l],t[l],n))return!1;return typeof e==typeof t}var i=Array.prototype.slice,u=n(63),c=n(62),s=e.exports=function(e,t,n){return n||(n={}),e===t||(e instanceof Date&&t instanceof Date?e.getTime()===t.getTime():!e||!t||"object"!=typeof e&&"object"!=typeof t?n.strict?e===t:e==t:a(e,t,n))}},function(e,t){function n(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function r(e){return e&&"object"==typeof e&&"number"==typeof e.length&&Object.prototype.hasOwnProperty.call(e,"callee")&&!Object.prototype.propertyIsEnumerable.call(e,"callee")||!1}var o="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();t=e.exports=o?n:r,t.supported=n,t.unsupported=r},function(e,t){function n(e){var t=[];for(var n in e)t.push(n);return t}t=e.exports="function"==typeof Object.keys?Object.keys:n,t.shim=n},function(e,t,n){var r;!function(){"use strict";var o=!("undefined"==typeof window||!window.document||!window.document.createElement),a={canUseDOM:o,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:o&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:o&&!!window.screen};r=function(){return a}.call(t,n,t,e),!(void 0!==r&&(e.exports=r))}()},,,function(e,t,n){function r(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}var o=n(80),a=n(81),i=n(82),u=n(83),c=n(84);r.prototype.clear=o,r.prototype.delete=a,r.prototype.get=i,r.prototype.has=u,r.prototype.set=c,e.exports=r},function(e,t,n){function r(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}var o=n(88),a=n(89),i=n(90),u=n(91),c=n(92);r.prototype.clear=o,r.prototype.delete=a,r.prototype.get=i,r.prototype.has=u,r.prototype.set=c,e.exports=r},function(e,t,n){var r=n(29),o=n(15),a=r(o,"Map");e.exports=a},function(e,t,n){function r(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}var o=n(93),a=n(94),i=n(95),u=n(96),c=n(97);r.prototype.clear=o,r.prototype.delete=a,r.prototype.get=i,r.prototype.has=u,r.prototype.set=c,e.exports=r},function(e,t){function n(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o}e.exports=n},function(e,t,n){function r(e,t){t=o(t,e);for(var n=0,r=t.length;null!=e&&n<r;)e=e[a(t[n++])];return n&&n==r?e:void 0}var o=n(75),a=n(101);e.exports=r},function(e,t,n){function r(e){if(!i(e)||a(e))return!1;var t=o(e)?h:s;return t.test(u(e))}var o=n(105),a=n(87),i=n(30),u=n(102),c=/[\\^$.*+?()[\]{}|]/g,s=/^\[object .+?Constructor\]$/,l=Function.prototype,f=Object.prototype,p=l.toString,d=f.hasOwnProperty,h=RegExp("^"+p.call(d).replace(c,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");e.exports=r},function(e,t,n){function r(e){if("string"==typeof e)return e;if(i(e))return a(e,r)+"";if(u(e))return l?l.call(e):"";var t=e+"";return"0"==t&&1/e==-c?"-0":t}var o=n(14),a=n(71),i=n(16),u=n(17),c=1/0,s=o?o.prototype:void 0,l=s?s.toString:void 0;e.exports=r},function(e,t,n){function r(e,t){return o(e)?e:a(e,t)?[e]:i(u(e))}var o=n(16),a=n(85),i=n(100),u=n(108);e.exports=r},function(e,t,n){var r=n(15),o=r["__core-js_shared__"];e.exports=o},function(e,t){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(t,function(){return this}())},function(e,t,n){function r(e){var t=i.call(e,c),n=e[c];try{e[c]=void 0;var r=!0}catch(e){}var o=u.call(e);return r&&(t?e[c]=n:delete e[c]),o}var o=n(14),a=Object.prototype,i=a.hasOwnProperty,u=a.toString,c=o?o.toStringTag:void 0;e.exports=r},function(e,t){function n(e,t){return null==e?void 0:e[t]}e.exports=n},function(e,t,n){function r(){this.__data__=o?o(null):{},this.size=0}var o=n(11);e.exports=r},function(e,t){function n(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}e.exports=n},function(e,t,n){function r(e){var t=this.__data__;if(o){var n=t[e];return n===a?void 0:n}return u.call(t,e)?t[e]:void 0}var o=n(11),a="__lodash_hash_undefined__",i=Object.prototype,u=i.hasOwnProperty;e.exports=r},function(e,t,n){function r(e){var t=this.__data__;return o?void 0!==t[e]:i.call(t,e)}var o=n(11),a=Object.prototype,i=a.hasOwnProperty;e.exports=r},function(e,t,n){function r(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=o&&void 0===t?a:t,this}var o=n(11),a="__lodash_hash_undefined__";e.exports=r},function(e,t,n){function r(e,t){if(o(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!a(e))||(u.test(e)||!i.test(e)||null!=t&&e in Object(t))}var o=n(16),a=n(17),i=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,u=/^\w*$/;e.exports=r},function(e,t){function n(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}e.exports=n},function(e,t,n){function r(e){return!!a&&a in e}var o=n(76),a=function(){var e=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();e.exports=r},function(e,t){function n(){this.__data__=[],this.size=0}e.exports=n},function(e,t,n){function r(e){var t=this.__data__,n=o(t,e);if(n<0)return!1;var r=t.length-1;return n==r?t.pop():i.call(t,n,1),--this.size,!0}var o=n(9),a=Array.prototype,i=a.splice;e.exports=r},function(e,t,n){function r(e){var t=this.__data__,n=o(t,e);return n<0?void 0:t[n][1]}var o=n(9);e.exports=r},function(e,t,n){function r(e){return o(this.__data__,e)>-1}var o=n(9);e.exports=r},function(e,t,n){function r(e,t){var n=this.__data__,r=o(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}var o=n(9);e.exports=r},function(e,t,n){function r(){this.size=0,this.__data__={hash:new o,map:new(i||a),string:new o}}var o=n(67),a=n(68),i=n(69);e.exports=r},function(e,t,n){function r(e){var t=o(this,e).delete(e);return this.size-=t?1:0,t}var o=n(10);e.exports=r},function(e,t,n){function r(e){return o(this,e).get(e)}var o=n(10);e.exports=r},function(e,t,n){function r(e){return o(this,e).has(e)}var o=n(10);e.exports=r},function(e,t,n){function r(e,t){var n=o(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}var o=n(10);e.exports=r},function(e,t,n){function r(e){var t=o(e,function(e){return n.size===a&&n.clear(),e}),n=t.cache;return t}var o=n(107),a=500;e.exports=r},function(e,t){function n(e){return o.call(e)}var r=Object.prototype,o=r.toString;e.exports=n},function(e,t,n){var r=n(98),o=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,a=/\\(\\)?/g,i=r(function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(o,function(e,n,r,o){t.push(r?o.replace(a,"$1"):n||e)}),t});e.exports=i},function(e,t,n){function r(e){if("string"==typeof e||o(e))return e;var t=e+"";return"0"==t&&1/e==-a?"-0":t}var o=n(17),a=1/0;e.exports=r},function(e,t){function n(e){if(null!=e){try{return o.call(e)}catch(e){}try{return e+""}catch(e){}}return""}var r=Function.prototype,o=r.toString;e.exports=n},function(e,t){function n(e,t){return e===t||e!==e&&t!==t}e.exports=n},function(e,t,n){function r(e,t,n){var r=null==e?void 0:o(e,t);return void 0===r?n:r}var o=n(72);e.exports=r},function(e,t,n){function r(e){if(!a(e))return!1;var t=o(e);return t==u||t==c||t==i||t==s}var o=n(28),a=n(30),i="[object AsyncFunction]",u="[object Function]",c="[object GeneratorFunction]",s="[object Proxy]";e.exports=r},function(e,t){function n(e){return null!=e&&"object"==typeof e}e.exports=n},function(e,t,n){function r(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError(a);var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],a=n.cache;if(a.has(o))return a.get(o);var i=e.apply(this,r);return n.cache=a.set(o,i)||a,i};return n.cache=new(r.Cache||o),n}var o=n(70),a="Expected a function";r.Cache=o,e.exports=r},function(e,t,n){function r(e){return null==e?"":o(e)}var o=n(74);e.exports=r},,,,,function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.Helmet=void 0;var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(1),f=r(l),p=n(6),d=r(p),h=n(115),T=r(h),y=n(61),E=r(y),m=n(114),v=n(31),b=function(e){var t,n;return n=t=function(t){function n(){return a(this,n),i(this,t.apply(this,arguments))}return u(n,t),n.prototype.shouldComponentUpdate=function(e){return!(0,E.default)(this.props,e)},n.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case v.TAG_NAMES.SCRIPT:case v.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case v.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},n.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,a=e.nestedChildren;return c({},r,(t={},t[n.type]=[].concat(r[n.type]||[],[c({},o,this.mapNestedChildrenToProps(n,a))]),t))},n.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,a=e.newChildProps,i=e.nestedChildren;switch(r.type){case v.TAG_NAMES.TITLE:return c({},o,(t={},t[r.type]=i,t.titleAttributes=c({},a),t));case v.TAG_NAMES.BODY:return c({},o,{bodyAttributes:c({},a)});case v.TAG_NAMES.HTML:return c({},o,{htmlAttributes:c({},a)})}return c({},o,(n={},n[r.type]=c({},a),n))},n.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=c({},t);return Object.keys(e).forEach(function(t){var r;n=c({},n,(r={},r[t]=e[t],r))}),n},n.prototype.warnOnInvalidChildren=function(e,t){return!0},n.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return f.default.Children.forEach(e,function(e){if(e&&e.props){var a=e.props,i=a.children,u=o(a,["children"]),c=(0,m.convertReactPropstoHtmlAttributes)(u);switch(n.warnOnInvalidChildren(e,i),e.type){case v.TAG_NAMES.LINK:case v.TAG_NAMES.META:case v.TAG_NAMES.NOSCRIPT:case v.TAG_NAMES.SCRIPT:case v.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:c,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:c,nestedChildren:i})}}}),t=this.mapArrayTypeChildrenToProps(r,t)},n.prototype.render=function(){var t=this.props,n=t.children,r=o(t,["children"]),a=c({},r);return n&&(a=this.mapChildrenToProps(n,a)),f.default.createElement(e,a)},s(n,null,[{key:"canUseDOM",set:function(t){e.canUseDOM=t}}]),n}(f.default.Component),t.propTypes={base:d.default.object,bodyAttributes:d.default.object,children:d.default.oneOfType([d.default.arrayOf(d.default.node),d.default.node]),defaultTitle:d.default.string,defer:d.default.bool,encodeSpecialCharacters:d.default.bool,htmlAttributes:d.default.object,link:d.default.arrayOf(d.default.object),meta:d.default.arrayOf(d.default.object),noscript:d.default.arrayOf(d.default.object),onChangeClientState:d.default.func,script:d.default.arrayOf(d.default.object),style:d.default.arrayOf(d.default.object),title:d.default.string,titleAttributes:d.default.object,titleTemplate:d.default.string},t.defaultProps={defer:!0,encodeSpecialCharacters:!0},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||(t=(0,m.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},n},_=function(){return null},g=(0,T.default)(m.reducePropsToState,m.handleClientStateChange,m.mapStateOnServer)(_),A=b(g);A.renderStatic=A.rewind,t.Helmet=A,t.default=A},function(e,t,n){(function(e){function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n(1),u=r(i),c=n(5),s=r(c),l=n(31),f=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},p=function(e){var t=E(e,l.TAG_NAMES.TITLE),n=E(e,l.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,function(){return t});var r=E(e,l.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},d=function(e){return E(e,l.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},h=function(e,t){return t.filter(function(t){return"undefined"!=typeof t[e]}).map(function(t){return t[e]}).reduce(function(e,t){return a({},e,t)},{})},T=function(e,t){return t.filter(function(e){return"undefined"!=typeof e[l.TAG_NAMES.BASE]}).map(function(e){return e[l.TAG_NAMES.BASE]}).reverse().reduce(function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var a=r[o],i=a.toLowerCase();if(e.indexOf(i)!==-1&&n[i])return t.concat(n)}return t},[])},y=function(e,t,n){var r={};return n.filter(function(t){return!!Array.isArray(t[e])||("undefined"!=typeof t[e]&&A("Helmet: "+e+' should be of type "Array". Instead found type "'+o(t[e])+'"'),!1)}).map(function(t){return t[e]}).reverse().reduce(function(e,n){var o={};n.filter(function(e){for(var n=void 0,a=Object.keys(e),i=0;i<a.length;i++){var u=a[i],c=u.toLowerCase();t.indexOf(c)===-1||n===l.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||c===l.TAG_PROPERTIES.REL&&"stylesheet"===e[c].toLowerCase()||(n=c),t.indexOf(u)===-1||u!==l.TAG_PROPERTIES.INNER_HTML&&u!==l.TAG_PROPERTIES.CSS_TEXT&&u!==l.TAG_PROPERTIES.ITEM_PROP||(n=u)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][s]&&(o[n][s]=!0,!0)}).reverse().forEach(function(t){return e.push(t)});for(var a=Object.keys(o),i=0;i<a.length;i++){var u=a[i],c=(0,s.default)({},r[u],o[u]);r[u]=c}return e},[]).reverse()},E=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},m=function(e){return{baseTag:T([l.TAG_PROPERTIES.HREF],e),bodyAttributes:h(l.ATTRIBUTE_NAMES.BODY,e),defer:E(e,l.HELMET_PROPS.DEFER),encode:E(e,l.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:h(l.ATTRIBUTE_NAMES.HTML,e),linkTags:y(l.TAG_NAMES.LINK,[l.TAG_PROPERTIES.REL,l.TAG_PROPERTIES.HREF],e),metaTags:y(l.TAG_NAMES.META,[l.TAG_PROPERTIES.NAME,l.TAG_PROPERTIES.CHARSET,l.TAG_PROPERTIES.HTTPEQUIV,l.TAG_PROPERTIES.PROPERTY,l.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:y(l.TAG_NAMES.NOSCRIPT,[l.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:d(e),scriptTags:y(l.TAG_NAMES.SCRIPT,[l.TAG_PROPERTIES.SRC,l.TAG_PROPERTIES.INNER_HTML],e),styleTags:y(l.TAG_NAMES.STYLE,[l.TAG_PROPERTIES.CSS_TEXT],e),title:p(e),titleAttributes:h(l.ATTRIBUTE_NAMES.TITLE,e)}},v=function(){var e=Date.now();return function(t){var n=Date.now();n-e>16?(e=n,t(n)):setTimeout(function(){v(t)},0)}}(),b=function(e){return clearTimeout(e)},_="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||v:e.requestAnimationFrame||v,g="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||b:e.cancelAnimationFrame||b,A=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},S=null,w=function(e){S&&g(S),e.defer?S=_(function(){O(e,function(){S=null})}):(O(e),S=null)},O=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,u=e.noscriptTags,c=e.onChangeClientState,s=e.scriptTags,f=e.styleTags,p=e.title,d=e.titleAttributes;M(l.TAG_NAMES.BODY,r),M(l.TAG_NAMES.HTML,o),R(p,d);var h={baseTag:N(l.TAG_NAMES.BASE,n),linkTags:N(l.TAG_NAMES.LINK,a),metaTags:N(l.TAG_NAMES.META,i),noscriptTags:N(l.TAG_NAMES.NOSCRIPT,u),scriptTags:N(l.TAG_NAMES.SCRIPT,s),styleTags:N(l.TAG_NAMES.STYLE,f)},T={},y={};Object.keys(h).forEach(function(e){var t=h[e],n=t.newTags,r=t.oldTags;n.length&&(T[e]=n),r.length&&(y[e]=h[e].oldTags)}),t&&t(),c(e,T,y)},P=function(e){return Array.isArray(e)?e.join(""):e},R=function(e,t){"undefined"!=typeof e&&document.title!==e&&(document.title=P(e)),M(l.TAG_NAMES.TITLE,t)},M=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(l.HELMET_ATTRIBUTE),o=r?r.split(","):[],a=[].concat(o),i=Object.keys(t),u=0;u<i.length;u++){var c=i[u],s=t[c]||"";n.getAttribute(c)!==s&&n.setAttribute(c,s),o.indexOf(c)===-1&&o.push(c);var f=a.indexOf(c);f!==-1&&a.splice(f,1)}for(var p=a.length-1;p>=0;p--)n.removeAttribute(a[p]);o.length===a.length?n.removeAttribute(l.HELMET_ATTRIBUTE):n.getAttribute(l.HELMET_ATTRIBUTE)!==i.join(",")&&n.setAttribute(l.HELMET_ATTRIBUTE,i.join(","))}},N=function(e,t){var n=document.head||document.querySelector(l.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+l.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(r),a=[],i=void 0;return t&&t.length&&t.forEach(function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===l.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===l.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var u="undefined"==typeof t[r]?"":t[r];n.setAttribute(r,u)}n.setAttribute(l.HELMET_ATTRIBUTE,"true"),o.some(function(e,t){return i=t,n.isEqualNode(e)})?o.splice(i,1):a.push(n)}),o.forEach(function(e){return e.parentNode.removeChild(e)}),a.forEach(function(e){return n.appendChild(e)}),{oldTags:o,newTags:a}},C=function(e){return Object.keys(e).reduce(function(t,n){var r="undefined"!=typeof e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r},"")},x=function(e,t,n,r){var o=C(n),a=P(t);return o?"<"+e+" "+l.HELMET_ATTRIBUTE+'="true" '+o+">"+f(a,r)+"</"+e+">":"<"+e+" "+l.HELMET_ATTRIBUTE+'="true">'+f(a,r)+"</"+e+">"},I=function(e,t,n){return t.reduce(function(t,r){var o=Object.keys(r).filter(function(e){return!(e===l.TAG_PROPERTIES.INNER_HTML||e===l.TAG_PROPERTIES.CSS_TEXT)}).reduce(function(e,t){var o="undefined"==typeof r[t]?t:t+'="'+f(r[t],n)+'"';return e?e+" "+o:o},""),a=r.innerHTML||r.cssText||"",i=l.SELF_CLOSING_TAGS.indexOf(e)===-1;return t+"<"+e+" "+l.HELMET_ATTRIBUTE+'="true" '+o+(i?"/>":">"+a+"</"+e+">")},"")},L=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[l.REACT_TAG_MAP[n]||n]=e[n],t},t)},j=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[l.HTML_TAG_MAP[n]||n]=e[n],t},t)},G=function(e,t,n){var r,o=(r={key:t},r[l.HELMET_ATTRIBUTE]=!0,r),a=L(n,o);return[u.default.createElement(l.TAG_NAMES.TITLE,a,t)]},k=function(e,t){return t.map(function(t,n){var r,o=(r={key:n},r[l.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach(function(e){var n=l.REACT_TAG_MAP[e]||e;if(n===l.TAG_PROPERTIES.INNER_HTML||n===l.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]}),u.default.createElement(e,o)})},H=function(e,t,n){switch(e){case l.TAG_NAMES.TITLE:return{toComponent:function(){return G(e,t.title,t.titleAttributes,n)},toString:function(){return x(e,t.title,t.titleAttributes,n)}};case l.ATTRIBUTE_NAMES.BODY:case l.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return L(t)},toString:function(){return C(t)}};default:return{toComponent:function(){return k(e,t)},toString:function(){return I(e,t,n)}}}},B=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,u=e.noscriptTags,c=e.scriptTags,s=e.styleTags,f=e.title,p=void 0===f?"":f,d=e.titleAttributes;return{base:H(l.TAG_NAMES.BASE,t,r),bodyAttributes:H(l.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:H(l.ATTRIBUTE_NAMES.HTML,o,r),link:H(l.TAG_NAMES.LINK,a,r),meta:H(l.TAG_NAMES.META,i,r),noscript:H(l.TAG_NAMES.NOSCRIPT,u,r),script:H(l.TAG_NAMES.SCRIPT,c,r),style:H(l.TAG_NAMES.STYLE,s,r),title:H(l.TAG_NAMES.TITLE,{title:p,titleAttributes:d},r)}};t.convertReactPropstoHtmlAttributes=j,t.handleClientStateChange=w,t.mapStateOnServer=B,t.reducePropsToState=m,t.requestAnimationFrame=_,t.warn=A}).call(t,function(){return this}())},function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e,t,n){function r(e){return e.displayName||e.name||"Component"}if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!=typeof n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(u){function p(){h=e(d.map(function(e){return e.props})),T.canUseDOM?t(h):n&&(h=n(h))}if("function"!=typeof u)throw new Error("Expected WrappedComponent to be a React component.");var d=[],h=void 0,T=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.peek=function(){return h},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=h;return h=void 0,d=[],e},t.prototype.shouldComponentUpdate=function(e){return!f(e,this.props)},t.prototype.componentWillMount=function(){d.push(this),p()},t.prototype.componentDidUpdate=function(){p()},t.prototype.componentWillUnmount=function(){var e=d.indexOf(this);d.splice(e,1),p()},t.prototype.render=function(){return s.createElement(u,this.props)},t}(c.Component);return T.displayName="SideEffect("+r(u)+")",T.canUseDOM=l.canUseDOM,T}}var c=n(1),s=r(c),l=r(n(64)),f=r(n(117));e.exports=u},,function(e,t){e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;
if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var a=Object.keys(e),i=Object.keys(t);if(a.length!==i.length)return!1;for(var u=Object.prototype.hasOwnProperty.bind(t),c=0;c<a.length;c++){var s=a[c];if(!u(s))return!1;var l=e[s],f=t[s];if(o=n?n.call(r,l,f,s):void 0,o===!1||void 0===o&&l!==f)return!1}return!0}},,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(1),a=r(o),i=n(65),u=r(i),c=n(36),s=r(c),l=n(166),f=r(l);t.default=function(e){var t=e.article;return a.default.createElement("div",{className:f.default.preview},a.default.createElement(s.default,{alt:"",sizes:t.heroImage.sizes}),a.default.createElement("h3",{className:f.default.previewTitle},a.default.createElement(u.default,{to:"/blog/"+t.slug},t.title)),a.default.createElement("small",null,t.publishDate),a.default.createElement("p",{dangerouslySetInnerHTML:{__html:t.description.childMarkdownRemark.html}}))},e.exports=t.default},,,,,,,,,,,,,,,,,,,,,,,,,function(e,t){e.exports={previewTitle:"src-components----article-preview-module---previewTitle---16pYm",tag:"src-components----article-preview-module---tag---27JAs"}},,,function(e,t){"use strict";function n(e,t,f){if("string"!=typeof t){if(l){var p=s(t);p&&p!==l&&n(e,p,f)}var d=i(t);u&&(d=d.concat(u(t)));for(var h=0;h<d.length;++h){var T=d[h];if(!(r[T]||o[T]||f&&f[T])){var y=c(t,T);try{a(e,T,y)}catch(e){}}}return e}return e}var r={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a=Object.defineProperty,i=Object.getOwnPropertyNames,u=Object.getOwnPropertySymbols,c=Object.getOwnPropertyDescriptor,s=Object.getPrototypeOf,l=s&&s(Object);e.exports=n},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(1),a=r(o),i=n(36);r(i);t.default=function(e){var t=e.data;return a.default.createElement("div",{className:"row text-center section section-hero"},a.default.createElement("div",{className:"container-fluid hero-text-container"},a.default.createElement("h1",{className:"hero-text text-center"},t.tagline),a.default.createElement("a",{href:"#",role:"button",className:"btn btn-hero btn-yellow text-center"},"Ask for price")),a.default.createElement("div",{className:"hero-image-container"}))},e.exports=t.default},,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(1),a=r(o);t.default=function(e){var t=e.member;return a.default.createElement("div",{key:t.id,className:"col-md-3"},a.default.createElement("img",{src:t.image.file.url,className:"img-responsive"}),a.default.createElement("p",null,t.name),a.default.createElement("small",null,t.shortBio.shortBio))},e.exports=t.default},,,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var u=n(1),c=r(u),s=n(104),l=r(s),f=n(113),p=r(f),d=n(36),h=(r(d),n(265)),T=r(h),y=n(267),E=r(y),m=n(141),v=(r(m),function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e=((0,l.default)(this,"props.data.site.siteMetadata.title"),(0,l.default)(this,"props.data.allContentfulPerson.edges")),t=(0,l.default)(this,"props.data.contentfulCompany");return c.default.createElement("main",{role:"main"},c.default.createElement(p.default,null,c.default.createElement("title",null,"Brickbase")),c.default.createElement(T.default,{data:t}),c.default.createElement("div",{className:"row text-center section section-what-we-do"},c.default.createElement("div",{className:"container text-center"},c.default.createElement("h3",null,"What does Brickbase do?"),c.default.createElement("div",{className:"row"},c.default.createElement("div",{className:"col-md-4"},c.default.createElement("h4",null,"Securitization"),c.default.createElement("small",null,"Brickbase does something very simple, that yet cannot be found on international markets: Real Estate Securitization. REITs and real estate funds are pools of properties, spread across a country or across the globe, and very often the investment product is not even real estate!")),c.default.createElement("div",{className:"col-md-4"},c.default.createElement("span",{className:"icon-liquidity"}),c.default.createElement("h4",null,"Liquidity"),c.default.createElement("small",null,"Liquidity is not an attribute that appeals only to investors and financial practitioners: greater liquidity means cheaper cost of funding for property development projects. Greater liquidity in the real estate market would also have a tempering effect on the credit crunch that comes with periods of financial crisis")),c.default.createElement("div",{className:"col-md-4"},c.default.createElement("h4",null,"Simplicity"),c.default.createElement("small",null,'While investing in the shareholders\' capital of a company can be done through a simple "Buy" order on a stock exchange, investing in real estate is a much more bureaucratic process. Brickbase deconstructs the sales and purchase of real estate into a seamless process. Less bureaucracy, more investment.'))))),c.default.createElement("div",{className:"row text-center section section-team"},c.default.createElement("div",{className:"container text-center"},c.default.createElement("h3",null,"Meet our team"),c.default.createElement("div",{className:"row"},e.map(function(e){var t=e.node;return c.default.createElement(E.default,{member:t})})))),c.default.createElement("div",{className:"row text-center section section-career"},c.default.createElement("div",{className:"container text-center"},c.default.createElement("h3",null,"We are Hiring"),c.default.createElement("div",{className:"row"},c.default.createElement("div",{className:"col-md-7 mx-auto"},c.default.createElement("p",null,"Our vision is to become the reference for real estate investment, and we are just getting started."),c.default.createElement("p",null,"We're looking for ambitious talents to join our team and build awesomeness."),c.default.createElement("p",null,"What kind of profile are we looking for? We want smart, dynamic and ambitious people who want to get first-hand experience in building a venture from the ground up."),c.default.createElement("br",null),c.default.createElement("a",{href:"https://angel.co/brickbase/jobs/428556-tech-cofounder",target:"_blank",role:"button",className:"btn btn-white text-center"},"SEE OPENINGS"))))),c.default.createElement("div",{className:"row text-center section section-footer"},c.default.createElement("div",{className:"container text-center"},c.default.createElement("h3",null,c.default.createElement("a",{href:"mailto:info@brickbase.io"},"info@brickbase.io")),c.default.createElement("embed",{src:"/images/footer_img.svg",className:"footer-image"}))))},t}(c.default.Component));t.default=v;t.pageQuery="** extracted graphql fragment **"}]);
//# sourceMappingURL=component---src-pages-index-js-06d0809068788335d655.js.map