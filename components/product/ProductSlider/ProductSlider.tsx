import React from 'react'
import cn from 'clsx'
import s from './ProductSlider.module.css'

interface ProductSliderProps {
	children?: React.ReactNode[]
	className?: string
}

const ProductSlider: React.FC<ProductSliderProps> = ({
	children,
	className = '',
}) => {
	return <div>Product Slider</div>
}

export default ProductSlider
