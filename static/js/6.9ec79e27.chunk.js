(this["webpackJsonpreactjs-guide"]=this["webpackJsonpreactjs-guide"]||[]).push([[6],{344:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n(24);var a=n(0),r=(n(7),a.createContext({prefixes:{}}));r.Consumer,r.Provider;function i(e,t){var n=Object(a.useContext)(r).prefixes;return e||n[t]||t}},350:function(e,t,n){"use strict";var a=n(0),r=a.createContext({});t.a=r},376:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(134);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,r=!1,i=void 0;try{for(var o,s=e[Symbol.iterator]();!(a=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(c){r=!0,i=c}finally{try{a||null==s.return||s.return()}finally{if(r)throw i}}return n}}(e,t)||Object(a.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},409:function(e,t,n){"use strict";var a=n(24),r=n(340),i=n(0),o=n(350),s=n(7),c=["controlId","as"],l=i.forwardRef((function(e,t){var n=e.controlId,l=e.as,u=void 0===l?"div":l,d=Object(r.a)(e,c),f=Object(i.useMemo)((function(){return{controlId:n}}),[n]);return Object(s.jsx)(o.a.Provider,{value:f,children:Object(s.jsx)(u,Object(a.a)(Object(a.a)({},d),{},{ref:t}))})}));l.displayName="FormGroup",t.a=l},410:function(e,t,n){"use strict";var a=function(){};e.exports=a},411:function(e,t,n){"use strict";n(0)},457:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var a=n(24),r=n(340),i=n(5),o=n.n(i),s=/-(.)/g;var c=n(0),l=n(344),u=n(7),d=["className","bsPrefix","as"],f=function(e){return e[0].toUpperCase()+(t=e,t.replace(s,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function b(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.displayName,i=void 0===n?f(e):n,s=t.Component,b=t.defaultProps,p=c.forwardRef((function(t,n){var i=t.className,c=t.bsPrefix,f=t.as,b=void 0===f?s||"div":f,p=Object(r.a)(t,d),v=Object(l.a)(c,e);return Object(u.jsx)(b,Object(a.a)({ref:n,className:o()(i,v)},p))}));return p.defaultProps=b,p.displayName=i,p}},458:function(e,t,n){"use strict";var a=n(24),r=n(340),i=n(5),o=n.n(i),s=n(0),c=n(409),l=n(344),u=n(7),d=["bsPrefix","className","children","controlId","label"],f=s.forwardRef((function(e,t){var n=e.bsPrefix,i=e.className,s=e.children,f=e.controlId,b=e.label,p=Object(r.a)(e,d);return n=Object(l.a)(n,"form-floating"),Object(u.jsxs)(c.a,Object(a.a)(Object(a.a)({ref:t,className:o()(i,n),controlId:f},p),{},{children:[s,Object(u.jsx)("label",{htmlFor:f,children:b})]}))}));f.displayName="FloatingLabel",t.a=f},459:function(e,t,n){"use strict";(function(e){var a=n(0),r="undefined"!==typeof e&&e.navigator&&"ReactNative"===e.navigator.product,i="undefined"!==typeof document;t.a=i||r?a.useLayoutEffect:a.useEffect}).call(this,n(112))},460:function(e,t,n){"use strict";function a(e){return e&&e.ownerDocument||document}n.d(t,"a",(function(){return a}))},461:function(e,t,n){"use strict";t.a=!("undefined"===typeof window||!window.document||!window.document.createElement)},592:function(e,t,n){"use strict";var a=n(24),r=n(340),i=n(5),o=n.n(i),s=n(0),c=n.n(s),l=n(2),u=n(27);n(363);function d(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function f(e){var t=function(e,t){if("object"!==typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!==typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===typeof t?t:String(t)}function b(e,t){return Object.keys(t).reduce((function(n,a){var r,i=n,o=i[d(a)],c=i[a],b=Object(u.a)(i,[d(a),a].map(f)),p=t[a],v=function(e,t,n){var a=Object(s.useRef)(void 0!==e),r=Object(s.useState)(t),i=r[0],o=r[1],c=void 0!==e,l=a.current;return a.current=c,!c&&l&&i!==t&&o(t),[c?e:i,Object(s.useCallback)((function(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),r=1;r<t;r++)a[r-1]=arguments[r];n&&n.apply(void 0,[e].concat(a)),o(e)}),[n])]}(c,o,e[p]),m=v[0],j=v[1];return Object(l.a)({},b,((r={})[a]=m,r[p]=j,r))}),e)}var p=n(33);function v(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==e&&void 0!==e&&this.setState(e)}function m(e){this.setState(function(t){var n=this.constructor.getDerivedStateFromProps(e,t);return null!==n&&void 0!==n?n:null}.bind(this))}function j(e,t){try{var n=this.props,a=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,a)}finally{this.props=n,this.state=a}}v.__suppressDeprecationWarning=!0,m.__suppressDeprecationWarning=!0,j.__suppressDeprecationWarning=!0;var O=function(e){var t=Object(s.useRef)(e);return Object(s.useEffect)((function(){t.current=e}),[e]),t};var h=n(376);var x=function(e){var t=Object(s.useRef)(e);return Object(s.useEffect)((function(){t.current=e}),[e]),t};function y(e){var t=x(e);return Object(s.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}n(411);n(459),new WeakMap;var E=n(7),N=["as","disabled"];function g(e){var t=e.tagName,n=e.disabled,a=e.href,r=e.target,i=e.rel,o=e.onClick,s=e.tabIndex,c=void 0===s?0:s,l=e.type;t||(t=null!=a||null!=r||null!=i?"a":"button");var u={tagName:t};if("button"===t)return[{type:l||"button",disabled:n},u];var d=function(e){(n||"a"===t&&function(e){return!e||"#"===e.trim()}(a))&&e.preventDefault(),n?e.stopPropagation():null==o||o(e)};return[{role:"button",disabled:void 0,tabIndex:n?void 0:c,href:"a"===t&&n?void 0:a,target:"a"===t?r:void 0,"aria-disabled":n||void 0,rel:"a"===t?i:void 0,onClick:d,onKeyDown:function(e){" "===e.key&&(e.preventDefault(),d(e))}},u]}var w=s.forwardRef((function(e,t){var n=e.as,a=e.disabled,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,N),i=g(Object.assign({tagName:n,disabled:a},r)),o=Object(h.a)(i,2),s=o[0],c=o[1].tagName;return Object(E.jsx)(c,Object.assign({},r,s,{ref:t}))}));w.displayName="Button";var C=["onKeyDown"];var k=s.forwardRef((function(e,t){var n,a=e.onKeyDown,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,C),i=g(Object.assign({tagName:"a"},r)),o=Object(h.a)(i,1)[0],s=y((function(e){o.onKeyDown(e),null==a||a(e)}));return((n=r.href)&&"#"!==n.trim()||r.role)&&"button"!==r.role?Object(E.jsx)("a",Object.assign({ref:t},r,{onKeyDown:a})):Object(E.jsx)("a",Object.assign({ref:t},r,o,{onKeyDown:s}))}));k.displayName="Anchor";var S=k,P=n(344),R=n(141),I=n(62),F=n.n(I),L=n(26),T=n.n(L),D=!1,_=c.a.createContext(null),V="unmounted",M="exited",z="entering",A="entered",U="exiting",H=function(e){function t(t,n){var a;a=e.call(this,t,n)||this;var r,i=n&&!n.isMounting?t.enter:t.appear;return a.appearStatus=null,t.in?i?(r=M,a.appearStatus=z):r=A:r=t.unmountOnExit||t.mountOnEnter?V:M,a.state={status:r},a.nextCallback=null,a}Object(p.a)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===V?{status:M}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==z&&n!==A&&(t=z):n!==z&&n!==A||(t=U)}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,a=this.props.timeout;return e=t=n=a,null!=a&&"number"!==typeof a&&(e=a.exit,t=a.enter,n=void 0!==a.appear?a.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){void 0===e&&(e=!1),null!==t?(this.cancelNextCallback(),t===z?this.performEnter(e):this.performExit()):this.props.unmountOnExit&&this.state.status===M&&this.setState({status:V})},n.performEnter=function(e){var t=this,n=this.props.enter,a=this.context?this.context.isMounting:e,r=this.props.nodeRef?[a]:[T.a.findDOMNode(this),a],i=r[0],o=r[1],s=this.getTimeouts(),c=a?s.appear:s.enter;!e&&!n||D?this.safeSetState({status:A},(function(){t.props.onEntered(i)})):(this.props.onEnter(i,o),this.safeSetState({status:z},(function(){t.props.onEntering(i,o),t.onTransitionEnd(c,(function(){t.safeSetState({status:A},(function(){t.props.onEntered(i,o)}))}))})))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),a=this.props.nodeRef?void 0:T.a.findDOMNode(this);t&&!D?(this.props.onExit(a),this.safeSetState({status:U},(function(){e.props.onExiting(a),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:M},(function(){e.props.onExited(a)}))}))}))):this.safeSetState({status:M},(function(){e.props.onExited(a)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(a){n&&(n=!1,t.nextCallback=null,e(a))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:T.a.findDOMNode(this),a=null==e&&!this.props.addEndListener;if(n&&!a){if(this.props.addEndListener){var r=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],i=r[0],o=r[1];this.props.addEndListener(i,o)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if(e===V)return null;var t=this.props,n=t.children,a=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,Object(u.a)(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return c.a.createElement(_.Provider,{value:null},"function"===typeof n?n(e,a):c.a.cloneElement(c.a.Children.only(n),a))},t}(c.a.Component);function K(){}H.contextType=_,H.propTypes={},H.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:K,onEntering:K,onEntered:K,onExit:K,onExiting:K,onExited:K},H.UNMOUNTED=V,H.EXITED=M,H.ENTERING=z,H.ENTERED=A,H.EXITING=U;var W=H,G=n(460);function X(e,t){return function(e){var t=Object(G.a)(e);return t&&t.defaultView||window}(e).getComputedStyle(e,t)}var B=/([A-Z])/g;var J=/^ms-/;function Y(e){return function(e){return e.replace(B,"-$1").toLowerCase()}(e).replace(J,"-ms-")}var Z=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;var $=function(e,t){var n="",a="";if("string"===typeof t)return e.style.getPropertyValue(Y(t))||X(e).getPropertyValue(Y(t));Object.keys(t).forEach((function(r){var i=t[r];i||0===i?!function(e){return!(!e||!Z.test(e))}(r)?n+=Y(r)+": "+i+";":a+=r+"("+i+") ":e.style.removeProperty(Y(r))})),a&&(n+="transform: "+a+";"),e.style.cssText+=";"+n},q=n(461),Q=!1,ee=!1;try{var te={get passive(){return Q=!0},get once(){return ee=Q=!0}};q.a&&(window.addEventListener("test",te,te),window.removeEventListener("test",te,!0))}catch(Re){}var ne=function(e,t,n,a){if(a&&"boolean"!==typeof a&&!ee){var r=a.once,i=a.capture,o=n;!ee&&r&&(o=n.__once||function e(a){this.removeEventListener(t,e,i),n.call(this,a)},n.__once=o),e.addEventListener(t,o,Q?a:i)}e.addEventListener(t,n,a)};var ae=function(e,t,n,a){var r=a&&"boolean"!==typeof a?a.capture:a;e.removeEventListener(t,n,r),n.__once&&e.removeEventListener(t,n.__once,r)};var re=function(e,t,n,a){return ne(e,t,n,a),function(){ae(e,t,n,a)}};function ie(e,t,n){void 0===n&&(n=5);var a=!1,r=setTimeout((function(){a||function(e,t,n,a){if(void 0===n&&(n=!1),void 0===a&&(a=!0),e){var r=document.createEvent("HTMLEvents");r.initEvent(t,n,a),e.dispatchEvent(r)}}(e,"transitionend",!0)}),t+n),i=re(e,"transitionend",(function(){a=!0}),{once:!0});return function(){clearTimeout(r),i()}}function oe(e,t,n,a){null==n&&(n=function(e){var t=$(e,"transitionDuration")||"",n=-1===t.indexOf("ms")?1e3:1;return parseFloat(t)*n}(e)||0);var r=ie(e,n,a),i=re(e,"transitionend",t);return function(){r(),i()}}function se(e,t){var n=$(e,t)||"",a=-1===n.indexOf("ms")?1e3:1;return parseFloat(n)*a}function ce(e,t){var n=se(e,"transitionDuration"),a=se(e,"transitionDelay"),r=oe(e,(function(n){n.target===e&&(r(),t(n))}),n+a)}var le=function(e){return e&&"function"!==typeof e?function(t){e.current=t}:e};var ue=function(e,t){return Object(s.useMemo)((function(){return function(e,t){var n=le(e),a=le(t);return function(e){n&&n(e),a&&a(e)}}(e,t)}),[e,t])};var de,fe=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children","childRef"],be=c.a.forwardRef((function(e,t){var n=e.onEnter,i=e.onEntering,o=e.onEntered,l=e.onExit,u=e.onExiting,d=e.onExited,f=e.addEndListener,b=e.children,p=e.childRef,v=Object(r.a)(e,fe),m=Object(s.useRef)(null),j=ue(m,p),O=function(e){var t;j((t=e)&&"setState"in t?T.a.findDOMNode(t):null!=t?t:null)},h=function(e){return function(t){e&&m.current&&e(m.current,t)}},x=Object(s.useCallback)(h(n),[n]),y=Object(s.useCallback)(h(i),[i]),N=Object(s.useCallback)(h(o),[o]),g=Object(s.useCallback)(h(l),[l]),w=Object(s.useCallback)(h(u),[u]),C=Object(s.useCallback)(h(d),[d]),k=Object(s.useCallback)(h(f),[f]);return Object(E.jsx)(W,Object(a.a)(Object(a.a)({ref:t},v),{},{onEnter:x,onEntered:N,onEntering:y,onExit:g,onExited:C,onExiting:w,addEndListener:k,nodeRef:m,children:"function"===typeof b?function(e,t){return b(e,Object(a.a)(Object(a.a)({},t),{},{ref:O}))}:c.a.cloneElement(b,{ref:O})}))})),pe=["className","children"],ve=(de={},Object(R.a)(de,z,"show"),Object(R.a)(de,A,"show"),de),me=s.forwardRef((function(e,t){var n=e.className,i=e.children,c=Object(r.a)(e,pe),l=Object(s.useCallback)((function(e,t){!function(e){e.offsetHeight}(e),null==c.onEnter||c.onEnter(e,t)}),[c]);return Object(E.jsx)(be,Object(a.a)(Object(a.a)({ref:t,addEndListener:ce},c),{},{onEnter:l,childRef:i.ref,children:function(e,t){return s.cloneElement(i,Object(a.a)(Object(a.a)({},t),{},{className:o()("fade",n,i.props.className,ve[e])}))}}))}));me.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},me.displayName="Fade";var je=me,Oe=["className","variant"],he={"aria-label":F.a.string,onClick:F.a.func,variant:F.a.oneOf(["white"])},xe=s.forwardRef((function(e,t){var n=e.className,i=e.variant,s=Object(r.a)(e,Oe);return Object(E.jsx)("button",Object(a.a)({ref:t,type:"button",className:o()("btn-close",i&&"btn-close-".concat(i),n)},s))}));xe.displayName="CloseButton",xe.propTypes=he,xe.defaultProps={"aria-label":"Close"};var ye,Ee=xe,Ne=n(457),ge=["bsPrefix","show","closeLabel","closeVariant","className","children","variant","onClose","dismissible","transition"],we=(ye="h4",s.forwardRef((function(e,t){return Object(E.jsx)("div",Object(a.a)(Object(a.a)({},e),{},{ref:t,className:o()(e.className,ye)}))})));we.displayName="DivStyledAsH4";var Ce=Object(Ne.a)("alert-heading",{Component:we}),ke=Object(Ne.a)("alert-link",{Component:S}),Se={variant:"primary",show:!0,transition:je,closeLabel:"Close alert"},Pe=s.forwardRef((function(e,t){var n=b(e,{show:"onClose"}),i=n.bsPrefix,c=n.show,l=n.closeLabel,u=n.closeVariant,d=n.className,f=n.children,p=n.variant,v=n.onClose,m=n.dismissible,j=n.transition,h=Object(r.a)(n,ge),x=Object(P.a)(i,"alert"),y=function(e){var t=O(e);return Object(s.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}((function(e){v&&v(!1,e)})),N=!0===j?je:j,g=Object(E.jsxs)("div",Object(a.a)(Object(a.a)({role:"alert"},N?void 0:h),{},{ref:t,className:o()(d,x,p&&"".concat(x,"-").concat(p),m&&"".concat(x,"-dismissible")),children:[m&&Object(E.jsx)(Ee,{onClick:y,"aria-label":l,variant:u}),f]}));return N?Object(E.jsx)(N,Object(a.a)(Object(a.a)({unmountOnExit:!0},h),{},{ref:void 0,in:c,children:g})):c?g:null}));Pe.displayName="Alert",Pe.defaultProps=Se;t.a=Object.assign(Pe,{Link:ke,Heading:Ce})},595:function(e,t,n){"use strict";var a=n(24),r=n(340),i=n(5),o=n.n(i),s=n(62),c=n.n(s),l=n(0),u=n(7),d=["as","className","type","tooltip"],f={type:c.a.string,tooltip:c.a.bool,as:c.a.elementType},b=l.forwardRef((function(e,t){var n=e.as,i=void 0===n?"div":n,s=e.className,c=e.type,l=void 0===c?"valid":c,f=e.tooltip,b=void 0!==f&&f,p=Object(r.a)(e,d);return Object(u.jsx)(i,Object(a.a)(Object(a.a)({},p),{},{ref:t,className:o()(s,"".concat(l,"-").concat(b?"tooltip":"feedback"))}))}));b.displayName="Feedback",b.propTypes=f;var p=b,v=n(350),m=n(344),j=["id","bsPrefix","className","type","isValid","isInvalid","as"],O=l.forwardRef((function(e,t){var n=e.id,i=e.bsPrefix,s=e.className,c=e.type,d=void 0===c?"checkbox":c,f=e.isValid,b=void 0!==f&&f,p=e.isInvalid,O=void 0!==p&&p,h=e.as,x=void 0===h?"input":h,y=Object(r.a)(e,j),E=Object(l.useContext)(v.a).controlId;return i=Object(m.a)(i,"form-check-input"),Object(u.jsx)(x,Object(a.a)(Object(a.a)({},y),{},{ref:t,type:d,id:n||E,className:o()(s,i,b&&"is-valid",O&&"is-invalid")}))}));O.displayName="FormCheckInput";var h=O,x=["bsPrefix","className","htmlFor"],y=l.forwardRef((function(e,t){var n=e.bsPrefix,i=e.className,s=e.htmlFor,c=Object(r.a)(e,x),d=Object(l.useContext)(v.a).controlId;return n=Object(m.a)(n,"form-check-label"),Object(u.jsx)("label",Object(a.a)(Object(a.a)({},c),{},{ref:t,htmlFor:s||d,className:o()(i,n)}))}));y.displayName="FormCheckLabel";var E=y,N=["id","bsPrefix","bsSwitchPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","title","type","label","children","as"],g=l.forwardRef((function(e,t){var n=e.id,i=e.bsPrefix,s=e.bsSwitchPrefix,c=e.inline,d=void 0!==c&&c,f=e.disabled,b=void 0!==f&&f,j=e.isValid,O=void 0!==j&&j,x=e.isInvalid,y=void 0!==x&&x,g=e.feedbackTooltip,w=void 0!==g&&g,C=e.feedback,k=e.className,S=e.style,P=e.title,R=void 0===P?"":P,I=e.type,F=void 0===I?"checkbox":I,L=e.label,T=e.children,D=e.as,_=void 0===D?"input":D,V=Object(r.a)(e,N);i=Object(m.a)(i,"form-check"),s=Object(m.a)(s,"form-switch");var M=Object(l.useContext)(v.a).controlId,z=Object(l.useMemo)((function(){return{controlId:n||M}}),[M,n]),A=null!=L&&!1!==L&&!T,U=Object(u.jsx)(h,Object(a.a)(Object(a.a)({},V),{},{type:"switch"===F?"checkbox":F,ref:t,isValid:O,isInvalid:y,disabled:b,as:_}));return Object(u.jsx)(v.a.Provider,{value:z,children:Object(u.jsx)("div",{style:S,className:o()(k,L&&i,d&&"".concat(i,"-inline"),"switch"===F&&s),children:T||Object(u.jsxs)(u.Fragment,{children:[U,A&&Object(u.jsx)(E,{title:R,children:L}),(O||y)&&Object(u.jsx)(p,{type:O?"valid":"invalid",tooltip:w,children:C})]})})})}));g.displayName="FormCheck";var w=Object.assign(g,{Input:h,Label:E}),C=n(141),k=(n(410),["bsPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","as"]),S=l.forwardRef((function(e,t){var n,i,s=e.bsPrefix,c=e.type,d=e.size,f=e.htmlSize,b=e.id,p=e.className,j=e.isValid,O=void 0!==j&&j,h=e.isInvalid,x=void 0!==h&&h,y=e.plaintext,E=e.readOnly,N=e.as,g=void 0===N?"input":N,w=Object(r.a)(e,k),S=Object(l.useContext)(v.a).controlId;(s=Object(m.a)(s,"form-control"),y)?n=Object(C.a)({},"".concat(s,"-plaintext"),!0):(i={},Object(C.a)(i,s,!0),Object(C.a)(i,"".concat(s,"-").concat(d),d),n=i);return Object(u.jsx)(g,Object(a.a)(Object(a.a)({},w),{},{type:c,size:f,ref:t,readOnly:E,id:b||S,className:o()(p,n,O&&"is-valid",x&&"is-invalid","color"===c&&"".concat(s,"-color"))}))}));S.displayName="FormControl";var P=Object.assign(S,{Feedback:p}),R=n(457),I=Object(R.a)("form-floating"),F=n(409),L=["bsPrefix","className","as"],T=["xxl","xl","lg","md","sm","xs"],D=l.forwardRef((function(e,t){var n=e.bsPrefix,i=e.className,s=e.as,c=void 0===s?"div":s,l=Object(r.a)(e,L),d=Object(m.a)(n,"col"),f=[],b=[];return T.forEach((function(e){var t,n,a,r=l[e];if(delete l[e],"object"===typeof r&&null!=r){var i=r.span;t=void 0===i||i,n=r.offset,a=r.order}else t=r;var o="xs"!==e?"-".concat(e):"";t&&f.push(!0===t?"".concat(d).concat(o):"".concat(d).concat(o,"-").concat(t)),null!=a&&b.push("order".concat(o,"-").concat(a)),null!=n&&b.push("offset".concat(o,"-").concat(n))})),f.length||f.push(d),Object(u.jsx)(c,Object(a.a)(Object(a.a)({},l),{},{ref:t,className:o.a.apply(void 0,[i].concat(f,b))}))}));D.displayName="Col";var _=D,V=["as","bsPrefix","column","visuallyHidden","className","htmlFor"],M=l.forwardRef((function(e,t){var n=e.as,i=void 0===n?"label":n,s=e.bsPrefix,c=e.column,d=e.visuallyHidden,f=e.className,b=e.htmlFor,p=Object(r.a)(e,V),j=Object(l.useContext)(v.a).controlId;s=Object(m.a)(s,"form-label");var O="col-form-label";"string"===typeof c&&(O="".concat(O," ").concat(O,"-").concat(c));var h=o()(f,s,d&&"visually-hidden",c&&O);return b=b||j,c?Object(u.jsx)(_,Object(a.a)({ref:t,as:"label",className:h,htmlFor:b},p)):Object(u.jsx)(i,Object(a.a)({ref:t,className:h,htmlFor:b},p))}));M.displayName="FormLabel",M.defaultProps={column:!1,visuallyHidden:!1};var z=M,A=["bsPrefix","className","id"],U=l.forwardRef((function(e,t){var n=e.bsPrefix,i=e.className,s=e.id,c=Object(r.a)(e,A),d=Object(l.useContext)(v.a).controlId;return n=Object(m.a)(n,"form-range"),Object(u.jsx)("input",Object(a.a)(Object(a.a)({},c),{},{type:"range",ref:t,className:o()(i,n),id:s||d}))}));U.displayName="FormRange";var H=U,K=["bsPrefix","size","htmlSize","className","isValid","isInvalid","id"],W=l.forwardRef((function(e,t){var n=e.bsPrefix,i=e.size,s=e.htmlSize,c=e.className,d=e.isValid,f=void 0!==d&&d,b=e.isInvalid,p=void 0!==b&&b,j=e.id,O=Object(r.a)(e,K),h=Object(l.useContext)(v.a).controlId;return n=Object(m.a)(n,"form-select"),Object(u.jsx)("select",Object(a.a)(Object(a.a)({},O),{},{size:s,ref:t,className:o()(c,n,i&&"".concat(n,"-").concat(i),f&&"is-valid",p&&"is-invalid"),id:j||h}))}));W.displayName="FormSelect";var G=W,X=["bsPrefix","className","as","muted"],B=l.forwardRef((function(e,t){var n=e.bsPrefix,i=e.className,s=e.as,c=void 0===s?"small":s,l=e.muted,d=Object(r.a)(e,X);return n=Object(m.a)(n,"form-text"),Object(u.jsx)(c,Object(a.a)(Object(a.a)({},d),{},{ref:t,className:o()(i,n,l&&"text-muted")}))}));B.displayName="FormText";var J=B,Y=l.forwardRef((function(e,t){return Object(u.jsx)(w,Object(a.a)(Object(a.a)({},e),{},{ref:t,type:"switch"}))}));Y.displayName="Switch";var Z=Object.assign(Y,{Input:w.Input,Label:w.Label}),$=n(458),q=["className","validated","as"],Q={_ref:c.a.any,validated:c.a.bool,as:c.a.elementType},ee=l.forwardRef((function(e,t){var n=e.className,i=e.validated,s=e.as,c=void 0===s?"form":s,l=Object(r.a)(e,q);return Object(u.jsx)(c,Object(a.a)(Object(a.a)({},l),{},{ref:t,className:o()(n,i&&"was-validated")}))}));ee.displayName="Form",ee.propTypes=Q;t.a=Object.assign(ee,{Group:F.a,Control:P,Floating:I,Check:w,Switch:Z,Label:z,Text:J,Range:H,Select:G,FloatingLabel:$.a})}}]);
//# sourceMappingURL=6.9ec79e27.chunk.js.map