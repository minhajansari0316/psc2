import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { toast } from 'react-toastify'
import { PostApi } from '../Helper/helper'
import BaseUrl from '../baseurl/BaseUrl'
import Spinner from 'react-bootstrap/Spinner';

function Signature() {
    const [loder, setloader] = useState(false);

    const [opinion, setOpinion] = useState(null)
    const [sign, setsign] = useState(null)
    const [sign1, setsign1] = useState(null)
    const [sign2, setsign2] = useState(null)
    const [sign3, setsign3] = useState(null)

    const [token] = useState(localStorage.getItem("token"));

    const Submit = () => {
        setloader(true)
        const formData = new FormData();
        formData.append("medical_record", sign);
        formData.append("criminal_background", sign1);
        formData.append("photo_usage", sign2);
        formData.append("agree_to_provide_additional_information", opinion);
        formData.append("accuracy_provided_information", sign3);




        PostApi(`${BaseUrl.baseUrl}surrogate/signature/disclosure`, formData, token)
            .then((data) => {
                console.log("data=====", data.data.message);


                toast(data.data.message);
                setsigShow5(false)
                setloader(false)


                // statusll("approved")
            })

            .catch((err) => {
                console.log("errr", err.message);
                // setloder(false);
                toast(err.message);
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

    const [sigshow1, setsigShow1] = useState(false);
    const [sigshow2, setsigShow2] = useState(false);
    const [sigshow3, setsigShow3] = useState(false);
    const [sigshow4, setsigShow4] = useState(false);
    const [sigshow5, setsigShow5] = useState(false);


    const signature_p = () => {
        setsigShow1(true);
        // setsigShow2(false);
    }
    const treatmentsig = () => {
        setsigShow3(true);
        setsigShow2(false);
    };
    const treatmentsig1 = () => {
        setsigShow4(true);
        setsigShow3(false);
    };
    const treatmentsig2 = () => {
        setsigShow5(true);
        setsigShow4(false);
    };
    const treatmentsig3 = () => {
        // setsigShow5(true);
        setsigShow5(false);
    };
    const handleClosesig1 = () => {
        setsigShow1(false);
    }
    const handleClosesig2 = () => {
        setsigShow2(false);
    }
    const handleClosesig3 = () => {
        setsigShow3(false);
    }
    const handleClosesig4 = () => {
        setsigShow4(false);
    }
    const handleClosesig5 = () => {
        setsigShow5(false);
    }

    const sig = () => {
        setsigShow2(true);
        setsigShow1(false);
    };
    const sig1 = () => {
        setsigShow3(true);
        setsigShow2(false);
    };
    const sig2 = () => {
        setsigShow4(true);
        setsigShow3(false);
    };
    const sig3 = () => {
        setsigShow5(true);
        setsigShow4(false);
    };

    const sigback = () => {
        setsigShow1(true);
        setsigShow2(false);
    };
    const sigback1 = () => {
        setsigShow2(true);
        setsigShow3(false);
    };
    const sigback2 = () => {
        setsigShow3(true);
        setsigShow4(false);
    };
    const sigback3 = () => {
        setsigShow4(true);
        setsigShow5(false);
    };

    return (
        <>
            {/*Signature Pages and Disclosures*/}
            <Modal
                show={sigshow1}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                // onHide={handleClosesig1}
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

                                <h3 style={{ marginTop: '20px', marginBottom: '10px', }}>This is it Malove, all we need now are your signatures!</h3>
                                <p style={{
                                    MARGINTOP: '10PX',
                                    fontWeight: '100',
                                    color: '#333352',
                                }}>


                                    {/* <p style={{ paddingTop: '10px',  }}>  This section will ask detailed questions about your health and some questions
           may be sensitive. Just know that most of us here
           at ISC have had to answer these questions too and it’s all just a part of the process of becoming a surrogate.</p> */}
                                    <p style={{ padding: '5px' }}>  ✔️ This section is your sign-off on all the legal stuff so please read each statement carefully
                                        as accurate as possible</p>
                                    <p style={{ padding: '5px' }}>  ✔️ It should take you about 5 minutes to complete</p>





                                </p>
                            </div>
                        </div>
                    </div>

                    {/* ------- */}
                </Modal.Body>

                <Modal.Footer style={{}}>
                    <Button
                        className="btn btn-primary"
                        onClick={sig}
                        style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
                    >
                        Lets go
                    </Button>
                    <Button
                        className="btn btn-primary"
                        onClick={handleClosesig1}
                        style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
                    >
                        Close
                    </Button>
                    {/* <Button variant="primary" onClick={addcustomer}>
                Add
            </Button> */}
                </Modal.Footer>
            </Modal>
            {/* 2nd*/}
            <Modal
                show={sigshow2}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                onHide={handleClosesig2}
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
                                    <h3 style={{ marginTop: '20px', marginBottom: '20px' }}>Medical records disclosure</h3>


                                </div>
                                <div className='col-lg-2'>
                                    <p style={{ marginTop: '20px', fontSize: '15px', color: '#d8352f' }} onClick={treatmentsig}>Skip ≫</p>
                                </div>
                                <div className='col-lg-12'>

                                </div>

                                <div className='col-lg-12'>

                                    <label>In order to complete your application and become eligible to become a surrogate you must request your medical records be released to us for distribution to the IVF clinic and to the intended parents if requested.</label>
                                    <label className='mt-3'>
                                        <b>
                                            By typing your name here you have read and agree to the above disclosure
                                        </b>
                                    </label>
                                    <input type='text' className='form-control' style={{ height: '40px', }}
                                        onChange={(e) => {
                                            setsign(e.target.value);
                                        }}
                                        value={sign}



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
                        onClick={sigback}
                        style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
                    >
                        Back
                    </Button>
                    {
                        sign !== null ?
                            <Button
                                className="btn btn-primary"
                                onClick={sig1}
                                style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
                            >

                                Next


                            </Button> :
                            <Button
                                className="btn btn-secondary"
                                // onClick={onSubmit}
                                style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
                            >
                                Next
                            </Button>

                    }


                    <Button
                        className="btn btn-primary"
                        onClick={handleClosesig2}
                        style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
                    >
                        Close
                    </Button>
                    {/* <Button variant="primary" onClick={addcustomer}>
                Add
            </Button> */}
                </Modal.Footer>
            </Modal>
            {/*    3rd  */}
            <Modal
                show={sigshow3}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                onHide={handleClosesig3}
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
                                    <h3 style={{ marginTop: '20px', marginBottom: '20px' }}>Criminal background check disclosure</h3>


                                </div>
                                <div className='col-lg-2'>
                                    <p style={{ marginTop: '20px', fontSize: '15px', color: '#d8352f' }} onClick={treatmentsig1}>Skip ≫</p>
                                </div>
                                <div className='col-lg-12'>

                                </div>

                                <div className='col-lg-12'>

                                    <label>I understand my basic personal information will be sent to a criminal investigator for the purpose of conducting a full criminal background check and I give permission to initiate this background check.

                                    </label>
                                    <label className='mt-3'>
                                        <b>
                                            By typing your name here you have read and agree to the above disclosure

                                        </b>
                                    </label>
                                    <input type='text' className='form-control' style={{ height: '40px', }}
                                        onChange={(e) => {
                                            setsign1(e.target.value);
                                        }}
                                        value={sign1}



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
                        onClick={sigback1}
                        style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
                    >
                        Back
                    </Button>
                    {
                        sign1 !== null ?
                            <Button
                                className="btn btn-primary"
                                onClick={sig2}
                                style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
                            >

                                Next


                            </Button> :
                            <Button
                                className="btn btn-secondary"
                                // onClick={onSubmit}
                                style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
                            >
                                Next
                            </Button>

                    }


                    <Button
                        className="btn btn-primary"
                        onClick={handleClosesig2}
                        style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
                    >
                        Close
                    </Button>
                    {/* <Button variant="primary" onClick={addcustomer}>
                Add
            </Button> */}
                </Modal.Footer>
            </Modal>
            {/*    4th  */}
            <Modal
                show={sigshow4}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                onHide={handleClosesig4}
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
                                    <h3 style={{ marginTop: '20px', marginBottom: '20px' }}>Photo usage disclosure
                                    </h3>


                                </div>
                                <div className='col-lg-2'>
                                    <p style={{ marginTop: '20px', fontSize: '15px', color: '#d8352f' }} onClick={treatmentsig2}>Skip ≫</p>
                                </div>
                                <div className='col-lg-12'>

                                </div>

                                <div className='col-lg-12'>

                                    <label>I agree to allow International Surrogacy Center to share the photos/videos I have provided for my surrogate profile to prospective intended parents for the purpose of matching. I understand that my surrogate profile (including the photos within) will also be shared with relevant surrogacy professionals as necessary to facilitate the surrogacy journey, such as the IVF clinic and mental health professional. I understand the photos/videos I have provided for my surrogate profile will NOT be shared on ISC’s social media or website in order to protect my privacy. International Surrogacy Center respects the privacy of all surrogates and intended parents and does not share photos/videos/posts of anyone without express prior written consent. Surrogates and intended parents may choose to occasionally share photos/videos with ISC staff or tag us within their social media posts, this is completely voluntary and not required

                                    </label>
                                    <label className='mt-3'>
                                        Occasionally ISC hosts events, support group meetings, or ISC staff visit surrogates to celebrate their journey. Pictures or videos may be taken at these events and shared with your intended parents or on our social media to celebrate the journey.
                                    </label>
                                    <label className='mt-3'>
                                        <b>
                                            By typing your name here you have read and agree to the above disclosure


                                        </b>
                                    </label>
                                    <input type='text' className='form-control' style={{ height: '40px', }}
                                        onChange={(e) => {
                                            setsign2(e.target.value);
                                        }}
                                        value={sign2}



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
                        onClick={sigback2}
                        style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
                    >
                        Back
                    </Button>
                    {
                        sign2 !== null ?
                            <Button
                                className="btn btn-primary"
                                onClick={sig3}
                                style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
                            >

                                Next


                            </Button> :
                            <Button
                                className="btn btn-secondary"
                                // onClick={onSubmit}
                                style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
                            >
                                Next
                            </Button>

                    }


                    <Button
                        className="btn btn-primary"
                        onClick={handleClosesig2}
                        style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
                    >
                        Close
                    </Button>
                    {/* <Button variant="primary" onClick={addcustomer}>
                Add
            </Button> */}
                </Modal.Footer>
            </Modal>
            {/*    5th  */}
            <Modal
                show={sigshow5}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                onHide={handleClosesig5}
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
                                    <h3 style={{ marginTop: '20px', marginBottom: '20px' }}>It is extremely important that the information you submit is accurate, please read and accept the following statement before submitting your application
                                    </h3>


                                </div>
                                <div className='col-lg-2'>
                                    <p style={{ marginTop: '20px', fontSize: '15px', color: '#d8352f' }} onClick={treatmentsig3}>Skip ≫</p>
                                </div>
                                <div className='col-lg-12'>

                                </div>

                                <div className='col-lg-12'>

                                    <label>I agree that the information I have provided is true, complete, and accurate. I have not withheld information and have answered questions to the best of my ability. I understand that this information will be used to determine my eligibility to become a surrogate at ISC, and agree to provide additional information as requested to complete my profile.

                                    </label>
                                    <div className="row ml-4 mt-2">
                                        <div><input type="radio" name="" id="I Agree" value="I Agree"
                                            onChange={(e) => {
                                                setOpinion(e.target.value);
                                            }}
                                            checked={opinion === 'I Agree'} /></div>
                                        <div className='ml-4'><label htmlFor="">I Agree</label></div>
                                    </div>
                                    <div className="row ml-4 mt-2">
                                        <div><input type="radio" name="" id="I do not agree" value="I do not agree"
                                            onChange={(e) => {
                                                setOpinion(e.target.value);
                                            }}
                                            checked={opinion === 'I do not agree'}
                                        /></div>
                                        <div className='ml-4'><label htmlFor="">I do not agree</label></div>
                                    </div>
                                    <label className='mt-3'>
                                        <b>
                                            By typing your name here you have read and agree to the above disclosure and the accuracy of your provided information


                                        </b>
                                    </label>
                                    <input type='text' className='form-control' style={{ height: '40px', }}
                                        onChange={(e) => {
                                            setsign3(e.target.value);
                                        }}
                                        value={sign3}



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
                        onClick={sigback3}
                        style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
                    >
                        Back
                    </Button>
                    {
                        sign3 !== null ?
                            <Button
                                className="btn btn-primary"
                                onClick={Submit}
                                style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
                            >

{loder !== false? 
                      <Spinner animation="border"  />:'Finish'  
                      
                     }



                            </Button> :
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
                        onClick={handleClosesig2}
                        style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
                    >
                        Close
                    </Button>
                    {/* <Button variant="primary" onClick={addcustomer}>
                Add
            </Button> */}
                </Modal.Footer>
            </Modal>
            <div className="card" style={{ padding: '20px', borderRadius: '0px 0px 20px 20px', boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }} onClick={signature_p}>
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
        </>
    )
}

export default Signature
