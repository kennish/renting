<template>
  <div class="filter-box">
    <div class="filter-tab clear">
      <a href="javascript:;" @click="checkedRenting(1)" :class="`filter-tab-item fl ${rentingId == 1? 'active':''}`">全部租房</a>
      <a href="javascript:;" @click="checkedRenting(2)" :class="`filter-tab-item fl ${rentingId == 2? 'active':''}`">地铁租房</a>
    </div>
    <div class="filter-options">
      <div v-if="rentingId == 1" class="filter-options-list clear">
        <div class="filter-options-title fl">区域：</div>
        <div class="filter-options-info fl">
          <a :class="filterInfo.cityAreaId == ''? 'active' : ''" @click="checkedZone('')" href="javascript:;">不限</a>
          <a v-for="(item, index) in zoneList" :key="index" @click="checkedZone(item.id)" :class="filterInfo.cityAreaId == item.id? 'active' : ''" href="javascript:;">{{item.zoneName}}</a>
        </div>
      </div>
      <div v-if="rentingId == 2" class="filter-options-list clear">
        <div class="filter-options-title fl">地铁：</div>
        <div class="filter-options-info fl">
          <a :class="filterInfo.lineId == ''? 'active' : ''" @click="checkedLine('',[])" href="javascript:;">不限</a>
          <a :class="filterInfo.lineId == item.id? 'active':''" v-for="(item, index) in lineList" :key="index" @click="checkedLine(item.id, item.stations)" href="javascript:;">{{item.lineName}}</a>
          <div class="station-show" v-if="stationList.length != 0">
            <a :class="filterInfo.stationId == item.stationId? 'active':''" v-for="(item, index) in stationList" :key="index" @click="checkedStation(item.stationId)" href="javascript:;">{{item.stationName}}</a>
          </div>
        </div>
      </div>
      <div class="filter-options-list clear">
        <div class="filter-options-title fl">租金：</div>
        <div class="filter-options-info fl">
          <a :class="filterInfo.lp.indexOf(item.id) != -1? 'active':''" v-for="(item, index) in rentList" @click="checkedRent(item.id)" :key="index" href="javascript:;">{{item.name}}</a>
        </div>
      </div>
      <div class="filter-options-list clear">
        <div class="filter-options-title fl">面积：</div>
        <div class="filter-options-info fl">
          <a :class="filterInfo.ha.indexOf(item.id) != -1? 'active':''" v-for="(item, index) in areaList" :key="index" @click="checkedArea(item.id)" href="javascript:;">{{item.name}}</a>
        </div>
      </div>
      <div class="filter-options-list clear">
        <div class="filter-options-title fl">房型：</div>
        <div class="filter-options-info fl">
          <a :class="filterInfo.ht.indexOf(item.id) != -1? 'active':''" v-for="(item, index) in roomList" :key="index" @click="chechedRoom(item.id)" href="javascript:;">{{item.name}}</a>
        </div>
      </div>
      <div class="filter-options-list sort-bar clear">
        <div class="filter-options-title fl">排序：</div>
        <div class="filter-options-info fl">
          <a :class="filterInfo.order == item.id? 'active': ''" v-for="(item, index) in orderList" :key="index" @click="checkedOrder(item.id)" href="javascript:;">{{item.name}}<i class="iconfont" v-html="item.icon"></i></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['info'],
  data () {
    return {
      rentingId: 1,
      rentList: [
        {name: '1000以下', id: 'lp1'},
        {name: '1000-2000元', id: 'lp2'},
        {name: '2000-3000元', id: 'lp3'},
        {name: '3000以上', id: 'lp4'}
      ],
      areaList: [
        {name: '30平以下', id: 'ha1'},
        {name: '30-60平', id: 'ha2'},
        {name: '60-80平', id: 'ha3'},
        {name: '80-100平', id: 'ha4'},
        {name: '100-120平', id: 'ha5'},
        {name: '120-150平', id: 'ha6'},
        {name: '150平以上', id: 'ha7'}
      ],
      roomList: [
        {name: '一室', id: 'ht1'},
        {name: '二室', id: 'ht2'},
        {name: '三室', id: 'ht3'},
        {name: '四室及以上', id: 'ht4'}
      ],
      orderList: [
        {name: '默认', id: ''},
        {name: '价格从小到大', id: '1', icon: '&#xe75f;'},
        {name: '价格从大到小', id: '2', icon: '&#xe75e;'},
        {name: '面积从小到大', id: '5', icon: '&#xe75f;'},
        {name: '面积从大到小', id: '6', icon: '&#xe75e;'}
      ],
      zoneList: [],
      lineList: [],
      stationList: [],
      filterInfo: {
        cityAreaId: this.info.cityAreaId?this.info.cityAreaId:'',
        lp: this.info.lp?this.info.lp: [],
        ha: this.info.ha?this.info.ha: [],
        ht: this.info.ht?this.info.ht: [],
        order: this.info.order?this.info.order: '',
        lineId: this.info.lineId?this.info.lineId:'',
        stationId: ''
      }
    }
  },
  created () {
    this.getZoneList()
    this.getLineList()
  },
  methods: {
    // 切换全部租房和地铁租房
    checkedRenting (id) {
      this.rentingId = id
      if(id == 1){ //全部租房
        // this.filterInfo.lineId = ''
        // this.filterInfo.stationId = ''
      } else{
        // this.filterInfo.cityAreaId = ''
        this.stationList = []
      }
      this.filterInfo = {
        lineId: '',
        stationId: '',
        cityAreaId: '',
        lp: [],
        ha: [],
        ht: [],
        order: ''
      }
      this.$emit('getInfo', this.filterInfo)
    },
    // 获取区域列表
    getZoneList () {
      this.axios.post('/fxgy-service/api/getZoneListByLevel.do',{
        status: 'AVAILABLE',
        level: 3,
        upId: '402881ff584768bf0158478bc98b0000',
        type: 'rent'
      }).then((res) => {
        if(res.code == "0"){
          this.zoneList = res.res.data.record
        }
      })
    },
    // 获取地铁列表
    getLineList () {
      this.axios.post('/fxgy-service/api/getLineList.do',{
        status: 'AVAILABLE'
      }).then((res) => {
        if(res.code == "0"){
          this.lineList = res.res.data.record
        }
      })
    },
    // 切换地铁线路
    checkedLine (id, list) {
      this.filterInfo.lineId = id
      this.stationList = list
      this.filterInfo.stationId = ''
      this.$emit('getInfo', this.filterInfo)
    },
    // 切换站点
    checkedStation (id) {
      this.filterInfo.stationId = id
      this.$emit('getInfo', this.filterInfo)
    },
    // 切换区域
    checkedZone (id) {
      this.filterInfo.cityAreaId = id
      this.$emit('getInfo', this.filterInfo)
    },
    // 切换租金
    checkedRent (id) {
      if(this.filterInfo.lp.indexOf(id) == -1){
        this.filterInfo.lp.push(id)
        this.filterInfo.lp.sort()
      } else{
        this.filterInfo.lp = this.filterInfo.lp.filter(function(item){
          if(item != id){
            return item
          }
        })
      }
      this.$emit('getInfo', this.filterInfo)
    },
    // 切换面积
    checkedArea (id) {
      if(this.filterInfo.ha.indexOf(id) == -1){
        this.filterInfo.ha.push(id)
        this.filterInfo.ha.sort()
      } else{
        this.filterInfo.ha = this.filterInfo.ha.filter(function(item){
          if(item != id){
            return item
          }
        })
      }
      this.$emit('getInfo', this.filterInfo)
    },
    // 切换房型
    chechedRoom (id) {
      if(this.filterInfo.ht.indexOf(id) == -1){
        this.filterInfo.ht.push(id)
        this.filterInfo.ht.sort()
      } else{
        this.filterInfo.ht = this.filterInfo.ht.filter(function(item){
          if(item != id){
            return item
          }
        })
      }
      this.$emit('getInfo', this.filterInfo)
    },
    // 切换排序
    checkedOrder (id) {
      this.filterInfo.order = id
      this.$emit('getInfo', this.filterInfo)
    }
  }
}
</script>

