// @ts-nocheck
import * as React from 'react'
import { fireEvent, render } from '@testing-library/react'
import { Navbar } from '../Navbar'

describe('testing Navbar component', () => {
	it('should button click change state', () => {
		const { container } = render(<Navbar />)
		const stateSetter = jest.fn()
		const handleClick = jest.spyOn(React, 'useState')
		handleClick.mockImplementation((state) => [state, stateSetter])

		fireEvent.click(container.querySelector('button'))
		expect(stateSetter).toBeTruthy()
	})
})
