import IconLogo from '@/assets/img/logo.svg'
import HeaderRight from '../components/HeaderRight'
// layout配置
// export const layoutSettings: LayoutProprops = {
export const layoutSettings = {
	logo: IconLogo,
	headerRight: <HeaderRight />
}

// 初始化配置
// export const getInitialState = async (): Promise<InitialStateType> => {
// 	const values: InitialStateType = {
export const getInitialState = async (): Promise<any> => {
	const values = {
		seetings: layoutSettings,
		userInfo: {},
		accessInfo: []
	}
	// 获取用户登录信息
	return values
}
