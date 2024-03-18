"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[973],{njmq:(e,t,a)=>{a.r(t),a.d(t,{default:()=>I});var l=a("q1tI"),r=a("raqg"),n=a("vvQw"),i=a("LboF"),c=a.n(i),m=a("5Hnr"),p=a.n(m),o=a("shRe"),d=a.n(o),s=a("3c4z"),u=a.n(s),x=a("3mzb"),v=a.n(x),w=a("Hd6Y"),h=a.n(w),b=a("E9vQ"),f={};f.styleTagTransform=h(),f.setAttributes=u(),f.insert=d().bind(null,"head"),f.domAPI=p(),f.insertStyleElement=v(),c()(b.Z,f),b.Z&&b.Z.locals&&b.Z.locals;var g=a("SOLs"),y=a("fDUD"),E=(a("DuBu"),a("KJq9")),q=a("wTN4");const C={email:{label:"email",type:"email"},tel:{label:"手機",type:"tel",required:!0,pattern:"[0-9]{4}-[0-9]{3}-[0-9]{3}",patternDemo:" Format: 0900-001-001"},city:{label:"居住縣市",type:"select",selectList:[{label:"台北市",value:0},{label:"新北市",value:1},{label:"桃園市",value:2},{label:"新竹縣",value:3},{label:"新竹市",value:4},{label:"基隆市",value:5},{label:"宜蘭市",value:6}],required:!0},district:{label:"行政區",type:"select",selectList:[{label:"大安區",value:0},{label:"信義區",value:1}],required:!0},startDate:{label:"起日",type:"date",required:!0},startTime:{label:"起時",type:"time",required:!0},endDate:{label:"迄日",type:"date",required:!0},endTime:{label:"迄時",type:"time",required:!0},elseInfo:{label:"其他",type:"textarea"}},I=function(){var e;const t=(0,n.I0)(),[a,i]=((0,n.v9)((e=>e.persistedControlReducer.userData)),(0,r.x)({}));function c(e,t){const l=a.items.findIndex((t=>t.catId===e));a.items[l].quantity+t<=0?i({...a,items:a.items.filter((t=>t.catId!==e))}):i((e=>{e.items[l].quantity=e.items[l].quantity+t}))}return console.log("formData",a),(0,l.useEffect)((()=>{!async function(){try{var e;const a=JSON.parse(localStorage.getItem("cart"));if(0===(null==a||null===(e=a.cartList)||void 0===e?void 0:e.length))return;t((0,q.a)(!0));const l=a.cartList.map((e=>(0,E.l)("get","https://api.thecatapi.com/v1/images/"+e))),r=await Promise.all(l);t((0,q.a)(!1));const n={items:[]};r.forEach((e=>{if(null!=e&&e.data){var t,a,l,r;const i={catId:e.data.id,name:null===(t=e.data)||void 0===t||null===(a=t.breeds)||void 0===a||null===(l=a[0])||void 0===l?void 0:l.name,url:null===(r=e.data)||void 0===r?void 0:r.url,quantity:1};n.items.push(i)}})),i(n)}catch(e){console.log(e)}}()}),[]),null!=a&&a.items?l.createElement("main",null,l.createElement("div",{className:"cart-items-wrapper"},0===(null==a||null===(e=a.items)||void 0===e?void 0:e.length)?"購物車內無項目":null==a?void 0:a.items.map((e=>l.createElement("div",{key:e.catId,className:"cart-item-wrapper "},l.createElement("div",{className:"cart-item-wrapper-content"},l.createElement("img",{src:null==e?void 0:e.url,alt:"貓咪圖片",srcSet:""})),l.createElement("div",{className:"cart-item-wrapper-content cart-item-wrapper-content-name"},null==e?void 0:e.name),l.createElement("div",{className:"cart-item-wrapper-content cart-item-wrapper-content-control"},l.createElement("div",null,l.createElement(g.zx,{name:"+",onClick:()=>{c(e.catId,1)}})," ",l.createElement(g.zx,{name:"-",onClick:()=>{c(e.catId,-1)}})),l.createElement("div",null,"數量：",null==e?void 0:e.quantity)),l.createElement("div",{className:"cart-item-wrapper-content"},"小計：",null==e?void 0:e.quantity,"000")))),l.createElement("div",{className:"cart-item-wrapper-content cart-item-wrapper-content-total"},l.createElement("div",null,"總計："),l.createElement("div",null,"1000"))),l.createElement(y.Z,{formData:a,formConfig:C,handleChange:function(e,t){i((a=>{a[t]=e}))},handleSubmit:function(){console.log("handleSubmit formData",a)}})):l.createElement("main",null)}},E9vQ:(e,t,a)=>{a.d(t,{Z:()=>c});var l=a("J8ja"),r=a.n(l),n=a("JPst"),i=a.n(n)()(r());i.push([e.id,".cart-items-wrapper{display:flex;flex-direction:column;max-width:720px;margin:20px auto;padding:10px;border-radius:20px;box-shadow:rgba(0,0,0,.05) 0px 6px 24px 0px,rgba(0,0,0,.08) 0px 0px 0px 1px}@media(min-width: 576px){.cart-items-wrapper{padding:20px 30px}}.cart-item-wrapper{display:flex;flex-direction:row;justify-content:center;justify-content:space-between;align-items:center;margin:0 0 5px}.cart-item-wrapper img{width:90px;height:60px;border-radius:20px}@media(min-width: 576px){.cart-item-wrapper img{width:120px;height:90px}}@media(min-width: 768px){.cart-item-wrapper{margin:0 0 10px}.cart-item-wrapper img{width:180px;height:120px}}.cart-item-wrapper-content{margin:0 5px}@media(min-width: 768px){.cart-item-wrapper-content{margin:0 10px}}.cart-item-wrapper-content-name{width:100%;max-width:200px;flex-shrink:1}.cart-item-wrapper-content-control{flex-shrink:0}.cart-item-wrapper-content-total{display:flex;flex-direction:row;justify-content:space-between;padding:10px 0 0;border-top:1px solid #ddd;font-weight:600}",""]),i.locals={textPrimaryColor:"#17202a",mainThemeColor:"#43766c",mainThemeColorDark:"#f8fae5",mainThemeColorLight:"#b19470",mainThemeColorComplement:"#76453b"};const c=i}}]);