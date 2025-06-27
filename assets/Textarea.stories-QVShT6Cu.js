import{j as i,r as d}from"./iframe-BuoardWh.js";import{F as f}from"./FormControl-Xq63dV1U.js";import{T as l}from"./Textarea-BQyw0WA9.js";const{useArgs:I}=__STORYBOOK_MODULE_PREVIEW_API__,C={args:{isAutoHeight:!0,isDisabled:!1,isError:!1,isReadOnly:!1},argTypes:{isAutoHeight:{control:"boolean",description:"if true, height will automatically increase, without being fixed"},isDisabled:{control:"boolean",description:"if true, the component will be disabled"},isError:{control:"boolean",description:"if true, the component will indicate error"},isReadOnly:{control:"boolean",description:"if true, user cannot change the value of the component"},value:{table:{disable:!0}}},component:l,parameters:{layout:"centered"},tags:["autodocs"],title:"Form/Textarea"},t={args:{isAutoHeight:!1,value:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},render:function(o){const[{value:s},n]=I(),r=e=>{n({value:e})};return i.jsx(l,{...o,maxLength:100,value:s,isAutoHeight:!0,onChange:e=>r(e.currentTarget.value),placeholder:"Lorem Ipsum..."})}},a={args:{isAutoHeight:!0,value:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},render:function(o){const[{value:s},n]=I(),r=d.useId(),e=d.useId(),T=u=>{n({value:u})};return i.jsx(f,{helperText:"Type Lorem Ipsum",helperTextId:e,inputId:r,labelText:"Lorem Ipsum",children:i.jsx(l,{...o,"aria-describedby":e,id:r,maxLength:2e3,value:s,onChange:u=>T(u.currentTarget.value),placeholder:"Lorem Ipsum..."})})}};var c,p,m;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var g,h,x;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(x=(h=a.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const E=["Example1Default","Example2AutoHeight"];export{t as Example1Default,a as Example2AutoHeight,E as __namedExportsOrder,C as default};
