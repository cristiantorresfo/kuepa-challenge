import styles from './GroupGoal.module.css'

function GroupGoal () {
  return (
    <div className={styles.groupGoal} >
        <h5>Meta Grupal</h5>
        <div className={styles.information}>
          <div>Leads Obtenidos</div>
          <div>50/100</div>
        </div>
        
        <div className={styles.information}>
          <div>Matrículas finalizadas</div>
          <div>50/100</div>
        </div>
    </div>
  )
}

export default GroupGoal