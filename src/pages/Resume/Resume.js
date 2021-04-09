import Navbar from '../../components/navbar'
import Skills from '../../components/skills'
import Timeline from '../../components/timeline'
import '../../components/images/zurich.JPG'

const Resume = () => {
  return (
    <>
    <Navbar />
    <div className="container">
    <Skills />
    <Timeline />
    </div>
    </>
  )
}

export default Resume
