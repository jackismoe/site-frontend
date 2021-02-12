import React from 'react'
import {v4 as uuidv4} from 'uuid'

export default function Home() {
  const languages = ['css3', 'html5', 'javascript', 'postgres', 'rails', 'ruby', 'react', 'redux']
  return(
    <div className='home'>
      <p className='site-welcome'>Welcome!</p>
      <div className='self'></div>
      <div className='skills'>
        {languages.map((item) => {
          return <div key={uuidv4()} id='language' className={`${item}`}/>
        })}
      </div>
    </div>
  )
}