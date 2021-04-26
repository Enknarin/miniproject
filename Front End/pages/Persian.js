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
        <center> <h1 className="head">Persian Cat: Cat Breed Profile</h1> </center> 
        <div className="cat">
        <center> <img src="https://www.thesprucepets.com/thmb/EsxD7IrW92nCnII63BaUKg_x2Os=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/exotic-flat-face-persian-short-hair_t20_b8zdjB-5c45254e46e0fb00015ca255.jpg" alt="Lamp" width="500" height="850"></img>
        </center> <h5 className="message1">The dignified Persian feline breed is characterized by its long coat and sweet temperament, though Persians tend to limit their affections to just those humans they are closest to. Among purebred cats, Persians are revered for their glamorous good looks and calm demeanor.

Although the exact history of the Asiatic breed is murky, the breed has become one of the most popular among purebred cat lovers in North America, both for showing purposes and for their tendency to be calm and loving pets. Persians are natural cuddlers and lap cats with relatively undemanding personalities—together, these traits have perpetuated their popularity and made them a mainstay of the show circuit and the home.
          <br/>
           <br/>
           ▪ WEIGHT: 7 to 12 pounds
           
           <br/>
            ▪ LENGTH: About 14 to 18 inches
            <br/>
            ▪ COAT: Long
            <br/>
            ▪ COAT COLOR: Solid (white, black, cream, etc.), tabby, calico, bi-color, silver and gold, shaded and smoke, and Himalayan
            <br/>
            ▪ EYE COLOR: Blue, green, blue-green, hazel, copper
            <br/>
            ▪ LIFE EXPECTANCY: 10 to 17 years
            
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
