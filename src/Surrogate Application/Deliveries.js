import React from "react";
import BaseUrl from "../baseurl/BaseUrl";
// import { PostApiWithOutToken } from "../Helper/helper";
import { PostApi } from "../Helper/helper";

import { useState } from "react";
import "../Surrogate Application/register.css";
import Spinner from "react-bootstrap/Spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import {  useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
const Deliveries = () => {
  const [loder, setloader] = useState(false);

  const [show4, setShow4] = useState(false);
  const handleClose4 = () => setShow4(false);

  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [value4, setValue4] = useState("");
  const [value5, setValue5] = useState("");
  const [value6, setValue6] = useState("");
  const [value7, setValue7] = useState("");

  const [value8, setValue8] = useState("");
  const [value9, setValue9] = useState("");
  const [value10, setValue10] = useState("");
  const [value11, setValue11] = useState("");
  const [value12, setValue12] = useState("");
  const [value13, setValue13] = useState("");
  const [value14, setValue14] = useState("");

  const [selectedOption, setSelectedOption] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");
  const [selectedOption3, setSelectedOption3] = useState("");
  const [selectedOption4, setSelectedOption4] = useState("");
  const [selectedOption5, setSelectedOption5] = useState("");
  const [selectedOption6, setSelectedOption6] = useState("");
  const [selectedOption7, setSelectedOption7] = useState("");

  const token = localStorage.getItem("token");

  const spread1 = [value3, value9];
  const spread2 = [value4, value10];
  const spread3 = [value6, value12];
  const spread4 = [value5, value11];
  const spread5 = [selectedOption, selectedOption4];
  const spread8 = [selectedOption2, selectedOption5];
  const spread9 = [selectedOption3, selectedOption6];

  const spread6 = [value7, value13];
  const spread7 = [value8, value14];

  const onSubmit = () => {
    setloader(true);
    // setShow2(false);
    // console.log("packageId,", packageId, token1.id);
    const formData = new FormData();
    formData.append("total_dilveries", value1);
    formData.append("many_c_sections", value2);
    ///////Skip 3 one ///////////////
    formData.append("baby_first_name[0]", spread1);
    formData.append("baby_dob[0]", spread2);
    formData.append("baby_weight_ounce[0]", spread3);
    formData.append("baby_weight_pound[0]", spread4);
    formData.append("type_of_delivery[0]", spread5);
    formData.append("weeks_pregnant[0]", spread6);
    formData.append("singleton_or_twin_pregnancy[0]", spread7);
    formData.append(
      "complications_during_this_pregnancy_or_delivery[0]",
      spread8
    );
    formData.append("medications_during_this_pregnancy[0]", spread9);
    formData.append("surrogacy_pregnancy[0]", selectedOption7);

    PostApi(`${BaseUrl.baseUrl}surrogate/delivery`, formData, token)
      .then((data) => {
        console.log("data=====", data.data.message);
        setloader(false);
     
        toast(data.data.message);
        console.log(data.data.message);
        setTimeout(() => {
          handleClose12()
        }, 2000);
        // show13(false);

        // statusll("approved")
      })

      .catch((err) => {
        console.log("errr", err);
        setloader(false);
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

  const isButtonDisabled = !value1 || !value2;
  const isButtonDisabled2 = !value3 || !value4 || !value5 || !value6;
  const isButtonDisabled3 = !selectedOption || !value7 || !value8;
  const isButtonDisabled4 = !selectedOption2 || !selectedOption3;
  const isButtonDisabled5 = !value9 || !value10 || !value11 || !value12;
  const isButtonDisabled6 = !selectedOption4 || !value13 || !value14;
  const isButtonDisabled7 = !selectedOption5 || !selectedOption6;
  // const isButtonDisabled8 = !selectedOption7;

 

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
  const [show11, setShow11] = useState(false);
  const [show12, setShow12] = useState(false);

  const handleClose6 = () => setShow6(false);
  const handleClose7 = () => setShow7(false);
  const handleClose8 = () => setShow8(false);
  const handleClose9 = () => setShow9(false);
  const handleClose10 = () => setShow10(false);
  const handleClose11 = () => setShow11(false);
  const handleClose12 = () => setShow12(false);

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

  const back10 = () => {
    setShow10(false);
    setShow9(true);
  };

  const back11 = () => {
    setShow11(false);
    setShow10(true);
  };
  const back12 = () => {
    setShow12(false);
    setShow11(true);
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

  const pregnancies8 = () => {
    setShow11(true);
    setShow10(false);
  };

  const pregnancies9 = () => {
    setShow12(true);
    setShow11(false);
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
                  Tell us about your wonderful deliveries!
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
                    ✔️ Now we will ask detailed questions about each pregnancy
                    and delivery you’ve had
                  </p>
                  <p style={{ padding: "5px" }}>
                    {" "}
                    ✔️ This section is for deliveries of your own children and
                    any surrogacy deliveries
                  </p>
                  <p style={{ padding: "5px" }}>
                    {" "}
                    ✔️ This section could take between 5-15 minutes depending on
                    how many deliveries you’ve had
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
            Next
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
                    How many total deliveries have you had?
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
                  className="w-100"
                >
                  <input
                    type="text"
                    className="form-control "
                    placeholder=""
                    style={{ padding: "18px", borderRadius: "10px" }}
                    value={value1}
                    onChange={(e) => setValue1(e.target.value)}
                  />

                  <p style={{ padding: "5px", marginTop: "10px" }}>
                    {" "}
                    How many C-Sections have you had?
                  </p>

                  <input
                    type="text"
                    className="form-control w-100"
                    placeholder=""
                    style={{ padding: "18px", borderRadius: "10px" }}
                    value={value2}
                    onChange={(e) => setValue2(e.target.value)}
                  />
                </p>
              </div>
            </div>
          </div>

          {/* ------- */}
        </Modal.Body>

        <Modal.Footer style={{}}>
          <Button variant="primary" onClick={back5}>
            back
          </Button>
          <Button
            className="btn btn-primary"
            onClick={pregnancies3}
            disabled={isButtonDisabled}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
          >
            Next
          </Button>

          <Button
            className="btn btn-primary"
            onClick={handleClose5}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
          >
            Close
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
                  Details for Delivery 1
                </h3>
                <div
                  className="col-lg-10 flex justify-end"
                  style={{ textAlign: "end" }}
                >
                  <p
                    style={{
                      marginTop: "-30px",
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
                  className="w-100"
                >
                  <p style={{ padding: "5px", marginTop: "10px" }}>
                    {" "}
                    Baby’s first name (do not include last name)
                  </p>

                  <input
                    type="text"
                    className="form-control"
                    placeholder=""
                    style={{ padding: "18px", borderRadius: "10px" }}
                    value={value3}
                    onChange={(e) => setValue3(e.target.value)}
                  />

                  <p style={{ padding: "5px", marginTop: "10px" }}>
                    {" "}
                    Date of birth
                  </p>

                  <input
                    type="date"
                    className="form-control "
                    placeholder=""
                    style={{ padding: "18px", borderRadius: "10px" }}
                    value={value4}
                    onChange={(e) => setValue4(e.target.value)}
                  />

                  <p style={{ padding: "5px", marginTop: "10px" }}>
                    {" "}
                    Birth weight (pounds)
                  </p>

                  <input
                    type="text"
                    className="form-control"
                    placeholder=""
                    style={{ padding: "18px", borderRadius: "10px" }}
                    value={value5}
                    onChange={(e) => setValue5(e.target.value)}
                  />

                  <p style={{ padding: "5px", marginTop: "10px" }}>
                    {" "}
                    Birth weight (ounces)
                  </p>

                  <input
                    type="text"
                    className="form-control "
                    placeholder=""
                    style={{ padding: "18px", borderRadius: "10px" }}
                    value={value6}
                    onChange={(e) => setValue6(e.target.value)}
                  />
                </p>
              </div>
            </div>
          </div>

          {/* ------- */}
        </Modal.Body>

        <Modal.Footer style={{}}>
          <Button variant="primary" onClick={back6}>
            back
          </Button>
          <Button
            className="btn btn-primary"
            onClick={pregnancies4}
            disabled={isButtonDisabled2}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
          >
            Next
          </Button>
          <Button
            className="btn btn-primary"
            onClick={handleClose6}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
          >
            Close
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
              <div className="row flex flex-column">
                <div className="d-flex justify-content-between">
                  <h3 style={{ marginTop: "15px", marginBottom: "20px" }}>
                    Details for Delivery 1
                  </h3>
                  <div
                    className="col-lg- flex justify-end"
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
                  <p style={{ padding: "5px", marginTop: "25px" }}>
                    {" "}
                    What type of delivery was this?
                  </p>

                  <div className="d-flex col-lg-12">
                    <div className="col-lg-1 col-sm-1 col-xs-1">
                      <input
                        type="radio"
                        id="Yes – active duty"
                        name="fav_language"
                        className="form-control"
                        value="Vaginal"
                        style={{ width: "18px" }}
                        checked={selectedOption === "Vaginal"}
                        onChange={(e) => setSelectedOption(e.target.value)}
                        // style={{marginLeft:'-20px'}}
                      />
                    </div>

                    <div className="col-lg-6 col-sm-6 col-xs-6">
                      <label
                        for="html"
                        style={{ fontSize: "15px", marginLeft: "-20px" }}
                      >
                        Vaginal
                      </label>
                    </div>
                  </div>

                  <div className="d-flex col-lg-12">
                    <div className="col-lg-1 col-sm-1 col-xs-1">
                      <input
                        type="radio"
                        id="Yes – active duty"
                        name="fav_language"
                        className="form-control"
                        value="C-Section"
                        style={{ width: "18px" }}
                        checked={selectedOption === "C-Section"}
                        onChange={(e) => setSelectedOption(e.target.value)}

                        // style={{marginLeft:'-20px'}}
                      />
                    </div>

                    <div className="col-lg-6 col-sm-6 col-xs-6">
                      <label
                        for="html"
                        style={{ fontSize: "15px", marginLeft: "-20px" }}
                      >
                        C-Section
                      </label>
                    </div>
                  </div>

                  <p style={{ padding: "5px", marginTop: "15px" }}>
                    {" "}
                    How many weeks pregnant were you when you delivered?
                  </p>

                  <input
                    type="text"
                    className="form-control w-100"
                    placeholder=""
                    style={{ padding: "18px", borderRadius: "10px" }}
                    value={value7}
                    onChange={(e) => setValue7(e.target.value)}
                  />

                  <p style={{ padding: "5px", marginTop: "15px" }}>
                    {" "}
                    Was this a singleton or twin pregnancy?
                  </p>

                  <input
                    type="text"
                    className="form-control w-100"
                    placeholder=""
                    style={{ padding: "18px", borderRadius: "10px" }}
                    value={value8}
                    onChange={(e) => setValue8(e.target.value)}
                  />
                </p>
              </div>
            </div>
          </div>

          {/* ------- */}
        </Modal.Body>

        <Modal.Footer style={{}}>
          <Button variant="primary" onClick={back7}>
            back
          </Button>
          <Button
            className="btn btn-primary"
            onClick={pregnancies5}
            disabled={isButtonDisabled3}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
          >
            Next
          </Button>
          <Button
            className="btn btn-primary"
            onClick={handleClose7}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
          >
            Close
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
                <div className="d-flex justify-content-between">
                  <h3 style={{ marginTop: "20px", marginBottom: "20px" }}>
                    Details for Delivery 1
                  </h3>
                  <div className=" flex" style={{ textAlign: "end" }}>
                    <p
                      style={{
                        marginTop: "20px",
                        fontSize: "15px",
                        color: "#d8352f",
                        marginLeft: "250px",
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
                  <p style={{ padding: "5px", marginTop: "25px" }}>
                    {" "}
                    Any complications during this pregnancy or delivery?
                  </p>

                  <div className="d-flex col-lg-12">
                    <div className="col-lg-1 col-sm-1 col-xs-1">
                      <input
                        type="radio"
                        id="Yes – active duty"
                        name="same2"
                        className="form-control"
                        value="Yes"
                        style={{ width: "15px" }}
                        checked={selectedOption2 === "Yes"}
                        onChange={(e) => setSelectedOption2(e.target.value)}

                        // style={{marginLeft:'-20px'}}
                      />
                    </div>

                    <div className="col-lg-6 col-sm-6 col-xs-6">
                      <label
                        for="html"
                        style={{ fontSize: "15px", marginLeft: "-10px" }}
                      >
                        Yes
                      </label>
                    </div>
                  </div>

                  <div className="d-flex col-lg-12">
                    <div className="col-lg-1 col-sm-1 col-xs-1">
                      <input
                        type="radio"
                        id="Yes – active duty"
                        name="same2"
                        className="form-control"
                        value="No"
                        style={{ width: "15px" }}
                        checked={selectedOption2 === "No"}
                        onChange={(e) => setSelectedOption2(e.target.value)}

                        // style={{marginLeft:'-20px'}}
                      />
                    </div>

                    <div className="col-lg-6 col-sm-6 col-xs-6">
                      <label
                        for="html"
                        style={{ fontSize: "15px", marginLeft: "-10px" }}
                      >
                        No
                      </label>
                    </div>
                  </div>

                  <p style={{ padding: "5px", marginTop: "25px" }}>
                    {" "}
                    Did you take any medications during this pregnancy or after
                    delivery?
                  </p>

                  <div className="d-flex col-lg-12">
                    <div className="col-lg-1 col-sm-1 col-xs-1">
                      <input
                        type="radio"
                        id="Yes – active duty"
                        name="same3"
                        className="form-control"
                        value="Yes"
                        style={{ width: "15px" }}
                        checked={selectedOption3 === "Yes"}
                        onChange={(e) => setSelectedOption3(e.target.value)}

                        // style={{marginLeft:'-20px'}}
                      />
                    </div>

                    <div className="col-lg-6 col-sm-6 col-xs-6">
                      <label
                        for="html"
                        style={{ fontSize: "15px", marginLeft: "-10px" }}
                      >
                        Yes
                      </label>
                    </div>
                  </div>

                  <div className="d-flex col-lg-12">
                    <div className="col-lg-1 col-sm-1 col-xs-1">
                      <input
                        type="radio"
                        id="Yes – active duty"
                        name="same3"
                        className="form-control"
                        value="No"
                        style={{ width: "15px" }}
                        checked={selectedOption3 === "No"}
                        onChange={(e) => setSelectedOption3(e.target.value)}
                      />
                    </div>

                    <div className="col-lg-6 col-sm-6 col-xs-6">
                      <label
                        for="html"
                        style={{ fontSize: "15px", marginLeft: "-10px" }}
                      >
                        No
                      </label>
                    </div>
                  </div>

                  <p style={{ padding: "5px", marginTop: "10px" }}></p>
                </p>
              </div>
            </div>
          </div>

          {/* ------- */}
        </Modal.Body>

        <Modal.Footer style={{}}>
          <Button variant="primary" onClick={back8}>
            back
          </Button>

          <Button
            className="btn btn-primary"
            onClick={pregnancies6}
            disabled={isButtonDisabled4}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
          >
            Next
          </Button>
          <Button
            className="btn btn-primary"
            onClick={handleClose8}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
          >
            Close
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
                  Details for Delivery 2
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
                        {" "}
                        Baby’s first name (do not include last name)
                      </p>

                      <input
                        type="text"
                        className="form-control "
                        placeholder=""
                        style={{ padding: "18px", borderRadius: "10px" }}
                        value={value9}
                        onChange={(e) => setValue9(e.target.value)}
                      />

                      <p style={{ padding: "5px", marginTop: "10px" }}>
                        {" "}
                        Date of birth
                      </p>

                      <input
                        type="date"
                        className="form-control "
                        placeholder=""
                        style={{ padding: "18px", borderRadius: "10px" }}
                        value={value10}
                        onChange={(e) => setValue10(e.target.value)}
                      />

                      <p style={{ padding: "5px", marginTop: "10px" }}>
                        {" "}
                        Birth weight (pounds)
                      </p>

                      <input
                        type="number"
                        className="form-control "
                        placeholder=""
                        style={{ padding: "18px", borderRadius: "10px" }}
                        value={value11}
                        onChange={(e) => setValue11(e.target.value)}
                      />

                      <p style={{ padding: "5px", marginTop: "10px" }}>
                        {" "}
                        Birth weight (ounces)
                      </p>

                      <input
                        type="number"
                        className="form-control "
                        placeholder=""
                        style={{ padding: "18px", borderRadius: "10px" }}
                        value={value12}
                        onChange={(e) => setValue12(e.target.value)}
                      />
                    </div>
                  </div>
                </p>
              </div>
            </div>
          </div>

          {/* ------- */}
        </Modal.Body>

        <Modal.Footer style={{}}>
          <Button variant="primary" onClick={back9}>
            back
          </Button>
          <Button
            className="btn btn-primary"
            onClick={pregnancies7}
            disabled={isButtonDisabled5}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
          >
            Next
          </Button>
          <Button
            className="btn btn-primary"
            onClick={handleClose9}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
          >
            Close
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
                  Details for Delivery 2
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
                    onClick={pregnancies8}
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
                        What type of delivery was this?
                      </p>
                      <div className="d-flex col-lg-12">
                        <div className="col-lg-1 col-sm-1 col-xs-1">
                          <input
                            type="radio"
                            id="Yes – active duty"
                            name="same4"
                            className="form-control"
                            value="Vaginal"
                            style={{ width: "16px" }}
                            checked={selectedOption4 === "Vaginal"}
                            onChange={(e) => setSelectedOption4(e.target.value)}

                            // style={{marginLeft:'-20px'}}
                          />
                        </div>

                        <div className="col-lg-6 col-sm-6 col-xs-6">
                          <label
                            for="html"
                            style={{ fontSize: "15px", marginLeft: "-10px" }}
                          >
                            Vaginal
                          </label>
                        </div>
                      </div>

                      <div className="d-flex col-lg-12">
                        <div className="col-lg-1 col-sm-1 col-xs-1">
                          <input
                            type="radio"
                            id="Yes – active duty"
                            name="same4"
                            className="form-control"
                            value="C-Section"
                            style={{ width: "16px" }}
                            checked={selectedOption4 === "C-Section"}
                            onChange={(e) => setSelectedOption4(e.target.value)}
                            //   style={{marginLeft:'-20px'}}
                          />
                        </div>
                        <div className="col-lg-6 col-sm-6 col-xs-6">
                          <label
                            for="html"
                            style={{ fontSize: "15px", marginLeft: "-10px" }}
                          >
                            C-Section
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p style={{ padding: "5px", marginTop: "10px" }}>
                    How many weeks pregnant were you when you delivered?
                  </p>
                  <div className="d-flex col-lg-12">
                    <input
                      type="text"
                      className="form-control"
                      style={{ padding: "18px", borderRadius: "4px" }}
                      value={value13}
                      onChange={(e) => setValue13(e.target.value)}
                    />
                  </div>

                  <p style={{ padding: "5px", marginTop: "10px" }}>
                    Was this a singleton or twin pregnancy?
                  </p>
                  <div className="d-flex col-lg-12">
                    <input
                      type="text"
                      className="form-control"
                      style={{ padding: "18px", borderRadius: "4px" }}
                      value={value14}
                      onChange={(e) => setValue14(e.target.value)}
                    />
                  </div>
                </p>
              </div>
            </div>
          </div>

          {/* ------- */}
        </Modal.Body>

        <Modal.Footer style={{}}>
          <Button variant="primary" onClick={back10}>
            back
          </Button>
          <Button
            className="btn btn-primary"
            onClick={pregnancies8}
            disabled={isButtonDisabled6}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
          >
            Next
          </Button>
          <Button
            className="btn btn-primary"
            onClick={handleClose10}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={show11}
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
                  Details for Delivery 2
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
                    onClick={pregnancies9}
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
                    Any complications during this pregnancy or delivery?
                  </p>

                  <div className="d-flex col-lg-12">
                    <div className="col-lg-1 col-sm-1 col-xs-1">
                      <input
                        type="radio"
                        id="Yes – active duty"
                        name="Same5"
                        className="form-control"
                        value="Yes"
                        style={{ width: "16px" }}
                        checked={selectedOption5 === "Yes"}
                        onChange={(e) => setSelectedOption5(e.target.value)}

                        // style={{marginLeft:'-20px'}}
                      />
                    </div>

                    <div className="col-lg-6 col-sm-6 col-xs-6">
                      <label
                        for="html"
                        style={{ fontSize: "15px", marginLeft: "-10px" }}
                      >
                        Yes
                      </label>
                    </div>
                  </div>

                  <div className="d-flex col-lg-12">
                    <div className="col-lg-1 col-sm-1 col-xs-1">
                      <input
                        type="radio"
                        id="Yes – active duty"
                        name="Same5"
                        className="form-control"
                        value="No"
                        style={{ width: "16px" }}
                        checked={selectedOption5 === "No"}
                        onChange={(e) => setSelectedOption5(e.target.value)}

                        // style={{marginLeft:'-20px'}}
                      />
                    </div>

                    <div className="col-lg-6 col-sm-6 col-xs-6">
                      <label
                        for="html"
                        style={{ fontSize: "15px", marginLeft: "-10px" }}
                      >
                        No
                      </label>
                    </div>
                  </div>

                  <p style={{ padding: "5px", marginTop: "10px" }}>
                    {" "}
                    Did you take any medications during this pregnancy or after
                    delivery?
                  </p>

                  <div className="d-flex col-lg-12">
                    <div className="col-lg-1 col-sm-1 col-xs-1">
                      <input
                        type="radio"
                        id="Yes – active duty"
                        name="same6"
                        className="form-control"
                        value="Yes"
                        style={{ width: "16px" }}
                        checked={selectedOption6 === "Yes"}
                        onChange={(e) => setSelectedOption6(e.target.value)}

                        // style={{marginLeft:'-20px'}}
                      />
                    </div>

                    <div className="col-lg-6 col-sm-6 col-xs-6">
                      <label
                        for="html"
                        style={{ fontSize: "15px", marginLeft: "-10px" }}
                      >
                        Yes
                      </label>
                    </div>
                  </div>

                  <div className="d-flex col-lg-12">
                    <div className="col-lg-1 col-sm-1 col-xs-1">
                      <input
                        type="radio"
                        id="Yes – active duty"
                        name="same6"
                        className="form-control"
                        value="No"
                        style={{ width: "16px" }}
                        checked={selectedOption6 === "No"}
                        onChange={(e) => setSelectedOption6(e.target.value)}

                        // style={{marginLeft:'-20px'}}
                      />
                    </div>

                    <div className="col-lg-6 col-sm-6 col-xs-6">
                      <label
                        for="html"
                        style={{ fontSize: "15px", marginLeft: "-10px" }}
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
          <Button variant="primary" onClick={back11}>
            back
          </Button>

          <Button
            className="btn btn-primary"
            onClick={pregnancies9}
            disabled={isButtonDisabled7}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
          >
            Next
          </Button>
          <Button
            className="btn btn-primary"
            onClick={handleClose11}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={show12}
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
                  Details for Delivery 2
                </h3>
                <div
                  className="col-lg-10 flex justify-end"
                  style={{ textAlign: "end" }}
                >
                  {/* <p
                    style={{
                      marginTop: "-40px",
                      fontSize: "15px",
                      color: "#d8352f",
                    }}
                    onClick={pregnancies9}
                  >
                    Skip ≫
                  </p> */}
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
                    Was this a surrogacy pregnancy?
                  </p>

                  <div className="d-flex col-lg-12">
                    <div className="col-lg-1 col-sm-1 col-xs-1">
                      <input
                        type="radio"
                        id="Yes – active duty"
                        name="same7"
                        className="form-control"
                        value="Yes"
                        style={{ width: "16px" }}
                        checked={selectedOption7 === "Yes"}
                        onChange={(e) => setSelectedOption7(e.target.value)}

                        // style={{marginLeft:'-20px'}}
                      />
                    </div>

                    <div className="col-lg-6 col-sm-6 col-xs-6">
                      <label
                        for="html"
                        style={{ fontSize: "15px", marginLeft: "-10px" }}
                      >
                        Yes
                      </label>
                    </div>
                  </div>

                  <div className="d-flex col-lg-12">
                    <div className="col-lg-1 col-sm-1 col-xs-1">
                      <input
                        type="radio"
                        id="Yes – active duty"
                        name="same7"
                        className="form-control"
                        value="No"
                        style={{ width: "16px" }}
                        checked={selectedOption7 === "No"}
                        onChange={(e) => setSelectedOption7(e.target.value)}

                        // style={{marginLeft:'-20px'}}
                      />
                    </div>

                    <div className="col-lg-6 col-sm-6 col-xs-6">
                      <label
                        for="html"
                        style={{ fontSize: "15px", marginLeft: "-10px" }}
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
          <Button variant="primary" onClick={back12}>
            back
          </Button>
          <Button
            className="btn btn-primary"
            // onClick={pregnancies9}
            // disabled={isButtonDisabled8}
            onClick={onSubmit}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
          >
              {loder !== false ?
                  <Spinner animation="border" /> : 'Finish'

                }
          </Button>
          <Button
            className="btn btn-primary"
            onClick={handleClose12}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
          >
            Close
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
              <h1 style={{ fontSize: "20px" }}>Deliveries</h1>
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

export default Deliveries;
