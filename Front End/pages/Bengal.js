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
    <div className="ce4">
    <div>
       
        <center> <h1 className="s1">Bengal Cat: Cat Breed Profile</h1></center> 
        <div className="cat">
        <center> <img src="
        https://www.thailandexhibition.com/images/Admin-talks/articles/5f0bde906b044/images/%E0%B9%81%E0%B8%A1%E0%B8%A7%E0%B9%80%E0%B8%9A%E0%B8%87%E0%B8%81%E0%B8%AD%E0%B8%A5-12.jpg"
         alt="Lamp" width="1500" height="850"></img></center> 
        <h5 className="message1">Bengals are wild-looking cats—literally. Their markings make them look more like they belong in the jungle rather than in your home, but they are domesticated. They are talkative and require a lot of exercise. They come in many colors with patterns like spots and rosettes. Their name comes from the Asian leopard cat’s taxonomic name, Prionailurus bengalensis bengalensis. Bengals were initially bred from domestic cats and a wildcat. They also get their beautiful patterns from this wildcat.
          <br/>
           <br/>
           ▪ WEIGHT: 8 to 15 pounds
           
           <br/>
            ▪ HEIGHT:  13 to 16 inches
            
            <br/>
            ▪ COAT COLORS: Shorthaired, spotted, or marbled coat with patterns in black, chocolate, or gray/silver with green or gold eyes
            
            <br/>
            ▪ LIFE EXPECTANCY: 10 to 16 years
            
            </h5>
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
