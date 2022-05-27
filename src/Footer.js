
import { FaGoogle, FaFacebook, FaInstagram, FaLinkedin, FaHome, FaEnvelope, FaPhone } from "react-icons/fa";
import './styles.css'
function Footer() {
    
    return(
        <footer className="text-center text-lg-start text-white" >

      <section className="d-flex justify-content-center p-4" >

        <div className="align-items-center flexed">
          <span>Get connected with us on social networks</span>
        </div>

  

        <div>

         <a className="btn btn-outline-danger btn-floating m-1 rounded-circle " href="https://www.facebook.com/MakersTribeHQ/" target="_blank" rel="noopener noreferrer" role="button">
         {/* <i className="fab fa-google"></i> */}
         <FaGoogle className="fab"/>
         </a>

          <a className="btn btn-outline-danger btn-floating m-1 rounded-circle" href="https://twitter.com/makers_tribe" target="_blank" rel="noopener noreferrer" role="button">
            {/* <i className="fab fa-facebook-f"></i> */} 
            <FaFacebook />
            </a>


          <a className="btn btn-outline-danger btn-floating m-1 rounded-circle" href="https://www.instagram.com/chennaifreelancers/" target="_blank" rel="noopener noreferrer" role="button">
            {/* <i  className="fa fa-instagram"></i> */}
            <FaInstagram />
            </a>

          <a className="btn  btn-outline-danger m-1 rounded-circle " href="https://www.linkedin.com/company/makerstribe/" target="_blank" rel="noopener noreferrer" role="button">
            {/* <i className="fab fa-linkedin-in"></i> */}
            <FaLinkedin />
            </a>

      
        </div>
      </section>
      <section >
        <div className="container text-center  mt-5">
              <h6 className="text-uppercase fw-bold cfc-red">Contact Us</h6>
              <hr className="mb-4 mt-0 d-inline-block mx-auto"/>
              <p className="flexed-items"><FaHome  className="fas mr-3"/> 391A, 3rd floor, Old Mahabalipuram Rd, Nehru Nagar, Perungudi, Chennai, Tamil Nadu 600096</p>
              <p className="flexed-items"><FaEnvelope className="fas mr-3"/>developer.makerstribe@gmail.com</p>
              <p className="flexed-items"><FaPhone className="fas mr-3"/> 8610086243</p>
        </div>
      </section>
      <div className="text-center p-3">
        © 2022 Copyright:
        <a className="text-white" href="#/"
           > CDIX Innovations Pvt.Ltd.</a>
      </div>
    </footer>
    )
}

export default Footer;