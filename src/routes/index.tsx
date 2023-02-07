import { ComponentType, lazy } from 'react'

import { CustomRouteObject } from './type'
import { RouteObject } from 'react-router-dom'

// import Test from '../components/Test'
// import BasicLayout from '../layout/components/BasicLayout'

const lazyLoad = (src: () => Promise<{ default: ComponentType<any> }>) => {
	return lazy(src)
}

const BasicLayout = lazyLoad(() => import('../pro/layout/components/BasicLayout'))
const Test = lazy(() => import('../components/Test'))

const routes: CustomRouteObject[] = [
	{
		path: '/',
		element: <BasicLayout />,
		name: 'BasicLayout',
		children: [
			{
				// index: true,
				path: 'test',
				element: <Test />
			},
			{
				path: 'courses',
				element: <div>courses</div>
			}
		]
	},
	{
		path: '*',
		element: <>notMatch</>
	}
]
const routes1: RouteObject[] & any = [
	// {
	// 	element: <BasicLayout />
	// },
	{
		// path: '/',
		element: <BasicLayout />,
		name: 'BasicLayout',
		children: [
			{
				index: true,
				element: <Test />
			},
			{
				path: '/courses',
				element: <>courses</>
				// children: [
				// 	{
				// 		index: true,
				// 		element: <>coursesIndex</>
				// 	},
				// 	{
				// 		path: '/course/:id',
				// 		element: <>course</>
				// 	}
				// ]
			},
			{
				path: '*',
				element: <>notMatch</>
			}
		]
	},
	{
		path: '/test',
		element: <Test />
	}
]

export default routes
