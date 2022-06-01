import styles from "./Header.module.css"
import {RiFilterFill} from "@react-icons/all-files/ri/RiFilterFill"
function Header(){

    return (
        <div className={styles.header}>
            <div className={styles.alignCenter}>
            <input type="search" name="searcher" placeholder="Search" />
            <RiFilterFill/>
            </div>
            <input type="date" name="date" id="" />
        </div>
    )
}
export default Header