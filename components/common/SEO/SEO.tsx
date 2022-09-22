import Head from 'next/head'
import { FC, Fragment, ReactNode } from 'react'
import config from '@config/seo_meta.json'

const storeUrl =
	process.env.NEXT_PUBLIC_STORE_URL || process.env.NEXT_PUBLIC_VERCEL_URL

const storeBaseUrl = storeUrl ? `https://${storeUrl}` : null

interface OgImage {
	url?: string
	width?: string
	height?: string
	alt?: string
}

interface Props {
	title?: string
	description?: string
	robots?: string
	openGraph?: {
		title?: string
		type?: string
		locale?: string
		description?: string
		site_name?: string
		url?: string
		images?: OgImage[]
	}
	children?: ReactNode
}

const ogImage = ({ url, width, height, alt }: OgImage, index: number) => {
	const imgUrl = storeBaseUrl ? new URL(url!, storeBaseUrl).toString() : url
	return (
		<Fragment key={`og:image:${index}`}>
			<meta
				key={`og:image:url:${index}`}
				property="og:image"
				content={imgUrl}
			/>
			<meta
				key={`og:image:width:${index}`}
				property="og:image:width"
				content={width}
			/>
			<meta
				key={`og:image:height:${index}`}
				property="og:image:height"
				content={height}
			/>
			<meta
				key={`og:image:alt:${index}`}
				property="og:image:alt"
				content={alt}
			/>
		</Fragment>
	)
}

const SEO: FC<Props> = ({
	title,
	description,
	openGraph,
	robots,
	children,
}) => {
	return (
		<Head>
			<title key="title">
				{title ? `${config.titleTemplate.replace(/%s/g, title)}` : config.title}
			</title>
			<meta
				key="description"
				name="description"
				content={description || config.description}
			/>
			<meta
				key="og:type"
				property="og:type"
				content={openGraph?.type ?? config.openGraph.type}
			/>
			<meta
				key="og:title"
				property="og:title"
				content={
					openGraph?.title ?? config.openGraph.title ?? title ?? config.title
				}
			/>
			<meta
				key="og:description"
				property="og:description"
				content={
					openGraph?.description ??
					config.openGraph.description ??
					description ??
					config.description
				}
			/>
			<meta
				key="og:site_name"
				property="og:site_name"
				content={openGraph?.site_name ?? config.openGraph.site_name}
			/>
			<meta
				key="og:url"
				property="og:url"
				content={openGraph?.url ?? config.openGraph.url}
			/>
			{openGraph?.locale && (
				<meta key="og:locale" property="og:locale" content={openGraph.locale} />
			)}
			{openGraph?.images?.length
				? openGraph.images.map((img, index) => ogImage(img, index))
				: ogImage(config.openGraph.images[0], 0)}
			{config.twitter.cardType && (
				<meta
					key="twitter:card"
					property="twitter:card"
					content={config.twitter.cardType}
				/>
			)}
			{config.twitter.handle && (
				<meta
					key="twitter:handle"
					property="twitter:handle"
					content={config.twitter.handle}
				/>
			)}
			{config.twitter.site && (
				<meta
					key="twitter:site"
					property="twitter:site"
					content={config.twitter.site}
				/>
			)}
			<meta key="robots" name="robots" content={robots ?? 'index,follow'} />
			<meta
				key="googlebot"
				name="googlebot"
				content={robots ?? 'index,follow'}
			></meta>
			{children}
		</Head>
	)
}

export default SEO
