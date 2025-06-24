import{j as c}from"./iframe-Jdzavq9_.js";import{C as a}from"./index-QEUsLOWV.js";const{expect:o,within:h}=__STORYBOOK_MODULE_TEST__,x={args:{children:null,gap:10,isRow:!0},argTypes:{children:{control:!1,description:"radio component",table:{category:"required",type:{summary:"ReactNode"}}},className:{table:{disable:!0}},gap:{control:"number",description:"horizontal / vertical spacing of the component",table:{category:"optional"}},isRow:{control:"boolean",description:"if true, the component be shown horizontally",table:{category:"optional"}}},component:a.Group,parameters:{docs:{argTypes:{sort:"requiredFirst"}},layout:"centered"},tags:["autodocs"],title:"Form/Checkbox.Group"},t={args:{gap:10,isRow:!0},play:async({canvasElement:r})=>{const e=h(r),n=e.getByRole("group");await o(n).toBeInTheDocument(),await o(n).toHaveStyle("flex-direction: row");const p=e.getByRole("checkbox",{name:"사탕"});await o(p).toBeChecked();const u=e.getByRole("checkbox",{name:"초콜렛"});await o(u).not.toBeChecked()},render:function(e){return c.jsxs(a.Group,{...e,children:[c.jsx(a,{defaultChecked:!0,label:"사탕",value:"candy"}),c.jsx(a,{label:"초콜렛",value:"blue"})]})}};var s,l,i;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    gap: 10,
    isRow: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const checkboxGroup = canvas.getByRole('group');
    await expect(checkboxGroup).toBeInTheDocument();
    await expect(checkboxGroup).toHaveStyle('flex-direction: row');
    const checkbox1 = canvas.getByRole('checkbox', {
      name: '사탕'
    });
    await expect(checkbox1).toBeChecked();
    const checkbox2 = canvas.getByRole('checkbox', {
      name: '초콜렛'
    });
    await expect(checkbox2).not.toBeChecked();
  },
  render: function Render(args) {
    return <Checkbox.Group {...args}>
        <Checkbox defaultChecked label="사탕" value="candy" />
        <Checkbox label="초콜렛" value="blue" />
      </Checkbox.Group>;
  }
}`,...(i=(l=t.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const m=["Default"];export{t as Default,m as __namedExportsOrder,x as default};
