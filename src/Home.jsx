import React from 'react'
import {v4 as uuidv4} from 'uuid'
import linkedin from './images/linkedin.png'
import github from './images/github.png'
import Banner from './Banner'
import BlackJackGif from './images/blackjack-code.gif'


export default class Home extends React.Component {
  languages = ['css3', 'html5', 'javascript', 'postgres', 'rails', 'ruby', 'react', 'redux']

  thisSite = [
  { 
    name: "The site you're on",
    gitHub: 'https://github.com/jackismoe/portfolio-site',
    notes: 'This is the website you are currently viewing. Built with stateless react.',
  }
 ]

  projects = [
    {
      name: 'reactJack',
      gitHub: 'https://github.com/jackismoe/blackjack',
      liveSite: 'https://blackjacksim.netlify.app/',
      notes: 'A single player black jack game simulator. Built with React/Redux on the frontend and Ruby on Rails as an API. Works best on safari. A known bug with chrome (specifically Brave) where the card showed via DOM is not the card in your hand and will give inconsitent totals.',
      video: 'https://drive.google.com/file/d/1BFeSr8VDKbiJ1CYnNCsQnPKabecsjdAI/preview',
      image: {BlackJackGif}, 
    },
    {
      name: 'myNextBeer',
      gitHub: 'https://github.com/jackismoe/myNextBeer',
      liveSite: 'https://mynextbeer.netlify.app/',
      notes: "An app that will randomly generate a new beer for you to try on your next trip out. It will also help you keep track of the ones you've had before so you don't end up with the same ones over and over. Currently, ES6's object oriented syntax is only currently supported consistently on chrome or chromium browsers.",
      video: 'https://drive.google.com/file/d/1-yoejcrScb10tG38XVXrqXhmnzPdzxgW/preview',
      // image:, 
    },
    {
      name: 'monopolySim',
      gitHub: 'https://github.com/jackismoe/monopolySim',
      liveSite: 'https://monopolysimvjs.netlify.app/',
      notes: "A full scale monopoly simulator. Built for four players. Two branches exist, one using ES6's object oriented paradigm as frontend only, and another built with React/Redux and Rails. Currently incomplete. ES6's object oriented syntax is only currently supported consistently on chrome or chromium browsers.",
      video: '',
      // image:, 
    },
    {
      name: 'soundBar',
      gitHub: 'https://github.com/jackismoe/SoundBar',
      liveSite: 'https://rorsoundbar.herokuapp.com/',
      notes: 'An instrument resale database. Think reverb or ebay. Built as an MVC structured application using just Ruby on Rails. Implements sorting mechanics and model dependencies for destruction of items.',
      video: 'https://drive.google.com/file/d/1JnhMeg8Jy9xGVzMV2BjhegSfEdkoMpcl/preview',
      // image:, 
    },
    {
      name: 'TopNewsD1',
      gitHub: 'https://github.com/jackismoe/topnewsd1',
      liveSite: '',
      notes: "My first development project. A CLI Ruby gem with a web scraper that goes to ESPN's Mens D1 Basketball site and grabs the top two stories on any given day. Currently not live on the web.",
      video: 'http://drive.google.com/file/d/1Qs3ZFGkpXzDJYel8CxUCyf5ilucB1U7U/preview',
      // image:, 
    },
  ]

  handleGithub = event => {
    event.preventDefault()
    window.open('https://www.github.com/jackismoe')
  }

  handleLinkedin = event => {
    event.preventDefault()
    window.open('https://www.linkedin.com/in/jackismoe')
  }
  
  render() {
    return(
        <div className='homepage'>
          <div className='home'>
            <div className='logos'>
              {/* <img onClick={this.handleLinkedin} alt='logo' className='linkedin-logo'src={linkedin}/>
              <img onClick={this.handleGithub} alt='logo' className='github-logo'src={github}/> */}
            </div>
            <p className='welcome-message'></p>
          </div>
          <div className='projects'>
              {this.thisSite.map((site) => {
                return (
                  <div className='ind-project' key={uuidv4()}>
                    <h2 className='project-name'>{site.name}</h2>
                    <a href={site.gitHub}>GitHub</a>
                    <p>{site.notes}</p>
                  </div>
                )
              })}
              {this.projects.map((project) => {
                return (
                  <div className='ind-project' key={uuidv4()}>
                    <h2 className='project-name'>{project.name}</h2>
                    <div className='links'>
                      <a href={project.gitHub}>GitHub</a>
                      {project.video !== '' ? <a href={project.video}>Video</a> : null }
                      {project.liveSite !== '' ? <a href={project.liveSite}>Demo</a> : null }
                    </div>
                      <p className='project-notes'>{project.notes}</p>
                  </div>
                )
              })}
          </div>        
          <div className='skills'>
            {this.languages.map((item) => {
              return <div key={uuidv4()} id='language' className={`${item}`}/>
            })}
          </div>
        </div>
      )
    }
}