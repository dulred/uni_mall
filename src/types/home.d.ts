/*
 * @Author: dulred dulred@qq.com
 * @Date: 2024-06-29 17:54:23
 * @LastEditors: dulred dulred@qq.com
 * @LastEditTime: 2024-06-29 17:54:31
 * @FilePath: \uni_mall\src\types\home.d.ts
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
/** 首页-广告区域数据类型 */
import type { GoodsItem } from './global'
export type BannerItem = {
  /** 跳转的商品id */
  goodsId: string
  /** 图片链接 */
  pictureUrl: string
}

// /** 首页-前台类目数据类型 */
// export type CategoryItem = {
//   /** 图标路径 */
//   icon: string
//   /** id */
//   id: string
//   /** 分类名称 */
//   name: string
// }

/** 首页-热门推荐数据类型 */
export type HotItem = {
  /** 说明 */
  alt: string
  /** id */
  id: string
  /** 图片集合[ 图片路径 ] */
  pictures: string[]
  /** 跳转地址 */
  target: string
  /** 标题 */
  title: string
  /** 推荐类型 */
  type: string
}

/** 猜你喜欢-商品类型 */
export type GuessItem = GoodsItem

/** 首页-分类商品模块 */
export type ClassifyItem = {
  /** 唯一id */
  id: string
  /** 类型id */
  type: string
  /** 图片路径 */
  src: string
  /** 标题 */
  title: string
}

/* 首页-首尾图片 */
export type SWItem = {
  /** 图片路径 */
  pictureUrl: string
  /** 图片类型  0 首图 1 尾图 */
  imgType: number
}
