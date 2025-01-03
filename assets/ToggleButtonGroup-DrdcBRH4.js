import{j as a}from"./jsx-runtime-BjgbQsUx.js";import{r as t}from"./index-DDT2H6na.js";import{j as e}from"./format-BvyHdC65.js";import{c as p}from"./styles-D32WepGD.js";const c={largeText:e("p-[8.5px] text-18"),mediumText:e("p-2 text-16"),miniText:e("p-1.25 text-12 font-semibold"),smallText:e("p-1.5 text-14")},b=s=>{switch(s){case"small":return{icon:p.smallIcon,text:c.smallText};case"medium":return{icon:p.mediumIcon,text:c.mediumText};case"large":return{icon:p.largeIcon,text:c.largeText};default:return{icon:p.miniIcon,text:c.miniText}}},k=t.forwardRef(function(o,d){const{children:n,className:l,currentValue:r="",isDisabled:i,isMultiple:f,name:T,onChange:u,size:y,value:m,...w}=o,h=t.useId(),g=t.useMemo(()=>typeof r=="string"?m===r:r.includes(m),[r,m]),v=t.useCallback(x=>{x.currentTarget.blur(),u&&u(x)},[u]);return a.jsxs("label",{htmlFor:h,className:e("group flex h-max w-max shrink-0 cursor-pointer items-center overflow-hidden border-y border-primary-600 bg-white first:rounded-l first:border-l last:rounded-r last:border-r focus-within:border-primary-700 focus-within:bg-primary-100",!g&&i&&"cursor-not-allowed border-yellow-gray-400",g&&i&&"cursor-not-allowed border-gray-400",l&&l),children:[a.jsx("input",{...w,ref:d,checked:g,className:"peer sr-only",disabled:i,id:h,name:T,type:f?"checkbox":"radio",value:m,onChange:v}),typeof n=="string"?a.jsx("span",{className:e("text-16 font-medium uppercase","flex items-center justify-center text-primary-800 group-focus-within:text-primary-800 group-hover:bg-primary-50 group-hover:text-primary-900 peer-checked:bg-primary-600 peer-checked:text-primary-950 peer-checked:hover:bg-primary-700 peer-checked:hover:text-white peer-disabled:bg-yellow-gray-50 peer-disabled:text-yellow-gray-600 peer-disabled:peer-checked:bg-gray-400 peer-disabled:peer-checked:text-gray-200",b(y).text),children:n}):a.jsx("span",{className:e("flex items-center justify-center text-primary-800 group-focus-within:text-primary-800 group-hover:bg-primary-50 group-hover:text-primary-900 peer-checked:bg-primary-600 peer-checked:text-primary-950 peer-checked:hover:bg-primary-700 peer-checked:hover:text-white peer-disabled:bg-yellow-gray-50 peer-disabled:text-yellow-gray-600 peer-disabled:peer-checked:bg-gray-400 peer-disabled:peer-checked:text-gray-200",b(y).icon),children:t.cloneElement(n,{className:e("block text-inherit")})})]})});k.__docgenInfo={description:"",methods:[],displayName:"ToggleButton",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},name:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"string"},description:""},currentValue:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},isDisabled:{required:!1,tsType:{name:"boolean"},description:""},isMultiple:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"union",raw:"'large' | 'medium' | 'small'",elements:[{name:"literal",value:"'large'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'small'"}]},description:""}},composes:["Omit"]};function j({children:s,className:o,onChange:d,value:n,...l}){const r=typeof n!="string";return a.jsx("div",{...l,...!r&&{role:"radiogroup"},className:e("flex",o&&o),children:t.Children.toArray(s).map(i=>t.cloneElement(i,{currentValue:n,isMultiple:r,onChange:d}))})}j.__docgenInfo={description:"",methods:[],displayName:"ToggleButtonGroup",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},value:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"HTMLInputElement"}],raw:"ChangeEvent<HTMLInputElement>"},name:"e"}],return:{name:"void"}}},description:""}},composes:["Omit"]};export{k as T,j as a};