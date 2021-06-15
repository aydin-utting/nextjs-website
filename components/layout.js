import styles from './layout.module.css'
import Header from '../components/header/header'

export default function Layout({ children }) {
  return (
  	<>
  	<Header/>
  	<div className={styles.container}>{children}</div>
  	</>
  	)
}