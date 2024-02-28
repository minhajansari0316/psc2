import React from "react";
import Header from "../compunet/Header";
import Footer from "../compunet/Footer";
import { useState } from "react";
import { PostApi } from "../Helper/helper";
import BaseUrl from "../baseurl/BaseUrl";
import { ToastContainer, toast } from "react-toastify";
import { Spinner } from "react-bootstrap";
const Parentform = () => {
 const [loader,setloader] =useState(false)
 const [, setShowToast] = useState(false);

  const [Input1,setInput1]=useState("")
  const [Input2,setInput2]=useState("")
  const [Input3,setInput3]=useState("")
  const [Input4,setInput4]=useState("")
  const [Input5,setInput5]=useState("")
  const [Input6,setInput6]=useState("")
  const [Input7,setInput7]=useState("")   
  const [select1,Setselect1]=useState("")
  const [select2,Setselect2]=useState("")
  const [select3,Setselect3]=useState("")
  const [select4,Setselect4]=useState("")
  const [select5,Setselect5]=useState("")

  console.log(Input6,select4);

//   const clearinput=()=>{

 
// }
  const onSubmit = () => {
    setloader(true);
    // setShow2(false);
    // console.log("packageId,", packageId, token1.id);
    const formData = new FormData();
    formData.append("parent1_first_name", Input1);
    formData.append("parent2_first_name", Input2);
    formData.append("parent1_last_name", Input3);
    formData.append("parent2_last_name", Input4);
    formData.append("email", Input5);
    formData.append("country", select1);
    formData.append("phone", Input6);
    formData.append("embryos_status", select2);
    formData.append("ivf_clinic", select3);
    formData.append("referred_by_someone", select5);
    formData.append("clinic_name", Input7);
    formData.append("referred_by_detail", select4);


    
 
     const token=localStorage.getItem("token")

    PostApi(`${BaseUrl.baseUrl}parent/apply`, formData, token)
      .then((data) => {
        console.log("data=====", data.data.message);
        setloader(false);

        setShowToast(true);
        toast(data.data.message);
        setInput1("")
        setInput2("")
        setInput3("")
        setInput4("")
        setInput5("")
        setInput6("")
        setInput7("")
        Setselect1("")
        Setselect2("")
        Setselect3("")
        Setselect4("")
        Setselect5("")        
        console.log(data.data.message);
        // show13(false);

        // statusll("approved")
      })

      .catch((err) => {
        console.log(err.message);
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

  return (
    <>
      <body className="moto-background moto-website_live">
        <div className="page">
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
          <Header />
          {/* <header
id="section-header"
className="header moto-section"
data-widget="section"
data-container="section"
>
<div
className="moto-widget moto-widget-row row-fixed moto-justify-content_center moto-bg-color1_3 moto-spacing-top-small moto-spacing-right-auto moto-spacing-bottom-small moto-spacing-left-auto"
data-grid-type="sm"
data-widget="row"
data-visible-on="-"
data-spacing="sasa"
style={{}}
data-bg-position="left top"
data-draggable-disabled=""
>
<div className="container-fluid">
<div className="row" data-container="container">
<div
className="moto-widget moto-widget-row__column moto-cell col-sm-8 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
style={{}}
data-widget="row.column"
data-container="container"
data-spacing="aaaa"
data-bg-position="left top"
>
<div
className="moto-widget moto-widget-row moto-justify-content_center moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
data-grid-type="sm"
data-widget="row"
data-visible-on="-"
data-spacing="aaaa"
style={{}}
data-bg-position="left top"
data-draggable-disabled=""
>
<div className="container-fluid">
  <div className="row" data-container="container">
    <div
      className="moto-widget moto-widget-row__column moto-cell col-sm-6 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
      style={{}}
      data-widget="row.column"
      data-container="container"
      data-spacing="aaaa"
      data-bg-position="left top"
    >
      <div
        className="moto-widget moto-widget-text moto-preset-default moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
        data-widget="text"
        data-preset="default"
        data-spacing="aaaa"
        data-visible-on="-"
        data-animation=""
      >
        <div className="moto-widget-text-content moto-widget-text-editable">
          <p className="moto-text_system_2">
            <span className="fa"></span>&nbsp;&nbsp;7087
            Richmond hwy, Alexandria, VA
          </p>
        </div>
      </div>
    </div>
    <div
      className="moto-widget moto-widget-row__column moto-cell col-sm-6 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
      style={{}}
      data-widget="row.column"
      data-container="container"
      data-spacing="aaaa"
      data-bg-position="left top"
    >
      <div
        className="moto-widget moto-widget-text moto-preset-default moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
        data-widget="text"
        data-preset="default"
        data-spacing="aaaa"
        data-visible-on="-"
        data-animation=""
        data-draggable-disabled=""
      >
        <div
          className="moto-widget-text-content moto-widget-text-editable"
          aria-multiline="true"
        >
          <p className="moto-text_system_2">
            <span className="fa"></span>&nbsp;&nbsp;
            <a
              href="tel:1234567890"
              data-action="call"
              className="moto-link"
            >
              123-456-7890
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</div>
<div
className="moto-widget moto-widget-row__column moto-cell col-sm-4 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
style={{}}
data-widget="row.column"
data-container="container"
data-spacing="aaaa"
data-bg-position="left top"
>
<div
id="wid_1595839680_hbtt21zug"
data-widget-id="wid_1595839680_hbtt21zug"
className="moto-widget moto-widget-social-links-extended moto-preset-default moto-align-right moto-align-center_mobile-h moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto  "
data-widget="social_links_extended"
data-preset="default"
>
<ul className="moto-widget-social-links-extended__list">
  <li className="moto-widget-social-links-extended__item moto-widget-social-links-extended__item-1">
    <a
      href="#"
      className="moto-widget-social-links-extended__link"
      target="_self"
    >
      <span className="moto-widget-social-links-extended__icon fa">
        
      </span>
    </a>
  </li>
  <li className="moto-widget-social-links-extended__item moto-widget-social-links-extended__item-2">
    <a
      href="#"
      className="moto-widget-social-links-extended__link"
      target="_self"
    >
      <span className="moto-widget-social-links-extended__icon fa">
        
      </span>
    </a>
  </li>
  <li className="moto-widget-social-links-extended__item moto-widget-social-links-extended__item-3">
    <a
      href="#"
      className="moto-widget-social-links-extended__link"
      target="_self"
    >
      <span className="moto-widget-social-links-extended__icon fa">
        
      </span>
    </a>
  </li>
  <li className="moto-widget-social-links-extended__item moto-widget-social-links-extended__item-4">
    <a
      href="#"
      className="moto-widget-social-links-extended__link"
      target="_self"
    >
      <span className="moto-widget-social-links-extended__icon fa">
        
      </span>
    </a>
  </li>
</ul>
<style
  type="text/css"
  dangerouslySetInnerHTML={{
    __html:
      "\n                                                        "
  }}
/>
</div>
</div>
</div>
</div>
</div>
<div
className="moto-widget moto-widget-container undefined moto-container_header_5f1e96be1"
data-visible-on=""
data-widget="container"
data-container="container"
data-css-name="moto-container_header_5f1e96be1"
data-bg-position="left top"
data-moto-sticky="{}"
>
<div
className="moto-widget moto-widget-row row-fixed moto-justify-content_center moto-spacing-top-small moto-spacing-right-auto moto-spacing-bottom-small moto-spacing-left-auto"
data-grid-type="sm"
data-widget="row"
data-visible-on="-"
data-spacing="sasa"
style={{}}
data-bg-position="left top"
>
<div className="container-fluid">
<div className="row" data-container="container">
<div
className="moto-widget moto-widget-row__column moto-cell col-sm-3 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
style={{}}
data-widget="row.column"
data-container="container"
data-spacing="aaaa"
data-bg-position="left top"
>
<div
  data-widget-id="wid_1595840209_7o89ubw42"
  className="moto-widget moto-widget-image moto-widget_with-deferred-content moto-preset-default moto-align-center_mobile-h moto-spacing-top-small moto-spacing-right-auto moto-spacing-bottom-small moto-spacing-left-auto  "
  data-widget="image"
>
  <a
    href="../index.html"
    data-action="home_page"
    className="moto-widget-image-link moto-link"
  >
    <img
      data-src="/mt-demo/109600/109604/mt-content/uploads/2020/07/mt-2068_header_logo.png"
      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0  '%3E%3C/svg%3E"
      className="moto-widget-image-picture moto-widget-deferred-content lazyload"
      data-id={145}
      title=""
      alt=""
    />
  </a>
</div>
</div>
<div
className="moto-widget moto-widget-row__column moto-cell col-sm-9 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
style={{}}
data-widget="row.column"
data-container="container"
data-spacing="aaaa"
data-bg-position="left top"
>
<div
  data-widget-id="wid_1595840247_yzpb4jpes"
  className="moto-widget moto-widget-menu moto-preset-default moto-align-center moto-spacing-top-small moto-spacing-right-auto moto-spacing-bottom-small moto-spacing-left-auto"
  data-preset="default"
  data-widget="menu"
>
  <a href="#" className="moto-widget-menu-toggle-btn">
    <i className="moto-widget-menu-toggle-btn-icon fa fa-bars" />
  </a>
  <ul className="moto-widget-menu-list moto-widget-menu-list_horizontal">
    <li className="moto-widget-menu-item">
      <a
        href="index.html"
        data-action="page"
        className="moto-widget-menu-link moto-widget-menu-link-level-1 moto-widget-menu-link-active moto-link"
      >
        ABOUT US
      </a>
    </li>
    <li className="moto-widget-menu-item">
      <a
        href="../our-team/index.html"
        data-action="page"
        className="moto-widget-menu-link moto-widget-menu-link-level-1 moto-link"
      >
        DOCTORS
      </a>
    </li>
    <li className="moto-widget-menu-item">
      <a
        href="../services/index.html"
        data-action="page"
        className="moto-widget-menu-link moto-widget-menu-link-level-1 moto-link"
      >
        SERVICES
      </a>
    </li>
    <li className="moto-widget-menu-item">
      <a
        href="../contacts/index.html"
        data-action="page"
        className="moto-widget-menu-link moto-widget-menu-link-level-1 moto-link"
      >
        CONTACTS
      </a>
    </li>
    <li className="moto-widget-menu-item moto-widget-menu-item-has-submenu">
      <a
        href="#"
        data-action="url"
        className="moto-widget-menu-link moto-widget-menu-link-level-1 moto-widget-menu-link-submenu moto-link"
      >
        MORE
        <span className="fa moto-widget-menu-link-arrow" />
      </a>
      <ul className="moto-widget-menu-sublist">
        <li className="moto-widget-menu-item">
          <a
            href="../gallery/index.html"
            data-action="page"
            className="moto-widget-menu-link moto-widget-menu-link-level-2 moto-link"
          >
            GALLERY
          </a>
        </li>
        <li className="moto-widget-menu-item">
          <a
            href="../departments/index.html"
            data-action="page"
            className="moto-widget-menu-link moto-widget-menu-link-level-2 moto-link"
          >
            DEPARTMENTS
          </a>
        </li>
        <li className="moto-widget-menu-item">
          <a
            href="../blog/index.html"
            data-action="blog.index"
            className="moto-widget-menu-link moto-widget-menu-link-level-2 moto-link"
          >
            BLOG
          </a>
        </li>
      </ul>
    </li>{" "}
  </ul>
</div>
</div>
</div>
</div>
</div>
</div>
<div
className="moto-widget moto-widget-row row-fixed moto-spacing-top-medium moto-spacing-right-auto moto-spacing-bottom-medium moto-spacing-left-auto"
data-grid-type="sm"
data-widget="row"
data-visible-on="-"
data-spacing="mama"
style={{}}
data-bg-position="left top"
>
<div className="container-fluid">
<div className="row" data-container="container">
<div
className="moto-widget moto-widget-row__column moto-cell col-sm-12 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
style={{}}
data-widget="row.column"
data-container="container"
data-spacing="aaaa"
data-bg-position="left top"
>
<div
id="wid_1595852959_fff0o9hk4"
className="moto-widget moto-widget-breadcrumbs moto-align-left moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto   moto-preset-default"
data-widget="breadcrumbs"
data-preset="default"
>
<div className="moto-widget-breadcrumbs__wrapper">
  <ul className="moto-widget-breadcrumbs__list">
    <li className="moto-widget-breadcrumbs__item">
      <span className="moto-widget-breadcrumbs__item-content moto-widget-breadcrumbs__item-content_current">
        <span className="moto-widget-breadcrumbs__item-text">
          ABOUT US
        </span>
      </span>
    </li>
  </ul>
</div>
</div>
</div>
</div>
</div>
</div>
</header> */}
          <section
            id="section-content"
            className="content page-12 moto-section"
            data-widget="section"
            data-container="section"
          >
            <div
              className="moto-widget moto-widget-row moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
              data-grid-type="sm"
              data-widget="row"
              data-visible-on="-"
              data-spacing="aaaa"
              style={{}}
              data-bg-position="left top"
              data-draggable-disabled=""
            >
              <div className="">
                <div
                  id="wid_1595841006_s9ff8o2hk__content"
                  className="moto-widget__content"
                >
                  <div
                    id="wid_1595841023_rrwvo0wxl"
                    data-parent-id="wid_1595841006_s9ff8o2hk"
                    className="moto-widget moto-widget-content_slider__item moto-widget-row moto-widget_with-content-editor  row-fixed moto-disabling_row-fixed moto-entertainment__playing_disabled moto-before-in-viewport_content-invisible"
                    style={{
                      backgroundPosition: "top",
                      backgroundImage:
                        "url(mt-demo/109600/109604/mt-content/uploads/2020/07/mt-2068_home_bg03.jpg)",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                    data-widget="content_slider.item"
                    data-preset=""
                  >
                    <div className="moto-widget__content-wrapper container-fluid">
                      <div className="moto-widget__content row">
                        <div
                          id="wid_1595841023_rrwvo0wxl__content"
                          className="moto-cell col-sm-12 moto-entertainment__animation_disabled moto-entertainment__animation_ignore-visibility"
                        >
                          <div
                            data-widget-id="wid_1595841057_t4stgm9px"
                            className="moto-widget moto-widget-row moto-spacing-top-large moto-spacing-right-auto moto-spacing-bottom-large moto-spacing-left-auto  "
                            data-grid-type="sm"
                            data-widget="row"
                            data-visible-on="+desktop,tablet,mobile-h,mobile-v"
                            data-spacing="lala"
                            style={{ backgroundPosition: "left top" }}
                          >
                            <div className="container-fluid">
                              <div className="row" data-container="container">
                                <div
                                  data-widget-id="wid_1595841057_89be3r1sr"
                                  className="moto-widget moto-widget-row__column moto-cell  col-sm-12 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                                  style={{ backgroundPosition: "left top" }}
                                  data-widget="row.column"
                                  data-container="container"
                                  data-spacing="aaaa"
                                >
                                  <div
                                    data-widget-id="wid_1595841837_ubu65qgf0"
                                    className="moto-widget moto-widget-spacer moto-preset-default moto-spacing-top-large moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto moto-visible-on_tablet_hidden moto-visible-on_mobile-h_hidden moto-visible-on_mobile-v_hidden"
                                    data-widget="spacer"
                                    data-preset="default"
                                    data-spacing="laaa"
                                    data-visible-on="+desktop"
                                  >
                                    <div
                                      className="moto-widget-spacer-block"
                                      style={{ height: 0 }}
                                    />
                                  </div>
                                  <div
                                    data-widget-id="wid_1595841066_6joo2ll8u"
                                    className="moto-widget moto-widget-text moto-preset-default  moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto  "
                                    data-widget="text"
                                    data-preset="default"
                                    data-spacing="aaaa"
                                    data-visible-on="+desktop,tablet,mobile-h,mobile-v"
                                    data-animation=""
                                  >
                                    <div className="moto-widget-text-content moto-widget-text-editable">
                                      {/* <p className="moto-text_system_5">
                        WE HAVE A SET OF
                      </p> */}
                                      {/* <h1 className="moto-text_system_3">
                        SERVICES TO HELP
                      </h1> */}
                                      <p className="moto-text_system_4">
                                        INTENDED PARENT APPLICATION
                                      </p>
                                    </div>
                                  </div>
                                  <div
                                    data-widget-id="wid_1595841737_olwfxtvqo"
                                    className="moto-widget moto-widget-row moto-spacing-top-medium moto-spacing-right-auto moto-spacing-bottom-medium moto-spacing-left-auto  "
                                    data-grid-type="sm"
                                    data-widget="row"
                                    data-visible-on="+desktop,tablet,mobile-h,mobile-v"
                                    data-spacing="mama"
                                    style={{ backgroundPosition: "left top" }}
                                  >
                                    <div className="container-fluid">
                                      <div
                                        className="row"
                                        data-container="container"
                                      >
                                        <div
                                          data-widget-id="wid_1595841737_64k6q85ws"
                                          className="moto-widget moto-widget-row__column moto-cell  col-sm-7 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                                          style={{
                                            backgroundPosition: "left top",
                                          }}
                                          data-widget="row.column"
                                          data-container="container"
                                          data-spacing="aaaa"
                                        >
                                          <div
                                            data-widget-id="wid_1595841752_3xt78tb1c"
                                            className="moto-widget moto-widget-text moto-preset-default  moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto  "
                                            data-widget="text"
                                            data-preset="default"
                                            data-spacing="aaaa"
                                            data-visible-on="+desktop,tablet,mobile-h,mobile-v"
                                            data-animation=""
                                          >
                                            {/* <div className="moto-widget-text-content moto-widget-text-editable">
                              <p className="moto-text_211">
                                Starting with a consultation on what
                                choices you'll have as a future
                                parent, and all the way to group
                                support classes and medical exams,
                                we're here to help!
                              </p>
                            </div> */}
                                          </div>
                                        </div>
                                        {/* <div
                          data-widget-id="wid_1595841739_yync027fc"
                          className="moto-widget moto-widget-row__column moto-cell  col-sm-5 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                          style={{ backgroundPosition: "left top" }}
                          data-widget="row.column"
                          data-container="container"
                          data-spacing="aaaa"
                        ></div> */}
                                      </div>
                                    </div>
                                  </div>
                                  {/* <div
                    data-widget-id="wid_1595841278_2xqb0ppjw"
                    className="moto-widget moto-widget-button moto-preset-default moto-preset-provider-default moto-align-left moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto  "
                    data-widget="button"
                  >
                    <a
                      // href="#"
                      data-action="popup"
                      data-popup-id={8}
                      className="moto-widget-button-link moto-size-small moto-link"
                    >
                      <span className="fa moto-widget-theme-icon" />
                      <span className="moto-widget-button-divider" />
                      <span className="moto-widget-button-label">
                        Make an appointment&nbsp;
                      </span>
                    </a>
                  </div> */}
                                  <div
                                    data-widget-id="wid_1595841846_f2kcxi7k6"
                                    className="moto-widget moto-widget-spacer moto-preset-default moto-spacing-top-large moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto moto-visible-on_tablet_hidden moto-visible-on_mobile-h_hidden moto-visible-on_mobile-v_hidden"
                                    data-widget="spacer"
                                    data-preset="default"
                                    data-spacing="laaa"
                                    data-visible-on="+desktop"
                                  >
                                    <div
                                      className="moto-widget-spacer-block"
                                      style={{ height: 0 }}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div
id="wid_1595841927_bdfvoucbl"
data-parent-id="wid_1595841006_s9ff8o2hk"
className="moto-widget moto-widget-content_slider__item moto-widget-row moto-widget_with-content-editor  row-fixed moto-disabling_row-fixed moto-entertainment__playing_disabled moto-before-in-viewport_content-invisible"
style={{
backgroundPosition: "top",
backgroundImage:
  "url(mt-demo/109600/109604/mt-content/uploads/2020/07/mt-2068_home_slider02.jpg)",
backgroundSize: "cover",
backgroundRepeat: "no-repeat"
}}
data-widget="content_slider.item"
data-preset=""
>
<div className="moto-widget__content-wrapper container-fluid">
<div className="moto-widget__content row">
  <div
    id="wid_1595841927_bdfvoucbl__content"
    className="moto-cell col-sm-12 moto-entertainment__animation_disabled moto-entertainment__animation_ignore-visibility"
  >
    <div
      data-widget-id="wid_1595841927_7x5uw1q2y"
      className="moto-widget moto-widget-row moto-spacing-top-large moto-spacing-right-auto moto-spacing-bottom-large moto-spacing-left-auto  "
      data-grid-type="sm"
      data-widget="row"
      data-visible-on="+desktop,tablet,mobile-h,mobile-v"
      data-spacing="lala"
      style={{ backgroundPosition: "left top" }}
    >
      <div className="container-fluid">
        <div className="row" data-container="container">
          <div
            data-widget-id="wid_1595841927_zr67jwsfa"
            className="moto-widget moto-widget-row__column moto-cell  col-sm-12 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
            style={{ backgroundPosition: "left top" }}
            data-widget="row.column"
            data-container="container"
            data-spacing="aaaa"
          >
            <div
              data-widget-id="wid_1595841927_gny5i9ikv"
              className="moto-widget moto-widget-spacer moto-preset-default moto-spacing-top-large moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto moto-visible-on_tablet_hidden moto-visible-on_mobile-h_hidden moto-visible-on_mobile-v_hidden"
              data-widget="spacer"
              data-preset="default"
              data-spacing="laaa"
              data-visible-on="+desktop"
            >
              <div
                className="moto-widget-spacer-block"
                style={{ height: 0 }}
              />
            </div>
            <div
              data-widget-id="wid_1595841927_vqn575vq6"
              className="moto-widget moto-widget-text moto-preset-default  moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto  "
              data-widget="text"
              data-preset="default"
              data-spacing="aaaa"
              data-visible-on="+desktop,tablet,mobile-h,mobile-v"
              data-animation=""
            >
              <div className="moto-widget-text-content moto-widget-text-editable">
                <p className="moto-text_system_5">
                  THIS WEEK ONLY!
                </p>
                <p className="moto-text_system_3">GET A FREE</p>
                <p className="moto-text_system_4">
                  CONSULTATION
                </p>
              </div>
            </div>
            <div
              data-widget-id="wid_1595841927_2eqhunz6h"
              className="moto-widget moto-widget-row moto-spacing-top-medium moto-spacing-right-auto moto-spacing-bottom-medium moto-spacing-left-auto  "
              data-grid-type="sm"
              data-widget="row"
              data-visible-on="+desktop,tablet,mobile-h,mobile-v"
              data-spacing="mama"
              style={{ backgroundPosition: "left top" }}
            >
              <div className="container-fluid">
                <div className="row" data-container="container">
                  <div
                    data-widget-id="wid_1595841927_jkrwtgbq7"
                    className="moto-widget moto-widget-row__column moto-cell  col-sm-6 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                    style={{ backgroundPosition: "left top" }}
                    data-widget="row.column"
                    data-container="container"
                    data-spacing="aaaa"
                  >
                    <div
                      data-widget-id="wid_1595841927_pync8qvne"
                      className="moto-widget moto-widget-text moto-preset-default  moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto  "
                      data-widget="text"
                      data-preset="default"
                      data-spacing="aaaa"
                      data-visible-on="+desktop,tablet,mobile-h,mobile-v"
                      data-animation=""
                    >
                      <div className="moto-widget-text-content moto-widget-text-editable">
                        <p className="moto-text_211">
                          Only during this week we offer you a
                          free of charge consultation. The offer
                          can be applied to absolutely any type
                          of pregnancy issue you might have!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    data-widget-id="wid_1595841927_s8yk2533l"
                    className="moto-widget moto-widget-row__column moto-cell  col-sm-6 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                    style={{ backgroundPosition: "left top" }}
                    data-widget="row.column"
                    data-container="container"
                    data-spacing="aaaa"
                  ></div>
                </div>
              </div>
            </div>
            <div
              data-widget-id="wid_1595841927_m39abk6yy"
              className="moto-widget moto-widget-button moto-preset-default moto-preset-provider-default moto-align-left moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto  "
              data-widget="button"
            >
              <a
                href="#"
                data-action="popup"
                data-popup-id={8}
                className="moto-widget-button-link moto-size-small moto-link"
              >
                <span className="fa moto-widget-theme-icon" />
                <span className="moto-widget-button-divider" />
                <span className="moto-widget-button-label">
                  Make an appointment&nbsp;
                </span>
              </a>
            </div>
            <div
              data-widget-id="wid_1595841927_5ua93h4yr"
              className="moto-widget moto-widget-spacer moto-preset-default moto-spacing-top-large moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto moto-visible-on_tablet_hidden moto-visible-on_mobile-h_hidden moto-visible-on_mobile-v_hidden"
              data-widget="spacer"
              data-preset="default"
              data-spacing="laaa"
              data-visible-on="+desktop"
            >
              <div
                className="moto-widget-spacer-block"
                style={{ height: 0 }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</div> */}
                  {/* <div
id="wid_1595842021_npa7vwnc1"
data-parent-id="wid_1595841006_s9ff8o2hk"
className="moto-widget moto-widget-content_slider__item moto-widget-row moto-widget_with-content-editor  row-fixed moto-disabling_row-fixed moto-entertainment__playing_disabled moto-before-in-viewport_content-invisible"
style={{
backgroundPosition: "top",
backgroundImage:
  "url(mt-demo/109600/109604/mt-content/uploads/2020/07/mt-2068_home_slider03.jpg)",
backgroundSize: "cover",
backgroundRepeat: "no-repeat"
}}
data-widget="content_slider.item"
data-preset=""
>
<div className="moto-widget__content-wrapper container-fluid">
<div className="moto-widget__content row">
  <div
    id="wid_1595842021_npa7vwnc1__content"
    className="moto-cell col-sm-12 moto-entertainment__animation_disabled moto-entertainment__animation_ignore-visibility"
  >
    <div
      data-widget-id="wid_1595842021_x52c8pbjk"
      className="moto-widget moto-widget-row moto-spacing-top-large moto-spacing-right-auto moto-spacing-bottom-large moto-spacing-left-auto  "
      data-grid-type="sm"
      data-widget="row"
      data-visible-on="+desktop,tablet,mobile-h,mobile-v"
      data-spacing="lala"
      style={{ backgroundPosition: "left top" }}
    >
      <div className="container-fluid">
        <div className="row" data-container="container">
          <div
            data-widget-id="wid_1595842021_lx5dkmsgw"
            className="moto-widget moto-widget-row__column moto-cell  col-sm-12 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
            style={{ backgroundPosition: "left top" }}
            data-widget="row.column"
            data-container="container"
            data-spacing="aaaa"
          >
            <div
              data-widget-id="wid_1595842021_n6twdsc71"
              className="moto-widget moto-widget-spacer moto-preset-default moto-spacing-top-large moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto moto-visible-on_tablet_hidden moto-visible-on_mobile-h_hidden moto-visible-on_mobile-v_hidden"
              data-widget="spacer"
              data-preset="default"
              data-spacing="laaa"
              data-visible-on="+desktop"
            >
              <div
                className="moto-widget-spacer-block"
                style={{ height: 0 }}
              />
            </div>
            <div
              data-widget-id="wid_1595842021_kj3z4k0vg"
              className="moto-widget moto-widget-text moto-preset-default  moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-medium moto-spacing-left-auto  "
              data-widget="text"
              data-preset="default"
              data-spacing="aama"
              data-visible-on="+desktop,tablet,mobile-h,mobile-v"
              data-animation=""
            >
              <div className="moto-widget-text-content moto-widget-text-editable">
                <p className="moto-text_system_5">
                  <span className="moto-color_custom3">
                    HAVE ACCESS TO
                  </span>
                </p>
                <p className="moto-text_system_3">A HEALTH</p>
                <p className="moto-text_system_3">
                  PROFESSIONAL
                </p>
                <p className="moto-text_system_4">
                  <span className="moto-color_custom3">
                    AT ANY TIME
                  </span>
                </p>
              </div>
            </div>
            <div
              data-widget-id="wid_1595842021_ju5ys6p8d"
              className="moto-widget moto-widget-button moto-preset-default moto-preset-provider-default moto-align-left moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto  "
              data-widget="button"
            >
              <a
                href="#"
                data-action="popup"
                data-popup-id={8}
                className="moto-widget-button-link moto-size-small moto-link"
              >
                <span className="fa moto-widget-theme-icon" />
                <span className="moto-widget-button-divider" />
                <span className="moto-widget-button-label">
                  Make an appointment&nbsp;
                </span>
              </a>
            </div>
            <div
              data-widget-id="wid_1595842021_8fugufps4"
              className="moto-widget moto-widget-spacer moto-preset-default moto-spacing-top-large moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto moto-visible-on_tablet_hidden moto-visible-on_mobile-h_hidden moto-visible-on_mobile-v_hidden"
              data-widget="spacer"
              data-preset="default"
              data-spacing="laaa"
              data-visible-on="+desktop"
            >
              <div
                className="moto-widget-spacer-block"
                style={{ height: 0 }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</div> */}
                </div>
              </div>
              <div
                className="moto-widget moto-widget-row row-fixed moto-spacing-top-large moto-spacing-right-auto moto-spacing-bottom-large moto-spacing-left-auto"
                data-grid-type="sm"
                data-widget="row"
                data-visible-on="-"
                data-spacing="lala"
                style={{}}
                data-bg-position="left top"
                data-draggable-disabled=""
              >
                <div className="col-lg-12">
                  <div className="container">
                    <div
                      class="card"
                      style={{
                        padding: "20PX",
                        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                      }}
                    >
                      <div class="card-body">
                        <h1 style={{ fontSize: "35px" }}>
                          BECOMING A PARENT THROUGH SURROGACY STARTS HERE
                        </h1>
                        <br />

                        <br />
                        <p
                          style={{
                            fontSize: "17PX",
                            marginTop: "10px",
                            fontWeight: 100,
                            wordSpacing: "2PX",
                          }}
                        >
                          If you think you are ready to become a parent, please
                          complete our intended parent application form below to
                          begin the journey to parenthood. An International
                          Surrogacy Center team member will reach out shortly
                          with additional information for qualified candidates.
                          <br /> <br />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="row" data-container="container">
                  <div
                    className="moto-widget moto-widget-row__column moto-cell col-sm-6 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                    style={{
                      backgroundImage:
                        "url(../mt-demo/109600/109604/mt-content/uploads/2020/07/GettyImages-629726342.jpg)",
                      backgroundPosition: "top",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }}
                    data-widget="row.column"
                    data-container="container"
                    data-spacing="aaaa"
                    data-bg-position="top"
                    // data-bg-image="2020/07/mt-2068_about_img01.jpg/index.html"
                  >
                    <div
                      data-widget-id="wid_1595850301_fy666dpim"
                      className="moto-widget moto-widget-spacer moto-preset-default moto-spacing-top-large moto-spacing-right-auto moto-spacing-bottom-large moto-spacing-left-auto "
                      data-widget="spacer"
                      data-preset="default"
                      data-spacing="lala"
                      data-visible-on="+desktop,tablet,mobile-h,mobile-v"
                    >
                      <div
                        className="moto-widget-spacer-block"
                        style={{ height: 200 }}
                      />
                    </div>
                  </div>
                  <div
                    className="moto-widget moto-widget-row__column moto-cell col-sm-6 moto-bg-color1_3 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                    style={{}}
                    data-widget="row.column"
                    data-container="container"
                    data-spacing="aaaa"
                    data-bg-position="left top"
                  >
                    <div
                      data-widget-id="wid_1595850266_7cfmprvop"
                      className="moto-widget moto-widget-spacer moto-preset-default moto-spacing-top-large moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto moto-visible-on_tablet_hidden moto-visible-on_mobile-h_hidden moto-visible-on_mobile-v_hidden"
                      data-widget="spacer"
                      data-preset="default"
                      data-spacing="laaa"
                      data-visible-on="+desktop"
                    >
                      <div
                        className="moto-widget-spacer-block"
                        style={{ height: 0 }}
                      />
                    </div>
                    <div
                      className="moto-widget moto-widget-row row-fixed moto-spacing-top-large moto-spacing-right-auto moto-spacing-bottom-large moto-spacing-left-auto"
                      data-grid-type="md"
                      data-widget="row"
                      data-visible-on="-"
                      data-spacing="lala"
                      style={{}}
                      data-bg-position="left top"
                      data-draggable-disabled=""
                    >
                      <div className="container-fluid">
                        <div className="row" data-container="container">
                          <div
                            className="moto-widget moto-widget-row__column moto-cell col-md-1 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                            style={{}}
                            data-widget="row.column"
                            data-container="container"
                            data-spacing="aaaa"
                            data-bg-position="left top"
                          ></div>
                          <div
                            className="moto-widget moto-widget-row__column moto-cell col-md-7 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                            style={{}}
                            data-widget="row.column"
                            data-container="container"
                            data-spacing="aaaa"
                            data-bg-position="left top"
                          >
                            <div
                              className="moto-widget moto-widget-text moto-preset-default moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                              data-widget="text"
                              data-preset="default"
                              data-spacing="aaaa"
                              data-visible-on="-"
                              data-animation=""
                              data-draggable-disabled=""
                            >
                              <div
                                className="moto-widget-text-content moto-widget-text-editable"
                                aria-multiline="true"
                              >
                                <h1 className="moto-text_system_7">
                                  SIGN UP TO BECOME PARENTS THROUGH SURROGACY
                                </h1>
                                <p className="moto-text_system_12">
                                  <br />
                                </p>
                                <p className="moto-text_system_12">
                                  <br />
                                </p>
                                <p
                                  className="moto-text_system_12"
                                  style={{
                                    fontSize: "17px",
                                    wordSpacing: "2px",
                                  }}
                                >
                                  Have you been thinking about what a good
                                  parent you would be? About how much love and
                                  support you have to give a child? About how
                                  much you really want to start or grow your
                                  family? At International Surrogacy Center
                                  (ISC), we help you understand the surrogacy
                                  process so you can make an informed decision.
                                  And when you decide to go ahead, we’re here to
                                  steer you through the exciting journey to
                                  parenthood.
                                  <br />
                                  <br />
                                  We get to know you and your desires so we can
                                  match you with the perfect surrogate and/or
                                  egg donor. We help you find the legal and
                                  medical professionals you need, and we assist
                                  you with managing and disbursing funds. ISC
                                  staff members make sure you are as involved as
                                  you wish in every step of the process — from
                                  finding a surrogate to learning the results of
                                  every medical appointment. We want you to feel
                                  comfortable with your decision and thoroughly
                                  enjoy the happiest time of your life!
                                  <br />
                                  <br />
                                </p>
                              </div>
                            </div>
                          </div>
                          <div
                            className="moto-widget moto-widget-row__column moto-cell col-md-4 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                            style={{}}
                            data-widget="row.column"
                            data-container="container"
                            data-spacing="aaaa"
                            data-bg-position="left top"
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-widget-id="wid_1595850285_6k6bymyhz"
                      className="moto-widget moto-widget-spacer moto-preset-default moto-spacing-top-large moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto moto-visible-on_tablet_hidden moto-visible-on_mobile-h_hidden moto-visible-on_mobile-v_hidden"
                      data-widget="spacer"
                      data-preset="default"
                      data-spacing="laaa"
                      data-visible-on="+desktop"
                    >
                      <div
                        className="moto-widget-spacer-block"
                        style={{ height: 0 }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div
className="moto-widget moto-widget-row row-fixed moto-bg-color1_3 moto-spacing-top-large moto-spacing-right-auto moto-spacing-bottom-large moto-spacing-left-auto"
data-grid-type="sm"
data-widget="row"
data-visible-on="-"
data-spacing="lala"
style={{}}
data-bg-position="left top"
>
<div className="container-fluid">
<div className="row" data-container="container">
<div
className="moto-widget moto-widget-row__column moto-cell col-sm-12 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
style={{}}
data-widget="row.column"
data-container="container"
data-spacing="aaaa"
data-bg-position="left top"
>
<div
className="moto-widget moto-widget-row moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
data-grid-type="sm"
data-widget="row"
data-visible-on="-"
data-spacing="aaaa"
style={{}}
data-bg-position="left top"
>
<div className="container-fluid">
  <div className="row" data-container="container">
    <div
      className="moto-widget moto-widget-row__column moto-cell col-sm-4 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
      style={{}}
      data-widget="row.column"
      data-container="container"
      data-spacing="aaaa"
      data-bg-position="left top"
    >
      <div
        className="moto-widget moto-widget-row row-gutter-0 moto-spacing-top-medium moto-spacing-right-auto moto-spacing-bottom-medium moto-spacing-left-auto"
        data-grid-type="xs"
        data-widget="row"
        data-visible-on="-"
        data-spacing="mama"
        style={{}}
        data-bg-position="left top"
      >
        <div className="container-fluid">
          <div className="row" data-container="container">
            <div
              className="moto-widget moto-widget-row__column moto-cell col-xs-6 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
              style={{}}
              data-widget="row.column"
              data-container="container"
              data-spacing="aaaa"
              data-bg-position="left top"
            >
              <div
                id="wid_1595938464_vzx4oy3bc"
                className="moto-widget moto-widget-counter moto-preset-default moto-align-right moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto  "
                data-widget="counter"
                data-moto-counter-options='{"countFrom":0,"countTo":58,"duration":3}'
              >
                <div className="moto-widget-counter__wrapper">
                  <span className="moto-widget-counter__value moto-text_206">
                    58
                  </span>
                </div>
              </div>
            </div>
            <div
              className="moto-widget moto-widget-row__column moto-cell col-xs-6 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
              style={{}}
              data-widget="row.column"
              data-container="container"
              data-spacing="aaaa"
              data-bg-position="left top"
            >
              <div
                className="moto-widget moto-widget-text moto-preset-default moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                data-widget="text"
                data-preset="default"
                data-spacing="aaaa"
                data-visible-on="-"
                data-animation=""
              >
                <div className="moto-widget-text-content moto-widget-text-editable">
                  <p className="moto-text_206">%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="moto-widget moto-widget-text moto-preset-default moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-medium moto-spacing-left-auto"
        data-widget="text"
        data-preset="default"
        data-spacing="aama"
        data-visible-on="-"
        data-animation=""
      >
        <div className="moto-widget-text-content moto-widget-text-editable">
          <p
            className="moto-text_system_12"
            style={{ textAlign: "center" }}
          >
            That's how much lower our prices are, compared to
            market's average
          </p>
        </div>
      </div>
    </div>
    <div
      className="moto-widget moto-widget-row__column moto-cell col-sm-4 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
      style={{}}
      data-widget="row.column"
      data-container="container"
      data-spacing="aaaa"
      data-bg-position="left top"
    >
      <div
        className="moto-widget moto-widget-row row-gutter-0 moto-spacing-top-medium moto-spacing-right-auto moto-spacing-bottom-medium moto-spacing-left-auto"
        data-grid-type="xs"
        data-widget="row"
        data-visible-on="-"
        data-spacing="mama"
        style={{}}
        data-bg-position="left top"
      >
        <div className="container-fluid">
          <div className="row" data-container="container">
            <div
              className="moto-widget moto-widget-row__column moto-cell col-xs-6 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
              style={{}}
              data-widget="row.column"
              data-container="container"
              data-spacing="aaaa"
              data-bg-position="left top"
            >
              <div
                id="wid_1595938528_y9wc8iqgz"
                className="moto-widget moto-widget-counter moto-preset-default moto-align-right moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto  "
                data-widget="counter"
                data-moto-counter-options='{"countFrom":0,"countTo":95,"duration":3}'
              >
                <div className="moto-widget-counter__wrapper">
                  <span className="moto-widget-counter__value moto-text_206">
                    95
                  </span>
                </div>
              </div>
            </div>
            <div
              className="moto-widget moto-widget-row__column moto-cell col-xs-6 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
              style={{}}
              data-widget="row.column"
              data-container="container"
              data-spacing="aaaa"
              data-bg-position="left top"
            >
              <div
                className="moto-widget moto-widget-text moto-preset-default moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                data-widget="text"
                data-preset="default"
                data-spacing="aaaa"
                data-visible-on="-"
                data-animation=""
              >
                <div className="moto-widget-text-content moto-widget-text-editable">
                  <p className="moto-text_206">%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="moto-widget moto-widget-text moto-preset-default moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-medium moto-spacing-left-auto"
        data-widget="text"
        data-preset="default"
        data-spacing="aama"
        data-visible-on="-"
        data-animation=""
      >
        <div className="moto-widget-text-content moto-widget-text-editable">
          <p
            className="moto-text_system_12"
            style={{ textAlign: "center" }}
          >
            Percentage of patients who were referred in by their
            friends
          </p>
        </div>
      </div>
    </div>
    <div
      className="moto-widget moto-widget-row__column moto-cell col-sm-4 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
      style={{}}
      data-widget="row.column"
      data-container="container"
      data-spacing="aaaa"
      data-bg-position="left top"
    >
      <div
        className="moto-widget moto-widget-row row-gutter-0 moto-spacing-top-medium moto-spacing-right-auto moto-spacing-bottom-medium moto-spacing-left-auto"
        data-grid-type="xs"
        data-widget="row"
        data-visible-on="-"
        data-spacing="mama"
        style={{}}
        data-bg-position="left top"
      >
        <div className="container-fluid">
          <div className="row" data-container="container">
            <div
              className="moto-widget moto-widget-row__column moto-cell col-xs-6 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
              style={{}}
              data-widget="row.column"
              data-container="container"
              data-spacing="aaaa"
              data-bg-position="left top"
            >
              <div
                id="wid_1595938540_s1zclpse5"
                className="moto-widget moto-widget-counter moto-preset-default moto-align-right moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto  "
                data-widget="counter"
                data-moto-counter-options='{"countFrom":0,"countTo":100,"duration":3}'
              >
                <div className="moto-widget-counter__wrapper">
                  <span className="moto-widget-counter__value moto-text_206">
                    100
                  </span>
                </div>
              </div>
            </div>
            <div
              className="moto-widget moto-widget-row__column moto-cell col-xs-6 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
              style={{}}
              data-widget="row.column"
              data-container="container"
              data-spacing="aaaa"
              data-bg-position="left top"
            >
              <div
                className="moto-widget moto-widget-text moto-preset-default moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                data-widget="text"
                data-preset="default"
                data-spacing="aaaa"
                data-visible-on="-"
                data-animation=""
              >
                <div className="moto-widget-text-content moto-widget-text-editable">
                  <p className="moto-text_206">%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="moto-widget moto-widget-text moto-preset-default moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-medium moto-spacing-left-auto"
        data-widget="text"
        data-preset="default"
        data-spacing="aama"
        data-visible-on="-"
        data-animation=""
        data-draggable-disabled=""
      >
        <div
          className="moto-widget-text-content moto-widget-text-editable"
          aria-multiline="true"
        >
          <p
            className="moto-text_system_12"
            style={{ textAlign: "center" }}
          >
            Pregnant women and their partners helped &amp;
            guided so far
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</div>
</div>
</div>
</div> */}
            <div
              className="moto-widget moto-widget-row row-fixed moto-spacing-top-large moto-spacing-right-auto moto-spacing-bottom-large moto-spacing-left-auto"
              data-grid-type="sm"
              data-widget="row"
              data-visible-on="-"
              data-spacing="lala"
              style={{}}
              data-bg-position="left top"
              data-draggable-disabled=""
            >
              <div className="container-fluid">
                <div className="row" data-container="container">
                  <div
                    className="moto-widget moto-widget-row__column moto-cell col-sm-12 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                    style={{}}
                    data-widget="row.column"
                    data-container="container"
                    data-spacing="aaaa"
                    data-bg-position="left top"
                  >
                    <div
                      data-widget-id="wid_1595851685_y79p8vdc5"
                      className="moto-widget moto-widget-spacer moto-preset-default moto-spacing-top-medium moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto moto-visible-on_tablet_hidden moto-visible-on_mobile-h_hidden moto-visible-on_mobile-v_hidden"
                      data-widget="spacer"
                      data-preset="default"
                      data-spacing="maaa"
                      data-visible-on="+desktop"
                    >
                      <div
                        className="moto-widget-spacer-block"
                        style={{ height: 20 }}
                      />
                    </div>
                    <div className="col-lg-12">
                      <div className="container">
                        <div
                          class="card"
                          style={{
                            padding: "20PX",
                            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                          }}
                        >
                          <div class="card-body">
                            <h1 style={{ fontSize: "35px" }}>
                              FOR OUR INTENDED PARENTS
                            </h1>
                            <br />
                        



                            <br />
                            <div className="col-lg-12">
                              <label style={{ fontSize: "20px" }}>
                                Parent 1 - First Name: *
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                value={Input1}
                                onChange={(e)=>setInput1(e.target.value)}
                                style={{ height: "45px" }}
                              />
                            </div>
                            <div className="col-lg-12">
                              <label style={{ fontSize: "20px" }}>
                                Parent 1 - Last Name: *
                              </label>
                              <input
                                type="text"
                                value={Input2}
                                onChange={(e)=>setInput2(e.target.value)}
                                className="form-control"
                                style={{ height: "45px" }}
                              />
                            </div>
                            <div className="col-lg-12">
                              <label style={{ fontSize: "20px" }}>
                                Parent 2 - First Name:
                              </label>
                              <input
                                type="text"
                                value={Input3}
                                onChange={(e)=>setInput3(e.target.value)}
                                className="form-control"
                                style={{ height: "45px" }}
                              />
                            </div>
                            <div className="col-lg-12">
                              <label style={{ fontSize: "20px" }}>
                                Parent 2 - Last Name:
                              </label>
                              <input
                                type="text"
                                value={Input4}
                                onChange={(e)=>setInput4(e.target.value)}
                                className="form-control"
                                style={{ height: "45px" }}
                              />
                            </div>
                            <div className="col-lg-12">
                              <label style={{ fontSize: "20px" }}>
                              clinic_name :
                              </label>
                              <input
                                type="text"
                                value={Input7}
                                onChange={(e)=>setInput7(e.target.value)}
                                className="form-control"
                                style={{ height: "45px" }}
                              />
                            </div>
                            <div className="col-lg-12">
                              <label style={{ fontSize: "20px" }}>
                                Phone :
                              </label>
                              <input
                                type="number"
                                minLength="10"
                                maxLength="15"
                                value={Input6}
                                onChange={(e)=>setInput6(e.target.value)}
                                className="form-control"
                                style={{ height: "45px" }}
                              />
                            </div>
                            <div className="col-lg-12">
                              <label style={{ fontSize: "20px" }}>
                                Country: *
                              </label>
                              {/* <input type='text' className='form-control'  style={{height:'45px'}}/> */}
                              <select
                              value={select1}
                              onChange={(e)=>Setselect1(e.target.value)}
                                className="form-control"
                                style={{ height: "45px", fontSize: "16px" }}
                              >
                                <option>—Please choose an option—</option>
                                <option value="Afghanistan">Afghanistan</option>
                                <option value="Åland Islands">
                                  Åland Islands
                                </option>
                                <option value="Albania">Albania</option>
                                <option value="Algeria">Algeria</option>
                                <option value="American Samoa">
                                  American Samoa
                                </option>
                                <option value="Andorra">Andorra</option>
                                <option value="Angola">Angola</option>
                                <option value="Anguilla">Anguilla</option>
                                <option value="Antarctica">Antarctica</option>
                                <option value="Antigua and Barbuda">
                                  Antigua and Barbuda
                                </option>
                                <option value="Argentina">Argentina</option>
                                <option value="Armenia">Armenia</option>
                                <option value="Aruba">Aruba</option>
                                <option value="Australia">Australia</option>
                                <option value="Austria">Austria</option>
                                <option value="Azerbaijan">Azerbaijan</option>
                                <option value="Bahamas">Bahamas</option>
                                <option value="Bahrain">Bahrain</option>
                                <option value="Bangladesh">Bangladesh</option>
                                <option value="Barbados">Barbados</option>
                                <option value="Belarus">Belarus</option>
                                <option value="Belgium">Belgium</option>
                                <option value="Belize">Belize</option>
                                <option value="Benin">Benin</option>
                                <option value="Bermuda">Bermuda</option>
                                <option value="Bhutan">Bhutan</option>
                                <option value="Bolivia">Bolivia</option>
                                <option value="Bosnia and Herzegovina">
                                  Bosnia and Herzegovina
                                </option>
                                <option value="Botswana">Botswana</option>
                                <option value="Bouvet Island">
                                  Bouvet Island
                                </option>
                                <option value="Brazil">Brazil</option>
                                <option value="British Indian Ocean Territory">
                                  British Indian Ocean Territory
                                </option>
                                <option value="Brunei Darussalam">
                                  Brunei Darussalam
                                </option>
                                <option value="Bulgaria">Bulgaria</option>
                                <option value="Burkina Faso">
                                  Burkina Faso
                                </option>
                                <option value="Burundi">Burundi</option>
                                <option value="Cambodia">Cambodia</option>
                                <option value="Cameroon">Cameroon</option>
                                <option value="Canada">Canada</option>
                                <option value="Cape Verde">Cape Verde</option>
                                <option value="Cayman Islands">
                                  Cayman Islands
                                </option>
                                <option value="Central African Republic">
                                  Central African Republic
                                </option>
                                <option value="Chad">Chad</option>
                                <option value="Chile">Chile</option>
                                <option value="China">China</option>
                                <option value="Christmas Island">
                                  Christmas Island
                                </option>
                                <option value="Cocos (Keeling) Islands">
                                  Cocos (Keeling) Islands
                                </option>
                                <option value="Colombia">Colombia</option>
                                <option value="Comoros">Comoros</option>
                                <option value="Congo">Congo</option>
                                <option value="Congo, The Democratic Republic of The">
                                  Congo, The Democratic Republic of The
                                </option>
                                <option value="Cook Islands">
                                  Cook Islands
                                </option>
                                <option value="Costa Rica">Costa Rica</option>
                                <option value="Cote D'ivoire">
                                  Cote D'ivoire
                                </option>
                                <option value="Croatia">Croatia</option>
                                <option value="Cuba">Cuba</option>
                                <option value="Cyprus">Cyprus</option>
                                <option value="Czech Republic">
                                  Czech Republic
                                </option>
                                <option value="Denmark">Denmark</option>
                                <option value="Djibouti">Djibouti</option>
                                <option value="Dominica">Dominica</option>
                                <option value="Dominican Republic">
                                  Dominican Republic
                                </option>
                                <option value="Ecuador">Ecuador</option>
                                <option value="Egypt">Egypt</option>
                                <option value="El Salvador">El Salvador</option>
                                <option value="Equatorial Guinea">
                                  Equatorial Guinea
                                </option>
                                <option value="Eritrea">Eritrea</option>
                                <option value="Estonia">Estonia</option>
                                <option value="Ethiopia">Ethiopia</option>
                                <option value="Falkland Islands (Malvinas)">
                                  Falkland Islands (Malvinas)
                                </option>
                                <option value="Faroe Islands">
                                  Faroe Islands
                                </option>
                                <option value="Fiji">Fiji</option>
                                <option value="Finland">Finland</option>
                                <option value="France">France</option>
                                <option value="French Guiana">
                                  French Guiana
                                </option>
                                <option value="French Polynesia">
                                  French Polynesia
                                </option>
                                <option value="French Southern Territories">
                                  French Southern Territories
                                </option>
                                <option value="Gabon">Gabon</option>
                                <option value="Gambia">Gambia</option>
                                <option value="Georgia">Georgia</option>
                                <option value="Germany">Germany</option>
                                <option value="Ghana">Ghana</option>
                                <option value="Gibraltar">Gibraltar</option>
                                <option value="Greece">Greece</option>
                                <option value="Greenland">Greenland</option>
                                <option value="Grenada">Grenada</option>
                                <option value="Guadeloupe">Guadeloupe</option>
                                <option value="Guam">Guam</option>
                                <option value="Guatemala">Guatemala</option>
                                <option value="Guernsey">Guernsey</option>
                                <option value="Guinea">Guinea</option>
                                <option value="Guinea-bissau">
                                  Guinea-bissau
                                </option>
                                <option value="Guyana">Guyana</option>
                                <option value="Haiti">Haiti</option>
                                <option value="Heard Island and Mcdonald Islands">
                                  Heard Island and Mcdonald Islands
                                </option>
                                <option value="Holy See (Vatican City State)">
                                  Holy See (Vatican City State)
                                </option>
                                <option value="Honduras">Honduras</option>
                                <option value="Hong Kong">Hong Kong</option>
                                <option value="Hungary">Hungary</option>
                                <option value="Iceland">Iceland</option>
                                <option value="India">India</option>
                                <option value="Indonesia">Indonesia</option>
                                <option value="Iran, Islamic Republic of">
                                  Iran, Islamic Republic of
                                </option>
                                <option value="Iraq">Iraq</option>
                                <option value="Ireland">Ireland</option>
                                <option value="Isle of Man">Isle of Man</option>
                                <option value="Israel">Israel</option>
                                <option value="Italy">Italy</option>
                                <option value="Jamaica">Jamaica</option>
                                <option value="Japan">Japan</option>
                                <option value="Jersey">Jersey</option>
                                <option value="Jordan">Jordan</option>
                                <option value="Kazakhstan">Kazakhstan</option>
                                <option value="Kenya">Kenya</option>
                                <option value="Kiribati">Kiribati</option>
                                <option value="Korea, Democratic People's Republic of">
                                  Korea, Democratic People's Republic of
                                </option>
                                <option value="Korea, Republic of">
                                  Korea, Republic of
                                </option>
                                <option value="Kuwait">Kuwait</option>
                                <option value="Kyrgyzstan">Kyrgyzstan</option>
                                <option value="Lao People's Democratic Republic">
                                  Lao People's Democratic Republic
                                </option>
                                <option value="Latvia">Latvia</option>
                                <option value="Lebanon">Lebanon</option>
                                <option value="Lesotho">Lesotho</option>
                                <option value="Liberia">Liberia</option>
                                <option value="Libyan Arab Jamahiriya">
                                  Libyan Arab Jamahiriya
                                </option>
                                <option value="Liechtenstein">
                                  Liechtenstein
                                </option>
                                <option value="Lithuania">Lithuania</option>
                                <option value="Luxembourg">Luxembourg</option>
                                <option value="Macao">Macao</option>
                                <option value="Macedonia, The Former Yugoslav Republic of">
                                  Macedonia, The Former Yugoslav Republic of
                                </option>
                                <option value="Madagascar">Madagascar</option>
                                <option value="Malawi">Malawi</option>
                                <option value="Malaysia">Malaysia</option>
                                <option value="Maldives">Maldives</option>
                                <option value="Mali">Mali</option>
                                <option value="Malta">Malta</option>
                                <option value="Marshall Islands">
                                  Marshall Islands
                                </option>
                                <option value="Martinique">Martinique</option>
                                <option value="Mauritania">Mauritania</option>
                                <option value="Mauritius">Mauritius</option>
                                <option value="Mayotte">Mayotte</option>
                                <option value="Mexico">Mexico</option>
                                <option value="Micronesia, Federated States of">
                                  Micronesia, Federated States of
                                </option>
                                <option value="Moldova, Republic of">
                                  Moldova, Republic of
                                </option>
                                <option value="Monaco">Monaco</option>
                                <option value="Mongolia">Mongolia</option>
                                <option value="Montenegro">Montenegro</option>
                                <option value="Montserrat">Montserrat</option>
                                <option value="Morocco">Morocco</option>
                                <option value="Mozambique">Mozambique</option>
                                <option value="Myanmar">Myanmar</option>
                                <option value="Namibia">Namibia</option>
                                <option value="Nauru">Nauru</option>
                                <option value="Nepal">Nepal</option>
                                <option value="Netherlands">Netherlands</option>
                                <option value="Netherlands Antilles">
                                  Netherlands Antilles
                                </option>
                                <option value="New Caledonia">
                                  New Caledonia
                                </option>
                                <option value="New Zealand">New Zealand</option>
                                <option value="Nicaragua">Nicaragua</option>
                                <option value="Niger">Niger</option>
                                <option value="Nigeria">Nigeria</option>
                                <option value="Niue">Niue</option>
                                <option value="Norfolk Island">
                                  Norfolk Island
                                </option>
                                <option value="Northern Mariana Islands">
                                  Northern Mariana Islands
                                </option>
                                <option value="Norway">Norway</option>
                                <option value="Oman">Oman</option>
                                <option value="Pakistan">Pakistan</option>
                                <option value="Palau">Palau</option>
                                <option value="Palestinian Territory, Occupied">
                                  Palestinian Territory, Occupied
                                </option>
                                <option value="Panama">Panama</option>
                                <option value="Papua New Guinea">
                                  Papua New Guinea
                                </option>
                                <option value="Paraguay">Paraguay</option>
                                <option value="Peru">Peru</option>
                                <option value="Philippines">Philippines</option>
                                <option value="Pitcairn">Pitcairn</option>
                                <option value="Poland">Poland</option>
                                <option value="Portugal">Portugal</option>
                                <option value="Puerto Rico">Puerto Rico</option>
                                <option value="Qatar">Qatar</option>
                                <option value="Reunion">Reunion</option>
                                <option value="Romania">Romania</option>
                                <option value="Russian Federation">
                                  Russian Federation
                                </option>
                                <option value="Rwanda">Rwanda</option>
                                <option value="Saint Helena">
                                  Saint Helena
                                </option>
                                <option value="Saint Kitts and Nevis">
                                  Saint Kitts and Nevis
                                </option>
                                <option value="Saint Lucia">Saint Lucia</option>
                                <option value="Saint Pierre and Miquelon">
                                  Saint Pierre and Miquelon
                                </option>
                                <option value="Saint Vincent and The Grenadines">
                                  Saint Vincent and The Grenadines
                                </option>
                                <option value="Samoa">Samoa</option>
                                <option value="San Marino">San Marino</option>
                                <option value="Sao Tome and Principe">
                                  Sao Tome and Principe
                                </option>
                                <option value="Saudi Arabia">
                                  Saudi Arabia
                                </option>
                                <option value="Senegal">Senegal</option>
                                <option value="Serbia">Serbia</option>
                                <option value="Seychelles">Seychelles</option>
                                <option value="Sierra Leone">
                                  Sierra Leone
                                </option>
                                <option value="Singapore">Singapore</option>
                                <option value="Slovakia">Slovakia</option>
                                <option value="Slovenia">Slovenia</option>
                                <option value="Solomon Islands">
                                  Solomon Islands
                                </option>
                                <option value="Somalia">Somalia</option>
                                <option value="South Africa">
                                  South Africa
                                </option>
                                <option value="South Georgia and The South Sandwich Islands">
                                  South Georgia and The South Sandwich Islands
                                </option>
                                <option value="Spain">Spain</option>
                                <option value="Sri Lanka">Sri Lanka</option>
                                <option value="Sudan">Sudan</option>
                                <option value="Suriname">Suriname</option>
                                <option value="Svalbard and Jan Mayen">
                                  Svalbard and Jan Mayen
                                </option>
                                <option value="Swaziland">Swaziland</option>
                                <option value="Sweden">Sweden</option>
                                <option value="Switzerland">Switzerland</option>
                                <option value="Syrian Arab Republic">
                                  Syrian Arab Republic
                                </option>
                                <option value="Taiwan">Taiwan</option>
                                <option value="Tajikistan">Tajikistan</option>
                                <option value="Tanzania, United Republic of">
                                  Tanzania, United Republic of
                                </option>
                                <option value="Thailand">Thailand</option>
                                <option value="Timor-leste">Timor-leste</option>
                                <option value="Togo">Togo</option>
                                <option value="Tokelau">Tokelau</option>
                                <option value="Tonga">Tonga</option>
                                <option value="Trinidad and Tobago">
                                  Trinidad and Tobago
                                </option>
                                <option value="Tunisia">Tunisia</option>
                                <option value="Turkey">Turkey</option>
                                <option value="Turkmenistan">
                                  Turkmenistan
                                </option>
                                <option value="Turks and Caicos Islands">
                                  Turks and Caicos Islands
                                </option>
                                <option value="Tuvalu">Tuvalu</option>
                                <option value="Uganda">Uganda</option>
                                <option value="Ukraine">Ukraine</option>
                                <option value="United Arab Emirates">
                                  United Arab Emirates
                                </option>
                                <option value="United Kingdom">
                                  United Kingdom
                                </option>
                                <option value="United States">
                                  United States
                                </option>
                                <option value="United States Minor Outlying Islands">
                                  United States Minor Outlying Islands
                                </option>
                                <option value="Uruguay">Uruguay</option>
                                <option value="Uzbekistan">Uzbekistan</option>
                                <option value="Vanuatu">Vanuatu</option>
                                <option value="Venezuela">Venezuela</option>
                                <option value="Viet Nam">Viet Nam</option>
                                <option value="Virgin Islands, British">
                                  Virgin Islands, British
                                </option>
                                <option value="Virgin Islands, U.S.">
                                  Virgin Islands, U.S.
                                </option>
                                <option value="Wallis and Futuna">
                                  Wallis and Futuna
                                </option>
                                <option value="Western Sahara">
                                  Western Sahara
                                </option>
                                <option value="Yemen">Yemen</option>
                                <option value="Zambia">Zambia</option>
                                <option value="Zimbabwe">Zimbabwe</option>
                              </select>
                            </div>
                            <div className="col-lg-12">
                              <label style={{ fontSize: "20px" }}>
                                Email: *
                              </label>
                              <input
                                type="email"
                                value={Input5}
                              onChange={(e)=>setInput5(e.target.value)}
                                className="form-control"
                                style={{ height: "45px" }}
                              />
                            </div>
                            <div className="col-lg-12">
                              <label style={{ fontSize: "20px" }}>
                                Embryos Status: *
                              </label>

                              <select
                              value={select2}
                              onChange={(e)=>Setselect2(e.target.value)}
                                className="form-control"
                                style={{ height: "45px", fontSize: "16px" }}
                              >
                                <option>Have embryos ready</option>
                                <option>
                                  Actively in the process of creating embryos
                                </option>
                                <option>Looking for an egg donor</option>
                              </select>
                            </div>
                            <div className="col-lg-12">
                              <label style={{ fontSize: "20px" }}>
                                Are you currently working with an IVF clinic: *
                              </label>

                              <select
                              value={select3}
                              onChange={(e)=>Setselect3(e.target.value)}
                                className="form-control"
                                style={{ height: "45px", fontSize: "16px" }}
                              >
                                <option>Yes</option>
                                <option>No</option>
                                {/* <option>Looking for an egg donor</option> */}
                              </select>
                            </div>
                            <div className="col-lg-12">
                              <label style={{ fontSize: "20px" }}>
                              Referred detail: *
                              </label>

                              <select
                              value={select4}
                              onChange={(e)=>Setselect4(e.target.value)}
                                className="form-control"
                                style={{ height: "45px", fontSize: "16px" }}
                              >
                                <option>New to surrogacy and would like more info on the process</option>
                                <option>Ready to move forward and evaluating agencies</option>
                                {/* <option>Looking for an egg donor</option> */}
                              </select>
                            </div>
                            <div className="col-lg-12">
                              <label style={{ fontSize: "20px" }}>
                                Were you referred by someone?: *
                              </label>

                              <select
                              value={select5}
                              onChange={(e)=>Setselect5(e.target.value)}
                                className="form-control"
                                style={{ height: "45px", fontSize: "16px" }}
                              >
                                <option>Yes</option>
                                <option>No</option>
                                {/* <option>Looking for an egg donor</option> */}
                              </select>
                            </div>
                            <div
                              className="col-lg-12"
                              style={{ marginTop: "10px" }}
                            >
                              <button
                                className="btn btn-info"
                                style={{
                                  width: "150px",
                                  height: "46px",
                                  fontSize: "12px",
                                  border: "none",
                                  boxShadow:
                                    "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
                                }}
                                onClick={onSubmit}
                              >
                                {     loader ? <Spinner animation="border"  /> : "Submit"
 }
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <div
className="moto-widget moto-widget-text moto-preset-default moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
data-widget="text"
data-preset="default"
data-spacing="aaaa"
data-visible-on="-"
data-animation=""
data-draggable-disabled=""
>
<div
  className="moto-widget-text-content moto-widget-text-editable"
  aria-multiline="true"
>
  <p className="moto-text_system_14">
    <span className="moto-color_custom1">
      <span className="fa"></span>
    </span>
  </p>
  <p className="moto-text_207" style={{ textAlign: "center" }}>
    – &nbsp;A baby fills a place in your heart that you never
    knew was empty.
  </p>
  <p className="moto-text_207" style={{ textAlign: "center" }}>
    <br />
  </p>
  <p className="moto-text_207" style={{ textAlign: "center" }}>
    <br />
  </p>
  <p className="moto-text_207" style={{ textAlign: "center" }}>
    – &nbsp;Mahatma Gandhi
  </p>
</div>
</div>
<div
data-widget-id="wid_1595851658_jnqr2ubmm"
className="moto-widget moto-widget-spacer moto-preset-default moto-spacing-top-medium moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto moto-visible-on_tablet_hidden moto-visible-on_mobile-h_hidden moto-visible-on_mobile-v_hidden"
data-widget="spacer"
data-preset="default"
data-spacing="maaa"
data-visible-on="+desktop"
>
<div
  className="moto-widget-spacer-block"
  style={{ height: 20 }}
/>
</div> */}
                  </div>
                </div>
              </div>
            </div>
            {/* <div
            className="moto-widget moto-widget-row row-fixed moto-bg-color1_3 moto-spacing-top-large moto-spacing-right-auto moto-spacing-bottom-large moto-spacing-left-auto"
            data-grid-type="sm"
            data-widget="row"
            data-visible-on="-"
            data-spacing="lala"
            style={{}}
            data-bg-position="left top"
        >
            <div className="container-fluid">
                <div className="row" data-container="container">
                    <div
                        className="moto-widget moto-widget-row__column moto-cell col-sm-1 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                        style={{}}
                        data-widget="row.column"
                        data-container="container"
                        data-spacing="aaaa"
                        data-bg-position="left top"
                    ></div>
                    <div
                        className="moto-widget moto-widget-row__column moto-cell col-sm-10 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                        style={{}}
                        data-widget="row.column"
                        data-container="container"
                        data-spacing="aaaa"
                        data-bg-position="left top"
                    >
                        <div
                            data-widget-id="wid_1595852193_dzprmkpuf"
                            className="moto-widget moto-widget-spacer moto-preset-default moto-spacing-top-large moto-spacing-right-auto moto-spacing-bottom-medium moto-spacing-left-auto moto-visible-on_tablet_hidden moto-visible-on_mobile-h_hidden moto-visible-on_mobile-v_hidden"
                            data-widget="spacer"
                            data-preset="default"
                            data-spacing="lama"
                            data-visible-on="+desktop"
                        >
                            <div
                                className="moto-widget-spacer-block"
                                style={{ height: 10 }}
                            />
                        </div>
                        <div
                            className="moto-widget moto-widget-text moto-preset-default moto-spacing-top-auto moto-spacing-right-medium moto-spacing-bottom-medium moto-spacing-left-medium"
                            data-widget="text"
                            data-preset="default"
                            data-spacing="ammm"
                            data-visible-on="-"
                            data-animation=""
                            data-draggable-disabled=""
                        >
                            <div
                                className="moto-widget-text-content moto-widget-text-editable"
                                aria-multiline="true"
                            >
                                <p
                                    className="moto-text_system_13"
                                    style={{ textAlign: "center" }}
                                >
                                    <span className="moto-color5_5">
                                        WE'RE HIRING NEW INTERNS AND QUALIFIED MEDICAL PEOPLE ALL
                                        YEAR LONG. IF YOU JUST RECENTLY GRADUATED FROM A MEDICAL
                                        SCHOOL OR WANT TO SWITCH YOUR CURRENT POSITION FOR A WORK
                                        AT OUR CLINIC, GET IN TOUCH WITH US!
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div
                            data-widget-id="wid_1595852077_4dlxle5lo"
                            className="moto-widget moto-widget-spacer moto-preset-default moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto moto-visible-on_tablet_hidden moto-visible-on_mobile-h_hidden moto-visible-on_mobile-v_hidden"
                            data-widget="spacer"
                            data-preset="default"
                            data-spacing="aaaa"
                            data-visible-on="+desktop"
                        >
                            <div
                                className="moto-widget-spacer-block"
                                style={{ height: 35 }}
                            />
                        </div>
                        <div
                            data-widget-id="wid_1595851814_q8d9io2m7"
                            className="moto-widget moto-widget-button moto-preset-5 moto-preset-provider-default moto-align-center moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto  "
                            data-widget="button"
                        >
                            <a
                                href="../our-team/index.html"
                                data-action="page"
                                className="moto-widget-button-link moto-size-large moto-link"
                            >
                                <span className="fa moto-widget-theme-icon" />
                                <span className="moto-widget-button-divider" />
                                <span className="moto-widget-button-label">Careers</span>
                            </a>
                        </div>
                        <div
                            data-widget-id="wid_1595852205_fsdg3w23a"
                            className="moto-widget moto-widget-spacer moto-preset-default moto-spacing-top-large moto-spacing-right-auto moto-spacing-bottom-medium moto-spacing-left-auto moto-visible-on_tablet_hidden moto-visible-on_mobile-h_hidden moto-visible-on_mobile-v_hidden"
                            data-widget="spacer"
                            data-preset="default"
                            data-spacing="lama"
                            data-visible-on="+desktop"
                        >
                            <div
                                className="moto-widget-spacer-block"
                                style={{ height: 10 }}
                            />
                        </div>
                    </div>
                    <div
                        className="moto-widget moto-widget-row__column moto-cell col-sm-1 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                        style={{}}
                        data-widget="row.column"
                        data-container="container"
                        data-spacing="aaaa"
                        data-bg-position="left top"
                    ></div>
                </div>
            </div>
        </div> */}
            {/* <div
            className="moto-widget moto-widget-row row-fixed moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
            data-grid-type="md"
            data-widget="row"
            data-visible-on="-"
            data-spacing="aaaa"
            style={{
                backgroundImage:
                    "url(../mt-demo/109600/109604/mt-content/uploads/2020/07/mt-2068_about_bg01.jpg)",
                backgroundPosition: "top",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            }}
            data-bg-position="top"
            data-bg-image="2020/07/mt-2068_about_bg01.jpg"
            data-draggable-disabled=""
        >
            <div className="container-fluid">
                <div className="row" data-container="container">
                    <div
                        className="moto-widget moto-widget-row__column moto-cell col-md-5 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                        style={{}}
                        data-widget="row.column"
                        data-container="container"
                        data-spacing="aaaa"
                        data-bg-position="left top"
                    ></div>
                    <div
                        className="moto-widget moto-widget-row__column moto-cell col-md-7 moto-spacing-top-large moto-spacing-right-auto moto-spacing-bottom-large moto-spacing-left-auto"
                        style={{ backgroundColor: "rgba(255, 255, 255, 0.7)" }}
                        data-widget="row.column"
                        data-container="container"
                        data-spacing="lala"
                        data-bg-position="left top"
                    >
                        <div
                            className="moto-widget moto-widget-text moto-preset-default moto-spacing-top-small moto-spacing-right-auto moto-spacing-bottom-small moto-spacing-left-auto"
                            data-widget="text"
                            data-preset="default"
                            data-spacing="sasa"
                            data-visible-on="-"
                            data-animation=""
                            data-draggable-disabled=""
                        >
                            <div
                                className="moto-widget-text-content moto-widget-text-editable"
                                aria-multiline="true"
                            >
                                <h2 className="moto-text_system_7">
                                    <span style={{ color: "#228cf7" }}>FREQUENTLY</span>
                                    <span className="moto-color_custom5">
                                        &nbsp;ASKED QUESTIONS
                                    </span>
                                </h2>
                                <p className="moto-text_normal">
                                    <br />
                                </p>
                                <p className="moto-text_system_7">
                                    <br />
                                </p>
                                <h3 className="moto-text_system_13">
                                    <span style={{ color: "#228cf7" }}>Q:</span>&nbsp;WHAT ARE
                                    THE ADVANTAGES OF PURCHASING A WEBSITE TEMPLATE?
                                </h3>
                                <p className="moto-text_normal">
                                    <br />
                                </p>
                                <p className="moto-text_normal">
                                    The major advantage is price: You get a high quality design
                                    for just $20-$70. You don’t have to hire a web designer or
                                    web design studio. Second advantage is time frame: It
                                    usually takes 5-15 days for a good designer to produce a web
                                    page of such quality.
                                </p>
                                <p className="moto-text_normal">
                                    <br />
                                </p>
                                <p className="moto-text_normal">
                                    Do you provide any scripts with your templates or could you
                                    do some custom programming?
                                </p>
                                <p className="moto-text_normal">
                                    <br />
                                </p>
                                <p className="moto-text_normal">
                                    Our templates do not include any additional scripts.
                                    Newsletter subscriptions, search fields, forums, image
                                    galleries (in HTML versions of Flash products) are inactive.
                                    Basic scripts can be easily added at www.TemplateTuning.com
                                    If you are not sure that the element you’re interested in is
                                    active please contact our Support Chat for clarification.
                                </p>
                                <p className="moto-text_normal">
                                    <br />
                                </p>
                                <p className="moto-text_normal">
                                    <br />
                                </p>
                                <h3 className="moto-text_system_13">
                                    <span style={{ color: "#228cf7" }}>Q:</span>&nbsp;WHAT DO I
                                    RECEIVE WHEN I ORDER A TEMPLATE FROM TEMPLATE.COM?
                                </h3>
                                <p className="moto-text_normal">
                                    <br />
                                </p>
                                <p className="moto-text_normal">
                                    After you complete the payment via our secure form you will
                                    receive the instructions for downloading the product. The
                                    source files in the download package can vary based on the
                                    type of the product you have purchased.
                                </p>
                                <p className="moto-text_normal">
                                    If you need unzipping software to open the .zip archive,
                                    Windows users may visit www.HotScripts.com or
                                    www.WinZip.com, Mac users may visit www.StuffIt.com.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
          </section>
        </div>
        <Footer />
        {/* <footer
id="section-footer"
className="footer moto-section"
data-widget="section"
data-container="section"
data-moto-sticky="{mode:'smallHeight', direction:'bottom', mobile: 0}"
>
<div
className="moto-widget moto-widget-row row-fixed moto-justify-content_center moto-bg-color_custom3 moto-spacing-top-medium moto-spacing-right-auto moto-spacing-bottom-medium moto-spacing-left-auto"
data-grid-type="sm"
data-widget="row"
data-visible-on="-"
data-spacing="mama"
style={{}}
data-bg-position="left top"
data-draggable-disabled=""
>
<div className="container-fluid">
<div className="row" data-container="container">
<div
className="moto-widget moto-widget-row__column moto-cell col-sm-6 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
style={{}}
data-widget="row.column"
data-container="container"
data-spacing="aaaa"
data-bg-position="left top"
>
<div
className="moto-widget moto-widget-text moto-preset-default moto-spacing-top-small moto-spacing-right-auto moto-spacing-bottom-small moto-spacing-left-auto"
data-widget="text"
data-preset="default"
data-spacing="sasa"
data-visible-on="-"
data-animation=""
data-draggable-disabled=""
>
<div
className="moto-widget-text-content moto-widget-text-editable"
aria-multiline="true"
>
<p className="moto-text_system_10">
  2020&nbsp;© ItsaGirl. All rights reserved. &nbsp;| &nbsp;
  <a
    target="_self"
    href="../privacy-policy/index.html"
    data-action="page"
    data-id={18}
    className="moto-link"
  >
    Privacy Policy
  </a>
</p>
</div>
</div>
</div>
<div
className="moto-widget moto-widget-row__column moto-cell col-sm-6 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
style={{}}
data-widget="row.column"
data-container="container"
data-spacing="aaaa"
data-bg-position="left top"
>
<div
id="wid_1595840854_kjd4m8lxl"
data-widget-id="wid_1595840854_kjd4m8lxl"
className="moto-widget moto-widget-social-links-extended moto-preset-2 moto-align-right moto-align-center_mobile-h moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto  "
data-widget="social_links_extended"
data-preset={2}
>
<ul className="moto-widget-social-links-extended__list">
<li className="moto-widget-social-links-extended__item moto-widget-social-links-extended__item-1">
  <a
    href="#"
    className="moto-widget-social-links-extended__link"
    target="_self"
  >
    <span className="moto-widget-social-links-extended__icon fa">
      
    </span>
  </a>
</li>
<li className="moto-widget-social-links-extended__item moto-widget-social-links-extended__item-2">
  <a
    href="#"
    className="moto-widget-social-links-extended__link"
    target="_self"
  >
    <span className="moto-widget-social-links-extended__icon fa">
      
    </span>
  </a>
</li>
<li className="moto-widget-social-links-extended__item moto-widget-social-links-extended__item-3">
  <a
    href="#"
    className="moto-widget-social-links-extended__link"
    target="_self"
  >
    <span className="moto-widget-social-links-extended__icon fa">
      
    </span>
  </a>
</li>
<li className="moto-widget-social-links-extended__item moto-widget-social-links-extended__item-4">
  <a
    href="#"
    className="moto-widget-social-links-extended__link"
    target="_self"
  >
    <span className="moto-widget-social-links-extended__icon fa">
      
    </span>
  </a>
</li>
</ul>
<style
type="text/css"
dangerouslySetInnerHTML={{
  __html:
    "\n                                                        "
}}
/>
</div>
</div>
</div>
</div>
</div>
</footer> */}
        {/* <div data-moto-back-to-top-button="" className="moto-back-to-top-button">
    <a ng-click="toTop($event)" className="moto-back-to-top-button-link">
        <span className="moto-back-to-top-button-icon fa" />
    </a>
</div>
<div
    data-moto-widget-callback=""
    className="moto-widget-callback moto-widget-callback_closed moto-preset-default"
>
    <div className="moto-widget-callback__wrapper">
        <div className="moto-widget-callback__open-button moto-widget-callback__thumbnail-wrapper moto-widget-callback__thumbnail-wrapper_icon">
            <div className="moto-widget-callback__overlay moto-widget-callback__overlay_open-button" />
            <div className="moto-widget-callback__thumbnail moto-widget-callback__thumbnail_icon fa fa-fw fa-phone" />
        </div>
        <div
            className="moto-widget-callback__body moto-widget-callback__body_more-details-enabled"
            style={{ display: "none" }}
        >
            <div className="moto-widget-callback__agent moto-widget-callback__thumbnail-wrapper moto-widget-callback__thumbnail-wrapper_image">
                <div
                    className="moto-widget-callback__thumbnail moto-widget-callback__thumbnail_image"
                    style={{
                        backgroundImage:
                            "url(../mt-demo/109600/109604/mt-content/uploads/2020/07/mt-2068_doctors_team02.jpg)"
                    }}
                />
            </div>
            <div className="moto-widget-callback__description moto-widget-text">
                <p className="moto-text_system_8" style={{ textAlign: "center" }}>
                    John Smith
                </p>
                <p className="moto-text_normal" style={{ textAlign: "center" }}>
                    <span className="moto-color1_3">agent</span>
                </p>
                <p className="moto-text_normal" style={{ textAlign: "center" }}>
                    &nbsp;
                </p>
                <p className="moto-text_220" style={{ textAlign: "center" }}>
                    <a
                        className="moto-link"
                        data-action="call"
                        href="tel:+112233445566"
                    >
                        <span className="fa"></span> +112233445566
                    </a>
                </p>{" "}
            </div>
            <div className="moto-widget-callback__more-details-wrapper">
                <hr className="moto-widget-callback__more-details-divider" />
                <div className="moto-widget-callback__more-details">
                    <div className="moto-widget-callback__more-details-item">
                        <div className="moto-widget-callback__overlay moto-widget-callback__overlay_link" />
                        <a
                            href="../../t.me/index.html#"
                            className="moto-widget-callback__link moto-widget-callback__link-telegram_chat"
                            title="Telegram"
                            target="_blank"
                        />
                    </div>
                    <div className="moto-widget-callback__more-details-item">
                        <div className="moto-widget-callback__overlay moto-widget-callback__overlay_link" />
                        <a
                            href="../../wa.me/index.html#"
                            className="moto-widget-callback__link moto-widget-callback__link-whatsapp_chat"
                            title="WhatsApp"
                            target="_blank"
                        />
                    </div>
                    <div className="moto-widget-callback__more-details-item">
                        <div className="moto-widget-callback__overlay moto-widget-callback__overlay_link" />
                        <a
                            href="viber://pa/info?uri=#"
                            className="moto-widget-callback__link moto-widget-callback__link-viber_public_account"
                            title="Viber"
                            target="_blank"
                        />
                    </div>
                    <div className="moto-widget-callback__more-details-item">
                        <div className="moto-widget-callback__overlay moto-widget-callback__overlay_link" />
                        <a
                            href="skype:#?call"
                            className="moto-widget-callback__link moto-widget-callback__link-skype_call"
                            title="Skype (Call)"
                            target="_blank"
                        />
                    </div>
                </div>
            </div>
            <div className="moto-widget-callback__more-details-button-wrapper">
                <i className="moto-widget-callback__more-details-button fa fa-angle-down" />
            </div>
            <div className="moto-widget-callback__close-button fa fa-times" />
        </div>
    </div>
</div> */}
      </body>
    </>
  );
};

export default Parentform;
