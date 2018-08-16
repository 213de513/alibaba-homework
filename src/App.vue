<template>
  <div id="app">
    <ul id="menu">
      <li @click="toA">pageA</li>
      <li @click="toB">pageB</li>
      <li @click="toC">pageC</li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
  import './assets/reset.css'
export default {
  name: 'App',
  methods:{
    toA(){
      this.$router.push('/')
    },
    toB(){
      this.$router.push('/pageB')
    },
    toC(){
      this.$router.push('/pageC')
    }
  }
}
</script>

<style lang="less">
  #menu{
    display: flex;
    li{
      float: left;
      flex: 1;
      text-align: center;
      height: 50px;
      line-height: 50px;
      cursor: pointer;
      background-color: #f60;
      color: white;
      list-style: none;
      border: 1px solid #000;
    }
  }
</style>
