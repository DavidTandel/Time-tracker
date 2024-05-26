import React, { createContext, useEffect, useState } from "react";


export const AppContext = createContext(null);


const AppContextProvider = (props)=> {
    

    return (
        <AppContext.Provider value={contextValue}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider  