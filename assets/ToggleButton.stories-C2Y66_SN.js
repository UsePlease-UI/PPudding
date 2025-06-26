import{j as r}from"./iframe-BLazJ4V0.js";import{T as a}from"./index-D7_Wj8L5.js";import{F as S,a as v}from"./ItalicIcon-B5v78ESQ.js";import"./styles-8MddfzVJ.js";const j={args:{isDisabled:!1,size:"large",value:"bold"},argTypes:{currentValue:{table:{disable:!0}},isDisabled:{control:"boolean",description:"if true, the component will be disabled"},isMultiple:{table:{disable:!0}},name:{control:"text",description:"name attribute of the input element",table:{type:{summary:"string"}}},onChange:{table:{disable:!0}},size:{control:{type:"inline-radio"},description:"toggle button size",options:["large","medium","small"]},value:{control:"text",description:"toggle button value",table:{type:{summary:"string"}}}},component:a,parameters:{layout:"centered"},tags:["autodocs"],title:"Button/ToggleButton/UI - 2. ToggleButton"},t={args:{size:"large",value:"banana"},render:function(e){return r.jsx(a,{currentValue:"banana",...e,children:"Banana"})}},n={args:{size:"large",value:"orange"},render:function(e){return r.jsx(a,{currentValue:"banana",...e,children:"Orange"})}},o={args:{size:"large",value:"bold"},render:function(e){return r.jsx(a,{"aria-label":"bold",currentValue:"bold",...e,children:r.jsx(S,{})})}},l={args:{size:"large",value:"italic"},render:function(e){return r.jsx(a,{"aria-label":"italic",currentValue:"bold",...e,children:r.jsx(v,{})})}};var u,c,i;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    size: 'large',
    value: 'banana'
  },
  render: function Render(args) {
    return <ToggleButton currentValue="banana" {...args}>
        Banana
      </ToggleButton>;
  }
}`,...(i=(c=t.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var d,g,m;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    size: 'large',
    value: 'orange'
  },
  render: function Render(args) {
    return <ToggleButton currentValue="banana" {...args}>
        Orange
      </ToggleButton>;
  }
}`,...(m=(g=n.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var p,b,x;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    size: 'large',
    value: 'bold'
  },
  render: function Render(args) {
    return <ToggleButton aria-label="bold" currentValue="bold" {...args}>
        <BoldIcon />
      </ToggleButton>;
  }
}`,...(x=(b=o.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var f,T,B;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    size: 'large',
    value: 'italic'
  },
  render: function Render(args) {
    return <ToggleButton aria-label="italic" currentValue="bold" {...args}>
        <ItalicIcon />
      </ToggleButton>;
  }
}`,...(B=(T=l.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};const I=["Example1TextSelected","Example2TextNotSelected","Example3IconSelected","Example4IconNotSelected"];export{t as Example1TextSelected,n as Example2TextNotSelected,o as Example3IconSelected,l as Example4IconNotSelected,I as __namedExportsOrder,j as default};
