import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-CwgB6Q23.js";import{M as i}from"./blocks-CKyBfrPN.js";import{A as o}from"./Alert.stories-C4kSTaAc.js";import"./iframe-xSyj_TgM.js";import"./index-B6xylhcj.js";import"./index-Cei-x5BZ.js";import"./format-FJJUaZs2.js";import"./XMarkIcon-C7y_r2KJ.js";import"./common-B8FjgEV9.js";const l=""+new URL("alert_anatomy-66-KKQap.png",import.meta.url).href,a=""+new URL("alert_default-C4IC_7qp.png",import.meta.url).href,c=""+new URL("alert_success-hInMBNWw.png",import.meta.url).href,x=""+new URL("alert_error-aJnU9RX-.png",import.meta.url).href,d=""+new URL("alert_info-BYqgA1zB.png",import.meta.url).href,h=""+new URL("alert_warning-CXFWEwMA.png",import.meta.url).href,m=""+new URL("alert_without_dismiss_button-B8GJezqn.png",import.meta.url).href,p=""+new URL("alert_multiline-BGW6vFlL.png",import.meta.url).href;function t(e){const r={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx("style",{children:`
  * {
      box-sizing: border-box;
      color: #191919 !important;
  }

  p, li {
      font-size: 16px !important;
  }

  a:hover {
      text-decoration: underline !important;
  }

  h1 {
      margin-bottom: 40px !important;
  }

  h2 {
      font-weight: 600 !important;
      margin-top: 60px !important;
  }

  h2:first-of-type {
      margin-top: 0px !important;
  }

  .img-container {
      padding: 10px !important;
      border-radius: 4px !important;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px !important;
  }

  .img-container b {
      margin-bottom: 20px !important;
  }

  img {
      width: 748px !important;
      height: 400px !important;
      margin: 0 auto !important;
  }
`}),`
`,n.jsx(i,{of:o}),`
`,n.jsx(r.h1,{id:"alert",children:"Alert"}),`
`,n.jsx(r.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsx(r.li,{children:n.jsx(r.a,{href:"#overview",children:"Overview"})}),`
`,n.jsx(r.li,{children:n.jsx(r.a,{href:"#anatomy",children:"Anatomy"})}),`
`,n.jsx(r.li,{children:n.jsx(r.a,{href:"#variants",children:"Variants"})}),`
`,n.jsx(r.li,{children:n.jsx(r.a,{href:"#usage",children:"Usage"})}),`
`]}),`
`,n.jsx(r.h2,{id:"overview",children:"Overview"}),`
`,n.jsxs(r.p,{children:["사용자에게 중요한 메시지를 전달하거나 상태를 알릴 때 사용하는 ",n.jsx(r.strong,{children:"Alert"})," 컴포넌트입니다.",n.jsx(r.br,{}),`
`,"※ ",n.jsx(r.strong,{children:"useAlert"}),"와 함께 사용합니다."]}),`
`,n.jsx(r.h2,{id:"anatomy",children:"Anatomy"}),`
`,n.jsxs(r.p,{children:[n.jsx(r.strong,{children:"Alert"}),"는 다음과 같이 구현되어 있습니다."]}),`
`,n.jsx("div",{className:"img-container",children:n.jsx("img",{src:l,alt:"Alert Anatomy"})}),`
`,n.jsxs(r.p,{children:["1️⃣ ",n.jsx(r.strong,{children:"Alert Message"})]}),`
`,n.jsxs(r.p,{children:["2️⃣ ",n.jsx(r.strong,{children:"Alert Icon"})]}),`
`,n.jsx(r.h2,{id:"variants",children:"Variants"}),`
`,n.jsxs(r.p,{children:["기본값은 ",n.jsx(r.strong,{children:"default"}),"이며 ",n.jsx(r.strong,{children:"default"}),", ",n.jsx(r.strong,{children:"success"}),", ",n.jsx(r.strong,{children:"error"}),", ",n.jsx(r.strong,{children:"info"}),", ",n.jsx(r.strong,{children:"warning"})," 중 하나를 선택할 수 있습니다."]}),`
`,n.jsxs("div",{className:"img-container",children:[n.jsx("h3",{children:"Default"}),n.jsx("img",{src:a,alt:"Default"})]}),`
`,n.jsx("br",{}),`
`,n.jsx("br",{}),`
`,n.jsxs("div",{className:"img-container",children:[n.jsx("h3",{children:"Success"}),n.jsx("img",{src:c,alt:"Success"})]}),`
`,n.jsx("br",{}),`
`,n.jsx("br",{}),`
`,n.jsxs("div",{className:"img-container",children:[n.jsx("h3",{children:"Error"}),n.jsx("img",{src:x,alt:"Error"})]}),`
`,n.jsx("br",{}),`
`,n.jsx("br",{}),`
`,n.jsxs("div",{className:"img-container",children:[n.jsx("h3",{children:"Info"}),n.jsx("img",{src:d,alt:"Info"})]}),`
`,n.jsx("br",{}),`
`,n.jsx("br",{}),`
`,n.jsxs("div",{className:"img-container",children:[n.jsx("h3",{children:"Warning"}),n.jsx("img",{src:h,alt:"Warning"})]}),`
`,n.jsx(r.h2,{id:"usage",children:"Usage"}),`
`,n.jsxs(r.p,{children:[n.jsx(r.strong,{children:"AlertProvider"}),"는 ",n.jsx(r.code,{children:"main.tsx"})," / ",n.jsx(r.code,{children:"App.tsx"}),"에서 적용해주세요."]}),`
`,n.jsxs(r.p,{children:["AlertProvider의 props로 ",n.jsx(r.strong,{children:"icon"}),"(닫기 버튼의 아이콘)과 ",n.jsx(r.strong,{children:"position"}),"을 설정할 수 있습니다.",n.jsx(r.br,{}),`
`,n.jsx(r.strong,{children:"Position"}),"은 ",n.jsx(r.code,{children:"bottom-right"}),"(기본값), ",n.jsx(r.code,{children:"bottom-center"}),", ",n.jsx(r.code,{children:"bottom-left"}),", ",n.jsx(r.code,{children:"top-right"}),", ",n.jsx(r.code,{children:"top-center"}),", ",n.jsx(r.code,{children:"top-left"})," 중 하나를 선택할 수 있습니다."]}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-tsx",children:`// main.tsx
import { AlertProvider } from '@components/useAlert';

