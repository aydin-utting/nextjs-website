import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout'
import React, { useState } from 'react';
const ProfilePic = () => (

      <Image
        src="/images/profilepic.jpeg" // Route of the image file
        height={144} // Desired size with correct aspect ratio
        width={144} // Desired size with correct aspect ratio
        alt="Aydin Utting"
      />
)

export default function Home() {
  
  const [count, setCount] = useState(0)
  
  return (
    <Layout>
      
      <Head>
        <title>My First Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={styles.main}>
        <ProfilePic/>
        <h1 className={styles.title}>
          Welcome to my website!
        </h1>

        <p className={styles.description}>
          This website is in beta
        </p>

        <div className={styles.grid}>

          <Link href="posts/first-post" className={styles.card}>
          <a>
            <h2>First Post &rarr;</h2>
            <p>My first post</p>
          </a>
          </Link>

          <Link href="https://www.linkedin.com/in/alex-dadswell-886342200/" className={styles.card}>
          <a>
            <h2>A better CV&rarr;</h2>
            <p>By alex daddy</p>
          </a>
          </Link>

          <button class={styles.pushable}  onClick={() => setCount(count + 1)}>
            <span class={styles.front}>
              {count}
            </span>
          </button>

        </div>
      </main>

      <footer className={styles.footer}>
        &copy; Ayd&#305;n Utting 2021
      </footer>
    </Layout>
  )
}