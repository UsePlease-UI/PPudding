import{j as e,a as o}from"./iframe-BLazJ4V0.js";import{T as C}from"./constants-DErdgBTT.js";function b(t){const{children:a,className:l,...r}=t;return e.jsx("table",{...r,className:o("size-full border border-gray-100 bg-white",l&&l),children:a})}b.__docgenInfo={description:"",methods:[],displayName:"Table",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}},composes:["TableHTMLAttributes"]};function m(t){const{children:a,className:l}=t;return e.jsx("tbody",{className:l,children:a})}m.__docgenInfo={description:"",methods:[],displayName:"TableBody",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}},composes:["HTMLAttributes"]};function T(t){const{children:a,className:l,component:r="td",...d}=t;return r==="td"?e.jsx("td",{...d,className:o("h-full px-2.5 py-2 text-14 font-normal leading-normal",l&&l),children:a}):e.jsx("th",{...d,className:o("h-full px-2.5 py-2 text-14 font-medium leading-normal",l&&l),children:a})}T.__docgenInfo={description:"",methods:[],displayName:"TableCell",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},component:{required:!1,tsType:{name:"union",raw:"'td' | 'th'",elements:[{name:"literal",value:"'td'"},{name:"literal",value:"'th'"}]},description:""}},composes:["TdHTMLAttributes","ThHTMLAttributes"]};function h(t){const{children:a,className:l}=t;return e.jsx("thead",{className:o("border-b border-gray-100 bg-gray-200 align-middle hover:*:bg-inherit [&_th]:p-3",l&&l),children:a})}h.__docgenInfo={description:"",methods:[],displayName:"TableHead",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}},composes:["HTMLAttributes"]};function u(t){const{children:a,className:l}=t;return e.jsx("tr",{className:o("border-b border-b-gray-100 last:border-b-0 hover:bg-gray-100",l&&l),children:a})}u.__docgenInfo={description:"",methods:[],displayName:"TableRow",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}},composes:["HTMLAttributes"]};const n=Object.assign(b,{Body:m,Cell:T,Head:h,Row:u}),y={argTypes:{children:{table:{disable:!0}}},component:n,parameters:{layout:"centered"},tags:["autodocs"],title:"Table/Table"},s={render:function(a){return e.jsxs(n,{...a,children:[e.jsx(n.Head,{children:e.jsxs(n.Row,{children:[e.jsx(n.Cell,{component:"th",children:"NO"}),e.jsx(n.Cell,{component:"th",children:"제품명"}),e.jsx(n.Cell,{component:"th",children:"브랜드명"}),e.jsx(n.Cell,{component:"th",children:"상품코드"}),e.jsx(n.Cell,{component:"th",children:"설명"})]})}),e.jsx(n.Body,{children:C.map((l,r)=>e.jsxs(n.Row,{children:[e.jsx(n.Cell,{align:"center",children:r+1}),e.jsx(n.Cell,{align:"center",children:l.productName}),e.jsx(n.Cell,{align:"center",children:l.brand}),e.jsx(n.Cell,{align:"center",children:l.productCode}),e.jsx(n.Cell,{align:"center",children:l.description})]},r))})]})}};var c,i,p;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: function Render(args) {
    return <Table {...args}>
        <Table.Head>
          <Table.Row>
            <Table.Cell component="th">NO</Table.Cell>
            <Table.Cell component="th">제품명</Table.Cell>
            <Table.Cell component="th">브랜드명</Table.Cell>
            <Table.Cell component="th">상품코드</Table.Cell>
            <Table.Cell component="th">설명</Table.Cell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {TABLE_DATA.map((data, idx) => <Table.Row key={idx}>
              <Table.Cell align="center">{idx + 1}</Table.Cell>
              <Table.Cell align="center">{data.productName}</Table.Cell>
              <Table.Cell align="center">{data.brand}</Table.Cell>
              <Table.Cell align="center">{data.productCode}</Table.Cell>
              <Table.Cell align="center">{data.description}</Table.Cell>
            </Table.Row>)}
        </Table.Body>
      </Table>;
  }
}`,...(p=(i=s.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const j=["Default"];export{s as Default,j as __namedExportsOrder,y as default};
