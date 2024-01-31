import React from 'react'
import '../Surrogate Application/register.css'

const SurrogateRegister = () => {
    return (
        <>
            <>
                <div className="page-wrapper bg-blue p-t-100 p-b-100 font-robo">
                    <div className="wrapper wrapper--w680">
                        <div className="card card-1">
                            <div className="card-heading" />
                            <div className="card-body">
                                <h2 className="title">Becoming a Surrogate Starts Here</h2>
                                <p style={{ marginTop: '-15px', fontSize: '16px' }}>It only takes 2 minutes to find out if you pre-qualify to become a surrogate.
                                    Fill out the form below to start your pre-qualification screening!</p>
                                <div className='col-lg-12'>
                                    <div className='row'>
                                        <div className='col-lg-6'>
                                            <div className="">

                                                <div className="input-group">
                                                    <input
                                                        className="input--style-1 js-datepicker"
                                                        type="text"
                                                        placeholder="First Name*"

                                                    />
                                                    <i className="zmdi zmdi-calendar-note input-icon js-btn-calendar" />

                                                </div>

                                            </div>
                                        </div>
                                        <div className='col-lg-6'>
                                            <div className="">

                                                <div className="input-group">
                                                    <input
                                                        className="input--style-1 js-datepicker"
                                                        type="text"
                                                        placeholder="Last Name*"

                                                    />
                                                    <i className="zmdi zmdi-calendar-note input-icon js-btn-calendar" />

                                                </div>

                                            </div>
                                        </div>


                                        <div className='col-lg-6'>
                                            <div className="">

                                                <div className="input-group">
                                                    <input
                                                        className="input--style-1 js-datepicker"
                                                        type="number"
                                                        placeholder="Phone"

                                                    />
                                                    <i className="zmdi zmdi-calendar-note input-icon js-btn-calendar" />

                                                </div>

                                            </div>
                                        </div>
                                        <div className='col-lg-6'>
                                            <div className="">

                                                <div className="input-group">
                                                    <input
                                                        className="input--style-1 js-datepicker"
                                                        type="text"
                                                        placeholder="State"

                                                    />
                                                    <i className="zmdi zmdi-calendar-note input-icon js-btn-calendar" />

                                                </div>

                                            </div>
                                        </div>
                                        <div className='col-lg-12'>
                                            <div className="">
                                                <p >Are you a US citizen or legal permanent resident? *</p>

                                                <div className='col-lg-6'>
                                                    <div className='row'>

                                                        <div className='col-lg-3 col-sm-2 col-xs-2 d-flex justify-content-start'>


                                                            <input type="radio" className='form-control' value="HTML" />
                                                            <label for="html" style={{ fontSize: '15px', marginLeft: '5px' }}>Yes</label>

                                                        </div>
                                                        <div className='col-lg-3 col-sm-2 col-xs-2 d-flex justify-content-start'>


                                                            <input type="radio" className='form-control' value="HTML" />
                                                            <label for="html" style={{ fontSize: '15px', marginLeft: '5px' }}>No</label>

                                                        </div>
                                                    </div>
                                                </div>


                                            </div>
                                        </div>
                                        <div className='col-lg-6'>
                                            <div className="">

                                                <div className="input-group">
                                                    <input
                                                        className="input--style-1 js-datepicker"
                                                        type="Email"
                                                        placeholder="Email"

                                                    />
                                                    <i className="zmdi zmdi-calendar-note input-icon js-btn-calendar" />

                                                </div>

                                            </div>
                                        </div>
                                        <div className='col-lg-6'>
                                            <div className="">

                                                <div className="input-group">
                                                    <input
                                                        className="input--style-1 js-datepicker"
                                                        type="Password"
                                                        placeholder="Phone"

                                                    />
                                                    <i className="zmdi zmdi-calendar-note input-icon js-btn-calendar" />

                                                </div>

                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className="">

                                                <div className="input-group">
                                                    <input
                                                        className="input--style-1 js-datepicker"
                                                        type="date"
                                                        placeholder="date"

                                                    />
                                                    <i className="zmdi zmdi-calendar-note input-icon js-btn-calendar" />

                                                </div>

                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className="">
                                                <select name="gender" tabindex="-1" class="select2-hidden-accessible" aria-hidden="true"
                                                 style={{
                                                    marginTop:'16px',
                                                    borderTop: 'none',
                                                    borderRight: '17px',
                                                    width: '100%',
                                                    height: '35px',
                                                    borderBottom: 'solid #cccccc 2px',
                                                    borderLeft: 'none',
                                                

                                                 }}
                                                
                                                
                                                >
                                                    <option  selected="selected">Height (feet)</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                    <option>6</option>
                                                    <option>7</option>
                                                </select>



                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className="">
                                                <select name="gender" tabindex="-1" class="select2-hidden-accessible" aria-hidden="true"
                                                 style={{
                                                    marginTop:'16px',
                                                    borderTop: 'none',
                                                    borderRight: '17px',
                                                    width: '100%',
                                                    height: '35px',
                                                    borderBottom: 'solid #cccccc 2px',
                                                    borderLeft: 'none',
                                                

                                                 }}
                                                
                                                
                                                >
                                                    <option  selected="selected">Height (inches)</option>
                                                    <option>0</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                    <option>6</option>
                                                    <option>7</option>
                                                    <option>8</option>
                                                    <option>9</option>
                                                    <option>10</option>
                                                    <option>11</option>
                                                </select>



                                            </div>
                                        </div>
                                        <div className='col-lg-6'>
                                            <div className="">

                                                <div className="input-group">
                                                    <input
                                                        className="input--style-1 js-datepicker"
                                                        type="number"
                                                        placeholder="Weight (pounds) *"

                                                    />
                                                    <i className="zmdi zmdi-calendar-note input-icon js-btn-calendar" />

                                                </div>

                                            </div>
                                        </div>
                                        <div className='col-lg-6'>
                                            <div className="">
                                                <select name="gender" tabindex="-1" class="select2-hidden-accessible" aria-hidden="true"
                                                 style={{
                                                    marginTop:'5px',
                                                    borderTop: 'none',
                                                    borderRight: '17px',
                                                    width: '100%',
                                                    height: '35px',
                                                    borderBottom: 'solid #cccccc 2px',
                                                    borderLeft: 'none',
                                                

                                                 }}
                                                
                                                
                                                >
                                                    <option  selected="selected">Number of deliveries </option>
                                                    <option>0</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                    <option>6</option>
                                                    <option>7+</option>
                                                    
                                                </select>



                                            </div>
                                        </div>
                                        <div className='col-lg-12'>
                                            <div className="">
                                                <select name="gender" tabindex="-1" class="select2-hidden-accessible" aria-hidden="true"
                                                 style={{
                                                    marginTop:'5px',
                                                    borderTop: 'none',
                                                    borderRight: '17px',
                                                    width: '100%',
                                                    height: '35px',
                                                    borderBottom: 'solid #cccccc 2px',
                                                    borderLeft: 'none',
                                                

                                                 }}
                                                
                                                
                                                >
                                                    <option  selected="selected">Number of c-sections *</option>
                                                    <option>0</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4+</option>
                                                    
                                                    
                                                </select>



                                            </div>
                                        </div>
                                        <div className='col-lg-12' style={{marginTop:'20px'}}>
                                            <div className="">
                                                <p >Have you or your partner ever been convicted of a felony? *</p>

                                                <div className='col-lg-6'>
                                                    <div className='row'>

                                                        <div className='col-lg-3 col-sm-2 col-xs-2 d-flex justify-content-start'>


                                                            <input type="radio" className='form-control' value="HTML" />
                                                            <label for="html" style={{ fontSize: '15px', marginLeft: '5px' }}>Yes</label>

                                                        </div>
                                                        <div className='col-lg-3 col-sm-2 col-xs-2 d-flex justify-content-start'>


                                                            <input type="radio" className='form-control' value="HTML" />
                                                            <label for="html" style={{ fontSize: '15px', marginLeft: '5px' }}>No</label>

                                                        </div>
                                                    </div>
                                                </div>


                                            </div>
                                        </div>
                                        <div className='col-lg-12' style={{marginTop:'20px'}}>
                                            <div className="">
                                                <p >Have you ever been diagnosed with endometriosis, bicornuate uterus, 
                                                    or any other uterine malformation? *</p>

                                                <div className='col-lg-6'>
                                                    <div className='row'>

                                                        <div className='col-lg-3 col-sm-2 col-xs-2 d-flex justify-content-start'>


                                                            <input type="radio" className='form-control' value="HTML" />
                                                            <label for="html" style={{ fontSize: '15px', marginLeft: '5px' }}>Yes</label>

                                                        </div>
                                                        <div className='col-lg-3 col-sm-2 col-xs-2 d-flex justify-content-start'>


                                                            <input type="radio" className='form-control' value="HTML" />
                                                            <label for="html" style={{ fontSize: '15px', marginLeft: '5px' }}>No</label>

                                                        </div>
                                                    </div>
                                                </div>


                                            </div>
                                        </div>
                                        <div className='col-lg-12' style={{marginTop:'20px'}}>
                                            <div className="">
                                                <p >Have you been a surrogate before? *</p>

                                                <div className='col-lg-6'>
                                                    <div className='row'>

                                                        <div className='col-lg-3 col-sm-2 col-xs-2 d-flex justify-content-start'>


                                                            <input type="radio" className='form-control' value="HTML" />
                                                            <label for="html" style={{ fontSize: '15px', marginLeft: '5px' }}>Yes</label>

                                                        </div>
                                                        <div className='col-lg-3 col-sm-2 col-xs-2 d-flex justify-content-start'>


                                                            <input type="radio" className='form-control' value="HTML" />
                                                            <label for="html" style={{ fontSize: '15px', marginLeft: '5px' }}>No</label>

                                                        </div>
                                                    </div>
                                                </div>


                                            </div>
                                        </div>
                                        <div className='col-lg-12'>
                                            <div className="">
                                                <select name="gender" tabindex="-1" class="select2-hidden-accessible" aria-hidden="true"
                                                 style={{
                                                    marginTop:'5px',
                                                    borderTop: 'none',
                                                    borderRight: '17px',
                                                    width: '100%',
                                                    height: '35px',
                                                    borderBottom: 'solid #cccccc 2px',
                                                    borderLeft: 'none',
                                                

                                                 }}
                                                
                                                
                                                >
                                                    <option  selected="selected">How did you hear about us? *</option>
                                                    <option>google</option>
                                                    <option>ISC surrogate</option>
                                                    <option>facebook</option>
                                                    <option>instagram</option>
                                                    <option>tikTok</option>
                                                    <option>Special event</option>
                                                    <option>other</option>
                                                   
                                                    
                                                </select>



                                            </div>
                                        </div>
                                        <div className='col-lg-12 d-flex justify-content-center' style={{marginTop:'10px'}}>
                                          <button type="button" className="btn btn-primary btn-lg"
                                            style={{
                                              border: 'none',
                                              width: '100px',
                                              height: '44px',
                                              boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
                                            }}



                                          >Submit</button>
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


        </>
    )
}

export default SurrogateRegister
