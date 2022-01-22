import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import styles from '../styles/Signup.module.css'

function capitalizeFirstLetter(string:String) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const movieList = [
    { name: 'The 400 Blows (1959)' },
    { name: 'La Haine  (1995)' },
    { name: 'The Godfather (1972)' },
    { name: 'The Godfather: Part II (1974)' },
    { name: 'Man Bites Dog (1992)' },
    { name: 'The Departed (2006)' },
    { name: 'White Heat (1949)' },
]
const timeList = Array.from({length: 24}, (_, i) => (i < 10 ? '0' : '') + i + ':00')
const rowsList = Array.from({length: 10}, (_, i) => i + 1)
const seatsList = Array.from({length: 10}, (_, i) => i + 1)

const defaultFormData = {
    firstname: '',
    lastname: '',
    email: '',
    avatar: '',
    phone: '',
    movie: '',
    time: '',
    row: '',
    seat: ''
};

const Signup: NextPage = () => {
  const [formData, setFormData] = useState(defaultFormData)
  
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let aux:Array<Object> = [];
    // Parse the serialized data back into an aray of objects
    aux = JSON.parse(localStorage.getItem('movieSessions') || '[]') || [];
    // Push the new data (whether it be an object or anything else) onto the array
    aux.push(formData);
    // Re-serialize the array back into a string and store it in localStorage
    localStorage.setItem('movieSessions', JSON.stringify(aux));

    setFormData(defaultFormData);
  }

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

        <div className={styles['signup-form']}>
            <form onSubmit={handleSubmit}>
                <h2>Sign Up</h2>
                <p>Please fill in this form to create an account and book a session!</p>
                <hr />
                <div className={styles['form-group']}>
                    <div className={styles['input-group']}>
                        <input type="text" className="form-control" name="firstname" placeholder="First name" value={formData.firstname} data-testid="firstname" onChange={(e) => setFormData({...formData, firstname: e.target.value})} required={true} />
                    </div>
                </div>
                <div className={styles['form-group']}>
                    <div className={styles['input-group']}>
                        <input type="text" className="form-control" name="lastname" placeholder="Last name" value={formData.lastname} data-testid="lastname" onChange={(e) => setFormData({...formData, lastname: e.target.value})} required={true} />
                    </div>
                </div>
                <div className={styles['form-group']}>
                    <div className={styles['input-group']}>
                        <input type="email" className="form-control" name="email" placeholder="Email" value={formData.email} data-testid="email" onChange={(e) => setFormData({...formData, email: e.target.value})} required={true} />
                    </div>
                </div>
                <div className={styles['form-group']}>
                    <div className={styles['input-group']}>
                        <span>Avatar: </span>
                        <input id="avatar" name="avatar" type="file" value={formData.avatar} data-testid="avatar" onChange={(e) => setFormData({...formData, avatar: e.target.value})} required={true} />
                    </div>
                </div>
                <div className={styles['form-group']}>
                    <div className={styles['input-group']}>
                        <input type="text" className="form-control" name="phone" placeholder="Phone" value={formData.phone} data-testid="phone" onChange={(e) => setFormData({...formData, phone: e.target.value})} required={true} />
                    </div>
                </div>
                <div className={styles['form-group']}>
                    <div className={styles['input-group']}>
                        <select className="form-select" aria-label="Select movie" value={formData.movie} data-testid="movie" onChange={(e) => setFormData({...formData, movie: e.target.value})}>
                            <option value="">Select movie</option>
                            {movieList.map((item, i) => {
                                return (<option key={'movieOption' + i} value={item.name}>{item.name}</option>)
                            })}
                        </select>
                    </div>
                </div>
                <div className={styles['form-group']}>
                    <div className={styles['input-group']}>
                        <select className="form-select" aria-label="Select time" value={formData.time} data-testid="time" onChange={(e) => setFormData({...formData, time: e.target.value})}>
                            <option value="">Select time</option>
                            {timeList.map((item, i) => {
                                return (<option key={'timeOption' + i} value={item}>{item}</option>)
                            })}
                        </select>
                    </div>
                </div>
                <div className={styles['form-group']}>
                    <div className={styles['input-group']}>
                        <select className="form-select" aria-label="Select row" value={formData.row} data-testid="row" onChange={(e) => setFormData({...formData, row: e.target.value})}>
                            <option value="">Select row</option>
                            {rowsList.map((item, i) => {
                                return (<option key={'rowOption' + i} value={item}>{item}</option>)
                            })}
                        </select>
                    </div>
                </div>
                <div className={styles['form-group']}>
                    <div className={styles['input-group']}>
                        <select className="form-select" aria-label="Select seat" value={formData.seat} data-testid="seat" onChange={(e) => setFormData({...formData, seat: e.target.value})}>
                            <option value="">Select seat</option>
                            {seatsList.map((item, i) => {
                                return (<option key={'seatOption' + i} value={item}>{item}</option>)
                            })}
                        </select>
                    </div>
                </div>
                <div className={styles['form-group']}>
                    <label className="checkbox-inline"><input type="checkbox" required={true} /> I accept the <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a></label>
                </div>
                <div className={styles['form-group']}>
                    <button type="submit"  data-testid="submitBtn"  className="btn btn-primary btn-lg">Sign Up</button>
                </div>
            </form>
        </div>
      </main>
    </div>
  )
}

export default Signup