<template>
<div id="select">
  <Triangle/>
  <p style="padding-left: 20px">
  <ul style="margin-bottom: 20px">
    <li v-for="(item, index) in proData" :key="index">
      <input type="checkbox" :value="index" v-model="selectArr"/>{{item.name}}
    </li>
  </ul>
  <label>
    <input type="checkbox" @click="selectAll" :checked="checked"/>
    全选
  </label>
  <br/>
  <span v-for="item in 88888" :key="item" >....{{item }}<br/></span>
  </p>
  <!--回顶部组件-->
  <GoTop/>
</div>
</template>
<script>
import Triangle from '../components/triangle.vue'
import GoTop from '../components/GoTop.vue'
export default {
  data () {
    return {
      proData: [
        {
          'name': '张三'
        }, {
          'name': '李四'
        }, {
          'name': '王五'
        }, {
          'name': '赵六'
        }
      ],
      selectArr: [],
      checked: false
    }
  },
  watch: {
    selectArr (curVal) {
      if (curVal.length === this.proData.length) {
        this.checked = true
      } else {
        this.checked = false
      }
    }
  },
  methods: {
    selectAll (event) {
      console.log(!event.currentTarget.checked)
      if (!event.currentTarget.checked) {
        this.selectArr = []
      } else {
        //  实现全选 清空数组
        this.selectArr = []
        this.proData.forEach((item, index) => {
          //  把每一项放入实现全选
          this.selectArr.push(index)
        })
      }
    }
  },
  components: {
    Triangle,
    GoTop
  }
}
</script>
<style lang="less" scoped>
  @import "../assets/reset";
#select{

}
</style>
