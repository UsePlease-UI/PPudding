import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{a as g,R as c}from"./RadioGroup-DgwC2Q89.js";import"./iframe-Bvnjis0j.js";import"./format-FJJUaZs2.js";const{useArgs:m}=__STORYBOOK_MODULE_PREVIEW_API__,{expect:r,within:h}=__STORYBOOK_MODULE_TEST__,_={args:{children:null,gap:10,isRow:!0,value:"red"},argTypes:{children:{control:!1,description:"radio component",table:{category:"required",type:{summary:"ReactNode"}}},className:{table:{disable:!0}},gap:{control:"number",description:"horizontal / vertical spacing of the component",table:{category:"optional"}},isRow:{control:"boolean",description:"if true, the component be shown horizontally",table:{category:"optional"}},onChange:{control:!1,description:"change event handler",table:{category:"required",type:{summary:"(e: ChangeEvent<HTMLInputElement>) => void"}}},value:{control:!1,description:"selected radio's value",table:{category:"required",type:{summary:"string"}},type:"string"}},component:g,parameters:{docs:{argTypes:{sort:"requiredFirst"}},layout:"centered"},tags:["autodocs"],title:"Form/RadioGroup"},a={args:{gap:10,isRow:!0,value:"red"},render:function(e){const[{value:o},t]=m(),n=s=>{t({value:s})};return l.jsxs(g,{...e,value:o,onChange:s=>n(s.currentTarget.value),children:[l.jsx(c,{label:"빨강",name:"color",value:"red"}),l.jsx(c,{label:"파랑",name:"color",value:"blue"})]})}};a.play=async({canvasElement:i})=>{const e=h(i),o=e.getByRole("radiogroup");await r(o).toBeInTheDocument(),await r(o).toHaveStyle("flex-direction: row");const t=e.getByRole("radio",{name:"빨강"});await r(t).toBeChecked();const n=e.getByRole("radio",{name:"파랑"});await r(n).not.toBeChecked()};var u,d,p;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    gap: 10,
    isRow: true,
    value: 'red'
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
    return <RadioGroup {...args} value={value} onChange={e => handleChange(e.currentTarget.value)}>
        <Radio label="빨강" name="color" value="red" />
        <Radio label="파랑" name="color" value="blue" />
      </RadioGroup>;
  }
}`,...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const f=["Default"];export{a as Default,f as __namedExportsOrder,_ as default};
