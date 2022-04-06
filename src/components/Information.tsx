import React from 'react'
import { Route, Routes, } from 'react-router-dom'
import Home from './Home'
import '../scss/information.css'
import Main from './Main'

export default function Information() {
  return (
    <>
    <div className="information">
        <Main/>
    </div>
    </>
  )
}
