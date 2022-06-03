import { useContext } from "react";
import { LeadContext } from "../../../../context/LeadContext";
import { MdPhone } from "@react-icons/all-files/md/MdPhone";
import { BiMessageDetail } from "@react-icons/all-files/bi/BiMessageDetail";
import styles from "./Calls.module.css";

function Calls() {
  const { leads } = useContext(LeadContext);

  return (
    <div className={styles.calls}>
      <h5>
        <strong>Conexiones de Agenda para hoy</strong>
      </h5>
      <div className={styles.callsList}>
        {leads.map((lead) => {
          return (
            <div key={lead.account_id} className={styles.list}>
              <div className={styles.color}></div>
              <div className={styles.leadsCalls}>
                <p style={{ width: "50px" }}>{lead.name}</p>
                <div>
                  <h5>
                    <strong>Llamar</strong>
                  </h5>
                  <span>Descuento temporada</span>
                </div>
                <div className={styles.circle}></div>
                <MdPhone />
                <BiMessageDetail />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Calls;
