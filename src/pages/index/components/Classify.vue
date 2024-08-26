<script setup lang="ts">
import type { ClassifyItem } from '@/types/home'

// 定义 props 接收数据
defineProps<{
  list: ClassifyItem[]
}>()
</script>

<template>
  <view class="classify">
    <view class="item" v-for="item in list" :key="item.id">
      <navigator
        hover-class="none"
        :url="`/pages/classify/classify?type=${item.type}`"
        class="class-cards"
      >
        <image :key="item.src" class="image" mode="aspectFit" :src="item.src"></image>
        <text>
          {{ item.title }}
        </text>
      </navigator>
    </view>
  </view>
</template>
<style lang="scss">
.classify {
  padding: 70rpx 0rpx 20rpx;
  background-color: #ebdbb9;
  display: flex;
  flex-flow: wrap;
  .item {
    width: 25%;
    margin-bottom: 50rpx;
  }
  .class-cards {
    display: flex;
    flex-direction: column;
    align-items: center;
    image {
      width: 65rpx;
      height: 65rpx;
    }
    text {
      color: #0c0b26;
      font-size: 24rpx;
      text-align: center;
      line-height: 28rpx;
      margin-top: 10rpx;
    }
  }
}
</style>
