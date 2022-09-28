import { GetSiteInfoOperation } from '@commerce/types/site'
import { APIProvider, CommerceAPI } from '.'
import { GetAllPagesOperation } from '../types/page'
import { GetAllProductsOperation } from '../types/product'

const noop = () => {
	throw new Error('Not implemented')
}

export const OPERATIONS = [
	'getAllPages',
	'getAllProducts',
	'getSiteInfo',
] as const

export type AllowedOperations = typeof OPERATIONS[number]

export const defaultOperations = OPERATIONS.reduce((ops, k) => {
	ops[k] = noop
	return ops
}, {} as { [K in AllowedOperations]: typeof noop })

export type OperationOptions =
	| { query: string; url?: never }
	| { query?: never; url: string }

export type Operations<P extends APIProvider> = {
	getAllPages: {
		<T extends GetAllPagesOperation>(opt?: {
			config?: P['config']
			preview?: boolean
		}): Promise<T['data']>

		<T extends GetAllPagesOperation>(
			opts: {
				config?: P['config']
				preview?: boolean
			} & OperationOptions
		): Promise<T['data']>
	}

	getAllProducts: {
		<T extends GetAllProductsOperation>(opt?: {
			variables?: T['variables']
			config?: P['config']
			preview?: boolean
		}): Promise<T['data']>

		<T extends GetAllProductsOperation>(
			opts: {
				variables?: T['variables']
				config?: P['config']
				preview?: boolean
			} & OperationOptions
		): Promise<T['data']>
	}

	getSiteInfo: {
		<T extends GetSiteInfoOperation>(opts: {
			config?: P['config']
			preview?: boolean
		}): Promise<T['data']>

		<T extends GetSiteInfoOperation>(
			opts: {
				config?: P['config']
				preview?: boolean
			} & OperationOptions
		): Promise<T['data']>
	}
}

export type OperationContext<P extends APIProvider> = {
	commerce: CommerceAPI<P>
}

export type APIOperations<P extends APIProvider> = {
	[K in keyof Operations<P>]?: (ctx: OperationContext<P>) => Operations<P>[K]
}

export type AllOperations<P extends APIProvider> = {
	[K in keyof APIOperations<P>]-?: P['operations'][K] extends (
		...args: any
	) => any
		? ReturnType<P['operations'][K]>
		: typeof noop
}
