import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{T as a}from"./ToggleButtonGroup-CCOMZlVR.js";import{F as y,a as S}from"./ItalicIcon-CZ77VSED.js";import"./iframe-D3ksDC8p.js";import"./format-FJJUaZs2.js";import"./styles-8MddfzVJ.js";const I={args:{isDisabled:!1,size:"large",value:"bold"},argTypes:{isDisabled:{control:"boolean",description:"if true, the component will be disabled",table:{category:"optional"}},name:{control:"text",description:"name attribute of the input element",table:{category:"optional",type:{summary:"string"}}},size:{control:{type:"inline-radio"},description:"toggle button size",options:["large","medium","small"],table:{category:"optional"}},value:{control:"text",description:"toggle button value",table:{category:"optional",type:{summary:"string"}}}},component:a,parameters:{docs:{argTypes:{exclude:["currentValue","onChange","isMultiple"],sort:"requiredFirst"},controls:{exclude:["currentValue","onChange","isMultiple"]}},layout:"centered"},tags:["autodocs"],title:"Button/ToggleButton"},t={args:{size:"large",value:"banana"},render:function(e){return r.jsx(a,{currentValue:"banana",...e,children:"Banana"})}},o={args:{size:"large",value:"orange"},render:function(e){return r.jsx(a,{currentValue:"banana",...e,children:"Orange"})}},n={args:{size:"large",value:"bold"},render:function(e){return r.jsx(a,{"aria-label":"bold",currentValue:"bold",...e,children:r.jsx(y,{})})}},l={args:{size:"large",value:"italic"},render:function(e){return r.jsx(a,{"aria-label":"italic",currentValue:"bold",...e,children:r.jsx(S,{})})}};var c,u,i;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    size: 'large',
    value: 'banana'
  },
  render: function Render(args) {
    return <ToggleButton currentValue="banana" {...args}>
        Banana
      </ToggleButton>;
  }
}`,...(i=(u=t.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};var d,g,p;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    size: 'large',
    value: 'orange'
  },
  render: function Render(args) {
    return <ToggleButton currentValue="banana" {...args}>
        Orange
      </ToggleButton>;
  }
}`,...(p=(g=o.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var m,b,x;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    size: 'large',
    value: 'bold'
  },
  render: function Render(args) {
    return <ToggleButton aria-label="bold" currentValue="bold" {...args}>
        <BoldIcon />
      </ToggleButton>;
  }
}`,...(x=(b=n.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var f,T,B;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    size: 'large',
    value: 'italic'
  },
  render: function Render(args) {
    return <ToggleButton aria-label="italic" currentValue="bold" {...args}>
        <ItalicIcon />
      </ToggleButton>;
  }
}`,...(B=(T=l.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};const F=["TextSelected","TextNotSelected","IconSelected","IconNotSelected"];export{l as IconNotSelected,n as IconSelected,o as TextNotSelected,t as TextSelected,F as __namedExportsOrder,I as default};
