
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
        <a href="https://mighty-coast-38363.herokuapp.com/" target="_blank" rel="noreferrer" className="image">
          <img src={freemarket} class="pImages" alt="Free market" />
          <div className="overlay">
            <div className="title">Free Market</div>
            <p className="description">This is a full stack p2p app utilizing HTML, CSS, Materialize library, JavaScript, MySql, Node.js, npm, Firebase, and RESTful API.
            </p>
          </div>
        </a>
        <a href="https://josephmnielsen.github.io/covid-resource/" target="_blank" rel="noreferrer" className="image">
          <img src={covidResource} className="pImages" alt="Covid Resource" />
          <div className="overlay">
            <div className="title">Covid Resource</div>
            <p className="description">This is a resource application utilizing HTML, CSS, Materialize library, JavaScript, and RESTful APIs, </p>
          </div>
        </a>
        <a href="https://josephmnielsen.github.io/weatherApp/" target="_blank" rel="noreferrer" className="image">
          <img src={weatherApp} className="pImages" alt="Weather app" />
          <div className="overlay">
            <div className="title">Weather App</div>
            <p className="description">This is a weather rescource page utilizing HTML, CSS, Bootstrap library, JavaScript, and RESTful APIs</p>
          </div>
        </a>
        <a href="https://mighty-coast-38363.herokuapp.com/" target="_blank" rel="noreferrer" className="image">
          <img src={freemarket} className="pImages" alt="Free market" />
          <div className="overlay">
            <div className="title">Free Market</div>
            <p className="description">This is a second link to the above application and a placeholder for a future project</p>
          </div>
        </a>
      </div>
    </div>

  )
}

export default Projects