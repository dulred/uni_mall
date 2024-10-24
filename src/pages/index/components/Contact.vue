<script setup lang="ts">
defineProps<{
  w_url: string
}>()
</script>

<template>
  <view class="contact">
    <image class="dingzhi" :src="w_url" mode="scaleToFill" />
  </view>
</template>

<style lang="scss">
.contact {
  padding: 0 20px;
  .dingzhi {
    width: 100%;
    height: 900rpx;
  }
}
</style>
