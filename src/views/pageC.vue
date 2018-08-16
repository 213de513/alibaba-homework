<template>
  <div class="pageC">
    <div class="content"  v-show="!loading">
      <h1>已经加载完pageC</h1>
      <ul class="itemBox">
        <li>1111111111111111111111</li>
        <li>2222222222222222222222</li>
        <li>3333333333333333333333</li>
        <li>4444444444444444444444</li>
        <li>5555555555555555555555</li>
        <li>6666666666666666666666</li>
        <li>7777777777777777777777</li>
        <li>8888888888888888888888</li>
      </ul>
      <ul class="pageBox">
        <li v-show="nowPage!=1" @click="prePage">上一页</li>
        <li>{{nowPage}}</li>
        <li @click="nextPage">下一页</li>
      </ul>
    </div>

    <img src="static/loading-spinning-bubbles.svg" alt="" v-show="loading">

  </div>
</template>

<script>
  export default {
    name: "page-a",
    data(){
      return {
        loading:true,
        nowPage:1
      }
    },
    mounted(){
      setTimeout(()=>{
        this.loading = false
      },1500)
    },
    methods:{
      nextPage(){
        this.loading = true;
        setTimeout(()=>{
          this.nowPage++;
          this.loading = false;
        },500);
      },
      prePage(){
        this.loading = true;
        setTimeout(()=>{
          this.nowPage--;
          this.loading = false;
        },500);
      }
    }
  }
</script>

<style scoped lang="less">
  .content{
    margin-top: 50px;
    h1{font-size: 30px;
      text-align: center;}
  }
  img{
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    width: 100px;
    height: 100px;
    margin-top: -50px;
    margin-left: -50px;
  }
  .pageBox{
    display: flex;
    justify-content: center;
    li{
      float: left;
      border: 1px solid #000;
      padding: 5px;
      border-radius: 4px;
      margin-left: 20px;
      cursor: pointer;
    }
  }
  .itemBox{
    margin: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    li{
      height: 30px;
      line-height: 30px;
    }
  }
</style>
