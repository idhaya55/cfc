
import { useState } from 'react';
import './styles.css';
function Header(params) {
      const [curentHeader, SetCurentHeader] = useState('Home')

      function handleClick(e){
        SetCurentHeader('Home');
        params.setlogin('home')
      }
    return(
        <header>
    <nav className="navbar navbar-expand-lg navbar-light bg-white " >
      <div className="container-sm">
        <a className="navbar-brand" href="#/">Chennai Freelancers Club</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto half-width">
            <li className="nav-item">
              <a className="nav-link active" style={curentHeader === 'Home' ? { color: '#FF4646',fontWeight: 'bold',borderBottom: '3px #FF4646 solid'}: {}} href="#/" onClick={e => handleClick(e)} >Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#/" style={curentHeader === 'Have' ? { color: '#FF4646',fontWeight: 'bold',borderBottom: '3px #FF4646 solid'}: {}}  onClick={e => SetCurentHeader('Have')}>Have Work</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#/" style={curentHeader === 'Need' ? { color: '#FF4646',fontWeight: 'bold',borderBottom: '3px #FF4646 solid'}: {}} onClick={e => SetCurentHeader('Need')}>Need Work</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#/" style={curentHeader === 'Contact' ? { color: '#FF4646',fontWeight: 'bold',borderBottom: '3px #FF4646 solid'}: {}} onClick={e => SetCurentHeader('Contact')}>Contact Us</a>
            </li>

          </ul>


          <span className="width-with-flex">
            <button type="button" className="btn btn-outline-success rounded-pill" onClick={e => params.setlogin('login')}>Login</button>
            <button type="button" className="btn btn-outline-danger rounded-pill " onClick={e => params.setlogin('signUp')}>Signup</button>
          </span>
        </div>
      </div>
    </nav>
  </header>
    )

}

export default Header;