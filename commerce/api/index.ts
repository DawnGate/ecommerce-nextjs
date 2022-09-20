import type { FetchOptions, Response } from '@vercel/fetch'

import {
	AllOperations,
	APIOperations,
	defaultOperations,
	OPERATIONS,
} from './operations'

export interface CommerceAPIFetchOptions<Variables> {
	variables?: Variables
	preview?: boolean
}

export interface GraphQLFetcherResult<Data = any> {
	data: Data
	res: Response
}

export type GraphQLFetcher<
	Data extends GraphQLFetcherResult = GraphQLFetcherResult,
	Variables = any
> = (
	query: string,
	queryData?: CommerceAPIFetchOptions<Variables>,
	fetchOptions?: FetchOptions
) => Promise<Data>

export interface CommerceAPIConfig {
	locale?: string
	locales?: string
	commerceUrl: string
	apiToken: string
	cartCookie: string
	cartCookieMaxAge: number
	customerCookie: string
	fetch<Data = any, Variables = any>(
		query: string,
		queryData?: CommerceAPIFetchOptions<Variables>,
		fetchOptions?: FetchOptions
	): Promise<GraphQLFetcherResult<Data>>
}

export class CommerceAPICore<P extends APIProvider = APIProvider> {
	constructor(readonly provider: P) {}
	getConfig(userConfig: Partial<P['config']> = {}): P['config'] {
		return Object.entries(userConfig).reduce(
			(cfg, [key, value]) => Object.assign(cfg, { [key]: value }),
			{ ...this.provider.config }
		)
	}
}

export type APIProvider = {
	config: CommerceAPIConfig
	operations: APIOperations<any>
}

export type CommerceAPI<P extends APIProvider = APIProvider> =
	CommerceAPICore<P> & AllOperations<P>

export function getCommerceApi<P extends APIProvider>(
	customProvider: P
): CommerceAPI<P> {
	const commerce = Object.assign(
		new CommerceAPICore(customProvider),
		defaultOperations as AllOperations<P>
	)

	const ops = customProvider.operations

	OPERATIONS.forEach((k) => {
		const op = ops[k]
		if (op) {
			commerce[k] = op({ commerce }) as AllOperations<P>[typeof k]
		}
	})

	return commerce
}
