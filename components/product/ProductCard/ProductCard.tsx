import { FC } from 'react'

import cn from 'clsx'

import Link from 'next/link'
import Image, { ImageProps } from 'next/image'
import { Product } from '@commerce/types/product'

import s from './ProductCard.module.css'

import { WishlistButton } from '@components/wishlist'

// import usePrice from '@framework/product/use-price'

import { ProductTag } from '@components/product'

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
						<div className={s.header}>
							<span>{product.name}</span>
						</div>
						{product?.images && (
							<div>
								<Image
									src={product.images[0]?.url || placeholderImg}
									{...imgProps}
									layout="fixed"
									height={320}
									width={320}
									alt={product.name || 'Product Name'}
								/>
							</div>
						)}
					</>
				)}
				{variant === 'simple' && (
					<>
						<WishlistButton
							className={s.wishlisthButton}
							productId={product.id}
							variant={product.variants[0]}
						/>
						{!noNameTag && (
							<div className={s.header}>
								<h3 className={s.name}>
									<span>{product.name}</span>
								</h3>
								<div>{`${price} ${product.price?.currencyCode}`}</div>
							</div>
						)}
						<div className={s.imageContainer}>
							{product?.images && (
								<div>
									<Image
										alt={product.name || 'Product Image'}
										className={s.productImage}
										src={product.images[0]?.url || placeholderImg}
										height={540}
										width={540}
										quality="85"
										layout="responsive"
										{...imgProps}
									/>
								</div>
							)}
						</div>
					</>
				)}
				{variant === 'default' && (
					<>
						<WishlistButton
							className={s.wishlistButton}
							productId={product.id}
							variant={product.variants[0] as any}
						/>
						<ProductTag
							name={product.name}
							price={`${price} ${product.price?.currencyCode}`}
						/>
						<div className={s.imageContainer}>
							{product?.images && (
								<div>
									<Image
										alt={product.name || 'Product Image'}
										className={s.productImage}
										src={product.images[0]?.url || placeholderImg}
										height={540}
										width={540}
										quality="85"
										layout="responsive"
										{...imgProps}
									/>
								</div>
							)}
						</div>
					</>
				)}
			</a>
		</Link>
	)
}

export default ProductCard
