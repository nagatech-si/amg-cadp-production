(this["webpackJsonpreactjs-guide"]=this["webpackJsonpreactjs-guide"]||[]).push([[2],{127:function(t,e,n){"use strict";var r={getLoading:function(t){return t.ui.loading},getBtnLoading:function(t){return t.ui.btnLoading},getTypeTableLayout:function(t){return t.ui.typeTable}};e.a=r},21:function(t,e,n){"use strict";n.d(e,"c",(function(){return r})),n.d(e,"g",(function(){return a})),n.d(e,"f",(function(){return o})),n.d(e,"a",(function(){return c})),n.d(e,"e",(function(){return i})),n.d(e,"d",(function(){return u})),n.d(e,"b",(function(){return s})),n.d(e,"h",(function(){return l})),n.d(e,"i",(function(){return d})),n.d(e,"j",(function(){return p})),n.d(e,"k",(function(){return f}));var r="[ui] page loaded login",a="[ui] page loading on",o="[ui] page loading off",c="[ui] button loaded",i="[ui] button loading on",u="[ui] button loading off",s="[ui] table layout L",l={type:r},d=function(t){return{type:t?a:o,payload:t}},p=function(t){return{type:t?i:u,payload:t}},f=function(t){return{type:s,payload:t}}},231:function(t,e,n){},235:function(t,e,n){},328:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n(26),o=n.n(a),c=(n(231),n(62)),i=n(55),u=n(334),s=n(122),l=n(335),d=n(330),p=n(331),f=n(25),b=(n(235),n(336)),g=n(337),h=n(338),j=n(170),O=n.n(j),v=n(127),k={feedbackLogin:function(t){return t.login.feedback},getIsLogin:function(t){return t.login.isLogin}},m=n(21),x=n(7),y=Object(r.lazy)((function(){return n.e(9).then(n.bind(null,587))})),L=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(6),n.e(10)]).then(n.bind(null,600))})),w=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(8)]).then(n.bind(null,597))})),_=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(7)]).then(n.bind(null,598))})),S=Object(r.lazy)((function(){return Promise.all([n.e(12),n.e(11)]).then(n.bind(null,589))})),A=function(){return Object(x.jsx)(r.Suspense,{fallback:Object(x.jsx)("div",{}),children:Object(x.jsxs)(f.c,{children:[Object(x.jsx)(f.a,{path:"/amg-cadp-production",exact:!0,children:Object(x.jsx)(L,{})}),Object(x.jsx)(f.a,{path:"/amg-cadp-production/dashboard",children:Object(x.jsx)(y,{})}),Object(x.jsx)(f.a,{path:"/amg-cadp-production/laporan/stock-global-produksi",children:Object(x.jsx)(w,{})}),Object(x.jsx)(f.a,{path:"/amg-cadp-production/laporan/kirim-saldo-tahun",children:Object(x.jsx)(_,{})}),Object(x.jsx)(f.a,{path:"*",children:Object(x.jsx)(S,{})})]})})},P=n(39),D={"/amg-cadp-production/dashboard":"Home","/amg-cadp-production/laporan":"Laporan","/amg-cadp-production/laporan/stock-global-produksi":"Stock Global Produksi"};var I=function(){var t=u.a.Header,e=u.a.Footer,n=u.a.Content,a=u.a.Sider,o=s.a.SubMenu,j=Object(c.c)(),y=Object(c.d)(v.a.getLoading),L=Object(c.d)(k.getIsLogin),w=new Date,_=Object(f.f)(),S=_.pathname.split("/").filter((function(t){return t})),I=S.map((function(t,e){var n="/".concat(S.slice(0,e+1).join("/"));return Object(x.jsx)(l.a.Item,{children:D[n]})})),R=[Object(x.jsx)(l.a.Item,{children:"App"},"home")].concat(I);return Object(r.useEffect)((function(){j(m.h)}),[j]),Object(r.useEffect)((function(){j(P.f)}),[j]),y?Object(x.jsx)(O.a,{loading:!0,background:"rgba(0, 0, 0, 0.39)",loaderColor:"#3498db"}):L?Object(x.jsxs)(u.a,{style:{minHeight:"100vh"},children:[Object(x.jsxs)(a,{collapsible:!0,children:[Object(x.jsx)("div",{className:"logo",children:Object(x.jsx)("h5",{style:{color:"white",textAlign:"center"},children:"CADP REPORT"})}),Object(x.jsxs)(s.a,{theme:"dark",defaultSelectedKeys:[_.pathname],mode:"inline",defaultOpenKeys:_.pathname.includes("laporan")?["laporan"]:"",children:[Object(x.jsx)(s.a.Item,{icon:Object(x.jsx)(b.a,{}),children:Object(x.jsx)(i.b,{to:"/amg-cadp-production/dashboard",className:"link-menus",children:"Dashboard"})},"/amg-cadp-production/dashboard"),Object(x.jsxs)(o,{icon:Object(x.jsx)(g.a,{}),title:"Laporan",children:[Object(x.jsx)(s.a.Item,{children:Object(x.jsx)(i.b,{to:"/amg-cadp-production/laporan/stock-global-produksi",className:"link-menus",children:"Stock Global Produksi"})},"/amg-cadp-production/laporan/stock-global-produksi"),Object(x.jsx)(s.a.Item,{children:Object(x.jsx)(i.b,{to:"/amg-cadp-production/laporan/kirim-saldo-tahun",className:"link-menus",children:"Kirim dan Saldo per Tahun"})},"/amg-cadp-production/laporan/kirim-saldo-tahun")]},"laporan")]})]}),Object(x.jsxs)(u.a,{className:"site-layout",children:[Object(x.jsx)(t,{className:"site-layout-background",style:{padding:0,paddingRight:10},children:Object(x.jsxs)(d.a,{gutter:{xs:8,sm:16},children:[Object(x.jsx)(p.a,{className:"gutter-row",offset:15,style:{paddingLeft:100},children:Object(x.jsxs)("span",{style:{fontSize:12,textAlign:"right"},children:["Tanggal Hari Ini : ",w.toLocaleDateString("id-ID")]})}),Object(x.jsx)(p.a,{span:4,style:{paddingLeft:35},children:Object(x.jsx)(s.a,{mode:"horizontal",children:Object(x.jsx)(o,{icon:Object(x.jsx)(h.a,{}),title:"Pengaturan Akun",children:Object(x.jsxs)(s.a.ItemGroup,{title:"Pengaturan",children:[Object(x.jsx)(s.a.Item,{children:"Akun"},"setting:1"),Object(x.jsx)(s.a.Item,{children:Object(x.jsx)(i.b,{to:"/amg-cadp-production",className:"link-menus",onClick:function(){localStorage.clear(),window.history.pushState(null,"","/amg-cadp-production"),window.history.go(0)},children:"Log Out"})},"setting:2")]})},"SubMenu")})})]})}),Object(x.jsxs)(n,{style:{margin:"0 16px"},children:[Object(x.jsx)(l.a,{style:{margin:"16px 0"},children:R}),Object(x.jsx)("div",{className:"site-layout-background",style:{padding:24,minHeight:360},children:Object(x.jsx)(A,{})})]}),Object(x.jsx)(e,{style:{textAlign:"center"},children:"D Design \xa92021 Created by MDN"})]})]}):Object(x.jsxs)(u.a,{style:{height:"100vh"},children:[Object(x.jsx)(t,{children:Object(x.jsx)("h3",{style:{color:"white",textAlign:"center",marginTop:15},children:"CADP REPORT"})}),Object(x.jsx)(n,{style:{height:"100vh"},children:Object(x.jsx)("div",{className:"site-layout-content",children:Object(x.jsx)(A,{})})}),Object(x.jsx)(e,{style:{textAlign:"center"},children:"D Design \xa92021 Created by MDN"})]})},R=n(84),T=n.n(R),E=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function N(t,e){navigator.serviceWorker.register(t).then((function(t){t.onupdatefound=function(){var n=t.installing,r=t.waiting;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),T.a.fire({text:"Update Tersedia, Silahkan Tutup Tab Halaman ini dan buka kembali",icon:"info",showConfirmButton:!0,position:"center",allowEscapeKey:!1,allowOutsideClick:!1,allowEnterKey:!1,footer:'<a href="https://octavian25.github.io/sambasmotor.com/">Klik untuk buka halaman baru</a>'}).then((function(t){t.isConfirmed&&(r.postMessage({type:"SKIP_WAITING"}),r.addEventListener("statechange",(function(t){"activated"===t.target.state&&window.location.reload()})))})),e&&e.onUpdate&&e.onUpdate(t)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(t)))})}})).catch((function(t){console.error("Error during service worker registration:",t)}))}var U=console.log,K=function(t,e){return localStorage.setItem(t,JSON.stringify(e))},G=function(t){return JSON.parse(localStorage.getItem(t))},C=n(9),M=n.n(C),B=n(15),H=n(47),W=n.n(H),z={AxiosPost:function(){var t=Object(B.a)(M.a.mark((function t(e){var n,r,a;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.url,r=e.data,t.prev=1,{headers:{"x-auth-token":localStorage.getItem("token"),language:"id-ID"},timeout:4e3},t.next=5,W.a.post(n,r);case 5:return a=t.sent,t.abrupt("return",{value:a.data,error:null});case 9:return t.prev=9,t.t0=t.catch(1),t.abrupt("return",{value:null,error:t.t0.response});case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}(),AxiosPostLogin:function(){var t=Object(B.a)(M.a.mark((function t(e,n){var r;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,W.a.post(e,n);case 3:return r=t.sent,t.abrupt("return",{value:r.data,error:null});case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",{value:null,error:t.t0.response});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e,n){return t.apply(this,arguments)}}()},F="http://localhost:5757/api/v1/",X="".concat(F,"users/login"),J="".concat(F),Y="".concat(F,"stock/report-global"),V="".concat(F),$="".concat(F),q=("".concat(F),"".concat(F),"".concat(F),"".concat(F),{URL_LOGIN:X,URL_GET_ALL_LAPORAN_STOCK_GLOBAL_PRODUKSI:J,URL_ADD_LAPORAN_STOCK_GLOBAL_PRODUKSI:Y,URL_DELETE_LAPORAN_STOCK_GLOBAL_PRODUKSI:V,URL_UPDATE_LAPORAN_STOCK_GLOBAL_PRODUKSI:$}),Q={doLogin:function(){var t=Object(B.a)(M.a.mark((function t(e){var n;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,z.AxiosPostLogin(q.URL_LOGIN,e);case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},Z=function(){var t=Object(B.a)(M.a.mark((function t(e){var n,r,a,o;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.url,t.prev=1,r=0,a={headers:{"x-auth-token":localStorage.getItem("token"),language:"id-ID"},onUploadProgress:function(t){r=Math.floor(100*t.loaded/t.total)},timeout:4e3},t.next=6,W.a.get(n,a);case 6:return o=t.sent,t.abrupt("return",{value:o.data,error:null,percentCompleted:r});case 10:return t.prev=10,t.t0=t.catch(1),t.abrupt("return",{value:null,error:t.t0.response});case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}(),tt=function(){var t=Object(B.a)(M.a.mark((function t(e,n){var r,a;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r={headers:{"x-auth-token":localStorage.getItem("token"),language:"id-ID"},timeout:4e3},t.next=4,W.a.delete(e,n,r);case 4:return a=t.sent,t.abrupt("return",{value:a.data,error:null});case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",{value:null,error:t.t0.response});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e,n){return t.apply(this,arguments)}}(),et=function(){var t=Object(B.a)(M.a.mark((function t(e,n){var r,a;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r={headers:{"x-auth-token":localStorage.getItem("token"),language:"id-ID"},timeout:4e3},t.next=4,W.a.put(e,n,r);case 4:return a=t.sent,t.abrupt("return",{value:a.data,error:null});case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",{value:null,error:t.t0.response});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e,n){return t.apply(this,arguments)}}(),nt={log:U,getLocal:G,writeLocal:K,api:{login:Q,laporanStockGlobalProduksi:{getAllLaporanStockGlobalProduksi:function(){var t=Object(B.a)(M.a.mark((function t(e){var n;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Z.AxiosGetBody(q.URL_GET_ALL_LAPORAN_STOCK_GLOBAL_PRODUKSI,e);case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),addLaporanStockGlobalProduksi:function(){var t=Object(B.a)(M.a.mark((function t(e){var n;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,z.AxiosPost({url:q.URL_ADD_LAPORAN_STOCK_GLOBAL_PRODUKSI,data:e});case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),deleteLaporanStockGlobalProduksi:function(){var t=Object(B.a)(M.a.mark((function t(e){var n;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,tt.AxiosDelete(q.URL_DELETE_LAPORAN_STOCK_GLOBAL_PRODUKSI+e);case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),editLaporanStockGlobalProduksi:function(){var t=Object(B.a)(M.a.mark((function t(e,n){var r;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,et.AxiosPut(q.URL_UPDATE_LAPORAN_STOCK_GLOBAL_PRODUKSI+e,n);case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},kirimsaldotahun:{getAllKirimsaldotahun:function(){var t=Object(B.a)(M.a.mark((function t(){var e;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Z.AxiosGet(q.URL_GET_ALL_KIRIM_SALDO_TAHUN);case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),addKirimsaldotahun:function(){var t=Object(B.a)(M.a.mark((function t(e){var n;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,z.AxiosPost(q.URL_ADD_KIRIM_SALDO_TAHUN,e);case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),deleteKirimsaldotahun:function(){var t=Object(B.a)(M.a.mark((function t(e){var n;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,tt.AxiosDelete(q.URL_DELETE_KIRIM_SALDO_TAHUN+e);case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),editKirimsaldotahun:function(){var t=Object(B.a)(M.a.mark((function t(e,n){var r;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,et.AxiosPut(q.URL_UPDATE_KIRIM_SALDO_TAHUN+e,n);case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}}},rt=(n(322),n(59)),at=n(69),ot=n(166),ct={feedback:[],error:null,isLogin:!1},it=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ct,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case P.c:return{feedback:e.payload,error:null};case P.b:return{feedback:[],error:e.payload};case P.e:return{isLogin:e.payload.data,error:null};default:return t}},ut=n(24),st={loading:!0,btnLoading:!1,typeTable:"L"},lt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:st,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case m.g:case m.f:return Object(ut.a)(Object(ut.a)({},t),{},{loading:e.payload});case m.e:case m.d:return Object(ut.a)(Object(ut.a)({},t),{},{btnLoading:e.payload});case m.b:return Object(ut.a)(Object(ut.a)({},t),{},{typeTable:e.payload});default:return t}},dt=n(43),pt={feedback_R:[],feedback_L:[],error:null,isEdit:!1},ft=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pt,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case dt.c:return Object(ut.a)(Object(ut.a)({},t),{},{feedback_L:e.payload.data});case dt.b:return Object(ut.a)(Object(ut.a)({},t),{},{error:e.payload.data});case dt.e:return Object(ut.a)(Object(ut.a)({},t),{},{feedback_R:e.payload.data});case dt.d:return Object(ut.a)(Object(ut.a)({},t),{},{error:e.payload.data});default:return t}},bt="[kirimsaldotahun] get all kirimsaldotahun",gt="[kirimsaldotahun] get all kirimsaldotahun success",ht="[kirimsaldotahun] get all kirimsaldotahun failed",jt={feedback:[],error:null,isEdit:!1},Ot=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:jt,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case gt:return Object(ut.a)(Object(ut.a)({},t),{},{feedback:e.payload.data});case ht:return Object(ut.a)(Object(ut.a)({},t),{},{error:e.payload.data});default:return t}},vt=Object(at.c)({login:it,ui:lt,laporanStockGlobalProduksi:ft,kirimsaldotahun:Ot,form:ot.a}),kt=[function(t){var e=t.log;return function(t){var n=t.dispatch;return function(t){return function(){var r=Object(B.a)(M.a.mark((function r(a){return M.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:t(a),a.type===m.c&&(e("Page Login Loaded"),n(Object(m.i)(!1)));case 2:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}()}}},function(t){var e=t.log;return function(t){var n=t.dispatch;return function(t){return function(){var r=Object(B.a)(M.a.mark((function r(a){return M.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:t(a),a.type===m.a&&(e("Button Loaded"),n(Object(m.j)(!1)));case 2:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}()}}},function(t){t.log;return function(t){t.dispatch,t.getState;return function(t){return function(){var e=Object(B.a)(M.a.mark((function e(n){return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t(n),n.type===m.b&&n.payload;case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}}],mt=n(176);var xt,yt={Failed:function(t){T.a.fire({title:"Ops..",text:t,icon:"error"})},Success:function(t){T.a.fire({title:"Yeaay..",text:t,icon:"success"})}},Lt="updatable",wt=[function(t){var e=t.api,n=t.writeLocal;return function(t){var r=t.dispatch,a=t.getState;return function(t){return function(){var o=Object(B.a)(M.a.mark((function o(c){var i,u;return M.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(t(c),c.type!==P.d){o.next=8;break}return r(Object(m.i)(!0)),i=a().form.LoginForm.values,o.next=6,e.login.doLogin(i);case 6:null!==(null===(u=o.sent)||void 0===u?void 0:u.value)?(r(Object(P.h)(null===u||void 0===u?void 0:u.value)),n("userInfo",null===u||void 0===u?void 0:u.value),yt.Success("Berhasil Login"),r(Object(m.i)(!1))):"admin"===(null===i||void 0===i?void 0:i.user_id)&&"admin"===(null===i||void 0===i?void 0:i.password)?(r(Object(m.i)(!1)),n("isLogin",!0),mt.b.loading({content:"Loading...",key:Lt}),setTimeout((function(){mt.b.success({content:"Login Berhasil!",key:Lt,duration:2}),window.history.pushState(null,"","/amg-cadp-production/dashboard"),window.history.go(0)}),1e3)):(r(Object(P.g)(null===u||void 0===u?void 0:u.error)),yt.Failed("Coba Check Email Dan Passwordnya.."),r(Object(m.i)(!1)));case 8:case"end":return o.stop()}}),o)})));return function(t){return o.apply(this,arguments)}}()}}},function(t){t.api,t.writeLocal;var e=t.getLocal;return function(t){var n=t.dispatch;t.getState;return function(t){return function(){var r=Object(B.a)(M.a.mark((function r(a){var o;return M.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:t(a),a.type===P.a&&(n(Object(m.i)(!0)),o=e("isLogin"),n(Object(P.j)(null!==o&&void 0!==o&&o)),n(Object(m.i)(!1)));case 2:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}()}}}],_t=n(115),St=n(175),At=n.n(St),Pt=[function(t){var e=t.api,n=(t.log,t.writeLocal);t.getLocal,t.toast;return function(t){var r=t.dispatch,a=t.getState;return function(t){return function(){var o=Object(B.a)(M.a.mark((function o(c){var i,u,s;return M.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(t(c),c.type!==dt.a){o.next=11;break}return r(Object(m.j)(!0)),i=a().form.FormLaporanGlobalProduksi.values,u=new Date(i.date),i.date=At.a.tz(u,"Asia/Jakarta").format("YYYY-MM-DD"),delete i.repair,o.next=9,e.laporanStockGlobalProduksi.addLaporanStockGlobalProduksi(i);case 9:null!==(null===(s=o.sent)||void 0===s?void 0:s.value)?(yt.Success("Berhasil Melihat Laporan !"),n("tanggal_lap",u.toLocaleDateString()),"L"===i.tipe_laporan?r(Object(dt.h)(null===s||void 0===s?void 0:s.value)):r(Object(dt.i)(null===s||void 0===s?void 0:s.value)),r(Object(_t.a)("FormLaporanGlobalProduksi")),r(Object(m.j)(!1))):(r(Object(dt.g)(null===s||void 0===s?void 0:s.error)),yt.Failed("Gagal Melihat Laporan"),r(Object(m.j)(!1)));case 11:case"end":return o.stop()}}),o)})));return function(t){return o.apply(this,arguments)}}()}}}],Dt=[function(t){t.api;var e=t.log;t.writeLocal,t.getLocal,t.toast,t.sweetalert;return function(t){t.dispatch,t.getState;return function(t){return function(){var n=Object(B.a)(M.a.mark((function n(r){return M.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t(r),r.type===bt&&e("test");case 2:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}}],It=[].concat(Object(rt.a)(kt),Object(rt.a)(wt),Object(rt.a)(Pt),Object(rt.a)(Dt)),Rt="undefined"===typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?function(t){return t}:window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||at.d;o.a.render(Object(x.jsx)(i.a,{children:Object(x.jsx)(c.a,{store:(xt=nt,Object(at.e)(vt,Rt(at.a.apply(void 0,Object(rt.a)(It.map((function(t){return t(xt)}))))))),children:Object(x.jsx)(I,{})})}),document.getElementById("root")),function(t){if("serviceWorker"in navigator){if(new URL("/amg-cadp-production",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/amg-cadp-production","/service-worker.js");E?(!function(t,e){fetch(t,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(t){t.unregister().then((function(){window.location.reload()}))})):N(t,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,t),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):N(e,t)}))}}({onUpdate:function(t){var e=t.waiting;e&&(e.addEventListener("statechange",(function(t){"activated"===t.target.state&&window.location.reload()})),e.postMessage({type:"SKIP_WAITING"}))}})},39:function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"a",(function(){return a})),n.d(e,"e",(function(){return o})),n.d(e,"c",(function(){return c})),n.d(e,"b",(function(){return i})),n.d(e,"i",(function(){return u})),n.d(e,"h",(function(){return s})),n.d(e,"g",(function(){return l})),n.d(e,"f",(function(){return d})),n.d(e,"j",(function(){return p}));var r="[login] sending login",a="[login] check login",o="[login] set login state",c="[login] login success",i="[login] login failed",u={type:r},s=function(t){return{type:c,payload:t}},l=function(t){return{type:i,payload:t}},d={type:a},p=function(t){return{type:o,payload:{data:t}}}},43:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"e",(function(){return a})),n.d(e,"d",(function(){return o})),n.d(e,"c",(function(){return c})),n.d(e,"b",(function(){return i})),n.d(e,"f",(function(){return u})),n.d(e,"i",(function(){return s})),n.d(e,"g",(function(){return l})),n.d(e,"h",(function(){return d}));var r="[laporanstockglobalproduksi] get all laporanstockglobalproduksi",a="[laporanstockglobalproduksi] get all laporanstockglobalproduksi R success",o="[laporanstockglobalproduksi] get all laporanstockglobalproduksi R failed",c="[laporanstockglobalproduksi] get all laporanstockglobalproduksi L success",i="[laporanstockglobalproduksi] get all laporanstockglobalproduksi L failed",u={type:r},s=function(t){return{type:a,payload:{data:t}}},l=function(t){return{type:i,payload:{data:t}}},d=function(t){return{type:c,payload:{data:t}}}}},[[328,3,4]]]);
//# sourceMappingURL=main.9ce8802a.chunk.js.map