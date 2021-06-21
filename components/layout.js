import styles from './layout.module.css'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'

export default function Layout({ children }) {
  return (
  	<>
  	<Header/>
  	<div className={styles.container}>{children}</div>
	<Footer/>
  	</>
  	)
}