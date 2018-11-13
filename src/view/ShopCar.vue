<template>
<div id="shopCar">
  <ul class="title">
    <li>商品
      <ul class="row">
        <li v-for="(item , index) in list" :key="index">{{item.fruits}}</li>
      </ul>
    </li>
    <li>数量(个)
      <ul>
        <li v-for="(item , index) in list" :key="index" @click="shop(index)">
          <span @click="decrement">-</span>
          <span>{{count}}</span>
          <span @click="increment">+</span>
        </li>
      </ul>
    </li>
    <li>单价(元)
      <ul>
        <li>{{single}}</li>
      </ul>
    </li>
    <li>总计
      <ul>
        <li>{{totalCount}}</li>
      </ul>
    </li>
  </ul>
</div>
</template>
<script>
export default {
  name: 'shopCar',
  data  () {
    return {
      // 数量
      count: 1,
      // 单价
      single: 5,
      index: '',
      //  数据
      list: [{id: 1, fruits: '苹果'}
      ]
    }
  },
  computed: {
    totalCount () {
      return this.count * this.single
    }
  },
  methods: {
    shop (index) {
      this.index = index
    },
    //  -
    decrement () {
      if (this.count === 1) {
        alert('不能再少了哦')
        this.count = 1
      } else {
        this.count--
      }
    },
    //  +
    increment () {
      this.count++
    }
  }
}
</script>
<style lang="less" scoped>
  @import "../assets/reset";
  #shopCar{
    .title{
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 30px;
      &>li{
        width: 100%;
        height: 30px;
        flex: 1;
        border: solid 1px #c5c5c5;
        line-height: 30px;
        &>ul{
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          >li{
            margin-top: 10px;
            width: 100%;
            height: 30px;
            border: solid 1px #c5c5c5;
            flex: 1;
            line-height: 30px;
            display: flex;
            flex-direction: row;
            justify-content: center;
            >span{
              flex: 1;
              display: inline-block;
            }
          }
        }
      }
    }
  }
</style>
