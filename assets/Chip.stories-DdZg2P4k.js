import{f as m,w as y,s as v,e as a,u as f}from"./index-BsVblSul.js";import{C as g,g as h}from"./Chip-BgF4YZd3.js";import"./jsx-runtime-BjgbQsUx.js";import"./index-D2MAbzvX.js";import"./index-DDT2H6na.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./format-BvyHdC65.js";import"./styles-D32WepGD.js";import"./XMarkIcon-D5luaRUA.js";const E={args:{isDeletable:!1,label:"사탕",onDelete:m(),value:"candy",variant:"outlined"},argTypes:{isDeletable:{control:"boolean",description:"if true, component can be deleted (delete icon will be shown)",table:{category:"optional"}},label:{control:"text",description:"content of the component",table:{category:"required"}},onDelete:{control:!1,description:"callback fired when icon button is clicked (need to set isDeletable true)",table:{category:"optional",type:{summary:"(value: string) => void"}}},value:{control:"text",description:"chip value",table:{category:"required",type:{summary:"string"}}},variant:{control:{type:"inline-radio"},description:"chip variant",options:["outlined","contained","text"],table:{category:"optional",type:{summary:"outlined | contained | text"}}}},component:g,parameters:{docs:{argTypes:{sort:"requiredFirst"}},layout:"centered"},play:async({args:e,canvasElement:u,step:l})=>{const t=y(u),b=v(console,"log");await l("chip should display label text",async()=>{await a(await t.findByText(e.label)).toBeInTheDocument()}),await l(`chip variant : ${e.variant}`,async()=>{await a((await t.findByText(e.label)).parentNode).toHaveClass(h(e.variant))}),e.isDeletable&&await l("if set to be deletable, chip should have a delete button",async()=>{await a(await t.findByRole("button")).toBeInTheDocument(),await f.click(t.getByRole("button")),await a(b).toHaveBeenCalledWith(e.value)})},tags:["autodocs"],title:"Button/Chip"},o={args:{isDeletable:!1,label:"사탕",value:"candy",variant:"outlined"}},n={args:{isDeletable:!0,label:"사탕",onDelete:e=>console.log(e),value:"candy",variant:"outlined"}};var i,r,s;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    isDeletable: false,
    label: '사탕',
    value: 'candy',
    variant: 'outlined'
  }
}`,...(s=(r=o.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};var c,d,p;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    isDeletable: true,
    label: '사탕',
    onDelete: value => console.log(value),
    value: 'candy',
    variant: 'outlined'
  }
}`,...(p=(d=n.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const H=["Default","Deletable"];export{o as Default,n as Deletable,H as __namedExportsOrder,E as default};
