import { createContext, useReducer } from "react"
import DarkModeReducer from "./DarModeReducer"
const INITIAL_STATE={
    darkMode:false
}

export const DarkModContext=createContext(INITIAL_STATE)


export const DarkModeProvider=({children})=>{
    const [state,dispatch]=useReducer(DarkModeReducer,INITIAL_STATE)

    return(
        <DarkModContext.Provider value={{darkMode:state.darkMode,dispatch}}>
            {children}
        </DarkModContext.Provider>
    )
}