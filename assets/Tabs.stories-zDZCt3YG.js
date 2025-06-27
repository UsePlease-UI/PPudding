import{r as t,j as e}from"./iframe-BuoardWh.js";import{z as u}from"./index-CDq3prpL.js";import{T as a}from"./index-Bt_mzSd2.js";const m={args:{children:null,onChange:u(),value:1},argTypes:{children:{control:!1,description:"Tab Item & Tab Panel",table:{type:{summary:"ReactNode"}}},onChange:{control:!1,description:"callback fired when tab button is clicked",table:{type:{summary:"(newValue: number) => void"}}},value:{control:"number",description:"selected tab index",table:{type:{summary:"number"}}}},component:a,parameters:{layout:"centered"},tags:["autodocs"],title:"Tabs/UI - 1. Tabs"},n={render:function(l){const[b,s]=t.useState(1),c=d=>{s(d)};return t.useEffect(()=>{l.value&&s(l.value)},[l.value]),e.jsxs(a,{...l,className:"min-w-192",value:b,onChange:c,children:[e.jsxs(a.Tab,{"aria-label":"탭 네비게이션",children:[e.jsx(a.Item,{index:1,label:"1"}),e.jsx(a.Item,{index:2,label:"2"}),e.jsx(a.Item,{index:3,label:"3"})]}),e.jsx(a.Panel,{index:1,children:e.jsx("p",{children:"Tab Panel #1"})}),e.jsx(a.Panel,{index:2,children:e.jsx("p",{children:"Tab Panel #2"})}),e.jsx(a.Panel,{index:3,children:e.jsx("p",{children:"Tab Panel #3"})})]})}};var r,o,i;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: function Render(args) {
    const [value, setValue] = useState(1);
    const handleChange = (newValue: number) => {
      setValue(newValue);
    };
    useEffect(() => {
      if (args.value) {
        setValue(args.value);
      }
    }, [args.value]);
    return <Tabs {...args} className="min-w-192" value={value} onChange={handleChange}>
        <Tabs.Tab aria-label="탭 네비게이션">
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
}`,...(i=(o=n.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const T=["Default"],P=Object.freeze(Object.defineProperty({__proto__:null,Default:n,__namedExportsOrder:T,default:m},Symbol.toStringTag,{value:"Module"}));export{P as T};
