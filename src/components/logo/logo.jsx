import React from 'react'
import Img from './job.png'
import './logo.css'

export default function Logo() {
    return (
        <div className='logo-container'>
            <img src={Img} alt="logo"/>
        </div>
    )
}