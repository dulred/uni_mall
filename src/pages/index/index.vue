<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app'
import CustomNavbar from './components/CustomNavbar.vue'
import { getHomeBannerAPI, getHomeCategoryAPI } from '@/services/home'
import type { BannerItem, CategoryItem } from '@/types/home'
import { ref } from 'vue'
import CategoryPanel from './components/CategoryPanel.vue'
// 获取轮播图数据
const bannerList = ref<BannerItem[]>([])

const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  bannerList.value = res.result
  console.log(res.result)
}

// 获取分类数据
const categoryList = ref<CategoryItem[]>([])
const getHomeCategoryData = async () => {
  const res = await getHomeCategoryAPI()
  categoryList.value = res.result
  console.log(res.result)
}

onLoad(() => {
  getHomeBannerData()
  getHomeCategoryData()
})
</script>

<template>
  <!-- 自定义导航栏 -->
  <CustomNavbar />
  <!--自定义轮播图 -->
  <XtxSwiper :list="bannerList" />
  <!-- 自定义导航栏 -->
  <CategoryPanel :list="categoryList" />
  <view class="index">index</view>
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
}
</style>
