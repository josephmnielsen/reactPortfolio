import './Timeline.css'
import '../../components/css/Styling.css'

const Timeline = () => {
  return (
    <div className="timeL">
      <h6 className="r1">Resume</h6>
      <h1 className="r2">EDUCATION | EXPERIENCE</h1>
      <br />
      <div className="timeline">
        <ul>
          <li>
            <div className="timeline-content">
              <h3 className="date">April 2021</h3>
              <h2>UCI Full Stack Coding Bootcamp</h2>
              <p>Proficient in: Html, CSS, Javascript, JQuery, APIs, Node, MySQL, Mongo, and React.</p>
            </div>
          </li>
          <li>
            <div className="timeline-content">
              <h3 className="date">2017-2020</h3>
              <h2>General Manager</h2>
              <p>Ortica</p>
              <p>Costa Mesa, Ca</p>
            </div>
          </li>
          <li>
            <div className="timeline-content">
              <h3 className="date">December 2020</h3>
              <h2>Associate of Arts</h2>
              <p>Santiago Canyon College</p>
            </div>
          </li>
          <li>
            <div className="timeline-content">
              <h3 className="date">2010-2016</h3>
              <h2>Assistant General Manager</h2>
              <p>Pizza Antica</p>
              <p>San Jose, Ca</p>
            </div>
          </li>
          <li>
            <div className="timeline-content">
              <h3 className="date">2004-2006</h3>
              <h2>Diplome de Cuisine</h2>
              <p>Le Cordon Bleu</p>
              <p>London, UK</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Timeline