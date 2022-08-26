/** GlobalProviderProps */
export interface GlobalProviderProps {
	children: any
	// 这里的 any[] 后期需要替换  这里表示路由数组的类型
	routes?: any[]
}

/** 初始化状态值 */
export interface InitialStateType {
	loading: boolean
	userInfo?: Record<string, any>
	accessInfo?: string[]
	bindInfo?: Record<string, any>
	// layout配置
	// settings: BasicLayoutProps
}

/** GlobalValueType */
export interface GlobalValueType {
	initalState: InitialStateType
	dispatch: React.Dispatch<React.SetStateAction<InitialStateType>>
}
