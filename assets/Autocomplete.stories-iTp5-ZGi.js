import{j as c}from"./jsx-runtime-BjgbQsUx.js";import{r as a}from"./index-DDT2H6na.js";import{f as i}from"./index-BsVblSul.js";import{d as T}from"./index-C8G2vthF.js";import{A as g}from"./Autocomplete-mARKeXoO.js";import{A as r}from"./constants-B3kauI-G.js";import"./index-D2MAbzvX.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Listbox-C6x8YZCb.js";import"./format-BvyHdC65.js";import"./TextField-x0uPwc1f.js";import"./FormControl-CI2cCxHg.js";import"./v4-CQkTLCs1.js";const{useArgs:x}=__STORYBOOK_MODULE_PREVIEW_API__,R={args:{labelText:"",onChange:i(),onSelect:i(),options:r,value:""},argTypes:{labelText:{control:"text",description:"content of label component",table:{category:"optional"}},onChange:{control:!1,description:"change event handler",table:{category:"required",type:{summary:"(e: ChangeEvent<HTMLInputElement>) => void"}}},onSelect:{control:!1,description:"callback fired when select is clicked",table:{category:"required",type:{summary:"(selected: { label: string; value: string; idx?: string }) => void"}}},options:{control:"object",description:"options to be shown",table:{category:"required",type:{summary:"{ label : string; value: string; idx?: string }"}}},value:{control:!1,description:"value attribute of the input element",table:{category:"required",type:{summary:"string"}},type:"string"}},component:g,parameters:{docs:{argTypes:{sort:"requiredFirst"}},layout:"centered"},tags:["autodocs"],title:"Combobox/Autocomplete"},o={args:{labelText:"Autocomplete Example",options:r,value:""},render:function(m){const[{options:h,value:b},t]=x(),l=a.useMemo(()=>T(e=>{let s=[];(e.length!==0||e!=="")&&(s=r.filter(A=>A.label.includes(e)),t({options:s})),e.length===0&&t({options:r})},100),[t]),n=a.useCallback(e=>l(e),[l]),f=a.useCallback(({currentTarget:{value:e}})=>{t({value:e}),n(e)},[t,n]),v=a.useCallback(e=>t({value:e.label}),[t]);return c.jsx("div",{className:"flex flex-col gap-2.5",children:c.jsx(g,{...m,value:b,onChange:f,onSelect:v,options:h})})}};var u,p,d;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    labelText: 'Autocomplete Example',
    options: AUTOCOMPLETE_LIST,
    value: ''
  },
  render: function Render(args) {
    const [{
      options,
      value
    }, updateArgs] = useArgs();
    const debouncedSearch = useMemo(() => debounce((value: string) => {
      let newArr = [];
      if (value.length !== 0 || value !== '') {
        newArr = AUTOCOMPLETE_LIST.filter((el: OptionsType) => el.label.includes(value));
        updateArgs({
          options: newArr
        });
      }
      if (value.length === 0) {
        updateArgs({
          options: AUTOCOMPLETE_LIST
        });
      }
    }, 100), [updateArgs]);
    const handleSearch = useCallback((value: string) => debouncedSearch(value), [debouncedSearch]);
    const handleChange = useCallback(({
      currentTarget: {
        value
      }
    }: ChangeEvent<HTMLInputElement>) => {
      updateArgs({
        value
      });
      handleSearch(value);
    }, [updateArgs, handleSearch]);
    const handleSelect = useCallback((selected: OptionsType) => updateArgs({
      value: selected.label
    }), [updateArgs]);
    return <div className="flex flex-col gap-2.5">
        <Autocomplete {...args} value={value} onChange={handleChange} onSelect={handleSelect} options={options} />
      </div>;
  }
}`,...(d=(p=o.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const U=["Default"];export{o as Default,U as __namedExportsOrder,R as default};
