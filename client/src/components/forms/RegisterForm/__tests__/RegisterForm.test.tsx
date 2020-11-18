import { cleanup, fireEvent, render } from '@testing-library/react'
import * as React from 'react'
import { shallow } from 'enzyme'
import { RegisterForm } from '../RegisterForm'
import { Provider } from 'react-redux'
import { store } from '../../../../store/store'

describe('LoginForm testing', () => {
	afterEach(cleanup)

	it('take form snapshot', () => {
		const form = shallow(
			<Provider store={store}>
				<RegisterForm />
			</Provider>,
		)

		expect(form).toMatchSnapshot()
	})
})
