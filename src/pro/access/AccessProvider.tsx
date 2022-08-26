import { AccessInstanceType, AccessProviderProps } from './type'
import React, { useMemo } from 'react'

import { AccessContext } from '../../context/accessProvider'
import accessFactory from './access'
import traverseModifyRoutes from './traverseModifyRoutes'
import { useGlobal } from '../../context/globalProvider'

/** 处理路由权限 */
const AccessProvider = (props: AccessProviderProps) => {
	const { children, routes } = props
	const [initalState] = useGlobal()
	const accessValue: AccessInstanceType = useMemo(() => accessFactory(initalState), [initalState])

	return (
		<AccessContext.Provider value={accessValue}>
			{/* 克隆children，其目的是合并新的props */}
			{React.cloneElement(children, {
				...children.props,
				routes: traverseModifyRoutes(routes, accessValue),
				loading: initalState.loading
			})}
		</AccessContext.Provider>
	)
}

export default AccessProvider
