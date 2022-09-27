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
		<Container>
			<div>
				<div>
					<Link href="/">
						<a>
							<Logo />
						</a>
					</Link>
					<nav>
						<Link href="/search">
							<a>All</a>
						</Link>
					</nav>
					{links?.map((l) => (
						<Link href={l.href} key={l.href}>
							<a>{l.label}</a>
						</Link>
					))}
				</div>
			</div>
		</Container>
	</NavbarRoot>
)

export default Navbar
