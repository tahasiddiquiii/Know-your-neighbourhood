import React, { Component } from 'react';
import './Signup.css';
import { Link, Redirect } from 'react-router-dom'
import { signup } from '../../service/OnlineService';
import fbLogo from '../../img/fb-logo.png';
import googleLogo from '../../img/google-logo.png';
import Alert from 'react-s-alert';

export const API_BASE_URL = 'http://localhost:8181';
export const OAUTH2_REDIRECT_URI = 'http://localhost:3000/oauth2/redirect';
export const GOOGLE_AUTH_URL = API_BASE_URL + '/oauth2/authorize/google?redirect_uri=' + OAUTH2_REDIRECT_URI;
export const FACEBOOK_AUTH_URL = API_BASE_URL + '/oauth2/authorize/facebook?redirect_uri=' + OAUTH2_REDIRECT_URI;


class Signup extends Component {
    render() {
        if(this.props.authenticated) {
            return <Redirect
                to={{
                pathname: "/",
                state: { from: this.props.location }
            }}/>;            
        }

        return (
            <>
            <div className="signup-container hero" style={{backgroundImage: 'url("assets/images/hero_1.jpg")'}}>
                <div className="signup-content">
                    <h1 className="signup-title"><b>Signup with <i>Know Your Neighborhood</i></b></h1>
                    
                    {/* OR Seperator between Social SignUp and Local SignUp Form */}
                    
                    <SignupForm {...this.props} />

                    <div className="or-separator">
                        <span className="or-text">OR</span>
                    </div>

                    <SocialSignup />

                   <br></br> 
                    <hr></hr>

                    <span className="login-link">Already have an account? <Link to="/login">Login!</Link></span>
                </div>
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

//Social SignUp form 
class SocialSignup extends Component {
    render() {
        return (
            <div className="social-signup">
                <a className="btn btn-block social-btn google" href={GOOGLE_AUTH_URL}>
                    <img src={googleLogo} alt="Google" /> Sign up with Google</a>
                <a className="btn btn-block social-btn facebook" href={FACEBOOK_AUTH_URL}>
                    <img src={fbLogo} alt="Facebook" /> Sign up with Facebook</a>
            </div>
        );
    }
}

//Local SignUp Form
class SignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            email: '',
            password: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const inputName = target.name;        
        const inputValue = target.value;

        this.setState({
            [inputName] : inputValue
        });        
    }

    handleSubmit(event) {
        event.preventDefault();   

        const signUpRequest = Object.assign({}, this.state);

        signup(signUpRequest)
        .then(response => {
            Alert.success("You're successfully registered. Please login to continue!");
            this.props.history.push("/login");
        }).catch(error => {
            Alert.error((error && error.message) || 'Oops! Something went wrong. Please try again!');            
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-item">
                    <input type="text" name="userName" 
                        className="form-control" placeholder="Name"
                        value={this.state.userName} onChange={this.handleInputChange} required/>
                </div>
                <div className="form-item">
                    <input type="email" name="email" 
                        className="form-control" placeholder="Email"
                        value={this.state.email} onChange={this.handleInputChange} required/>
                </div>
                <div className="form-item">
                    <input type="password" name="password" 
                        className="form-control" placeholder="Password"
                        value={this.state.password} onChange={this.handleInputChange} required/>
                </div>
                <div className="form-item">
                    <button type="submit" className="btn btn-block btn-primary" >Sign Up</button>
                </div>
            </form>                    

        );
    }
}

export default Signup