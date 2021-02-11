import React from 'react'


export default class Header extends React.Component {
  showHome= (e) => {
    e.preventDefault()
    this.props.history.push('/')
    document.querySelector('#home-link').className = 'clicked'
    document.querySelector('#project-link').className = 'not-clicked'
    document.querySelector('#blog-link').className = 'not-clicked'
    document.querySelector('#contact-link').className = 'not-clicked'
  }
  showProjects = (e) => {
    e.preventDefault()
    this.props.history.push('/projects')
    document.querySelector('#home-link').className = 'not-clicked'
    document.querySelector('#project-link').className = 'clicked'
    document.querySelector('#blog-link').className = 'not-clicked'
    document.querySelector('#contact-link').className = 'not-clicked'
  }
  showBlog = (e) => {
    e.preventDefault()
    this.props.history.push('/blog')
    document.querySelector('#home-link').className = 'not-clicked'
    document.querySelector('#project-link').className = 'not-clicked'
    document.querySelector('#blog-link').className = 'clicked'
    document.querySelector('#contact-link').className = 'not-clicked'
  }  
  showContact= (e) => {
    e.preventDefault()
    this.props.history.push('/contact')
    document.querySelector('#home-link').className = 'not-clicked'
    document.querySelector('#project-link').className = 'not-clicked'
    document.querySelector('#blog-link').className = 'not-clicked'
    document.querySelector('#contact-link').className = 'clicked'
  }
  render() {
    return(
      <div className='header'>
        <div class='name'>
          <p class='name-name'>
            <em>
              <strong>
                <span class='first'>J</span>
              </strong>
                <span class='last'>M</span>
            </em>
          </p>
        </div>
        <div class='extras'>
          <div class='list'>
            <a id='home-link' className='clicked' onClick={(e) => this.showHome(e)}>Home</a>
            <a id='project-link' className='not-clicked' onClick={(e) => this.showProjects(e)}>Projects</a>
            <a id='blog-link' className='not-clicked' onClick={(e) => this.showBlog(e)}>Blog</a>
            <a id='contact-link' className='not-clicked' onClick={(e) => this.showContact(e)}>Contact</a>
          </div>
          <div>
            <button>Resume</button>
          </div>
        </div>
      </div>
    )
  }
}