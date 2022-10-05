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

module.exports = nextConfig
