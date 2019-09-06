<template>
  <div class="m">
    <div class="login">
      <el-card>
        <el-input v-model="account" placeholder="请输入账号" style='margin-top: 10px'></el-input>
        <el-input v-model="password" placeholder="请输入密码" style='margin-top: 20px'></el-input>
        <el-button type="primary" @click="Sign" size="mini" v-if="show" class="sign">登录</el-button>
        <el-button type="primary" @click="Sign" size="mini" v-if="!show" class="sign" :disabled="disabled">{{count}}</el-button>
      </el-card>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      account: '',
      password: '',
      show: true,
      count: '',
      disabled: false,
      timer: null
    }
  },
  mounted() {
    // console.log(window.location.search.slice(1))
  },
  methods: {
    Sign() {
        if(!this.account || !this.password) {
           this.$message.error('请填写正确的信息')
        } else {
          var num = 10
          this.show = false
          this.timer = setInterval(() =>{
            num--
            this.count = num +'秒后重新获取'
            this.disabled = true
            if (num === 0) {
              this.show = true
              clearInterval(this.timer)
              num = 10
            }
          },1000)
        }
    }
  }
}
</script>
<style scoped>
  * {
    list-style: none;
  }
  .login {
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .sign {
    margin: 10px auto 0;
    text-align: center;
    display: flex;
    justify-content: center;
  }
</style>