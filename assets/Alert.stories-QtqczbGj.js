import{A as i,j as f}from"./iframe-BuoardWh.js";import{B as v}from"./Button-igDYsMS3.js";import{u as w}from"./useAlert-Dj1wT4DB.js";import{s as b}from"./common-B8FjgEV9.js";const{expect:s,spyOn:x,userEvent:B,within:C}=__STORYBOOK_MODULE_TEST__,R={args:{canDismiss:!0,delay:Number.MAX_SAFE_INTEGER,message:"로그인되었습니다.",onClose:()=>console.log("Closed!"),variant:"default"},argTypes:{canDismiss:{control:"boolean",description:"if true, component can be programmatically closed",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},delay:{control:"number",description:"duration of display (in seconds)",table:{defaultValue:{summary:"4.5"},type:{summary:"number"}}},icon:{control:!1,description:"custom icon (svg element)",table:{type:{summary:"ReactNode"}}},message:{control:"text",description:"content of the component",table:{type:{summary:"string"}}},onClose:{control:!1,description:"dismiss button click event handler",table:{type:{summary:"() => void"}}},options:{control:!1,description:"alert options",table:{defaultValue:{summary:"{ canDismiss: false; delay: 4.5; variant: default }"},type:{summary:"{ canDismiss?: boolean; delay?: number; variant?: 'default' | 'error' | 'info' | 'success' | 'warning'; }"}}},variant:{control:{type:"inline-radio"},description:"alert variant",options:["default","success","error","info","warning"],table:{defaultValue:{summary:"default"}}}},component:i,parameters:{layout:"centered"},render:function({canDismiss:t,delay:n,message:e,onClose:l,variant:g}){return f.jsx(i,{message:e,onClose:l,options:{canDismiss:t,delay:n,variant:g}})},title:"Alert/Alert"},A={default:"#000000",error:"#ff2f2f",info:"#3b82f6",success:"#225cce",warning:"#eab308"},o={play:async({args:a,canvasElement:t,step:n})=>{const e=C(t),l=x(console,"log");await n("displays user message",async()=>{await s(await e.findByRole("alert")).toBeInTheDocument(),await s(e.getByRole("alert")).toHaveTextContent(a.message)}),await n(`variant : ${a.variant}`,async()=>{await s(e.getByRole("alert")).toHaveStyle({"background-color":A[a.variant]})}),a.canDismiss?await n("if dismissible, will execute function when dismissed",async()=>{await s(e.getByRole("button")).toHaveAttribute("aria-label","알럿 닫기"),await B.click(e.getByRole("button")),await s(l).toHaveBeenCalledWith("Closed!")}):await n(`will automatically disappear after ${a.delay}ms`,async()=>{await b(a.delay||6e3),await s(e.getByRole("alert")).not.toHaveStyle({opacity:1})})}},r={args:{canDismiss:!0,delay:6e3,message:"수정되었습니다.",variant:"success"},render:function(t){const{onAlert:n}=w(),e=()=>{n(t.message,{canDismiss:t.canDismiss,delay:t.delay,variant:t.variant})};return f.jsx(v,{variant:"outlined",onClick:e,children:"수정"})}};var c,m,u;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var d,y,p;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(p=(y=r.parameters)==null?void 0:y.docs)==null?void 0:p.source}}};const D=["Example1Default","Example2ClickToAlert"],_=Object.freeze(Object.defineProperty({__proto__:null,Example1Default:o,Example2ClickToAlert:r,__namedExportsOrder:D,default:R},Symbol.toStringTag,{value:"Module"}));export{_ as A};
