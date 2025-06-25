import{j as e}from"./iframe-BBfB5-06.js";import{S as t}from"./Switch-DibvttPG.js";const{useArgs:h}=__STORYBOOK_MODULE_PREVIEW_API__,E={args:{checked:!1,isDisabled:!1,label:"푸시 알림",position:"end",stateText:"",thumb:null},argTypes:{checked:{table:{disable:!0}},isDisabled:{control:"boolean",description:"if true, the component will be disabled",table:{category:"optional"}},label:{control:"text",description:"content of the component",table:{category:"optional",type:{summary:"ReactNode"}}},onChange:{control:!1,description:"change event handler",table:{category:"optional",type:{summary:"(e: ChangeEvent<HTMLInputElement>) => void"}}},position:{control:{type:"inline-radio"},description:"switch label position",options:["start","end"],table:{category:"optional",type:{summary:"start | end"}}},stateText:{control:"text",description:"text equivalent of the state (on or off)",table:{category:"optional",type:{summary:"string"}}},thumb:{control:!1,description:"custom switch thumb",table:{category:"optional",type:{summary:"ReactNode"}}}},component:t,parameters:{docs:{argTypes:{sort:"requiredFirst"}},layout:"centered"},tags:["autodocs"],title:"Form/Switch"},o={args:{checked:!0,isDisabled:!0,label:"푸시 알림",position:"start"},render:function(s){const[{checked:a},r]=h(),n=c=>{r({checked:c.currentTarget.checked})};return e.jsxs("fieldset",{className:"w-full max-w-90 space-y-5",children:[e.jsx("legend",{className:"text-12 font-semibold text-gray-600",children:"알림"}),e.jsx(t,{...s,checked:a,onChange:n}),e.jsx("br",{}),e.jsx(t,{label:"새 공지 알림",position:"start"}),e.jsx(t,{label:"서비스 알림",position:"start"})]})}},l={args:{checked:!0,label:"푸시 알림",position:"start"},render:function(s){const[{checked:a,isDisabled:r},n]=h(),c=p=>{n({checked:p.currentTarget.checked})};return e.jsxs("fieldset",{className:"w-full max-w-90 space-y-5",children:[e.jsx("legend",{className:"text-12 font-semibold text-gray-600",children:"알림"}),e.jsx(t,{...s,checked:a,className:r?"bg-red-900":"",onChange:c,thumb:e.jsx("span",{className:"size-6 rounded-full bg-red-500 transition-transform peer-checked:translate-x-6 peer-disabled:bg-gray-400"})}),e.jsx("br",{}),e.jsx(t,{label:"새 공지 알림",position:"start"}),e.jsx(t,{label:"서비스 알림",position:"start"})]})}},i={args:{checked:!0,label:"푸쉬 알림",position:"start"},render:function(s){const[{checked:a,isDisabled:r},n]=h(),c=p=>{n({checked:p.currentTarget.checked})};return e.jsxs("fieldset",{className:"w-full max-w-90 space-y-5",children:[e.jsx("legend",{className:"text-12 font-semibold text-gray-600",children:"알림"}),e.jsx(t,{...s,checked:a,className:r?"bg-red-900":"",label:e.jsx("span",{className:"cursor-pointer text-18 font-bold text-pink-600",children:s.label}),onChange:c}),e.jsx("br",{}),e.jsx(t,{label:"새 공지 알림",position:"start"}),e.jsx(t,{label:"서비스 알림",position:"start"})]})}},d={args:{checked:!0,label:"푸시 알림",position:"start",stateText:"ON"},render:function(s){const[{checked:a},r]=h(),n=c=>{r({checked:c.currentTarget.checked})};return e.jsxs("fieldset",{className:"w-full max-w-90 space-y-5",children:[e.jsx("legend",{className:"text-12 font-semibold text-gray-600",children:"알림"}),e.jsx(t,{...s,checked:a,onChange:n}),e.jsx("br",{}),e.jsx(t,{label:"새 공지 알림",position:"start"}),e.jsx(t,{label:"서비스 알림",position:"start"})]})}};var u,m,b;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    checked: true,
    isDisabled: true,
    label: '푸시 알림',
    position: 'start'
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
}`,...(b=(m=o.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var x,f,k;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    checked: true,
    label: '푸시 알림',
    position: 'start'
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
}`,...(k=(f=l.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var w,y,C;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    checked: true,
    label: '푸쉬 알림',
    position: 'start'
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
        <Switch {...args} checked={checked} className={isDisabled ? 'bg-red-900' : ''} label={<span className="cursor-pointer text-18 font-bold text-pink-600">{args.label}</span>} onChange={handleChange} />
        <br />
        <Switch label="새 공지 알림" position="start" />
        <Switch label="서비스 알림" position="start" />
      </fieldset>;
  }
}`,...(C=(y=i.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var S,j,N;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    checked: true,
    label: '푸시 알림',
    position: 'start',
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
}`,...(N=(j=d.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};const D=["Switch1Default","Switch2CustomThumb","Switch3CustomLabel","Switch3WithStateText"];export{o as Switch1Default,l as Switch2CustomThumb,i as Switch3CustomLabel,d as Switch3WithStateText,D as __namedExportsOrder,E as default};
