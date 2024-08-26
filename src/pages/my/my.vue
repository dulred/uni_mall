<script setup lang="ts">
import { useMemberStore } from '@/stores'
import { useGuessList } from '@/composables'
// 订单选项
const orderTypes = [
  { type: 1, text: '待付款', icon: 'icon-daifukuan' },
  { type: 2, text: '待发货', icon: 'icon-daifahuo' },
  { type: 3, text: '待收货', icon: 'icon-daishouhuo' },
  { type: 4, text: '待评价', icon: 'icon-daipingjia' },
]

//获取会员信息
const memberStore = useMemberStore()

// 猜你喜欢组合式函数
const { guessRef, onScrolltolower } = useGuessList()
</script>

<template>
  <scroll-view class="viewport" scroll-y enable-back-to-top @scrolltolower="onScrolltolower">
    <!-- 背景 -->
    <view class="view_bg">
      <image src="/static/images/center_bg.png" mode="scaleToFill" />
    </view>
    <!-- 个人资料 -->
    <view class="profile">
      <!-- 情况1：已登录 -->
      <view class="overview" v-if="memberStore.profile">
        <navigator url="/pagesMember/profile/profile" hover-class="none">
          <image class="avatar" mode="aspectFill" :src="memberStore.profile.avatar"></image>
        </navigator>
        <view class="meta">
          <view class="nickname">
            {{ memberStore.profile.nickname || memberStore.profile.account }}
          </view>
          <navigator class="extra" url="/pagesMember/profile/profile" hover-class="none">
            <text class="update">更新头像昵称</text>
          </navigator>
        </view>
      </view>
      <!-- 情况2：未登录 -->
      <view class="overview" v-else>
        <navigator url="/pages/login/login" hover-class="none">
          <image class="avatar gray" mode="aspectFill" src="@/static/images/misha_logo.png"></image>
        </navigator>
        <view class="meta">
          <navigator url="/pages/login/login" hover-class="none" class="nickname">
            未登录
          </navigator>
          <view class="extra">
            <text class="tips">点击头像登录账号</text>
          </view>
        </view>
      </view>
      <navigator class="settings" url="/pagesMember/settings/settings" hover-class="none">
        设置
      </navigator>
    </view>
    <!-- 我的订单 -->
    <view class="orders">
      <view class="title">
        我的订单
        <navigator class="navigator" url="/pagesOrder/list/list?type=0" hover-class="none">
          查看全部订单<text class="icon-right"></text>
        </navigator>
      </view>
      <view class="section">
        <!-- 订单 -->
        <navigator
          v-for="item in orderTypes"
          :key="item.type"
          :class="item.icon"
          :url="`/pagesOrder/list/list?type=${item.type}`"
          class="navigator"
          hover-class="none"
        >
          {{ item.text }}
        </navigator>
        <!-- 客服 -->
        <button class="contact icon-tuihuoshouhou" open-type="contact">售后</button>
      </view>
    </view>
    <!-- 列表 -->
    <view class="my_list">
      <view class="_l l_1">
        <navigator class="section" url="/pages/cart/cart2" hover-class="none">
          <view class="i_t icon-gouwuche">购物车</view>
          <text class="icon-right"></text>
        </navigator>
        <!-- <view class="section">
            <view class="i_t icon-handset">推广员中心</view>
            <text class="icon-right"></text>
          </view> -->
      </view>
      <view class="_l l_2">
        <navigator class="section" url="/pagesMember/address/address">
          <view class="i_t icon-dizhi">收货地址</view>
          <text class="icon-right"></text>
        </navigator>
      </view>
      <view class="_l l_3">
        <navigator class="section" url="/pagesMember/profile/profile">
          <view class="i_t icon-gerenxinxi1">个人信息</view>
          <text class="icon-right"></text>
        </navigator>
        <navigator class="section" url="/pagesMember/settings/settings">
          <view class="i_t icon-shezhi">账号与安全</view>
          <text class="icon-right"></text>
        </navigator>
      </view>
    </view>
    <!-- 公众号 -->
    <!-- <view class="gongzhonghao">
        <text class="t_text">米沙文创商城的公众号</text>
        <view class="g_content">
          <view class="g_left">
              <image
                src="@/static/images/misha_logo.png"
                mode="scaleToFill"
              />
              <text>米沙文创商城</text>
          </view>
          <view class="g_right">
              关注
          </view>
        </view>
     </view> -->
    <!-- 猜你喜欢 -->
    <view class="guess">
      <XtxGuess ref="guessRef" />
    </view>
  </scroll-view>
