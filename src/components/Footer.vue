<template>
  <div class="footer">
    <div class="footer-t">
      <div class="container clear">
        <div class="footer-item fl">
          <h3>公司地址</h3>
          <div class="footer-icon">
            <div class="footer-img" :style="`background-image: url(${require('@/assets/img/footer-icon01.png')});`"></div>
            <div class="footer-abbr"></div>
          </div>
          <p>上海市黄浦区蒙自路207号宏慧盟智园</p>
        </div>
        <div class="footer-item fl">
          <h3>在线客服</h3>
          <div class="footer-icon">
            <div class="footer-img" :style="`background-image: url(${require('@/assets/img/footer-icon02.png')});`"></div>
            <div class="footer-abbr"></div>
          </div>
          <p>400-825-9200 (全天 09:00-21:00)</p>
        </div>
        <div class="footer-item fl">
          <h3>品牌合作</h3>
          <div class="footer-icon">
            <div class="footer-img" :style="`background-image: url(${require('@/assets/img/footer-icon03.png')});`"></div>
            <div class="footer-abbr"></div>
          </div>
          <p>bd@innjia.com</p>
        </div>
      </div>
    </div>
    <div class="footer-b">2017研耀（上海）信息科技有限公司 All Rights 沪ICP备 14024658号-1</div>
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
.footer{}
.footer-t{
  background: #363940;
}
.footer-item{
  width: 300px;
  padding: 78px 0 70px;
  text-align: center;
  margin-right: 150px;
}
.footer-item:last-child{
  margin-right: 0;
}
.footer-item h3{
  line-height: 44px;
  opacity: 0.6;
  font-size: 20px;
  color: #FFFCFC;
}
.footer-icon{
  height: 98px;
  position: relative;
}
.footer-img{
  width: 57px;
  height: 57px;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;
  margin-left: -28.5px;
  margin-top: -28.5px;
  background-color: rgba(73, 76, 82, 1);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: auto 100%;
  border-radius: 50%;
}
.footer-abbr{
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 1px;
  background: #494c53;
  z-index: 0;
}
.footer-item p{
  line-height: 22px;
  font-size: 16px;
  color: rgb(255, 255, 255);
  text-align: center;
}
.footer-b{
  background: #30333a;
  text-align: center;
  height: 50px;
  line-height: 50px;
  font-size: 12px;
  color: rgb(141, 141, 141);
  letter-spacing: 0.24px;
}
</style>
