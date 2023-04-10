import { useNavigate } from 'react-router'
import { useGlobal } from '../../core/context/global'

export interface IndexProps {}
const Login = (props: IndexProps) => {
	const navigate = useNavigate()

	const { globalState, dispatch } = useGlobal()

	const login = () => {
		dispatch({
			...globalState,
			userInfo: {
				userId: '1',
				nickName: 'Thomas',
				headImgUrl: 'https://avatars.githubusercontent.com/u/48620706?v=4'
			}
		})
		setTimeout(() => navigate('/'), 500)
	}

	return <div onClick={login}>登录</div>
}

export default Login
