import { Header } from 'antd/es/layout/layout'
import React, { Dispatch } from 'react'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'

export interface HeaderProProps {
	/* 是否折叠 */
	collapsed: boolean
	/* 控制折叠 */
	setCollapsed: Dispatch<React.SetStateAction<boolean>>
}
const HeaderPro = (props: HeaderProProps) => {
	const { collapsed, setCollapsed } = props
	return (
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
	)
}

export default HeaderPro
