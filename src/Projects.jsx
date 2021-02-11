import React from 'react' 

export default function Projects() {

 const thisSite = [
  { 
    name: "The site you're on",
    gitHub: 'https://github.com/jackismoe/portfolio-site',
    notes: 'This is the website you are currently viewing. Built with statless react.',
  }
 ]

  const projects = [
    {
      name: 'reactJack',
      gitHub: 'https://github.com/jackismoe/blackjack',
      liveSite: 'https://blackjacksim.netlify.app/',
      notes: 'A single player black jack game simulator. Built with React/Redux on the frontend and Ruby on Rails as an API. Works best on safari. A known bug with chrome (specifically Brave) where the card showed via DOM is not the card in your hand and will give inconsitent totals.',
      video: 'https://drive.google.com/drive/u/2/my-drive',
      // image:, 
    },
    {
      name: 'myNextBeer',
      gitHub: 'https://github.com/jackismoe/myNextBeer',
      liveSite: 'https://mynextbeer.netlify.app/',
      notes: "An app that will randomly generate a new beer for you to try on your next trip out. It will also help you keep track of the ones you've had before so you don't end up with the same ones over and over. Currently, ES6's object orientation is only supported consistently on chrome or chromium browsers.",
      video: 'https://drive.google.com/drive/u/3/my-drive',
      // image:, 
    },
    {
      name: 'monopolySim',
      gitHub: 'https://github.com/jackismoe/monopolySim',
      liveSite: 'https://monopolysimvjs.netlify.app/',
      notes: "A full scale monopoly simulator. Built for four players. Two branches exist, one using ES6's object oriented paradigm as frontend only, and another built with React/Redux and Rails. Currently incomplete. ES6's object orientation is only supported consistently on chrome or chromium browsers.",
      video: 'https://github.com/jackismoe',
      // image:, 
    },
    {
      name: 'soundBar',
      gitHub: 'https://github.com/jackismoe/SoundBar',
      liveSite: 'https://rorsoundbar.herokuapp.com/',
      notes: 'An instrument resale database. Think reverb or ebay. Built as an MVC structured application using just Ruby on Rails. Implements sorting mechanics and model dependencies for destruction of items.',
      video: 'https://drive.google.com/drive/u/3/my-drive',
      // image:, 
    },
    {
      name: 'TopNewsD1',
      gitHub: 'https://github.com/jackismoe/topnewsd1',
      liveSite: 'https://github.com/jackismoe',
      notes: "My first development project. A CLI Ruby gem with a web scraper that goes to ESPN's Mens D1 Basketball site and grabs the top two stories on any given day. Currently not live on the web.",
      video: 'https://drive.google.com/drive/u/0/my-drive?hl=en',
      // image:, 
    },
  ]

  return(
    <div className='projects'>
      {thisSite.map((site) => {
        return (
          <>
            <h2>{site.name}</h2>
            <a href={site.gitHub}>GitHub</a>
            <p>{site.notes}</p>
          </>
        )
      })}
      {projects.map((project) => {
        return (<>
          <h2>{project.name}</h2>
          <a href={project.gitHub}>GitHub</a>
          <a href={project.liveSite}>Demo</a>
          <a href={project.video}>Video</a>
          <p>{project.notes}</p>
          </>
        )
      })}
    </div>
  )
}