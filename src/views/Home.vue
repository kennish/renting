<template>
  <div class="home">
    <div class="header" :style="`background-image: url(${require('@/assets/img/banner/home-banner.jpg')});`">
      <div class="header-top">
        <div class="container clear">
          <div class="fl clear">
            <div class="header-logo fl">
              <img :src="require('@/assets/img/logo@2x.png')" />
            </div>
            <div class="exchange fl"><i class="exchange-icon iconfont">&#xe62c;</i>上海</div>
          </div>
          <nav class="fr">
            <div class="login-status">
              <router-link to="/" class="login-link"><i class="iconfont">&#xe612;</i> 登录/注册</router-link>
            </div>
            <div class="nav clear">
              <router-link to="/houselist" class="nav-link fl">租房</router-link>
              <router-link to="/" class="nav-link fl">地铁找房</router-link>
              <router-link to="/" class="nav-link fl">小区找房</router-link>
              <router-link to="/" class="nav-link fl">我要出租</router-link>
            </div>
          </nav>
        </div>
      </div>
      <div class="header-main container">
        <h2>放心公寓联盟</h2>
        <h3>已成功帮助 <span>6000</span> 个用户找到放心住处</h3>
        <div class="searchBox clear">
          <input class="searchTxt fl" type="text" placeholder="请输入房源信息" />
          <input class="searchBtn fl" type="button" value="放心找房" />
        </div>
      </div>
    </div>
    <div class="home-nav container clear">
      <div class="home-nav-item fl">
        <div class="home-nav-icon">
          <img :src="require('@/assets/img/phpe022WE.png')" />
        </div>
        <div class="home-nav-info">
          <h5>匹配找房</h5>
          <p>输入关键字，自动匹配合适房源，快捷放心</p>
        </div>
      </div>
      <div class="home-nav-item fl">
        <div class="home-nav-icon">
          <img :src="require('@/assets/img/php4TtmtO.png')" />
        </div>
        <div class="home-nav-info">
          <h5>匹配找房</h5>
          <p>输入关键字，自动匹配合适房源，快捷放心</p>
        </div>
      </div>
      <div class="home-nav-item fl">
        <div class="home-nav-icon">
          <img :src="require('@/assets/img/phpxYKKUt.png')" />
        </div>
        <div class="home-nav-info">
          <h5>匹配找房</h5>
          <p>输入关键字，自动匹配合适房源，快捷放心</p>
        </div>
      </div>
    </div>
    <div class="home-house-list">
      <div class="container">
        <home-title title="品质公寓" subtitle="为你而选" msg="品牌房源那么多，我们为你精选，放心公寓联盟会越来越懂你" to="/" linktitle="更多品牌公寓"></home-title>
        <div class="house-bar clear">
          <house-cell class="home-house-item fl" title="盈家公寓" to="/" subtitle="品牌公寓均价2500——3500" msg="全新装修，地铁周边，交通便利" :img="require('@/assets/img/houseImg/house01.jpg')"></house-cell>
          <house-cell class="home-house-item fl" title="盈家公寓" to="/" subtitle="品牌公寓均价2500——3500" msg="全新装修，地铁周边，交通便利" :img="require('@/assets/img/houseImg/house01.jpg')"></house-cell>
          <house-cell class="home-house-item fl" title="盈家公寓" to="/" subtitle="品牌公寓均价2500——3500" msg="全新装修，地铁周边，交通便利" :img="require('@/assets/img/houseImg/house01.jpg')"></house-cell>
          <house-cell class="home-house-item fl" title="盈家公寓" to="/" subtitle="品牌公寓均价2500——3500" msg="全新装修，地铁周边，交通便利" :img="require('@/assets/img/houseImg/house01.jpg')"></house-cell>
        </div>
      </div>
    </div>
    <div class="home-house-list2">
      <div class="container">
        <home-title title="优惠推荐" subtitle="经济舒适" msg="品牌房源那么多，我们为你精选，放心公寓联盟会越来越懂你" to="/" linktitle="更多优惠推荐"></home-title>
        <div class="house-bar clear">
          <house-cell class="home-house-item fl" title="盈家公寓" to="/" subtitle="品牌公寓均价2500——3500" msg="全新装修，地铁周边，交通便利" :img="require('@/assets/img/houseImg/house01.jpg')"></house-cell>
          <house-cell class="home-house-item fl" title="盈家公寓" to="/" subtitle="品牌公寓均价2500——3500" msg="全新装修，地铁周边，交通便利" :img="require('@/assets/img/houseImg/house01.jpg')"></house-cell>
          <house-cell class="home-house-item fl" title="盈家公寓" to="/" subtitle="品牌公寓均价2500——3500" msg="全新装修，地铁周边，交通便利" :img="require('@/assets/img/houseImg/house01.jpg')"></house-cell>
          <house-cell class="home-house-item fl" title="盈家公寓" to="/" subtitle="品牌公寓均价2500——3500" msg="全新装修，地铁周边，交通便利" :img="require('@/assets/img/houseImg/house01.jpg')"></house-cell>
        </div>
      </div>
    </div>
    <footers></footers>
  </div>
