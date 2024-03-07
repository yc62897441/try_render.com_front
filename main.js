(()=>{var e,t,a,r,n={4236:(e,t,a)=>{"use strict";a.d(t,{$e:()=>p,B2:()=>r,Gg:()=>d,JB:()=>s,PC:()=>o,SY:()=>n,a:()=>c,aQ:()=>l,ld:()=>i,tS:()=>m});const r="SWITCH_LOGIN",n="SWITCH_LOADING",o="SWITCH_REFETCH",i="SWITCH_KEEP_FETCH",l="SWITCH_USER_DATA",s=e=>({type:r,payload:e}),c=e=>({type:n,payload:e}),d=e=>({type:o,payload:e}),p=e=>({type:i,payload:e}),m=e=>({type:l,payload:e})},7455:(e,t,a)=>{"use strict";var r,n;a.d(t,{r:()=>o});let o,i=!0;switch(null!==(r=location)&&void 0!==r&&null!==(n=r.host)&&void 0!==n&&n.includes("localhost")||(i=!1),i){case!0:o="http://localhost:3001";break;case!1:o="https://try-render-com.onrender.com"}},6122:(e,t,a)=>{"use strict";var r=a(7294),n=a(745),o=a(5998),i=a(8603),l=a(4890),s=a(4236);const c={isLogin:!1,isLoading:!1,reFetch:!1,keepFetch:!1,userData:{}};var d=a(7644),p=a(3894),m=a(3932),u=a(9635),h=a(2168);const g=(0,a(2249).m)({secretKey:"your-secret-key",onError:function(e){console.error("redux-persist-transform-encrypt error",e)}}),f={key:"controlReducer",storage:h.Z,whitelist:["userData","isLogin"],transforms:[g]},x=(0,u.OJ)(f,(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s.B2:return{...e,isLogin:t.payload};case s.SY:return{...e,isLoading:t.payload};case s.PC:return{...e,reFetch:t.payload};case s.ld:return{...e,keepFetch:t.payload};case s.aQ:return{...e,userData:t.payload};default:return e}})),b=(0,l.UY)({persistedControlReducer:x}),v=(0,l.MT)(b,(0,l.qC)((0,d.md)(p.Z),(0,m.ZP)((0,m.S)()))),E=(0,u.p5)(v),y=v;var w=a(9655),k=a(9250);a(9214);const C={title:"貓咪宅急便",paragraphs:["歡迎使用「貓咪宅急便」，我們是專為喜愛貓咪的您打造的線上服務。無論您是忙碌的上班族、老年人、或是希望短期體驗養貓樂趣的朋友，我們都能提供便利的貓咪配送服務。","透過「貓咪宅急便」，您只需進行簡單的線上預訂，即可享受到親切可愛的貓咪送上門的服務。我們擁有多款不同品種、個性各異的貓咪，讓您可以依照自己的喜好和需求進行挑選。","我們的宅急便團隊以貓咪的福祉為首要考量，確保貓咪在配送過程中感受到最大程度的舒適和安心。所有貓咪均經過嚴格的健康檢查，並提供完整的疫苗接種紀錄，以確保它們的身體狀態良好。","不僅如此，我們的服務團隊也提供貓咪相關的專業建議和資訊，以確保您在貓咪陪伴的過程中能夠擁有愉快、無憂無慮的體驗。讓「貓咪宅急便」成為您和貓咪之間美好回憶的開始，隨時為您打開擁抱愛貓的大門。"],link:{url:"/delivery",name:"線上預訂"}},N={title:"貓咪餐廳",paragraphs:["歡迎來到「貓咪餐廳」系列，我們匯聚了各地最迷人的貓咪餐廳，提供多樣風格的料理，同時還有可愛的貓迷陪伴您共享用餐時光。","探索我們的菜單，您將發現來自不同地方的獨特料理風味，從精緻的西式點心到道地的亞洲美食，每一口都彷彿是一場美味的旅行。我們致力於打造一個讓您在用餐的同時感受到美味和愉悅的綜合體驗。","更特別的是，「貓咪餐廳」每一家都有親切友善的貓咪伴侶，這些可愛的貓咪將在您用餐的過程中陪伴著您，為整個用餐體驗增添愉快的氛圍。這些貓咪都是經過挑選，並接受細心的照顧，確保牠們的愉快性格能夠為您的用餐體驗帶來愜意和歡樂。","無論您是獨自享受寧靜用餐，與摯愛共度浪漫時光，或與朋友聚餐，「貓咪餐廳」系列都將成為您尋找美食和貓咪陪伴的理想場所。讓我們一同探索，用美味和愛貓共同為生活增添色彩。"],link:{url:"/delivery",name:"了解更多"}},S={title:"線上認養",paragraphs:["歡迎參與「線上認養」，這是一個讓您透過定期信用卡捐款的方式，支援無家可歸的貓咪，為牠們帶來溫暖和希望的緊急計畫。","在現今社會，許多貓咪流浪無依，面臨飢寒交迫的情況。透過「線上認養」，您有機會成為這些無助生靈的贊助者，提供牠們穩定的食物、溫暖的庇護所，以及及時的醫療照護。","參與方式非常簡單，只需進行線上信用卡捐款設定，您的愛心就能持續地幫助這些需要幫助的貓咪。我們承諾，您的捐款將用於改善貓咪的生活狀況，提供牠們愉快、健康的生存環境。","除了捐款，我們也會不定期提供捐助者專屬的貓咪故事、照片更新，讓您能更深切地感受到您的善行所帶來的改變。這是一個共同努力，讓愛心凝聚成為改變生命的力量的機會。","加入「線上認養」，讓我們攜手為這些無辜的生靈帶來光明和關愛。感謝您的支持，讓我們共同努力，讓每一隻貓咪都有機會擁有一個幸福的家。"],link:{url:"/delivery",name:"立即認養"}};function W(e){var t;let{sectionData:a}=e;return r.createElement("div",{className:"homepageSectionMain"},r.createElement("div",{className:"homepageSectionContent"},r.createElement("h1",null,null==a?void 0:a.title),(null==a||null===(t=a.paragraphs)||void 0===t?void 0:t.length)>0&&a.paragraphs.map(((e,t)=>r.createElement("p",{key:t},e))),(null==a?void 0:a.link)&&r.createElement(w.rU,{to:a.link.url},a.link.name)))}const T=function(){return r.createElement("main",null,r.createElement("section",{className:"homepageSection"},r.createElement("div",{className:"backgroundImageWrapper backgroundImageWrapper1"}),r.createElement(W,{sectionData:C})),r.createElement("section",{className:"homepageSection"},r.createElement("div",{className:"backgroundImageWrapper backgroundImageWrapper2"}),r.createElement(W,{sectionData:N})),r.createElement("section",{className:"homepageSection"},r.createElement("div",{className:"backgroundImageWrapper backgroundImageWrapper3"}),r.createElement(W,{sectionData:S})))};var I=a(7462),z=a(3379),L=a.n(z),P=a(7795),A=a.n(P),Z=a(569),M=a.n(Z),j=a(3565),_=a.n(j),F=a(9216),O=a.n(F),G=a(4589),R=a.n(G),D=a(5210),q={};q.styleTagTransform=R(),q.setAttributes=_(),q.insert=M().bind(null,"head"),q.domAPI=A(),q.insertStyleElement=O(),L()(D.Z,q),D.Z&&D.Z.locals&&D.Z.locals;const U=a.p+"1b5e077b846885bf5fb5.png";var B=a(164),H={};H.styleTagTransform=R(),H.setAttributes=_(),H.insert=M().bind(null,"head"),H.domAPI=A(),H.insertStyleElement=O(),L()(B.Z,H),B.Z&&B.Z.locals&&B.Z.locals;const K=function(e){let{text:t}=e;return r.createElement("div",{className:"loadingModalWrapper"},r.createElement("div",{className:"modalLoadingMain"},r.createElement("div",{className:"modalLoadingMainText"},t||"Loading..."),r.createElement("div",{className:"lds-roller"},r.createElement("div",null),r.createElement("div",null),r.createElement("div",null),r.createElement("div",null),r.createElement("div",null),r.createElement("div",null),r.createElement("div",null),r.createElement("div",null))),r.createElement("div",{className:"mask"}))};var J=a(7455),Y=a(8029);function V(){return r.createElement("div",{className:"loginMarquee"},r.createElement("h1",{className:"loginMarqueeItem loginMarqueeItem1"},"Cat Express Delivered with Love"),r.createElement("h1",{className:"loginMarqueeItem loginMarqueeItem2"},"Dining Delights with Feline Friends"),r.createElement("h1",{className:"loginMarqueeItem loginMarqueeItem3"},"A Lifeline of Love for Furry Souls"))}const Q=e=>function(t){const a=(0,o.I0)(),[n,i]=(0,r.useState)(!1),l="MISSING_ENV_VAR".REACT_APP_RECAPTCHA_KEY;function s(e){a(e())}return(0,r.useEffect)((()=>{const e=document.createElement("script");e.src="https://www.google.com/recaptcha/api.js?render=explicit";const t=()=>{i(!0)};return e.addEventListener("load",t),document.body.appendChild(e),()=>{e.removeEventListener("load",t)}}),[]),(0,r.useEffect)((()=>{!0===n&&window.grecaptcha.ready((function(){window.grecaptcha.render("submit",{sitekey:l,callback:s})}))}),[n]),r.createElement(r.Fragment,null,r.createElement(e,(0,I.Z)({},t,{reCaptchaSubmit:s})),r.createElement("button",{className:"reCaptchaButton",id:"submit"}))},$=Q((function(e){let{changeForm:t,reCaptchaSubmit:a}=e;const n=(0,o.I0)(),[i,l]=(0,r.useState)({account:"",password:""});function c(e,t){l({...i,[t]:e})}function d(){return async e=>{try{var t;e((0,s.a)(!0));const a=await(0,Y.l)("post",J.r+"/auth/signin",{...i});if(null!=a&&null!==(t=a.data)&&void 0!==t&&t.token){let t=a.data.token;sessionStorage.setItem("token",t),e((0,s.JB)(!0)),e((0,s.tS)({name:"John",age:18,address:{city:"Taipei",street:"Da An",else:{no:1,room:"a1"}}})),e((0,s.a)(!1))}else e((0,s.a)(!1))}catch(t){e((0,s.a)(!1)),console.log(t)}}}return r.createElement("div",{className:"loginSectionMain"},r.createElement("h2",null,"登入"),r.createElement("form",null,r.createElement("div",{className:"formGroup"},r.createElement("label",{htmlFor:"account"},"帳號"),r.createElement("input",{className:"text",type:"text",name:"account",id:"account",onChange:e=>c(e.target.value,"account")})),r.createElement("div",{className:"formGroup"},r.createElement("label",{htmlFor:"password"},"密碼"),r.createElement("input",{className:"password",type:"password",name:"password",id:"password",onChange:e=>c(e.target.value,"password")})),r.createElement("div",{className:"formControlGroup"},r.createElement("button",{className:"button",type:"button",onClick:()=>{a?a(d):n(d())}},"登入")),r.createElement("div",{className:"formControlGroup"},r.createElement("div",{onClick:()=>t("register")},"註冊"),r.createElement("div",{onClick:()=>t("forgetPassword")},"忘記密碼"))))})),X=Q((function(e){let{changeForm:t}=e;const a=(0,o.I0)(),[n,i]=(0,r.useState)({account:"",password:"",passwordCheck:""});function l(e,t){i({...n,[t]:e})}return r.createElement("div",{className:"loginSectionMain"},r.createElement("h2",null,"註冊"),r.createElement("form",null,r.createElement("div",{className:"formGroup"},r.createElement("label",{htmlFor:"account"},"帳號"),r.createElement("input",{className:"text",type:"text",name:"account",id:"account",onChange:e=>l(e.target.value,"account")})),r.createElement("div",{className:"formGroup"},r.createElement("label",{htmlFor:"password"},"密碼"),r.createElement("input",{className:"password",type:"password",name:"password",id:"password",onChange:e=>l(e.target.value,"password")})),r.createElement("div",{className:"formGroup"},r.createElement("label",{htmlFor:"passwordCheck"},"密碼確認"),r.createElement("input",{className:"password",type:"password",name:"passwordCheck",id:"passwordCheck",onChange:e=>l(e.target.value,"passwordCheck")})),r.createElement("div",{className:"formControlGroup"},r.createElement("button",{className:"button",type:"button",onClick:()=>{a((async e=>{try{e((0,s.a)(!0));const t=await(0,Y.l)("post",J.r+"/auth/register",{...n});console.log("response",t),e((0,s.a)(!1))}catch(t){e((0,s.a)(!1)),console.log(t)}}))}},"註冊")),r.createElement("div",{className:"formControlGroup"},r.createElement("div",{onClick:()=>t("login")},"登入"),r.createElement("div",{onClick:()=>t("forgetPassword")},"忘記密碼"))))})),ee=Q((function(e){let{changeForm:t}=e;const a=(0,o.I0)(),[n,i]=(0,r.useState)({account:"",email:""});function l(e,t){i({...n,[t]:e})}return r.createElement("div",{className:"loginSectionMain"},r.createElement("h2",null,"忘記密碼"),r.createElement("form",null,r.createElement("div",{className:"formGroup"},r.createElement("label",{htmlFor:"account"},"帳號"),r.createElement("input",{className:"text",type:"text",name:"account",id:"account",onChange:e=>l(e.target.value,"account")})),r.createElement("div",{className:"formGroup"},r.createElement("label",{htmlFor:"password"},"Email"),r.createElement("input",{className:"email",type:"email",name:"email",id:"email",onChange:e=>l(e.target.value,"email")})),r.createElement("div",{className:"formControlGroup"},r.createElement("button",{className:"button",type:"button",onClick:()=>{a((async e=>{try{e((0,s.a)(!0));const t=await(0,Y.l)("post",J.r+"/auth/forgetPassword",{...n});console.log("response",t),e((0,s.a)(!1))}catch(t){e((0,s.a)(!1)),console.log(t)}}))}},"忘記密碼")),r.createElement("div",{className:"formControlGroup"},r.createElement("div",{onClick:()=>t("login")},"登入"),r.createElement("div",{onClick:()=>t("register")},"註冊"))))})),te=function(){const e=(0,o.v9)((e=>e.persistedControlReducer.isLoading)),[t,a]=(0,r.useState)("login");function n(e){a(e)}return r.createElement("main",null,e&&r.createElement(K,{text:""}),r.createElement("section",{className:"loginSection"},r.createElement("div",{className:"loginBackgroundImageWrapper"}),r.createElement(V,null),"login"===t?r.createElement($,{changeForm:n}):"register"===t?r.createElement(X,{changeForm:n}):"forgetPassword"===t?r.createElement(ee,{changeForm:n}):r.createElement(r.Fragment,null),r.createElement("div",{className:"loginLogoWrapper"},r.createElement("img",{src:U,alt:"貓咪 icon",srcSet:""}))))},ae=function(){return r.createElement("div",null,"Loading...")};var re=a(1595),ne={};ne.styleTagTransform=R(),ne.setAttributes=_(),ne.insert=M().bind(null,"head"),ne.domAPI=A(),ne.insertStyleElement=O(),L()(re.Z,ne),re.Z&&re.Z.locals&&re.Z.locals;var oe=a(1622),ie={};ie.styleTagTransform=R(),ie.setAttributes=_(),ie.insert=M().bind(null,"head"),ie.domAPI=A(),ie.insertStyleElement=O(),L()(oe.Z,ie),oe.Z&&oe.Z.locals&&oe.Z.locals;const le=[{name:"Home",url:"/"},{name:"貓咪宅急便",url:"/delivery"},{name:"貓咪餐廳",url:"/restaurant"},{name:"線上認養",url:"/contribution"},{name:"Reactflow",url:"/reactflow"}],se=function(){const[e,t]=(0,r.useState)("non-dropdown");return r.createElement("div",{className:"headerWrapper"},r.createElement("div",{className:"logoWrapper"},r.createElement(w.rU,{to:"/"},r.createElement("img",{src:U,alt:"貓咪 icon",srcSet:""}))),r.createElement("div",{className:"barsWrapper",onClick:function(){t("non-dropdown"===e?"dropdown":"non-dropdown")}},r.createElement("div",{className:"bar bar1 "+e}),r.createElement("div",{className:"bar bar2 "+e}),r.createElement("div",{className:"bar bar3 "+e})),r.createElement("div",{className:"urlsWrapper "+e},le.length>0&&le.map((e=>r.createElement("div",{key:e.name,className:"urlWrapper"},r.createElement(w.rU,{to:e.url},e.name))))),r.createElement("div",{className:"urlsWrapperPc"},le.length>0&&le.map((e=>r.createElement("div",{key:e.name,className:"urlWrapper"},r.createElement(w.rU,{to:e.url},e.name))))))},ce=function(e){let{children:t}=e;const a=(0,o.v9)((e=>e.persistedControlReducer.isLoading));return r.createElement("div",{className:"layoutWrapper"},a&&r.createElement(K,{text:""}),r.createElement(se,null),t)};var de=a(3188),pe={};pe.styleTagTransform=R(),pe.setAttributes=_(),pe.insert=M().bind(null,"head"),pe.domAPI=A(),pe.insertStyleElement=O(),L()(de.Z,pe),de.Z&&de.Z.locals&&de.Z.locals;const me=(0,r.lazy)((()=>Promise.all([a.e(913),a.e(295)]).then(a.bind(a,6295)))),ue=(0,r.lazy)((()=>Promise.all([a.e(913),a.e(585)]).then(a.bind(a,3585)))),he=(0,r.lazy)((()=>a.e(393).then(a.bind(a,3393)))),ge=(0,r.lazy)((()=>Promise.all([a.e(216),a.e(197)]).then(a.bind(a,9004)))),fe=function(){const e=(0,o.v9)((e=>e.persistedControlReducer.isLogin));return r.createElement(w.VK,null,e?r.createElement(ce,null,r.createElement(r.Suspense,{fallback:r.createElement(ae,null)},r.createElement(k.Z5,null,r.createElement(k.AW,{path:"/",element:r.createElement(T,null)}),r.createElement(k.AW,{path:"/delivery",element:r.createElement(me,null)}),r.createElement(k.AW,{path:"/restaurant",element:r.createElement(ue,null)}),r.createElement(k.AW,{path:"/contribution",element:r.createElement(he,null)}),r.createElement(k.AW,{path:"/reactflow",element:r.createElement(ge,null)})))):r.createElement(k.Z5,null,r.createElement(k.AW,{path:"*",element:r.createElement(te,null)})))},xe=document.querySelector("#root");n.createRoot(xe).render(r.createElement(r.StrictMode,null,r.createElement(o.zt,{store:y},r.createElement(i.r,{persistor:E},r.createElement(fe,{basename:"/try_render.com_front"})))))},8029:(e,t,a)=>{"use strict";a.d(t,{l:()=>l});var r=a(9669),n=a.n(r),o=a(7455);const i=n().create({mainUrl:o.r});async function l(e,t,a){try{return await i({method:e,url:t,data:a}).then((e=>e)).catch((e=>{alert(e)}))}catch(e){console.log(e)}}i.interceptors.request.use((e=>{const t=sessionStorage.getItem("token");return t&&(e.headers.Authorization="Bearer ".concat(t)),e}),(e=>Promise.reject(e)))},1622:(e,t,a)=>{"use strict";a.d(t,{Z:()=>l});var r=a(8081),n=a.n(r),o=a(3645),i=a.n(o)()(n());i.push([e.id,":export{textPrimaryColor:#17202a;mainThemeColor:#43766c;mainThemeColorDark:#f8fae5;mainThemeColorLight:#b19470;mainThemeColorComplement:#76453b}.headerWrapper{position:relative;display:flex;flex-direction:row;justify-content:space-between;align-items:center;width:100%;height:100px;padding:0 25px;background-color:#43766c;border-bottom:4px solid #f8fae5;font-size:16px;font-weight:600;color:#17202a}.logoWrapper{width:50px;height:50px}.logoWrapper img{width:100%;height:100%;object-fit:contain}.barsWrapper{position:relative;display:flex;flex-direction:column;justify-content:center;align-items:center;width:24px;height:24px;cursor:pointer}.barsWrapper .bar{display:block;width:24px;height:3px;margin:2px 0;background-color:#17202a;transition:all .2s}@media(min-width: 768px){.barsWrapper{position:absolute;z-index:-9999;opacity:0}}.bar1.dropdown{position:absolute;transform:rotate(45deg)}.bar2.dropdown{position:absolute;opacity:0;z-index:-9999}.bar3.dropdown{position:absolute;transform:rotate(-45deg)}.urlsWrapper{position:absolute;top:100px;left:0;z-index:-9999;opacity:0;display:flex;flex-direction:column;width:100%;background-color:#b19470;padding:5px 15px}@media(min-width: 768px){.urlsWrapper{position:absolute;z-index:-9999;opacity:0}}.urlsWrapper.dropdown{z-index:2;opacity:1;transition:opacity .5s}@media(min-width: 768px){.urlsWrapper.dropdown{position:absolute;z-index:-9999;opacity:0}}.urlsWrapperPc{position:absolute;z-index:-9999;opacity:0;display:flex;flex-direction:row}@media(min-width: 768px){.urlsWrapperPc{position:relative;z-index:0;opacity:1}}.urlWrapper{margin:3px 0;padding:3px 0;border-bottom:2px solid #f8fae5}.urlWrapper a{margin:0;text-decoration:none}.urlWrapper a:hover{text-decoration:underline}@media(min-width: 768px){.urlWrapper{margin:0 10px;padding:0;border:none}}",""]);const l=i},1595:(e,t,a)=>{"use strict";a.d(t,{Z:()=>l});var r=a(8081),n=a.n(r),o=a(3645),i=a.n(o)()(n());i.push([e.id,".layoutWrapper{width:100%;min-height:100vh}",""]);const l=i},164:(e,t,a)=>{"use strict";a.d(t,{Z:()=>l});var r=a(8081),n=a.n(r),o=a(3645),i=a.n(o)()(n());i.push([e.id,':export{textPrimaryColor:#17202a;mainThemeColor:#43766c;mainThemeColorDark:#f8fae5;mainThemeColorLight:#b19470;mainThemeColorComplement:#76453b}.loadingModalWrapper{position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:9999;background-color:rgba(0,0,0,0)}.mask{position:absolute;top:0;left:0;width:100%;height:100%;z-index:0;background-color:#17202a;opacity:.1}.modalLoadingMain{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:150px;height:150px;z-index:1}@media(min-width: 576px){.modalLoadingMain{width:300px;height:300px}}.modalLoadingMainText{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);font-size:20px;z-index:1}@media(min-width: 576px){.modalLoadingMainText{font-size:28px}}.lds-roller{display:inline-block;position:absolute;top:0;left:0;width:150px;height:150px;z-index:0}@media(min-width: 576px){.lds-roller{width:300px;height:300px}}.lds-roller div{animation:lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;transform-origin:75px 75px}@media(min-width: 576px){.lds-roller div{transform-origin:150px 150px}}.lds-roller div:after{content:" ";display:block;position:absolute;width:10px;height:10px;border-radius:50%;background-color:#43766c;opacity:1;margin:-5px 0 0 -5px}@media(min-width: 576px){.lds-roller div:after{width:20px;height:20px;margin:-10px 0 0 -10px}}.lds-roller div:nth-child(1){animation-delay:-0.036s}.lds-roller div:nth-child(1):after{top:135px;left:118px}@media(min-width: 576px){.lds-roller div:nth-child(1):after{top:274px;left:232px}}.lds-roller div:nth-child(2){animation-delay:-0.072s}.lds-roller div:nth-child(2):after{top:142px;left:105px}@media(min-width: 576px){.lds-roller div:nth-child(2):after{top:287px;left:207px}}.lds-roller div:nth-child(3){animation-delay:-0.108s}.lds-roller div:nth-child(3):after{top:147px;left:90px}@media(min-width: 576px){.lds-roller div:nth-child(3):after{top:297px;left:180px}}.lds-roller div:nth-child(4){animation-delay:-0.144s}.lds-roller div:nth-child(4):after{top:149px;left:75px}@media(min-width: 576px){.lds-roller div:nth-child(4):after{top:300px;left:150px}}.lds-roller div:nth-child(5){animation-delay:-0.18s}.lds-roller div:nth-child(5):after{top:148px;left:60px}@media(min-width: 576px){.lds-roller div:nth-child(5):after{top:297px;left:120px}}.lds-roller div:nth-child(6){animation-delay:-0.216s}.lds-roller div:nth-child(6):after{top:144px;left:46px}@media(min-width: 576px){.lds-roller div:nth-child(6):after{top:289px;left:94px}}.lds-roller div:nth-child(7){animation-delay:-0.252s}.lds-roller div:nth-child(7):after{top:137px;left:34px}@media(min-width: 576px){.lds-roller div:nth-child(7):after{top:276px;left:69px}}.lds-roller div:nth-child(8){animation-delay:-0.288s}.lds-roller div:nth-child(8):after{top:129px;left:23px}@media(min-width: 576px){.lds-roller div:nth-child(8):after{top:260px;left:48px}}@keyframes lds-roller{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}',""]);const l=i},5506:(e,t,a)=>{"use strict";a.d(t,{Z:()=>w});var r=a(8081),n=a.n(r),o=a(3645),i=a.n(o),l=a(1667),s=a.n(l),c=new URL(a(2318),a.b),d=new URL(a(6504),a.b),p=new URL(a(1739),a.b),m=new URL(a(7358),a.b),u=new URL(a(3965),a.b),h=new URL(a(8697),a.b),g=i()(n()),f=s()(c),x=s()(d),b=s()(p),v=s()(m),E=s()(u),y=s()(h);g.push([e.id,".homepageSection{position:relative;height:920px}.homepageSectionMain{position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,0);z-index:1}.homepageSectionContent{position:absolute;bottom:100px;left:0;width:100%;padding:0 20px}@media(min-width: 576px){.homepageSectionContent{max-width:920px;padding:0 50px}}@media(min-width: 992px){.homepageSectionContent{bottom:150px;padding:0 80px}}@media(min-width: 1440px){.homepageSectionContent{left:150px}}.backgroundImageWrapper{position:absolute;top:0;left:0;width:100%;height:100%;background-repeat:no-repeat;background-position:center;opacity:.5;z-index:0}.backgroundImageWrapper1{background-image:url("+f+")}@media(min-width: 768px){.backgroundImageWrapper1{background-image:url("+x+")}}.backgroundImageWrapper2{background-image:url("+b+")}@media(min-width: 768px){.backgroundImageWrapper2{background-image:url("+v+")}}.backgroundImageWrapper3{background-image:url("+E+")}@media(min-width: 768px){.backgroundImageWrapper3{background-image:url("+y+")}}",""]);const w=g},5210:(e,t,a)=>{"use strict";a.d(t,{Z:()=>m});var r=a(8081),n=a.n(r),o=a(3645),i=a.n(o),l=a(1667),s=a.n(l),c=new URL(a(4898),a.b),d=i()(n()),p=s()(c);d.push([e.id,":export{textPrimaryColor:#17202a;mainThemeColor:#43766c;mainThemeColorDark:#f8fae5;mainThemeColorLight:#b19470;mainThemeColorComplement:#76453b}.loginSection{position:relative;width:100%;height:100%;min-height:100vh}.loginBackgroundImageWrapper{position:absolute;top:0;left:0;width:100%;height:100%;background-repeat:no-repeat;background-position:center;opacity:.5;z-index:0;background-image:url("+p+")}.loginMarquee{position:absolute;top:10%;left:50%;transform:translate(-50%, -50%);width:80%;background-color:rgba(0,0,0,0);z-index:1}@media(min-width: 576px){.loginMarquee{top:15%}}.loginMarqueeItem{position:absolute;top:0;left:0;width:100%;animation:show 6s cubic-bezier(0.5, 0, 0.5, 1) infinite;transform-origin:top}.loginMarqueeItem1{animation-delay:-6s}.loginMarqueeItem2{animation-delay:-4s}.loginMarqueeItem3{animation-delay:-2s}@keyframes show{0%{transform:scale(1, 0)}17%{transform:scale(1, 1)}33%{transform:scale(1, 1)}34%{transform:scale(1, 0)}100%{transform:scale(1, 0)}}.loginSectionMain{position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);display:flex;flex-direction:column;justify-content:center;width:100%;background-color:rgba(0,0,0,0);z-index:1}@media(min-width: 576px){.loginSectionMain{top:45%}}.loginLogoWrapper{position:absolute;opacity:0;z-index:-9999}@media(min-width: 576px){.loginLogoWrapper{bottom:5%;left:50%;transform:translate(-50%, -50%);width:150px;height:150px;opacity:1;z-index:0}.loginLogoWrapper img{width:100%;height:100%;object-fit:contain}}.reCaptchaButton{position:absolute;opacity:0;z-index:-9999}",""]);const m=d},3188:(e,t,a)=>{"use strict";a.d(t,{Z:()=>l});var r=a(8081),n=a.n(r),o=a(3645),i=a.n(o)()(n());i.push([e.id,":export{textPrimaryColor:#17202a;mainThemeColor:#43766c;mainThemeColorDark:#f8fae5;mainThemeColorLight:#b19470;mainThemeColorComplement:#76453b}*{color:#17202a}body{background-color:#fefefe}main{width:100%;background-color:#fefefe}article{width:100%}section{width:100%}.pageSection{display:flex;flex-direction:column;align-items:center;width:100%;margin:0 auto 10px;padding:0 20px}@media(min-width: 576px){.pageSection{max-width:500px}}@media(min-width: 992px){.pageSection{max-width:920px;margin:0 auto 20px}}h1{margin:0 0 10px;font-size:30px;font-weight:600;text-align:center;color:#43766c}@media(min-width: 576px){h1{margin:0 0 20px;font-size:48px}}h2{margin:0 0 10px;font-size:24px;font-weight:600;text-align:center;color:#b19470}@media(min-width: 576px){h2{margin:0 0 20px;font-size:36px}}h3{margin:0 0 10px;font-size:20px;font-weight:600;text-align:center}@media(min-width: 576px){h3{margin:0 0 20px;font-size:24px}}p{margin:0 0 20px;font-size:16px;font-weight:600;line-height:20px}@media(min-width: 576px){p{margin:0 0 20px;font-size:20px;line-height:28px}}form{display:flex;flex-direction:column;width:100%;max-width:320px;margin:0 auto;padding:20px;border-radius:20px;box-shadow:rgba(0,0,0,.05) 0px 6px 24px 0px,rgba(0,0,0,.08) 0px 0px 0px 1px}@media(min-width: 576px){form{max-width:420px}}.formGroup{display:flex;flex-direction:column;margin:0 0 10px}.formControlGroup{display:flex;flex-direction:row;margin:0 0 10px}.formControlGroup div{width:auto;margin:0 5px 0 0;cursor:pointer;text-decoration:underline}label{margin:0 0 5px}@media(min-width: 576px){label{margin:0 0 10px}}input{width:100%;padding:5px 10px;font-size:16px;border:1px solid #ddd;border-radius:4px}ol li{list-style-type:decimal}ul li{list-style-type:disc}li{font-size:16px;font-weight:600;line-height:20px}@media(min-width: 576px){li{font-size:20px;line-height:28px}}",""]);const l=i},9214:(e,t,a)=>{"use strict";var r=a(3379),n=a.n(r),o=a(7795),i=a.n(o),l=a(569),s=a.n(l),c=a(3565),d=a.n(c),p=a(9216),m=a.n(p),u=a(4589),h=a.n(u),g=a(5506),f={};f.styleTagTransform=h(),f.setAttributes=d(),f.insert=s().bind(null,"head"),f.domAPI=i(),f.insertStyleElement=m(),n()(g.Z,f),g.Z&&g.Z.locals&&g.Z.locals},6504:(e,t,a)=>{"use strict";e.exports=a.p+"1e2ed684390963e246f9.jpg"},2318:(e,t,a)=>{"use strict";e.exports=a.p+"63e81f5718b5f364da72.jpg"},7358:(e,t,a)=>{"use strict";e.exports=a.p+"b8d3e79f4c53ee9c92b4.jpg"},1739:(e,t,a)=>{"use strict";e.exports=a.p+"dc0ce6b501b7b59c14f0.jpg"},4898:(e,t,a)=>{"use strict";e.exports=a.p+"b2796cc20b91d009f451.jpg"},8697:(e,t,a)=>{"use strict";e.exports=a.p+"46e4a7762868000dde35.jpg"},3965:(e,t,a)=>{"use strict";e.exports=a.p+"322775852458690efab9.jpg"},2480:()=>{}},o={};function i(e){var t=o[e];if(void 0!==t)return t.exports;var a=o[e]={id:e,exports:{}};return n[e].call(a.exports,a,a.exports,i),a.exports}i.m=n,e=[],i.O=(t,a,r,n)=>{if(!a){var o=1/0;for(d=0;d<e.length;d++){a=e[d][0],r=e[d][1],n=e[d][2];for(var l=!0,s=0;s<a.length;s++)(!1&n||o>=n)&&Object.keys(i.O).every((e=>i.O[e](a[s])))?a.splice(s--,1):(l=!1,n<o&&(o=n));if(l){e.splice(d--,1);var c=r();void 0!==c&&(t=c)}}return t}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[a,r,n]},i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},a=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,i.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var n=Object.create(null);i.r(n);var o={};t=t||[null,a({}),a([]),a(a)];for(var l=2&r&&e;"object"==typeof l&&!~t.indexOf(l);l=a(l))Object.getOwnPropertyNames(l).forEach((t=>o[t]=()=>e[t]));return o.default=()=>e,i.d(n,o),n},i.d=(e,t)=>{for(var a in t)i.o(t,a)&&!i.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((t,a)=>(i.f[a](e,t),t)),[])),i.u=e=>(913===e?"default":e)+".js",i.miniCssF=e=>e+".main.css",i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r={},i.l=(e,t,a,n)=>{if(r[e])r[e].push(t);else{var o,l;if(void 0!==a)for(var s=document.getElementsByTagName("script"),c=0;c<s.length;c++){var d=s[c];if(d.getAttribute("src")==e){o=d;break}}o||(l=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,i.nc&&o.setAttribute("nonce",i.nc),o.src=e),r[e]=[t];var p=(t,a)=>{o.onerror=o.onload=null,clearTimeout(m);var n=r[e];if(delete r[e],o.parentNode&&o.parentNode.removeChild(o),n&&n.forEach((e=>e(a))),t)return t(a)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=p.bind(null,o.onerror),o.onload=p.bind(null,o.onload),l&&document.head.appendChild(o)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.p="/try_render.com_front/",(()=>{if("undefined"!=typeof document){var e={179:0};i.f.miniCss=(t,a)=>{e[t]?a.push(e[t]):0!==e[t]&&{197:1}[t]&&a.push(e[t]=(e=>new Promise(((t,a)=>{var r=i.miniCssF(e),n=i.p+r;if(((e,t)=>{for(var a=document.getElementsByTagName("link"),r=0;r<a.length;r++){var n=(i=a[r]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(n===e||n===t))return i}var o=document.getElementsByTagName("style");for(r=0;r<o.length;r++){var i;if((n=(i=o[r]).getAttribute("data-href"))===e||n===t)return i}})(r,n))return t();((e,t,a,r,n)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=a=>{if(o.onerror=o.onload=null,"load"===a.type)r();else{var i=a&&("load"===a.type?"missing":a.type),l=a&&a.target&&a.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=l,o.parentNode.removeChild(o),n(s)}},o.href=t,document.head.appendChild(o)})(e,n,0,t,a)})))(t).then((()=>{e[t]=0}),(a=>{throw delete e[t],a})))}}})(),(()=>{i.b=document.baseURI||self.location.href;var e={179:0};i.f.j=(t,a)=>{var r=i.o(e,t)?e[t]:void 0;if(0!==r)if(r)a.push(r[2]);else{var n=new Promise(((a,n)=>r=e[t]=[a,n]));a.push(r[2]=n);var o=i.p+i.u(t),l=new Error;i.l(o,(a=>{if(i.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var n=a&&("load"===a.type?"missing":a.type),o=a&&a.target&&a.target.src;l.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",l.name="ChunkLoadError",l.type=n,l.request=o,r[1](l)}}),"chunk-"+t,t)}},i.O.j=t=>0===e[t];var t=(t,a)=>{var r,n,o=a[0],l=a[1],s=a[2],c=0;if(o.some((t=>0!==e[t]))){for(r in l)i.o(l,r)&&(i.m[r]=l[r]);if(s)var d=s(i)}for(t&&t(a);c<o.length;c++)n=o[c],i.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return i.O(d)},a=self.webpackChunk=self.webpackChunk||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})(),i.nc=void 0;var l=i.O(void 0,[216],(()=>i(6122)));l=i.O(l)})();