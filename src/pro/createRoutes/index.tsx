import { Route, Routes } from 'react-router-dom'

export interface CreateRoutesPropsType {
	/** 这里两个都是可选， 仅是为了在App.tsx中用的时候不提示参数缺少 */
	routes?: any[]
	loading?: boolean
}
export interface IGetRouteElementType {
	route: any
	index: number
	opts?: any
}

export const getRouteElement = ({ route, index }: IGetRouteElementType) => {
	const routeProps = {
		...route,
		element: {
			...route.element,
			props: route
		}
	}

	return (
		<Route {...routeProps} key={index}>
			{route.children
				? route.children.map(
						(route: any, index: number) =>
							getRouteElement({
								route,
								index
							})
						// eslint-disable-next-line no-mixed-spaces-and-tabs
				  )
				: null}
		</Route>
	)
}

/** 渲染路由 */
export const renderRoutes = (props: CreateRoutesPropsType) => {
	return (
		<Routes>
			{props?.routes?.map((route, index) =>
				getRouteElement({
					route,
					index
				})
			)}
		</Routes>
	)
}

/** 根据处理过的路由表创建路由 */
const CreateRoutes = (props: CreateRoutesPropsType) => renderRoutes(props)

export default CreateRoutes
