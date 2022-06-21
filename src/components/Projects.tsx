import React from 'react'

import '../scss/projects.css'

interface IPropsproject {
    name: string
    date: string  
    url: string
    tags: Array<string>
}

function projectInfo(info: IPropsproject) {
    return info

}
export default function Projects() {
    var projectsInfo = [
        projectInfo({name: 'Wallet App', date: '04/2021', url: 'https://e-wallet-app.netlify.app', tags:['Rest api','Typscript']}),
        projectInfo({name: 'tax Calculator', date: '04/2022', url: 'https://ebrahimallawi.github.io/taxCalculator/', tags:['React ts','Redux Toolkit']}),
        projectInfo({name: 'portofolio', date: '06/2022', url: 'https://ebrahimallawi.github.io/portofolio/', tags:['React ts','UI']}),
        projectInfo({name: 'storeA', date: '02/2022', url: 'https://ebrahimallawi.github.io/storeA/', tags:['Flutter','API']}),
        projectInfo({name: 'website company', date: '5/2021', url: 'https://ebrahimallawi.github.io/websiteCompany/', tags:['react','ant design']}),
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
                <Project name={i.name} date={i.date} url={i.url} tags={i.tags}  />
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
    const {name, date, url, tags} = props
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