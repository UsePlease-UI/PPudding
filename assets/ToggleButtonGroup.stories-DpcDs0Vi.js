import{j as e}from"./jsx-runtime-BjgbQsUx.js";import{f as m}from"./index-BsVblSul.js";import{a as n,T as t}from"./ToggleButtonGroup-DrdcBRH4.js";import{F as p,a as f}from"./ItalicIcon-Dp-8zDBt.js";import{F as B}from"./UnderlineIcon-BxVp5723.js";import"./index-D2MAbzvX.js";import"./index-DDT2H6na.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./format-BvyHdC65.js";import"./styles-D32WepGD.js";const I={args:{children:null,onChange:m(),value:"banana"},argTypes:{children:{control:!1,description:"content of the component (toggle button)",table:{category:"required",type:{summary:"ReactNode"}}},onChange:{control:!1,description:"change event handler",table:{category:"optional",type:{summary:"(e: ChangeEvent<HTMLInputElement>) => void"}}},value:{control:"object",description:"selected value (need to pass string array to allow multiple selection)",table:{category:"optional",type:{summary:"string | string[]"}}}},component:n,parameters:{docs:{argTypes:{sort:"requiredFirst"}},layout:"centered"},tags:["autodocs"],title:"Button/ToggleButtonGroup"},o={args:{value:"banana"},render:function(a){return e.jsxs(n,{...a,children:[e.jsx(t,{name:"fruits",value:"banana",children:"Banana"}),e.jsx(t,{name:"fruits",value:"orange",children:"Orange"})]})}},r={args:{value:["bold","italic"]},render:function(a){return e.jsxs(n,{...a,children:[e.jsx(t,{name:"text",value:"bold",children:e.jsx(p,{})}),e.jsx(t,{name:"text",value:"italic",children:e.jsx(f,{})}),e.jsx(t,{name:"text",value:"underline",children:e.jsx(B,{})})]})}};var l,s,u;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    value: 'banana'
  },
  render: function Render(args) {
    return <ToggleButtonGroup {...args}>
        <ToggleButton name="fruits" value="banana">
          Banana
        </ToggleButton>
        <ToggleButton name="fruits" value="orange">
          Orange
        </ToggleButton>
      </ToggleButtonGroup>;
  }
}`,...(u=(s=o.parameters)==null?void 0:s.docs)==null?void 0:u.source}}};var i,g,c;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    value: ['bold', 'italic']
  },
  render: function Render(args) {
    return <ToggleButtonGroup {...args}>
        <ToggleButton name="text" value="bold">
          <BoldIcon />
        </ToggleButton>
        <ToggleButton name="text" value="italic">
          <ItalicIcon />
        </ToggleButton>
        <ToggleButton name="text" value="underline">
          <UnderlineIcon />
        </ToggleButton>
      </ToggleButtonGroup>;
  }
}`,...(c=(g=r.parameters)==null?void 0:g.docs)==null?void 0:c.source}}};const w=["Default","MultiSelection"];export{o as Default,r as MultiSelection,w as __namedExportsOrder,I as default};
