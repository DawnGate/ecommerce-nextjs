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
					url: '/about',
					name: 'About',
				},
				{
					url: '/term-of-use',
					name: 'Terms of use',
				},
				{
					url: '/shipping',
					name: 'Shipping',
				},
				{
					url: '/privacy-policy',
					name: 'Privacy Policy',
				},
			],
		})
	}

	return getAllPages
}
