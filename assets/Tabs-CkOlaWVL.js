import{j as n}from"./iframe-BuoardWh.js";import{useMDXComponents as o}from"./index-CRYJ8jaW.js";import{M as t,e as a}from"./blocks-C7X5dtgk.js";import{T as i}from"./TabsExample.stories-BrkK20pd.js";import{T as d}from"./Tabs.stories-zDZCt3YG.js";import{T as l}from"./Tab.stories-DCjIGVoC.js";import{T as c}from"./TabItem.stories-Dd-eNrl4.js";import{T as x}from"./TabPanel.stories-CU9xb57V.js";import"./index-Bt_mzSd2.js";import"./index-CDq3prpL.js";const h=""+new URL("tabs_anatomy-aIZcCKDc.png",import.meta.url).href;function s(r){const e={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{of:i}),`
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
`,n.jsx(e.h1,{id:"tabs",children:"Tabs"}),`
`,n.jsx(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#overview",children:"Overview"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#anatomy",children:"Anatomy"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#wai-aria-roles-states-and-properties",children:"WAI-ARIA Roles, States, and Properties"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#keyboard-interaction",children:"Keyboard Interaction"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#props",children:"Props"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#usage",children:"Usage"})}),`
`]}),`
`,n.jsx(e.h2,{id:"overview",children:"Overview"}),`
`,n.jsxs(e.p,{children:["여러 콘텐츠를 탭으로 나누고, 선택된 탭에 따라 내용을 전환할 수 있는 ",n.jsx(e.strong,{children:"Tabs"})," 컴포넌트입니다."]}),`
`,n.jsx(e.h2,{id:"anatomy",children:"Anatomy"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Tabs"}),"는 다음과 같이 구현되어 있습니다."]}),`
`,n.jsx("div",{className:"img-container",children:n.jsx("img",{src:h,alt:"Tabs Anatomy"})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"1️⃣ Tabs"})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"2️⃣ Tab"})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"3️⃣ Tab Item"})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"4️⃣ Tab Panel"})}),`
`,n.jsx(e.h2,{id:"wai-aria-roles-states-and-properties",children:"WAI-ARIA Roles, States, and Properties"}),`
`,n.jsx(e.h3,{id:"tab",children:"Tab"}),`
`,n.jsxs(e.p,{children:["✅ ",n.jsx(e.code,{children:'role="tablist"'}),"로 설정되어 있습니다."]}),`
`,n.jsx(e.h3,{id:"tab-item",children:"Tab Item"}),`
`,n.jsxs(e.p,{children:["✅ ",n.jsx(e.code,{children:'role="tab"'}),"으로 설정되어 있습니다.",n.jsx(e.br,{}),`
`,"✅ 선택된 탭 버튼에는 ",n.jsx(e.code,{children:'aria-selected="true"'}),"가 설정되어 있습니다.",n.jsx(e.br,{}),`
`,"✅ 탭 버튼에는 제어 대상 패널의 ID를 참조하는 ",n.jsx(e.code,{children:"aria-controls"}),"가 설정되어 있습니다."]}),`
`,n.jsx(e.h3,{id:"tab-panel",children:"Tab Panel"}),`
`,n.jsxs(e.p,{children:["✅ ",n.jsx(e.code,{children:'role="tabpanel"'}),"으로 설정되어 있습니다.",n.jsx(e.br,{}),`
`,"✅ 패널 요소는 고유한 ID를 가지며, 탭 버튼의 ",n.jsx(e.code,{children:"aria-controls"}),"가 이를 참조합니다.",n.jsx(e.br,{}),`
`,"✅ 연결된 탭 버튼의 ID를 참조하는 ",n.jsx(e.code,{children:"aria-labelledby"}),"가 설정되어 있습니다."]}),`
`,n.jsx(e.h2,{id:"keyboard-interaction",children:"Keyboard Interaction"}),`
`,n.jsx("div",{className:"keyboard",children:"Tab"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"탭 버튼 그룹 내에서 첫 번째 탭에 포커스할 수 있습니다."}),`
`]}),`
`,n.jsx("div",{className:"keyboard",children:"Arrow Right"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"다음 탭 버튼으로 포커스를 이동시킵니다."}),`
`]}),`
`,n.jsx("div",{className:"keyboard",children:"Arrow Left"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"이전 탭 버튼으로 포커스를 이동시킵니다."}),`
`]}),`
`,n.jsx(e.h2,{id:"props",children:"Props"}),`
`,n.jsx(e.h3,{id:"tabs-1",children:"Tabs"}),`
`,n.jsx(a,{of:d}),`
`,n.jsx(e.h3,{id:"tab-1",children:"Tab"}),`
`,n.jsx(a,{of:l}),`
`,n.jsx(e.h3,{id:"tab-item-1",children:"Tab Item"}),`
`,n.jsx(a,{of:c}),`
`,n.jsx(e.h3,{id:"tab-panel-1",children:"Tab Panel"}),`
`,n.jsx(a,{of:x}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { useState } from 'react';

import { Tabs } from '@useplease-ui/ppudding';

export default function TabExample() {
  const [value, setValue] = useState(1);

  const handleChange = (newValue: number) => {
    setValue(newValue);
  };

  return (
    <Tabs value={value} onChange={handleChange}>
      <Tabs.Tab aria-label="navigation">
        <Tabs.Item index={1} label="1" />
        <Tabs.Item index={2} label="2" />
        <Tabs.Item index={3} label="3" />
      </Tabs.Tab>
      <Tabs.Panel index={1}>
        <p>Tab Panel #1</p>
      </Tabs.Panel>
      <Tabs.Panel index={2}>
        <p>Tab Panel #2</p>
      </Tabs.Panel>
      <Tabs.Panel index={3}>
        <p>Tab Panel #3</p>
      </Tabs.Panel>
    </Tabs>
  );
}
`})})]})}function w(r={}){const{wrapper:e}={...o(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(s,{...r})}):s(r)}export{w as default};
