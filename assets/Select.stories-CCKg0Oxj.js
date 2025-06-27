import{r as t,j as o}from"./iframe-BuoardWh.js";import{F as h}from"./FormControl-Xq63dV1U.js";import{S as c}from"./Select-DB4q8Qtn.js";import{O as i}from"./constants-0pBEQA9X.js";const{useArgs:I}=__STORYBOOK_MODULE_PREVIEW_API__,x={args:{isDisabled:!1,isReadOnly:!1,options:i,placeholder:"선택",selected:""},argTypes:{isDisabled:{control:"boolean",description:"if true, the component will be disabled"},isReadOnly:{control:"boolean",description:"if true, user cannot change the value of the component"},onChange:{control:!1,description:"change event handler",table:{type:{summary:"(selected: string) => void"}}},options:{control:"object",description:"select options",table:{type:{summary:"{ label : string; value: string; idx?: string }"}}},placeholder:{control:"text",description:"a hint that will be displayed until user enters a value"},selected:{control:!1,description:"selected value",table:{type:{summary:"string"}},type:"string"}},component:c,parameters:{layout:"centered"},title:"Combobox/Select"},e={args:{isDisabled:!1,isReadOnly:!1,options:i,placeholder:"선택"},render:function(p){const[{selected:u},b]=I(),s=t.useId(),l=t.useId(),r=t.useId(),m=g=>{b({selected:g})};return o.jsx(h,{helperText:"하나의 값을 선택하세요.",helperTextId:r,inputId:s,labelText:"한식 메뉴 추천",labelTextId:l,children:o.jsx(c,{...p,"aria-describedby":r,"aria-labelledby":l,id:s,selected:u,onChange:m})})}};var a,n,d;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    isDisabled: false,
    isReadOnly: false,
    options: OPTIONS,
    placeholder: '선택'
  },
  render: function Render(args) {
    const [{
      selected
    }, updateArgs] = useArgs();
    const buttonId = useId();
    const labelTextId = useId();
    const helperTextId = useId();
    const handleChange = (newSelected: string) => {
      updateArgs({
        selected: newSelected
      });
    };
    return <FormControl helperText="하나의 값을 선택하세요." helperTextId={helperTextId} inputId={buttonId} labelText="한식 메뉴 추천" labelTextId={labelTextId}>
        <Select {...args} aria-describedby={helperTextId} aria-labelledby={labelTextId} id={buttonId} selected={selected} onChange={handleChange} />
      </FormControl>;
  }
}`,...(d=(n=e.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};const f=["Default"],C=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:f,default:x},Symbol.toStringTag,{value:"Module"}));export{C as S};
