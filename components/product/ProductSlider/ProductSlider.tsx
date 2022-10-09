import React, {
	Children,
	isValidElement,
	useEffect,
	useRef,
	useState,
} from 'react'
import cn from 'clsx'
import s from './ProductSlider.module.css'

import { a } from '@react-spring/web'

import { useKeenSlider } from 'keen-slider/react'
import ProductSliderControl from '../ProductSliderControl'

interface ProductSliderProps {
	children?: React.ReactNode[]
	className?: string
}

const ProductSlider: React.FC<ProductSliderProps> = ({
	children,
	className = '',
}) => {
	const [currentSlide, setCurrentSlide] = useState(0)
	const [isMounted, setIsMounted] = useState(false)
	const sliderContainerRef = useRef<HTMLDivElement>(null)
	const thumbsContainerRef = useRef<HTMLDivElement>(null)

	const [ref, slider] = useKeenSlider<HTMLDivElement>({
		loop: true,
		slides: { perView: 1 },
		created: () => setIsMounted(true),
		slideChanged(s: any) {
			const slideNumber = s.track.details.rel
			setCurrentSlide(slideNumber)

			if (thumbsContainerRef.current) {
				const $el = document.getElementById(`thumnb-${slideNumber}`)
				if (slideNumber >= 3) {
					thumbsContainerRef.current.scrollLeft = $el!.offsetLeft
				} else {
					thumbsContainerRef.current.scrollLeft = 0
				}
			}
		},
	})

	useEffect(() => {
		const preventNavigation = (event: TouchEvent) => {
			const touchXPosition = event.touches[0].pageX
			const touchXRadius = event.touches[0].radiusX || 0

			if (
				touchXPosition - touchXRadius < 10 ||
				touchXPosition + touchXRadius > window.innerWidth - 10
			) {
				event.preventDefault()
			}
		}

		const slider = sliderContainerRef.current!

		slider.addEventListener('touchstart', preventNavigation)

		return () => {
			if (slider) {
				slider.removeEventListener('touchstart', preventNavigation)
			}
		}
	}, [])

	const onPrev = React.useCallback(() => slider.current?.prev(), [slider])
	const onNext = React.useCallback(() => slider.current?.next(), [slider])

	return (
		<div className={cn(s.root, className)} ref={sliderContainerRef}>
			<div
				ref={ref}
				className={cn(s.slider, { [s.show]: isMounted }, 'keen-slider')}
			>
				{slider && <ProductSliderControl onPrev={onPrev} onNext={onNext} />}
				{Children.map(children, (child) => {
					if (isValidElement(child)) {
						return {
							...child,
							props: {
								...child.props,
								className: `${
									child.props.className ? `${child.props.className}` : ''
								}keen-slider__slide`,
							},
						}
					}
					return child
				})}
			</div>

			<a.div className={s.album} ref={thumbsContainerRef}>
				{slider &&
					Children.map(children, (child, idx) => {
						if (isValidElement(child)) {
							return {
								...child,
								props: {
									...child.props,
									className: cn(child.props.className, s.thumb, {
										[s.selected]: currentSlide === idx,
									}),
									id: `thmb-${idx}`,
									onClick: () => {
										slider.current?.moveToIdx(idx)
									},
								},
							}
						}
						return child
					})}
			</a.div>
		</div>
	)
}

export default ProductSlider
