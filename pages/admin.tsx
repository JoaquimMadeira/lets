import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react';
import styles from '../styles/Admin.module.css'

const Admin: NextPage = () => {
  const [movieSessions, setMovieSessions] = useState([]);

  const loadMovieSessions = () => {
    var aux = [];
    const lsMovieSessionsJSON = localStorage.getItem('movieSessions');

    if (lsMovieSessionsJSON !== null) {
      aux = JSON.parse(lsMovieSessionsJSON);
      setMovieSessions(aux);
    }
  }

  useEffect(() => {
    loadMovieSessions();
  }, [])

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

        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Firstname</th>
              <th scope="col">Lastname</th>
              <th scope="col">Email</th>
              <th scope="col">Avatar</th>
              <th scope="col">Phone</th>
              <th scope="col">Movie</th>
              <th scope="col">Row</th>
              <th scope="col">Seat</th>
            </tr>
          </thead>
          <tbody>
            {movieSessions && movieSessions.map((item, i) => {
              return( 
                <tr key={'movieSession' + i}>
                  <th scope="row">{i+1}</th>
                  <td>{item['firstname']}</td>
                  <td>{item['lastname']}</td>
                  <td>{item['email']}</td>
                  <td>{item['avatar']}</td>
                  <td>{item['phone']}</td>
                  <td>{item['movie']}</td>
                  <td>{item['row']}</td>
                  <td>{item['seat']}</td>
                </tr>)
            })}
          </tbody>
        </table>
      </main>
    </div>
  )
}

export default Admin