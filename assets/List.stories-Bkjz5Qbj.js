import{j as e}from"./jsx-runtime-BjgbQsUx.js";import{r as L}from"./index-DDT2H6na.js";import{L as t}from"./index-DlG16_w5.js";import{F as I}from"./ChevronUpIcon-E84nYt31.js";import{F as h}from"./ChevronDownIcon-Cs31zoc3.js";import"./index-D2MAbzvX.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./format-BvyHdC65.js";const{useState:T}=__STORYBOOK_MODULE_PREVIEW_API__,O={argTypes:{children:{table:{disable:!0}},hasDivider:{table:{disable:!0}}},component:t,parameters:{docs:{argTypes:{sort:"requiredFirst"}},layout:"centered"},tags:["autodocs"],title:"List/List"},r={args:{},render:function(){return e.jsx(t,{children:Array.from({length:10},(o,n)=>e.jsx(t.Item,{isDense:!0,children:e.jsx(t.ItemText,{primaryText:"Lorem Ipsum",secondaryText:"This is secondary text."})},n))})}},i={args:{},render:function(){const[o,n]=T({folder:!1,mail:!1,schedule:!0});return e.jsx(t,{hasDivider:!0,children:["schedule","mail","folder"].map(s=>e.jsxs(L.Fragment,{children:[e.jsxs(t.ItemButton,{isDense:!0,onClick:()=>n(a=>({...a,[s]:!a[s]})),children:[e.jsx(t.ItemText,{primaryText:"Expandable List",secondaryText:"Click here to see more"}),e.jsx(t.ItemIcon,{children:o[s]?e.jsx(I,{}):e.jsx(h,{})})]}),e.jsx(t.Collapse,{isOpen:o[s],children:e.jsxs(t.CollapsedList,{hasDivider:!0,isDense:!0,children:[e.jsx(t.Item,{children:e.jsx(t.ItemText,{primaryText:"Hello"})}),e.jsx(t.Item,{children:e.jsx(t.ItemText,{primaryText:"Good morning"})})]})})]},s))})}};var m,l,d;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {},
  render: function Render() {
    return <List>
        {Array.from({
        length: 10
      }, (_, idx) => <List.Item key={idx} isDense>
            <List.ItemText primaryText="Lorem Ipsum" secondaryText="This is secondary text." />
          </List.Item>)}
      </List>;
  }
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var c,p,x;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {},
  render: function Render() {
    const [open, setOpen] = useState<Record<string, boolean>>({
      folder: false,
      mail: false,
      schedule: true
    });
    return <List hasDivider>
        {['schedule', 'mail', 'folder'].map(val => <Fragment key={val}>
            <List.ItemButton isDense onClick={() => setOpen(prev => ({
          ...prev,
          [val]: !prev[val]
        }))}>
              <List.ItemText primaryText="Expandable List" secondaryText="Click here to see more" />
              <List.ItemIcon>{open[val] ? <ChevronUpIcon /> : <ChevronDownIcon />}</List.ItemIcon>
            </List.ItemButton>
            <List.Collapse isOpen={open[val]}>
              <List.CollapsedList hasDivider isDense>
                <List.Item>
                  <List.ItemText primaryText="Hello" />
                </List.Item>
                <List.Item>
                  <List.ItemText primaryText="Good morning" />
                </List.Item>
              </List.CollapsedList>
            </List.Collapse>
          </Fragment>)}
      </List>;
  }
}`,...(x=(p=i.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};const R=["DefaultList","CollapsedList"];export{i as CollapsedList,r as DefaultList,R as __namedExportsOrder,O as default};
