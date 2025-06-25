import{j as u,r as c}from"./iframe-BBfB5-06.js";import{F as f}from"./FormControl-O8oMb4UH.js";import{T as l}from"./Textarea-xA5CwABe.js";const{useArgs:I}=__STORYBOOK_MODULE_PREVIEW_API__,y={args:{isAutoHeight:!0,isDisabled:!1,isError:!1,isReadOnly:!1},argTypes:{isAutoHeight:{control:"boolean",description:"if true, height will automatically increase, without being fixed",table:{category:"optional"}},isDisabled:{control:"boolean",description:"if true, the component will be disabled",table:{category:"optional"}},isError:{control:"boolean",description:"if true, the component will indicate error",table:{category:"optional"}},isReadOnly:{control:"boolean",description:"if true, user cannot change the value of the component",table:{category:"optional"}}},component:l,parameters:{docs:{argTypes:{exclude:["value"],sort:"requiredFirst"}},layout:"centered"},tags:["autodocs"],title:"Form/Textarea"},r={args:{isAutoHeight:!1,value:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},render:function(o){const[{value:s},n]=I(),t=e=>{n({value:e})};return u.jsx(l,{...o,maxLength:100,value:s,isAutoHeight:!0,onChange:e=>t(e.currentTarget.value),placeholder:"Lorem Ipsum..."})}},a={args:{isAutoHeight:!0,value:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},render:function(o){const[{value:s},n]=I(),t=c.useId(),e=c.useId(),v=i=>{n({value:i})};return u.jsx(f,{helperText:"Type Lorem Ipsum",helperTextId:e,inputId:t,labelText:"Lorem Ipsum",children:u.jsx(l,{...o,"aria-describedby":e,id:t,maxLength:2e3,value:s,onChange:i=>v(i.currentTarget.value),placeholder:"Lorem Ipsum..."})})}};var d,p,g;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    isAutoHeight: false,
    value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
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
    return <Textarea {...args} maxLength={100} value={value} isAutoHeight onChange={e => handleChange(e.currentTarget.value)} placeholder="Lorem Ipsum..." />;
  }
}`,...(g=(p=r.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var m,h,x;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    isAutoHeight: true,
    value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  render: function Render(args) {
    const [{
      value
    }, updateArgs] = useArgs();
    const inputId = useId();
    const helperTextId = useId();
    const handleChange = (newValue: string) => {
      updateArgs({
        value: newValue
      });
    };
    return <FormControl helperText="Type Lorem Ipsum" helperTextId={helperTextId} inputId={inputId} labelText="Lorem Ipsum">
        <Textarea {...args} aria-describedby={helperTextId} id={inputId} maxLength={2000} value={value} onChange={e => handleChange(e.currentTarget.value)} placeholder="Lorem Ipsum..." />
      </FormControl>;
  }
}`,...(x=(h=a.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const C=["Default","AutoHeight"];export{a as AutoHeight,r as Default,C as __namedExportsOrder,y as default};
