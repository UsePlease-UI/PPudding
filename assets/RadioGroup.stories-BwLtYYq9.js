import{j as c}from"./iframe-BBfB5-06.js";import{R as r}from"./index-BMtmKjYf.js";const{useArgs:g}=__STORYBOOK_MODULE_PREVIEW_API__,{expect:o,within:m}=__STORYBOOK_MODULE_TEST__,y={args:{children:null,gap:10,isRow:!0,value:"red"},argTypes:{children:{control:!1,description:"radio component",table:{category:"required",type:{summary:"ReactNode"}}},className:{table:{disable:!0}},gap:{control:"number",description:"horizontal / vertical spacing of the component",table:{category:"optional"}},isRow:{control:"boolean",description:"if true, the component be shown horizontally",table:{category:"optional"}},onChange:{control:!1,description:"change event handler",table:{category:"required",type:{summary:"(e: ChangeEvent<HTMLInputElement>) => void"}}},value:{control:!1,description:"selected radio's value",table:{category:"required",type:{summary:"string"}},type:"string"}},component:r.Group,parameters:{docs:{argTypes:{sort:"requiredFirst"}},layout:"centered"},tags:["autodocs"],title:"Form/Radio.Group"},t={args:{gap:10,isRow:!0,value:"red"},play:async({canvasElement:i})=>{const e=m(i),a=e.getByRole("radiogroup");await o(a).toBeInTheDocument(),await o(a).toHaveStyle("flex-direction: row");const n=e.getByRole("radio",{name:"빨강"});await o(n).toBeChecked();const s=e.getByRole("radio",{name:"파랑"});await o(s).not.toBeChecked()},render:function(e){const[{value:a},n]=g(),s=l=>{n({value:l})};return c.jsxs(r.Group,{...e,value:a,onChange:l=>s(l.currentTarget.value),children:[c.jsx(r,{label:"빨강",name:"color",value:"red"}),c.jsx(r,{label:"파랑",name:"color",value:"blue"})]})}};var d,u,p;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    gap: 10,
    isRow: true,
    value: 'red'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const radioGroup = canvas.getByRole('radiogroup');
    await expect(radioGroup).toBeInTheDocument();
    await expect(radioGroup).toHaveStyle('flex-direction: row');
    const radio1 = canvas.getByRole('radio', {
      name: '빨강'
    });
    await expect(radio1).toBeChecked();
    const radio2 = canvas.getByRole('radio', {
      name: '파랑'
    });
    await expect(radio2).not.toBeChecked();
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
    return <Radio.Group {...args} value={value} onChange={e => handleChange(e.currentTarget.value)}>
        <Radio label="빨강" name="color" value="red" />
        <Radio label="파랑" name="color" value="blue" />
      </Radio.Group>;
  }
}`,...(p=(u=t.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};const R=["Default"];export{t as Default,R as __namedExportsOrder,y as default};
