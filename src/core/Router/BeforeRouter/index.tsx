import { Navigate, useLocation } from 'react-router'
import routes from '../../../routes'
import { useGlobal } from '../../context/global'
import { searchRoute } from '../utils'

export interface BeforeRouterProps {
	children: JSX.Element
}
const BeforeRouter = (props: BeforeRouterProps) => {
	const { children } = props
	const { pathname } = useLocation()
	const {
		globalState: { routeAccess }
	} = useGlobal()

	const route = searchRoute(pathname, routes)
	const { access } = route

	// 判断是否有权限
	if (!access && routeAccess?.[access as unknown as string] === false) {
		return <Navigate to="/403" replace />
	}

	return children
}

export default BeforeRouter
