import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/header/header'
import React, { useState } from 'react';
import Footer from '../components/footer/footer'
const ProfilePic = () => (

      <Image
        src="/images/profilepic.jpeg" // Route of the image file
        height={300} // Desired size with correct aspect ratio
        width={300} // Desired size with correct aspect ratio
        alt="Aydin Utting"
      />
)

export default function Home() {
  
  const [count, setCount] = useState(0)
  
  return (
      <>
      <Head>
        <title>My First Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main className={styles.main}>
       <h1>Ayd&#305;n Utting</h1>
       <h2>Everything here is work in progress.</h2>
      </main>

      <Footer/>
      </>
  )
}