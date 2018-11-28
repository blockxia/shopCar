<template>
  <div id="pro_area">
    <ul class="wrap">
      <li>iii</li>
      <li>yyy</li>
      <li>uuu</li>
    </ul>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  data () {
    return {
      active: 0
    }
  },
  created () {
    this.$nextTick(() => {
      let bs = new BScroll('.wrap', {
        scrollX: true,
        click: true,
        probeType: 2
      })
    })
  },
  methods: {
    goAccountBook () {
      this.$router.push({path: '/accountBook'})
    },
    goMore () {
      this.$router.push({path: '/projectRecord'})
    }
  },
  components: {
  }
}
</script>

<style lang='less'>
  @import '../../assets/common';
  #pro_area{
    width: 100%;
    height: 220px;
    .wrap{
      margin-top: 20px;
      width: 300%;
      height: 100%;
      li{
        width: 100%;
      }
    }
    /*.van-tabs__line{
      background-color: #006DEB !important;
    }
    .van-tabs--line .van-tabs__wrap{
      background-color: rgba(204,204,204,0.2);
      z-index: 0;
      .van-tab{
        color: #999;
        //  background-color: #f7f7f7;
      }
      .van-tab--active{
        color: #006DEB !important;
      }
    }*/
  }
</style>
