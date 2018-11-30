<template>
  <div id="pro_area">
    <div class="list">
      <ul class="wrap">
        <li>iii</li>
        <li>yyy</li>
        <li>uuu</li>
      </ul>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  data () {
    return {
      active: 0,
      navsScroll: ''
    }
  },
  created () {
    this.$nextTick(() => {
      this.navsScroll = new BScroll('#pro_area', {
        probeType: 2,
        scrollX: true,
        click: true,
        eventPassthrough: 'vertical'
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
  @import '../../assets/reset';
  #pro_area{
    width: 100%;
    height: 220px;
    overflow: hidden;
    .list{
      .wrap{
        width: 100%;
        height: 100%;
        li{
          float: left;
          background: #ccc;
          width: 300%;
          height: 100%;
        }
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
