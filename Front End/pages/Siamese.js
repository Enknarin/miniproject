import Head from 'next/head' 
import Layout from '../components/layout' 
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'



export default function Home({ token }) {

  return (
    <Layout>
    <Head>
        <title>Cat Breed Profile</title>
    </Head>
    <div>
        <Navbar />
        <center> <h1 className="head">Siamese Cat: Cat Breed Profile</h1></center> 
        <div className="cat">
        <center> <img src="https://www.thesprucepets.com/thmb/hJTzh-kEZuUMdmQPeBAgBSEMLk4=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/SiameseChocolatePointCat_3867x2578-56b65ca43df78c0b1359692d.jpg" alt="Lamp" width="500" height="850"></img>
        </center> <h5 className="message1">The Siamese cat is medium-sized, svelte, and refined with long, tapering lines. It is lithe and muscular. The most striking characteristic of the Siamese cat is its "points," which are darker color patterns on the ears, face (mask), tail, legs, and feet. Siamese cats, fondly known as "meezers," are popular among those who want a pedigreed pet. Officially recognized by the Cat Fancier's Association in 1906, the Siamese is one of the original breeds of pedigreed cats.
          <br/>
           <br/>
           ▪ WEIGHT: 6 to 14 pounds
           
           <br/>
            ▪ LENGTH: Up to 14 inches
            <br/>
            ▪ COAT: Short
            <br/>
            ▪ COAT COLOR: Seal, chocolate, blue, and lilac
            <br/>
            ▪ EYE COLOR: Blue
            <br/>
            ▪ LIFE EXPECTANCY: 8 to 12 years
            
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
