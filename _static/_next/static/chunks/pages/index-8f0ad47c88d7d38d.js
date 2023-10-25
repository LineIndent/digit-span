(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{75557:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(32388)}])},32388:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return en}});var t=r(85893),s=r(67294),i=r(11163),l=r(71556),a=r(17175);r(35202),r(8594);var o=r(12498),d=r(91669),c=r(54641),x=r(82504),h=r(35059),u=(0,x.m)("div");u.displayName="Box";var m=(0,h.G)(function(e,n){let{size:r,centerContent:s=!0,...i}=e;return(0,t.jsx)(u,{ref:n,boxSize:r,__css:{...s?{display:"flex",alignItems:"center",justifyContent:"center"}:{},flexShrink:0,flexGrow:0},...i})});m.displayName="Square",(0,h.G)(function(e,n){let{size:r,...s}=e;return(0,t.jsx)(m,{size:r,ref:n,borderRadius:"9999px",...s})}).displayName="Circle";var f=r(95034),p=r(29222),g=r(84416),j=r(14418),b=r(61909),v=r(53948),y=r(44416),k=r(20623),_=r(9564),C=r(5197),S=r(33838),I=r(62489),R=r(17889),z=r(97822),N=r(55227),w=r(81103),F=r(54662),L=r(33179),A=r(25432),[E,q]=(0,N.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),[H,G]=(0,N.k)({strict:!1,name:"FormControlContext"});(0,h.G)(function(e,n){let r=(0,F.jC)("Form",e),i=(0,L.Lr)(e),{getRootProps:l,htmlProps:a,...o}=function(e){let{id:n,isRequired:r,isInvalid:t,isDisabled:i,isReadOnly:l,...a}=e,o=(0,s.useId)(),d=n||`field-${o}`,c=`${d}-label`,x=`${d}-feedback`,h=`${d}-helptext`,[u,m]=(0,s.useState)(!1),[f,p]=(0,s.useState)(!1),[g,j]=(0,s.useState)(!1),b=(0,s.useCallback)((e={},n=null)=>({id:h,...e,ref:(0,w.lq)(n,e=>{e&&p(!0)})}),[h]),v=(0,s.useCallback)((e={},n=null)=>({...e,ref:n,"data-focus":(0,A.PB)(g),"data-disabled":(0,A.PB)(i),"data-invalid":(0,A.PB)(t),"data-readonly":(0,A.PB)(l),id:void 0!==e.id?e.id:c,htmlFor:void 0!==e.htmlFor?e.htmlFor:d}),[d,i,g,t,l,c]),y=(0,s.useCallback)((e={},n=null)=>({id:x,...e,ref:(0,w.lq)(n,e=>{e&&m(!0)}),"aria-live":"polite"}),[x]),k=(0,s.useCallback)((e={},n=null)=>({...e,...a,ref:n,role:"group"}),[a]),_=(0,s.useCallback)((e={},n=null)=>({...e,ref:n,role:"presentation","aria-hidden":!0,children:e.children||"*"}),[]);return{isRequired:!!r,isInvalid:!!t,isReadOnly:!!l,isDisabled:!!i,isFocused:!!g,onFocus:()=>j(!0),onBlur:()=>j(!1),hasFeedbackText:u,setHasFeedbackText:m,hasHelpText:f,setHasHelpText:p,id:d,labelId:c,feedbackId:x,helpTextId:h,htmlProps:a,getHelpTextProps:b,getErrorMessageProps:y,getRootProps:k,getLabelProps:v,getRequiredIndicatorProps:_}}(i),d=(0,A.cx)("chakra-form-control",e.className);return(0,t.jsx)(H,{value:o,children:(0,t.jsx)(E,{value:r,children:(0,t.jsx)(x.m.div,{...l({},n),className:d,__css:r.container})})})}).displayName="FormControl",(0,h.G)(function(e,n){let r=G(),s=q(),i=(0,A.cx)("chakra-form__helper-text",e.className);return(0,t.jsx)(x.m.div,{...null==r?void 0:r.getHelpTextProps(e,n),__css:s.helperText,className:i})}).displayName="FormHelperText";var P=(0,h.G)(function(e,n){let{htmlSize:r,...s}=e,i=(0,F.jC)("Input",s),l=(0,L.Lr)(s),a=function(e){let{isDisabled:n,isInvalid:r,isReadOnly:t,isRequired:s,...i}=function(e){var n,r,t;let s=G(),{id:i,disabled:l,readOnly:a,required:o,isRequired:d,isInvalid:c,isReadOnly:x,isDisabled:h,onFocus:u,onBlur:m,...f}=e,p=e["aria-describedby"]?[e["aria-describedby"]]:[];return(null==s?void 0:s.hasFeedbackText)&&(null==s?void 0:s.isInvalid)&&p.push(s.feedbackId),(null==s?void 0:s.hasHelpText)&&p.push(s.helpTextId),{...f,"aria-describedby":p.join(" ")||void 0,id:null!=i?i:null==s?void 0:s.id,isDisabled:null!=(n=null!=l?l:h)?n:null==s?void 0:s.isDisabled,isReadOnly:null!=(r=null!=a?a:x)?r:null==s?void 0:s.isReadOnly,isRequired:null!=(t=null!=o?o:d)?t:null==s?void 0:s.isRequired,isInvalid:null!=c?c:null==s?void 0:s.isInvalid,onFocus:(0,A.v0)(null==s?void 0:s.onFocus,u),onBlur:(0,A.v0)(null==s?void 0:s.onBlur,m)}}(e);return{...i,disabled:n,readOnly:t,required:s,"aria-invalid":(0,A.Qm)(r),"aria-required":(0,A.Qm)(s),"aria-readonly":(0,A.Qm)(t)}}(l),o=(0,A.cx)("chakra-input",e.className);return(0,t.jsx)(x.m.input,{size:r,...a,__css:i.field,ref:n,className:o})});P.displayName="Input",P.id="Input";var T=(0,r(40078).I)({displayName:"CloseIcon",d:"M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"}),B=r(53014),X=r(36484),U=r(28728),W=r(34231),D=r(4298),O=r.n(D),Q=r(25486),Z=r(30399),$=r(14769),M=r(97404),J=r(34410);r(41664);var K=r(52677),V=r(70055),Y=r(9008),ee=r.n(Y);function en(){(0,s.useContext)(a.sA);let e=(0,i.useRouter)(),{colorMode:n,toggleColorMode:r}=(0,o.If)(),x=(0,s.useRef)(),[h,m]=(0,s.useContext)(a.DR);(0,s.useEffect)(()=>{x.current&&x.current.focus()}),(0,s.useEffect)(()=>{let n=()=>h([(0,l.E)("state.hydrate",{})]);return e.events.on("routeChangeComplete",n),()=>{e.events.off("routeChangeComplete",n)}},[e]);let N=(0,s.useRef)(null);l.xL.ref_RxAnnouncement=N;let w=(0,s.useRef)(null);l.xL.ref_result=w;let F=(0,s.useRef)(null);l.xL.ref_userSequence=F;let L=(0,s.useRef)(null);l.xL.ref_digit=L;let A=(0,s.useRef)(null);l.xL.ref_close=A;let E=(0,s.useRef)(null);l.xL.ref_level=E;let q=(0,s.useRef)(null);l.xL.ref_start=q;let H=(0,s.useRef)(null);l.xL.ref_check=H;let G=(0,s.useRef)(null);return l.xL.ref_lives=G,(0,t.jsx)(s.Fragment,{children:(0,t.jsxs)(s.Fragment,{children:[(0,t.jsxs)(d.g,{spacing:"0",sx:{width:"100%",height:"100vh"},children:[(0,t.jsxs)(c.U,{id:"RxAnnouncement",ref:N,sx:{width:"100%",height:"45px",bg:"#18181d",padding:["0rem 1rem","0rem 1rem","0rem 0.5rem","0rem 4rem","0rem 10rem"],transition:"all 550ms ease"},children:[(0,t.jsx)(u,{dangerouslySetInnerHTML:{__html:" <div style='color: #b8b8ba;'>Built with <span><strong style='color: #fff;'>Reflex</strong></span>. For more info visit<span style='vertical-align: middle;'> <a href='https://github.com/reflex-dev/reflex'><img src='/github.png' style='width: 21px; height: 21px; display: inline-block; vertical-align: middle; filter: brightness(0) invert(1);'/></a></span> <a href='https://github.com/reflex-dev/reflex'> <span style='color: #fff;'><strong></strong></span></a></div>"}}),(0,t.jsx)(f.L,{}),(0,t.jsxs)(p.z,{colorScheme:"None",id:"close",onClick:e=>{hide(e)},ref:A,children:[(0,t.jsx)(T,{sx:{color:"white",transform:"Scale(0.8)"}}),(0,t.jsx)(O(),{strategy:"afterInteractive",children:'\nlocalStorage.setItem("headerHidden", "true");\nvar close = document.getElementById("close");\n\nfunction hide() {\n    var RxAnnouncement = document.getElementById("RxAnnouncement");\n    \n    if (localStorage.getItem("headerHidden") === "true") {\n        RxAnnouncement.style.display = "none";\n        localStorage.setItem("headerHidden", "false");\n    }\n\n}\n\nclose.addEventListener("click", hide);\n                    '})]})]}),(0,t.jsxs)(c.U,{sx:{width:"100%",height:"7vh",boxShadow:"0px 4px 8px 0px rgba(0, 0, 0, 0.25)",justifyContent:"center",padding:["0 1rem","0 1rem","0 1rem","0 4rem","0 10rem"],transition:"all 400ms ease",_dark:{bg:"#141518"},_light:{bg:"#ffffff"}},children:[(0,t.jsx)(g.E,{htmlHeight:"24px",htmlWidth:"24px",src:"/brain.png",sx:{"@keyframes brain":{"0%":{transform:"scale(1.1)"},"100%":{transform:"scale(0.8)"}},animation:"brain 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) infinite alternate-reverse both",_dark:{filter:"brightness(0) invert(1)"}}}),(0,t.jsx)(j.X,{size:"md",sx:{fontWeight:"400"},children:"Digit Span - Memory Test"}),(0,t.jsx)(f.L,{}),(0,t.jsxs)(b.J,{children:[(0,t.jsx)(s.Fragment,{children:(0,l.oA)("light"===n)?(0,t.jsx)(s.Fragment,{children:(0,t.jsx)(v.x,{children:(0,t.jsx)(B.h,{sx:{cursor:"pointer"}})})}):(0,t.jsx)(s.Fragment,{children:(0,t.jsx)(v.x,{children:(0,t.jsx)(X.s,{sx:{cursor:"pointer"}})})})}),(0,t.jsxs)(y.y,{children:[(0,t.jsx)(k.b,{sx:{boxShadow:"0px 10px 20px 0px rgba(0, 0, 0, 0.35)",border:"none"},children:(0,t.jsx)(Q.D,{components:{h1:e=>{let{node:n,...r}=e;return(0,t.jsx)(j.X,{...r,as:"h1",size:"2xl"})},h2:e=>{let{node:n,...r}=e;return(0,t.jsx)(j.X,{...r,as:"h2",size:"xl"})},h3:e=>{let{node:n,...r}=e;return(0,t.jsx)(j.X,{...r,as:"h3",size:"lg"})},h4:e=>{let{node:n,...r}=e;return(0,t.jsx)(j.X,{...r,as:"h4",size:"md"})},h5:e=>{let{node:n,...r}=e;return(0,t.jsx)(j.X,{...r,as:"h5",size:"sm"})},h6:e=>{let{node:n,...r}=e;return(0,t.jsx)(j.X,{...r,as:"h6",size:"xs"})},p:e=>{let{node:n,...r}=e;return(0,t.jsx)(_.x,{...r})},ul:e=>{let{node:n,...r}=e;return(0,t.jsx)(C.QI,{...r})},ol:e=>{let{node:n,...r}=e;return(0,t.jsx)(C.GS,{...r})},li:e=>{let{node:n,...r}=e;return(0,t.jsx)(C.HC,{...r})},a:e=>{let{node:n,...r}=e;return(0,t.jsx)(S.r,{...r})},code:e=>{let{node:n,inline:r,className:s,children:i,...l}=e,a=(s||"").match(RegExp("language-(?<lang>.*)"));return r?(0,t.jsxs)(I.E,{...l,children:["             ",i,"           "]}):(0,t.jsx)(K.Z,{children:String(i).replace(/ $/,""),language:a?a[1]:"",theme:V.R,...l})}},customStyles:{h1:{as:"h1",size:"2xl"},h2:{as:"h2",size:"xl"},h3:{as:"h3",size:"lg"},h4:{as:"h4",size:"md"},h5:{as:"h5",size:"sm"},h6:{as:"h6",size:"xs"}},rehypePlugins:[M.Z,J.Z],remarkPlugins:[Z.Z,$.Z],children:"**Instructions**:\n\n1. To begin, press the `start` button to generate a sequence of digits.\n\n2. Once the sequence is generated, enter the numbers inside the input field.\n\n3. Press the `check` button to see if your input matches the sequence. \n\n</br>\nIf your input is incorrect, you lose a life and can re-try. There is a maximum of 3 lives.\n\nIf your input matches the sequence, you advance to the next level. \n\n</br>\n\nWith each level the number of digits generated is `increased by 1`.\n\n</br>\n\n**Good luck, have fun!**\n\n"})}),(0,t.jsx)(R.u,{})]})]}),(0,t.jsx)(p.z,{colorScheme:"None",onClick:r,sx:{_dark:{color:"white"},_light:{color:"black"}},children:(0,t.jsx)(s.Fragment,{children:(0,l.oA)("light"===n)?(0,t.jsx)(s.Fragment,{children:(0,t.jsx)(U.N,{})}):(0,t.jsx)(s.Fragment,{children:(0,t.jsx)(W.k,{})})})})]}),(0,t.jsxs)(d.g,{sx:{width:"100%",height:"inherit"},children:[(0,t.jsx)(O(),{src:"/numbers.js",strategy:"afterInteractive"}),(0,t.jsx)(z.i,{sx:{height:"5em",borderColor:"transparent"}}),(0,t.jsx)(c.U,{sx:{height:"180px",width:"180px",justifyContent:"center",alignItems:"center",borderRadius:"10px",boxShadow:"0px 15px 30px 0px rgba(0, 0, 0, 0.5)",_dark:{bg:"#17181d"}},children:(0,t.jsx)(j.X,{id:"digit",ref:L,sx:{fontSize:"105px",textAlign:"center"}})}),(0,t.jsx)(z.i,{sx:{height:"3.5em",borderColor:"transparent"}}),(0,t.jsxs)(c.U,{children:[(0,t.jsx)(p.z,{colorScheme:"None",id:"start",onClick:e=>{startNewLevel(e)},ref:q,sx:{padding:"0"},children:(0,t.jsx)(g.E,{htmlHeight:"32px",htmlWidth:"32px",src:"/play.png",sx:{_dark:{filter:"brightness(0) invert(1)"}}})}),(0,t.jsx)(p.z,{colorScheme:"None",id:"check",onClick:e=>{checkUserSequence(e)},ref:H,sx:{padding:"0"},children:(0,t.jsx)(g.E,{htmlHeight:"32px",htmlWidth:"32px",src:"/check.png",sx:{_dark:{filter:"brightness(0) invert(1)"}}})})]}),(0,t.jsx)(z.i,{sx:{height:"0.5em",borderColor:"transparent"}}),(0,t.jsx)(c.U,{alignItems:"center",justifyContent:"center",sx:{width:"100%",height:"70px",padding:["0 1rem","0 1rem","0 3rem","0 15rem","0 30rem"]},children:(0,t.jsx)(P,{id:"userSequence",ref:F,sx:{height:"70px",fontSize:"50px",textAlign:"center",transition:"all 550ms ease",letterSpacing:"0.25rem"},type:"text"})}),(0,t.jsx)(z.i,{sx:{height:"0.5em",borderColor:"transparent"}}),(0,t.jsxs)(c.U,{spacing:"4rem",children:[(0,t.jsxs)(_.x,{sx:{fontSize:"19px"},children:["Lives: ",(0,t.jsx)(_.x,{as:"span",id:"lives",ref:G,children:"3"})]}),(0,t.jsxs)(_.x,{sx:{fontSize:"19px"},children:["Level: ",(0,t.jsx)(_.x,{as:"span",id:"level",ref:E,children:"1"})]})]}),(0,t.jsx)(_.x,{id:"result",ref:w,sx:{textAlign:"center",padding:"1rem 1rem"}}),(0,t.jsx)(f.L,{})]}),(0,t.jsxs)(c.U,{sx:{width:"100%",height:"50px",padding:["0 1rem","0 1rem","0 1rem","0 4rem","0 10rem"]},children:[(0,t.jsx)(_.x,{sx:{fontSize:["13px","14px","14px","14px","14px"],transition:"all 550ms ease"},children:"Copyright \xa9 2023 S. Ahmad P. Hakimi"}),(0,t.jsx)(f.L,{}),(0,t.jsxs)(p.z,{colorScheme:"None",onClick:e=>{goGame(e)},sx:{_dark:{color:"white"},_light:{color:"black"},padding:"0 0.35rem",fontWeight:"None"},children:[(0,t.jsx)(O(),{src:"/links.js",strategy:"afterInteractive"}),"Game"]}),(0,t.jsxs)(p.z,{colorScheme:"None",onClick:e=>{goFAQ(e)},sx:{_dark:{color:"white"},_light:{color:"black"},padding:"0 0.35rem",fontWeight:"None"},children:[(0,t.jsx)(O(),{src:"/links.js",strategy:"afterInteractive"}),"FAQ"]}),(0,t.jsxs)(p.z,{colorScheme:"None",onClick:e=>{goGitHub(e)},sx:{_dark:{color:"white"},_light:{color:"black"},padding:"0 0.35rem",fontWeight:"None"},children:[(0,t.jsx)(O(),{src:"/links.js",strategy:"afterInteractive"}),"GitHub"]})]})]}),(0,t.jsxs)(ee(),{children:[(0,t.jsx)("title",{children:"Digit Span Game"}),(0,t.jsx)("meta",{content:"A Reflex app.",name:"description"}),(0,t.jsx)("meta",{content:"favicon.ico",property:"og:image"})]})]})})}}},function(e){e.O(0,[265,37,55,774,888,179],function(){return e(e.s=75557)}),_N_E=e.O()}]);