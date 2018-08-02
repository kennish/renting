<template>
  <div class="subheader">
    <div class="subheader-t">
      <div class="container clear">
        <div class="subheader-logo fl">
          <img :src="require('@/assets/img/logo@2x2.png')" />
        </div>
        <nav class="subheader-nav fl">
          <router-link to="/" exact class="subheader-link">首页</router-link>
          <router-link to="/houselist" class="subheader-link">租房</router-link>
          <router-link to="/" exact class="subheader-link">地铁找房</router-link>
          <router-link to="/" exact class="subheader-link">地图找房</router-link>
        </nav>
        <div class="subheader-login fr">
          <router-link to="/" class="subheader-login-link fl">登录</router-link>
          <router-link to="/" class="subheader-login-link fl">注册</router-link>
        </div>
      </div>
    </div>
    <div class="subheader-b">
      <div class="container">
        <div class="subheader-serach clear">
          <input class="subheader-serach-txt fl" type="text" placeholder="请输入区域、小区名开始找房" />
          <input class="subheader-serach-btn fl" type="button" value="安心找房" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      
    }
  },
  methods: {
    
  }
}
</script>

<style>
.subheader{}
.subheader-t{
  height: 55px;
  line-height: 55px;
  background: #303848;
  color: #ffffff;
}
.subheader-logo{
  width: 60px;
  padding-top: 5px;
}
.subheader-logo img{
  width: 100%;
}
.subheader-nav{
  margin-left: 20px;
}
.subheader-link{
  color: #ffffff;
  font-size: 16px;
  color: #fff;
  padding: 0 20px;
  height: 100%;
  display: inline-block;
}
.subheader-link:hover{
  color: #ff865e;
}
.subheader-link.active{
  /* background: #de4715; */
  color: #de4715;
}
.subheader-login{}
.subheader-login-link{
  font-size: 14px;
  color: #ffffff;
}
.subheader-login-link:hover{
  color: #ff865e;
}
.subheader-login-link:last-child{
  margin-left: 5px;
}
.subheader-b{
  padding: 10px 0;
  background: #ffffff;
}
.subheader-serach{}
.subheader-serach-txt{
  width: 425px;
  height: 34px;
  padding-left: 10px;
  background: #fff;
  line-height: 34px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.subheader-serach-btn{
  width: 100px;
  height: 34px;
  border: 1px solid #9a2c07;
  border-radius: 4px;
  margin-left: 10px;
  background: #de4715;
  color: #fff;
  line-height: 34px;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
}
.subheader-serach-txt:focus{
  border: 1px solid #ccc;
}
.subheader-serach-btn:focus{
  border: 1px solid #9a2c07;
}
</style>
