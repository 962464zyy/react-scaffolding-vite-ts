import { ENV } from '../types/global'

/**
 * @description 判断是否是闰年
 * @param year
 * @return boolean
 */
export const isLeapYear = (year: number | string) => {
	const date = new Date(+year, 1, 28 + 2)
	// return (date.getDate() & 1) ? `${+year}年是润年` : `${+year}年8是润年`;
	return !!(date.getDate() & 1)
}

/** 获取环境变量 */
export const getEnv = (): ENV => {
	// @ts-ignore
	return import.meta.env.VITE_NODE_ENV
}

/** 复制文本到剪贴板 */
export const copy = (text: string | number): boolean => {
	if (!text) return false
	const textArea = document.createElement('textarea')
	textArea.style.position = 'fixed'
	textArea.style.top = '0'
	textArea.style.left = '0'
	textArea.style.width = '2em'
	textArea.style.height = '2em'
	textArea.style.padding = '0'
	textArea.style.border = 'none'
	textArea.style.outline = 'none'
	textArea.style.boxShadow = 'none'
	textArea.style.background = 'transparent'
	textArea.value = text.toString()
	document.body.appendChild(textArea)
	textArea.select()
	const res = !!document.execCommand('copy')
	document.body.removeChild(textArea)
	return res
}

/**
 *创建a链接下载资源
 * @param {string} url 下载模板
 */
export const download = (url: string) => {
	const a = document.createElement('a')
	a.style.display = 'none'
	a.href = url
	document.body.appendChild(a)
	a.click()
	document.body.removeChild(a)
	URL.revokeObjectURL(url)
}

/**
 * 下载图片
 * @param imgSrc 图片地址
 * @param name 下载图片名称
 */
export const downloadIamge = (imgSrc: string, name?: string) => {
	const image = new Image()
	// 解决跨域 Canvas 污染问题
	image.setAttribute('crossOrigin', 'anonymous')
	image.onload = function () {
		const canvas = document.createElement('canvas')
		canvas.width = image.width
		canvas.height = image.height
		const context = canvas.getContext('2d')
		context?.drawImage(image, 0, 0, image.width, image.height)
		const url = canvas.toDataURL('image/png') // 得到图片的base64编码数据
		const a = document.createElement('a') // 生成一个a元素
		const event = new MouseEvent('click') // 创建一个单击事件
		a.download = name || '新榜下载'
		a.href = url // 将生成的URL设置为a.href属性
		a.dispatchEvent(event) // 触发a的单击事件
	}
	image.src = imgSrc
}

/** 判断一个字符串是否是url */
export const isUrl = (url: string | undefined) => {
	{
		const str = url || ''
		const Expression = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\\/?%&=]*)?/
		const objExp = new RegExp(Expression)
		if (objExp.test(str) == true) {
			return true
		} else {
			return false
		}
	}
}

/** 是否是浏览器 */
export const isBrowser = !!(
	typeof window !== 'undefined' &&
	window.document &&
	window.document.createElement
)
