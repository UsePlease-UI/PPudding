import{j as e}from"./iframe-BBfB5-06.js";import{T as a}from"./index-DJwB4eTU.js";import{F as d,a as p}from"./ItalicIcon-B_fjfncm.js";import{F as m}from"./UnderlineIcon-aM0vZfxY.js";import"./styles-8MddfzVJ.js";const{fn:b}=__STORYBOOK_MODULE_TEST__,j={args:{children:null,onClick:b(),value:"banana"},argTypes:{children:{control:!1,description:"content of the component (toggle button)",table:{category:"required",type:{summary:"ReactNode"}}},onClick:{control:!1,description:"click event handler",table:{category:"optional",type:{summary:"(selected: string) => void"}}},value:{control:"object",description:"selected value (need to pass string array to allow multiple selection)",table:{category:"optional",type:{summary:"string | string[]"}}}},component:a.Group,parameters:{docs:{argTypes:{sort:"requiredFirst"}},layout:"centered"},tags:["autodocs"],title:"Button/ToggleButton.Group"},r={args:{value:"banana"},render:function(t){return e.jsxs(a.Group,{...t,children:[e.jsx(a,{value:"banana",children:"Banana"}),e.jsx(a,{value:"orange",children:"Orange"})]})}},o={args:{value:["bold","italic"]},render:function(t){return e.jsxs(a.Group,{...t,children:[e.jsx(a,{"aria-label":"bold",value:"bold",children:e.jsx(d,{})}),e.jsx(a,{"aria-label":"italic",value:"italic",children:e.jsx(p,{})}),e.jsx(a,{"aria-label":"underline",value:"underline",children:e.jsx(m,{})})]})}};var n,l,s;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    value: 'banana'
  },
  render: function Render(args) {
    return <ToggleButton.Group {...args}>
        <ToggleButton value="banana">Banana</ToggleButton>
        <ToggleButton value="orange">Orange</ToggleButton>
      </ToggleButton.Group>;
  }
}`,...(s=(l=r.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};var u,i,c;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    value: ['bold', 'italic']
  },
  render: function Render(args) {
    return <ToggleButton.Group {...args}>
        <ToggleButton aria-label="bold" value="bold">
          <BoldIcon />
        </ToggleButton>
        <ToggleButton aria-label="italic" value="italic">
          <ItalicIcon />
        </ToggleButton>
        <ToggleButton aria-label="underline" value="underline">
          <UnderlineIcon />
        </ToggleButton>
      </ToggleButton.Group>;
  }
}`,...(c=(i=o.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const y=["Default","MultiSelection"];export{r as Default,o as MultiSelection,y as __namedExportsOrder,j as default};
