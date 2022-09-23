export type FetcherOptions<Body = any> = {
	url?: string
	query?: string
	method?: string
	variables?: string
	body?: Body
}
export type Fetcher<T = any, B = any> = (
	options: FetcherOptions<B>
) => T | Promise<T>
