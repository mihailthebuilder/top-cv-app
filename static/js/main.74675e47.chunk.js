(this["webpackJsonptop-cv-app"]=this["webpackJsonptop-cv-app"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(2),s=n.n(i),r=n(4),c=n.n(r),u=(n(14),n(5)),o=n(6),d=n(1),l=n(8),b=n(7);n(15);function j(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];this.answers=e,this.saved=t,this.newEntry=n}var p=function(e){return new j(e.answers.map((function(e){return Object.assign({},e)})),e.saved,e.newEntry)},h=function(e,t){var n={};return n[t]=e,n},v=function(e){return e.closest("form").getAttribute("state")},x=function(e){return parseInt(e.closest(".group-order-indicator").getAttribute("grouporder"))},y=(n(16),function(e){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:e.title}),Object(a.jsx)("div",{className:"line-break"})]})}),g=(n(17),function(e){var t=Object(a.jsx)("label",{className:"regular-font-size",children:e.label});return e.saved?Object(a.jsxs)("div",{className:"form-question",children:[t,Object(a.jsx)("span",{className:"regular-font-size",children:e.inputValue})]}):Object(a.jsxs)("div",{className:"form-question",children:[t,Object(a.jsx)("input",{type:e.type,className:"hover-highlight regular-font-size border-radius border-width",value:e.inputValue,inputkey:e.inputkey,onChange:e.inputChange,required:!0})]})}),m=(n(18),function(e){var t=e.hasOwnProperty("clickFunc")?e.clickFunc:function(){},n="btn border-radius border-width regular-font-size ";return n+=e.hasOwnProperty("additionalClass")?e.additionalClass:"normal",Object(a.jsx)("button",{className:n,type:e.buttonType,onClick:t,children:e.buttonText})}),O=function(e){var t=e.data.answers[0];return Object(a.jsxs)("form",{state:"generalInfo",onSubmit:e.sectionSaveEdit,children:[Object(a.jsx)(y,{title:"General Info"}),Object(a.jsxs)("div",{className:"group-order-indicator",grouporder:"0",children:[Object(a.jsx)(g,{label:"Name",inputkey:"name",inputValue:t.name,type:"text",inputChange:e.inputChange,saved:e.data.saved}),Object(a.jsx)(g,{label:"Email",inputkey:"email",type:"email",inputChange:e.inputChange,inputValue:t.email,saved:e.data.saved}),Object(a.jsx)(g,{label:"Phone number",inputkey:"phone",type:"number",inputChange:e.inputChange,inputValue:t.phone,saved:e.data.saved}),Object(a.jsx)("div",{className:"buttons-container",children:Object(a.jsx)(m,{buttonText:e.data.saved?"Edit":"Save",buttonType:"submit"})})]},"0")]})},f=(n(19),function(){return Object(a.jsx)("div",{className:"entry-break"})}),E=function(e){var t=e.data.answers.map((function(t,n){var i=e.data.answers[n],s=e.data.saved&&!(e.data.newEntry&&n+1===e.data.answers.length);return Object(a.jsxs)("div",{className:"group-order-indicator",grouporder:n,children:[n>0&&Object(a.jsx)(f,{}),Object(a.jsx)(g,{label:"School name",inputkey:"school",type:"text",inputChange:e.inputChange,inputValue:i.school,saved:s}),Object(a.jsx)(g,{label:"Course name",inputkey:"course",type:"text",inputChange:e.inputChange,inputValue:i.course,saved:s}),Object(a.jsx)(g,{label:"Date from",inputkey:"dateFrom",type:"date",inputChange:e.inputChange,inputValue:i.dateFrom,saved:s}),Object(a.jsx)(g,{label:"Date to",inputkey:"dateTo",type:"date",inputChange:e.inputChange,inputValue:i.dateTo,saved:s}),!e.data.newEntry&&!e.data.saved&&Object(a.jsx)("div",{className:"buttons-container",children:Object(a.jsx)(m,{buttonText:"Delete",buttonType:"button",clickFunc:e.deleteEntry,additionalClass:"danger"})})]},n.toString()+"-education")})),n=0===e.data.answers.length?Object(a.jsx)("div",{className:"buttons-container",children:Object(a.jsx)(m,{buttonText:"Add",buttonType:"button",clickFunc:e.newEntry})}):e.data.newEntry||!e.data.saved?Object(a.jsx)("div",{className:"buttons-container",children:Object(a.jsx)(m,{buttonText:"Save",buttonType:"submit"})}):Object(a.jsxs)("div",{className:"buttons-container",children:[Object(a.jsx)(m,{buttonText:"Edit",buttonType:"submit"}),Object(a.jsx)("div",{}),Object(a.jsx)(m,{buttonText:"Add",buttonType:"button",clickFunc:e.newEntry})]});return Object(a.jsxs)("form",{state:"education",onSubmit:e.sectionSaveEdit,children:[Object(a.jsx)(y,{title:"Education"}),t,n]})},w=(n(20),function(e){var t=Object(a.jsx)("label",{className:"regular-font-size",children:e.label});return e.saved?Object(a.jsxs)("div",{className:"textarea-question",children:[t,Object(a.jsx)("span",{className:"regular-font-size",children:e.inputValue})]}):Object(a.jsxs)("div",{className:"textarea-question",children:[t,Object(a.jsx)("textarea",{className:"hover-highlight regular-font-size border-radius border-width",rows:"4",value:e.inputValue,inputkey:e.inputkey,onChange:e.inputChange,required:!0})]})}),C=function(e){var t=e.data.answers.map((function(t,n){var i=e.data.answers[n],s=e.data.saved&&!(e.data.newEntry&&n+1===e.data.answers.length);return Object(a.jsxs)("div",{className:"group-order-indicator",grouporder:n,children:[n>0&&Object(a.jsx)(f,{}),Object(a.jsx)(g,{label:"Company name",inputkey:"employer",type:"text",inputChange:e.inputChange,inputValue:i.employer,saved:s}),Object(a.jsx)(g,{label:"Job title",inputkey:"jobTitle",type:"text",inputChange:e.inputChange,inputValue:i.jobTitle,saved:s}),Object(a.jsx)(w,{label:"Main responsibilities",inputkey:"mainTasks",inputChange:e.inputChange,inputValue:i.mainTasks,saved:s}),Object(a.jsx)(g,{label:"Date from",inputkey:"dateFrom",type:"date",inputChange:e.inputChange,inputValue:i.dateFrom,saved:s}),Object(a.jsx)(g,{label:"Date to",inputkey:"dateTo",type:"date",inputChange:e.inputChange,inputValue:i.dateTo,saved:s}),!e.data.newEntry&&!e.data.saved&&Object(a.jsx)("div",{className:"buttons-container",children:Object(a.jsx)(m,{buttonText:"Delete",buttonType:"button",clickFunc:e.deleteEntry,additionalClass:"danger"})})]},n.toString()+"-job")})),n=0===e.data.answers.length?Object(a.jsx)("div",{className:"buttons-container",children:Object(a.jsx)(m,{buttonText:"Add",buttonType:"button",clickFunc:e.newEntry})}):e.data.newEntry||!e.data.saved?Object(a.jsx)("div",{className:"buttons-container",children:Object(a.jsx)(m,{buttonText:"Save",buttonType:"submit"})}):Object(a.jsxs)("div",{className:"buttons-container",children:[Object(a.jsx)(m,{buttonText:"Edit",buttonType:"submit"}),Object(a.jsx)("div",{}),Object(a.jsx)(m,{buttonText:"Add",buttonType:"button",clickFunc:e.newEntry})]});return Object(a.jsxs)("form",{state:"jobs",onSubmit:e.sectionSaveEdit,children:[Object(a.jsx)(y,{title:"Work Experience"}),t,n]})},k=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={generalInfo:new j([{name:"",email:"",phone:""}]),education:new j,jobs:new j},a.inputChange=a.inputChange.bind(Object(d.a)(a)),a.sectionSaveEdit=a.sectionSaveEdit.bind(Object(d.a)(a)),a.newEntry=a.newEntry.bind(Object(d.a)(a)),a.deleteEntry=a.deleteEntry.bind(Object(d.a)(a)),a}return Object(o.a)(n,[{key:"inputChange",value:function(e){this.setState((function(t){var n=v(e.target),a=x(e.target),i=e.target.getAttribute("inputkey"),s=p(t[n]);return s.answers[a][i]=e.target.value,h(s,n)}))}},{key:"sectionSaveEdit",value:function(e){e.preventDefault(),this.setState((function(t){var n=v(e.target),a=p(t[n]);return a.newEntry?(a.newEntry=!1,a.saved=!0):a.saved=!a.saved,h(a,n)}))}},{key:"newEntry",value:function(e){this.setState((function(t){var n=v(e.target),a=p(t[n]);a.newEntry=!0;var i="education"===n?{school:"",course:"",dateFrom:"",dateTo:""}:{employer:"",jobTitle:"",mainTasks:"",dateFrom:"",dateTo:""};return a.answers.push(i),h(a,n)}))}},{key:"deleteEntry",value:function(e){this.setState((function(t){var n=v(e.target),a=x(e.target),i=p(t[n]);return i.answers.splice(a,1),h(i,n)}))}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"form-container",children:[Object(a.jsx)("div",{className:"form-heading-container",children:Object(a.jsx)("h1",{children:"Job Application Form"})}),Object(a.jsxs)("div",{className:"form-body-container",children:[Object(a.jsx)(O,{data:this.state.generalInfo,inputChange:this.inputChange,sectionSaveEdit:this.sectionSaveEdit}),Object(a.jsx)(E,{data:this.state.education,inputChange:this.inputChange,sectionSaveEdit:this.sectionSaveEdit,newEntry:this.newEntry,deleteEntry:this.deleteEntry}),Object(a.jsx)(C,{data:this.state.jobs,inputChange:this.inputChange,sectionSaveEdit:this.sectionSaveEdit,newEntry:this.newEntry,deleteEntry:this.deleteEntry})]})]})}}]),n}(i.Component);c.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(k,{})}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.74675e47.chunk.js.map