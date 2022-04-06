import React, { useEffect, useState } from 'react'
import appbar_narrow from '../img/appbar_narrow.svg';
import appbar_wide from '../img/appbar_wide.svg';
import NavBar from './NavBar';

export default function AppBar(props:any) {
    const {matchMedia, widthScreen} = props
    
    const [appBarCurve, SetAppBarCurve] = useState<any>()
    const [heightAppBar, SetHeightAppBar] = useState(68)

    useEffect(() => {
        // SetWidthScreen(document.body.clientWidth)
        console.log(widthScreen)
        if(matchMedia) {
            SetHeightAppBar(widthScreen * 0.46)
            SetAppBarCurve(appbar_narrow)
            return;
        }
        SetAppBarCurve(appbar_wide)
        SetHeightAppBar(68)
    },[widthScreen, matchMedia])

    
    return (
    <>

       <div className='appbar'>
            <img  src={appBarCurve} className='appBarCurve' />
            <div style={{top:heightAppBar-95}} className='avatar'></div>
            <div className='uiMadeBy'>
                <span className="tag">Ui Made By:</span>
                <a href='http://dribbble.com/kalthombaker' className="name">Kalthom Baker</a>
            </div>
       </div>
        
    </>
    )
}
