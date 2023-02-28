import { Layout } from 'antd'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import React, { useState } from 'react'

import { Outlet, useRoutes } from 'react-router-dom'
import styles from './index.module.less'
import routes from '../../routes'
import LeftSiderMenuPro from './components/LeftSiderMenuPro'
import HeaderPro from './components/HeaderPro'
import withRouter from '../Router/withRouter'

const { Header, Content, Footer, Sider } = Layout

const BasicLayout = withRouter(props => {
	const { location } = props
	const layoutRoutes = routes.find(item => item.path === '/*')?.children || []
	const contentCom = useRoutes(layoutRoutes, location)

	const [collapsed, setCollapsed] = useState(false)

	return (
		<div className={styles.container}>
			{/* hasSizder 表示子元素里有Sider，一般不用指定，可用于服务端渲染时避免样式闪动 */}
			<Layout hasSider className={styles.layout}>
				<HeaderPro collapsed={collapsed} setCollapsed={setCollapsed} />
				<Layout>
					<LeftSiderMenuPro collapsed={collapsed} />
					<Content>{contentCom}</Content>
				</Layout>
			</Layout>
		</div>
	)
})

export default BasicLayout