</template>

<script>
import HomeTitle from '@/components/HomeTitle'
import HouseCell from '@/components/HouseCell'
import Footers from '@/components/Footer'
export default {
  name: '',
  components: {
    HomeTitle,
    HouseCell,
    Footers
  },
  data () {
    return {
      
    }
  },
  created () {
    
  },
  methods: {
    
  }
}
</script>

<style>
.header{
  width: 100%;
  height: 610px;
  background-repeat: no-repeat;
  background-position: center 0;
}
.header-top{
  /* position: fixed;
  left: 0;
  top: 0; */
  width: 100%;
  height: 66px;
  padding-top: 30px;
}
.header-logo{
  width: 230px;
}
.header-logo img{
  width: 100%;
}
.exchange{
  background: rgba(0,0,0,0.25);
  height: 27px;
  line-height: 27px;
  text-align: center;
  color: #fff;
  cursor: pointer;
  border-radius: 15px;
  padding: 0 10px;
  font-size: 12px;
  margin-left: 15px;
  margin-top: 20px;
}
.exchange-icon{
  font-size: 14px;
  margin-right: 5px;
}
.login-status{
  height: 30px;
  line-height: 30px;
  text-align: right;
}
.login-link{
  font-size: 14px;
  color: #ffffff;
  margin-left: 10px;
}
.nav{
  height: 36px;
  /* line-height: 36px; */
}
.nav-link{
  font-size: 16px;
  color: #ffffff;
  margin-left: 20px;
  font-weight: 700;
  text-shadow: 0 0 5px rgba(0,0,0,0.3);
}

.header-main{
  padding-top: 104px;
  text-align: center;
}
.header-main h2{
  font-size: 52px;
  color: #ffffff;
  text-align: center;
  text-shadow: 0 0 5px rgba(0,0,0,0.3);
}
.header-main h3{
  font-size: 32px;
  color: #ffffff;
  text-align: center;
  margin-top: 30px;
  text-shadow: 0 0 5px rgba(0,0,0,0.3);
}
.header-main h3 span{
  color: #F96332;
}
.searchBox{
  display: inline-block;
  margin-top: 40px;
}
.searchTxt{
  width: 600px;
  padding-left: 20px;
  border: 0;
  height: 55px;
  line-height: 55px;
  border-radius: 2px;
  font-size: 14px;
}
.searchBtn{
  background: #F96332;
  width: 127px;
  height: 55px;
  float: right;
  border: 0;
  display: block;
  border-radius: 0 2px 2px 0;
  cursor: pointer;
  text-align: center;
  font-size: 18px;
  color: #fff;
  -webkit-transition: all .3s ease-in-out;
  -moz-transition: all .3s ease-in-out;
  -o-transition: all .3s ease-in-out;
  -ms-transition: all .3s ease-in-out;
  transition: all .3s ease-in-out;
}

.home-nav{
  padding: 50px 0;
}
.home-nav-item{
  width: 400px;
  padding: 0 110px;
  box-sizing: border-box;
  text-align: center;
  cursor: pointer;
}
.home-nav-icon{
  width: 76px;
  margin: 0 auto;
}
.home-nav-icon img{
  width: 100%;
}
.home-nav-info{
  margin-top: 16px;
}
.home-nav-info h5{
  font-size: 18px;
  color: #394043;
}
.home-nav-info p{
  margin-top: 5px;
  font-size: 12px;
  color: #b0b3b4;
  line-height: 18px;
}

.home-house-list{
  padding: 50px 0;
  background: #eeeef1;
}
.house-bar{
  margin-top: 40px;
}
.home-house-item{
  margin-right: 40px;
}
.home-house-item:last-child{
  margin-right: 0;
}
.home-house-list2{
  padding: 50px 0;
}
</style>
