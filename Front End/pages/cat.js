import Head from 'next/head' 
import Layout from '../components/layout' 
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'


export default function Home({ token }) {

  return (
    <Layout >
       <Navbar />
      <div  className="ce4">
    <Head>
        <title>Cat Page</title>
    </Head>
    <div>
        <h1 className="ce1">Popular Cat</h1>
        <div className="cat">
        <center className="ca">  <img src="https://i.pinimg.com/originals/3d/bf/88/3dbf885dfdf81b4082a21996ec9cb0fa.jpg" alt="Lamp" width="500" height="850" ></img>    </center>
        <h2 className="ce2">4 Most Popular Cat Breeds for Feline Lovers </h2>
        <div className="ce3"> 
           <br/>
           ▪<Link href="/Siamese"><a> Siamese </a></Link> 
           <br/>
           ▪<Link href="/Persian"><a> Persian </a></Link> 
            <br/>
            ▪<Link href="/MaineCoon"><a> Maine Coon </a></Link> 
            <br/>
            ▪<Link href="/Ragdoll"><a> Ragdoll </a></Link>     
        </div>
        <div className="button">
         <a href="./cat.js">Contact</a> 
         <input type="button" value="Back" onClick="/.catja"></input>
        </div>
       
        </div>
        </div>
        
        
    </div>
</Layout>
  )
}

export function getServerSideProps({ req, res }) {
  // console.log("token from cookie: ",cookie.get("token")) //<img src="https://www.coopsandcages.com.au/wp-content/uploads/2020/01/Ultimate-List-of-the-Most-Popular-Cat-Breeds-in-Australia-1067x800.jpg" alt="Lamp" width="400" height="350"></img>
  // console.log('req: ', req.headers)
  return { props: { token: req.cookies.token || "" } };
}
