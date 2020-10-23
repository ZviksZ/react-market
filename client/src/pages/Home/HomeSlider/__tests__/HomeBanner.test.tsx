// @ts-nocheck
import * as React from 'react'
import { render } from '@testing-library/react'
import { HomeBanner } from '../HomeBanner'

describe('testing HomeBanner component', () => {
	it('should be correct snapshot', () => {
		const { container } = render(<HomeBanner />)

		expect(container).toMatchSnapshot()
	})
})
