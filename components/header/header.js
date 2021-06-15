import styles from "./header.module.css"
import Link from 'next/link'
import NavLink from 'next/link'

export default function Header() {
	return(
    <div className={styles.navBar}>
    	<ul className={styles.navBarNav}>
    	<li className={styles.navItem}>
	    	<NavLink href="/">
		    	<a>Home</a>
	    	</NavLink>
	    </li>
	    <li className={styles.navItem}>
	    	<NavLink href="/posts/first-post">
		    	<a>First Post</a>
	    	</NavLink>
	    </li>
	    
	    <li className={styles.navItem}>
	    	<NavLink href="/changelog">
		    	<a>Changelog</a>
	    	</NavLink>
	    </li>
	     <li className={styles.navItem}>
	    	<NavLink href="/blogpost">
		    	<a>MDXtest</a>
	    	</NavLink>
	    </li>
		<li className={styles.navItemMain}>
	    	<NavLink href="/">
		    	<a>Contact Me</a>
	    	</NavLink>
	    </li>
    	</ul>
    </div>
	)
};