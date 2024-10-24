<!--
此文件为开发者工具生成，生成时间: 2024/8/29下午6:02:35
使用方法：
在 D:\dulred\dev\source\wx_Mini_Program\uni_mall\dist\dev\mp-weixin\pages\index\index.wxml 引入模板

```
<import src="index.skeleton.wxml"/>
<template is="skeleton" wx:if="{{loading}}" />
```

在 D:\dulred\dev\source\wx_Mini_Program\uni_mall\dist\dev\mp-weixin\pages\index\index.wxss 中引入样式
```
@import "./index.skeleton.wxss";
```

更多详细信息可以参考文档：https://developers.weixin.qq.com/miniprogram/dev/devtools/skeleton.html
-->
<template name="skeleton">
  <view class="sk-container">
    <scroll-view
      refresher-enabled="true"
      scroll-y="true"
      class="scroll-view scroll-view"
      enable-back-to-top="true"
    >
      <view class="boardCast boardCast">
        <image class="boardCast-image sk-image"></image>
        <text class="boardCast-text sk-transparent sk-text-14-2857-65 sk-text"
          >欢迎您光临米沙文创! 商品陆续上新中，敬请期待吧！</text
        >
      </view>
      <image class="i-banner-image sk-image"></image>
      <view is="pages/index/components/Classify">
        <view class="classify Classify--classify">
          <view class="item Classify--item">
            <navigator class="class-cards Classify--class-cards" hover-class="none">
              <image class="image Classify--image sk-image" mode="aspectFit"></image>
              <text
                class="sk-transparent sk-text-7-1429-5 sk-text"
                style="background-position-x: 50%"
                >米沙文创</text
              >
            </navigator>
          </view>
          <view class="item Classify--item">
            <navigator class="class-cards Classify--class-cards" hover-class="none">
              <image class="image Classify--image sk-image" mode="aspectFit"></image>
              <text
                class="sk-transparent sk-text-7-1429-312 sk-text"
                style="background-position-x: 50%"
                >书籍文房</text
              >
            </navigator>
          </view>
          <view class="item Classify--item">
            <navigator class="class-cards Classify--class-cards" hover-class="none">
              <image class="image Classify--image sk-image" mode="aspectFit"></image>
              <text
                class="sk-transparent sk-text-7-1429-629 sk-text"
                style="background-position-x: 50%"
                >教育益智</text
              >
            </navigator>
          </view>
          <view class="item Classify--item">
            <navigator class="class-cards Classify--class-cards" hover-class="none">
              <image class="image Classify--image sk-image" mode="aspectFit"></image>
              <text
                class="sk-transparent sk-text-7-1429-324 sk-text"
                style="background-position-x: 50%"
                >休闲小食</text
              >
            </navigator>
          </view>
          <view class="item Classify--item">
            <navigator class="class-cards Classify--class-cards" hover-class="none">
              <image class="image Classify--image sk-image" mode="aspectFit"></image>
              <text
                class="sk-transparent sk-text-7-1429-482 sk-text"
                style="background-position-x: 50%"
                >日用家居</text
              >
            </navigator>
          </view>
          <view class="item Classify--item">
            <navigator class="class-cards Classify--class-cards" hover-class="none">
              <image class="image Classify--image sk-image" mode="aspectFit"></image>
              <text
                class="sk-transparent sk-text-7-1429-955 sk-text"
                style="background-position-x: 50%"
                >杯具茶饮</text
              >
            </navigator>
          </view>
          <view class="item Classify--item">
            <navigator class="class-cards Classify--class-cards" hover-class="none">
              <image class="image Classify--image sk-image" mode="aspectFit"></image>
              <text
                class="sk-transparent sk-text-7-1429-2 sk-text"
                style="background-position-x: 50%"
                >ip系列</text
              >
            </navigator>
          </view>
          <view class="item Classify--item">
            <navigator class="class-cards Classify--class-cards" hover-class="none">
              <image class="image Classify--image sk-image" mode="aspectFit"></image>
              <text
                class="sk-transparent sk-text-7-1429-386 sk-text"
                style="background-position-x: 50%"
                >文物周边</text
              >
            </navigator>
          </view>
        </view>
      </view>
      <navigator class="search search">
        <view class="input input">
          <text
            class="icon-sousuo sk-transparent sk-text-14-2857-520 sk-text sk-pseudo sk-pseudo-circle"
            >搜索商品</text
          >
        </view>
      </navigator>
      <view is="components/XtxSwiper">
        <view class="carousel XtxSwiper--carousel">
          <swiper circular="true" interval="3000" current="0" autoplay="false">
            <swiper-item
              style="
                position: absolute;
                width: 100%;
                height: 100%;
                transform: translate(0%, 0px) translateZ(0px);
              "
            >
              <navigator class="navigator XtxSwiper--navigator" hover-class="none">
                <image class="image XtxSwiper--image sk-image" mode="aspectFill"></image>
              </navigator>
            </swiper-item>
          </swiper>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<style>
