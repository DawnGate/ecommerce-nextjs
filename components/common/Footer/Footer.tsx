import { Page } from '@commerce/types/page'
import { FC } from 'react'
import cn from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import getSlug from '@lib/get-slug'
import { Github, Vercel } from '@components/icons'
import { Logo, Container } from '@components/ui'
import { I18nWidget } from '@components/common'
import s from './Footer.module.css'
import PagesManifestPlugin from 'next/dist/build/webpack/plugins/pages-manifest-plugin'
interface Props {
	className: string
	children: any
	pages?: Page
}

const links = [
	{
		name: 'Home',
		url: '/',
	},
]

function bySortOrder(a: Page, b: Page) {
	return (a.sort_order ?? 0) - (b.sort_order ?? 0)
}

function usePages(pages?: Page[]) {
	const { locale } = useRouter()
	const sitePages: Page[] = []

	if (pages) {
		pages.forEach((page) => {
			const slug = page.url && getSlug(page.url)
			if (!slug) return
			if (locale && !slug.startsWith(`${locale}/`)) return
			sitePages.push(page)
		})
	}

	return {
		sitePages: sitePages.sort(bySortOrder),
	}
}
const Footer: FC<Props> = ({ className, pages }) => {
	const { sitePages } = usePages()
	const rootClassName = cn(s.root, className)
	return (
		<footer className={rootClassName}>
			<div></div>
		</footer>
	)
}

export default Footer
