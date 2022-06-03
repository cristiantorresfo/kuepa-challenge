import { useContext } from "react";
import { LeadContext } from "../../../context/LeadContext";
import styles from "./Messages.module.css";

function Messages() {
  const { leads } = useContext(LeadContext);
  return (
    <div className={styles.messages}>
      <div className={styles.containerMessages}>
        {leads.map((lead) => {
          return (
            <div className={styles.messagesBox} key={lead.account_id}>
              <div>
                Message <img src={lead.avatar} alt="" />
              </div>
              <div>{lead.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Messages;
