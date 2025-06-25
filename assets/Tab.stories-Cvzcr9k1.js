import{r as c,j as e}from"./iframe-BBfB5-06.js";import{T as a}from"./index-DNUPxRL9.js";const T={args:{children:null},argTypes:{children:{control:!1,description:"Tab Item",table:{category:"required",type:{summary:"ReactNode"}}}},component:a.Tab,title:"Tabs/Tabs.Tab"},n={render:function(t){const[b,o]=c.useState(1),d=i=>{o(i)};return e.jsxs(a,{value:b,onChange:d,children:[e.jsxs(a.Tab,{...t,"aria-label":"탭 네비게이션",children:[e.jsx(a.Item,{index:1,label:"1"}),e.jsx(a.Item,{index:2,label:"2"}),e.jsx(a.Item,{index:3,label:"3"})]}),e.jsx(a.Panel,{index:1,children:e.jsx("p",{children:"Tab Panel #1"})}),e.jsx(a.Panel,{index:2,children:e.jsx("p",{children:"Tab Panel #2"})}),e.jsx(a.Panel,{index:3,children:e.jsx("p",{children:"Tab Panel #3"})})]})}};var l,s,r;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: function Render(args) {
    const [value, setValue] = useState(1);
    const handleChange = (newValue: number) => {
      setValue(newValue);
    };
    return <Tabs value={value} onChange={handleChange}>
        <Tabs.Tab {...args} aria-label="탭 네비게이션">
          <Tabs.Item index={1} label="1" />
          <Tabs.Item index={2} label="2" />
          <Tabs.Item index={3} label="3" />
        </Tabs.Tab>
        <Tabs.Panel index={1}>
          <p>Tab Panel #1</p>
        </Tabs.Panel>
        <Tabs.Panel index={2}>
          <p>Tab Panel #2</p>
        </Tabs.Panel>
        <Tabs.Panel index={3}>
          <p>Tab Panel #3</p>
        </Tabs.Panel>
      </Tabs>;
  }
}`,...(r=(s=n.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};const u=["Default"],h=Object.freeze(Object.defineProperty({__proto__:null,Default:n,__namedExportsOrder:u,default:T},Symbol.toStringTag,{value:"Module"}));export{h as T};
