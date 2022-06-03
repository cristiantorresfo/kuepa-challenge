import styles from "./GroupGoal.module.css";

function GroupGoal() {
  return (
    <div className={styles.groupGoal}>
      <h5 style={{ fontWeight: "700" }}>Meta Grupal</h5>
      <div className={styles.info}>
        <div>Leads Obtenidos</div>
        <div>200/400</div>
      </div>
      <progress id="file" max="400" value="200">
        {" "}
      </progress>

      <div className={styles.info}>
        <div>Matrículas finalizadas</div>
        <div>50/100</div>
      </div>
      <progress id="file" max="100" value="50">
        {" "}
      </progress>
    </div>
  );
}

export default GroupGoal;
