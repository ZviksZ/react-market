import * as React from 'react'
import { useParams } from 'react-router'

export const CatalogDetail: React.FC = () => {
	const params: { id?: string } = useParams()
	const id = params.id

	return <>{id}</>
}
