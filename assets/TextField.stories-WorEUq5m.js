import{j as h}from"./jsx-runtime-BjgbQsUx.js";import{T as n}from"./TextField-x0uPwc1f.js";import"./index-D2MAbzvX.js";import"./index-DDT2H6na.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./FormControl-CI2cCxHg.js";import"./format-BvyHdC65.js";const{useArgs:m}=__STORYBOOK_MODULE_PREVIEW_API__,E={args:{helperText:"이름을 입력하세요.",isDisabled:!1,isError:!1,isFullWidth:!1,isReadOnly:!1,labelText:"이름"},argTypes:{helperText:{control:"text",description:"extra description of the component",table:{category:"optional"}},isDisabled:{control:"boolean",description:"if true, the component will be disabled",table:{category:"optional"}},isError:{control:"boolean",description:"if true, the component will indicate error",table:{category:"optional"}},isFullWidth:{control:"boolean",description:"if true, the component will take up the full width of its container",table:{category:"optional"}},isReadOnly:{control:"boolean",description:"if true, user cannot change the value of the component",table:{category:"optional"}},labelText:{control:"text",description:"content of label component",table:{category:"optional"}}},component:n,parameters:{docs:{argTypes:{exclude:["type"],sort:"requiredFirst"},controls:{exclude:["type"]}},layout:"centered"},tags:["autodocs"],title:"Form/TextField"},t={args:{helperText:"이름을 입력하세요.",isDisabled:!1,isError:!1,isFullWidth:!1,isReadOnly:!1,labelText:"이름"},render:function(r){const[{value:l},o]=m(),s=e=>{o({value:e})};return h.jsx(n,{...r,maxLength:100,type:"text",value:l,onChange:e=>s(e.currentTarget.value),placeholder:"홍길동"})}},a={args:{helperText:"최소 10, 최대 100까지 입력할 수 있습니다.",isDisabled:!1,isError:!1,isFullWidth:!1,isReadOnly:!1,labelText:"수량"},render:function(r){const[{value:l},o]=m(),s=e=>{o({value:e})};return h.jsx(n,{...r,max:100,min:10,type:"number",value:l,onChange:e=>s(e.currentTarget.value),placeholder:"7"})}};var i,c,u;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    helperText: '이름을 입력하세요.',
    isDisabled: false,
    isError: false,
    isFullWidth: false,
    isReadOnly: false,
    labelText: '이름'
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
    return <TextField {...args} maxLength={100} type="text" value={value} onChange={e => handleChange(e.currentTarget.value)} placeholder="홍길동" />;
  }
}`,...(u=(c=t.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var d,p,g;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    helperText: '최소 10, 최대 100까지 입력할 수 있습니다.',
    isDisabled: false,
    isError: false,
    isFullWidth: false,
    isReadOnly: false,
    labelText: '수량'
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
    return <TextField {...args} max={100} min={10} type="number" value={value} onChange={e => handleChange(e.currentTarget.value)} placeholder="7" />;
  }
}`,...(g=(p=a.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};const O=["Default","Number"];export{t as Default,a as Number,O as __namedExportsOrder,E as default};
