import{j as t}from"./iframe-Jdzavq9_.js";import{F as m}from"./FormControl-pZHmOvr8.js";import{T as i}from"./TextField-BDb0kL56.js";const{useArgs:x}=__STORYBOOK_MODULE_PREVIEW_API__,F={args:{isDisabled:!1,isError:!1,isFullWidth:!1,isReadOnly:!1},argTypes:{isDisabled:{control:"boolean",description:"if true, the component will be disabled",table:{category:"optional"}},isError:{control:"boolean",description:"if true, the component will indicate error",table:{category:"optional"}},isFullWidth:{control:"boolean",description:"if true, the component will take up the full width of its container",table:{category:"optional"}},isReadOnly:{control:"boolean",description:"if true, user cannot change the value of the component",table:{category:"optional"}},type:{table:{disable:!0}}},component:i,parameters:{docs:{argTypes:{exclude:["type"],sort:"requiredFirst"},controls:{exclude:["type"]}},layout:"centered"},tags:["autodocs"],title:"Form/TextField"},r={args:{isDisabled:!1,isError:!1,isFullWidth:!1,isReadOnly:!1},render:function(n){const[{value:l},s]=x(),o=e=>{s({value:e})};return t.jsx(m,{helperText:"이름을 입력하세요.",helperTextId:"name-helper-text",labelText:"이름",children:t.jsx(i,{...n,"aria-describedby":"name-helper-text",maxLength:100,type:"text",value:l,onChange:e=>o(e.currentTarget.value),placeholder:"홍길동"})})}},a={args:{isDisabled:!1,isError:!1,isFullWidth:!1,isReadOnly:!1},render:function(n){const[{value:l},s]=x(),o=e=>{s({value:e})};return t.jsx(m,{helperText:"최소 10, 최대 100까지 입력할 수 있습니다.",helperTextId:"quantity-helper-text",labelText:"수량",children:t.jsx(i,{...n,"aria-describedby":"helper-quantity-text",max:100,min:10,type:"number",value:l,onChange:e=>o(e.currentTarget.value),placeholder:"7"})})}};var d,u,c;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    isDisabled: false,
    isError: false,
    isFullWidth: false,
    isReadOnly: false
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
    return <FormControl helperText="이름을 입력하세요." helperTextId="name-helper-text" labelText="이름">
        <TextField {...args} aria-describedby="name-helper-text" maxLength={100} type="text" value={value} onChange={e => handleChange(e.currentTarget.value)} placeholder="홍길동" />
      </FormControl>;
  }
}`,...(c=(u=r.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var p,h,g;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    isDisabled: false,
    isError: false,
    isFullWidth: false,
    isReadOnly: false
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
    return <FormControl helperText="최소 10, 최대 100까지 입력할 수 있습니다." helperTextId="quantity-helper-text" labelText="수량">
        <TextField {...args} aria-describedby="helper-quantity-text" max={100} min={10} type="number" value={value} onChange={e => handleChange(e.currentTarget.value)} placeholder="7" />
      </FormControl>;
  }
}`,...(g=(h=a.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};const v=["Default","Number"];export{r as Default,a as Number,v as __namedExportsOrder,F as default};
