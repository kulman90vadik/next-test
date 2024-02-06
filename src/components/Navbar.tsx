import Link from 'next/link'
import styles from '../styles/navbar.module.scss'
import { useRouter } from 'next/router'

const Navbar = () => {
	const { pathname } = useRouter()
	const links = [
		{ id: 0, title: 'Home', link: '/' },
		{ id: 1, title: 'About', link: '/about' },
		{ id: 2, title: 'Contacts', link: '/contacts' },
		{ id: 3, title: 'Posts', link: '/posts' }
	]

	return (
		<nav className={styles.nav}>
			<ul className={styles.list}>


				{links.map(punkt => {
					return (
						<li className={styles.item} key={punkt.link}>
							<Link
								className={`${styles.link} ${
									punkt.link === pathname ? styles.active : styles.link
								}`}
								href={punkt.link}
							>
								{punkt.title}
							</Link>
						</li>
					)
				})}


				
			</ul>
		</nav>
	)
}

export default Navbar
