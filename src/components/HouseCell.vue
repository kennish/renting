<template>
  <router-link tag="div" :to="to" class="house-cell">
    <div class="house-cell-img">
      <img :src="img" />
    </div>
    <div class="house-cell-info">
      <div class="house-cell-msg">{{subtitle}}</div>
      <p>{{msg}}</p>
    </div>
    <h3>{{title}}</h3>
  </router-link>
</template>

<script>
export default {
  props: ['to', 'img', 'subtitle', 'msg', 'title'],
  data () {
    return {
      
    }
  },
  methods: {
    
  }
}
</script>

<style>
.house-cell{
  width: 270px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  position: relative;
  cursor: pointer;
}
.house-cell-img{}
.house-cell-img img{
  width: 100%;
}
.house-cell-info{
  padding: 20px 10px;
}
.house-cell-msg{
  font-size: 16px;
  color: #394043;
}
.house-cell-info p{
  color: #999;
  font-size: 12px;
  margin-top: 5px;
}
.house-cell h3{
  position: absolute;
  left: 0;
  top: 150px;
  height: 36px;
  line-height: 36px;
  background: #394043;
  font-size: 18px;
  color: #ffffff;
  padding: 0 10px;
}
</style>
