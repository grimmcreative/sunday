import{J as b}from"./Button.83f1af01.js";import{J as w,a as j}from"./Label.2111b92b.js";import{J as k,a as y}from"./InputError.33c82f95.js";import{J}from"./ActionMessage.5b2ac2e2.js";import{J as S}from"./SecondaryButton.813947c8.js";import{j as V,b as s,r,o as f,f as i,c as N,d as n,a as o,w as d,h,a5 as C,k as I,e as B,n as U}from"./app.23df93da.js";import{_ as x}from"./_plugin-vue_export-helper.cdc0426e.js";import"./SectionTitle.321c57b8.js";const z={components:{JetActionMessage:J,JetButton:b,JetFormSection:w,JetInput:k,JetInputError:y,JetLabel:j,JetSecondaryButton:S},props:["name","email"],data(){return{form:this.$inertia.form({_method:"PUT",name:this.name,email:this.email,photo:null},{bag:"updateProfileInformation",resetOnSuccess:!1}),photoPreview:null}},methods:{updateProfileInformation(){this.$refs.photo&&(this.form.photo=this.$refs.photo.files[0]),this.form.post("/user/profile-information",{preserveScroll:!0})},selectNewPhoto(){this.$refs.photo.click()},updatePhotoPreview(){const a=new FileReader;a.onload=t=>{this.photoPreview=t.target.result},a.readAsDataURL(this.$refs.photo.files[0])}}},A={key:0,class:"col-span-6 sm:col-span-4"},E={class:"mt-2"},F=["src"],D={class:"mt-2"},L={class:"col-span-6 sm:col-span-4"},M={class:"col-span-6 sm:col-span-4"};function R(a,t,T,O,e,m){const c=r("jet-label"),_=r("jet-secondary-button"),p=r("jet-input-error"),u=r("jet-input"),v=r("jet-action-message"),g=r("jet-button"),P=r("jet-form-section");return f(),V(P,{onSubmitted:m.updateProfileInformation},{title:s(()=>[i(" Profile Information ")]),description:s(()=>[i(" Update your account's profile information and email address. ")]),form:s(()=>[a.$page.jetstream.managesProfilePhotos?(f(),N("div",A,[n("input",{type:"file",class:"hidden",ref:"photo",onChange:t[0]||(t[0]=(...l)=>m.updatePhotoPreview&&m.updatePhotoPreview(...l))},null,544),o(c,{for:"photo",value:"Photo"}),d(n("div",E,[n("img",{src:a.$page.props.user.profile_photo_url,class:"w-20 h-20 rounded-full"},null,8,F)],512),[[h,!e.photoPreview]]),d(n("div",D,[n("span",{class:"block w-20 h-20 rounded-full",style:C("background-size: cover; background-repeat: no-repeat; background-position: center center; background-image: url('"+e.photoPreview+"');")},null,4)],512),[[h,e.photoPreview]]),o(_,{class:"mt-2",type:"button",onClick:I(m.selectNewPhoto,["prevent"])},{default:s(()=>[i(" Select A New Photo ")]),_:1},8,["onClick"]),o(p,{message:e.form.errors.photo,class:"mt-2"},null,8,["message"])])):B("",!0),n("div",L,[o(c,{for:"name",value:"Name"}),o(u,{id:"name",type:"text",class:"block w-full mt-1",modelValue:e.form.name,"onUpdate:modelValue":t[1]||(t[1]=l=>e.form.name=l),autocomplete:"name"},null,8,["modelValue"]),o(p,{message:e.form.errors.name,class:"mt-2"},null,8,["message"])]),n("div",M,[o(c,{for:"email",value:"Email"}),o(u,{id:"email",type:"email",class:"block w-full mt-1",modelValue:e.form.email,"onUpdate:modelValue":t[2]||(t[2]=l=>e.form.email=l)},null,8,["modelValue"]),o(p,{message:e.form.errors.email,class:"mt-2"},null,8,["message"])])]),actions:s(()=>[o(v,{on:e.form.recentlySuccessful,class:"mr-3"},{default:s(()=>[i(" Saved. ")]),_:1},8,["on"]),o(g,{class:U({"opacity-25":e.form.processing}),disabled:e.form.processing},{default:s(()=>[i(" Save ")]),_:1},8,["class","disabled"])]),_:1},8,["onSubmitted"])}const Z=x(z,[["render",R]]);export{Z as default};
