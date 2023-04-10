import { lazy, LazyExoticComponent, ReactNode, Suspense } from 'react'

import { CustomRouteObject } from './type'
import { RouteObject } from 'react-router-dom'
import { AppstoreOutlined } from '@ant-design/icons'

export const lazyLoad = (Com: LazyExoticComponent<any>): ReactNode => {
	return (
		<Suspense fallback={'loading'}>
			<Com />
		</Suspense>
	)
}

// const BasicLayout = lazyLoad(() => import('../pro/layout/components/BasicLayout'))
const Test = lazy(() => import('@/components/Test'))
const Login = lazy(() => import('@/pages/Login'))

const routes: CustomRouteObject[] = [
	{
		path: '/*',
		element: lazyLoad(lazy(() => import('../core/Layout'))),
		name: 'BasicLayout',
		children: [
			{
				path: 'test1',
				name: '测试1',
				icon: <AppstoreOutlined />,
				children: [
					{
						path: 'test11',
						name: 'test11',
						element: <Test />
					},
					{
						path: 'test12',
						name: 'test12',
						element: <div>test12</div>
					}
				]
			},
			{
				path: 'test2',
				name: '测试2',
				icon: <AppstoreOutlined />,
				element: <div>测试2</div>
			},
			{
				path: 'test3',
				name: '测试3',
				icon: <AppstoreOutlined />,
				element: <div>测试3</div>,
				access: false
			}
		]
	},
	{
		path: 'login',
		name: 'login',
		icon: <AppstoreOutlined />,
		element: <Login />
	},
	{
		path: '/403',
		element: <div>无权限</div>
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
		// element: <BasicLayout />,
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
