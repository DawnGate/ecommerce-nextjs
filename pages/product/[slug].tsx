import { Layout } from '@components/common'
import commerce from '@lib/api/commerce'
import {
	GetStaticPathsContext,
	GetStaticPropsContext,
	InferGetStaticPropsType,
} from 'next'
import { useRouter } from 'next/router'

export async function getStaticProps({
	params,
	locale,
	locales,
	preview,
}: GetStaticPropsContext<{ slug: string }>) {
	const config = { locale, locales }
	const pagesPromise = commerce.getAllPages({ config, preview })
	const siteInfoPromise = commerce.getSiteInfo({ config, preview })
	const productPromise = commerce.getProduct({
		variables: { slug: params!.slug },
		config,
		preview,
	})

	const allProductsPromise = commerce.getAllProducts({
		variables: { first: 4 },
		config,
		preview,
	})

	const { pages } = await pagesPromise
	const { categories } = await siteInfoPromise
	const { product } = await productPromise
	const { products: relatedProducts } = await allProductsPromise

	if (!product) {
		throw new Error(`Product with slug '${params!.slug} not found`)
	}

	return {
		props: {
			pages,
			product,
			relatedProducts,
			categories,
		},
		revalidate: 200,
	}
}

export async function getStaticPaths({ locales }: GetStaticPathsContext) {
	const { products } = await commerce.getAllProductPaths()
	return {}
}

export default function Slug({
	product,
	relatedProducts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	// Infer getstatic props type is using in typescript
	const router = useRouter()
	return router.isFallback ? <h1>Loading...</h1> : <div>Hello</div>
}

Slug.Layout = Layout
