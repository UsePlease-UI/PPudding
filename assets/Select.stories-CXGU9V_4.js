import{r as t,j as l}from"./iframe-Jdzavq9_.js";import{F as h}from"./FormControl-pZHmOvr8.js";import{S as i}from"./Select-TmKRNZrE.js";import{O as c}from"./constants-yhfyZnpV.js";const{useArgs:y}=__STORYBOOK_MODULE_PREVIEW_API__,I={args:{isDisabled:!1,isReadOnly:!1,options:c,placeholder:"선택",selected:""},argTypes:{isDisabled:{control:"boolean",description:"if true, the component will be disabled",table:{category:"optional"}},isReadOnly:{control:"boolean",description:"if true, user cannot change the value of the component",table:{category:"optional"}},onChange:{control:!1,description:"change event handler",table:{category:"optional",type:{summary:"(selected: string) => void"}}},options:{control:"object",description:"select options",table:{category:"optional",type:{summary:"{ label : string; value: string; idx?: string }"}}},placeholder:{control:"text",description:"a hint that will be displayed until user enters a value",table:{category:"optional"}},selected:{control:!1,description:"selected value",table:{category:"required",type:{summary:"string"}},type:"string"}},component:i,parameters:{docs:{argTypes:{sort:"requiredFirst"}},layout:"centered"},title:"Combobox/Select"},e={args:{isDisabled:!1,isReadOnly:!1,options:c,placeholder:"선택"},render:function(p){const[{selected:u},b]=y(),o=t.useId(),r=t.useId(),s=t.useId(),g=m=>{b({selected:m})};return l.jsx(h,{helperText:"하나의 값을 선택하세요.",helperTextId:s,inputId:o,labelText:"한식 메뉴 추천",labelTextId:r,children:l.jsx(i,{...p,"aria-describedby":s,"aria-labelledby":r,id:o,selected:u,onChange:g})})}};var a,n,d;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(d=(n=e.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};const x=["Default"],C=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:x,default:I},Symbol.toStringTag,{value:"Module"}));export{C as S};
