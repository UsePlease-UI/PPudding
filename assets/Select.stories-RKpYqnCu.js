import{j as h}from"./jsx-runtime-BjgbQsUx.js";import{S as s}from"./Select-DpEy-lFH.js";import{O as i}from"./constants-B3kauI-G.js";import"./index-D2MAbzvX.js";import"./index-DDT2H6na.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./usePosition-BmVnmNgh.js";import"./index-DttxB2Wl.js";import"./index-CTOC-uzv.js";import"./format-BvyHdC65.js";import"./FormControl-CI2cCxHg.js";import"./Listbox-C6x8YZCb.js";import"./styles-D32WepGD.js";import"./ChevronDownIcon-Cs31zoc3.js";import"./v4-CQkTLCs1.js";const{useArgs:y}=__STORYBOOK_MODULE_PREVIEW_API__,q={args:{helperText:"하나의 값을 선택해 주세요.",isDisabled:!1,isReadOnly:!1,label:"",labelText:"test",options:i,placeholder:"전체",value:""},argTypes:{helperText:{control:"text",description:"extra description of the component",table:{category:"optional"}},isDisabled:{control:"boolean",description:"if true, the component will be disabled",table:{category:"optional"}},isReadOnly:{control:"boolean",description:"if true, user cannot change the value of the component",table:{category:"optional"}},label:{control:!1,description:"content of the component",table:{category:"required"},type:"string"},labelText:{control:"text",description:"content of label component",table:{category:"optional"}},onChange:{control:!1,description:"change event handler",table:{category:"optional",type:{summary:"(e: ChangeEvent<HTMLInputElement>) => void"}}},options:{control:"object",description:"select options",table:{category:"optional",type:{summary:"{ label : string; value: string; idx?: string }"}}},placeholder:{control:"text",description:"a hint that will be displayed until user enters a value",table:{category:"optional"}},value:{control:!1,description:"selected value",table:{category:"required",type:{summary:"string"}},type:"string"}},component:s,parameters:{docs:{argTypes:{sort:"requiredFirst"}},layout:"centered"},tags:["autodocs"],title:"Combobox/Select"},t={args:{helperText:"하나의 값을 선택해 주세요.",isDisabled:!1,isReadOnly:!1,labelText:"test",options:i,placeholder:"전체"},render:function(p){const[{label:c,options:d,value:u},g]=y(),m=e=>{var o,a;g({label:(a=(o=d.filter(b=>b.value===e))==null?void 0:o[0])==null?void 0:a.label,value:e})};return h.jsx(s,{...p,label:c,value:u,onChange:e=>m(e.currentTarget.value)})}};var n,l,r;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    helperText: '하나의 값을 선택해 주세요.',
    isDisabled: false,
    isReadOnly: false,
    labelText: 'test',
    options: OPTIONS,
    placeholder: '전체'
  },
  render: function Render(args) {
    const [{
      label,
      options,
      value
    }, updateArgs] = useArgs();
    const handleChange = (newValue: string) => {
      updateArgs({
        label: options.filter((val: OptionsType) => val.value === newValue)?.[0]?.label,
        value: newValue
      });
    };
    return <Select {...args} label={label} value={value} onChange={e => handleChange(e.currentTarget.value)} />;
  }
}`,...(r=(l=t.parameters)==null?void 0:l.docs)==null?void 0:r.source}}};const V=["Default"];export{t as Default,V as __namedExportsOrder,q as default};
