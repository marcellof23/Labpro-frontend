(this["webpackJsonplabpro-frontend"]=this["webpackJsonplabpro-frontend"]||[]).push([[0],{183:function(e,a,t){},184:function(e,a,t){},190:function(e,a,t){},208:function(e,a,t){},209:function(e,a,t){},277:function(e,a,t){},278:function(e,a,t){},279:function(e,a,t){},285:function(e,a,t){},286:function(e,a,t){},287:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(24),s=t.n(r),i=(t(183),t(184),t(49)),o=t(21),l=t(14),u=t(26),m=[{name:"Home",to:"/"},{name:"Stores",to:"/stores"},{name:"About Us",to:"/about-us"}],j=t(2),b=function(e){var a=e.name,t=e.to,c=Object(o.f)(),r=Object(n.useMemo)((function(){return c.location.pathname===t}),[c.location.pathname]);return Object(j.jsx)(i.b,{to:t,children:Object(j.jsx)("div",{className:"navItemContainer ".concat(r?"active":""),children:Object(j.jsx)("span",{children:a})})})},d=function(){Object(o.f)();return Object(j.jsx)("div",{className:"navItemWrapper",children:m.map((function(e,a){return Object(j.jsx)(b,Object(u.a)({},e),a)}))})},p=(t(190),function(e){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)("div",{className:"main-content",children:[Object(j.jsx)(d,{}),e.children]}),Object(j.jsx)("footer",{})]})})}),h=t.p+"static/media/image3.42cdaf04.png",O=t.p+"static/media/image2.e025ba04.png",f=t(82),v=t.n(f),x=(t(208),t(291)),k=function(){var e=Object(n.useState)(),a=Object(l.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)([]),s=Object(l.a)(r,2),i=s[0],o=s[1],u=Object(n.useState)(!0),m=Object(l.a)(u,2),b=m[0],d=m[1],f=Object(n.useState)(!0),k=Object(l.a)(f,2),N=k[0],g=k[1];Object(n.useEffect)((function(){customAxios.get("/dorayaki").then((function(e){var a=e.data.filter((function(e){return null!==e.DorayakiStoreID}));c(a),d(!1),console.log(e.data)})).catch((function(e){console.log(e)}))}),[]),Object(n.useEffect)((function(){v.a.get("/dorayaki-store").then((function(e){o(e.data),g(!1),console.log(e.data)})).catch((function(e){console.log(e)}))}),[]);var y=function(e){if(i.length){var a=i.findIndex((function(a){return a.ID==e}));return-1===a?"":i[a].Nama}return""};return console.log(y(3)),Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(p,{children:[Object(j.jsx)("div",{className:"home-container",children:Object(j.jsxs)("div",{className:"homepage",children:[Object(j.jsx)("div",{className:"navbar",children:Object(j.jsx)("div",{className:"logo-home",children:Object(j.jsx)("img",{className:"logo-store",src:h})})}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsxs)("div",{className:"col-2",children:[Object(j.jsxs)("h1",{children:["Give Your Belly ",Object(j.jsx)("br",{})," A Plenty of Dorayaki!"]}),Object(j.jsx)("p",{children:"The biggest e-commerce dorayaki app on the entire world!"}),Object(j.jsx)("a",{href:"#section2",className:"btn",children:"Explore now \u2192"})]}),Object(j.jsx)("div",{className:"col-2",children:Object(j.jsx)("img",{className:"home-background",src:O})})]})]})}),Object(j.jsxs)("div",{className:"categories",id:"section2",children:[Object(j.jsx)("div",{className:"product-title",children:"All products"}),Object(j.jsx)("div",{className:"column-latest",children:!b&&!N&&t.map((function(e,a){return Object(j.jsxs)("div",{className:"column-latest-card",children:[Object(j.jsx)(x.a,{className:"column-latest-img",src:"/"+e.Gambar,fallback:"/dorayaki1.jpeg"}),Object(j.jsxs)("div",{className:"column-latest-1",children:[" ",e.Rasa]}),Object(j.jsx)("div",{className:"column-latest-deskripsi",children:e.Deskripsi}),Object(j.jsx)("div",{className:"column-latest-2",children:y(e.DorayakiStoreID)}),Object(j.jsx)("div",{className:"column-latest-footer"})]},e.ID)}))})]})]})})},N=t(57),g=t(19),y=t.n(g),S=t(38),D=t(292),I=t(176),J=t(293),w=t(51),C=(t(128),t(209),v.a.create({baseURL:"https://api.marcellof.me",headers:{"Access-Control-Allow-Origin":["http://localhost:3000","https://marcellof.me"]},withCredentials:!0})),P=function(){var e=Object(o.g)(),a=e.id,t=e.nama,c=D.a.useForm(),r=Object(l.a)(c,1)[0],s=Object(n.useState)(),i=Object(l.a)(s,2),m=i[0],b=i[1],d=Object(n.useState)(!0),h=Object(l.a)(d,2),O=h[0],f=h[1],v=Object(o.f)();Object(n.useEffect)((function(){C.get("/dorayaki/variant").then((function(e){b(e.data),f(!1)})).catch((function(e){console.log(e)}))}),[]);var x=Object(n.useState)({rasa:"",deskripsi:"",gambar:"",jumlah:0}),k=Object(l.a)(x,2),g=k[0],P=k[1],T=function(){var e=Object(S.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.validateFields();case 3:return I.b.success("Form validation Successfull",1.5),e.abrupt("return",!0);case 7:return e.prev=7,e.t0=e.catch(0),I.b.error("Form validation not successfull, please check your input",1.5),e.abrupt("return",!1);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(S.a)(y.a.mark((function e(){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T();case 2:if(e.sent){e.next=5;break}return e.abrupt("return");case 5:return t={rasa:g.rasa,deskripsi:g.deskripsi,gambar:g.gambar,jumlah:Number(g.jumlah),DorayakiStoreID:Number(a)},e.prev=6,e.next=9,C.post("/dorayaki",t);case 9:e.sent&&setTimeout((function(){I.b.success("Anda telah berhasil menambahkan stok dorayaki"),v.push("/stores")}),1750),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(6),setTimeout((function(){I.b.error(e.t0.response.data.message)}),1750);case 16:case"end":return e.stop()}}),e,null,[[6,13]])})));return function(){return e.apply(this,arguments)}}(),K=function(){var e=Object(S.a)(y.a.mark((function e(a){var t,n,c;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),t=a.target,n=t.name,c=t.value,P((function(e){return Object(u.a)(Object(u.a)({},e),{},Object(N.a)({},n,c))}));case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(p,{children:Object(j.jsxs)("div",{className:"product-container",children:[Object(j.jsxs)("div",{className:"product-form",children:[Object(j.jsxs)("div",{className:"product-form-title",children:["Add New Dorayaki Variant in ",t]}),Object(j.jsxs)(D.a,{layout:"vertical",form:r,className:"event-content",children:[Object(j.jsx)(D.a.Item,{label:"Rasa",name:"rasa",rules:[{required:!0,message:"Please input your rasa!"}],children:Object(j.jsx)(J.a,{name:"rasa",value:g.rasa,className:"form-input rasa",placeholder:"Masukkan input rasa",onChange:K})}),Object(j.jsx)(D.a.Item,{label:"Deskripsi",name:"deskripsi",rules:[{required:!0,message:"Please input your deskripsi!"}],children:Object(j.jsx)(J.a,{name:"deskripsi",value:g.deskripsi,className:"form-input deskripsi",placeholder:"Masukkan input deskripsi",onChange:K})}),Object(j.jsx)(D.a.Item,{label:"Gambar",name:"gambar",rules:[{required:!0,message:"Please input your gambar!"}],children:Object(j.jsx)(J.a,{name:"gambar",value:g.gambar,className:"form-input gambar",placeholder:"Masukkan input gambar",onChange:K})}),Object(j.jsx)(D.a.Item,{label:"Jumlah",name:"jumlah",rules:[{required:!0,message:"Please input your jumlah!"}],children:Object(j.jsx)(J.a,{name:"jumlah",value:g.jumlah,className:"form-input jumlah",placeholder:"Masukkan input jumlah",onChange:K})}),Object(j.jsx)(w.a,{className:"submit-add-dorayaki",type:"primary",onClick:function(){return A()},children:"Add Dorayaki"})]})]}),Object(j.jsx)("div",{className:"product-stock",children:"Current Variant"}),Object(j.jsx)("div",{className:"column-variant",children:!O&&m.map((function(e,a){return Object(j.jsx)("div",{className:"column-variant-rasa",children:e.Rasa},a)}))})]})})})},T=(t(277),J.a.Search),A=function(){var e=Object(n.useState)(),a=Object(l.a)(e,2),t=(a[0],a[1]),c=Object(n.useState)(),r=Object(l.a)(c,2),s=r[0],o=r[1],u=Object(n.useState)(!0),m=Object(l.a)(u,2),b=m[0],d=m[1],h=Object(n.useState)(""),O=Object(l.a)(h,2),f=O[0],v=O[1],x=Object(n.useState)(["Provinsi","Kecamatan"]),k=Object(l.a)(x,1)[0],N=Object(n.useState)(["All"]),g=Object(l.a)(N,2),D=g[0],I=(g[1],["/store1.jpg","/store2.png","/store3.jpeg"]);Object(n.useEffect)((function(){C.get("/dorayaki-store").then((function(e){t(e.data),o(e.data),d(!1)})).catch((function(e){console.log(e)}))}),[]);var J=function(){var e=Object(S.a)(y.a.mark((function e(a){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:C.delete("/dorayaki-store/".concat(a)).then((function(e){console.log(e.data)})).catch((function(e){console.log(e)}));case 1:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();var P;return Object(j.jsx)(p,{children:Object(j.jsxs)("div",{className:"store-container",children:[Object(j.jsx)("div",{className:"store-title",children:"All stores"}),Object(j.jsx)(T,{placeholder:"Search by kecamatan or province",style:{width:400},onSearch:function(e){v(e)},onChange:function(e){return v(e.target.value)},className:"searchbar"}),Object(j.jsx)("div",{className:"column-store",children:!b&&(P=s,P.filter((function(e){return e.Provinsi==D||"All"==D?k.some((function(a){return e[a].toString().toLowerCase().indexOf(f.toLowerCase())>-1})):void 0}))).map((function(e){return Object(j.jsxs)("div",{className:"column-stores-card",children:[Object(j.jsx)("div",{className:"column-latest-thumbnail",children:Object(j.jsx)("img",{className:"column-latest-img",src:(a=e.ID,""+I[a%3])})}),Object(j.jsxs)("div",{className:"column-latest-1 stores",children:[" ",e.Nama]}),Object(j.jsxs)("div",{className:"column-latest-alamat",children:[Object(j.jsx)("div",{className:"column-latest-deskripsi",children:e.Jalan}),Object(j.jsx)("div",{className:"column-latest-deskripsi",children:e.Kecamatan}),Object(j.jsx)("div",{className:"column-latest-deskripsi",children:e.Provinsi})]}),Object(j.jsx)(i.b,{className:"store-edit-link",to:"/stores/edit/".concat(e.ID),children:Object(j.jsx)(w.a,{className:"edit-btn",type:"primary",children:"Edit Store"})}),Object(j.jsx)(w.a,{className:"remove-btn",type:"danger",onClick:function(){return J(e.ID)},children:"Remove Store"}),Object(j.jsx)("div",{className:"column-latest-footer"})]},e.ID);var a}))})]})})},K=(t(278),function(){var e=D.a.useForm(),a=Object(l.a)(e,1)[0],t=Object(n.useState)({nama:"",jalan:"",kecamatan:"",provinsi:""}),c=Object(l.a)(t,2),r=c[0],s=c[1],i=function(){var e=Object(S.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.validateFields();case 3:return I.b.success("Form validation Successfull",1.5),e.abrupt("return",!0);case 7:return e.prev=7,e.t0=e.catch(0),I.b.error("Form validation not successfull, please check your input",1.5),e.abrupt("return",!1);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=Object(S.a)(y.a.mark((function e(){var a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i();case 2:if(e.sent){e.next=5;break}return e.abrupt("return");case 5:return a={nama:r.nama,jalan:r.jalan,kecamatan:r.kecamatan,provinsi:r.provinsi},e.prev=6,e.next=9,C.post("/dorayaki-store",a);case 9:e.sent&&setTimeout((function(){I.b.success("Anda telah berhasil menambahkan stok dorayaki")}),2e3),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(6),setTimeout((function(){I.b.error(e.t0.response.data.message)}),2e3);case 16:case"end":return e.stop()}}),e,null,[[6,13]])})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(S.a)(y.a.mark((function e(a){var t,n,c;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),t=a.target,n=t.name,c=t.value,s((function(e){return Object(u.a)(Object(u.a)({},e),{},Object(N.a)({},n,c))}));case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(p,{children:Object(j.jsxs)("div",{className:"store-container",children:[Object(j.jsxs)("div",{className:"store-form",children:[Object(j.jsx)("div",{className:"store-form-title",children:"Add New Dorayaki Store"}),Object(j.jsxs)(D.a,{layout:"vertical",form:a,className:"event-content",children:[Object(j.jsx)(D.a.Item,{label:"Nama Toko",name:"nama",rules:[{required:!0,message:"Please input your Nama Toko!"}],children:Object(j.jsx)(J.a,{name:"nama",value:r.nama,className:"form-input nama",placeholder:"Masukkan input nama toko",onChange:m})}),Object(j.jsx)(D.a.Item,{label:"Jalan Toko",name:"Jalan",rules:[{required:!0,message:"Please input your Jalan Toko!"}],children:Object(j.jsx)(J.a,{name:"Jalan",value:r.Jalan,className:"form-input Jalan",placeholder:"Masukkan input Jalan",onChange:m})}),Object(j.jsx)(D.a.Item,{label:"Kecamatan Toko",name:"Kecamatan",rules:[{required:!0,message:"Please input your Kecamatan Toko!"}],children:Object(j.jsx)(J.a,{name:"Kecamatan",value:r.Kecamatan,className:"form-input Kecamatan",placeholder:"Masukkan input Kecamatan",onChange:m})}),Object(j.jsx)(D.a.Item,{label:"Provinsi Toko",name:"Provinsi",rules:[{required:!0,message:"Please input your Provinsi Toko!"}],children:Object(j.jsx)(J.a,{name:"Provinsi",value:r.Provinsi,className:"form-input Provinsi",placeholder:"Masukkan input Provinsi",onChange:m})}),Object(j.jsx)(w.a,{className:"submit-add-dorayaki",type:"primary",onClick:function(){return o()},children:"Add Dorayaki Store"})]})]}),Object(j.jsx)("div",{className:"store-stock",children:"Current Variant"})]})})})}),F=t(137),M=(t.p,t(294)),E=t(290),q=t(295),R=t(296),G=t(297),V=t(298),H=(t(279),function(){var e=D.a.useForm(),a=Object(l.a)(e,1)[0],t=Object(o.g)().id,c=Object(n.useState)(!0),r=Object(l.a)(c,2),s=r[0],m=r[1],b=Object(n.useState)(!0),d=Object(l.a)(b,2),h=d[0],O=d[1],f=Object(n.useState)(!0),v=Object(l.a)(f,2),k=v[0],g=v[1],P=Object(n.useState)(0),T=Object(l.a)(P,2),A=(T[0],T[1],Object(n.useState)({Nama:"",Jalan:"",Kecamatan:"",Provinsi:""})),K=Object(l.a)(A,2),H=K[0],L=K[1],U=Object(o.f)(),B=Object(n.useState)([]),W=Object(l.a)(B,2),z=W[0],Y=W[1],Q=Object(n.useState)(!1),X=Object(l.a)(Q,2),Z=X[0],$=X[1],_=Object(n.useState)(null),ee=Object(l.a)(_,2),ae=ee[0],te=ee[1],ne=Object(n.useState)(),ce=Object(l.a)(ne,2),re=ce[0],se=ce[1],ie=Object(n.useState)(null),oe=Object(l.a)(ie,2),le=oe[0],ue=oe[1],me=Object(n.useState)(null),je=Object(l.a)(me,2),be=je[0],de=je[1],pe=Object(n.useState)(null),he=Object(l.a)(pe,2),Oe=he[0],fe=he[1],ve=function(){var e=Object(S.a)(y.a.mark((function e(a){var n,c,r,s;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===ae){e.next=10;break}return n={DorayakiStoreID:ae,Rasa:z[be].Rasa,Deskripsi:z[be].Deskripsi,Gambar:z[be].Gambar,Jumlah:z[be].Jumlah},e.next=4,C.post("/dorayaki/transfer",n);case 4:return c=e.sent,r={DorayakiStoreID:Number(t),Rasa:z[be].Rasa,Deskripsi:z[be].Deskripsi,Gambar:z[be].Gambar,Jumlah:Oe-z[be].Jumlah},e.next=8,C.put("/dorayaki/".concat(le),r);case 8:s=e.sent,c&&s&&I.b.success("Anda berhasil mentransfer stock");case 10:ue(null),de(null),te(null),$(!1);case 14:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),xe=function(){ue(null),de(null),te(null),$(!1)},ke=Object(j.jsx)(M.a,{children:!k&&re.map((function(e){return Object(j.jsx)(M.a.Item,{onClick:function(){return function(e){te(e),console.log(e)}(e.ID)},children:Object(j.jsx)("div",{className:"nama-toko",children:e.Nama})},e.ID)}))});Object(n.useEffect)((function(){C.get("/dorayaki-store/".concat(t)).then((function(e){L(e.data),setTimeout((function(){m(!1)}),750)})).catch((function(e){console.log(e)}))}),[]),Object(n.useEffect)((function(){C.get("/dorayaki/store/".concat(t)).then((function(e){Y(e.data),setTimeout((function(){O(!1)}),750)})).catch((function(e){console.log(e)}))}),[]),Object(n.useEffect)((function(){C.get("/dorayaki-store").then((function(e){se(e.data),g(!1)})).catch((function(e){console.log(e)}))}),[]);var Ne=function(){var e=Object(S.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.validateFields();case 3:return I.b.success("Form validation Successfull",1.5),e.abrupt("return",!0);case 7:return e.prev=7,e.t0=e.catch(0),I.b.error("Form validation not successfull, please check your input",1.5),e.abrupt("return",!1);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),ge=function(){var e=Object(S.a)(y.a.mark((function e(a){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ne();case 2:if(e.sent){e.next=5;break}return e.abrupt("return");case 5:return t={nama:H.Nama,jalan:H.Jalan,kecamatan:H.Kecamatan,provinsi:H.Provinsi},e.prev=6,e.next=9,C.put("/dorayaki-store/".concat(a),t);case 9:e.sent&&setTimeout((function(){I.b.success("Anda telah berhasil menambahkan stok dorayaki"),U.push("/stores")}),2e3),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(6),setTimeout((function(){I.b.error(e.t0.response.data.message)}),2e3);case 16:case"end":return e.stop()}}),e,null,[[6,13]])})));return function(a){return e.apply(this,arguments)}}(),ye=function(){var e=Object(S.a)(y.a.mark((function e(a){var t,n,c;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=a.target,n=t.name,c=t.value,L((function(e){return Object(u.a)(Object(u.a)({},e),{},Object(N.a)({},n,c))}));case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),Se=function(e){Y(Object(F.a)(z).map((function(a){return Z&&a.Jumlah<Oe?Object(u.a)(Object(u.a)({},a),{},{Jumlah:a.Jumlah+1}):a.ID!==e||Z?a:Object(u.a)(Object(u.a)({},a),{},{Jumlah:a.Jumlah+1})})))},De=function(e){Y(Object(F.a)(z).map((function(a){return a.ID===e?Object(u.a)(Object(u.a)({},a),{},{Jumlah:a.Jumlah>0?a.Jumlah-1:a.Jumlah}):a})))};return s&&h?Object(j.jsx)("main",{className:"loading-screen",children:Object(j.jsx)(E.a,{size:"large"})}):Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(p,{children:Object(j.jsxs)("div",{className:"store-container",children:[Object(j.jsxs)("div",{className:"store-form",children:[Object(j.jsx)("div",{className:"store-form-title",children:"Edit Dorayaki Store"}),Object(j.jsxs)(D.a,{layout:"vertical",form:a,className:"event-content",children:[Object(j.jsx)(D.a.Item,{label:"Nama Toko",name:"nama",initialValue:H.Nama,rules:[{required:!0,message:"Please input your Nama Toko!"}],children:Object(j.jsx)(J.a,{name:"nama",value:H.Nama,className:"form-input nama",placeholder:"Masukkan input nama toko",onChange:ye})}),Object(j.jsx)(D.a.Item,{label:"Jalan Toko",name:"Jalan",initialValue:H.Jalan,rules:[{required:!0,message:"Please input your Jalan Toko!"}],children:Object(j.jsx)(J.a,{name:"Jalan",value:H.Jalan,className:"form-input Jalan",placeholder:"Masukkan input Jalan",onChange:ye})}),Object(j.jsx)(D.a.Item,{label:"Kecamatan Toko",name:"Kecamatan",initialValue:H.Kecamatan,rules:[{required:!0,message:"Please input your Kecamatan Toko!"}],children:Object(j.jsx)(J.a,{name:"Kecamatan",value:H.Kecamatan,className:"form-input Kecamatan",placeholder:"Masukkan input Kecamatan",onChange:ye})}),Object(j.jsx)(D.a.Item,{label:"Provinsi Toko",name:"Provinsi",initialValue:H.Provinsi,rules:[{required:!0,message:"Please input your Provinsi Toko!"}],children:Object(j.jsx)(J.a,{name:"Provinsi",value:H.Provinsi,className:"form-input Provinsi",placeholder:"Masukkan input Provinsi",onChange:ye})})]})]}),Object(j.jsx)(w.a,{className:"submit-add-dorayaki",type:"primary",onClick:function(){return ge(t)},children:"Edit Dorayaki Store"}),Object(j.jsx)(i.b,{className:"store-edit-link",to:"/products/add/".concat(t,"/").concat(H.Nama),children:Object(j.jsx)(w.a,{className:"submit-add-dorayaki",type:"primary",children:"Add Variant"})}),Object(j.jsx)("div",{className:"column-store-stock",children:z.map((function(e,a){return Object(j.jsxs)("div",{className:"column-stores-stock-card",children:[Object(j.jsx)("div",{className:"column-latest-thumbnail",children:Object(j.jsx)(x.a,{className:"column-latest-img",src:"/"+e.Gambar,fallback:"/dorayaki1.jpeg"})}),Object(j.jsxs)("div",{className:"column-latest-2",children:[" ",e.Rasa]}),Object(j.jsx)("div",{className:"column-latest-deskripsi",children:e.Deskripsi}),Object(j.jsxs)("div",{className:"column-latest-jumlah",children:[" ",Object(j.jsx)(w.a,{className:"plus-btn",type:"primary",shape:"circle",icon:Object(j.jsx)(G.a,{}),onClick:function(){return Se(e.ID)}}),e.Jumlah,Object(j.jsx)(w.a,{className:"minus-btn",type:"primary",shape:"circle",icon:Object(j.jsx)(V.a,{}),onClick:function(){return De(e.ID)}})]}),Object(j.jsx)("div",{className:"column-update",children:Object(j.jsx)(w.a,{className:"update-btn-store",type:"secondary",onClick:function(){return function(e,a){var t={DorayakiStoreID:z[e].DorayakiStoreID,rasa:z[e].Rasa,deskripsi:z[e].Deskripsi,gambar:z[e].Gambar,jumlah:z[e].Jumlah};C.put("/dorayaki/".concat(a),t).then((function(e){I.b.success("Anda berhasil mentransfer stock")})).catch((function(e){I.b.error("Anda gagal mentransfer stock")}))}(a,e.ID)},children:"Update Jumlah"})}),Object(j.jsxs)("div",{className:"column-transfer",children:[Object(j.jsx)(w.a,{type:"primary",onClick:function(){return function(e,a){fe(z[a].Jumlah),ue(e),de(a),$(!0)}(e.ID,a)},children:"Transfer Dorayaki"}),Object(j.jsx)(q.a,{title:"Where do you want to transfer?",visible:Z,onOk:function(){return ve(le)},onCancel:xe,children:Object(j.jsxs)("div",{className:"input-user-modal ",children:[Object(j.jsx)(R.a,{trigger:"click",overlay:ke,children:Object(j.jsx)("a",{className:"ant-dropdown-link",onClick:function(e){return e.preventDefault()},children:Object(j.jsx)(w.a,{className:"show-store",type:"primary",children:"Show Stores"})})}),Object(j.jsxs)("div",{className:"column-latest-transfer",children:[Object(j.jsx)(w.a,{className:"plus-btn2",type:"primary",shape:"circle",icon:Object(j.jsx)(G.a,{}),onClick:function(){return Se(le)}}),null!=le?Object(j.jsx)("div",{children:z[be].Jumlah}):Object(j.jsx)("div",{}),Object(j.jsx)(w.a,{className:"minus-btn2",type:"primary",shape:"circle",icon:Object(j.jsx)(V.a,{}),onClick:function(){return De(le)}})]})]})})]})]},e.ID)}))})]})})})}),L=(t(285),function(){return Object(j.jsx)(p,{children:Object(j.jsx)("div",{className:"about-us-container",children:Object(j.jsx)("h1",{className:"name-about",children:"Hello I'am Marcello"})})})}),U=(t(286),[{path:"/",component:k,exact:!0},{path:"/products/add/:id/:nama",component:P},{path:"/stores",exact:!0,component:A},{path:"/stores/add",component:K},{path:"/stores/edit/:id",component:H},{path:"/about-us",component:L},{path:"*",component:function(){return Object(j.jsxs)("div",{className:"NotFound",children:[Object(j.jsx)("div",{className:"bg",style:{backgroundImage:"url(http://i.giphy.com/l117HrgEinjIA.gif)"}}),Object(j.jsx)("div",{className:"code",children:"404"})]})}}]);function B(e){var a=Object.assign({},e);return Object(j.jsx)(o.a,Object(u.a)({},a))}var W=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(i.a,{children:Object(j.jsx)(o.c,{children:U.map((function(e,a){return Object(j.jsx)(B,{path:e.path,component:e.component,exact:e.exact},a)}))})})})};s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(W,{})}),document.getElementById("root"))}},[[287,1,2]]]);
//# sourceMappingURL=main.5ec7da34.chunk.js.map