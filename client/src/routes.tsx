import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { Catalog } from './pages/Catalog/Catalog'
import { CatalogDetail } from './pages/CatalogDetail/CatalogDetail'
import { LoginForm } from './components/forms/LoginForm/LoginForm'

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
				<Route path="/" render={() => <Redirect from="/" to="/" />} />
			</Switch>
		</>
	)
}
