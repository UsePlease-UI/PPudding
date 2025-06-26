import{r as v,A as w,b as i,j as f}from"./iframe-BLazJ4V0.js";import{B as b}from"./Button-B88zD4jO.js";import{s as x}from"./common-B8FjgEV9.js";const B=()=>{const e=v.useContext(w);if(!e)throw new Error("should use Alert within Alert Provider");return e},{expect:s,spyOn:C,userEvent:A,within:R}=__STORYBOOK_MODULE_TEST__,h={args:{canDismiss:!0,delay:Number.MAX_SAFE_INTEGER,message:"로그인되었습니다.",onClose:()=>console.log("Closed!"),variant:"default"},argTypes:{canDismiss:{control:"boolean",description:"if true, component can be programmatically closed",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},delay:{control:"number",description:"duration of display (in seconds)",table:{defaultValue:{summary:"4.5"},type:{summary:"number"}}},icon:{control:!1,description:"custom icon (svg element)",table:{type:{summary:"ReactNode"}}},message:{control:"text",description:"content of the component",table:{type:{summary:"string"}}},onClose:{control:!1,description:"dismiss button click event handler",table:{type:{summary:"() => void"}}},options:{control:!1,description:"alert options",table:{defaultValue:{summary:"{ canDismiss: false; delay: 4.5; variant: default }"},type:{summary:"{ canDismiss?: boolean; delay?: number; variant?: 'default' | 'error' | 'info' | 'success' | 'warning'; }"}}},variant:{control:{type:"inline-radio"},description:"alert variant",options:["default","success","error","info","warning"],table:{defaultValue:{summary:"default"}}}},component:i,parameters:{layout:"centered"},render:function({canDismiss:t,delay:n,message:a,onClose:l,variant:g}){return f.jsx(i,{message:a,onClose:l,options:{canDismiss:t,delay:n,variant:g}})},title:"Alert/Alert"},D={default:"#000000",error:"#ff2f2f",info:"#3b82f6",success:"#225cce",warning:"#eab308"},o={play:async({args:e,canvasElement:t,step:n})=>{const a=R(t),l=C(console,"log");await n("displays user message",async()=>{await s(await a.findByRole("alert")).toBeInTheDocument(),await s(a.getByRole("alert")).toHaveTextContent(e.message)}),await n(`variant : ${e.variant}`,async()=>{await s(a.getByRole("alert")).toHaveStyle({"background-color":D[e.variant]})}),e.canDismiss?await n("if dismissible, will execute function when dismissed",async()=>{await s(a.getByRole("button")).toHaveAttribute("aria-label","알럿 닫기"),await A.click(a.getByRole("button")),await s(l).toHaveBeenCalledWith("Closed!")}):await n(`will automatically disappear after ${e.delay}ms`,async()=>{await x(e.delay||6e3),await s(a.getByRole("alert")).not.toHaveStyle({opacity:1})})}},r={args:{canDismiss:!0,delay:6e3,message:"수정되었습니다.",variant:"success"},render:function(t){const{onAlert:n}=B(),a=()=>{n(t.message,{canDismiss:t.canDismiss,delay:t.delay,variant:t.variant})};return f.jsx(b,{variant:"outlined",onClick:a,children:"수정"})}};var c,u,m;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const consoleSpy = spyOn(console, 'log');
    await step('displays user message', async () => {
      await expect(await canvas.findByRole('alert')).toBeInTheDocument();
      await expect(canvas.getByRole('alert')).toHaveTextContent(args.message);
    });
    await step(\`variant : \${args.variant}\`, async () => {
      await expect(canvas.getByRole('alert')).toHaveStyle({
        'background-color': backgroundColor[args.variant as keyof typeof backgroundColor]
      });
    });
    if (args.canDismiss) {
      await step('if dismissible, will execute function when dismissed', async () => {
        await expect(canvas.getByRole('button')).toHaveAttribute('aria-label', '알럿 닫기');
        await userEvent.click(canvas.getByRole('button'));
        await expect(consoleSpy).toHaveBeenCalledWith('Closed!');
      });
    } else {
      await step(\`will automatically disappear after \${args.delay}ms\`, async () => {
        await sleep(args.delay || 6000);
        await expect(canvas.getByRole('alert')).not.toHaveStyle({
          opacity: 1
        });
      });
    }
  }
}`,...(m=(u=o.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var d,y,p;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    canDismiss: true,
    delay: 6000,
    message: '수정되었습니다.',
    variant: 'success'
  },
  render: function Render(args) {
    const {
      onAlert
    } = useAlert();
    const handleClick = () => {
      onAlert(args.message, {
        canDismiss: args.canDismiss,
        delay: args.delay,
        variant: args.variant
      });
    };
    return <Button variant="outlined" onClick={handleClick}>
        수정
      </Button>;
  }
}`,...(p=(y=r.parameters)==null?void 0:y.docs)==null?void 0:p.source}}};const E=["Example1Default","Example2ClickToAlert"],T=Object.freeze(Object.defineProperty({__proto__:null,Example1Default:o,Example2ClickToAlert:r,__namedExportsOrder:E,default:h},Symbol.toStringTag,{value:"Module"}));export{T as A};
