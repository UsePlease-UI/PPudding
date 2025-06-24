import{j as n}from"./iframe-Jdzavq9_.js";import{useMDXComponents as r}from"./index-BFoSs7Xr.js";import{M as l}from"./blocks-C4jHC0ng.js";function e(s){const i={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",strong:"strong",...r(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{title:"Introduction/Introduction"}),`
`,n.jsx("style",{children:`
  * {
    box-sizing: border-box;
  } 

  p {
    margin: 0 !important;
    font-size: 16px !important;
    line-height: 24px !important;
    font-weight: 500 !important;
  }

  p > a {
    color: #000000 !important;
    text-decoration: underline !important;
  }

  h1 { 
    font-size: 40px;
    font-weight: 900;
    margin-bottom: 40px;
  }

  h2 {
    color: #000000;
    font-size: 24px;
    font-weight: 700;
    line-height: 24px;
    text-transform: uppercase;
    margin: 40px auto 10px !important;
  }

  h3 {
    font-weight: 600;
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
    color: #000000;
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

  .link-item > a:hover {
    text-decoration : none !important;
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
    font-weight: 500;
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
`,n.jsx(i.h1,{id:"welcome-to-ppudding",children:"Welcome to PPudding"}),`
`,n.jsx(i.h2,{id:"프로젝트-소개",children:"프로젝트 소개"}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"PPudding(뿌-딩)"})," 은 React 기반 UI 컴포넌트 라이브러리를 직접 설계하고 제작하기 위해 시작한 프로젝트입니다.",n.jsx(i.br,{}),`
`,"접근성, 키보드 내비게이션, 문서화 등 평소 놓치기 쉬운 부분들을 체계적으로 학습하고 직접 적용해보고자 했습니다."]}),`
`,n.jsx("br",{}),`
`,n.jsx(i.p,{children:"단순히 UI를 구현하는 수준을 넘어서, 실제 배포 가능한 라이브러리 형태로 만드는 것을 핵심 목표로 삼았습니다."}),`
`,n.jsx(i.h2,{id:"프로젝트-목표",children:"프로젝트 목표"}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"PPudding"})," 프로젝트는 다음 세 가지에 중점을 두고 진행했습니다."]}),`
`,n.jsx("br",{}),`
`,n.jsx(i.h3,{id:"1-접근성-학습",children:"1. 접근성 학습"}),`
`,n.jsx(i.p,{children:"컴포넌트를 개발할 때 자주 간과되는 접근성 요소를 직접 공부하고 적용해 보았습니다."}),`
`,n.jsxs(i.p,{children:["특히 ",n.jsx(i.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/",rel:"nofollow",children:"WAI-ARIA 가이드라인"}),"을 참고해, 적절한 ",n.jsx(i.code,{children:"aria"})," 속성을 사용하고 키보드 내비게이션이 자연스럽게 동작하도록 구현했습니다."]}),`
`,n.jsx(i.h3,{id:"2-컴포넌트-설계와-구조화",children:"2. 컴포넌트 설계와 구조화"}),`
`,n.jsx(i.p,{children:"다양한 UI 라이브러리를 참고하며, 컴포넌트의 props 설계와 구조에 대해 학습했습니다."}),`
`,n.jsx(i.p,{children:"그 내용을 바탕으로 재사용성과 일관성을 고려한 컴포넌트를 직접 구현했고, 다양한 상황에서도 유연하게 동작할 수 있도록 구현했습니다."}),`
`,n.jsx(i.h3,{id:"3-storybook",children:"3. Storybook"}),`
`,n.jsx(i.p,{children:"Storybook의 구조, 문서 작성 방식, Interaction Test 작성 방법을 학습하고 적용했습니다."}),`
`,n.jsx(i.p,{children:"컴포넌트별 스토리를 정리하고 테스트를 작성했으며, 완성된 Storybook은 GitHub Pages에 배포하여 누구나 쉽게 컴포넌트를 확인할 수 있도록 했습니다."}),`
`,n.jsx(i.h2,{id:"구현된-컴포넌트",children:"구현된 컴포넌트"}),`
`,n.jsxs(i.p,{children:["현재 ",n.jsx(i.strong,{children:"PPudding"})," 에는 다음과 같은 UI 컴포넌트들이 구현되어 있습니다."]}),`
`,n.jsx("br",{}),`
`,n.jsxs("ul",{class:"link-list",children:[n.jsx("li",{class:"link-item",children:n.jsxs("a",{href:"https://www.w3.org/WAI/ARIA/apg/patterns/accordion/",target:"_blank",children:[n.jsx("span",{class:"link-icon",children:"A"}),n.jsxs("div",{children:[n.jsx("strong",{children:"Accordion"}),n.jsx("p",{children:"콘텐츠를 접고 펼칠 수 있는 UI."})]})]})}),n.jsx("li",{class:"link-item",children:n.jsxs("a",{href:"https://www.w3.org/WAI/ARIA/apg/patterns/alert/",target:"_blank",children:[n.jsx("span",{class:"link-icon",children:"A"}),n.jsxs("div",{children:[n.jsx("strong",{children:"Alert"}),n.jsx("p",{children:"중요한 알림이나 오류 메시지를 보여주는 UI."})]})]})}),n.jsx("li",{class:"link-item",children:n.jsxs("a",{href:"https://www.w3.org/WAI/ARIA/apg/patterns/button/",target:"_blank",children:[n.jsx("span",{class:"link-icon",children:"B"}),n.jsxs("div",{children:[n.jsx("strong",{children:"Button"}),n.jsx("p",{children:"클릭해서 동작을 실행하는 UI."})]})]})}),n.jsx("li",{class:"link-item",children:n.jsxs("div",{class:"link-description",children:[n.jsx("span",{class:"link-icon",children:"B"}),n.jsxs("div",{children:[n.jsx("strong",{children:"Chip"}),n.jsx("p",{children:"태그나 필터로 쓸 수 있는 UI."})]})]})}),n.jsx("li",{class:"link-item",children:n.jsxs("div",{class:"link-description",children:[n.jsx("span",{class:"link-icon",children:"B"}),n.jsxs("div",{children:[n.jsx("strong",{children:"Icon Button"}),n.jsx("p",{children:"아이콘만 있는 버튼."})]})]})}),n.jsx("li",{class:"link-item",children:n.jsxs("a",{href:"https://www.w3.org/WAI/ARIA/apg/patterns/button/",target:"_blank",children:[n.jsx("span",{class:"link-icon",children:"B"}),n.jsxs("div",{children:[n.jsx("strong",{children:"Toggle Button"}),n.jsx("p",{children:"여러 상태를 전환할 수 있는 버튼."})]})]})}),n.jsx("li",{class:"link-item",children:n.jsxs("div",{class:"link-description",children:[n.jsx("span",{class:"link-icon",children:"D"}),n.jsxs("div",{children:[n.jsx("strong",{children:"Date Picker"}),n.jsx("p",{children:"달력에서 날짜를 선택하는 UI."})]})]})}),n.jsx("li",{class:"link-item",children:n.jsxs("a",{href:"https://www.w3.org/WAI/ARIA/apg/patterns/combobox/",target:"_blank",children:[n.jsx("span",{class:"link-icon",children:"F"}),n.jsxs("div",{children:[n.jsx("strong",{children:"Autocomplete"}),n.jsx("p",{children:"입력에 따라 옵션을 추천하는 필드."})]})]})}),n.jsx("li",{class:"link-item",children:n.jsxs("a",{href:"https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/",target:"_blank",children:[n.jsx("span",{class:"link-icon",children:"F"}),n.jsxs("div",{children:[n.jsx("strong",{children:"Checkbox"}),n.jsx("p",{children:"여러 옵션 중 복수 선택이 가능한 UI."})]})]})}),n.jsx("li",{class:"link-item",children:n.jsxs("a",{href:"https://www.w3.org/WAI/ARIA/apg/patterns/radiogroup/",target:"_blank",children:[n.jsx("span",{class:"link-icon",children:"F"}),n.jsxs("div",{children:[n.jsx("strong",{children:"Radio Group"}),n.jsx("p",{children:"여러 옵션 중 하나만 선택할 수 있는 UI."})]})]})}),n.jsx("li",{class:"link-item",children:n.jsxs("a",{href:"https://www.w3.org/WAI/ARIA/apg/patterns/combobox/",target:"_blank",children:[n.jsx("span",{class:"link-icon",children:"F"}),n.jsxs("div",{children:[n.jsx("strong",{children:"Select"}),n.jsx("p",{children:"목록에서 하나의 값을 선택할 수 있는 드롭다운 UI."})]})]})}),n.jsx("li",{class:"link-item",children:n.jsxs("a",{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea",target:"_blank",children:[n.jsx("span",{class:"link-icon",children:"F"}),n.jsxs("div",{children:[n.jsx("strong",{children:"Textarea"}),n.jsx("p",{children:"여러 줄의 텍스트를 입력할 수 있는 UI."})]})]})}),n.jsx("li",{class:"link-item",children:n.jsxs("a",{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text",target:"_blank",children:[n.jsx("span",{class:"link-icon",children:"F"}),n.jsxs("div",{children:[n.jsx("strong",{children:"TextField"}),n.jsx("p",{children:"한 줄의 텍스트를 입력할 수 있는 UI."})]})]})}),n.jsx("li",{class:"link-item",children:n.jsxs("div",{class:"link-description",children:[n.jsx("span",{class:"link-icon",children:"L"}),n.jsxs("div",{children:[n.jsx("strong",{children:"Loader"}),n.jsx("p",{children:"로딩 상태를 보여주는 UI."})]})]})}),n.jsx("li",{class:"link-item",children:n.jsxs("div",{class:"link-description",children:[n.jsx("span",{class:"link-icon",children:"P"}),n.jsxs("div",{children:[n.jsx("strong",{children:"Pagination"}),n.jsx("p",{children:"페이지 이동을 위한 내비게이션 UI"})]})]})}),n.jsx("li",{class:"link-item",children:n.jsxs("div",{class:"link-description",children:[n.jsx("span",{class:"link-icon",children:"P"}),n.jsxs("div",{children:[n.jsx("strong",{children:"Popover"}),n.jsx("p",{children:"기준 요소에 붙는 플로팅 UI"})]})]})}),n.jsx("li",{class:"link-item",children:n.jsxs("a",{href:"https://www.w3.org/WAI/ARIA/apg/patterns/tabs/",target:"_blank",children:[n.jsx("span",{class:"link-icon",children:"T"}),n.jsxs("div",{children:[n.jsx("strong",{children:"Tab"}),n.jsx("p",{children:"탭으로 콘텐츠를 전환하는 UI."})]})]})}),n.jsx("li",{class:"link-item",children:n.jsxs("a",{href:"https://www.w3.org/WAI/ARIA/apg/patterns/table/",target:"_blank",children:[n.jsx("span",{class:"link-icon",children:"T"}),n.jsxs("div",{children:[n.jsx("strong",{children:"Table"}),n.jsx("p",{children:"데이터를 정리해 보여주는 표 UI"})]})]})})]}),`
`,n.jsxs(i.blockquote,{children:[`
`,n.jsx(i.p,{children:"컴포넌트별 문서와 데모는 좌측 메뉴 또는 상단 검색창을 통해 바로 확인하실 수 있습니다."}),`
`]})]})}function o(s={}){const{wrapper:i}={...r(),...s.components};return i?n.jsx(i,{...s,children:n.jsx(e,{...s})}):e(s)}export{o as default};
