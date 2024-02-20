import React from "react";
// import BaseUrl from "../baseurl/BaseUrl";
// import { PostApiWithOutToken } from "../Helper/helper";
import { useState } from "react";
import "../Surrogate Application/register.css";
// import Spinner from "react-bootstrap/Spinner";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import {  useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
const SurrogacyJourney = () => {
//   const [loder, setloader] = useState(false);
  // const [showA, setShowA] = useState(false);
  // const toggleShowA = () => setShowA(!showA);
//   const [, setShowToast] = useState(false);

  // console.log('email==============>',email)
//   const navigate = new useNavigate();

  const [show4, setShow4] = useState(false);
  const handleClose4 = () => setShow4(false);
  //   const back3 = () => {
  //     setShow4(false);
  //     setShow3(true);
  //   };

  const g3 = () => {
    setShow4(true);
    // setShow3(false);
  };

  const [show5, setShow5] = useState(false);
  const handleClose5 = () => setShow5(false);
  const back5 = () => {
    setShow5(false);
    setShow4(true);
  };

  const pregnancies = () => {
    setShow5(true);
    setShow4(false);
  };

  const [show6, setShow6] = useState(false);
  const [show7, setShow7] = useState(false);
  const [show8, setShow8] = useState(false);
  const [show9, setShow9] = useState(false);
  const [show10, setShow10] = useState(false);


  const handleClose6 = () => setShow6(false);
  const handleClose7 = () => setShow7(false);
  const handleClose8 = () => setShow8(false);
  const handleClose9 = () => setShow9(false);
  const handleClose10 = () => setShow10(false);


  const back6 = () => {
    setShow6(false);
    setShow5(true);
  };

  const back7 = () => {
    setShow7(false);
    setShow6(true);
  };

  const back8 = () => {
    setShow8(false);
    setShow7(true);
  };

  const back9 = () => {
    setShow9(false);
    setShow8(true);
  };

  const pregnancies3 = () => {
    setShow6(true);
    setShow5(false);
  };

  const pregnancies4 = () => {
    setShow7(true);
    setShow6(false);
  };

  const pregnancies5 = () => {
    setShow8(true);
    setShow7(false);
  };

  const pregnancies6 = () => {
    setShow9(true);
    setShow8(false);
  };

  const pregnancies7 = () => {
    setShow10(true);
    setShow9(false);
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

      {/* General Information */}
      <Modal
        show={show4}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handleClose4}
        style={{
          backgroundColor: "#ffffff87",
          borderRadius: "20px 20px 10px 10px",
        }}
      >
        {/* <Modal.Header closeButton> */}
        <Modal.Header
          style={{
            backgroundImage:
              "url(/mt-demo/109600/109604/mt-content/uploads/2020/07/8.jpeg)",
            height: "150px",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
          }}
        >
          {/* <i className='fa fa-close'>baloch</i>
                    <AiFillCloseCircle fontSize={20} /> */}
          <Modal.Title style={{ fontSize: "20px" }}></Modal.Title>
          {/* <AiFillCloseCircle onClick={handleClose} style={{ marginLeft: "190", cursor: "pointer" }} fontSize={40} /> */}
        </Modal.Header>
        <Modal.Body
          style={{
            marginTop: "-27px",
            backgroundColor: "#fffbfb",
            borderRadius: "30px 30px 0px 0px",
            marginBottom: "20px",
          }}
        >
          <div className="col-lg-12">
            <div className="container">
              <div className="row">
                <h3 style={{ marginTop: "20px", marginBottom: "20px" }}>
                  Let's talk about what you want out of your journey!
                </h3>
                <p
                  style={{
                    MARGINTOP: "10PX",
                    fontWeight: "100",
                    color: "#333352",
                  }}
                >
                  <p style={{ padding: "5px", marginTop: "10px" }}>
                    {" "}
                    ✔️ Some questions in this section may be very pointed, but
                    know it is so we can provide you with the best journey,
                    custom-tailored for you
                  </p>
                  <p style={{ padding: "5px" }}>
                    {" "}
                    ✔️ These questions are about what you hope, want and are
                    willing to do for the journey
                  </p>
                  <p style={{ padding: "5px" }}>
                    {" "}
                    ✔️ Several questions provide context to how you should
                    answer, so please read everything thoroughly before you
                    answer them
                  </p>

                  <p style={{ padding: "5px" }}>
                    {" "}
                    ✔️ The last question in this section is extremely important,
                    it will be your way of connecting with intended parents
                  </p>

                  <p style={{ padding: "5px" }}>
                    {" "}
                    ✔️ This section will take around 20 minutes to complete
                  </p>
                </p>
              </div>
            </div>
          </div>

          {/* ------- */}
        </Modal.Body>

        <Modal.Footer style={{}}>
          <Button
            className="btn btn-primary"
            onClick={pregnancies}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
          >
            Let’s go!
          </Button>
          <Button
            className="btn btn-primary"
            // onClick={back1}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
            onClick={handleClose4}
          >
            Close
          </Button>
          {/* <Button variant="primary" onClick={addcustomer}>
                        Add
                    </Button> */}
        </Modal.Footer>
      </Modal>

      {/* General Information minhaj */}
      <Modal
        show={show5}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handleClose5}
        style={{
          backgroundColor: "#ffffff87",
          borderRadius: "20px 20px 10px 10px",
        }}
      >
        {/* <Modal.Header closeButton> */}
        <Modal.Header
          style={{
            backgroundImage:
              "url(/mt-demo/109600/109604/mt-content/uploads/2020/07/8.jpeg)",
            height: "150px",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
          }}
        >
          {/* <i className='fa fa-close'>baloch</i>
                    <AiFillCloseCircle fontSize={20} /> */}
          <Modal.Title style={{ fontSize: "20px" }}></Modal.Title>
          {/* <AiFillCloseCircle onClick={handleClose} style={{ marginLeft: "190", cursor: "pointer" }} fontSize={40} /> */}
        </Modal.Header>
        <Modal.Body
          style={{
            marginTop: "-27px",
            backgroundColor: "#fffbfb",
            borderRadius: "30px 30px 0px 0px",
            marginBottom: "20px",
          }}
        >
          <div className="col-lg-12">
            <div className="container">
              <div className="row">
                <div className="col-lg-10">
                  <h3 style={{ marginTop: "20px", marginBottom: "20px" }}>
                    Motivation and Support
                  </h3>
                </div>

                <div className="col-lg-2">
                  <p
                    style={{
                      marginTop: "30px",
                      fontSize: "15px",
                      color: "#d8352f",
                    }}
                    onClick={pregnancies3}
                  >
                    Skip ≫
                  </p>
                </div>

                {/* <h3 style={{ marginTop: "20px", marginBottom: "20px" }}>
                  Motivation and Support
                </h3> */}
                <p
                  style={{
                    MARGINTOP: "10PX",
                    fontWeight: "100",
                    color: "#333352",
                  }}
                >
                  <p style={{ padding: "5px", marginTop: "10px" }}>
                    {" "}
                    Describe your reasons for becoming a surrogate and why you
                    think you would be a great candidate.
                  </p>

                  <input
                    type="text"
                    className="form-control "
                    style={{ padding: "18px", borderRadius: "10px" }}
                  />

                  <p style={{ padding: "5px", marginTop: "10px" }}>
                    {" "}
                    What family members or friends live nearby who will be able
                    to support and assist you with daily duties and childcare if
                    needed throughout your surrogacy journey?
                  </p>

                  <input
                    type="text"
                    className="form-control "
                    style={{ padding: "18px", borderRadius: "10px" }}
                  />
                </p>
              </div>
            </div>
          </div>

          {/* ------- */}
        </Modal.Body>

        <Modal.Footer style={{}}>
          <Button
            className="btn btn-primary"
            onClick={pregnancies3}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
          >
            Let’s go!
          </Button>
          <Button
            className="btn btn-primary"
            onClick={handleClose5}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
          >
            Close
          </Button>
          <Button variant="primary" onClick={back5}>
            back
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={show6}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handleClose5}
        style={{
          backgroundColor: "#ffffff87",
          borderRadius: "20px 20px 10px 10px",
        }}
      >
        {/* <Modal.Header closeButton> */}
        <Modal.Header
          style={{
            backgroundImage:
              "url(/mt-demo/109600/109604/mt-content/uploads/2020/07/8.jpeg)",
            height: "150px",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
          }}
        >
          {/* <i className='fa fa-close'>baloch</i>
                    <AiFillCloseCircle fontSize={20} /> */}
          <Modal.Title style={{ fontSize: "20px" }}></Modal.Title>
          {/* <AiFillCloseCircle onClick={handleClose} style={{ marginLeft: "190", cursor: "pointer" }} fontSize={40} /> */}
        </Modal.Header>
        <Modal.Body
          style={{
            marginTop: "-27px",
            backgroundColor: "#fffbfb",
            borderRadius: "30px 30px 0px 0px",
            marginBottom: "20px",
          }}
        >
          <div className="col-lg-12">
            <div className="container">
              <div className="row">
                <h3 style={{ marginTop: "20px", marginBottom: "20px" }}>
                  Injections
                </h3>
                <div
                  className="col-lg-10 flex justify-end"
                  style={{ textAlign: "end" }}
                >
                  <p
                    style={{
                      marginTop: "30px",
                      fontSize: "15px",
                      color: "#d8352f",
                    }}
                    onClick={pregnancies4}
                  >
                    Skip ≫
                  </p>
                </div>
                <p
                  style={{
                    MARGINTOP: "10PX",
                    fontWeight: "100",
                    color: "#333352",
                  }}
                >
                  <p style={{ padding: "5px", marginTop: "10px" }}>
                    {" "}
                    Your IVF doctor will have you take daily medications to
                    prepare your body for the embryo transfer, and YUP,
                    injections are part of the regimen. While nobody likes to
                    get a daily poke (ouch!), it's a necessary part of becoming
                    a surrogate. You will continue with these daily medications
                    for about two months after your embryo transfer to support
                    your early IVF pregnancy. Missing even one dose can
                    jeopardize the pregnancy, so it is extremely important that
                    you commit to taking these medications as prescribed and not
                    miss a single dose.{" "}
                  </p>

                  <p style={{ padding: "5px", marginTop: "10px" }}>
                    {" "}
                    Do you understand the importance of daily IVF medications
                    and agree to take all medications (including injections) as
                    prescribed by your IVF doctor?
                  </p>

                  <div className="d-flex">
                    <div className="d-flex item-center">
                      <input type="radio" name="agree" />
                      <label className="mt-2 ml-2">Yes</label>
                    </div>
                    <div className="d-flex ml-5">
                      <input type="radio" name="agree" />
                      <label className="ml-3 mt-2">No</label>
                    </div>
                  </div>
                </p>
              </div>
            </div>
          </div>

          {/* ------- */}
        </Modal.Body>

        <Modal.Footer style={{}}>
          <Button
            className="btn btn-primary"
            onClick={pregnancies4}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
          >
            Let’s go!
          </Button>
          <Button
            className="btn btn-primary"
            onClick={handleClose6}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
          >
            Close
          </Button>
          <Button variant="primary" onClick={back6}>
            back
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={show7}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handleClose5}
        style={{
          backgroundColor: "#ffffff87",
          borderRadius: "20px 20px 10px 10px",
        }}
      >
        {/* <Modal.Header closeButton> */}
        <Modal.Header
          style={{
            backgroundImage:
              "url(/mt-demo/109600/109604/mt-content/uploads/2020/07/8.jpeg)",
            height: "150px",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
          }}
        >
          {/* <i className='fa fa-close'>baloch</i>
                    <AiFillCloseCircle fontSize={20} /> */}
          <Modal.Title style={{ fontSize: "20px" }}></Modal.Title>
          {/* <AiFillCloseCircle onClick={handleClose} style={{ marginLeft: "190", cursor: "pointer" }} fontSize={40} /> */}
        </Modal.Header>
        <Modal.Body
          style={{
            marginTop: "-27px",
            backgroundColor: "#fffbfb",
            borderRadius: "30px 30px 0px 0px",
            marginBottom: "20px",
          }}
        >
          <div className="col-lg-12">
            <div className="container">
              <div className="row">
                <div className="d-flex">
                  <h3 style={{ marginTop: "20px", marginBottom: "20px" }}>
                    Responsibilities
                  </h3>
                  <div
                    className="col-lg-10 flex justify-end"
                    style={{ textAlign: "end" }}
                  >
                    <p
                      style={{
                        marginTop: "20px",
                        fontSize: "15px",
                        color: "#d8352f",
                      }}
                      onClick={pregnancies5}
                    >
                      Skip ≫
                    </p>
                  </div>
                </div>
                <p
                  style={{
                    MARGINTOP: "10PX",
                    fontWeight: "100",
                    color: "#333352",
                  }}
                >
                  <p style={{ padding: "5px", marginTop: "10px" }}>
                    {" "}
                    Are you (and your partner, if applicable) willing to not get
                    any new tattoos or piercings from this point until after you
                    have delivered?{" "}
                  </p>

                  <div className="d-flex">
                    <div className="d-flex item-center">
                      <input type="radio" name="agree" />
                      <label className="mt-2 ml-2">Yes</label>
                    </div>
                    <div className="d-flex ml-5">
                      <input type="radio" name="agree" />
                      <label className="ml-3 mt-2">No</label>
                    </div>
                  </div>

                  <p style={{ padding: "5px", marginTop: "10px" }}>
                    {" "}
                    Do you agree to abstain from any cosmetic procedures that
                    may pierce the skin or be considered invasive, such as
                    botox, injections, fillers, microblading, etc from this
                    point until after you have delivered?
                  </p>
                  <div className="d-flex">
                    <div className="d-flex item-center">
                      <input type="radio" name="agree" />
                      <label className="mt-2 ml-2">Yes</label>
                    </div>
                    <div className="d-flex ml-5">
                      <input type="radio" name="agree" />
                      <label className="ml-3 mt-2">No</label>
                    </div>
                  </div>

                  <p style={{ padding: "5px", marginTop: "10px" }}>
                    {" "}
                    Do you agree to abstain from alcohol, drugs, smoking,
                    vaping, marijuana products, tobacco products, etc during the
                    journey?
                  </p>
                  <div className="d-flex">
                    <div className="d-flex item-center">
                      <input type="radio" name="agree" />
                      <label className="mt-2 ml-2">Yes</label>
                    </div>
                    <div className="d-flex ml-5">
                      <input type="radio" name="agree" />
                      <label className="ml-3 mt-2">No</label>
                    </div>
                  </div>

                  <p style={{ padding: "5px", marginTop: "10px" }}>
                    {" "}
                    Are you willing to submit to drug, alcohol, or nicotine
                    testing throughout the surrogacy process?
                  </p>
                  <div className="d-flex">
                    <div className="d-flex item-center">
                      <input type="radio" name="agree" />
                      <label className="mt-2 ml-2">Yes</label>
                    </div>
                    <div className="d-flex ml-5">
                      <input type="radio" name="agree" />
                      <label className="ml-3 mt-2">No</label>
                    </div>
                  </div>
                </p>
              </div>
            </div>
          </div>

          {/* ------- */}
        </Modal.Body>

        <Modal.Footer style={{}}>
          <Button
            className="btn btn-primary"
            onClick={pregnancies5}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
          >
            Let’s go!
          </Button>
          <Button
            className="btn btn-primary"
            onClick={handleClose7}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
          >
            Close
          </Button>
          <Button variant="primary" onClick={back7}>
            back
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={show8}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handleClose5}
        style={{
          backgroundColor: "#ffffff87",
          borderRadius: "20px 20px 10px 10px",
        }}
      >
        {/* <Modal.Header closeButton> */}
        <Modal.Header
          style={{
            backgroundImage:
              "url(/mt-demo/109600/109604/mt-content/uploads/2020/07/8.jpeg)",
            height: "150px",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
          }}
        >
          {/* <i className='fa fa-close'>baloch</i>
                    <AiFillCloseCircle fontSize={20} /> */}
          <Modal.Title style={{ fontSize: "20px" }}></Modal.Title>
          {/* <AiFillCloseCircle onClick={handleClose} style={{ marginLeft: "190", cursor: "pointer" }} fontSize={40} /> */}
        </Modal.Header>
        <Modal.Body
          style={{
            marginTop: "-27px",
            backgroundColor: "#fffbfb",
            borderRadius: "30px 30px 0px 0px",
            marginBottom: "20px",
          }}
        >
          <div className="col-lg-12">
            <div className="container">
              <div className="row">
                <div className="d-flex">
                  <h3 style={{ marginTop: "20px", marginBottom: "20px" }}>
                    Communication and flexibility
                  </h3>
                  <div
                    className="col-lg-10 flex justify-end"
                    style={{ textAlign: "end" }}
                  >
                    <p
                      style={{
                        marginTop: "20px",
                        fontSize: "15px",
                        color: "#d8352f",
                      }}
                      onClick={pregnancies6}
                    >
                      Skip ≫
                    </p>
                  </div>
                </div>
                <p
                  style={{
                    MARGINTOP: "10PX",
                    fontWeight: "100",
                    color: "#333352",
                  }}
                >
                  <p style={{ padding: "5px", marginTop: "10px" }}>
                    {" "}
                    Communication and flexibility are extremely important to
                    ensuring a smooth and successful surrogacy journey.
                    Surrogates must commit to a high level of communication and
                    frequently check emails, phone calls and texts and respond
                    right away regarding surrogacy journey communication.
                    Surrogates must also agree to be as flexible as possible
                    with scheduling appointments and other things that are
                    imperative for moving the surrogacy journey forward and
                    ensuring all parties have the best possible experience.
                  </p>

                  <p style={{ padding: "5px", marginTop: "10px" }}>
                    {" "}
                    Do you agree to communicate promptly with the surrogacy
                    agency, intended parents, IVF clinic, and other
                    professionals involved in the journey?
                  </p>
                  <div className="d-flex">
                    <div className="d-flex item-center">
                      <input type="radio" name="agree" />
                      <label className="mt-2 ml-2">Yes</label>
                    </div>
                    <div className="d-flex ml-5">
                      <input type="radio" name="agree" />
                      <label className="ml-3 mt-2">No</label>
                    </div>
                  </div>

                  <p style={{ padding: "5px", marginTop: "10px" }}>
                    {" "}
                    Do you agree to abstain from alcohol, drugs, smoking,
                    vaping, marijuana products, tobacco products, etc during the
                    journey?
                  </p>
                  <div className="d-flex">
                    <div className="d-flex item-center">
                      <input type="radio" name="agree" />
                      <label className="mt-2 ml-2">Yes</label>
                    </div>
                    <div className="d-flex ml-5">
                      <input type="radio" name="agree" />
                      <label className="ml-3 mt-2">No</label>
                    </div>
                  </div>

                  <p style={{ padding: "5px", marginTop: "10px" }}>
                    {" "}
                    Do you understand that poor communication or not being
                    flexible may result in you not being able to move forward as
                    a surrogate?
                  </p>
                  <div className="d-flex">
                    <div className="d-flex item-center">
                      <input type="radio" name="agree" />
                      <label className="mt-2 ml-2">Yes</label>
                    </div>
                    <div className="d-flex ml-5">
                      <input type="radio" name="agree" />
                      <label className="ml-3 mt-2">No</label>
                    </div>
                  </div>
                </p>
              </div>
            </div>
          </div>

          {/* ------- */}
        </Modal.Body>

        <Modal.Footer style={{}}>
          <Button
            className="btn btn-primary"
            onClick={pregnancies6}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
          >
            Let’s go!
          </Button>
          <Button
            className="btn btn-primary"
            onClick={handleClose8}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
          >
            Close
          </Button>
          <Button variant="primary" onClick={back8}>
            back
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={show9}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handleClose5}
        style={{
          backgroundColor: "#ffffff87",
          borderRadius: "20px 20px 10px 10px",
        }}
      >
        {/* <Modal.Header closeButton> */}
        <Modal.Header
          style={{
            backgroundImage:
              "url(/mt-demo/109600/109604/mt-content/uploads/2020/07/8.jpeg)",
            height: "150px",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
          }}
        >
          {/* <i className='fa fa-close'>baloch</i>
                    <AiFillCloseCircle fontSize={20} /> */}
          <Modal.Title style={{ fontSize: "20px" }}></Modal.Title>
          {/* <AiFillCloseCircle onClick={handleClose} style={{ marginLeft: "190", cursor: "pointer" }} fontSize={40} /> */}
        </Modal.Header>
        <Modal.Body
          style={{
            marginTop: "-27px",
            backgroundColor: "#fffbfb",
            borderRadius: "30px 30px 0px 0px",
            marginBottom: "20px",
          }}
        >
          <div className="col-lg-12">
            <div className="container">
              <div className="row">
                <h3 style={{ marginTop: "20px", marginBottom: "20px" }}>
                  Embryo transfer questions
                </h3>
                <div
                  className="col-lg-10 flex justify-end"
                  style={{ textAlign: "end" }}
                >
                  <p
                    style={{
                      marginTop: "-40px",
                      fontSize: "15px",
                      color: "#d8352f",
                    }}
                    onClick={pregnancies7}
                  >
                    Skip ≫
                  </p>
                </div>

                <p
                  style={{
                    MARGINTOP: "10PX",
                    fontWeight: "100",
                    color: "#333352",
                  }}
                >
                  <p style={{ padding: "5px", marginTop: "10px" }}>
                    {" "}
                    How many embryos are you willing to have transferred at a
                    time?
                  </p>
                  <div className="col-lg-12 col-sm-12 col-xs-12 d-flex justify-content-start">
                    <div className="row">
                      {/* <div className="col-lg-4 col-sm-4 col-xs-4">
                        <input
                          type="radio"
                          id="Employed"
                          name="fav_language"
                          className="form-control"
                          value="Employed"
                        />
                      </div>
                      <div className="col-lg-8 col-sm-8 col-xs-8">
                        <label
                          for="html"
                          style={{ fontSize: "15px", marginLeft: "-60px" }}
                        >
                          SET (single embryo transfer)
                        </label>
                      </div> */}
                      <div className="d-flex col-lg-12">
                        <div className="col-lg-2 col-sm-2 col-xs-2">
                          <input
                            type="radio"
                            id="Yes – active duty"
                            name="fav_language"
                            className="form-control"
                            value="Not employed"

                            // style={{marginLeft:'-20px'}}
                          />
                        </div>

                        <div className="col-lg-6 col-sm-6 col-xs-6">
                          <label
                            for="html"
                            style={{ fontSize: "15px", marginLeft: "-30px" }}
                          >
                            SET (single embryo transfer)
                          </label>
                        </div>
                      </div>

                      <div className="d-flex col-lg-12">
                        <div className="col-lg-2 col-sm-2 col-xs-2">
                          <input
                            type="radio"
                            id="Yes – active duty"
                            name="fav_language"
                            className="form-control"
                            value="Not employed"

                            //   style={{marginLeft:'-20px'}}
                          />
                        </div>
                        <div className="col-lg-6 col-sm-6 col-xs-6">
                          <label
                            for="html"
                            style={{ fontSize: "15px", marginLeft: "-30px" }}
                          >
                            DET (double embryo transfer)
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p style={{ padding: "5px", marginTop: "10px" }}>
                    {" "}
                    If you transfer one embryo and it splits into identical
                    twins, would you be willing to carry the twin pregnancy?
                  </p>
                  <div className="d-flex col-lg-12">
                    <div className="col-lg-2 col-sm-2 col-xs-2">
                      <input
                        type="radio"
                        id="Yes – active duty"
                        name="fav_language"
                        className="form-control"
                        value="Not employed"

                        //   style={{marginLeft:'-20px'}}
                      />
                    </div>
                    <div className="col-lg-6 col-sm-6 col-xs-6">
                      <label
                        for="html"
                        style={{ fontSize: "15px", marginLeft: "-40px" }}
                      >
                        Yes
                      </label>
                    </div>
                  </div>

                  <div className="d-flex col-lg-12">
                    <div className="col-lg-2 col-sm-2 col-xs-2">
                      <input
                        type="radio"
                        id="Yes – active duty"
                        name="fav_language"
                        className="form-control"
                        value="Not employed"

                        //   style={{marginLeft:'-20px'}}
                      />
                    </div>
                    <div className="col-lg-6 col-sm-6 col-xs-6">
                      <label
                        for="html"
                        style={{ fontSize: "15px", marginLeft: "-40px" }}
                      >
                        No
                      </label>
                    </div>
                  </div>

                  <p style={{ padding: "5px", marginTop: "10px" }}>
                    {" "}
                    How many babies are you willing to carry?
                  </p>
                  <div className="d-flex col-lg-12">
                    <div className="col-lg-2 col-sm-2 col-xs-2">
                      <input
                        type="radio"
                        id="Yes – active duty"
                        name="fav_language"
                        className="form-control"
                        value="Not employed"

                        // style={{marginLeft:'-20px'}}
                      />
                    </div>

                    <div className="col-lg-6 col-sm-6 col-xs-6">
                      <label
                        for="html"
                        style={{ fontSize: "15px", marginLeft: "-40px" }}
                      >
                        Singleton only
                      </label>
                    </div>
                  </div>

                  <div className="d-flex col-lg-12">
                    <div className="col-lg-2 col-sm-2 col-xs-2">
                      <input
                        type="radio"
                        id="Yes – active duty"
                        name="fav_language"
                        className="form-control"
                        value="Not employed"

                        //   style={{marginLeft:'-20px'}}
                      />
                    </div>
                    <div className="col-lg-6 col-sm-6 col-xs-6">
                      <label
                        for="html"
                        style={{ fontSize: "15px", marginLeft: "-40px" }}
                      >
                        Twins
                      </label>
                    </div>
                  </div>

                  <div className="d-flex col-lg-12">
                    <div className="col-lg-2 col-sm-2 col-xs-2">
                      <input
                        type="radio"
                        id="Yes – active duty"
                        name="fav_language"
                        className="form-control"
                        value="Not employed"

                        //   style={{marginLeft:'-20px'}}
                      />
                    </div>
                    <div className="col-lg-6 col-sm-6 col-xs-6">
                      <label
                        for="html"
                        style={{ fontSize: "15px", marginLeft: "-40px" }}
                      >
                        Triplets
                      </label>
                    </div>
                  </div>

                  <div className="d-flex col-lg-12">
                    <div className="col-lg-2 col-sm-2 col-xs-2">
                      <input
                        type="radio"
                        id="Yes – active duty"
                        name="fav_language"
                        className="form-control"
                        value="Not employed"

                        //   style={{marginLeft:'-20px'}}
                      />
                    </div>
                    <div className="col-lg-6 col-sm-6 col-xs-6">
                      <label
                        for="html"
                        style={{ fontSize: "15px", marginLeft: "-40px" }}
                      >
                        Quads +
                      </label>
                    </div>
                  </div>
                </p>
              </div>
            </div>
          </div>

          {/* ------- */}
        </Modal.Body>

        <Modal.Footer style={{}}>
          <Button
            className="btn btn-primary"
            onClick={pregnancies7}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
          >
            Let’s go!
          </Button>
          <Button
            className="btn btn-primary"
            onClick={handleClose9}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
          >
            Close
          </Button>
          <Button variant="primary" onClick={back9}>
            back
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={show10}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handleClose5}
        style={{
          backgroundColor: "#ffffff87",
          borderRadius: "20px 20px 10px 10px",
        }}
      >
        {/* <Modal.Header closeButton> */}
        <Modal.Header
          style={{
            backgroundImage:
              "url(/mt-demo/109600/109604/mt-content/uploads/2020/07/8.jpeg)",
            height: "150px",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
          }}
        >
          {/* <i className='fa fa-close'>baloch</i>
                    <AiFillCloseCircle fontSize={20} /> */}
          <Modal.Title style={{ fontSize: "20px" }}></Modal.Title>
          {/* <AiFillCloseCircle onClick={handleClose} style={{ marginLeft: "190", cursor: "pointer" }} fontSize={40} /> */}
        </Modal.Header>
        <Modal.Body
          style={{
            marginTop: "-27px",
            backgroundColor: "#fffbfb",
            borderRadius: "30px 30px 0px 0px",
            marginBottom: "20px",
          }}
        >
          <div className="col-lg-12">
            <div className="container">
              <div className="row">
                <h3 style={{ marginTop: "20px", marginBottom: "20px" }}>
                Reduction and termination

                </h3>
                <div
                  className="col-lg-10 flex justify-end"
                  style={{ textAlign: "end" }}
                >
                  <p
                    style={{
                      marginTop: "-40px",
                      fontSize: "15px",
                      color: "#d8352f",
                    }}
                    onClick={pregnancies7}
                  >
                    Skip ≫
                  </p>
                </div>

                <p
                  style={{
                    MARGINTOP: "10PX",
                    fontWeight: "100",
                    color: "#333352",
                  }}
                >
                  <p style={{ padding: "5px", marginTop: "10px" }}>
                    {" "}
                    Let's get real for a moment. The next several questions will discuss pregnancy reduction and termination. Please know that intended parents go into this journey longing to have a baby, and would never take these scenarios lightly. One way many surrogates have approached this is to think that just as you were able to make your own parenting choices when pregnant with your children, being open in these scenarios allows the intended parents to make their own parenting decisions, even if their choices may be different than what you may have decided in your own pregnancies. Of course, please don't feel pressured either way and answer honestly with what you would be okay with.


                  </p>
                  <div className="col-lg-12 col-sm-12 col-xs-12 d-flex justify-content-start">
                    <div className="row">
                      {/* <div className="col-lg-4 col-sm-4 col-xs-4">
                        <input
                          type="radio"
                          id="Employed"
                          name="fav_language"
                          className="form-control"
                          value="Employed"
                        />
                      </div>
                      <div className="col-lg-8 col-sm-8 col-xs-8">
                        <label
                          for="html"
                          style={{ fontSize: "15px", marginLeft: "-60px" }}
                        >
                          SET (single embryo transfer)
                        </label>
                      </div> */}
                       <p style={{ padding: "5px", marginTop: "10px" }}>
                        Are you willing to reduce from triplets to twins for medical reasons?
                  </p>
                      <div className="d-flex col-lg-12">
                        <div className="col-lg-2 col-sm-2 col-xs-2">
                          <input
                            type="radio"
                            id="Yes – active duty"
                            name="fav_language"
                            className="form-control"
                            value="Not employed"

                            // style={{marginLeft:'-20px'}}
                          />
                        </div>

                        <div className="col-lg-6 col-sm-6 col-xs-6">
                          <label
                            for="html"
                            style={{ fontSize: "15px", marginLeft: "-30px" }}
                          >
                            Yes
                          </label>
                        </div>
                      </div>

                      <div className="d-flex col-lg-12">
                        <div className="col-lg-2 col-sm-2 col-xs-2">
                          <input
                            type="radio"
                            id="Yes – active duty"
                            name="fav_language"
                            className="form-control"
                            value="Not employed"

                            //   style={{marginLeft:'-20px'}}
                          />
                        </div>
                        <div className="col-lg-6 col-sm-6 col-xs-6">
                          <label
                            for="html"
                            style={{ fontSize: "15px", marginLeft: "-30px" }}
                          >
                            No
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p style={{ padding: "5px", marginTop: "10px" }}>
                    {" "}
                    Are you willing to reduce from twins to a singleton for medical reasons?

                  </p>
                  <div className="d-flex col-lg-12">
                    <div className="col-lg-2 col-sm-2 col-xs-2">
                      <input
                        type="radio"
                        id="Yes – active duty"
                        name="fav_language"
                        className="form-control"
                        value="Not employed"

                        //   style={{marginLeft:'-20px'}}
                      />
                    </div>
                    <div className="col-lg-6 col-sm-6 col-xs-6">
                      <label
                        for="html"
                        style={{ fontSize: "15px", marginLeft: "-40px" }}
                      >
                        Yes
                      </label>
                    </div>
                  </div>

                  <div className="d-flex col-lg-12">
                    <div className="col-lg-2 col-sm-2 col-xs-2">
                      <input
                        type="radio"
                        id="Yes – active duty"
                        name="fav_language"
                        className="form-control"
                        value="Not employed"

                        //   style={{marginLeft:'-20px'}}
                      />
                    </div>
                    <div className="col-lg-6 col-sm-6 col-xs-6">
                      <label
                        for="html"
                        style={{ fontSize: "15px", marginLeft: "-40px" }}
                      >
                        No
                      </label>
                    </div>
                  </div>

                
                  <p style={{ padding: "5px", marginTop: "10px" }}>
                  Are you willing to terminate the pregnancy if your life is at risk?
                  </p>
                      <div className="d-flex col-lg-12">
                        <div className="col-lg-2 col-sm-2 col-xs-2">
                          <input
                            type="radio"
                            id="Yes – active duty"
                            name="fav_language"
                            className="form-control"
                            value="Not employed"

                            // style={{marginLeft:'-20px'}}
                          />
                        </div>

                        <div className="col-lg-6 col-sm-6 col-xs-6">
                          <label
                            for="html"
                            style={{ fontSize: "15px", marginLeft: "-30px" }}
                          >
                            Yes
                          </label>
                        </div>
                      </div>

                      <div className="d-flex col-lg-12">
                        <div className="col-lg-2 col-sm-2 col-xs-2">
                          <input
                            type="radio"
                            id="Yes – active duty"
                            name="fav_language"
                            className="form-control"
                            value="Not employed"

                            //   style={{marginLeft:'-20px'}}
                          />
                        </div>
                        <div className="col-lg-6 col-sm-6 col-xs-6">
                          <label
                            for="html"
                            style={{ fontSize: "15px", marginLeft: "-30px" }}
                          >
                            No
                          </label>
                        </div>
                      </div>

                      <p style={{ padding: "5px", marginTop: "10px" }}>
                      Are you willing to reduce or terminate the pregnancy if the baby will not survive?
                  </p>
                      <div className="d-flex col-lg-12">
                        <div className="col-lg-2 col-sm-2 col-xs-2">
                          <input
                            type="radio"
                            id="Yes – active duty"
                            name="fav_language"
                            className="form-control"
                            value="Not employed"

                            // style={{marginLeft:'-20px'}}
                          />
                        </div>

                        <div className="col-lg-6 col-sm-6 col-xs-6">
                          <label
                            for="html"
                            style={{ fontSize: "15px", marginLeft: "-30px" }}
                          >
                            Yes
                          </label>
                        </div>
                      </div>

                      <div className="d-flex col-lg-12">
                        <div className="col-lg-2 col-sm-2 col-xs-2">
                          <input
                            type="radio"
                            id="Yes – active duty"
                            name="fav_language"
                            className="form-control"
                            value="Not employed"

                            //   style={{marginLeft:'-20px'}}
                          />
                        </div>
                        <div className="col-lg-6 col-sm-6 col-xs-6">
                          <label
                            for="html"
                            style={{ fontSize: "15px", marginLeft: "-30px" }}
                          >
                            No
                          </label>
                        </div>
                      </div>



                      <p style={{ padding: "5px", marginTop: "10px" }}>
                      Are you willing to reduce or terminate the pregnancy if there is a medical reason or abnormality?
                  </p>
                      <div className="d-flex col-lg-12">
                        <div className="col-lg-2 col-sm-2 col-xs-2">
                          <input
                            type="radio"
                            id="Yes – active duty"
                            name="fav_language"
                            className="form-control"
                            value="Not employed"

                            // style={{marginLeft:'-20px'}}
                          />
                        </div>

                        <div className="col-lg-6 col-sm-6 col-xs-6">
                          <label
                            for="html"
                            style={{ fontSize: "15px", marginLeft: "-30px" }}
                          >
                            Yes
                          </label>
                        </div>
                      </div>

                      <div className="d-flex col-lg-12">
                        <div className="col-lg-2 col-sm-2 col-xs-2">
                          <input
                            type="radio"
                            id="Yes – active duty"
                            name="fav_language"
                            className="form-control"
                            value="Not employed"

                            //   style={{marginLeft:'-20px'}}
                          />
                        </div>
                        <div className="col-lg-6 col-sm-6 col-xs-6">
                          <label
                            for="html"
                            style={{ fontSize: "15px", marginLeft: "-30px" }}
                          >
                            No
                          </label>
                        </div>
                      </div>


                      <p style={{ padding: "5px", marginTop: "10px" }}>
                      Are you willing to reduce or terminate if the baby is diagnosed with Down Syndrome?
                  </p>
                      <div className="d-flex col-lg-12">
                        <div className="col-lg-2 col-sm-2 col-xs-2">
                          <input
                            type="radio"
                            id="Yes – active duty"
                            name="fav_language"
                            className="form-control"
                            value="Not employed"

                            // style={{marginLeft:'-20px'}}
                          />
                        </div>

                        <div className="col-lg-6 col-sm-6 col-xs-6">
                          <label
                            for="html"
                            style={{ fontSize: "15px", marginLeft: "-30px" }}
                          >
                            Yes
                          </label>
                        </div>
                      </div>

                      <div className="d-flex col-lg-12">
                        <div className="col-lg-2 col-sm-2 col-xs-2">
                          <input
                            type="radio"
                            id="Yes – active duty"
                            name="fav_language"
                            className="form-control"
                            value="Not employed"

                            //   style={{marginLeft:'-20px'}}
                          />
                        </div>
                        <div className="col-lg-6 col-sm-6 col-xs-6">
                          <label
                            for="html"
                            style={{ fontSize: "15px", marginLeft: "-30px" }}
                          >
                            No
                          </label>
                        </div>
                      </div>
                </p>
              </div>
            </div>
          </div>

          {/* ------- */}
        </Modal.Body>

        <Modal.Footer style={{}}>
          <Button
            className="btn btn-primary"
            onClick={pregnancies7}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
          >
            Let’s go!
          </Button>
          <Button
            className="btn btn-primary"
            onClick={handleClose10}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
          >
            Close
          </Button>
          <Button variant="primary" onClick={back9}>
            back
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Main JS*/}
      {/* This templates was made by Colorlib (https://colorlib.com) */}
      {/* end document*/}

      <div
        className="card"
        style={{
          padding: "20px",
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        }}
        onClick={g3}
      >
        <div className="card-body">
          <div className="row">
            <div className="col-lg-6">
              <h1 style={{ fontSize: "20px" }}>Surrogacy Journey</h1>
            </div>
            <div className="col-lg-2 d-flex flex-row">
              <img
                src="/mt-demo/109600/109604/mt-content/uploads/2020/07/list.png"
                alt="hospital"
                style={{ width: "25px" }}
              />
              <p style={{ marginLeft: "10px" }}>0/2</p>
            </div>
            <div className="col-lg-2 d-flex flex-row">
              {/* <img src="/mt-demo/109600/109604/mt-content/uploads/2020/07/gears.png"  alt="hospital"
        style={{width:'20px'}}
        /> */}
              <p
                style={{
                  marginLeft: "10px",
                  backgroundColor: "#f1f1f1",
                  borderRadius: "5px",
                }}
              >
                in Progress
              </p>
            </div>

            <div className="col-lg-2 d-flex flex-row">
              <img
                src="/mt-demo/109600/109604/mt-content/uploads/2020/07/clock.png"
                alt="hospital"
                style={{
                  width: "25px",
                  backgroundColor: "#f1f1f1",
                  borderRadius: "21px",
                }}
              />
              {/* <p style={{marginLeft:'10px', backgroundColor:'#f1f1f1', borderRadius:'5px'}}>in Progress</p> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SurrogacyJourney;
