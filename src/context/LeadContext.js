import { createContext, useEffect, useState } from "react";


export const LeadContext = createContext();

export const LeadProvider =({children}) => {
    const [leads, setLeads ] = useState([])

    useEffect(() => {
        let peticion = fetch("https://api.opendota.com/api/proPlayers")
        peticion.then((res) => {
            return res.json()
        }) 
        .then((data) => {
            setLeads(data)
        }).catch(error => {
            console.log(error);
        })
    }, []);
    return (
        <LeadContext.Provider value={{leads, setLeads}}>
            {children}
        </LeadContext.Provider>
    )
}