<script setup lang="ts">
// 定义 props 接收数据
defineProps<{
  mainTitle: string
  subTitle: string
}>()
</script>

<template>
  <view class="title">
    <!-- <image
            class="image"
            mode="aspectFit"
            src="xx"
          ></image> -->
    <text class="mainTitle">{{ mainTitle }}</text>
    <text class="subTitle">{{ subTitle }}</text>
  </view>
</template>
<style lang="scss">
.title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #a78a4d;
  border-radius: 100rpx;
  padding: 20rpx 15rpx;
  margin: 40rpx 0 30rpx;
  .mainTitle {
    color: #fff;
    font-size: 45rpx;
    margin-bottom: 10rpx;
    letter-spacing: 10rpx;
    font-weight: bold;
  }
  .subTitle {
    color: #eadab8;
    font-size: 24rpx;
  }
}
</style>
