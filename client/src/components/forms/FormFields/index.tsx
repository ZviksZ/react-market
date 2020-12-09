import React from 'react'
import NumberFormat from 'react-number-format'

export function NumberFormatCustom(props: any) {
	const { inputRef, onChange, ...other } = props

	return (
		<NumberFormat
			{...other}
			getInputRef={inputRef}
			onValueChange={(values) => {
				onChange({
					target: {
						name: props.name,
						value: values.formattedValue,
					},
				})
			}}
			isNumericString
			thousandSeparator={' '}
		/>
	)
}
