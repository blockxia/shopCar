<template>
<div id="shopCar" v-cloak>
  <Triangle/>
  <template v-if="list.length">
    <table>
      <thead>
      <tr>
        <th></th>
        <th>商品名称</th>
        <th>商品单价</th>
        <th>购买数量</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for='(item,index) in list' :key="index">
        <td>
          {{index+1}}
        </td>
        <td>
          {{item.name}}
        </td>
        <td>
          {{item.price}}
        </td>
        <td>
          <button @click="decrement(index)" :disabled="item.count === 1">-</button>
          {{item.count}}
          <button @click="increment(index)">+</button>
        </td>
        <td>
          <button @click="handleRemove(index)">移除</button>
        </td>
      </tr>
      </tbody>
    </table>
    <div>总价：¥{{totalPrice}}</div>
  </template>
  <div v-else>
    购物车为空
  </div>
</div>
</template>
<script>
import Triangle from '../components/triangle.vue'
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
      list: [{
        id: 1,
        name: '冰箱',
        price: 6108,
        count: 1
      },
      {
        id: 2,
        name: '彩电',
        price: 4888,
        count: 1
      },
      {
        id: 3,
        name: '洗碗机',
        price: 7898,
        count: 1
      }
      ]
    }
  },
  methods: {
    decrement (index) {
      if (this.list[index].count === 1) {
        return false
      } else {
        this.list[index].count--
      }
    },
    increment (index) {
      this.list[index].count++
    },
    handleRemove (index) {
      this.list.splice(index, 1)
    }
  },
  computed: {
    totalPrice () {
      //  对total进行处理后再返回新的total
      var total = 0
      for (var i = 0, len = this.list.length; i < len; i++) {
        total += this.list[i].price * this.list[i].count
      }
      //  每隔三位加一个逗号
      return total
      //  return total.toString().replace(/\B(?=(\d{3})+$)/g, ',')
    }
  },
  components: {
    Triangle
  }
}
</script>
<style lang="less" scoped>
  @import "../assets/reset";
  #shopCar{
    &[v-cloak]{
      display: none;
    }
    table{
      border: 1px solid #e9e9e9;
      border-collapse: collapse;
      border-spacing: 0;
      empty-cells: show;
    }
    th,td{
      padding: 8px 16px;
      border: 1px solid #e9e9e9;
      text-align: left;
    }
    th{
      background: #f7f7f7;
      color: #5c6b77;
      font-weight: 600;
      white-space: nowrap;
    }
  }
</style>
