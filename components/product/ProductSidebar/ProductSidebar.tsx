import s from './ProductSidebar.module.css'

import { FC } from 'react'
import { Product } from '@commerce/types'

import { Collapse, Text } from '@components/ui'

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
			<div className="mt-6">
				<Collapse title="Care">
					this is a limited edition production run. Printing tarts when the drop
					ends.
				</Collapse>
				<Collapse title="Details">
					This is a limited edition production run. Printing starts when the
					drop ends. Reminder: Bad Boys For Life. Shipping may take 10+ days due
					to COVID-19.
				</Collapse>
			</div>
		</div>
	)
}

export default ProductSidebar
