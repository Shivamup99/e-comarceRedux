import React from 'react'

function Footer() {
    return (
        <div>
    <footer>
    <div className="jumbotron jumbotron-fluid bg-secondary p-4 mt-5 mb-0">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 cizgi">
            <div className="card bg-secondary border-0">
              <div className="card-body text-light text-center">
                <h5 className="card-title text-white display-4" style={{fontSize: 30}}>Shivam Upadhyay</h5>
                <p className="d-inline lead">This is reserved for web © 2020<br />
                  <a href="#" style={{textDecoration:'none'}} className="text-light d-block lead">My Web</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 cizgi">
            <div className="card bg-secondary border-0">
              <div className="card-body text-center">
                <h5 className="card-title text-white display-4" style={{fontSize: 30}}>Contact Me</h5>
                <a className="text-light d-block lead" style={{marginLeft: '-20px',textDecoration:'none'}} href="#"><i className="fa fa-phone mr-2" />+91 0 000 000 000</a>
                <a className="text-light d-block lead" href="#" style={{textDecoration:'none'}}><i className="fa fa-envelope mr-2" />shivam@gmail.com</a>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
            <div className="card bg-secondary border-0">
              <div className="card-body text-center">
                <h5 className="card-title text-white display-4" style={{fontSize: 30}}>Socile Media</h5>
                <a className="text-light" href="#"><i className="fa fa-github-square fa-fw fa-2x" /></a>
                <a className="text-light" href="#"><i className="fa fa-linkedin fa-fw fa-2x" /></a>
                <a className="text-light" href="#"><i className="fa fa-facebook-square fa-fw fa-2x" /></a>
                <a className="text-light" href="#"><i className="fa fa-instagram fa-fw fa-2x" /></a>
                
              </div>
            </div>
          </div>	
        </div>
      </div>
    </div>
  </footer>
        </div>
    )
}

export default Footer
