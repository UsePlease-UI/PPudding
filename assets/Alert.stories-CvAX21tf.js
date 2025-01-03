import{j as y}from"./jsx-runtime-BjgbQsUx.js";import{w as m,s as u,e as o,u as g}from"./index-BsVblSul.js";import{A as r}from"./Alert-CgwAwq4_.js";import{s as w}from"./common-B8FjgEV9.js";import"./index-D2MAbzvX.js";import"./index-DDT2H6na.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./format-BvyHdC65.js";import"./XMarkIcon-D5luaRUA.js";const D={args:{canDismiss:!0,delay:6e3,message:"로그인되었습니다.",onClose:()=>console.log("Closed!"),variant:"default"},argTypes:{canDismiss:{control:"boolean",description:"if true, component can be programmatically closed",table:{category:"optional"}},delay:{control:"number",description:"duration of display",table:{category:"optional"}},icon:{table:{disable:!0}},message:{control:"text",description:"content of the component",table:{category:"required"}},onClose:{table:{disable:!0}},options:{table:{disable:!0}},variant:{control:{type:"inline-radio"},description:"alert variant",options:["default","success","error","info","warning"],table:{category:"optional"}}},component:r,parameters:{docs:{argTypes:{sort:"requiredFirst"}},layout:"centered"},render:function({canDismiss:s,delay:t,message:e,onClose:i,variant:d}){return y.jsx(r,{message:e,onClose:i,options:{canDismiss:s,delay:t,variant:d}})},tags:["autodocs"],title:"Alert/Alert"},f={default:"#000000",error:"#ff2f2f",info:"#3b82f6",success:"#225cce",warning:"#eab308"},n={play:async({args:a,canvasElement:s,step:t})=>{const e=m(s),i=u(console,"log");await t("displays user message",async()=>{await o(await e.findByRole("alert")).toBeInTheDocument(),await o(e.getByRole("alert")).toHaveTextContent(a.message)}),await t(`variant : ${a.variant}`,async()=>{await o(e.getByRole("alert")).toHaveStyle({"background-color":f[a.variant]})}),a.canDismiss?await t("if dismissible, will execute function when dismissed",async()=>{await o(e.getByRole("button")).toHaveAttribute("aria-label","dismiss button"),await g.click(e.getByRole("button")),await o(i).toHaveBeenCalledWith("Closed!")}):await t(`will automatically disappear after ${a.delay}ms`,async()=>{await w(a.delay||6e3),await o(e.getByRole("alert")).not.toHaveStyle({opacity:1})})}};var l,c,p;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
        await expect(canvas.getByRole('button')).toHaveAttribute('aria-label', 'dismiss button');
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
}`,...(p=(c=n.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const S=["Default"];export{n as Default,S as __namedExportsOrder,D as default};
