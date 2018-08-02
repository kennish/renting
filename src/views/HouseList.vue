<template>
  <div class="house-page">
    <headers></headers>
    <div class="container">
      <filters :info="filterInfo" @getInfo="getFilterInfo"></filters>
      <div class="house-main">
        <div class="house-main-t clear">
          <h4 class="fl"><i class="iconfont">&#xe6d5;</i>放心公寓列表</h4>
          <p class="fr">当前有<span>200</span>家品牌公寓<span>6000</span>套在租房源</p>
        </div>
        <house-item v-for="(item, index) in houseList" :key="index"
        :to="'/houselist/' + item.id+'?qq=123'" 
        :img="item.resourceServer + item.coverPhoto[0]"
        :title="item.villageName" 
        :msg="item.houseFloor + '/' + item.houseFloorTotal + '层 ' + item.houseTypeOne + '室' + item.houseTypeTwo + '厅' + item.houseTypeThree + '卫 ' + item.houseFloorArea + '平'"
        :site="item.houseAddress" 
        :rent="item.listingPrice" 
        rentalBond="押一付一" 
        personTime="10"></house-item>
        <div class="noHouse" v-show="noData">
          <i class="iconfont">&#xe650;</i>
          没有找到相关内容，请您换个条件试试吧~
        </div>
        <div class="page-wrap" v-if="page.recordCount">
          <Page :current="page.page" :page-size="page.pageSize" :total="page.recordCount" @on-change="pageChange"></Page>
        </div>
      </div>
    </div>
    <footers></footers>
  </div>
</template>

<script>
import Headers from '@/components/Header'
import Footers from '@/components/Footer'
import Filters from '@/components/Filter'
import HouseItem from '@/components/HouseItem'
export default {
  components: {
    Headers,
    Footers,
    Filters,
    HouseItem
  },
  data () {
    return {
      // 绑定过滤条件的参数
      filterInfo: {
        cityAreaId: '',
        lp: [],
        ha: [],
        ht: [],
        order: '',
        lineId: '',
        stationId: ''
      },
      page: {
        recordCount: null,
        pageSize: 20,
        page: 1
      },
      houseList: [],
      noData: false
    }
  },
  created () {
    this.getHouseList()
  },
  methods: {
    // 过滤触发事件
    getFilterInfo (data) {
      this.filterInfo = data
      this.page.page = 1
      this.getHouseList()
    },
    // 分页事件
    pageChange (i) {
      this.page.page = i
      this.getHouseList()
    },
    // 获取公寓列表
    getHouseList () {
      this.axios.post('/fxgy-service/api/getListingHouseList.do', {
        pageSize: this.page.pageSize,
        page: this.page.page,
        type: 'rent',
        status: 'AVAILABLE',
        cityAreaId: this.filterInfo.cityAreaId,
        lp: this.filterInfo.lp.join('-'),
        ha: this.filterInfo.ha.join('-'),
        ht: this.filterInfo.ht.join('-'),
        order: this.filterInfo.order,
        lineId: this.filterInfo.lineId,
        stationId: this.filterInfo.stationId
      }).then((res) => {
        if(res.code == '0'){
          this.houseList = res.res.data.record
          this.page.recordCount = parseInt(res.res.data.page.recordCount)
          this.page.pageSize = parseInt(res.res.data.page.pageSize)
          this.page.page = parseInt(res.res.data.page.page)
          if(res.res.data.record.length == 0){
            this.noData = true
          } else{
            this.noData = false
          }
        }
      })
    }
  }
}
</script>

<style>
.house-page{
  background: #f1f1f1;
}
.house-main{
  margin-top: 15px;
  margin-bottom: 50px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
}
.house-main-t{
  background: #ffffff;
  height: 50px;
  line-height: 50px;
  padding: 0 26px;
  border-bottom: 1px solid #e0e0e0;
}
.house-main-t h4{
  color: #333333;
  font-size: 14px;
  margin-right: 20px;
  cursor: pointer;
}
.house-main-t h4 i{
  font-size: 24px;
  color: #de4715;
  margin-right: 5px;
}
.house-main-t p{
  color: #333333;
  font-size: 12px;
  font-weight: 700;
}
.house-main-t p span{
  color: #E4393C;
  margin: 0 5px;
  font-size: 16px;
  font-family: tahoma;
}
.page-wrap{
  text-align: center;
  padding: 50px 0;
  background: #fff;
}
.noHouse{
  font-size: 22px;
  color: #888;
  padding: 26px;
  background: #fff;
  line-height: 150px;
  border-bottom: 1px dotted #e1e1e1;
  text-align: center;
}
.noHouse i{
  position: relative;
  top: -6px;
  font-size: 48px;
  vertical-align: middle;
}
</style>
