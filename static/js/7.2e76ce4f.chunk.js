(this["webpackJsonpreactjs-guide"]=this["webpackJsonpreactjs-guide"]||[]).push([[7],{384:function(e,t,n){"use strict";var a=n(23),l=n(340),r=(n(0),n(594)),c=n(453),o=n(596),i=n(591),d=n(454),s=n(452),b=n(7),j=["input","meta","children","hasFeedback","label"],h=r.a.Item,x=c.a.Group,u=function(e){return function(t){var n=t.input,r=t.meta,c=t.children,o=t.hasFeedback,i=t.label,d=Object(l.a)(t,j),s=r.touched&&r.invalid;return Object(b.jsx)(h,Object(a.a)(Object(a.a)({label:i,validateStatus:s?"error":"success",hasFeedback:o&&s,help:s&&r.error},n),{},{children:Object(b.jsx)(e,Object(a.a)(Object(a.a)(Object(a.a)({},d),n),{},{children:c}))}))}},O={AInput:u(o.a),ADatePick:u(i.a),ARadioGroup:u(x),ACheckBox:u(d.a),ASelect:u(s.a)};t.a=O},598:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n(62),r=n(593),c=n(330),o=n(331),i=n(588),d=n(25),s=n(594),b=n(97),j=n(199),h=n(200),x=n(131),u=n.n(x),O=n(384),S=n(127),g=n(7),p="MM/YYYY",A=new Date,C=Object(h.a)({form:"FormLaporanKirimSaldoTahun",initialValues:{date:u()(A,p)}})((function(e){var t=Object(l.d)(S.a.getBtnLoading);Object(l.c)();return Object(g.jsx)(s.a,{layout:"vertical",children:Object(g.jsxs)(c.a,{children:[Object(g.jsx)(o.a,{children:Object(g.jsx)(j.a,{name:"date",type:"date",label:"Bulan",component:O.a.ADatePick,className:"form-item-group",onBlur:function(e){return e.preventDefault()},defaultValue:u()(A,p),picker:"month"})}),Object(g.jsx)(o.a,{offset:1,children:Object(g.jsx)(b.a,{type:"primary",htmltype:"button",loading:t,style:{marginTop:29},children:"Lihat Laporan"})})]})})})),y=n(590),F=[{title:"Bulan",dataIndex:"bulan",key:"bulan",fixed:"left"},{title:"Kerja Hari",dataIndex:"kerja_hari",key:"kerja_hari",fixed:"left"},{title:"Jenis",dataIndex:"jenis",key:"jenis",fixed:"left"},{title:"FR1",children:[{title:"Selesai",dataIndex:"fr1_selesai",key:"fr1_selesai",align:"center"},{title:"Saldo",dataIndex:"fr1_saldo",key:"fr1_saldo",align:"center"}]},{title:"FR2",children:[{title:"Selesai",dataIndex:"fr2_selesai",key:"fr2_selesai",align:"center"},{title:"Saldo",dataIndex:"fr2_saldo",key:"fr2_saldo",align:"center"}]},{title:"FR3",children:[{title:"Selesai",dataIndex:"fr3_selesai",key:"fr3_selesai",align:"center"},{title:"Saldo",dataIndex:"fr3_saldo",key:"fr3_saldo",align:"center"}]},{title:"FR Total",children:[{title:"Selesai",dataIndex:"total_selesai",key:"total_selesai",align:"center"},{title:"Saldo",dataIndex:"total_saldo",key:"total_saldo",align:"center"}]},{title:"Hand Stg",children:[{title:"Selesai",dataIndex:"hand_selesai",key:"hand_selesai",align:"center"},{title:"Saldo",dataIndex:"hand_saldo",key:"hand_saldo",align:"center"}]}],f=function(){return Object(g.jsx)(y.a,{dataSource:[],columns:F,scroll:{x:1500,y:1e3}})},m=n(366),k=n(367),L=n(377),E=n(378),I=n(389),R=n.n(I),v=function(e){Object(L.a)(n,e);var t=Object(E.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).state={},a}return Object(k.a)(n,[{key:"render",value:function(){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(R.a,{id:"test-table-xls-button",className:"ant-btn ant-btn-primary ant-btn-block ant-btn-success",table:"table-to-xls",filename:"LAPORAN KIRIM DAN SALDO PER TAHUN",sheet:"LAPORAN KIRIM DAN SALDO PER TAHUN",buttonText:"Export Exel"}),Object(g.jsx)("table",{id:"table-to-xls",style:{display:"none"},children:Object(g.jsxs)("thead",{children:[Object(g.jsx)("tr",{children:Object(g.jsxs)("th",{colSpan:"14",style:{textAlign:"center"},children:[" ","LAPORAN KIRIM DAN SALDO PER TAHUN"," "]})}),Object(g.jsx)("tr",{children:Object(g.jsx)("th",{colSpan:"14",children:" Tanggal : "})}),Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{style:{backgroundColor:"#99CCFF",color:"#000",verticalAlign:"middle"},rowSpan:"2",children:"BULAN"}),Object(g.jsx)("td",{style:{backgroundColor:"#99CCFF",color:"#000",verticalAlign:"middle"},rowSpan:"2",children:"KERJA HARI"}),Object(g.jsx)("td",{style:{backgroundColor:"#99CCFF",color:"#000",verticalAlign:"middle"},rowSpan:"2",children:"JENIS"}),Object(g.jsx)("td",{style:{backgroundColor:"#99CCFF",color:"#000",textAlign:"center"},colSpan:"2",children:"FR1"}),Object(g.jsx)("td",{style:{backgroundColor:"#99CCFF",color:"#000",textAlign:"center"},colSpan:"2",children:"FR2"}),Object(g.jsx)("td",{style:{backgroundColor:"#99CCFF",color:"#000",textAlign:"center"},colSpan:"2",children:"FR3"}),Object(g.jsx)("td",{style:{backgroundColor:"#99CCFF",color:"#000",textAlign:"center"},colSpan:"2",children:"FR TOTAL"}),Object(g.jsx)("td",{style:{backgroundColor:"#99CCFF",color:"#000",textAlign:"center"},colSpan:"2",children:"HAND STG"})]}),Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{style:{backgroundColor:"#99CCFF",color:"#000",textAlign:"center"},children:"SELESAI"}),Object(g.jsx)("td",{style:{backgroundColor:"#99CCFF",color:"#000",textAlign:"center"},children:"SALDO"}),Object(g.jsx)("td",{style:{backgroundColor:"#99CCFF",color:"#000",textAlign:"center"},children:"SELESAI"}),Object(g.jsx)("td",{style:{backgroundColor:"#99CCFF",color:"#000",textAlign:"center"},children:"SALDO"}),Object(g.jsx)("td",{style:{backgroundColor:"#99CCFF",color:"#000",textAlign:"center"},children:"SELESAI"}),Object(g.jsx)("td",{style:{backgroundColor:"#99CCFF",color:"#000",textAlign:"center"},children:"SALDO"}),Object(g.jsx)("td",{style:{backgroundColor:"#99CCFF",color:"#000",textAlign:"center"},children:"SELESAI"}),Object(g.jsx)("td",{style:{backgroundColor:"#99CCFF",color:"#000",textAlign:"center"},children:"SALDO"}),Object(g.jsx)("td",{style:{backgroundColor:"#99CCFF",color:"#000",textAlign:"center"},children:"SELESAI"}),Object(g.jsx)("td",{style:{backgroundColor:"#99CCFF",color:"#000",textAlign:"center"},children:"SALDO"})]})]})})]})}}]),n}(a.Component),D=n(368),T=(n(390),function(){var e=new D.jsPDF("l","mm",[297,210]),t=[],n=[],a=30;e.text("Laporan Kirim dan Saldo per Tahun",14,15),e.setFontSize(20),e.text("Nama Toko",200,15),e.setFontSize(10),e.setProperties({title:"Kirim dan Saldo"}),e.text("PERIODE : ",14,25),n=[[{content:"BULAN",rowSpan:2},{content:"KERJA HARI",rowSpan:2},{content:"JENIS",rowSpan:2},{content:"FR1",colSpan:2},{content:"FR2",colSpan:2},{content:"FR3",colSpan:2},{content:"FR TOTAL",colSpan:2},{content:"HAND STG",colSpan:2}],[{content:"SELESAI"},{content:"SALDO"},{content:"SELESAI"},{content:"SALDO"},{content:"SELESAI"},{content:"SALDO"},{content:"SELESAI"},{content:"SALDO"},{content:"SELESAI"},{content:"SALDO"}]];var l=[];t.push(l);var r=[];t.push(r);var c=[{content:"Printed By Admin",colSpan:12,styles:{fontStyle:"italic",textColor:"#000",halign:"left"}}];t.push(c),e.autoTable({head:n,body:t,startY:a,theme:"plain",margin:{top:10},bodyStyles:{fontSize:8,halign:"right"},headStyles:{fontSize:8,fillColor:"#E8E5E5",textColor:"#000",valign:"middle",halign:"center"},tableLineColor:[255,255,255],tableLineWidth:1}),t=[],n=[],a=e.autoTableEndPosY()+20;var o=e.internal.getNumberOfPages(),i=e.internal.pageSize.width,d=e.internal.pageSize.height;e.setFontSize(10);for(var s=1;s<o+1;s+=1){var b=i/2,j=d-10;e.setPage(s),e.text("".concat(s," of ").concat(o),b,j,{align:"center"})}var h=e.output("datauristring"),x=window.open();x.document.open(),x.document.write("<html>\n    <head>\n    <title>Kirim dan Saldo</title>\n    </head>\n    <body style='margin:0 !important'>\n    <embed width='100%' height='100%'src='".concat(h,"'></embed>\n    </body>\n    </html>"))}),_=Object(l.b)()((function(){var e=Object(l.d)(S.a.getBtnLoading);return Object(g.jsxs)(c.a,{style:{marginTop:15},children:[Object(g.jsx)(o.a,{span:10,style:{marginTop:10},children:Object(g.jsx)(v,{dataExel:[]})}),Object(g.jsx)(o.a,{htmltype:"button",span:10,style:{marginTop:10},offset:2,children:Object(g.jsx)(b.a,{type:"primary",htmltype:"button",loading:e,block:!0,danger:!0,onClick:function(){T([])},children:"Print To PDF"})})]})}));t.default=function(){var e=Object(l.c)();return Object(a.useEffect)((function(){e(d.h),document.title="Laporan Kirim dan Saldo per Tahun"}),[e]),Object(g.jsx)(r.a,{title:"Laporan Kirim dan Saldo per Tahun",bordered:!1,children:Object(g.jsxs)(c.a,{children:[Object(g.jsx)(o.a,{span:24,children:Object(g.jsx)(C,{})}),Object(g.jsxs)(o.a,{span:24,children:[Object(g.jsx)(i.a,{orientation:"left",children:"Tabel Laporan"}),Object(g.jsx)(f,{})]}),Object(g.jsx)(o.a,{span:24,children:Object(g.jsx)(_,{})})]})})}}}]);
//# sourceMappingURL=7.2e76ce4f.chunk.js.map