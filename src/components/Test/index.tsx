import React from 'react'
import { useGlobal } from '../../context/globalProvider'

export interface TestProps {}
const Test = (props: TestProps) => {
	const [initalState] = useGlobal()
	return <div>{initalState?.userInfo?.userName}</div>
}

export default Test
