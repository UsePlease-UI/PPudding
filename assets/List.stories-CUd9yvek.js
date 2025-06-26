import{j as t,a as o,r as m}from"./iframe-BLazJ4V0.js";import{F as D}from"./ChevronUpIcon-DLfwBpiQ.js";import{F as q}from"./ChevronDownIcon-COANbliV.js";function R({children:i,isOpen:e}){return e?i:null}function L({children:i,className:e,hasDivider:s,isDense:r,...a}){return t.jsx("li",{children:t.jsx("ul",{...a,className:o("w-full *:px-4 *:py-0",s&&"divide-y divide-gray-100",r&&"*:px-8",e&&e),children:i})})}L.__docgenInfo={description:"",methods:[],displayName:"CollapsedList",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},hasDivider:{required:!1,tsType:{name:"boolean"},description:""},isDense:{required:!1,tsType:{name:"boolean"},description:""}},composes:["HTMLAttributes"]};function I({children:i,className:e,hasDivider:s,...r}){return t.jsx("ul",{...r,className:o("w-full rounded border border-gray-100 bg-white px-0 py-1",s&&"divide-y divide-gray-100",e&&e),children:i})}I.__docgenInfo={description:"",methods:[],displayName:"List",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},hasDivider:{required:!1,tsType:{name:"boolean"},description:""}},composes:["HTMLAttributes"]};function g({children:i,className:e,isDense:s,...r}){return t.jsx("div",{...r,className:o("w-full py-2",s&&"py-4",e&&e),children:i})}g.__docgenInfo={description:"",methods:[],displayName:"ListActionItem",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},isDense:{required:!1,tsType:{name:"boolean"},description:""}},composes:["HTMLAttributes"]};function b({children:i,className:e,isDense:s=!0,...r}){return t.jsx("li",{...r,className:o("relative flex min-h-12 min-w-70 items-center justify-start px-2 text-16 font-semibold leading-24 text-black hover:bg-gray-100",s&&"px-4",e&&e),children:i})}b.__docgenInfo={description:"",methods:[],displayName:"ListItem",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},isDense:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}},composes:["LiHTMLAttributes"]};function T({children:i,className:e,isDense:s,isDisabled:r,onClick:a,..._}){const C=m.useCallback(c=>{c.currentTarget.blur(),a&&a(c)},[a]);return t.jsx("li",{className:o("h-full w-full",e&&e),children:t.jsx("button",{..._,disabled:r,type:"button",onClick:C,className:o("flex min-h-12 w-full min-w-70 items-center justify-start truncate bg-transparent px-2 py-1 text-left text-16 font-semibold leading-24",s&&"px-4",!r&&"text-black hover:bg-gray-100 focus:bg-gray-200 active:bg-gray-200",r&&"pointer-events-none bg-gray-100 text-gray-600"),children:i})})}T.__docgenInfo={description:"",methods:[],displayName:"ListItemButton",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},isDense:{required:!1,tsType:{name:"boolean"},description:""},isDisabled:{required:!1,tsType:{name:"boolean"},description:""}},composes:["Omit"]};function j({align:i,children:e,className:s,...r}){return t.jsx("span",{...r,className:o("my-auto mr-2.5 flex h-5 w-5",i==="top"&&"mb-auto mt-2",i==="bottom"&&"mb-2 mt-auto",s&&s),children:m.cloneElement(e,{className:o("!block h-5 w-5")})})}j.__docgenInfo={description:"",methods:[],displayName:"ListItemIcon",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},align:{required:!1,tsType:{name:"union",raw:"'bottom' | 'top'",elements:[{name:"literal",value:"'bottom'"},{name:"literal",value:"'top'"}]},description:""}},composes:["HTMLAttributes"]};function v({className:i,primaryText:e,secondaryText:s,...r}){return t.jsxs("div",{...r,className:o("flex w-full flex-col",i&&i),children:[typeof e=="string"?t.jsx("span",{className:o("my-auto block truncate text-16 font-semibold leading-24 text-gray-950",s&&"mt-1"),children:e}):e,s&&(typeof s=="string"?t.jsx("small",{className:"mb-2 truncate text-12 font-normal leading-16 text-gray-600",children:s}):s)]})}v.__docgenInfo={description:"",methods:[],displayName:"ListItemText",props:{primaryText:{required:!0,tsType:{name:"ReactNode"},description:""},secondaryText:{required:!1,tsType:{name:"ReactNode"},description:""}},composes:["HTMLAttributes"]};function N({children:i,className:e,position:s="end",...r}){return t.jsx("div",{...r,className:o("flex items-center justify-center",s==="start"&&"mr-7",s==="end"&&"ml-7",e&&e),children:i})}N.__docgenInfo={description:"",methods:[],displayName:"ListMetadata",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},position:{required:!1,tsType:{name:"union",raw:"'end' | 'start'",elements:[{name:"literal",value:"'end'"},{name:"literal",value:"'start'"}]},description:"",defaultValue:{value:"'end'",computed:!1}}},composes:["HTMLAttributes"]};const n=Object.assign(I,{ActionItem:g,Collapse:R,CollapsedList:L,Item:b,ItemButton:T,ItemIcon:j,ItemText:v,Metadata:N}),E={argTypes:{children:{table:{disable:!0}},hasDivider:{table:{disable:!0}}},component:n,parameters:{layout:"centered"},tags:["autodocs"],title:"List/List"},l={args:{},render:function(){return t.jsx(n,{children:Array.from({length:10},(e,s)=>t.jsx(n.Item,{isDense:!0,children:t.jsx(n.ItemText,{primaryText:"Lorem Ipsum",secondaryText:"This is secondary text."})},s))})}},d={args:{},render:function(){const[e,s]=m.useState({folder:!1,mail:!1,schedule:!0});return t.jsx(n,{hasDivider:!0,children:["schedule","mail","folder"].map(r=>t.jsxs(m.Fragment,{children:[t.jsxs(n.ItemButton,{isDense:!0,onClick:()=>s(a=>({...a,[r]:!a[r]})),children:[t.jsx(n.ItemText,{primaryText:"Expandable List",secondaryText:"Click here to see more"}),t.jsx(n.ItemIcon,{children:e[r]?t.jsx(D,{}):t.jsx(q,{})})]}),t.jsx(n.Collapse,{isOpen:e[r],children:t.jsxs(n.CollapsedList,{hasDivider:!0,isDense:!0,children:[t.jsx(n.Item,{children:t.jsx(n.ItemText,{primaryText:"Hello"})}),t.jsx(n.Item,{children:t.jsx(n.ItemText,{primaryText:"Good morning"})})]})})]},r))})}};var p,u,x;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(x=(u=l.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var f,y,h;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(h=(y=d.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};const M=["Example1Default","Example2CollapsedList"];export{l as Example1Default,d as Example2CollapsedList,M as __namedExportsOrder,E as default};
