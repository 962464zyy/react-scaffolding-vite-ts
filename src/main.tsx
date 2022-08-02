import App from './App'
import ErrorBoundary from './components/ErrorBoundary'
import ReactDOM from 'react-dom/client'
import { RecoilRoot } from 'recoil'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<ErrorBoundary>
		<RecoilRoot>
			<App />
		</RecoilRoot>
	</ErrorBoundary>
)
