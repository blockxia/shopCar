<template>
  <div class="title" @click="$router.back()">
    返回
    <span></span>
  </div>
</template>
<script>
export default {
  name: 'title',
  data () {
    return {}
  },
  methods: {}
}
</script>
<style lang="less" scoped>
  .title{
    width: 100px;
    height: 100px;
    /*三角制作*/
    span{
      display: inline-block;
      width: 0;
      height: 0;
      border-bottom: 50px solid transparent;
      border-top: 50px solid transparent;
      border-left: 50px solid transparent;
      border-right: 50px solid deeppink;
      transition: all 1s;
      /*width: 0;
      height: 0;
      border-width: 40px;
      border-style: solid;
      border-color: red transparent transparent transparent;*/
    }
    span:hover{
      transform: rotate(-90deg);
    }
  }
</style>
