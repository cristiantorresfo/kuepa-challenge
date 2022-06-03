import { MdPhone } from "@react-icons/all-files/md/MdPhone";
import { BiMessageDetail } from "@react-icons/all-files/bi/BiMessageDetail";

import styles from "./Tasks.module.css";

function Tasks() {
  return (
    <div className={styles.tasks}>
      <div className={styles.headerTasks}>
        <h2 style={{ fontWeight: "700" }}>Tu plan de hoy </h2>
        <p>Ir a la gestión de llamados 〉</p>
      </div>
      <div className={styles.taskList}>
        <div className={styles.task}>
          <div className={`${styles.totalTasks} ${styles.totalTasks1}`}>
            <div className={styles.number}>30</div>
          </div>
          <div className={styles.information}>
            <span>Leads de primer contacto</span>
            <div>
              <MdPhone className={styles.inline} />
              <span>15</span>
            </div>
            <div>
              <BiMessageDetail />
              <span>15</span>
            </div>
          </div>
        </div>

        <div className={styles.task}>
          <div className={`${styles.totalTasks} ${styles.totalTasks2}`}>
            <div className={styles.number}>30</div>
          </div>
          <div className={styles.information}>
            <span>Leads por confirmar cita</span>
            <div>
              <MdPhone className={styles.inline} />
              <span>15</span>
            </div>
            <div>
              <BiMessageDetail />
              <span>15</span>
            </div>
          </div>
        </div>

        <div className={styles.task}>
          <div className={`${styles.totalTasks} ${styles.totalTasks3}`}>
            <div className={styles.number}>30</div>
          </div>
          <div className={styles.information}>
            <span>Leads de último intento</span>
            <div>
              <MdPhone className={styles.inline} />
              <span>15</span>
            </div>
            <div>
              <BiMessageDetail />
              <span>15</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tasks;
