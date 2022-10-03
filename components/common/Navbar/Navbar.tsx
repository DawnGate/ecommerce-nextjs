import { FC } from 'react'

import Link from 'next/link'

import s from './Navbar.module.css'

import { Logo, Container } from '@components/ui'
import NavbarRoot from './NavbarRoot'

interface Link {
	href: string
	label: string
}

interface NavbarProps {
	links?: Link[]
}

const Navbar: FC<NavbarProps> = ({ links }) => (
	<NavbarRoot>
		<Container clean className="mx-auto max-w-8xl px-6">
			<div className={s.nav}>
				<div className="flex items-center flex-1">
					<Link href="/">
						<a className={s.logo} aria-label="Logo">
							<Logo />
						</a>
					</Link>
					<nav className={s.navMenu}>
						<Link href="/search">
							<a className={s.link}>All</a>
						</Link>
						{links?.map((l) => (
							<Link href={l.href} key={l.href}>
								<a className={s.link}>{l.label}</a>
							</Link>
						))}
					</nav>
				</div>
			</div>
		</Container>
	</NavbarRoot>
)

export default Navbar
