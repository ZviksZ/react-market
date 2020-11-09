import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import { App } from './App'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider, CssBaseline } from '@material-ui/core'
import theme from './theme'
import { Provider } from 'react-redux'
import { store } from './store/store'

ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<App />
			</ThemeProvider>
		</Provider>
	</BrowserRouter>,
	document.getElementById('root'),
)
