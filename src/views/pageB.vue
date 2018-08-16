<template>
  <div class="pageB">
    <h1>pageB</h1>
    <ul class="itemBox">
      <li v-for="item in itemList">
        <input type="checkbox" :value="item.value" v-model="checkedArr" @change="selectItem(item)">{{item.name}}
      </li>
      <li v-show="!loading">
        <input type="checkbox" v-model="isChecked" @click="selectAll">全 选
      </li>
    </ul>
    <button @click="display" id="display" v-show="!loading">展示</button>
    <ul class="displayBox">
      <li v-for="item in displayArr">
        <input type="checkbox" v-model="checkedArr" :value="item.id.substr(0,3)" @change="changeItem(item.id.substr(0,3))">{{item.id}}
      </li>
    </ul>
    <img src="static/loading-spinning-bubbles.svg" alt="" v-show="loading">
  </div>
</template>

<script>
    export default {
        name: "page-b",
      data(){
          return {
            itemList:[],
            checkedArr:[],
            isChecked:false,
            loading:true,
            displayArr:[]
          }
      },
      mounted(){
        this.getGoodsList();
      },
      methods:{
        getGoodsList(){
          setTimeout(()=>{
            this.loading = false;
            this.itemList = [
              {value:'AAA',is_chosen:false,name:'商品A'},
              {value:'BBB',is_chosen:false,name:'商品B'},
              {value:'CCC',is_chosen:false,name:'商品C'},
              {value:'DDD',is_chosen:false,name:'商品D'},
              {value:'EEE',is_chosen:false,name:'商品E'},
            ]
          },1500)
        },

        selectAll(){
           if(!this.isChecked){
             this.itemList.forEach(item=>{
               this.checkedArr.push(item.value);
               item.is_chosen = true;
             })
           }else{
             this.itemList.forEach(item=>{

               item.is_chosen = false;
             });
             this.checkedArr = [];
           }
          },
        selectItem(item){
          this.itemList.length===this.checkedArr.length?  this.isChecked = true: this.isChecked = false;
          item.is_chosen = !item.is_chosen;
        },
        display(){
          this.displayArr = [];
           this.itemList.forEach((item)=>{
             if(item.is_chosen){
               //搞个时间戳
               let time = new Date().getTime();
               //搞个随机数
               let rand = Math.floor(Math.random()*10000)+89999;
               this.displayArr.push({id:item.value+time+rand});
             }
           })
        },
        changeItem(val){
          this.itemList.forEach(item=>{
            if(item.value===val){
              item.is_chosen = !item.is_chosen;
            }
          })
        }
      }
    }
</script>

<style scoped lang="less">
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
  h1{
    font-size: 30px;
    text-align: center;
  }
  .itemBox,.displayBox{
    margin: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    li{
      height: 30px;
      line-height: 30px;
    }
  }
  #display{
    display: block;
    width: 100px;
    height: 50px;
    border: 0;
    background-color: #f60;
    color: white;
    cursor: pointer;
    border-radius: 10px;
    margin: 0 auto;
  }
</style>
