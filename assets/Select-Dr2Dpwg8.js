import{j as e}from"./iframe-Jdzavq9_.js";import{useMDXComponents as s}from"./index-BFoSs7Xr.js";import{M as i,e as o}from"./blocks-C4jHC0ng.js";import{S as l}from"./Select.stories-CXGU9V_4.js";import"./FormControl-pZHmOvr8.js";import"./Select-TmKRNZrE.js";import"./floating-ui.react-dom-AzSbTXdd.js";import"./ClickAwayListener-xnKFguqk.js";import"./Divider-Dfmdby_-.js";import"./index-DlIUKsKk.js";import"./ChevronDownIcon-CU1kRQ6z.js";import"./constants-yhfyZnpV.js";const d=""+new URL("select_anatomy-Ci6Yefp7.png",import.meta.url).href;function r(t){const n={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:l}),`
`,e.jsx("style",{children:`
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
`,e.jsx(n.h1,{id:"select",children:"Select"}),`
`,e.jsx(n.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#anatomy",children:"Anatomy"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#wai-aria-roles-states-and-properties",children:"WAI-ARIA Roles, States, and Properties"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#keyboard-interaction",children:"Keyboard Interaction"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#props",children:"Props"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#usage",children:"Usage"})}),`
`]}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(n.p,{children:["여러 옵션 중 하나를 선택할 수 있는 드롭다운 형태의 ",e.jsx(n.strong,{children:"Select"})," 컴포넌트입니다."]}),`
`,e.jsx(n.h2,{id:"anatomy",children:"Anatomy"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Select"}),"는 다음과 같이 구현되어 있습니다."]}),`
`,e.jsx("div",{className:"img-container",children:e.jsx("img",{src:d,alt:"Select Anatomy"})}),`
`,e.jsxs(n.p,{children:["1️⃣ ",e.jsx(n.strong,{children:"Select Trigger"})]}),`
`,e.jsxs(n.p,{children:["2️⃣ ",e.jsx(n.strong,{children:"Select List"})]}),`
`,e.jsxs(n.p,{children:["3️⃣ ",e.jsx(n.strong,{children:"Select ListItem"})]}),`
`,e.jsx(n.h2,{id:"wai-aria-roles-states-and-properties",children:"WAI-ARIA Roles, States, and Properties"}),`
`,e.jsx(n.h3,{id:"select-trigger",children:"Select Trigger"}),`
`,e.jsxs(n.p,{children:["✅ 트리거는 ",e.jsx(n.code,{children:"button"}),"으로 구현되어 있습니다.",e.jsx(n.br,{}),`
`,"✅ 버튼에는 ",e.jsx(n.code,{children:'aria-haspopup="listbox"'}),"가 설정되어 있습니다.",e.jsx(n.br,{}),`
`,"✅ 버튼에는 시각적 라벨의 ID를 참조하는 ",e.jsx(n.code,{children:"aria-labelledby"}),"가 설정되어 있습니다.",e.jsx(n.br,{}),`
`,"✅ 버튼에는 드롭다운의 존재를 알리는 ",e.jsx(n.code,{children:'aria-haspopup="listbox"'}),"가 설정되어 있습니다.",e.jsx(n.br,{}),`
`,"✅ 버튼에는 열림 상태를 나타내는 ",e.jsx(n.code,{children:"aria-expanded"}),"가 설정되어 있습니다.",e.jsx(n.br,{}),`
`,"✅ 버튼에는 옵션 목록의 ID를 참조하는 ",e.jsx(n.code,{children:"aria-controls"}),"가 설정되어 있습니다."]}),`
`,e.jsx(n.h3,{id:"select-list",children:"Select List"}),`
`,e.jsxs(n.p,{children:["✅ ",e.jsx(n.code,{children:'role="listbox"'}),"로 설정되어 있습니다.",e.jsx(n.br,{}),`
`,"✅ 옵션 목록에는 시각적 라벨의 ID를 참조하는 ",e.jsx(n.code,{children:"aria-labelledby"}),"가 설정되어 있습니다.",e.jsx(n.br,{}),`
`,"✅ 옵션 목록은 고유한 ID를 가지며, 트리거 버튼의 ",e.jsx(n.code,{children:"aria-controls"}),"가 이를 참조합니다."]}),`
`,e.jsx(n.h3,{id:"select-listitem",children:"Select ListItem"}),`
`,e.jsxs(n.p,{children:["✅ ",e.jsx(n.code,{children:'role="option"'}),"으로 설정되어 있습니다.",e.jsx(n.br,{}),`
`,"✅ 선택된 옵션에는 ",e.jsx(n.code,{children:'aria-selected="true"'}),"가 설정되어 있습니다."]}),`
`,e.jsx(n.h2,{id:"keyboard-interaction",children:"Keyboard Interaction"}),`
`,e.jsx(n.h3,{id:"select-trigger-1",children:"Select Trigger"}),`
`,e.jsx("div",{className:"keyboard",children:"Tab"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"트리거 버튼에 포커스를 이동합니다."}),`
`]}),`
`,e.jsx("div",{className:"keyboard",children:"Enter / Space"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"옵션 목록을 열거나 닫습니다."}),`
`]}),`
`,e.jsx(n.h3,{id:"select-list--select-listitem",children:"Select List & Select ListItem"}),`
`,e.jsx("div",{className:"keyboard",children:"ArrowDown"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"다음 옵션으로 포커스를 이동합니다."}),`
`]}),`
`,e.jsx("div",{className:"keyboard",children:"ArrowUp"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"이전 옵션으로 포커스를 이동합니다."}),`
`]}),`
`,e.jsx("div",{className:"keyboard",children:"Enter / Space"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"포커스된 옵션을 선택합니다."}),`
`]}),`
`,e.jsx("div",{className:"keyboard",children:"Escape"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"옵션 목록을 닫습니다."}),`
`]}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(o,{}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { useId, useState } from 'react';

import { FormControl, Select } from '@useplease-ui/ppudding';

const options = [
  { idx: '1', label: '김치찌개', value: 'kimchi-stew' },
  { idx: '2', label: '비빔밥', value: 'bibimbap' },
  { idx: '3', label: '불고기', value: 'bulgogi' },
  { idx: '4', label: '된장찌개', value: 'soybean-paste-stew' },
  { idx: '5', label: '삼겹살', value: 'samgyeopsal' },
  { idx: '6', label: '잡채', value: 'japchae' },
  { idx: '7', label: '떡볶이', value: 'tteokbokki' },
  { idx: '8', label: '칼국수', value: 'kalguksu' },
  { idx: '9', label: '순두부찌개', value: 'soft-tofu-stew' },
  { idx: '10', label: '물냉면', value: 'cold-noodles' },
];

export default function SelectExample() {
  const buttonId = useId();
  const labelTextId = useId();
  const helperTextId = useId();

  const [selected, setSelected] = useState('');

  const handleChange = (newSelected: string) => {
    setSelected(newSelected);
  };

  return (
    <FormControl
      helperText="하나의 값을 선택하세요."
      helperTextId={helperTextId}
      inputId={buttonId}
      labelText="한식 메뉴 추천"
      labelTextId={labelTextId}
    >
      <Select
        aria-describedby={helperTextId}
        aria-labelledby={labelTextId}
        id={buttonId}
        selected={selected}
        onChange={handleChange}
        options={options}
      />
    </FormControl>
  );
}
`})})]})}function k(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{k as default};
