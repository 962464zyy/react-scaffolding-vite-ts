import { GlobalProviderProps, GlobalValueType, InitialStateType } from './type'
import { useCallback, useEffect, useMemo, useState } from 'react'

import { _GLOBAL_CONTEXT } from '../../context/globalProvider'

/**
 * 1.绑定全局公共的数据
 * 2.可通过判断routes做一些权限判断等
 */
const GlobalProvider = (props: GlobalProviderProps) => {
	const { routes, children } = props
	const [initalState, setInitalState] = useState<InitialStateType>({
		loading: true,
		userInfo: {},
		accessInfo: []
	})

	const dispatch = useCallback(setInitalState, [])

	const providerValue: GlobalValueType & { routes: any[] } = useMemo(
		() => ({
			dispatch,
			initalState,
			routes: routes!
		}),
		[initalState]
	)

	useEffect(() => {
		/**
		 * 1.进行权限检测
		 * 2.调用初始化数据（调用接口等）
		 */
		dispatch({
			userInfo: { userName: 'zyy' },
			loading: false
		})
	}, [])

	return <_GLOBAL_CONTEXT.Provider value={providerValue}>{children}</_GLOBAL_CONTEXT.Provider>
}

export default GlobalProvider
