

function Header(params) {
     

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
          <ul className="navbar-nav me-auto mb-2">
            <li className="nav-item">
              <a className="nav-link active cfcactive" href="#/" onClick={e => params.setlogin('home')}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#/">Have Work</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#/">Need Work</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#/">Contact Us</a>
            </li>

          </ul>


          <span>
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