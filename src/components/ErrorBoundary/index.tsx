import { Button } from 'antd'
import React from 'react'
import errorBg from './img/error.jpg'

export default class ErrorBoundary extends React.Component {
	state: any
	constructor(props: any) {
		super(props)
		this.state = { hasError: false }
	}

	static getDerivedStateFromError() {
		// 更新 state 使下一次渲染能够显示降级后的 UI
		return { hasError: true }
	}

	componentDidCatch(e: any) {
		console.log('正在思考这里应该做点什么')
	}

	render() {
		if (this.state.hasError) {
			return (
				<div
					style={{
						position: 'absolute',
						left: '50%',
						top: '50%',
						transform: 'translate(-50%, -50%)',
						textAlign: 'center'
					}}
				>
					<img src={errorBg} />
					{/* 这里使用了windicss 但是还没有配置 */}
					<div className="wd-text-lg wd-mt-lg">很遗憾，发生了未知错误~</div>
					<Button onClick={() => window.open('/', '_self')} className="wd-mt-lg" type="primary">
						返回首页
					</Button>
				</div>
			)
		}
		// @ts-ignore
		return this.props.children
	}
}