import AlertExample from './AlertExample';

export default function App() {
  return (
    <AlertProvider>
      <AlertExample />
    </AlertProvider>
  );
}
`})}),`
`,n.jsxs(r.p,{children:[n.jsx(r.strong,{children:"useAlert"}),"의 ",n.jsx(r.strong,{children:"onAlert"}),"를 사용하여 메시지를 노출합니다."]}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-tsx",children:`// component
import { useAlert } from '@components/useAlert';

export default function AlertExample() {
  const { onAlert } = useAlert();

  const handleClick = () => {
    onAlert('문제가 발생하였습니다.', { variant: 'error' });
  };

  return (
    <button type="button" onClick={handleClick}>
      test alert
    </button>
  );
}
`})}),`
`,n.jsxs(r.p,{children:[n.jsx(r.strong,{children:"canDismiss"})," props으로 닫기 버튼(X 아이콘) 노출여부를 설정할 수 있습니다."]}),`
`,n.jsxs("div",{className:"img-container",children:[n.jsx("h3",{children:"Alert without Dismiss Button"}),n.jsx("img",{src:m,alt:"Alert without Dismiss Button"})]}),`
`,n.jsx("br",{}),`
`,n.jsx("br",{}),`
`,n.jsxs(r.p,{children:["2줄 이상 메시지를 노출하려면 메시지에 ",n.jsx(r.code,{children:"\\n"}),"을 추가해서 사용하세요.",n.jsx(r.br,{}),`
`,n.jsx(r.code,{children:"문제가 발생하였습니다.\\n잠시 후에 다시 시도해주세요."})]}),`
`,n.jsxs("div",{className:"img-container",children:[n.jsx("h3",{children:"Alert with Multiline Message"}),n.jsx("img",{src:p,alt:"Alert with Multiline"})]})]})}function _(e={}){const{wrapper:r}={...s(),...e.components};return r?n.jsx(r,{...e,children:n.jsx(t,{...e})}):t(e)}export{_ as default};
