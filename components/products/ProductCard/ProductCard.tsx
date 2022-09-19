import { FC } from 'react'

import cn from 'clsx'

import Link from 'next/link'
import Image, { ImageProps } from 'next/image'
import { Product } from '@commerce/types/product'

import s from './ProductCard.module.css'

// import WishListButton from '@components/wishlish/WishListButton'

// import usePrice from '@framework/product/use-price'

// import ProductTag from '../ProductTag'

// Omit => remove some props type has same with the second arguments
interface Props {
	className?: string
	product: Product
	noNameTag?: boolean
	imgProps?: Omit<ImageProps, 'src' | 'layout' | 'placeholder' | 'blurDataURL'>
	variant?: 'default' | 'slim' | 'simple'
}

const placeholderImg = '/product-img-placeholder.svg'

const ProductCard: FC<Props> = ({
	product,
	className,
	imgProps,
	noNameTag = false,
	variant = 'default',
}) => {
	const { price } = { price: '10$' }
	const rootClassName = cn(
		s.root,
		{ [s.slim]: variant === 'slim', [s.simple]: variant === 'simple' },
		className
	)
	return (
		<Link href={`/product/${product.slug}`}>
			<a className={rootClassName} aria-label={product.name}>
				{variant === 'slim' && (
					<>
						<div>
							<span>{product.name}</span>
						</div>
						{product?.images && (
							<div>
								<Image
									src={product.images[0]?.url || placeholderImg}
									{...imgProps}
									alt={product.name || 'Product Name'}
								/>
							</div>
						)}
					</>
				)}
				{variant === 'simple' && <></>}
				{variant === 'default' && <></>}
			</a>
		</Link>
	)
}

export default ProductCard
