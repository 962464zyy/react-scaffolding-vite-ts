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
		index
	}
	return <Route {...routeProps} key={index} />
}

/** 渲染路由 */
export const renderRoutes = (props: CreateRoutesPropsType) => {
	console.log(props)
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

/** 根据处理过的路由表创建数组 */
const CreateRoutes = (props: CreateRoutesPropsType) => renderRoutes(props)

export default CreateRoutes
