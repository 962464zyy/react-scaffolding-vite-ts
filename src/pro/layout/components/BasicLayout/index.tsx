import { Layout, Menu, MenuProps } from 'antd'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import React, { useState } from 'react'

import { Outlet } from 'react-router-dom'
import SiderMenu from '../SiderMenu'
import Test from '../../../../components/Test'
import styles from './index.module.less'

export interface LayoutProps {
	routes?: any
}

const { Header, Content, Footer, Sider } = Layout

const BasicLayout = (props: LayoutProps) => {
	console.log('BasicLayout', props)
	const [collapsed, setCollapsed] = useState(false)
	return (
		<div className={styles.container}>
			{/* hasSizder 表示子元素里有Sider，一般不用指定，可用于服务端渲染时避免样式闪动 */}
			<Layout hasSider className={styles.layout} style={{ backgroundColor: 'red' }}>
				<Header
					style={{
						height: 56,
						backgroundColor: 'yellow'
					}}
				>
					header
					{React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
						className: 'trigger',
						onClick: () => setCollapsed(!collapsed)
					})}
				</Header>
				<Layout
					style={{
						display: 'flex',
						flex: 'auto'
					}}
				>
					<Sider
						trigger={null}
						collapsible
						collapsed={collapsed}
						style={{
							overflow: 'auto',
							height: '100%',
							left: 0,
							width: 200,
							backgroundColor: 'powderblue'
						}}
					>
						<SiderMenu />
					</Sider>
					<Content
						style={{
							position: 'relative',
							width: '100%',
							height: '100%',
							backgroundColor: 'red'
						}}
					>
						{/* <Test /> */}
						<Outlet />
					</Content>
					{/* <Sider>right sidebar</Sider> */}
				</Layout>
				{/* <Footer
					style={{
						position: 'fixed',
						bottom: 0,
						right: 0,
						width: 'calc(100% - 200px)'
					}}
				>
					footer
				</Footer> */}
			</Layout>
		</div>
	)
}

export default BasicLayout
