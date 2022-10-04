import type { CommerceAPI, CommerceAPIConfig } from '@commerce/api'

import { getCommerceApi as commerceApi } from '@commerce/api'

import getAllProducts from './operations/get-all-product'
import getSiteInfo from './operations/get-site-info'
import getAllPages from './operations/get-all-pages'
import createFetcher from './utils/fetch-local'

export interface LocalConfig extends CommerceAPIConfig {}

const config: LocalConfig = {
	commerceUrl: '',
	apiToken: '',
	cartCookie: '',
	customerCookie: '',
	cartCookieMaxAge: 2592000,
	fetch: createFetcher(() => getCommerceApi().getConfig()),
}

const operations = {
	getAllProducts,
	getSiteInfo,
	getAllPages,
}

export const provider = { config, operations }

export type Provider = typeof provider

export type LocalAPI<P extends Provider = Provider> = CommerceAPI<P | any>

export function getCommerceApi<P extends Provider>(
	customProvider: P = provider as any
): LocalAPI<P> {
	return commerceApi(customProvider as any)
}
