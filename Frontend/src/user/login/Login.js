import React, { Component } from 'react';
import './Login.css';
import { login } from '../../service/OnlineService';
import { Link, Redirect } from 'react-router-dom'
import fbLogo from '../../img/fb-logo.png';
import googleLogo from '../../img/google-logo.png';
import Alert from 'react-s-alert';

export const API_BASE_URL = 'http://localhost:8181';
export const OAUTH2_REDIRECT_URI = 'http://localhost:3000/oauth2/redirect';
export const GOOGLE_AUTH_URL = API_BASE_URL + '/oauth2/authorize/google?redirect_uri=' + OAUTH2_REDIRECT_URI;
export const FACEBOOK_AUTH_URL = API_BASE_URL + '/oauth2/authorize/facebook?redirect_uri=' + OAUTH2_REDIRECT_URI;
export const ACCESS_TOKEN = 'accessToken';


class Login extends Component {
    componentDidMount() {
        // If the OAuth2 login encounters an error, the user is redirected to the /login page with an error.
        // Here we display the error and then remove the error query parameter from the location.
        if(this.props.location.state && this.props.location.state.error) {
            setTimeout(() => {
                Alert.error(this.props.location.state.error, {
                    timeout: 5000
                });
                this.props.history.replace({
                    pathname: this.props.location.pathname,
                    state: {}
                });
            }, 100);
        }
    }
    
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
            <div className="login-container hero" style={{backgroundImage: 'url("assets/images/n3.jpg")'}} >
                <div className="login-content">
                    <h1 className="login-title"><b>Login to <i>Know Your Neighborhood</i></b></h1>
                   
                   
                    <LoginForm {...this.props} />

                    <div className="or-separator">
                        <span className="or-text">OR</span>
                    </div>

                    <SocialLogin />

                    <br></br>
                    <hr></hr>
                    
                    <span className="signup-link">New user? <Link to="/signup">Sign up!</Link></span>
                    
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

//Social Login Form
class SocialLogin extends Component {
    render() {
        return (
            <div className="social-login">
                <a className="btn btn-block social-btn google" href={GOOGLE_AUTH_URL}>
                    <img src={googleLogo} alt="Google" /> Log in with Google</a>
                <a className="btn btn-block social-btn facebook" href={FACEBOOK_AUTH_URL}>
                    <img src={fbLogo} alt="Facebook" /> Log in with Facebook</a>
            </div>
        );
    }
}

//Local LoginForm
class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
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

        const loginRequest = Object.assign({}, this.state);

        login(loginRequest)
        .then(response => {
            localStorage.setItem(ACCESS_TOKEN, response.accessToken);
            Alert.success("You're successfully logged in!");
            this.props.history.push("/profile");
            window.location.reload();
        }).catch(error => {
            Alert.error((error && error.message) || 'Oops! Something went wrong. Please try again!');
        });
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
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
                    <button type="submit" className="btn btn-block btn-primary">Login</button>
                </div>
            </form>     
            
            
        );
    }
}

export default Login
