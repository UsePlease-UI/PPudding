import{j as n}from"./iframe-BuoardWh.js";import{useMDXComponents as s}from"./index-CRYJ8jaW.js";import{M as a,e as r}from"./blocks-C7X5dtgk.js";import{A as t}from"./AccordionExample.stories-CdCA20EJ.js";import"./Accordion.stories-DKdNiY6g.js";import{A as d}from"./AccordionHeader.stories-BO7pqwvg.js";import{A as c}from"./AccordionPanel.stories-BRUfBHK7.js";import"./index-DznGru-f.js";import"./ChevronDownIcon-BzKjwBpu.js";const l=""+new URL("accordion_anatomy-CQdvLNDU.png",import.meta.url).href,x=""+new URL("accordion_default-B-HD4HzR.png",import.meta.url).href,h=""+new URL("accordion_disabled-DhCqq6Ex.png",import.meta.url).href,p=""+new URL("accordion_expanded-DAglBbxb.png",import.meta.url).href;function i(o){const e={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(a,{of:t}),`
`,n.jsx("style",{children:`
    #storybook-docs code {
      font-size: 14px !important;
      font-weight: 600;
    }

    #storybook-docs pre {
      font-size: 16px !important;
      font-weight: 500;
      background-color: #f7fafc !important;
    }

    #storybook-docs p,
    #storybook-docs li {
      font-size: 16px !important;
    }

    #storybook-docs a:hover {
      text-decoration: underline !important;
    }

    #storybook-docs h1 {
      margin-bottom: 40px !important;
    }

    #storybook-docs h2 {
      font-weight: 600 !important;
      margin-top: 60px !important;
    }

    #storybook-docs h2:first-of-type {
      margin-top: 0px !important;
    }

    #storybook-docs .img-container {
      padding: 10px !important;
      border-radius: 4px !important;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px !important;
    }

    #storybook-docs .img-container b {
      margin-bottom: 20px !important;
    }

    #storybook-docs img {
      width: 748px !important;
      height: 400px !important;
      margin: 0 auto !important;
      object-fit: contain;
    }

    #storybook-docs .keyboard {
      width: max-content;
      border: 1px solid black;
      padding: 2px 8px;
      border-radius: 4px;
      box-shadow: 1px 1px 0px 0px black;
      font-weight: 600;
    }
`}),`
`,n.jsx(e.h1,{id:"accordion",children:"Accordion"}),`
`,n.jsx(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#overview",children:"Overview"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#anatomy",children:"Anatomy"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#wai-aria-roles-states-and-properties",children:"WAI-ARIA Roles, States, and Properties"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#keyboard-interaction",children:"Keyboard Interaction"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#states",children:"States"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#props",children:"Props"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#usage",children:"Usage"})}),`
`]}),`
`,n.jsx(e.h2,{id:"overview",children:"Overview"}),`
`,n.jsxs(e.p,{children:["콘텐츠를 섹션별로 접고 펼칠 수 있는 ",n.jsx(e.strong,{children:"Accordion"})," 컴포넌트입니다."]}),`
`,n.jsx(e.h2,{id:"anatomy",children:"Anatomy"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Accordion"}),"은 다음과 같이 구현되어 있습니다."]}),`
`,n.jsx("div",{className:"img-container",children:n.jsx("img",{src:l,alt:"Accordion Anatomy"})}),`
`,n.jsxs(e.p,{children:["1️⃣ ",n.jsx(e.strong,{children:"Accordion"})]}),`
`,n.jsxs(e.p,{children:["2️⃣ ",n.jsx(e.strong,{children:"Accordion Header"})]}),`
`,n.jsxs(e.p,{children:["3️⃣ ",n.jsx(e.strong,{children:"Accordion Panel"})]}),`
`,n.jsx(e.h2,{id:"wai-aria-roles-states-and-properties",children:"WAI-ARIA Roles, States, and Properties"}),`
`,n.jsx(e.h3,{id:"accordion-header",children:"Accordion Header"}),`
`,n.jsxs(e.p,{children:["✅ 헤더는 ",n.jsx(e.code,{children:"button"}),"으로 구현되어 있습니다.",n.jsx(e.br,{}),`
`,"✅ 버튼은 ",n.jsx(e.code,{children:"heading 요소"}),"로 감싸져 있습니다.",n.jsx(e.br,{}),`
`,"✅ 버튼에는 패널의 열림 상태를 나타내는 ",n.jsx(e.code,{children:"aria-expanded"}),"가 설정되어 있습니다.",n.jsx(e.br,{}),`
`,"✅ 버튼에는 제어 대상 패널의 ID를 참조하는 ",n.jsx(e.code,{children:"aria-controls"}),"가 설정되어 있습니다.",n.jsx(e.br,{}),`
`,"✅ 패널을 닫을 수 없는 경우, 버튼에 ",n.jsx(e.code,{children:'aria-disabled="true"'}),"가 설정되어 있습니다."]}),`
`,n.jsx(e.h3,{id:"accordion-panel",children:"Accordion Panel"}),`
`,n.jsxs(e.p,{children:["✅ ",n.jsx(e.code,{children:'role="region"'}),"으로 설정되어 있습니다.",n.jsx(e.br,{}),`
`,"✅ 패널 요소는 고유한 ID를 가지며, 버튼의 ",n.jsx(e.code,{children:"aria-controls"}),"가 이를 참조합니다.",n.jsx(e.br,{}),`
`,"✅ 연결된 버튼의 ID를 참조하는 ",n.jsx(e.code,{children:"aria-labelledby"}),"가 설정되어 있습니다."]}),`
`,n.jsx(e.h2,{id:"keyboard-interaction",children:"Keyboard Interaction"}),`
`,n.jsx("div",{className:"keyboard",children:"Tab / Shift + Tab"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"아코디언 헤더 간 포커스 이동이 가능합니다."}),`
`]}),`
`,n.jsx("div",{className:"keyboard",children:"Enter 또는 Space"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"현재 포커스된 헤더의 패널을 열거나 닫을 수 있습니다."}),`
`]}),`
`,n.jsx(e.h2,{id:"states",children:"States"}),`
`,n.jsxs("div",{className:"img-container",children:[n.jsx("h3",{children:"Default"}),n.jsx("img",{src:x,alt:"Accordion Default"})]}),`
`,n.jsx("br",{}),`
`,n.jsx("br",{}),`
`,n.jsxs("div",{className:"img-container",children:[n.jsx("h3",{children:"Expanded"}),n.jsx("img",{src:p,alt:"Accordion Expanded"})]}),`
`,n.jsx("br",{}),`
`,n.jsx("br",{}),`
`,n.jsxs("div",{className:"img-container",children:[n.jsx("h3",{children:"Disabled"}),n.jsx("img",{src:h,alt:"Accordion Disabled"})]}),`
`,n.jsx(e.h2,{id:"props",children:"Props"}),`
`,n.jsx(e.h3,{id:"accordion-1",children:"Accordion"}),`
`,n.jsx(r,{}),`
`,n.jsx(e.h3,{id:"accordion-header-1",children:"Accordion Header"}),`
`,n.jsx(r,{of:d}),`
`,n.jsx(e.h3,{id:"accordion-panel-1",children:"Accordion Panel"}),`
`,n.jsx(r,{of:c}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { MouseEvent, useState } from 'react';

import { Accordion } from '@useplease-ui/ppudding';

export default function AccordionExample() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleChange = (event: MouseEvent<HTMLButtonElement>, isExpanded: boolean) => {
    setIsExpanded(isExpanded);
  };

  return (
    <Accordion isExpanded={isExpanded} onChange={handleChange}>
      <Accordion.Header>Proin id diam leo.</Accordion.Header>
      <Accordion.Panel>
        Proin eget magna non nunc vehicula elementum. Vestibulum eget nulla at enim lacinia finibus vitae sed libero.
        Nunc tempus pharetra quam ac finibus. Curabitur scelerisque ex eget massa aliquet tincidunt quis sed sem.
        Praesent interdum vulputate quam non sodales. Proin vitae diam porttitor lacus luctus ultrices eget nec elit.
        Aliquam vehicula magna sit amet ipsum sagittis blandit et vel sapien.
      </Accordion.Panel>
    </Accordion>
  );
}
`})})]})}function k(o={}){const{wrapper:e}={...s(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(i,{...o})}):i(o)}export{k as default};
