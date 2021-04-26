import Head from 'next/head'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import React,{ useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import config from '../config/config'
import useSWR, { mutate } from 'swr'
import Link from 'next/link'

const URL = `http://localhost/api/students`
const fetcher = url => axios.get(url).then(res => res.data)


const Profile2 = ({token}) => {
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

  const showStudents = () => {
    if (data.list && data.list.length) {
      return data.list.map((student, index) => {
        return (
          <div className={styles.listItem} key={index}>
            <div><b>Name:</b> {student.name}</div>
            <div><b>Surname:</b> {student.surname}</div>
             <div> <b>Major:</b> {student.major} </div>
            <div><b>GPA:</b> {student.gpa}</div>
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
                <title>Student profile</title>
            </Head>
            <div >
                <Navbar />
                <div>
                    <h1>---Students---</h1>
                    {showStudents()}
                    <div><Link href="/editProfile"><a><b>Edit</b> </a></Link> </div>
                </div>
            </div>
            
        </Layout>
    )
}
export default Profile2

export function getServerSideProps({ req, res }) {
    return { props: { token: req.cookies.token || "" } };
}