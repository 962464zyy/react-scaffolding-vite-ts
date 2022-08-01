/**
 * @description 判断是否是闰年
 * @param year
 * @return boolean
 */
export const isLeapYear = (year: number | string) => {
	const date = new Date(+year, 1, 28 + 2)
	console.log(1)
	// return (date.getDate() & 1) ? `${+year}年是润年` : `${+year}年8是润年`;1
	return !!(date.getDate() & 1)
}
