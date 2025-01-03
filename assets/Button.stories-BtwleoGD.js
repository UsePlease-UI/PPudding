import{j as d}from"./jsx-runtime-BjgbQsUx.js";import{w as u,s as p,e as a,u as y}from"./index-BsVblSul.js";import{B as m,g as h}from"./Button-yFDTFSOG.js";import{g as w,a as g}from"./styles-D32WepGD.js";import{F as b}from"./TrashIcon-DOgs351H.js";import"./index-D2MAbzvX.js";import"./index-DDT2H6na.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./format-BvyHdC65.js";const z={args:{children:"삭제",endIcon:null,isDisabled:!1,isFullWidth:!1,onClick:()=>console.log("Clicked!"),shape:"rounded",size:"large",startIcon:d.jsx(b,{}),variant:"outlined"},argTypes:{children:{control:"text",description:"content of the component",table:{category:"required",type:{summary:"ReactNode"}}},endIcon:{control:!1,description:"icon (svg element) placed after children",table:{category:"optional",type:{summary:"ReactNode"}}},isDisabled:{control:"boolean",description:"if true, the component will be disabled",table:{category:"optional"}},isFullWidth:{control:"boolean",description:"if true, the component will take up the full width of its container",table:{category:"optional"}},onClick:{control:!1,description:"click event handler",table:{category:"optional",type:{summary:"(e: MouseEvent<ButtonElement>) => void"}}},shape:{control:{type:"inline-radio"},description:"button shape",options:["rounded","square","circular"],table:{category:"optional",type:{summary:"rounded | square | circular"}}},size:{control:{type:"inline-radio"},description:"button size",options:["large","medium","small"],table:{category:"optional",type:{summary:"large | medium | small"}}},startIcon:{control:!1,description:"icon (svg element) placed before children",table:{category:"optional",type:{summary:"ReactNode"}}},variant:{control:{type:"inline-radio"},description:"button variant",options:["outlined","contained","text"],table:{category:"optional",type:{summary:"outlined | contained | text"}}}},component:m,parameters:{docs:{argTypes:{sort:"requiredFirst"}},layout:"centered"},tags:["autodocs"],title:"Button/Button"},o={play:async({args:t,canvasElement:r,step:n})=>{const e=u(r),c=p(console,"log");await n("button should render its children (text or node)",async()=>{await a(await e.findByRole("button")).toBeInTheDocument(),await a(e.getByRole("button")).toHaveTextContent(t.children)}),await n(`button variant : ${t.variant}`,async()=>{await a(e.getByRole("button")).toHaveClass(w(t.variant))}),await n(`button shape : ${t.shape}`,async()=>{await a(e.getByRole("button")).toHaveClass(g(t.shape))}),t.isFullWidth?await n("when set to full width, its width is overridden to fit the width of its parent",async()=>{await a(e.getByRole("button")).toHaveClass("w-full")}):await n(`button size : ${t.size}`,async()=>{await a(e.getByRole("button")).toHaveClass(h(t.size))}),t.isDisabled||await n("when clicked, it should fire onclick event",async()=>{await y.click(e.getByRole("button")),await a(c).toHaveBeenCalledWith("Clicked!")})}};var i,s,l;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const consoleSpy = spyOn(console, 'log');
    await step('button should render its children (text or node)', async () => {
      await expect(await canvas.findByRole('button')).toBeInTheDocument();
      await expect(canvas.getByRole('button')).toHaveTextContent(args.children as string);
    });
    await step(\`button variant : \${args.variant}\`, async () => {
      await expect(canvas.getByRole('button')).toHaveClass(getCommonButtonVariantStyle(args.variant) as string);
    });
    await step(\`button shape : \${args.shape}\`, async () => {
      await expect(canvas.getByRole('button')).toHaveClass(getCommonButtonShapeStyle(args.shape) as string);
    });
    if (args.isFullWidth) {
      await step(\`when set to full width, its width is overridden to fit the width of its parent\`, async () => {
        await expect(canvas.getByRole('button')).toHaveClass('w-full');
      });
    } else {
      await step(\`button size : \${args.size}\`, async () => {
        await expect(canvas.getByRole('button')).toHaveClass(getButtonSizeStyle(args.size) as string);
      });
    }
    if (!args.isDisabled) {
      await step('when clicked, it should fire onclick event', async () => {
        await userEvent.click(canvas.getByRole('button'));
        await expect(consoleSpy).toHaveBeenCalledWith('Clicked!');
      });
    }
  }
}`,...(l=(s=o.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const D=["Default"];export{o as Default,D as __namedExportsOrder,z as default};
