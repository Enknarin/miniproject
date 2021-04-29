import Head from "next/head";
import Layout from "../components/layout";
import { useState } from "react";
import Navbar from "../components/navbar";
import styles from "../styles/Home.module.css";
import axios from "axios";
import config from "../config/config";


export default function Login({ token }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const [remember, setRemember] = useState(false);
  
  const login = async (req, res) => {
    try {
      let result = await axios.post(`${config.URL}/login`,{ username, password, remember },{ withCredentials: true });
      console.log("result: ", result);
      console.log("result.data:  ", result.data);
      console.log("token:  ", token);
      setStatus(result.status + ": " + result.data.user.username);
    } 
    catch (e) {
      console.log("error: ", JSON.stringify(e.response));
      setStatus(JSON.stringify(e.response).substring(0, 80) + "...");
    }
  };
  const rememberMe = async () => {
    setRemember(!remember);
  };

  const loginForm = () => (
    
    <div className={styles.gridContainer}>

      <center  className="login_form"> <div><b>Username:</b></div> </center> 
      <center className="login_form input"> <div>
       <input type="text" name="username"  placeholder="username"  onChange={(e) => setUsername(e.target.value)} />
      </div>   </center> 

      <center  className="login_form">  <div><b>Password:</b></div> </center> 
      <center className="login_form input"> <div>
        <input type="password" name="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
      </div> </center> 

      <center>  <div>
      <  input id="remember_me" name="remember_me" type="checkbox" onClick={rememberMe} />
      </div> </center> 

      <center>  <div  className="k"><label>Remember Me</label></div> </center> 
    </div>
     
  );

  const copyText = () => {
    navigator.clipboard.writeText(token);
  };

  return (
     
   <Layout>
      <Navbar />
    <div  className="b"> 
      <Head>
        <title>Login Page</title>
      </Head>
      <div class="container">
        <div className="Log">
        <center className="label"><h1>Login</h1></center>
        <div className="box" >
          <b>Token:</b> {token.substring(0, 15)}...
          <button className="copy" onClick={copyText}> Copy token </button>
        </div>
        <br />
       // <div className="st">Status: {status}</div>
        <br />
        {loginForm()}
        <div>
        <center> <button className="bulog1" onClick={login}>Login</button></center>
        </div>
        </div>
      </div>
      </div>
    </Layout>
  );
}

export function getServerSideProps({ req, res }) {
  return { props: { token: req.cookies.token || "" } };
}