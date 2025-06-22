import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as m}from"./iframe-Bvnjis0j.js";import{j as o}from"./format-FJJUaZs2.js";import{F as q}from"./ChevronUpIcon-B1HvlwAw.js";import{F as D}from"./ChevronDownIcon-C6_tpU13.js";function R({children:i,isOpen:e}){return e?i:null}function h({children:i,className:e,hasDivider:s,isDense:r,...a}){return t.jsx("li",{children:t.jsx("ul",{...a,className:o("w-full *:px-4 *:py-0",s&&"divide-y divide-gray-100",r&&"*:px-8",e&&e),children:i})})}h.__docgenInfo={description:"",methods:[],displayName:"CollapsedList",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},hasDivider:{required:!1,tsType:{name:"boolean"},description:""},isDense:{required:!1,tsType:{name:"boolean"},description:""}},composes:["HTMLAttributes"]};function I({children:i,className:e,hasDivider:s,...r}){return t.jsx("ul",{...r,className:o("w-full rounded border border-gray-100 bg-white px-0 py-1",s&&"divide-y divide-gray-100",e&&e),children:i})}I.__docgenInfo={description:"",methods:[],displayName:"List",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},hasDivider:{required:!1,tsType:{name:"boolean"},description:""}},composes:["HTMLAttributes"]};function g({children:i,className:e,isDense:s,...r}){return t.jsx("div",{...r,className:o("w-full py-2",s&&"py-4",e&&e),children:i})}g.__docgenInfo={description:"",methods:[],displayName:"ListActionItem",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},isDense:{required:!1,tsType:{name:"boolean"},description:""}},composes:["HTMLAttributes"]};function T({children:i,className:e,isDense:s=!0,...r}){return t.jsx("li",{...r,className:o("relative flex min-h-12 min-w-70 items-center justify-start px-2 text-16 font-semibold leading-24 text-black hover:bg-gray-100",s&&"px-4",e&&e),children:i})}T.__docgenInfo={description:"",methods:[],displayName:"ListItem",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},isDense:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}},composes:["LiHTMLAttributes"]};function b({children:i,className:e,isDense:s,isDisabled:r,onClick:a,...C}){const _=m.useCallback(c=>{c.currentTarget.blur(),a&&a(c)},[a]);return t.jsx("li",{className:o("h-full w-full",e&&e),children:t.jsx("button",{...C,disabled:r,type:"button",onClick:_,className:o("flex min-h-12 min-w-70 items-center justify-start truncate bg-transparent px-2 py-1 text-left text-16 font-semibold leading-24",s&&"px-4",!r&&"text-black hover:bg-gray-100 focus:bg-gray-200 active:bg-gray-200",r&&"pointer-events-none bg-gray-100 text-gray-600"),children:i})})}b.__docgenInfo={description:"",methods:[],displayName:"ListItemButton",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},isDense:{required:!1,tsType:{name:"boolean"},description:""},isDisabled:{required:!1,tsType:{name:"boolean"},description:""}},composes:["ButtonHTMLAttributes"]};function j({align:i,children:e,className:s,...r}){return t.jsx("span",{...r,className:o("my-auto mr-2.5 flex h-5 w-5",i==="top"&&"mb-auto mt-2",i==="bottom"&&"mb-2 mt-auto",s&&s),children:m.cloneElement(e,{className:o("!block h-5 w-5")})})}j.__docgenInfo={description:"",methods:[],displayName:"ListItemIcon",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},align:{required:!1,tsType:{name:"union",raw:"'bottom' | 'top'",elements:[{name:"literal",value:"'bottom'"},{name:"literal",value:"'top'"}]},description:""}},composes:["HTMLAttributes"]};function v({className:i,primaryText:e,secondaryText:s,...r}){return t.jsxs("div",{...r,className:o("flex w-full flex-col",i&&i),children:[typeof e=="string"?t.jsx("span",{className:o("my-auto block truncate text-16 font-semibold leading-24 text-gray-950",s&&"mt-1"),children:e}):e,s&&(typeof s=="string"?t.jsx("small",{className:"mb-2 truncate text-12 font-normal leading-16 text-gray-600",children:s}):s)]})}v.__docgenInfo={description:"",methods:[],displayName:"ListItemText",props:{primaryText:{required:!0,tsType:{name:"ReactNode"},description:""},secondaryText:{required:!1,tsType:{name:"ReactNode"},description:""}},composes:["HTMLAttributes"]};function N({children:i,className:e,position:s="end",...r}){return t.jsx("div",{...r,className:o("flex items-center justify-center",s==="start"&&"mr-7",s==="end"&&"ml-7",e&&e),children:i})}N.__docgenInfo={description:"",methods:[],displayName:"ListMetadata",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},position:{required:!1,tsType:{name:"union",raw:"'end' | 'start'",elements:[{name:"literal",value:"'end'"},{name:"literal",value:"'start'"}]},description:"",defaultValue:{value:"'end'",computed:!1}}},composes:["HTMLAttributes"]};const n=Object.assign(I,{ActionItem:g,Collapse:R,CollapsedList:h,Item:T,ItemButton:b,ItemIcon:j,ItemText:v,Metadata:N}),F={argTypes:{children:{table:{disable:!0}},hasDivider:{table:{disable:!0}}},component:n,parameters:{docs:{argTypes:{sort:"requiredFirst"}},layout:"centered"},tags:["autodocs"],title:"List/List"},d={args:{},render:function(){return t.jsx(n,{children:Array.from({length:10},(e,s)=>t.jsx(n.Item,{isDense:!0,children:t.jsx(n.ItemText,{primaryText:"Lorem Ipsum",secondaryText:"This is secondary text."})},s))})}},l={args:{},render:function(){const[e,s]=m.useState({folder:!1,mail:!1,schedule:!0});return t.jsx(n,{hasDivider:!0,children:["schedule","mail","folder"].map(r=>t.jsxs(m.Fragment,{children:[t.jsxs(n.ItemButton,{isDense:!0,onClick:()=>s(a=>({...a,[r]:!a[r]})),children:[t.jsx(n.ItemText,{primaryText:"Expandable List",secondaryText:"Click here to see more"}),t.jsx(n.ItemIcon,{children:e[r]?t.jsx(q,{}):t.jsx(D,{})})]}),t.jsx(n.Collapse,{isOpen:e[r],children:t.jsxs(n.CollapsedList,{hasDivider:!0,isDense:!0,children:[t.jsx(n.Item,{children:t.jsx(n.ItemText,{primaryText:"Hello"})}),t.jsx(n.Item,{children:t.jsx(n.ItemText,{primaryText:"Good morning"})})]})})]},r))})}};var p,u,x;d.parameters={...d.parameters,docs:{...(p=d.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(x=(u=d.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var f,y,L;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(L=(y=l.parameters)==null?void 0:y.docs)==null?void 0:L.source}}};const B=["DefaultList","CollapsedList"];export{l as CollapsedList,d as DefaultList,B as __namedExportsOrder,F as default};
