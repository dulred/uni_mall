<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getHomeGoodsGuessLikeAPI } from '@/services/home'
import type { GuessItem } from '@/types/home'
import type { PageParams } from '@/types/global'
// 分页参数
const pageParams: Required<PageParams> = {
  page: 35,
  pageSize: 10,
}
// 猜你喜欢数据列表
const guessList = ref<GuessItem[]>([])
// 已结束标记
const finish = ref(false)
// 获取猜你喜欢数据
const getHomeGoodsGuessLikeData = async () => {
  // 退出分页判断
  if (finish.value === true) {
    return uni.showToast({ icon: 'none', title: '没有更多精选产品~' })
  }
  const res = await getHomeGoodsGuessLikeAPI(pageParams)
  // 数组追加
  guessList.value.push(...res.result.items)
  // 分页条件
  if (pageParams.page < res.result.pages) {
    // 页码累加
    pageParams.page++
  } else {
    finish.value = true
  }
}
// 重置数据
const resetData = () => {
  pageParams.page = 1
  guessList.value = []
  finish.value = false
}
// 组件挂载完毕
onMounted(() => {
  getHomeGoodsGuessLikeData()
})

defineExpose({
  resetData,
  getMore: getHomeGoodsGuessLikeData,
})
</script>

<template>
  <!-- 猜你喜欢 -->
  <view class="caption">
    <text class="text">更多精选商品</text>
  </view>
  <view class="guess">
    <navigator
      class="guess-item"
      v-for="item in guessList"
      :key="item.id"
      :url="`/pages/goods/goods?id=${item.id}`"
    >
      <image class="image" mode="aspectFill" :src="item.picture"></image>
      <view class="right">
        <view class="name"> {{ item.name }} </view>
        <view class="price">
          <text class="small">¥</text>
          <text>{{ item.price }} </text>
        </view>
      </view>
    </navigator>
  </view>
  <view class="loading-text">{{ finish ? '没有更多精选产品~' : '正在加载...' }} </view>
</template>

<style lang="scss">
:host {
  display: block;
}
/* 分类标题 */
.caption {
  display: flex;
  justify-content: center;
  line-height: 1;
  padding: 36rpx 0 40rpx;
  font-size: 32rpx;
  color: #262626;
  .text {
    font-size: 28rpx;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0rpx 20rpx;
    width: 100%;

    &::before,
    &::after {
      content: '';
      position: relative;
      width: 235rpx;
      height: 2rpx;
      margin: 0 10rpx;
      background-color: #d6d6d6;
      margin-top: 0px;
      margin-right: 5px;
      margin-bottom: 0px;
      margin-left: 5px;
    }
  }
}

/* 猜你喜欢 */
.guess {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 20rpx;
  .guess-item {
    border-radius: 20rpx;
    width: 345rpx;
    padding: 24rpx 20rpx 20rpx;
    margin-bottom: 20rpx;
    overflow: hidden;
    background-color: #fff;
  }
  .image {
    width: 304rpx;
    height: 304rpx;
    border-radius: 20rpx;
  }
  .right {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .name {
      width: 100%;
      margin: 10rpx 0;
      color: #0c0b26;
      font-size: 26rpx;
      text-align: center;
      line-height: 28rpx;
      white-space: nowrap; /* 强制文本在一行显示 */
      overflow: hidden; /* 隐藏超出容器范围的文本 */
      text-overflow: ellipsis; /* 使用省略号代替被隐藏的文本 */
    }
    .price {
      line-height: 1;
      padding-top: 4rpx;
      color: #c3a769;
      font-size: 26rpx;
    }
    .small {
      font-size: 26rpx;
    }
  }
}
// 加载提示文字
.loading-text {
  text-align: center;
  font-size: 28rpx;
  color: #666;
  padding: 20rpx 0;
}
</style>
