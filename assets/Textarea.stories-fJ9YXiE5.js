import{j as m}from"./jsx-runtime-D_zvdyIk.js";import{T as l}from"./Textarea-DPxiApp1.js";import"./iframe-xSyj_TgM.js";import"./FormControl-D2aD3kdj.js";import"./format-FJJUaZs2.js";const{useArgs:h}=__STORYBOOK_MODULE_PREVIEW_API__,L={args:{helperText:"이름을 입력하세요.",isAutoHeight:!0,isDisabled:!1,isError:!1,isReadOnly:!1,labelText:"이름"},argTypes:{helperText:{control:"text",description:"extra description of the component",table:{category:"optional"}},isAutoHeight:{control:"boolean",description:"if true, height will automatically increase, without being fixed",table:{category:"optional"}},isDisabled:{control:"boolean",description:"if true, the component will be disabled",table:{category:"optional"}},isError:{control:"boolean",description:"if true, the component will indicate error",table:{category:"optional"}},isReadOnly:{control:"boolean",description:"if true, user cannot change the value of the component",table:{category:"optional"}},labelText:{control:"text",description:"content of label component",table:{category:"optional"}}},component:l,parameters:{docs:{argTypes:{exclude:["value"],sort:"requiredFirst"}},layout:"centered"},tags:["autodocs"],title:"Form/Textarea"},t={args:{isAutoHeight:!1,value:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},render:function(a){const[{value:o},n]=h(),s=e=>{n({value:e})};return m.jsx(l,{...a,maxLength:100,value:o,isAutoHeight:!0,onChange:e=>s(e.currentTarget.value),placeholder:"Lorem Ipsum..."})}},r={args:{helperText:"Type Lorem Ipsum",isAutoHeight:!0,labelText:"Lorem Ipsum",value:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},render:function(a){const[{value:o},n]=h(),s=e=>{n({value:e})};return m.jsx(l,{...a,maxLength:2e3,value:o,onChange:e=>s(e.currentTarget.value),placeholder:"Lorem Ipsum..."})}};var i,u,c;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(u=t.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var p,g,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    helperText: 'Type Lorem Ipsum',
    isAutoHeight: true,
    labelText: 'Lorem Ipsum',
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
    return <Textarea {...args} maxLength={2000} value={value} onChange={e => handleChange(e.currentTarget.value)} placeholder="Lorem Ipsum..." />;
  }
}`,...(d=(g=r.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};const y=["Default","AutoHeight"];export{r as AutoHeight,t as Default,y as __namedExportsOrder,L as default};
