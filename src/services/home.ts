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
import type { BannerItem, GuessItem, SWItem } from '@/types/home'
import type { PageResult, PageParams, GoodsItem, SearchParams } from '@/types/global'
import { http } from '@/utils/http'
/**
 * 首页-广告区域-小程序
 * @param distributionSite 广告区域展示位置（投放位置 投放位置，1为首页，2为分类商品页） 默认是1
 */
export const getHomeBannerAPI = (distributionSite = 1) => {
  return http<BannerItem[]>({
    method: 'GET',
    url: '/ntk/carousel',
    data: {
      distributionSite,
    },
  })
}

/*
  获取首尾数据
 */
export const getSwAPI = () => {
  return http<SWItem[]>({
    method: 'GET',
    url: '/ntk/sw/first_last_show',
  })
}

/**
 * 更多精选推荐-小程序
 */
export const getHomeGoodsGuessLikeAPI = (data?: PageParams) => {
  return http<PageResult<GuessItem>>({
    method: 'GET',
    url: '/ntk/goods/guessLike',
    data,
  })
}

/**
 * 新品速览-小程序
 */
export const getHomeGoodsNewAPI = (data?: PageParams) => {
  return http<PageResult<GuessItem>>({
    method: 'GET',
    url: '/ntk/goods/new',
    data,
  })
}

/**
 *  精品推荐-小程序
 */
export const getHomeGoodsJinpinAPI = (data?: PageParams) => {
  return http<PageResult<GuessItem>>({
    method: 'GET',
    url: '/ntk/goods/jinpin',
    data,
  })
}

/**
 * 人气top-小程序
 */
export const getHomeGoodsTopAPI = (data?: PageParams) => {
  return http<PageResult<GuessItem>>({
    method: 'GET',
    url: '/ntk/goods/top',
    data,
  })
}

/**
 * 同类推荐-小程序
 */
export const getHomeGoodsSimilarAPI = (data?: PageParams) => {
  return http<PageResult<GuessItem>>({
    method: 'GET',
    url: '/ntk/goods/similar',
    data,
  })
}

/**
 * 商品搜索
 */
export const getHomeGoodsSearchAPI = (data?: SearchParams) => {
  return http<PageResult<GoodsItem>>({
    method: 'POST',
    url: '/ntk/goods/search',
    data,
  })
}
