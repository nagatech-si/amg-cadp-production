(this["webpackJsonpreactjs-guide"]=this["webpackJsonpreactjs-guide"]||[]).push([[10],{600:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(61),i=n(21),r=n(593),o=n(594),l=n(96),s=n(199),b=n(200),d=n(24),j=n(458),u=n(595),p=n(592),h=n(7),m={ShowAlert:function(t,e){return Object(h.jsx)("div",{children:Object(h.jsx)(p.a,{variant:t,children:e})})},inputStyle1:function(t){var e=t.input,n=t.label,a=t.type,c=t.meta,i=c.touched,r=c.error,o=c.warning;return Object(h.jsxs)(j.a,{controlId:"floatingInput",label:n,className:"mb-3",children:[Object(h.jsx)(u.a.Control,Object(d.a)({type:a,placeholder:n},e)),i&&(r&&Object(h.jsx)(u.a.Control.Feedback,{type:"invalid",children:r})||o&&Object(h.jsx)(u.a.Control.Feedback,{children:o}))]})}},O=n(39),x=Object(b.a)({form:"LoginForm"})((function(t){var e=t.handleSubmit,n=t.pristine,a=t.submitting;return Object(h.jsx)(r.a,{title:"Form Login",style:{width:"50vh",marginTop:"15vh",marginLeft:"80vh"},children:Object(h.jsxs)(o.a,{onSubmit:e,children:[Object(h.jsx)(o.a.Item,{children:Object(h.jsx)(s.a,{name:"user_id",type:"text",label:"Email",component:m.inputStyle1})}),Object(h.jsx)(o.a.Item,{children:Object(h.jsx)(s.a,{name:"password",type:"password",label:"Password",component:m.inputStyle1})}),Object(h.jsx)(l.a,{type:"primary",htmltype:"button",disabled:n||a,onClick:function(){return t.dispatch(O.i)},children:"Submit"})]})})}));e.default=function(){var t=Object(c.c)();return Object(a.useEffect)((function(){t(i.h),localStorage.getItem("isLogin")&&window.location.replace("/amg-cadp-production/dashboard")}),[t]),Object(h.jsx)(x,{})}}}]);
//# sourceMappingURL=10.4c74be32.chunk.js.map