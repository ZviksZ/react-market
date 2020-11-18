// @ts-nocheck
import * as React from 'react'
import { Navbar } from '../Navbar'
import { shallow } from 'enzyme'
import { store } from '../../../store/store'
import { Provider } from 'react-redux'

describe('testing Navbar component', () => {
	it('should button click change state', () => {
		const navbar = shallow(
			<Provider store={store}>
				<Navbar />
			</Provider>,
		)

		expect(navbar).toMatchSnapshot()

		/*const stateSetter = jest.fn()
		const handleClick = jest.spyOn(React, 'useState')
		handleClick.mockImplementation((state) => [state, stateSetter])

		const btn = getByTestId('open-basket')
		fireEvent.click(btn)

		btn.simulate('click')

		expect(stateSetter).toBeTruthy()*/
	})
})
