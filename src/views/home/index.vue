<template>
  <div>
    <sidebar-header :icon="'icon-three-bars'" :title="'斗鱼TV'"></sidebar-header>
    <sidebar></sidebar>
    <section class="content">
      <div>
        <swipe class="my-swipe">
          <swipe-item class="silde" v-for="billboard in billboards">
            <router-link :to="{name: 'room', params: {id: billboard.room_id}}">
              <image-placeholder :src="billboard.room_src"></image-placeholder>
            </router-link>
          </swipe-item>
        </swipe>
      </div>
      <div class="m-row">
          <index-live :rooms="hotLiveRoom"></index-live>
          <div class="more-button" v-if="limit < 100" @click="getIndexLive">
             更多热门直播
          </div>
      </div>
    </section>
  </div>
</template>
<script>
import Sidebar from '../../components/sidebar'
import SidebarHeader from '../../components/sidebar-header'
import IndexLive from './index-live'
import ImagePlaceholder from '../../components/image-placeholder'
import MoreButton from '../../components/more-button'
import { Swipe, SwipeItem } from 'vue-swipe'
require('vue-swipe/dist/vue-swipe.css')

export default{
  data () {
    return {
      billboards: [],
      hotLiveRoom: [],
      limit: 0,
    }
  },
  created () {
    this.getIndexLive()
  },
  methods: {
    getIndexLive () {
      this.limit = this.limit + 20
      if (this.limit > 100) { return false }
      let successCallback = (response) => {
        const data = response.data
        const json = data.data
        if (data.error === 0) {
          console.log(this.billboards)
          this.billboards = json
          this.hotLiveRoom = json
        }
      }
      let errorCallback = (json) => {
        console.log(json)
      }
      this.$http.get('/api/live?limit=' + this.limit).then(successCallback, errorCallback)
    }
  },
  components: {
    Sidebar,SidebarHeader,Swipe,SwipeItem,IndexLive,ImagePlaceholder,MoreButton
  }
}
</script>
<style lang='scss'>
  .content, .live {
    margin-top: 50px;
  }
  .my-swipe{
    height: 4.5rem;
    color: #ffffff;
    font-size: 30px;
    text-align: center;
    overflow: hidden;
  }
  .silde img{
    width: 100%;
  }
  .m-row {
    position: relative;
    box-sizing: border-box;
    margin-top: .26666667rem;
    padding: 0 .13333333rem .13333333rem;
    width: 100%;
    font-size: 12px;
  }
  .more-button {
    width: 160px;
    height: 30px;
    border: 1px solid #aaa;
    border-radius: 15px;
    margin: 10px auto 10px;
    text-align: center;
    line-height: 30px;
    font-size: 12px;
    color: #616161;
    cursor: pointer;
  }
</style>
