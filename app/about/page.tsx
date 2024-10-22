

import Link from "next/link";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";


const AboutPage=()=>
{
    return(
    
        <div>
                <Header></Header>
               
                
            <h1>About Me</h1>
            
            <p style={{color:"white", textAlign:"center"}}>
                I'm always open to learning new technologies and seeking opportunities to grow my skills and knowledge.
            </p>
            <br></br>
           <footer>
           <center><b><Link href="/">Back to Home Page</Link></b></center>
           </footer>
           <Footer></Footer>
        </div>
    )
}
export default AboutPage;