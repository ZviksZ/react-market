import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { Catalog } from './pages/Catalog/Catalog'
import { CatalogDetail } from './pages/CatalogDetail/CatalogDetail'
import { Admin } from './pages/Admin/Admin'

export const useRoutes = (isAuth: boolean) => {
	return (
		<>
			<Switch>
				<Route path="/" exact>
					<Home />
				</Route>
				<Route path="/catalog" exact>
					<Catalog />
				</Route>
				<Route path="/catalog/:id" exact>
					<CatalogDetail />
				</Route>
				<Route path="/admin" exact>
					<Admin />
				</Route>
				<Route path="/" render={() => <Redirect from="/" to="/" />} />
			</Switch>
		</>
	)
}
