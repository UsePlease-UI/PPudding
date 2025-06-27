import{r as t,j as e}from"./iframe-BuoardWh.js";import{T as n}from"./index-Bt_mzSd2.js";const b={args:{children:null,className:"",index:1},argTypes:{children:{control:!1,description:"content of component",table:{type:{summary:"ReactNode"}}},className:{control:!1,description:"custom className",table:{type:{summary:"string"}}},index:{control:{min:4,type:"number"},description:"tab panel index. associated tab item should have the same index",table:{type:{summary:"number"}}}},component:n.Panel,tags:["autodocs"],title:"Tabs/UI - 4. Tab Panel"},s={render:function(a){const[o,l]=t.useState(1),c=x=>{l(x)};return t.useEffect(()=>{a.index&&l(a.index)},[a.index]),e.jsxs(n,{value:o,onChange:c,children:[e.jsxs(n.Tab,{"aria-label":"탭 네비게이션",children:[e.jsx(n.Item,{index:a.index,label:String(a.index)}),e.jsx(n.Item,{index:2,label:"2"}),e.jsx(n.Item,{index:3,label:"3"})]}),e.jsx(n.Panel,{index:a.index,children:e.jsxs("p",{children:["Tab Panel #",a.index]})}),e.jsx(n.Panel,{index:2,children:e.jsx("p",{children:"Tab Panel #2"})}),e.jsx(n.Panel,{index:3,children:e.jsx("p",{children:"Tab Panel #3"})})]})}};var r,i,d;s.parameters={...s.parameters,docs:{...(r=s.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
          <Tabs.Item index={args.index} label={String(args.index)} />
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
}`,...(d=(i=s.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const u=["Default"],h=Object.freeze(Object.defineProperty({__proto__:null,Default:s,__namedExportsOrder:u,default:b},Symbol.toStringTag,{value:"Module"}));export{h as T};
