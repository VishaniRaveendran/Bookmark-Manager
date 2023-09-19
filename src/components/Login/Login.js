// import React from 'react'
import './Login.css'
import './../../fonts/Gilroy-FREE/Gilroy-FREE/Gilroy-ExtraBold.otf'
import facebookIcon from "./../../assets/Facebook.png"
import googleIcon from "./../../assets/Google.png"
import appleIcon from "./../../assets/Apple.png"
import linkedinIcon from "./../../assets/Linkedin.png"


function Login() {
    return (
        <div className="loginBackground">
            <div>
                <p className='startText'>Manage your Links<span>{<br />}</span>
                    Collection</p>
            </div>
            <div className="loginContainer">

                <form className='LoginForm'>
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
                        />
                    </div>
                    <div className="form-group">
                        <div className='forgetPassword'>Forgot Password?</div>

                    </div>
                    <button type="submit" className="loginButton">
                        Login
                    </button>
                    <p className="loginWithText">
                        Or Login with
                    </p>

                    <div className='socialMediaLogin'>
                        <div className='socialMediaLoginIcon'>
                            <button className='socialMediaButton'><img src={facebookIcon} alt="Facebook" /></button>
                        </div>
                        <div className='socialMediaLoginIcon'>
                            <button className='socialMediaButton'><img src={googleIcon} alt="Google" /></button>
                        </div>
                        <div className='socialMediaLoginIcon'>
                            <button className='socialMediaButton'><img src={linkedinIcon} alt="LinkedIn" /></button>
                        </div>
                        <div className='socialMediaLoginIcon'>
                            <button className='socialMediaButton'><img src={appleIcon} alt="Apple" /></button>
                        </div>
                    </div>

                    <div className='dontHaveAccount'>
                        Don't have an account? <span className='signUpText'>Sign up</span>
                    </div>

                </form>

            </div>

            {/* <Container>
                <Row>
                    <Container>
                        <Col md={6} >
                            <p className='startText'>Mange your Links<span>{<br />}</span>
                                Collection</p><br />
                        </Col>
                    </Container>
                    <Col md={4}>
                        <Container className="loginContainer">

                        </Container>
                    </Col>
                </Row>
            </Container> */}





        </div >
        // <>
        //     <div className="container-fluid">
        //         <div className="row justify-content-center">
        //             <div className="col-12 col-sm-10 col-md-12 col-lg-11 col-xl-10">
        //                 <div className="card d-flex mx-auto my-5">
        //                     <div className="row">
        //                         <div className="col-md-7 col-sm-12 col-xs-12 c2 px-5 pt-5">
        //                             <div className="row">
        //                                 <nav className="nav font-weight-500 mb-1 mb-sm-2 mb-lg-5 px-sm-2 px-lg-5">
        //                                     {" "}
        //                                     {/* <Link className="nav-link" to="/addTour">
        //                                         Careers
        //                                     </Link>{" "} */}
        //                                     {/* <Link className="nav-link ac" to="/dashboard">
        //                                         Students
        //                                     </Link>{" "} */}
        //                                     {/* <a className="nav-link" href="#">
        //                                         Admission
        //                                     </a>{" "} */}
        //                                 </nav>
        //                             </div>
        //                             <form
        //                                 name="myform"
        //                                 className="px-5 pb-5"
        //                             // onSubmit={handleSubmit}
        //                             >
        //                                 <div className="d-flex">
        //                                     {" "}
        //                                     <img
        //                                         src="https://i.imgur.com/oGcceAH.jpg"
        //                                         height="22px"
        //                                         width="22px"
        //                                         alt="true"
        //                                         className="mr-3 mt-2"
        //                                     />
        //                                     <h3 className="font-weight-bold">Log in</h3>
        //                                 </div>
        //                                 <input
        //                                     type="email"
        //                                     // value={email}
        //                                     name="email"
        //                                     placeholder="Please provide your email"
        //                                 // onChange={onInputChange}
        //                                 />
        //                                 <input
        //                                     type="password"
        //                                     name="password"
        //                                     // value={password}
        //                                     placeholder="Password"
        //                                 // onChange={onInputChange}
        //                                 />
        //                                 <span className="ac" id="forgot">
        //                                     Forgot?
        //                                 </span>
        //                                 <button
        //                                     className="text-white text-weight-bold bt"
        //                                     type="submit"
        //                                 >
        //                                     Continue
        //                                 </button>
        //                                 <h5 className="ac" id="register">
        //                                     Register
        //                                 </h5>
        //                             </form>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </>
    )
}

export default Login
