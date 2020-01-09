<!--
 * @Author: renlei
 * @Date: 2020-01-09 15:44:25
 * @LastEditors  : renlei
 * @LastEditTime : 2020-01-09 16:53:03
 * @Description:
 -->
<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view />
    <router-link :to="{name:'devUploadUse'}">上传</router-link>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
