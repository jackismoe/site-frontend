import React from 'react'
import BlackJack from './images/blackjack-demo.gif'
import Monopoly from './images/monopoly-demo.gif'
import Soundbar from './images/soundbar-demo.gif'


export default class Banner extends React.Component {
  render() {
    return(
      <div className='banner-slider'>
        <div className='banner-container'>
          <img className='blackjack-demo' src={BlackJack}/>
          <img className='blackjack-demo' src={Monopoly}/>
          <img className='blackjack-demo' src={Soundbar}/>

        </div>
      </div>
    )
  }
}