import React from 'react'
import { Sling as Hamburger } from 'hamburger-react'


export default function Header() {
  return(
    <div className='header'>
      <Hamburger class='hamburger'/>
      <div class='list'>
        <a>a</a>
        <a>b</a>
        <a>c</a>
        <a>d</a>
      </div>
    </div>
  )
}