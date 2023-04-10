import { InitialStateType } from '../core/context/global'

const accessFactory = (initialState: InitialStateType): Record<string, boolean> => {
	return {
		canNav1: false
	}
}

export default accessFactory
