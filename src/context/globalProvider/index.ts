import { GlobalValueType, InitialStateType } from '../../pro/global/type'
import { createContext, useContext } from 'react'

import { getEnv } from '../../utils'

/** layout配置 后期修改 */
export const layoutSettings = {
	contentWidth: 'Fluid',
	fixedHeader: true,
	fixSiderbar: true,
	renderTopMenu: false,
	// rightContentRender: () => <HeaderRight />,
	siderWidth: 179, // 侧边栏菜单宽度
	headerHeight: 56, // 头部导航高度
	// menuRender: false,
	iconfontUrl: '//at.alicdn.com/t/font_2708999_fo5413ufgu6.js',
	menu: {
		autoClose: false
	},
	logo: getEnv() === 'development' ? '/logo.svg' : '../logo.svg',
	webTitle: '海汇kol'
} as const

/** 创建一个全局的context */
export const _GLOBAL_CONTEXT = createContext<GlobalValueType>({
	initalState: {
		loading: true,
		userInfo: {},
		accessInfo: []
		// settings: layoutSettings
	},
	dispatch: () => {}
})

/** 使用全局_GLOBAL_CONTEXT */
export const useGlobal = (): [InitialStateType, GlobalValueType['dispatch']] => {
	const { initalState, dispatch } = useContext(_GLOBAL_CONTEXT)
	return [initalState, dispatch]
}
