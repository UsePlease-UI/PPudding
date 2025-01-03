import{j as m}from"./jsx-runtime-BjgbQsUx.js";import{f as g}from"./index-BsVblSul.js";import{P as n}from"./Pagination-DYXVdAG4.js";import"./index-D2MAbzvX.js";import"./index-DDT2H6na.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./styles-D32WepGD.js";import"./format-BvyHdC65.js";import"./ChevronDoubleRightIcon-Dw-imoum.js";import"./ChevronRightIcon-C9dWsKmb.js";const{useArgs:l}=__STORYBOOK_MODULE_PREVIEW_API__,P={args:{onChange:g(),page:1,pageLimit:10,showFirstButton:!0,showLastButton:!0,totalCount:100},argTypes:{onChange:{control:!1,description:"change event handler",table:{category:"optional",type:{summary:"(newPage: number) => void"}}},page:{control:"number",description:"current page number",table:{category:"required",type:{summary:"number"}}},pageLimit:{control:"number",description:"number of data per page",table:{category:"optional",defaultValue:{summary:"10"},type:{summary:"number"}}},showFirstButton:{control:"boolean",description:"if true, arrow button to first page will be displayed",table:{category:"optional",defaultValue:{summary:"true"}}},showLastButton:{control:"boolean",description:"if true, arrow button to last page will be displayed",table:{category:"optional",defaultValue:{summary:"true"}}},totalCount:{control:"number",description:"total number of data",table:{category:"required",type:{summary:"number"}}}},component:n,parameters:{layout:"centered"},tags:["autodocs"],title:"Pagination/Pagination"},t={args:{page:1,pageLimit:10,showFirstButton:!0,showLastButton:!0,totalCount:100},render:function(o){const[{page:s},u]=l(),i=p=>{u({page:p})};return m.jsx(n,{...o,page:s,onChange:i})}};var e,a,r;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    page: 1,
    pageLimit: 10,
    showFirstButton: true,
    showLastButton: true,
    totalCount: 100
  },
  render: function Render(args) {
    const [{
      page
    }, updateArgs] = useArgs();
    const handleChange = (newValue: number) => {
      updateArgs({
        page: newValue
      });
    };
    return <Pagination {...args} page={page} onChange={handleChange} />;
  }
}`,...(r=(a=t.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const A=["Default"];export{t as Default,A as __namedExportsOrder,P as default};
