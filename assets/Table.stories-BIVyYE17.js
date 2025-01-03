import{j as l}from"./jsx-runtime-BjgbQsUx.js";import{T as e}from"./index-B-t2h1TD.js";import"./index-D2MAbzvX.js";import"./format-BvyHdC65.js";const h={argTypes:{children:{table:{disable:!0}}},component:e,parameters:{layout:"centered"},tags:["autodocs"],title:"Table/Table"},n={render:function(c){return l.jsxs(e,{...c,children:[l.jsx(e.Head,{children:l.jsxs(e.Row,{children:[l.jsx(e.Cell,{component:"th",children:"NO"}),l.jsx(e.Cell,{component:"th",children:"제품명"}),l.jsx(e.Cell,{component:"th",children:"브랜드명"}),l.jsx(e.Cell,{component:"th",children:"상품코드"}),l.jsx(e.Cell,{component:"th",children:"설명"})]})}),l.jsx(e.Body,{children:Array.from({length:20},(i,a)=>l.jsxs(e.Row,{children:[l.jsx(e.Cell,{align:"center",children:a+1}),l.jsx(e.Cell,{align:"center",children:"바나나"}),l.jsx(e.Cell,{align:"center",children:"바나나차차"}),l.jsx(e.Cell,{align:"center",children:"1010101010"}),l.jsx(e.Cell,{align:"center",children:"바나나나나나나나나나"})]},a))})]})}};var r,t,o;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(o=(t=n.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};const m=["Default"];export{n as Default,m as __namedExportsOrder,h as default};
