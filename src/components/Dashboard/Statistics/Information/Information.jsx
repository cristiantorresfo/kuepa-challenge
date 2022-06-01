import styles from "./Information.module.css";

function Information() {
  return (
    <div className={styles.statistics}>
      <div>Porcentaje</div>
      <div className={styles.flexWrap}>
        <div className={styles.information}>
          <div>Leads Obtenidos</div>
          <div>50/100</div>
        </div>
        <div className={styles.information}>
          <div>Cola de llamados</div>
          <div>50/100</div>
        </div>
        <div className={styles.information}>
          <div>Matrículas finalizadas</div>
          <div>50/100</div>
        </div>
       
      </div>
    </div>
  );
}

export default Information;
