import{j as t}from"./jsx-runtime-BjgbQsUx.js";import{A as i}from"./index-hArN_0a7.js";import"./index-D2MAbzvX.js";import"./index-DDT2H6na.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./format-BvyHdC65.js";import"./ChevronDownIcon-Cs31zoc3.js";const{useArgs:l}=__STORYBOOK_MODULE_PREVIEW_API__,A={args:{isDisabled:!1,isExpanded:!0},argTypes:{children:{control:{disable:!0},description:"content of the component (Accordion Header, Accordion Panel)",table:{category:"required",type:{summary:"ReactNode"}}},className:{table:{disable:!0}},isDisabled:{control:"boolean",description:"if true, the component will be disabled",table:{category:"optional"}},isExpanded:{control:!1,description:"if true, accordion panel will be visible",table:{category:"optional"}},onChange:{control:!1,description:"change event handler",table:{category:"optional",type:{summary:"(e: MouseEvent<HTMLButtonElement>, isExpanded: boolean) => void"}}}},component:i,parameters:{docs:{argTypes:{sort:"requiredFirst"}},layout:"centered"},tags:["autodocs"],title:"Accordion/Accordion"},e={render:function(o){const[{isExpanded:s},u]=l();return t.jsxs(i,{...o,isExpanded:s,onChange:(m,d)=>u({isExpanded:d}),children:[t.jsx(i.Header,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}),t.jsx(i.Panel,{children:"Phasellus lacinia lacus at mi lobortis, a fringilla lectus maximus. Vestibulum id volutpat leo. Nam eget ante non eros ultrices ultricies. Vivamus porta, ante non egestas fermentum, ante diam ultrices est, non euismod purus urna eget mi. Praesent iaculis turpis tortor, eget semper magna rutrum eu. Duis nibh tortor, finibus eget euismod at, gravida a diam. Cras vehicula ipsum at odio efficitur, a commodo leo suscipit. Ut in nisi nisl. Etiam ex ligula, viverra non dui sed, vestibulum fermentum felis."})]})}};var a,n,r;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: function Render(args) {
    const [{
      isExpanded
    }, updateArgs] = useArgs();
    return <Accordion {...args} isExpanded={isExpanded} onChange={(_, isExpanded) => updateArgs({
      isExpanded
    })}>
        <Accordion.Header>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Accordion.Header>
        <Accordion.Panel>
          Phasellus lacinia lacus at mi lobortis, a fringilla lectus maximus. Vestibulum id volutpat leo. Nam eget ante
          non eros ultrices ultricies. Vivamus porta, ante non egestas fermentum, ante diam ultrices est, non euismod
          purus urna eget mi. Praesent iaculis turpis tortor, eget semper magna rutrum eu. Duis nibh tortor, finibus
          eget euismod at, gravida a diam. Cras vehicula ipsum at odio efficitur, a commodo leo suscipit. Ut in nisi
          nisl. Etiam ex ligula, viverra non dui sed, vestibulum fermentum felis.
        </Accordion.Panel>
      </Accordion>;
  }
}`,...(r=(n=e.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const h=["Default"];export{e as Default,h as __namedExportsOrder,A as default};
