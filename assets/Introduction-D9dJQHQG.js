import{j as i}from"./jsx-runtime-BjgbQsUx.js";import{useMDXComponents as t}from"./index--DeVyQia.js";import{ae as r}from"./index-68LAr_LS.js";import"./index-D2MAbzvX.js";import"./index-DDT2H6na.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-DP72gQDk.js";import"../sb-preview/runtime.js";import"./index-DttxB2Wl.js";import"./index-CTOC-uzv.js";import"./index-D-8MO0q_.js";import"./index-CHGET4sZ.js";import"./index-DrFu-skq.js";function s(n){const e={p:"p",...t(),...n.components};return i.jsxs(i.Fragment,{children:[i.jsx(r,{title:"Introduction/Introduction"}),`
`,i.jsx("style",{children:`
    * {
      box-sizing: border-box;
    }

    .heading { 
      font-size: 40px;
      font-weight: 900;
      margin-bottom: 40px;
    }

    h2.subheading {
      color: #3f2909;
      font-size: 24px;
      font-weight: 700;
      letter-spacing: 3px;
      line-height: 24px;
      text-transform: uppercase;
      margin: 0 auto 20px;
    }

    .link-list {
      max-width: 1024px;
      display: grid;
      grid-template-columns : 1fr 1fr;
      gap: 20px;
      list-style-type: none;
      padding:0;
      margin:0;
    }

    .link-item {
      padding: 20px;
      border: 1px solid #00000010;
      border-radius: 5px;
      transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;
      color: #3f2909;
      display: flex;
      align-items: flex-start;
    }

    .link-item > a {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: flex-start;
      color: inherit;
    }

    .link-item:hover {
      border-color: #bfa40f;
      transform: translate3d(0, -3px, 0);
      box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;
    }
    
    .link-item:active {
      border-color: #bfa40f;
      transform: translate3d(0, 0, 0);
    }

    .link-item:hover .link-icon, .link-item:active .link-icon {
      border-color: #bfa40f;
      background-color: #fcfde9;
    }

    .link-item strong {
      font-weight: 700;
      display: block;
      margin-bottom: 5px;
    }

    .link-description {
      display: flex;
    }

    .link-description > div {
      width: 100%;
      margin: 0;
      font-size: 14px;
      line-height: 20px;
    }

    .link-item strong + p {
      width: 100%;
      border-left: 2px solid #6c4d17;
      padding: 2px 0px 2px 10px;
      background-color: #fcfde9;
      font-weight: 300;
    }

    .link-icon {
      font-family: cursive;
      width: 40px;
      height: 40px;
      display: inline-block;
      font-size: 24px;
      line-height: 40px;
      font-weight: 900;
      text-align: center;
      margin-right: 15px;
      flex: none;
      border: 1px solid #eeeeee;
      border-radius: 4px;
    }

    .link-item strong + span div {
      width: 100%;
    }

    .chip {
      border-radius: 25px;
      border: 1px solid #bfa40f;
      padding: 2px 10px;
      font-weight: 600;
      font-size: 12px;
      display: inline-block;
      margin-right: 5px;
      margin-bottom: 5px;
    }

    .chip:hover {
       background-color: #f7fbc6;
    }

    .chip p {
      font-weight: 600;
      font-size: 12px;
      padding: 0;
      margin: 0;
      line-height: 20px;
    }
  `}),`
`,i.jsx("h1",{className:"heading",children:"Welcome to PPudding"}),`
`,i.jsx("h2",{className:"subheading",children:"컴포넌트 구현"}),`
`,i.jsxs("ul",{className:"link-list",children:[i.jsx("li",{className:"link-item",children:i.jsxs("a",{href:"https://www.w3.org/WAI/ARIA/apg/patterns/accordion/",target:"_blank",children:[i.jsx("span",{className:"link-icon",children:"A"}),i.jsxs("div",{children:[i.jsx("strong",{children:"Accordion"}),i.jsx("p",{children:i.jsx(e.p,{children:`Vertically stacked set of interactive headings that each contain a title, content snippet or thumbnail
representing a section of content.`})})]})]})}),i.jsx("li",{className:"link-item",children:i.jsxs("a",{href:"https://www.w3.org/WAI/ARIA/apg/patterns/button/",target:"_blank",children:[i.jsx("span",{className:"link-icon",children:"B"}),i.jsxs("div",{children:[i.jsx("strong",{children:"Button"}),i.jsx("p",{children:"A widget that enables users to trigger an action or event."})]})]})}),i.jsxs("li",{className:"link-item",children:[i.jsx("span",{className:"link-icon",children:"F"}),i.jsxs("div",{children:[i.jsx("strong",{children:"Form"}),i.jsxs("div",{children:[i.jsx("a",{className:"chip",href:"https://www.w3.org/WAI/ARIA/apg/patterns/combobox/",target:"_blank",children:i.jsx(e.p,{children:"AutoComplete"})}),i.jsx("a",{className:"chip",href:"https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/",target:"_blank",children:i.jsx(e.p,{children:"Checkbox"})}),i.jsx("span",{className:"chip",children:"Chip"}),i.jsx("span",{className:"chip",children:"FormControl"}),i.jsx("a",{className:"chip",href:"https://www.w3.org/WAI/ARIA/apg/patterns/radio/",target:"_blank",children:i.jsx(e.p,{children:"Radio"})}),i.jsx("span",{className:"chip",children:"TextField"}),i.jsx("span",{className:"chip",children:"Toggle"}),i.jsx("a",{className:"chip",href:"https://www.w3.org/WAI/ARIA/apg/patterns/combobox/",target:"_blank",children:i.jsx(e.p,{children:"Select"})})]})]})]}),i.jsx("li",{className:"link-item",children:i.jsxs("div",{className:"link-description",children:[i.jsx("span",{className:"link-icon",children:"L"}),i.jsxs("div",{children:[i.jsx("strong",{children:"Loader"}),i.jsx("p",{children:"A component indicating progress."})]})]})}),i.jsx("li",{className:"link-item",children:i.jsxs("div",{className:"link-description",children:[i.jsx("span",{className:"link-icon",children:"P"}),i.jsxs("div",{children:[i.jsx("strong",{children:"Popover"}),i.jsx("p",{children:"A content containing secondary information that is visible when a user clicks it."})]})]})}),i.jsx("li",{className:"link-item",children:i.jsxs("div",{className:"link-description",children:[i.jsx("span",{className:"link-icon",children:"P"}),i.jsxs("div",{children:[i.jsx("strong",{children:"Pagination"}),i.jsx("p",{children:"A component that enables the user to select a page from a range of pages."})]})]})}),i.jsx("li",{className:"link-item",children:i.jsxs("a",{href:"https://www.w3.org/WAI/ARIA/apg/patterns/tabs/",target:"_blank",children:[i.jsx("span",{className:"link-icon",children:"T"}),i.jsxs("div",{children:[i.jsx("strong",{children:"Tab"}),i.jsx("p",{children:"A set of layered sections of content that displays one panel of content at a time."})]})]})}),i.jsx("li",{className:"link-item",children:i.jsxs("a",{href:"https://www.w3.org/WAI/ARIA/apg/patterns/table/",target:"_blank",children:[i.jsx("span",{className:"link-icon",children:"T"}),i.jsxs("div",{children:[i.jsx("strong",{children:"Table"}),i.jsx("p",{children:"A component that displays sets of data."})]})]})})]})]})}function k(n={}){const{wrapper:e}={...t(),...n.components};return e?i.jsx(e,{...n,children:i.jsx(s,{...n})}):s(n)}export{k as default};
