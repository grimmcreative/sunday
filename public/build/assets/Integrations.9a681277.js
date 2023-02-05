import{_ as g}from"./AppLayout.61ea5a27.js";import{A as f}from"./AutomationModal.8bc9e173.js";import{_ as w}from"./_plugin-vue_export-helper.cdc0426e.js";import{r as u,o as l,j as x,b as v,d as t,c,f as _,F as h,a as y,t as i}from"./app.e6e97f3c.js";import"./ConfirmationModal.a1a61d14.js";import"./Modal.1dbb4fb9.js";import"./DangerButton.335aa55c.js";import"./SecondaryButton.2123890a.js";import"./DialogModal.d1e7aea7.js";import"./Button.477681d3.js";const A={name:"Integrations",components:{AppLayout:g,AutomationModal:f},props:{boards:{type:Array,default(){return[]}},services:{type:Array,default(){return[]}},integrations:{type:Array,default(){return[]}}},data(){return{searchOptions:{},showAddConnection:!1,authInstance:null,isAutomationModalOpen:!1,openedAutomation:{}}},methods:{toggleAppConnection(){this.showAddConnection=!this.showAddConnection},openAutomationModal(s,e){this.isAutomationModalOpen=!0,this.openedAutomation={board:s,stage:e}},onItemSaved(){this.$nextTick(()=>{this.isAutomationModalOpen=!1,this.$inertia.reload("/integrations",{only:["integrations"],preserveState:!0})})},handleCommand(s){switch(s.name.toLowerCase()){case"google":case"gmail":case"calendar":this.google(s.name.toLowerCase(),s);break}},async google(s,e){gapi.load("auth2",()=>{gapi.auth2.init({apiKey:process.env.MIX_GOOGLE_APP_KEY,clientId:process.env.MIX_GOOGLE_CLIENT_ID,accessType:"offline",scope:"profile https://www.googleapis.com/auth/gmail.readonly https://www.googleapis.com/auth/calendar.readonly https://www.googleapis.com/auth/spreadsheets.readonly",discoveryDocs:["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest","https://sheets.googleapis.com/discovery/rest?version=v4"]}).then(async r=>{const d=gapi.auth2.getAuthInstance(),a=d.currentUser.get();a.getAuthResponse().session_state||await d.signIn();const n=a.getBasicProfile();await d.grantOfflineAccess({authuser:a.getAuthResponse().session_state.extraQueryParams.authuser}).then(({code:p})=>{const m={code:p,service_id:e.id,service_name:e.name,user:n.getEmail()};axios({url:"/services/google",method:"post",data:{credentials:m}}).then(()=>{this.$inertia.reload("/integrations")})})})})}}},b={class:""},C={class:"flex flex-col mx-auto max-w-8xl sm:pr-6 lg:pr-8 md:flex-row"},I={class:"pt-12 w-100 md:w-full lg:w-8/12 md:mx-4"},M={class:"flex mr-2"},O=t("span",{class:"text-3xl font-bold"}," Integrations ",-1),k={class:"py-12"},L={class:"mx-auto max-w-8xl sm:px-6 lg:px-8"},E={class:"flex w-full apps-form"},S=["onClick"],B=["src"],G={class:"mt-2 font-bold"},N={class:"w-full integrations-form"},P={class:"left"},D={class:"head"},T={class:"tagline"},F={class:"text-right automations"},K=t("div",{class:"text-right options"}," options ",-1);function R(s,e,r,d,a,n){const p=u("automation-modal"),m=u("app-layout");return l(),x(m,{boards:r.boards},{default:v(()=>[t("div",b,[t("div",C,[t("div",I,[t("div",M,[O,t("button",{class:"px-5 ml-2 font-bold text-white bg-purple-400 rounded-lg btn",onClick:e[0]||(e[0]=(...o)=>n.openAutomationModal&&n.openAutomationModal(...o))}," Add Automation ")])])]),t("div",k,[t("div",L,[t("div",E,[(l(!0),c(h,null,_(r.services,o=>(l(),c("div",{class:"m-2 app-service__integration",onClick:V=>n.handleCommand(o),key:o.id},[t("img",{src:o.logo,alt:"",srcset:"",width:"50px",height:"50px"},null,8,B),t("p",G,i(o.name),1)],8,S))),128))]),t("div",N,[(l(!0),c(h,null,_(r.integrations,o=>(l(),c("div",{class:"grid grid-cols-3 px-5 py-3 my-2 font-bold text-gray-500 bg-white cursor-pointer app-service__item",key:o.id},[t("div",P,[t("div",D,i(o.name)+" "+i(o.hash),1),t("div",T,i(o.hash)+" "+i(o.created_at),1)]),t("div",F,i(o.automations.length),1),K]))),128))])])]),y(p,{onCancel:e[1]||(e[1]=o=>a.isAutomationModalOpen=!1),onSaved:n.onItemSaved,boards:r.boards,type:"event","record-data":a.openedAutomation,"is-open":a.isAutomationModalOpen},null,8,["onSaved","boards","record-data","is-open"])])]),_:1},8,["boards"])}const Z=w(A,[["render",R]]);export{Z as default};