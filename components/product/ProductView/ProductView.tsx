import cn from 'clsx'

import s from './ProductView.module.css'

import { FC } from 'react'
import { Product } from '@commerce/types'

import { WishlistButton } from '@components/wishlist'

import {
	ProductSlider,
	ProductCard,
	ProductSidebar,
	ProductTag,
} from '@components/product'

import { SEO } from '@components/common'
import { Container, Text } from '@components/ui'
import Image from 'next/image'

interface ProductViewProps {
	product: Product
	relatedProducts: Product[]
}

const ProductView: FC<ProductViewProps> = ({ product, relatedProducts }) => {
	const { price } = { price: 10 }
	return (
		<>
			<Container className="max-w-none w-full">
				<div className={cn(s.root, 'fit')}>
					<div className={cn(s.main, 'fit')}>
						<ProductTag
							name={product.name}
							price={`${price} ${product.price?.currencyCode}`}
							fontSize={32}
						/>
						<div className={s.sliderContainer}>
							<ProductSlider key={product.id}>
								{product.images.map((image, i) => (
									<div key={image.url}>
										<Image
											className={s.img}
											src={image.url}
											alt={image.alt || 'Product Image'}
											width={600}
											height={600}
											priority={i === 0}
											quality="85"
										/>
									</div>
								))}
							</ProductSlider>
						</div>
						<WishlistButton
							className={s.wishlistButton}
							productId={product.id}
							variant={product.variants[0]}
						/>
					</div>
					<ProductSidebar
						key={product.id}
						product={product}
						className={s.sidebar}
					/>
				</div>
				<hr className="mt-7 border-accent-2" />
				<section className="py-12 px-6 mb-10">
					<Text>Related Products</Text>
					<div className={s.relatedProductsGrid}>
						{relatedProducts.map((p) => (
							<div
								key={p.path}
								className="animated fadeIn bg-accent-0 border border-accent-2"
							>
								<ProductCard
									key={p.path}
									variant="simple"
									noNameTag
									product={p}
									className="animated fadeIn"
									imgProps={{
										width: 300,
										height: 300,
									}}
								/>
							</div>
						))}
					</div>
				</section>
			</Container>
			<SEO
				title={product.name}
				description={product.description}
				openGraph={{
					type: 'website',
					title: product.name,
					description: product.description,
					images: [
						{
							url: product.images[0]?.url,
							width: '800',
							height: '600',
							alt: product.name,
						},
					],
				}}
			/>
		</>
	)
}

export default ProductView