/*
此文件为开发者工具生成，生成时间: 2024/8/29下午6:02:35

在 D:\dulred\dev\source\wx_Mini_Program\uni_mall\dist\dev\mp-weixin\pages\index\index.wxss 中引入样式
```
@import "./index.skeleton.wxss";
```

更多详细信息可以参考文档：https://developers.weixin.qq.com/miniprogram/dev/devtools/skeleton.html
*/
.sk-transparent {
  color: transparent !important;
}
.sk-text-14-2857-65 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}
.sk-text-7-1429-5 {
  background-image: linear-gradient(
    transparent 7.1429%,
    #eeeeee 0%,
    #eeeeee 92.8571%,
    transparent 0%
  ) !important;
  background-size: 100% 28rpx;
  position: relative !important;
}
.sk-text-7-1429-312 {
  background-image: linear-gradient(
    transparent 7.1429%,
    #eeeeee 0%,
    #eeeeee 92.8571%,
    transparent 0%
  ) !important;
  background-size: 100% 28rpx;
  position: relative !important;
}
.sk-text-7-1429-629 {
  background-image: linear-gradient(
    transparent 7.1429%,
    #eeeeee 0%,
    #eeeeee 92.8571%,
    transparent 0%
  ) !important;
  background-size: 100% 28rpx;
  position: relative !important;
}
.sk-text-7-1429-324 {
  background-image: linear-gradient(
    transparent 7.1429%,
    #eeeeee 0%,
    #eeeeee 92.8571%,
    transparent 0%
  ) !important;
  background-size: 100% 28rpx;
  position: relative !important;
}
.sk-text-7-1429-482 {
  background-image: linear-gradient(
    transparent 7.1429%,
    #eeeeee 0%,
    #eeeeee 92.8571%,
    transparent 0%
  ) !important;
  background-size: 100% 28rpx;
  position: relative !important;
}
.sk-text-7-1429-955 {
  background-image: linear-gradient(
    transparent 7.1429%,
    #eeeeee 0%,
    #eeeeee 92.8571%,
    transparent 0%
  ) !important;
  background-size: 100% 28rpx;
  position: relative !important;
}
.sk-text-7-1429-2 {
  background-image: linear-gradient(
    transparent 7.1429%,
    #eeeeee 0%,
    #eeeeee 92.8571%,
    transparent 0%
  ) !important;
  background-size: 100% 28rpx;
  position: relative !important;
}
.sk-text-7-1429-386 {
  background-image: linear-gradient(
    transparent 7.1429%,
    #eeeeee 0%,
    #eeeeee 92.8571%,
    transparent 0%
  ) !important;
  background-size: 100% 28rpx;
  position: relative !important;
}
.sk-text-14-2857-520 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 39.2rpx;
  position: relative !important;
}
.sk-image {
  background: #efefef !important;
}
.sk-pseudo::before,
.sk-pseudo::after {
  background: #efefef !important;
  background-image: none !important;
  color: transparent !important;
  border-color: transparent !important;
}
.sk-pseudo-rect::before,
.sk-pseudo-rect::after {
  border-radius: 0 !important;
}
.sk-pseudo-circle::before,
.sk-pseudo-circle::after {
  border-radius: 50% !important;
}
.sk-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: transparent;
}
</style>
