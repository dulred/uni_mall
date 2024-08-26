<script lang="ts" setup>
import { ref } from 'vue'
const val = ref('')
const onInput = (e: any) => {
  val.value = e.detail.value
}
const onSearch = (e: any) => {
  console.log(e.detail.value)
  // 跳转到搜索结果列表页
  uni.navigateTo({ url: `/pages/classify/classify?val=${val.value}` })
}
const onSousuo = () => {
  console.log('搜索')
  // 跳转到搜索结果列表页
  uni.navigateTo({ url: `/pages/classify/classify?val=${val.value}` })
}
const toDetail = (type: number, index: any) => {
  if (type === 1) {
    console.log('跳转到详情页' + index + 'index 对应的值' + recentList.value[index])
    val.value = recentList.value[index]
  } else {
    console.log('跳转到详情页' + index + 'index 对应的值' + hotList.value[index])
    val.value = hotList.value[index]
  }
  uni.navigateTo({ url: `/pages/classify/classify?val=${val.value}` })
}

const recentList = ref(['古董', '关羽大大大', '黑神话悟空手办'])
const hotList = ref(['天煞古董'])
</script>
<template>
  <view class="goodsSearch">
    <!-- 搜索框 -->
    <view class="search-box">
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
      <view class="souso" @tap="onSousuo">搜索</view>
    </view>
    <!-- 最近搜索 -->
    <view class="commonSearch">
      <view class="top">
        <text class="icon-lajitong">最近搜索</text>
      </view>
      <view class="content">
        <view class="item" v-for="(item, index) in recentList" :key="index">
          <text @tap="toDetail(1, index)">{{ item }}</text>
        </view>
      </view>
    </view>
    <!-- 热门搜索 -->
    <view class="commonSearch">
      <view class="top">
        <text>热门搜索</text>
      </view>
      <view class="content">
        <view class="item" v-for="(item, index) in hotList" :key="index">
          <text @tap="toDetail(2, index)">{{ item }}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.search-box {
  display: flex;
  align-items: center;
  margin-bottom: 30rpx;
  .search {
    width: 645rpx;
  }
  .souso {
    color: #c3a769;
    font-size: 26rpx;
    border: 1px solid #c3a769;
    padding: 11rpx;
    border-radius: 20rpx;
  }
}
.search {
  padding: 20rpx 10rpx 20rpx 30rpx;
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

.commonSearch {
  margin-bottom: 50rpx;
  padding: 0 20rpx;
  .top {
    display: flex;
    justify-content: space-between;

    text {
      font-size: 33rpx;
      color: #0c0b26;
      font-weight: bold;
      margin-bottom: 14rpx;
    }
  }
  .content {
    display: flex;

    flex-flow: wrap;

    .item {
      background-color: #f1f1f1;
      margin-right: 20rpx;
      margin-bottom: 20rpx;
      padding: 7px 15px;
      font-size: 28rpx;
    }
  }
}
</style>
