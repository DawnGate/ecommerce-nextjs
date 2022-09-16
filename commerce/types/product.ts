export type ProductImage = {
	url: string
	alt?: string
}

export type ProductOptionValues = {
	label: string
	hexColors?: string[]
}

export type ProductOption = {
	__typename?: 'MultipleChoiceOption'
	id: string
	displayName: string
	values: ProductOptionValues[]
}

export type ProductVariant = {
	id: string | number
	options: ProductOption[]
	availableForSale: boolean
}

export type ProductPrice = {
	value: number
	currencyCode?: 'USD' | 'EUR' | 'ARS' | 'GBP' | string
	retailPrice?: number
	salePrice?: number
	listPrice?: number
	extendedSalePrice?: number
	extendedListPrice?: number
}

export type Product = {
	id: string
	name: string
	description: string
	descriptionHtml?: string
	sku?: string
	slug?: string
	path?: string
	images: ProductImage[]
	variants: ProductVariant[]
	price: ProductPrice
	options: ProductOption[]
	vendor?: string
}
