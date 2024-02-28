import React from "react";
import BaseUrl from "../baseurl/BaseUrl";
import { PostApi } from "../Helper/helper";
import { useState } from "react";
import "../Surrogate Application/register.css";
import { toast,ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import {  useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Spinner from 'react-bootstrap/Spinner';
const SurrogacyJourney = () => {
  const [loder, setloder] = useState(false);
  // const [showA, setShowA] = useState(false);
  // const toggleShowA = () => setShowA(!showA);
    const [, setShowToast] = useState(false);

  // console.log('email==============>',email)
  //   const navigate = new useNavigate();

  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [value4, setValue4] = useState("");
  const [value5, setValue5] = useState("");
  const [file, Setfile] = useState("");
  console.log(file,"----->file");
  console.log(value5,"-----> textaera");


  const [selectedOption1, setSelectedOption1] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");
  const [selectedOption3, setSelectedOption3] = useState("");
  const [selectedOption4, setSelectedOption4] = useState("");
  const [selectedOption5, setSelectedOption5] = useState("");
  const [selectedOption6, setSelectedOption6] = useState("");
  const [selectedOption7, setSelectedOption7] = useState("");
  const [selectedOption8, setSelectedOption8] = useState("");
  const [selectedOption9, setSelectedOption9] = useState("");
  const [selectedOption10, setSelectedOption10] = useState("");
  const [selectedOption11, setSelectedOption11] = useState("");
  const [selectedOption12, setSelectedOption12] = useState("");
  const [selectedOption13, setSelectedOption13] = useState("");
  const [selectedOption14, setSelectedOption14] = useState("");
  const [selectedOption15, setSelectedOption15] = useState("");
  const [selectedOption16, setSelectedOption16] = useState("");
  const [selectedOption17, setSelectedOption17] = useState("");
  const [selectedOption18, setSelectedOption18] = useState("");
  const [selectedOption19, setSelectedOption19] = useState("");
  const [selectedOption20, setSelectedOption20] = useState("");

  const [check1, Setchek1] = useState([]);
  const [check2, Setchek2] = useState([]);





  const onSubmit = () => {
    setloder(true);
    // setShow2(false);
    // console.log("packageId,", packageId, token1.id);
    const formData = new FormData();
    formData.append("great_candidate", value1);
    formData.append("surrogacy_journey", value2);
    formData.append("injections_ivf_doctor", selectedOption1);
    formData.append("applicable_tattoos_piercings", selectedOption2);
    formData.append("cosmetic_procedures", selectedOption3);
    formData.append("alcohol_drugs_smoking", selectedOption4);
    formData.append("drug_alcohol_nicotine", selectedOption5);
    formData.append("ivf_clinic_journey", selectedOption6);
    formData.append("scheduling_appointment_journey", selectedOption7);
    formData.append("poor_communication_surrogate", selectedOption8);
    formData.append("embryos_transferred", selectedOption9);
    formData.append("splits_into_identical_twins", selectedOption10);
    formData.append("babies_willing_carry", selectedOption11);
    formData.append("triplets_to_twins_for_medical_reasons", selectedOption12);
    formData.append("twins_singleton_for_medical_reasons", selectedOption13);
    formData.append("life_is_at_risk", selectedOption14);
    formData.append("baby_will_not_survive", selectedOption15);
    formData.append("medical_reason_abnormality", selectedOption16);
    formData.append("diagnosed_down_syndrome", selectedOption17);
    formData.append("kind_of_relationship", value3);
    formData.append("delivery_room_with_you", selectedOption18);
    formData.append("long_distance_ivf_treatment", check1);
    formData.append("advised_medical_professional", check2);
    formData.append("pumping_expressing_breast_milk", value4);
    formData.append("little_personal_note", selectedOption19);
    formData.append("intended_parent_baby[0]", selectedOption20);
    formData.append("intended_parent_willing[0]", value5);
    formData.append("files[]", file);
 
     const token=localStorage.getItem("token")

    PostApi(`${BaseUrl.baseUrl}surrogate/surrogacy/journey`, formData, token)
      .then((data) => {
        console.log("data=====", data.data.message);
      

        setShowToast(true);
        toast(data.data.message);
        console.log(data.data.message);
        setloder(false);
        setShow13(false)

        // statusll("approved")
      })

      .catch((err) => {
        console.log("errr", err);
<<<<<<< HEAD
        setloder(false);
         setTimeout(() => {
=======
        setloader(false);
>>>>>>> 81782da5d9bf399b85b90f42418ac20a55ead247
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

  console.log(check1);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;

    // If checkbox is checked, add value to array; otherwise, remove it
    if (checked) {
      Setchek1((prevState) => [...prevState, value]);
    } else {
      Setchek1((prevState) => prevState.filter((item) => item !== value));
    }
  };

  const handleCheckboxChange2 = (event) => {
    const { value, checked } = event.target;

    // If checkbox is checked, add value to array; otherwise, remove it
    if (checked) {
      Setchek2((prevState) => [...prevState, value]);
    } else {
      Setchek2((prevState) => prevState.filter((item) => item !== value));
    }
  };

  console.log(check2);

  console.log(
    selectedOption1,
    selectedOption2,
    selectedOption3,
    selectedOption4,
    selectedOption5,
    value1,
    value2,
    selectedOption6,
    selectedOption7,
    selectedOption8,
    selectedOption9,
    selectedOption10,
    selectedOption11,
    selectedOption12,
    selectedOption13,
    selectedOption14,
    selectedOption15,
    selectedOption16,
    selectedOption17,
    "---->"
  );

  const isButtonDisabled1 = !value1 || !value2;
  const isButtonDisabled2 = !selectedOption1;
  const isButtonDisabled3 =
    !selectedOption2 ||
    !selectedOption3 ||
    !selectedOption4 ||
    !selectedOption5;
  const isButtonDisabled4 =
    !selectedOption6 || !selectedOption7 || !selectedOption8;
  const isButtonDisabled5 =
    !selectedOption9 || !selectedOption10 || !selectedOption11;

  const isButtonDisabled6 =
    !selectedOption12 ||
    !selectedOption13 ||
    !selectedOption14 ||
    !selectedOption15 ||
    !selectedOption16 ||
    !selectedOption17;

  const isButtonDisabled7 = !value3 || !selectedOption18 || !check1 || !check2;
  const isButtonDisabled8 = !value4 || !selectedOption19 || !selectedOption20;

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
  const [show11, setShow11] = useState(false);
  const [show12, setShow12] = useState(false);
  const [show13, setShow13] = useState(false);

  const handleClose6 = () => setShow6(false);
  const handleClose7 = () => setShow7(false);
  const handleClose8 = () => setShow8(false);
  const handleClose9 = () => setShow9(false);
  const handleClose10 = () => setShow10(false);
  const handleClose11 = () => setShow11(false);
  const handleClose12 = () => setShow12(false);
  const handleClose13 = () => setShow13(false);

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

  const back13 = () => {
    setShow13(false);
    setShow12(true);
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

  const pregnancies10 = () => {
    setShow13(true);
    setShow12(false);
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={4000}
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
                    className="form-control"
                    style={{ padding: "18px", borderRadius: "10px" }}
                    onChange={(e) => setValue1(e.target.value)}
                    value={value1}
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
                    onChange={(e) => setValue2(e.target.value)}
                    value={value2}
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
            disabled={isButtonDisabled1}
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
                      <input
                        type="radio"
                        name="same1"
                        value="Yes"
                        checked={selectedOption1 === "Yes"}
                        onChange={(e) => setSelectedOption1(e.target.value)}
                      />

                      <label className="mt-2 ml-2">Yes</label>
                    </div>
                    <div className="d-flex ml-5">
                      <input
                        type="radio"
                        name="same1"
                        value="No"
                        checked={selectedOption1 === "No"}
                        onChange={(e) => setSelectedOption1(e.target.value)}
                      />
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
                      <input
                        type="radio"
                        name="same2"
                        value="Yes"
                        checked={selectedOption2 === "Yes"}
                        onChange={(e) => setSelectedOption2(e.target.value)}
                      />

                      <label className="mt-2 ml-2">Yes</label>
                    </div>
                    <div className="d-flex ml-5">
                      <input
                        type="radio"
                        name="same2"
                        value="No"
                        checked={selectedOption2 === "No"}
                        onChange={(e) => setSelectedOption2(e.target.value)}
                      />
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
                      <input
                        type="radio"
                        name="same3"
                        value="Yes"
                        checked={selectedOption3 === "Yes"}
                        onChange={(e) => setSelectedOption3(e.target.value)}
                      />
                      <label className="mt-2 ml-2">Yes</label>
                    </div>
                    <div className="d-flex ml-5">
                      <input
                        type="radio"
                        name="same3"
                        value="No"
                        checked={selectedOption3 === "No"}
                        onChange={(e) => setSelectedOption3(e.target.value)}
                      />
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
                      <input
                        type="radio"
                        name="same4"
                        value="Yes"
                        checked={selectedOption4 === "Yes"}
                        onChange={(e) => setSelectedOption4(e.target.value)}
                      />
                      <label className="mt-2 ml-2">Yes</label>
                    </div>
                    <div className="d-flex ml-5">
                      <input
                        type="radio"
                        name="same4"
                        value="No"
                        checked={selectedOption4 === "No"}
                        onChange={(e) => setSelectedOption4(e.target.value)}
                      />
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
                      <input
                        type="radio"
                        name="same5"
                        value="Yes"
                        checked={selectedOption5 === "Yes"}
                        onChange={(e) => setSelectedOption5(e.target.value)}
                      />
                      <label className="mt-2 ml-2">Yes</label>
                    </div>
                    <div className="d-flex ml-5">
                      <input
                        type="radio"
                        name="same5"
                        value="No"
                        checked={selectedOption5 === "No"}
                        onChange={(e) => setSelectedOption5(e.target.value)}
                      />
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
                      <input
                        type="radio"
                        name="same6"
                        value="Yes"
                        checked={selectedOption6 === "Yes"}
                        onChange={(e) => setSelectedOption6(e.target.value)}
                      />
                      <label className="mt-2 ml-2">Yes</label>
                    </div>
                    <div className="d-flex ml-5">
                      <input
                        type="radio"
                        name="same6"
                        value="No"
                        checked={selectedOption6 === "No"}
                        onChange={(e) => setSelectedOption6(e.target.value)}
                      />
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
                      <input
                        type="radio"
                        name="same7"
                        value="Yes"
                        checked={selectedOption7 === "Yes"}
                        onChange={(e) => setSelectedOption7(e.target.value)}
                      />
                      <label className="mt-2 ml-2">Yes</label>
                    </div>
                    <div className="d-flex ml-5">
                      <input
                        type="radio"
                        name="same7"
                        value="No"
                        checked={selectedOption7 === "No"}
                        onChange={(e) => setSelectedOption7(e.target.value)}
                      />
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
                      <input
                        type="radio"
                        name="same8"
                        value="Yes"
                        checked={selectedOption8 === "Yes"}
                        onChange={(e) => setSelectedOption8(e.target.value)}
                      />
                      <label className="mt-2 ml-2">Yes</label>
                    </div>
                    <div className="d-flex ml-5">
                      <input
                        type="radio"
                        name="same8"
                        value="No"
                        checked={selectedOption8 === "No"}
                        onChange={(e) => setSelectedOption8(e.target.value)}
                      />
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
                            className="form-control"
                            name="same9"
                            value="SET (single embryo transfer)"
                            checked={
                              selectedOption9 === "SET (single embryo transfer)"
                            }
                            onChange={(e) => setSelectedOption9(e.target.value)}
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
                            className="form-control"
                            name="same9"
                            value="DET (double embryo transfer)"
                            checked={
                              selectedOption9 === "DET (double embryo transfer)"
                            }
                            onChange={(e) => setSelectedOption9(e.target.value)}

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
                        className="form-control"
                        name="same10"
                        value="Yes"
                        checked={selectedOption10 === "Yes"}
                        onChange={(e) => setSelectedOption10(e.target.value)}

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
                        className="form-control"
                        name="same10"
                        value="No"
                        checked={selectedOption10 === "No"}
                        onChange={(e) => setSelectedOption10(e.target.value)}

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
                        className="form-control"
                        name="same11"
                        value="Singleton only"
                        checked={selectedOption11 === "Singleton only"}
                        onChange={(e) => setSelectedOption11(e.target.value)}

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
                        className="form-control"
                        name="same11"
                        value="Twins"
                        checked={selectedOption11 === "Twins"}
                        onChange={(e) => setSelectedOption11(e.target.value)}

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
                        className="form-control"
                        name="same11"
                        value="Triplets"
                        checked={selectedOption11 === "Triplets"}
                        onChange={(e) => setSelectedOption11(e.target.value)}

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
                        className="form-control"
                        name="same11"
                        value="Quads +"
                        checked={selectedOption11 === "Quads +"}
                        onChange={(e) => setSelectedOption11(e.target.value)}

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
                  <p style={{ padding: "5px", marginTop: "10px" }}>
                    {" "}
                    Let's get real for a moment. The next several questions will
                    discuss pregnancy reduction and termination. Please know
                    that intended parents go into this journey longing to have a
                    baby, and would never take these scenarios lightly. One way
                    many surrogates have approached this is to think that just
                    as you were able to make your own parenting choices when
                    pregnant with your children, being open in these scenarios
                    allows the intended parents to make their own parenting
                    decisions, even if their choices may be different than what
                    you may have decided in your own pregnancies. Of course,
                    please don't feel pressured either way and answer honestly
                    with what you would be okay with.
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
                        Are you willing to reduce from triplets to twins for
                        medical reasons?
                      </p>
                      <div className="d-flex col-lg-12">
                        <div className="col-lg-2 col-sm-2 col-xs-2">
                          <input
                            type="radio"
                            id="Yes – active duty"
                            className="form-control"
                            name="same12"
                            value="Yes"
                            checked={selectedOption12 === "Yes"}
                            onChange={(e) =>
                              setSelectedOption12(e.target.value)
                            }

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
                            className="form-control"
                            name="same12"
                            value="No"
                            checked={selectedOption12 === "No"}
                            onChange={(e) =>
                              setSelectedOption12(e.target.value)
                            }

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
                    Are you willing to reduce from twins to a singleton for
                    medical reasons?
                  </p>
                  <div className="d-flex col-lg-12">
                    <div className="col-lg-2 col-sm-2 col-xs-2">
                      <input
                        type="radio"
                        id="Yes – active duty"
                        className="form-control"
                        name="same13"
                        value="Yes"
                        checked={selectedOption13 === "Yes"}
                        onChange={(e) => setSelectedOption13(e.target.value)}

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
                        className="form-control"
                        name="same13"
                        value="No"
                        checked={selectedOption14 === "No"}
                        onChange={(e) => setSelectedOption13(e.target.value)}

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
                    Are you willing to terminate the pregnancy if your life is
                    at risk?
                  </p>
                  <div className="d-flex col-lg-12">
                    <div className="col-lg-2 col-sm-2 col-xs-2">
                      <input
                        type="radio"
                        id="Yes – active duty"
                        className="form-control"
                        name="same14"
                        value="Yes"
                        checked={selectedOption14 === "Yes"}
                        onChange={(e) => setSelectedOption14(e.target.value)}

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
                        className="form-control"
                        name="same14"
                        value="No"
                        checked={selectedOption14 === "No"}
                        onChange={(e) => setSelectedOption14(e.target.value)}

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
                    Are you willing to reduce or terminate the pregnancy if the
                    baby will not survive?
                  </p>
                  <div className="d-flex col-lg-12">
                    <div className="col-lg-2 col-sm-2 col-xs-2">
                      <input
                        type="radio"
                        id="Yes – active duty"
                        className="form-control"
                        name="same15"
                        value="Yes"
                        checked={selectedOption15 === "Yes"}
                        onChange={(e) => setSelectedOption15(e.target.value)}

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
                        className="form-control"
                        name="same15"
                        value="No"
                        checked={selectedOption15 === "No"}
                        onChange={(e) => setSelectedOption15(e.target.value)}

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
                    Are you willing to reduce or terminate the pregnancy if
                    there is a medical reason or abnormality?
                  </p>
                  <div className="d-flex col-lg-12">
                    <div className="col-lg-2 col-sm-2 col-xs-2">
                      <input
                        type="radio"
                        id="Yes – active duty"
                        className="form-control"
                        name="same16"
                        value="Yes"
                        checked={selectedOption16 === "Yes"}
                        onChange={(e) => setSelectedOption16(e.target.value)}

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
                        className="form-control"
                        name="same16"
                        value="No"
                        checked={selectedOption16 === "No"}
                        onChange={(e) => setSelectedOption16(e.target.value)}

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
                    Are you willing to reduce or terminate if the baby is
                    diagnosed with Down Syndrome?
                  </p>
                  <div className="d-flex col-lg-12">
                    <div className="col-lg-2 col-sm-2 col-xs-2">
                      <input
                        type="radio"
                        id="Yes – active duty"
                        className="form-control"
                        name="same17"
                        value="Yes"
                        checked={selectedOption17 === "Yes"}
                        onChange={(e) => setSelectedOption17(e.target.value)}

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
                        className="form-control"
                        value="No"
                        checked={selectedOption17 === "No"}
                        onChange={(e) => setSelectedOption17(e.target.value)}

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
                  Intended parent questions
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
                    What kind of relationship would you like to have with the
                    intended parents during your journey?
                  </p>

                  <input
                    type="text"
                    className="form-control "
                    value={value3}
                    style={{ padding: "18px", borderRadius: "10px" }}
                    onChange={(e) => setValue3(e.target.value)}
                  />
                  <p style={{ padding: "5px", marginTop: "10px" }}>
                    {" "}
                    Would you agree to have the intended parents in the delivery
                    room with you?
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
                        Are you willing to reduce from triplets to twins for
                        medical reasons?
                      </p>
                      <div className="d-flex col-lg-12">
                        <div className="col-lg-2 col-sm-2 col-xs-2">
                          <input
                            type="radio"
                            id="Yes – active duty"
                            className="form-control"
                            name="same18"
                            value="Yes, of course"
                            checked={selectedOption18 === "Yes, of course"}
                            onChange={(e) =>
                              setSelectedOption18(e.target.value)
                            }

                            // style={{marginLeft:'-20px'}}
                          />
                        </div>

                        <div className="col-lg-6 col-sm-6 col-xs-6">
                          <label
                            for="html"
                            style={{ fontSize: "15px", marginLeft: "-30px" }}
                          >
                            Yes, of course
                          </label>
                        </div>
                      </div>

                      <div className="d-flex col-lg-12">
                        <div className="col-lg-2 col-sm-2 col-xs-2">
                          <input
                            type="radio"
                            id="Yes – active duty"
                            className="form-control"
                            name="same18"
                            value="No, I’d prefer not to"
                            checked={
                              selectedOption18 === "No, I’d prefer not to"
                            }
                            onChange={(e) =>
                              setSelectedOption18(e.target.value)
                            }

                            //   style={{marginLeft:'-20px'}}
                          />
                        </div>
                        <div className="col-lg-6 col-sm-6 col-xs-6">
                          <label
                            for="html"
                            style={{ fontSize: "15px", marginLeft: "-30px" }}
                          >
                            No, I’d prefer not to
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p style={{ padding: "5px", marginTop: "10px" }}>
                    {" "}
                    What type of contact would you like to have with the
                    intended parents and baby after the journey? (you can select
                    more than one)
                  </p>
                  <div className="d-flex col-lg-12 mt-2">
                    <div className="col-lg-2 col-sm-2 col-xs-2">
                      <input
                        type="checkbox"
                        id="Yes – active duty"
                        name="check1"
                        className="form-control"
                        value="I'd prefer to keep it professional"
                        checked={check1.includes(
                          "I'd prefer to keep it professional"
                        )}
                        onChange={handleCheckboxChange}

                        //   style={{marginLeft:'-20px'}}
                      />
                    </div>
                    <div className="col-lg-6 col-sm-6 col-xs-6">
                      <label
                        for="html"
                        style={{ fontSize: "15px", marginLeft: "-40px" }}
                      >
                        I'd prefer to keep it professional
                      </label>
                    </div>
                  </div>

                  <div className="d-flex col-lg-12 mt-2">
                    <div className="col-lg-2 col-sm-2 col-xs-2">
                      <input
                        type="checkbox"
                        id="Yes – active duty"
                        name="check2"
                        className="form-control"
                        value="I'm open to whatever the intended parent's comfort level is"
                        checked={check1.includes(
                          "I'm open to whatever the intended parent's comfort level is"
                        )}
                        onChange={handleCheckboxChange}
                        //   style={{marginLeft:'-20px'}}
                      />
                    </div>
                    <div className="col-lg-8 col-sm-8 col-xs-8">
                      <label
                        for="html"
                        style={{ fontSize: "15px", marginLeft: "-40px" }}
                      >
                        I'm open to whatever the intended parent's comfort level
                        is
                      </label>
                    </div>
                  </div>

                  <div className="d-flex col-lg-12 mt-2">
                    <div className="col-lg-2 col-sm-2 col-xs-2">
                      <input
                        type="checkbox"
                        id="Yes – active duty"
                        name="check3"
                        className="form-control"
                        value="I'd love to stay in touch and send updates of our families to each other like on birthdays and holidays"
                        checked={check1.includes(
                          "I'd love to stay in touch and send updates of our families to each other like on birthdays and holidays"
                        )}
                        onChange={handleCheckboxChange}

                        //   style={{marginLeft:'-20px'}}
                      />
                    </div>
                    <div className="col-lg-6 col-sm-6 col-xs-6">
                      <label
                        for="html"
                        style={{ fontSize: "15px", marginLeft: "-40px" }}
                      >
                        I'd love to stay in touch and send updates of our
                        families to each other like on birthdays and holidays
                      </label>
                    </div>
                  </div>

                  <p style={{ padding: "5px", marginTop: "10px" }}>
                    What type of intended parents are you willing to help? (you
                    can select more than one){" "}
                  </p>
                  <div className="d-flex col-lg-12 mt-2">
                    <div className="col-lg-2 col-sm-2 col-xs-2">
                      <input
                        type="checkbox"
                        id="Yes – active duty"
                        name="check4"
                        className="form-control"
                        value="Couples that already have children"
                        checked={check2.includes(
                          "Couples that already have children"
                        )}
                        onChange={handleCheckboxChange2}
                        // style={{marginLeft:'-20px'}}
                      />
                    </div>

                    <div className="col-lg-6 col-sm-6 col-xs-6">
                      <label
                        for="html"
                        style={{ fontSize: "15px", marginLeft: "-30px" }}
                      >
                        Couples that already have children
                      </label>
                    </div>
                  </div>

                  <div className="d-flex col-lg-12 mt-2">
                    <div className="col-lg-2 col-sm-2 col-xs-2">
                      <input
                        type="checkbox"
                        id="Yes – active duty"
                        className="form-control"
                        name="check5"
                        value="Straight (heterosexual) couples"
                        checked={check2.includes(
                          "Straight (heterosexual) couples"
                        )}
                        onChange={handleCheckboxChange2}

                        // style={{marginLeft:'-20px'}}
                      />
                    </div>

                    <div className="col-lg-6 col-sm-6 col-xs-6">
                      <label
                        for="html"
                        style={{ fontSize: "15px", marginLeft: "-30px" }}
                      >
                        Straight (heterosexual) couples
                      </label>
                    </div>
                  </div>

                  <div className="d-flex col-lg-12 mt-2">
                    <div className="col-lg-2 col-sm-2 col-xs-2">
                      <input
                        type="checkbox"
                        id="Yes – active duty"
                        className="form-control"
                        name="check6"
                        value="Gay (homosexual) couples"
                        checked={check2.includes("Gay (homosexual) couples")}
                        onChange={handleCheckboxChange2}

                        // style={{marginLeft:'-20px'}}
                      />
                    </div>

                    <div className="col-lg-6 col-sm-6 col-xs-6">
                      <label
                        for="html"
                        style={{ fontSize: "15px", marginLeft: "-30px" }}
                      >
                        Gay (homosexual) couples
                      </label>
                    </div>
                  </div>

                  <div className="d-flex col-lg-12 mt-2">
                    <div className="col-lg-2 col-sm-2 col-xs-2">
                      <input
                        type="checkbox"
                        id="Yes – active duty"
                        className="form-control"
                        name="check7"
                        value="Single male"
                        checked={check2.includes("Single male")}
                        onChange={handleCheckboxChange2}

                        // style={{marginLeft:'-20px'}}
                      />
                    </div>

                    <div className="col-lg-6 col-sm-6 col-xs-6">
                      <label
                        for="html"
                        style={{ fontSize: "15px", marginLeft: "-30px" }}
                      >
                        Single male
                      </label>
                    </div>
                  </div>

                  <div className="d-flex col-lg-12 mt-2">
                    <div className="col-lg-2 col-sm-2 col-xs-2">
                      <input
                        type="checkbox"
                        id="Yes – active duty"
                        className="form-control"
                        name="check8"
                        value="Single female"
                        checked={check2.includes("Single female")}
                        onChange={handleCheckboxChange2}

                        // style={{marginLeft:'-20px'}}
                      />
                    </div>

                    <div className="col-lg-6 col-sm-6 col-xs-6">
                      <label
                        for="html"
                        style={{ fontSize: "15px", marginLeft: "-30px" }}
                      >
                        Single female
                      </label>
                    </div>
                  </div>

                  <div className="d-flex col-lg-12 mt-2">
                    <div className="col-lg-2 col-sm-2 col-xs-2">
                      <input
                        type="checkbox"
                        id="Yes – active duty"
                        className="form-control"
                        name="check9"
                        value="Single gay male"
                        checked={check2.includes("Single gay male")}
                        onChange={handleCheckboxChange2}
                        // style={{marginLeft:'-20px'}}
                      />
                    </div>

                    <div className="col-lg-6 col-sm-6 col-xs-6">
                      <label
                        for="html"
                        style={{ fontSize: "15px", marginLeft: "-30px" }}
                      >
                        Single gay male
                      </label>
                    </div>
                  </div>

                  <div className="d-flex col-lg-12 mt-2">
                    <div className="col-lg-2 col-sm-2 col-xs-2">
                      <input
                        type="checkbox"
                        id="Yes – active duty"
                        className="form-control"
                        name="check10"
                        value="Single gay female"
                        checked={check2.includes("Single gay female")}
                        onChange={handleCheckboxChange2}
                        // style={{marginLeft:'-20px'}}
                      />
                    </div>

                    <div className="col-lg-6 col-sm-6 col-xs-6">
                      <label
                        for="html"
                        style={{ fontSize: "15px", marginLeft: "-30px" }}
                      >
                        Single gay female
                      </label>
                    </div>
                  </div>

                  <div className="d-flex col-lg-12 mt-2">
                    <div className="col-lg-2 col-sm-2 col-xs-2">
                      <input
                        type="checkbox"
                        id="Yes – active duty"
                        className="form-control"
                        name="check11"
                        value="Transgender IP"
                        checked={check2.includes("Transgender IP")}
                        onChange={handleCheckboxChange2}
                        // style={{marginLeft:'-20px'}}
                      />
                    </div>

                    <div className="col-lg-6 col-sm-6 col-xs-6">
                      <label
                        for="html"
                        style={{ fontSize: "15px", marginLeft: "-30px" }}
                      >
                        Transgender IP{" "}
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
                  Other journey questions
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
                    onClick={pregnancies10}
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
                    Are you able to travel long-distance for your IVF treatment
                    if needed? For example, this could include flying to another
                    state or location within your state, possibly staying
                    overnight, etc.
                  </p>

                  <input
                    type="text"
                    className="form-control "
                    style={{ padding: "18px", borderRadius: "10px" }}
                    value={value4}
                    onChange={(e) => setValue4(e.target.value)}
                  />

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
                        Are you willing to undergo an amniocentesis if advised
                        by a medical professional?
                      </p>
                      <div className="d-flex col-lg-12">
                        <div className="col-lg-2 col-sm-2 col-xs-2">
                          <input
                            type="radio"
                            id="Yes – active duty"
                            className="form-control"
                            name="same19"
                            value="Yes"
                            checked={selectedOption19 === "Yes"}
                            onChange={(e) =>
                              setSelectedOption19(e.target.value)
                            }
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
                            className="form-control"
                            name="same19"
                            value="Yes"
                            checked={selectedOption19 === "No"}
                            onChange={(e) =>
                              setSelectedOption19(e.target.value)
                            }

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
                        Would you consider pumping/expressing breast milk for
                        the baby if the intended parents would like you to?
                      </p>
                      <div className="d-flex col-lg-12">
                        <div className="col-lg-2 col-sm-2 col-xs-2">
                          <input
                            type="radio"
                            id="Yes – active duty"
                            className="form-control"
                            name="same20"
                            value="Yes"
                            checked={selectedOption20 === "yes"}
                            onChange={(e) =>
                              setSelectedOption20(e.target.value)
                            }
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
                            className="form-control"
                            name="same20"
                            value="No"
                            checked={selectedOption20 === "No"}
                            onChange={(e) =>
                              setSelectedOption20(e.target.value)
                            }

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
            onClick={pregnancies10}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
            disabled={isButtonDisabled8}
          >
            Next
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

      <Modal
        show={show13}
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
                  Letter to the intended parents
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
                    onClick={pregnancies10}
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
                    This is your chance to shine! Please write anything you
                    think will help the intended parents get to know you and why
                    they might want to move forward on a surrogacy journey with
                    you.
                  </p>

                  <p style={{ padding: "5px", marginTop: "10px" }}>
                    {" "}
                    Please write a little personal note (a paragraph or so) to
                    the intended parents to help them get to know you better
                  </p>
                  <textarea
                    type="text"
                    className="form-control "
                    style={{ padding: "18px", borderRadius: "10px" }}
                    value={value5}
                    onChange={(e)=>setValue5(e.target.value)}
                  />

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
                        Please upload a portrait style photo of your face for
                        your profile cover photo
                      </p>
                      <input
                        type="file"
                        className="form-control py-4"
                        style={{ borderRadius: "10px" }}
                         onChange={(e)=>Setfile(e.target.files[0])}
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
        <Button variant="primary" onClick={back13}>
            back
          </Button>
          <Button
            className="btn btn-primary"
            // onClick={pregnancies10}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
            onClick={onSubmit}
          >
            {loder !== false? 
                      <Spinner animation="border"  />:'Finish'  
                      
                     }
                         
           
          </Button>
          <Button
            className="btn btn-primary"
            onClick={handleClose13}
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
