import{j as e}from"./jsx-runtime-BjgbQsUx.js";import{T as a}from"./index-zv8Ed5B9.js";import"./index-D2MAbzvX.js";import"./index-DDT2H6na.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./format-BvyHdC65.js";const{useState:b}=__STORYBOOK_MODULE_PREVIEW_API__,P={argTypes:{children:{table:{disable:!0}}},component:a,parameters:{layout:"centered"},tags:["autodocs"],title:"Tabs/Tabs"},l={render:function(i){const[n,u]=b(1),d=o=>{u(o)};return e.jsxs(a,{className:"min-w-192",children:[e.jsxs(a.Tab,{...i,"aria-label":"navigation",value:n,onChange:d,children:[e.jsx(a.Item,{index:1,label:"1",value:n}),e.jsx(a.Item,{index:2,label:"2",value:n}),e.jsx(a.Item,{index:3,label:"3",value:n})]}),e.jsx(a.Panel,{index:1,value:n,children:e.jsx("p",{children:"Tab Panel #1"})}),e.jsx(a.Panel,{index:2,value:n,children:e.jsx("p",{children:"Tab Panel #2"})}),e.jsx(a.Panel,{index:3,value:n,children:e.jsx("p",{children:"Tab Panel #3"})})]})}};var s,t,r;l.parameters={...l.parameters,docs:{...(s=l.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: function Render(args) {
    const [value, setValue] = useState(1);
    const handleChange = (newValue: number) => {
      setValue(newValue);
    };
    return <Tabs className="min-w-192">
        <Tabs.Tab {...args} aria-label="navigation" value={value} onChange={handleChange}>
          <Tabs.Item index={1} label="1" value={value} />
          <Tabs.Item index={2} label="2" value={value} />
          <Tabs.Item index={3} label="3" value={value} />
        </Tabs.Tab>
        <Tabs.Panel index={1} value={value}>
          <p>Tab Panel #1</p>
        </Tabs.Panel>
        <Tabs.Panel index={2} value={value}>
          <p>Tab Panel #2</p>
        </Tabs.Panel>
        <Tabs.Panel index={3} value={value}>
          <p>Tab Panel #3</p>
        </Tabs.Panel>
      </Tabs>;
  }
}`,...(r=(t=l.parameters)==null?void 0:t.docs)==null?void 0:r.source}}};const j=["Default"];export{l as Default,j as __namedExportsOrder,P as default};
