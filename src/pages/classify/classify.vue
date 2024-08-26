<script lang="ts" setup>
import XtxGuess from '@/components/XtxGuess.vue'
import { ref } from 'vue'
//获取页面参数
const query = defineProps<{
  val: string
}>()

const index = ref(0)
const onTap = (val: number) => {
  index.value = val
  // 请求数据并且刷新数据
  if (val == 1) {
    isUp.value = !isUp.value
  }
}
const isUp = ref(true)
</script>

<template>
  <!-- 搜索框 -->
  <navigator class="search" url="/pages/search/search">
    <view class="input">
      <text class="icon-sousuo">{{ query.val ? query.val : '搜索商品' }}</text>
    </view>
  </navigator>
  <!-- tab展示 -->
  <view class="tabs">
    <!-- tab 1 -->
    <view class="tab" :class="{ active: index === 0 }" @tap="onTap(0)">
      <text class="text">综合</text>
    </view>
    <!-- tab 2 -->
    <view class="jiage_tab tab" :class="{ active: index === 1 }" @tap="onTap(1)">
      <view class="jiage text">
        <text class="text_jiage">价格</text>
        <view class="money">
          <text class="icon-up" :class="{ isUp: isUp }"></text>
          <text class="icon-up" :class="{ isUp: !isUp }"></text>
        </view>
      </view>
    </view>
    <!-- tab 3 -->
    <view class="tab" :class="{ active: index === 2 }" @tap="onTap(2)">
      <text class="text">销量</text>
    </view>
    <!-- tab 4 -->
    <view class="tab" :class="{ active: index === 3 }" @tap="onTap(3)">
      <text class="text">上新</text>
    </view>
  </view>
  <!-- 数据组件展示 -->
  <text class="cc">
    {{ true ? '没有更多数据~' : '请等待数据加载' }}
  </text>
  <!-- 猜你喜欢 -->
  <XtxGuess />
</template>

<style lang="scss" scoped>
.search {
  padding: 0 30rpx 20rpx;
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

.tabs {
  display: flex;
  justify-content: space-between;
  .tab {
    width: 33.33%;
    text-align: center;
    &.active text {
      color: #c3a769;
    }
    .text {
      color: #0c0b26;
      font-size: 26rpx;
    }
  }
}
.jiage_tab {
  display: flex;
  justify-content: center;
  &.active {
  }
}
.jiage {
  display: flex;
  align-items: center;
  .text_jiage {
    margin-right: 7rpx;
  }
  .money {
    display: flex;
    flex-direction: column;

    .text {
      color: #0c0b26;
      font-size: 26rpx;
    }
    text {
      &:nth-of-type(2) {
        transform: rotate(180deg);
      }
    }
  }
}
.icon-up:before {
  font-size: 17rpx;
}

.icon-up.isUp::before {
  color: red;
}
.cc {
  text-align: center;
  font-size: 28rpx;
  color: #666;
  padding: 20rpx 0;
  display: block;
}
</style>
