const path = require('path')
const fs = require('fs')
const prettier = require('prettier')
const merge = require('deepmerge')
// const core = require('@vercel/commerce/config')

const PROVIDER = ['@vercel/commerce-local']

function getProviderName() {
	return process.env.COMMERCE_PROVIDER
}

function withCommerceConfig(nextConfig = {}) {
	const config = merge(
		{ commerce: { provider: getProviderName() } },
		nextConfig
	)

	const { commerce } = config
	const { provider } = commerce

	// return core.withCommerceConfig(config)

	return config
}

module.exports = { withCommerceConfig, getProviderName }