</template>

<style lang="scss">
page {
  height: 100%;
  overflow: hidden;
  background-color: #f7f7f8;
}

.viewport {
  position: relative;
  height: 100%;
  .view_bg {
    position: absolute;
    width: 100%;
    height: 404rpx;
    top: 0px;
    image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}

/* 用户信息 */
.profile {
  margin-top: 20rpx;
  position: relative;
  padding-top: 60rpx;

  .overview {
    display: flex;
    height: 120rpx;
    padding: 0 36rpx;
    color: #fff;
  }

  .avatar {
    width: 120rpx;
    height: 120rpx;
    border-radius: 50%;
    background-color: #eee;
  }

  .gray {
    filter: grayscale(100%);
  }

  .meta {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    line-height: 30rpx;
    padding: 16rpx 0;
    margin-left: 20rpx;
  }

  .nickname {
    max-width: 350rpx;
    margin-bottom: 16rpx;
    font-size: 30rpx;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .extra {
    display: flex;
    font-size: 20rpx;
  }

  .tips {
    font-size: 22rpx;
  }

  .update {
    padding: 3rpx 10rpx 1rpx;
    color: rgba(255, 255, 255, 0.8);
    border: 1rpx solid rgba(255, 255, 255, 0.8);
    margin-right: 10rpx;
    border-radius: 30rpx;
  }

  .settings {
    position: absolute;
    bottom: 0;
    right: 40rpx;
    font-size: 30rpx;
    color: #fff;
  }
}

/* 我的订单 */
.orders {
  position: relative;
  z-index: 99;
  padding: 30rpx;
  margin: 50rpx 20rpx 0;
  background-color: #fff;
  border-radius: 10rpx;
  box-shadow: 0 4rpx 6rpx rgba(240, 240, 240, 0.6);

  .title {
    height: 40rpx;
    line-height: 40rpx;
    font-size: 28rpx;
    color: #1e1e1e;

    .navigator {
      font-size: 24rpx;
      color: #939393;
      float: right;
    }
  }

  .section {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 40rpx 0rpx 10rpx;
    .navigator,
    .contact {
      padding: 0px;
      margin: 0px;
      border: 0px;
      border-radius: 0px;
      line-height: normal;
      width: 125rpx;
      height: 125rpx;
      flex-flow: column;
      display: flex;
      align-items: center;
      background-color: #f6f7f9;
      text-align: center;
      font-size: 24rpx;
      justify-content: center;
      color: #333;

      &::before {
        display: block;
        font-size: 43rpx;
        color: #797a7b;
        margin-bottom: 7rpx;
      }
    }
  }
}

// my_list
.my_list {
  ._l {
    width: 100%;
    margin-bottom: 20rpx;
    .section {
      background-color: #fff;
      padding: 40rpx 20rpx;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #ddd;
      &:last-of-type {
        border-bottom: 0px;
      }
      .i_t {
        display: flex;
        align-items: center;
        font-size: 30rpx;
        color: #0c0b26;
        &::before {
          margin-right: 10rpx;
          font-size: 44rpx;
        }
      }
    }
  }
}

// gongzhonghao
.gongzhonghao {
  display: none;
  .t_text {
  }
}

/* 猜你喜欢 */
.guess {
  background-color: #f7f7f8;
  margin-top: 20rpx;
}
</style>
