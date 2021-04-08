import React, { createContext, useState } from 'react'
import { Pages } from '../../Consts/Consts'

export const AppContext = createContext({})


const AppProvider = ({children}) =>{
    const [pageView, setPageView] = useState(Pages.Home)

    const values={
        pageView
    }
    const actions={
        setPageView
    }


    return(
        <AppContext.Provider value={{...actions, ...values}}>
            {children}
        </AppContext.Provider>

    )

}

export default AppProvider