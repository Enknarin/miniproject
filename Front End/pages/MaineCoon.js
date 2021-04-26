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
        <center> <h1 className="head">Maine Coon Cat: Cat Breed Profile</h1> </center> 
        <div className="cat">
        <center> <img src="https://www.thesprucepets.com/thmb/yj87GEf0ovZYNaaK4E_MEfq7-bg=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Brother-SisterMaineCoon_Nina-Pearman2122x1415-56a112a83df78cafdaa926f5.jpg" alt="Lamp" width="500" height="850"></img>
        </center> <h5 className="message1">The Maine coon cat is a natural breed and one of the largest of domesticated cats. Its body is medium to large, muscular, and broad-chested, with a well-balanced rectangular appearance. The Maine coon's coat is heavy and shaggy, but shorter on the shoulders and longer on the britches and stomach. It sports a handsome front ruff, ear tufts, foot tufts, and a long flowing tail. Equally at home with children, dogs, or older persons, the Maine coon cat is an ideal pet, handily earning its status as the third most popular breed in America, and the nickname "gentle giant."

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
        
        
    </div>
</Layout>
  )
}

export function getServerSideProps({ req, res }) {
  // console.log("token from cookie: ",cookie.get("token")) //<img src="https://www.coopsandcages.com.au/wp-content/uploads/2020/01/Ultimate-List-of-the-Most-Popular-Cat-Breeds-in-Australia-1067x800.jpg" alt="Lamp" width="400" height="350"></img>
  // console.log('req: ', req.headers)
  return { props: { token: req.cookies.token || "" } };
}
