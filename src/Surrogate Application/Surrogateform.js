import { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import BaseUrl from '../baseurl/BaseUrl';
import { PostApi } from "../Helper/helper";
import Spinner from 'react-bootstrap/Spinner';
import { useNavigate } from "react-router-dom";





const Surrogateform = () => {
  const navigate = new useNavigate();



  // console.log(localStorage.getItem("token"), "haha");
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/Login");
      
    } else {
      //   setShow2(true);

    }
    window.scrollTo(0, 0);

    // getData();
    // getDatas();
    // statusll("pending")
    
  });

  const logout = () => {
    navigate("/login");
    localStorage.clear();
  };
  const [loder, setloder]= useState(false);
    // const [showA, setShowA] = useState(false);
    // const toggleShowA = () => setShowA(!showA);
    const [, setShowToast] = useState(false);

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const back1 = () => {
    setShow2(false);
  };
  const g1 = () => {
    setShow2(true);
    // setShow1(false);
  };
  const [show3, setShow3] = useState(false);
  const handleClose3 = () => setShow3(false);
  const back2 = () => {
    setShow3(false);
    setShow2(true);
  };
  const g2 = () => {
    setShow3(true);
    setShow2(false);
  };
  const [show4, setShow4] = useState(false);
  const handleClose4 = () => setShow4(false);
  const back3 = () => {
    setShow4(false);
    setShow3(true);
  };
  const g3 = () => {
    setShow4(true);
    setShow3(false);
  };
  const [show5, setShow5] = useState(false);
  const handleClose5 = () => setShow5(false);
  const back4 = () => {
    setShow5(false);
    setShow4(true);
  };
  const g4 = () => {
    setShow5(true);
    setShow4(false);
  };
  const [show6, setShow6] = useState(false);
  const handleClose6 = () => setShow6(false);
  const back5 = () => {
    setShow6(false);
    setShow5(true);
  };
  const g5 = () => {
    setShow6(true);
    setShow5(false);
  };
  const [show7, setShow7] = useState(false);
  const handleClose7 = () => setShow7(false);
  const back6 = () => {
    setShow7(false);
    setShow6(true);
  };
  const births = () => {
    setShow7(true);
    setShow6(false);
  };
  const [show8, setShow8] = useState(false);
  const handleClose8 = () => setShow8(false);
  const back7 = () => {
    setShow8(false);
    setShow7(true);
  };
  const height = () => {
    setShow8(true);
    setShow7(false);
  };
  const [show9, setShow9] = useState(false);
  const handleClose9 = () => setShow9(false);
  const back9 = () => {
    setShow9(false);
    setShow8(true);
  };
  const born = () => {
    setShow9(true);
    setShow8(false);
  };
  const [show10, setShow10] = useState(false);
  const handleClose10 = () => setShow10(false);
  const back10 = () => {
    setShow10(false);
    setShow9(true);
  };
  const statuss = () => {
    setShow10(true);
    setShow9(false);
  };

  const [show11, setShow11] = useState(false);
  const handleClose11 = () => setShow11(false);
  const back11 = () => {
    setShow11(false);
    setShow10(true);
  };
  const financiallystable = () => {
    setShow11(true);
    setShow10(false);
  };

  const [show12, setShow12] = useState(false);
  const handleClose12 = () => setShow12(false);
  const back12 = () => {
    setShow12(false);
    setShow11(true);
  };
  const transportations = () => {
    setShow12(true);
    setShow11(false);
  };

  const [show13, setShow13] = useState(false);
  const handleClose13 = () => setShow13(false);
  const back13 = () => {
    setShow13(false);
    setShow12(true);
  };
  const driverslicenses = () => {
    setShow13(true);
    setShow12(false);
  };

  const [show14, setShow14] = useState(false);
  const handleClose14 = () => setShow14(false);
  const back14 = () => {
    setShow14(false);
    setShow13(true);
  };
  const Securitynumber = () => {
    setShow14(true);
    setShow13(false);
  };
  const [show15, setShow15] = useState(false);
  const handleClose15 = () => setShow15(false);
  const back15 = () => {
    setShow15(false);
    setShow14(true);
  };
  const  Traveledoutside = () => {
    setShow15(true);
    setShow14(false);
  };

  const [show16, setShow16] = useState(false);
  const handleClose16 = () => setShow16(false);
  const back16 = () => {
    setShow16(false);
    setShow15(true);
  };
  const   Traveltoanother  = () => {
    setShow16(true);
    setShow15(false);
  };
  const [show17, setShow17] = useState(false);
  const handleClose17 = () => setShow17(false);
  const back17 = () => {
    setShow17(false);
    setShow16(true);
  };
  const   Emergencycontact  = () => {
    setShow17(true);
    setShow16(false);
  };

  const [show18, setShow18] = useState(false);
  const handleClose18 = () => setShow18(false);
  const back18 = () => {
    setShow18(false);
    setShow17(true);
  };
  const Relationshipstatus  = () => {
    setShow18(true);
    setShow17(false);
  };
  const [show19, setShow19] = useState(false);
  const handleClose19 = () => setShow19(false);
  const back19 = () => {
    setShow19(false);
    setShow18(true);
  };
  const Sexualorientation  = () => {
    setShow19(true);
    setShow18(false);
  };
  const [show20, setShow20] = useState(false);
  const handleClose20 = () => setShow20(false);
  const back20 = () => {
    setShow20(false);
    setShow19(true);
  };
  const Sexuallyactive  = () => {
    setShow20(true);
    setShow19(false);
  };

  const [show21, setShow21] = useState(false);
  const handleClose21 = () => setShow21(false);
  const back21 = () => {
    setShow21(false);
    setShow20(true);
  };
  const partner  = () => {
    setShow21(true);
    setShow20(false);
  };


  // Personal History
  const [pshow1, setpShow1] = useState(false);
  const handleClosep1 = () => setpShow1(false);
  const pback1 = () => {
    setpShow1(false);
  };
  const littlefurther = () => {
    setpShow1(true);
    // setShow1(false);
  };
  const [pshow2, setpShow2] = useState(false);
  const handleClosep2 = () => setpShow2(false);
  const backp2 = () => {
    setpShow2(false);
    setpShow1(true);
  };
  const schooldiploma  = () => {
    setpShow2(true);
    setpShow1(false);
  };

  const [pshow3, setpShow3] = useState(false);
  const handleClosep3 = () => setpShow3(false);
  const backp3 = () => {
    setpShow3(false);
    setpShow2(true);
  };
  const applicable  = () => {
    setpShow3(true);
    setpShow2(false);
  };




  const [token] = useState(localStorage.getItem("token"));
  // const [name] = useState(localStorage.getItem("name"));
  // const [fname] = useState(localStorage.getItem("fname"));
    // const [heightfeet] = useState(localStorage.getItem("heightfeet"));
     // const [heightinches] = useState(localStorage.getItem("heightinches "));

    const [date_of_birth, setdate_of_birth] = useState(null)
    const [height_feet, setheight_feet] = useState(null)
    const [height_inches, setheight_inches] = useState(null)
    const [weight, setweight] = useState(null)

    const [age, setage] = useState(null)
    // const [number_of_deliveries, setnumber_of_deliveries] = useState(null)
    const [phone_number, setphone_number] = useState(null)
    const [state, setstate] = useState(null)

    const [contact_email_address, setcontact_email_address] = useState(null)
    // const [number_of_csection, setnumber_of_csection] = useState()
    // const [convicted_of_a_felony, setconvicted_of_a_felony] = useState()
    // const [uterine_malformation, setuterine_malformation] = useState()

    // const [surrogate, setsurrogate] = useState()
    // const [about_us, setabout_us] = useState()
    const [street_address, setstreet_address] = useState(null)
    const [city, setcity] = useState(null)

    const [zipcode, setzipcode] = useState(null)
    const [county, setcounty] = useState(null)
    const [bmi, setbmi] = useState(null)
    const [country_born_in, setcountry_born_in] = useState(null)

    const [ethnic_background, setethnic_background] = useState(null)
    const [legal_citizanship_status, setlegal_citizanship_status] = useState(null)
    const [financially_stable, setfinancially_stable] = useState(null)
    const [reliable_transportation, setreliable_transportation] = useState(null)

    const [driver_license_or_id_card, setdriver_license_or_id_card] = useState(null)
    const [social_security_number, setsocial_security_number] = useState(null)
    const [last_six_month_traveled, setlast_six_month_traveled] = useState(null)
    const [travell_next_18_months, settravell_next_18_months] = useState(null)

    const [relationship_status, setrelationship_status] = useState(null)
    const [emergency_first_name, setemergency_first_name] = useState(null)
    const [emergency_last_name, setemergency_last_name] = useState()
    const [emergency_phone_number, setemergency_phone_number] = useState(null)

    const [sexual_orientation, setsexual_orientation] = useState(null)
    const [sexually_activity, setsexually_activity] = useState(null)
    const [over_the_age_of_18_live, setover_the_age_of_18_live] = useState(null)
    

    




     const onSubmit = () => {
      setloder(true);
      // setShow2(false);
      // console.log("packageId,", packageId, token1.id);
      const formData = new FormData();
      formData.append("date_of_birth", date_of_birth);
      formData.append("height_feet", height_feet);
      formData.append("height_inches", height_inches);
      formData.append("weight", weight);
      formData.append("age", age);
      // formData.append("number_of_deliveries", number_of_deliveries);
      formData.append("phone_number", phone_number);
      formData.append("state", state);

      formData.append("contact_email_address", contact_email_address);
      // formData.append("number_of_csection", number_of_csection);
      // formData.append("convicted_of_a_felony", convicted_of_a_felony);
      // formData.append("uterine_malformation", uterine_malformation);
      // formData.append("surrogate", surrogate);
      // formData.append("about_us", about_us);
      formData.append("street_address", street_address);
      formData.append("city", city);

      formData.append("zipcode", zipcode);
      formData.append("county", county);
      formData.append("bmi", bmi);
      formData.append("country_born_in", country_born_in);
      formData.append("ethnic_background", ethnic_background);
      formData.append("legal_citizanship_status", legal_citizanship_status);
      formData.append("financially_stable", financially_stable);
      formData.append("reliable_transportation", reliable_transportation);

      formData.append("driver_license_or_id_card", driver_license_or_id_card);
      formData.append("social_security_number", social_security_number);
      formData.append("last_six_month_traveled", last_six_month_traveled);
      formData.append("travell_next_18_months", travell_next_18_months);
      formData.append("relationship_status", relationship_status);
      formData.append("emergency_first_name", emergency_first_name);
      formData.append("emergency_last_name", emergency_last_name);
      formData.append("emergency_phone_number", emergency_phone_number);

      formData.append("sexual_orientation", sexual_orientation);
      formData.append("sexually_activity", sexually_activity);
      formData.append("over_the_age_of_18_live", over_the_age_of_18_live);
      


      PostApi(`${BaseUrl.baseUrl}surrogate/personal/detail`, formData, token)
        .then((data) => {
          console.log("data=====", data.data.message);
          setloder(false);
         
          setShowToast(true);
          toast(data.data.message);
          setShow21(false)
          
          
          // statusll("approved")
        })
  
        .catch((err) => {
          console.log("errr", err);
          setloder(false);
          toast(err);
        });



        
  
      // fetch(`${BaseUrl.baseUrl}user/subscriptions`, {
      //   method: 'POST',
      //   body: JSON.stringify(token),
      // }).then(response => {
      //   response.json().then(data => {
      //     alert(`We are in business, ${data.email}`);
      //   });
      // });
    };


    //  personal history


    const [high_school_diploma_or_ged, sethigh_school_diploma_or_ged] = useState(null)
    const [bankruptcy, setbankruptcy] = useState(null)
    const [divorce_or_legal_separation, setdivorce_or_legal_separation] = useState(null)
    const [been_arrested, setbeen_arrested] = useState(null)

    const [been_charged_with_a_dui, setbeen_charged_with_a_dui] = useState(null)
    const [government_child_protective_agency, setgovernment_child_protective_agency] = useState(null)
    const [adoption, setadoption] = useState(null)
    const [substance_abuse_program, setsubstance_abuse_program] = useState(null)

    const [domestic_violence, setdomestic_violence] = useState(null)
    const [involved_with_a_lawsuit, setinvolved_with_a_lawsuit] = useState()
    const [past_due_on_child_support, setpast_due_on_child_support] = useState()
    const [lost_custody_of_any_of_your_children, setlost_custody_of_any_of_your_children] = useState()

   
    

    




     const onSubmitph = () => {
      setloder(true);
      // setShow2(false);
      // console.log("packageId,", packageId, token1.id);
      const formData = new FormData();
      formData.append("high_school_diploma_or_ged", high_school_diploma_or_ged);
      formData.append("bankruptcy", bankruptcy);
      formData.append("divorce_or_legal_separation", divorce_or_legal_separation);
      formData.append("been_arrested", been_arrested);
      formData.append("been_charged_with_a_dui", been_charged_with_a_dui);
      formData.append("government_child_protective_agency", government_child_protective_agency);
      formData.append("adoption", adoption);
      formData.append("substance_abuse_program", substance_abuse_program);

      formData.append("domestic_violence", domestic_violence);
      formData.append("involved_with_a_lawsuit", involved_with_a_lawsuit);
      formData.append("past_due_on_child_support", past_due_on_child_support);
      formData.append("lost_custody_of_any_of_your_children", lost_custody_of_any_of_your_children);
     
      


      PostApi(`${BaseUrl.baseUrl}surrogate/personal/history`, formData, token)
        .then((data) => {
          console.log("data=====", data.data.message);
          setloder(false);
         
          setShowToast(true);
          toast(data.data.message);
          setpShow3(false)
         
          
          
          // statusll("approved")
        })
  
        .catch((err) => {
          console.log("errr", err);
          setloder(false);
          toast(err);
        });



        
  
      // fetch(`${BaseUrl.baseUrl}user/subscriptions`, {
      //   method: 'POST',
      //   body: JSON.stringify(token),
      // }).then(response => {
      //   response.json().then(data => {
      //     alert(`We are in business, ${data.email}`);
      //   });
      // });
    };

    // localStorage.setItem("token", data.data.token);
    //       localStorage.setItem("name", data.data.user.email);
    //       localStorage.setItem("fname", data.data.user.first_name);
    //       localStorage.setItem("lname", data.data.user.last_name);
    //       localStorage.setItem("lname", data.data.user.last_name);
    //       localStorage.setItem("heightfeet", data.data.user.personal_detail.height_feet);
    //       localStorage.setItem("heightinches", data.data.user.personal_detail.height_inches);

          const [fname] = useState(localStorage.getItem("fname"));
          const [lname] = useState(localStorage.getItem("lname"));
         

  // const [name, setName]= useState(null)

  // const [Mname, setMName]= useState(null)



  

  

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
      {/* General Information */}
      <Modal
        show={show2}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handleClose2}
        style={{
          backgroundColor: '#ffffff87',
          borderRadius: '20px 20px 10px 10px',


        }}

      >
        {/* <Modal.Header closeButton> */}
        <Modal.Header style={{
          backgroundImage: 'url(/mt-demo/109600/109604/mt-content/uploads/2020/07/8.jpeg)',
          height: '150px',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',



        }}>
          {/* <i className='fa fa-close'>baloch</i>
                    <AiFillCloseCircle fontSize={20} /> */}
          <Modal.Title style={{ fontSize: '20px' }}></Modal.Title>
          {/* <AiFillCloseCircle onClick={handleClose} style={{ marginLeft: "190", cursor: "pointer" }} fontSize={40} /> */}
        </Modal.Header>
        <Modal.Body style={{
          marginTop: '-27px',
          backgroundColor: '#fffbfb',
          borderRadius: '30px 30px 0px 0px',
          marginBottom: '20px',



        }}>
          <div className='col-lg-12'>
            <div className="container">
              <div className='row'>

                <h3 style={{ marginTop: '20px', marginBottom: '20px', }}>Nice to meet you Malove!</h3>
                <p style={{
                  MARGINTOP: '10PX',
                  fontWeight: '100',
                  color: '#333352',
                }}>
                  Most of us have been surrogates ourselves and are so excited to get you started <br />on your surrogacy journey!

                  <p style={{ padding: '5px', marginTop: '10px' }}>  ✔️ This section will ask about your
                    contact information, personal data, living situation and travel plans</p>
                  <p style={{ padding: '5px' }}>  ✔️ Please try to be as detailed and accurate as possible</p>
                  <p style={{ padding: '5px' }}>  ✔️ It should take you about 5-10 minutes to complete this section</p>




                </p>
              </div>
            </div>
          </div>

          {/* ------- */}
        </Modal.Body>

        <Modal.Footer style={{}}>
          <Button
            className="btn btn-primary"
            onClick={g2}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Let’s go!
          </Button>
          <Button
            className="btn btn-primary"
            onClick={back1}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Close
          </Button>
          {/* <Button variant="primary" onClick={addcustomer}>
                        Add
                    </Button> */}
        </Modal.Footer>
      </Modal>
      {/* General Information 2 */}
      <Modal
        show={show3}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handleClose2}
        style={{
          backgroundColor: '#ffffff87',
          borderRadius: '20px 20px 10px 10px',


        }}

      >
        {/* <Modal.Header closeButton> */}
        <Modal.Header style={{
          backgroundImage: 'url(/mt-demo/109600/109604/mt-content/uploads/2020/07/8.jpeg)',
          height: '150px',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',



        }}>
          {/* <i className='fa fa-close'>baloch</i>
                    <AiFillCloseCircle fontSize={20} /> */}
          <Modal.Title style={{ fontSize: '20px' }}></Modal.Title>
          {/* <AiFillCloseCircle onClick={handleClose} style={{ marginLeft: "190", cursor: "pointer" }} fontSize={40} /> */}
        </Modal.Header>
        <Modal.Body style={{
          marginTop: '-27px',
          backgroundColor: '#fffbfb',
          borderRadius: '30px 30px 0px 0px',
          marginBottom: '20px',



        }}>
          <div className='col-lg-12'>
            <div className="container">
              <div className='row'>
                <div className='col-lg-10'>
                  <h3 style={{ marginTop: '20px', marginBottom: '20px' }}>What is your name?</h3>

                </div>
                <div className='col-lg-2'>
                  <p style={{ marginTop: '20px', fontSize: '15px', color: '#d8352f' }} onClick={g3}>Skip ≫</p>
                </div>
                <div className='col-lg-6'>

                  <label>First name*</label>
                  <input type='text' className='form-control' 
                    // onChange={(e)=>{setfname(e.target.value)}} 
                    value={fname}
                  
                  style={{ height: '40px', fontSize:'13px' }} 
                   
                  
                  />
                </div>
                <div className='col-lg-6'>
                  <label>Last name*</label>
                  <input type='text' className='form-control' style={{ height: '40px',fontSize:'13px' }} 
                  value={lname}
                  // onChange={(e)=>{setlname(e.target.value)}} 
                  
                  />
                </div>
                <div className='col-lg-6' style={{ marginTop: '10px' }}>
                  <label>Middle name*</label>
                  <input type='text' className='form-control' style={{ height: '40px',fontSize:'13px' }}   />
                </div>

              </div>
            </div>
          </div>

          {/* ------- */}
        </Modal.Body>

        <Modal.Footer style={{}}>

         
           <Button
            className="btn btn-primary"
            onClick={back2}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Back
          </Button>

          
          {
            fname !== null && lname !== null ?
          <Button
            className="btn btn-primary"
            onClick={g3}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Next
            
          </Button>:
          
          <Button
          className="btn btn-secondary"
          // onClick={g3}
          style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
        >
          Next
        </Button>
}
          <Button
            className="btn btn-primary"
            onClick={handleClose3}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Close
          </Button>
          {/* <Button variant="primary" onClick={addcustomer}>
                        Add
                    </Button> */}
        </Modal.Footer>
      </Modal>
      {/* General Information 3 */}
      <Modal
        show={show4}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handleClose4}
        style={{
          backgroundColor: '#ffffff87',
          borderRadius: '20px 20px 10px 10px',


        }}

      >
        {/* <Modal.Header closeButton> */}
        <Modal.Header style={{
          backgroundImage: 'url(/mt-demo/109600/109604/mt-content/uploads/2020/07/8.jpeg)',
          height: '150px',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',



        }}>
          {/* <i className='fa fa-close'>baloch</i>
                    <AiFillCloseCircle fontSize={20} /> */}
          <Modal.Title style={{ fontSize: '20px' }}></Modal.Title>
          {/* <AiFillCloseCircle onClick={handleClose} style={{ marginLeft: "190", cursor: "pointer" }} fontSize={40} /> */}
        </Modal.Header>
        <Modal.Body style={{
          marginTop: '-27px',
          backgroundColor: '#fffbfb',
          borderRadius: '30px 30px 0px 0px',
          marginBottom: '20px',



        }}>
          <div className='col-lg-12'>
            <div className="container">
              <div className='row'>
                <div className='col-lg-10'>
                  <h3 style={{ marginTop: '20px', marginBottom: '20px' }}>What is your address?</h3>

                </div>
                <div className='col-lg-2'>
                  <p style={{ marginTop: '20px', fontSize: '15px', color: '#d8352f' }} onClick={g4}>Skip ≫</p>
                </div>
                <div className='col-lg-6'>

                  <label>Street address </label>
                  <input type='text' className='form-control' style={{ height: '40px', fontSize:'13px' }}
                    onChange={(e)=>{setstreet_address(e.target.value)}} 
                    value={street_address}
                  />
                </div>
                <div className='col-lg-6'>
                  <label>City</label>
                  <input type='text' className='form-control' style={{ height: '40px',fontSize:'13px' }} 
                  onChange={(e)=>{setcity(e.target.value)}} 
                  value={city}
                  
                  
                  />
                </div>
                <div className='col-lg-6' style={{ marginTop: '10px' }}>
                  <label>State</label>
                  <input type='text' className='form-control' style={{ height: '40px',fontSize:'13px' }} 
                   onChange={(e)=>{setstate(e.target.value)}} 
                   value={state}
                  
                  />
                </div>
                <div className='col-lg-6' style={{ marginTop: '10px' }}>
                  <label>Zip code</label>
                  <input type='number' className='form-control' style={{ height: '40px',fontSize:'13px' }} 
                   onChange={(e)=>{setzipcode(e.target.value)}} 
                   value={zipcode}
                  
                  />
                </div>
                <div className='col-lg-6' style={{ marginTop: '10px' }}>
                  <label>County</label>
                  <input type='text' className='form-control' style={{ height: '40px',fontSize:'13px' }} 
                   onChange={(e)=>{setcounty(e.target.value)}} 
                   value={county}
                  
                  />
                </div>

              </div>
            </div>
          </div>

          {/* ------- */}
        </Modal.Body>

        <Modal.Footer style={{}}>
          <Button
            className="btn btn-primary"
            onClick={back3}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Back
          </Button>

          {
            street_address !== null && city !== null && state !== null && zipcode !== null?
            <Button
            className="btn btn-primary"
            onClick={g4}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Next
          </Button>:
          <Button
          className="btn btn-secondary"
          // onClick={g4}
          style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
        >
          Next
        </Button>
            
          }
          

        

          <Button
            className="btn btn-primary"
            onClick={handleClose5}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Close
          </Button>
          {/* <Button variant="primary" onClick={addcustomer}>
                        Add
                    </Button> */}
        </Modal.Footer>
      </Modal>
      {/* General Information 4 */}
      <Modal
        show={show5}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handleClose4}
        style={{
          backgroundColor: '#ffffff87',
          borderRadius: '20px 20px 10px 10px',


        }}

      >
        {/* <Modal.Header closeButton> */}
        <Modal.Header style={{
          backgroundImage: 'url(/mt-demo/109600/109604/mt-content/uploads/2020/07/8.jpeg)',
          height: '150px',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',



        }}>
          {/* <i className='fa fa-close'>baloch</i>
                    <AiFillCloseCircle fontSize={20} /> */}
          <Modal.Title style={{ fontSize: '20px' }}></Modal.Title>
          {/* <AiFillCloseCircle onClick={handleClose} style={{ marginLeft: "190", cursor: "pointer" }} fontSize={40} /> */}
        </Modal.Header>
        <Modal.Body style={{
          marginTop: '-27px',
          backgroundColor: '#fffbfb',
          borderRadius: '30px 30px 0px 0px',
          marginBottom: '20px',



        }}>
          <div className='col-lg-12'>
            <div className="container">
              <div className='row'>
                <div className='col-lg-10'>
                  <h3 style={{ marginTop: '20px', marginBottom: '20px' }}>What is your phone number?</h3>

                </div>
                <div className='col-lg-2'>
                  <p style={{ marginTop: '20px', fontSize: '15px', color: '#d8352f' }} onClick={g5}>Skip ≫</p>
                </div>
                <div className='col-lg-8'>

                  <label>Phone number * </label>
                  <input type='number' className='form-control' style={{ height: '40px', fontSize:'13px'}} 
                   onChange={(e)=>{setphone_number(e.target.value)}} 
                   value={phone_number}
                  />
                </div>


              </div>
            </div>
          </div>

          {/* ------- */}
        </Modal.Body>

        <Modal.Footer style={{}}>
          <Button
            className="btn btn-primary"
            onClick={back4}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Back
          </Button>

          {
            phone_number !== null?
            <Button
            className="btn btn-primary"
            onClick={g5}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Next
          </Button>:
          <Button
          className="btn btn-secondary"
          // onClick={g5}
          style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
        >
          Next
        </Button>

           

          }
         
          <Button
            className="btn btn-primary"
            onClick={handleClose5}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Close
          </Button>
          {/* <Button variant="primary" onClick={addcustomer}>
                        Add
                    </Button> */}
        </Modal.Footer>
      </Modal>
      {/* General Information 5 */}
      <Modal
        show={show6}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handleClose4}
        style={{
          backgroundColor: '#ffffff87',
          borderRadius: '20px 20px 10px 10px',


        }}

      >
        {/* <Modal.Header closeButton> */}
        <Modal.Header style={{
          backgroundImage: 'url(/mt-demo/109600/109604/mt-content/uploads/2020/07/8.jpeg)',
          height: '150px',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',



        }}>
          {/* <i className='fa fa-close'>baloch</i>
                    <AiFillCloseCircle fontSize={20} /> */}
          <Modal.Title style={{ fontSize: '20px' }}></Modal.Title>
          {/* <AiFillCloseCircle onClick={handleClose} style={{ marginLeft: "190", cursor: "pointer" }} fontSize={40} /> */}
        </Modal.Header>
        <Modal.Body style={{
          marginTop: '-27px',
          backgroundColor: '#fffbfb',
          borderRadius: '30px 30px 0px 0px',
          marginBottom: '20px',



        }}>
          <div className='col-lg-12'>
            <div className="container">
              <div className='row'>
                <div className='col-lg-10'>
                  <h3 style={{ marginTop: '20px', marginBottom: '20px' }}>What is your email?</h3>

                </div>
                <div className='col-lg-2'>
                  <p style={{ marginTop: '20px', fontSize: '15px', color: '#d8352f' }} onClick={births}>Skip ≫</p>
                </div>
                <div className='col-lg-8'>

                  <label>Contact email address  </label>
                  <input type='email' className='form-control' style={{ height: '40px', fontSize:'13px'}}   onChange={(e)=>{setcontact_email_address(e.target.value)}}
                   value={contact_email_address}
                  />
                </div>


              </div>
            </div>
          </div>

          {/* ------- */}
        </Modal.Body>

        <Modal.Footer style={{}}>
          <Button
            className="btn btn-primary"
            onClick={back5}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Back
          </Button>

          {
            contact_email_address !== null?
            <Button
            className="btn btn-primary"
            onClick={births}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Next
          </Button>:
           <Button
           className="btn btn-secondary"
          //  onClick={births}
           style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
         >
           Next
         </Button>


          }
          
          <Button
            className="btn btn-primary"
            onClick={handleClose6}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Close
          </Button>
          {/* <Button variant="primary" onClick={addcustomer}>
                        Add
                    </Button> */}
        </Modal.Footer>
      </Modal>
      {/* What is your date of birth and age? */}
      <Modal
        show={show7}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handleClose4}
        style={{
          backgroundColor: '#ffffff87',
          borderRadius: '20px 20px 10px 10px',


        }}

      >
        {/* <Modal.Header closeButton> */}
        <Modal.Header style={{
          backgroundImage: 'url(/mt-demo/109600/109604/mt-content/uploads/2020/07/8.jpeg)',
          height: '150px',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',



        }}>
          {/* <i className='fa fa-close'>baloch</i>
                    <AiFillCloseCircle fontSize={20} /> */}
          <Modal.Title style={{ fontSize: '20px' }}></Modal.Title>
          {/* <AiFillCloseCircle onClick={handleClose} style={{ marginLeft: "190", cursor: "pointer" }} fontSize={40} /> */}
        </Modal.Header>
        <Modal.Body style={{
          marginTop: '-27px',
          backgroundColor: '#fffbfb',
          borderRadius: '30px 30px 0px 0px',
          marginBottom: '20px',



        }}>
          <div className='col-lg-12'>
            <div className="container">
              <div className='row'>
                <div className='col-lg-10'>
                  <h3 style={{ marginTop: '20px', marginBottom: '20px' }}>What is your date of birth and age?</h3>

                </div>
                <div className='col-lg-2'>
                  <p style={{ marginTop: '20px', fontSize: '15px', color: '#d8352f' }} onClick={height}>Skip ≫</p>
                </div>
                <div className='col-lg-6'>

                  <label>Date of Birth </label>
                  <input type='date' className='form-control' style={{ height: '40px', fontSize:'13px' }} 
                   onChange={(e)=>{setdate_of_birth(e.target.value)}} 
                   value={date_of_birth}

                  />
                </div>
                <div className='col-lg-6'>

                  <label>Age</label>
                  <input type='number' className='form-control' style={{ height: '40px', fontSize:'13px'}}
                   onChange={(e)=>{setage(e.target.value)}} 
                   value={age}
                  
                  />
                </div>


              </div>
            </div>
          </div>

          {/* ------- */}
        </Modal.Body>

        <Modal.Footer style={{}}>
          <Button
            className="btn btn-primary"
            onClick={back6}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Back
          </Button>

          {
            date_of_birth !== null && age !== null?
            <Button
            className="btn btn-primary"
            onClick={height}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Next
          </Button>:
          <Button
            className="btn btn-secondary"
            // onClick={height}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Next
          </Button>

          }
          
          <Button
            className="btn btn-primary"
            onClick={handleClose7}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Close
          </Button>
          {/* <Button variant="primary" onClick={addcustomer}>
                        Add
                    </Button> */}
        </Modal.Footer>
      </Modal>
      {/* Let us know you height and weight */}
      <Modal
        show={show8}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handleClose4}
        style={{
          backgroundColor: '#ffffff87',
          borderRadius: '20px 20px 10px 10px',


        }}

      >
        {/* <Modal.Header closeButton> */}
        <Modal.Header style={{
          backgroundImage: 'url(/mt-demo/109600/109604/mt-content/uploads/2020/07/8.jpeg)',
          height: '150px',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',



        }}>
          {/* <i className='fa fa-close'>baloch</i>
                    <AiFillCloseCircle fontSize={20} /> */}
          <Modal.Title style={{ fontSize: '20px' }}></Modal.Title>
          {/* <AiFillCloseCircle onClick={handleClose} style={{ marginLeft: "190", cursor: "pointer" }} fontSize={40} /> */}
        </Modal.Header>
        <Modal.Body style={{
          marginTop: '-27px',
          backgroundColor: '#fffbfb',
          borderRadius: '30px 30px 0px 0px',
          marginBottom: '20px',



        }}>
          <div className='col-lg-12'>
            <div className="container">
              <div className='row'>
                <div className='col-lg-10'>
                  <h3 style={{ marginTop: '20px', marginBottom: '20px' }}>Let us know you height and weight</h3>

                </div>
                <div className='col-lg-2'>
                  <p style={{ marginTop: '20px', fontSize: '15px', color: '#d8352f' }} onClick={born}>Skip ≫</p>
                </div>
                <div className='col-lg-6'>

                  <label>Height (feet)  </label>
                  <input type='number' className='form-control' style={{ height: '40px', fontSize:'13px'}}
                   onChange={(e)=>{setheight_feet(e.target.value)}} 
                   value={height_feet}
                  />
                </div>
                <div className='col-lg-6'>

                  <label>Height (inches) </label>
                  <input type='number' className='form-control' style={{ height: '40px', fontSize:'13px'}} 
                   onChange={(e)=>{setheight_inches(e.target.value)}} 
                   value={height_inches}
                  
                  />
                </div>
                <div className='col-lg-6' style={{ marginTop: '10px' }}>

                  <label>Weight (pounds)</label>
                  <input type='number' className='form-control' style={{ height: '40px', fontSize:'13px' }}
                   onChange={(e)=>{setweight(e.target.value)}} 
                   value={weight}
                  
                  />
                </div>
                <div className='col-lg-6' style={{ marginTop: '10px', }}>

                  <label>BMI</label>
                  <input type='number' className='form-control' style={{ height: '40px', fontSize:'13px' }}
                   onChange={(e)=>{setbmi(e.target.value)}} 
                   value={bmi}
                  />
                </div>


              </div>
            </div>
          </div>

          {/* ------- */}
        </Modal.Body>

        <Modal.Footer style={{}}>
          <Button
            className="btn btn-primary"
            onClick={back7}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Back
          </Button>

          {
            height_feet !== null && height_inches !== null && weight !== null && bmi !== null?
            <Button
            className="btn btn-primary"
            onClick={born}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Next
          </Button>:
          <Button
          className="btn btn-secondary"
          // onClick={born}
          style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
        >
          Next
        </Button>



          }
         
          <Button
            className="btn btn-primary"
            onClick={handleClose8}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Close
          </Button>
          {/* <Button variant="primary" onClick={addcustomer}>
                        Add
                    </Button> */}
        </Modal.Footer>
      </Modal>
      {/* What country were you born in?*/}
      <Modal
        show={show9}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handleClose9}
        style={{
          backgroundColor: '#ffffff87',
          borderRadius: '20px 20px 10px 10px',


        }}

      >
        {/* <Modal.Header closeButton> */}
        <Modal.Header style={{
          backgroundImage: 'url(/mt-demo/109600/109604/mt-content/uploads/2020/07/8.jpeg)',
          height: '150px',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',



        }}>
          {/* <i className='fa fa-close'>baloch</i>
                    <AiFillCloseCircle fontSize={20} /> */}
          <Modal.Title style={{ fontSize: '20px' }}></Modal.Title>
          {/* <AiFillCloseCircle onClick={handleClose} style={{ marginLeft: "190", cursor: "pointer" }} fontSize={40} /> */}
        </Modal.Header>
        <Modal.Body style={{
          marginTop: '-27px',
          backgroundColor: '#fffbfb',
          borderRadius: '30px 30px 0px 0px',
          marginBottom: '20px',



        }}>
          <div className='col-lg-12'>
            <div className="container">
              <div className='row'>
                <div className='col-lg-10'>
                  <h3 style={{ marginTop: '20px', marginBottom: '20px' }}>What country were you born in?</h3>

                </div>
                <div className='col-lg-2'>
                  <p style={{ marginTop: '20px', fontSize: '15px', color: '#d8352f' }} onClick={g4}>Skip ≫</p>
                </div>
                <div className='col-lg-6'>

                  <label>What country were you born in?  </label>
                  <input type='text' className='form-control' style={{ height: '40px', fontSize:'13px' }}
                   onChange={(e)=>{setcountry_born_in(e.target.value)}} 
                   value={country_born_in}
                  />
                </div>
                <div className='col-lg-6'>

                  <label>What is your ethnic background? </label>
                  <input type='text' className='form-control' style={{ height: '40px', fontSize:'13px' }} 
                   onChange={(e)=>{setethnic_background(e.target.value)}} 
                   value={ethnic_background}

                  
                  />
                </div>
                {/* <div className='col-lg-6' style={{marginTop:'10px'}}>
            
            <label>Weight (pounds)</label>
            <input type='number' className='form-control' style={{height:'40px',}}/>
          </div>
          <div className='col-lg-6'  style={{marginTop:'10px'}}>
            
            <label>BMI</label>
            <input type='number' className='form-control' style={{height:'40px',}}/>
          </div> */}


              </div>
            </div>
          </div>

          {/* ------- */}
        </Modal.Body>

        <Modal.Footer style={{}}>
          <Button
            className="btn btn-primary"
            onClick={back9}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Back
          </Button>

          {
            country_born_in !== null && ethnic_background !== null?
            <Button
            className="btn btn-primary"
            onClick={statuss}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Next
          </Button>:
           <Button
           className="btn btn-secondary"
          //  onClick={statuss}
           style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
         >
           Next
         </Button>
          }
         
          <Button
            className="btn btn-primary"
            onClick={handleClose9}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Close
          </Button>
          {/* <Button variant="primary" onClick={addcustomer}>
                        Add
                    </Button> */}
        </Modal.Footer>
      </Modal>

   


      {/* What is your legal citizenship status?*/}
      <Modal
        show={show10}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handleClose10}
        style={{
          backgroundColor: '#ffffff87',
          borderRadius: '20px 20px 10px 10px',


        }}

      >
        {/* <Modal.Header closeButton> */}
        <Modal.Header style={{
          backgroundImage: 'url(/mt-demo/109600/109604/mt-content/uploads/2020/07/8.jpeg)',
          height: '150px',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',



        }}>
          {/* <i className='fa fa-close'>baloch</i>
                    <AiFillCloseCircle fontSize={20} /> */}
          <Modal.Title style={{ fontSize: '20px' }}></Modal.Title>
          {/* <AiFillCloseCircle onClick={handleClose} style={{ marginLeft: "190", cursor: "pointer" }} fontSize={40} /> */}
        </Modal.Header>
        <Modal.Body style={{
          marginTop: '-27px',
          backgroundColor: '#fffbfb',
          borderRadius: '30px 30px 0px 0px',
          marginBottom: '20px',



        }}>
          <div className='col-lg-12'>
            <div className="container">
              <div className='row'>
                <div className='col-lg-10'>
                  <h3 style={{ marginTop: '20px', marginBottom: '20px' }}>What is your legal citizenship status?</h3>

                </div>
                <div className='col-lg-2'>
                  <p style={{ marginTop: '20px', fontSize: '15px', color: '#d8352f' }} onClick={financiallystable}>Skip ≫</p>
                </div>
                <div className='col-lg-8'>

                  <label>Legal citizenship status</label>
                  <input type='text' className='form-control' style={{ height: '40px', fontSize:'13px'}}  onChange={(e)=>{setlegal_citizanship_status(e.target.value)}}  
                  value={legal_citizanship_status}

                  
                  />
                </div>

                {/* <div className='col-lg-6' style={{marginTop:'10px'}}>
            
            <label>Weight (pounds)</label>
            <input type='number' className='form-control' style={{height:'40px',}}/>
          </div>
          <div className='col-lg-6'  style={{marginTop:'10px'}}>
            
            <label>BMI</label>
            <input type='number' className='form-control' style={{height:'40px',}}/>
          </div> */}


              </div>
            </div>
          </div>

          {/* ------- */}
        </Modal.Body>

        <Modal.Footer style={{}}>
          <Button
            className="btn btn-primary"
            onClick={back10}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Back
          </Button>
          {
            legal_citizanship_status !== null?
            <Button
            className="btn btn-primary"
            onClick={financiallystable}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Next
          </Button>:
           <Button
           className="btn btn-secondary"
          //  onClick={financiallystable}
           style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
         >
           Next
         </Button>

          }
         
          <Button
            className="btn btn-primary"
            onClick={handleClose10}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Close
          </Button>
          {/* <Button variant="primary" onClick={addcustomer}>
                        Add
                    </Button> */}
        </Modal.Footer>
      </Modal>


      {/* Would you consider yourself to be financially stable?*/}
      <Modal
        show={show11}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handleClose11}
        style={{
          backgroundColor: '#ffffff87',
          borderRadius: '20px 20px 10px 10px',


        }}

      >
        {/* <Modal.Header closeButton> */}
        <Modal.Header style={{
          backgroundImage: 'url(/mt-demo/109600/109604/mt-content/uploads/2020/07/8.jpeg)',
          height: '150px',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',



        }}>
          {/* <i className='fa fa-close'>baloch</i>
                    <AiFillCloseCircle fontSize={20} /> */}
          <Modal.Title style={{ fontSize: '20px' }}></Modal.Title>
          {/* <AiFillCloseCircle onClick={handleClose} style={{ marginLeft: "190", cursor: "pointer" }} fontSize={40} /> */}
        </Modal.Header>
        <Modal.Body style={{
          marginTop: '-27px',
          backgroundColor: '#fffbfb',
          borderRadius: '30px 30px 0px 0px',
          marginBottom: '20px',



        }}>
          <div className='col-lg-12'>
            <div className="container">
              <div className='row'>
                <div className='col-lg-8'>
                  <h3 style={{ marginTop: '20px', marginBottom: '20px' }}>Would you consider yourself to be financially stable?</h3>

                </div>
                <div className='col-lg-2'>
                  <p style={{ marginTop: '20px', fontSize: '15px', color: '#d8352f' }} onClick={transportations}>Skip ≫</p>
                </div>
                <div className='col-lg-6'>
                  <div className='row'>
                  

                    <div className='col-lg-3 col-sm-2 col-xs-2 d-flex justify-content-start'>


                      <input type="radio"  id="yes" name="fav_language" className='form-control' value='yes'
                      checked={financially_stable === 'yes'}
                      
                                         onChange={(e) => {
                          setfinancially_stable(e.target.value);
                        }}
                       

                      />
                      <label for="html" style={{ fontSize: '15px', marginLeft: '5px' }}>Yes</label>

                    </div>
                    <div className='col-lg-3 col-sm-2 col-xs-2 d-flex justify-content-start'>


                      <input type="radio"  id="No" name="fav_language" className='form-control' value="no"
                       checked={financially_stable === 'no'}
                        onChange={(e) => {
                          setfinancially_stable(e.target.value);
                        }}
                      

                      />
                      <label for="html" style={{ fontSize: '15px', marginLeft: '5px' }}>No</label>

                    </div>
                  </div>
                </div>

                {/* <div className='col-lg-6' style={{marginTop:'10px'}}>
            
            <label>Weight (pounds)</label>
            <input type='number' className='form-control' style={{height:'40px',}}/>
          </div>
          <div className='col-lg-6'  style={{marginTop:'10px'}}>
            
            <label>BMI</label>
            <input type='number' className='form-control' style={{height:'40px',}}/>
          </div> */}


              </div>
            </div>
          </div>

          {/* ------- */}
        </Modal.Body>

        <Modal.Footer style={{}}>
          <Button
            className="btn btn-primary"
            onClick={back11}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Back
          </Button>

          {
            financially_stable !== null?
            <Button
            className="btn btn-primary"
            onClick={transportations}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Next
          </Button>:
          <Button
          className="btn btn-secondary"
          // onClick={transportations}
          style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
        >
          Next
        </Button>
          }
          
          <Button
            className="btn btn-primary"
            onClick={handleClose11}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Close
          </Button>
          {/* <Button variant="primary" onClick={addcustomer}>
                        Add
                    </Button> */}
        </Modal.Footer>
      </Modal>
      {/* Do you have access to reliable transportation?*/}
      <Modal
        show={show12}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handleClose12}
        style={{
          backgroundColor: '#ffffff87',
          borderRadius: '20px 20px 10px 10px',


        }}

      >
        {/* <Modal.Header closeButton> */}
        <Modal.Header style={{
          backgroundImage: 'url(/mt-demo/109600/109604/mt-content/uploads/2020/07/8.jpeg)',
          height: '150px',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',



        }}>
          {/* <i className='fa fa-close'>baloch</i>
                    <AiFillCloseCircle fontSize={20} /> */}
          <Modal.Title style={{ fontSize: '20px' }}></Modal.Title>
          {/* <AiFillCloseCircle onClick={handleClose} style={{ marginLeft: "190", cursor: "pointer" }} fontSize={40} /> */}
        </Modal.Header>
        <Modal.Body style={{
          marginTop: '-27px',
          backgroundColor: '#fffbfb',
          borderRadius: '30px 30px 0px 0px',
          marginBottom: '20px',



        }}>
          <div className='col-lg-12'>
            <div className="container">
              <div className='row'>
                <div className='col-lg-8'>
                  <h3 style={{ marginTop: '20px', marginBottom: '20px' }}>Do you have access to reliable transportation?</h3>

                </div>
                <div className='col-lg-2'>
                  <p style={{ marginTop: '20px', fontSize: '15px', color: '#d8352f' }} onClick={driverslicenses}>Skip ≫</p>
                </div>
                <div className='col-lg-6'>
                  <div className='row'>

                    <div className='col-lg-3 col-sm-2 col-xs-2 d-flex justify-content-start'>


                      <input type="radio"  id="yes" name="fav_language" className='form-control' value="yes"
                        onChange={(e) => {
                          setreliable_transportation(e.target.value);
                        }}
                        checked={reliable_transportation === 'yes'}
                      />
                      <label for="html" style={{ fontSize: '15px', marginLeft: '5px' }}>Yes</label>

                    </div>
                    <div className='col-lg-3 col-sm-2 col-xs-2 d-flex justify-content-start'>


                      <input type="radio"   id="No" name="fav_language" className='form-control' value="No"
                         onChange={(e) => {
                          setreliable_transportation(e.target.value);
                        }}
                        checked={reliable_transportation === 'No'}

                      />
                      <label for="html" style={{ fontSize: '15px', marginLeft: '5px' }}>No</label>

                    </div>
                  </div>
                </div>

                {/* <div className='col-lg-6' style={{marginTop:'10px'}}>
            
            <label>Weight (pounds)</label>
            <input type='number' className='form-control' style={{height:'40px',}}/>
          </div>
          <div className='col-lg-6'  style={{marginTop:'10px'}}>
            
            <label>BMI</label>
            <input type='number' className='form-control' style={{height:'40px',}}/>
          </div> */}


              </div>
            </div>
          </div>

          {/* ------- */}
        </Modal.Body>

        <Modal.Footer style={{}}>
          <Button
            className="btn btn-primary"
            onClick={back12}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Back
          </Button>

          {
            reliable_transportation !== null?
            <Button
            className="btn btn-primary"
            onClick={driverslicenses}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Next
          </Button>:
          <Button
          className="btn btn-secondary"
          // onClick={driverslicenses}
          style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
        >
          Next
        </Button>



          }
         
          <Button
            className="btn btn-primary"
            onClick={handleClose12}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Close
          </Button>
          {/* <Button variant="primary" onClick={addcustomer}>
                        Add
                    </Button> */}
        </Modal.Footer>
      </Modal>

      {/* Do you have a valid driver’s license or state-issued identification card?*/}
      <Modal
        show={show13}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handleClose13}
        style={{
          backgroundColor: '#ffffff87',
          borderRadius: '20px 20px 10px 10px',


        }}

      >
        {/* <Modal.Header closeButton> */}
        <Modal.Header style={{
          backgroundImage: 'url(/mt-demo/109600/109604/mt-content/uploads/2020/07/8.jpeg)',
          height: '150px',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',



        }}>
          {/* <i className='fa fa-close'>baloch</i>
                    <AiFillCloseCircle fontSize={20} /> */}
          <Modal.Title style={{ fontSize: '20px' }}></Modal.Title>
          {/* <AiFillCloseCircle onClick={handleClose} style={{ marginLeft: "190", cursor: "pointer" }} fontSize={40} /> */}
        </Modal.Header>
        <Modal.Body style={{
          marginTop: '-27px',
          backgroundColor: '#fffbfb',
          borderRadius: '30px 30px 0px 0px',
          marginBottom: '20px',



        }}>
          <div className='col-lg-12'>
            <div className="container">
              <div className='row'>
                <div className='col-lg-8'>
                  <h3 style={{ marginTop: '20px', marginBottom: '20px' }}>Do you have a valid driver’s license or state-issued identification card?</h3>

                </div>
                <div className='col-lg-3'>
                  <p style={{ marginTop: '20px', fontSize: '15px', color: '#d8352f' }} onClick={Securitynumber}>Skip ≫</p>
                </div>
                <div className='col-lg-12'>
                  <div className='col-lg-2 d-flex justify-content-start' >
               

                  <input type="radio" className='form-control'  id="Driver’s license" name="fav_language" value="Driver’s license"
                 onChange={(e) => {
                  setdriver_license_or_id_card(e.target.value);
                }}
                checked={driver_license_or_id_card === 'Driver’s license'}
                
                
                />
                <label for="html">Driver’s license
