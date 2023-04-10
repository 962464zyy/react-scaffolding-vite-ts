import { createContext, useContext } from 'react'

// 初始化状态值
export interface InitialStateType {
	userInfo?: Record<string, any>
	accessInfo?: string[]
	routeAccess?: Record<string, boolean>
	[propKey: string]: any
}

export interface GlobalContext {
	globalState: InitialStateType
	dispatch: (state: InitialStateType) => void
}

export const initGlobalState = { settings: {} }

const context = createContext<GlobalContext>({
	globalState: initGlobalState,
	dispatch: () => {}
})

export const { Provider } = context

export function useGlobal() {
	return useContext(context)
}
