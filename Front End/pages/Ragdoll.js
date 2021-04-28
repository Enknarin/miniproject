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
       
        <center> <h1 className="s1">Ragdoll Cat: Cat Breed Profile</h1></center> 
        <div className="cat">
        <center> <img src="https://www.thesprucepets.com/thmb/rZIFSb2yuEVPDKzqs_YTb7mDvds=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/ragdoll-cat-lying-down--portrait-579000275-5c868f0146e0fb00015f8fbf.jpg" alt="Lamp" width="500" height="850"></img></center> 
        <h5 className="message1">If you’re looking for a large, affectionate cat that can go with the flow, look no further than the Ragdoll cat. These cats simply go limp with pleasure when they’re being petted, giving them their name. This cat breed is one of the largest out there, but don’t let that intimidate you. Their big blue eyes and loud, throaty purr let you know that these cats are just big softies. This cat is notoriously social, making them a good fit for bustling homes with plenty of activity.
<br/>
           <br/>
           ▪ WEIGHT: Males weigh up to 20 pounds and females weigh between 10 and 15 pounds.
           
           <br/>
            ▪ HEIGHT: 11 to 13 inches at the shoulder
            <br/>
            ▪ COAT: Medium-length and silky
            <br/>
            ▪ COAT COLORS: Many different colors and patternsCOAT COLOR: More than 75 color combinations
            <br/>
            ▪ EYE COLOR: Blue eyes
            <br/>
            ▪ LIFE EXPECTANCY: 13 to 15 years or more
            
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
