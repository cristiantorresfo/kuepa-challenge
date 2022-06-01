import Header from "./Header/Header"
import styles from "./Dashboard.module.css"
import GroupGoal from "./Statistics/GroupGoal/GroupGoal"
import Statistics from "./Statistics/Statistics"

function Dashboard(){
    return(
        <div className={styles.dashboard}>
            <Header/>
            <h3>Hola,</h3>
            <Statistics/>
        </div>
    )
}

export default Dashboard