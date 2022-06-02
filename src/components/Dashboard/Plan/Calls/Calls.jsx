import { useContext } from "react"
import { LeadContext } from "../../../../context/LeadContext"
import styles from "./Calls.module.css"


function Calls (){

    const {leads} = useContext(LeadContext)

    const leadsFiltered = leads.filter(lead => {
        return lead.plus === true
    })

    return(
        <div className={styles.calls} >
            <h5>Conexiones de Agenda para hoy</h5>
            <div>
                {leadsFiltered.map(lead => {
                    return (
                        <p key={lead.account_id}>{lead.name}</p>
                    )
                })}
            </div>
        </div>
    )
}

export default Calls