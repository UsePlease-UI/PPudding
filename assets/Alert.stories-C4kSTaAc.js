import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as u}from"./iframe-xSyj_TgM.js";import{j as n}from"./format-FJJUaZs2.js";import{F as w}from"./XMarkIcon-C7y_r2KJ.js";import{s as v}from"./common-B8FjgEV9.js";const x=(a="default")=>{switch(a){case"error":return n("bg-[#ff2f2f] text-white");case"info":return n("bg-[#3b82f6] text-white");case"warning":return n("bg-[#eab308] text-black");case"success":return n("bg-[#225cce] text-white");default:return n("bg-black text-white")}};function m({icon:a,message:c,onClose:t,options:e}){const{canDismiss:i,delay:r,variant:f}=u.useMemo(()=>({canDismiss:e==null?void 0:e.canDismiss,delay:(e==null?void 0:e.delay)||4.5,variant:(e==null?void 0:e.variant)||"default"}),[e]),g=u.useMemo(()=>{let l=4.5;return r&&(l=r/1e3-.5),l},[r]);return u.useEffect(()=>{const l=setTimeout(t,r||5e3);return()=>clearTimeout(l)},[t,r]),s.jsxs("div",{"aria-live":"assertive",style:{animationDelay:r?`${g}s`:"4.5s"},"aria-atomic":"true",role:"alert",className:n("flex min-h-12 w-max animate-fadeInOut items-center justify-between whitespace-pre-wrap break-all rounded-xl px-3 py-2.25",x(f)),children:[s.jsx("span",{className:"block pr-2.5 text-16 font-medium leading-20 text-inherit",children:c}),(i===void 0||i===!0)&&s.jsxs("div",{className:"flex items-center",children:[s.jsx("div",{className:n("mx-5 h-3 w-px",(e==null?void 0:e.variant)==="warning"?"bg-black":"bg-white")}),s.jsx("button",{"aria-label":"알럿 닫기",type:"button",onClick:l=>{l.currentTarget.blur(),t()},className:n("rounded-full bg-transparent text-inherit",(e==null?void 0:e.variant)==="warning"&&"hover:border-black active:border-black"),children:a?u.cloneElement(a,{className:n("!block h-4.5 w-4.5 stroke-2 text-inherit")}):s.jsx(w,{className:"!block size-4.5 stroke-2 text-inherit"})})]})]})}m.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{message:{required:!0,tsType:{name:"string"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""},options:{required:!1,tsType:{name:"AlertOptionsType"},description:""}}};const{expect:o,spyOn:h,userEvent:k,within:T}=__STORYBOOK_MODULE_TEST__,R={args:{canDismiss:!0,delay:Number.MAX_SAFE_INTEGER,message:"로그인되었습니다.",onClose:()=>console.log("Closed!"),variant:"default"},argTypes:{canDismiss:{control:"boolean",description:"if true, component can be programmatically closed",table:{category:"optional"}},delay:{control:"number",description:"duration of display",table:{category:"optional"}},icon:{table:{disable:!0}},message:{control:"text",description:"content of the component",table:{category:"required"}},onClose:{table:{disable:!0}},options:{table:{disable:!0}},variant:{control:{type:"inline-radio"},description:"alert variant",options:["default","success","error","info","warning"],table:{category:"optional"}}},component:m,parameters:{layout:"centered"},render:function({canDismiss:c,delay:t,message:e,onClose:i,variant:r}){return s.jsx(m,{message:e,onClose:i,options:{canDismiss:c,delay:t,variant:r}})},title:"Alert/Alert"},B={default:"#000000",error:"#ff2f2f",info:"#3b82f6",success:"#225cce",warning:"#eab308"},d={play:async({args:a,canvasElement:c,step:t})=>{const e=T(c),i=h(console,"log");await t("displays user message",async()=>{await o(await e.findByRole("alert")).toBeInTheDocument(),await o(e.getByRole("alert")).toHaveTextContent(a.message)}),await t(`variant : ${a.variant}`,async()=>{await o(e.getByRole("alert")).toHaveStyle({"background-color":B[a.variant]})}),a.canDismiss?await t("if dismissible, will execute function when dismissed",async()=>{await o(e.getByRole("button")).toHaveAttribute("aria-label","알럿 닫기"),await k.click(e.getByRole("button")),await o(i).toHaveBeenCalledWith("Closed!")}):await t(`will automatically disappear after ${a.delay}ms`,async()=>{await v(a.delay||6e3),await o(e.getByRole("alert")).not.toHaveStyle({opacity:1})})}};var y,p,b;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const consoleSpy = spyOn(console, 'log');
    await step('displays user message', async () => {
      await expect(await canvas.findByRole('alert')).toBeInTheDocument();
      await expect(canvas.getByRole('alert')).toHaveTextContent(args.message);
    });
    await step(\`variant : \${args.variant}\`, async () => {
      await expect(canvas.getByRole('alert')).toHaveStyle({
        'background-color': backgroundColor[args.variant as keyof typeof backgroundColor]
      });
    });
    if (args.canDismiss) {
      await step('if dismissible, will execute function when dismissed', async () => {
        await expect(canvas.getByRole('button')).toHaveAttribute('aria-label', '알럿 닫기');
        await userEvent.click(canvas.getByRole('button'));
        await expect(consoleSpy).toHaveBeenCalledWith('Closed!');
      });
    } else {
      await step(\`will automatically disappear after \${args.delay}ms\`, async () => {
        await sleep(args.delay || 6000);
        await expect(canvas.getByRole('alert')).not.toHaveStyle({
          opacity: 1
        });
      });
    }
  }
}`,...(b=(p=d.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};const _=["Default"],A=Object.freeze(Object.defineProperty({__proto__:null,Default:d,__namedExportsOrder:_,default:R},Symbol.toStringTag,{value:"Module"}));export{A};
