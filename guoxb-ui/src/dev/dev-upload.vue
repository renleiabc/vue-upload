<!--
 * @Author: renlei
 * @Date: 2020-01-09 16:29:43
 * @LastEditors  : renlei
 * @LastEditTime : 2020-01-09 17:19:50
 * @Description:
 -->
<template>
  <div>
    <h2>开发测试</h2>
    <hupload :options="options" v-on:receiveUploadMsg="receiveUploadMsg">
    </hupload>
  </div>
</template>

<script>
import Vue from "vue";
import hupload from "../../dist/vueAjaxUpload.js";
Vue.use(hupload);
export default {
  data() {
    return {
      options: {
        showProgress: true,
        imagePreview: true,
        url: "str",
        fileUploadName: "ajax-upload",
        limitSize: 1
      }
    };
  },
  components: {},
  methods: {
    receiveUploadMsg(msg) {
      console.log(msg);
    }
  }
};
</script>

<style></style>
