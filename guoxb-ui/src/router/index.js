/*
 * @Author: renlei
 * @Date: 2020-01-09 15:44:25
 * @LastEditors  : renlei
 * @LastEditTime : 2020-01-09 16:49:39
 * @Description:路由模式
 */
import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import devUploadUse from "@/dev/dev-upload";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: "/dev-upload-use",
      name: "devUploadUse",
      component: devUploadUse
    }
  ]
});
