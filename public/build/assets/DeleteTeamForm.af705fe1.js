import{J as f}from"./ActionSection.d33c4220.js";import{J as p}from"./Button.477681d3.js";import{J as u}from"./ConfirmationModal.a1a61d14.js";import{J as h}from"./DangerButton.335aa55c.js";import{J as g}from"./SecondaryButton.2123890a.js";import{_ as T}from"./_plugin-vue_export-helper.cdc0426e.js";import{r as s,o as D,j as y,b as e,d as m,a,n as b,g as t}from"./app.e6e97f3c.js";import"./SectionTitle.e8cffaaf.js";import"./Modal.1dbb4fb9.js";const C={props:["team"],components:{JetActionSection:f,JetButton:p,JetConfirmationModal:u,JetDangerButton:h,JetSecondaryButton:g},data(){return{confirmingTeamDeletion:!1,deleting:!1,form:this.$inertia.form({},{bag:"deleteTeam"})}},methods:{confirmTeamDeletion(){this.confirmingTeamDeletion=!0},deleteTeam(){this.form.delete("/teams/"+this.team.id,{preserveScroll:!0})}}},J=t(" Delete Team "),j=t(" Permanently delete this team. "),w=m("div",{class:"max-w-xl text-sm text-gray-600"}," Once a team is deleted, all of its resources and data will be permanently deleted. Before deleting this team, please download any data or information regarding this team that you wish to retain. ",-1),x={class:"mt-5"},k=t(" Delete Team "),v=t(" Delete Team "),B=t(" Are you sure you want to delete this team? Once a team is deleted, all of its resources and data will be permanently deleted. "),N=t(" Nevermind "),S=t(" Delete Team ");function V(A,n,O,z,o,i){const r=s("jet-danger-button"),l=s("jet-secondary-button"),c=s("jet-confirmation-modal"),d=s("jet-action-section");return D(),y(d,null,{title:e(()=>[J]),description:e(()=>[j]),content:e(()=>[w,m("div",x,[a(r,{onClick:i.confirmTeamDeletion},{default:e(()=>[k]),_:1},8,["onClick"])]),a(c,{show:o.confirmingTeamDeletion,onClose:n[1]||(n[1]=_=>o.confirmingTeamDeletion=!1)},{title:e(()=>[v]),content:e(()=>[B]),footer:e(()=>[a(l,{onClick:n[0]||(n[0]=_=>o.confirmingTeamDeletion=!1)},{default:e(()=>[N]),_:1}),a(r,{class:b(["ml-2",{"opacity-25":o.form.processing}]),onClick:i.deleteTeam,disabled:o.form.processing},{default:e(()=>[S]),_:1},8,["onClick","class","disabled"])]),_:1},8,["show"])]),_:1})}const L=T(C,[["render",V]]);export{L as default};