import { ComponentType } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { Items, useRouteConfig } from '../../context/router'
import { Merge } from '../type'

type Location = ReturnType<typeof useLocation>
type DefaultParams = ReturnType<typeof useParams>
type Navigate = ReturnType<typeof useNavigate>

export interface RouteComponentProps<T = DefaultParams> {
	history: {
		back: () => void
		location: Location
		push: (url: string, state?: any) => void
		replace: (url: string, state?: any) => void
	}
	location: Location
	match: { Params: T }
	params: T
	navigate: Navigate
	leftItems: Items
}

function withRouter<Props, Params = DefaultParams>(
	Component: ComponentType<Merge<Props, RouteComponentProps<Params>>>
) {
	const ComponentWithRouterProp = (props: any) => {
		const location = useLocation()
		const navigate = useNavigate()
		const params = useParams()
		const match = params
		const { leftItems } = useRouteConfig()
		const history = {
			back: () => navigate(-1),
			location,
			push: (url: string, state?: any) => navigate(url, { state }),
			replace: (url: string, state?: any) => navigate(url, { replace: true, state })
		}
		return (
			<Component
				{...props}
				leftItems={leftItems}
				history={history}
				location={location}
				match={match}
				params={params}
				navigate={navigate}
			/>
		)
	}
	return ComponentWithRouterProp
}

export default withRouter
