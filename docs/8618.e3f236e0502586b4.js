"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8618],{8618:(y,v,l)=>{l.r(v),l.d(v,{RegisterPageModule:()=>w});var h=l(177),n=l(4341),o=l(4742),f=l(7791),e=l(3953),F=l(5602),k=l(3656);function P(r,s){1&r&&(e.j41(0,"div",20),e.EFF(1," Name is required "),e.k0s())}function b(r,s){1&r&&(e.j41(0,"div",20),e.EFF(1," Phone number is required "),e.k0s())}function E(r,s){1&r&&(e.j41(0,"div",20),e.EFF(1," Years of experience is required "),e.k0s())}function R(r,s){1&r&&(e.j41(0,"div",20),e.EFF(1," Experience level is required "),e.k0s())}function j(r,s){1&r&&(e.j41(0,"div",20),e.EFF(1," Address is required "),e.k0s())}function M(r,s){1&r&&(e.j41(0,"div",20),e.EFF(1," Password is required "),e.k0s())}const C=[{path:"",component:(()=>{var r;class s{constructor(t,i,a){this.userService=t,this.navCtrl=i,this.alertController=a,this.form=new n.gE({displayName:new n.MJ("",n.k0.required),phone:new n.MJ("",n.k0.required),password:new n.MJ("",n.k0.required),address:new n.MJ("",n.k0.required),experienceYears:new n.MJ("",n.k0.required),level:new n.MJ("",n.k0.required)})}ngOnInit(){}register(){this.form.valid?(console.log("Years of Experience:",this.form.value.experienceYears),this.userService.register(this.form.value).subscribe(t=>{console.log(t),t.access_token&&(localStorage.setItem("access_token",t.access_token),localStorage.setItem("refresh_token",t.refresh_token),this.navCtrl.navigateForward("/login"))},t=>{console.log("Registration failed:",t),alert("Registration failed. Please try again.")})):alert("Please fill in all required fields correctly.")}}return(r=s).\u0275fac=function(t){return new(t||r)(e.rXU(F.g),e.rXU(k.q9),e.rXU(o.hG))},r.\u0275cmp=e.VBU({type:r,selectors:[["app-register"]],decls:53,vars:7,consts:[[1,"ion-padding"],["src","../../assets/img/imag2.jpeg"],[2,"color","rgb(22, 21, 21)","font-weight","bolder","font-family","cursive"],[3,"ngSubmit","formGroup"],["lines","none"],["position","floating"],["type","text","formControlName","displayName"],["class","error-message",4,"ngIf"],["position","stacked"],["type","tel","formControlName","phone","placeholder","+20 123 456-7890"],["type","number","formControlName","experienceYears"],["formControlName","level"],["value","junior"],["value","mid"],["value","senior"],["type","text","formControlName","address"],["type","password","formControlName","password"],["name","eye-outline","slot","end"],["expand","block","type","submit"],["routerLink","/login"],[1,"error-message"]],template:function(t,i){if(1&t&&(e.j41(0,"ion-content",0)(1,"ion-row")(2,"ion-col"),e.nrm(3,"ion-img",1),e.k0s()(),e.j41(4,"ion-row")(5,"ion-col")(6,"h1",2),e.EFF(7,"Register"),e.k0s()()(),e.j41(8,"form",3),e.bIt("ngSubmit",function(){return i.register()}),e.j41(9,"ion-item",4)(10,"ion-label",5),e.EFF(11,"Name"),e.k0s(),e.nrm(12,"ion-input",6),e.k0s(),e.DNE(13,P,2,0,"div",7),e.j41(14,"ion-item",4)(15,"ion-label",8),e.EFF(16,"Phone Number"),e.k0s(),e.nrm(17,"ion-input",9),e.k0s(),e.DNE(18,b,2,0,"div",7),e.j41(19,"ion-item",4)(20,"ion-label",5),e.EFF(21,"Years of Experience"),e.k0s(),e.nrm(22,"ion-input",10),e.k0s(),e.DNE(23,E,2,0,"div",7),e.j41(24,"ion-item",4)(25,"ion-label",5),e.EFF(26,"Choose Experience Level"),e.k0s(),e.j41(27,"ion-select",11)(28,"ion-select-option",12),e.EFF(29,"Junior"),e.k0s(),e.j41(30,"ion-select-option",13),e.EFF(31,"Mid"),e.k0s(),e.j41(32,"ion-select-option",14),e.EFF(33,"Senior"),e.k0s()()(),e.DNE(34,R,2,0,"div",7),e.j41(35,"ion-item",4)(36,"ion-label",5),e.EFF(37,"Address"),e.k0s(),e.nrm(38,"ion-input",15),e.k0s(),e.DNE(39,j,2,0,"div",7),e.j41(40,"ion-item",4)(41,"ion-label",5),e.EFF(42,"Password"),e.k0s(),e.j41(43,"ion-input",16),e.nrm(44,"ion-icon",17),e.k0s()(),e.DNE(45,M,2,0,"div",7),e.j41(46,"ion-button",18),e.EFF(47,"Sign up"),e.k0s()(),e.j41(48,"ion-text")(49,"p"),e.EFF(50,"Already have an account? "),e.j41(51,"a",19),e.EFF(52,"Sign in"),e.k0s()()()()),2&t){let a,u,d,m,c,p;e.R7$(8),e.Y8G("formGroup",i.form),e.R7$(5),e.Y8G("ngIf",(null==(a=i.form.get("displayName"))?null:a.hasError("required"))&&(null==(a=i.form.get("displayName"))?null:a.touched)),e.R7$(5),e.Y8G("ngIf",(null==(u=i.form.get("phone"))?null:u.hasError("required"))&&(null==(u=i.form.get("phone"))?null:u.touched)),e.R7$(5),e.Y8G("ngIf",(null==(d=i.form.get("experienceYears"))?null:d.hasError("required"))&&(null==(d=i.form.get("experienceYears"))?null:d.touched)),e.R7$(11),e.Y8G("ngIf",(null==(m=i.form.get("level"))?null:m.hasError("required"))&&(null==(m=i.form.get("level"))?null:m.touched)),e.R7$(5),e.Y8G("ngIf",(null==(c=i.form.get("address"))?null:c.hasError("required"))&&(null==(c=i.form.get("address"))?null:c.touched)),e.R7$(6),e.Y8G("ngIf",(null==(p=i.form.get("password"))?null:p.hasError("required"))&&(null==(p=i.form.get("password"))?null:p.touched))}},dependencies:[h.bT,n.qT,n.BC,n.cb,o.Jm,o.hU,o.W9,o.iq,o.KW,o.$w,o.uz,o.he,o.ln,o.Nm,o.Ip,o.IO,o.su,o.Je,o.Gw,o.oY,n.j4,n.JD,f.Wk],styles:['@charset "UTF-8";ion-content[_ngcontent-%COMP%]{--background: #f8f9fa}ion-toolbar[_ngcontent-%COMP%]{--background: #6200ea;--color: white}ion-img[_ngcontent-%COMP%]{width:100%}ion-title[_ngcontent-%COMP%]{font-weight:700;text-align:center}ion-item[_ngcontent-%COMP%]{--background: rgba(98, 95, 95, 0);border-radius:8px;border:2px solid rgba(128,128,128,.41);margin-bottom:16px;color:#6a696b}ion-button[_ngcontent-%COMP%]{--background: #6200ea;--border-radius: 8px;--box-shadow: 0px 4px 6px rgba(0, 0, 0, .1);font-weight:700;color:#f5f5f5}ion-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center;margin-top:16px;font-size:14px;color:#7d7a7a}a[_ngcontent-%COMP%]{color:#1b013d;text-decoration:none}.error-message[_ngcontent-%COMP%]{color:red;font-size:14px;margin:5px;padding:2px;background-color:#f8d7da;border:1px solid #f5c6cb;border-radius:3px}']}),s})()}];let x=(()=>{var r;class s{}return(r=s).\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.$C({type:r}),r.\u0275inj=e.G2t({imports:[f.iI.forChild(C),f.iI]}),s})(),w=(()=>{var r;class s{}return(r=s).\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.$C({type:r}),r.\u0275inj=e.G2t({imports:[h.MD,n.YN,o.bv,n.X1,x]}),s})()}}]);