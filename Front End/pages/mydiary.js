import Head from 'next/head'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import React,{ useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import config from '../config/config'
import useSWR, { mutate } from 'swr'
import Link from 'next/link'

const URL = `http://localhost/api/cat`
const fetcher = url => axios.get(url).then(res => res.data)


const cat2 = ({token}) => {
  // const [user, setUser] = useState({})

  //   useEffect(() => {
  //       profileUser()
  //   }, [])

  //   const profileUser = async () => {
  //       try {
  //           // console.log('token: ', token)
  //           const users = await axios.get(`${config.URL}/profile`, {
  //               headers: { Authorization: `Bearer ${token}` }
  //           })
  //           // console.log('user: ', users.data)
  //           setUser(users.data)
  //       }
  //       catch (e) {
  //           console.log(e)
  //       }

  //   }
  
    const { data } = useSWR(URL, fetcher)
   if (!data) return <div>Loading...</div>
  //  console.log(data)

  const showcats = () => {
    if (data.list && data.list.length) {
      return data.list.map((cat, index) => {
        return (
          <div className={styles.listItem} key={index}>
            <div><b>Name:</b> {cat.name}</div>
            <div><b>catBreeds:</b> {cat.catBreeds}</div>
             <div> <b>catn:</b> {cat.catn} </div>
            <div><b>weight:</b> {cat.weight}</div>
            <br/>
            
          </div>
        );
      });
    } else {
      return <p>Loading...</p>;
    }
  };

    return (
        <Layout>
            <Head>
                <title>My cat</title>
            </Head>
            <div >
                <Navbar />
                <div>
                    <h1>---Diary---</h1>
                    {showcats()}
                    <div><Link href="/editProfile"><a><b>Edit</b> </a></Link> </div>
                </div>
            </div>
            
        </Layout>
    )
}
export default cat2

export function getServerSideProps({ req, res }) {
    return { props: { token: req.cookies.token || "" } };
}