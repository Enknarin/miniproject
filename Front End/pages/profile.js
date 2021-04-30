import Head from 'next/head'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import withAuth from '../components/withAuth'
import config from '../config/config'

const Profile1 = ({ token }) => {

      const [user, setUser] = useState({})

    useEffect(() => {
         profileUser()
     }, [])

     const profileUser = async () => {
         try {
              console.log('token: ', token)
            const users = await axios.get(`${config.URL}/profile`, {
                 headers: { Authorization: `Bearer ${token}` }
             })
              console.log('user: ', users.data)
             setUser(users.data)
         }
         catch (e) {
             console.log(e)
         }

    }
 
    return (
        <Layout>
            <Head>
                <title>User profile</title>
            </Head>
            <div >
                <Navbar />
            <div className="b4" >

                <center className="lu2"> User profile </center>
                <center> <img src="http://pngimg.com/uploads/cat/cat_PNG50491.png" 
        alt="Lamp" width="500" height="450"></img></center>
                
                <div className = "text1">
                    <b>Token:</b> {token.substring(0, 15)}... <br /><br />
                           While cats are generally low maintenance pets compared to dogs, they still require a lot of care and attention.
                    <br/>
                    they still require a lot of care and attention.
                    <br/><br/>
                    {JSON.stringify(user)}
                </div>
            </div>
            </div> 
        </Layout>
    )
}

export default withAuth(Profile1)

export function getServerSideProps({ req, res }) {
    return { props: { token: req.cookies.token || "" } };
}