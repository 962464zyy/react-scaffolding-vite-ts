import 'antd/dist/antd.css'

import { Outlet, Route, useRoutes } from 'react-router-dom'
import { Suspense, useLayoutEffect } from 'react'

import { ConfigProvider } from 'antd'
import PageLoading from './components/Loading'
import ProEmpty from './components/ProEmpty'
import { getEnv } from './utils'
import routes from './routes'
import zh_CN from 'antd/lib/locale/zh_CN'

const App = () => {
	/** 获取当前环境，禁止consoled的打印 */
	useLayoutEffect(() => {
		if (getEnv() === 'production') {
			console.log = () => {}
		}
		// polyfills
		if (typeof (window as any).global === 'undefined') {
			window.global = window
		}
	}, [])

	const Routes = useRoutes(routes)
	return Routes

	return (
		// antd 全局化配置
		<ConfigProvider
			// 语言包配置，语言包可到 antd/es/locale 目录下寻找
			locale={zh_CN}
			// 设置 Input 组件的通用属性 关闭自动完成
			input={{ autoComplete: 'off' }}
			// 设置 Form 组件的通用属性
			form={{ validateMessages: { required: '请完善${label}' } }}
			// 自定义组件空状态
			renderEmpty={() => <ProEmpty size="large" />}
		>
			{Routes}
			{/* <Routes>
				<Route path="/">
					<Route path="home1/*">
						<Route path="home4" element={<>home4</>}></Route>
					</Route>
					<Route path="home2" element={<>home2</>}></Route>
					<Route path="home3" element={<>home3</>}></Route>
				</Route>
			</Routes> */}
		</ConfigProvider>
	)
}

export default App
