<template>
  <view class="orderSearch">
    <!-- 搜索框 -->
    <view class="search">
      <view class="icon-sousuo"></view>
      <input
        class="input"
        type="text"
        placeholder="搜索订单"
        confirm-type="search"
        @confirm="onSearch"
        @input="onInput"
      />
    </view>

    <!-- more -->
    <XtxGuess />
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const val = ref('')
const onInput = (e: any) => {
  val.value = e.detail.value
}
const onSearch = (e: any) => {
  console.log(e.detail.value)
  // 跳转到搜索结果列表页
  uni.navigateTo({ url: `/pagesOrder/list/list?val=${val.value}` })
}
</script>

<style lang="scss" scoped>
.search {
  padding: 20rpx 30rpx 20rpx;
  background-color: #fff;
  position: relative;
  .input {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 64rpx;
    padding-left: 60rpx;
    color: #8b8b8b;
    font-size: 28rpx;
    border-radius: 32rpx;
    background-color: #f3f4f4;
  }
}
.icon-sousuo {
  position: absolute;
  left: 53rpx;
  top: 35rpx;
  &::before {
    font-size: 30rpx;
    margin-right: 10rpx;
  }
}
</style>
