import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { PostApi } from '../Helper/helper';
import { toast } from 'react-toastify';
import BaseUrl from '../baseurl/BaseUrl';
import Spinner from 'react-bootstrap/Spinner';

function Aboutyou() {
  const [token] = useState(localStorage.getItem("token"));
  const [loder, setloader] = useState(false);

    const [ab, setab] = useState(null)
    const [ab1, setab1] = useState(null)
    const [ab2, setab2] = useState(null)
    const [ab3, setab3] = useState(null)
    const [ab4, setab4] = useState(null)
    const [ab5, setab5] = useState(null)
    const [ab6, setab6] = useState(null)
    const [ab7, setab7] = useState(null)
    const [ab8, setab8] = useState(null)
    const [ab9, setab9] = useState(null)
    const [ab10, setab10] = useState(null)
    const [ab11, setab11] = useState(null)
    const [ab12, setab12] = useState(null)
    const [ab13, setab13] = useState(null)
    const [ab14, setab14] = useState(null)
    const [ab15, setab15] = useState(null)
    const Ab16 = () => {
        setloader(true)
    const formData = new FormData();
    formData.append("languages_read_write", ab);
    formData.append("personality_character", ab1);
    formData.append("about_yourself", ab2);
    formData.append("hobbies_interest", ab3);
    formData.append("pamper_yourself", ab4);
    formData.append("together_family", ab5);
    formData.append("childcare_children", ab6);
    formData.append("vacation_in_the_future", ab7);
    formData.append("any_pets", ab8);
    formData.append("surrogacy_journey", ab9);
    formData.append("favorite_restaurants", ab10);
    formData.append("eat_out", week);
    formData.append("favorite_color", ab11);
    formData.append("favorite_sport", ab12);
    formData.append("favorite_animal", ab13);
    formData.append("music_genre", ab14);
    formData.append("favorite_flowers", ab15);
    


    PostApi(`${BaseUrl.baseUrl}surrogate/about`, formData, token)
      .then((data) => {
        console.log("data=====", data.data.message);

            
            toast(data.data.message);
        setabShow18(false)
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
    const [week, setweek] = useState(null)
    
    const [abshow1, setabShow1] = useState(false);
    const [abshow2, setabShow2] = useState(false);
    const [abshow3, setabShow3] = useState(false);
    const [abshow4, setabShow4] = useState(false);
    const [abshow5, setabShow5] = useState(false);
    const [abshow6, setabShow6] = useState(false);
    const [abshow7, setabShow7] = useState(false);
    const [abshow8, setabShow8] = useState(false);
    const [abshow9, setabShow9] = useState(false);
    const [abshow10, setabShow10] = useState(false);
    const [abshow11, setabShow11] = useState(false);
    const [abshow12, setabShow12] = useState(false);
    const [abshow13, setabShow13] = useState(false);
    const [abshow14, setabShow14] = useState(false);
    const [abshow15, setabShow15] = useState(false);
    const [abshow16, setabShow16] = useState(false);
    const [abshow17, setabShow17] = useState(false);
    const [abshow18, setabShow18] = useState(false);
    const handleCloseab1 = () => setabShow1(false);
    const handleCloseab2 = () => setabShow2(false);
    const handleCloseab3 = () => setabShow3(false);
    const handleCloseab4 = () => setabShow4(false);
    const handleCloseab5 = () => setabShow5(false);
    const handleCloseab6 = () => setabShow6(false);
    const handleCloseab7 = () => setabShow7(false);
    const handleCloseab8 = () => setabShow8(false);
    const handleCloseab9 = () => setabShow9(false);
    const handleCloseab10 = () => setabShow10(false);
    const handleCloseab11 = () => setabShow11(false);
    const handleCloseab12 = () => setabShow12(false);
    const handleCloseab13 = () => setabShow13(false);
    const handleCloseab14 = () => setabShow14(false);
    const handleCloseab15 = () => setabShow15(false);
    const handleCloseab16 = () => setabShow16(false);
    const handleCloseab17 = () => setabShow17(false);
    const handleCloseab18 = () => setabShow18(false);
    // const hback2 = () => {
    //   sethShow1(false);
    // };
    const aboutyou = () => {
        setabShow1(true);
        // sethShow1(false);
    };
    const treatmentab = () => {
        setabShow3(true);
        setabShow2(false);
    };
    const treatmentab1 = () => {
        setabShow4(true);
        setabShow3(false);
    };
    const treatmentab2 = () => {
        setabShow5(true);
        setabShow4(false);
    };
    const treatmentab3 = () => {
        setabShow6(true);
        setabShow5(false);
    };
    const treatmentab4 = () => {
        setabShow7(true);
        setabShow6(false);
    };
    const treatmentab5 = () => {
        setabShow8(true);
        setabShow7(false);
    };
    const treatmentab6 = () => {
        setabShow9(true);
        setabShow8(false);
    };
    const treatmentab7 = () => {
        setabShow10(true);
        setabShow9(false);
    };
    const treatmentab8 = () => {
        setabShow11(true);
        setabShow10(false);
    };
    const treatmentab9 = () => {
        setabShow12(true);
        setabShow11(false);
    };
    const treatmentab10 = () => {
        setabShow13(true);
        setabShow12(false);
    };
    const treatmentab11 = () => {
        setabShow14(true);
        setabShow13(false);
    };
    const treatmentab12 = () => {
        setabShow15(true);
        setabShow14(false);
    };
    const treatmentab13 = () => {
        setabShow16(true);
        setabShow15(false);
    };
    const treatmentab14 = () => {
        setabShow17(true);
        setabShow16(false);
    };
    const treatmentab15 = () => {
        setabShow18(true);
        setabShow17(false);
    };
    const treatmentab16 = () => {
        // setabShow18(true);
        setabShow18(false);
    };

    const Ab = () => {
        setabShow2(true);
        setabShow1(false);
    };

    const Ab1 = () => {
        setabShow3(true);
        console.log(ab, "Ab");
        setabShow2(false);
    };
    const Ab2 = () => {
        setabShow4(true);
        console.log(ab1, "Ab1");
        setabShow3(false);
    };
    const Ab3 = () => {
        setabShow5(true);
        console.log(ab2, "Ab2");
        setabShow4(false);
    };
    const Ab4 = () => {
        setabShow6(true);
        console.log(ab3, "Ab3");
        setabShow5(false);
    };
    const Ab5 = () => {
        setabShow7(true);
        console.log(ab4, "Ab4");
        setabShow6(false);
    };
    const Ab6 = () => {
        setabShow8(true);
        console.log(ab5, "Ab5");
        setabShow7(false);
    };
    const Ab7 = () => {
        setabShow9(true);
        console.log(ab6, "Ab6");
        setabShow8(false);
    };
    const Ab8 = () => {
        setabShow10(true);
        console.log(ab7, "Ab7");
        setabShow9(false);
    };
    const Ab9 = () => {
        setabShow11(true);
        console.log(ab8, "Ab8");
        setabShow10(false);
    };
    const Ab10 = () => {
        setabShow12(true);
        console.log(ab9, "Ab9");
        setabShow11(false);
    };
    const Ab11 = () => {
        setabShow13(true);
        console.log(ab10, "Ab10");
        setabShow12(false);
    };
    const RadioClick = () => {
        setabShow14(true);
        console.log(week, "week");
        setabShow13(false);
    };
    const Ab12 = () => {
        setabShow15(true);
        console.log(ab11, "Ab11");
        setabShow14(false);
    };
    const Ab13 = () => {
        setabShow16(true);
        console.log(ab12, "Ab12");
        setabShow15(false);
    };
    const Ab14 = () => {
        setabShow17(true);
        console.log(ab13, "Ab13");
        setabShow16(false);
    };
    const Ab15 = () => {
        setabShow18(true);
        setabShow17(false);
        console.log(ab14 ,"Ab14");
    };
    // const Ab16 = () => {
    //     // setabShow17(true);
    //     // setabShow18(false);
    //     console.log(ab15 ,"Ab15");
    // };
    const abback1 = () => {
        setabShow1(true);
        setabShow2(false);
    };
    const abback2 = () => {
        setabShow2(true);
        setabShow3(false);
    };
    const abback3 = () => {
        setabShow3(true);
        setabShow4(false);
    };
    const abback4 = () => {
        setabShow4(true);
        setabShow5(false);
    };
    const abback5 = () => {
        setabShow5(true);
        setabShow6(false);
    };
    const abback6 = () => {
        setabShow6(true);
        setabShow7(false);
    };
    const abback7 = () => {
        setabShow7(true);
        setabShow8(false);
    };
    const abback8 = () => {
        setabShow8(true);
        setabShow9(false);
    };

    const abback9 = () => {
        setabShow9(true);
        setabShow10(false);
    };
    const abback10 = () => {
        setabShow10(true);
        setabShow11(false);
    };
    const abback11 = () => {
        setabShow11(true);
        setabShow12(false);
    };
    const Radioback = () => {
        setabShow12(true);
        setabShow13(false);
    };
    const abback13 = () => {
        setabShow13(true);
        setabShow14(false);
    };
    const abback14 = () => {
        setabShow14(true);
        setabShow15(false);
    };
    const abback15 = () => {
        setabShow15(true);
        setabShow16(false);
    };

    const abback16 = () => {
        setabShow16(true);
        setabShow17(false);
    };
    const abback17 = () => {
        setabShow17(true);
        setabShow18(false);
    };
    return (
        <>

            <Modal
                show={abshow1}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                onHide={handleCloseab1}
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

                                <h3 style={{ marginTop: '20px', marginBottom: '10px', }}>Alright, this is your time to let your personality really come out!</h3>
                                <p style={{
                                    MARGINTOP: '10PX',
                                    fontWeight: '100',
                                    color: '#333352',

                                }}>


                                    {/* <p style={{ paddingTop: '10px',  }}>  This section will ask detailed questions about your health and some questions
                  may be sensitive. Just know that most of us here
                  at ISC have had to answer these questions too and it’s all just a part of the process of becoming a surrogate.</p> */}
                                    <p style={{ padding: '5px' }}>  ✔️ Several of these questions will be on the profile intended parents see so they can really get to know you as a person
                                        as accurate as possible</p>
                                    <p style={{ padding: '5px' }}>  ✔️ This is the stuff that attracts the intended parents to you so please take your time and thoughtfully answer these questions
                                        normally isn’t an issue</p>

                                    <p style={{ padding: '5px' }}>  ✔️ This section should take about 10-15 minutes to complete</p>




                                </p>
                            </div>
                        </div>
                    </div>

                    {/* ------- */}
                </Modal.Body>

                <Modal.Footer style={{}}>
                    <Button
                        className="btn btn-primary"
                        onClick={Ab}
                        style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
                    >
                        Next
                    </Button>
                    <Button
                        className="btn btn-primary"
                        onClick={handleCloseab1}
                        style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
                    >
                        Close
                    </Button>
                    {/* <Button variant="primary" onClick={addcustomer}>
                       Add
                   </Button> */}
                </Modal.Footer>
            </Modal>
            {/* What languages can you read and write?*/}
            <Modal
                show={abshow2}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                onHide={handleCloseab2}
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
                                    <h3 style={{ marginTop: '20px', marginBottom: '20px' }}>What languages can you read and write?</h3>


                                </div>
                                <div className='col-lg-2'>
                                    <p style={{ marginTop: '20px', fontSize: '15px', color: '#d8352f' }} onClick={treatmentab}>Skip ≫</p>
                                </div>
                                <div className='col-lg-12'>

                                </div>

                                <div className='col-lg-12'>

                                    {/* <label>Other than you (and your partner if you have one), how many other people over the age of
                  18 live in the same household as you?</label> */}
                                    <input type='text' className='form-control' style={{ height: '40px', }}
                                        onChange={(e) => {
                                            setab(e.target.value);
                                        }}
                                        value={ab}



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
                        onClick={abback1}
                        style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
                    >
                        Back
                    </Button>
                    {
                        ab !== null ?
                            <Button
                                className="btn btn-primary"
                                onClick={Ab1}
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
                        onClick={handleCloseab2}
                        style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
                    >
                        Close
                    </Button>
                    {/* <Button variant="primary" onClick={addcustomer}>
                     Add
                 </Button> */}
                </Modal.Footer>
            </Modal>

            <Modal
                show={abshow3}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                onHide={handleCloseab3}
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
                                    <h3 style={{ marginTop: '20px', marginBottom: '20px' }}>Describe your personality and character</h3>


                                </div>
                                <div className='col-lg-2'>
                                    <p style={{ marginTop: '20px', fontSize: '15px', color: '#d8352f' }} onClick={treatmentab1}>Skip ≫</p>
                                </div>
                                <div className='col-lg-12'>

                                </div>

                                <div className='col-lg-12'>

                                    {/* <label>Other than you (and your partner if you have one), how many other people over the age of
                  18 live in the same household as you?</label> */}
                                    <input type='text' className='form-control' style={{ height: '40px', }}
                                        onChange={(e) => {
                                            setab1(e.target.value);
                                        }}
                                        value={ab1}



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
                        onClick={abback2}
                        style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
                    >
                        Back
                    </Button>
                    {
                        ab1 !== null ?
                            <Button
                                className="btn btn-primary"
                                onClick={Ab2}
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
                        onClick={handleCloseab3}
                        style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
                    >
                        Close
                    </Button>
                    {/* <Button variant="primary" onClick={addcustomer}>
                     Add
                 </Button> */}
                </Modal.Footer>
            </Modal>

            <Modal
                show={abshow4}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                onHide={handleCloseab4}
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
                                    <h3 style={{ marginTop: '20px', marginBottom: '20px' }}>What personality traits do you like most about yourself?</h3>


                                </div>
                                <div className='col-lg-2'>
                                    <p style={{ marginTop: '20px', fontSize: '15px', color: '#d8352f' }} onClick={treatmentab2}>Skip ≫</p>
                                </div>
                                <div className='col-lg-12'>

                                </div>

                                <div className='col-lg-12'>

                                    {/* <label>Other than you (and your partner if you have one), how many other people over the age of
                  18 live in the same household as you?</label> */}
                                    <input type='text' className='form-control' style={{ height: '40px', }}
                                        onChange={(e) => {
                                            setab2(e.target.value);
                                        }}
                                        value={ab2}



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
                        onClick={abback3}
                        style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
                    >
                        Back
                    </Button>
                    {
                        ab2 !== null ?
                            <Button
                                className="btn btn-primary"
                                onClick={Ab3}
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
                        onClick={handleCloseab4}
                        style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
                    >
                        Close
                    </Button>
                    {/* <Button variant="primary" onClick={addcustomer}>
                     Add
                 </Button> */}
                </Modal.Footer>
            </Modal>

            <Modal
                show={abshow5}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                onHide={handleCloseab5}
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
                                    <h3 style={{ marginTop: '20px', marginBottom: '20px' }}>What are your hobbies and interests?</h3>


                                </div>
                                <div className='col-lg-2'>
                                    <p style={{ marginTop: '20px', fontSize: '15px', color: '#d8352f' }} onClick={treatmentab3}>Skip ≫</p>
                                </div>
                                <div className='col-lg-12'>

                                </div>

                                <div className='col-lg-12'>

                                    {/* <label>Other than you (and your partner if you have one), how many other people over the age of
                  18 live in the same household as you?</label> */}
                                    <input type='text' className='form-control' style={{ height: '40px', }}
                                        onChange={(e) => {
                                            setab3(e.target.value);
                                        }}
                                        value={ab3}



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
                        onClick={abback4}
                        style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
                    >
                        Back
                    </Button>
                    {
                        ab3 !== null ?
                            <Button
                                className="btn btn-primary"
                                onClick={Ab4}
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
                        onClick={handleCloseab5}
                        style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
                    >
                        Close
                    </Button>
                    {/* <Button variant="primary" onClick={addcustomer}>
                     Add
                 </Button> */}
                </Modal.Footer>
            </Modal>


            <Modal
                show={abshow6}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                onHide={handleCloseab6}
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
                                    <h3 style={{ marginTop: '20px', marginBottom: '20px' }}>What do you do to pamper yourself?
                                    </h3>


                                </div>
                                <div className='col-lg-2'>
                                    <p style={{ marginTop: '20px', fontSize: '15px', color: '#d8352f' }} onClick={treatmentab4}>Skip ≫</p>
                                </div>
                                <div className='col-lg-12'>

                                </div>

                                <div className='col-lg-12'>

                                    {/* <label>Other than you (and your partner if you have one), how many other people over the age of
                  18 live in the same household as you?</label> */}
                                    <input type='text' className='form-control' style={{ height: '40px', }}
                                        onChange={(e) => {
                                            setab4(e.target.value);
                                        }}
                                        value={ab4}



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
                        onClick={abback5}
                        style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
                    >
                        Back
                    </Button>
                    {
                        ab4 !== null ?
                            <Button
                                className="btn btn-primary"
                                onClick={Ab5}
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
                        onClick={handleCloseab6}
                        style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
                    >
                        Close
                    </Button>
                    {/* <Button variant="primary" onClick={addcustomer}>
                     Add
                 </Button> */}
                </Modal.Footer>
            </Modal>


            <Modal
                show={abshow7}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                onHide={handleCloseab7}
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
                                    <h3 style={{ marginTop: '20px', marginBottom: '20px' }}>What do you like to do together as a family?
                                    </h3>


                                </div>
                                <div className='col-lg-2'>
                                    <p style={{ marginTop: '20px', fontSize: '15px', color: '#d8352f' }} onClick={treatmentab5}>Skip ≫</p>
                                </div>
                                <div className='col-lg-12'>

                                </div>

                                <div className='col-lg-12'>

                                    {/* <label>Other than you (and your partner if you have one), how many other people over the age of
                  18 live in the same household as you?</label> */}
                                    <input type='text' className='form-control' style={{ height: '40px', }}
                                        onChange={(e) => {
                                            setab5(e.target.value);
                                        }}
                                        value={ab5}



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
                        onClick={abback6}
                        style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
                    >
                        Back
                    </Button>
                    {
                        ab5 !== null ?
                            <Button
                                className="btn btn-primary"
                                onClick={Ab6}
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
                        onClick={handleCloseab7}
                        style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
                    >
                        Close
                    </Button>
                    {/* <Button variant="primary" onClick={addcustomer}>
                     Add
                 </Button> */}
                </Modal.Footer>
            </Modal>

            <Modal
                show={abshow8}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                onHide={handleCloseab8}
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
                                    <h3 style={{ marginTop: '20px', marginBottom: '20px' }}>What type of childcare do you currently use when you are not with your children?
                                    </h3>


                                </div>
                                <div className='col-lg-2'>
                                    <p style={{ marginTop: '20px', fontSize: '15px', color: '#d8352f' }} onClick={treatmentab6}>Skip ≫</p>
                                </div>
                                <div className='col-lg-12'>

                                </div>

                                <div className='col-lg-12'>

                                    {/* <label>Other than you (and your partner if you have one), how many other people over the age of
                  18 live in the same household as you?</label> */}
                                    <input type='text' className='form-control' style={{ height: '40px', }}
                                        onChange={(e) => {
                                            setab6(e.target.value);
                                        }}
                                        value={ab6}



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
                        onClick={abback7}
                        style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
                    >
                        Back
                    </Button>
                    {
                        ab6 !== null ?
                            <Button
                                className="btn btn-primary"
                                onClick={Ab7}
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
                        onClick={handleCloseab8}
                        style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
                    >
                        Close
                    </Button>
                    {/* <Button variant="primary" onClick={addcustomer}>
                     Add
                 </Button> */}
                </Modal.Footer>
            </Modal>

            <Modal
                show={abshow9}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                onHide={handleCloseab9}
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
                                    <h3 style={{ marginTop: '20px', marginBottom: '20px' }}>Where do you like to vacation, or where would you like to vacation in the future?
                                    </h3>


                                </div>
                                <div className='col-lg-2'>
                                    <p style={{ marginTop: '20px', fontSize: '15px', color: '#d8352f' }} onClick={treatmentab7}>Skip ≫</p>
                                </div>
                                <div className='col-lg-12'>

                                </div>

                                <div className='col-lg-12'>

                                    {/* <label>Other than you (and your partner if you have one), how many other people over the age of
                  18 live in the same household as you?</label> */}
                                    <input type='text' className='form-control' style={{ height: '40px', }}
                                        onChange={(e) => {
                                            setab7(e.target.value);
                                        }}
                                        value={ab7}



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
                        onClick={abback8}
                        style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
                    >
                        Back
                    </Button>
                    {
                        ab7 !== null ?
                            <Button
                                className="btn btn-primary"
                                onClick={Ab8}
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
                        onClick={handleCloseab9}
                        style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
                    >
                        Close
                    </Button>
                    {/* <Button variant="primary" onClick={addcustomer}>
                     Add
                 </Button> */}
                </Modal.Footer>
            </Modal>


            <Modal
                show={abshow10}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                onHide={handleCloseab10}
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
                                    <h3 style={{ marginTop: '20px', marginBottom: '20px' }}>Do you have any pets? If so, tell us about them.
                                    </h3>


                                </div>
                                <div className='col-lg-2'>
                                    <p style={{ marginTop: '20px', fontSize: '15px', color: '#d8352f' }} onClick={treatmentab8}>Skip ≫</p>
                                </div>
                                <div className='col-lg-12'>

                                </div>

                                <div className='col-lg-12'>

                                    {/* <label>Other than you (and your partner if you have one), how many other people over the age of
               18 live in the same household as you?</label> */}
                                    <input type='text' className='form-control' style={{ height: '40px', }}
                                        onChange={(e) => {
                                            setab8(e.target.value);
                                        }}
                                        value={ab8}



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
                        onClick={abback9}
                        style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
                    >
                        Back
                    </Button>
                    {
                        ab8 !== null ?
                            <Button
                                className="btn btn-primary"
                                onClick={Ab9}
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
                        onClick={handleCloseab10}
                        style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
                    >
                        Close
                    </Button>
                    {/* <Button variant="primary" onClick={addcustomer}>
                  Add
              </Button> */}
                </Modal.Footer>
            </Modal>


            <Modal
                show={abshow11}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                onHide={handleCloseab11}
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
                                    <h3 style={{ marginTop: '20px', marginBottom: '20px' }}>Please describe the types of foods you typically eat, what foods you enjoy cooking or preparing, and any information you'd like to share about your average food choices. What do you think might change during your surrogacy journey?
                                    </h3>


                                </div>
                                <div className='col-lg-2'>
                                    <p style={{ marginTop: '20px', fontSize: '15px', color: '#d8352f' }} onClick={treatmentab9}>Skip ≫</p>
                                </div>
                                <div className='col-lg-12'>

                                </div>

                                <div className='col-lg-12'>

                                    {/* <label>Other than you (and your partner if you have one), how many other people over the age of
             18 live in the same household as you?</label> */}
                                    <input type='text' className='form-control' style={{ height: '40px', }}
                                        onChange={(e) => {
                                            setab9(e.target.value);
                                        }}
                                        value={ab9}



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
                        onClick={abback10}
                        style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
                    >
                        Back
                    </Button>
                    {
                        ab9 !== null ?
                            <Button
                                className="btn btn-primary"
                                onClick={Ab10}
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
                        onClick={handleCloseab11}
                        style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
                    >
                        Close
                    </Button>
                    {/* <Button variant="primary" onClick={addcustomer}>
                Add
            </Button> */}
                </Modal.Footer>
            </Modal>

            <Modal
                show={abshow12}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                onHide={handleCloseab12}
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
                                    <h3 style={{ marginTop: '20px', marginBottom: '20px' }}>What are some of your favorite restaurants?
                                    </h3>


                                </div>
                                <div className='col-lg-2'>
                                    <p style={{ marginTop: '20px', fontSize: '15px', color: '#d8352f' }} onClick={treatmentab10}>Skip ≫</p>
                                </div>
                                <div className='col-lg-12'>

                                </div>

                                <div className='col-lg-12'>

                                    {/* <label>Other than you (and your partner if you have one), how many other people over the age of
             18 live in the same household as you?</label> */}
                                    <input type='text' className='form-control' style={{ height: '40px', }}
                                        onChange={(e) => {
                                            setab10(e.target.value);
                                        }}
                                        value={ab10}



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
                        onClick={abback11}
                        style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
                    >
                        Back
                    </Button>
                    {
                        ab10 !== null ?
                            <Button
                                className="btn btn-primary"
                                onClick={Ab11}
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
                        onClick={handleCloseab12}
                        style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
                    >
                        Close
                    </Button>
                    {/* <Button variant="primary" onClick={addcustomer}>
                Add
            </Button> */}
                </Modal.Footer>
            </Modal>

            <Modal
                show={abshow13}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                // onHide={handleClose13}
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
                                    <h3 style={{ marginTop: '20px', marginBottom: '20px' }}>How many times per week do you eat out?
                                    </h3>

                                </div>
                                <div className='col-lg-4'>
                                    <p style={{ marginTop: '20px', fontSize: '15px', color: '#d8352f' }} onClick={treatmentab11}>Skip ≫</p>
                                </div>
                                <div className='col-lg-12 d-flex justify-content-start'>

                                    <div className='row'>
                                        <div className='col-lg-2'>



                                            <input type="radio" className='form-control' id="Less than once per week" name="fav_language" value="Less than once per week"
                                                onChange={(e) => {
                                                    setweek(e.target.value);
                                                }}
                                                checked={week === 'Less than once per week'}


                                            />

                                        </div>
                                        <div className='col-lg-10'>
                                            <label for="html">Less than once per week
                                            </label>
                                        </div>

                                        <div className='col-lg-2'>

                                            <input type="radio" className='form-control' id="About once per week" name="fav_language" value="About once per week"
                                                onChange={(e) => {
                                                    setweek(e.target.value);
                                                }}
                                                checked={week === 'About once per week'}
                                            />
                                        </div>



                                        <div className='col-lg-10'>
                                            <label for="html">About once per week

                                            </label>
                                        </div>

                                        <div className='col-lg-2'>

                                            <input type="radio" className='form-control' id="2-3 times per week" name="fav_language" value="2-3 times per week"
                                                onChange={(e) => {
                                                    setweek(e.target.value);
                                                }}
                                                checked={week === '2-3 times per week'}
                                            />
                                        </div>
                                        <div className='col-lg-10'>
                                            <label for="html">2-3 times per week

                                            </label>
                                        </div>
                                        <div className='col-lg-2'>

                                            <input type="radio" className='form-control' id="4 or more times per week" name="fav_language" value="4 or more times per week"
                                                onChange={(e) => {
                                                    setweek(e.target.value);
                                                }}
                                                checked={week === '4 or more times per week'}
                                            />
                                        </div>
                                        <div className='col-lg-10'>
                                            <label for="html">4 or more times per week

                                            </label>
                                        </div>


                                    </div>

                                </div>




                            </div>
                        </div>
                    </div>

                    {/* ------- */}
                </Modal.Body>

                <Modal.Footer style={{}}>
                    <Button
                        className="btn btn-primary"
                        onClick={Radioback}
                        style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
                    >
                        Back
                    </Button>
                    {
                        week !== null ?
                            <Button
                                className="btn btn-primary"
                                onClick={RadioClick}
                                style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
                            >
                                Next
                            </Button> :
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
                        onClick={handleCloseab13}
                        style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
                    >
                        Close
                    </Button>
                    {/* <Button variant="primary" onClick={addcustomer}>
                Add
            </Button> */}
                </Modal.Footer>
            </Modal>
            <Modal
                show={abshow14}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                onHide={handleCloseab14}
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
                                    <h3 style={{ marginTop: '20px', marginBottom: '20px' }}>What's your favorite color?
                                    </h3>


                                </div>
                                <div className='col-lg-2'>
                                    <p style={{ marginTop: '20px', fontSize: '15px', color: '#d8352f' }} onClick={treatmentab12}>Skip ≫</p>
                                </div>
                                <div className='col-lg-12'>

                                </div>

                                <div className='col-lg-12'>

                                    {/* <label>Other than you (and your partner if you have one), how many other people over the age of
             18 live in the same household as you?</label> */}
                                    <input type='text' className='form-control' style={{ height: '40px', }}
                                        onChange={(e) => {
                                            setab11(e.target.value);
                                        }}
                                        value={ab11}



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
                        onClick={abback13}
                        style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
                    >
                        Back
                    </Button>
                    {
                        ab11 !== null ?
                            <Button
                                className="btn btn-primary"
                                onClick={Ab12}
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
                        onClick={handleCloseab14}
                        style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
                    >
                        Close
                    </Button>
                    {/* <Button variant="primary" onClick={addcustomer}>
                Add
            </Button> */}
                </Modal.Footer>
            </Modal>
            <Modal
                show={abshow15}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                onHide={handleCloseab14}
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
                                    <h3 style={{ marginTop: '20px', marginBottom: '20px' }}>What's your favorite sport?
                                    </h3>


                                </div>
                                <div className='col-lg-2'>
                                    <p style={{ marginTop: '20px', fontSize: '15px', color: '#d8352f' }} onClick={treatmentab13}>Skip ≫</p>
                                </div>
                                <div className='col-lg-12'>

                                </div>

                                <div className='col-lg-12'>

                                    {/* <label>Other than you (and your partner if you have one), how many other people over the age of
             18 live in the same household as you?</label> */}
                                    <input type='text' className='form-control' style={{ height: '40px', }}
                                        onChange={(e) => {
                                            setab12(e.target.value);
                                        }}
                                        value={ab12}



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
                        onClick={abback14}
                        style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
                    >
                        Back
                    </Button>
                    {
                        ab12 !== null ?
                            <Button
                                className="btn btn-primary"
                                onClick={Ab13}
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
                        onClick={handleCloseab15}
                        style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
                    >
                        Close
                    </Button>
                    {/* <Button variant="primary" onClick={addcustomer}>
                Add
            </Button> */}
                </Modal.Footer>
            </Modal>
            <Modal
                show={abshow16}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                onHide={handleCloseab15}
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
                                    <h3 style={{ marginTop: '20px', marginBottom: '20px' }}>What's your favorite Animal?
                                    </h3>


                                </div>
                                <div className='col-lg-2'>
                                    <p style={{ marginTop: '20px', fontSize: '15px', color: '#d8352f' }} onClick={treatmentab14}>Skip ≫</p>
                                </div>
                                <div className='col-lg-12'>

                                </div>

                                <div className='col-lg-12'>

                                    {/* <label>Other than you (and your partner if you have one), how many other people over the age of
             18 live in the same household as you?</label> */}
                                    <input type='text' className='form-control' style={{ height: '40px', }}
                                        onChange={(e) => {
                                            setab13(e.target.value);
                                        }}
                                        value={ab13}



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
                        onClick={abback15}
                        style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
                    >
                        Back
                    </Button>
                    {
                        ab13 !== null ?
                            <Button
                                className="btn btn-primary"
                                onClick={Ab14}
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
                        onClick={handleCloseab16}
                        style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
                    >
                        Close
                    </Button>
                    {/* <Button variant="primary" onClick={addcustomer}>
                Add
            </Button> */}
                </Modal.Footer>
            </Modal>
            <Modal
                show={abshow17}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                onHide={handleCloseab16}
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
                                    <h3 style={{ marginTop: '20px', marginBottom: '20px' }}>What's your favorite music genre?

                                    </h3>


                                </div>
                                <div className='col-lg-2'>
                                    <p style={{ marginTop: '20px', fontSize: '15px', color: '#d8352f' }} onClick={treatmentab15}>Skip ≫</p>
                                </div>
                                <div className='col-lg-12'>

                                </div>

                                <div className='col-lg-12'>

                                    {/* <label>Other than you (and your partner if you have one), how many other people over the age of
             18 live in the same household as you?</label> */}
                                    <input type='text' className='form-control' style={{ height: '40px', }}
                                        onChange={(e) => {
                                            setab14(e.target.value);
                                        }}
                                        value={ab14}



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
                        onClick={abback16}
                        style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
                    >
                        Back
                    </Button>
                    {
                        ab14 !== null ?
                            <Button
                                className="btn btn-primary"
                                onClick={Ab15}
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
                        onClick={handleCloseab17}
                        style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
                    >
                        Close
                    </Button>
                    {/* <Button variant="primary" onClick={addcustomer}>
                Add
            </Button> */}
                </Modal.Footer>
            </Modal>
            <Modal
                show={abshow18}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                onHide={handleCloseab17}
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
                                    <h3 style={{ marginTop: '20px', marginBottom: '20px' }}>Favorite flowers?

                                    </h3>


                                </div>
                                <div className='col-lg-2'>
                                    <p style={{ marginTop: '20px', fontSize: '15px', color: '#d8352f' }} onClick={treatmentab16}>Skip ≫</p>
                                </div>
                                <div className='col-lg-12'>

                                </div>

                                <div className='col-lg-12'>

                                    {/* <label>Other than you (and your partner if you have one), how many other people over the age of
             18 live in the same household as you?</label> */}
                                    <input type='text' className='form-control' style={{ height: '40px', }}
                                        onChange={(e) => {
                                            setab15(e.target.value);
                                        }}
                                        value={ab15}



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
                        onClick={abback17}
                        style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
                    >
                        Back
                    </Button>
                    {
                        ab15 !== null ?
                            <Button
                                className="btn btn-primary"
                                onClick={Ab16}
                                style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
                            >

                                
{loder !== false? 
                      <Spinner animation="border"  />:'Finish'  
                      
                     }


                            </Button> :
                            <Button
                                className="btn btn-secondary"
                                // onClick={Submit}
                                style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
                            >
                               Finish
                            </Button>

                    }


                    <Button
                        className="btn btn-primary"
                        onClick={handleCloseab18}
                        style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
                    >
                        Close
                    </Button>
                    {/* <Button variant="primary" onClick={addcustomer}>
                Add
            </Button> */}
                </Modal.Footer>
            </Modal>

            <div className="card" style={{ padding: '20px', boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }} onClick={aboutyou}>
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
        </>

    )
}

export default Aboutyou
