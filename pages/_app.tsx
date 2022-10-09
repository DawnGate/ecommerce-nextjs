import '@assets/main.css'
import '@assets/chrome-bug.css'
import 'keen-slider/keen-slider.min.css'
import type { AppProps, NextWebVitalsMetric } from 'next/app'
import { FC, ReactNode, useEffect } from 'react'
import { Head } from '@components/common'

export function reportWebVitals(metric: NextWebVitalsMetric) {
	console.log(metric)
}

const Noop: FC<{ children?: ReactNode }> = ({ children }) => <>{children}</>

function MyApp({ Component, pageProps }: AppProps) {
	const Layout = (Component as any).Layout || Noop

	useEffect(() => {
		document.body.classList?.remove('loading')
	}, [])

	return (
		<>
			<Head />
			<Layout pageProps={pageProps}>
				<Component {...pageProps} />
			</Layout>
		</>
	)
}

export default MyApp
