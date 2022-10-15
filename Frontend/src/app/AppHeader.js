import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './AppHeader.css';

class AppHeader extends Component {
    render() {
        return (
            // <header className="app-header">
            //     <div className="container">
            //         <div className="app-branding">
            //             <Link to="/" className="app-title">Know Your Neighborhood</Link>
            //         </div>
            //         <div className="app-options">
            //             <nav className="app-nav">
            //                     { this.props.authenticated ? (
            //                         <ul>
            //                             <li>
            //                                 <NavLink to="/profile">PROFILE</NavLink>
            //                             </li>
            //                             <li>
            //                                 <a onClick={this.props.onLogout}>LOGOUT</a>
            //                             </li>
            //                         </ul>
            //                     ): (
            //                         <ul>
            //                             <li>
            //                                 <NavLink to="/login">LOGIN</NavLink>        
            //                             </li>
            //                             <li>
            //                                 <NavLink to="/signup">SIGNUP</NavLink>        
            //                             </li>
            //                         </ul>
            //                     )}
            //             </nav>
            //         </div>
            //     </div>
            // </header>


    //         <header className="site-navbar js-sticky-header site-navbar-target" role="banner">
    //     <div className="container">
    //       <div className="row align-items-center">
    //         <div className="col-6 col-xl-2">
    //           <h1 className="mb-0 site-logo"><a href="index.html">Brand<span className="text-primary">.</span> </a></h1>
    //         </div>
    //         <div className="col-12 col-md-10 d-none d-xl-block">
    //           <nav className="site-navigation position-relative text-right" role="navigation">
    //             <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
    //               <li><a href="#home-section" className="nav-link">Home</a></li>
    //               <li className="has-children">
    //                 <a href="#about-section" className="nav-link">About Us</a>
    //                 <ul className="dropdown">
    //                   <li><a href="#team-section" className="nav-link">Team</a></li>
    //                   <li><a href="#pricing-section" className="nav-link">Pricing</a></li>
    //                   <li><a href="#faq-section" className="nav-link">FAQ</a></li>
    //                   <li><a href="#gallery-section" className="nav-link">Gallery</a></li>
    //                   <li><a href="#services-section" className="nav-link">Services</a></li>
    //                   <li><a href="#testimonials-section" className="nav-link">Testimonials</a></li>
    //                   <li className="has-children">
    //                     <a href="#">More Links</a>
    //                     <ul className="dropdown">
    //                       <li><a href="#">Menu One</a></li>
    //                       <li><a href="#">Menu Two</a></li>
    //                       <li><a href="#">Menu Three</a></li>
    //                     </ul>
    //                   </li>
    //                 </ul>
    //               </li>
    //               <li><a href="#blog-section" className="nav-link">Blog</a></li>
    //               <li><a href="#contact-section" className="nav-link">Contact</a></li>
    //               <li className="social"><a href="#contact-section" className="nav-link"><span className="icon-facebook" /></a></li>
    //               <li className="social"><a href="#contact-section" className="nav-link"><span className="icon-twitter" /></a></li>
    //               <li className="social"><a href="#contact-section" className="nav-link"><span className="icon-linkedin" /></a></li>
    //             </ul>
    //           </nav>
    //         </div>
    //         <div className="col-6 d-inline-block d-xl-none ml-md-0 py-3" style={{position: 'relative', top: '3px'}}><a href="#" className="site-menu-toggle js-menu-toggle float-right"><span className="icon-menu h3" /></a></div>
    //       </div>
    //     </div>
    //   </header>

    <div>
        <header className="site-navbar" role="banner">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-11 col-xl-2">
                <h1 className="mb-0 site-logo"><a href="/" className="text-white mb-0">Know Your Neighborhood</a></h1>
              </div>
              {/* <div className="app-options">
                        <nav className="app-nav">
                                { this.props.authenticated ? (
                                    <ul>
                                        <li>
                                            <NavLink to="/profile">PROFILE</NavLink>
                                        </li>
                                        <li>
                                            <a onClick={this.props.onLogout}>LOGOUT</a>
                                        </li>
                                    </ul>
                                ): (
                                    <ul>
                                        <li>
                                            <NavLink to="/login">LOGIN</NavLink>        
                                        </li>
                                        <li>
                                            <NavLink to="/signup">SIGNUP</NavLink>        
                                        </li>
                                    </ul>
                                )}
                        </nav>
                    </div> */}
              <div className="col-12 col-md-10 d-none d-xl-block app-options">
                <nav className="site-navigation position-relative text-right app-nav" role="navigation">
                { this.props.authenticated ? (
                                    <ul className="site-menu js-clone-nav mr-auto d-none d-lg-block">
                                         <li><a href="/"><span>Home</span></a></li>
                                       <li><a href="about.html"><span>About Us</span></a></li>
                                       <li><a href="blog.html"><span>Terms and Conditions</span></a></li>
                                       <li><a href="ContactUS.js"><span>Contact Us</span></a></li>
                                       {/* className="active" */}

                                        <li>
                                            <NavLink to="/profile"><span>PROFILE</span></NavLink>
                                        </li>
                                        <li>
                                            <a onClick={this.props.onLogout}><span>LOGOUT</span></a>
                                        </li>

                                
                                    </ul>
                                ): (
                                    <ul className="site-menu js-clone-nav mr-auto d-none d-lg-block">
                                       <li><a href="/"><span>Home</span></a></li>
                                       <li><a href="about.html"><span>About Us</span></a></li>
                                       <li><a href="blog.html"><span>Terms and Conditions</span></a></li>
                                       <li><a href="contact.html"><span>Contact Us</span></a></li>

                                        <li>
                                            <NavLink to="/login"><span>LOGIN</span></NavLink>        
                                        </li>
                                        <li>
                                            <NavLink to="/signup"><span>SIGNUP</span></NavLink>        
                                        </li>
                                    </ul>
                                )}
                  {/* <ul className="site-menu js-clone-nav mr-auto d-none d-lg-block">
                    
                  </ul> */}
                </nav>
              </div>
              <div className="d-inline-block d-xl-none ml-md-0 mr-auto py-3" style={{position: 'relative', top: '3px'}}><a href="#" className="site-menu-toggle js-menu-toggle text-white"><span className="icon-menu h3" /></a></div>
            </div>
          </div>
        </header>
        <div className="hero2" style={{backgroundImage: 'url("assets/images/bg.jpg")'}} />
      </div>

        )
    }
}

export default AppHeader;