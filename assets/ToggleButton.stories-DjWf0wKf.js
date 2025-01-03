import{j as r}from"./jsx-runtime-BjgbQsUx.js";import{T as t}from"./ToggleButtonGroup-DrdcBRH4.js";import{F as y,a as S}from"./ItalicIcon-Dp-8zDBt.js";import"./index-D2MAbzvX.js";import"./index-DDT2H6na.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./format-BvyHdC65.js";import"./styles-D32WepGD.js";const N={args:{isDisabled:!1,name:"text",size:"large",value:"bold"},argTypes:{isDisabled:{control:"boolean",description:"if true, the component will be disabled",table:{category:"optional"}},name:{control:"text",description:"name attribute of the input element",table:{category:"optional",type:{summary:"string"}}},size:{control:{type:"inline-radio"},description:"toggle button size",options:["large","medium","small"],table:{category:"optional"}},value:{control:"text",description:"toggle button value",table:{category:"optional",type:{summary:"string"}}}},component:t,parameters:{docs:{argTypes:{exclude:["currentValue","onChange","isMultiple"],sort:"requiredFirst"},controls:{exclude:["currentValue","onChange","isMultiple"]}},layout:"centered"},tags:["autodocs"],title:"Button/ToggleButton"},a={args:{name:"fruits",size:"large",value:"banana"},render:function(e){return r.jsx(t,{currentValue:"banana",...e,children:"Banana"})}},n={args:{name:"fruits",size:"large",value:"orange"},render:function(e){return r.jsx(t,{currentValue:"banana",...e,children:"Orange"})}},o={args:{name:"text",size:"large",value:"bold"},render:function(e){return r.jsx(t,{currentValue:"bold",...e,children:r.jsx(y,{})})}},s={args:{name:"text",size:"large",value:"italic"},render:function(e){return r.jsx(t,{currentValue:"bold",...e,children:r.jsx(S,{})})}};var u,c,i;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    name: 'fruits',
    size: 'large',
    value: 'banana'
  },
  render: function Render(args) {
    return <ToggleButton currentValue="banana" {...args}>
        Banana
      </ToggleButton>;
  }
}`,...(i=(c=a.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var g,d,m;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    name: 'fruits',
    size: 'large',
    value: 'orange'
  },
  render: function Render(args) {
    return <ToggleButton currentValue="banana" {...args}>
        Orange
      </ToggleButton>;
  }
}`,...(m=(d=n.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var p,b,x;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    name: 'text',
    size: 'large',
    value: 'bold'
  },
  render: function Render(args) {
    return <ToggleButton currentValue="bold" {...args}>
        <BoldIcon />
      </ToggleButton>;
  }
}`,...(x=(b=o.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var f,T,B;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    name: 'text',
    size: 'large',
    value: 'italic'
  },
  render: function Render(args) {
    return <ToggleButton currentValue="bold" {...args}>
        <ItalicIcon />
      </ToggleButton>;
  }
}`,...(B=(T=s.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};const w=["TextSelected","TextNotSelected","IconSelected","IconNotSelected"];export{s as IconNotSelected,o as IconSelected,n as TextNotSelected,a as TextSelected,w as __namedExportsOrder,N as default};
