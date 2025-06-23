import{j as d}from"./jsx-runtime-D_zvdyIk.js";import{R as i}from"./RadioGroup-BkgqJw-B.js";import"./iframe-D3ksDC8p.js";import"./format-FJJUaZs2.js";const{useArgs:p}=__STORYBOOK_MODULE_PREVIEW_API__,{expect:m,fn:g,within:y}=__STORYBOOK_MODULE_TEST__,_={args:{isDisabled:!1,label:"빨강",name:"color",onChange:g(),position:"start",size:"small",value:"red"},argTypes:{isDisabled:{control:"boolean",description:"if true, the component will be disabled",table:{category:"optional"}},label:{control:"text",description:"content of the component",table:{category:"required"},type:{name:"string",required:!0}},name:{control:"text",description:"name attribute of the input element",table:{category:"required",type:{summary:"string"}},type:{name:"string",required:!0}},onChange:{control:!1,description:"change event handler",table:{category:"optional",type:{summary:"(e: ChangeEvent<HTMLInputElement>) => void"}}},position:{control:{type:"inline-radio"},description:"radio position",options:["start","end"],table:{category:"optional",type:{summary:"start | end"}}},size:{control:{type:"inline-radio"},description:"radio size",options:["large","medium","small"],table:{category:"optional",type:{summary:"large | medium | small"}}},value:{control:"text",description:"value of the component",table:{category:"optional",type:{summary:"string"}},type:"string"}},component:i,parameters:{docs:{argTypes:{exclude:["currentValue","onChange"],sort:"requiredFirst"},controls:{exclude:["currentValue","onChange"]}},layout:"centered"},tags:["autodocs"],title:"Form/Radio"},e={args:{isDisabled:!1,label:"빨강",name:"color",position:"end",size:"small",value:"red"},render:function(r){const[{value:t},c]=p(),u=n=>{c({value:n})};return d.jsx(i,{...r,currentValue:t,onChange:n=>u(n.currentTarget.value)})}};e.play=async({canvasElement:a})=>{const t=y(a).getByRole("radio",{name:"빨강"});await m(t).toBeChecked()};var o,s,l;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    isDisabled: false,
    label: '빨강',
    name: 'color',
    position: 'end',
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
}`,...(l=(s=e.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const x=["Default"];export{e as Default,x as __namedExportsOrder,_ as default};
