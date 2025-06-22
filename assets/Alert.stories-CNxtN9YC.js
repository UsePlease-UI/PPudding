import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as m}from"./iframe-Bvnjis0j.js";import{j as n}from"./format-FJJUaZs2.js";import{F as w}from"./XMarkIcon-CWIMqkAs.js";import{s as v}from"./common-B8FjgEV9.js";const x=(a="default")=>{switch(a){case"error":return n("bg-[#ff2f2f] text-white");case"info":return n("bg-[#3b82f6] text-white");case"warning":return n("bg-[#eab308] text-black");case"success":return n("bg-[#225cce] text-white");default:return n("bg-black text-white")}};function d({icon:a,message:c,onClose:t,options:e}){const{canDismiss:i,delay:r,variant:b}=m.useMemo(()=>({canDismiss:(e==null?void 0:e.canDismiss)||!1,delay:(e==null?void 0:e.delay)||4.5,variant:(e==null?void 0:e.variant)||"default"}),[e]),g=m.useMemo(()=>{let l=4.5;return r&&(l=r/1e3-.5),l},[r]);return m.useEffect(()=>{const l=setTimeout(t,r||5e3);return()=>clearTimeout(l)},[t,r]),s.jsxs("div",{"aria-live":"assertive",style:{animationDelay:r?`${g}s`:"4.5s"},"aria-atomic":"true",role:"alert",className:n("flex min-h-12 w-max animate-fadeInOut items-center justify-between whitespace-pre-wrap break-all rounded-xl px-3 py-2.25",x(b)),children:[s.jsx("span",{className:"block pr-2.5 text-16 font-medium leading-20 text-inherit",children:c}),(i===void 0||i===!0)&&s.jsxs("div",{className:"flex items-center",children:[s.jsx("div",{className:n("mx-5 h-3 w-px",(e==null?void 0:e.variant)==="warning"?"bg-black":"bg-white")}),s.jsx("button",{"aria-label":"알럿 닫기",type:"button",onClick:l=>{l.currentTarget.blur(),t()},className:n("rounded-full bg-transparent text-inherit",(e==null?void 0:e.variant)==="warning"&&"hover:border-black active:border-black"),children:a?m.cloneElement(a,{className:n("!block h-4.5 w-4.5 stroke-2 text-inherit")}):s.jsx(w,{className:"!block size-4.5 stroke-2 text-inherit"})})]})]})}d.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{message:{required:!0,tsType:{name:"string"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""},options:{required:!1,tsType:{name:"AlertOptionsType"},description:""}}};const{expect:o,spyOn:h,userEvent:k,within:R}=__STORYBOOK_MODULE_TEST__,T={args:{canDismiss:!0,delay:Number.MAX_SAFE_INTEGER,message:"로그인되었습니다.",onClose:()=>console.log("Closed!"),variant:"default"},argTypes:{canDismiss:{control:"boolean",description:"if true, component can be programmatically closed",table:{category:"optional",defaultValue:{summary:"false"},type:{summary:"boolean"}}},delay:{control:"number",description:"duration of display (in seconds)",table:{category:"optional",defaultValue:{summary:"4.5"},type:{summary:"number"}}},icon:{control:!1,description:"custom icon (svg element)",table:{category:"optional",type:{summary:"ReactNode"}}},message:{control:"text",description:"content of the component",table:{category:"required",type:{summary:"string"}}},onClose:{control:{disable:!0},description:"dismiss button click event handler",table:{category:"required",type:{summary:"() => void"}}},options:{control:{disable:!0},description:"alert options",table:{category:"optional",defaultValue:{summary:"{ canDismiss: false; delay: 4.5; variant: default }"},type:{summary:"{ canDismiss?: boolean; delay?: number; variant?: 'default' | 'error' | 'info' | 'success' | 'warning'; }"}}},variant:{control:{type:"inline-radio"},description:"alert variant",options:["default","success","error","info","warning"],table:{category:"optional",defaultValue:{summary:"default"}}}},component:d,parameters:{layout:"centered"},render:function({canDismiss:c,delay:t,message:e,onClose:i,variant:r}){return s.jsx(d,{message:e,onClose:i,options:{canDismiss:c,delay:t,variant:r}})},title:"Alert/Alert"},B={default:"#000000",error:"#ff2f2f",info:"#3b82f6",success:"#225cce",warning:"#eab308"},u={play:async({args:a,canvasElement:c,step:t})=>{const e=R(c),i=h(console,"log");await t("displays user message",async()=>{await o(await e.findByRole("alert")).toBeInTheDocument(),await o(e.getByRole("alert")).toHaveTextContent(a.message)}),await t(`variant : ${a.variant}`,async()=>{await o(e.getByRole("alert")).toHaveStyle({"background-color":B[a.variant]})}),a.canDismiss?await t("if dismissible, will execute function when dismissed",async()=>{await o(e.getByRole("button")).toHaveAttribute("aria-label","알럿 닫기"),await k.click(e.getByRole("button")),await o(i).toHaveBeenCalledWith("Closed!")}):await t(`will automatically disappear after ${a.delay}ms`,async()=>{await v(a.delay||6e3),await o(e.getByRole("alert")).not.toHaveStyle({opacity:1})})}};var y,p,f;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(f=(p=u.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};const _=["Default"],N=Object.freeze(Object.defineProperty({__proto__:null,Default:u,__namedExportsOrder:_,default:T},Symbol.toStringTag,{value:"Module"}));export{N as A};
