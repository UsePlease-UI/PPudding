import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as l}from"./iframe-Bvnjis0j.js";import{T as n}from"./index-B7TZygGM.js";const m={args:{className:"",icon:null,index:1,label:"1"},argTypes:{className:{control:!1,description:"custom className",table:{category:"optional",type:{summary:"string"}}},icon:{control:!1,description:"custom icon (svg element)",table:{category:"optional",type:{summary:"ReactNode"}}},index:{control:{min:4,type:"number"},description:"tab item index. associated tab panel should have the same index",table:{category:"required",type:{summary:"number"}}},label:{control:"text",description:"content of the component",table:{category:"optional",type:{summary:"ReactNode"}}}},component:n.Item,title:"Tabs/Tabs.Item"},t={render:function(a){const[d,s]=l.useState(1),c=b=>{s(b)};return l.useEffect(()=>{a.index&&s(a.index)},[a.index]),e.jsxs(n,{value:d,onChange:c,children:[e.jsxs(n.Tab,{"aria-label":"탭 네비게이션",children:[e.jsx(n.Item,{index:a.index,label:a.label}),e.jsx(n.Item,{index:2,label:"2"}),e.jsx(n.Item,{index:3,label:"3"})]}),e.jsx(n.Panel,{index:a.index,children:e.jsxs("p",{children:["Tab Panel #",a.index]})}),e.jsx(n.Panel,{index:2,children:e.jsx("p",{children:"Tab Panel #2"})}),e.jsx(n.Panel,{index:3,children:e.jsx("p",{children:"Tab Panel #3"})})]})}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const x=["Default"],f=Object.freeze(Object.defineProperty({__proto__:null,Default:t,__namedExportsOrder:x,default:m},Symbol.toStringTag,{value:"Module"}));export{f as T};
