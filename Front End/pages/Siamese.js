import Head from 'next/head' 
import Layout from '../components/layout' 
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'



export default function Home({ token }) {

  return (
<Layout>
        <Navbar />
    
    <Head>
        <title>Cat Breed Profile</title>
    </Head>
    <div className="cat-page">
      
       <h1 className="texthead-title">Siamese Cat: Cat Breed Profile</h1>
     <div>

        <img src="https://www.thailandexhibition.com/images/Admin-talks/articles/5f0bde906b044/images/%E0%B9%81%E0%B8%A1%E0%B8%A7%E0%B8%A7%E0%B8%B4%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%A3%E0%B8%A1%E0%B8%B2%E0%B8%A8-4.jpg" 
        alt="Lamp" width="1500" height="850"></img>
     </div>
        <div className="tex1">

        <h5 >The Siamese cat is medium-sized, svelte, and refined with long, tapering lines. It is lithe and muscular. The most striking characteristic of the Siamese cat is its "points," which are darker color patterns on the ears, face (mask), tail, legs, and feet. Siamese cats, fondly known as "meezers," are popular among those who want a pedigreed pet. Officially recognized by the Cat Fancier's Association in 1906, the Siamese is one of the original breeds of pedigreed cats.
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
            <div className="bt-back">
          
                <a href="/cat">Back</a>
    
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
