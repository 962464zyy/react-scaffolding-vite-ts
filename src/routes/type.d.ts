import React, { CSSProperties } from 'react'
import { RouteObject } from 'react-router-dom'

export type WithFalse<T> = T | false

/** 菜单数据 */
export interface MenuDataItem extends RouteObject {
	/** 子菜单 */
	routes?: MenuDataItem[]
	children?: MenuDataItem[]
	/** 在菜单中隐藏子节点 */
	hideChildrenInMenu?: boolean
	/** 在菜单中隐藏自己和子节点 */
	hideInMenu?: boolean
	/** 在面包屑中隐藏 */
	hideInBreadcrumb?: boolean
	/** 菜单的icon */
	icon?: React.ReactNode | string
	extraIcon?: React.ReactNode | string
	/** 菜单的名字 */
	name?: React.ReactNode | string
	key?: string
	/** 是否禁用菜单 */
	disabled?: boolean
	/** 点击菜单 路径，可以设定为网页链接 */
	onClick?: () => void
	/** 路径 */
	path?: string
	/** 指定外链打开形式，同a标签 */
	target?: string
	/** 路由鉴权 是否需要登录 */
	auth?: boolean
	/** 路由权限 */
	access?: boolean
	/** 重定向 */
	redirect?: string
	/** 组件路径 同React Router V6 继承RouteObject */
}

/** 自定义路由表类型 */
export interface CustomRouteObject extends MenuDataItem {
	routes?: CustomRouteObject[]
	layout?: WithFalse<{
		hasSiderMenu?: boolean
		hasTopMenu?: boolean
		contentStyle?: CSSProperties
	}>
}
