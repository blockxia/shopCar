<template>
<div id="index">
  <ul>
    <li @click="goDetail(item.id)" v-for="(item, index) in list" :key="index">{{item.name}}</li>
  </ul>
</div>
</template>
<script>
export default {
  name: 'index',
  data  () {
    return {
      list: [{id: 0, name: '全选/不选'},
        {id: 1, name: '购物车'},
        {id: 2, name: '时钟'},
        {id: 3, name: '计算器'}
      ]
    }
  },
  methods: {
    goDetail (id) {
      if (id === 0) {
        this.$router.push('/select')
      } else if (id === 1) {
        this.$router.push('/shopCar')
      } else if (id === 2) {
        this.$router.push('/clock')
      } else if (id === 3) {
        this.$router.push('/culc')
      }
    }
  }
}
</script>
<style lang="less" scoped>
  @import "../assets/reset";
#index{
  ul{
    display: flex;
    justify-content:center;
    align-items: center;
    li{
      flex: 1;
      border: solid 1px #000;
    }
    li:hover{
      background: pink;
      cursor: pointer;
    }
  }
}
</style>
