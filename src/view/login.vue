<template>
<div class="login">
  <input v-model="phone"
         maxlength="11"
         v-validate="{ required: true,regex: /^1[3456789]\d{9}$/}"
         name="phone"
         type="text" placeholder="请输入11位手机号"
         @input="phoneInputing()">
  <br/>
  <span v-show="isShowPhone" :class="{red_active: isShowPhone}">{{userNameErrorMsg}}</span>
  <br/>
  <input v-model="password"
         maxlength="8"
         v-validate="{ required: true}"
         name="password"
         type="password" placeholder="请输入密码"
         @input="passwordInputing()"> <br/>
  <span v-show="isShowPassword">{{codeErrorMsg}}</span> <br/>
  <button @click="goLogin">登录</button> <br/>
</div>
</template>
<script>
export default {
  data  () {
    return {
      phone: '',
      password: '',
      isShowPhone: false,
      isShowPassword: false,
      userNameErrorMsg: '',
      codeErrorMsg: ''
    }
  },
  watch: {
    phone (value, oldValue) {
      if (value === '' || value.length > 0) {
        this.isShowPhone = false
        this.userNameErrorMsg = ''
      }
    },
    password (value, oldValue) {
      if (value === '' || value.length > 0) {
        this.isShowPassword = false
        this.codeErrorMsg = ''
      }
    }
  },
  methods: {
    phoneInputing () {
      if (!this.phone) {
        this.isShowPhone = false
        this.userNameErrorMsg = ''
      }
    },
    passwordInputing () {
    },
    goLogin () {
      this.$validator.validateAll().then(result => {
        if (this.errors.has('phone')) {
          this.isShowPhone = true
          this.userNameErrorMsg = '请输入有效的11位手机号'
        } else {
          this.isShowPhone = false
          this.userNameErrorMsg = ''
        }
        if (this.errors.has('password')) {
          this.isShowPassword = true
          this.codeErrorMsg = '密码不符合要求'
        } else {
          this.isShowPassword = false
          this.codeErrorMsg = ''
        }
        /* if (result) {
          Toast.loading({
            duration: 20000,
            message: '加载中...'
          })
          LSet('userPhone', this.userName)
          axios({
            method: 'GET',
            url: APPDOMAIN + '/user/userLogin',
            params: {
              account: this.userName,
              password: this.encryptPsd(this.code),
              deviceUuid: this.deviceId
            }
          }).then(res => {
            console.log(res)
            if (res.resultCode === '200') {
              window.zhuge.identify(res.userInfo.id, {
                name: res.userInfo.userName,
                phone: res.userInfo.phone
              }) // 埋点记录用户信息
              if (judge !== null) {
                let judgeUserInfo = res.userInfo
                if (judgeUserInfo.userType === '33A') {
                  judgeUserInfo['indexUrl'] = LINKDOMAIN + '/#/index'
                } else if (judgeUserInfo.userType === '33B') {
                  judgeUserInfo['indexUrl'] = LINKDOMAIN + '/#/merchantindex'
                }
                judge.loginData(judgeUserInfo)
              }
              this.LOGIN_IN_SUCCESS(res.userInfo)
              this.setUser(res.userInfo)
            }
          })
        } */
      })
    }
  },
  computed: {
  },
  components: {
  }
}
</script>
<style lang="less" scoped>
  @import "../assets/reset";
  .login{
    .red_active{
      color: red;
    }
  }
</style>
