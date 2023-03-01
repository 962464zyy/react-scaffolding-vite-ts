import { FC, useEffect, useState } from 'react'
import { Route, Routes } from 'react-router'
import routes from '../../../routes'
import { useGlobal } from '../../context/global'
import { Provider } from '../../context/router'
import { getItems } from '../utils'

const initState = {
	leftItems: [],
	topItems: [],
	routeAccess: {}
}

const RouterView: FC<any> = () => {
	const {
		globalState: { routeAccess }
	} = useGlobal()

	const [routeState, setRouteState] = useState<any>(initState)

	useEffect(() => {
		if (!routes.length) {
			return
		}
		const layoutRoutes =
			routes.find(route => route.path === '/*' || route.path === '/')?.children || []
		/** 获取菜单需要显示的items */
		const o = getItems(layoutRoutes)
		console.log(o)
		setRouteState(o)
	}, [routes, routeAccess])
	return (
		<Provider value={routeState}>
			<Routes>
				{routes.map(route => (
					<Route key={route.path} path={route.path} element={route.element} />
				))}
			</Routes>
		</Provider>
	)
}
export default RouterView
