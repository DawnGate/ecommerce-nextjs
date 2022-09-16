import type { FetchOptions, Response } from '@vercel/fetch'

export interface CommerceAPIFetchOptions<Variables> {}

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
