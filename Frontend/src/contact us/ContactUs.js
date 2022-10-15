import React, { Component } from 'react';

class ContactUs extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    render() {
        return (
            <>
            <div className="profile-container hero"  style={{backgroundImage: 'url("assets/images/contact.jpg")'}} >
               
                 
            </div>
            <footer className="footer-99382" style={{backgroundImage: 'url("images/hero_1.jpg")'}}>
            <div className="container">
              <div className="row">
                <div className="col-md-4 pr-md-5">
                  <a href="#" className="footer-site-logo d-block mb-4">Know Your Neighborhood</a>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quasi perferendis ratione perspiciatis accusantium.</p>
                </div>
                <div className="col-md">
                  <h3>Discover</h3>
                  <ul className="list-unstyled nav-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                  </ul>
                </div>
                <div className="col-md">
                  <h3>About</h3>
                  <ul className="list-unstyled nav-links">
                    <li><a href="#">Clients</a></li>
                    <li><a href="#">Team</a></li>
                    <li><a href="#">Career</a></li>
                    <li><a href="#">Testimonials</a></li>
                    <li><a href="#">Journal</a></li>
                  </ul>
                </div>
                <div className="col-md">
                  <h3>Help</h3>
                  <ul className="list-unstyled nav-links">
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms &amp; Conditions</a></li>
                    <li><a href="#">Partners</a></li>
                  </ul>
                </div>
                <div className="col-md">
                  <h3>Follow Us</h3>
                  <ul className="social list-unstyled">
                    <li><a href="#" className="pl-0"><span className="icon-instagram" /></a></li>
                    <li><a href="#"><span className="icon-twitter" /></a></li>
                    <li><a href="#"><span className="icon-facebook" /></a></li>
                    <li><a href="#"><span className="icon-pinterest" /></a></li>
                    <li><a href="#"><span className="icon-dribbble" /></a></li>
                  </ul>
                </div>
              </div> 
              <div className="row ">
                <div className="col-12 text-center">
                  <div className="copyright mt-5 pt-5">
                    <p><small>© 2019—2020 All Rights Reserved.</small></p>
                  </div>
                </div>
              </div> 
            </div>
          </footer>
          </>
        );
    }
}

export default ContactUs