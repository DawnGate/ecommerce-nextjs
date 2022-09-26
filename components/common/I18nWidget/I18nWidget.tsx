import cn from 'clsx'
import Link from 'next/link'
import { FC, useState } from 'react'

import { useRouter } from 'next/router'
import s from './I18nWidget.module.css'

import { Cross, ChevronUp } from '@components/icons'

import ClickOutside from '@lib/click-outside'
import Image from 'next/image'

interface LOCALE_DATA {
	name: string
	img: {
		filename: string
		alt: string
	}
}

const LOCALES_MAP: Record<string, LOCALE_DATA> = {
	es: {
		name: 'Espanol',
		img: {
			filename: 'flag-es-co.svg',
			alt: 'Bandera Colombia',
		},
	},
	'en-US': {
		name: 'English',
		img: {
			filename: 'flag-en-us.svg',
			alt: 'US flag',
		},
	},
}

const I18nWidget: FC = () => {
	return null
}

export default I18nWidget
