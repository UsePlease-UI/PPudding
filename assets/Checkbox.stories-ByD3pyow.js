import{j as i}from"./iframe-Jdzavq9_.js";import{C as r}from"./index-QEUsLOWV.js";const{useArgs:d}=__STORYBOOK_MODULE_PREVIEW_API__,{fn:p}=__STORYBOOK_MODULE_TEST__,y={args:{checkedIcon:null,icon:null,isDisabled:!1,label:"사탕",onChange:p(),position:"end",size:"medium",value:"candy"},argTypes:{checkedIcon:{control:!1,description:"custom checked icon (svg element)",table:{category:"optional",type:{summary:"ReactNode"}}},icon:{control:!1,description:"custom default icon (svg element)",table:{category:"optional",type:{summary:"ReactNode"}}},isDisabled:{control:"boolean",description:"if true, the component will be disabled",table:{category:"optional"}},label:{control:"text",description:"content of the component",table:{category:"required"},type:{name:"string",required:!0}},onChange:{control:!1,description:"change event handler",table:{category:"optional",type:{summary:"(e: ChangeEvent<HTMLInputElement>) => void"}}},position:{control:{type:"inline-radio"},description:"checkbox position",options:["start","end"],table:{category:"optional",defaultValue:{summary:"end"},type:{summary:"start | end"}}},size:{control:{type:"inline-radio"},description:"checkbox size",options:["large","medium","small"],table:{category:"optional",defaultValue:{summary:"medium"},type:{summary:"large | medium | small"}}},value:{control:"text",description:"value of the component",table:{category:"optional",type:{summary:"string"}},type:"string"}},component:r,parameters:{docs:{argTypes:{sort:"requiredFirst"}},layout:"centered"},tags:["autodocs"],title:"Form/Checkbox"},e={args:{isDisabled:!1},render:function(s){const[{checked:t},c]=d(),l=()=>{c({checked:!t})};return i.jsx(r,{...s,checked:t,label:"사탕",value:"candy",onChange:l})}};var n,o,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(a=(o=e.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const h=["Default"];export{e as Default,h as __namedExportsOrder,y as default};
