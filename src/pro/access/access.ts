import { InitialStateType } from '../global/type'

/** 权限配置 */
const accessFactory = (initialState: InitialStateType) => {
	const { userInfo, accessInfo } = initialState || {}

	/** 接口返回的权限数组 */
	const _list = accessInfo || []
	/** 检测路由地址是否包含当前path或key */
	const isIncludePath = (path: string): path is string => Boolean(_list.includes(path))

	/** 自定义字段进行权限处理 */
	return {
		example: Math.random() > 0.5
	}
}

export default accessFactory
