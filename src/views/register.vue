<template>
  <section calss="register-wrap">
    <div class="user-edit">
      <n3-form
        ref="form"
        validate
      >
        <n3-form-item
          class="field"
          label="用户名"
          need
          :label-col="3"
        >
          <n3-input
            :rules="[{type:'required'}]"
            v-model="model.username"
            width="200px"
            :custom-validate="usernameValidate"
          >
          </n3-input>
        </n3-form-item>
        <n3-form-item
          class="field"
          label="密码"
          need
          :label-col="3"
        >
          <n3-input
            v-model="model.password"
            width="200px"
            :rules="[{type:'required'}]"
            :custom-validate="passwordValidate"
            class="fl"
          >
          </n3-input>
        </n3-form-item>
        <n3-form-item
          class="field"
          label="手机号"
          need
          :label-col="3"
        >
          <n3-input
            :rules="[{type:'required'}]"
            :custom-validate="phoneValidate"
            v-model="model.mobile"
            width="200px"
            type="number"
          >
          </n3-input>
        </n3-form-item>
        <n3-form-item
          :label-col="1"
        >
          <n3-button
            @click.native="submit"
            type="primary"
            :loading="loading"
            block
          >
            {{ loading ? '操作中' : '确认' }}
          </n3-button>
        </n3-form-item>
      </n3-form>
    </div>
  </section>
</template>

<script>
  import axios from 'axios'
  import qs from 'qs'
  export default {
    name: 'Register',
    data () {
      return {
        model: {
          username: '',
          password: '',
          mobile: '',
        },
        loading: false
      }
    },
    methods: {
      reload () {
        // 重置表单
        this.model = {
          username: '',
          password: '',
          mobile: '',
        }
        this.loading = false
      },
      addUser () {
        // let cond = Object.assign({}, this.model)
        // cond.expireDate = new Date(cond.expireDate).valueOf()
        this.loading = true
        axios.post('http://127.0.0.1:8000/register/',this.model)
          .then(data => {
            this.loading = false
            this.n3Alert({
              content: '注册成功~',
              type: 'success',
              placement: 'top-right',
              duration: 2000,
              width:'240px' // 内容不确定，建议设置width
            })
            this.$router.push('login/')
          })
          .catch(error => {
            this.loading = false
            this.n3Alert({
              content: '注册失败，请刷新重试~',
              type: 'danger',
              placement: 'top-right',
              duration: 2000,
              width:'240px' // 内容不确定，建议设置width
            })
          })
      },
      submit () {
        this.$refs.form.validateFields(result => {
          if (!result.isvalid) {
            return
          }
          return this.addUser()
        })
      },
      passwordValidate (val) {
        if (val && val.length > 5 && val.length < 19) {
          return {
            validStatus: 'success'
          }
        } else {
          return {
            validStatus: 'error',
            tips: '密码长度为6-18位'
          }
        }
      },
      phoneValidate (val) {
        if (/^\d{11}$/.test(val)) {
          return {
            validStatus: 'success'
          }
        } else {
          return {
            validStatus: 'error',
            tips: '请输入11位手机号'
          }
        }
      },
      usernameValidate (val) {
        if (val && val.length > 5 && val.length < 19) {
          return {
            validStatus: 'success'
          }
        } else {
          return {
            validStatus: 'error',
            tips: '账户名长度为6-18位'
          }
        }
      }
    },
    watch: {
      '$route' () {
        if (['normalForm'].indexOf(this.$route.name) > -1) {
          this.reload()
        }
      }
    },
    created () {
      this.reload()
    }
  }
</script>

<style lang="less">
  .register-wrap {
    position: fixed;
    z-index: 0;
    top: 0;
    left: 0;
    overflow: hidden;
    width: 100%;
    height: 100%;
    background: #111;
    canvas {
      width: 100%;
      height: 100%;
      position: absolute;
    }
  }
  .user-edit {
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
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 12px;
    box-shadow: 2px 2px 32px 1px rgba(0, 0, 0, .45);
    opacity: .75;
    .field {
      display: block;
      margin: 0 auto;
      padding: 6px 0;
    }
    .submit-btn {
      width: 200px;
    }
    .refresh {
      cursor: pointer;
    }
    .i-tips {
      float: left;
      padding-left: 10px;
      color: #999;
    }
  }
</style>