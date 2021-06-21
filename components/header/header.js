import styles from "./header.module.css"
import Link from 'next/link'
import NavLink from 'next/link'


export default function Header() {
	return(
    <div className={styles.navBar}>
    	<ul className={styles.navBarNav}>
    	<li className={styles.navItemHome}>
	    	<NavLink href="/">
		    	<a>Aydin Utting</a>
	    	</NavLink>
	    </li>
	    <li className={styles.navItem}>
	    	<NavLink href="/blog/ ">
		    	<a>Blog</a>
	    	</NavLink>
	    </li>
	    
	    <li className={styles.navItem}>
	    	<NavLink href="/changelog">
		    	<a>Changelog</a>
	    	</NavLink>
	    </li>
		<li className={styles.navItem}>
	    	<NavLink href="/contact">
		    	<a>Contact Me</a>
	    	</NavLink>
	    </li>
    	</ul>
    </div>
	)
};