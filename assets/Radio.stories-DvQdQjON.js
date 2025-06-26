import{j as u}from"./iframe-BLazJ4V0.js";import{R as l}from"./index-BlNKi0yD.js";const{useArgs:m}=__STORYBOOK_MODULE_PREVIEW_API__,{expect:p,fn:g,within:h}=__STORYBOOK_MODULE_TEST__,b={args:{isDisabled:!1,label:"빨강",name:"color",onChange:g(),position:"start",size:"medium",value:"red"},argTypes:{currentValue:{table:{disable:!0}},isDisabled:{control:"boolean",description:"if true, the component will be disabled"},label:{control:"text",description:"content of the component"},name:{control:"text",description:"name attribute of the input element",table:{type:{summary:"string"}}},onChange:{control:!1,description:"change event handler",table:{type:{summary:"(e: ChangeEvent<HTMLInputElement>) => void"}}},position:{control:{type:"inline-radio"},description:"radio position",options:["start","end"],table:{type:{summary:"start | end"}}},size:{control:{type:"inline-radio"},description:"radio size",options:["large","medium","small"],table:{type:{summary:"large | medium | small"}}},value:{control:"text",description:"value of the component",table:{type:{summary:"string"}},type:"string"}},component:l,parameters:{layout:"centered"},tags:["autodocs"],title:"Form/Radio/UI - 2. Radio"},e={args:{isDisabled:!1,label:"빨강",name:"color",position:"end",size:"medium",value:"red"},play:async({canvasElement:t})=>{const n=h(t).getByRole("radio",{name:"빨강"});await p(n).toBeChecked()},render:function(o){const[{value:n},c]=m(),d=a=>{c({value:a})};return u.jsx(l,{...o,currentValue:n,onChange:a=>d(a.currentTarget.value)})}};var r,s,i;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(s=e.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const f=["Default"];export{e as Default,f as __namedExportsOrder,b as default};
