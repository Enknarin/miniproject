import Head from 'next/head' 
import Layout from '../components/layout' 
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'



export default function Home({ token }) {

  return (
    <Layout>
    <Head>
        <title>First Page</title>
    </Head>
    <div>
        <Navbar />
        <h1 className="head">MEOW-CLUB โลก ของ แมว</h1>
        <div className="cat">
        <img src="https://i.pinimg.com/originals/3d/bf/88/3dbf885dfdf81b4082a21996ec9cb0fa.jpg" alt="Lamp" width="500" height="850"></img>
        <h5 className="message1">4 Most Popular Cat Breeds for Feline Lovers
          <br/>
           <br/>
           ▪ Siamese
           
           <br/>
            ▪ Persian
            <br/>
            ▪ Maine Coon
            <br/>
            ▪ Ragdoll
            
            </h5>
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
