import{j as a}from"./iframe-BuoardWh.js";import{C as c}from"./index-Dyu4zDZ7.js";const{expect:o,within:h}=__STORYBOOK_MODULE_TEST__,d={args:{children:null,gap:10,isRow:!0},argTypes:{children:{control:!1,description:"radio component",table:{type:{summary:"ReactNode"}}},className:{table:{disable:!0}},gap:{control:"number",description:"horizontal / vertical spacing of the component"},isRow:{control:"boolean",description:"if true, the component be shown horizontally"}},component:c.Group,parameters:{layout:"centered"},tags:["autodocs"],title:"Form/Checkbox/UI - 1. Checkbox Group"},t={args:{gap:10,isRow:!0},play:async({canvasElement:n})=>{const e=h(n),r=e.getByRole("group");await o(r).toBeInTheDocument(),await o(r).toHaveStyle("flex-direction: row");const u=e.getByRole("checkbox",{name:"사탕"});await o(u).toBeChecked();const p=e.getByRole("checkbox",{name:"초콜렛"});await o(p).not.toBeChecked()},render:function(e){return a.jsxs(c.Group,{...e,children:[a.jsx(c,{defaultChecked:!0,label:"사탕",value:"candy"}),a.jsx(c,{label:"초콜렛",value:"blue"})]})}};var s,l,i;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(i=(l=t.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const m=["Default"];export{t as Default,m as __namedExportsOrder,d as default};
