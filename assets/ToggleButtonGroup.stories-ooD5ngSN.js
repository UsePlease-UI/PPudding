import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{a as n,T as a}from"./ToggleButtonGroup-BCY3PFVy.js";import{F as p,a as m}from"./ItalicIcon-BmXp9AEn.js";import{F as T}from"./UnderlineIcon-Be8owUxU.js";import"./iframe-xSyj_TgM.js";import"./format-FJJUaZs2.js";import"./styles-CVbDQEN-.js";const{fn:b}=__STORYBOOK_MODULE_TEST__,R={args:{children:null,onClick:b(),value:"banana"},argTypes:{children:{control:!1,description:"content of the component (toggle button)",table:{category:"required",type:{summary:"ReactNode"}}},onClick:{control:!1,description:"click event handler",table:{category:"optional",type:{summary:"(selected: string) => void"}}},value:{control:"object",description:"selected value (need to pass string array to allow multiple selection)",table:{category:"optional",type:{summary:"string | string[]"}}}},component:n,parameters:{docs:{argTypes:{sort:"requiredFirst"}},layout:"centered"},tags:["autodocs"],title:"Button/ToggleButtonGroup"},r={args:{value:"banana"},render:function(t){return e.jsxs(n,{...t,children:[e.jsx(a,{value:"banana",children:"Banana"}),e.jsx(a,{value:"orange",children:"Orange"})]})}},o={args:{value:["bold","italic"]},render:function(t){return e.jsxs(n,{...t,children:[e.jsx(a,{"aria-label":"bold",value:"bold",children:e.jsx(p,{})}),e.jsx(a,{"aria-label":"italic",value:"italic",children:e.jsx(m,{})}),e.jsx(a,{"aria-label":"underline",value:"underline",children:e.jsx(T,{})})]})}};var l,s,i;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    value: 'banana'
  },
  render: function Render(args) {
    return <ToggleButtonGroup {...args}>
        <ToggleButton value="banana">Banana</ToggleButton>
        <ToggleButton value="orange">Orange</ToggleButton>
      </ToggleButtonGroup>;
  }
}`,...(i=(s=r.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var u,c,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    value: ['bold', 'italic']
  },
  render: function Render(args) {
    return <ToggleButtonGroup {...args}>
        <ToggleButton aria-label="bold" value="bold">
          <BoldIcon />
        </ToggleButton>
        <ToggleButton aria-label="italic" value="italic">
          <ItalicIcon />
        </ToggleButton>
        <ToggleButton aria-label="underline" value="underline">
          <UnderlineIcon />
        </ToggleButton>
      </ToggleButtonGroup>;
  }
}`,...(g=(c=o.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};const _=["Default","MultiSelection"];export{r as Default,o as MultiSelection,_ as __namedExportsOrder,R as default};
