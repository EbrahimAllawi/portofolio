import React from 'react'

import facebook from '../img/facebook.svg'
import codepen from '../img/codepen.svg'
import '../scss/home.css'

export default function Main() {
  return (
    <>
        <div className="main">
            <div className='primaryInfo'>
                <div className='name'>EBRAHIM ALLAWI</div>
                <div className='stack'>Full Stack Web Developer</div>
            </div>
            <div className="resume">
                Hi My Name Is Ebrahim Allawi 
                Im 20 Years Old 
                From Syria.
                I Started Programing
                In 2019 
            </div>
            <div className="contacts">
                <div className="contact">
                    <img width={25} src={facebook} />
                    <a href=''>Erahim B Allawi</a>
                </div>
                <div className="contact">
                    <img width={25} src={codepen} />
                    <a href=''>ebrahim allawi</a>
                </div>
            </div>
        </div>
    </>
  )
}
