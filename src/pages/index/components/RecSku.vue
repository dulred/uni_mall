<script setup lang="ts">
import type { GoodsItem } from '@/types/global'
import Title from './subComponents/Title.vue'
// 定义 props 接收数据
defineProps<{
  list: GoodsItem[]
}>()
const mainTitle = '精品推荐'
const subTitle = '雅物佳礼 满满心意'
</script>

<template>
  <view class="reSku">
    <Title :mainTitle="mainTitle" :subTitle="subTitle" />
    <view class="layout_reSku">
      <navigator
        class="goods-item"
        v-for="item in list"
        :key="item.id"
        :url="`/pages/goods/goods?id=${item.id}`"
      >
        <image class="image" mode="aspectFill" :src="item.pictureUrl"></image>
        <view class="right">
          <view class="name"> {{ item.name }} </view>
          <view class="price">
            <text class="small">¥</text>
            <text>{{ item.price }} </text>
          </view>
        </view>
      </navigator>
    </view>
  </view>
</template>

<style lang="scss">
.reSku {
  .layout_reSku {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  padding: 0 20rpx;
  margin-bottom: 16rpx;
  navigator {
    width: 49%;
    margin-bottom: 2%;
    padding: 20rpx;
    background-color: #fff;
    border-radius: 20rpx;
    box-shadow: 0 0 3px #e4e1e1;
    .image {
      width: 304rpx;
      height: 304rpx;
      border-radius: 20rpx;
      margin-bottom: 20rpx;
    }
    .right {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .name {
        width: 100%;
        color: #0c0b26;
        margin-bottom: 10rpx;
        font-size: 26rpx;
        white-space: nowrap; /* 强制文本在一行显示 */
        overflow: hidden; /* 隐藏超出容器范围的文本 */
        text-overflow: ellipsis; /* 使用省略号代替被隐藏的文本 */
      }

      .price {
        text {
          color: #c3a769;
          font-size: 35rpx;
        }
        .small {
          color: #c3a769;
          font-size: 35rpx;
        }
      }
    }
  }
}
</style>
