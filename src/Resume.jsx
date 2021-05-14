import React from 'react'
import {v4 as uuidv4} from 'uuid'

export default function Resume() {
  return (
    <div className='resume'>
      <iframe title={uuidv4()} src="https://drive.google.com/file/d/1OHHpefxMtsb2-rhqoi9UhlIxHnz2_4cr/preview" width="1000" height="1000"></iframe>    
    </div>
  )
}