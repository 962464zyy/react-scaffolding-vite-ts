import { ComponentType, lazy } from 'react'

import { RouteObject } from 'react-router-dom'

// import Test from '../components/Test'
// import BasicLayout from '../layout/components/BasicLayout'

const lazyLoad = (src: () => Promise<{ default: ComponentType<any> }>) => {
	return lazy(src)
}

const BasicLayout = lazyLoad(() => import('../pro/layout/components/BasicLayout'))
const Test = lazy(() => import('../components/Test'))

const routes: RouteObject[] = [
	{
		path: '/',
		element: <BasicLayout />
		// element: lazy(() => import('../layout/components/BasicLayout')),
		// children: [
		// 	{
		// 		index: true,
		// 		element: <Test />
		// 	},
		// 	{
		// 		path: '/courses',
		// 		element: <>courses</>
		// 		// children: [
		// 		// 	{
		// 		// 		index: true,
		// 		// 		element: <>coursesIndex</>
		// 		// 	},
		// 		// 	{
		// 		// 		path: '/course/:id',
		// 		// 		element: <>course</>
		// 		// 	}
		// 		// ]
		// 	},
		// 	{
		// 		path: '*',
		// 		element: <>notMatch</>
		// 	}
		// ]
	},
	{
		path: '/test',
		element: <Test />
	}
	// {
	// 	path: '/',
	// 	// element: <>Dashboard</>,
	// 	children: [
	// 		{
	// 			path: 'messages',
	// 			index: true,
	// 			element: <>messages</>
	// 		},
	// 		{
	// 			path: 'home',
	// 			element: <>home</>
	// 		},
	// 		{ path: 'team', element: <>AboutPage</> },
	// 		{
	// 			path: '*',
	// 			element: <>nothing here!</>
	// 		}
	// 	]
	// }
	// // {
	// // 	path: '/222/*',
	// // 	// element: <>Dashboard2</>,
	// // }
]

export default routes
