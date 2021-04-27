import Head from 'next/head' 
import Layout from '../components/layout' 
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'



export default function Home({ token }) {

  return (
    <Layout>
    <Head>
        <title>MEOW-CLUB</title>
    </Head>
    <div>
        <Navbar />
        <h1 className="head">MEOW-CLUB</h1>
        <div className="cat">
        <center><img src="https://www.thesprucepets.com/thmb/bgNR8imKQ3XhKeT9Y24pmvKCbNg=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-1185181003-b2f9c48e81304d10b93f55be4090d788.jpg" 
        alt="Lamp" width="800" height="550"></img> </center>
        
        <h3 align = 'left'>สัตว์เลี้ยงน่ารัก ที่หลายท่านต้องการเลี้ยง แต่ความเป็นจริงแล้ว ก่อนที่จะ เลี้ยงแมว สักตัว จะต้องหา ข้อมูล การเลี้ยงแมว ให้มากที่สุดก่อน เว็บ Meow-club แหล่งรวมความรู้ เรื่อง แมว ที่ ทาสแมว ต้องรู้</h3>
        <h3 align = 'left'>ไม่ว่าจะเป็น ข้อมูลพื้นฐาน สายพันธุ์แมว แมวเปอร์เซีย แมวไทย แมวสายพันธุ์อื่นๆ เทคนิค วิธีดูแลแมว ตั้งแต่ แมวเด็ก จนถึง แมวโต โรคแมว ที่ต้องระวัง นอกจากนี้ยังมี รีวิว อุปกรณ์เลี้ยงแมว บ้านแมว กระบะทรายแมว ของเล่นแมว และ อาหารแมว สูตรต่างๆ รวมไว้ที่นี่ที่เดียว
          </h3>
       
          <br/>
           <br/>
           <h3 align = 'center'>▪ สายพันธุ์แมว ยอดนิยม</h3>
           
           <br/>
           <h3 align = 'center'>▪ การเลี้ยงแมว วิธีการดูแลแมว โรคแมว</h3>
            
            <br/>
            <h3 align = 'center'>▪ รีวิว บ้านแมว กระบะทรายแมว ของเล่นแมว</h3>
            
            
            

            
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
