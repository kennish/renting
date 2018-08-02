<template>
  <div class="house-item clear">
    <router-link :to="to" tag="div" class="house-item-img fl">
      <img :src="img" />
    </router-link>
    <div class="house-item-r fl clear">
      <h3><router-link :to="to">{{title}}</router-link></h3>
      <div class="house-item-info fl">
        <p>{{msg}}</p>
        <div class="house-item-msg">{{site}}</div>
      </div>
      <div class="house-item-rent fl">
        <h5><span>{{rent}}</span>元/月</h5>
        <p>{{rentalBond}}</p>
      </div>
      <div class="house-item-seen fr">
        <h5><span>{{personTime}}</span>人</h5>
        <p>看过此房</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['to', 'img', 'title', 'msg', 'site', 'rent', 'rentalBond', 'personTime'],
  data () {
    return {
      
    }
  },
  methods: {
    
  }
}
</script>

<style>
.house-item{
  padding: 26px;
  border-bottom: 1px dotted #e1e1e1;
  background: #fff;
  transition: background .4s;
}
.house-item:hover{
  background: #fbfbfb;
}
.house-item-img{
  width: 220px;
  height: 165px;
  overflow: hidden;
  cursor: pointer;
}
.house-item-img img{
  width: 100%;
  transition: all 1s;
}
.house-item-img:hover img{
  transform: scale(1.1);
}
.house-item-r{
  width: 900px;
  margin-left: 28px;
}
.house-item-r h3{
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  vertical-align: middle;
  overflow: hidden;
  padding-top: 5px;
}
.house-item-r h3 a{
  font-size: 22px;
  font-weight: 700;
  color: #009de8;
}
.house-item-info{
  width: 400px;
}
.house-item-info p{
  overflow: hidden;
  text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
  white-space: nowrap;
  color: #333;
  font-size: 16px;
  font-weight: 700;
  margin-top: 10px;
}
.house-item-info .house-item-msg{
  /* height: 31px;
  line-height: 31px; */
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  word-berak: break-all;
  font-size: 16px;
  color: #888888;
  margin-top: 10px;
}
.house-item-rent{
  width: 200px;
  text-align: right;
}
.house-item-rent h5{
  color: #E4393C;
  margin-top: 7px;
  width: 100%;
  position: relative;
}
.house-item-rent h5 span{
  font-size: 30px;
  font-weight: 700;
  margin-right: 3px;
  font-family: tahoma;
}
.house-item-rent p{
  font-size: 12px;
  color: #999;
  font-family: Arial;
  margin-top: 8px;
}
.house-item-seen{
  width: 190px;
  margin-top: 20px;
  text-align: center;
}
.house-item-seen h5{
  font-size: 12px;
}
.house-item-seen h5 span{
  font-size: 16px;
  font-weight: 700;
  margin-right: 3px;
  font-family: tahoma;
}
.house-item-seen p{
  font-size: 12px;
  color: #999;
  margin-top: 9px;
}
</style>
