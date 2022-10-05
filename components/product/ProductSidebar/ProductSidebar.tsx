import s from './ProductSidebar.module.css'

import { FC } from 'react'
import { Product } from '@commerce/types'

interface ProductSidebarProps {
	product: Product
	className?: string
}

const ProductSidebar: FC<ProductSidebarProps> = ({ product, className }) => {
	return <div>Product Sidebar</div>
}

export default ProductSidebar
