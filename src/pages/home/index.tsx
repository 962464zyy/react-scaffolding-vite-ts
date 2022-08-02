import React from 'react'
import styles from './index.module.less'

export interface HomeProps {}

const Home = (props: HomeProps) => {
	return (
		<div className={styles.a}>
			Home
			<span className={styles.b}>disappear</span>
		</div>
	)
}

export default Home
