import{j as h}from"./jsx-runtime-D_zvdyIk.js";import{S as s}from"./Select-LryTnu42.js";import{O as i}from"./constants-DXFrAw5b.js";import"./iframe-xSyj_TgM.js";import"./ClickAwayListener-PTds9hu3.js";import"./Divider-d1f6oLpb.js";import"./format-FJJUaZs2.js";import"./index-B6xylhcj.js";import"./index-Cei-x5BZ.js";import"./FormControl-D2aD3kdj.js";import"./usePosition-wcTbM3nq.js";import"./styles-CVbDQEN-.js";import"./ChevronDownIcon-BzM56-uf.js";const{useArgs:f}=__STORYBOOK_MODULE_PREVIEW_API__,w={args:{helperText:"하나의 값을 선택해 주세요.",isDisabled:!1,isReadOnly:!1,label:"",labelText:"test",options:i,placeholder:"전체",value:""},argTypes:{helperText:{control:"text",description:"extra description of the component",table:{category:"optional"}},isDisabled:{control:"boolean",description:"if true, the component will be disabled",table:{category:"optional"}},isReadOnly:{control:"boolean",description:"if true, user cannot change the value of the component",table:{category:"optional"}},label:{control:!1,description:"content of the component",table:{category:"required"},type:"string"},labelText:{control:"text",description:"content of label component",table:{category:"optional"}},onChange:{control:!1,description:"change event handler",table:{category:"optional",type:{summary:"(e: ChangeEvent<HTMLInputElement>) => void"}}},options:{control:"object",description:"select options",table:{category:"optional",type:{summary:"{ label : string; value: string; idx?: string }"}}},placeholder:{control:"text",description:"a hint that will be displayed until user enters a value",table:{category:"optional"}},value:{control:!1,description:"selected value",table:{category:"required",type:{summary:"string"}},type:"string"}},component:s,parameters:{docs:{argTypes:{sort:"requiredFirst"}},layout:"centered"},tags:["autodocs"],title:"Combobox/Select"},e={args:{helperText:"하나의 값을 선택하세요.",isDisabled:!1,isReadOnly:!1,labelText:"한식 메뉴 추천",options:i,placeholder:"전체"},render:function(p){const[{label:c,options:d,value:u},g]=f(),m=t=>{var o,a;g({label:(a=(o=d.filter(b=>b.value===t))==null?void 0:o[0])==null?void 0:a.label,value:t})};return h.jsx(s,{...p,label:c,value:u,onChange:m})}};var n,l,r;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    helperText: '하나의 값을 선택하세요.',
    isDisabled: false,
    isReadOnly: false,
    labelText: '한식 메뉴 추천',
    options: OPTIONS,
    placeholder: '전체'
  },
  render: function Render(args) {
    const [{
      label,
      options,
      value
    }, updateArgs] = useArgs();
    const handleChange = (newValue: number | string) => {
      const list = options as typeof OPTIONS;
      updateArgs({
        label: list.filter(val => val.value === newValue)?.[0]?.label,
        value: newValue
      });
    };
    return <Select {...args} label={label} value={value} onChange={handleChange} />;
  }
}`,...(r=(l=e.parameters)==null?void 0:l.docs)==null?void 0:r.source}}};const q=["Default"];export{e as Default,q as __namedExportsOrder,w as default};
