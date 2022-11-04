import s from './ProductSidebar.module.css'

import { FC, useState } from 'react'
import { Product } from '@commerce/types'

import { Collapse, Text, Rating } from '@components/ui'
import Button from '@components/ui/Button'
import { SelectedOptions } from '../helpers'

import { ProductOptions } from '@components/product'

interface ProductSidebarProps {
	product: Product
	className?: string
}

const ProductSidebar: FC<ProductSidebarProps> = ({ product, className }) => {
	const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>({})
	return (
		<div className={className}>
			<ProductOptions
				options={product.options}
				selectedOptions={selectedOptions}
				setSelectedOptions={setSelectedOptions}
			/>
			<Text
				className="pb-4 break-words w-full max-w-full"
				html={product.descriptionHtml || product.description}
			/>
			<div className="flex flex-row justify-between items-center">
				<Rating value={4} />
				<div className="text-accent-6 pr-1 font-medium text-sm">36 reviews</div>
			</div>
			<div>
				<Button
					aria-label="Add to Cart"
					type="button"
					className={s.button}
					// onClick={addToCart}
					// loading={loading}
					// disabled={variant?.availableForSale === false}
				>
					{/* {variant?.availableForSale === false ? "Not Available" : "Add To Cart"} */}
					Add To Cart
				</Button>
			</div>
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
