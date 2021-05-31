
import freemarket from '../images/ssFreeMarket.png'
import covidResource from '../images/covidResource.png'
import weatherApp from '../images/weatherSS.png'
import './Styling.css'


const Projects = () => {
  return (
    <div className="row">
      <div className="col-sm-5 sideLeft"></div>
      <div className="col-sm-7 cardStart">
        <h6>Take a look at</h6>
        <h1>PROJECTS</h1>
        <div className="image">
          <img src="./images/re-instagram.png" className="pImages" alt="feedMe" />
          <div className="overlay">
            <div className="title">feedMe</div>
            <p className="description">This is a full stack application created with react utilizing Javascript, JSX, Material UI, Mongo, Express, Node.js, Firebase, and RESTful API technologies
            </p>
            <ul className="links">
              <li className="gitLink">
                <a href="https://github.com/someseananigans/feedme" rel="noreferrer"><img className="git" src="./images/GitHub-Mark-32px.png" alt="github" /></a>
              </li>
              <li className="linkLink">
                <a href="https://feedmepics.herokuapp.com/" rel="noreferrer"><img className="link" src="./images/link.png" alt="app link" /></a>
              </li>
            </ul>
          </div>
        </div>
        <div className="image">
          <img src="./images/ssFreeMarket.png" className="pImages" alt="Free Market" />
          <div className="overlay">
            <div className="title">Free Market</div>
            <p className="description">This is a full stack p2p app utilizing HTML, CSS, Materialize library, JavaScript, MySql, Node.js, npm, Firebase, and RESTful API technologies.
            </p>
            <ul className="links">
              <li className="gitLink">
                <a href="https://github.com/someseananigans/FreeMarket" target="_blank" rel="noreferrer"><img className="git" src="./images/GitHub-Mark-32px.png" alt="github"/></a>
              </li>
              <li className="linkLink">
                <a href="https://thefreemarket.herokuapp.com/" target="_blank" rel="noreferrer"><img className="link" src="./images/link.png" alt="app link"/></a>
              </li>
            </ul>
          </div>
        </div>
        <div className="image">
          <img src="./images/covidResource.png" className="pImages" alt="Covid Resource"/>
          <div className="overlay">
            <div className="title">Covid Resource</div>
            <p className="description">This is a resource application utilizing HTML, CSS, Materialize library, JavaScript, and RESTful API technologies </p>
            <ul className="links">
              <li className="gitLink">
                <a href="https://github.com/caroltn/covid-resource" target="_blank" rel="noreferrer"><img className="git" src="./images/GitHub-Mark-32px.png" alt="github"/></a>
              </li>
              <li className="linkLink">
                <a href="https://caroltn.github.io/covid-resource/" target="_blank" rel="noreferrer"><img className="link" src="./images/link.png" alt="app link"/></a>
              </li>
            </ul>
          </div>
        </div>
        <div className="image">
          <img src="./images/weatherSS.png" className="pImages" alt="weather app"/>
          <div className="overlay">
            <div className="title">Weather App</div>
            <p className="description">This is a weather rescource page utilizing HTML, CSS, Bootstrap library, JavaScript, and RESTful API technologies</p>
            <ul className="links">
              <li className="gitLink">
                <a href="https://github.com/josephmnielsen/weatherApp" target="_blank" rel="noreferrer"><img className="git" src="./images/GitHub-Mark-32px.png" alt="github"/></a>
              </li>
              <li className="linkLink">
                <a href="https://josephmnielsen.github.io/weatherApp/" target="_blank" rel="noreferrer"><img className="link" src="./images/link.png" alt="app link"/></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Projects