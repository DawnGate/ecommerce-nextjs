import { FC, useState, useEffect, ReactNode } from 'react'

import cn from 'clsx'

import s from './Navbar.module.css'

// import throttler from 'lodash.throttle'

const NavbarRoot: FC<{ children?: ReactNode }> = ({ children }) => {
	const [hasScrolled, setHasScrolled] = useState(false)
	return (
		<div className={cn(s.root, { 'shadow-magical': hasScrolled })}>
			{children}
		</div>
	)
}

export default NavbarRoot
