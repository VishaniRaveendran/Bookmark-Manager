import React from 'react'
import './Login.css'
import facebookIcon from "./../../assets/facebook.svg"
import googleIcon from "./../../assets/google.svg"
import appleIcon from "./../../assets/apple.svg"
import linkedinIcon from "./../../assets/linkedin.svg"
import './../../fonts/font.css'
import './../../fonts/Gilroy-Bold.ttf'
import './../../fonts/Gilroy-Medium.ttf'
import './../../fonts/Gilroy-SemiBold.ttf'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../../store/UserSlice'
import { useNavigate } from 'react-router-dom'

function Login() {
    //states
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    //redux
    const { loading, error } = useSelector((state) => state.user)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLoginEvent = (e) => {
        e.preventDefault();

        let userCredentials = {
            username: email,
            password: password
        }
        dispatch(loginUser(userCredentials)).then((result) => {
            if (result.payload === 200) {
                setEmail('')
                setPassword('')
                navigate('/Home')
            }
        });
    
    }
    return (
        <div className="loginBackground">
            <div>
                <p className='startText'>Manage your Links<span>{<br />}</span>
                    Collection</p>
            </div>
            <div className="loginContainer">
                <form className='LoginForm' onSubmit={handleLoginEvent}>
                    <div className="loginBoxHeader">
                        <p className="loginBoxHeaderText">Login</p>
                    </div>

                    <div className="form-group">
                        <label className='labelText'>
                            Email
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Email address here"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label className='labelText'>
                            Password
                        </label>

                        <input
                            type="password"
                            className="form-control"
                            placeholder="************"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <div className='forgetPassword'>Forgot Password?</div>

                    </div>
                    <button type="submit" className="loginButton">
                        {loading ? 'Loading...' : 'Login'}
                        {/* Login */}
                    </button>
                    {error && <div className='errorText'>{error}</div>}
                    <p className="loginWithText">
                        Or Login with
                    </p>

                    <div className='socialMediaLogin'>
                        <div className='socialMediaLoginIcon'>
                            <button className='socialMediaButton'>
                                <img className='svgIcon' src={facebookIcon} alt="Facebook" />
                            </button>
                        </div>
                        <div className='socialMediaLoginIcon'>
                            <button className='socialMediaButton'><img className='svgIcon' src={googleIcon} alt="Google" /></button>
                        </div>
                        <div className='socialMediaLoginIcon'>
                            <button className='socialMediaButton'><img className='svgIcon' src={linkedinIcon} alt="LinkedIn" /></button>
                        </div>
                        <div className='socialMediaLoginIcon'>
                            <button className='socialMediaButton'><img className='svgIcon' src={appleIcon} alt="Apple" /></button>
                        </div>
                    </div>

                    <div className='dontHaveAccount'>
                        Don't have an account?  <span><a className="signUpText" href="/SignUp"> Sign up</a></span>
                    </div>

                </form>

            </div>
        </div >
    )
}

export default Login
