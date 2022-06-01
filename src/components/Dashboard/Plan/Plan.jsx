import Calls from "./Calls/Calls"
import Tasks from "./Tasks/Tasks"

import styles from "./Plan.module.css"

function Plan(){
    return(
        <div className={styles.plan}>
            <Calls/>
            <Tasks/>
            
        </div>
    )
}
export default Plan