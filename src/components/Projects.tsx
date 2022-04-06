import React from 'react'

import '../scss/projects.css'

interface IPropsproject {
    name: string
    date: string  
    url: string
    nameUrl: string
    tags: Array<string>
}

function projectInfo(info: IPropsproject) {
    return info

}
export default function Projects() {
    var projectsInfo = [
        projectInfo({name: 'Wallet APP', date: '1/2/2000', url: 'https://ebrahimallawi.github.io/portofolio/', nameUrl:'url', tags:['Rest api','ts']})
    ]
    var projects = projectsInfo.map((i)=> {

        var tags = i.tags.map((tag)=> {
            return(
                <>
                <div>{tag}</div>
                </>
            )
        })

        return (
            <>
                <Project name={i.name} date={i.date} url={i.url} nameUrl={i.nameUrl} tags={i.tags}  />
            </>
        )
    })
  return (
    <>
        <div className="projects">
            {projects}
        </div>
    </>
  )
}

function Project(props:IPropsproject) {
    const {name, date, url, nameUrl, tags} = props
    var tag = tags.map((i)=> {
        return (
            <>
            <div className='tag'>{`#${i}`}</div>
            </>
        )
    })

    return (
        <>
        <a href={url} className="project">
            <div className='name'>{name}</div>
            <div className='date'>{date}</div>
            {/* <div className='url'>{nameUrl}</div> */}
            <div className='tags'>
                {tag}
            </div>
        </a>
        </>
    )
}