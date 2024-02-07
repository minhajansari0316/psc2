import React from 'react'
import BaseUrl from '../baseurl/BaseUrl';
import { PostApiWithOutToken } from "../Helper/helper";
import { useState, } from "react";
import '../Surrogate Application/register.css'
import Spinner from 'react-bootstrap/Spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom'

const Surrogatelogin = () => {
    const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loder, setloader] = useState(false);
  // const [showA, setShowA] = useState(false);
  // const toggleShowA = () => setShowA(!showA);
  const [, setShowToast] = useState(false);
 
  // console.log('email==============>',email)
  const navigate = new useNavigate();
  const onSubmit = () => {
    setloader(true)
    // console.log('rewre============w')
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    PostApiWithOutToken(`${BaseUrl.baseUrl}surrogate/login`, formData)
      .then((data) => {
        console.log(data.data.user.email, "minhaj");
        setShowToast(true);
        toast(data.data.message);
        
       
        
          
          //  Swal.fire({
          //   title: "success",
          //   text: data.data.message,
          //   icon: "success",
          //   confirmButtonColor: "#29BF12",
          //   timer: 1500,
          // });

          localStorage.setItem("token", data.data.token);
          localStorage.setItem("email", data.data.user.email);
          localStorage.setItem("fname", data.data.user.first_name);
          localStorage.setItem("lname", data.data.user.last_name);
          // localStorage.setItem("lname", data.data.user.last_name);
          localStorage.setItem("heightfeet", data.data.user.personal_detail.height_feet);
          localStorage.setItem("heightinches", data.data.user.personal_detail.height_inches);
        //   localStorage.setItem("lname", data.data.data.lname);
        //   localStorage.setItem("id", data.data.data.id);
        //   localStorage.setItem("img", data.data.data.profile);

         

          setloader(false)
        
          // console.log("name", localStorage.getItem("name"));
          navigate("/surrogate-application");
      
          
          
          // alert(data.data);
          
    
         
        
      })
      .catch((error) => {
        console.log("mmm", error);
        setloader(false)
        setShowToast(true);
        toast(error.message);
      });

    // setShow(!show)
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
                                            onChange={(e)=>{setemail(e.target.value)}}

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
                                            onChange={(e)=>{setpassword(e.target.value)}}

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

                                         onClick={onSubmit}

                                          >
                                             {loder !== false? 
                      <Spinner animation="border"  />:'Login'  
                      
                     }
                                          </button>
                                          
                                        </div>
                                        <div className='col-lg-12 d-flex justify-content-center' style={{marginTop:'10px'}}>
                                        <p>Don’t have an account? <Link to="/sign-up">Sign up here</Link></p>
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
