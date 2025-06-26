import{j as e}from"./iframe-BLazJ4V0.js";import{S as t}from"./Switch-iQpYt5iP.js";const{useArgs:h}=__STORYBOOK_MODULE_PREVIEW_API__,A={args:{checked:!1,isDisabled:!1,label:"푸시 알림",position:"start",stateText:"",thumb:null},argTypes:{checked:{table:{disable:!0}},isDisabled:{control:"boolean",description:"if true, the component will be disabled"},label:{control:"text",description:"content of the component"},onChange:{control:!1,description:"change event handler",table:{type:{summary:"(e: ChangeEvent<HTMLInputElement>) => void"}}},position:{control:{type:"inline-radio"},description:"switch label position",options:["start","end"],table:{type:{summary:"start | end"}}},stateText:{control:"text",description:"text equivalent of the state (on or off)",table:{type:{summary:"string"}}},thumb:{control:!1,description:"custom switch thumb",table:{type:{summary:"ReactNode"}}}},component:t,parameters:{layout:"centered"},tags:["autodocs"],title:"Form/Switch"},l={args:{checked:!0,isDisabled:!0,label:"푸시 알림"},render:function(s){const[{checked:a},r]=h(),n=c=>{r({checked:c.currentTarget.checked})};return e.jsxs("fieldset",{className:"w-full max-w-90 space-y-5",children:[e.jsx("legend",{className:"text-12 font-semibold text-gray-600",children:"알림"}),e.jsx(t,{...s,checked:a,onChange:n}),e.jsx("br",{}),e.jsx(t,{label:"새 공지 알림",position:"start"}),e.jsx(t,{label:"서비스 알림",position:"start"})]})}},o={args:{checked:!0,label:"푸시 알림"},render:function(s){const[{checked:a,isDisabled:r},n]=h(),c=E=>{n({checked:E.currentTarget.checked})};return e.jsxs("fieldset",{className:"w-full max-w-90 space-y-5",children:[e.jsx("legend",{className:"text-12 font-semibold text-gray-600",children:"알림"}),e.jsx(t,{...s,checked:a,className:r?"bg-red-900":"",onChange:c,thumb:e.jsx("span",{className:"size-6 rounded-full bg-red-500 transition-transform peer-checked:translate-x-6 peer-disabled:bg-gray-400"})}),e.jsx("br",{}),e.jsx(t,{label:"새 공지 알림",position:"start"}),e.jsx(t,{label:"서비스 알림",position:"start"})]})}},d={args:{checked:!0,label:"푸시 알림"},render:function(s){const[{checked:a},r]=h(),n=c=>{r({checked:c.currentTarget.checked})};return e.jsxs("fieldset",{className:"w-full max-w-90 space-y-5",children:[e.jsx("legend",{className:"text-12 font-semibold text-gray-600",children:"알림"}),e.jsx(t,{...s,checked:a,label:e.jsx("span",{className:"cursor-pointer text-18 font-bold text-pink-600",children:s.label}),onChange:n}),e.jsx("br",{}),e.jsx(t,{label:"새 공지 알림",position:"start"}),e.jsx(t,{label:"서비스 알림",position:"start"})]})}},i={args:{checked:!0,label:"푸시 알림",stateText:"ON"},render:function(s){const[{checked:a},r]=h(),n=c=>{r({checked:c.currentTarget.checked})};return e.jsxs("fieldset",{className:"w-full max-w-90 space-y-5",children:[e.jsx("legend",{className:"text-12 font-semibold text-gray-600",children:"알림"}),e.jsx(t,{...s,checked:a,onChange:n}),e.jsx("br",{}),e.jsx(t,{label:"새 공지 알림",position:"start"}),e.jsx(t,{label:"서비스 알림",position:"start"})]})}};var g,p,m;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    checked: true,
    isDisabled: true,
    label: '푸시 알림'
  },
  render: function Render(args) {
    const [{
      checked
    }, updateArgs] = useArgs();
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      updateArgs({
        checked: e.currentTarget.checked
      });
    };
    return <fieldset className="w-full max-w-90 space-y-5">
        <legend className="text-12 font-semibold text-gray-600">알림</legend>
        <Switch {...args} checked={checked} onChange={handleChange} />
        <br />
        <Switch label="새 공지 알림" position="start" />
        <Switch label="서비스 알림" position="start" />
      </fieldset>;
  }
}`,...(m=(p=l.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var b,x,f;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    checked: true,
    label: '푸시 알림'
  },
  render: function Render(args) {
    const [{
      checked,
      isDisabled
    }, updateArgs] = useArgs();
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      updateArgs({
        checked: e.currentTarget.checked
      });
    };
    return <fieldset className="w-full max-w-90 space-y-5">
        <legend className="text-12 font-semibold text-gray-600">알림</legend>
        <Switch {...args} checked={checked} className={isDisabled ? 'bg-red-900' : ''} onChange={handleChange} thumb={<span className="size-6 rounded-full bg-red-500 transition-transform peer-checked:translate-x-6 peer-disabled:bg-gray-400" />} />
        <br />
        <Switch label="새 공지 알림" position="start" />
        <Switch label="서비스 알림" position="start" />
      </fieldset>;
  }
}`,...(f=(x=o.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var k,w,C;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    checked: true,
    label: '푸시 알림'
  },
  render: function Render(args) {
    const [{
      checked
    }, updateArgs] = useArgs();
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      updateArgs({
        checked: e.currentTarget.checked
      });
    };
    return <fieldset className="w-full max-w-90 space-y-5">
        <legend className="text-12 font-semibold text-gray-600">알림</legend>
        <Switch {...args} checked={checked} label={<span className="cursor-pointer text-18 font-bold text-pink-600">{args.label}</span>} onChange={handleChange} />
        <br />
        <Switch label="새 공지 알림" position="start" />
        <Switch label="서비스 알림" position="start" />
      </fieldset>;
  }
}`,...(C=(w=d.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var y,j,N;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    checked: true,
    label: '푸시 알림',
    stateText: 'ON'
  },
  render: function Render(args) {
    const [{
      checked
    }, updateArgs] = useArgs();
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      updateArgs({
        checked: e.currentTarget.checked
      });
    };
    return <fieldset className="w-full max-w-90 space-y-5">
        <legend className="text-12 font-semibold text-gray-600">알림</legend>
        <Switch {...args} checked={checked} onChange={handleChange} />
        <br />
        <Switch label="새 공지 알림" position="start" />
        <Switch label="서비스 알림" position="start" />
      </fieldset>;
  }
}`,...(N=(j=i.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};const R=["Example1Default","Example2CustomThumb","Example3CustomLabel","Example4WithStateText"];export{l as Example1Default,o as Example2CustomThumb,d as Example3CustomLabel,i as Example4WithStateText,R as __namedExportsOrder,A as default};
