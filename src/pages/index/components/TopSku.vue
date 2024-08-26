<script setup lang="ts">
import type { GoodsItem } from '@/types/global'
import Title from './subComponents/Title.vue'
// 定义 props 接收数据
defineProps<{
  list: GoodsItem[]
}>()
const mainTitle = '人气TOP排行榜'
const subTitle = '门店热销榜单'
</script>

<template>
  <view class="topSku">
    <Title :mainTitle="mainTitle" :subTitle="subTitle" />
    <navigator
      class="goods-item"
      v-for="item in list"
      :key="item.id"
      :url="`/pages/goods/goods?id=${item.id}`"
    >
      <image class="image" mode="aspectFill" :src="item.picture"></image>
      <view class="right">
        <view class="name"> {{ item.name }} </view>
        <view class="r_bottom">
          <view class="price">
            <text class="small">¥</text>
            <text>{{ item.price }} </text>
          </view>
          <view class="cart">
            <image src="@/static/images/cart.png" mode="scaleToFill" />
            <text> 立即购买 </text>
          </view>
        </view>
        <view class="sold"> 已售{{ item.orderNum }}件 </view>
      </view>
    </navigator>
  </view>
</template>

<style lang="scss">
.topSku {
  padding: 0 20rpx;
  margin-bottom: 16rpx;
  navigator {
    display: flex;
    align-items: center;
    margin-bottom: 20rpx;
    padding: 20rpx;
    background-color: #fff;
    border-radius: 20rpx;
    box-shadow: 0 0 3px #e4e1e1;
    .image {
      width: 304rpx;
      height: 304rpx;
      margin-right: 26rpx;
      border-radius: 20rpx;
    }
    .right {
      width: 338rpx;
      .name {
        color: #0c0b26;
        margin-bottom: 30rpx;
        font-size: 26rpx;
        white-space: nowrap; /* 强制文本在一行显示 */
        overflow: hidden; /* 隐藏超出容器范围的文本 */
        text-overflow: ellipsis; /* 使用省略号代替被隐藏的文本 */
      }
      .r_bottom {
        display: flex;
        align-items: center;
        justify-content: space-between;
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
        .cart {
          background-color: #c3a769;
          display: flex;
          align-items: center;
          padding: 10rpx 18rpx;
          border-radius: 100rpx;
          image {
            width: 35rpx;
            height: 35rpx;
            margin-right: 10rpx;
          }
          text {
            font-size: 26rpx;
            color: #fff;
            font-weight: bold;
          }
        }
      }
      .sold {
        font-size: 28rpx;
        color: #ff4444;
        margin-top: 20rpx;
      }
    }
  }
}
</style>
