(window.webpackJsonp=window.webpackJsonp||[]).push([["iGGr"],{iGGr:function(e,t,r){"use strict";r.r(t);var o=r("wk8/"),s={data:function(){return{form:{re_password:"",new_password:""}}},methods:{toUpWord:function(){var e=this;if(""!==this.form.re_password)if(""!==this.form.new_password){var t=new RegExp(/\s+/g);t.test(this.form.re_password)||t.test(this.form.new_password)?this.$message.error("密码仅支持输入字母，数字，符号"):Object(o.k)(this.form).then(function(){e.$confirm("登录已失效, 请重新登录！","密码修改成功",{confirmButtonText:"确定",showCancelButton:!1,type:"success"}).then(function(){e.logout()}).catch(function(){})}).catch(function(t){e.$message.error(t.msg)})}else this.$message.error("请输入确认新密码");else this.$message.error("请输入新密码")}}},a=r("KHd+"),n=Object(a.a)(s,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-form",{attrs:{model:e.form}},[r("el-form-item",{attrs:{"label-width":"100px",label:"新密码"}},[r("el-input",{attrs:{type:"password",placeholder:"请输入",autocomplete:"off"},model:{value:e.form.re_password,callback:function(t){e.$set(e.form,"re_password",t)},expression:"form.re_password"}})],1),e._v(" "),r("el-form-item",{attrs:{"label-width":"100px",label:"确认新密码"}},[r("el-input",{attrs:{type:"password",placeholder:"请输入",autocomplete:"off"},model:{value:e.form.new_password,callback:function(t){e.$set(e.form,"new_password",t)},expression:"form.new_password"}})],1),e._v(" "),r("el-form-item",{attrs:{"label-width":"100px"}},[r("el-button",{attrs:{type:"primary"},on:{click:e.toUpWord}},[e._v("确 定")])],1)],1)],1)},[],!1,null,null,null);n.options.__file="psw.vue";t.default=n.exports}}]);