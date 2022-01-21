import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Lets Techtask - Movie Session" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <Link href="/"><a>Let&apos;s Movie Session!</a></Link>
        </h1>

        <p className={styles.description}>
          Get started by picking a {' '}
          <code className={styles.code}>use case</code>
        </p>

        <div className={styles.grid}>
          <Link href="/signup" passHref>
            <div className={styles.card}>
              <h2>SignUp &rarr;</h2>
              <p>User-facing SignUp component with tests for a hook UI component</p>
            </div>
          </Link>

          <Link href="/admin" passHref>
            <div className={styles.card}>
              <h2>Admin &rarr;</h2>
              <p>Admin-facing list of registered users and user&apos;s selected movie and cinema session dates and seat number (no tests required here)</p>
            </div>
          </Link>
        </div>
      </main>
    </div>
  )
}

export default Home
