import{C as h,g as f}from"./Chip-lQ9m76RI.js";import"./iframe-BLazJ4V0.js";const{expect:t,spyOn:g,userEvent:w,within:x}=__STORYBOOK_MODULE_TEST__,E={args:{isDeletable:!1,label:"사탕",onDelete:()=>console.log("Delete!"),value:"candy",variant:"outlined"},argTypes:{isDeletable:{control:"boolean",description:"if true, component can be deleted (delete icon will be shown)"},label:{control:"text",description:"content of the component"},onClick:{control:!1,description:"click event handler",table:{type:{summary:"( ) => void"}}},onDelete:{control:!1,description:"callback fired when icon button is clicked (need to set isDeletable true)",table:{type:{summary:"(value: string) => void"}}},value:{control:"text",description:"chip value",table:{type:{summary:"string"}}},variant:{control:{type:"inline-radio"},description:"chip variant",options:["outlined","contained"],table:{type:{summary:"outlined | contained"}}}},component:h,parameters:{layout:"centered"},play:async({args:e,canvasElement:y,step:i})=>{const a=x(y),D=g(console,"log");await i("chip should display label text",async()=>{await t(await a.findByText(e.label)).toBeInTheDocument()}),await i(`chip variant : ${e.variant}`,async()=>{await t((await a.findByText(e.label)).parentNode).toHaveClass(f(e.variant))}),e.isDeletable&&await i("if set to be deletable, chip should have a delete button",async()=>{await t(await a.findByRole("button")).toBeInTheDocument(),await w.click(a.getByRole("button")),await t(D).toHaveBeenCalledWith(e.value)})},tags:["autodocs"],title:"Button/Chip"},l={args:{isDeletable:!1,label:"사탕",value:"candy",variant:"outlined"}},n={args:{isDeletable:!1,label:"초콜렛",onClick:()=>console.log("clicked"),value:"chocolate",variant:"outlined"}},o={args:{isDeletable:!0,label:"사탕",onDelete:e=>console.log(e),value:"candy",variant:"outlined"}};var s,c,r;l.parameters={...l.parameters,docs:{...(s=l.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    isDeletable: false,
    label: '사탕',
    value: 'candy',
    variant: 'outlined'
  }
}`,...(r=(c=l.parameters)==null?void 0:c.docs)==null?void 0:r.source}}};var d,u,p;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    isDeletable: false,
    label: '초콜렛',
    onClick: () => console.log('clicked'),
    value: 'chocolate',
    variant: 'outlined'
  }
}`,...(p=(u=n.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var b,m,v;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    isDeletable: true,
    label: '사탕',
    onDelete: value => console.log(value),
    value: 'candy',
    variant: 'outlined'
  }
}`,...(v=(m=o.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};const B=["Example1Default","Example2Clickable","Example3Deletable"];export{l as Example1Default,n as Example2Clickable,o as Example3Deletable,B as __namedExportsOrder,E as default};
