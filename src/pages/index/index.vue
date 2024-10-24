<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app'
import Classify from './components/Classify.vue'
import {
  getHomeBannerAPI,
  getSwAPI,
  getHomeGoodsNewAPI,
  getHomeGoodsJinpinAPI,
  getHomeGoodsTopAPI,
} from '@/services/home'
import type { BannerItem, ClassifyItem } from '@/types/home'
import type { GoodsItem, PageParams } from '@/types/global'
import { ref } from 'vue'
import { useGuessList } from '@/composables'
import PageSkeleton from './components/PageSkeleton.vue'
import NewSku from './components/NewSku.vue'
import RecSku from './components/RecSku.vue'
import TopSku from './components/TopSku.vue'
import Contact from './components/Contact.vue'
// 获取分类id导航数据
const classifyList = ref<ClassifyItem[]>([])
classifyList.value = [
  {
    id: '1',
    type: '1',
    src: '/static/images/class_icon1.png',
    title: '米沙文创',
  },
  {
    id: '2',
    type: '2',
    src: '/static/images/class_icon2.png',
    title: '书籍文房',
  },
  {
    id: '3',
    type: '3',
    src: '/static/images/class_icon3.png',
    title: '教育益智',
  },
  {
    id: '4',
    type: '4',
    src: '/static/images/class_icon1.png',
    title: '休闲小食',
  },
  {
    id: '5',
    type: '5',
    src: '/static/images/class_icon2.png',
    title: '日用家居',
  },
  {
    id: '6',
    type: '6',
    src: '/static/images/class_icon3.png',
    title: '杯具茶饮',
  },
  {
    id: '7',
    type: '7',
    src: '/static/images/class_icon1.png',
    title: 'ip系列',
  },
  {
    id: '7',
    type: '7',
    src: '/static/images/class_icon2.png',
    title: '文物周边',
  },
]

// 获取banner图数据 和 尾图数据
const i_banner_image = ref('')
const w_url_image = ref('')
const getSwData = async () => {
  const res = await getSwAPI()
  if (res.result[0].imgType == 0) {
    i_banner_image.value = res.result[0].pictureUrl
    w_url_image.value = res.result[1].pictureUrl
  } else {
    i_banner_image.value = res.result[1].pictureUrl
    w_url_image.value = res.result[0].pictureUrl
  }
}

// 获取轮播图数据
const bannerList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  bannerList.value = res.result
}

// 获取新品速览数据
const newPageParams: Required<PageParams> = {
  page: 1,
  pageSize: 4,
}
const newSkuList = ref<GoodsItem[]>([])
const getHomeGoodsNewData = async () => {
  const res = await getHomeGoodsNewAPI(newPageParams)
  newSkuList.value = res.result.items
}

// 获取精品推荐数据
const jinpinPageParams: Required<PageParams> = {
  page: 1,
  pageSize: 4,
}
const jinpinList = ref<GoodsItem[]>([])
const getHomeGoodsJinpinData = async () => {
  const res = await getHomeGoodsJinpinAPI(jinpinPageParams)
  jinpinList.value = res.result.items
}

// 获取人气Top数据
const topPageParams: Required<PageParams> = {
  page: 1,
  pageSize: 4,
}
const topList = ref<GoodsItem[]>([])
const getHomeGoodsTopData = async () => {
  const res = await getHomeGoodsTopAPI(topPageParams)
  topList.value = res.result.items
}

// 猜你喜欢组合式函数
const { guessRef, onScrolltolower } = useGuessList()
// 下拉刷新状态
const isTriggered = ref(false)

// 自定义下拉刷新被触发
const onRefresherrefresh = async () => {
  // 开启动画
  isTriggered.value = true
  // 重置猜你喜欢组件数据
  guessRef.value?.resetData() // 加载数据
  await Promise.all([getHomeBannerData(), guessRef.value?.getMore()]) // 关闭动画
  isTriggered.value = false
}

// 是否正在加载中标记
const isLoading = ref(false)
onLoad(async () => {
  isLoading.value = true
  await Promise.all([
    getHomeBannerData(),
    getSwData(),
    getHomeGoodsNewData(),
    getHomeGoodsJinpinData(),
    getHomeGoodsTopData(),
  ])
  isLoading.value = false
})
</script>

<template>
  <!-- 自定义导航栏 -->
  <!-- <CustomNavbar /> -->

  <scroll-view
    refresher-enabled
    @refresherrefresh="onRefresherrefresh"
    :refresher-triggered="isTriggered"
    @scrolltolower="onScrolltolower"
    class="scroll-view"
    scroll-y
  >
    <PageSkeleton v-if="isLoading" />
    <template v-else>
      <!-- boardCast -->
      <view class="boardCast">
        <image class="boardCast-image" src="@/static/images/boardCast.png"></image>
        <text class="boardCast-text">欢迎您光临米沙文创! 商品陆续上新中，敬请期待吧！</text>
      </view>
      <!-- i_banner -->
      <image class="i-banner-image" :src="i_banner_image"></image>
      <!-- 分类点击 -->
      <Classify :list="classifyList" />
      <!-- 搜索框 -->
      <navigator class="search" url="/pages/search/search">
        <view class="input">
          <text class="icon-sousuo">搜索商品</text>
        </view>
      </navigator>
      <!--自定义轮播图 -->
      <XtxSwiper :list="bannerList" />
      <!-- 新品速览 -->
      <NewSku :list="newSkuList" />
      <!-- 精品推荐 -->
      <RecSku :list="jinpinList" />
      <!-- 人气TOP热榜 -->
      <TopSku :list="topList" />
      <!-- 猜你喜欢模块 -->
      <XtxGuess ref="guessRef" />
      <!-- 门店/服务/联系方式/售后/ -->
      <Contact :w_url="w_url_image" />
    </template>
  </scroll-view>
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.scroll-view {
  flex: 1;
}
.boardCast {
  padding: 10rpx 40rpx;
  display: flex;
  align-items: center;
  .boardCast-image {
    width: 40rpx;
    height: 54rpx;
  }
  .boardCast-text {
    margin-left: 24rpx;
    font-size: 25rpx;
    color: #323233;
  }
}
.i-banner-image {
  height: 550rpx;
}

.search {
  padding: 20rpx 20rpx 20rpx;
  background-color: #fff;
  .input {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 64rpx;
    padding-left: 26rpx;
    color: #8b8b8b;
    font-size: 28rpx;
    border-radius: 32rpx;
    background-color: #f3f4f4;
  }
}
.icon-sousuo {
  &::before {
    font-size: 30rpx;
    margin-right: 10rpx;
  }
}
</style>
