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
export type BannerItem = {
  /** 跳转链接 */
  hrefUrl: string
  /** id */
  id: string
  /** 图片链接 */
  imgUrl: string
  /** 跳转类型 */
  type: number
}

/** 首页-前台类目数据类型 */
export type CategoryItem = {
  /** 图标路径 */
  icon: string
  /** id */
  id: string
  /** 分类名称 */
  name: string
}
