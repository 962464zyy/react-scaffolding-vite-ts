import { ItemType } from 'antd/lib/menu/hooks/useItems'
import { createContext, useContext } from 'react'

export type Items = ItemType[]

export interface RouteConfigContext {
	leftItems: Items
	topItems: Items
}

const routesContext = createContext<RouteConfigContext>({
	leftItems: [],
	topItems: []
})
export const { Provider } = routesContext

export function useRouteConfig() {
	return useContext(routesContext)
}