</label>
                </div>
               
               <div className='col-lg-3  d-flex justify-content-end' style={{marginTop:'10px'}} >
               

                 <input type="radio" className='form-control' id="State-issued identification card" name="fav_language" value="State-issued identification card" style={{marginLeft:'-17px'}}
                 onChange={(e) => {
                  setdriver_license_or_id_card(e.target.value);
                }}
                checked={driver_license_or_id_card === 'State-issued identification card'}
               />
               <label for="html">State-issued identification card
</label>
               </div>
               <div className='col-lg-3  d-flex justify-content-start' style={{marginTop:'10px'}} >
               

                 <input type="radio" className='form-control' id="Neither of these" name="fav_language" value="Neither of these"
                onChange={(e) => {
                  setdriver_license_or_id_card(e.target.value);
                }}
                checked={driver_license_or_id_card === 'Neither of these'}
               />
               <label for="html">Neither of these
</label>
               </div>
 
 

                </div>

                {/* <div className='col-lg-6' style={{marginTop:'10px'}}>
            
            <label>Weight (pounds)</label>
            <input type='number' className='form-control' style={{height:'40px',}}/>
          </div>
          <div className='col-lg-6'  style={{marginTop:'10px'}}>
            
            <label>BMI</label>
            <input type='number' className='form-control' style={{height:'40px',}}/>
          </div> */}


              </div>
            </div>
          </div>

          {/* ------- */}
        </Modal.Body>

        <Modal.Footer style={{}}>
          <Button
            className="btn btn-primary"
            onClick={back13}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Back
          </Button>
          {
            driver_license_or_id_card !== null?
            <Button
            className="btn btn-primary"
            onClick={Securitynumber}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Next
          </Button>:
           <Button
           className="btn btn-secondary"
          //  onClick={Securitynumber}
           style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
         >
           Next
         </Button>




          }
          
          <Button
            className="btn btn-primary"
            onClick={handleClose13}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Close
          </Button>
          {/* <Button variant="primary" onClick={addcustomer}>
                        Add
                    </Button> */}
        </Modal.Footer>
      </Modal>

      {/* Your social security number?*/}
      <Modal
        show={show14}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handleClose14}
        style={{
          backgroundColor: '#ffffff87',
          borderRadius: '20px 20px 10px 10px',


        }}

      >
        {/* <Modal.Header closeButton> */}
        <Modal.Header style={{
          backgroundImage: 'url(/mt-demo/109600/109604/mt-content/uploads/2020/07/8.jpeg)',
          height: '150px',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',



        }}>
          {/* <i className='fa fa-close'>baloch</i>
                    <AiFillCloseCircle fontSize={20} /> */}
          <Modal.Title style={{ fontSize: '20px' }}></Modal.Title>
          {/* <AiFillCloseCircle onClick={handleClose} style={{ marginLeft: "190", cursor: "pointer" }} fontSize={40} /> */}
        </Modal.Header>
        <Modal.Body style={{
          marginTop: '-27px',
          backgroundColor: '#fffbfb',
          borderRadius: '30px 30px 0px 0px',
          marginBottom: '20px',



        }}>
          <div className='col-lg-12'>
            <div className="container">
              <div className='row'>
                <div className='col-lg-10'>
                  <h3 style={{ marginTop: '20px', marginBottom: '20px' }}>Your social security number?</h3>

                </div>
                <div className='col-lg-2'>
                  <p style={{ marginTop: '20px', fontSize: '15px', color: '#d8352f' }} onClick={Traveltoanother}>Skip ≫</p>
                </div>
                <div className='col-lg-8'>

                  <label>Social security number</label>
                  <input type='number' className='form-control' style={{ height: '40px', fontSize:'13px' }} 
                  
                  onChange={(e) => {
                    setsocial_security_number(e.target.value);
                  }}
                  value={social_security_number}
                  />
                </div>

                {/* <div className='col-lg-6' style={{marginTop:'10px'}}>
            
            <label>Weight (pounds)</label>
            <input type='number' className='form-control' style={{height:'40px',}}/>
          </div>
          <div className='col-lg-6'  style={{marginTop:'10px'}}>
            
            <label>BMI</label>
            <input type='number' className='form-control' style={{height:'40px',}}/>
          </div> */}


              </div>
            </div>
          </div>

          {/* ------- */}
        </Modal.Body>

        <Modal.Footer style={{}}>
          <Button
            className="btn btn-primary"
            onClick={back14}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Back
          </Button>

          {
             social_security_number !== null?
             <Button
             className="btn btn-primary"
             onClick={Traveledoutside}
             style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
           >
             Next
           </Button>:
             <Button
             className="btn btn-secondary"
            //  onClick={Traveledoutside}
             style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
           >
             Next
           </Button>

          }
        
          <Button
            className="btn btn-primary"
            onClick={handleClose14}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Close
          </Button>
          {/* <Button variant="primary" onClick={addcustomer}>
                        Add
                    </Button> */}
        </Modal.Footer>
      </Modal>

      {/* Have you traveled outside of the United States in the last six months? */}
      <Modal
        show={show15}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handleClose15}
        style={{
          backgroundColor: '#ffffff87',
          borderRadius: '20px 20px 10px 10px',


        }}

      >
        {/* <Modal.Header closeButton> */}
        <Modal.Header style={{
          backgroundImage: 'url(/mt-demo/109600/109604/mt-content/uploads/2020/07/8.jpeg)',
          height: '150px',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',



        }}>
          {/* <i className='fa fa-close'>baloch</i>
                    <AiFillCloseCircle fontSize={20} /> */}
          <Modal.Title style={{ fontSize: '20px' }}></Modal.Title>
          {/* <AiFillCloseCircle onClick={handleClose} style={{ marginLeft: "190", cursor: "pointer" }} fontSize={40} /> */}
        </Modal.Header>
        <Modal.Body style={{
          marginTop: '-27px',
          backgroundColor: '#fffbfb',
          borderRadius: '30px 30px 0px 0px',
          marginBottom: '20px',



        }}>
          <div className='col-lg-12'>
            <div className="container">
              <div className='row'>
                <div className='col-lg-8'>
                  <h3 style={{ marginTop: '20px', marginBottom: '20px' }}>Have you traveled outside of 
                  the United States in the last six months?</h3>

                </div>
                <div className='col-lg-2'>
                  <p style={{ marginTop: '20px', fontSize: '15px', color: '#d8352f' }} onClick={Traveltoanother}>Skip ≫</p>
                </div>
                <div className='col-lg-6'>
                  <div className='row'>
                  

                    <div className='col-lg-3 col-sm-2 col-xs-2 d-flex justify-content-start'>


                      <input type="radio"  id="yes" name="fav_language" className='form-control' value="yes"
                         onChange={(e) => {
                          setlast_six_month_traveled(e.target.value);
                        }}
                        checked={last_six_month_traveled === 'yes'}
                      />
                      <label for="html" style={{ fontSize: '15px', marginLeft: '5px' }}>Yes</label>

                    </div>
                    <div className='col-lg-3 col-sm-2 col-xs-2 d-flex justify-content-start'>


                      <input type="radio"  id="No" name="fav_language" className='form-control' value="No"
                       onChange={(e) => {
                        setlast_six_month_traveled(e.target.value);
                      }}
                      checked={last_six_month_traveled === 'No'}

                      />
                      <label for="html" style={{ fontSize: '15px', marginLeft: '5px' }}>No</label>

                    </div>
                  </div>
                </div>

                {/* <div className='col-lg-6' style={{marginTop:'10px'}}>
            
            <label>Weight (pounds)</label>
            <input type='number' className='form-control' style={{height:'40px',}}/>
          </div>
          <div className='col-lg-6'  style={{marginTop:'10px'}}>
            
            <label>BMI</label>
            <input type='number' className='form-control' style={{height:'40px',}}/>
          </div> */}


              </div>
            </div>
          </div>

          {/* ------- */}
        </Modal.Body>

        <Modal.Footer style={{}}>
          <Button
            className="btn btn-primary"
            onClick={back15}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Back
          </Button>
          {

            last_six_month_traveled !== null ?
            <Button
            className="btn btn-primary"
            onClick={Traveltoanother}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Next
          </Button>:
          <Button
          className="btn btn-secondary"
          // onClick={Traveltoanother}
          style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
        >
          Next
        </Button>

          }
          
          <Button
            className="btn btn-primary"
            onClick={handleClose15}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Close
          </Button>
          {/* <Button variant="primary" onClick={addcustomer}>
                        Add
                    </Button> */}
        </Modal.Footer>
      </Modal>
       {/* Do you have plans to travel to another state or country in the next 18 months? */}
       <Modal
        show={show16}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handleClose16}
        style={{
          backgroundColor: '#ffffff87',
          borderRadius: '20px 20px 10px 10px',


        }}

      >
        {/* <Modal.Header closeButton> */}
        <Modal.Header style={{
          backgroundImage: 'url(/mt-demo/109600/109604/mt-content/uploads/2020/07/8.jpeg)',
          height: '150px',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',



        }}>
          {/* <i className='fa fa-close'>baloch</i>
                    <AiFillCloseCircle fontSize={20} /> */}
          <Modal.Title style={{ fontSize: '20px' }}></Modal.Title>
          {/* <AiFillCloseCircle onClick={handleClose} style={{ marginLeft: "190", cursor: "pointer" }} fontSize={40} /> */}
        </Modal.Header>
        <Modal.Body style={{
          marginTop: '-27px',
          backgroundColor: '#fffbfb',
          borderRadius: '30px 30px 0px 0px',
          marginBottom: '20px',



        }}>
          <div className='col-lg-12'>
            <div className="container">
              <div className='row'>
                <div className='col-lg-8'>
                  <h3 style={{ marginTop: '20px', marginBottom: '20px' }}>Do you have plans to travel to 
                  another state or country in the next 18 months?</h3>

                </div>
                <div className='col-lg-2'>
                  <p style={{ marginTop: '20px', fontSize: '15px', color: '#d8352f' }} onClick={Emergencycontact}>Skip ≫</p>
                </div>
                <div className='col-lg-6'>
                  <div className='row'>
                  

                    <div className='col-lg-3 col-sm-2 col-xs-2 d-flex justify-content-start'>


                      <input type="radio"  id="yes" name="fav_language" className='form-control' value="yes"
                        onChange={(e) => {
                          settravell_next_18_months(e.target.value);
                        }}
                        checked={travell_next_18_months === 'yes'}
                      />
                      <label for="html" style={{ fontSize: '15px', marginLeft: '5px' }}>Yes</label>

                    </div>
                    <div className='col-lg-3 col-sm-2 col-xs-2 d-flex justify-content-start'>


                      <input type="radio"  id="No" name="fav_language" className='form-control' value="No"
                      onChange={(e) => {
                        settravell_next_18_months(e.target.value);
                      }}
                      checked={travell_next_18_months === 'no'}

                      />
                      <label for="html" style={{ fontSize: '15px', marginLeft: '5px' }}>No</label>

                    </div>
                  </div>
                </div>

                {/* <div className='col-lg-6' style={{marginTop:'10px'}}>
            
            <label>Weight (pounds)</label>
            <input type='number' className='form-control' style={{height:'40px',}}/>
          </div>
          <div className='col-lg-6'  style={{marginTop:'10px'}}>
            
            <label>BMI</label>
            <input type='number' className='form-control' style={{height:'40px',}}/>
          </div> */}


              </div>
            </div>
          </div>

          {/* ------- */}
        </Modal.Body>

        <Modal.Footer style={{}}>
          <Button
            className="btn btn-primary"
            onClick={back16}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Back
          </Button>
          {
            travell_next_18_months !== null?
            <Button
            className="btn btn-primary"
            onClick={Emergencycontact}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Next
          </Button>:
          <Button
          className="btn btn-secondary"
          // onClick={Emergencycontact}
          style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
        >
          Next
        </Button>

          }
          
          <Button
            className="btn btn-primary"
            onClick={handleClose16}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Close
          </Button>
          {/* <Button variant="primary" onClick={addcustomer}>
                        Add
                    </Button> */}
        </Modal.Footer>
      </Modal>


      {/* Emergency contact */}
      <Modal
        show={show17}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handleClose17}
        style={{
          backgroundColor: '#ffffff87',
          borderRadius: '20px 20px 10px 10px',


        }}

      >
        {/* <Modal.Header closeButton> */}
        <Modal.Header style={{
          backgroundImage: 'url(/mt-demo/109600/109604/mt-content/uploads/2020/07/8.jpeg)',
          height: '150px',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',



        }}>
          {/* <i className='fa fa-close'>baloch</i>
                    <AiFillCloseCircle fontSize={20} /> */}
          <Modal.Title style={{ fontSize: '20px' }}></Modal.Title>
          {/* <AiFillCloseCircle onClick={handleClose} style={{ marginLeft: "190", cursor: "pointer" }} fontSize={40} /> */}
        </Modal.Header>
        <Modal.Body style={{
          marginTop: '-27px',
          backgroundColor: '#fffbfb',
          borderRadius: '30px 30px 0px 0px',
          marginBottom: '20px',



        }}>
          <div className='col-lg-12'>
            <div className="container">
              <div className='row'>
                <div className='col-lg-10'>
                  <h3 style={{ marginTop: '20px', marginBottom: '20px' }}>Emergency contact</h3>

                </div>
                <div className='col-lg-2'>
                  <p style={{ marginTop: '20px', fontSize: '15px', color: '#d8352f' }} onClick={Relationshipstatus}>Skip ≫</p>
                </div>
                <div className='col-lg-6'>

                  <label>First name</label>
                  <input type='text' className='form-control' style={{ height: '40px', fontSize:'13px'}} 
                  onChange={(e) => {
                    setemergency_first_name(e.target.value);
                  }}
                  value={emergency_first_name}
                  
                  />
                </div>
                <div className='col-lg-6'>
                  <label>Last name</label>
                  <input type='text' className='form-control' style={{ height: '40px', fontSize:'13PX' }} 
                  onChange={(e) => {
                    setemergency_last_name(e.target.value);
                  }}
                  value={emergency_last_name}
                  
                  />
                </div>
                <div className='col-lg-6' style={{ marginTop: '10px' }}>
                  <label>Phone</label>
                  <input type='number' className='form-control' style={{ height: '40px' , fontSize:'13PX'}}
                   onChange={(e) => {
                    setemergency_phone_number(e.target.value);
                  }}
                  value={emergency_phone_number}
                  
                  />
                </div>

              </div>
            </div>
          </div>

          {/* ------- */}
        </Modal.Body>

        <Modal.Footer style={{}}>
          <Button
            className="btn btn-primary"
            onClick={back17}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Back
          </Button>
          { emergency_first_name !== null && emergency_last_name !== null && emergency_phone_number !== null?
           <Button
           className="btn btn-primary"
           onClick={Relationshipstatus}
           style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
         >
           Next
         </Button>:
          <Button
          className="btn btn-secondary"
          // onClick={Relationshipstatus}
          style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
        >
          Next
        </Button>



          }
         
          <Button
            className="btn btn-primary"
            onClick={handleClose17}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Close
          </Button>
          {/* <Button variant="primary" onClick={addcustomer}>
                        Add
                    </Button> */}
        </Modal.Footer>
      </Modal>
       {/* What is your relationship status? */}
       <Modal
        show={show18}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handleClose18}
        style={{
          backgroundColor: '#ffffff87',
          borderRadius: '20px 20px 10px 10px',


        }}

      >
        {/* <Modal.Header closeButton> */}
        <Modal.Header style={{
          backgroundImage: 'url(/mt-demo/109600/109604/mt-content/uploads/2020/07/8.jpeg)',
          height: '150px',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',



        }}>
          {/* <i className='fa fa-close'>baloch</i>
                    <AiFillCloseCircle fontSize={20} /> */}
          <Modal.Title style={{ fontSize: '20px' }}></Modal.Title>
          {/* <AiFillCloseCircle onClick={handleClose} style={{ marginLeft: "190", cursor: "pointer" }} fontSize={40} /> */}
        </Modal.Header>
        <Modal.Body style={{
          marginTop: '-27px',
          backgroundColor: '#fffbfb',
          borderRadius: '30px 30px 0px 0px',
          marginBottom: '20px',



        }}>
          <div className='col-lg-12'>
            <div className="container">
              <div className='row'>
                <div className='col-lg-10'>
                  <h3 style={{ marginTop: '20px', marginBottom: '20px' }}>What is your relationship status?</h3>

                </div>
                <div className='col-lg-2'>
                  <p style={{ marginTop: '20px', fontSize: '15px', color: '#d8352f' }} onClick={Sexualorientation}>Skip ≫</p>
                </div>
                <div className='col-lg-6'>

                  <label>What is your relationship status?</label>
                  <input type='text' className='form-control' style={{ height: '40px', fontSize:'13px' }} 
                   onChange={(e) => {
                    setrelationship_status(e.target.value);
                  }}
                  value={relationship_status}
                  
                  />
                </div>
               

              </div>
            </div>
          </div>

          {/* ------- */}
        </Modal.Body>

        <Modal.Footer style={{}}>
          <Button
            className="btn btn-primary"
            onClick={back18}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Back
          </Button>

          {
             relationship_status !== null ? <Button
             className="btn btn-primary"
             onClick={Sexualorientation}
             style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
           >
             Next
           </Button> :
           <Button
           className="btn btn-secondary"
          //  onClick={Sexualorientation}
           style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
         >
           Next
         </Button>

          }
         
          <Button
            className="btn btn-primary"
            onClick={handleClose18}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Close
          </Button>
          {/* <Button variant="primary" onClick={addcustomer}>
                        Add
                    </Button> */}
        </Modal.Footer>
      </Modal>
      {/* What is your sexual orientation? */}
      <Modal
        show={show19}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handleClose19}
        style={{
          backgroundColor: '#ffffff87',
          borderRadius: '20px 20px 10px 10px',


        }}

      >
        {/* <Modal.Header closeButton> */}
        <Modal.Header style={{
          backgroundImage: 'url(/mt-demo/109600/109604/mt-content/uploads/2020/07/8.jpeg)',
          height: '150px',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',



        }}>
          {/* <i className='fa fa-close'>baloch</i>
                    <AiFillCloseCircle fontSize={20} /> */}
          <Modal.Title style={{ fontSize: '20px' }}></Modal.Title>
          {/* <AiFillCloseCircle onClick={handleClose} style={{ marginLeft: "190", cursor: "pointer" }} fontSize={40} /> */}
        </Modal.Header>
        <Modal.Body style={{
          marginTop: '-27px',
          backgroundColor: '#fffbfb',
          borderRadius: '30px 30px 0px 0px',
          marginBottom: '20px',



        }}>
          <div className='col-lg-12'>
            <div className="container">
              <div className='row'>
                <div className='col-lg-10'>
                  <h3 style={{ marginTop: '20px', marginBottom: '20px' }}>What is your sexual orientation?</h3>

                </div>
                <div className='col-lg-2'>
                  <p style={{ marginTop: '20px', fontSize: '15px', color: '#d8352f' }} onClick={Sexuallyactive}>Skip ≫</p>
                </div>
                <div className='col-lg-6'>

                  <label>What is your sexual orientation?</label>
                  <input type='text' className='form-control' style={{ height: '40px', fontSize:'13px'}} 
                   onChange={(e) => {
                    setsexual_orientation(e.target.value);
                  }}
                  value={sexual_orientation}
                  />
                </div>
               

              </div>
            </div>
          </div>

          {/* ------- */}
        </Modal.Body>

        <Modal.Footer style={{}}>
          <Button
            className="btn btn-primary"
            onClick={back19}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Back
          </Button>
          {
          sexual_orientation !== null ?
          <Button
          className="btn btn-primary"
          onClick={Sexuallyactive}
          style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
        >
          Next
        </Button>:
         <Button
         className="btn btn-secondary"
        //  onClick={Sexuallyactive}
         style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
       >
         Next
       </Button>


          }
         
          <Button
            className="btn btn-primary"
            onClick={handleClose19}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Close
          </Button>
          {/* <Button variant="primary" onClick={addcustomer}>
                        Add
                    </Button> */}
        </Modal.Footer>
      </Modal>

       {/* Are you sexually active? */}
       <Modal
        show={show20}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handleClose20}
        style={{
          backgroundColor: '#ffffff87',
          borderRadius: '20px 20px 10px 10px',


        }}

      >
        {/* <Modal.Header closeButton> */}
        <Modal.Header style={{
          backgroundImage: 'url(/mt-demo/109600/109604/mt-content/uploads/2020/07/8.jpeg)',
          height: '150px',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',



        }}>
          {/* <i className='fa fa-close'>baloch</i>
                    <AiFillCloseCircle fontSize={20} /> */}
          <Modal.Title style={{ fontSize: '20px' }}></Modal.Title>
          {/* <AiFillCloseCircle onClick={handleClose} style={{ marginLeft: "190", cursor: "pointer" }} fontSize={40} /> */}
        </Modal.Header>
        <Modal.Body style={{
          marginTop: '-27px',
          backgroundColor: '#fffbfb',
          borderRadius: '30px 30px 0px 0px',
          marginBottom: '20px',



        }}>
          <div className='col-lg-12'>
            <div className="container">
              <div className='row'>
                <div className='col-lg-8'>
                  <h3 style={{ marginTop: '20px', marginBottom: '20px' }}>Are you sexually active?</h3>

                </div>
                <div className='col-lg-2'>
                  <p style={{ marginTop: '20px', fontSize: '15px', color: '#d8352f' }} onClick={partner}>Skip ≫</p>
                </div>
                <div className='col-lg-6'>
                  <div className='row'>
                  

                    <div className='col-lg-3 col-sm-2 col-xs-2 d-flex justify-content-start'>


                      <input type="radio"  id="yes" name="fav_language" className='form-control' value="yes"
                        onChange={(e) => {
                          setsexually_activity(e.target.value);
                        }}
                        checked={sexually_activity === 'yes'}
                      />
                      <label for="html" style={{ fontSize: '15px', marginLeft: '5px' }}>Yes</label>

                    </div>
                    <div className='col-lg-3 col-sm-2 col-xs-2 d-flex justify-content-start'>


                      <input type="radio"  id="No" name="fav_language" className='form-control' value="No"
                         onChange={(e) => {
                          setsexually_activity(e.target.value);
                        }}
                        checked={sexually_activity === 'No'}
                      />

                    
                      <label for="html" style={{ fontSize: '15px', marginLeft: '5px' }}>No</label>

                    </div>
                  </div>
                </div>

                {/* <div className='col-lg-6' style={{marginTop:'10px'}}>
            
            <label>Weight (pounds)</label>
            <input type='number' className='form-control' style={{height:'40px',}}/>
          </div>
          <div className='col-lg-6'  style={{marginTop:'10px'}}>
            
            <label>BMI</label>
            <input type='number' className='form-control' style={{height:'40px',}}/>
          </div> */}


              </div>
            </div>
          </div>

          {/* ------- */}
        </Modal.Body>

        <Modal.Footer style={{}}>
          <Button
            className="btn btn-primary"
            onClick={back20}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Back
          </Button>
          {
              sexually_activity !== null?
              <Button
              className="btn btn-primary"
              onClick={partner}
              style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
            >
              Next
            </Button>:
             <Button
             className="btn btn-secondary"
            //  onClick={partner}
             style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
           >
             Next
           </Button>

          }
         
          <Button
            className="btn btn-primary"
            onClick={handleClose20}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Close
          </Button>
          {/* <Button variant="primary" onClick={addcustomer}>
                        Add
                    </Button> */}
        </Modal.Footer>
      </Modal>

        {/* Other than you (and your partner if you have one), how many other people 
        over the age of 18 live in the same household as you? */}
        <Modal
        show={show21}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handleClose21}
        style={{
          backgroundColor: '#ffffff87',
          borderRadius: '20px 20px 10px 10px',


        }}

      >
        {/* <Modal.Header closeButton> */}
        <Modal.Header style={{
          backgroundImage: 'url(/mt-demo/109600/109604/mt-content/uploads/2020/07/8.jpeg)',
          height: '150px',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',



        }}>
          {/* <i className='fa fa-close'>baloch</i>
                    <AiFillCloseCircle fontSize={20} /> */}
          <Modal.Title style={{ fontSize: '20px' }}></Modal.Title>
          {/* <AiFillCloseCircle onClick={handleClose} style={{ marginLeft: "190", cursor: "pointer" }} fontSize={40} /> */}
        </Modal.Header>
        <Modal.Body style={{
          marginTop: '-27px',
          backgroundColor: '#fffbfb',
          borderRadius: '30px 30px 0px 0px',
          marginBottom: '20px',



        }}>
          <div className='col-lg-12'>
            <div className="container">
              <div className='row'>
                <div className='col-lg-12'>
                  <h3 style={{ marginTop: '20px', marginBottom: '20px' }}>Other than you (and your partner if you have one), 
                  how many other people over the age of 18 live in the same household as you?</h3>

                </div>
                
                <div className='col-lg-12'>

                  {/* <label>Other than you (and your partner if you have one), how many other people over the age of
                     18 live in the same household as you?</label> */}
                  <input type='text' className='form-control' style={{ height: '40px', }} 
                  onChange={(e) => {
                    setover_the_age_of_18_live(e.target.value);
                  }}
                  value={over_the_age_of_18_live}
                  
                  
                  
                  />
                </div>
               

              </div>
            </div>
          </div>

          {/* ------- */}
        </Modal.Body>

        <Modal.Footer style={{}}>
          
          <Button
            className="btn btn-primary"
            onClick={back21}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Back
          </Button>
          {
            over_the_age_of_18_live !== null?
            <Button
            className="btn btn-primary"
            onClick={onSubmit}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
    {loder !== false? 
                      <Spinner animation="border"  />:'Finish'  
                      
                     }

            
          </Button>:
            <Button
            className="btn btn-secondary"
            // onClick={onSubmit}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Finish
          </Button>

          }

        
          <Button
            className="btn btn-primary"
            onClick={handleClose21}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Close
          </Button>
          {/* <Button variant="primary" onClick={addcustomer}>
                        Add
                    </Button> */}
        </Modal.Footer>
      </Modal>



      {/* Personal History */}

      
       <Modal
        show={pshow1}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handleClosep1}
        style={{
          backgroundColor: '#ffffff87',
          borderRadius: '20px 20px 10px 10px',


        }}

      >
        {/* <Modal.Header closeButton> */}
        <Modal.Header style={{
          backgroundImage: 'url(/mt-demo/109600/109604/mt-content/uploads/2020/07/8.jpeg)',
          height: '150px',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',



        }}>
          {/* <i className='fa fa-close'>baloch</i>
                    <AiFillCloseCircle fontSize={20} /> */}
          <Modal.Title style={{ fontSize: '20px' }}></Modal.Title>
          {/* <AiFillCloseCircle onClick={handleClose} style={{ marginLeft: "190", cursor: "pointer" }} fontSize={40} /> */}
        </Modal.Header>
        <Modal.Body style={{
          marginTop: '-27px',
          backgroundColor: '#fffbfb',
          borderRadius: '30px 30px 0px 0px',
          marginBottom: '20px',



        }}>
          <div className='col-lg-12'>
            <div className="container">
              <div className='row'>

                <h3 style={{ marginTop: '20px', marginBottom: '20px', }}>Let’s dive a little further</h3>
                <p style={{
                  MARGINTOP: '10PX',
                  fontWeight: '100',
                  color: '#333352',
                }}>
                  Most of us have been surrogates ourselves and are so excited to get you started <br />on your surrogacy journey!

                  <p style={{ padding: '5px', marginTop: '10px' }}>  ✔️ Now let’s get into more detail about you and your partner’s personal history</p>
                  <p style={{ padding: '5px' }}>  ✔️ Heads up, you may need to go into your memory bank for some of these questions</p>
                  <p style={{ padding: '5px' }}>  ✔️ This section could take you 2-10 minutes depending on your history</p>




                </p>
              </div>
            </div>
          </div>

          {/* ------- */}
        </Modal.Body>

        <Modal.Footer style={{}}>
          <Button
            className="btn btn-primary"
            onClick={schooldiploma}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Let’s go!
          </Button>
          <Button
            className="btn btn-primary"
            onClick={pback1}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Close
          </Button>
          {/* <Button variant="primary" onClick={addcustomer}>
                        Add
                    </Button> */}
        </Modal.Footer>
      </Modal>
      {/* Do you have a high school diploma or GED? */}

      <Modal
        show={pshow2}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handleClosep2}
        style={{
          backgroundColor: '#ffffff87',
          borderRadius: '20px 20px 10px 10px',


        }}

      >
        {/* <Modal.Header closeButton> */}
        <Modal.Header style={{
          backgroundImage: 'url(/mt-demo/109600/109604/mt-content/uploads/2020/07/8.jpeg)',
          height: '150px',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',



        }}>
          {/* <i className='fa fa-close'>baloch</i>
                    <AiFillCloseCircle fontSize={20} /> */}
          <Modal.Title style={{ fontSize: '20px' }}></Modal.Title>
          {/* <AiFillCloseCircle onClick={handleClose} style={{ marginLeft: "190", cursor: "pointer" }} fontSize={40} /> */}
        </Modal.Header>
        <Modal.Body style={{
          marginTop: '-27px',
          backgroundColor: '#fffbfb',
          borderRadius: '30px 30px 0px 0px',
          marginBottom: '20px',



        }}>
          <div className='col-lg-12'>
            <div className="container">
              <div className='row'>
                <div className='col-lg-10'>
                  <h3 style={{ marginTop: '20px', marginBottom: '20px' }}>Do you have a high school diploma or GED?</h3>

                </div>
                <div className='col-lg-2'>
                  <p style={{ marginTop: '20px', fontSize: '15px', color: '#d8352f' }} onClick={applicable}>Skip ≫</p>
                </div>
                <div className='col-lg-6'>
                  <div className='row'>
                    
                  

                    <div className='col-lg-3 col-sm-2 col-xs-2 d-flex justify-content-start'>


                      <input type="radio"  id="yes" name="fav_language" className='form-control' value='yes'
                      checked={high_school_diploma_or_ged === 'yes'}
                      
                                         onChange={(e) => {
                          sethigh_school_diploma_or_ged(e.target.value);
                        }}
                       

                      />
                      <label for="html" style={{ fontSize: '15px', marginLeft: '5px' }}>Yes</label>

                    </div>
                    <div className='col-lg-3 col-sm-2 col-xs-2 d-flex justify-content-start'>


                      <input type="radio"  id="No" name="fav_language" className='form-control' value="no"
                       checked={high_school_diploma_or_ged === 'no'}
                        onChange={(e) => {
                          sethigh_school_diploma_or_ged(e.target.value);
                        }}
                      

                      />
                      <label for="html" style={{ fontSize: '15px', marginLeft: '5px' }}>No</label>

                    </div>
                  </div>
                </div>

                {/* <div className='col-lg-6' style={{marginTop:'10px'}}>
            
            <label>Weight (pounds)</label>
            <input type='number' className='form-control' style={{height:'40px',}}/>
          </div>
          <div className='col-lg-6'  style={{marginTop:'10px'}}>
            
            <label>BMI</label>
            <input type='number' className='form-control' style={{height:'40px',}}/>
          </div> */}


              </div>
            </div>
          </div>

          {/* ------- */}
        </Modal.Body>

        <Modal.Footer style={{}}>
          <Button
            className="btn btn-primary"
            onClick={backp2}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Back
          </Button>

          {
            high_school_diploma_or_ged !== null?
            <Button
            className="btn btn-primary"
            onClick={applicable}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Next
          </Button>:
          <Button
          className="btn btn-secondary"
          // onClick={transportations}
          style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
        >
          Next
        </Button>
          }

          {/* <Button
          className="btn btn-secondary"
          onClick={applicable}
          style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
        >
          Next
        </Button> */}
          
          <Button
            className="btn btn-primary"
            onClick={handleClosep2}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Close
          </Button>
          {/* <Button variant="primary" onClick={addcustomer}>
                        Add
                    </Button> */}
        </Modal.Footer>
      </Modal>


      {/* Have you or your partner (if applicable) ever been involved in any of the following: */}

      <Modal
        show={pshow3}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handleClosep3}
        style={{
          backgroundColor: '#ffffff87',
          borderRadius: '20px 20px 10px 10px',


        }}

      >
        {/* <Modal.Header closeButton> */}
        <Modal.Header style={{
          backgroundImage: 'url(/mt-demo/109600/109604/mt-content/uploads/2020/07/8.jpeg)',
          height: '150px',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',



        }}>
          {/* <i className='fa fa-close'>baloch</i>
                    <AiFillCloseCircle fontSize={20} /> */}
          <Modal.Title style={{ fontSize: '20px' }}></Modal.Title>
          {/* <AiFillCloseCircle onClick={handleClose} style={{ marginLeft: "190", cursor: "pointer" }} fontSize={40} /> */}
        </Modal.Header>
        <Modal.Body style={{
          marginTop: '-27px',
          backgroundColor: '#fffbfb',
          borderRadius: '30px 30px 0px 0px',
          marginBottom: '20px',



        }}>
          <div className='col-lg-12'>
            <div className="container">
              <div className='row'>
                <div className='col-lg-10'>
                  <h3 style={{ marginTop: '20px', marginBottom: '20px' }}>Have you or your partner (if applicable) 
                  ever been involved in any of the following:</h3>

                </div>
                <div className='col-lg-2'>
                  <p style={{ marginTop: '20px', fontSize: '15px', color: '#d8352f' }} onClick={transportations}>Skip ≫</p>
                </div>
                <div className='col-lg-6'>
                  <div className='row'>
                  <div className='col-lg-12'>
                    <p style={{marginBottom:'10px',fontWeight:'100', fontSize:'17px'}}>
                    Filed bankruptcy</p>
                    </div>
                   
                  
                  

                    <div className='col-lg-3 col-sm-2 col-xs-2 d-flex justify-content-start' style={{marginTop:'10px'}}>


                      <input type="radio"  id="No" name="bankruptcy" className='form-control' value='No'
                      checked={bankruptcy === 'No'}
                      
                                         onChange={(e) => {
                          setbankruptcy(e.target.value);
                        }}
                       

                      />
                      <label for="html" style={{ fontSize: '15px', marginLeft: '5px' }}>No</label>

                    </div>
                    <div className='col-lg-4 col-sm-2 col-xs-2 d-flex justify-content-start' style={{marginTop:'10px'}}>


                      <input type="radio"  id="Myself" name="bankruptcy" className='form-control' value="Myself"
                       checked={bankruptcy === 'Myself'}
                        onChange={(e) => {
                          setbankruptcy(e.target.value);
                        }}
                      

                      />
                      <label for="html" style={{ fontSize: '15px', marginLeft: 'px' }}>Myself</label>

                    </div>
                  </div>
                </div>
                <div className='col-lg-6'></div>
                <div className='col-lg-6' style={{marginTop:'20px'}}>
                  <div className='row'>
                  <div className='col-lg-12'>
                    <p style={{marginBottom:'10px',fontWeight:'100', fontSize:'17px'}}>
                    Filed for divorce or legal separation</p>
                    </div>
                   
                  
                  

                    <div className='col-lg-3 col-sm-2 col-xs-2 d-flex justify-content-start' style={{marginTop:'10px'}}>


                      <input type="radio"  id="No" name="divorce_or_legal_separation" className='form-control' value='No'
                      checked={divorce_or_legal_separation === 'No'}
                      
                                         onChange={(e) => {
                          setdivorce_or_legal_separation(e.target.value);
                        }}
                       

                      />
                      <label for="html" style={{ fontSize: '15px', marginLeft: '5px' }}>No</label>

                    </div>
                    <div className='col-lg-4 col-sm-2 col-xs-2 d-flex justify-content-start' style={{marginTop:'10px'}}>


                      <input type="radio"  id="Myself" name="divorce_or_legal_separation" className='form-control' value="Myself"
                       checked={divorce_or_legal_separation === 'Myself'}
                        onChange={(e) => {
                          setdivorce_or_legal_separation(e.target.value);
                        }}
                      

                      />
                      <label for="html" style={{ fontSize: '15px', marginLeft: 'px' }}>Myself</label>

                    </div>
                  </div>
                </div>
                <div className='col-lg-6'></div>
                <div className='col-lg-6' style={{marginTop:'20px'}}>
                  <div className='row'>
                  <div className='col-lg-12'>
                    <p style={{marginBottom:'10px',fontWeight:'100', fontSize:'17px'}}>
                    Been arrested</p>
                    </div>
                   
                  
                  

                    <div className='col-lg-3 col-sm-2 col-xs-2 d-flex justify-content-start' style={{marginTop:'10px'}}>


                      <input type="radio"  id="No" name="been_arrested" className='form-control' value='No'
                      checked={been_arrested === 'No'}
                      
                                         onChange={(e) => {
                          setbeen_arrested(e.target.value);
                        }}
                       

                      />
                      <label for="html" style={{ fontSize: '15px', marginLeft: '5px' }}>No</label>

                    </div>
                    <div className='col-lg-4 col-sm-2 col-xs-2 d-flex justify-content-start' style={{marginTop:'10px'}}>


                      <input type="radio"  id="Myself" name="been_arrested" className='form-control' value="Myself"
                       checked={been_arrested === 'Myself'}
                        onChange={(e) => {
                          setbeen_arrested(e.target.value);
                        }}
                      

                      />
                      <label for="html" style={{ fontSize: '15px', marginLeft: 'px' }}>Myself</label>

                    </div>
                  </div>
                </div>
                <div className='col-lg-6'></div>
                <div className='col-lg-6' style={{marginTop:'20px'}}>
                  <div className='row'>
                  <div className='col-lg-12'>
                    <p style={{marginBottom:'10px',fontWeight:'100', fontSize:'17px'}}>
                    Been charged with a DUI</p>
                    </div>
                   
                  
                  

                    <div className='col-lg-3 col-sm-2 col-xs-2 d-flex justify-content-start' style={{marginTop:'10px'}}>


                      <input type="radio"  id="No" name="been_charged_with_a_dui" className='form-control' value='No'
                      checked={been_charged_with_a_dui === 'No'}
                      
                                         onChange={(e) => {
                          setbeen_charged_with_a_dui(e.target.value);
                        }}
                       

                      />
                      <label for="html" style={{ fontSize: '15px', marginLeft: '5px' }}>No</label>

                    </div>
                    <div className='col-lg-4 col-sm-2 col-xs-2 d-flex justify-content-start' style={{marginTop:'10px'}}>


                      <input type="radio"  id="Myself" name="been_charged_with_a_dui" className='form-control' value="Myself"
                       checked={been_charged_with_a_dui === 'Myself'}
                        onChange={(e) => {
                          setbeen_charged_with_a_dui(e.target.value);
                        }}
                      

                      />
                      <label for="html" style={{ fontSize: '15px', marginLeft: 'px' }}>Myself</label>

                    </div>
                  </div>
                </div>
                <div className='col-lg-6'></div>
                <div className='col-lg-6' style={{marginTop:'20px'}}>
                  <div className='row'>
                  <div className='col-lg-12'>
                    <p style={{marginBottom:'10px',fontWeight:'100', fontSize:'17px'}}>
                    Investigated by or had conversations with a government child protective agency</p>
                    </div>
                   
                  
                  

                    <div className='col-lg-3 col-sm-2 col-xs-2 d-flex justify-content-start' style={{marginTop:'10px'}}>


                      <input type="radio"  id="No" name="government_child_protective_agency" className='form-control' value='No'
                      checked={government_child_protective_agency === 'No'}
                      
                                         onChange={(e) => {
                          setgovernment_child_protective_agency(e.target.value);
                        }}
                       

                      />
                      <label for="html" style={{ fontSize: '15px', marginLeft: '5px' }}>No</label>

                    </div>
                    <div className='col-lg-4 col-sm-2 col-xs-2 d-flex justify-content-start' style={{marginTop:'10px'}}>


                      <input type="radio"  id="Myself" name="government_child_protective_agency" className='form-control' value="Myself"
                       checked={government_child_protective_agency === 'Myself'}
                        onChange={(e) => {
                          setgovernment_child_protective_agency(e.target.value);
                        }}
                      

                      />
                      <label for="html" style={{ fontSize: '15px', marginLeft: 'px' }}>Myself</label>

                    </div>
                  </div>
                </div>
                <div className='col-lg-6'></div>
                <div className='col-lg-6' style={{marginTop:'20px'}}>
                  <div className='row'>
                  <div className='col-lg-12'>
                    <p style={{marginBottom:'10px',fontWeight:'100', fontSize:'17px'}}>
                    Placed a child up for adoption</p>
                    </div>
                   
                  
                  

                    <div className='col-lg-3 col-sm-2 col-xs-2 d-flex justify-content-start' style={{marginTop:'10px'}}>


                      <input type="radio"  id="No" name="adoption" className='form-control' value='No'
                      checked={adoption === 'No'}
                      
                                         onChange={(e) => {
                          setadoption(e.target.value);
                        }}
                       

                      />
                      <label for="html" style={{ fontSize: '15px', marginLeft: '5px' }}>No</label>

                    </div>
                    <div className='col-lg-4 col-sm-2 col-xs-2 d-flex justify-content-start' style={{marginTop:'10px'}}>


                      <input type="radio"  id="Myself" name="adoption" className='form-control' value="Myself"
                       checked={adoption === 'Myself'}
                        onChange={(e) => {
                          setadoption(e.target.value);
                        }}
                      

                      />
                      <label for="html" style={{ fontSize: '15px', marginLeft: 'px' }}>Myself</label>

                    </div>
                  </div>
                </div>
                <div className='col-lg-6'></div>
                <div className='col-lg-6' style={{marginTop:'20px'}}>
                  <div className='row'>
                  <div className='col-lg-12'>
                    <p style={{marginBottom:'10px',fontWeight:'100', fontSize:'17px'}}>
                    Been in a substance abuse program</p>
                    </div>
                   
                  
                  

                    <div className='col-lg-3 col-sm-2 col-xs-2 d-flex justify-content-start' style={{marginTop:'10px'}}>


                      <input type="radio"  id="No" name="substance_abuse_program " className='form-control' value='No'
                      checked={substance_abuse_program === 'No'}
                      
                                         onChange={(e) => {
                          setsubstance_abuse_program(e.target.value);
                        }}
                       

                      />
                      <label for="html" style={{ fontSize: '15px', marginLeft: '5px' }}>No</label>

                    </div>
                    <div className='col-lg-4 col-sm-2 col-xs-2 d-flex justify-content-start' style={{marginTop:'10px'}}>


                      <input type="radio"  id="Myself" name="substance_abuse_program" className='form-control' value="Myself"
                       checked={substance_abuse_program === 'Myself'}
                        onChange={(e) => {
                          setsubstance_abuse_program(e.target.value);
                        }}
                      

                      />
                      <label for="html" style={{ fontSize: '15px', marginLeft: 'px' }}>Myself</label>

                    </div>
                  </div>
                </div>
                <div className='col-lg-6'></div>
                <div className='col-lg-6' style={{marginTop:'20px'}}>
                  <div className='row'>
                  <div className='col-lg-12'>
                    <p style={{marginBottom:'10px',fontWeight:'100', fontSize:'17px'}}>
                    Been charged with domestic violence</p>
                    </div>
                   
                  
                  

                    <div className='col-lg-3 col-sm-2 col-xs-2 d-flex justify-content-start' style={{marginTop:'10px'}}>


                      <input type="radio"  id="No" name="domestic_violence" className='form-control' value='No'
                      checked={domestic_violence === 'No'}
                      
                                         onChange={(e) => {
                          setdomestic_violence(e.target.value);
                        }}
                       

                      />
                      <label for="html" style={{ fontSize: '15px', marginLeft: '5px' }}>No</label>

                    </div>
                    <div className='col-lg-4 col-sm-2 col-xs-2 d-flex justify-content-start' style={{marginTop:'10px'}}>


                      <input type="radio"  id="Myself" name="domestic_violence" className='form-control' value="Myself"
                       checked={domestic_violence === 'Myself'}
                        onChange={(e) => {
                          setdomestic_violence(e.target.value);
                        }}
                      

                      />
                      <label for="html" style={{ fontSize: '15px', marginLeft: 'px' }}>Myself</label>

                    </div>
                  </div>
                </div>
                <div className='col-lg-6'></div>
                <div className='col-lg-6' style={{marginTop:'20px'}}>
                  <div className='row'>
                  <div className='col-lg-12'>
                    <p style={{marginBottom:'10px',fontWeight:'100', fontSize:'17px'}}>
                    Been involved with a lawsuit</p>
                    </div>
                   
                  
                  

                    <div className='col-lg-3 col-sm-2 col-xs-2 d-flex justify-content-start' style={{marginTop:'10px'}}>


                      <input type="radio"  id="No" name="involved_with_a_lawsuit" className='form-control' value='No'
                      checked={involved_with_a_lawsuit === 'No'}
                      
                                         onChange={(e) => {
                          setinvolved_with_a_lawsuit(e.target.value);
                        }}
                       

                      />
                      <label for="html" style={{ fontSize: '15px', marginLeft: '5px' }}>No</label>

                    </div>
                    <div className='col-lg-4 col-sm-2 col-xs-2 d-flex justify-content-start' style={{marginTop:'10px'}}>


                      <input type="radio"  id="Myself" name="involved_with_a_lawsuit" className='form-control' value="Myself"
                       checked={involved_with_a_lawsuit === 'Myself'}
                        onChange={(e) => {
                          setinvolved_with_a_lawsuit(e.target.value);
                        }}
                      

                      />
                      <label for="html" style={{ fontSize: '15px', marginLeft: 'px' }}>Myself</label>

                    </div>
                  </div>
                </div>
                <div className='col-lg-6'></div>
                <div className='col-lg-6' style={{marginTop:'20px'}}>
                  <div className='row'>
                  <div className='col-lg-12'>
                    <p style={{marginBottom:'10px',fontWeight:'100', fontSize:'17px'}}>
                    Been past due on child support</p>
                    </div>
                   
                  
                  

                    <div className='col-lg-3 col-sm-2 col-xs-2 d-flex justify-content-start' style={{marginTop:'10px'}}>


                      <input type="radio"  id="No" name="past_due_on_child_support" className='form-control' value='No'
                      checked={past_due_on_child_support === 'No'}
                      
                                         onChange={(e) => {
                          setpast_due_on_child_support(e.target.value);
                        }}
                       

                      />
                      <label for="html" style={{ fontSize: '15px', marginLeft: '5px' }}>No</label>

                    </div>
                    <div className='col-lg-4 col-sm-2 col-xs-2 d-flex justify-content-start' style={{marginTop:'10px'}}>


                      <input type="radio"  id="Myself" name="past_due_on_child_support" className='form-control' value="Myself"
                       checked={past_due_on_child_support === 'Myself'}
                        onChange={(e) => {
                          setpast_due_on_child_support(e.target.value);
                        }}
                      

                      />
                      <label for="html" style={{ fontSize: '15px', marginLeft: 'px' }}>Myself</label>

                    </div>
                  </div>
                </div>
                <div className='col-lg-6'></div>
                <div className='col-lg-6' style={{marginTop:'20px'}}>
                  <div className='row'>
                  <div className='col-lg-12'>
                    <p style={{marginBottom:'10px',fontWeight:'100', fontSize:'17px'}}>
                    Lost custody of any of your children</p>
                    </div>
                   
                  
                  

                    <div className='col-lg-3 col-sm-2 col-xs-2 d-flex justify-content-start' style={{marginTop:'10px'}}>


                      <input type="radio"  id="No" name="fav_language" className='form-control' value='No'
                      checked={lost_custody_of_any_of_your_children === 'No'}
                      
                                         onChange={(e) => {
                          setlost_custody_of_any_of_your_children(e.target.value);
                        }}
                       

                      />
                      <label for="html" style={{ fontSize: '15px', marginLeft: '5px' }}>No</label>

                    </div>
                    <div className='col-lg-4 col-sm-2 col-xs-2 d-flex justify-content-start' style={{marginTop:'10px'}}>


                      <input type="radio"  id="Myself" name="fav_language" className='form-control' value="Myself"
                       checked={lost_custody_of_any_of_your_children === 'Myself'}
                        onChange={(e) => {
                          setlost_custody_of_any_of_your_children(e.target.value);
                        }}
                      

                      />
                      <label for="html" style={{ fontSize: '15px', marginLeft: 'px' }}>Myself</label>

                    </div>
                  </div>
                </div>
               

                {/* <div className='col-lg-6' style={{marginTop:'10px'}}>
            
            <label>Weight (pounds)</label>
            <input type='number' className='form-control' style={{height:'40px',}}/>
          </div>
          <div className='col-lg-6'  style={{marginTop:'10px'}}>
            
            <label>BMI</label>
            <input type='number' className='form-control' style={{height:'40px',}}/>
          </div> */}


              </div>
            </div>
          </div>

          {/* ------- */}
        </Modal.Body>

        <Modal.Footer style={{}}>
          <Button
            className="btn btn-primary"
            onClick={backp3}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Back
          </Button>

          {
            bankruptcy !== null &&  divorce_or_legal_separation !== null  &&  been_arrested !== null &&  been_charged_with_a_dui !== null 
            &&  government_child_protective_agency !== null  &&  adoption !== null &&  substance_abuse_program !== null  &&  domestic_violence !== null 
            &&  involved_with_a_lawsuit !== null &&  past_due_on_child_support !== null  &&  lost_custody_of_any_of_your_children !== null 
            
            
            ?
            <Button
            className="btn btn-primary"
            onClick={onSubmitph}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            {loder !== false? 
                      <Spinner animation="border"  />:'Finish'  
                      
                     }
            
          </Button>:
          <Button
          className="btn btn-secondary"
          // onClick={transportations}
          style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
        >
          Finish
        </Button>
          }

          {/* <Button
          className="btn btn-secondary"
          onClick={onSubmitph}
          style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
        >
          Finish
        </Button> */}
          
          <Button
            className="btn btn-primary"
            onClick={handleClosep3}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Close
          </Button>
          {/* <Button variant="primary" onClick={addcustomer}>
                        Add
                    </Button> */}
        </Modal.Footer>
      </Modal>
      


      


      <Navbar expand="lg" className="bg-body-tertiary" style={{
        height: '80px',
        backgroundColor: '#ebebeb',


      }}>
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="mt-demo/109600/109604/mt-content/uploads/2020/07/logos.png"

              className="d-inline-block align-top"
              alt="React Bootstrap logo"
              style={{
                height: '65px',
                width: '84px',

              }}
            />

          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" style={{marginLeft:'800px'}}>
            <Nav className="me-auto">
              {/* <Nav.Link style={{fontSize:'16px', color:'black'}} >Surrogate Application</Nav.Link> */}
              {/* <Nav.Link href="#link">Link</Nav.Link> */}
              <NavDropdown title={fname} id="basic-nav-dropdown" style={{ fontSize: '16px', color: 'black' }}>
                <NavDropdown.Item href="#action/3.1" onClick={logout} style={{backgroundColor: '#ebebeb', fontSize:'15px'}}>Logout</NavDropdown.Item>
                {/* <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
              </NavDropdown>


            </Nav>
            

          </Navbar.Collapse>
        </Container>

      </Navbar>
      

      <div className='col-lg-12' >
        <div className='container'>
          <h1 style={{ marginTop: '100px' }}>Surrogate Application</h1>
          <p style={{ marginTop: '10px', fontSize: '15px', marginBottom: '30PX' }}>Nice to see you Malove! Welcome to the next step of your surrogacy journey.
            You will need to complete all sections of the application below to become a surrogate with ISC.
            After all sections are marked as complete, please click the “Finish and submit” button at the bottom
            of the page to complete your application. We will use the information from your application to build and
            create a profile that will be shared with intended parents.</p>
          <div className='row'>
            <div className='col-lg-12' style={{ marginBottom: '50px', }}>
              <div className="card" style={{ padding: '20px', borderRadius: '20px 20px 0px 0px', boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }} onClick={g1}>
                <div className="card-body">
                  <div className='row'>
                    <div className='col-lg-6'>
                      <h1 style={{ fontSize: '20px' }}>General Information</h1>
                    </div>
                    <div className='col-lg-2 d-flex flex-row'>
                      <img src="/mt-demo/109600/109604/mt-content/uploads/2020/07/list.png" alt="hospital"
                        style={{ width: '25px' }}
                      />
                      <p style={{ marginLeft: '10px' }}>4/19</p>
                    </div>
                    <div className='col-lg-2 d-flex flex-row'>
                      {/* <img src="/mt-demo/109600/109604/mt-content/uploads/2020/07/gears.png"  alt="hospital"
        style={{width:'20px'}}
        /> */}
                      <p style={{ marginLeft: '10px', backgroundColor: '#f1f1f1', borderRadius: '5px' }}>in Progress</p>
                    </div>

                    <div className='col-lg-2 d-flex flex-row'>
                      <img src="/mt-demo/109600/109604/mt-content/uploads/2020/07/clock.png" alt="hospital"
                        style={{
                          width: '25px', backgroundColor: '#f1f1f1',
                          borderRadius: '21px'
                        }}
                      />
                      {/* <p style={{marginLeft:'10px', backgroundColor:'#f1f1f1', borderRadius:'5px'}}>in Progress</p> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="card" style={{ padding: '20px', boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }} onClick={littlefurther}>
                <div className="card-body">
                  <div className='row'>
                    <div className='col-lg-6'>
                      <h1 style={{ fontSize: '20px' }}>Personal History</h1>
                    </div>
                    <div className='col-lg-2 d-flex flex-row'>
                      <img src="/mt-demo/109600/109604/mt-content/uploads/2020/07/list.png" alt="hospital"
                        style={{ width: '25px' }}
                      />
                      <p style={{ marginLeft: '10px' }}>0/2</p>
                    </div>
                    <div className='col-lg-2 d-flex flex-row'>
                      {/* <img src="/mt-demo/109600/109604/mt-content/uploads/2020/07/gears.png"  alt="hospital"
        style={{width:'20px'}}
        /> */}
                      <p style={{ marginLeft: '10px', backgroundColor: '#f1f1f1', borderRadius: '5px' }}>in Progress</p>
                    </div>

                    <div className='col-lg-2 d-flex flex-row'>
                      <img src="/mt-demo/109600/109604/mt-content/uploads/2020/07/clock.png" alt="hospital"
                        style={{
                          width: '25px', backgroundColor: '#f1f1f1',
                          borderRadius: '21px'
                        }}
                      />
                      {/* <p style={{marginLeft:'10px', backgroundColor:'#f1f1f1', borderRadius:'5px'}}>in Progress</p> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="card" style={{ padding: '20px', boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}>
                <div className="card-body">
                  <div className='row'>
                    <div className='col-lg-6'>
                      <h1 style={{ fontSize: '20px' }}>Employment and Health Insurance</h1>
                    </div>
                    <div className='col-lg-2 d-flex flex-row'>
                      <img src="/mt-demo/109600/109604/mt-content/uploads/2020/07/list.png" alt="hospital"
                        style={{ width: '25px' }}
                      />
                      <p style={{ marginLeft: '10px' }}>0/2</p>
                    </div>
                    <div className='col-lg-2 d-flex flex-row'>
                      {/* <img src="/mt-demo/109600/109604/mt-content/uploads/2020/07/gears.png"  alt="hospital"
        style={{width:'20px'}}
        /> */}
                      <p style={{ marginLeft: '10px', backgroundColor: '#f1f1f1', borderRadius: '5px' }}>in Progress</p>
                    </div>

                    <div className='col-lg-2 d-flex flex-row'>
                      <img src="/mt-demo/109600/109604/mt-content/uploads/2020/07/clock.png" alt="hospital"
                        style={{
                          width: '25px', backgroundColor: '#f1f1f1',
                          borderRadius: '21px',
                        }}
                      />
                      {/* <p style={{marginLeft:'10px', backgroundColor:'#f1f1f1', borderRadius:'5px'}}>in Progress</p> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="card" style={{ padding: '20px', boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}>
                <div className="card-body">
                  <div className='row'>
                    <div className='col-lg-6'>
                      <h1 style={{ fontSize: '20px' }}>Health Information</h1>
                    </div>
                    <div className='col-lg-2 d-flex flex-row'>
                      <img src="/mt-demo/109600/109604/mt-content/uploads/2020/07/list.png" alt="hospital"
                        style={{ width: '25px' }}
                      />
                      <p style={{ marginLeft: '10px' }}>0/2</p>
                    </div>
                    <div className='col-lg-2 d-flex flex-row'>
                      {/* <img src="/mt-demo/109600/109604/mt-content/uploads/2020/07/gears.png"  alt="hospital"
        style={{width:'20px'}}
        /> */}
                      <p style={{ marginLeft: '10px', backgroundColor: '#f1f1f1', borderRadius: '5px' }}>in Progress</p>
                    </div>

                    <div className='col-lg-2 d-flex flex-row'>
                      <img src="/mt-demo/109600/109604/mt-content/uploads/2020/07/clock.png" alt="hospital"
                        style={{
                          width: '25px', backgroundColor: '#f1f1f1',
                          borderRadius: '21px',
                        }}
                      />
                      {/* <p style={{marginLeft:'10px', backgroundColor:'#f1f1f1', borderRadius:'5px'}}>in Progress</p> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="card" style={{ padding: '20px', boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}>
                <div className="card-body">
                  <div className='row'>
                    <div className='col-lg-6'>
                      <h1 style={{ fontSize: '20px' }}>Pregnancy History</h1>
                    </div>
                    <div className='col-lg-2 d-flex flex-row'>
                      <img src="/mt-demo/109600/109604/mt-content/uploads/2020/07/list.png" alt="hospital"
                        style={{ width: '25px' }}
                      />
                      <p style={{ marginLeft: '10px' }}>0/2</p>
                    </div>
                    <div className='col-lg-2 d-flex flex-row'>
                      {/* <img src="/mt-demo/109600/109604/mt-content/uploads/2020/07/gears.png"  alt="hospital"
        style={{width:'20px'}}
        /> */}
                      <p style={{ marginLeft: '10px', backgroundColor: '#f1f1f1', borderRadius: '5px' }}>in Progress</p>
                    </div>

                    <div className='col-lg-2 d-flex flex-row'>
                      <img src="/mt-demo/109600/109604/mt-content/uploads/2020/07/clock.png" alt="hospital"
                        style={{
                          width: '25px', backgroundColor: '#f1f1f1',
                          borderRadius: '21px',
                        }}
                      />
                      {/* <p style={{marginLeft:'10px', backgroundColor:'#f1f1f1', borderRadius:'5px'}}>in Progress</p> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="card" style={{ padding: '20px', boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}>
                <div className="card-body">
                  <div className='row'>
                    <div className='col-lg-6'>
                      <h1 style={{ fontSize: '20px' }}>Deliveries</h1>
                    </div>
                    <div className='col-lg-2 d-flex flex-row'>
                      <img src="/mt-demo/109600/109604/mt-content/uploads/2020/07/list.png" alt="hospital"
                        style={{ width: '25px' }}
                      />
                      <p style={{ marginLeft: '10px' }}>0/2</p>
                    </div>
                    <div className='col-lg-2 d-flex flex-row'>
                      {/* <img src="/mt-demo/109600/109604/mt-content/uploads/2020/07/gears.png"  alt="hospital"
        style={{width:'20px'}}
        /> */}
                      <p style={{ marginLeft: '10px', backgroundColor: '#f1f1f1', borderRadius: '5px' }}>in Progress</p>
                    </div>

                    <div className='col-lg-2 d-flex flex-row'>
                      <img src="/mt-demo/109600/109604/mt-content/uploads/2020/07/clock.png" alt="hospital"
                        style={{
                          width: '25px', backgroundColor: '#f1f1f1',
                          borderRadius: '21px',
                        }}
                      />
                      {/* <p style={{marginLeft:'10px', backgroundColor:'#f1f1f1', borderRadius:'5px'}}>in Progress</p> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="card" style={{ padding: '20px', boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}>
                <div className="card-body">
                  <div className='row'>
                    <div className='col-lg-6'>
                      <h1 style={{ fontSize: '20px' }}>About You</h1>
                    </div>
                    <div className='col-lg-2 d-flex flex-row'>
                      <img src="/mt-demo/109600/109604/mt-content/uploads/2020/07/list.png" alt="hospital"
                        style={{ width: '25px' }}
                      />
                      <p style={{ marginLeft: '10px' }}>0/2</p>
                    </div>
                    <div className='col-lg-2 d-flex flex-row'>
                      {/* <img src="/mt-demo/109600/109604/mt-content/uploads/2020/07/gears.png"  alt="hospital"
        style={{width:'20px'}}
        /> */}
                      <p style={{ marginLeft: '10px', backgroundColor: '#f1f1f1', borderRadius: '5px' }}>in Progress</p>
                    </div>

                    <div className='col-lg-2 d-flex flex-row'>
                      <img src="/mt-demo/109600/109604/mt-content/uploads/2020/07/clock.png" alt="hospital"
                        style={{
                          width: '25px', backgroundColor: '#f1f1f1',
                          borderRadius: '21px',
                        }}
                      />
                      {/* <p style={{marginLeft:'10px', backgroundColor:'#f1f1f1', borderRadius:'5px'}}>in Progress</p> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="card" style={{ padding: '20px', boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}>
                <div className="card-body">
                  <div className='row'>
                    <div className='col-lg-6'>
                      <h1 style={{ fontSize: '20px' }}>Surrogacy Journey</h1>
                    </div>
                    <div className='col-lg-2 d-flex flex-row'>
                      <img src="/mt-demo/109600/109604/mt-content/uploads/2020/07/list.png" alt="hospital"
                        style={{ width: '25px' }}
                      />
                      <p style={{ marginLeft: '10px' }}>0/2</p>
                    </div>
                    <div className='col-lg-2 d-flex flex-row'>
                      {/* <img src="/mt-demo/109600/109604/mt-content/uploads/2020/07/gears.png"  alt="hospital"
        style={{width:'20px'}}
        /> */}
                      <p style={{ marginLeft: '10px', backgroundColor: '#f1f1f1', borderRadius: '5px' }}>in Progress</p>
                    </div>

                    <div className='col-lg-2 d-flex flex-row'>
                      <img src="/mt-demo/109600/109604/mt-content/uploads/2020/07/clock.png" alt="hospital"
                        style={{
                          width: '25px', backgroundColor: '#f1f1f1',
                          borderRadius: '21px',
                        }}
                      />
                      {/* <p style={{marginLeft:'10px', backgroundColor:'#f1f1f1', borderRadius:'5px'}}>in Progress</p> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="card" style={{ padding: '20px', borderRadius: '0px 0px 20px 20px', boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}>
                <div className="card-body">
                  <div className='row'>
                    <div className='col-lg-6'>
                      <h1 style={{ fontSize: '20px' }}>Signature Pages and Disclosures</h1>
                    </div>
                    <div className='col-lg-2 d-flex flex-row'>
                      <img src="/mt-demo/109600/109604/mt-content/uploads/2020/07/list.png" alt="hospital"
                        style={{ width: '25px' }}
                      />
                      <p style={{ marginLeft: '10px' }}>0/2</p>
                    </div>
                    <div className='col-lg-2 d-flex flex-row'>
                      {/* <img src="/mt-demo/109600/109604/mt-content/uploads/2020/07/gears.png"  alt="hospital"
        style={{width:'20px'}}
        /> */}
                      <p style={{ marginLeft: '10px', backgroundColor: '#f1f1f1', borderRadius: '5px' }}>in Progress</p>
                    </div>

                    <div className='col-lg-2 d-flex flex-row'>
                      <img src="/mt-demo/109600/109604/mt-content/uploads/2020/07/clock.png" alt="hospital"
                        style={{
                          width: '25px', backgroundColor: '#f1f1f1',
                          borderRadius: '21px',
                        }}
                      />
                      {/* <p style={{marginLeft:'10px', backgroundColor:'#f1f1f1', borderRadius:'5px'}}>in Progress</p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>



          </div>
        </div>


      </div>

    </>
  )
}

export default Surrogateform
