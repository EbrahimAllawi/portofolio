import React, { useEffect, useState } from 'react'

import "../scss/skills.css"

interface IPropsSkill {
  skill: {
    name: string
    percent: number
  }
  matchMedia: boolean
  children:any
  // widthScreen: number
}

function setColorProgress(percent: number) {
  if(percent > 70) {
    return {
      progress: '#1A6A17',
      backgroundProgress: '#BED1BE'
    }
  }
  else if(percent > 30) {
    return {
      progress: '#006BD6',
      backgroundProgress: '#CEE6FF'
    }
  }
  return {
    progress: '#D6B400',
    backgroundProgress: '#FFF4BB'
  }
}

function PieSkill(props:{skill:{name: string, percent: number}}) {
  const {name, percent} = props.skill

  var style = {
    "--p": percent,
    "--progress":setColorProgress(percent).progress,
    "--backgroundProgress":setColorProgress(percent).backgroundProgress
  } as React.CSSProperties

  return (
    <>
    <div className='pie' style={style}>
      <div className="mask">{name}</div>
    </div>
    </>
  )
}

function RectangleSkill(props:{skill:{name: string, percent: number}}) {
  const {name, percent} = props.skill

  var style = {
    "--p": percent +"px",
    "--progress":setColorProgress(percent).progress,
    "--backgroundProgress":setColorProgress(percent).backgroundProgress
  } as React.CSSProperties

  return (
    <>
    <div className="skill">
      <div className="name">{name}</div>
      <div className="containerProgress" style={style} >
        <div className="progress"></div>
      </div>
    </div>
    </>
  )
}

function Skill(props: {children: any}) {
  return(
    <>
      {props.children}
    </>
  )
}




export default function Skills(props: any) {
  const matchMedia = props.matchMedia

  function typeShapeProgress(skill:any) {
    if(matchMedia) {
      console.log('match')
      return <PieSkill skill={skill}/>

    }
    console.log('not match')
    return <RectangleSkill skill={skill}/>

  }

  var skillInfo = (name: string, percent: number)=> {
    return {
      name,
      percent,
    }
  }

  var skillsInfo = [
    skillInfo('Design pattern', 40),
    skillInfo('version control', 60),
    skillInfo('HTML CSS JS', 80),
    skillInfo('node js', 80),
    skillInfo('JWT', 60),
    skillInfo('Make,work with api', 60),
    skillInfo('MongoDB', 60),
    skillInfo('React (Js,Ts)', 80),
    skillInfo('SPA', 60),
    skillInfo('PWA', 60),
    skillInfo('Redux', 60),
    skillInfo('flutter', 20),
    
  ]

  var skills = skillsInfo.sort(function(a, b){
    return b.percent - a.percent
  }).map((i,a)=> {
    return(
      <>
      <Skill >
        {typeShapeProgress(i)}
      </Skill>
      </>
    )
  })

  return (
    <div className='skills'>
      {skills}
    </div>
  )
}

