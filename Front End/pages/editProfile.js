import React, { useEffect, useState } from 'react'
import axios from 'axios'
import useSWR, { mutate } from 'swr'
import Layout from '../components/layout'
import withAuth from '../components/withAuth'
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'
import config from '../config/config'

const URL = `http://localhost/api/cat`

const fetcher = url => axios.get(url).then(res => res.data)

const SWR1 = ({token}) => {
    const [user, setUser] = useState({})

    useEffect(() => {
        profileUser()
    }, [])

    const profileUser = async () => {
        try {
            // console.log('token: ', token)
            const users = await axios.get(`${config.URL}/editProfile`, {
                headers: { Authorization: `Bearer ${token}` }
            })
            // console.log('user: ', users.data)
            setUser(users.data)
        }
        catch (e) {
            console.log(e)
        }

    }

   const [cat, setcat] = useState('')
   const [name, setName] = useState('')
   const [catBreeds, setcatBreeds] = useState('')
   const [catn, setcatn] = useState('')
   const [weight, setweight] = useState(0)

   const { data } = useSWR(URL, fetcher)
   if (!data) return <div>Loading...</div>
   // console.log(data)

   const printcats = (cats) => {
       console.log('cats:', cats)
      
       if (cats && cats.length)
           return (cats.map((cat, index) =>
           (<li key={index}>
                
               {(cat) ? cat.name : '-'} : {(cat) ? cat.catBreeds : '-'} : 
               {(cat) ? cat.catn : '-'}: {(cat) ? cat.weight : 0}
               <button   className="tex3"   onClick={() => deletecat(cat.id)}> Delete </button>
               <button  className="tex3"    onClick={() => getcat(cat.id)}>Get</button>
               <button className="tex3"     onClick={() => updatecat(cat.id)}>Update</button>
                
           </li>)
           ))
          
       else {
           return (<h2>No cats</h2>)
       }
       
   }

   const getcat = async (id) => {
       const result = await axios.get(`${URL}/${id}`)
       console.log('cat id: ', result.data)
       setcat(result.data)
   }

   const addcat = async (name, catBreeds, catn, weight) => {
       const result = await axios.post(URL, { name, catBreeds,catn, weight })
       console.log(result.data)
       mutate(URL)
   }

   const deletecat = async (id) => {
       const result = await axios.delete(`${URL}/${id}`)
       console.log(result.data)
       mutate(URL)
   }
    const updatecat = async (id) => {
       const result = await axios.put(`${URL}/${id}`,{
           name,
           catBreeds,
           catn,
           weight
       })
       console.log('cat id update: ', result.data)
       mutate(URL)
   }

   return (
     <Layout>
         <Navbar/>
         <div  className="b2">
         <div className="tex2">
       <h1> cat</h1>
       <ul>{printcats(data.list)}</ul> <br/>
       {JSON.stringify(user)}

       selected cat: {cat.name} {cat.catBreeds} {cat.catn} {cat.weight}
       <h2>Add cat</h2>
          Name:<input type="text" onChange={(e) => setName(e.target.value)} /><br/>
          catBreeds:<input type="text" onChange={(e) => setcatBreeds(e.target.value)} /><br/>
          catn:<input type="text" onChange={(e) => setcatn(e.target.value)} /><br/>
          weight:<input type="number" onChange={(e) => setweight(e.target.value)}/> <br />
       <button onClick={() => addcat(name, catBreeds, catn, weight)}>Add new cat</button> 

      </div></div>
    </Layout>
   )
}
export default withAuth(SWR1)

export function getServerSideProps({ req, res }) {
    return { props: { token: req.cookies.token || "" } };
}