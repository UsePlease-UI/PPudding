import{r as l,j as h}from"./iframe-BBfB5-06.js";import{B as g,g as v}from"./Button-DqeyDzka.js";import{a as w,g as b}from"./styles-8MddfzVJ.js";function f({title:t,titleId:o,...a},e){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:e,"aria-labelledby":o},a),t?l.createElement("title",{id:o},t):null,l.createElement("path",{fillRule:"evenodd",d:"M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z",clipRule:"evenodd"}))}const B=l.forwardRef(f),{expect:n,spyOn:x,userEvent:C,within:R}=__STORYBOOK_MODULE_TEST__,z={args:{children:"삭제",endIcon:null,isDisabled:!1,isFullWidth:!1,onClick:()=>console.log("Clicked!"),shape:"rounded",size:"large",startIcon:null,variant:"outlined"},argTypes:{children:{control:"text",description:"content of the component",table:{category:"required",type:{summary:"ReactNode"}}},endIcon:{control:!1,description:"icon (svg element) placed after children",table:{category:"optional",type:{summary:"ReactNode"}}},isDisabled:{control:"boolean",description:"if true, the component will be disabled",table:{category:"optional"}},isFullWidth:{control:"boolean",description:"if true, the component will take up the full width of its container",table:{category:"optional"}},onClick:{control:!1,description:"click event handler",table:{category:"optional",type:{summary:"(e: MouseEvent<ButtonElement>) => void"}}},shape:{control:{type:"inline-radio"},description:"button shape",options:["rounded","square","circular"],table:{category:"optional",type:{summary:"rounded | square | circular"}}},size:{control:{type:"inline-radio"},description:"button size",options:["large","medium","small"],table:{category:"optional",type:{summary:"large | medium | small"}}},startIcon:{control:!1,description:"icon (svg element) placed before children",table:{category:"optional",type:{summary:"ReactNode"}}},variant:{control:{type:"inline-radio"},description:"button variant",options:["outlined","contained","text"],table:{category:"optional",type:{summary:"outlined | contained | text"}}}},component:g,parameters:{docs:{argTypes:{sort:"requiredFirst"}},layout:"centered"},tags:["autodocs"],title:"Button/Button"},i={args:{children:"제출",isFullWidth:!0,size:"large",variant:"contained"},play:async({args:t,canvasElement:o,step:a})=>{const e=R(o),m=x(console,"log");await a("button should render its children (text or node)",async()=>{await n(await e.findByRole("button")).toBeInTheDocument(),await n(e.getByRole("button")).toHaveTextContent(t.children)}),await a(`button variant : ${t.variant}`,async()=>{await n(e.getByRole("button")).toHaveClass(w(t.variant))}),await a(`button shape : ${t.shape}`,async()=>{await n(e.getByRole("button")).toHaveClass(b(t.shape))}),t.isFullWidth?await a("when set to full width, its width is overridden to fit the width of its parent",async()=>{await n(e.getByRole("button")).toHaveClass("w-full")}):await a(`button size : ${t.size}`,async()=>{await n(e.getByRole("button")).toHaveClass(v(t.size))}),t.isDisabled||await a("when clicked, it should fire onclick event",async()=>{await C.click(e.getByRole("button")),await n(m).toHaveBeenCalledWith("Clicked!")})}},s={args:{startIcon:h.jsx(B,{})}};var r,c,d;i.parameters={...i.parameters,docs:{...(r=i.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    children: '제출',
    isFullWidth: true,
    size: 'large',
    variant: 'contained'
  },
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
}`,...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,p,y;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    startIcon: <TrashIcon />
  }
}`,...(y=(p=s.parameters)==null?void 0:p.docs)==null?void 0:y.source}}};const H=["Button1Default","Button2WithIcon"];export{i as Button1Default,s as Button2WithIcon,H as __namedExportsOrder,z as default};
