import React,{useContext} from 'react'
import styled from 'styled-components'
import { Pages } from '../../../Utilities/Consts/Consts'
import { AppContext } from '../../../Utilities/stores/Main/AppProvider'

const TopBar = () =>{

    const {pageView, setPageView} = useContext(AppContext) 

    const NavBar = styled.nav`
        display:flex;
        flex-direction:row;
        background-color:blue;
        justify-content:right;
        direction:rtl;
        padding: 10px 5px;
    `
    const NavItem = styled.div`
        text-align:center;
        cursor: pointer;
        color: ${props=>props.clicked? "#000":"#fff"};
        padding: 0px 10px;
        margin-left: 25px;
    `

    return(
        <NavBar>
            <NavItem clicked={pageView===Pages.Home} onClick={()=>{setPageView(Pages.Home)}}>בית</NavItem>
            <NavItem clicked={pageView!==Pages.Home} onClick={()=>{setPageView(Pages.Home)}}>בית</NavItem>
        </NavBar>
    )

}

export default TopBar