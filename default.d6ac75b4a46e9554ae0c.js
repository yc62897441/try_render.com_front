"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[913],{e3yb:(e,t,a)=>{a.d(t,{Z:()=>k});var n=a("q1tI"),l=a("vvQw"),r=a("LboF"),i=a.n(r),o=a("5Hnr"),m=a.n(o),d=a("shRe"),c=a.n(d),s=a("3c4z"),p=a.n(s),u=a("3mzb"),h=a.n(u),g=a("Hd6Y"),x=a.n(g),v=a("r4RY"),f={};f.styleTagTransform=x(),f.setAttributes=p(),f.insert=c().bind(null,"head"),f.domAPI=m(),f.insertStyleElement=h(),i()(v.Z,f),v.Z&&v.Z.locals&&v.Z.locals;var b=a("SOLs");const E=function(e){let{propPaginationStates:t,handleChangePage:a,handleChangeNumberPerPage:l}=e;const[r,i]=(0,n.useState)({});return(0,n.useEffect)((()=>{i(t)}),[t]),n.createElement("div",{className:"paginationWrapper"},n.createElement(b.zx,{name:"第一頁",onClick:()=>{a(1)}}),n.createElement(b.zx,{name:"上一頁",onClick:()=>{a(Number(null==r?void 0:r.page)-1)}}),Array.from({length:null==r?void 0:r.maxPage},((e,t)=>t)).map(((e,t)=>{if((null==r?void 0:r.page)-5<=Number(e+1)&&Number(e+1)<=(null==r?void 0:r.page)+5){const l=Number(e+1)===(null==r?void 0:r.page);return n.createElement(b.zx,{key:t,name:Number(e)+1,isActive:l,onClick:()=>{a(Number(e)+1)}})}})),n.createElement(b.zx,{name:"下一頁",onClick:()=>{a(Number(null==r?void 0:r.page)+1)}}),n.createElement(b.zx,{name:"最後頁",onClick:()=>{a(Number(null==r?void 0:r.maxPage))}}),n.createElement("div",{className:"paginationSelectWrapper"},n.createElement("div",null,"每頁顯示筆數"),n.createElement(b.Ph,{selectList:[{label:10,value:10},{label:25,value:25}],onChangeFunc:l,onChangeKey:"pagination"})))};var w=a("eodf"),C={};C.styleTagTransform=x(),C.setAttributes=p(),C.insert=c().bind(null,"head"),C.domAPI=m(),C.insertStyleElement=h(),i()(w.Z,C),w.Z&&w.Z.locals&&w.Z.locals;var P=a("Tkux");const y=function(e){let{propData:t,PropCard:a,PropModalContent:l}=e;const[r,i]=(0,n.useState)({showIndex:null,showDatum:null});function o(e){if(null===r.showIndex){const a={showIndex:e,showDatum:t[e]};i(a)}else i({showIndex:null,showDatum:null})}return n.createElement(n.Fragment,null,n.createElement("div",{className:"dataListWrapper"},a&&(null==t?void 0:t.length)>0&&t.map(((e,t)=>n.createElement("div",{key:t,onClick:()=>o(t)},n.createElement(a,{datum:e}))))),null!==r.showIndex&&n.createElement(P.ZP,{switchModal:o},l&&n.createElement(l,{datum:r.showDatum})))};var I=a("wTN4");function N(e,t){for(const a of e)if(a.isIntersecting){const e=a.target;e.setAttribute("src",e.dataset.src),t.unobserve(e)}}const k=function(e){let{propData:t,PropCard:a,PropModalContent:r}=e;const i=(0,l.I0)(),o=(0,l.v9)((e=>e.persistedControlReducer.keepFetch)),[m,d]=(0,n.useState)([]),[c,s]=(0,n.useState)([]),[p,u]=(0,n.useState)({page:1,maxPage:1,numberPerPage:10});function h(){p.maxPage>1&&i((0,I.$e)(!0))}return(0,n.useEffect)((()=>{d(t),o?(u({...p,maxPage:Math.ceil(t.length/p.numberPerPage)}),i((0,I.$e)(!1))):u({...p,page:1,maxPage:Math.ceil(t.length/p.numberPerPage)})}),[t]),(0,n.useEffect)((()=>{const e=p.numberPerPage*(p.page-1),t=e+p.numberPerPage;s(m.slice(e,t))}),[p]),(0,n.useEffect)((()=>{const e=new IntersectionObserver(N),t=document.querySelectorAll("img.lazy");for(const a of t)e.observe(a)}),[c]),n.createElement(n.Fragment,null,n.createElement(y,{propData:c,PropCard:a,PropModalContent:r}),n.createElement(E,{propPaginationStates:p,handleChangePage:function(e){const a=e>p.maxPage?p.maxPage:e<1?1:e,n=Math.ceil(t.length/p.numberPerPage);u({...p,page:a,maxPage:n}),a===n&&h()},handleChangeNumberPerPage:function(e){const a=(p.page-1)*p.numberPerPage,n=Math.floor(a/Number(e))+1,l=n>p.maxPage?p.maxPage:n<1?1:n,r=Math.ceil(t.length/Number(e));u({...p,page:l,maxPage:r,numberPerPage:Number(e)}),l===r&&h()}}))}},Tkux:(e,t,a)=>{a.d(t,{Xd:()=>P,_l:()=>y,ZP:()=>C});var n=a("q1tI"),l=a("vvQw"),r=a("LboF"),i=a.n(r),o=a("5Hnr"),m=a.n(o),d=a("shRe"),c=a.n(d),s=a("3c4z"),p=a.n(s),u=a("3mzb"),h=a.n(u),g=a("Hd6Y"),x=a.n(g),v=a("XO6r"),f={};f.styleTagTransform=x(),f.setAttributes=p(),f.insert=c().bind(null,"head"),f.domAPI=m(),f.insertStyleElement=h(),i()(v.Z,f),v.Z&&v.Z.locals&&v.Z.locals;var b=a("SOLs"),E=a("KJq9"),w=a("wTN4");const C=function(e){let{children:t,switchModal:a}=e;return n.createElement("div",{className:"modalWrapper"},n.createElement("div",{className:"modalMain"},n.createElement("div",{className:"modalCloseWrapper"},n.createElement("div",{className:"modalClose",onClick:a},"X")),t),n.createElement("div",{className:"modalMask",onClick:a}))};function P(e){var t,a,r,i,o,m,d,c,s,p,u,h;let{datum:g}=e;const x=(0,l.I0)(),[v,f]=(0,n.useState)(null);return(0,n.useEffect)((()=>{x(function(e){return async()=>{try{x((0,w.a)(!0));const t=await(0,E.l)("get","https://api.thecatapi.com/v1/images/"+e.id);f(null==t?void 0:t.data),x((0,w.a)(!1))}catch(e){console.log(e),x((0,w.a)(!1))}}}(g))}),[]),n.createElement("div",{className:"modalContentWrapper"},null!==v&&v.breeds&&n.createElement(n.Fragment,null,n.createElement("div",{className:"modalContentInfo"},n.createElement("div",null,"品種: "),n.createElement("div",null,null==v||null===(t=v.breeds)||void 0===t||null===(a=t[0])||void 0===a?void 0:a.name)),n.createElement("div",{className:"modalContentInfo"},n.createElement("div",null,"性情: "),n.createElement("div",null,null==v||null===(r=v.breeds)||void 0===r||null===(i=r[0])||void 0===i?void 0:i.temperament)),n.createElement("div",{className:"modalContentInfo"},n.createElement("div",null,"起源地: "),n.createElement("div",null,null==v||null===(o=v.breeds)||void 0===o||null===(m=o[0])||void 0===m?void 0:m.origin)),n.createElement("div",{className:"modalContentInfo"},n.createElement("div",null,"描述: "),n.createElement("div",null,null==v||null===(d=v.breeds)||void 0===d||null===(c=d[0])||void 0===c?void 0:c.description)),n.createElement("div",{className:"modalContentInfo"},n.createElement("div",null,"壽命長度: "),n.createElement("div",null,null==v||null===(s=v.breeds)||void 0===s||null===(p=s[0])||void 0===p?void 0:p.life_span)),n.createElement("div",{className:"modalContentInfo"},n.createElement("a",{href:null==v||null===(u=v.breeds)||void 0===u||null===(h=u[0])||void 0===h?void 0:h.wikipedia_url},"維基介紹")),n.createElement("div",{className:"modalContentImgWrapper"},n.createElement("img",{src:null==v?void 0:v.url,alt:"貓咪圖片",srcSet:""})),n.createElement(b.zx,{name:"加入購物車",onClick:()=>{let e=localStorage.getItem("cart");e?(e=JSON.parse(e),e.cartList.push(v.id)):e={cartList:[v.id]},localStorage.setItem("cart",JSON.stringify(e))}})))}function y(e){var t;let{datum:a}=e;const[l,r]=(0,n.useState)(null);return(0,n.useEffect)((()=>{r(a)}),[a]),n.createElement("div",{className:"modalContentWrapper"},l&&n.createElement(n.Fragment,null,n.createElement("div",{className:"modalContentInfo"},n.createElement("div",null,"店名: "),n.createElement("div",null,null==l?void 0:l.name)),n.createElement("div",{className:"modalContentInfo"},n.createElement("div",null,"地址: "),n.createElement("div",null,null==l?void 0:l.address)),n.createElement("div",{className:"modalContentInfo"},n.createElement("div",null,"營業時間: "),n.createElement("div",null,null==l||null===(t=l.openingHoursList)||void 0===t?void 0:t.map(((e,t)=>n.createElement("div",{key:t},e))))),n.createElement("div",{className:"modalContentImgWrapper"},n.createElement("img",{src:null==l?void 0:l.coverUrl,alt:"餐廳圖片",srcSet:""}))))}},U9Tv:(e,t,a)=>{a.d(t,{y:()=>b,P:()=>E});var n=a("q1tI");const l=a.p+"919d820b24c0200d7588.jpg";var r=a("LboF"),i=a.n(r),o=a("5Hnr"),m=a.n(o),d=a("shRe"),c=a.n(d),s=a("3c4z"),p=a.n(s),u=a("3mzb"),h=a.n(u),g=a("Hd6Y"),x=a.n(g),v=a("Hw17"),f={};function b(e){let{datum:t}=e;return n.createElement("div",{className:"cardWrapper pointer"},n.createElement("h2",null,t.id),n.createElement("div",{className:"cardImgWrapper"},n.createElement("img",{className:"lazy",src:l,"data-src":t.url,alt:"貓咪圖片",srcSet:""})))}function E(e){let{datum:t}=e;return n.createElement("div",{className:"cardWrapper pointer"},n.createElement("h2",null,t.name),n.createElement("div",{className:"cardImgWrapper"},n.createElement("img",{className:"lazy",src:l,"data-src":t.coverUrl,alt:"餐廳圖片",srcSet:""})))}f.styleTagTransform=x(),f.setAttributes=p(),f.insert=c().bind(null,"head"),f.domAPI=m(),f.insertStyleElement=h(),i()(v.Z,f),v.Z&&v.Z.locals&&v.Z.locals},fv6m:(e,t,a)=>{a.d(t,{I:()=>r,Z:()=>i});var n=a("q1tI"),l=a("Tkux");function r(e){let{tableData:t,ModalContent:a}=e;const[r,i]=(0,n.useState)(null);let o=null;return null!==r&&(o={...t[r]}),n.createElement(n.Fragment,null,n.createElement("div",{className:"tableWrapper"},n.createElement("div",{className:"tableContainer"},n.createElement("table",null,n.createElement("thead",null,n.createElement("tr",null,t.length>0&&Object.keys(t[0]).length>0&&Object.keys(t[0]).map((e=>n.createElement("th",{key:e},e))))),n.createElement("tbody",null,t.length>0&&t.map(((e,a)=>n.createElement("tr",{key:a,onClick:()=>function(e){i(null===e?null:e)}(a)},Object.keys(t[0]).length>0&&Object.keys(t[0]).map(((t,a)=>n.createElement("td",{key:a+t},e[t])))))))))),null!==o&&n.createElement(l.ZP,{switchModal:()=>{i(null)}},n.createElement(a,{datum:o})))}const i=function(e){let{tableData:t}=e;return n.createElement("div",{className:"tableWrapper"},n.createElement("div",{className:"tableContainer"},n.createElement("table",null,n.createElement("thead",null,n.createElement("tr",null,t.length>0&&Object.keys(t[0]).length>0&&Object.keys(t[0]).map((e=>n.createElement("th",{key:e},e))))),n.createElement("tbody",null,t.length>0&&t.map(((e,a)=>n.createElement("tr",{key:a},Object.keys(t[0]).length>0&&Object.keys(t[0]).map(((t,a)=>n.createElement("td",{key:a+t},e[t]))))))))))}},Hw17:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a("J8ja"),l=a.n(n),r=a("JPst"),i=a.n(r)()(l());i.push([e.id,".cardWrapper{display:flex;flex-direction:column;justify-content:flex-start;align-items:center;width:300px;padding:20px;border-radius:20px;box-shadow:rgba(0,0,0,.05) 0px 6px 24px 0px,rgba(0,0,0,.08) 0px 0px 0px 1px}@media(min-width: 576px){.cardWrapper{width:400px}}@media(min-width: 768px){.cardWrapper{width:300px}}@media(min-width: 992px){.cardWrapper{width:400px}}@media(min-width: 1440px){.cardWrapper{width:600px}}.pointer{cursor:pointer}.cardImgWrapper{width:240px;height:160px;margin:0 0 20px;border-radius:20px}.cardImgWrapper img{width:100%;height:100%;border-radius:20px;object-fit:cover}@media(min-width: 576px){.cardImgWrapper{width:320px;height:213px}}@media(min-width: 768px){.cardImgWrapper{width:240px;height:160px}}@media(min-width: 992px){.cardImgWrapper{width:320px;height:213px}}@media(min-width: 1440px){.cardImgWrapper{width:450px;height:300px}}",""]),i.locals={textPrimaryColor:"#17202a",mainThemeColor:"#43766c",mainThemeColorDark:"#f8fae5",mainThemeColorLight:"#b19470",mainThemeColorComplement:"#76453b"};const o=i},eodf:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a("J8ja"),l=a.n(n),r=a("JPst"),i=a.n(r)()(l());i.push([e.id,".dataListWrapper{display:grid;grid-template-columns:repeat(1, 1fr);grid-gap:20px;justify-items:center;width:100%;margin:0 auto 20px}@media(min-width: 768px){.dataListWrapper{grid-template-columns:repeat(2, 1fr);max-width:920px}}@media(min-width: 1440px){.dataListWrapper{max-width:1440px}}",""]),i.locals={textPrimaryColor:"#17202a",mainThemeColor:"#43766c",mainThemeColorDark:"#f8fae5",mainThemeColorLight:"#b19470",mainThemeColorComplement:"#76453b"};const o=i},XO6r:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a("J8ja"),l=a.n(n),r=a("JPst"),i=a.n(r)()(l());i.push([e.id,".modalWrapper{position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:8888;background-color:rgba(0,0,0,0)}.modalMask{position:absolute;top:0;left:0;width:100%;height:100%;z-index:0;background-color:#17202a;opacity:.1}.modalMain{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:90%;height:auto;max-height:90%;padding:20px;border-radius:20px;box-shadow:rgba(0,0,0,.05) 0px 6px 24px 0px,rgba(0,0,0,.08) 0px 0px 0px 1px;z-index:1;background-color:#fefefe;overflow-y:scroll}@media(min-width: 576px){.modalMain{width:80%;max-height:80%}}.modalContentWrapper{display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;max-width:900px;margin:0 auto}.modalContentInfo{display:flex;flex-direction:row;justify-content:flex-start;align-items:flex-start;margin:0 0 10px;font-size:16px}.modalContentInfo :nth-child(1){margin:0;white-space:nowrap}.modalContentInfo :nth-child(2){word-break:break-all}@media(min-width: 576px){.modalContentInfo{font-size:20px}}.modalContentImgWrapper{width:100%;height:225px;margin:0 auto;border-radius:20px}.modalContentImgWrapper img{width:100%;height:100%;border-radius:20px;object-fit:cover}@media(min-width: 576px){.modalContentImgWrapper{height:300px}}@media(min-width: 768px){.modalContentImgWrapper{width:500px;height:375px}}@media(min-width: 992px){.modalContentImgWrapper{width:600px;height:450px}}.modalCloseWrapper{display:flex;flex-direction:row;justify-content:flex-end;align-items:center}.modalClose{width:20px;height:20px;font-size:20px;font-weight:600;text-align:center;cursor:pointer}",""]),i.locals={textPrimaryColor:"#17202a",mainThemeColor:"#43766c",mainThemeColorDark:"#f8fae5",mainThemeColorLight:"#b19470",mainThemeColorComplement:"#76453b"};const o=i},r4RY:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a("J8ja"),l=a.n(n),r=a("JPst"),i=a.n(r)()(l());i.push([e.id,".paginationWrapper{display:flex;flex-direction:row;justify-content:center;align-items:center;flex-wrap:wrap;width:100%;margin:0 auto 20px;padding:5px}.paginationWrapper>:nth-child(n){margin:0 5px}.paginationSelectWrapper{display:flex;flex-direction:row}",""]),i.locals={};const o=i}}]);