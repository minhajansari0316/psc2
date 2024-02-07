import React from 'react'
import BaseUrl from '../baseurl/BaseUrl';
import { PostApiWithOutToken } from "../Helper/helper";
import { useState, } from "react";
import '../Surrogate Application/register.css'
import Spinner from 'react-bootstrap/Spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const SurrogateRegister = () => {

    const [first_name, setfirst_name] = useState();
    const [last_name, setlast_name] = useState();
    const [phone_number, setphone_number] = useState();
    const [email, setemail] = useState();
    const [password, setpassword] = useState();
    const [us_citizen, setus_citizen] = useState();
    const [state, setstate] = useState();
    const [date_of_birth, setdate_of_birth] = useState();
    const [height_feet, setheight_feet] = useState();
    const [height_inches, setheight_inches] = useState();
    const [weight, setweight] = useState();
    const [number_deliveries, setnumber_deliveries] = useState();
     const [number_of_csection, setnumber_of_csection] = useState();
    const [convicted_of_a_felony, setconvicted_of_a_felony] = useState();
    const [uterine_malformation, setuterine_malformation] = useState();
    const [surrogate, setsurrogate] = useState();
    const [about_us, setabout_us] = useState();
    // const navigate = new useNavigate()
    const [loder, setloder]= useState(false);
    // const [showA, setShowA] = useState(false);
    // const toggleShowA = () => setShowA(!showA);
    const [, setShowToast] = useState(false);
    
   
  
    const onSubmit = () => {
       
      setloder(true);
      const formData = new FormData();
      formData.append("first_name", first_name);
      formData.append("last_name", last_name);
      formData.append("phone_number", phone_number);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("us_citizen", us_citizen);

      formData.append("state", state);
      formData.append("date_of_birth", date_of_birth);
      formData.append("height_feet", height_feet);
      formData.append("height_inches", height_inches);
      formData.append("weight", weight);
      formData.append("number_deliveries", number_deliveries);

      formData.append("number_of_csection", number_of_csection);
      formData.append("convicted_of_a_felony", convicted_of_a_felony);
      formData.append("uterine_malformation", uterine_malformation);
      formData.append("surrogate", surrogate);
      formData.append("about_us", about_us);
     
    //   formData.append("fname", fname);
    //   formData.append("lname", lname);
    //   formData.append("address", address);
    //   formData.append("contact", contact);
  
       PostApiWithOutToken (`${BaseUrl.baseUrl}surrogate/register`, formData)
        .then((data) => {
       console.log(data.data.message,'minhaj')
          
  
          if (data.data.message === "Surrogate Register Successfully") {
  
            setShowToast(true);
            toast(data.data.message);
            // Swal.fire({
            //   title: "success",
            //   text: data.message,
            //   icon: "success",
            //   confirmButtonColor: "#29BF12",
            //   timer: 1500,
            // });
            setloder(false);
            // navigate("/login" )
            
           
  
          
  
            
           
          } else {
            // console.log("else========", data.message);
            // // alert(data.data);
            // localStorage.setItem("tokenen", data.data);
            // console.log("not login");
            
            // Swal.fire({
            //   title: "Oops",
            //   text: "Error",
            //   icon: "error",
            //   confirmButtonColor: "#29BF12",
            // });
            setShowToast(true);
            // toast('Error');
           
  
          
          }
        })
        .catch((error) => {
          setloder(false);
          setShowToast(true);
          toast(error.message);
        //     toast('Error');
        //   // Swal.fire({
          //   title: "error",
          //   text: error,
          //   icon: "error",
          //   confirmButtonColor: "#29BF12",
          //   timer: 1500,
          // });
        });
    };

    return (
       
            <>
            <ToastContainer 
                position="top-right"
                autoClose={50}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
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
                                                        onChange={(e) => {
                                                            setfirst_name(e.target.value);
                                                        }}

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
                                                        onChange={(e) => {
                                                            setlast_name(e.target.value);
                                                        }}

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
                                                        onChange={(e) => {
                                                            setphone_number(e.target.value);
                                                        }}

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
                                                        onChange={(e) => {
                                                            setstate(e.target.value);
                                                        }}

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


                                                            <input type="radio" className='form-control' value="yes" 
                                                            onChange={(e) => {
                                                            setus_citizen(e.target.value);
                                                        }}
                                                        />
                                                            <label for="html" style={{ fontSize: '15px', marginLeft: '5px' }}>Yes</label>

                                                        </div>
                                                        <div className='col-lg-3 col-sm-2 col-xs-2 d-flex justify-content-start'>


                                                            <input type="radio" className='form-control' value="No"
                                                             onChange={(e) => {
                                                                setus_citizen(e.target.value);
                                                            }}
                                                            
                                                            />
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
                                                        onChange={(e) => {
                                                            setemail(e.target.value);
                                                        }}

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
                                                        placeholder="Password"
                                                        onChange={(e) => {
                                                            setpassword(e.target.value);
                                                        }}

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
                                                        onChange={(e) => {
                                                            setdate_of_birth(e.target.value);
                                                        }}

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
                                                 onChange={(e) => {
                                                    setheight_feet(e.target.value);
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
                                                 onChange={(e) => {
                                                    setheight_inches(e.target.value);
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
                                                        onChange={(e) => {
                                                            setweight(e.target.value);
                                                        }}

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
                                                 onChange={(e) => {
                                                    setnumber_deliveries(e.target.value);
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
                                                 onChange={(e) => {
                                                    setnumber_of_csection(e.target.value);
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


                                                            <input type="radio" className='form-control' value="yes"
                                                            onChange={(e) => {
                                                                setconvicted_of_a_felony(e.target.value);
                                                            }}
                                                            />
                                                            <label for="html" style={{ fontSize: '15px', marginLeft: '5px' }}>Yes</label>

                                                        </div>
                                                        <div className='col-lg-3 col-sm-2 col-xs-2 d-flex justify-content-start'>


                                                            <input type="radio" className='form-control' value="No" 
                                                            onChange={(e) => {
                                                                setconvicted_of_a_felony(e.target.value);
                                                            }}
                                                            
                                                            />
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


                                                            <input type="radio" className='form-control' value="yes"
                                                            
                                                            onChange={(e) => {
                                                            setuterine_malformation(e.target.value);
                                                            }}
                                                            />
                                                            <label for="html" style={{ fontSize: '15px', marginLeft: '5px' }}>Yes</label>

                                                        </div>
                                                        <div className='col-lg-3 col-sm-2 col-xs-2 d-flex justify-content-start'>


                                                            <input type="radio" className='form-control' value="No" 
                                                            
                                                            onChange={(e) => {
                                                                setuterine_malformation(e.target.value);
                                                                }}
                                                            />
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


                                                            <input type="radio" className='form-control' value="Yes"
                                                            onChange={(e) => {
                                                                setsurrogate(e.target.value);
                                                                }}
                                                            
                                                            />
                                                            <label for="html" style={{ fontSize: '15px', marginLeft: '5px' }}>Yes</label>

                                                        </div>
                                                        <div className='col-lg-3 col-sm-2 col-xs-2 d-flex justify-content-start'>


                                                            <input type="radio" className='form-control' value="No"
                                                            
                                                            onChange={(e) => {
                                                                setsurrogate(e.target.value);
                                                                }}
                                                            />
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
                                                 onChange={(e) => {
                                                    setabout_us(e.target.value);
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
                                            onClick={onSubmit}



                                          >
                                             {loder !== false? 
                      <Spinner animation="border"  />:'Submit'  
                      
                     }
                                            
                                            
                                            </button>
                                        </div>
                                        <div className='col-lg-12 d-flex justify-content-center' style={{marginTop:'10px'}}>
                                        <p>Already Register <Link to="/Login">Sign in</Link></p>
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

export default SurrogateRegister
