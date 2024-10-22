
import Link from "next/link";
import Image from "next/image";


import headerStyle from "./header.module.css";


const Header = () =>
{
    return (
        <div>
            
           <header className={headerStyle.header}>

              <div className={headerStyle.logo}>
                <h1>Portfolio</h1>
              </div>  
     
          <nav>
      
        
          <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/skills">Skills</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          </ul>
         
          </nav>

   
        </header>
        
           
        </div>
    );

}
export default Header;