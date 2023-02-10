import p from"./TeamMemberManager.c1bfb01c.js";import{_}from"./AppLayout.7c972297.js";import d from"./DeleteTeamForm.bdd33f4d.js";import{J as f}from"./SectionBorder.d8447cfe.js";import u from"./UpdateTeamNameForm.bd40a4ae.js";import{_ as x}from"./_plugin-vue_export-helper.cdc0426e.js";import{j as b,b as o,r as t,o as s,d as a,a as m,c as g,F as h,e as v}from"./app.23df93da.js";import"./ActionMessage.5b2ac2e2.js";import"./ActionSection.0d20d230.js";import"./SectionTitle.321c57b8.js";import"./Button.83f1af01.js";import"./ConfirmationModal.ad50342b.js";import"./Modal.d0dbf6d1.js";import"./DangerButton.f7d0f6ac.js";import"./DialogModal.4185cfca.js";import"./Label.2111b92b.js";import"./InputError.33c82f95.js";import"./SecondaryButton.813947c8.js";const y={props:["team","availableRoles","permissions"],components:{AppLayout:_,DeleteTeamForm:d,JetSectionBorder:f,TeamMemberManager:p,UpdateTeamNameForm:u}},B=a("h2",{class:"text-xl font-semibold leading-tight text-gray-800"}," Team Settings ",-1),T={class:"py-10 mx-auto max-w-8xl sm:px-6 lg:px-8"};function k(F,N,e,j,w,C){const r=t("update-team-name-form"),n=t("team-member-manager"),i=t("jet-section-border"),l=t("delete-team-form"),c=t("app-layout");return s(),b(c,null,{header:o(()=>[B]),default:o(()=>[a("div",null,[a("div",T,[m(r,{team:e.team,permissions:e.permissions},null,8,["team","permissions"]),m(n,{class:"mt-10 sm:mt-0",team:e.team,"available-roles":e.availableRoles,"user-permissions":e.permissions},null,8,["team","available-roles","user-permissions"]),e.permissions.canDeleteTeam&&!e.team.personal_team?(s(),g(h,{key:0},[m(i),m(l,{class:"mt-10 sm:mt-0",team:e.team},null,8,["team"])],64)):v("",!0)])])]),_:1})}const Q=x(y,[["render",k]]);export{Q as default};
