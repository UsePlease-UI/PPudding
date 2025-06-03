import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{j as o}from"./format-FJJUaZs2.js";function m(t){const{children:r,className:l,...a}=t;return e.jsx("table",{...a,className:o("size-full border border-gray-100 bg-white",l&&l),children:r})}m.__docgenInfo={description:"",methods:[],displayName:"Table",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}},composes:["TableHTMLAttributes"]};function p(t){const{children:r,className:l}=t;return e.jsx("tbody",{className:l,children:r})}p.__docgenInfo={description:"",methods:[],displayName:"TableBody",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}},composes:["HTMLAttributes"]};function T(t){const{children:r,className:l,component:a="td",...c}=t;return a==="td"?e.jsx("td",{...c,className:o("h-full px-2.5 py-2 text-14 font-normal leading-normal",l&&l),children:r}):e.jsx("th",{...c,className:o("h-full px-2.5 py-2 text-14 font-medium leading-normal",l&&l),children:r})}T.__docgenInfo={description:"",methods:[],displayName:"TableCell",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},component:{required:!1,tsType:{name:"union",raw:"'td' | 'th'",elements:[{name:"literal",value:"'td'"},{name:"literal",value:"'th'"}]},description:""}},composes:["TdHTMLAttributes","ThHTMLAttributes"]};function h(t){const{children:r,className:l}=t;return e.jsx("thead",{className:o("border-b border-gray-100 bg-gray-200 align-middle hover:*:bg-inherit [&_th]:p-3",l&&l),children:r})}h.__docgenInfo={description:"",methods:[],displayName:"TableHead",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}},composes:["HTMLAttributes"]};function u(t){const{children:r,className:l}=t;return e.jsx("tr",{className:o("border-b border-b-gray-100 last:border-b-0 hover:bg-gray-100",l&&l),children:r})}u.__docgenInfo={description:"",methods:[],displayName:"TableRow",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}},composes:["HTMLAttributes"]};const n=Object.assign(m,{Body:p,Cell:T,Head:h,Row:u}),x={argTypes:{children:{table:{disable:!0}}},component:n,parameters:{layout:"centered"},tags:["autodocs"],title:"Table/Table"},s={render:function(r){return e.jsxs(n,{...r,children:[e.jsx(n.Head,{children:e.jsxs(n.Row,{children:[e.jsx(n.Cell,{component:"th",children:"NO"}),e.jsx(n.Cell,{component:"th",children:"제품명"}),e.jsx(n.Cell,{component:"th",children:"브랜드명"}),e.jsx(n.Cell,{component:"th",children:"상품코드"}),e.jsx(n.Cell,{component:"th",children:"설명"})]})}),e.jsx(n.Body,{children:Array.from({length:20},(l,a)=>e.jsxs(n.Row,{children:[e.jsx(n.Cell,{align:"center",children:a+1}),e.jsx(n.Cell,{align:"center",children:"바나나"}),e.jsx(n.Cell,{align:"center",children:"바나나차차"}),e.jsx(n.Cell,{align:"center",children:"1010101010"}),e.jsx(n.Cell,{align:"center",children:"바나나나나나나나나나"})]},a))})]})}};var d,i,b;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
          {Array.from({
          length: 20
        }, (_, idx) => <Table.Row key={idx}>
              <Table.Cell align="center">{idx + 1}</Table.Cell>
              <Table.Cell align="center">바나나</Table.Cell>
              <Table.Cell align="center">바나나차차</Table.Cell>
              <Table.Cell align="center">1010101010</Table.Cell>
              <Table.Cell align="center">바나나나나나나나나나</Table.Cell>
            </Table.Row>)}
        </Table.Body>
      </Table>;
  }
}`,...(b=(i=s.parameters)==null?void 0:i.docs)==null?void 0:b.source}}};const y=["Default"];export{s as Default,y as __namedExportsOrder,x as default};
