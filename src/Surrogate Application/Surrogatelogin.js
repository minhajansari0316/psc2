import React from 'react'

const Surrogatelogin = () => {
  return (
    <>
    <div className="page-wrapper bg-blue p-t-100 p-b-100 font-robo">
        <div className="wrapper wrapper--w680">
            <div className="card card-1">
                <div className="card-heading" />
                <div className="card-body">
                    <h2 className="title">Welcome to the International Surrogacy Center Portal</h2>
                    
                    <div className='col-lg-12'>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <div className="">

                                    <div className="input-group">
                                        <input
                                            className="input--style-1 js-datepicker"
                                            type="email"
                                            placeholder="Email"

                                        />
                                        <i className="zmdi zmdi-calendar-note input-icon js-btn-calendar" />

                                    </div>

                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className="">

                                    <div className="input-group">
                                        <input
                                            className="input--style-1 js-datepicker"
                                            type="password"
                                            placeholder="password"

                                        />
                                        <i className="zmdi zmdi-calendar-note input-icon js-btn-calendar" />

                                    </div>

                                </div>
                                <p>Forgot password?</p>
                            </div>
                            
                            <div className='col-lg-12 d-flex justify-content-center' style={{marginTop:'10px'}}>
                                          <button type="button" className="btn btn-primary btn-lg"
                                            style={{
                                              border: 'none',
                                              width: '100px',
                                              height: '44px',
                                              boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
                                            }}



                                          >Login</button>
                                          
                                        </div>
                                        <div className='col-lg-12 d-flex justify-content-center' style={{marginTop:'10px'}}>
                                        <p>Don’t have an account? Sign up here</p>
                                            </div>

                           




                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    {/* Main JS*/}
    {/* This templates was made by Colorlib (https://colorlib.com) */}
    {/* end document*/}
</>
  )
}

export default Surrogatelogin
