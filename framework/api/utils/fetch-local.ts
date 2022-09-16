// import { FetcherError } from '@commerce/utils/errors'
// import { GraphQLFetcher } from '@commerce/api'

// import type { LocalConfig } from '../index'
// import fetch from './fetch'

// const fetchGraphqlApi: (getConfig: () => LocalConfig) => GraphQLFetcher =
// 	(getConfig) =>
// 	async (query: string, { variable, preview } = {}, fetchOptions) => {
// 		const config = getConfig()
// 		const res = await fetch(config.commerceUrl, {})
// 		const json = await res.json
// 		return { data: json.data, res }
// 	}

// export default fetchGraphqlApi
