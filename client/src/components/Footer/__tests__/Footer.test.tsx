// @ts-nocheck
import * as React from 'react'
import { render } from '@testing-library/react'
import { Footer } from '../Footer'

describe('testing Footer component', () => {
	it('should be one link', () => {
		const { container } = render(<Footer />)
		const link = container.querySelectorAll('a')

		expect(link).toHaveLength(1)
	})

	it('should be current year', () => {
		const { container } = render(<Footer />)
		const date = container.querySelector('.date')
		const currentYear = new Date().getFullYear() + ''

		expect(date.textContent).toBe(currentYear)
	})

	it('hasn`t got changes', () => {
		const { container } = render(<Footer />)

		expect(container).toMatchSnapshot()
	})
})
