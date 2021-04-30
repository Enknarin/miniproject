import React, { useState } from 'react'
import Head from 'next/head'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'
import axios from 'axios'


export default function Home({ token }) {

    const [cat_value, setCat] = useState({})

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const cate_facts = async (req, res) => {
        try {
            let result = await axios.get(`https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1`)
               
            console.log('result: ', result)
            console.log('result.data:  ', result.data.text)
            console.log('token:  ', token)

            setCat(result.data.text)
            
            
        }
        catch (e) {
            console.log(e)
        }

    }
   
   
    return (
        <Layout>
            <Head>
                <title>MEOW-CLUB</title>
            </Head>
            <Navbar />
             
            <div className="b4" >
             

                <div className="head">MEOW-CLUB</div>
                <div className="tex2">    
                <center> <img src="https://pbs.twimg.com/profile_images/1337340175567884290/DQvV557K_400x400.jpg" 
        alt="Lamp" width="600" height="550"  onClick={cate_facts}></img></center>
              <center> <div>Touch Cat</div></center> 

              <div className="tex1">
                 
             
              <br/><br/>
                    {JSON.stringify(cat_value)}
                </div>

            </div></div>
        </Layout>


    )
}

export function getServerSideProps({ req, res }) {
    // console.log("token from cookie: ",cookie.get("token")) 
    // console.log('req: ', req.headers)
    return { props: { token: req.cookies.token || "" } };
}
