import 'antd/dist/reset.css'

import { useLayoutEffect } from 'react'

import { ConfigProvider } from 'antd'
import ProEmpty from './components/ProEmpty'
import { getEnv } from './utils'
import zh_CN from 'antd/lib/locale/zh_CN'
import Create from './core/Create'

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
			<Create />
		</ConfigProvider>
	)
}

export default App
