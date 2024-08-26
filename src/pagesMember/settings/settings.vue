<script setup lang="ts">
import { useMemberStore } from '@/stores'

const memberStore = useMemberStore()
//退出登录
const onLogout = () => {
  //模态弹窗
  uni.showModal({
    content: '是否退出登录?',
    success: (res) => {
      if (res.confirm) {
        //清理用户信息
        memberStore.clearProfile()
        //返回上一页
        uni.navigateBack()
      }
    },
  })
}
</script>

<template>
  <view class="viewport">
    <!-- 列表1 -->
    <view class="list" v-if="memberStore.profile">
      <navigator url="/pagesMember/address/address" hover-class="none" class="item">
        我的收货地址<text class="icon-right"></text>
      </navigator>
    </view>
    <!-- 列表2 -->
    <view class="list">
      <button hover-class="none" class="item" open-type="openSetting">
        授权管理<text class="icon-right"></text>
      </button>
      <button hover-class="none" class="item" open-type="feedback">
        问题反馈<text class="icon-right"></text>
      </button>
      <button hover-class="none" class="item" open-type="contact">
        联系我们<text class="icon-right"></text>
      </button>
    </view>
    <!-- 列表3 -->
    <view class="list">
      <navigator hover-class="none" class="item" url=" "
        >关于文旅文创<text class="icon-right"></text
      ></navigator>
    </view>
    <!-- 操作按钮 -->
    <view class="action">
      <view class="button" @tap="onLogout" v-if="memberStore.profile">退出登录</view>
    </view>
  </view>
</template>

<style lang="scss">
page {
  background-color: #f4f4f4;
}

.viewport {
  padding: 20rpx;
}

/* 列表 */
.list {
  padding: 0 20rpx;
  background-color: #fff;
  margin-bottom: 20rpx;
  border-radius: 10rpx;
  .item {
    padding-right: 0px;
    line-height: 90rpx;
    padding-left: 10rpx;
    font-size: 30rpx;
    color: #333;
    border-top: 1rpx solid #ddd;
    position: relative;
    text-align: left;
    border-radius: 0;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    &:first-child {
      border: none;
    }
  }
}

/* 操作按钮 */
.action {
  text-align: center;
  line-height: 90rpx;
  margin-top: 40rpx;
  font-size: 32rpx;
  color: #333;
  .button {
    background-color: #fff;
    margin-bottom: 20rpx;
    border-radius: 10rpx;
  }
}
</style>
