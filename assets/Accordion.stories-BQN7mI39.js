import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{A as i}from"./index-CQ0CNJxB.js";const l={args:{isDisabled:!1,isExpanded:!1},argTypes:{children:{control:!1,description:"Accordion Header and Accordion Panel",table:{category:"required",type:{summary:"ReactNode"}}},className:{control:!1,description:"custom className",table:{category:"optional",type:{summary:"string"}}},isDisabled:{control:"boolean",description:"if true, accordion header is disabled",table:{category:"optional",defaultValue:{summary:"false"},type:{summary:"boolean"}}},isExpanded:{control:"boolean",description:"if true, accordion panel is expanded",table:{category:"optional",defaultValue:{summary:"false"},type:{summary:"boolean"}}},onChange:{control:!1,description:"callback fired when accordion header is clicked",table:{category:"optional",type:{summary:"(event: MouseEvent<HTMLButtonElement>, isExpanded: boolean) => void"}}}},component:i,parameters:{docs:{argTypes:{sort:"requiredFirst"}}},title:"Accordion/Accordion"},e={render:({isDisabled:r,isExpanded:n})=>a.jsxs(i,{isDisabled:r,isExpanded:n,children:[a.jsx(i.Header,{headingLevel:"h2",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}),a.jsx(i.Panel,{children:"Phasellus lacinia lacus at mi lobortis, a fringilla lectus maximus. Vestibulum id volutpat leo. Nam eget ante non eros ultrices ultricies. Vivamus porta, ante non egestas fermentum, ante diam ultrices est, non euismod purus urna eget mi. Praesent iaculis turpis tortor, eget semper magna rutrum eu. Duis nibh tortor, finibus eget euismod at, gravida a diam. Cras vehicula ipsum at odio efficitur, a commodo leo suscipit. Ut in nisi nisl. Etiam ex ligula, viverra non dui sed, vestibulum fermentum felis."})]})};var o,t,s;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: ({
    isDisabled,
    isExpanded
  }) => <Accordion isDisabled={isDisabled} isExpanded={isExpanded}>
      <Accordion.Header headingLevel="h2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Accordion.Header>
      <Accordion.Panel>
        Phasellus lacinia lacus at mi lobortis, a fringilla lectus maximus. Vestibulum id volutpat leo. Nam eget ante
        non eros ultrices ultricies. Vivamus porta, ante non egestas fermentum, ante diam ultrices est, non euismod
        purus urna eget mi. Praesent iaculis turpis tortor, eget semper magna rutrum eu. Duis nibh tortor, finibus eget
        euismod at, gravida a diam. Cras vehicula ipsum at odio efficitur, a commodo leo suscipit. Ut in nisi nisl.
        Etiam ex ligula, viverra non dui sed, vestibulum fermentum felis.
      </Accordion.Panel>
    </Accordion>
}`,...(s=(t=e.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};const c=["Default"],m=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:c,default:l},Symbol.toStringTag,{value:"Module"}));export{m as A};
