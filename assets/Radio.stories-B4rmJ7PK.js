import{j as u}from"./iframe-BBfB5-06.js";import{R as l}from"./index-BMtmKjYf.js";const{useArgs:p}=__STORYBOOK_MODULE_PREVIEW_API__,{expect:m,fn:g,within:y}=__STORYBOOK_MODULE_TEST__,v={args:{isDisabled:!1,label:"빨강",name:"color",onChange:g(),position:"start",size:"medium",value:"red"},argTypes:{currentValue:{table:{disable:!0}},isDisabled:{control:"boolean",description:"if true, the component will be disabled",table:{category:"optional"}},label:{control:"text",description:"content of the component",table:{category:"required"},type:{name:"string",required:!0}},name:{control:"text",description:"name attribute of the input element",table:{category:"required",type:{summary:"string"}},type:{name:"string",required:!0}},onChange:{control:!1,description:"change event handler",table:{category:"optional",type:{summary:"(e: ChangeEvent<HTMLInputElement>) => void"}}},position:{control:{type:"inline-radio"},description:"radio position",options:["start","end"],table:{category:"optional",type:{summary:"start | end"}}},size:{control:{type:"inline-radio"},description:"radio size",options:["large","medium","small"],table:{category:"optional",type:{summary:"large | medium | small"}}},value:{control:"text",description:"value of the component",table:{category:"optional",type:{summary:"string"}},type:"string"}},component:l,parameters:{docs:{argTypes:{exclude:["currentValue","onChange"],sort:"requiredFirst"},controls:{exclude:["currentValue","onChange"]}},layout:"centered"},tags:["autodocs"],title:"Form/Radio"},e={args:{isDisabled:!1,label:"빨강",name:"color",position:"end",size:"medium",value:"red"},play:async({canvasElement:t})=>{const n=y(t).getByRole("radio",{name:"빨강"});await m(n).toBeChecked()},render:function(r){const[{value:n},c]=p(),d=a=>{c({value:a})};return u.jsx(l,{...r,currentValue:n,onChange:a=>d(a.currentTarget.value)})}};var o,s,i;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    isDisabled: false,
    label: '빨강',
    name: 'color',
    position: 'end',
    size: 'medium',
    value: 'red'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const radio1 = canvas.getByRole('radio', {
      name: '빨강'
    });
    await expect(radio1).toBeChecked();
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
}`,...(i=(s=e.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const f=["Default"];export{e as Default,f as __namedExportsOrder,v as default};
