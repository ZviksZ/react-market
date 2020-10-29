import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Home } from './pages/Home/Home'

export const useRoutes = (isAuth: boolean) => {
	return (
		<>
			<Switch>
				<Route path="/" exact>
					<Home />
				</Route>
				<Route path="/" render={() => <Redirect from="/" to="/" />} />
			</Switch>
		</>
	)
}
