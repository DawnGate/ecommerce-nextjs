export type Page = { url: string }
export type GetAllPagesResult = { pages: Page[] }

import type { LocalConfig } from '..'

export default function getAllPagesOperation() {
	function getAllPages({
		config,
		preview,
	}: {
		url?: string
		config?: Partial<LocalConfig>
		preview?: boolean
	}): Promise<GetAllPagesResult> {
		return Promise.resolve({
			pages: [
				{
					url: 'en-US/about',
					name: 'About',
				},
				{
					url: 'en-US/term-of-use',
					name: 'Terms of use',
				},
				{
					url: 'en-US/shipping',
					name: 'Shipping',
				},
				{
					url: 'en-US/privacy-policy',
					name: 'Privacy Policy',
				},
			],
		})
	}

	return getAllPages
}
