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
			<Container>
				<div>
					<div>
						<ProductTag
							name={product.name}
							price={`${price} ${product.price?.currencyCode}`}
							fontSize={32}
						/>
						<div>
							<ProductSlider key={product.id}>
								{product.images.map((image, i) => (
									<div key={image.url}>
										<Image
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
							productId={product.id}
							variant={product.variants[0]}
						/>
					</div>
					<ProductSidebar key={product.id} product={product} />
				</div>
				<hr />
				<section>{/* <Text></Text> */}</section>
			</Container>
		</>
	)
}

export default ProductView
