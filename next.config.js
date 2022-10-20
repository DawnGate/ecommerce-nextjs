/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['cdn.shopify.com'],
	},
	i18n: {
		locales: ['en-US', 'es', 'vi'],
		defaultLocale: 'en-US',
	},
	experimental: {
		esmExternals: 'loose',
	},
}

const commerce = require('./commerce.config.json')
const { withCommerceConfig, getProviderName } = require('./commerce-config')

module.exports = withCommerceConfig({
	commerce,
	...nextConfig,
})

console.log('next.config.js', JSON.stringify(module.exports, null, 2))
