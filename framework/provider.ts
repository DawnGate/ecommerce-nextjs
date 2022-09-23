import { fetcher } from './fetcher'
export const localProvider = {
	locale: 'en-us',
	cartCookie: 'session',
	fetcher: fetcher,
	cart: {},
	customer: {},
	products: {},
	auth: {},
}

export type LocalProvider = typeof localProvider
