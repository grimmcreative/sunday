import{J as v}from"./DialogModal.4185cfca.js";import{J as y}from"./Button.83f1af01.js";import{o as p,j as w,b as l,d as o,a as d,f as m,t as c,c as u,e as _,w as V,V as I,k as C,r as g,Z as S,_ as k}from"./app.23df93da.js";import{_ as B}from"./_plugin-vue_export-helper.cdc0426e.js";const x={components:{DialogModal:v,PrimaryButton:y},props:{isOpen:{type:Boolean},recordData:{type:Object},type:{type:String},boards:{type:Array}},data(){return{isLoading:!1,formData:{service:null,recipe:null},newCheck:{},services:[],recipes:[],integrations:[],emailConditions:[{id:"from:",name:"From"},{name:"To",id:"to:"},{name:"subject:",id:"Subject"},{name:"Includes",id:"has"},{id:"",name:"Custom"}]}},created(){this.getServices(),this.getIntegrations(),this.getRecipes()},watch:{recordData(){this.formData=this.recordData}},computed:{visibleFields(){return this.formData.board&&this.formData.board.fields?this.formData.board.fields.map(e=>(e.order=this.fieldOrder.findIndex(t=>e.name==t),e)).filter(e=>!e.hide).sort((e,t)=>e.order-t.order):[]},fieldOrder(){return{event:["owner","status","priority","date","time","due_date","end_time"]}[this.type]||[]},typeFields(){return{event:[{name:"date",type:"date",title:"Date"},{name:"time",type:"time",title:"Time"},{name:"due_date",type:"date",title:"Due Date"},{name:"end_time",type:"time",title:"End Time"}]}[this.type]||[]},automationRecipes(){return this.formData.service?this.recipes.filter(e=>e.automation_service_id==this.formData.service.id):[]},serviceIntegrations(){return this.formData.service?this.integrations.filter(e=>e.automation_service_id==this.formData.service.id):[]}},methods:{prepareForm(){const e={...this.formData};e.automation_recipe_id=this.formData.recipe.id,e.name=this.formData.recipe.name,e.description=this.formData.recipe.name,e.sentence=this.formData.recipe.name,e.config={},this.formData.integration&&(e.integration_id=this.formData.integration.id),this.formData.board&&(e.board_id=this.formData.board.id),this.formData.stage&&(e.config.stage_id=this.formData.stage.id),this.formData.Condition&&(e.config.condition=this.formData.Condition.id);const t=this.getInputs();return t&&t.map(i=>{e.config[i]||(e.config[i]=e[i])}),e.config=JSON.stringify(e.config),delete e.board,delete e.stage,e},save(){const e=this.formData.id?"PUT":"POST",t=this.formData.id?`/${this.formData.id}`:"",i=this.prepareForm();if(!i.board_id){this.$notify({type:"info",message:"Board and title are required"});return}axios({url:`/api/automations${t}`,method:e,data:i}).then(()=>{this.$emit("saved")})},getBoardData(){this.isLoading=!0,Promise.all([axios({url:"/api/stages/",params:{"filter[board_id]":this.formData.board.id}}),axios({url:"/api/fields",params:{"filter[board_id]":this.formData.board.id}})]).then(([e,t])=>{let i=t.data.data;const h=e.data.data;this.formData.board.stages=h,this.formData.stage=h[0];const s=i.map(r=>r.name);this.typeFields.forEach(r=>{s.includes(r.name)||i.push(r)}),this.formData.board.fields=i,this.isLoading=!1})},getServices(){axios({url:"/api/automation-services"}).then(({data:e})=>{this.services=e})},getIntegrations(){axios({url:"/api/integrations"}).then(({data:e})=>{this.integrations=e.data})},getRecipes(){axios({url:"/api/automation-recipes"}).then(({data:e})=>{this.recipes=e})},getCalendarList(){axios({url:"/api/calendars"}).then(({data:e})=>{this.calendarList=e})},getInputs(){if(this.formData.recipe){const e=JSON.parse(this.formData.recipe.mapper);return e&&e.input}},hasInput(e){const t=this.getInputs();if(t)return t.includes(e)}}},n=e=>(S("data-v-10a3086b"),e=e(),k(),e),L=n(()=>o("span",{class:"text-lg"}," Add Automation ",-1)),O={class:"form-group"},U=n(()=>o("label",{for:"title"}," Service ",-1)),T={slot:"singleLabel","slot-scope":"props"},A=["src"],F={slot:"option","slot-scope":"props"},J={class:"d-flex"},M=["src"],N={key:0,class:"form-group"},R=n(()=>o("label",{for:"title"}," Connection ",-1)),j={key:1,class:"form-group"},P=n(()=>o("label",{for:"title"}," Recipe ",-1)),E={key:2,class:"form-group"},q=n(()=>o("label",{for:"title"}," Board ",-1)),Z={slot:"singleLabel","slot-scope":"props"},z={class:"option__title"},G=n(()=>o("i",{class:"mr-2 fa fa-briefcase"},null,-1)),H={slot:"option","slot-scope":"props"},K={class:"option__desc"},Q={class:"option__title"},W=n(()=>o("i",{class:"mr-2 fa fa-briefcase"},null,-1)),X={key:3,class:"form-group"},Y=n(()=>o("label",{for:"title"}," Stage ",-1)),$={slot:"singleLabel","slot-scope":"props"},ee={class:"option__title"},te=n(()=>o("i",{class:"mr-2 fa fa-briefcase"},null,-1)),oe={slot:"option","slot-scope":"props"},se={class:"option__desc"},ae={class:"option__title"},ie=n(()=>o("i",{class:"mr-2 fa fa-briefcase"},null,-1)),re={key:4,class:"form-group"},ne=n(()=>o("label",{for:"title"}," Condition ",-1)),le={key:5,class:"form-group"},de=n(()=>o("label",{for:"title"}," value ",-1));function me(e,t,i,h,s,r){const f=g("multiselect"),D=g("primary-button"),b=g("dialog-modal");return p(),w(b,{show:i.isOpen,onClose:t[10]||(t[10]=a=>e.$emit("closed"))},{title:l(()=>[L]),content:l(()=>[o("form",{action:"",onSubmit:t[7]||(t[7]=C((...a)=>r.save&&r.save(...a),["prevent"]))},[o("div",O,[U,d(f,{modelValue:s.formData.service,"onUpdate:modelValue":t[0]||(t[0]=a=>s.formData.service=a),ref:"input",label:"name","show-labels":!1,options:s.services,class:"w-full"},{default:l(()=>[o("template",T,[o("div",null,[o("img",{src:e.props.option.logo,class:"mr-2 automation-logo"},null,8,A),m(" "+c(e.props.option.name),1)])]),o("template",F,[o("div",J,[o("img",{src:e.props.option.logo,class:"mr-2 automation-logo"},null,8,M),m(" "+c(e.props.option.name),1)])])]),_:1},8,["modelValue","options"])]),r.serviceIntegrations?(p(),u("div",N,[R,d(f,{modelValue:s.formData.integration,"onUpdate:modelValue":t[1]||(t[1]=a=>s.formData.integration=a),ref:"input","show-labels":!1,label:"hash",options:r.serviceIntegrations,class:"w-full"},null,8,["modelValue","options"])])):_("",!0),s.formData.service?(p(),u("div",j,[P,d(f,{modelValue:s.formData.recipe,"onUpdate:modelValue":t[2]||(t[2]=a=>s.formData.recipe=a),ref:"input","show-labels":!1,label:"name",options:r.automationRecipes,class:"w-full"},null,8,["modelValue","options"])])):_("",!0),i.boards?(p(),u("div",E,[q,d(f,{modelValue:s.formData.board,"onUpdate:modelValue":t[3]||(t[3]=a=>s.formData.board=a),ref:"input","show-labels":!1,"allow-empty":!1,placeholder:"Select board",label:"name",options:i.boards,class:"w-full",onInput:r.getBoardData},{default:l(()=>[o("template",Z,[o("span",z,[G,m(" "+c(e.props.option.name),1)])]),o("template",H,[o("div",K,[o("span",Q,[W,m(" "+c(e.props.option.name),1)])])])]),_:1},8,["modelValue","options","onInput"])])):_("",!0),s.formData.board&&s.formData.board.stages?(p(),u("div",X,[Y,d(f,{modelValue:s.formData.stage,"onUpdate:modelValue":t[4]||(t[4]=a=>s.formData.stage=a),ref:"input","show-labels":!1,"allow-empty":!1,placeholder:"Select board",label:"name",options:s.formData.board.stages,class:"w-full"},{default:l(()=>[o("template",$,[o("span",ee,[te,m(" "+c(e.props.option.name),1)])]),o("template",oe,[o("div",se,[o("span",ae,[ie,m(" "+c(e.props.option.name),1)])])])]),_:1},8,["modelValue","options"])])):_("",!0),r.hasInput("condition")?(p(),u("div",re,[ne,d(f,{modelValue:s.formData.Condition,"onUpdate:modelValue":t[5]||(t[5]=a=>s.formData.Condition=a),ref:"input","show-labels":!1,label:"name",options:s.emailConditions,class:"w-full"},null,8,["modelValue","options"])])):_("",!0),r.hasInput("value")?(p(),u("div",le,[de,V(o("input",{"onUpdate:modelValue":t[6]||(t[6]=a=>s.formData.value=a),type:"text",class:"w-full form-control"},null,512),[[I,s.formData.value]])])):_("",!0)],32)]),footer:l(()=>[d(D,{onClick:t[8]||(t[8]=a=>e.$emit("cancel"))},{default:l(()=>[m(" Cancel ")]),_:1}),d(D,{onClick:t[9]||(t[9]=a=>r.save())},{default:l(()=>[m(" Save ")]),_:1})]),_:1},8,["show"])}const _e=B(x,[["render",me],["__scopeId","data-v-10a3086b"]]);export{_e as A};
