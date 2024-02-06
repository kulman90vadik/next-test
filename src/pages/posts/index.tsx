import Heading from '@/components/Heading'
import styles from '../../styles/posts.module.scss'
import axios from 'axios'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { FC } from 'react'

export const getStaticProps: GetStaticProps = async () => {
	const { data } = await axios('https://jsonplaceholder.typicode.com/posts')
	if (!data) {
		return { notFound: true }
	}
	return { props: { posts: data } }
}

type Props = {
	posts: postsType[]
}

const Posts: FC<Props> = ({ posts }) => {
	return (
		<>
			<Head>
				<title>Posts</title>
			</Head>
			<Heading text='Posts' />
			<ul className={styles.posts}>
				{posts &&
					posts.map(item => {
						return (
							<li className={styles.item} key={item.id}>
								<Link
									className={styles.link}
								
									style={{ display: 'block' }}
									href={`/posts/${item.id}`}
								>
									{item.title}
								</Link>
							</li>
						)
					})}
			</ul>
		</>
	)
}

export default Posts
