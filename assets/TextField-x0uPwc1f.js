import{j as p}from"./jsx-runtime-BjgbQsUx.js";import{r as l}from"./index-DDT2H6na.js";import{F as N}from"./FormControl-CI2cCxHg.js";import{j as I}from"./format-BvyHdC65.js";const q=l.forwardRef(function({className:s,helperText:u,isDisabled:m,isError:T,isFullWidth:y,isReadOnly:c,labelText:b,max:r,maxLength:i,min:d,onChange:n,onKeyDown:o,type:t="text",...a},v){const f=l.useId(),g=l.useId(),h=l.useCallback(e=>{t==="text"?i&&e.currentTarget.value.length>i&&(e.currentTarget.value=e.currentTarget.value.slice(0,i)):t==="number"&&(d&&Number(d)>0&&e.currentTarget.value==="0"?e.currentTarget.value="":r&&e.currentTarget.value.length>=r.toString().length&&Number(e.currentTarget.value)>Number(r)&&(Number(e.currentTarget.value)>Number(r)?e.currentTarget.value=r.toString():e.currentTarget.value=e.currentTarget.value.slice(0,r.toString().length))),n&&n(e)},[t,i,d,r,n]),x=l.useCallback(e=>{t==="number"&&["-","+","e","E"].includes(e.key)&&e.preventDefault(),o&&o(e)},[t,o]);return p.jsx(N,{helperText:u,helperTextId:a["aria-describedby"]||g,labelText:b,labelTextId:a.id||f,children:p.jsx("input",{...a,ref:v,"aria-describedby":u?a["aria-describedby"]||g:void 0,"aria-label":b?void 0:"outlined-text-input",disabled:m,id:a.id||f,max:r,maxLength:i,min:d,readOnly:c,type:t,autoComplete:a.autoComplete||"new-password",onChange:h,onKeyDown:x,className:I("h-10 truncate rounded border border-gray-100 px-3 py-2.5 text-14 font-normal leading-normal tracking-normal text-gray-950 placeholder:text-gray-400 hover:border-primary-600 focus:border-primary-700 focus:bg-primary-100 disabled:pointer-events-none disabled:border-gray-300 disabled:bg-gray-300 disabled:text-gray-950 under-tablet:min-w-0",y?"w-full min-w-0":"min-w-80",c&&"pointer-events-none border-gray-500 bg-gray-50",T&&"border-red-500",s&&s)})})});q.__docgenInfo={description:"",methods:[],displayName:"TextField",props:{helperText:{required:!1,tsType:{name:"ReactNode"},description:""},isDisabled:{required:!1,tsType:{name:"boolean"},description:""},isFullWidth:{required:!1,tsType:{name:"boolean"},description:""},isReadOnly:{required:!1,tsType:{name:"boolean"},description:""},labelText:{required:!1,tsType:{name:"ReactNode"},description:""},isError:{required:!1,tsType:{name:"boolean"},description:""},type:{defaultValue:{value:"'text'",computed:!1},required:!1}},composes:["InputHTMLAttributes"]};export{q as T};