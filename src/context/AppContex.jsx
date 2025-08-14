import { createContext } from "react";

export const AppContext=createContext();

const ContextProvider =(prop)=>{
    const phone ="933503656"
    const name="Anand Patel"
    return(
        <AppContext.Provider value={{phone,name}}>
              {prop.children}
        </AppContext.Provider>
    )
}

export default ContextProvider