import data from '@data/data.json'

export type GetAllProductPathsResult = {
	products: Array<{ path: string }>
}

export default function getAllProductPathsOperation() {
	function getALlProductPaths(): Promise<GetAllProductPathsResult> {
		return Promise.resolve({
			products: data.products.map(({ path }) => ({ path })),
		})
	}

	return getALlProductPaths
}
