import type {
	GetStaticPropsContext,
	InferGetStaticPropsType,
	NextPage,
} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import commerce from '@lib/api/commerce'

import { Grid, Hero, Marquee } from '@components/ui'
import { ProductCard } from '@components/products'

const Home = ({ products }: InferGetStaticPropsType<typeof getStaticProps>) => {
	console.log(products)
	return (
		<>
			<Grid variant="filled">
				{products.map((product: any, i: number) => {
					return (
						<ProductCard
							key={product.id}
							product={product}
							imgProps={{
								width: i === 0 ? 1080 : 540,
								height: i === 0 ? 1080 : 540,
								priority: true,
							}}
						/>
					)
				})}
			</Grid>
			<Marquee variant="secondary">
				{products.map((product: any, i: number) => (
					<ProductCard key={product.id} product={product} variant="slim" />
				))}
			</Marquee>
			<Hero
				headline=" Dessert dragée halvah croissant."
				description="Cupcake ipsum dolor sit amet lemon drops pastry cotton candy. Sweet carrot cake macaroon bonbon croissant fruitcake jujubes macaroon oat cake. Soufflé bonbon caramels jelly beans. Tiramisu sweet roll cheesecake pie carrot cake. "
			/>
			<p className="text-3xl text-cyan">Hello</p>
		</>
	)
}

export async function getStaticProps({
	preview,
	locale,
	locales,
}: GetStaticPropsContext) {
	const config = { locale, locales }

	const productsPromise = commerce.getAllProducts({
		variables: { first: 6 },
		config,
		preview,
		...({ featured: true } as any),
	})

	const { products } = await productsPromise

	return {
		props: {
			products,
		},
		revalidate: 60,
	}
}

export default Home
