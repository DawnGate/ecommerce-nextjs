import React, { FC, useState } from 'react'
import cn from 'clsx'

import { Heart } from '@components/icons'

import s from './WishlistButton.module.css'

import type { Product, ProductVariant } from '@commerce/types'
import loadConfig from 'next/dist/server/config'

type Props = {
	productId: Product['id']
	variant: ProductVariant
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const WishlishButton: FC<Props> = ({
	productId,
	variant,
	className,
	...props
}) => {
	const [loading, setLoading] = useState(false)

	const itemInWishlist = true
	return (
		<button>
			<Heart
				className={cn(s.icon, {
					[s.loading]: loading,
					[s.inWishlist]: itemInWishlist,
				})}
			/>
		</button>
	)
}

export default WishlishButton
