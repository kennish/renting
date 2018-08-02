<template>
  <div class="home-title">
    <h2><span>{{title}}</span>{{subtitle}}</h2>
    <p>{{msg}}<router-link :to="to" class="home-title-link fr">{{linktitle}}</router-link></p>
  </div>
</template>

<script>
export default {
  props: ['title', 'subtitle', 'msg', 'to', 'linktitle'],
  data () {
    return {
      
    }
  },
  methods: {
    
  }
}
</script>

<style>
.home-title{}
.home-title h2{
  font-size: 24px;
  color: #888888;
  font-family: '宋体';
}
.home-title h2 span{
  font-family: '微软雅黑';
  color: #394043;
  font-weight: 700;
  margin-right: 10px;
}
.home-title p{
  margin-top: 10px;
  color: #888888;
}
.home-title-link{
  color: #394043;
}
</style>
