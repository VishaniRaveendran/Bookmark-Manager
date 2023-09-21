import React from 'react'
import './SignUp.css'
import facebookIcon from "./../../assets/facebook.svg"
import googleIcon from "./../../assets/google.svg"
import appleIcon from "./../../assets/apple.svg"
import linkedinIcon from "./../../assets/linkedin.svg"
import './../../fonts/font.css'
import './../../fonts/Gilroy-Bold.ttf'
import './../../fonts/Gilroy-Medium.ttf'
import './../../fonts/Gilroy-SemiBold.ttf'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { signupUser } from '../../store/UserSlice'

function SignUp() {
    //states
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    //redux
    const { loading, error } = useSelector((state) => state.user)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSignUpEvent = (e) => {
        e.preventDefault();

        let signUpuserCredentials = {
            email: email,
            first_name: name,
            password: password,
            confirm_password: password,
            last_name: name

        }
        dispatch(signupUser(signUpuserCredentials)).then((result) => {
            if (result.payload === 201) {
                setEmail('')
                setPassword('')
                setName('')
                navigate('/Home')
            }
        });

    }
    return (
        <div className="signUpBackground">
            <div>
                <p className='startText'>Manage your Links<span>{<br />}</span>
                    Collection</p>
            </div>
            <div className="signUpContainer">
                <form className='signUpForm' onSubmit={handleSignUpEvent}>
                    <div className="signUpBoxHeader">
                        <p className="signUpBoxHeaderText">Sign Up</p>
                    </div>

                    <div className="form-group">
                        <label className='labelText'>
                            Name
                        </label>
                        <input
                            type="Name"
                            className="form-control"
                            placeholder="Your name here"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label className='labelText'>
                            Email
                        </label>
                        <input
                            type="Email"
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
                    <button type="submit" className="signUpButton">
                        {loading ? 'Loading...' : 'Sign Up'}
                    </button>
                    {error && <div className='errorText'>{error}</div>}
                    <p className="signUpWithText">
                        Or Sign Up with
                    </p>

                    <div className='socialMediasignUp'>
                        <div className='socialMediasignUpIcon'>
                            <button className='socialMediaButton'>
                                <img className='svgIcon' src={facebookIcon} alt="Facebook" />
                            </button>
                        </div>
                        <div className='socialMediasignUpIcon'>
                            <button className='socialMediaButton'><img className='svgIcon' src={googleIcon} alt="Google" /></button>
                        </div>
                        <div className='socialMediasignUpIcon'>
                            <button className='socialMediaButton'><img className='svgIcon' src={linkedinIcon} alt="LinkedIn" /></button>
                        </div>
                        <div className='socialMediasignUpIcon'>
                            <button className='socialMediaButton'><img className='svgIcon' src={appleIcon} alt="Apple" /></button>
                        </div>
                    </div>

                    <div className='HaveAccount'>
                        Have an account?  <span><a className="signUpText" href="/">Login</a></span>
                    </div>

                </form>

            </div>
        </div >

    )
}

export default SignUp
