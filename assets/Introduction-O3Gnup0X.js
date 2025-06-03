import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as l}from"./index-CwgB6Q23.js";import{M as t}from"./blocks-CKyBfrPN.js";import"./iframe-xSyj_TgM.js";import"./index-B6xylhcj.js";import"./index-Cei-x5BZ.js";function e(n){return i.jsxs(i.Fragment,{children:[i.jsx(t,{title:"Introduction/Introduction"}),`
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
    border-color: #000000;
    transform: translate3d(0, -3px, 0);
    box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;
  }
  
  .link-item:active {
    border-color: #000000;
    transform: translate3d(0, 0, 0);
  }

  .link-item:hover .link-icon, .link-item:active .link-icon {
    border-color: #000000;
    background-color: #f8f8f8;
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
    border-left: 2px solid #000000;
    padding: 2px 0px 2px 10px;
    background-color: #f8f8f8;
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
    border: 1px solid #000000;
    padding: 2px 10px;
    font-weight: 600;
    font-size: 12px;
    display: inline-block;
    margin-right: 5px;
    margin-bottom: 5px;
  }

  .chip:hover {
     background-color: #eeeeee;
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
`,i.jsxs("ul",{class:"link-list",children:[i.jsx("li",{class:"link-item",children:i.jsxs("a",{href:"https://www.w3.org/WAI/ARIA/apg/patterns/accordion/",target:"_blank",children:[i.jsx("span",{class:"link-icon",children:"A"}),i.jsxs("div",{children:[i.jsx("strong",{children:"Accordion"}),i.jsx("p",{children:"A collapsible element used to show or hide related content."})]})]})}),i.jsx("li",{class:"link-item",children:i.jsxs("a",{href:"https://www.w3.org/WAI/ARIA/apg/patterns/alert/",target:"_blank",children:[i.jsx("span",{class:"link-icon",children:"A"}),i.jsxs("div",{children:[i.jsx("strong",{children:"Alert"}),i.jsx("p",{children:"An element that displays important messages like errors or notifications."})]})]})}),i.jsx("li",{class:"link-item",children:i.jsxs("a",{href:"https://www.w3.org/WAI/ARIA/apg/patterns/button/",target:"_blank",children:[i.jsx("span",{class:"link-icon",children:"B"}),i.jsxs("div",{children:[i.jsx("strong",{children:"Button"}),i.jsx("p",{children:"A clickable element for triggering actions or events."})]})]})}),i.jsx("li",{class:"link-item",children:i.jsxs("div",{class:"link-description",children:[i.jsx("span",{class:"link-icon",children:"B"}),i.jsxs("div",{children:[i.jsx("strong",{children:"Chip"}),i.jsx("p",{children:"An element for representing tags, filters, or actions."})]})]})}),i.jsx("li",{class:"link-item",children:i.jsxs("div",{class:"link-description",children:[i.jsx("span",{class:"link-icon",children:"B"}),i.jsxs("div",{children:[i.jsx("strong",{children:"Icon Button"}),i.jsx("p",{children:"A button that uses an icon."})]})]})}),i.jsx("li",{class:"link-item",children:i.jsxs("a",{href:"https://www.w3.org/WAI/ARIA/apg/patterns/button/",target:"_blank",children:[i.jsx("span",{class:"link-icon",children:"B"}),i.jsxs("div",{children:[i.jsx("strong",{children:"Toggle Button"}),i.jsx("p",{children:"A button that toggles between states."})]})]})}),i.jsx("li",{class:"link-item",children:i.jsxs("div",{class:"link-description",children:[i.jsx("span",{class:"link-icon",children:"D"}),i.jsxs("div",{children:[i.jsx("strong",{children:"Date Picker"}),i.jsx("p",{children:"An element for selecting a date from a calendar interface."})]})]})}),i.jsx("li",{class:"link-item",children:i.jsxs("a",{href:"https://www.w3.org/WAI/ARIA/apg/patterns/combobox/",target:"_blank",children:[i.jsx("span",{class:"link-icon",children:"F"}),i.jsxs("div",{children:[i.jsx("strong",{children:"Autocomplete"}),i.jsx("p",{children:"An input that suggests options as the user types."})]})]})}),i.jsx("li",{class:"link-item",children:i.jsxs("a",{href:"https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/",target:"_blank",children:[i.jsx("span",{class:"link-icon",children:"F"}),i.jsxs("div",{children:[i.jsx("strong",{children:"Checkbox"}),i.jsx("p",{children:"An input element for selecting multiple options from a list."})]})]})}),i.jsx("li",{class:"link-item",children:i.jsxs("a",{href:"https://www.w3.org/WAI/ARIA/apg/patterns/radiogroup/",target:"_blank",children:[i.jsx("span",{class:"link-icon",children:"F"}),i.jsxs("div",{children:[i.jsx("strong",{children:"Radio Group"}),i.jsx("p",{children:"A set of radio buttons for selecting a single option."})]})]})}),i.jsx("li",{class:"link-item",children:i.jsxs("a",{href:"https://www.w3.org/WAI/ARIA/apg/patterns/combobox/",target:"_blank",children:[i.jsx("span",{class:"link-icon",children:"F"}),i.jsxs("div",{children:[i.jsx("strong",{children:"Select"}),i.jsx("p",{children:"An element for selecting one item from a list."})]})]})}),i.jsx("li",{class:"link-item",children:i.jsxs("a",{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea",target:"_blank",children:[i.jsx("span",{class:"link-icon",children:"F"}),i.jsxs("div",{children:[i.jsx("strong",{children:"Textarea"}),i.jsx("p",{children:"A multi-line text input for entering longer content."})]})]})}),i.jsx("li",{class:"link-item",children:i.jsxs("a",{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text",target:"_blank",children:[i.jsx("span",{class:"link-icon",children:"F"}),i.jsxs("div",{children:[i.jsx("strong",{children:"TextField"}),i.jsx("p",{children:"A single-line input field for text or numeric values."})]})]})}),i.jsx("li",{class:"link-item",children:i.jsxs("div",{class:"link-description",children:[i.jsx("span",{class:"link-icon",children:"L"}),i.jsxs("div",{children:[i.jsx("strong",{children:"Loader"}),i.jsx("p",{children:"A visual indicator that content is loading or processing."})]})]})}),i.jsx("li",{class:"link-item",children:i.jsxs("div",{class:"link-description",children:[i.jsx("span",{class:"link-icon",children:"P"}),i.jsxs("div",{children:[i.jsx("strong",{children:"Pagination"}),i.jsx("p",{children:"A navigation control for browsing through pages of content."})]})]})}),i.jsx("li",{class:"link-item",children:i.jsxs("div",{class:"link-description",children:[i.jsx("span",{class:"link-icon",children:"P"}),i.jsxs("div",{children:[i.jsx("strong",{children:"Popover"}),i.jsx("p",{children:"A floating container for displaying contextual information or actions."})]})]})}),i.jsx("li",{class:"link-item",children:i.jsxs("a",{href:"https://www.w3.org/WAI/ARIA/apg/patterns/tabs/",target:"_blank",children:[i.jsx("span",{class:"link-icon",children:"T"}),i.jsxs("div",{children:[i.jsx("strong",{children:"Tab"}),i.jsx("p",{children:"An element for switching between content views."})]})]})}),i.jsx("li",{class:"link-item",children:i.jsxs("a",{href:"https://www.w3.org/WAI/ARIA/apg/patterns/table/",target:"_blank",children:[i.jsx("span",{class:"link-icon",children:"T"}),i.jsxs("div",{children:[i.jsx("strong",{children:"Table"}),i.jsx("p",{children:"A structured grid for displaying tabular data in rows and columns."})]})]})})]})]})}function x(n={}){const{wrapper:s}={...l(),...n.components};return s?i.jsx(s,{...n,children:i.jsx(e,{...n})}):e()}export{x as default};
