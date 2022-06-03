import Header from "./Header/Header";
import styles from "./Dashboard.module.css";
import Statistics from "./Statistics/Statistics";
import Plan from "./Plan/Plan";
import Messages from "../Messages/Messages";

function Dashboard() {
  return (
    <div className={styles.containerDashboard}>
      <div className={styles.dashboard}>
        <Header />
        <h3>
          {" "}
          <strong>Hola,</strong>{" "}
        </h3>
        <Statistics />
        <Plan />
      </div>
      <div style={{ background: "#e5e5e5" }}>
        <Messages />
      </div>
    </div>
  );
}

export default Dashboard;
