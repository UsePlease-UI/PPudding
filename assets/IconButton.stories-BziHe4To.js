import{r as s,j as l}from"./iframe-BLazJ4V0.js";import{I as u}from"./IconButton-DyIoD9Jb.js";import{a as g,b as v}from"./styles-8MddfzVJ.js";function b({title:e,titleId:n,...a},t){return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":n},a),e?s.createElement("title",{id:n},e):null,s.createElement("path",{fillRule:"evenodd",d:"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z",clipRule:"evenodd"}))}const m=s.forwardRef(b),{expect:o,spyOn:w,userEvent:h,within:f}=__STORYBOOK_MODULE_TEST__,R={args:{children:l.jsx(m,{}),isDisabled:!1,onClick:()=>console.log("Clicked!"),shape:"rounded",size:"large",variant:"outlined"},argTypes:{children:{control:!1,description:"content of the component (SVGElement)",table:{type:{summary:"ReactNode"}}},isDisabled:{control:"boolean",description:"if true, the component will be disabled"},onClick:{control:!1,description:"click event handler",table:{type:{summary:"(e: MouseEvent<ButtonElement>) => void"}}},shape:{control:{type:"inline-radio"},description:"icon button shape",options:["circular","rounded","square"],table:{type:{summary:"circular | rounded | square"}}},size:{control:{type:"inline-radio"},description:"icon button size",options:["large","medium","small","mini"],table:{type:{summary:"large | medium | small | mini"}}},variant:{control:{type:"inline-radio"},description:"icon button variant",options:["outlined","contained","text"],table:{type:{summary:"outlined | contained | text"}}}},component:u,parameters:{layout:"centered"},tags:["autodocs"],title:"Button/IconButton"},i={args:{children:l.jsx(m,{}),isDisabled:!1,onClick:()=>console.log("Clicked!"),size:"large",variant:"outlined"},play:async({args:e,canvasElement:n,step:a})=>{const t=f(n),p=w(console,"log");await a("icon button should render its children (svg icon)",async()=>{await o(await t.findByRole("button")).toBeInTheDocument();const y=document.getElementsByTagName("svg")[0];await o(t.getByRole("button")).toContainElement(y)}),await a(`icon button variant : ${e.variant}`,async()=>{await o(t.getByRole("button")).toHaveClass(g(e.variant))}),await a(`icon button size : ${e.size}`,async()=>{await o(t.getByRole("button")).toHaveClass(v(e.size))}),e.isDisabled||await a("when clicked, it should fire onclick event",async()=>{await h.click(t.getByRole("button")),await o(p).toHaveBeenCalledWith("Clicked!")})},render:function(n){return l.jsx(u,{"aria-label":"찜하기",...n,children:n.children})}};var c,r,d;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: <StarIcon />,
    isDisabled: false,
    onClick: () => console.log('Clicked!'),
    size: 'large',
    variant: 'outlined'
  },
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const consoleSpy = spyOn(console, 'log');
    await step('icon button should render its children (svg icon)', async () => {
      await expect(await canvas.findByRole('button')).toBeInTheDocument();
      const element = document.getElementsByTagName('svg')[0];
      await expect(canvas.getByRole('button')).toContainElement(element);
    });
    await step(\`icon button variant : \${args.variant}\`, async () => {
      await expect(canvas.getByRole('button')).toHaveClass(getCommonButtonVariantStyle(args.variant) as string);
    });
    await step(\`icon button size : \${args.size}\`, async () => {
      await expect(canvas.getByRole('button')).toHaveClass(getIconButtonSizeStyle(args.size) as string);
    });
    if (!args.isDisabled) {
      await step('when clicked, it should fire onclick event', async () => {
        await userEvent.click(canvas.getByRole('button'));
        await expect(consoleSpy).toHaveBeenCalledWith('Clicked!');
      });
    }
  },
  render: function Render(args) {
    return <IconButton aria-label="찜하기" {...args}>
        {args.children}
      </IconButton>;
  }
}`,...(d=(r=i.parameters)==null?void 0:r.docs)==null?void 0:d.source}}};const x=["Default"];export{i as Default,x as __namedExportsOrder,R as default};
