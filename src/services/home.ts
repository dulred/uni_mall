/*
 * @Author: dulred dulred@qq.com
 * @Date: 2024-06-29 17:53:36
 * @LastEditors: dulred dulred@qq.com
 * @LastEditTime: 2024-06-29 17:53:48
 * @FilePath: \uni_mall\src\services\home.ts
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
// 存放路径: src/services/home.ts
import type { BannerItem } from '@/types/home'
import { http } from '@/utils/http'
/**
 * 首页-广告区域-小程序
 * @param distributionSite 广告区域展示位置（投放位置 投放位置，1为首页，2为分类商品页） 默认是1
 */
export const getHomeBannerAPI = (distributionSite = 1) => {
  return http<BannerItem[]>({
    method: 'GET',
    url: '/home/banner',
    data: {
      distributionSite,
    },
  })
}