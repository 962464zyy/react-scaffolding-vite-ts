import { Menu } from 'antd'
import Sider from 'antd/es/layout/Sider'
import { useRouteConfig } from '../../../context/router'

export interface LeftSiderMenuProProps {
	collapsed: boolean
}

const LeftSiderMenuPro = (props: LeftSiderMenuProProps) => {
	const { collapsed } = props
	const { leftItems } = useRouteConfig()
	return (
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
			<Menu
				mode="inline"
				theme="light"
				defaultSelectedKeys={['1']}
				defaultOpenKeys={['1']}
				items={leftItems}
			/>
		</Sider>
	)
}

export default LeftSiderMenuPro
