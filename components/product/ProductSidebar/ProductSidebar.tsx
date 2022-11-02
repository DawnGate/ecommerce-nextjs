import s from './ProductSidebar.module.css'

import { FC } from 'react'
import { Product } from '@commerce/types'

import { Text } from '@components/ui'

interface ProductSidebarProps {
	product: Product
	className?: string
}

const ProductSidebar: FC<ProductSidebarProps> = ({ product, className }) => {
	return (
		<div className={className}>
			{/* <ProductOptions/> */}
			<Text
				className="pb-4 break-words w-full max-w-full"
				html={product.descriptionHtml || product.description}
			/>
			<div className="flex flex-row justify-between items-center">
				{/* <Rating value={4} /> */}
				<div className="text-accent-6 pr-1 font-medium text-sm">36 reviews</div>
			</div>
			<div>Add to cart</div>
			<div className="mt-6">{/* <Collapse></Collapse> */}</div>
		</div>
	)
}

export default ProductSidebar
