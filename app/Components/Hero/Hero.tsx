

import heroStyle from "./hero.module.css";

import Image from "next/image";

const Hero = () =>
    {
        return(
    <div>
            <section>
            <div  className={heroStyle.container}>   

            <div className={heroStyle.box}>

             

            <h1>Hi,<br></br> I'm <span style={{color:"pink"}}> Hira</span></h1>
           
            
            <Image src="/dp.jpg" width={200} height={200} alt="pic"></Image>
          
            <p style={{textAlign:"justify"}}> Aspiring web developer with a passion for creating dynamic, user-friendly websites. Seeking to leverage my skills in HTML, CSS, and JavaScript to deliver innovative solutions that enhance user experience.</p>
            <br></br>
            
           
                

            <br></br>
            <button className={heroStyle.button} >Download CV</button>
            </div>
            </div>
            
          
          
            </section>

    </div>        

        );

  }
  
  export default Hero;