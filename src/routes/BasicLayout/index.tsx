import {
	AppstoreOutlined,
	BarChartOutlined,
	CloudOutlined,
	MenuFoldOutlined,
	MenuUnfoldOutlined,
	ShopOutlined,
	TeamOutlined,
	UploadOutlined,
	UserOutlined,
	VideoCameraOutlined
} from '@ant-design/icons'
import { Layout, Menu, MenuProps } from 'antd'
import React, { useState } from 'react'

import { Outlet } from 'react-router-dom'
import styles from './index.module.less'

export interface LayoutProps {}

const { Header, Content, Footer, Sider } = Layout

const items: MenuProps['items'] = [
	UserOutlined,
	VideoCameraOutlined,
	UploadOutlined,
	BarChartOutlined,
	CloudOutlined,
	AppstoreOutlined,
	TeamOutlined,
	ShopOutlined
].map((icon, index) => ({
	key: String(index + 1),
	icon: React.createElement(icon),
	label: `nav ${index + 1}`
}))
const BasicLayout = (props: LayoutProps) => {
	const [collapsed, setCollapsed] = useState(false)
	return (
		<div className={styles.container}>
			{/* hasSizder 表示子元素里有Sider，一般不用指定，可用于服务端渲染时避免样式闪动 */}
			<Layout hasSider className={styles.layout}>
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
						left sidebar
					</Sider>
					<Content
						style={{
							position: 'relative',
							// right: 0,
							width: '100%',
							height: '100%',
							backgroundColor: 'red'
						}}
					>
						main content
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
			<Outlet />
		</div>
	)
}

export default BasicLayout
