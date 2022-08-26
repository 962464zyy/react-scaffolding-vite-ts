/** AccessProviderProps */
export interface AccessProviderProps {
	children: any
	// 这里的 any[] 后期需要替换  这里表示路由数组的类型
	routes: any[]
}

export type AccessInstanceType = ReturnType<typeof accessFactory>
