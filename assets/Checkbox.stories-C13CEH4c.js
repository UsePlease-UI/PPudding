import{j as l}from"./jsx-runtime-BjgbQsUx.js";import{f as d}from"./index-BsVblSul.js";import{C as r}from"./CheckboxGroup-DjPIJx3T.js";import"./index-D2MAbzvX.js";import"./index-DDT2H6na.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./format-BvyHdC65.js";const{useArgs:p}=__STORYBOOK_MODULE_PREVIEW_API__,x={args:{checkedIcon:null,icon:null,isDisabled:!1,label:"사탕",onChange:d(),position:"start",size:"small",value:"candy"},argTypes:{checkedIcon:{control:!1,description:"custom checked icon (svg element)",table:{category:"optional",type:{summary:"ReactNode"}}},icon:{control:!1,description:"custom default icon (svg element)",table:{category:"optional",type:{summary:"ReactNode"}}},isDisabled:{control:"boolean",description:"if true, the component will be disabled",table:{category:"optional"}},label:{control:"text",description:"content of the component",table:{category:"required"},type:{name:"string",required:!0}},onChange:{control:!1,description:"change event handler",table:{category:"optional",type:{summary:"(e: ChangeEvent<HTMLInputElement>) => void"}}},position:{control:{type:"inline-radio"},description:"checkbox position",options:["start","end"],table:{category:"optional",type:{summary:"start | end"}}},size:{control:{type:"inline-radio"},description:"checkbox size",options:["large","medium","small"],table:{category:"optional",type:{summary:"large | medium | small"}}},value:{control:"text",description:"value of the component",table:{category:"optional",type:{summary:"string"}},type:"string"}},component:r,parameters:{docs:{argTypes:{sort:"requiredFirst"}},layout:"centered"},tags:["autodocs"],title:"Form/Checkbox"},e={args:{isDisabled:!1},render:function(s){const[{checked:t},c]=p(),i=()=>{c({checked:!t})};return l.jsx(r,{...s,checked:t,label:"사탕",value:"candy",onChange:i})}};var o,n,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(a=(n=e.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const C=["Default"];export{e as Default,C as __namedExportsOrder,x as default};
