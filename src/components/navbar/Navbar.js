import {
  Link
} from 'react-router-dom'
import logo from '../../components/images/finalLogo.png'
import github from '../../components/images/github.jpeg'
import instagram from '../../components/images/instagram.png'
import linkedin from '../../components/images/linkedin.png'
import './Styling.css'


const Navbar = () => {
  return (
    <nav className="navbar navbar-light fixed-top nav1">
      <div className="container-fluid">
        <Link className="navbar-brand header1" to='/'><img src={logo} className="mainImg" alt="logo" /></Link>
          <ul className="nav justify-content-end nav2">
            <li className="nav-item nav2">
              <Link className="nav-link nav2" to='/'>About</Link>
            </li>
            <li>
              <Link className="nav-link nav2" to='/resume'>Resume</Link>
            </li>
            <li className="nav-item nav2">
              <Link className="nav-link nav2" to='/portfolio'>Portfolio</Link>
            </li>
            <li className="nav-item nav2">
              <Link className="nav-link nav2" to='/contact'>Contact</Link>
            </li>
            <li>
            <a href='https://github.com/josephmnielsen' target="_blank" rel="noreferrer"><img src={github} className="smIcons" alt="github" /></a>
            <a href='https://www.instagram.com/josephmnielsen/' target="_blank" rel="noreferrer"><img src={instagram}className="smIcons" alt="instagram" /></a>
            <a href='https://www.linkedin.com/in/josephmnielsen/' target="_blank" rel="noreferrer"><img src={linkedin} className="smIcons" alt="linked-in" /></a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar