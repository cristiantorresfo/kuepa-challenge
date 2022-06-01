import GroupGoal from "./GroupGoal/GroupGoal";
import Information from "./Information/Information";

import styles from "./Statistics.module.css"

function Statistics(){
    return(
        <div className={styles.statistics} >
            <Information/>
            <GroupGoal/>
        </div>
    )
}
export default Statistics