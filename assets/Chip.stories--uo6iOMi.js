import{C as y,g as m}from"./Chip-BjcFgkD1.js";import"./jsx-runtime-D_zvdyIk.js";import"./iframe-xSyj_TgM.js";import"./format-FJJUaZs2.js";import"./XMarkIcon-C7y_r2KJ.js";const{expect:a,fn:v,spyOn:D,userEvent:g,within:h}=__STORYBOOK_MODULE_TEST__,_={args:{isDeletable:!1,label:"사탕",onDelete:v(),value:"candy",variant:"outlined"},argTypes:{isDeletable:{control:"boolean",description:"if true, component can be deleted (delete icon will be shown)",table:{category:"optional"}},label:{control:"text",description:"content of the component",table:{category:"required"}},onDelete:{control:!1,description:"callback fired when icon button is clicked (need to set isDeletable true)",table:{category:"optional",type:{summary:"(value: string) => void"}}},value:{control:"text",description:"chip value",table:{category:"required",type:{summary:"string"}}},variant:{control:{type:"inline-radio"},description:"chip variant",options:["outlined","contained"],table:{category:"optional",type:{summary:"outlined | contained"}}}},component:y,parameters:{docs:{argTypes:{sort:"requiredFirst"}},layout:"centered"},play:async({args:e,canvasElement:p,step:l})=>{const t=h(p),b=D(console,"log");await l("chip should display label text",async()=>{await a(await t.findByText(e.label)).toBeInTheDocument()}),await l(`chip variant : ${e.variant}`,async()=>{await a((await t.findByText(e.label)).parentNode).toHaveClass(m(e.variant))}),e.isDeletable&&await l("if set to be deletable, chip should have a delete button",async()=>{await a(await t.findByRole("button")).toBeInTheDocument(),await g.click(t.getByRole("button")),await a(b).toHaveBeenCalledWith(e.value)})},tags:["autodocs"],title:"Button/Chip"},o={args:{isDeletable:!1,label:"사탕",value:"candy",variant:"outlined"}},n={args:{isDeletable:!0,label:"사탕",onDelete:e=>console.log(e),value:"candy",variant:"outlined"}};var i,r,s;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    isDeletable: false,
    label: '사탕',
    value: 'candy',
    variant: 'outlined'
  }
}`,...(s=(r=o.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};var c,d,u;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    isDeletable: true,
    label: '사탕',
    onDelete: value => console.log(value),
    value: 'candy',
    variant: 'outlined'
  }
}`,...(u=(d=n.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const C=["Default","Deletable"];export{o as Default,n as Deletable,C as __namedExportsOrder,_ as default};
