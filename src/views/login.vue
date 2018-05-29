<template>
  <section class="login-wrap">
    <n3-form ref='form' class="login-form">
      <h3>用户登录</h3>
      <div class="fields">
        <n3-input class="field" v-model="account" placeholder="账号" width="320px">
        </n3-input>
        <n3-input class="field" v-model="password" type="password" placeholder="密码" width="320px"  @keyup.native.enter="check">
        </n3-input>
        <n3-checkbox-group v-model="remember" class="save-account">
          <n3-checkbox label="remember"><font color="#fff">记住账号</font></n3-checkbox>
        </n3-checkbox-group>
      </div>
      <div class="submit">
        <n3-button
          @click.native="check"
          type="primary"
          :loading="loading"
          :disabled="loading"
          block
        >
          {{ loading ? '登录中' : '登录' }}
        </n3-button>
      </div>
      <div calss='submit'>
        <n3-button @click.native="add" type='primary' block>
          {{regist}}
        </n3-button>
      </div>
    </n3-form>
    <canvas id="J_loginBackground"></canvas>
  </section>
</template>

<script>
  import { mapActions } from 'vuex'
  import {
    STORAGE_KEY
  } from '../utils/const'
  import storage from '../utils/storage'
  import Register from './register'
  
  import axios from 'axios'
  export default {
    data () {
      return {
        account: '',
        password: '',
        remember: [],
        loading: false,
        regist: '注册'
      }
    },
    methods: {
      // ...mapActions(['login']),
      saveAccount () {
        this.remember.length && storage.setItem(STORAGE_KEY.ACCOUNT, this.account)
      },
      getAccount () {
        this.account = storage.getItem(STORAGE_KEY.ACCOUNT) || ''
      },
      check () {
        if (!this.account) {
          return this.n3Alert({
            content: '请输入账号',
            type: 'success',
            placement: 'top-right',
            duration: 2000,
            width: '240px'
          })
        }
        if (!this.password) {
          return this.n3Alert({
            content: '请输入密码',
            type: 'success',
            placement: 'top-right',
            duration: 2000,
            width: '240px'
          })
        }
        this.saveAccount()
        this.submit()
      },
      login(dict) {
        axios.post('http://127.0.0.1:8000/login/',dict)
        .then(response => {
          console.log(response);
            //本地存储用户信息
          // cookie.setCookie('name',this.userName,7);
          // cookie.setCookie('token',response.data.token,7)
          //   //存储在store
            // 更新store数据
          // that.$store.dispatch('setInfo');
            //跳转到首页页面
          this.$router.push({ name: 'table'})
        })
        .catch(error => {
          this.loading = false
          this.n3Alert({
            content: error || '登录失败，请检查账号密码~',
            type: 'success',
            placement: 'top-right',
            duration: 2000,
            width: '240px'
          })
        })
      },
      add () {
        this.$router.push({
          name: 'register'
        })
      },
      submit () {
        this.loading = true
        var params = new URLSearchParams()
        params.append('username',this.account)
        params.append('password',this.password)
        this.login(params)
      },
    },
    created () {
      this.getAccount()
    },
  }
</script>

<style lang="less">
  .login-wrap {
    position: fixed;
    z-index: 0;
    top: 0;
    left: 0;
    overflow: hidden;
    width: 100%;
    height: 100%;
    background-image: url('../assets/images/loginback.jpg');
    canvas {
      width: 100%;
      height: 100%;
      position: absolute;
    }
  }
  .login-form {
    position: absolute;
    z-index: 1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    padding: 16px 20px 0;
    width: 360px;
    height: 282px;
    font-size: 14px;
    background: #121356;
    border: 1px solid #ccc;
    border-radius: 12px;
    box-shadow: 2px 2px 32px 1px rgba(0, 0, 0, .45);
    opacity: 0.85;
    h3 {
      color: #fff;
      margin-top: 0;
      margin-bottom: 0;
      padding: 12px 0;
      font-weight: normal;
      font-size: 22px;
      text-align: center;
    }
    .field {
      display: block;
      margin: 0 auto;
      padding: 6px 0;
    }
    .submit {
      padding: 12px 0;
    }
  }
</style>
