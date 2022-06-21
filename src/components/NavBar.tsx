import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import homeIcon from '../img/home.webp'
import projectsIcon from '../img/projects.webp'
import skillsIcon from '../img/skills.webp'
import '../scss/navbar.css'
export default function NavBar(props:{matchMedia:boolean}) {
    const {matchMedia} = props
    const [activeTab, setActiveTab] = useState<string>('homeActive')

    return (
    <>
        <div className="navbar">
            <Button props={
                {icon: homeIcon, url: '#/', id: 'home', activeTab, setActiveTab, matchMedia:matchMedia}
            } 
            />
            <Button props={
                {icon: projectsIcon, url: "#/projects", id: "projects", activeTab, setActiveTab, matchMedia:matchMedia}
            } 
            />
            <Button props={
                {icon: skillsIcon, url: "#/skills", id: "skills", activeTab, setActiveTab, matchMedia:matchMedia}
            } 
             
            />
        </div>
    </>
    )
}
interface IUrl{
    props: {
        icon: string
        url: string
        id: string 
        activeTab: string
        setActiveTab: Function
        matchMedia: boolean
    }
}
var x =0
function Button(props:IUrl) {
    const {icon, url, id, activeTab, setActiveTab, matchMedia} = props.props

    useEffect(()=> {
        setActiveTab(localStorage.getItem('activeTab'))
        // console.log(activeTab)
        var rectangleActive = document.getElementsByClassName('rectangleActive')
        var buttonNav = document.getElementsByClassName('button')

        for(var x = 0; x < rectangleActive.length; x++) {
            rectangleActive.item(x)?.classList.remove('active')
            buttonNav.item(x)?.classList.remove('activeTabWidthScreen')
        }

        if(matchMedia) {
            document.getElementById(activeTab)?.classList.add('active')
            return
        }

        if(activeTab == 'homeActive') {
            document.getElementById('home')?.classList.add('activeTabWidthScreen')
        }
        else if(activeTab == 'projectsActive') {
            document.getElementById('projects')?.classList.add('activeTabWidthScreen')
        }
        else {
            document.getElementById('skills')?.classList.add('activeTabWidthScreen')
        }
        
    },[activeTab, document.body.clientWidth])

    function goTo(url:string, id:string, e: any) {
        window.location.href = url
        localStorage.setItem('activeTab',`${id}Active`)
        setActiveTab(`${id}Active`)
        // console.log('=========')
    }

    return (
    <>
    <div id={id} onClick={(e)=> goTo(url, id, e)} className='button'>
        <img width={25} height={25} src={icon} />
        <div id={`${id}Active`} className="rectangleActive"></div>
    </div>


    </>
    )
}