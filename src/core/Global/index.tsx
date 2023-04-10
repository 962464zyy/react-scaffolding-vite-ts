import { FC, ReactNode, useEffect, useState } from 'react'
import accessFactory from '../../config/access'
import { getInitialState } from '../../config/core'
import { initGlobalState, InitialStateType, Provider } from '../context/global'

export interface GlobalProviderProps {
	children: ReactNode
}
const GlobalProvider: FC<GlobalProviderProps> = props => {
	const { children } = props
	const [globalState, setGlobalState] = useState<InitialStateType>(initGlobalState)
	const [isPending, setIsPending] = useState(true)

	useEffect(() => {
		getInitialState()
			.then((values: any) => {
				// 获取路由权限
				const routeAccess = accessFactory(values)
				console.log('routeAccess', routeAccess)
				// 设置共享状态
				setGlobalState({ ...values, routeAccess })
			})
			.finally(() => {
				setIsPending(false)
			})
	}, [])

	return (
		<Provider value={{ globalState, dispatch: setGlobalState }}>{!isPending && children}</Provider>
	)
}

export default GlobalProvider
