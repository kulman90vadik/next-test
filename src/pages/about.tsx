import Heading from '../components/Heading'
import styles from '../styles/about.module.scss'
import Image from 'next/image'
import dom from '../../public/dom.jpg'
import Head from 'next/head'

const About = () => {
	return (
		<div className={styles.about}>
			<Head><title>About</title></Head>
			<Heading text='About' />
			<Image
				className={styles.image}
				src={dom}
				width={1000}
				height={800}
				alt='Dom'
				blurDataURL='blur'
				loading='lazy'
			/>
		</div>
	)
}

export default About
