import Head from 'next/head' 
import Layout from '../components/layout' 
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'


export default function Home({ token }) {

  return (
<Layout >
       <Navbar />
    <Head>
        <title>Cat Page</title>
    </Head>
    <div className="cat-page">

    <div>
        <h1 className="ce1">Popular Cat</h1>
   <div>

       <img src="https://i0.wp.com/shopee.co.th/blog/wp-content/uploads/2020/05/%E0%B8%AA%E0%B8%B2%E0%B8%A2%E0%B8%9E%E0%B8%B1%E0%B8%99%E0%B8%98%E0%B8%B8%E0%B9%8C%E0%B9%81%E0%B8%A1%E0%B8%A7.jpg?resize=1280%2C720&ssl=1" alt="Lamp" width="1500" height="850" ></img>   
   </div>
          <div className="tex">
          <h2>4 Most Popular Cat Breeds for Feline Lovers </h2>
          </div>
        
        <div className="link-spec"> 
           <br/>
          <a href="/Siamese" className="link-page"> Siamese</a> 
           <br/>
           <a href="/Persian" className="link-page"> Persian</a> 
            <br/>
            <a href="/MaineCoon" className="link-page"> Maine Coon </a> 
            <br/>
            <a href="/Bengal" className="link-page"> Bengal </a>     
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
