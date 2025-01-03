import{j as r}from"./jsx-runtime-BjgbQsUx.js";import{r as a}from"./index-DDT2H6na.js";import{f as i}from"./index-BsVblSul.js";import{d as A}from"./index-C8G2vthF.js";import{S as d}from"./Autocomplete-Bs0cEqhU.js";import{A as n}from"./constants-B3kauI-G.js";import"./index-D2MAbzvX.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./usePosition-BmVnmNgh.js";import"./index-DttxB2Wl.js";import"./index-CTOC-uzv.js";import"./format-BvyHdC65.js";import"./Listbox-C6x8YZCb.js";import"./TextField-x0uPwc1f.js";import"./FormControl-CI2cCxHg.js";import"./v4-CQkTLCs1.js";const{useArgs:y}=__STORYBOOK_MODULE_PREVIEW_API__,D={args:{labelText:"",onChange:i(),onSelect:i(),options:n,value:""},argTypes:{helperText:{control:"text",description:"extra description of the component",table:{category:"optional"}},labelText:{control:"text",description:"content of label component",table:{category:"optional"}},name:{control:"text",description:"name attribute of the input element",table:{category:"required",type:{summary:"string"}}},onChange:{control:!1,description:"callback fired when new value is entered or selected",table:{category:"required",type:{summary:"(newValue: string) => void"}}},onSelect:{control:!1,description:"callback fired when select is clicked (undefined is returned when there is no entered value)",table:{category:"required",type:{summary:"(selected?: { label: string; value: string; idx?: string }) => void"}}},options:{control:"object",description:"options to be shown",table:{category:"required",type:{summary:"{ label : string; value: string; idx?: string }"}}},value:{control:!1,description:"value attribute of the input element",table:{category:"required",type:{summary:"string"}},type:"string"}},component:d,parameters:{docs:{argTypes:{sort:"requiredFirst"}},layout:"centered"},tags:["autodocs"],title:"Shared/Autocomplete"},o={args:{labelText:"Lorem Ipsum",name:"lorem ipsum",options:n,value:""},render:function(m){const[{options:g,value:h},t]=y(),s=a.useMemo(()=>A(e=>{if(e.length!==0&&e!==""){const v=n.filter(S=>S.label.includes(e));t({options:v})}else t({options:n})},100),[t]),l=a.useCallback(e=>s(e),[s]),b=a.useCallback(e=>{t({value:e}),l(e)},[t,l]),f=a.useCallback(e=>t({value:(e==null?void 0:e.label)||""}),[t]);return r.jsx(r.Fragment,{children:r.jsx("div",{className:"max-w-80",children:r.jsx(d,{...m,value:h,onChange:b,onSelect:f,options:g})})})}};var c,u,p;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    labelText: 'Lorem Ipsum',
    name: 'lorem ipsum',
    options: AUTOCOMPLETE_LIST,
    value: ''
  },
  render: function Render(args) {
    const [{
      options,
      value
    }, updateArgs] = useArgs();
    const debouncedSearch = useMemo(() => debounce((value: string) => {
      if (value.length !== 0 && value !== '') {
        const newArr = AUTOCOMPLETE_LIST.filter(el => el.label.includes(value as string));
        updateArgs({
          options: newArr
        });
      } else {
        updateArgs({
          options: AUTOCOMPLETE_LIST
        });
      }
    }, 100), [updateArgs]);
    const handleSearch = useCallback((value: string) => debouncedSearch(value), [debouncedSearch]);
    const handleChange = useCallback((newValue: string) => {
      updateArgs({
        value: newValue
      });
      handleSearch(newValue);
    }, [updateArgs, handleSearch]);
    const handleSelect = useCallback((selected?: OptionsType) => updateArgs({
      value: selected?.label || ''
    }), [updateArgs]);
    return <>
        <div className="max-w-80">
          <Autocomplete {...args} value={value} onChange={handleChange} onSelect={handleSelect} options={options} />
        </div>
      </>;
  }
}`,...(p=(u=o.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};const F=["Default"];export{o as Default,F as __namedExportsOrder,D as default};
