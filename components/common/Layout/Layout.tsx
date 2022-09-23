import { Page } from '@commerce/types/page'
import { Category } from '@commerce/types/site'
import { useRouter } from 'next/router'
import { CommerceProvider } from '@framework'
import { Navbar, Footer } from '@components/common'

interface Props {
	pageProps: {
		pages?: Page[]
		categories: Category[]
	}
	children?: React.ReactNode
}
const Layout: React.FC<Props> = ({
	children,
	pageProps: { categories = [], ...pageProps },
}) => {
	const { locale = 'en-US' } = useRouter()

	const navBarLinks = categories.slice(0, 2).map((c) => ({
		label: c.name,
		href: `/search/${c.slug}`,
	}))
	return (
		<CommerceProvider locale={locale}>
			<div>
				<Navbar />
				<main>{children}</main>
				<Footer />
			</div>
		</CommerceProvider>
	)
}

export default Layout
