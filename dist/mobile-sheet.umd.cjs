(function(e,m){typeof exports=="object"&&typeof module<"u"?module.exports=m(require("vue")):typeof define=="function"&&define.amd?define(["vue"],m):(e=typeof globalThis<"u"?globalThis:e||self,e.MobileSheet=m(e.Vue))})(this,function(e){"use strict";const m=(t,l,u)=>Math.min(Math.max(t,l),u),b=(t,l,u,g)=>{let r=t;if(t>u){const i=r-g;r-=i*.6}return t<l&&(r-=r*.6),r},P=(t,l)=>{for(;t.parentNode;)return t=t.parentNode,t.hasAttribute(l)?t:null},S=({progress:t,duration:l})=>{const u=e.ref(t.value);e.watch(t,(r,i)=>g(i,r));const g=(r,i)=>{const f=performance.now(),v=o=>o*(2-o),d=()=>{const o=performance.now()-f,a=m(o/l,0,1);u.value=v(a)*(i-r)+r,a<1&&requestAnimationFrame(d)};requestAnimationFrame(d)};return{animatedProgress:u}},A=`<svg width="70" height="3" viewBox="0 0 70 3" xmlns="http://www.w3.org/2000/svg">
<rect width="70" height="3" rx="3" fill="currentColor"/>
</svg>
`,H=["innerHTML"],Y={inheritAttrs:!1};return e.defineComponent({...Y,__name:"mobile-card",props:{rootClass:{type:String,default:""},maxDistance:{type:Number,default:null},isOpen:{type:Boolean,default:!1},dragEntireCard:{type:Boolean,default:!0},autoClose:{type:Boolean,default:!0}},emits:["progress","open","close","drag","start-drag","stop-drag"],setup(t,{emit:l}){const u=t,g=typeof document<"u",r=e.ref(null),i=e.ref(null),f=e.ref(!1),v=e.ref(!1),d=e.ref(0),o=e.ref(0),a=e.ref(u.maxDistance),h=50,w=e.ref(50),y=e.ref(!0),E=e.ref(0),B=e.computed(()=>m(o.value/a.value,0,1));e.watch(o,()=>{f.value||(v.value=o.value>h)});const{animatedProgress:C}=S({progress:B,duration:250});e.watch(C,()=>{l("progress",C.value)}),e.watch(v,()=>{v.value?l("close"):l("open"),v.value?(d.value=a.value,document.documentElement.style.setProperty("overflow","hidden")):(d.value=0,document.documentElement.style.removeProperty("overflow"))}),e.onMounted(()=>{window.addEventListener("mouseup",()=>T(),{passive:!0}),window.addEventListener("mousemove",M,{passive:!0})}),e.onUnmounted(()=>{window.removeEventListener("click",()=>{}),window.removeEventListener("mousemove",()=>{}),window.removeEventListener("mouseup",()=>{})});const p=n=>{if(n.target instanceof Element&&P(n.target,"data-ignore-drag"))return;E.value=0;const s=n instanceof TouchEvent?n.touches[0].clientY:n.clientY;d.value=s+(v.value?a.value:0),f.value=!0,l("start-drag"),console.log("start drag")},T=()=>{f.value&&(v.value?o.value<a.value-h?o.value=0:o.value=a.value:o.value>=h?o.value=a.value:o.value=0,d.value=o.value,f.value=!1,l("stop-drag"),console.log("stop drag"))},M=n=>{if(!f.value)return;l("drag");const s=n instanceof TouchEvent?n.touches[0].clientY:n.clientY;E.value=d.value-s,console.log("pixelsMoved",E.value),o.value=b(d.value-s,0,a.value,a.value),console.log("while drag")},L=e.computed(()=>{const n={position:"fixed",willChange:"transform",left:0,right:0,transition:f.value||y.value?"none":"transform 0.2s ease-out"};return n.top="100%",n.transform=`translateY(${(o.value+w.value)*-1}px)`,n}),x=g?new ResizeObserver(n=>{if(!r.value)return;const{blockSize:s}=n[0].borderBoxSize[0],c=window.innerHeight;i.value&&(w.value=i.value.clientHeight),a.value=m(s,0,c)-w.value,y.value&&u.isOpen&&(o.value=a.value)}):null;return e.watchEffect(()=>r.value?x==null?void 0:x.observe(r.value):null),e.onMounted(()=>{setTimeout(()=>y.value=!1,1)}),(n,s)=>(e.openBlock(),e.createElementBlock("div",{ref_key:"cardRef",ref:r,style:e.normalizeStyle(e.unref(L)),class:e.normalizeClass([t.rootClass]),"data-modal-sheet":""},[e.createElementVNode("div",e.mergeProps(n.$attrs,{style:{marginTop:"0px !important",touchAction:"none"},onTouchend:s[2]||(s[2]=()=>T()),onTouchmovePassive:M,onMousedown:s[3]||(s[3]=c=>t.dragEntireCard?p(c):null),onTouchstartPassive:s[4]||(s[4]=c=>t.dragEntireCard?p(c):null)}),[e.createElementVNode("div",{ref_key:"handleRef",ref:i,onMousedown:s[0]||(s[0]=c=>t.dragEntireCard?null:p(c)),onTouchstartPassive:s[1]||(s[1]=c=>t.dragEntireCard?null:p(c))},[e.renderSlot(n.$slots,"handle",{},()=>[e.createElementVNode("div",{style:{userSelect:"none",cursor:"move",height:"50px",position:"relative",width:"100%",color:"white",display:"flex",alignItems:"center",justifyContent:"center"},innerHTML:e.unref(A)},null,8,H)])],544),e.renderSlot(n.$slots,"default")],16)],6))}})});
