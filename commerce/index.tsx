import React, {
	createContext,
	MutableRefObject,
	useRef,
	useMemo,
	ReactNode,
	useContext,
} from 'react'

import type { Fetcher } from './utils/types'

export type CommerceConfig = {
	locale: string
	cartCookie: string
}

export type Provider = CommerceConfig & {
	fetcher: Fetcher
	cart?: {}
	checkout?: {}
	wishlist?: {}
	customer?: {}
	products?: {}
	auth?: {}
}

export type CommerceContextValue<P extends Provider> = {
	providerRef: MutableRefObject<P>
	fetcherRef: MutableRefObject<Fetcher>
} & CommerceConfig

const Commerce = React.createContext<CommerceContextValue<any> | {}>({})

export type CommerceProps<P extends Provider> = {
	children?: React.ReactNode
	provider: P
}

export function CoreCommerceProvider<P extends Provider>({
	provider,
	children,
}: CommerceProps<P>) {
	const providerRef = useRef(provider)
	const fetcherRef = useRef(provider.fetcher)
	const { locale, cartCookie } = providerRef.current
	const cfg = useMemo(
		() => ({ providerRef, fetcherRef, locale, cartCookie }),
		[locale, cartCookie]
	)
	return <Commerce.Provider value={cfg}>{children}</Commerce.Provider>
}

export type CommerceProviderProps = {
	children?: ReactNode
} & Partial<CommerceConfig>

export function getCommerceProvider<P extends Provider>(provider: P) {
	return function CommerceProvider({
		children,
		...props
	}: CommerceProviderProps) {
		return (
			<CoreCommerceProvider provider={{ ...provider, ...props }}>
				{children}
			</CoreCommerceProvider>
		)
	}
}

export function useCommerce<P extends Provider>() {
	return useContext(Commerce) as CommerceContextValue<P>
}
