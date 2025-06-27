import{j as i}from"./iframe-BuoardWh.js";import{C as s}from"./index-Dyu4zDZ7.js";const{useArgs:d}=__STORYBOOK_MODULE_PREVIEW_API__,{fn:m}=__STORYBOOK_MODULE_TEST__,g={args:{checkedIcon:null,icon:null,isDisabled:!1,label:"사탕",onChange:m(),position:"end",size:"medium",value:"candy"},argTypes:{checkedIcon:{control:!1,description:"custom checked icon (svg element)",table:{type:{summary:"ReactNode"}}},icon:{control:!1,description:"custom default icon (svg element)",table:{type:{summary:"ReactNode"}}},isDisabled:{control:"boolean",description:"if true, the component will be disabled"},label:{control:"text",description:"content of the component"},onChange:{control:!1,description:"change event handler",table:{type:{summary:"(e: ChangeEvent<HTMLInputElement>) => void"}}},position:{control:{type:"inline-radio"},description:"checkbox position",options:["start","end"],table:{defaultValue:{summary:"end"},type:{summary:"start | end"}}},size:{control:{type:"inline-radio"},description:"checkbox size",options:["large","medium","small"],table:{defaultValue:{summary:"medium"},type:{summary:"large | medium | small"}}},value:{control:"text",description:"value of the component",table:{type:{summary:"string"}},type:"string"}},component:s,parameters:{layout:"centered"},tags:["autodocs"],title:"Form/Checkbox/UI - 2. Checkbox"},e={args:{isDisabled:!1},render:function(c){const[{checked:n},r]=d(),l=()=>{r({checked:!n})};return i.jsx(s,{...c,checked:n,label:"사탕",value:"candy",onChange:l})}};var t,o,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    isDisabled: false
  },
  render: function Render(args) {
    const [{
      checked
    }, updateArgs] = useArgs();
    const handleChange = () => {
      updateArgs({
        checked: !checked
      });
    };
    return <Checkbox {...args} checked={checked} label="사탕" value="candy" onChange={handleChange} />;
  }
}`,...(a=(o=e.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const b=["Default"];export{e as Default,b as __namedExportsOrder,g as default};
