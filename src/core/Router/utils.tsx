import { ItemType } from 'antd/lib/menu/hooks/useItems'
import { cloneDeep } from 'lodash-es'
import { Items } from '../context/router'
import { Link } from 'react-router-dom'
import { AddItemArgs, DeepFilterRouteArgs, RoutesType, CustomRouteObject } from './type'

/** 添加item项 */
const addItem = (args: AddItemArgs) => {
	const { route, currentPath } = args
	const { name, icon, children } = route
	const o: ItemType = {
		key: currentPath,
		label: Array.isArray(children) ? name : <Link to={currentPath}>{name}</Link>,
		children: []
	}
	if (icon) {
		o.icon = icon
	}
	if (!children || !children?.length) {
		//@ts-ignore
		delete o.children
	}
	return o
}

/** 递归处理路由 */
export const deepFilterItems = (args: DeepFilterRouteArgs) => {
	const { route, leftItems, parentPath } = args
	const { name, layout, children, path, access } = route

	// 无权限
	// if (!access) return
	const currentPath = `${parentPath}/${path}`

	const o = addItem({ route, currentPath })
	leftItems.push(cloneDeep(o))

	const lastLeftItem = leftItems?.at(-1)
	const nextLeftItems = lastLeftItem?.children
	children?.forEach((child: any) => {
		const args: DeepFilterRouteArgs = {
			route: child,
			parentPath: currentPath,
			leftItems: nextLeftItems
			// routeAccess
		}
		deepFilterItems(args)
	})
}

/** 获取菜单配置项 */
export const getItems = (layoutReoutes: RoutesType) => {
	/** 找到layout需要使用的路由配置 */
	const leftItems: Items = []

	layoutReoutes.forEach(route => {
		deepFilterItems({
			route,
			leftItems,
			parentPath: ''
			// routeAccess: {}
		})
	})
	return { leftItems }
}

export const searchRoute = (path: string, routes: RoutesType): CustomRouteObject => {
	const pathList = path.split('?')[0].split('/')
	let lastStr = pathList.at(-1)
	const _deep = (routes: RoutesType) => {
		let result: CustomRouteObject = {}
		for (let i = 0; i < routes.length; i++) {
			const item = routes[i]
			const n = item.path?.match(/\/:/g)?.length || 0
			if (item.path?.includes('/:')) lastStr = pathList.at(-1 - n)
			if (item.path === lastStr) return item
			if (item.children?.length) {
				const res = _deep(item.children)
				if (Object.keys(res).length) result = res
			}
		}
		return result
	}
	return _deep(routes)
}
