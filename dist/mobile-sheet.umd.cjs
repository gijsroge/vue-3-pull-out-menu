(function(e,v){typeof exports=="object"&&typeof module<"u"?module.exports=v(require("vue")):typeof define=="function"&&define.amd?define(["vue"],v):(e=typeof globalThis<"u"?globalThis:e||self,e.MobileSheet=v(e.Vue))})(this,function(e){"use strict";const v=(t,s,d)=>Math.min(Math.max(t,s),d),b=(t,s,d,p)=>{let a=t;if(t>d){const l=a-p;a-=l*.6}return t<s&&(a-=a*.6),a},M=(t,s)=>{for(;t.parentNode;)return t=t.parentNode,t.hasAttribute(s)?t:null},P=({progress:t,duration:s})=>{const d=e.ref(t.value);e.watch(t,(a,l)=>p(l,a));const p=(a,l)=>{const g=performance.now(),m=i=>i*(2-i),c=()=>{const i=performance.now()-g,o=v(i/s,0,1);d.value=m(o)*(l-a)+a,o<1&&requestAnimationFrame(c)};requestAnimationFrame(c)};return{animatedProgress:d}},S=`<svg width="70" height="3" viewBox="0 0 70 3" xmlns="http://www.w3.org/2000/svg">
<rect width="70" height="3" rx="3" fill="currentColor"/>
</svg>
`,A=["innerHTML"],H={inheritAttrs:!1};return e.defineComponent({...H,__name:"mobile-card",props:{rootClass:{type:String,default:""},maxDistance:{type:Number,default:null},isOpen:{type:Boolean,default:!1},dragEntireCard:{type:Boolean,default:!0},autoClose:{type:Boolean,default:!0}},emits:["progress","open","close","drag","start-drag","stop-drag"],setup(t,{emit:s}){const d=t,p=typeof document<"u",a=e.ref(50),l=e.ref(null),g=e.ref(null),m=e.ref(!1),c=e.ref(!1),i=e.ref(0),o=e.ref(0),u=e.ref(d.maxDistance),w=50,y=e.ref(!0),Y=e.computed(()=>v(o.value/u.value,0,1));e.watch(o,()=>{m.value||(c.value=o.value>w)});const{animatedProgress:C}=P({progress:Y,duration:250});e.watch(C,()=>{s("progress",C.value)}),e.watch(c,()=>{c.value?s("close"):s("open"),c.value?(i.value=u.value,document.documentElement.style.setProperty("overflow","hidden")):(i.value=0,document.documentElement.style.removeProperty("overflow"))}),e.onMounted(()=>{window.addEventListener("mouseup",()=>T(),{passive:!0}),window.addEventListener("mousemove",x,{passive:!0})}),e.onUnmounted(()=>{window.removeEventListener("click",()=>{}),window.removeEventListener("mousemove",()=>{}),window.removeEventListener("mouseup",()=>{})});const h=n=>{if(n.target instanceof Element&&M(n.target,"data-ignore-drag"))return;s("start-drag");const r=n instanceof TouchEvent?n.touches[0].clientY:n.clientY;i.value=r+(c.value?u.value:0),m.value=!0},T=()=>{m.value&&(c.value?o.value<u.value-w?o.value=0:o.value=u.value:o.value>=w?o.value=u.value:o.value=0,i.value=o.value,m.value=!1,s("stop-drag"))},x=n=>{if(!m.value)return;s("drag");const r=n instanceof TouchEvent?n.touches[0].clientY:n.clientY;o.value=b(i.value-r,0,u.value,u.value)},B=e.computed(()=>{const n={position:"fixed",willChange:"transform",left:0,right:0,transition:m.value||y.value?"none":"transform 0.2s ease-out"};return n.top="100%",n.transform=`translateY(${(o.value+a.value)*-1}px)`,n}),E=p?new ResizeObserver(n=>{if(!l.value)return;const{blockSize:r}=n[0].borderBoxSize[0],f=window.innerHeight;g.value&&(a.value=g.value.clientHeight),u.value=v(r,0,f)-a.value,y.value&&d.isOpen&&(o.value=u.value)}):null;return e.watchEffect(()=>l.value?E==null?void 0:E.observe(l.value):null),e.onMounted(()=>{setTimeout(()=>y.value=!1,1)}),(n,r)=>(e.openBlock(),e.createElementBlock("div",{ref_key:"cardRef",ref:l,style:e.normalizeStyle(e.unref(B)),class:e.normalizeClass([t.rootClass]),"data-modal-sheet":""},[e.createElementVNode("div",e.mergeProps(n.$attrs,{style:{marginTop:"0px !important",touchAction:"none"},onTouchend:r[2]||(r[2]=()=>T()),onTouchmovePassive:x,onMousedown:r[3]||(r[3]=f=>t.dragEntireCard?h(f):null),onTouchstartPassive:r[4]||(r[4]=f=>t.dragEntireCard?h(f):null)}),[e.createElementVNode("div",{ref_key:"handleRef",ref:g,onMousedown:r[0]||(r[0]=f=>t.dragEntireCard?null:h(f)),onTouchstartPassive:r[1]||(r[1]=f=>t.dragEntireCard?null:h(f))},[e.renderSlot(n.$slots,"handle",{},()=>[e.createElementVNode("div",{style:{userSelect:"none",cursor:"move",height:"50px",position:"relative",width:"100%",color:"white",display:"flex",alignItems:"center",justifyContent:"center"},innerHTML:e.unref(S)},null,8,A)])],544),e.renderSlot(n.$slots,"default")],16)],6))}})});
