// import { Inter } from "next/font/google";
// import { useCallback, useEffect, useState } from 'react'
// const inter = Inter({ subsets: ["latin"] });
import axios from 'axios'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import styles from '@/styles/contact.module.scss'
import { FC } from 'react'
import Heading from '@/components/Heading'
import Link from 'next/link'

export const getStaticProps:GetStaticProps = async () => {
	const { data } = await axios('https://jsonplaceholder.typicode.com/users')
	if(!data) { return { notFound: true} }
	return {props: {users: data}}
}

type Props = {
	users: usersType[]
}


const Contacts:FC<Props> = ({users}) => {
	// const [users, setUsers] = useState([])
	// const fetchUsers = useCallback(async () => {
	// 	try {
	// 		const { data } = await axios('https://jsonplaceholder.typicode.com/users')
	// 		setUsers(data)
	// 	} catch (error) {
	// 		console.log(error)
	// 	}
	// }, [])
	// useEffect(() => {
	// 	fetchUsers()
	// }, [fetchUsers])

	return (
		<>
			<Head>
				<title>Contacts</title>
			</Head>
			<Heading text='Contact' />

			<ul className={styles.list}>
				{users &&
					users.map((item: usersType) => {
						return (
							<li key={item.id} className={styles.item}>
								<Link className={styles.title} href={`/contacts/${item.id}`}>{item.name}</Link>
								<span className={styles.body}>{item.email}</span>
							</li>
						)
					})}
			</ul>


		</>
	)
}

export default Contacts
