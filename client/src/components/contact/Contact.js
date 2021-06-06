import { useState } from 'react'
import Data from '../../utils'
import './Styling.css'



const Contact = () => {
  
  const [contactDataState, setContactDataState] = useState({
    name: '',
    email: '',
    message: '',
  })
  
  const handleInputChange = ({ target }) => {
    setContactDataState({ ...contactDataState, [target.name]: target.value })
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()
    Data.addData({event})
    // .then((data) => {
    //   setContactDataState({ ...contactDataState, data })
    // })
  }


  return (
    <div className="container">
      <div className="contact">
        <div className="row">
          <h6>Get in touch</h6>
          <h1>CONTACT</h1>
          <form
            onSubmit={() => handleSubmit({
              name: contactDataState.name,
              email: contactDataState.email,
              message: contactDataState.message
            })}
         >
            <section className="styling ctag">
              <div className="form-group">
                <input 
                type="text" 
                className="form-control" 
                id="exampleFormControlInput1" 
                placeholder="name" 
                // value={contactDataState.name} 
                handleChange={handleInputChange} />
              </div>
            </section>
            <section className="styling ctag">
              <div className="form-group">
                <input 
                type="email" 
                className="form-control" 
                id="exampleFormControlInput1" 
                placeholder="email" 
                handleChange={handleInputChange} 
                // value={contactDataState.email} 
                />
              </div>
            </section>
            <section className="styling ctag">
              <div className="form-group">
                <textarea 
                className="form-control" 
                rows="3" 
                placeholder="message" 
                handleChange={handleInputChange} 
                // value={contactDataState.message} 
                />
              </div>
            </section>
            <button 
            className="btn submit" 
            onClick={() => handleSubmit({
              name: contactDataState.name,
              email: contactDataState.email,
              message: contactDataState.message
            })}
          >
            Submit
          </button>
          </form>
        </div>
        <div className="row social">
          <h6>Or via</h6>
          <h1>SOCIAL</h1>
          <ul>
            <li>Phone: <a href="tel:7146977543">+1.714.697.7543</a></li>
            <li>Email: <a href="mailto:josephmnielsen@gmial.com">
              Josephmnielsen@gmail.com</a>
            </li>
            <li>Github: <a href="https://github.com/josephmnielsen">/josephmnielsen</a>
            </li>
            <li>LinkedIn: <a href="https://www.linkedin.com/in/josephmnielsen/">/josephmnielsen</a>
            </li>
            <li>Instagram: <a href="https://www.instagram.com/josephmnielsen/">@josephmnielsen</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Contact