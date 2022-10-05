import type { LocalConfig } from '..'

import { Product, GetProductOperation } from '@commerce/types/product'

import data from '@data/data.json'

import type { OperationContext } from '@commerce/api/operations'

export default function getProductOperation({
	commerce,
}: OperationContext<any>) {
	async function getProduct<T extends GetProductOperation>({
		query = '',
		variables,
		config,
	}: {
		query?: string
		variables?: T['variables']
		config?: Partial<LocalConfig>
		preview?: boolean
	} = {}): Promise<Product | {} | any> {
		return {
			product: data.products.find(({ slug }) => slug === variables!.slug),
		}
	}
	return getProduct
}
