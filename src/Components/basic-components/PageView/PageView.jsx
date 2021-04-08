import React, { useContext } from 'react'
import { Pages } from '../../../Utilities/Consts/Consts'
import Home from '../../main-pages/Home/Home'
import {AppContext} from '../../../Utilities/stores/Main/AppProvider'

const PageView = () =>{

    const {pageView} = useContext(AppContext)
        

    return(
        pageView===Pages.Home && <Home/>
    )
}

export default PageView