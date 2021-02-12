import React from 'react'

export default class Header extends React.Component {
  showHome= (e) => {
    e.preventDefault()
    this.props.history.push('/')
    document.querySelector('#home-link').className = 'clicked'
    document.querySelector('#blog-link').className = 'not-clicked'
    document.querySelector('#resume-link').className = 'not-clicked'
  }
  showResume = (e) => {
    e.preventDefault()
    this.props.history.push('/resume')
    document.querySelector('#home-link').className = 'not-clicked'
    document.querySelector('#blog-link').className = 'not-clicked'
    document.querySelector('#resume-link').className = 'clicked'
  }
  render() {
    return(
      <div className='header'>
        <div className='name'>
            <em>
                <span className='first'>J</span>
                <span className='last'>M</span>
            </em>
        </div>
        <div className='extras'>
          <div className='list'>
            <p id='home-link' href='#' className='clicked' onClick={(e) => this.showHome(e)}>Home</p>
            <a id='blog-link' rel="noreferrer" target='_blank'href='https://www.medium.com/@jacksonmo' className='not-clicked'>Blog</a>
            <p id='resume-link' href='#' className='not-clicked' onClick={(e) => this.showResume(e)}>Resume</p>
          </div>
        </div>
      </div>
    )
  }
}