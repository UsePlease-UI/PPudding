import{j as d}from"./jsx-runtime-BjgbQsUx.js";import{f as p,w as m,e as g}from"./index-BsVblSul.js";import{R as i}from"./RadioGroup-QinevHbA.js";import"./index-D2MAbzvX.js";import"./index-DDT2H6na.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./format-BvyHdC65.js";const{useArgs:y}=__STORYBOOK_MODULE_PREVIEW_API__,_={args:{isDisabled:!1,label:"빨강",name:"color",onChange:p(),position:"start",size:"small",value:"red"},argTypes:{isDisabled:{control:"boolean",description:"if true, the component will be disabled",table:{category:"optional"}},label:{control:"text",description:"content of the component",table:{category:"required"},type:{name:"string",required:!0}},name:{control:"text",description:"name attribute of the input element",table:{category:"required",type:{summary:"string"}},type:{name:"string",required:!0}},onChange:{control:!1,description:"change event handler",table:{category:"optional",type:{summary:"(e: ChangeEvent<HTMLInputElement>) => void"}}},position:{control:{type:"inline-radio"},description:"radio position",options:["start","end"],table:{category:"optional",type:{summary:"start | end"}}},size:{control:{type:"inline-radio"},description:"radio size",options:["large","medium","small"],table:{category:"optional",type:{summary:"large | medium | small"}}},value:{control:"text",description:"value of the component",table:{category:"optional",type:{summary:"string"}},type:"string"}},component:i,parameters:{docs:{argTypes:{exclude:["currentValue","onChange"],sort:"requiredFirst"},controls:{exclude:["currentValue","onChange"]}},layout:"centered"},tags:["autodocs"],title:"Form/Radio"},e={args:{isDisabled:!1,label:"빨강",name:"color",size:"small",value:"red"},render:function(r){const[{value:t},c]=y(),u=a=>{c({value:a})};return d.jsx(i,{...r,currentValue:t,onChange:a=>u(a.currentTarget.value)})}};e.play=async({canvasElement:n})=>{const t=m(n).getByRole("radio",{name:"빨강"});await g(t).toBeChecked()};var o,s,l;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    isDisabled: false,
    label: '빨강',
    name: 'color',
    size: 'small',
    value: 'red'
  },
  render: function Render(args) {
    const [{
      value
    }, updateArgs] = useArgs();
    const handleChange = (newValue: string) => {
      updateArgs({
        value: newValue
      });
    };
    return <Radio {...args} currentValue={value} onChange={e => handleChange(e.currentTarget.value)} />;
  }
}`,...(l=(s=e.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const D=["Default"];export{e as Default,D as __namedExportsOrder,_ as default};
