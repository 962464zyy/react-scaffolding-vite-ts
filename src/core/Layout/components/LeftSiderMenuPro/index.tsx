import { Menu } from 'antd'
import {
	AppstoreOutlined,
	CalendarOutlined,
	LinkOutlined,
	MailOutlined,
	SettingOutlined
} from '@ant-design/icons'
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
				// items={[
				// 	{
				// 		label: (
				// 			<>
				// 				<AppstoreOutlined />1
				// 			</>
				// 		),
				// 		key: '1',
				// 		children: [
				// 			{
				// 				label: (
				// 					<>
				// 						<CalendarOutlined />
				// 						11
				// 					</>
				// 				),
				// 				key: '11'
				// 			},
				// 			{
				// 				label: (
				// 					<>
				// 						<LinkOutlined />
				// 						111
				// 					</>
				// 				),
				// 				key: '111'
				// 			}
				// 		]
				// 	},
				// 	{
				// 		label: (
				// 			<>
				// 				<MailOutlined />2
				// 			</>
				// 		),
				// 		key: '2'
				// 	},
				// 	{
				// 		label: (
				// 			<>
				// 				<SettingOutlined />3
				// 			</>
				// 		),
				// 		key: '3'
				// 	},
				// 	{
				// 		label: (
				// 			<>
				// 				<SettingOutlined />4
				// 			</>
				// 		),
				// 		key: '4'
				// 	},
				// 	{
				// 		label: (
				// 			<>
				// 				<SettingOutlined />5
				// 			</>
				// 		),
				// 		key: '5'
				// 	}
				// ]}
			/>
		</Sider>
	)
}

export default LeftSiderMenuPro
