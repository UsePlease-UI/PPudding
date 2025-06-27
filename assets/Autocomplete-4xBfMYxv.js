import{j as e}from"./iframe-BuoardWh.js";import{useMDXComponents as s}from"./index-CRYJ8jaW.js";import{M as i,e as r}from"./blocks-C7X5dtgk.js";import{A as l}from"./Autocomplete.stories-Bj42Aoi2.js";import"./Divider-CmqEjyvg.js";import"./index-J64gs0aM.js";import"./FormControl-Xq63dV1U.js";import"./floating-ui.react-dom-CPAi9Wfx.js";import"./ClickAwayListener-Dbuk1jqb.js";import"./TextField-CvQZJ6eT.js";import"./constants-0pBEQA9X.js";const a=""+new URL("autocomplete_anatomy-_RhgN3KU.png",import.meta.url).href;function t(o){const n={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:l}),`
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
`,e.jsx(n.h1,{id:"autocomplete",children:"Autocomplete"}),`
`,e.jsx(n.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#anatomy",children:"Anatomy"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#wai-aria-roles-states-and-properties",children:"WAI-ARIA Roles, States, and Properties"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#keyboard-interaction",children:"Keyboard Interaction"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#states",children:"States"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#props",children:"Props"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#usage",children:"Usage"})}),`
`]}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(n.p,{children:["입력값에 따라 관련된 옵션을 자동으로 제안해주는 ",e.jsx(n.strong,{children:"Autocomplete"})," 컴포넌트입니다."]}),`
`,e.jsx(n.h2,{id:"anatomy",children:"Anatomy"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Autocomplete"}),"는 다음과 같이 구현되어 있습니다."]}),`
`,e.jsx("div",{className:"img-container",children:e.jsx("img",{src:a,alt:"Autocomplete Anatomy"})}),`
`,e.jsxs(n.p,{children:["1️⃣ ",e.jsx(n.strong,{children:"Autocomplete Input"})]}),`
`,e.jsxs(n.p,{children:["2️⃣ ",e.jsx(n.strong,{children:"Autocomplete List"})]}),`
`,e.jsxs(n.p,{children:["3️⃣ ",e.jsx(n.strong,{children:"Autocomplete ListItem"})]}),`
`,e.jsx(n.h2,{id:"wai-aria-roles-states-and-properties",children:"WAI-ARIA Roles, States, and Properties"}),`
`,e.jsx(n.h3,{id:"autocomplete-input",children:"Autocomplete Input"}),`
`,e.jsxs(n.p,{children:["✅ ",e.jsx(n.code,{children:'role="combobox"'}),"로 설정되어 있습니다.",e.jsx(n.br,{}),`
`,"✅ 입력 인풋에는 자동 완성 방식을 명시하는 ",e.jsx(n.code,{children:'aria-autocomplete="list"'}),"가 설정되어 있습니다.",e.jsx(n.br,{}),`
`,"✅ 입력 인풋에는 현재 활성화된 옵션의 ID를 참조하는 ",e.jsx(n.code,{children:"aria-activedescendant"}),"가 설정되어 있습니다.",e.jsx(n.br,{}),`
`,"✅ 입력 인풋에는 옵션 목록의 열림 상태를 나타내는 ",e.jsx(n.code,{children:"aria-expanded"}),"가 설정되어 있습니다.",e.jsx(n.br,{}),`
`,"✅ 입력 인풋에는 옵션 목록의 ID를 참조하는 ",e.jsx(n.code,{children:"aria-controls"}),"가 설정되어 있습니다."]}),`
`,e.jsx(n.h3,{id:"autocomplete-list",children:"Autocomplete List"}),`
`,e.jsxs(n.p,{children:["✅ ",e.jsx(n.code,{children:'role="listbox"'}),"로 설정되어 있습니다.",e.jsx(n.br,{}),`
`,"✅ 옵션 목록에는 시각적 라벨의 ID를 참조하는 ",e.jsx(n.code,{children:"aria-labelledby"}),"가 설정되어 있습니다.",e.jsx(n.br,{}),`
`,"✅ 옵션 목록은 고유한 ID를 가지며, 입력 인풋의 ",e.jsx(n.code,{children:"aria-controls"}),"가 이를 참조합니다."]}),`
`,e.jsx(n.h3,{id:"autocomplete-listitem",children:"Autocomplete ListItem"}),`
`,e.jsxs(n.p,{children:["✅ ",e.jsx(n.code,{children:'role="option"'}),"으로 설정되어 있습니다.",e.jsx(n.br,{}),`
`,"✅ 선택된 옵션에는 ",e.jsx(n.code,{children:'aria-selected="true"'}),"가 설정되어 있습니다.",e.jsx(n.br,{}),`
`,"✅ 각 옵션은 고유한 ID를 가지며, 입력 인풋의 ",e.jsx(n.code,{children:"aria-activedescendant"}),"가 이를 참조합니다."]}),`
`,e.jsx(n.h2,{id:"keyboard-interaction",children:"Keyboard Interaction"}),`
`,e.jsx(n.h3,{id:"autocomplete-input-1",children:"Autocomplete Input"}),`
`,e.jsx("div",{className:"keyboard",children:"Tab"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"입력 인풋에 포커스를 이동할 수 있습니다."}),`
`]}),`
`,e.jsx("div",{className:"keyboard",children:"ArrowDown"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"옵션 목록을 열고 첫 번째 옵션으로 포커스를 이동합니다."}),`
`]}),`
`,e.jsx(n.h3,{id:"autocomplete-list--autocomplete-listitem",children:"Autocomplete List & Autocomplete ListItem"}),`
`,e.jsx("div",{className:"keyboard",children:"ArrowDown"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"다음 옵션으로 포커스를 이동합니다."}),`
`]}),`
`,e.jsx("div",{className:"keyboard",children:"ArrowUp"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"이전 옵션으로 포커스를 이동합니다."}),`
`]}),`
`,e.jsx("div",{className:"keyboard",children:"Enter"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"현재 포커스된 옵션을 선택하고 입력 인풋에 반영합니다."}),`
`]}),`
`,e.jsx("div",{className:"keyboard",children:"Esc"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"옵션 목록을 닫습니다."}),`
`]}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(r,{}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { useCallback, useId, useMemo, useState } from 'react';

import debounce from 'lodash.debounce';

import { Autocomplete, FormControl, ListboxOptionType } from '@useplease-ui/ppudding';

const options = = [
  { idx: uuid(), label: '서울', value: 'seoul' },
  { idx: uuid(), label: '부산', value: 'busan' },
  { idx: uuid(), label: '인천', value: 'incheon' },
  { idx: uuid(), label: '대구', value: 'daegu' },
  { idx: uuid(), label: '광주', value: 'gwangju' },
  { idx: uuid(), label: '대전', value: 'daejeon' },
  { idx: uuid(), label: '울산', value: 'ulsan' },
  { idx: uuid(), label: '수원', value: 'suwon' },
  { idx: uuid(), label: '제주', value: 'jeju' },
  { idx: uuid(), label: '춘천', value: 'chuncheon' },
];

export default function AutocompleteExample() {
  const inputId = useId();
  const labelTextId = useId();

  const [value, setValue] = useState('');
  const [list, setList] = useState(options);

  const debouncedSearch = useMemo(
    () =>
    debounce((searchValue: string) => {
      if (searchValue.length !== 0 && searchValue !== '') {
        const newList = options.filter((el) => el.label.includes(searchValue));
        setList(newList);
      } else {
        setList(options);
      }
    }, 100),
    [],
  );

  const handleSearch = useCallback((value: string) => debouncedSearch(value), [debouncedSearch]);

  const handleChange = useCallback(
    (newValue: string) => {
        setValue(newValue);
        handleSearch(newValue);
    },
    [handleSearch],
  );

  const handleSelect = useCallback(
    (selected?: ListboxOptionType) => setValue(selected?.label || '' ),
    [],
  );

  return (
    <FormControl inputId={inputId} labelText="지역 선택" labelTextId={labelTextId}>
      <Autocomplete
        aria-labelledby={labelTextId}
        id={inputId}
        value={value}
        onChange={handleChange}
        onSelect={handleSelect}
        options={list}
      />
    </FormControl>
  );
}
`})})]})}function y(o={}){const{wrapper:n}={...s(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{y as default};
