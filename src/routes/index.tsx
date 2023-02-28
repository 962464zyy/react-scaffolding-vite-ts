import { ComponentType, lazy, LazyExoticComponent, ReactNode, Suspense } from 'react'

import { CustomRouteObject } from './type'
import { RouteObject } from 'react-router-dom'
import {
	AppstoreOutlined,
	CalendarOutlined,
	LinkOutlined,
	MailOutlined,
	SettingOutlined
} from '@ant-design/icons'

// import Test from '../components/Test'
// import BasicLayout from '../layout/components/BasicLayout'

// const lazyLoad = (src: () => Promise<{ default: ComponentType<any> }>) => {
// 	return lazy(src)
// }

export const lazyLoad = (Com: LazyExoticComponent<any>): ReactNode => {
	return (
		<Suspense fallback={'loading'}>
			<Com />
		</Suspense>
	)
}

// const BasicLayout = lazyLoad(() => import('../pro/layout/components/BasicLayout'))
const Test = lazy(() => import('../components/Test'))

const routes: CustomRouteObject[] = [
	{
		path: '/*',
		element: lazyLoad(lazy(() => import('../core/Layout'))),
		name: 'BasicLayout',
		children: [
			{
				// index: true,
				path: 'test',
				name: '测试',
				icon: <AppstoreOutlined />,
				element: <Test />
			},
			{
				path: 'courses',
				name: '课程',
				icon: <AppstoreOutlined />,
				element: <div>courses</div>
			}
		]
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
