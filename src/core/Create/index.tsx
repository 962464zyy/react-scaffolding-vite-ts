import { FC } from 'react'
import GlobalProvider from '../Global'
import BeforeRouter from '../Router/BeforeRouter'
import RouterView from '../Router/RouterView'

const Create: FC<any> = () => {
	return (
		<GlobalProvider>
			<BeforeRouter>
				<RouterView />
			</BeforeRouter>
		</GlobalProvider>
	)
}

export default Create