<style>
.filter-box{
  margin-top: 50px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
}
.filter-tab{
  border-bottom: 2px solid #de4715;
  background: #fbfbfb;
}
.filter-tab-item{
  line-height: 46px;
  height: 46px;
  padding: 0 26px;
  color: #555;
  font-size: 16px;
}
.filter-tab-item:hover{
  color: #ff865e;
}
.filter-tab-item.active{
  background: #de4715;
  color: #ffffff;
}
.filter-options{
  padding: 18px 26px;
  background: #ffffff;
}
.filter-options-list{
  padding: 5px 0;
}
.filter-options-title{
  line-height: 27px;
  font-size: 12px;
  margin-right: 6px;
  font-weight: 700;
  margin-right: 15px;
}
.filter-options-info{
  width: 1097px;
}
.filter-options-info a{
  line-height: 27px;
  color: #333;
  font-size: 12px;
  padding: 0px 10px;
  display: inline-block;
}
.filter-options-info a:hover{
  color: #ff865e;
}
.filter-options-info a.active{
  color: #de4715;
  font-weight: 700;
}
.filter-options-info a.active i{
  font-weight: normal;
}
.sort-bar{
  border-top: 1px solid #e0e0e0;
  margin-top: 10px;
}
.station-show{
  line-height: 27px;
  color: #333;
  font-size: 12px;
  padding: 10px 6px;
  border: 1px solid #ddd;
  background: #fdfdfd;
  border-radius: 4px;
  margin-top: 6px;
}
</style>
