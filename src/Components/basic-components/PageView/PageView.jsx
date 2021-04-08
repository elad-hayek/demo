import React, { Fragment, useContext } from 'react'
import { Pages } from '../../../Utilities/Consts/Consts'
import Home from '../../main-pages/Home/Home'
import {AppContext} from '../../../Utilities/stores/Main/AppProvider'
import TopBar from '../TopBar/TopBar'

const PageView = () =>{

    const {pageView} = useContext(AppContext)
        

    return(
        <Fragment>
            <TopBar/>
            <main>
                {pageView===Pages.Home && <Home/>}
            </main>
        </Fragment>
    )
}

export default PageView