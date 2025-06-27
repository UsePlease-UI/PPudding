import{j as n}from"./iframe-BuoardWh.js";import{useMDXComponents as s}from"./index-CRYJ8jaW.js";import{M as t,e as o}from"./blocks-C7X5dtgk.js";import{D as a}from"./DialogExample.stories-8EeunrkN.js";import{D as l}from"./DialogRoot.stories-v_1lKOBe.js";import{D as d}from"./DialogTrigger.stories-Dn0zQ2Go.js";import{D as c}from"./DialogFocusManager.stories-BEvGi4h9.js";import{D as h}from"./DialogContent.stories-CF-DOP42.js";import{D as x}from"./DialogTitle.stories-fdUh1ek3.js";import{D as p}from"./DialogDescription.stories-DFM0rE8X.js";import{D as g}from"./DialogAction.stories-BrxXzj8O.js";import"./DialogExample-C64iaBdI.js";import"./Button-igDYsMS3.js";import"./styles-8MddfzVJ.js";import"./Divider-CmqEjyvg.js";import"./index-J64gs0aM.js";import"./FormControl-Xq63dV1U.js";import"./useAlert-Dj1wT4DB.js";import"./index-CDq3prpL.js";const j=""+new URL("dialog_anatomy-iB-4EKYJ.png",import.meta.url).href;function r(e){const i={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{of:a}),`
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
`,n.jsx(i.h1,{id:"dialog",children:"Dialog"}),`
`,n.jsx(i.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:n.jsx(i.a,{href:"#overview",children:"Overview"})}),`
`,n.jsx(i.li,{children:n.jsx(i.a,{href:"#anatomy",children:"Anatomy"})}),`
`,n.jsx(i.li,{children:n.jsx(i.a,{href:"#wai-aria-roles-states-and-properties",children:"WAI-ARIA Roles, States, and Properties"})}),`
`,n.jsx(i.li,{children:n.jsx(i.a,{href:"#keyboard-interaction",children:"Keyboard Interaction"})}),`
`,n.jsx(i.li,{children:n.jsx(i.a,{href:"#props",children:"Props"})}),`
`,n.jsx(i.li,{children:n.jsx(i.a,{href:"#usage",children:"Usage"})}),`
`]}),`
`,n.jsx(i.h2,{id:"overview",children:"Overview"}),`
`,n.jsxs(i.p,{children:["사용자에게 중요한 정보를 알리거나, 추가 작업을 요구할 때 사용되는 ",n.jsx(i.strong,{children:"Dialog"})," 컴포넌트입니다."]}),`
`,n.jsx(i.h2,{id:"anatomy",children:"Anatomy"}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"Dialog"}),"는 다음과 같이 구현되어 있습니다."]}),`
`,n.jsx("div",{className:"img-container",children:n.jsx("img",{src:j,alt:"Dialog Anatomy"})}),`
`,n.jsxs(i.p,{children:["0️⃣ ",n.jsx(i.strong,{children:"Dialog Root"})]}),`
`,n.jsxs(i.p,{children:["1️⃣ ",n.jsx(i.strong,{children:"Dialog Trigger"})]}),`
`,n.jsxs(i.p,{children:["2️⃣ ",n.jsx(i.strong,{children:"Dialog Focus Manager"})]}),`
`,n.jsxs(i.p,{children:["3️⃣ ",n.jsx(i.strong,{children:"Dialog Content"})]}),`
`,n.jsxs(i.p,{children:["4️⃣ ",n.jsx(i.strong,{children:"Dialog Title"})]}),`
`,n.jsxs(i.p,{children:["5️⃣ ",n.jsx(i.strong,{children:"Dialog Description"})]}),`
`,n.jsxs(i.p,{children:["6️⃣ ",n.jsx(i.strong,{children:"Dialog Action"})]}),`
`,n.jsx(i.h2,{id:"wai-aria-roles-states-and-properties",children:"WAI-ARIA Roles, States, and Properties"}),`
`,n.jsx(i.h3,{id:"dialog-trigger",children:"Dialog Trigger"}),`
`,n.jsxs(i.p,{children:["✅ 트리거는 ",n.jsx(i.code,{children:"button"}),`으로 구현되어 있습니다.
✅ 버튼은 `,n.jsx(i.code,{children:'aria-haspopup="dialog"'}),"로 설정되어 있습니다.",n.jsx(i.br,{}),`
`,"✅ 버튼에는 다이얼로그의 열림 상태를 나타내는 ",n.jsx(i.code,{children:"aria-expanded"}),"가 설정되어 있습니다.",n.jsx(i.br,{}),`
`,"✅ 버튼에는 제어 대상 다이얼로그의 ID를 참조하는 ",n.jsx(i.code,{children:"aria-controls"}),"가 설정되어 있습니다."]}),`
`,n.jsx(i.h3,{id:"dialog-content",children:"Dialog Content"}),`
`,n.jsxs(i.p,{children:["✅ ",n.jsx(i.code,{children:'role="dialog"'}),"으로 설정되어 있습니다.",n.jsx(i.br,{}),`
`,"✅ 다이얼로그는 고유한 ID를 가지며, 버튼의 ",n.jsx(i.code,{children:"aria-controls"}),"가 이를 참조합니다.",n.jsx(i.br,{}),`
`,"✅ 키보드 포커스를 제한하기 위해 ",n.jsx(i.code,{children:'aria-modal="true"'}),"가 설정되어 있습니다.",n.jsx(i.br,{}),`
`,"✅ 다이얼로그의 제목 요소 ID를 참조하는 ",n.jsx(i.code,{children:"aria-labelledby"}),"가 설정되어 있습니다.",n.jsx(i.br,{}),`
`,"✅ 다이얼로그의 설명 문구 ID를 참조하는 ",n.jsx(i.code,{children:"aria-describedby"}),"가 설정되어 있습니다."]}),`
`,n.jsx(i.h3,{id:"dialog-title",children:"Dialog Title"}),`
`,n.jsxs(i.p,{children:["✅ 제목 요소는 고유한 ID를 가지며, 다이얼로그의 ",n.jsx(i.code,{children:"aria-labelledby"}),"가 이를 참조합니다."]}),`
`,n.jsx(i.h3,{id:"dialog-description",children:"Dialog Description"}),`
`,n.jsxs(i.p,{children:["✅ 설명 문구는 고유한 ID를 가지며, 다이얼로그의 ",n.jsx(i.code,{children:"aria-describedby"}),"가 이를 참조합니다."]}),`
`,n.jsx(i.h2,{id:"keyboard-interaction",children:"Keyboard Interaction"}),`
`,n.jsx("div",{className:"keyboard",children:"Tab"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"다이얼로그 내 첫 번째 포커스 가능한 요소로 이동합니다."}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsxs(i.p,{children:["이후 포커스는 다이얼로그 내부에서만 순환합니다. ",n.jsx(i.strong,{children:"(Focus Trap 적용)"})]}),`
`]}),`
`]}),`
`,n.jsx("div",{className:"keyboard",children:"Shift + Tab"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"포커스를 다이얼로그 내 이전 요소로 이동합니다."}),`
`]}),`
`,n.jsx("div",{className:"keyboard",children:"Esc"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"다이얼로그를 닫습니다."}),`
`]}),`
`,n.jsx(i.h2,{id:"props",children:"Props"}),`
`,n.jsx(i.h3,{id:"dialog-root",children:"Dialog Root"}),`
`,n.jsx(o,{of:l}),`
`,n.jsx(i.h3,{id:"dialog-trigger-1",children:"Dialog Trigger"}),`
`,n.jsx(o,{of:d}),`
`,n.jsx(i.h3,{id:"dialog-focus-manager",children:"Dialog Focus Manager"}),`
`,n.jsx(o,{of:c}),`
`,n.jsx(i.h3,{id:"dialog-content-1",children:"Dialog Content"}),`
`,n.jsx(o,{of:h}),`
`,n.jsx(i.h3,{id:"dialog-title-1",children:"Dialog Title"}),`
`,n.jsx(o,{of:x}),`
`,n.jsx(i.h3,{id:"dialog-description-1",children:"Dialog Description"}),`
`,n.jsx(o,{of:p}),`
`,n.jsx(i.h3,{id:"dialog-action",children:"Dialog Action"}),`
`,n.jsx(o,{of:g}),`
`,n.jsx(i.h2,{id:"usage",children:"Usage"}),`
`,n.jsxs(i.p,{children:["설명 요소가 없다면 DialogContent에서 ",n.jsx(i.code,{children:'aria-describedby=""'}),"로 설정해주세요."]}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-tsx",children:`import { useState } from 'react';

import { Button, Dialog, useAlert } from '@useplease-ui/ppudding';

export default function DialogExample() {
  const [isOpen, setIsOpen] = useState(false);

  const { onAlert } = useAlert();

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleConfirm = () => {
    setIsOpen(false);
    onAlert('인증 해제되었습니다.', { canDismiss: true, delay: 3000, variant: 'success' });
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-100">
      <Dialog canDismiss isOpen={isOpen} setIsOpen={setIsOpen}>
        <Dialog.Trigger>인증 해제</Dialog.Trigger>
        <Dialog.FocusManager>
          <Dialog.Content>
            <Dialog.Title className="mb-5">인증을 해제하시겠습니까?</Dialog.Title>
            <Dialog.Description className="mb-10">
              인증 해제 후에는 바로 로그아웃되며,
              <br />
              로그인 시에 새롭게 기기인증을 진행해야 합니다.
            </Dialog.Description>
            <Dialog.Action>
              <Button size="medium" variant="outlined" onClick={handleClose}>
                취소
              </Button>
              <Button size="medium" variant="contained" onClick={handleConfirm}>
                인증 해제
              </Button>
            </Dialog.Action>
          </Dialog.Content>
        </Dialog.FocusManager>
      </Dialog>
    </div>
  );
}
`})})]})}function B(e={}){const{wrapper:i}={...s(),...e.components};return i?n.jsx(i,{...e,children:n.jsx(r,{...e})}):r(e)}export{B as default};
