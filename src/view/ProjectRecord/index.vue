<template>
 <div id="project_record">
   <!--头部-->
   <van-nav-bar
     :title="title"
     :left-arrow="true"
     fixed
     @click-left="$router.back()">
   </van-nav-bar>
   <div class="base_info">
     <div class="base">
       <div class="inner title"><img src="/static/images/book.png" alt=""/>超工时工单提醒</div>
     </div>
     <div class="base">
       <div class="inner center_inner">
         <div class="center ac_two">45000</div>
       </div>
     </div>
     <div class="base">
       <div class="inner gray">当月工单总数</div>
     </div>
     <div class="base">
       <div class="inner left_right">
         <div class="inner_item center">物业报事</div>
         <div class="inner_item center">10</div>
       </div>
     </div>
     <div class="base">
       <div class="inner left_right">
         <div class="inner_item center">配合单</div>
         <div class="inner_item center">10</div>
       </div>
     </div>
     <div class="base">
       <div class="inner left_right">
         <div class="inner_item center">业绩上传</div>
         <div class="inner_item center">10</div>
       </div>
     </div>
     <div class="base">
       <div class="inner left_right">
         <div class="inner_item center">业绩修改</div>
         <div class="inner_item center">10</div>
       </div>
     </div>
   </div>
 </div>
</template>
<script>
import {NavBar} from 'vant'
export default {
  data () {
    return {
      title: '工单信息',
      record: {
        text: '工单',
        list: [{
        }]
      }
    }
  },
  created () {
  },
  methods: {},
  components: {
    [NavBar.name]: NavBar
  }
}
</script>
<style lang="less" scoped>
  @import '../../assets/reset';
#project_record{
  margin-top: 60px;
  .padding-box(0 32px / 2);
  .base_info{
    border-radius: 10px;
    margin: 10px 0 0 0;
    box-shadow:0px 2px 20px rgba(0, 54, 115, 0.2);
    border-bottom: 1px solid #f9f9f9;
    width: 100%;
    height: 260px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .base{
      box-sizing: border-box;
      width: 100%;
      height: 100%/7;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      .two{
        height: (100%/7)*2;
      }
      .inner{
        &.title{
          flex-direction: row;
          &>img{
            margin-right: 5px;
            width: 30px;
            height: 30px;
            border-radius: 100px;
          }
        }
        &.gray{
          color:#c5c5c5;
          font-size: 14px;
          flex-direction: row;
        }
        &.center_inner{
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          text-align: right;
          &>.ac_two{
            flex: 1;
            &.center{
              text-align: center;
            }
          }
        }
        font-size: 14px;
        flex: 1;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        &.left_right{
          font-size: 10px;
          flex: 1;
          text-align: left;
          display: flex;
          flex-direction: row;
          justify-content: center;
        }
        .inner_item{
          &.center{
            text-align: center;
          }
          flex: 1;
          width: 100%;
          height: 100%;
        }
        .left {
          width: 20%;
          &.big{
            width: 30%;
          }
        }
        .right {
          color: #006DEB;
          width: 80%;
        }
        .up{
        }
        .down{
          color: #c5c5c5;
        }
      }
    }
  }
}
</style>
