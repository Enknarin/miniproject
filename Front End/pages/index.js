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
        <h1 className="head">เคล็ดลับ การเลี้ยงแมว แมวเปอร์เซีย แมว ไทย ของ คนรักแมว</h1>
        <div className="cat">
        <img src="http://meow-club.com/wp-content/uploads/2019/08/135735c90c00eaf-2222.png" alt="Lamp" width="400" height="350"></img>
        <h5 className="message1">แมว สัตว์เลี้ยงน่ารัก ที่หลายท่านต้องการเลี้ยง แต่ความเป็นจริงแล้ว ก่อนที่จะ เลี้ยงแมว สักตัว จะต้องหา ข้อมูล การเลี้ยงแมว ให้มากที่สุดก่อน เว็บ Meow-club แหล่งรวมความรู้ เรื่อง แมว ที่ ทาสแมว ต้องรู้ ไม่ว่าจะเป็น ข้อมูลพื้นฐาน สายพันธุ์แมว แมวเปอร์เซีย แมวไทย แมวสายพันธุ์อื่นๆ เทคนิค วิธีดูแลแมว ตั้งแต่ แมวเด็ก จนถึง แมวโต โรคแมว ที่ต้องระวัง นอกจากนี้ยังมี รีวิว อุปกรณ์เลี้ยงแมว บ้านแมว กระบะทรายแมว ของเล่นแมว และ อาหารแมว สูตรต่างๆ รวมไว้ที่นี่ที่เดียว
          <br/>
           <br/>
           ▪ สายพันธุ์แมว แมวเปอร์เซีย แมวไทย
           <br/>
            ▪ การเลี้ยงแมว วิธีการดูแลแมว โรคแมว
            <br/>
            ▪ รีวิว บ้านแมว กระบะทรายแมว ของเล่นแมว
            
            </h5>
        </div>
        
        
    </div>
</Layout>
  )
}

export function getServerSideProps({ req, res }) {
  // console.log("token from cookie: ",cookie.get("token")) 
  // console.log('req: ', req.headers)
  return { props: { token: req.cookies.token || "" } };
}
