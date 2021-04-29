import Head from 'next/head' 
import Layout from '../components/layout' 
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'



export default function Home({ token }) {

  return (
    <Layout>
      <Navbar/>
    <Head>
    
        <title>Cat Breed Profile</title>
    </Head>
    <div className="cat-page">
    
       
         <h1 className="texthead-title">Maine Coon Cat: Cat Breed Profile</h1> 
       <div>

         <img src="https://www.thailandexhibition.com/images/Admin-talks/articles/5f0bde906b044/images/%E0%B9%81%E0%B8%A1%E0%B8%A7%E0%B9%80%E0%B8%A1%E0%B8%99%E0%B8%84%E0%B8%B9%E0%B8%99-9.jpg" 
        alt="Lamp" width="1500" height="850"></img>
       </div>
       <div className="tex1">

        <h5 >The Maine coon cat is a natural breed and one of the largest of domesticated cats. Its body is medium to large, muscular, and broad-chested, with a well-balanced rectangular appearance. The Maine coon's coat is heavy and shaggy, but shorter on the shoulders and longer on the britches and stomach. It sports a handsome front ruff, ear tufts, foot tufts, and a long flowing tail. Equally at home with children, dogs, or older persons, the Maine coon cat is an ideal pet, handily earning its status as the third most popular breed in America, and the nickname "gentle giant."

<br/>
           <br/>
           ▪ WEIGHT: 9 to 17 pounds
           
           <br/>
            ▪ LENGTH: 3 feet, head to tail
            <br/>
            ▪ COAT: Long, double coat
            <br/>
            ▪ COAT COLOR: More than 75 color combinations
            <br/>
            ▪ EYE COLOR: Green, gold, green-cold, or copper
            <br/>
            ▪ LIFE EXPECTANCY: 9 to 15 years
            <br/>
            ▪ LIFE EXPECTANCY: 9 to 15 years
            
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
