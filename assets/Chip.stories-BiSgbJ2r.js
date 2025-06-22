import{C as h,g as D}from"./Chip-CxOvXWQ6.js";import"./jsx-runtime-D_zvdyIk.js";import"./iframe-Bvnjis0j.js";import"./format-FJJUaZs2.js";import"./XMarkIcon-CWIMqkAs.js";const{expect:t,fn:f,spyOn:w,userEvent:k,within:C}=__STORYBOOK_MODULE_TEST__,O={args:{isDeletable:!1,label:"사탕",onDelete:f(),value:"candy",variant:"outlined"},argTypes:{isDeletable:{control:"boolean",description:"if true, component can be deleted (delete icon will be shown)",table:{category:"optional"}},label:{control:"text",description:"content of the component",table:{category:"required"}},onClick:{control:!1,description:"click event handler",table:{category:"optional",type:{summary:"( ) => void"}}},onDelete:{control:!1,description:"callback fired when icon button is clicked (need to set isDeletable true)",table:{category:"optional",type:{summary:"(value: string) => void"}}},value:{control:"text",description:"chip value",table:{category:"required",type:{summary:"string"}}},variant:{control:{type:"inline-radio"},description:"chip variant",options:["outlined","contained"],table:{category:"optional",type:{summary:"outlined | contained"}}}},component:h,parameters:{docs:{argTypes:{sort:"requiredFirst"}},layout:"centered"},play:async({args:e,canvasElement:v,step:i})=>{const a=C(v),g=w(console,"log");await i("chip should display label text",async()=>{await t(await a.findByText(e.label)).toBeInTheDocument()}),await i(`chip variant : ${e.variant}`,async()=>{await t((await a.findByText(e.label)).parentNode).toHaveClass(D(e.variant))}),e.isDeletable&&await i("if set to be deletable, chip should have a delete button",async()=>{await t(await a.findByRole("button")).toBeInTheDocument(),await k.click(a.getByRole("button")),await t(g).toHaveBeenCalledWith(e.value)})},tags:["autodocs"],title:"Button/Chip"},l={args:{isDeletable:!1,label:"사탕",value:"candy",variant:"outlined"}},o={args:{isDeletable:!1,label:"초콜렛",onClick:()=>console.log("clicked"),value:"chocolate",variant:"outlined"}},n={args:{isDeletable:!0,label:"사탕",onDelete:e=>console.log(e),value:"candy",variant:"outlined"}};var r,c,s;l.parameters={...l.parameters,docs:{...(r=l.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    isDeletable: false,
    label: '사탕',
    value: 'candy',
    variant: 'outlined'
  }
}`,...(s=(c=l.parameters)==null?void 0:c.docs)==null?void 0:s.source}}};var d,u,p;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    isDeletable: false,
    label: '초콜렛',
    onClick: () => console.log('clicked'),
    value: 'chocolate',
    variant: 'outlined'
  }
}`,...(p=(u=o.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var b,y,m;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    isDeletable: true,
    label: '사탕',
    onDelete: value => console.log(value),
    value: 'candy',
    variant: 'outlined'
  }
}`,...(m=(y=n.parameters)==null?void 0:y.docs)==null?void 0:m.source}}};const E=["Default","Clickable","Deletable"];export{o as Clickable,l as Default,n as Deletable,E as __namedExportsOrder,O as default};
