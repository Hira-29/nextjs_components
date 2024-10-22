
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Skills.module.css";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Hero from "../Components/Hero/Hero";


const SkillsPage=()=>
{
    return(
        
        <div>
         <Header></Header> 
             <div className={styles.skills_container}>
             <div className={styles.skills_box}>
            <h1> My Skills</h1>
            <br/>
             <ul className={styles.skills_list}>
             <li><Link href="/skills/html"><Image src="/html.png" alt="html" height={70} width={70}></Image></Link></li><br></br>
             <li><Link href="/skills/"><Image src="/css.png" alt="css" height={70} width={70}></Image></Link></li><br></br>
             <li><Link href="/skills/">Typescript</Link></li> <br></br>
             <li><Link href="/skills/">Next JS</Link></li> <br></br>
            </ul>
            <br></br>
            </div>
          </div>

           <center><b><Link href="/">Back to Home Page</Link></b></center>
           <Footer></Footer>
        </div>
       
    )
}

export default SkillsPage;