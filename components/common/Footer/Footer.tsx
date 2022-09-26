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
interface Props {
	className: string
	children: any
	pages?: Page
}
const Footer: FC<Props> = () => {
	return null
}

export default Footer
