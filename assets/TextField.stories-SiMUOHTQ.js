import{r as g,j as t}from"./iframe-BuoardWh.js";import{F as f}from"./FormControl-Xq63dV1U.js";import{T as d}from"./TextField-CvQZJ6eT.js";const{useArgs:b}=__STORYBOOK_MODULE_PREVIEW_API__,E={args:{isDisabled:!1,isError:!1,isFullWidth:!1,isReadOnly:!1},argTypes:{isDisabled:{control:"boolean",description:"if true, the component will be disabled"},isError:{control:"boolean",description:"if true, the component will indicate error"},isFullWidth:{control:"boolean",description:"if true, the component will take up the full width of its container"},isReadOnly:{control:"boolean",description:"if true, user cannot change the value of the component"},type:{table:{disable:!0}}},component:d,parameters:{layout:"centered"},tags:["autodocs"],title:"Form/TextField"},n={args:{isDisabled:!1,isError:!1,isFullWidth:!1,isReadOnly:!1},render:function(l){const[{value:s},o]=b(),r=g.useId(),i=e=>{o({value:e})};return t.jsx(f,{helperText:"이름을 입력하세요.",helperTextId:"name-helper-text",inputId:r,labelText:"이름",children:t.jsx(d,{...l,"aria-describedby":"name-helper-text",id:r,maxLength:100,type:"text",value:s,onChange:e=>i(e.currentTarget.value),placeholder:"홍길동"})})}},a={args:{isDisabled:!1,isError:!1,isFullWidth:!1,isReadOnly:!1},render:function(l){const[{value:s},o]=b(),r=g.useId(),i=e=>{o({value:e})};return t.jsx(f,{helperText:"최소 10, 최대 100까지 입력할 수 있습니다.",helperTextId:"quantity-helper-text",inputId:r,labelText:"수량",children:t.jsx(d,{...l,"aria-describedby":"quantity-helper-text",id:r,max:100,min:10,type:"number",value:s,onChange:e=>i(e.currentTarget.value),placeholder:"7"})})}};var u,c,p;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
    const id = useId();
    const handleChange = (newValue: string) => {
      updateArgs({
        value: newValue
      });
    };
    return <FormControl helperText="이름을 입력하세요." helperTextId="name-helper-text" inputId={id} labelText="이름">
        <TextField {...args} aria-describedby="name-helper-text" id={id} maxLength={100} type="text" value={value} onChange={e => handleChange(e.currentTarget.value)} placeholder="홍길동" />
      </FormControl>;
  }
}`,...(p=(c=n.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var h,m,x;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
    const id = useId();
    const handleChange = (newValue: string) => {
      updateArgs({
        value: newValue
      });
    };
    return <FormControl helperText="최소 10, 최대 100까지 입력할 수 있습니다." helperTextId="quantity-helper-text" inputId={id} labelText="수량">
        <TextField {...args} aria-describedby="quantity-helper-text" id={id} max={100} min={10} type="number" value={value} onChange={e => handleChange(e.currentTarget.value)} placeholder="7" />
      </FormControl>;
  }
}`,...(x=(m=a.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};const C=["Example1Default","Example2Number"];export{n as Example1Default,a as Example2Number,C as __namedExportsOrder,E as default};
