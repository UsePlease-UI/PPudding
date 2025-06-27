import{r as l,j as e}from"./iframe-BuoardWh.js";import{T as n}from"./index-Bt_mzSd2.js";const x={args:{className:"",icon:null,index:1,label:"1"},argTypes:{className:{control:!1,description:"custom className",table:{type:{summary:"string"}}},icon:{control:!1,description:"custom icon (svg element)",table:{type:{summary:"ReactNode"}}},index:{control:{min:4,type:"number"},description:"tab item index. associated tab panel should have the same index",table:{type:{summary:"number"}}},label:{control:"text",description:"content of the component",table:{type:{summary:"ReactNode"}}}},component:n.Item,tags:["autodocs"],title:"Tabs/UI - 3. Tab Item"},s={render:function(a){const[d,t]=l.useState(1),c=b=>{t(b)};return l.useEffect(()=>{a.index&&t(a.index)},[a.index]),e.jsxs(n,{value:d,onChange:c,children:[e.jsxs(n.Tab,{"aria-label":"탭 네비게이션",children:[e.jsx(n.Item,{index:a.index,label:a.label}),e.jsx(n.Item,{index:2,label:"2"}),e.jsx(n.Item,{index:3,label:"3"})]}),e.jsx(n.Panel,{index:a.index,children:e.jsxs("p",{children:["Tab Panel #",a.index]})}),e.jsx(n.Panel,{index:2,children:e.jsx("p",{children:"Tab Panel #2"})}),e.jsx(n.Panel,{index:3,children:e.jsx("p",{children:"Tab Panel #3"})})]})}};var r,i,o;s.parameters={...s.parameters,docs:{...(r=s.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: function Render(args) {
    const [value, setValue] = useState(1);
    const handleChange = (newValue: number) => {
      setValue(newValue);
    };
    useEffect(() => {
      if (args.index) {
        setValue(args.index);
      }
    }, [args.index]);
    return <Tabs value={value} onChange={handleChange}>
        <Tabs.Tab aria-label="탭 네비게이션">
          <Tabs.Item index={args.index} label={args.label} />
          <Tabs.Item index={2} label="2" />
          <Tabs.Item index={3} label="3" />
        </Tabs.Tab>
        <Tabs.Panel index={args.index}>
          <p>Tab Panel #{args.index}</p>
        </Tabs.Panel>
        <Tabs.Panel index={2}>
          <p>Tab Panel #2</p>
        </Tabs.Panel>
        <Tabs.Panel index={3}>
          <p>Tab Panel #3</p>
        </Tabs.Panel>
      </Tabs>;
  }
}`,...(o=(i=s.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};const m=["Default"],h=Object.freeze(Object.defineProperty({__proto__:null,Default:s,__namedExportsOrder:m,default:x},Symbol.toStringTag,{value:"Module"}));export{h as T};
