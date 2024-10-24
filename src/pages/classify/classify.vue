<script lang="ts" setup>
import XtxGuess from '@/components/XtxGuess.vue'
import { getHomeGoodsGuessLikeAPI, getHomeGoodsSearchAPI } from '@/services/home'
import type { GoodsItem, PageParams, SearchParams } from '@/types/global'
import { onMounted, ref } from 'vue'
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

// 分页参数
const searchParams: Required<SearchParams> = {
  page: 1,
  pageSize: 6,
  val: query.val,
}
// 猜你喜欢数据列表
const goodsList = ref<GoodsItem[]>([])

// 获取猜你喜欢数据
const getHomeGoodsSearchData = async () => {
  const res = await getHomeGoodsSearchAPI(searchParams)
  // 数组追加
  goodsList.value = res.result.items
}
// 组件挂载完毕
onMounted(() => {
  getHomeGoodsSearchData()
})
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
  <scroll-view class="scroll-view" scroll-y>
    <view class="goods">
      <navigator
        class="guess-item"
        v-for="item in goodsList"
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
  </scroll-view>
  <!-- 数据组件展示 -->
  <text class="cc">
    {{ true ? '没有更多数据~' : '请等待数据加载' }}
  </text>
  <!-- 猜你喜欢 -->
  <XtxGuess />
</template>

<style lang="scss" scoped>
page {
  background-color: #f7f7f7;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.scroll-view {
  flex: 1;
}

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
  color: #0c0b26;
}

.icon-up.isUp::before {
  color: #c3a769;
}
.cc {
  text-align: center;
  font-size: 28rpx;
  color: #666;
  padding: 20rpx 0;
  display: block;
}

/* 商品数据 */
.goods {
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
</style>
