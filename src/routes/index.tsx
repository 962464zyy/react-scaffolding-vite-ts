import BasicLayout from './BasicLayout'
import { RouteObject } from 'react-router-dom'

const routes: RouteObject[] = [
	{
		path: '/',
		element: <BasicLayout />,
		children: [
			{
				index: true
				// element: <>home</>
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
