import Header from "./Header/Header"
import styles from "./Dashboard.module.css"
import GroupGoal from "./Statistics/GroupGoal/GroupGoal"
import Statistics from "./Statistics/Statistics"
import Plan from "./Plan/Plan"

function Dashboard(){
    return(
        <div className={styles.dashboard}>
            <Header/>
            <h3>Hola,</h3>
            <Statistics/>
            <Plan/>
        </div>
    )
}

export default Dashboard