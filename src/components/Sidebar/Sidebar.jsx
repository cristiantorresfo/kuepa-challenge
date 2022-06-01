import styles from "./Sidebar.module.css";
import {BiHomeSmile} from "@react-icons/all-files/bi/BiHomeSmile"
import {BiMessageAltDetail} from "@react-icons/all-files/bi/BiMessageAltDetail"
import {BiWindows} from "@react-icons/all-files/bi/BiWindows"
import {BiMessageAlt} from "@react-icons/all-files/bi/BiMessageAlt"

function Sidebar() {
  return (
    
      <div className={styles.sidebar} id="nav-bar">
        <nav className={`${styles.nav} ${styles.flexDirectionColumn}`} >
         <div className={` ${styles.flexDirectionColumn}`}>
            <p>img</p>
            <BiHomeSmile className={styles.icons}/> 
            <BiMessageAltDetail className={styles.icons}/>
            <BiWindows className={styles.icons}/>
         </div>
         <div className={styles.flexDirectionColumn}>
         <BiMessageAlt className={styles.icons}/>
         <p>img</p>
         </div>
        </nav>
      </div>
    
  );
}

export default Sidebar;
