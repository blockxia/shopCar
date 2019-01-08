<template>
  <div class='commodity'>
    <div class='container'>
      <span @click="$router.push('/login')">登录/注册</span>
      <swiper class='swiImgs' :options='swiperOption' v-if='commodity.length!=0'>
        <swiper-slide v-for='(item, index) in commodity'  :key='index' class='item'>
          <img class='swiImg' :src='item'/>
        </swiper-slide>
        <div class='swiper-scrollbar'></div>
        <!--滚动条-->
        <div class='swiper-button-next' slot="button-next"></div>
        <div class='swiper-button-prev' slot="button-prev"></div>
        <div class='swiper-pagination' v-for='(item,index) in detailimages' :key='index' slot='pagination'></div>
      </swiper>
      <!--1/4-->
      <!--<span class='swiText' v-if='commodity'>{{imgIndex}}/{{commodity.length}}</span>-->
    </div>
  </div>
</template>

<script>
import {swiper, swiperSlide} from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
export default {
  data () {
    return {
      commodity: [
        '/static/img/u1359_state0.jpg',
        '/static/img/u1359_state1.jpg'
      ],
      detailimages: [''],
      imgIndex: 1,
      swiperOption: {
        //  是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        notNextTick: true,
        //  循环
        loop: true,
        //  设定初始化时slide的索引
        initialSlide: 0,
        //  自动播放
        autoplay: {
          delay: 1500,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        //  滑动速度
        speed: 800,
        //  滑动方向
        direction: 'horizontal',
        //  小手掌抓取滑动
        grabCursor: true,
        //  左右点击
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          type: 'bullets'
        }
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>
<!--scoped需去掉样式才可以加上-->
<style lang='less' rel='stylesheet/less'>
  .commodity{
    background: #f5f5f5;
    .container{
      position: relative;
      .swiText {
        position: absolute;
        height: 0.5rem;
        width: 0.5rem;
        bottom: 0.2rem;
        right: 0.3rem;
        font-size: 0.33rem;
        color: #fff;
        z-index: 10;
      }
      .swiImgs {
        .swiper-button-next{
          background-image: url('/static/img/u1372.png');
          background-size: 100%;
        }
        .swiper-pagination{
          .swiper-pagination-bullet{
            opacity: 1;
            background: #fff;
          }
         .swiper-pagination-bullet-active{
           opacity: 1;
           background: red;
         }
        }
        width: 100%;
        .item{
          height: 10rem;
          .swiImg {
            width: 100%;
          }
        }
      }
    }
  }
</style>
