import styles from "./Task.module.css";
import { MdPhone } from "@react-icons/all-files/md/MdPhone";
import { BiMessageDetail } from "@react-icons/all-files/bi/BiMessageDetail";

function Task() {
  return (
    <div className={styles.task}>
      <div>Porcentaje</div>
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
  );
}

export default Task;
