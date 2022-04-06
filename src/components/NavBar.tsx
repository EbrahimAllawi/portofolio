import React from 'react'

import homeIcon from '../img/home.webp'
import projectsIcon from '../img/projects.webp'
import skillsIcon from '../img/skills.webp'
import '../scss/navbar.css'
export default function NavBar() {
    return (
    <>
        <div className="navbar">
            <Button url={homeIcon} />
            <Button url={projectsIcon} />
            <Button url={skillsIcon} />
        </div>
    </>
    )
}
interface IUrl{
    url: string
}
function Button(props:IUrl) {
    const url = props.url

    return (
    <>
        <div className='button'>
            <img width={25} height={25} src={url} />
        </div>
    </>
    )
}