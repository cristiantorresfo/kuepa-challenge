import Task from "./Task/Task";
import styles from "./Tasks.module.css";

function Tasks() {
  return (
    <div className={styles.tasks}>
      <div className={styles.headerTasks}>
        <h4>Tu plan de hoy</h4>
        <p>Ir a la gestión de llamados </p>
      </div>
      <div className={styles.tasksList} >
        <Task /> 
        <Task />  
        <Task />                


      </div>
    </div>
  );
}

export default Tasks;
