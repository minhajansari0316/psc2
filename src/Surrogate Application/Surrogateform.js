/* eslint-disable react/jsx-no-comment-textnodes */
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
import Signature from '../compunet/Signature';
import Aboutyou from '../compunet/Aboutyou';
import SurrogacyJourney from './SurrogacyJourney'
import Deliveries from './Deliveries';
// import About from '../compunet/About';





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
  const [loder, setloder] = useState(false);
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
  const Traveledoutside = () => {
    setShow15(true);
    setShow14(false);
  };

  const [show16, setShow16] = useState(false);
  const handleClose16 = () => setShow16(false);
  const back16 = () => {
    setShow16(false);
    setShow15(true);
  };
  const Traveltoanother = () => {
    setShow16(true);
    setShow15(false);
  };
  const [show17, setShow17] = useState(false);
  const handleClose17 = () => setShow17(false);
  const back17 = () => {
    setShow17(false);
    setShow16(true);
  };
  const Emergencycontact = () => {
    setShow17(true);
    setShow16(false);
  };

  const [show18, setShow18] = useState(false);
  const handleClose18 = () => setShow18(false);
  const back18 = () => {
    setShow18(false);
    setShow17(true);
  };
  const Relationshipstatus = () => {
    setShow18(true);
    setShow17(false);
  };
  const [show19, setShow19] = useState(false);
  const handleClose19 = () => setShow19(false);
  const back19 = () => {
    setShow19(false);
    setShow18(true);
  };
  const Sexualorientation = () => {
    setShow19(true);
    setShow18(false);
  };
  const [show20, setShow20] = useState(false);
  const handleClose20 = () => setShow20(false);
  const back20 = () => {
    setShow20(false);
    setShow19(true);
  };
  const Sexuallyactive = () => {
    setShow20(true);
    setShow19(false);
  };

  const [show21, setShow21] = useState(false);
  const handleClose21 = () => setShow21(false);
  const back21 = () => {
    setShow21(false);
    setShow20(true);
  };
  const partner = () => {
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
  const schooldiploma = () => {
    setpShow2(true);
    setpShow1(false);
  };

  const [pshow3, setpShow3] = useState(false);
  const handleClosep3 = () => setpShow3(false);
  const backp3 = () => {
    setpShow3(false);
    setpShow2(true);
  };
  const applicable = () => {
    setpShow3(true);
    setpShow2(false);
  };

  // Employment and Health Insurance
  const [eshow1, seteShow1] = useState(false);
  const handleClosee1 = () => seteShow1(false);
  const eback1 = () => {
    seteShow1(false);
  };
  const Employment = () => {
    seteShow1(true);
    // setShow1(false);
  };


  const [eshow2, seteShow2] = useState(false);
  const handleClosee2 = () => seteShow2(false);
  const eback2 = () => {
    seteShow2(false);
    seteShow1(true);
  };
  const healthinsurance = () => {
    seteShow2(true);
    seteShow1(false);
  };

  const [eshow3, seteShow3] = useState(false);
  const handleClosee3 = () => seteShow3(false);
  const eback3 = () => {
    seteShow3(false);
    seteShow2(true);

  };
  const employmentstatus = () => {
    seteShow3(true);
    seteShow2(false);
  };
  const [eshow4, seteShow4] = useState(false);
  const handleClosee4 = () => seteShow4(false);
  const eback4 = () => {
    seteShow4(false);
    seteShow3(true);
  };
  const disabilitybenefits = () => {
    seteShow4(true);
    seteShow3(false);
  };

  const [eshow5, seteShow5] = useState(false);
  const handleClosee5 = () => seteShow5(false);
  const eback5 = () => {
    seteShow5(false);
    seteShow4(true);
  };
  const ehealthinsurance = () => {
    seteShow5(true);
    seteShow4(false);
  };

  // Health Information
  const [hshow1, sethShow1] = useState(false);
  const handleCloseh1 = () => sethShow1(false);
  // const hback1 = () => {
  //   sethShow1(false);
  // };
  const abouthealth = () => {
    sethShow1(true);
    // setShow1(false);
  };

  const [hshow2, sethShow2] = useState(false);
  const handleCloseh2 = () => sethShow2(false);
  // const hback2 = () => {
  //   sethShow1(false);
  // };
  const Welcome = () => {
    sethShow2(true);
    sethShow1(false);
  };


  const [hshow3, sethShow3] = useState(false);
  const handleCloseh3 = () => sethShow3(false);
  const hback3 = () => {
    sethShow3(false);
    sethShow1(true);
  };
  const bloodtype = () => {
    sethShow3(true);
    sethShow2(false);
  };

  const [hshow4, sethShow4] = useState(false);
  const handleCloseh4 = () => sethShow4(false);
  const hback4 = () => {
    sethShow4(false);
    sethShow3(true);
  };
  const papsmear = () => {
    sethShow4(true);
    sethShow3(false);
  };

  const [hshow5, sethShow5] = useState(false);
  const handleCloseh5 = () => sethShow5(false);
  // const hback5 = () => {
  //   sethShow5(false);
  //   sethShow4(true);
  // };
  const homework = () => {
    sethShow5(true);
    sethShow4(false);
  };

  const [hshow6, sethShow6] = useState(false);
  const handleCloseh6 = () => sethShow6(false);
  const hback6 = () => {
    sethShow6(false);
    sethShow5(true);
  };
  const concerns = () => {
    sethShow6(true);
    sethShow5(false);
  };
  const [hshow7, sethShow7] = useState(false);
  const handleCloseh7 = () => sethShow7(false);
  const hback7 = () => {
    sethShow7(false);
    sethShow6(true);
  };
  const allergic = () => {
    sethShow7(true);
    sethShow6(false);
  };

  const [hshow8, sethShow8] = useState(false);
  const handleCloseh8 = () => sethShow8(false);
  const hback8 = () => {
    sethShow8(false);
    sethShow7(true);
  };
  const obgyn = () => {
    sethShow8(true);
    sethShow7(false);
  };
  const [hshow9, sethShow9] = useState(false);
  const handleCloseh9 = () => sethShow9(false);
  const hback9 = () => {
    sethShow9(false);
    sethShow8(true);
  };
  const hospitalized = () => {
    sethShow9(true);
    sethShow8(false);
  };


  const [hshow10, sethShow10] = useState(false);
  const handleCloseh10 = () => sethShow10(false);
  const hback10 = () => {
    sethShow10(false);
    sethShow9(true);
  };
  const eating = () => {
    sethShow10(true);
    sethShow9(false);
  };

  const [hshow11, sethShow11] = useState(false);
  const handleCloseh11 = () => sethShow11(false);
  const hback11 = () => {
    sethShow11(false);
    sethShow10(true);
  };
  const psychologist = () => {
    sethShow11(true);
    sethShow10(false);
  };
  const [hshow12, sethShow12] = useState(false);
  const handleCloseh12 = () => sethShow12(false);
  const hback12 = () => {
    sethShow12(false);
    sethShow11(true);
  };
  const psychiatricreasons = () => {
    sethShow12(true);
    sethShow11(false);
  };

  const [hshow13, sethShow13] = useState(false);
  const handleCloseh13 = () => sethShow13(false);
  const hback13 = () => {
    sethShow13(false);
    sethShow12(true);
  };
  const sexuallyabused = () => {
    sethShow13(true);
    sethShow12(false);
  };

  const [hshow14, sethShow14] = useState(false);
  const handleCloseh14 = () => sethShow14(false);
  const hback14 = () => {
    sethShow14(false);
    sethShow13(true);
  };
  const inflammatory = () => {
    sethShow14(true);
    sethShow13(false);
  };
  const [hshow15, sethShow15] = useState(false);
  const handleCloseh15 = () => sethShow15(false);
  const hback15 = () => {
    sethShow15(false);
    sethShow14(true);
  };
  const aids = () => {
    sethShow15(true);
    sethShow14(false);
  };

  const [hshow16, sethShow16] = useState(false);
  const handleCloseh16 = () => sethShow16(false);
  const hback16 = () => {
    sethShow16(false);
    sethShow15(true);
  };
  const Hepatitis = () => {
    sethShow16(true);
    sethShow15(false);
  };
  const [hshow17, sethShow17] = useState(false);
  const handleCloseh17 = () => sethShow17(false);
  const hback17 = () => {
    sethShow17(false);
    sethShow16(true);
  };
  const Hepatitisc = () => {
    sethShow17(true);
    sethShow16(false);
  };

  const [hshow18, sethShow18] = useState(false);
  const handleCloseh18 = () => sethShow18(false);
  const hback18 = () => {
    sethShow18(false);
    sethShow17(true);
  };
  const vaccination = () => {
    sethShow18(true);
    sethShow17(false);
  };

  const [hshow19, sethShow19] = useState(false);
  const handleCloseh19 = () => sethShow19(false);
  const hback19 = () => {
    sethShow19(false);
    sethShow18(true);
  };
  const cycles = () => {
    sethShow19(true);
    sethShow18(false);
  };

  const [hshow20, sethShow20] = useState(false);
  const handleCloseh20 = () => sethShow20(false);
  const hback20 = () => {
    sethShow20(false);
    sethShow19(true);
  };
  const beverages = () => {
    sethShow20(true);
    sethShow19(false);
  };

  const [hshow21, sethShow21] = useState(false);
  const handleCloseh21 = () => sethShow21(false);
  const hback21 = () => {
    sethShow21(false);
    sethShow20(true);
  };
  const welcomep2 = () => {
    sethShow21(true);
    sethShow20(false);
  };

  const [hshow22, sethShow22] = useState(false);
  const handleCloseh22 = () => sethShow22(false);
  const hback22 = () => {
    sethShow22(false);
    sethShow21(true);
  };
  const diagnosed = () => {
    sethShow22(true);
    sethShow21(false);
  };






  // Pregnancy History

  const [phshow1, setphShow1] = useState(false);
  const handleCloseph1 = () => setphShow1(false);
  // const hback2 = () => {
  //   sethShow1(false);
  // };
  const Welcomeph = () => {
    setphShow1(true);
    // sethShow1(false);
  };

  // Did any of these pregnancies require doctor-ordered bed rest?


  const [phshow2, setphShow2] = useState(false);
  const handleCloseph2 = () => setphShow2(false);
  const phback2 = () => {
    setphShow2(false);
    setphShow1(true);
  };
  const pregnancies = () => {
    setphShow2(true);
    setphShow1(false);
  };

  const [phshow3, setphShow3] = useState(false);
  const handleCloseph3 = () => setphShow3(false);
  const phback3 = () => {
    setphShow3(false);
    setphShow2(true);
  };
  const treatment = () => {
    setphShow3(true);
    setphShow2(false);
  };


  const [phshow4, setphShow4] = useState(false);
  const handleCloseph4 = () => setphShow4(false);
  const phback4 = () => {
    setphShow4(false);
    setphShow3(true);
  };
  const attention = () => {
    setphShow4(true);
    setphShow3(false);
  };

  const [phshow5, setphShow5] = useState(false);
  const handleCloseph5 = () => setphShow5(false);
  const phback5 = () => {
    setphShow5(false);
    setphShow4(true);
  };
  const miscarriage = () => {
    setphShow5(true);
    setphShow4(false);
  };

  const [phshow6, setphShow6] = useState(false);
  const handleCloseph6 = () => setphShow6(false);
  const phback6 = () => {
    setphShow6(false);
    setphShow5(true);
  };
  const termination = () => {
    setphShow6(true);
    setphShow5(false);
  };

  const [phshow7, setphShow7] = useState(false);
  const handleCloseph7 = () => setphShow7(false);
  const phback7 = () => {
    setphShow7(false);
    setphShow6(true);
  };
  const surrogate = () => {
    setphShow7(true);
    setphShow6(false);
  };


  const [phshow8, setphShow8] = useState(false);
  const handleCloseph8 = () => setphShow8(false);
  const phback8 = () => {
    setphShow8(false);
    setphShow7(true);
  };
  const breastfed = () => {
    setphShow8(true);
    setphShow7(false);
  };

  const [phshow9, setphShow9] = useState(false);
  const handleCloseph9 = () => setphShow9(false);
  const phback9 = () => {
    setphShow9(false);
    setphShow8(true);
  };
  const duringpregnancy = () => {
    setphShow9(true);
    setphShow8(false);
  };


  // about you

 
  // Signature 
// {/* get value  */}



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
        console.log("errr", err.message);
        setloder(false);
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



  //  Employment and Health Insurance


  const [military_or_reserves, setmilitary_or_reserves] = useState(null)
  const [current_employment_status, setcurrent_employment_status] = useState(null)
  const [shortterm_disability_benefits, setshortterm_disability_benefits] = useState(null)
  const [medical_health_insurance, setmedical_health_insurance] = useState(null)

  const onSubmithi = () => {
    setloder(true);
    // setShow2(false);
    // console.log("packageId,", packageId, token1.id);
    const formData = new FormData();
    formData.append("military_or_reserves", military_or_reserves);
    formData.append("current_employment_status", current_employment_status);
    formData.append("shortterm_disability_benefits", shortterm_disability_benefits);
    formData.append("medical_health_insurance", medical_health_insurance);


    PostApi(`${BaseUrl.baseUrl}surrogate/health/insurance`, formData, token)
      .then((data) => {
        console.log("data=====", data.data.message);
        setloder(false);

        setShowToast(true);
        toast(data.data.message);
        seteShow5(false)



        // statusll("approved")
      })

      .catch((err) => {
        console.log("errr", err);
        setloder(false);
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

  //  Health Information


  const [blood_type, setblood_type] = useState(null)
 

  // const [current_birth_control_method, setcurrent_birth_control_method] = useState(null)
  const [recent_pap_smear, setrecent_pap_smear] = useState(null)
  const [abnormal_pap_smear, setabnormal_pap_smear] = useState(null)

  const [psychiatrist_therapist_or_psychologist, setpsychiatrist_therapist_or_psychologist] = useState(null)
  const [secondhand_smoke_at_home_or_at_work, setsecondhand_smoke_at_home_or_at_work] = useState(null)
  const [health_concerns, sethealth_concerns] = useState(null)
  const [prescription_medications, setprescription_medications] = useState(null)

  const [allergic_to_anything, setallergic_to_anything] = useState(null)
  const [type_of_doctor, settype_of_doctor] = useState(null)
  const [labor_and_delivery, setlabor_and_delivery] = useState(null)
  const [eating_disorder, seteating_disorder] = useState(null)

  const [psychiatric_reasons, setpsychiatric_reasons] = useState(null)
  const [physically_emotionally_or_sexually_abused, setphysically_emotionally_or_sexually_abused] = useState(null)
  const [chlamydia_gonorrhea_pelvic_inflammatory_disease, setchlamydia_gonorrhea_pelvic_inflammatory_disease] = useState(null)
  const [hiv_or_aids, sethiv_or_aids] = useState(null)

  const [hepatitis_b, sethepatitis_b] = useState(null)
  const [hepatitis_b_ivf_clinic, sethepatitis_b_ivf_clinic] = useState(null)
  const [hepatitis_a_hepatitis_b_or_hepatitis_c, sethepatitis_a_hepatitis_b_or_hepatitis_c] = useState(null)
  const [covid_19_vaccination, setcovid_19_vaccination] = useState(null)

  const [menstrual_cycles, setmenstrual_cycles] = useState(null)
  const [not_pregnant_alcoholic_beverages, setnot_pregnant_alcoholic_beverages] = useState(null)




  const onSubmithealthinformation = () => {
    setloder(true);
    // setShow2(false);
    // console.log("packageId,", packageId, token1.id);
    const formData = new FormData();
    formData.append("blood_type", blood_type);
    formData.append("current_birth_control_method", current_employment_status);
    formData.append("recent_pap_smear", recent_pap_smear);
    formData.append("abnormal_pap_smear", abnormal_pap_smear);
    formData.append("secondhand_smoke_at_home_or_at_work", secondhand_smoke_at_home_or_at_work);
    formData.append("health_concerns", health_concerns);
    formData.append("prescription_medications", prescription_medications);
    formData.append("allergic_to_anything", allergic_to_anything);
    formData.append("type_of_doctor", type_of_doctor);
    formData.append("labor_and_delivery", labor_and_delivery);
    formData.append("eating_disorder", eating_disorder);
    formData.append("psychiatrist_therapist_or_psychologist", psychiatrist_therapist_or_psychologist);
    formData.append("hepatitis_b", hepatitis_b);
    formData.append("hepatitis_b_ivf_clinic", hepatitis_b_ivf_clinic);
    formData.append("hepatitis_a_hepatitis_b_or_hepatitis_c", hepatitis_a_hepatitis_b_or_hepatitis_c);
    formData.append("covid_19_vaccination", covid_19_vaccination);
    formData.append("menstrual_cycles", menstrual_cycles);
    formData.append("not_pregnant_alcoholic_beverages", not_pregnant_alcoholic_beverages);



    PostApi(`${BaseUrl.baseUrl}surrogate/health/information/step/one`, formData, token)
      .then((data) => {
        console.log("data=====", data.data.message);
        setloder(false);

        setShowToast(true);
        toast(data.data.message);
        sethShow21(true);
        sethShow20(false);



        // statusll("approved")
      })

      .catch((err) => {
        console.log("errr", err);
        setloder(false);
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




  //  Health Information part2


  const [add_or_adhd, setadd_or_adhd] = useState(null)
  const [anemia, setanemia] = useState(null)
  const [anxiety, setanxiety] = useState(null)
  const [arthritis, setarthritis] = useState(null)

  const [asthma, setasthma] = useState(null)
  const [bipolar_disorder, setbipolar_disorder] = useState(null)
  const [birth_deformities, setbirth_deformities] = useState(null)
  const [cancer, setcancer] = useState(null)

  const [cerebral_palsy, setcerebral_palsy] = useState(null)
  const [chronic_bronchitis, setchronic_bronchitis] = useState(null)
  const [cystic_fibrosis, setcystic_fibrosis] = useState(null)
  const [deafness_hard_of_hearing, setdeafness_hard_of_hearing] = useState(null)

  const [depression, setdepression] = useState(null)
  const [diabetes, setdiabetes] = useState(null)
  const [emphysema, setemphysema] = useState(null)
  const [endometriosis, setendometriosis] = useState(null)

  const [epilepsy_or_convulsions, setepilepsy_or_convulsions] = useState(null)
  const [eye_or_retinal_disease, seteye_or_retinal_disease] = useState(null)
  const [hpv, sethpv] = useState(null)
  const [head_injury, sethead_injury] = useState(null)

  const [heart_problems, setheart_problems] = useState(null)
  const [hemophilia, sethemophilia] = useState(null)
  const [hemorrhaging_after_birth, sethemorrhaging_after_birth] = useState(null)
  const [herpes, setherpes] = useState(null)

  const [high_cholesterol, sethigh_cholesterol] = useState(null)
  const [blood_pressure_hypertension, setblood_pressure_hypertension] = useState(null)
  const [hysterectomy, sethysterectomy] = useState(null)
  const [intrauterine_fibroids, setintrauterine_fibroids] = useState(null)

  const [kidney_problems, setkidney_problems] = useState(null)
  const [learning_disability, setlearning_disability] = useState(null)
  const [liver_disease, setliver_disease] = useState(null)
  const [lung_disease, setlung_disease] = useState(null)


  const [mental_illness, setmental_illness] = useState(null)
  const [mental_retardation, setmental_retardation] = useState(null)
  const [migraines, setmigraines] = useState(null)
  const [multiple_sclerosis, setmultiple_sclerosis] = useState(null)

  const [muscular_dystrophy, setmuscular_dystrophy] = useState(null)
  const [neck_or_back_problem, setneck_or_back_problem] = useState(null)
  const [nervous_system_problems, setnervous_system_problems] = useState(null)
  const [obesity, setobesity] = useState(null)

  const [paralysis, setparalysis] = useState(null)
  const [personalitydisorder, setpersonalitydisorder] = useState(null)
  const [postpartum_depression, setpostpartum_depression] = useState(null)
  const [pre_eclampsia, setpre_eclampsia] = useState(null)

  const [pre_term_labor, setpre_term_labor] = useState(null)
  const [schizophrenia, setschizophrenia] = useState(null)
  const [seizures, setseizures] = useState(null)
  const [sickle_cell_trait, setsickle_cell_trait] = useState(null)

  const [skin_disorders, setskin_disorders] = useState(null)
  const [speech_problems, setspeech_problems] = useState(null)
  const [spina_bifida, setspina_bifida] = useState(null)
  const [syphilis, setsyphilis] = useState(null)

  const [tb_or_exposed_to_tb, settb_or_exposed_to_tb] = useState(null)
  const [tay_sachs, settay_sachs] = useState(null)
  const [thyroid_problems, setthyroid_problems] = useState(null)
  const [ulcers, setulcers] = useState(null)







  const onSubmithip2 = () => {
    setloder(true);
    // setShow2(false);
    // console.log("packageId,", packageId, token1.id);
    const formData = new FormData();
    formData.append("add_or_adhd", add_or_adhd);
    formData.append("anemia", anemia);
    formData.append("anxiety", anxiety);
    formData.append("arthritis", arthritis);

    formData.append("asthma", asthma);
    formData.append("bipolar_disorder", bipolar_disorder);
    formData.append("birth_deformities", birth_deformities);
    formData.append("cancer", cancer);

    formData.append("cerebral_palsy", cerebral_palsy);
    formData.append("chronic_bronchitis", chronic_bronchitis);
    formData.append("cystic_fibrosis", cystic_fibrosis);
    formData.append("deafness_hard_of_hearing", deafness_hard_of_hearing);

    formData.append("depression", depression);
    formData.append("diabetes", diabetes);
    formData.append("emphysema", emphysema);
    formData.append("endometriosis", endometriosis);


    formData.append("epilepsy_or_convulsions", epilepsy_or_convulsions);
    formData.append("eye_or_retinal_disease", eye_or_retinal_disease);
    formData.append("hpv", hpv);
    formData.append("head_injury", head_injury);

    formData.append("heart_problems", heart_problems);
    formData.append("hemophilia", hemophilia);
    formData.append("hemorrhaging_after_birth", hemorrhaging_after_birth);
    formData.append("herpes", herpes);

    formData.append("high_cholesterol", high_cholesterol);
    formData.append("blood_pressure_hypertension", blood_pressure_hypertension);
    formData.append("hysterectomy", hysterectomy);
    formData.append("intrauterine_fibroids", intrauterine_fibroids);

    formData.append("kidney_problems", kidney_problems);
    formData.append("learning_disability", learning_disability);
    formData.append("liver_disease", liver_disease);
    formData.append("lung_disease", lung_disease);

    formData.append("mental_illness", mental_illness);
    formData.append("mental_retardation", mental_retardation);
    formData.append("migraines", migraines);
    formData.append("multiple_sclerosis", multiple_sclerosis);

    formData.append("muscular_dystrophy", muscular_dystrophy);
    formData.append("neck_or_back_problem", neck_or_back_problem);
    formData.append("nervous_system_problems", nervous_system_problems);
    formData.append("obesity", obesity);

    formData.append("paralysis", paralysis);
    formData.append("personalitydisorder", personalitydisorder);
    formData.append("postpartum_depression", postpartum_depression);
    formData.append("pre_eclampsia", pre_eclampsia);

    formData.append("pre_term_labor", pre_term_labor);
    formData.append("schizophrenia", schizophrenia);
    formData.append("seizures", seizures);
    formData.append("sickle_cell_trait", sickle_cell_trait);


    formData.append("skin_disorders", skin_disorders);
    formData.append("speech_problems", speech_problems);
    formData.append("spina_bifida", spina_bifida);
    formData.append("syphilis", syphilis);

    formData.append("tb_or_exposed_to_tb", tb_or_exposed_to_tb);
    formData.append("tay_sachs", tay_sachs);
    formData.append("thyroid_problems", thyroid_problems);
    formData.append("ulcers", ulcers);



    PostApi(`${BaseUrl.baseUrl}surrogate/health/information/step/two`, formData, token)
      .then((data) => {
        console.log("data=====", data.data.message);
        setloder(false);

        setShowToast(true);
        toast(data.data.message);
        sethShow22(false);



        // statusll("approved")
      })

      .catch((err) => {
        console.log("errr", err);
        setloder(false);
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





  //  Pregnancy History


  const [doctor_ordered_bed_rest, setdoctor_ordered_bed_rest] = useState(null)
  const [undergo_fertility_treatment_or_medical_assistance, setundergo_fertility_treatment_or_medical_assistance] = useState(null)
  const [children_require_medical_attention, setchildren_require_medical_attention] = useState(null)
  const [miscarriages, setmiscarriages] = useState(null)

  const [terminations, setterminations] = useState(null)
  const [surrogate_before, setsurrogate_before] = useState(null)
  const [currently_breastfeeding, setcurrently_breastfeeding] = useState(null)
  const [typical_mood_like_during_pregnancy, settypical_mood_like_during_pregnancy] = useState(null)

  const [children_into_the_world, setchildren_into_the_world] = useState(null)
  const [pregnancy_experiance, setpregnancy_experiance] = useState([])
  // console.log(pregnancy_experiance, 'hjhj')


  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;

    // If checkbox is checked, add value to array; otherwise, remove it
    if (checked) {
      setpregnancy_experiance(prevState => [...prevState, value]);
    } else {
      setpregnancy_experiance(prevState => prevState.filter(item => item !== value));
    }
  };

  const onSubmitphh = () => {
    setloder(true);
    // setShow2(false);
    // console.log("packageId,", packageId, token1.id);
    const formData = new FormData();
    formData.append("doctor_ordered_bed_rest", doctor_ordered_bed_rest);
    formData.append("undergo_fertility_treatment_or_medical_assistance", undergo_fertility_treatment_or_medical_assistance);
    formData.append("children_require_medical_attention", children_require_medical_attention);
    formData.append("miscarriages", miscarriages);
    formData.append("terminations", terminations);
    formData.append("surrogate_before", surrogate_before);
    formData.append("currently_breastfeeding", currently_breastfeeding);
    formData.append("typical_mood_like_during_pregnancy", typical_mood_like_during_pregnancy);
    formData.append("children_into_the_world", children_into_the_world);
    // pregnancy_experiance.map((v)=>
    formData.append("pregnancy_experiance[]", pregnancy_experiance)
    // )


    console.log('formdata==========', formData);


    PostApi(`${BaseUrl.baseUrl}surrogate/pregnancy/history`, formData, token)
      .then((data) => {
        console.log("data=====", data.data.message);
        setloder(false);

        setShowToast(true);
        toast(data.data.message);
        setphShow9(false)



        // statusll("approved")
      })

      .catch((err) => {
        console.log("errr", err);
        setloder(false);
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

                    style={{ height: '40px', fontSize: '13px' }}


                  />
                </div>
                <div className='col-lg-6'>
                  <label>Last name*</label>
                  <input type='text' className='form-control' style={{ height: '40px', fontSize: '13px' }}
                    value={lname}
                  // onChange={(e)=>{setlname(e.target.value)}} 

                  />
                </div>
                <div className='col-lg-6' style={{ marginTop: '10px' }}>
                  <label>Middle name*</label>
                  <input type='text' className='form-control' style={{ height: '40px', fontSize: '13px' }} />
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

              </Button> :

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
                  <input type='text' className='form-control' style={{ height: '40px', fontSize: '13px' }}
                    onChange={(e) => { setstreet_address(e.target.value) }}
                    value={street_address}
                  />
                </div>
                <div className='col-lg-6'>
                  <label>City</label>
                  <input type='text' className='form-control' style={{ height: '40px', fontSize: '13px' }}
                    onChange={(e) => { setcity(e.target.value) }}
                    value={city}


                  />
                </div>
                <div className='col-lg-6' style={{ marginTop: '10px' }}>
                  <label>State</label>
                  <input type='text' className='form-control' style={{ height: '40px', fontSize: '13px' }}
                    onChange={(e) => { setstate(e.target.value) }}
                    value={state}

                  />
                </div>
                <div className='col-lg-6' style={{ marginTop: '10px' }}>
                  <label>Zip code</label>
                  <input type='number' className='form-control' style={{ height: '40px', fontSize: '13px' }}
                    onChange={(e) => { setzipcode(e.target.value) }}
                    value={zipcode}

                  />
                </div>
                <div className='col-lg-6' style={{ marginTop: '10px' }}>
                  <label>County</label>
                  <input type='text' className='form-control' style={{ height: '40px', fontSize: '13px' }}
                    onChange={(e) => { setcounty(e.target.value) }}
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
            street_address !== null && city !== null && state !== null && zipcode !== null ?
              <Button
                className="btn btn-primary"
                onClick={g4}
                style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
              >
                Next
              </Button> :
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
            onClick={handleClose4}
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
                  <input type='tel' className='form-control' style={{ height: '40px', fontSize: '13px' }}
                    onChange={(e) => { setphone_number(e.target.value) }}
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
            phone_number !== null ?
              <Button
                className="btn btn-primary"
                onClick={g5}
                style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
              >
                Next
              </Button> :
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
                  <input type='email' className='form-control' style={{ height: '40px', fontSize: '13px' }} onChange={(e) => { setcontact_email_address(e.target.value) }}
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
            contact_email_address !== null ?
              <Button
                className="btn btn-primary"
                onClick={births}
                style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
              >
                Next
              </Button> :
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
                  <input type='date' className='form-control' style={{ height: '40px', fontSize: '13px' }}
                    onChange={(e) => { setdate_of_birth(e.target.value) }}
                    value={date_of_birth}

                  />
                </div>
                <div className='col-lg-6'>

                  <label>Age</label>
                  <input type='number' className='form-control' style={{ height: '40px', fontSize: '13px' }}
                    onChange={(e) => { setage(e.target.value) }}
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
            date_of_birth !== null && age !== null ?
              <Button
                className="btn btn-primary"
                onClick={height}
                style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
              >
                Next
              </Button> :
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
                  <input type='number' className='form-control' style={{ height: '40px', fontSize: '13px' }}
                    onChange={(e) => { setheight_feet(e.target.value) }}
                    value={height_feet}
                  />
                </div>
                <div className='col-lg-6'>

                  <label>Height (inches) </label>
                  <input type='number' className='form-control' style={{ height: '40px', fontSize: '13px' }}
                    onChange={(e) => { setheight_inches(e.target.value) }}
                    value={height_inches}

                  />
                </div>
                <div className='col-lg-6' style={{ marginTop: '10px' }}>

                  <label>Weight (pounds)</label>
                  <input type='number' className='form-control' style={{ height: '40px', fontSize: '13px' }}
                    onChange={(e) => { setweight(e.target.value) }}
                    value={weight}

                  />
                </div>
                <div className='col-lg-6' style={{ marginTop: '10px', }}>

                  <label>BMI</label>
                  <input type='number' className='form-control' style={{ height: '40px', fontSize: '13px' }}
                    onChange={(e) => { setbmi(e.target.value) }}
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
            height_feet !== null && height_inches !== null && weight !== null && bmi !== null ?
              <Button
                className="btn btn-primary"
                onClick={born}
                style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
              >
                Next
              </Button> :
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
                  <p style={{ marginTop: '20px', fontSize: '15px', color: '#d8352f' }} onClick={statuss}>Skip ≫</p>
                </div>
                <div className='col-lg-6'>

                  <label>What country were you born in?  </label>
                  <input type='text' className='form-control' style={{ height: '40px', fontSize: '13px' }}
                    onChange={(e) => { setcountry_born_in(e.target.value) }}
                    value={country_born_in}
                  />
                </div>
                <div className='col-lg-6'>

                  <label>What is your ethnic background? </label>
                  <input type='text' className='form-control' style={{ height: '40px', fontSize: '13px' }}
                    onChange={(e) => { setethnic_background(e.target.value) }}
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
            country_born_in !== null && ethnic_background !== null ?
              <Button
                className="btn btn-primary"
                onClick={statuss}
                style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
              >
                Next
              </Button> :
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
                  <input type='text' className='form-control' style={{ height: '40px', fontSize: '13px' }} onChange={(e) => { setlegal_citizanship_status(e.target.value) }}
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
            legal_citizanship_status !== null ?
              <Button
                className="btn btn-primary"
                onClick={financiallystable}
                style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
              >
                Next
              </Button> :
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


                      <input type="radio" id="yes" name="fav_language" className='form-control' value='yes'
                        checked={financially_stable === 'yes'}

                        onChange={(e) => {
                          setfinancially_stable(e.target.value);
                        }}


                      />
                      <label for="html" style={{ fontSize: '15px', marginLeft: '5px' }}>Yes</label>

                    </div>
                    <div className='col-lg-3 col-sm-2 col-xs-2 d-flex justify-content-start'>


                      <input type="radio" id="No" name="fav_language" className='form-control' value="no"
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
            financially_stable !== null ?
              <Button
                className="btn btn-primary"
                onClick={transportations}
                style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
              >
                Next
              </Button> :
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


                      <input type="radio" id="yes" name="fav_language" className='form-control' value="yes"
                        onChange={(e) => {
                          setreliable_transportation(e.target.value);
                        }}
                        checked={reliable_transportation === 'yes'}
                      />
                      <label for="html" style={{ fontSize: '15px', marginLeft: '5px' }}>Yes</label>

                    </div>
                    <div className='col-lg-3 col-sm-2 col-xs-2 d-flex justify-content-start'>


                      <input type="radio" id="No" name="fav_language" className='form-control' value="No"
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
            reliable_transportation !== null ?
              <Button
                className="btn btn-primary"
                onClick={driverslicenses}
                style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
              >
                Next
              </Button> :
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
                <div className='col-lg-4'>
                  <p style={{ marginTop: '20px', fontSize: '15px', color: '#d8352f' }} onClick={Securitynumber}>Skip ≫</p>
                </div>
                <div className='col-lg-12 d-flex justify-content-start'>

                  <div className='row'>
                    <div className='col-lg-2'>



                      <input type="radio" className='form-control' id="Driver’s license" name="fav_language" value="Driver’s license"
                        onChange={(e) => {
                          setdriver_license_or_id_card(e.target.value);
                        }}
                        checked={driver_license_or_id_card === 'Driver’s license'}


                      />

                    </div>
                    <div className='col-lg-10'>
                      <label for="html">Driver’s license
                      </label>
                    </div>

                     <div className='col-lg-2'>

                      <input type="radio" className='form-control' id="State-issued identification card" name="fav_language" value="State-issued identification card" 
                        onChange={(e) => {
                          setdriver_license_or_id_card(e.target.value);
                        }}
                        checked={driver_license_or_id_card === 'State-issued identification card'}
                      />
                    </div>



                    <div className='col-lg-10'>
                      <label for="html">State-issued identification card
                      </label>
                    </div>

                    <div className='col-lg-2'>

                      <input type="radio" className='form-control' id="Neither of these" name="fav_language" value="Neither of these"
                        onChange={(e) => {
                          setdriver_license_or_id_card(e.target.value);
                        }}
                        checked={driver_license_or_id_card === 'Neither of these'}
                      />
                    </div>
                    <div className='col-lg-10'>
                      <label for="html">Neither of these
                      </label>
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
            onClick={back13}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Back
          </Button>
          {
            driver_license_or_id_card !== null ?
              <Button
                className="btn btn-primary"
                onClick={Securitynumber}
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
                  <p style={{ marginTop: '20px', fontSize: '15px', color: '#d8352f' }} onClick={Traveledoutside}>Skip ≫</p>
                </div>
                <div className='col-lg-8'>

                  <label>Social security number</label>
                  <input type='number' className='form-control' style={{ height: '40px', fontSize: '13px' }}

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
            social_security_number !== null ?
              <Button
                className="btn btn-primary"
                onClick={Traveledoutside}
                style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
              >
                Next
              </Button> :
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


                      <input type="radio" id="yes" name="fav_language" className='form-control' value="yes"
                        onChange={(e) => {
                          setlast_six_month_traveled(e.target.value);
                        }}
                        checked={last_six_month_traveled === 'yes'}
                      />
                      <label for="html" style={{ fontSize: '15px', marginLeft: '5px' }}>Yes</label>

                    </div>
                    <div className='col-lg-3 col-sm-2 col-xs-2 d-flex justify-content-start'>


                      <input type="radio" id="No" name="fav_language" className='form-control' value="No"
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
              </Button> :
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


                      <input type="radio" id="yes" name="fav_language" className='form-control' value="yes"
                        onChange={(e) => {
                          settravell_next_18_months(e.target.value);
                        }}
                        checked={travell_next_18_months === 'yes'}
                      />
                      <label for="html" style={{ fontSize: '15px', marginLeft: '5px' }}>Yes</label>

                    </div>
                    <div className='col-lg-3 col-sm-2 col-xs-2 d-flex justify-content-start'>


                      <input type="radio" id="No" name="fav_language" className='form-control' value="No"
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
            travell_next_18_months !== null ?
              <Button
                className="btn btn-primary"
                onClick={Emergencycontact}
                style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
              >
                Next
              </Button> :
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
                  <input type='text' className='form-control' style={{ height: '40px', fontSize: '13px' }}
                    onChange={(e) => {
                      setemergency_first_name(e.target.value);
                    }}
                    value={emergency_first_name}

                  />
                </div>
                <div className='col-lg-6'>
                  <label>Last name</label>
                  <input type='text' className='form-control' style={{ height: '40px', fontSize: '13PX' }}
                    onChange={(e) => {
                      setemergency_last_name(e.target.value);
                    }}
                    value={emergency_last_name}

                  />
                </div>
                <div className='col-lg-6' style={{ marginTop: '10px' }}>
                  <label>Phone</label>
                  <input type='tel' className='form-control' style={{ height: '40px', fontSize: '13PX' }}
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
          {emergency_first_name !== null && emergency_last_name !== null && emergency_phone_number !== null ?
            <Button
              className="btn btn-primary"
              onClick={Relationshipstatus}
              style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
            >
              Next
            </Button> :
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
                  <input type='text' className='form-control' style={{ height: '40px', fontSize: '13px' }}
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
                  <input type='text' className='form-control' style={{ height: '40px', fontSize: '13px' }}
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
              </Button> :
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


                      <input type="radio" id="yes" name="fav_language" className='form-control' value="yes"
                        onChange={(e) => {
                          setsexually_activity(e.target.value);
                        }}
                        checked={sexually_activity === 'yes'}
                      />
                      <label for="html" style={{ fontSize: '15px', marginLeft: '5px' }}>Yes</label>

                    </div>
                    <div className='col-lg-3 col-sm-2 col-xs-2 d-flex justify-content-start'>


                      <input type="radio" id="No" name="fav_language" className='form-control' value="No"
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
            sexually_activity !== null ?
              <Button
                className="btn btn-primary"
                onClick={partner}
                style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
              >
                Next
              </Button> :
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
            over_the_age_of_18_live !== null ?
              <Button
                className="btn btn-primary"
                onClick={onSubmit}
                style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
              >
                {loder !== false ?
                  <Spinner animation="border" /> : 'Finish'

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


                      <input type="radio" id="yes" name="fav_language" className='form-control' value='yes'
                        checked={high_school_diploma_or_ged === 'yes'}

                        onChange={(e) => {
                          sethigh_school_diploma_or_ged(e.target.value);
                        }}


                      />
                      <label for="html" style={{ fontSize: '15px', marginLeft: '5px' }}>Yes</label>

                    </div>
                    <div className='col-lg-3 col-sm-2 col-xs-2 d-flex justify-content-start'>


                      <input type="radio" id="No" name="fav_language" className='form-control' value="no"
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
            high_school_diploma_or_ged !== null ?
              <Button
                className="btn btn-primary"
                onClick={applicable}
                style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
              >
                Next
              </Button> :
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
                      <p style={{ marginBottom: '10px', fontWeight: '100', fontSize: '17px' }}>
                        Filed bankruptcy</p>
                    </div>




                    <div className='col-lg-3 col-sm-2 col-xs-2 d-flex justify-content-start' style={{ marginTop: '10px' }}>


                      <input type="radio" id="No" name="bankruptcy" className='form-control' value='No'
                        checked={bankruptcy === 'No'}

                        onChange={(e) => {
                          setbankruptcy(e.target.value);
                        }}


                      />
                      <label for="html" style={{ fontSize: '15px', marginLeft: '5px' }}>No</label>

                    </div>
                    <div className='col-lg-4 col-sm-2 col-xs-2 d-flex justify-content-start' style={{ marginTop: '10px' }}>


                      <input type="radio" id="Myself" name="bankruptcy" className='form-control' value="Myself"
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
                <div className='col-lg-6' style={{ marginTop: '20px' }}>
                  <div className='row'>
                    <div className='col-lg-12'>
                      <p style={{ marginBottom: '10px', fontWeight: '100', fontSize: '17px' }}>
                        Filed for divorce or legal separation</p>
                    </div>




                    <div className='col-lg-3 col-sm-2 col-xs-2 d-flex justify-content-start' style={{ marginTop: '10px' }}>


                      <input type="radio" id="No" name="divorce_or_legal_separation" className='form-control' value='No'
                        checked={divorce_or_legal_separation === 'No'}

                        onChange={(e) => {
                          setdivorce_or_legal_separation(e.target.value);
                        }}


                      />
                      <label for="html" style={{ fontSize: '15px', marginLeft: '5px' }}>No</label>

                    </div>
                    <div className='col-lg-4 col-sm-2 col-xs-2 d-flex justify-content-start' style={{ marginTop: '10px' }}>


                      <input type="radio" id="Myself" name="divorce_or_legal_separation" className='form-control' value="Myself"
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
                <div className='col-lg-6' style={{ marginTop: '20px' }}>
                  <div className='row'>
                    <div className='col-lg-12'>
                      <p style={{ marginBottom: '10px', fontWeight: '100', fontSize: '17px' }}>
                        Been arrested</p>
                    </div>




                    <div className='col-lg-3 col-sm-2 col-xs-2 d-flex justify-content-start' style={{ marginTop: '10px' }}>


                      <input type="radio" id="No" name="been_arrested" className='form-control' value='No'
                        checked={been_arrested === 'No'}

                        onChange={(e) => {
                          setbeen_arrested(e.target.value);
                        }}


                      />
                      <label for="html" style={{ fontSize: '15px', marginLeft: '5px' }}>No</label>

                    </div>
                    <div className='col-lg-4 col-sm-2 col-xs-2 d-flex justify-content-start' style={{ marginTop: '10px' }}>


                      <input type="radio" id="Myself" name="been_arrested" className='form-control' value="Myself"
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
                <div className='col-lg-6' style={{ marginTop: '20px' }}>
                  <div className='row'>
                    <div className='col-lg-12'>
                      <p style={{ marginBottom: '10px', fontWeight: '100', fontSize: '17px' }}>
                        Been charged with a DUI</p>
                    </div>




                    <div className='col-lg-3 col-sm-2 col-xs-2 d-flex justify-content-start' style={{ marginTop: '10px' }}>


                      <input type="radio" id="No" name="been_charged_with_a_dui" className='form-control' value='No'
                        checked={been_charged_with_a_dui === 'No'}

                        onChange={(e) => {
                          setbeen_charged_with_a_dui(e.target.value);
                        }}


                      />
                      <label for="html" style={{ fontSize: '15px', marginLeft: '5px' }}>No</label>

                    </div>
                    <div className='col-lg-4 col-sm-2 col-xs-2 d-flex justify-content-start' style={{ marginTop: '10px' }}>


                      <input type="radio" id="Myself" name="been_charged_with_a_dui" className='form-control' value="Myself"
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
                <div className='col-lg-6' style={{ marginTop: '20px' }}>
                  <div className='row'>
                    <div className='col-lg-12'>
                      <p style={{ marginBottom: '10px', fontWeight: '100', fontSize: '17px' }}>
                        Investigated by or had conversations with a government child protective agency</p>
                    </div>




                    <div className='col-lg-3 col-sm-2 col-xs-2 d-flex justify-content-start' style={{ marginTop: '10px' }}>


                      <input type="radio" id="No" name="government_child_protective_agency" className='form-control' value='No'
                        checked={government_child_protective_agency === 'No'}

                        onChange={(e) => {
                          setgovernment_child_protective_agency(e.target.value);
                        }}


                      />
                      <label for="html" style={{ fontSize: '15px', marginLeft: '5px' }}>No</label>

                    </div>
                    <div className='col-lg-4 col-sm-2 col-xs-2 d-flex justify-content-start' style={{ marginTop: '10px' }}>


                      <input type="radio" id="Myself" name="government_child_protective_agency" className='form-control' value="Myself"
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
                <div className='col-lg-6' style={{ marginTop: '20px' }}>
                  <div className='row'>
                    <div className='col-lg-12'>
                      <p style={{ marginBottom: '10px', fontWeight: '100', fontSize: '17px' }}>
                        Placed a child up for adoption</p>
                    </div>




                    <div className='col-lg-3 col-sm-2 col-xs-2 d-flex justify-content-start' style={{ marginTop: '10px' }}>


                      <input type="radio" id="No" name="adoption" className='form-control' value='No'
                        checked={adoption === 'No'}

                        onChange={(e) => {
                          setadoption(e.target.value);
                        }}


                      />
                      <label for="html" style={{ fontSize: '15px', marginLeft: '5px' }}>No</label>

                    </div>
                    <div className='col-lg-4 col-sm-2 col-xs-2 d-flex justify-content-start' style={{ marginTop: '10px' }}>


                      <input type="radio" id="Myself" name="adoption" className='form-control' value="Myself"
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
                <div className='col-lg-6' style={{ marginTop: '20px' }}>
                  <div className='row'>
                    <div className='col-lg-12'>
                      <p style={{ marginBottom: '10px', fontWeight: '100', fontSize: '17px' }}>
                        Been in a substance abuse program</p>
                    </div>




                    <div className='col-lg-3 col-sm-2 col-xs-2 d-flex justify-content-start' style={{ marginTop: '10px' }}>


                      <input type="radio" id="No" name="substance_abuse_program " className='form-control' value='No'
                        checked={substance_abuse_program === 'No'}

                        onChange={(e) => {
                          setsubstance_abuse_program(e.target.value);
                        }}


                      />
                      <label for="html" style={{ fontSize: '15px', marginLeft: '5px' }}>No</label>

                    </div>
                    <div className='col-lg-4 col-sm-2 col-xs-2 d-flex justify-content-start' style={{ marginTop: '10px' }}>


                      <input type="radio" id="Myself" name="substance_abuse_program" className='form-control' value="Myself"
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
                <div className='col-lg-6' style={{ marginTop: '20px' }}>
                  <div className='row'>
                    <div className='col-lg-12'>
                      <p style={{ marginBottom: '10px', fontWeight: '100', fontSize: '17px' }}>
                        Been charged with domestic violence</p>
                    </div>




                    <div className='col-lg-3 col-sm-2 col-xs-2 d-flex justify-content-start' style={{ marginTop: '10px' }}>


                      <input type="radio" id="No" name="domestic_violence" className='form-control' value='No'
                        checked={domestic_violence === 'No'}

                        onChange={(e) => {
                          setdomestic_violence(e.target.value);
                        }}


                      />
                      <label for="html" style={{ fontSize: '15px', marginLeft: '5px' }}>No</label>

                    </div>
                    <div className='col-lg-4 col-sm-2 col-xs-2 d-flex justify-content-start' style={{ marginTop: '10px' }}>


                      <input type="radio" id="Myself" name="domestic_violence" className='form-control' value="Myself"
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
                <div className='col-lg-6' style={{ marginTop: '20px' }}>
                  <div className='row'>
                    <div className='col-lg-12'>
                      <p style={{ marginBottom: '10px', fontWeight: '100', fontSize: '17px' }}>
                        Been involved with a lawsuit</p>
                    </div>




                    <div className='col-lg-3 col-sm-2 col-xs-2 d-flex justify-content-start' style={{ marginTop: '10px' }}>


                      <input type="radio" id="No" name="involved_with_a_lawsuit" className='form-control' value='No'
                        checked={involved_with_a_lawsuit === 'No'}

                        onChange={(e) => {
                          setinvolved_with_a_lawsuit(e.target.value);
                        }}


                      />
                      <label for="html" style={{ fontSize: '15px', marginLeft: '5px' }}>No</label>

                    </div>
                    <div className='col-lg-4 col-sm-2 col-xs-2 d-flex justify-content-start' style={{ marginTop: '10px' }}>


                      <input type="radio" id="Myself" name="involved_with_a_lawsuit" className='form-control' value="Myself"
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
                <div className='col-lg-6' style={{ marginTop: '20px' }}>
                  <div className='row'>
                    <div className='col-lg-12'>
                      <p style={{ marginBottom: '10px', fontWeight: '100', fontSize: '17px' }}>
                        Been past due on child support</p>
                    </div>




                    <div className='col-lg-3 col-sm-2 col-xs-2 d-flex justify-content-start' style={{ marginTop: '10px' }}>


                      <input type="radio" id="No" name="past_due_on_child_support" className='form-control' value='No'
                        checked={past_due_on_child_support === 'No'}

                        onChange={(e) => {
                          setpast_due_on_child_support(e.target.value);
                        }}


                      />
                      <label for="html" style={{ fontSize: '15px', marginLeft: '5px' }}>No</label>

                    </div>
                    <div className='col-lg-4 col-sm-2 col-xs-2 d-flex justify-content-start' style={{ marginTop: '10px' }}>


                      <input type="radio" id="Myself" name="past_due_on_child_support" className='form-control' value="Myself"
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
                <div className='col-lg-6' style={{ marginTop: '20px' }}>
                  <div className='row'>
                    <div className='col-lg-12'>
                      <p style={{ marginBottom: '10px', fontWeight: '100', fontSize: '17px' }}>
                        Lost custody of any of your children</p>
                    </div>




                    <div className='col-lg-3 col-sm-2 col-xs-2 d-flex justify-content-start' style={{ marginTop: '10px' }}>


                      <input type="radio" id="No" name="fav_language" className='form-control' value='No'
                        checked={lost_custody_of_any_of_your_children === 'No'}

                        onChange={(e) => {
                          setlost_custody_of_any_of_your_children(e.target.value);
                        }}


                      />
                      <label for="html" style={{ fontSize: '15px', marginLeft: '5px' }}>No</label>

                    </div>
                    <div className='col-lg-4 col-sm-2 col-xs-2 d-flex justify-content-start' style={{ marginTop: '10px' }}>


                      <input type="radio" id="Myself" name="fav_language" className='form-control' value="Myself"
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
            bankruptcy !== null && divorce_or_legal_separation !== null && been_arrested !== null && been_charged_with_a_dui !== null
              && government_child_protective_agency !== null && adoption !== null && substance_abuse_program !== null && domestic_violence !== null
              && involved_with_a_lawsuit !== null && past_due_on_child_support !== null && lost_custody_of_any_of_your_children !== null


              ?
              <Button
                className="btn btn-primary"
                onClick={onSubmitph}
                style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
              >
                {loder !== false ?
                  <Spinner animation="border" /> : 'Finish'

                }

              </Button> :
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


      {/* Employment and Health Insurance */}


      <Modal
        show={eshow1}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handleClosee1}
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

                <h3 style={{ marginTop: '20px', marginBottom: '20px', }}>Let’s understand your work status</h3>
                <p style={{
                  MARGINTOP: '10PX',
                  fontWeight: '100',
                  color: '#333352',
                }}>
                  Most of us have been surrogates ourselves and are so excited to get you started <br />on your surrogacy journey!

                  <p style={{ padding: '5px', marginTop: '10px' }}>  ✔️ Please share information about your current job(s) and health insurance</p>
                  <p style={{ padding: '5px' }}>  ✔️ This section should take less than 5 minutes to complete</p>
                  {/* <p style={{ padding: '5px' }}>  ✔️ This section could take you 2-10 minutes depending on your history</p> */}




                </p>
              </div>
            </div>
          </div>

          {/* ------- */}
        </Modal.Body>

        <Modal.Footer style={{}}>
          <Button
            className="btn btn-primary"
            onClick={healthinsurance}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Let’s go!
          </Button>
          <Button
            className="btn btn-primary"
            onClick={eback1}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Close
          </Button>
          {/* <Button variant="primary" onClick={addcustomer}>
                        Add
                    </Button> */}
        </Modal.Footer>
      </Modal>


      {/* Are you currently in the military or reserves? */}

      <Modal
        show={eshow2}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handleClosee2}
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
          <div className='col-lg-12 '>
            <div className="container">
              <div className='row'>
                <div className='col-lg-10'>
                  <h3 style={{ marginTop: '20px', marginBottom: '20px' }}>Are you currently in the military or reserves?</h3>


                </div>
                <div className='col-lg-2'>
                  <p style={{ marginTop: '20px', fontSize: '15px', color: '#d8352f' }} onClick={employmentstatus}>Skip ≫</p>
                </div>






                {/* <div className='col-lg-3 col-sm-2 col-xs-2 d-flex justify-content-start'>


                      <input type="radio"  id="No" name="fav_language" className='form-control' value='No'
                      checked={high_school_diploma_or_ged === 'No'}
                      
                                         onChange={(e) => {
                          sethigh_school_diploma_or_ged(e.target.value);
                        }}
                       

                      />
                      <label for="html" style={{ fontSize: '15px', marginLeft: '5px' }}>No</label>

                    </div> */}
                <div className='col-lg-12 col-sm-12 col-xs-12 d-flex justify-content-start'>
                  <div className='row'>

                    <div className='col-lg-4 col-sm-4 col-xs-4'>
                      <input type="radio" id="Yes – active duty" name="fav_language" className='form-control' value="No"
                        checked={military_or_reserves === 'No'}
                        onChange={(e) => {
                          setmilitary_or_reserves(e.target.value);
                        }}
                        style={{ marginLeft: '-20px' }}


                      />
                    </div>
                    <div className='col-lg-8 col-sm-8 col-xs-8'>

                      <label for="html" style={{ fontSize: '15px', marginLeft: '-60px' }}>No</label>
                    </div>

                    <div className='col-lg-4 col-sm-4 col-xs-4'>
                      <input type="radio" id="Yes – active duty" name="fav_language" className='form-control' value="Yes – active duty"
                        checked={military_or_reserves === 'Yes – active duty'}
                        onChange={(e) => {
                          setmilitary_or_reserves(e.target.value);
                        }}
                        style={{ marginLeft: '-20px' }}


                      />
                    </div>
                    <div className='col-lg-8 col-sm-8 col-xs-8'>

                      <label for="html" style={{ fontSize: '15px', marginLeft: '-60px' }}>Yes – active duty</label>
                    </div>

                    <div className='col-lg-4 col-sm-4 col-xs-4'>
                      <input type="radio" id="Yes – military reserves" name="fav_language" className='form-control' value="Yes – military reserves"
                        checked={military_or_reserves === 'Yes – military reserves'}
                        onChange={(e) => {
                          setmilitary_or_reserves(e.target.value);
                        }}
                        style={{ marginLeft: '-20px' }}


                      />
                    </div>
                    <div className='col-lg-8 col-sm-8 col-xs-8'>

                      <label for="html" style={{ fontSize: '15px', marginLeft: '-60px' }}>Yes – military reserves</label>
                    </div>
                  </div>
                </div>


                {/* 
                    <div className='col-lg-4 col-sm-2 col-xs-2 d-flex justify-content-start'>


<input type="radio"  id="Yes – active duty" name="fav_language" className='form-control' value="Yes – active duty"
 checked={high_school_diploma_or_ged === 'Yes – active duty'}
  onChange={(e) => {
    sethigh_school_diploma_or_ged(e.target.value);
  }}


/>
<label for="html" style={{ fontSize: '15px', marginLeft: '5px' }}>Yes – active duty</label>

</div> */}

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


          {/* ------- */}
        </Modal.Body>

        <Modal.Footer style={{}}>
          <Button
            className="btn btn-primary"
            onClick={eback2}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Back
          </Button>

          {
            military_or_reserves !== null ?
              <Button
                className="btn btn-primary"
                onClick={employmentstatus}
                style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
              >
                Next
              </Button> :
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
            onClick={handleClosee2}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Close
          </Button>
          {/* <Button variant="primary" onClick={addcustomer}>
                        Add
                    </Button> */}
        </Modal.Footer>
      </Modal>

      {/* What is your current employment status? */}

      <Modal
        show={eshow3}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handleClosee3}
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
          <div className='col-lg-12 '>
            <div className="container">
              <div className='row'>
                <div className='col-lg-10'>
                  <h3 style={{ marginTop: '20px', marginBottom: '20px' }}>What is your current employment status?</h3>

                </div>
                <div className='col-lg-2'>
                  <p style={{ marginTop: '20px', fontSize: '15px', color: '#d8352f' }} onClick={disabilitybenefits}>Skip ≫</p>
                </div>
                <p style={{ marginLeft: '20px', fontWeight: 'bold', marginBottom: '10px', }}>Current employment status</p>





                {/* <div className='col-lg-3 col-sm-2 col-xs-2 d-flex justify-content-start'>


                      <input type="radio"  id="No" name="fav_language" className='form-control' value='No'
                      checked={high_school_diploma_or_ged === 'No'}
                      
                                         onChange={(e) => {
                          sethigh_school_diploma_or_ged(e.target.value);
                        }}
                       

                      />
                      <label for="html" style={{ fontSize: '15px', marginLeft: '5px' }}>No</label>

                    </div> */}
                <div className='col-lg-12 col-sm-12 col-xs-12 d-flex justify-content-start'>
                  <div className='row'>

                    <div className='col-lg-4 col-sm-4 col-xs-4'>
                      <input type="radio" id="Employed" name="fav_language" className='form-control' value="Employed"
                        checked={current_employment_status === 'Employed'}
                        onChange={(e) => {
                          setcurrent_employment_status(e.target.value);
                        }}
                      // style={{marginLeft:'-20px'}}


                      />
                    </div>
                    <div className='col-lg-8 col-sm-8 col-xs-8'>

                      <label for="html" style={{ fontSize: '15px', marginLeft: '-30px' }}>Employed</label>
                    </div>

                    <div className='col-lg-4 col-sm-4 col-xs-4'>
                      <input type="radio" id="Yes – active duty" name="fav_language" className='form-control' value="Not employed"
                        checked={current_employment_status === 'Not employed'}
                        onChange={(e) => {
                          setcurrent_employment_status(e.target.value);
                        }}
                      // style={{marginLeft:'-20px'}}


                      />
                    </div>
                    <div className='col-lg-8 col-sm-8 col-xs-8'>

                      <label for="html" style={{ fontSize: '15px', marginLeft: '-30px' }}>Not employed</label>
                    </div>


                  </div>
                </div>


                {/* 
                    <div className='col-lg-4 col-sm-2 col-xs-2 d-flex justify-content-start'>


<input type="radio"  id="Yes – active duty" name="fav_language" className='form-control' value="Yes – active duty"
 checked={high_school_diploma_or_ged === 'Yes – active duty'}
  onChange={(e) => {
    sethigh_school_diploma_or_ged(e.target.value);
  }}


/>
<label for="html" style={{ fontSize: '15px', marginLeft: '5px' }}>Yes – active duty</label>

</div> */}

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


          {/* ------- */}
        </Modal.Body>

        <Modal.Footer style={{}}>
          <Button
            className="btn btn-primary"
            onClick={eback3}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Back
          </Button>

          {
            current_employment_status !== null ?
              <Button
                className="btn btn-primary"
                onClick={disabilitybenefits}
                style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
              >
                Next
              </Button> :
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
            onClick={handleClosee3}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Close
          </Button>
          {/* <Button variant="primary" onClick={addcustomer}>
                        Add
                    </Button> */}
        </Modal.Footer>
      </Modal>

      {/* Do you qualify for short-term disability benefits? */}

      <Modal
        show={eshow4}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handleClosee4}
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
          <div className='col-lg-12 '>
            <div className="container">
              <div className='row'>
                <div className='col-lg-10'>
                  <h3 style={{ marginTop: '20px', marginBottom: '20px' }}>Do you qualify for short-term disability benefits? </h3>


                </div>
                <div className='col-lg-2'>
                  <p style={{ marginTop: '20px', fontSize: '15px', color: '#d8352f' }} onClick={ehealthinsurance}>Skip ≫</p>
                </div>






                {/* <div className='col-lg-3 col-sm-2 col-xs-2 d-flex justify-content-start'>


                      <input type="radio"  id="No" name="fav_language" className='form-control' value='No'
                      checked={high_school_diploma_or_ged === 'No'}
                      
                                         onChange={(e) => {
                          sethigh_school_diploma_or_ged(e.target.value);
                        }}
                       

                      />
                      <label for="html" style={{ fontSize: '15px', marginLeft: '5px' }}>No</label>

                    </div> */}
                <div className='col-lg-12 col-sm-12 col-xs-12 d-flex justify-content-start'>
                  <div className='row'>

                    <div className='col-lg-4 col-sm-4 col-xs-4'>
                      <input type="radio" id="Yes - state-funded disability benefits (SDI)" name="fav_language" className='form-control' value="Yes - state-funded disability benefits (SDI)"
                        checked={shortterm_disability_benefits === 'Yes - state-funded disability benefits (SDI)'}
                        onChange={(e) => {
                          setshortterm_disability_benefits(e.target.value);
                        }}
                        style={{ marginLeft: '-81px' }}


                      />
                    </div>
                    <div className='col-lg-8 col-sm-8 col-xs-8'>

                      <label for="html" style={{ fontSize: '15px', marginLeft: '-190px' }}>Yes - state-funded disability benefits (SDI)</label>
                    </div>

                    <div className='col-lg-4 col-sm-4 col-xs-4'>
                      <input type="radio" id="Yes - short-term disability policy through employer" name="fav_language" className='form-control' value="Yes - short-term disability policy through employer"
                        checked={shortterm_disability_benefits === 'Yes - short-term disability policy through employer'}
                        onChange={(e) => {
                          setshortterm_disability_benefits(e.target.value);
                        }}
                        style={{ marginLeft: '-81px' }}


                      />
                    </div>
                    <div className='col-lg-8 col-sm-8 col-xs-8'>

                      <label for="html" style={{ fontSize: '15px', marginLeft: '-190px' }}>Yes - short-term disability policy through employer</label>
                    </div>

                    <div className='col-lg-4 col-sm-4 col-xs-4'>
                      <input type="radio" id="No - NOT state-funded disability benefits OR policy through employer" name="fav_language" className='form-control' value="No - NOT state-funded disability benefits OR policy through employer"
                        checked={shortterm_disability_benefits === 'No - NOT state-funded disability benefits OR policy through employer'}
                        onChange={(e) => {
                          setshortterm_disability_benefits(e.target.value);
                        }}
                        style={{ marginLeft: '-81px' }}


                      />
                    </div>
                    <div className='col-lg-8 col-sm-8 col-xs-8'>

                      <label for="html" style={{ fontSize: '15px', marginLeft: '-190px' }}>No - NOT state-funded disability benefits OR policy through employer</label>
                    </div>

                    <div className='col-lg-4 col-sm-4 col-xs-4'>
                      <input type="radio" id="Not sure" name="fav_language" className='form-control' value="Not sure"
                        checked={shortterm_disability_benefits === 'Not sure'}
                        onChange={(e) => {
                          setshortterm_disability_benefits(e.target.value);
                        }}
                        style={{ marginLeft: '-81px' }}


                      />
                    </div>
                    <div className='col-lg-8 col-sm-8 col-xs-8'>

                      <label for="html" style={{ fontSize: '15px', marginLeft: '-190px' }}>Not sure</label>
                    </div>

                  </div>
                </div>


                {/* 
                    <div className='col-lg-4 col-sm-2 col-xs-2 d-flex justify-content-start'>


<input type="radio"  id="Yes – active duty" name="fav_language" className='form-control' value="Yes – active duty"
 checked={high_school_diploma_or_ged === 'Yes – active duty'}
  onChange={(e) => {
    sethigh_school_diploma_or_ged(e.target.value);
  }}


/>
<label for="html" style={{ fontSize: '15px', marginLeft: '5px' }}>Yes – active duty</label>

</div> */}

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


          {/* ------- */}
        </Modal.Body>

        <Modal.Footer style={{}}>
          <Button
            className="btn btn-primary"
            onClick={eback4}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Back
          </Button>

          {
            shortterm_disability_benefits !== null ?
              <Button
                className="btn btn-primary"
                onClick={ehealthinsurance}
                style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
              >
                Next
              </Button> :
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
            onClick={handleClosee4}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Close
          </Button>
          {/* <Button variant="primary" onClick={addcustomer}>
                        Add
                    </Button> */}
        </Modal.Footer>
      </Modal>


      {/* Do you currently have any medical health insurance? */}

      <Modal
        show={eshow5}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handleClosee5}
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
          <div className='col-lg-12 '>
            <div className="container">
              <div className='row'>
                <div className='col-lg-10'>
                  <h3 style={{ marginTop: '20px', marginBottom: '20px' }}>Do you currently have any medical health insurance? </h3>

                </div>
                <div className='col-lg-2'>
                  {/* <p style={{ marginTop: '20px', fontSize: '15px', color: '#d8352f' }} onClick={disabilitybenefits}>Skip ≫</p> */}
                </div>
                {/* <p  style={{marginLeft:'20px', fontWeight:'bold',marginBottom: '10px',}}>Current employment status</p> */}





                {/* <div className='col-lg-3 col-sm-2 col-xs-2 d-flex justify-content-start'>


                      <input type="radio"  id="No" name="fav_language" className='form-control' value='No'
                      checked={high_school_diploma_or_ged === 'No'}
                      
                                         onChange={(e) => {
                          sethigh_school_diploma_or_ged(e.target.value);
                        }}
                       

                      />
                      <label for="html" style={{ fontSize: '15px', marginLeft: '5px' }}>No</label>

                    </div> */}
                <div className='col-lg-12 col-sm-12 col-xs-12 d-flex justify-content-start'>
                  <div className='row'>

                    <div className='col-lg-4 col-sm-4 col-xs-4'>
                      <input type="radio" id="Yes" name="fav_language" className='form-control' value="Yes"
                        checked={medical_health_insurance === 'Yes'}
                        onChange={(e) => {
                          setmedical_health_insurance(e.target.value);
                        }}
                      // style={{marginLeft:'-20px'}}


                      />
                    </div>
                    <div className='col-lg-8 col-sm-8 col-xs-8'>

                      <label for="html" style={{ fontSize: '15px', marginLeft: '-20px' }}>Yes</label>
                    </div>

                    <div className='col-lg-4 col-sm-4 col-xs-4'>
                      <input type="radio" id="No" name="fav_language" className='form-control' value="No"
                        checked={medical_health_insurance === 'No'}
                        onChange={(e) => {
                          setmedical_health_insurance(e.target.value);
                        }}
                      // style={{marginLeft:'-20px'}}


                      />
                    </div>
                    <div className='col-lg-8 col-sm-8 col-xs-8'>

                      <label for="html" style={{ fontSize: '15px', marginLeft: '-20px' }}>No</label>
                    </div>


                  </div>
                </div>


                {/* 
                    <div className='col-lg-4 col-sm-2 col-xs-2 d-flex justify-content-start'>


<input type="radio"  id="Yes – active duty" name="fav_language" className='form-control' value="Yes – active duty"
 checked={high_school_diploma_or_ged === 'Yes – active duty'}
  onChange={(e) => {
    sethigh_school_diploma_or_ged(e.target.value);
  }}


/>
<label for="html" style={{ fontSize: '15px', marginLeft: '5px' }}>Yes – active duty</label>

</div> */}

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


          {/* ------- */}
        </Modal.Body>

        <Modal.Footer style={{}}>
          <Button
            className="btn btn-primary"
            onClick={eback5}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Back
          </Button>

          {
            medical_health_insurance !== null ?
              <Button
                className="btn btn-primary"
                onClick={onSubmithi}
                style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
              >
                {loder !== false ?
                  <Spinner animation="border" /> : 'Finish'

                }
              </Button> :
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
          onClick={applicable}
          style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
        >
          Next
        </Button> */}

          <Button
            className="btn btn-primary"
            onClick={handleClosee5}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Close
          </Button>
          {/* <Button variant="primary" onClick={addcustomer}>
                        Add
                    </Button> */}
        </Modal.Footer>
      </Modal>


      {/*Health Information*/}


      <Modal
        show={hshow1}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handleCloseh1}
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

                <h3 style={{ marginTop: '20px', marginBottom: '20px', }}>Now some information about your health</h3>
                <p style={{
                  MARGINTOP: '10PX',
                  fontWeight: '100',
                  color: '#333352',
                }}>


                  <p style={{ padding: '5px', marginTop: '10px' }}>  ✔️ This section will ask questions about your general health and health history</p>
                  <p style={{ padding: '5px' }}>  ✔️ There are a lot of questions in this section so we’ve broken it out into two parts</p>
                  <p style={{ padding: '5px' }}>  ✔️ It should take you around 15-20 minutes to finish this section</p>




                </p>
              </div>
            </div>
          </div>

          {/* ------- */}
        </Modal.Body>

        <Modal.Footer style={{}}>
          <Button
            className="btn btn-primary"
            onClick={Welcome}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Let’s go!
          </Button>
          <Button
            className="btn btn-primary"
            onClick={eback1}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Close
          </Button>
          {/* <Button variant="primary" onClick={addcustomer}>
                        Add
                    </Button> */}
        </Modal.Footer>
      </Modal>


      {/*Welcome to Part 1*/}


      <Modal
        show={hshow2}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handleCloseh2}
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

                <h3 style={{ marginTop: '20px', marginBottom: '10px', }}>Welcome to Part 1</h3>
                <p style={{
                  MARGINTOP: '10PX',
                  fontWeight: '100',
                  color: '#333352',
                }}>


                  <p style={{ paddingTop: '10px', }}>  This section will ask detailed questions about your health and some questions
                    may be sensitive. Just know that most of us here
                    at ISC have had to answer these questions too and it’s all just a part of the process of becoming a surrogate.</p>
                  {/* <p style={{ padding: '5px' }}>  ✔️ There are a lot of questions in this section so we’ve broken it out into two parts</p>
                  <p style={{ padding: '5px' }}>  ✔️ It should take you around 15-20 minutes to finish this section</p> */}




                </p>
              </div>
            </div>
          </div>

          {/* ------- */}
        </Modal.Body>

        <Modal.Footer style={{}}>
          <Button
            className="btn btn-primary"
            onClick={bloodtype}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Next
          </Button>
          <Button
            className="btn btn-primary"
            onClick={handleCloseh2}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Close
          </Button>
          {/* <Button variant="primary" onClick={addcustomer}>
                        Add
                    </Button> */}
        </Modal.Footer>
      </Modal>
      {/* What is your blood type? */}

      <Modal
        show={hshow3}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handleCloseh3}
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
                  <h3 style={{ marginTop: '20px', marginBottom: '20px' }}>What is your blood type? </h3>


                </div>
                <div className='col-lg-2'>
                  <p style={{ marginTop: '20px', fontSize: '15px', color: '#d8352f' }} onClick={papsmear}>Skip ≫</p>
                </div>
                <div className='col-lg-12'>

                </div>

                <div className='col-lg-12'>

                  {/* <label>Other than you (and your partner if you have one), how many other people over the age of
                     18 live in the same household as you?</label> */}
                  <input type='text' className='form-control' style={{ height: '40px', }}
                    onChange={(e) => {
                      setblood_type(e.target.value);
                    }}
                    value={blood_type}



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
            onClick={hback3}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Back
          </Button>
          {
            blood_type !== null ?
              <Button
                className="btn btn-primary"
                onClick={papsmear}
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
            onClick={handleCloseh3}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Close
          </Button>
          {/* <Button variant="primary" onClick={addcustomer}>
                        Add
                    </Button> */}
        </Modal.Footer>
      </Modal>

      {/* What year was your most recent pap smear done? */}

      <Modal
        show={hshow4}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handleCloseh4}
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
          <div className='col-lg-12 '>
            <div className="container">
              <div className='row'>
                <div className='col-lg-10'>
                  <h3 style={{ marginTop: '20px', marginBottom: '20px' }}>What year was your most recent pap smear done?</h3>

                </div>

                <div className='col-lg-2'>
                  <p style={{ marginTop: '30px', fontSize: '15px', color: '#d8352f' }} onClick={homework}>Skip ≫</p>
                </div>
                {/* <p  style={{marginLeft:'20px', fontWeight:'bold',marginBottom: '10px',}}>Current employment status</p> */}

                <div className='col-lg-8'>

                  <input type='text' className='form-control' style={{ height: '40px', }}
                    onChange={(e) => {
                      setrecent_pap_smear(e.target.value);
                    }}
                    value={recent_pap_smear}



                  />
                </div>



                <div className='col-lg-12' style={{ marginTop: '30px' }}>Have you ever had an abnormal pap smear result?</div>

                <div className='col-lg-12 col-sm-12 col-xs-12 d-flex justify-content-start' style={{ marginTop: '10px' }}>
                  <div className='row'>

                    <div className='col-lg-4 col-sm-4 col-xs-4'>
                      <input type="radio" id="yes" name="fav_language" className='form-control' value="yes"
                        checked={abnormal_pap_smear === 'yes'}
                        onChange={(e) => {
                          setabnormal_pap_smear(e.target.value);
                        }}
                      // style={{marginLeft:'-20px'}}


                      />
                    </div>
                    <div className='col-lg-8 col-sm-8 col-xs-8'>

                      <label for="html" style={{ fontSize: '15px', marginLeft: '-20px' }}>Yes</label>
                    </div>

                    <div className='col-lg-4 col-sm-4 col-xs-4'>
                      <input type="radio" id="No" name="fav_language" className='form-control' value="No"
                        checked={abnormal_pap_smear === 'No'}
                        onChange={(e) => {
                          setabnormal_pap_smear(e.target.value);
                        }}
                      // style={{marginLeft:'-20px'}}


                      />
                    </div>
                    <div className='col-lg-8 col-sm-8 col-xs-8'>

                      <label for="html" style={{ fontSize: '15px', marginLeft: '-20px' }}>No</label>
                    </div>


                  </div>
                </div>


                {/* 
                    <div className='col-lg-4 col-sm-2 col-xs-2 d-flex justify-content-start'>


<input type="radio"  id="Yes – active duty" name="fav_language" className='form-control' value="Yes – active duty"
 checked={high_school_diploma_or_ged === 'Yes – active duty'}
  onChange={(e) => {
    sethigh_school_diploma_or_ged(e.target.value);
  }}


/>
<label for="html" style={{ fontSize: '15px', marginLeft: '5px' }}>Yes – active duty</label>

</div> */}

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


          {/* ------- */}
        </Modal.Body>

        <Modal.Footer style={{}}>
          <Button
            className="btn btn-primary"
            onClick={hback4}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Back
          </Button>

          {
            recent_pap_smear !== null && abnormal_pap_smear !== null ?
              <Button
                className="btn btn-primary"
                onClick={homework}
                style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
              >
                Next
              </Button> :
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
            onClick={handleCloseh4}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Close
          </Button>
          {/* <Button variant="primary" onClick={addcustomer}>
                        Add
                    </Button> */}
        </Modal.Footer>
      </Modal>

      {/* Are you around secondhand smoke at home or at work? */}

      <Modal
        show={hshow5}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handleCloseh5}
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
          <div className='col-lg-12 '>
            <div className="container">
              <div className='row'>
                <div className='col-lg-10'>
                  <h3 style={{ marginTop: '20px', marginBottom: '20px' }}>Are you around secondhand smoke at home or at work?</h3>

                </div>

                <div className='col-lg-2'>
                  <p style={{ marginTop: '30px', fontSize: '15px', color: '#d8352f' }} onClick={concerns}>Skip ≫</p>
                </div>





                <div className='col-lg-12 col-sm-12 col-xs-12 d-flex justify-content-start' style={{ marginTop: '5px' }}>
                  <div className='row'>

                    <div className='col-lg-4 col-sm-4 col-xs-4'>
                      <input type="radio" id="yes" name="fav_language" className='form-control' value="yes"
                        checked={secondhand_smoke_at_home_or_at_work === 'yes'}
                        onChange={(e) => {
                          setsecondhand_smoke_at_home_or_at_work(e.target.value);
                        }}
                      // style={{marginLeft:'-20px'}}


                      />
                    </div>
                    <div className='col-lg-8 col-sm-8 col-xs-8'>

                      <label for="html" style={{ fontSize: '15px', marginLeft: '-20px' }}>Yes</label>
                    </div>

                    <div className='col-lg-4 col-sm-4 col-xs-4'>
                      <input type="radio" id="No" name="fav_language" className='form-control' value="No"
                        checked={secondhand_smoke_at_home_or_at_work === 'No'}
                        onChange={(e) => {
                          setsecondhand_smoke_at_home_or_at_work(e.target.value);
                        }}
                      // style={{marginLeft:'-20px'}}


                      />
                    </div>
                    <div className='col-lg-8 col-sm-8 col-xs-8'>

                      <label for="html" style={{ fontSize: '15px', marginLeft: '-20px' }}>No</label>
                    </div>


                  </div>
                </div>


                {/* 
                    <div className='col-lg-4 col-sm-2 col-xs-2 d-flex justify-content-start'>


<input type="radio"  id="Yes – active duty" name="fav_language" className='form-control' value="Yes – active duty"
 checked={high_school_diploma_or_ged === 'Yes – active duty'}
  onChange={(e) => {
    sethigh_school_diploma_or_ged(e.target.value);
  }}


/>
<label for="html" style={{ fontSize: '15px', marginLeft: '5px' }}>Yes – active duty</label>

</div> */}

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


          {/* ------- */}
        </Modal.Body>

        <Modal.Footer style={{}}>
          <Button
            className="btn btn-primary"
            onClick={hback4}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Back
          </Button>

          {
            secondhand_smoke_at_home_or_at_work !== null ?
              <Button
                className="btn btn-primary"
                onClick={concerns}
                style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
              >
                Next
              </Button> :
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
            onClick={handleCloseh5}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Close
          </Button>
          {/* <Button variant="primary" onClick={addcustomer}>
                        Add
                    </Button> */}
        </Modal.Footer>
      </Modal>

      {/*Do you have any health concerns we should be aware of?*/}

      <Modal
        show={hshow6}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handleCloseh6}
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
          <div className='col-lg-12 '>
            <div className="container">
              <div className='row'>
                <div className='col-lg-10'>
                  <h3 style={{ marginTop: '20px', marginBottom: '20px' }}>Do you have any health concerns we should be aware of?</h3>

                </div>

                <div className='col-lg-2'>
                  <p style={{ marginTop: '30px', fontSize: '15px', color: '#d8352f' }} onClick={disabilitybenefits}>Skip ≫</p>
                </div>





                <div className='col-lg-12 col-sm-12 col-xs-12 d-flex justify-content-start' style={{ marginTop: '5px' }}>
                  <div className='row'>

                    <div className='col-lg-4 col-sm-4 col-xs-4'>
                      <input type="radio" id="yes" name="fav_language" className='form-control' value="yes"
                        checked={health_concerns === 'yes'}
                        onChange={(e) => {
                          sethealth_concerns(e.target.value);
                        }}
                      // style={{marginLeft:'-20px'}}


                      />
                    </div>
                    <div className='col-lg-8 col-sm-8 col-xs-8'>

                      <label for="html" style={{ fontSize: '15px', marginLeft: '-20px' }}>Yes</label>
                    </div>

                    <div className='col-lg-4 col-sm-4 col-xs-4'>
                      <input type="radio" id="No" name="fav_language" className='form-control' value="No"
                        checked={health_concerns === 'No'}
                        onChange={(e) => {
                          sethealth_concerns(e.target.value);
                        }}
                      // style={{marginLeft:'-20px'}}


                      />
                    </div>
                    <div className='col-lg-8 col-sm-8 col-xs-8'>

                      <label for="html" style={{ fontSize: '15px', marginLeft: '-20px' }}>No</label>
                    </div>


                  </div>
                </div>


                {/* 
                    <div className='col-lg-4 col-sm-2 col-xs-2 d-flex justify-content-start'>


<input type="radio"  id="Yes – active duty" name="fav_language" className='form-control' value="Yes – active duty"
 checked={high_school_diploma_or_ged === 'Yes – active duty'}
  onChange={(e) => {
    sethigh_school_diploma_or_ged(e.target.value);
  }}


/>
<label for="html" style={{ fontSize: '15px', marginLeft: '5px' }}>Yes – active duty</label>

</div> */}

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


          {/* ------- */}
        </Modal.Body>

        <Modal.Footer style={{}}>
          <Button
            className="btn btn-primary"
            onClick={hback6}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Back
          </Button>

          {
            health_concerns !== null ?
              <Button
                className="btn btn-primary"
                onClick={disabilitybenefits}
                style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
              >
                Next
              </Button> :
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
            onClick={handleCloseh6}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Close
          </Button>
          {/* <Button variant="primary" onClick={addcustomer}>
                        Add
                    </Button> */}
        </Modal.Footer>
      </Modal>

      {/*Are you currently on any prescription medications, or have you been in the past six months?*/}

      <Modal
        show={hshow6}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handleCloseh6}
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
          <div className='col-lg-12 '>
            <div className="container">
              <div className='row'>
                <div className='col-lg-10'>
                  <h3 style={{ marginTop: '20px', marginBottom: '20px' }}>Are you currently on any prescription medications,
                    or have you been in the past six months?</h3>

                </div>

                <div className='col-lg-2'>
                  <p style={{ marginTop: '30px', fontSize: '15px', color: '#d8352f' }} onClick={allergic}>Skip ≫</p>
                </div>





                <div className='col-lg-12 col-sm-12 col-xs-12 d-flex justify-content-start' style={{ marginTop: '5px' }}>
                  <div className='row'>

                    <div className='col-lg-4 col-sm-4 col-xs-4'>
                      <input type="radio" id="yes" name="fav_language" className='form-control' value="yes"
                        checked={prescription_medications === 'yes'}
                        onChange={(e) => {
                          setprescription_medications(e.target.value);
                        }}
                      // style={{marginLeft:'-20px'}}


                      />
                    </div>
                    <div className='col-lg-8 col-sm-8 col-xs-8'>

                      <label for="html" style={{ fontSize: '15px', marginLeft: '-20px' }}>Yes</label>
                    </div>

                    <div className='col-lg-4 col-sm-4 col-xs-4'>
                      <input type="radio" id="No" name="fav_language" className='form-control' value="No"
                        checked={prescription_medications === 'No'}
                        onChange={(e) => {
                          setprescription_medications(e.target.value);
                        }}
                      // style={{marginLeft:'-20px'}}


                      />
                    </div>
                    <div className='col-lg-8 col-sm-8 col-xs-8'>

                      <label for="html" style={{ fontSize: '15px', marginLeft: '-20px' }}>No</label>
                    </div>


                  </div>
                </div>


                {/* 
                    <div className='col-lg-4 col-sm-2 col-xs-2 d-flex justify-content-start'>


<input type="radio"  id="Yes – active duty" name="fav_language" className='form-control' value="Yes – active duty"
 checked={high_school_diploma_or_ged === 'Yes – active duty'}
  onChange={(e) => {
    sethigh_school_diploma_or_ged(e.target.value);
  }}


/>
<label for="html" style={{ fontSize: '15px', marginLeft: '5px' }}>Yes – active duty</label>

</div> */}

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


          {/* ------- */}
        </Modal.Body>

        <Modal.Footer style={{}}>
          <Button
            className="btn btn-primary"
            onClick={hback6}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Back
          </Button>

          {
            prescription_medications !== null ?
              <Button
                className="btn btn-primary"
                onClick={allergic}
                style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
              >
                Next
              </Button> :
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
            onClick={handleCloseh6}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Close
          </Button>
          {/* <Button variant="primary" onClick={addcustomer}>
                        Add
                    </Button> */}
        </Modal.Footer>
      </Modal>

      {/*Are you allergic to anything?*/}

      <Modal
        show={hshow7}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handleCloseh7}
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
          <div className='col-lg-12 '>
            <div className="container">
              <div className='row'>
                <div className='col-lg-10'>
                  <h3 style={{ marginTop: '20px', marginBottom: '20px' }}>Are you allergic to anything?</h3>

                </div>

                <div className='col-lg-2'>
                  <p style={{ marginTop: '30px', fontSize: '15px', color: '#d8352f' }} onClick={obgyn}>Skip ≫</p>
                </div>





                <div className='col-lg-12 col-sm-12 col-xs-12 d-flex justify-content-start' style={{ marginTop: '5px' }}>
                  <div className='row'>

                    <div className='col-lg-4 col-sm-4 col-xs-4'>
                      <input type="radio" id="yes" name="fav_language" className='form-control' value="yes"
                        checked={allergic_to_anything === 'yes'}
                        onChange={(e) => {
                          setallergic_to_anything(e.target.value);
                        }}
                      // style={{marginLeft:'-20px'}}


                      />
                    </div>
                    <div className='col-lg-8 col-sm-8 col-xs-8'>

                      <label for="html" style={{ fontSize: '15px', marginLeft: '-20px' }}>Yes</label>
                    </div>

                    <div className='col-lg-4 col-sm-4 col-xs-4'>
                      <input type="radio" id="No" name="fav_language" className='form-control' value="No"
                        checked={allergic_to_anything === 'No'}
                        onChange={(e) => {
                          setallergic_to_anything(e.target.value);
                        }}
                      // style={{marginLeft:'-20px'}}


                      />
                    </div>
                    <div className='col-lg-8 col-sm-8 col-xs-8'>

                      <label for="html" style={{ fontSize: '15px', marginLeft: '-20px' }}>No</label>
                    </div>


                  </div>
                </div>


                {/* 
                    <div className='col-lg-4 col-sm-2 col-xs-2 d-flex justify-content-start'>


<input type="radio"  id="Yes – active duty" name="fav_language" className='form-control' value="Yes – active duty"
 checked={high_school_diploma_or_ged === 'Yes – active duty'}
  onChange={(e) => {
    sethigh_school_diploma_or_ged(e.target.value);
  }}


/>
<label for="html" style={{ fontSize: '15px', marginLeft: '5px' }}>Yes – active duty</label>

</div> */}

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


          {/* ------- */}
        </Modal.Body>

        <Modal.Footer style={{}}>
          <Button
            className="btn btn-primary"
            onClick={hback7}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Back
          </Button>

          {
            allergic_to_anything !== null ?
              <Button
                className="btn btn-primary"
                onClick={obgyn}
                style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
              >
                Next
              </Button> :
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
            onClick={handleCloseh7}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Close
          </Button>
          {/* <Button variant="primary" onClick={addcustomer}>
                        Add
                    </Button> */}
        </Modal.Footer>
      </Modal>

      {/*Have you been to any type of doctor in the last year (other than an OBGYN)? */}

      <Modal
        show={hshow8}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handleCloseh8}
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
          <div className='col-lg-12 '>
            <div className="container">
              <div className='row'>
                <div className='col-lg-10'>
                  <h3 style={{ marginTop: '20px', marginBottom: '20px' }}>Have you been to any type of doctor in the last year (other than an OBGYN)?</h3>

                </div>

                <div className='col-lg-2'>
                  <p style={{ marginTop: '30px', fontSize: '15px', color: '#d8352f' }} onClick={hospitalized}>Skip ≫</p>
                </div>





                <div className='col-lg-12 col-sm-12 col-xs-12 d-flex justify-content-start' style={{ marginTop: '5px' }}>
                  <div className='row'>

                    <div className='col-lg-4 col-sm-4 col-xs-4'>
                      <input type="radio" id="yes" name="fav_language" className='form-control' value="yes"
                        checked={type_of_doctor === 'yes'}
                        onChange={(e) => {
                          settype_of_doctor(e.target.value);
                        }}
                      // style={{marginLeft:'-20px'}}


                      />
                    </div>
                    <div className='col-lg-8 col-sm-8 col-xs-8'>

                      <label for="html" style={{ fontSize: '15px', marginLeft: '-20px' }}>Yes</label>
                    </div>

                    <div className='col-lg-4 col-sm-4 col-xs-4'>
                      <input type="radio" id="No" name="fav_language" className='form-control' value="No"
                        checked={type_of_doctor === 'No'}
                        onChange={(e) => {
                          settype_of_doctor(e.target.value);
                        }}
                      // style={{marginLeft:'-20px'}}


                      />
                    </div>
                    <div className='col-lg-8 col-sm-8 col-xs-8'>

                      <label for="html" style={{ fontSize: '15px', marginLeft: '-20px' }}>No</label>
                    </div>


                  </div>
                </div>


                {/* 
                    <div className='col-lg-4 col-sm-2 col-xs-2 d-flex justify-content-start'>


<input type="radio"  id="Yes – active duty" name="fav_language" className='form-control' value="Yes – active duty"
 checked={high_school_diploma_or_ged === 'Yes – active duty'}
  onChange={(e) => {
    sethigh_school_diploma_or_ged(e.target.value);
  }}


/>
<label for="html" style={{ fontSize: '15px', marginLeft: '5px' }}>Yes – active duty</label>

</div> */}

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


          {/* ------- */}
        </Modal.Body>

        <Modal.Footer style={{}}>
          <Button
            className="btn btn-primary"
            onClick={hback8}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Back
          </Button>

          {
            type_of_doctor !== null ?
              <Button
                className="btn btn-primary"
                onClick={hospitalized}
                style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
              >
                Next
              </Button> :
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
            onClick={handleCloseh8}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Close
          </Button>
          {/* <Button variant="primary" onClick={addcustomer}>
                        Add
                    </Button> */}
        </Modal.Footer>
      </Modal>

      {/* Have you ever been hospitalized for anything other than labor and delivery? */}

      <Modal
        show={hshow9}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handleCloseh9}
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
          <div className='col-lg-12 '>
            <div className="container">
              <div className='row'>
                <div className='col-lg-10'>
                  <h3 style={{ marginTop: '20px', marginBottom: '20px' }}>Have you ever been hospitalized for anything other than labor and delivery?</h3>

                </div>

                <div className='col-lg-2'>
                  <p style={{ marginTop: '30px', fontSize: '15px', color: '#d8352f' }} onClick={eating}>Skip ≫</p>
                </div>





                <div className='col-lg-12 col-sm-12 col-xs-12 d-flex justify-content-start' style={{ marginTop: '5px' }}>
                  <div className='row'>

                    <div className='col-lg-4 col-sm-4 col-xs-4'>
                      <input type="radio" id="yes" name="fav_language" className='form-control' value="yes"
                        checked={labor_and_delivery === 'yes'}
                        onChange={(e) => {
                          setlabor_and_delivery(e.target.value);
                        }}
                      // style={{marginLeft:'-20px'}}


                      />
                    </div>
                    <div className='col-lg-8 col-sm-8 col-xs-8'>

                      <label for="html" style={{ fontSize: '15px', marginLeft: '-20px' }}>Yes</label>
                    </div>

                    <div className='col-lg-4 col-sm-4 col-xs-4'>
                      <input type="radio" id="No" name="fav_language" className='form-control' value="No"
                        checked={labor_and_delivery === 'No'}
                        onChange={(e) => {
                          setlabor_and_delivery(e.target.value);
                        }}
                      // style={{marginLeft:'-20px'}}


                      />
                    </div>
                    <div className='col-lg-8 col-sm-8 col-xs-8'>

                      <label for="html" style={{ fontSize: '15px', marginLeft: '-20px' }}>No</label>
                    </div>


                  </div>
                </div>


                {/* 
                    <div className='col-lg-4 col-sm-2 col-xs-2 d-flex justify-content-start'>


<input type="radio"  id="Yes – active duty" name="fav_language" className='form-control' value="Yes – active duty"
 checked={high_school_diploma_or_ged === 'Yes – active duty'}
  onChange={(e) => {
    sethigh_school_diploma_or_ged(e.target.value);
  }}


/>
<label for="html" style={{ fontSize: '15px', marginLeft: '5px' }}>Yes – active duty</label>

</div> */}

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


          {/* ------- */}
        </Modal.Body>

        <Modal.Footer style={{}}>
          <Button
            className="btn btn-primary"
            onClick={hback9}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Back
          </Button>

          {
            labor_and_delivery !== null ?
              <Button
                className="btn btn-primary"
                onClick={eating}
                style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
              >
                Next
              </Button> :
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
            onClick={handleCloseh9}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Close
          </Button>
          {/* <Button variant="primary" onClick={addcustomer}>
                        Add
                    </Button> */}
        </Modal.Footer>
      </Modal>

      {/* Have you ever had an eating disorder? */}

      <Modal
        show={hshow10}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handleCloseh10}
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
          <div className='col-lg-12 '>
            <div className="container">
              <div className='row'>
                <div className='col-lg-10'>
                  <h3 style={{ marginTop: '20px', marginBottom: '20px' }}>Have you ever had an eating disorder?</h3>

                </div>

                <div className='col-lg-2'>
                  <p style={{ marginTop: '30px', fontSize: '15px', color: '#d8352f' }} onClick={psychologist}>Skip ≫</p>
                </div>





                <div className='col-lg-12 col-sm-12 col-xs-12 d-flex justify-content-start' style={{ marginTop: '5px' }}>
                  <div className='row'>

                    <div className='col-lg-4 col-sm-4 col-xs-4'>
                      <input type="radio" id="yes" name="fav_language" className='form-control' value="yes"
                        checked={eating_disorder === 'yes'}
                        onChange={(e) => {
                          seteating_disorder(e.target.value);
                        }}
                      // style={{marginLeft:'-20px'}}


                      />
                    </div>
                    <div className='col-lg-8 col-sm-8 col-xs-8'>

                      <label for="html" style={{ fontSize: '15px', marginLeft: '-20px' }}>Yes</label>
                    </div>

                    <div className='col-lg-4 col-sm-4 col-xs-4'>
                      <input type="radio" id="No" name="fav_language" className='form-control' value="No"
                        checked={eating_disorder === 'No'}
                        onChange={(e) => {
                          seteating_disorder(e.target.value);
                        }}
                      // style={{marginLeft:'-20px'}}


                      />
                    </div>
                    <div className='col-lg-8 col-sm-8 col-xs-8'>

                      <label for="html" style={{ fontSize: '15px', marginLeft: '-20px' }}>No</label>
                    </div>


                  </div>
                </div>


                {/* 
                    <div className='col-lg-4 col-sm-2 col-xs-2 d-flex justify-content-start'>


<input type="radio"  id="Yes – active duty" name="fav_language" className='form-control' value="Yes – active duty"
 checked={high_school_diploma_or_ged === 'Yes – active duty'}
  onChange={(e) => {
    sethigh_school_diploma_or_ged(e.target.value);
  }}


/>
<label for="html" style={{ fontSize: '15px', marginLeft: '5px' }}>Yes – active duty</label>

</div> */}

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


          {/* ------- */}
        </Modal.Body>

        <Modal.Footer style={{}}>
          <Button
            className="btn btn-primary"
            onClick={hback10}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Back
          </Button>

          {
            eating_disorder !== null ?
              <Button
                className="btn btn-primary"
                onClick={psychologist}
                style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
              >
                Next
              </Button> :
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
            onClick={handleCloseh10}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Close
          </Button>
          {/* <Button variant="primary" onClick={addcustomer}>
                        Add
                    </Button> */}
        </Modal.Footer>
      </Modal>


      {/* Have you ever had to see a psychiatrist, therapist, or psychologist? */}

      <Modal
        show={hshow11}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handleCloseh11}
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
          <div className='col-lg-12 '>
            <div className="container">
              <div className='row'>
                <div className='col-lg-10'>
                  <h3 style={{ marginTop: '20px', marginBottom: '20px' }}>Have you ever had to see a psychiatrist, therapist, or psychologist?</h3>

                </div>

                <div className='col-lg-2'>
                  <p style={{ marginTop: '30px', fontSize: '15px', color: '#d8352f' }} onClick={psychiatricreasons}>Skip ≫</p>
                </div>





                <div className='col-lg-12 col-sm-12 col-xs-12 d-flex justify-content-start' style={{ marginTop: '5px' }}>
                  <div className='row'>

                    <div className='col-lg-4 col-sm-4 col-xs-4'>
                      <input type="radio" id="yes" name="fav_language" className='form-control' value="yes"
                        checked={psychiatrist_therapist_or_psychologist === 'yes'}
                        onChange={(e) => {
                          setpsychiatrist_therapist_or_psychologist(e.target.value);
                        }}
                      // style={{marginLeft:'-20px'}}


                      />
                    </div>
                    <div className='col-lg-8 col-sm-8 col-xs-8'>

                      <label for="html" style={{ fontSize: '15px', marginLeft: '-20px' }}>Yes</label>
                    </div>

                    <div className='col-lg-4 col-sm-4 col-xs-4'>
                      <input type="radio" id="No" name="fav_language" className='form-control' value="No"
                        checked={psychiatrist_therapist_or_psychologist === 'No'}
                        onChange={(e) => {
                          setpsychiatrist_therapist_or_psychologist(e.target.value);
                        }}
                      // style={{marginLeft:'-20px'}}


                      />
                    </div>
                    <div className='col-lg-8 col-sm-8 col-xs-8'>

                      <label for="html" style={{ fontSize: '15px', marginLeft: '-20px' }}>No</label>
                    </div>


                  </div>
                </div>


                {/* 
                    <div className='col-lg-4 col-sm-2 col-xs-2 d-flex justify-content-start'>


<input type="radio"  id="Yes – active duty" name="fav_language" className='form-control' value="Yes – active duty"
 checked={high_school_diploma_or_ged === 'Yes – active duty'}
  onChange={(e) => {
    sethigh_school_diploma_or_ged(e.target.value);
  }}


/>
<label for="html" style={{ fontSize: '15px', marginLeft: '5px' }}>Yes – active duty</label>

</div> */}

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


          {/* ------- */}
        </Modal.Body>

        <Modal.Footer style={{}}>
          <Button
            className="btn btn-primary"
            onClick={hback11}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Back
          </Button>

          {
            psychiatrist_therapist_or_psychologist !== null ?
              <Button
                className="btn btn-primary"
                onClick={psychiatricreasons}
                style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
              >
                Next
              </Button> :
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
            onClick={handleCloseh11}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Close
          </Button>
          {/* <Button variant="primary" onClick={addcustomer}>
                        Add
                    </Button> */}
        </Modal.Footer>
      </Modal>

      {/* Have you ever been hospitalized for psychiatric reasons? */}

      <Modal
        show={hshow12}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handleCloseh12}
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
          <div className='col-lg-12 '>
            <div className="container">
              <div className='row'>
                <div className='col-lg-10'>
                  <h3 style={{ marginTop: '20px', marginBottom: '20px' }}>Have you ever been hospitalized for psychiatric reasons?</h3>

                </div>

                <div className='col-lg-2'>
                  <p style={{ marginTop: '30px', fontSize: '15px', color: '#d8352f' }} onClick={sexuallyabused}>Skip ≫</p>
                </div>





                <div className='col-lg-12 col-sm-12 col-xs-12 d-flex justify-content-start' style={{ marginTop: '5px' }}>
                  <div className='row'>

                    <div className='col-lg-4 col-sm-4 col-xs-4'>
                      <input type="radio" id="yes" name="fav_language" className='form-control' value="yes"
                        checked={psychiatric_reasons === 'yes'}
                        onChange={(e) => {
                          setpsychiatric_reasons(e.target.value);
                        }}
                      // style={{marginLeft:'-20px'}}


                      />
                    </div>
                    <div className='col-lg-8 col-sm-8 col-xs-8'>

                      <label for="html" style={{ fontSize: '15px', marginLeft: '-20px' }}>Yes</label>
                    </div>

                    <div className='col-lg-4 col-sm-4 col-xs-4'>
                      <input type="radio" id="No" name="fav_language" className='form-control' value="No"
                        checked={psychiatric_reasons === 'No'}
                        onChange={(e) => {
                          setpsychiatric_reasons(e.target.value);
                        }}
                      // style={{marginLeft:'-20px'}}


                      />
                    </div>
                    <div className='col-lg-8 col-sm-8 col-xs-8'>

                      <label for="html" style={{ fontSize: '15px', marginLeft: '-20px' }}>No</label>
                    </div>


                  </div>
                </div>


                {/* 
                    <div className='col-lg-4 col-sm-2 col-xs-2 d-flex justify-content-start'>


<input type="radio"  id="Yes – active duty" name="fav_language" className='form-control' value="Yes – active duty"
 checked={high_school_diploma_or_ged === 'Yes – active duty'}
  onChange={(e) => {
    sethigh_school_diploma_or_ged(e.target.value);
  }}


/>
<label for="html" style={{ fontSize: '15px', marginLeft: '5px' }}>Yes – active duty</label>

</div> */}

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


          {/* ------- */}
        </Modal.Body>

        <Modal.Footer style={{}}>
          <Button
            className="btn btn-primary"
            onClick={hback12}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Back
          </Button>

          {
            psychiatric_reasons !== null ?
              <Button
                className="btn btn-primary"
                onClick={sexuallyabused}
                style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
              >
                Next
              </Button> :
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
            onClick={handleCloseh12}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Close
          </Button>
          {/* <Button variant="primary" onClick={addcustomer}>
                        Add
                    </Button> */}
        </Modal.Footer>
      </Modal>

      {/* Have you ever been physically, emotionally, or sexually abused? */}

      <Modal
        show={hshow13}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handleCloseh13}
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
          <div className='col-lg-12 '>
            <div className="container">
              <div className='row'>
                <div className='col-lg-10'>
                  <h3 style={{ marginTop: '20px', marginBottom: '20px' }}>Have you ever been physically, emotionally, or sexually abused?</h3>

                </div>

                <div className='col-lg-2'>
                  <p style={{ marginTop: '30px', fontSize: '15px', color: '#d8352f' }} onClick={inflammatory}>Skip ≫</p>
                </div>





                <div className='col-lg-12 col-sm-12 col-xs-12 d-flex justify-content-start' style={{ marginTop: '5px' }}>
                  <div className='row'>

                    <div className='col-lg-4 col-sm-4 col-xs-4'>
                      <input type="radio" id="yes" name="fav_language" className='form-control' value="yes"
                        checked={physically_emotionally_or_sexually_abused === 'yes'}
                        onChange={(e) => {
                          setphysically_emotionally_or_sexually_abused(e.target.value);
                        }}
                      // style={{marginLeft:'-20px'}}


                      />
                    </div>
                    <div className='col-lg-8 col-sm-8 col-xs-8'>

                      <label for="html" style={{ fontSize: '15px', marginLeft: '-20px' }}>Yes</label>
                    </div>

                    <div className='col-lg-4 col-sm-4 col-xs-4'>
                      <input type="radio" id="No" name="fav_language" className='form-control' value="No"
                        checked={physically_emotionally_or_sexually_abused === 'No'}
                        onChange={(e) => {
                          setphysically_emotionally_or_sexually_abused(e.target.value);
                        }}
                      // style={{marginLeft:'-20px'}}


                      />
                    </div>
                    <div className='col-lg-8 col-sm-8 col-xs-8'>

                      <label for="html" style={{ fontSize: '15px', marginLeft: '-20px' }}>No</label>
                    </div>


                  </div>
                </div>


                {/* 
                    <div className='col-lg-4 col-sm-2 col-xs-2 d-flex justify-content-start'>


<input type="radio"  id="Yes – active duty" name="fav_language" className='form-control' value="Yes – active duty"
 checked={high_school_diploma_or_ged === 'Yes – active duty'}
  onChange={(e) => {
    sethigh_school_diploma_or_ged(e.target.value);
  }}


/>
<label for="html" style={{ fontSize: '15px', marginLeft: '5px' }}>Yes – active duty</label>

</div> */}

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


          {/* ------- */}
        </Modal.Body>

        <Modal.Footer style={{}}>
          <Button
            className="btn btn-primary"
            onClick={hback13}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Back
          </Button>

          {
            physically_emotionally_or_sexually_abused !== null ?
              <Button
                className="btn btn-primary"
                onClick={inflammatory}
                style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
              >
                Next
              </Button> :
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
            onClick={handleCloseh13}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Close
          </Button>
          {/* <Button variant="primary" onClick={addcustomer}>
                        Add
                    </Button> */}
        </Modal.Footer>
      </Modal>

      {/* In the last 12 months, have you been diagnosed with chlamydia, gonorrhea, or pelvic inflammatory disease? */}

      <Modal
        show={hshow14}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handleCloseh14}
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
          <div className='col-lg-12 '>
            <div className="container">
              <div className='row'>
                <div className='col-lg-10'>
                  <h3 style={{ marginTop: '20px', marginBottom: '20px' }}>In the last 12 months, have you been diagnosed with chlamydia, gonorrhea, or pelvic inflammatory disease?</h3>

                </div>

                <div className='col-lg-2'>
                  <p style={{ marginTop: '30px', fontSize: '15px', color: '#d8352f' }} onClick={aids}>Skip ≫</p>
                </div>





                <div className='col-lg-12 col-sm-12 col-xs-12 d-flex justify-content-start' style={{ marginTop: '5px' }}>
                  <div className='row'>

                    <div className='col-lg-4 col-sm-4 col-xs-4'>
                      <input type="radio" id="yes" name="fav_language" className='form-control' value="yes"
                        checked={chlamydia_gonorrhea_pelvic_inflammatory_disease === 'yes'}
                        onChange={(e) => {
                          setchlamydia_gonorrhea_pelvic_inflammatory_disease(e.target.value);
                        }}
                      // style={{marginLeft:'-20px'}}


                      />
                    </div>
                    <div className='col-lg-8 col-sm-8 col-xs-8'>

                      <label for="html" style={{ fontSize: '15px', marginLeft: '-20px' }}>Yes</label>
                    </div>

                    <div className='col-lg-4 col-sm-4 col-xs-4'>
                      <input type="radio" id="No" name="fav_language" className='form-control' value="No"
                        checked={chlamydia_gonorrhea_pelvic_inflammatory_disease === 'No'}
                        onChange={(e) => {
                          setchlamydia_gonorrhea_pelvic_inflammatory_disease(e.target.value);
                        }}
                      // style={{marginLeft:'-20px'}}


                      />
                    </div>
                    <div className='col-lg-8 col-sm-8 col-xs-8'>

                      <label for="html" style={{ fontSize: '15px', marginLeft: '-20px' }}>No</label>
                    </div>


                  </div>
                </div>


                {/* 
                    <div className='col-lg-4 col-sm-2 col-xs-2 d-flex justify-content-start'>


<input type="radio"  id="Yes – active duty" name="fav_language" className='form-control' value="Yes – active duty"
 checked={high_school_diploma_or_ged === 'Yes – active duty'}
  onChange={(e) => {
    sethigh_school_diploma_or_ged(e.target.value);
  }}


/>
<label for="html" style={{ fontSize: '15px', marginLeft: '5px' }}>Yes – active duty</label>

</div> */}

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


          {/* ------- */}
        </Modal.Body>

        <Modal.Footer style={{}}>
          <Button
            className="btn btn-primary"
            onClick={hback14}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Back
          </Button>

          {
            chlamydia_gonorrhea_pelvic_inflammatory_disease !== null ?
              <Button
                className="btn btn-primary"
                onClick={aids}
                style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
              >
                Next
              </Button> :
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
            onClick={handleCloseh14}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Close
          </Button>
          {/* <Button variant="primary" onClick={addcustomer}>
                        Add
                    </Button> */}
        </Modal.Footer>
      </Modal>


      {/* Have you, any of your sexual partners, or anyone in your household EVER been diagnosed with HIV or AIDS?*/}

      <Modal
        show={hshow15}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handleCloseh15}
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
          <div className='col-lg-12 '>
            <div className="container">
              <div className='row'>
                <div className='col-lg-10'>
                  <h3 style={{ marginTop: '20px', marginBottom: '20px' }}>Have you, any of your sexual partners, or anyone in your household EVER been diagnosed with HIV or AIDS?</h3>

                </div>

                <div className='col-lg-2'>
                  <p style={{ marginTop: '30px', fontSize: '15px', color: '#d8352f' }} onClick={Hepatitis}>Skip ≫</p>
                </div>





                <div className='col-lg-12 col-sm-12 col-xs-12 d-flex justify-content-start' style={{ marginTop: '5px' }}>
                  <div className='row'>

                    <div className='col-lg-4 col-sm-4 col-xs-4'>
                      <input type="radio" id="yes" name="fav_language" className='form-control' value="yes"
                        checked={hiv_or_aids === 'yes'}
                        onChange={(e) => {
                          sethiv_or_aids(e.target.value);
                        }}
                      // style={{marginLeft:'-20px'}}


                      />
                    </div>
                    <div className='col-lg-8 col-sm-8 col-xs-8'>

                      <label for="html" style={{ fontSize: '15px', marginLeft: '-20px' }}>Yes</label>
                    </div>

                    <div className='col-lg-4 col-sm-4 col-xs-4'>
                      <input type="radio" id="No" name="fav_language" className='form-control' value="No"
                        checked={hiv_or_aids === 'No'}
                        onChange={(e) => {
                          sethiv_or_aids(e.target.value);
                        }}
                      // style={{marginLeft:'-20px'}}


                      />
                    </div>
                    <div className='col-lg-8 col-sm-8 col-xs-8'>

                      <label for="html" style={{ fontSize: '15px', marginLeft: '-20px' }}>No</label>
                    </div>


                  </div>
                </div>


                {/* 
                    <div className='col-lg-4 col-sm-2 col-xs-2 d-flex justify-content-start'>


<input type="radio"  id="Yes – active duty" name="fav_language" className='form-control' value="Yes – active duty"
 checked={high_school_diploma_or_ged === 'Yes – active duty'}
  onChange={(e) => {
    sethigh_school_diploma_or_ged(e.target.value);
  }}


/>
<label for="html" style={{ fontSize: '15px', marginLeft: '5px' }}>Yes – active duty</label>

</div> */}

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


          {/* ------- */}
        </Modal.Body>

        <Modal.Footer style={{}}>
          <Button
            className="btn btn-primary"
            onClick={hback15}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Back
          </Button>

          {
            hiv_or_aids !== null ?
              <Button
                className="btn btn-primary"
                onClick={Hepatitis}
                style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
              >
                Next
              </Button> :
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
            onClick={handleCloseh15}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Close
          </Button>
          {/* <Button variant="primary" onClick={addcustomer}>
                        Add
                    </Button> */}
        </Modal.Footer>
      </Modal>


      {/*Have you been immunized against Hepatitis B?*/}

      <Modal
        show={hshow16}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handleCloseh16}
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
          <div className='col-lg-12 '>
            <div className="container">
              <div className='row'>
                <div className='col-lg-10'>
                  <h3 style={{ marginTop: '20px', marginBottom: '20px' }}>Have you been immunized against Hepatitis B?</h3>

                </div>

                <div className='col-lg-2'>
                  <p style={{ marginTop: '30px', fontSize: '15px', color: '#d8352f' }} onClick={Hepatitisc}>Skip ≫</p>
                </div>





                <div className='col-lg-12 col-sm-12 col-xs-12 d-flex justify-content-start' style={{ marginTop: '5px' }}>
                  <div className='row'>

                    <div className='col-lg-4 col-sm-4 col-xs-4'>
                      <input type="radio" id="yes" name="hepatitis_b" className='form-control' value="yes"
                        checked={hepatitis_b === 'yes'}
                        onChange={(e) => {
                          sethepatitis_b(e.target.value);
                        }}
                        style={{ marginLeft: '-93px' }}


                      />
                    </div>
                    <div className='col-lg-8 col-sm-8 col-xs-8'>

                      <label for="html" style={{ fontSize: '15px', marginLeft: '-210px' }}>Yes</label>
                    </div>

                    <div className='col-lg-4 col-sm-4 col-xs-4'>
                      <input type="radio" id="No" name="hepatitis_b" className='form-control' value="No"
                        checked={hepatitis_b === 'No'}
                        onChange={(e) => {
                          sethepatitis_b(e.target.value);
                        }}
                        style={{ marginLeft: '-93px' }}


                      />
                    </div>
                    <div className='col-lg-8 col-sm-8 col-xs-8'>

                      <label for="html" style={{ fontSize: '15px', marginLeft: '-210px' }}>No</label>
                    </div>


                    <div className='col-lg-4 col-sm-4 col-xs-4'>
                      <input type="radio" id="Not sure" name="hepatitis_b" className='form-control' value="Not sure"
                        checked={hepatitis_b === 'Not sure'}
                        onChange={(e) => {
                          sethepatitis_b(e.target.value);
                        }}
                        style={{ marginLeft: '-93px' }}



                      />
                    </div>
                    <div className='col-lg-8 col-sm-8 col-xs-8'>

                      <label for="html" style={{ fontSize: '15px', marginLeft: '-210px' }}>Not sure</label>
                    </div>
                    <div className='col-lg-12' style={{ marginTop: '20px', marginLeft: '5px', marginBottom: '10px' }}>
                      <label>Could you provide proof of your Hepatitis B immunity if requested by the IVF clinic? </label>
                    </div>
                    <div className='col-lg-4 col-sm-4 col-xs-4'>
                      <input type="radio" id="Yes" name="hepatitis_b_ivf_clinic" className='form-control' value="Yes"
                        checked={hepatitis_b_ivf_clinic === 'Yes'}
                        onChange={(e) => {
                          sethepatitis_b_ivf_clinic(e.target.value);
                        }}
                        style={{ marginLeft: '-93px' }}


                      />
                    </div>
                    <div className='col-lg-8 col-sm-8 col-xs-8'>

                      <label for="html" style={{ fontSize: '15px', marginLeft: '-210px' }}>Yes</label>
                    </div>

                    <div className='col-lg-4 col-sm-4 col-xs-4'>
                      <input type="radio" id="No" name="hepatitis_b_ivf_clinic" className='form-control' value="No"
                        checked={hepatitis_b_ivf_clinic === 'No'}
                        onChange={(e) => {
                          sethepatitis_b_ivf_clinic(e.target.value);
                        }}
                        style={{ marginLeft: '-93px' }}


                      />
                    </div>
                    <div className='col-lg-8 col-sm-8 col-xs-8'>

                      <label for="html" style={{ fontSize: '15px', marginLeft: '-208px' }}>No</label>
                    </div>



                  </div>
                </div>


                {/* 
                    <div className='col-lg-4 col-sm-2 col-xs-2 d-flex justify-content-start'>


<input type="radio"  id="Yes – active duty" name="fav_language" className='form-control' value="Yes – active duty"
 checked={high_school_diploma_or_ged === 'Yes – active duty'}
  onChange={(e) => {
    sethigh_school_diploma_or_ged(e.target.value);
  }}


/>
<label for="html" style={{ fontSize: '15px', marginLeft: '5px' }}>Yes – active duty</label>

</div> */}

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


          {/* ------- */}
        </Modal.Body>

        <Modal.Footer style={{}}>
          <Button
            className="btn btn-primary"
            onClick={hback16}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Back
          </Button>

          {
            hepatitis_b !== null && hepatitis_b_ivf_clinic !== null ?
              <Button
                className="btn btn-primary"
                onClick={Hepatitisc}
                style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
              >
                Next
              </Button> :
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
            onClick={handleCloseh16}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Close
          </Button>
          {/* <Button variant="primary" onClick={addcustomer}>
                        Add
                    </Button> */}
        </Modal.Footer>
      </Modal>

      {/* Have you or any of your sexual partners ever been diagnosed with Hepatitis A, Hepatitis B, or Hepatitis C?*/}

      <Modal
        show={hshow17}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handleCloseh17}
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
          <div className='col-lg-12 '>
            <div className="container">
              <div className='row'>
                <div className='col-lg-10'>
                  <h3 style={{ marginTop: '20px', marginBottom: '20px' }}>Have you or any of your sexual partners ever been diagnosed with Hepatitis A, Hepatitis B, or Hepatitis C?</h3>

                </div>

                <div className='col-lg-2'>
                  <p style={{ marginTop: '30px', fontSize: '15px', color: '#d8352f' }} onClick={vaccination}>Skip ≫</p>
                </div>





                <div className='col-lg-12 col-sm-12 col-xs-12 d-flex justify-content-start' style={{ marginTop: '5px' }}>
                  <div className='row'>

                    <div className='col-lg-4 col-sm-4 col-xs-4'>
                      <input type="radio" id="yes" name="fav_language" className='form-control' value="yes"
                        checked={hepatitis_a_hepatitis_b_or_hepatitis_c === 'yes'}
                        onChange={(e) => {
                          sethepatitis_a_hepatitis_b_or_hepatitis_c(e.target.value);
                        }}
                      // style={{marginLeft:'-20px'}}


                      />
                    </div>
                    <div className='col-lg-8 col-sm-8 col-xs-8'>

                      <label for="html" style={{ fontSize: '15px', marginLeft: '-20px' }}>Yes</label>
                    </div>

                    <div className='col-lg-4 col-sm-4 col-xs-4'>
                      <input type="radio" id="No" name="fav_language" className='form-control' value="No"
                        checked={hepatitis_a_hepatitis_b_or_hepatitis_c === 'No'}
                        onChange={(e) => {
                          sethepatitis_a_hepatitis_b_or_hepatitis_c(e.target.value);
                        }}
                      // style={{marginLeft:'-20px'}}


                      />
                    </div>
                    <div className='col-lg-8 col-sm-8 col-xs-8'>

                      <label for="html" style={{ fontSize: '15px', marginLeft: '-20px' }}>No</label>
                    </div>


                  </div>
                </div>


                {/* 
                    <div className='col-lg-4 col-sm-2 col-xs-2 d-flex justify-content-start'>


<input type="radio"  id="Yes – active duty" name="fav_language" className='form-control' value="Yes – active duty"
 checked={high_school_diploma_or_ged === 'Yes – active duty'}
  onChange={(e) => {
    sethigh_school_diploma_or_ged(e.target.value);
  }}


/>
<label for="html" style={{ fontSize: '15px', marginLeft: '5px' }}>Yes – active duty</label>

</div> */}

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


          {/* ------- */}
        </Modal.Body>

        <Modal.Footer style={{}}>
          <Button
            className="btn btn-primary"
            onClick={hback17}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Back
          </Button>

          {
            hepatitis_a_hepatitis_b_or_hepatitis_c !== null ?
              <Button
                className="btn btn-primary"
                onClick={vaccination}
                style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
              >
                Next
              </Button> :
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
            onClick={handleCloseh17}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Close
          </Button>
          {/* <Button variant="primary" onClick={addcustomer}>
                        Add
                    </Button> */}
        </Modal.Footer>
      </Modal>
      {/* Have you received the COVID-19 vaccination?*/}

      <Modal
        show={hshow18}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handleCloseh18}
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
          <div className='col-lg-12 '>
            <div className="container">
              <div className='row'>
                <div className='col-lg-10'>
                  <h3 style={{ marginTop: '20px', marginBottom: '20px' }}>Have you received the COVID-19 vaccination?</h3>

                </div>

                <div className='col-lg-2'>
                  <p style={{ marginTop: '30px', fontSize: '15px', color: '#d8352f' }} onClick={cycles}>Skip ≫</p>
                </div>





                <div className='col-lg-12 col-sm-12 col-xs-12 d-flex justify-content-start' style={{ marginTop: '5px' }}>
                  <div className='row'>

                    <div className='col-lg-4 col-sm-4 col-xs-4'>
                      <input type="radio" id="yes" name="fav_language" className='form-control' value="yes"
                        checked={covid_19_vaccination === 'yes'}
                        onChange={(e) => {
                          setcovid_19_vaccination(e.target.value);
                        }}
                      // style={{marginLeft:'-20px'}}


                      />
                    </div>
                    <div className='col-lg-8 col-sm-8 col-xs-8'>

                      <label for="html" style={{ fontSize: '15px', marginLeft: '-20px' }}>Yes</label>
                    </div>

                    <div className='col-lg-4 col-sm-4 col-xs-4'>
                      <input type="radio" id="No" name="fav_language" className='form-control' value="No"
                        checked={covid_19_vaccination === 'No'}
                        onChange={(e) => {
                          setcovid_19_vaccination(e.target.value);
                        }}
                      // style={{marginLeft:'-20px'}}


                      />
                    </div>
                    <div className='col-lg-8 col-sm-8 col-xs-8'>

                      <label for="html" style={{ fontSize: '15px', marginLeft: '-20px' }}>No</label>
                    </div>


                  </div>
                </div>


                {/* 
                    <div className='col-lg-4 col-sm-2 col-xs-2 d-flex justify-content-start'>


<input type="radio"  id="Yes – active duty" name="fav_language" className='form-control' value="Yes – active duty"
 checked={high_school_diploma_or_ged === 'Yes – active duty'}
  onChange={(e) => {
    sethigh_school_diploma_or_ged(e.target.value);
  }}


/>
<label for="html" style={{ fontSize: '15px', marginLeft: '5px' }}>Yes – active duty</label>

</div> */}

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


          {/* ------- */}
        </Modal.Body>

        <Modal.Footer style={{}}>
          <Button
            className="btn btn-primary"
            onClick={hback18}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Back
          </Button>

          {
            covid_19_vaccination !== null ?
              <Button
                className="btn btn-primary"
                onClick={cycles}
                style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
              >
                Next
              </Button> :
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
            onClick={handleCloseh18}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Close
          </Button>
          {/* <Button variant="primary" onClick={addcustomer}>
                        Add
                    </Button> */}
        </Modal.Footer>
      </Modal>

      {/* Are you currently having regular menstrual cycles?*/}

      <Modal
        show={hshow19}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handleCloseh19}
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
          <div className='col-lg-12 '>
            <div className="container">
              <div className='row'>
                <div className='col-lg-10'>
                  <h3 style={{ marginTop: '20px', marginBottom: '20px' }}>Are you currently having regular menstrual cycles?</h3>

                </div>

                <div className='col-lg-2'>
                  <p style={{ marginTop: '30px', fontSize: '15px', color: '#d8352f' }} onClick={beverages}>Skip ≫</p>
                </div>





                <div className='col-lg-12 col-sm-12 col-xs-12 d-flex justify-content-start' style={{ marginTop: '5px' }}>
                  <div className='row'>

                    <div className='col-lg-4 col-sm-4 col-xs-4'>
                      <input type="radio" id="yes" name="fav_language" className='form-control' value="yes"
                        checked={menstrual_cycles === 'yes'}
                        onChange={(e) => {
                          setmenstrual_cycles(e.target.value);
                        }}
                      // style={{marginLeft:'-20px'}}


                      />
                    </div>
                    <div className='col-lg-8 col-sm-8 col-xs-8'>

                      <label for="html" style={{ fontSize: '15px', marginLeft: '-20px' }}>Yes</label>
                    </div>

                    <div className='col-lg-4 col-sm-4 col-xs-4'>
                      <input type="radio" id="No" name="fav_language" className='form-control' value="No"
                        checked={menstrual_cycles === 'No'}
                        onChange={(e) => {
                          setmenstrual_cycles(e.target.value);
                        }}
                      // style={{marginLeft:'-20px'}}


                      />
                    </div>
                    <div className='col-lg-8 col-sm-8 col-xs-8'>

                      <label for="html" style={{ fontSize: '15px', marginLeft: '-20px' }}>No</label>
                    </div>


                  </div>
                </div>


                {/* 
                    <div className='col-lg-4 col-sm-2 col-xs-2 d-flex justify-content-start'>


<input type="radio"  id="Yes – active duty" name="fav_language" className='form-control' value="Yes – active duty"
 checked={high_school_diploma_or_ged === 'Yes – active duty'}
  onChange={(e) => {
    sethigh_school_diploma_or_ged(e.target.value);
  }}


/>
<label for="html" style={{ fontSize: '15px', marginLeft: '5px' }}>Yes – active duty</label>

</div> */}

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


          {/* ------- */}
        </Modal.Body>

        <Modal.Footer style={{}}>
          <Button
            className="btn btn-primary"
            onClick={hback19}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Back
          </Button>

          {
            menstrual_cycles !== null ?
              <Button
                className="btn btn-primary"
                onClick={beverages}
                style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
              >
                Next
              </Button> :
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
            onClick={handleCloseh19}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Close
          </Button>
          {/* <Button variant="primary" onClick={addcustomer}>
                        Add
                    </Button> */}
        </Modal.Footer>
      </Modal>


      {/* When you’re not pregnant, how often do you typically have alcoholic beverages?*/}

      <Modal
        show={hshow20}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handleCloseh19}
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
          <div className='col-lg-12 '>
            <div className="container">
              <div className='row'>
                <div className='col-lg-10'>
                  <h3 style={{ marginTop: '20px', marginBottom: '20px' }}>When you’re not pregnant, how often do you typically have alcoholic beverages?</h3>

                </div>

                <div className='col-lg-2'>
                  <p style={{ marginTop: '30px', fontSize: '15px', color: '#d8352f' }} onClick={welcomep2}>Skip ≫</p>
                </div>





                <div className='col-lg-8 col-sm-12 col-xs-12 d-flex justify-content-start' style={{ marginTop: '5px' }}>




                  <input type="text" className='form-control' style={{ height: '36px' }}

                    onChange={(e) => {
                      setnot_pregnant_alcoholic_beverages(e.target.value);
                    }}
                    value={not_pregnant_alcoholic_beverages}

                  />







                </div>


                {/* 
                    <div className='col-lg-4 col-sm-2 col-xs-2 d-flex justify-content-start'>


<input type="radio"  id="Yes – active duty" name="fav_language" className='form-control' value="Yes – active duty"
 checked={high_school_diploma_or_ged === 'Yes – active duty'}
  onChange={(e) => {
    sethigh_school_diploma_or_ged(e.target.value);
  }}


/>
<label for="html" style={{ fontSize: '15px', marginLeft: '5px' }}>Yes – active duty</label>

</div> */}

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


          {/* ------- */}
        </Modal.Body>

        <Modal.Footer style={{}}>
          <Button
            className="btn btn-primary"
            onClick={hback20}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Back
          </Button>

          {
            not_pregnant_alcoholic_beverages !== null ?
              <Button
                className="btn btn-primary"
                onClick={onSubmithealthinformation}
                style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
              >
                Next
              </Button> :
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
            onClick={handleCloseh20}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Close
          </Button>
          {/* <Button variant="primary" onClick={addcustomer}>
                        Add
                    </Button> */}
        </Modal.Footer>
      </Modal>

      {/*Welcome to Part 2*/}


      <Modal
        show={hshow21}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handleCloseh21}
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

                  <h3 style={{ marginTop: '20px', marginBottom: '20px', }}>Welcome to Part 2</h3>
                </div>
                <p style={{
                  MARGINTOP: '10PX',
                  fontWeight: '100',
                  color: '#333352',
                }}>


                  <p style={{ padding: '5px', marginTop: '10px' }}>  ✔️ This part will ask yes/no questions about any past diagnoses you’ve had</p>
                  <p style={{ padding: '5px' }}>  ✔️ Please be as specific as possible in your explanations</p>
                  {/* <p style={{ padding: '5px' }}>  ✔️ It should take you around 15-20 minutes to finish this section</p> */}




                </p>





              </div>
            </div>
          </div>

          {/* ------- */}
        </Modal.Body>

        <Modal.Footer style={{}}>
          <Button variant="primary" onClick={hback21}>
            Back
          </Button>
          <Button
            className="btn btn-primary"
            onClick={diagnosed}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Next
          </Button>


          <Button
            className="btn btn-primary"
            onClick={handleCloseh21}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/*Have you ever been diagnosed with any of the following?*/}

      <Modal
        show={hshow22}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handleCloseh22}
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
          <div className='col-lg-12 '>
            <div className="container">
              <div className='row'>
                <div className='container'>
                  <div className='col-lg-12'>
                    <h3 style={{ marginTop: '20px', marginBottom: '20px' }}>Have you ever been diagnosed with any of the following?</h3>
                    <p style={{ fontWeight: 'BOLD' }}>ADD or ADHD</p>

                  </div>

                  {/* <div className='col-lg-2'>
                  <p style={{ marginTop: '30px', fontSize: '15px', color: '#d8352f' }} onClick={Hepatitisc}>Skip ≫</p>
                </div> */}





                  <div className='col-lg-12 col-sm-12 col-xs-12 d-flex justify-content-start' style={{ marginTop: '5px' }}>
                    <div className='row'>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="yes" name="add_or_adhd" className='form-control' value="yes"
                          checked={add_or_adhd === 'yes'}
                          onChange={(e) => {
                            setadd_or_adhd(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>Yes</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="No" name="add_or_adhd" className='form-control' value="No"
                          checked={add_or_adhd === 'No'}
                          onChange={(e) => {
                            setadd_or_adhd(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>No</label>
                      </div>



                      <div className='col-lg-12' style={{ marginTop: '20px', marginLeft: '5px', marginBottom: '10px' }}>
                        <label>Anemia </label>
                      </div>
                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="Yes" name="anemia" className='form-control' value="Yes"
                          checked={anemia === 'Yes'}
                          onChange={(e) => {
                            setanemia(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>Yes</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="No" name="anemia" className='form-control' value="No"
                          checked={anemia === 'No'}
                          onChange={(e) => {
                            setanemia(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>No</label>
                      </div>
                      <div className='col-lg-12' style={{ marginTop: '20px', marginLeft: '5px', marginBottom: '10px' }}>
                        <label>Anxiety </label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="Yes" name="anxiety" className='form-control' value="Yes"
                          checked={anxiety === 'Yes'}
                          onChange={(e) => {
                            setanxiety(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>Yes</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="No" name="anxiety" className='form-control' value="No"
                          checked={anxiety === 'No'}
                          onChange={(e) => {
                            setanxiety(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>No</label>
                      </div>

                      <div className='col-lg-12' style={{ marginTop: '20px', marginLeft: '5px', marginBottom: '10px' }}>
                        <label>Arthritis </label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="Yes" name="arthritis" className='form-control' value="Yes"
                          checked={arthritis === 'Yes'}
                          onChange={(e) => {
                            setarthritis(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>Yes</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="No" name="arthritis" className='form-control' value="No"
                          checked={arthritis === 'No'}
                          onChange={(e) => {
                            setarthritis(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>No</label>
                      </div>

                      <div className='col-lg-12' style={{ marginTop: '20px', marginLeft: '5px', marginBottom: '10px' }}>
                        <label>Asthma </label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="Yes" name="asthma" className='form-control' value="Yes"
                          checked={asthma === 'Yes'}
                          onChange={(e) => {
                            setasthma(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>Yes</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="No" name="asthma" className='form-control' value="No"
                          checked={asthma === 'No'}
                          onChange={(e) => {
                            setasthma(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>No</label>
                      </div>

                      <div className='col-lg-12' style={{ marginTop: '20px', marginLeft: '5px', marginBottom: '10px' }}>
                        <label>Bipolar disorder</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="Yes" name="bipolar_disorder" className='form-control' value="Yes"
                          checked={bipolar_disorder === 'Yes'}
                          onChange={(e) => {
                            setbipolar_disorder(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>Yes</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="No" name="bipolar_disorder" className='form-control' value="No"
                          checked={bipolar_disorder === 'No'}
                          onChange={(e) => {
                            setbipolar_disorder(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>No</label>
                      </div>

                      <div className='col-lg-12' style={{ marginTop: '20px', marginLeft: '5px', marginBottom: '10px' }}>
                        <label>Birth deformities</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="Yes" name="birth_deformities" className='form-control' value="Yes"
                          checked={birth_deformities === 'Yes'}
                          onChange={(e) => {
                            setbirth_deformities(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>Yes</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="No" name="birth_deformities" className='form-control' value="No"
                          checked={birth_deformities === 'No'}
                          onChange={(e) => {
                            setbirth_deformities(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>No</label>
                      </div>

                      <div className='col-lg-12' style={{ marginTop: '20px', marginLeft: '5px', marginBottom: '10px' }}>
                        <label>Cancer</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="Yes" name="fav_language" className='form-control' value="Yes"
                          checked={cancer === 'Yes'}
                          onChange={(e) => {
                            setcancer(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>Yes</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="No" name="cancer" className='form-control' value="No"
                          checked={cancer === 'No'}
                          onChange={(e) => {
                            setcancer(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>No</label>
                      </div>

                      <div className='col-lg-12' style={{ marginTop: '20px', marginLeft: '5px', marginBottom: '10px' }}>
                        <label>Cerebral palsy</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="Yes" name="fav_language" className='form-control' value="Yes"
                          checked={cerebral_palsy === 'Yes'}
                          onChange={(e) => {
                            setcerebral_palsy(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>Yes</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="No" name="cerebral_palsy" className='form-control' value="No"
                          checked={cerebral_palsy === 'No'}
                          onChange={(e) => {
                            setcerebral_palsy(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>No</label>
                      </div>

                      <div className='col-lg-12' style={{ marginTop: '20px', marginLeft: '5px', marginBottom: '10px' }}>
                        <label>Chronic bronchitis</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="Yes" name="chronic_bronchitis" className='form-control' value="Yes"
                          checked={chronic_bronchitis === 'Yes'}
                          onChange={(e) => {
                            setchronic_bronchitis(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>Yes</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="No" name="chronic_bronchitis" className='form-control' value="No"
                          checked={chronic_bronchitis === 'No'}
                          onChange={(e) => {
                            setchronic_bronchitis(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>No</label>
                      </div>

                      <div className='col-lg-12' style={{ marginTop: '20px', marginLeft: '5px', marginBottom: '10px' }}>
                        <label>Cystic fibrosis</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="Yes" name="cystic_fibrosis" className='form-control' value="Yes"
                          checked={cystic_fibrosis === 'Yes'}
                          onChange={(e) => {
                            setcystic_fibrosis(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>Yes</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="No" name="cystic_fibrosis" className='form-control' value="No"
                          checked={current_employment_status === 'No'}
                          onChange={(e) => {
                            setcystic_fibrosis(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>No</label>
                      </div>

                      <div className='col-lg-12' style={{ marginTop: '20px', marginLeft: '5px', marginBottom: '10px' }}>
                        <label>Deafness/ hard of hearing</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="Yes" name="deafness_hard_of_hearing" className='form-control' value="Yes"
                          checked={deafness_hard_of_hearing === 'Yes'}
                          onChange={(e) => {
                            setdeafness_hard_of_hearing(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>Yes</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="No" name="fav_language" className='form-control' value="No"
                          checked={deafness_hard_of_hearing === 'No'}
                          onChange={(e) => {
                            setdeafness_hard_of_hearing(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>No</label>
                      </div>

                      <div className='col-lg-12' style={{ marginTop: '20px', marginLeft: '5px', marginBottom: '10px' }}>
                        <label>Depression</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="Yes" name="depression" className='form-control' value="Yes"
                          checked={depression === 'Yes'}
                          onChange={(e) => {
                            setdepression(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>Yes</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="No" name="depression" className='form-control' value="No"
                          checked={depression === 'No'}
                          onChange={(e) => {
                            setdepression(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>No</label>
                      </div>

                      <div className='col-lg-12' style={{ marginTop: '20px', marginLeft: '5px', marginBottom: '10px' }}>
                        <label>Diabetes (NOT gestational diabetes)</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="Yes" name="diabetes" className='form-control' value="Yes"
                          checked={diabetes === 'Yes'}
                          onChange={(e) => {
                            setdiabetes(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>Yes</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="No" name="diabetes" className='form-control' value="No"
                          checked={diabetes === 'No'}
                          onChange={(e) => {
                            setdiabetes(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>No</label>
                      </div>

                      <div className='col-lg-12' style={{ marginTop: '20px', marginLeft: '5px', marginBottom: '10px' }}>
                        <label>Eating disorder</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="Yes" name="fav_language" className='form-control' value="Yes"
                          checked={current_employment_status === 'Yes'}
                          onChange={(e) => {
                            setcurrent_employment_status(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>Yes</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="No" name="fav_language" className='form-control' value="No"
                          checked={current_employment_status === 'No'}
                          onChange={(e) => {
                            setcurrent_employment_status(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>No</label>
                      </div>


                      <div className='col-lg-12' style={{ marginTop: '20px', marginLeft: '5px', marginBottom: '10px' }}>
                        <label>Emphysema</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="Yes" name="emphysema" className='form-control' value="Yes"
                          checked={emphysema === 'Yes'}
                          onChange={(e) => {
                            setemphysema(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>Yes</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="No" name="emphysema" className='form-control' value="No"
                          checked={emphysema === 'No'}
                          onChange={(e) => {
                            setemphysema(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>No</label>
                      </div>

                      <div className='col-lg-12' style={{ marginTop: '20px', marginLeft: '5px', marginBottom: '10px' }}>
                        <label>Endometriosis</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="Yes" name="endometriosis" className='form-control' value="Yes"
                          checked={endometriosis === 'Yes'}
                          onChange={(e) => {
                            setendometriosis(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>Yes</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="No" name="endometriosis" className='form-control' value="No"
                          checked={endometriosis === 'No'}
                          onChange={(e) => {
                            setendometriosis(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>No</label>
                      </div>

                      <div className='col-lg-12' style={{ marginTop: '20px', marginLeft: '5px', marginBottom: '10px' }}>
                        <label>Epilepsy or convulsions</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="Yes" name="epilepsy_or_convulsions" className='form-control' value="Yes"
                          checked={epilepsy_or_convulsions === 'Yes'}
                          onChange={(e) => {
                            setepilepsy_or_convulsions(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>Yes</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="No" name="epilepsy_or_convulsions" className='form-control' value="No"
                          checked={epilepsy_or_convulsions === 'No'}
                          onChange={(e) => {
                            setepilepsy_or_convulsions(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>No</label>
                      </div>

                      <div className='col-lg-12' style={{ marginTop: '20px', marginLeft: '5px', marginBottom: '10px' }}>
                        <label>Eye or retinal disease</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="Yes" name="eye_or_retinal_disease" className='form-control' value="Yes"
                          checked={eye_or_retinal_disease === 'Yes'}
                          onChange={(e) => {
                            seteye_or_retinal_disease(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>Yes</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="No" name="eye_or_retinal_disease" className='form-control' value="No"
                          checked={eye_or_retinal_disease === 'No'}
                          onChange={(e) => {
                            seteye_or_retinal_disease(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>No</label>
                      </div>


                      <div className='col-lg-12' style={{ marginTop: '20px', marginLeft: '5px', marginBottom: '10px' }}>
                        <label>HPV (human papillomavirus)</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="Yes" name="hpv" className='form-control' value="Yes"
                          checked={hpv === 'Yes'}
                          onChange={(e) => {
                            sethpv(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>Yes</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="No" name="hpv" className='form-control' value="No"
                          checked={hpv === 'No'}
                          onChange={(e) => {
                            sethpv(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>No</label>
                      </div>


                      <div className='col-lg-12' style={{ marginTop: '20px', marginLeft: '5px', marginBottom: '10px' }}>
                        <label>Head injury</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="Yes" name="head_injury" className='form-control' value="Yes"
                          checked={head_injury === 'Yes'}
                          onChange={(e) => {
                            sethead_injury(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>Yes</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="No" name="head_injury" className='form-control' value="No"
                          checked={head_injury === 'No'}
                          onChange={(e) => {
                            sethead_injury(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>No</label>
                      </div>

                      <div className='col-lg-12' style={{ marginTop: '20px', marginLeft: '5px', marginBottom: '10px' }}>
                        <label>Heart problems</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="Yes" name="heart_problems" className='form-control' value="Yes"
                          checked={heart_problems === 'Yes'}
                          onChange={(e) => {
                            setheart_problems(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>Yes</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="No" name="heart_problems" className='form-control' value="No"
                          checked={heart_problems === 'No'}
                          onChange={(e) => {
                            setheart_problems(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>No</label>
                      </div>

                      <div className='col-lg-12' style={{ marginTop: '20px', marginLeft: '5px', marginBottom: '10px' }}>
                        <label>Hemophilia</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="Yes" name="hemophilia" className='form-control' value="Yes"
                          checked={hemophilia === 'Yes'}
                          onChange={(e) => {
                            sethemophilia(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>Yes</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="No" name="hemophilia" className='form-control' value="No"
                          checked={hemophilia === 'No'}
                          onChange={(e) => {
                            sethemophilia(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>No</label>
                      </div>

                      <div className='col-lg-12' style={{ marginTop: '20px', marginLeft: '5px', marginBottom: '10px' }}>
                        <label>Hemorrhaging after birth</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="Yes" name="hemorrhaging_after_birth" className='form-control' value="Yes"
                          checked={hemorrhaging_after_birth === 'Yes'}
                          onChange={(e) => {
                            sethemorrhaging_after_birth(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>Yes</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="No" name="hemorrhaging_after_birth" className='form-control' value="No"
                          checked={hemorrhaging_after_birth === 'No'}
                          onChange={(e) => {
                            sethemorrhaging_after_birth(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>No</label>
                      </div>


                      <div className='col-lg-12' style={{ marginTop: '20px', marginLeft: '5px', marginBottom: '10px' }}>
                        <label>Herpes</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="Yes" name="herpes" className='form-control' value="Yes"
                          checked={herpes === 'Yes'}
                          onChange={(e) => {
                            setherpes(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>Yes</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="No" name="herpes" className='form-control' value="No"
                          checked={herpes === 'No'}
                          onChange={(e) => {
                            setherpes(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>No</label>
                      </div>

                      <div className='col-lg-12' style={{ marginTop: '20px', marginLeft: '5px', marginBottom: '10px' }}>
                        <label>High cholesterol</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="Yes" name="high_cholesterol" className='form-control' value="Yes"
                          checked={high_cholesterol === 'Yes'}
                          onChange={(e) => {
                            sethigh_cholesterol(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>Yes</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="No" name="fav_language" className='form-control' value="No"
                          checked={high_cholesterol === 'No'}
                          onChange={(e) => {
                            sethigh_cholesterol(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>No</label>
                      </div>

                      <div className='col-lg-12' style={{ marginTop: '20px', marginLeft: '5px', marginBottom: '10px' }}>
                        <label>High blood pressure/ hypertension</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="Yes" name="blood_pressure_hypertension" className='form-control' value="Yes"
                          checked={blood_pressure_hypertension === 'Yes'}
                          onChange={(e) => {
                            setblood_pressure_hypertension(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>Yes</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="No" name="blood_pressure_hypertension" className='form-control' value="No"
                          checked={blood_pressure_hypertension === 'No'}
                          onChange={(e) => {
                            setblood_pressure_hypertension(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>No</label>
                      </div>


                      <div className='col-lg-12' style={{ marginTop: '20px', marginLeft: '5px', marginBottom: '10px' }}>
                        <label>Hysterectomy</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="Yes" name="hysterectomy" className='form-control' value="Yes"
                          checked={hysterectomy === 'Yes'}
                          onChange={(e) => {
                            sethysterectomy(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>Yes</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="No" name="hysterectomy" className='form-control' value="No"
                          checked={hysterectomy === 'No'}
                          onChange={(e) => {
                            sethysterectomy(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>No</label>
                      </div>

                      <div className='col-lg-12' style={{ marginTop: '20px', marginLeft: '5px', marginBottom: '10px' }}>
                        <label>Intrauterine fibroids</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="Yes" name="intrauterine_fibroids" className='form-control' value="Yes"
                          checked={intrauterine_fibroids === 'Yes'}
                          onChange={(e) => {
                            setintrauterine_fibroids(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>Yes</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="No" name="intrauterine_fibroids" className='form-control' value="No"
                          checked={intrauterine_fibroids === 'No'}
                          onChange={(e) => {
                            setintrauterine_fibroids(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>No</label>
                      </div>

                      <div className='col-lg-12' style={{ marginTop: '20px', marginLeft: '5px', marginBottom: '10px' }}>
                        <label>Kidney problems</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="Yes" name="kidney_problems" className='form-control' value="Yes"
                          checked={kidney_problems === 'Yes'}
                          onChange={(e) => {
                            setkidney_problems(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>Yes</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="No" name="kidney_problems" className='form-control' value="No"
                          checked={kidney_problems === 'No'}
                          onChange={(e) => {
                            setkidney_problems(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>No</label>
                      </div>

                      <div className='col-lg-12' style={{ marginTop: '20px', marginLeft: '5px', marginBottom: '10px' }}>
                        <label>Learning disability</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="Yes" name="learning_disability" className='form-control' value="Yes"
                          checked={learning_disability === 'Yes'}
                          onChange={(e) => {
                            setlearning_disability(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>Yes</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="No" name="learning_disability" className='form-control' value="No"
                          checked={learning_disability === 'No'}
                          onChange={(e) => {
                            setlearning_disability(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>No</label>
                      </div>


                      <div className='col-lg-12' style={{ marginTop: '20px', marginLeft: '5px', marginBottom: '10px' }}>
                        <label>Liver disease</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="Yes" name="liver_disease" className='form-control' value="Yes"
                          checked={liver_disease === 'Yes'}
                          onChange={(e) => {
                            setliver_disease(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>Yes</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="No" name="liver_disease" className='form-control' value="No"
                          checked={liver_disease === 'No'}
                          onChange={(e) => {
                            setliver_disease(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>No</label>
                      </div>


                      <div className='col-lg-12' style={{ marginTop: '20px', marginLeft: '5px', marginBottom: '10px' }}>
                        <label>Lung disease</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="Yes" name="lung_disease" className='form-control' value="Yes"
                          checked={lung_disease === 'Yes'}
                          onChange={(e) => {
                            setlung_disease(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>Yes</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="No" name="lung_disease" className='form-control' value="No"
                          checked={lung_disease === 'No'}
                          onChange={(e) => {
                            setlung_disease(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>No</label>
                      </div>


                      <div className='col-lg-12' style={{ marginTop: '20px', marginLeft: '5px', marginBottom: '10px' }}>
                        <label>Mental illness</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="Yes" name="mental_illness" className='form-control' value="Yes"
                          checked={mental_illness === 'Yes'}
                          onChange={(e) => {
                            setmental_illness(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>Yes</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="No" name="mental_illness" className='form-control' value="No"
                          checked={mental_illness === 'No'}
                          onChange={(e) => {
                            setmental_illness(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>No</label>
                      </div>


                      <div className='col-lg-12' style={{ marginTop: '20px', marginLeft: '5px', marginBottom: '10px' }}>
                        <label>Mental retardation</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="Yes" name="mental_retardation" className='form-control' value="Yes"
                          checked={mental_retardation === 'Yes'}
                          onChange={(e) => {
                            setmental_retardation(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>Yes</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="No" name="mental_retardation" className='form-control' value="No"
                          checked={mental_retardation === 'No'}
                          onChange={(e) => {
                            setmental_retardation(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>No</label>
                      </div>

                      <div className='col-lg-12' style={{ marginTop: '20px', marginLeft: '5px', marginBottom: '10px' }}>
                        <label>Migraines</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="Yes" name="migraines" className='form-control' value="Yes"
                          checked={migraines === 'Yes'}
                          onChange={(e) => {
                            setmigraines(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>Yes</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="No" name="migraines" className='form-control' value="No"
                          checked={migraines === 'No'}
                          onChange={(e) => {
                            setmigraines(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>No</label>
                      </div>

                      <div className='col-lg-12' style={{ marginTop: '20px', marginLeft: '5px', marginBottom: '10px' }}>
                        <label>Multiple sclerosis</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="Yes" name="multiple_sclerosis" className='form-control' value="Yes"
                          checked={multiple_sclerosis === 'Yes'}
                          onChange={(e) => {
                            setmultiple_sclerosis(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>Yes</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="No" name="multiple_sclerosis" className='form-control' value="No"
                          checked={multiple_sclerosis === 'No'}
                          onChange={(e) => {
                            setmultiple_sclerosis(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>No</label>
                      </div>

                      <div className='col-lg-12' style={{ marginTop: '20px', marginLeft: '5px', marginBottom: '10px' }}>
                        <label>Muscular dystrophy</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="Yes" name="muscular_dystrophy" className='form-control' value="Yes"
                          checked={muscular_dystrophy === 'Yes'}
                          onChange={(e) => {
                            setmuscular_dystrophy(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>Yes</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="No" name="muscular_dystrophy" className='form-control' value="No"
                          checked={muscular_dystrophy === 'No'}
                          onChange={(e) => {
                            setmuscular_dystrophy(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>No</label>
                      </div>

                      <div className='col-lg-12' style={{ marginTop: '20px', marginLeft: '5px', marginBottom: '10px' }}>
                        <label>Neck or back problems</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="Yes" name="neck_or_back_problem" className='form-control' value="Yes"
                          checked={neck_or_back_problem === 'Yes'}
                          onChange={(e) => {
                            setneck_or_back_problem(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>Yes</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="No" name="neck_or_back_problem" className='form-control' value="No"
                          checked={neck_or_back_problem === 'No'}
                          onChange={(e) => {
                            setneck_or_back_problem(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>No</label>
                      </div>


                      <div className='col-lg-12' style={{ marginTop: '20px', marginLeft: '5px', marginBottom: '10px' }}>
                        <label>Nervous system problems</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="Yes" name="nervous_system_problems" className='form-control' value="Yes"
                          checked={nervous_system_problems === 'Yes'}
                          onChange={(e) => {
                            setnervous_system_problems(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>Yes</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="No" name="nervous_system_problems" className='form-control' value="No"
                          checked={nervous_system_problems === 'No'}
                          onChange={(e) => {
                            setnervous_system_problems(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>No</label>
                      </div>

                      <div className='col-lg-12' style={{ marginTop: '20px', marginLeft: '5px', marginBottom: '10px' }}>
                        <label>Obesity</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="Yes" name="obesity" className='form-control' value="Yes"
                          checked={obesity === 'Yes'}
                          onChange={(e) => {
                            setobesity(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>Yes</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="No" name="obesity" className='form-control' value="No"
                          checked={obesity === 'No'}
                          onChange={(e) => {
                            setobesity(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>No</label>
                      </div>


                      <div className='col-lg-12' style={{ marginTop: '20px', marginLeft: '5px', marginBottom: '10px' }}>
                        <label>Paralysis</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="Yes" name="paralysis" className='form-control' value="Yes"
                          checked={paralysis === 'Yes'}
                          onChange={(e) => {
                            setparalysis(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>Yes</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="No" name="paralysis" className='form-control' value="No"
                          checked={paralysis === 'No'}
                          onChange={(e) => {
                            setparalysis(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>No</label>
                      </div>

                      <div className='col-lg-12' style={{ marginTop: '20px', marginLeft: '5px', marginBottom: '10px' }}>
                        <label>Personality disorder</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="Yes" name="personalitydisorder" className='form-control' value="Yes"
                          checked={personalitydisorder === 'Yes'}
                          onChange={(e) => {
                            setpersonalitydisorder(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>Yes</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="No" name="personalitydisorder" className='form-control' value="No"
                          checked={personalitydisorder === 'No'}
                          onChange={(e) => {
                            setpersonalitydisorder(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>No</label>
                      </div>

                      <div className='col-lg-12' style={{ marginTop: '20px', marginLeft: '5px', marginBottom: '10px' }}>
                        <label>Postpartum depression</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="Yes" name="postpartum_depression" className='form-control' value="Yes"
                          checked={postpartum_depression === 'Yes'}
                          onChange={(e) => {
                            setpostpartum_depression(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>Yes</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="No" name="postpartum_depression" className='form-control' value="No"
                          checked={postpartum_depression === 'No'}
                          onChange={(e) => {
                            setpostpartum_depression(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>No</label>
                      </div>


                      <div className='col-lg-12' style={{ marginTop: '20px', marginLeft: '5px', marginBottom: '10px' }}>
                        <label>Pre-eclampsia</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="Yes" name="pre_eclampsia" className='form-control' value="Yes"
                          checked={pre_eclampsia === 'Yes'}
                          onChange={(e) => {
                            setpre_eclampsia(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>Yes</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="No" name="pre_eclampsia" className='form-control' value="No"
                          checked={pre_eclampsia === 'No'}
                          onChange={(e) => {
                            setpre_eclampsia(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>No</label>
                      </div>

                      <div className='col-lg-12' style={{ marginTop: '20px', marginLeft: '5px', marginBottom: '10px' }}>
                        <label>Pre-term labor</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="Yes" name="pre_term_labor" className='form-control' value="Yes"
                          checked={pre_term_labor === 'Yes'}
                          onChange={(e) => {
                            setpre_term_labor(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>Yes</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="No" name="fav_language" className='form-control' value="No"
                          checked={pre_term_labor === 'No'}
                          onChange={(e) => {
                            setpre_term_labor(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>No</label>
                      </div>

                      <div className='col-lg-12' style={{ marginTop: '20px', marginLeft: '5px', marginBottom: '10px' }}>
                        <label>Schizophrenia</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="Yes" name="schizophrenia" className='form-control' value="Yes"
                          checked={schizophrenia === 'Yes'}
                          onChange={(e) => {
                            setschizophrenia(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>Yes</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="No" name="schizophrenia" className='form-control' value="No"
                          checked={schizophrenia === 'No'}
                          onChange={(e) => {
                            setschizophrenia(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>No</label>
                      </div>

                      <div className='col-lg-12' style={{ marginTop: '20px', marginLeft: '5px', marginBottom: '10px' }}>
                        <label>Seizures</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="Yes" name="seizures" className='form-control' value="Yes"
                          checked={seizures === 'Yes'}
                          onChange={(e) => {
                            setseizures(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>Yes</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="No" name="seizures" className='form-control' value="No"
                          checked={seizures === 'No'}
                          onChange={(e) => {
                            setseizures(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>No</label>
                      </div>

                      <div className='col-lg-12' style={{ marginTop: '20px', marginLeft: '5px', marginBottom: '10px' }}>
                        <label>Sickle cell trait</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="Yes" name="sickle_cell_trait" className='form-control' value="Yes"
                          checked={sickle_cell_trait === 'Yes'}
                          onChange={(e) => {
                            setsickle_cell_trait(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>Yes</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="No" name="sickle_cell_trait" className='form-control' value="No"
                          checked={sickle_cell_trait === 'No'}
                          onChange={(e) => {
                            setsickle_cell_trait(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>No</label>
                      </div>


                      <div className='col-lg-12' style={{ marginTop: '20px', marginLeft: '5px', marginBottom: '10px' }}>
                        <label>Skin disorders</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="Yes" name="skin_disorders" className='form-control' value="Yes"
                          checked={skin_disorders === 'Yes'}
                          onChange={(e) => {
                            setskin_disorders(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>Yes</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="No" name="skin_disorders" className='form-control' value="No"
                          checked={skin_disorders === 'No'}
                          onChange={(e) => {
                            setskin_disorders(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>No</label>
                      </div>

                      <div className='col-lg-12' style={{ marginTop: '20px', marginLeft: '5px', marginBottom: '10px' }}>
                        <label>Speech problems</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="Yes" name="speech_problems" className='form-control' value="Yes"
                          checked={speech_problems === 'Yes'}
                          onChange={(e) => {
                            setspeech_problems(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>Yes</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="No" name="fav_language" className='form-control' value="No"
                          checked={speech_problems === 'No'}
                          onChange={(e) => {
                            setspeech_problems(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>No</label>
                      </div>

                      <div className='col-lg-12' style={{ marginTop: '20px', marginLeft: '5px', marginBottom: '10px' }}>
                        <label>Spina bifida</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="Yes" name="spina_bifida" className='form-control' value="Yes"
                          checked={spina_bifida === 'Yes'}
                          onChange={(e) => {
                            setspina_bifida(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>Yes</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="No" name="spina_bifida" className='form-control' value="No"
                          checked={spina_bifida === 'No'}
                          onChange={(e) => {
                            setspina_bifida(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>No</label>
                      </div>

                      <div className='col-lg-12' style={{ marginTop: '20px', marginLeft: '5px', marginBottom: '10px' }}>
                        <label>Syphilis</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="Yes" name="syphilis" className='form-control' value="Yes"
                          checked={syphilis === 'Yes'}
                          onChange={(e) => {
                            setsyphilis(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>Yes</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="No" name="syphilis" className='form-control' value="No"
                          checked={syphilis === 'No'}
                          onChange={(e) => {
                            setsyphilis(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>No</label>
                      </div>

                      <div className='col-lg-12' style={{ marginTop: '20px', marginLeft: '5px', marginBottom: '10px' }}>
                        <label>TB (Tuberculosis) or exposed to TB</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="Yes" name="tb_or_exposed_to_tb" className='form-control' value="Yes"
                          checked={tb_or_exposed_to_tb === 'Yes'}
                          onChange={(e) => {
                            settb_or_exposed_to_tb(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>Yes</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="No" name="tb_or_exposed_to_tb" className='form-control' value="No"
                          checked={tb_or_exposed_to_tb === 'No'}
                          onChange={(e) => {
                            settb_or_exposed_to_tb(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>No</label>
                      </div>

                      <div className='col-lg-12' style={{ marginTop: '20px', marginLeft: '5px', marginBottom: '10px' }}>
                        <label>Tay sachs</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="Yes" name="tay_sachs" className='form-control' value="Yes"
                          checked={tay_sachs === 'Yes'}
                          onChange={(e) => {
                            settay_sachs(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>Yes</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="No" name="tay_sachs" className='form-control' value="No"
                          checked={tay_sachs === 'No'}
                          onChange={(e) => {
                            settay_sachs(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>No</label>
                      </div>

                      <div className='col-lg-12' style={{ marginTop: '20px', marginLeft: '5px', marginBottom: '10px' }}>
                        <label>Thyroid problems</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="Yes" name="thyroid_problems" className='form-control' value="Yes"
                          checked={thyroid_problems === 'Yes'}
                          onChange={(e) => {
                            setthyroid_problems(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>Yes</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="No" name="thyroid_problems" className='form-control' value="No"
                          checked={thyroid_problems === 'No'}
                          onChange={(e) => {
                            setthyroid_problems(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>No</label>
                      </div>



                      <div className='col-lg-12' style={{ marginTop: '20px', marginLeft: '5px', marginBottom: '10px' }}>
                        <label>Ulcers</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="Yes" name="ulcers" className='form-control' value="Yes"
                          checked={ulcers === 'Yes'}
                          onChange={(e) => {
                            setulcers(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>Yes</label>
                      </div>

                      <div className='col-lg-4 col-sm-4 col-xs-4'>
                        <input type="radio" id="No" name="ulcers" className='form-control' value="No"
                          checked={ulcers === 'No'}
                          onChange={(e) => {
                            setulcers(e.target.value);
                          }}
                          style={{ marginLeft: '-96px' }}


                        />
                      </div>
                      <div className='col-lg-8 col-sm-8 col-xs-8'>

                        <label for="html" style={{ fontSize: '15px', marginLeft: '-215px' }}>No</label>
                      </div>


















                    </div>
                  </div>


                  {/* 
                    <div className='col-lg-4 col-sm-2 col-xs-2 d-flex justify-content-start'>


<input type="radio"  id="Yes – active duty" name="fav_language" className='form-control' value="Yes – active duty"
 checked={high_school_diploma_or_ged === 'Yes – active duty'}
  onChange={(e) => {
    sethigh_school_diploma_or_ged(e.target.value);
  }}


/>
<label for="html" style={{ fontSize: '15px', marginLeft: '5px' }}>Yes – active duty</label>

</div> */}

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


          {/* ------- */}
        </Modal.Body>

        <Modal.Footer style={{}}>
          <Button
            className="btn btn-primary"
            onClick={hback22}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Back
          </Button>


          {/* current_employment_status !== null? */}
          <Button
            className="btn btn-primary"
            onClick={onSubmithip2}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >

            {loder !== false ?
              <Spinner animation="border" /> : 'Finish'

            }

          </Button>


          <Button
            className="btn btn-primary"
            onClick={handleCloseh22}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Close
          </Button>
          {/* <Button variant="primary" onClick={addcustomer}>
                        Add
                    </Button> */}
        </Modal.Footer>
      </Modal>



      {/*Pregnancy History*/}


      <Modal
        show={phshow1}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handleCloseph1}
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

                <h3 style={{ marginTop: '20px', marginBottom: '10px', }}>Now our favorite part, your pregnancy history!</h3>
                <p style={{
                  MARGINTOP: '10PX',
                  fontWeight: '100',
                  color: '#333352',
                }}>


                  {/* <p style={{ paddingTop: '10px',  }}>  This section will ask detailed questions about your health and some questions
                   may be sensitive. Just know that most of us here
                   at ISC have had to answer these questions too and it’s all just a part of the process of becoming a surrogate.</p> */}
                  <p style={{ padding: '5px' }}>  ✔️ Pregnancy history is very important when becoming a surrogate, so please be
                    as accurate as possible</p>
                  <p style={{ padding: '5px' }}>  ✔️ Don’t worry, this is just to gather information and answering “yes” to something
                    normally isn’t an issue</p>

                  <p style={{ padding: '5px' }}>  ✔️ This section should take about 5 minutes to complete</p>




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
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Next
          </Button>
          <Button
            className="btn btn-primary"
            onClick={handleCloseph1}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Close
          </Button>
          {/* <Button variant="primary" onClick={addcustomer}>
                        Add
                    </Button> */}
        </Modal.Footer>
      </Modal>

      {/* Did any of these pregnancies require doctor-ordered bed rest? */}


      <Modal
        show={phshow2}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handleCloseph2}
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
          <div className='col-lg-12 '>
            <div className="container">
              <div className='row'>
                <div className='col-lg-10'>
                  <h3 style={{ marginTop: '20px', marginBottom: '20px' }}>Did any of these pregnancies require doctor-ordered bed rest?</h3>

                </div>

                <div className='col-lg-2'>
                  <p style={{ marginTop: '30px', fontSize: '15px', color: '#d8352f' }} onClick={treatment}>Skip ≫</p>
                </div>





                <div className='col-lg-12 col-sm-12 col-xs-12 d-flex justify-content-start' style={{ marginTop: '5px' }}>
                  <div className='row'>

                    <div className='col-lg-4 col-sm-4 col-xs-4'>
                      <input type="radio" id="yes" name="fav_language" className='form-control' value="yes"
                        checked={doctor_ordered_bed_rest === 'yes'}
                        onChange={(e) => {
                          setdoctor_ordered_bed_rest(e.target.value);
                        }}
                      // style={{marginLeft:'-20px'}}


                      />
                    </div>
                    <div className='col-lg-8 col-sm-8 col-xs-8'>

                      <label for="html" style={{ fontSize: '15px', marginLeft: '-20px' }}>Yes</label>
                    </div>

                    <div className='col-lg-4 col-sm-4 col-xs-4'>
                      <input type="radio" id="No" name="fav_language" className='form-control' value="No"
                        checked={doctor_ordered_bed_rest === 'No'}
                        onChange={(e) => {
                          setdoctor_ordered_bed_rest(e.target.value);
                        }}
                      // style={{marginLeft:'-20px'}}


                      />
                    </div>
                    <div className='col-lg-8 col-sm-8 col-xs-8'>

                      <label for="html" style={{ fontSize: '15px', marginLeft: '-20px' }}>No</label>
                    </div>


                  </div>
                </div>


                {/* 
                    <div className='col-lg-4 col-sm-2 col-xs-2 d-flex justify-content-start'>


<input type="radio"  id="Yes – active duty" name="fav_language" className='form-control' value="Yes – active duty"
 checked={high_school_diploma_or_ged === 'Yes – active duty'}
  onChange={(e) => {
    sethigh_school_diploma_or_ged(e.target.value);
  }}


/>
<label for="html" style={{ fontSize: '15px', marginLeft: '5px' }}>Yes – active duty</label>

</div> */}

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


          {/* ------- */}
        </Modal.Body>

        <Modal.Footer style={{}}>
          <Button
            className="btn btn-primary"
            onClick={phback2}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Back
          </Button>

          {
            doctor_ordered_bed_rest !== null ?
              <Button
                className="btn btn-primary"
                onClick={treatment}
                style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
              >
                Next
              </Button> :
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
            onClick={handleCloseph2}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Close
          </Button>
          {/* <Button variant="primary" onClick={addcustomer}>
                        Add
                    </Button> */}
        </Modal.Footer>
      </Modal>

      {/* Have you ever had to undergo fertility treatment or medical assistance to become pregnant yourself? */}


      <Modal
        show={phshow3}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handleCloseph3}
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
          <div className='col-lg-12 '>
            <div className="container">
              <div className='row'>
                <div className='col-lg-10'>
                  <h3 style={{ marginTop: '20px', marginBottom: '20px' }}>Have you ever had to undergo fertility treatment or medical
                    assistance to become pregnant yourself?</h3>

                </div>

                <div className='col-lg-2'>
                  <p style={{ marginTop: '30px', fontSize: '15px', color: '#d8352f' }} onClick={attention}>Skip ≫</p>
                </div>





                <div className='col-lg-12 col-sm-12 col-xs-12 d-flex justify-content-start' style={{ marginTop: '5px' }}>
                  <div className='row'>

                    <div className='col-lg-4 col-sm-4 col-xs-4'>
                      <input type="radio" id="yes" name="fav_language" className='form-control' value="yes"
                        checked={undergo_fertility_treatment_or_medical_assistance === 'yes'}
                        onChange={(e) => {
                          setundergo_fertility_treatment_or_medical_assistance(e.target.value);
                        }}
                      // style={{marginLeft:'-20px'}}


                      />
                    </div>
                    <div className='col-lg-8 col-sm-8 col-xs-8'>

                      <label for="html" style={{ fontSize: '15px', marginLeft: '-20px' }}>Yes</label>
                    </div>

                    <div className='col-lg-4 col-sm-4 col-xs-4'>
                      <input type="radio" id="No" name="fav_language" className='form-control' value="No"
                        checked={undergo_fertility_treatment_or_medical_assistance === 'No'}
                        onChange={(e) => {
                          setundergo_fertility_treatment_or_medical_assistance(e.target.value);
                        }}
                      // style={{marginLeft:'-20px'}}


                      />
                    </div>
                    <div className='col-lg-8 col-sm-8 col-xs-8'>

                      <label for="html" style={{ fontSize: '15px', marginLeft: '-20px' }}>No</label>
                    </div>


                  </div>
                </div>


                {/* 
                    <div className='col-lg-4 col-sm-2 col-xs-2 d-flex justify-content-start'>


<input type="radio"  id="Yes – active duty" name="fav_language" className='form-control' value="Yes – active duty"
 checked={high_school_diploma_or_ged === 'Yes – active duty'}
  onChange={(e) => {
    sethigh_school_diploma_or_ged(e.target.value);
  }}


/>
<label for="html" style={{ fontSize: '15px', marginLeft: '5px' }}>Yes – active duty</label>

</div> */}

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


          {/* ------- */}
        </Modal.Body>

        <Modal.Footer style={{}}>
          <Button
            className="btn btn-primary"
            onClick={phback3}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Back
          </Button>

          {
            undergo_fertility_treatment_or_medical_assistance !== null ?
              <Button
                className="btn btn-primary"
                onClick={attention}
                style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
              >
                Next
              </Button> :
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
            onClick={handleCloseph3}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Close
          </Button>
          {/* <Button variant="primary" onClick={addcustomer}>
                        Add
                    </Button> */}
        </Modal.Footer>
      </Modal>
      {/* Did any of your children require medical attention after they were born? */}


      <Modal
        show={phshow4}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handleCloseph4}
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
          <div className='col-lg-12 '>
            <div className="container">
              <div className='row'>
                <div className='col-lg-10'>
                  <h3 style={{ marginTop: '20px', marginBottom: '20px' }}>Did any of your children require medical attention after they were born?</h3>

                </div>

                <div className='col-lg-2'>
                  <p style={{ marginTop: '30px', fontSize: '15px', color: '#d8352f' }} onClick={beverages}>Skip ≫</p>
                </div>





                <div className='col-lg-12 col-sm-12 col-xs-12 d-flex justify-content-start' style={{ marginTop: '5px' }}>
                  <div className='row'>

                    <div className='col-lg-4 col-sm-4 col-xs-4'>
                      <input type="radio" id="yes" name="fav_language" className='form-control' value="yes"
                        checked={children_require_medical_attention === 'yes'}
                        onChange={(e) => {
                          setchildren_require_medical_attention(e.target.value);
                        }}
                      // style={{marginLeft:'-20px'}}


                      />
                    </div>
                    <div className='col-lg-8 col-sm-8 col-xs-8'>

                      <label for="html" style={{ fontSize: '15px', marginLeft: '-20px' }}>Yes</label>
                    </div>

                    <div className='col-lg-4 col-sm-4 col-xs-4'>
                      <input type="radio" id="No" name="fav_language" className='form-control' value="No"
                        checked={children_require_medical_attention === 'No'}
                        onChange={(e) => {
                          setchildren_require_medical_attention(e.target.value);
                        }}
                      // style={{marginLeft:'-20px'}}


                      />
                    </div>
                    <div className='col-lg-8 col-sm-8 col-xs-8'>

                      <label for="html" style={{ fontSize: '15px', marginLeft: '-20px' }}>No</label>
                    </div>


                  </div>
                </div>


                {/* 
                    <div className='col-lg-4 col-sm-2 col-xs-2 d-flex justify-content-start'>


<input type="radio"  id="Yes – active duty" name="fav_language" className='form-control' value="Yes – active duty"
 checked={high_school_diploma_or_ged === 'Yes – active duty'}
  onChange={(e) => {
    sethigh_school_diploma_or_ged(e.target.value);
  }}


/>
<label for="html" style={{ fontSize: '15px', marginLeft: '5px' }}>Yes – active duty</label>

</div> */}

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


          {/* ------- */}
        </Modal.Body>

        <Modal.Footer style={{}}>
          <Button
            className="btn btn-primary"
            onClick={phback4}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Back
          </Button>

          {
            children_require_medical_attention !== null ?
              <Button
                className="btn btn-primary"
                onClick={beverages}
                style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
              >
                Next
              </Button> :
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
            onClick={handleCloseph4}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Close
          </Button>
          {/* <Button variant="primary" onClick={addcustomer}>
                        Add
                    </Button> */}
        </Modal.Footer>
      </Modal>

      {/* Have you ever experienced any of the following during your pregnancies?  */}


      <Modal
        show={phshow4}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handleCloseph4}
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
          <div className='col-lg-12 '>
            <div className="container">
              <div className='row'>
                <div className='col-lg-10'>
                  <h3 style={{ marginTop: '20px', marginBottom: '20px' }}>Have you ever experienced any of the following during your pregnancies? </h3>

                </div>

                <div className='col-lg-2'>
                  <p style={{ marginTop: '30px', fontSize: '15px', color: '#d8352f' }} onClick={miscarriage}>Skip ≫</p>
                </div>





                <div className='col-lg-12 col-sm-12 col-xs-12 d-flex justify-content-start' style={{ marginTop: '5px' }}>
                  <div className='row'>

                    <div className='col-lg-1 col-sm-4 col-xs-4'>
                      <input type="checkbox" id="yes" name="checkbox1" className='form-control' value="Gestational diabetes (diet controlled)"
                        checked={pregnancy_experiance.includes('Gestational diabetes (diet controlled)')}
                        onChange={handleCheckboxChange}
                      // onChange={(e) => {
                      //   setmenstrual_cycles(e.target.value);
                      // }}
                      // // style={{marginLeft:'-20px'}}


                      />
                    </div>
                    <div className='col-lg-8 col-sm-8 col-xs-8'>

                      <label for="html" style={{ fontSize: '15px', marginLeft: '-20px' }}>Gestational diabetes (diet controlled)</label>
                    </div>
                    <div className='col-lg-3'></div>

                    <div className='col-lg-1 col-sm-4 col-xs-4'>
                      <input type="checkbox" id="yes" name="checkbox2" className='form-control' value="Gestational diabetes (with medication)"
                        checked={pregnancy_experiance.includes('Gestational diabetes (with medication)')}
                        onChange={handleCheckboxChange}
                      // onChange={(e) => {


                      />
                    </div>
                    <div className='col-lg-8 col-sm-8 col-xs-8'>

                      <label for="html" style={{ fontSize: '15px', marginLeft: '-20px' }}>Gestational diabetes (with medication)</label>
                    </div>
                    <div className='col-lg-3'></div>

                    <div className='col-lg-1 col-sm-4 col-xs-4'>
                      <input type="checkbox" id="yes" name="checkbox3" className='form-control' value="Placenta previa"
                        checked={pregnancy_experiance.includes('Placenta previa')}
                        onChange={handleCheckboxChange}
                      // style={{marginLeft:'-20px'}}


                      />
                    </div>
                    <div className='col-lg-8 col-sm-8 col-xs-8'>

                      <label for="html" style={{ fontSize: '15px', marginLeft: '-20px' }}>Placenta previa</label>
                    </div>
                    <div className='col-lg-3'></div>


                    <div className='col-lg-1 col-sm-4 col-xs-4'>
                      <input type="checkbox" id="yes" name="checkbox4" className='form-control' value="Pre-eclampsia"
                        checked={pregnancy_experiance.includes('Pre-eclampsia')}
                        onChange={handleCheckboxChange}
                      // style={{marginLeft:'-20px'}}


                      />
                    </div>
                    <div className='col-lg-8 col-sm-8 col-xs-8'>

                      <label for="html" style={{ fontSize: '15px', marginLeft: '-20px' }}>Pre-eclampsia</label>
                    </div>
                    <div className='col-lg-3'></div>
                    <div className='col-lg-1 col-sm-4 col-xs-4'>
                      <input type="checkbox" id="yes" name="checkbox5" className='form-control' value="Emergency C-Section"
                        checked={pregnancy_experiance.includes('Emergency C-Section')}
                        onChange={handleCheckboxChange}
                      // style={{marginLeft:'-20px'}}


                      />
                    </div>
                    <div className='col-lg-8 col-sm-8 col-xs-8'>

                      <label for="html" style={{ fontSize: '15px', marginLeft: '-20px' }}>Emergency C-Section</label>
                    </div>
                    <div className='col-lg-3'></div>

                    <div className='col-lg-1 col-sm-4 col-xs-4'>
                      <input type="checkbox" id="yes" name="checkbox6" className='form-control' value="No, none of these"
                        checked={pregnancy_experiance.includes('No, none of these')}
                        onChange={handleCheckboxChange}
                      // style={{marginLeft:'-20px'}}


                      />
                    </div>
                    <div className='col-lg-8 col-sm-8 col-xs-8'>

                      <label for="html" style={{ fontSize: '15px', marginLeft: '-20px' }}>No, none of these</label>
                    </div>


                  </div>
                </div>


                {/* 
                    <div className='col-lg-4 col-sm-2 col-xs-2 d-flex justify-content-start'>


<input type="radio"  id="Yes – active duty" name="fav_language" className='form-control' value="Yes – active duty"
 checked={high_school_diploma_or_ged === 'Yes – active duty'}
  onChange={(e) => {
    sethigh_school_diploma_or_ged(e.target.value);
  }}


/>
<label for="html" style={{ fontSize: '15px', marginLeft: '5px' }}>Yes – active duty</label>

</div> */}

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


          {/* ------- */}
        </Modal.Body>

        <Modal.Footer style={{}}>
          <Button
            className="btn btn-primary"
            onClick={phback4}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Back
          </Button>

          {
            pregnancy_experiance !== null ?
              <Button
                className="btn btn-primary"
                onClick={miscarriage}
                style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
              >
                Next
              </Button> :
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
            onClick={handleCloseph4}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Close
          </Button>
          {/* <Button variant="primary" onClick={addcustomer}>
                        Add
                    </Button> */}
        </Modal.Footer>
      </Modal>


      {/* Did any of these pregnancies require doctor-ordered bed rest? */}


      <Modal
        show={phshow5}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handleCloseph5}
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
          <div className='col-lg-12 '>
            <div className="container">
              <div className='row'>
                <div className='col-lg-10'>
                  <h3 style={{ marginTop: '20px', marginBottom: '20px' }}>Have you ever had a miscarriage?</h3>

                </div>

                <div className='col-lg-2'>
                  <p style={{ marginTop: '30px', fontSize: '15px', color: '#d8352f' }} onClick={termination}>Skip ≫</p>
                </div>





                <div className='col-lg-12 col-sm-12 col-xs-12 d-flex justify-content-start' style={{ marginTop: '5px' }}>
                  <div className='row'>

                    <div className='col-lg-4 col-sm-4 col-xs-4'>
                      <input type="radio" id="yes" name="fav_language" className='form-control' value="yes"
                        checked={miscarriages === 'yes'}
                        onChange={(e) => {
                          setmiscarriages(e.target.value);
                        }}
                      // style={{marginLeft:'-20px'}}


                      />
                    </div>
                    <div className='col-lg-8 col-sm-8 col-xs-8'>

                      <label for="html" style={{ fontSize: '15px', marginLeft: '-20px' }}>Yes</label>
                    </div>

                    <div className='col-lg-4 col-sm-4 col-xs-4'>
                      <input type="radio" id="No" name="fav_language" className='form-control' value="No"
                        checked={miscarriages === 'No'}
                        onChange={(e) => {
                          setmiscarriages(e.target.value);
                        }}
                      // style={{marginLeft:'-20px'}}


                      />
                    </div>
                    <div className='col-lg-8 col-sm-8 col-xs-8'>

                      <label for="html" style={{ fontSize: '15px', marginLeft: '-20px' }}>No</label>
                    </div>


                  </div>
                </div>


                {/* 
                    <div className='col-lg-4 col-sm-2 col-xs-2 d-flex justify-content-start'>


<input type="radio"  id="Yes – active duty" name="fav_language" className='form-control' value="Yes – active duty"
 checked={high_school_diploma_or_ged === 'Yes – active duty'}
  onChange={(e) => {
    sethigh_school_diploma_or_ged(e.target.value);
  }}


/>
<label for="html" style={{ fontSize: '15px', marginLeft: '5px' }}>Yes – active duty</label>

</div> */}

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


          {/* ------- */}
        </Modal.Body>

        <Modal.Footer style={{}}>
          <Button
            className="btn btn-primary"
            onClick={phback5}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Back
          </Button>

          {
            miscarriages !== null ?
              <Button
                className="btn btn-primary"
                onClick={termination}
                style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
              >
                Next
              </Button> :
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
            onClick={handleCloseph5}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Close
          </Button>
          {/* <Button variant="primary" onClick={addcustomer}>
                        Add
                    </Button> */}
        </Modal.Footer>
      </Modal>

      {/* Have you ever had a termination? */}


      <Modal
        show={phshow6}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handleCloseph6}
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
          <div className='col-lg-12 '>
            <div className="container">
              <div className='row'>
                <div className='col-lg-10'>
                  <h3 style={{ marginTop: '20px', marginBottom: '20px' }}>Have you ever had a termination?</h3>

                </div>

                <div className='col-lg-2'>
                  <p style={{ marginTop: '30px', fontSize: '15px', color: '#d8352f' }} onClick={surrogate}>Skip ≫</p>
                </div>





                <div className='col-lg-12 col-sm-12 col-xs-12 d-flex justify-content-start' style={{ marginTop: '5px' }}>
                  <div className='row'>

                    <div className='col-lg-4 col-sm-4 col-xs-4'>
                      <input type="radio" id="yes" name="fav_language" className='form-control' value="yes"
                        checked={terminations === 'yes'}
                        onChange={(e) => {
                          setterminations(e.target.value);
                        }}
                      // style={{marginLeft:'-20px'}}


                      />
                    </div>
                    <div className='col-lg-8 col-sm-8 col-xs-8'>

                      <label for="html" style={{ fontSize: '15px', marginLeft: '-20px' }}>Yes</label>
                    </div>

                    <div className='col-lg-4 col-sm-4 col-xs-4'>
                      <input type="radio" id="No" name="fav_language" className='form-control' value="No"
                        checked={terminations === 'No'}
                        onChange={(e) => {
                          setterminations(e.target.value);
                        }}
                      // style={{marginLeft:'-20px'}}


                      />
                    </div>
                    <div className='col-lg-8 col-sm-8 col-xs-8'>

                      <label for="html" style={{ fontSize: '15px', marginLeft: '-20px' }}>No</label>
                    </div>


                  </div>
                </div>


                {/* 
                    <div className='col-lg-4 col-sm-2 col-xs-2 d-flex justify-content-start'>


<input type="radio"  id="Yes – active duty" name="fav_language" className='form-control' value="Yes – active duty"
 checked={high_school_diploma_or_ged === 'Yes – active duty'}
  onChange={(e) => {
    sethigh_school_diploma_or_ged(e.target.value);
  }}


/>
<label for="html" style={{ fontSize: '15px', marginLeft: '5px' }}>Yes – active duty</label>

</div> */}

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


          {/* ------- */}
        </Modal.Body>

        <Modal.Footer style={{}}>
          <Button
            className="btn btn-primary"
            onClick={phback6}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Back
          </Button>

          {
            terminations !== null ?
              <Button
                className="btn btn-primary"
                onClick={surrogate}
                style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
              >
                Next
              </Button> :
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
            onClick={handleCloseph6}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Close
          </Button>
          {/* <Button variant="primary" onClick={addcustomer}>
                        Add
                    </Button> */}
        </Modal.Footer>
      </Modal>

      {/* Have you ever been matched as a surrogate before?
 */}


      <Modal
        show={phshow7}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handleCloseph7}
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
          <div className='col-lg-12 '>
            <div className="container">
              <div className='row'>
                <div className='col-lg-10'>
                  <h3 style={{ marginTop: '20px', marginBottom: '20px' }}>Have you ever been matched as a surrogate before?</h3>

                </div>

                <div className='col-lg-2'>
                  <p style={{ marginTop: '30px', fontSize: '15px', color: '#d8352f' }} onClick={breastfed}>Skip ≫</p>
                </div>





                <div className='col-lg-12 col-sm-12 col-xs-12 d-flex justify-content-start' style={{ marginTop: '5px' }}>
                  <div className='row'>

                    <div className='col-lg-4 col-sm-4 col-xs-4'>
                      <input type="radio" id="yes" name="fav_language" className='form-control' value="yes"
                        checked={surrogate_before === 'yes'}
                        onChange={(e) => {
                          setsurrogate_before(e.target.value);
                        }}
                      // style={{marginLeft:'-20px'}}


                      />
                    </div>
                    <div className='col-lg-8 col-sm-8 col-xs-8'>

                      <label for="html" style={{ fontSize: '15px', marginLeft: '-20px' }}>Yes</label>
                    </div>

                    <div className='col-lg-4 col-sm-4 col-xs-4'>
                      <input type="radio" id="No" name="fav_language" className='form-control' value="No"
                        checked={surrogate_before === 'No'}
                        onChange={(e) => {
                          setsurrogate_before(e.target.value);
                        }}
                      // style={{marginLeft:'-20px'}}


                      />
                    </div>
                    <div className='col-lg-8 col-sm-8 col-xs-8'>

                      <label for="html" style={{ fontSize: '15px', marginLeft: '-20px' }}>No</label>
                    </div>


                  </div>
                </div>


                {/* 
                    <div className='col-lg-4 col-sm-2 col-xs-2 d-flex justify-content-start'>


<input type="radio"  id="Yes – active duty" name="fav_language" className='form-control' value="Yes – active duty"
 checked={high_school_diploma_or_ged === 'Yes – active duty'}
  onChange={(e) => {
    sethigh_school_diploma_or_ged(e.target.value);
  }}


/>
<label for="html" style={{ fontSize: '15px', marginLeft: '5px' }}>Yes – active duty</label>

</div> */}

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


          {/* ------- */}
        </Modal.Body>

        <Modal.Footer style={{}}>
          <Button
            className="btn btn-primary"
            onClick={phback7}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Back
          </Button>

          {
            surrogate_before !== null ?
              <Button
                className="btn btn-primary"
                onClick={breastfed}
                style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
              >
                Next
              </Button> :
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
            onClick={handleCloseph7}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Close
          </Button>
          {/* <Button variant="primary" onClick={addcustomer}>
                        Add
                    </Button> */}
        </Modal.Footer>
      </Modal>

      {/* Are you currently breastfeeding, or have you breastfed in the last 6 months?
 */}


      <Modal
        show={phshow8}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handleCloseph8}
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
          <div className='col-lg-12 '>
            <div className="container">
              <div className='row'>
                <div className='col-lg-10'>
                  <h3 style={{ marginTop: '20px', marginBottom: '20px' }}>Are you currently breastfeeding, or have you
                    breastfed in the last 6 months?
                  </h3>

                </div>

                <div className='col-lg-2'>
                  <p style={{ marginTop: '30px', fontSize: '15px', color: '#d8352f' }} onClick={duringpregnancy}>Skip ≫</p>
                </div>





                <div className='col-lg-12 col-sm-12 col-xs-12 d-flex justify-content-start' style={{ marginTop: '5px' }}>
                  <div className='row'>

                    <div className='col-lg-4 col-sm-4 col-xs-4'>
                      <input type="radio" id="yes" name="fav_language" className='form-control' value="yes"
                        checked={currently_breastfeeding === 'yes'}
                        onChange={(e) => {
                          setcurrently_breastfeeding(e.target.value);
                        }}
                      // style={{marginLeft:'-20px'}}


                      />
                    </div>
                    <div className='col-lg-8 col-sm-8 col-xs-8'>

                      <label for="html" style={{ fontSize: '15px', marginLeft: '-20px' }}>Yes</label>
                    </div>

                    <div className='col-lg-4 col-sm-4 col-xs-4'>
                      <input type="radio" id="No" name="fav_language" className='form-control' value="No"
                        checked={currently_breastfeeding === 'No'}
                        onChange={(e) => {
                          setcurrently_breastfeeding(e.target.value);
                        }}
                      // style={{marginLeft:'-20px'}}


                      />
                    </div>
                    <div className='col-lg-8 col-sm-8 col-xs-8'>

                      <label for="html" style={{ fontSize: '15px', marginLeft: '-20px' }}>No</label>
                    </div>


                  </div>
                </div>


                {/* 
                    <div className='col-lg-4 col-sm-2 col-xs-2 d-flex justify-content-start'>


<input type="radio"  id="Yes – active duty" name="fav_language" className='form-control' value="Yes – active duty"
 checked={high_school_diploma_or_ged === 'Yes – active duty'}
  onChange={(e) => {
    sethigh_school_diploma_or_ged(e.target.value);
  }}


/>
<label for="html" style={{ fontSize: '15px', marginLeft: '5px' }}>Yes – active duty</label>

</div> */}

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


          {/* ------- */}
        </Modal.Body>

        <Modal.Footer style={{}}>
          <Button
            className="btn btn-primary"
            onClick={phback8}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Back
          </Button>

          {
            currently_breastfeeding !== null ?
              <Button
                className="btn btn-primary"
                onClick={duringpregnancy}
                style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
              >
                Next
              </Button> :
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
            onClick={handleCloseph8}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Close
          </Button>
          {/* <Button variant="primary" onClick={addcustomer}>
                        Add
                    </Button> */}
        </Modal.Footer>
      </Modal>


      {/* What is your typical mood like during pregnancy?
 */}


      <Modal
        show={phshow9}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handleCloseph9}
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
          <div className='col-lg-12 '>
            <div className="container">
              <div className='row'>
                <div className='col-lg-10'>
                  <h3 style={{ marginTop: '20px', marginBottom: '20px' }}>What is your typical mood like during pregnancy?
                  </h3>

                </div>

                {/* <div className='col-lg-2'>
                  <p style={{ marginTop: '30px', fontSize: '15px', color: '#d8352f' }} onClick={treatment}>Skip ≫</p>
                </div> */}





                <div className='col-lg-12 col-sm-12 col-xs-12 d-flex justify-content-start' style={{ marginTop: '5px' }}>
                  <div className='row'>

                    <div className='col-lg-12 col-sm-8 col-xs-8'>
                      <input type="text" className='form-control'

                        onChange={(e) => {
                          settypical_mood_like_during_pregnancy(e.target.value);
                        }}
                        value={typical_mood_like_during_pregnancy}
                        style={{ height: '45px', fontSize: '15px' }}


                      />
                    </div>
                    <div className='col-lg-12' style={{ marginTop: '20px' }}>

                      <p>Describe how you felt when you brought your own child(ren) into the world? </p>
                    </div>
                    <div className='col-lg-12 col-sm-8 col-xs-8'>
                      <input type="text" id="yes" className='form-control'

                        onChange={(e) => {
                          setchildren_into_the_world(e.target.value);
                        }}
                        value={children_into_the_world}
                        style={{ height: '45px', fontSize: '15px', marginTop: '20px' }}


                      />
                    </div>







                  </div>
                </div>


                {/* 
                    <div className='col-lg-4 col-sm-2 col-xs-2 d-flex justify-content-start'>


<input type="radio"  id="Yes – active duty" name="fav_language" className='form-control' value="Yes – active duty"
 checked={high_school_diploma_or_ged === 'Yes – active duty'}
  onChange={(e) => {
    sethigh_school_diploma_or_ged(e.target.value);
  }}


/>
<label for="html" style={{ fontSize: '15px', marginLeft: '5px' }}>Yes – active duty</label>

</div> */}

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


          {/* ------- */}
        </Modal.Body>

        <Modal.Footer style={{}}>
          <Button
            className="btn btn-primary"
            onClick={phback9}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Back
          </Button>

          {
            typical_mood_like_during_pregnancy !== null && children_into_the_world !== null ?
              <Button
                className="btn btn-primary"
                onClick={onSubmitphh}
                style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
              >
                {loder !== false ?
                  <Spinner animation="border" /> : 'Finish'

                }
              </Button> :
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
          onClick={applicable}
          style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
        >
          Next
        </Button> */}

          <Button
            className="btn btn-primary"
            onClick={handleCloseph9}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
          >
            Close
          </Button>
          {/* <Button variant="primary" onClick={addcustomer}>
                        Add
                    </Button> */}
        </Modal.Footer>
      </Modal>


       {/*About You*/}


   




{/*Signature Pages and Disclosures*/}




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
          <Navbar.Collapse id="basic-navbar-nav" style={{ marginLeft: '800px' }}>
            <Nav className="me-auto">
              {/* <Nav.Link style={{fontSize:'16px', color:'black'}} >Surrogate Application</Nav.Link> */}
              {/* <Nav.Link href="#link">Link</Nav.Link> */}
              <NavDropdown title={fname} id="basic-nav-dropdown" style={{ fontSize: '16px', color: 'black' }}>
                <NavDropdown.Item href="#action/3.1" onClick={logout} style={{ backgroundColor: '#ebebeb', fontSize: '15px' }}>Logout</NavDropdown.Item>
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
              <div className="card" style={{ padding: '20px', boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }} onClick={Employment}>
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
              <div className="card" style={{ padding: '20px', boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }} onClick={abouthealth}>
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
              <div className="card" style={{ padding: '20px', boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }} onClick={Welcomeph}>
                <div className="card-body">
                  <div className='row'>
                    <div className='col-lg-6'>
                      <h1 style={{ fontSize: '20px' }}>
                      Pregnancy History
                      </h1>
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
             <Deliveries/>
              
            <Aboutyou />
            <SurrogacyJourney/>
              
              <Signature />
            </div>



          </div>
        </div>


      </div>

    </>
  )
}

export default Surrogateform