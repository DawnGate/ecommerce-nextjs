import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { Hero } from '@components/ui'

const Home: NextPage = () => {
	return (
		<>
			<Hero
				headline=" Dessert dragée halvah croissant."
				description="Cupcake ipsum dolor sit amet lemon drops pastry cotton candy. Sweet carrot cake macaroon bonbon croissant fruitcake jujubes macaroon oat cake. Soufflé bonbon caramels jelly beans. Tiramisu sweet roll cheesecake pie carrot cake. "
			/>
			<p className="text-3xl text-cyan">Hello</p>
		</>
	)
}

export default Home
