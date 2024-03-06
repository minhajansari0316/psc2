import {useState, useEffect} from 'react'
import Header from '../compunet/Header'
import Footer from '../compunet/Footer'
import { Link } from 'react-router-dom'
import BaseUrl from "../baseurl/BaseUrl";
// import { PostApiWithOutToken } from "../Helper/helper";
import { getApiWithToken } from "../Helper/helper";



const Home = () => {
  useEffect(() => {
    
    window.scrollTo(0, 0);
  
    getData(); // Assuming getData is a function defined outside useEffect
    // getDatas();
    // statusll("pending")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [userData,] = useState(localStorage.getItem("token"));
  const [datas, setdatas] = useState()
  const getData = () => {
    // setLoader(true)
    getApiWithToken(`${BaseUrl.baseUrl}home`, "", userData)
      .then(({ data }) => {
        console.log("minhaj", data?.home);
        setdatas(data?.home)

        // setfirst_detail(data.home?.first_detail)
        // setsecond_detail(data.home?.second_detail)
        // setthird_detail(data.home?.third_detail)
        // setfour_detail(data.home?.four_detail)
        // setfifth_detail(data.home?.fifth_detail)
         
        
        // setLoader(false)
      })
      .catch((err) => {
        console.log("err---------", err);
      });
  };
  return (
    <>
      <body className="moto-background moto-website_live">
        <div className="page">
          <Header />
          <section
            id="section-content"
            className="content page-1 moto-section"
            data-widget="section"
            data-container="section"
          >
            <div
              id="wid_1595841006_s9ff8o2hk"
              className="moto-widget moto-widget-content_slider moto-widget_interactive moto-preset-default moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto   moto-widget-content_slider-controls-visible-on_tablet_hidden moto-widget-content_slider-controls-visible-on_mobile-h_hidden moto-widget-content_slider-controls-visible-on_mobile-v_hidden moto-widget__state_loading"
              data-widget="content_slider"
              data-preset="default"
              data-moto-content-slider='{"preferences":{"startAnimation":"onArriving"},"options":{"auto":true,"pause":3000,"mode":"fade","controls":true,"pager":false,"autoControls":false}}'
            >
              <div
                id="wid_1595841006_s9ff8o2hk__loader"
                className=""
              >
                <div className="moto-widget-loader__indicator" />
              </div>
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
                        "url(mt-demo/109600/109604/mt-content/uploads/2020/07/mt-2068_home_slider01.jpg)",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat"
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
                                      <p className="moto-text_system_5">
                                      We possess a selection
                                      </p>
                                      <h1 className="moto-text_system_3">
                                      from your reputable 
                                      </h1>
                                      <p className="moto-text_system_4">
                                      surrogacy agency
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
                                      <div className="row" data-container="container">
                                        <div
                                          data-widget-id="wid_1595841737_64k6q85ws"
                                          className="moto-widget moto-widget-row__column moto-cell  col-sm-7 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                                          style={{ backgroundPosition: "left top" }}
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
                                            <div className="moto-widget-text-content moto-widget-text-editable">
                                              <p className="moto-text_211">
                                              {datas?.first_detail}
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          data-widget-id="wid_1595841739_yync027fc"
                                          className="moto-widget moto-widget-row__column moto-cell  col-sm-5 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                                          style={{ backgroundPosition: "left top" }}
                                          data-widget="row.column"
                                          data-container="container"
                                          data-spacing="aaaa"
                                        ></div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    data-widget-id="wid_1595841278_2xqb0ppjw"
                                    className="moto-widget moto-widget-button moto-preset-default moto-preset-provider-default moto-align-left moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto  "
                                    data-widget="button"
                                  >
                                    <Link to="/"
                                      // href="#"
                                      // data-action="popup"
                                      // data-popup-id={8}
                                      className="moto-widget-button-link moto-size-small moto-link"
                                    >
                                      <span className="fa moto-widget-theme-icon" />
                                      <span className="moto-widget-button-divider" />
                                      <span className="moto-widget-button-label">
                                        Make an appointment&nbsp;
                                      </span>
                                    </Link>
                                  </div>
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
            </div>
            <div
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
                        <h2
                          style={{ textAlign: "center" }}
                          className="moto-text_system_7"
                        >
                          Surrogacy is difficult, but we're here to assist!
                        </h2>
                      </div>
                    </div>
                    <div
                      className="moto-widget moto-widget-row moto-spacing-top-medium moto-spacing-right-auto moto-spacing-bottom-medium moto-spacing-left-auto"
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
                              className="moto-widget moto-widget-text moto-preset-default moto-spacing-top-auto moto-spacing-right-medium moto-spacing-bottom-auto moto-spacing-left-medium"
                              data-widget="text"
                              data-preset="default"
                              data-spacing="amam"
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
                                 {datas?.second_detail}
                                </p>
                              </div>
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
                    </div>
                    <div
                      data-widget-id="wid_1595842332_a3x3ot5ag"
                      className="moto-widget moto-widget-button moto-preset-2 moto-preset-provider-default moto-align-center moto-spacing-top-small moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto  "
                      data-widget="button"
                    >
                      <Link to="/"
                        href="/"
                        data-action="page"
                        className="moto-widget-button-link moto-size-large moto-link"
                      >
                        <span className="fa moto-widget-theme-icon" />
                        <span className="moto-widget-button-divider" />
                        <span className="moto-widget-button-label">About us</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="moto-widget moto-widget-row row-fixed row-gutter-0 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
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
                    className="moto-widget moto-widget-row__column moto-cell col-sm-3 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                    style={{}}
                    data-widget="row.column"
                    data-container="container"
                    data-spacing="aaaa"
                    data-bg-position="left top"
                  >
                    <div
                      className="moto-widget moto-widget-container undefined moto-container_content_5f1ea1842"
                      data-visible-on=""
                      data-widget="container"
                      data-container="container"
                      data-css-name="moto-container_content_5f1ea1842"
                      data-bg-position="left top"
                    >
                      <div
                        className="moto-widget moto-widget-row moto-spacing-top-large moto-spacing-right-auto moto-spacing-bottom-large moto-spacing-left-auto"
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
                                data-widget-id="wid_1595842979_ujmt21gvj"
                                className="moto-widget moto-widget-image moto-widget_with-deferred-content moto-preset-2 moto-align-center moto-spacing-top-auto moto-spacing-right-small moto-spacing-bottom-medium moto-spacing-left-small  "
                                data-widget="image"
                              >
                                <span className="moto-widget-image-link">
                                  <img src="/mt-demo/109600/109604/mt-content/uploads/2020/07/mt-2068_home_img01.jpg"
                                    //   src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0  '%3E%3C/svg%3E"
                                    className="moto-widget-image-picture moto-widget-deferred-content lazyload"
                                    //   data-id={149}
                                    // title=""
                                    alt="hospital"
                                  />
                                </span>
                              </div>
                              <div
                                data-widget-id="wid_1595844072_61kdfqalm"
                                className="moto-widget moto-widget-spacer moto-preset-default moto-spacing-top-medium moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto moto-visible-on_tablet_hidden moto-visible-on_mobile-h_hidden moto-visible-on_mobile-v_hidden"
                                data-widget="spacer"
                                data-preset="default"
                                data-spacing="maaa"
                                data-visible-on="+desktop"
                              >
                                <div
                                  className="moto-widget-spacer-block"
                                  style={{ height: 0 }}
                                />
                              </div>
                              <div
                                className="moto-widget moto-widget-text moto-preset-default moto-spacing-top-auto moto-spacing-right-small moto-spacing-bottom-small moto-spacing-left-small"
                                data-widget="text"
                                data-preset="default"
                                data-spacing="asss"
                                data-visible-on="-"
                                data-animation=""
                              >
                                <div className="moto-widget-text-content moto-widget-text-editable">
                                  <h3
                                    style={{ textAlign: "center" }}
                                    className="moto-text_system_8"
                                  >
                                    Assisting Surrogates
                                  </h3>
                                </div>
                              </div>
                              <div
                                className="moto-widget moto-widget-row moto-spacing-top-small moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                                data-grid-type="xs"
                                data-widget="row"
                                data-visible-on="-"
                                data-spacing="saaa"
                                style={{}}
                                data-bg-position="left top"
                              >
                                <div className="container-fluid">
                                  <div className="row" data-container="container">
                                    <div
                                      className="moto-widget moto-widget-row__column moto-cell col-xs-1 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                                      style={{}}
                                      data-widget="row.column"
                                      data-container="container"
                                      data-spacing="aaaa"
                                      data-bg-position="left top"
                                    ></div>
                                    <div
                                      className="moto-widget moto-widget-row__column moto-cell col-xs-10 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
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
                                          <p
                                            className="moto-text_normal"
                                            style={{ textAlign: "center" }}
                                          >
                                            "Becoming a surrogate has been one of the most rewarding decisions I've ever made. There's no greater gift than this in life."
                                          </p>

                                        </div>
                                        <div className='col-lg-12 d-flex justify-content-center'>
                                          <button type="button" className="btn btn-primary btn-lg"
                                            style={{
                                              border: 'none',
                                              width: '100px',
                                              height: '44px',
                                              boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
                                            }}



                                          >Apply</button>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="moto-widget moto-widget-row__column moto-cell col-xs-1 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                                      style={{}}
                                      data-widget="row.column"
                                      data-container="container"
                                      data-spacing="aaaa"
                                      data-bg-position="left top"
                                    ></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="moto-widget moto-widget-row__column moto-cell col-sm-3 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                    style={{}}
                    data-widget="row.column"
                    data-container="container"
                    data-spacing="aaaa"
                    data-bg-position="left top"
                  >
                    <div
                      className="moto-widget moto-widget-container undefined moto-container_content_5f1ea6853"
                      data-visible-on=""
                      data-widget="container"
                      data-container="container"
                      data-css-name="moto-container_content_5f1ea6853"
                      data-bg-position="left top"
                    >
                      <div
                        className="moto-widget moto-widget-row moto-spacing-top-large moto-spacing-right-auto moto-spacing-bottom-large moto-spacing-left-auto"
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
                                data-widget-id="wid_1595844229_dl6mteg60"
                                className="moto-widget moto-widget-image moto-widget_with-deferred-content moto-preset-2 moto-align-center moto-spacing-top-auto moto-spacing-right-small moto-spacing-bottom-medium moto-spacing-left-small  "
                                data-widget="image"
                              >
                                <span className="moto-widget-image-link">
                                  <img src="/mt-demo/109600/109604/mt-content/uploads/2020/07/mt-2068_home_img02.jpg"
                                    //   src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0  '%3E%3C/svg%3E"
                                    className="moto-widget-image-picture moto-widget-deferred-content lazyload"
                                    //   data-id={150}
                                    alt="hospital"
                                  />
                                </span>
                              </div>
                              <div
                                data-widget-id="wid_1595844229_jp8foqshw"
                                className="moto-widget moto-widget-spacer moto-preset-default moto-spacing-top-medium moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto moto-visible-on_tablet_hidden moto-visible-on_mobile-h_hidden moto-visible-on_mobile-v_hidden"
                                data-widget="spacer"
                                data-preset="default"
                                data-spacing="maaa"
                                data-visible-on="+desktop"
                              >
                                <div
                                  className="moto-widget-spacer-block"
                                  style={{ height: 0 }}
                                />
                              </div>
                              <div
                                className="moto-widget moto-widget-text moto-preset-default moto-spacing-top-auto moto-spacing-right-small moto-spacing-bottom-small moto-spacing-left-small"
                                data-widget="text"
                                data-preset="default"
                                data-spacing="asss"
                                data-visible-on="-"
                                data-animation=""
                              >
                                <div className="moto-widget-text-content moto-widget-text-editable">
                                  <h3
                                    style={{ textAlign: "center" }}
                                    className="moto-text_system_8"
                                  >
                                    Prospective Parents
                                  </h3>
                                </div>
                              </div>
                              <div
                                className="moto-widget moto-widget-row moto-spacing-top-small moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                                data-grid-type="xs"
                                data-widget="row"
                                data-visible-on="-"
                                data-spacing="saaa"
                                style={{}}
                                data-bg-position="left top"
                              >
                                <div className="container-fluid">
                                  <div className="row" data-container="container">
                                    <div
                                      className="moto-widget moto-widget-row__column moto-cell col-xs-1 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                                      style={{}}
                                      data-widget="row.column"
                                      data-container="container"
                                      data-spacing="aaaa"
                                      data-bg-position="left top"
                                    ></div>
                                    <div
                                      className="moto-widget moto-widget-row__column moto-cell col-xs-10 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
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
                                          <p
                                            className="moto-text_normal"
                                            style={{ textAlign: "center" }}
                                          >
                                           "Thanks to ISC, we've been fortunate to welcome twin girls into our family! We're looking forward to returning in hopes of adding a baby boy to our family!"
                                          </p>
                                        </div>
                                        <div className='col-lg-12 d-flex justify-content-center'>
                                          <button type="button" className="btn btn-primary btn-lg"
                                            style={{
                                              border: 'none',
                                              width: '100px',
                                              height: '44px',
                                              boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
                                            }}



                                          >Apply</button>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="moto-widget moto-widget-row__column moto-cell col-xs-1 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                                      style={{}}
                                      data-widget="row.column"
                                      data-container="container"
                                      data-spacing="aaaa"
                                      data-bg-position="left top"
                                    ></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="moto-widget moto-widget-row__column moto-cell col-sm-3 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                    style={{}}
                    data-widget="row.column"
                    data-container="container"
                    data-spacing="aaaa"
                    data-bg-position="left top"
                  >
                    <div
                      className="moto-widget moto-widget-container undefined moto-container_content_5f1ea68a4"
                      data-visible-on=""
                      data-widget="container"
                      data-container="container"
                      data-css-name="moto-container_content_5f1ea68a4"
                      data-bg-position="left top"
                    >
                      <div
                        className="moto-widget moto-widget-row moto-spacing-top-large moto-spacing-right-auto moto-spacing-bottom-large moto-spacing-left-auto"
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
                                data-widget-id="wid_1595844234_vhe8u4gcx"
                                className="moto-widget moto-widget-image moto-widget_with-deferred-content moto-preset-2 moto-align-center moto-spacing-top-auto moto-spacing-right-small moto-spacing-bottom-medium moto-spacing-left-small  "
                                data-widget="image"
                              >
                                <span className="moto-widget-image-link">
                                  <img src="/mt-demo/109600/109604/mt-content/uploads/2020/07/mt-2068_home_img03.jpg"
                                    //   src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0  '%3E%3C/svg%3E"
                                    className="moto-widget-image-picture moto-widget-deferred-content lazyload"
                                    //   data-id={151}
                                    alt="hospital"
                                  />
                                </span>
                              </div>
                              <div
                                data-widget-id="wid_1595844234_k26b4us46"
                                className="moto-widget moto-widget-spacer moto-preset-default moto-spacing-top-medium moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto moto-visible-on_tablet_hidden moto-visible-on_mobile-h_hidden moto-visible-on_mobile-v_hidden"
                                data-widget="spacer"
                                data-preset="default"
                                data-spacing="maaa"
                                data-visible-on="+desktop"
                              >
                                <div
                                  className="moto-widget-spacer-block"
                                  style={{ height: 0 }}
                                />
                              </div>
                              <div
                                className="moto-widget moto-widget-text moto-preset-default moto-spacing-top-auto moto-spacing-right-small moto-spacing-bottom-small moto-spacing-left-small"
                                data-widget="text"
                                data-preset="default"
                                data-spacing="asss"
                                data-visible-on="-"
                                data-animation=""
                              >
                                <div className="moto-widget-text-content moto-widget-text-editable">
                                  <h3
                                    style={{ textAlign: "center" }}
                                    className="moto-text_system_8"
                                  >
                                    Turning Dreams into Reality
                                  </h3>
                                </div>

                              </div>
                              <div
                                className="moto-widget moto-widget-row moto-spacing-top-small moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                                data-grid-type="xs"
                                data-widget="row"
                                data-visible-on="-"
                                data-spacing="saaa"
                                style={{}}
                                data-bg-position="left top"
                              >
                                <div className="container-fluid">
                                  <div className="row" data-container="container">
                                    <div
                                      className="moto-widget moto-widget-row__column moto-cell col-xs-1 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                                      style={{}}
                                      data-widget="row.column"
                                      data-container="container"
                                      data-spacing="aaaa"
                                      data-bg-position="left top"
                                    ></div>
                                    <div
                                      className="moto-widget moto-widget-row__column moto-cell col-xs-10 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
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
                                          <p
                                            className="moto-text_normal"
                                            style={{ textAlign: "center" }}
                                          >
                                           Over the course of two decades, we've assembled an experienced team dedicated to bringing new life into the world!
                                          </p>
                                        </div>
                                        <div className='col-lg-12 d-flex justify-content-center'>
                                          <button type="button" className="btn btn-primary btn-lg"
                                            style={{
                                              border: 'none',
                                              marginTop: '17px',
                                              width: '100px',
                                              height: '44px',
                                              boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
                                            }}



                                          >Apply</button>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="moto-widget moto-widget-row__column moto-cell col-xs-1 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                                      style={{}}
                                      data-widget="row.column"
                                      data-container="container"
                                      data-spacing="aaaa"
                                      data-bg-position="left top"
                                    ></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="moto-widget moto-widget-row__column moto-cell col-sm-3 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                    style={{}}
                    data-widget="row.column"
                    data-container="container"
                    data-spacing="aaaa"
                    data-bg-position="left top"
                  >
                    <div
                      className="moto-widget moto-widget-container undefined moto-container_content_5f1ea68f5"
                      data-visible-on=""
                      data-widget="container"
                      data-container="container"
                      data-css-name="moto-container_content_5f1ea68f5"
                      data-bg-position="left top"
                    >
                      <div
                        className="moto-widget moto-widget-row moto-spacing-top-large moto-spacing-right-auto moto-spacing-bottom-large moto-spacing-left-auto"
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
                                data-widget-id="wid_1595844239_fbu94omck"
                                className="moto-widget moto-widget-image moto-widget_with-deferred-content moto-preset-2 moto-align-center moto-spacing-top-auto moto-spacing-right-small moto-spacing-bottom-medium moto-spacing-left-small  "
                                data-widget="image"
                              >
                                <span className="moto-widget-image-link">
                                  <img src="/mt-demo/109600/109604/mt-content/uploads/2020/07/mt-2068_home_img04.jpg"
                                    //   src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0  '%3E%3C/svg%3E"
                                    className="moto-widget-image-picture moto-widget-deferred-content lazyload"
                                    //   data-id={152}
                                    alt="hospital"
                                  />
                                </span>
                              </div>
                              <div
                                data-widget-id="wid_1595844239_ip77mk8zh"
                                className="moto-widget moto-widget-spacer moto-preset-default moto-spacing-top-medium moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto moto-visible-on_tablet_hidden moto-visible-on_mobile-h_hidden moto-visible-on_mobile-v_hidden"
                                data-widget="spacer"
                                data-preset="default"
                                data-spacing="maaa"
                                data-visible-on="+desktop"
                              >
                                <div
                                  className="moto-widget-spacer-block"
                                  style={{ height: 0 }}
                                />
                              </div>
                              <div
                                className="moto-widget moto-widget-text moto-preset-default moto-spacing-top-auto moto-spacing-right-small moto-spacing-bottom-small moto-spacing-left-small"
                                data-widget="text"
                                data-preset="default"
                                data-spacing="asss"
                                data-visible-on="-"
                                data-animation=""
                              >
                                <div className="moto-widget-text-content moto-widget-text-editable">
                                  <h3
                                    style={{ textAlign: "center" }}
                                    className="moto-text_system_8"
                                  >
                                  Dreams Have the Potential to Be Realized
                                  </h3>
                                </div>
                              </div>
                              <div
                                className="moto-widget moto-widget-row moto-spacing-top-small moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                                data-grid-type="xs"
                                data-widget="row"
                                data-visible-on="-"
                                data-spacing="saaa"
                                style={{}}
                                data-bg-position="left top"
                              >
                                <div className="container-fluid">
                                  <div className="row" data-container="container">
                                    <div
                                      className="moto-widget moto-widget-row__column moto-cell col-xs-1 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                                      style={{}}
                                      data-widget="row.column"
                                      data-container="container"
                                      data-spacing="aaaa"
                                      data-bg-position="left top"
                                    ></div>
                                    <div
                                      className="moto-widget moto-widget-row__column moto-cell col-xs-10 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
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
                                          <p
                                            className="moto-text_normal"
                                            style={{ textAlign: "center" }}
                                          >
                                            Prospective parents who seek our services need not worry about high costs.
                                          </p>
                                        </div>
                                        <div className='col-lg-12 d-flex justify-content-center'>
                                          <button type="button" className="btn btn-primary btn-lg"
                                            style={{
                                              border: 'none',
                                              width: '100px',
                                              height: '44px',
                                              boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
                                              marginTop: '17px',

                                            }}



                                          >Apply</button>
                                        </div>

                                      </div>
                                    </div>
                                    <div
                                      className="moto-widget moto-widget-row__column moto-cell col-xs-1 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                                      style={{}}
                                      data-widget="row.column"
                                      data-container="container"
                                      data-spacing="aaaa"
                                      data-bg-position="left top"
                                    ></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="moto-widget moto-widget-row row-fixed"
              data-grid-type="sm"
              data-widget="row"
              data-visible-on="-"
              // data-spacing="aaaa"
              style={{
                backgroundImage:
                  "url(https://png.pngtree.com/background/20211215/original/pngtree-white-gray-simple-lines-abstract-gradient-background-picture-image_1452585.jpg)",
                backgroundPosition: "top",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
              }}
              data-bg-position="top"
              data-bg-image="2020/07/mt-2068_home_bg01.jpg/index.html"
            >
              <div className="">
                <div className="row" data-container="container">
                  <div
                    className="moto-widget moto-widget-row__column moto-cell col-sm-6 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                    style={{}}
                    data-widget="row.column"
                    data-container="container"
                    data-spacing="aaaa"
                    data-bg-position="left top"
                  >
                    <div className='col-lg-6'style={{marginTop:'200px',}}>
                    <iframe width="700" style={{boxShadow: 'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px'}}height="450" src="https://www.youtube.com/embed/mrbK1H8GVaI" title="Finding The Best Surrogate For You: A Match Made Easy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
                      
                      </iframe>

                    </div>
                   
                   
                  </div>
                  
                  <div
                    className="moto-widget moto-widget-row__column moto-cell col-sm-6 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                    style={{ backgroundColor: "rgba(248, 248, 248, 0.85)" }}
                    data-widget="row.column"
                    data-container="container"
                    data-spacing="aaaa"
                    data-bg-position="left top"
                  >
                  
                    <div
                      data-widget-id="wid_1595844925_j0gwnduc5"
                      className="moto-widget moto-widget-spacer moto-preset-default moto-spacing-top-large moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto moto-visible-on_tablet_hidden moto-visible-on_mobile-h_hidden moto-visible-on_mobile-v_hidden"
                      data-widget="spacer"
                      data-preset="default"
                      data-spacing="laaa"
                      data-visible-on="+desktop"
                    >
                      <div
                        className="moto-widget-spacer-block"
                        style={{ height: 40 }}
                      />
                    </div>
                    <div
                      className="moto-widget moto-widget-row moto-spacing-top-large moto-spacing-right-auto moto-spacing-bottom-large moto-spacing-left-auto"
                      data-grid-type="md"
                      data-widget="row"
                      data-visible-on="-"
                      data-spacing="lala"
                      style={{}}
                      data-bg-position="left top"
                    >
                      <div className="container-fluid">
                        <div className="row" data-container="container">
                          <div
                            className="moto-widget moto-widget-row__column moto-cell col-md-10 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                            style={{}}
                            data-widget="row.column"
                            data-container="container"
                            data-spacing="aaaa"
                            data-bg-position="left top"
                          >
                            <div
                              className="moto-widget moto-widget-text moto-preset-default moto-spacing-top-medium moto-spacing-right-auto moto-spacing-bottom-medium moto-spacing-left-auto"
                              data-widget="text"
                              data-preset="default"
                              data-spacing="mama"
                              data-visible-on="-"
                              data-animation=""
                            >
                              <div className="moto-widget-text-content moto-widget-text-editable">
                                <h2 className="moto-text_system_6">
                                Surrogacy Agency Fostering Community
                                </h2>
                                <p className="moto-text_normal">&nbsp;</p>
                                <p className="moto-text_normal" style={{wordSpacing:'2px',fontSize:'17px'}}>
                              {datas?.third_detail}
                                </p>
                                <p className="moto-text_normal">&nbsp;</p>
                                {/* <p className="moto-text_normal">
                                  This is why we offer an extensive set of medical
                                  consultations, tests, health screenings and
                                  scheduled checkups!
                                </p> */}
                              </div>
                            </div>
                            <div
                              data-widget-id="wid_1595844784_r5p5rvbzx"
                              className="moto-widget moto-widget-spacer moto-preset-default moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto moto-visible-on_tablet_hidden moto-visible-on_mobile-h_hidden moto-visible-on_mobile-v_hidden"
                              data-widget="spacer"
                              data-preset="default"
                              data-spacing="aaaa"
                              data-visible-on="+desktop"
                            >
                              <div
                                className="moto-widget-spacer-block"
                                style={{ height: 30 }}
                              />
                            </div>
                            {/* <div
                              data-widget-id="wid_1595844748_hnuhp1wql"
                              className="moto-widget moto-widget-button moto-preset-default moto-preset-provider-default moto-align-left moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-medium moto-spacing-left-auto  "
                              data-widget="button"
                            >
                              <a
                                href="our-team/index.html"
                                data-action="page"
                                className="moto-widget-button-link moto-size-large moto-link"
                              >
                                <span className="fa moto-widget-theme-icon" />
                                <span className="moto-widget-button-divider" />
                                <span className="moto-widget-button-label">
                                  Read more
                                </span>
                              </a>
                            </div> */}
                          </div>
                          <div
                            className="moto-widget moto-widget-row__column moto-cell col-md-2 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
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
                      data-widget-id="wid_1595844929_nbkyhpyxi"
                      className="moto-widget moto-widget-spacer moto-preset-default moto-spacing-top-large moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto moto-visible-on_tablet_hidden moto-visible-on_mobile-h_hidden moto-visible-on_mobile-v_hidden"
                      data-widget="spacer"
                      data-preset="default"
                      data-spacing="laaa"
                      data-visible-on="+desktop"
                    >
                      <div
                        className="moto-widget-spacer-block"
                        style={{ height: 40 }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
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
                      className="moto-widget moto-widget-text moto-preset-default moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                      data-widget="text"
                      data-preset="default"
                      data-spacing="aaaa"
                      data-visible-on="-"
                      data-animation=""
                      data-draggable-disabled=""
                    >
                      {/* <div
                        className="moto-widget-text-content moto-widget-text-editable"
                        aria-multiline="true"
                      >
                        <h2
                          style={{ textAlign: "center" }}
                          className="moto-text_system_6"
                        >
                          <span className="moto-color5_5">
                            OUR MEDICAL TEAM IS HERE TO HELP
                          </span>
                        </h2>
                        <p
                          style={{ textAlign: "center" }}
                          className="moto-text_system_12"
                        >
                          <br />
                        </p>
                        <p
                          style={{ textAlign: "center" }}
                          className="moto-text_system_12"
                        >
                          Our seasoned and skilled team of doctors, pregnancy
                          specialists, and various counselors is what it takes to make
                          sure that your pregnancy and your physical and psychological
                          wellbeing during the time you’re carrying are fine… Also,
                          the fact that so far we’ve already helped thousands of women
                          makes us sure that we’ll be able to deal with just about any
                          issue you might have.
                        </p>
                      </div> */}
                    </div>
                    <div className='col-lg-12'>
                      <div className='container'>
                     <div className='row'>
                      <div className='col-lg-6'>

                      <div class="card"
                      
                      style={{

                        padding: '20px',
                        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
                        color: '#fff',
                        backgroundColor: '#3498db',
                       

                      }}
                      >
  <div class="card-body"  style={{ padding: '20px',}}>
    <h1 class="card-title">A Transformative Journey for Surrogate Mothers</h1>
    <p class="card-text" style={{fontSize:'16px'}}>
      {datas?.four_detail}
   
    </p>
    
   
  </div>
</div>

                      </div>
                      <div className='col-lg-6'>
                      <div class="card"
                      
                      style={{

                        padding: '20px',
                        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
                        color: '#fff',
                        backgroundColor: '#3498db',
                       

                      }}
                      >
  <div class="card-body"  style={{ padding: '20px',}}>
    <h1 class="card-title">A Remarkable Result for Prospective Parents</h1>
    <p class="card-text" style={{fontSize:'16px'}}>
      {datas?.fifth_detail}
   
    </p>
    
   
  </div>
</div>

                      </div>
                     </div>
                     </div>
                       

                    </div>
                    {/* <div
                      className="moto-widget moto-widget-row moto-spacing-top-large moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                      data-grid-type="sm"
                      data-widget="row"
                      data-visible-on="-"
                      data-spacing="laaa"
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
                              data-widget-id="wid_1595845331_acdmr9jnx"
                              className="moto-widget moto-widget-image moto-widget_with-deferred-content moto-preset-default moto-align-center moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto  "
                              data-widget="image"
                            >
                              <span className="moto-widget-image-link">
                                <img
                                  data-src="/mt-demo/109600/109604/mt-content/uploads/2020/07/mt-2068_home_team01.jpg"
                                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0  '%3E%3C/svg%3E"
                                  className="moto-widget-image-picture moto-widget-deferred-content lazyload"
                                  data-id={155}
                                  title=""
                                  alt=""
                                />
                              </span>
                            </div>
                            <div
                              className="moto-widget moto-widget-text moto-preset-default moto-spacing-top-medium moto-spacing-right-auto moto-spacing-bottom-medium moto-spacing-left-auto"
                              data-widget="text"
                              data-preset="default"
                              data-spacing="mama"
                              data-visible-on="-"
                              data-animation=""
                            >
                              <div className="moto-widget-text-content moto-widget-text-editable">
                                <h3
                                  style={{ textAlign: "center" }}
                                  className="moto-text_204"
                                >
                                  <a
                                    target="_self"
                                    data-action="url"
                                    className="moto-link"
                                    href="#"
                                  >
                                    JOANNA OLLEY
                                  </a>
                                </h3>
                                <p
                                  className="moto-text_system_12"
                                  style={{ textAlign: "center" }}
                                >
                                  Pregnancy Expert
                                </p>
                                <p
                                  className="moto-text_system_12"
                                  style={{ textAlign: "center" }}
                                >
                                  &nbsp;
                                </p>
                                <p
                                  className="moto-text_system_12"
                                  style={{ textAlign: "center" }}
                                >
                                  Joanna is the head of our Surgery department.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div
                            className="moto-widget moto-widget-row__column moto-cell col-sm-3 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                            style={{}}
                            data-widget="row.column"
                            data-container="container"
                            data-spacing="aaaa"
                            data-bg-position="left top"
                          >
                            <div
                              data-widget-id="wid_1595845531_9s6j5bilf"
                              className="moto-widget moto-widget-image moto-widget_with-deferred-content moto-preset-default moto-align-center moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto  "
                              data-widget="image"
                            >
                              <span className="moto-widget-image-link">
                                <img
                                  data-src="/mt-demo/109600/109604/mt-content/uploads/2020/07/mt-2068_home_team02.jpg"
                                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0  '%3E%3C/svg%3E"
                                  className="moto-widget-image-picture moto-widget-deferred-content lazyload"
                                  data-id={154}
                                  title=""
                                  alt=""
                                />
                              </span>
                            </div>
                            <div
                              className="moto-widget moto-widget-text moto-preset-default moto-spacing-top-medium moto-spacing-right-auto moto-spacing-bottom-medium moto-spacing-left-auto"
                              data-widget="text"
                              data-preset="default"
                              data-spacing="mama"
                              data-visible-on="-"
                              data-animation=""
                            >
                              <div className="moto-widget-text-content moto-widget-text-editable">
                                <h3
                                  style={{ textAlign: "center" }}
                                  className="moto-text_204"
                                >
                                  <a
                                    href="#"
                                    target="_self"
                                    data-action="url"
                                    className="moto-link"
                                  >
                                    ANDREW HARRODS
                                  </a>
                                </h3>
                                <p
                                  className="moto-text_system_12"
                                  style={{ textAlign: "center" }}
                                >
                                  Pregnancy Expert
                                </p>
                                <p
                                  className="moto-text_system_12"
                                  style={{ textAlign: "center" }}
                                >
                                  &nbsp;
                                </p>
                                <p
                                  className="moto-text_system_12"
                                  style={{ textAlign: "center" }}
                                >
                                  Andrew is the head of our Surgery department.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div
                            className="moto-widget moto-widget-row__column moto-cell col-sm-3 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                            style={{}}
                            data-widget="row.column"
                            data-container="container"
                            data-spacing="aaaa"
                            data-bg-position="left top"
                          >
                            <div
                              data-widget-id="wid_1595845533_jgviv85nv"
                              className="moto-widget moto-widget-image moto-widget_with-deferred-content moto-preset-default moto-align-center moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto  "
                              data-widget="image"
                            >
                              <span className="moto-widget-image-link">
                                <img
                                  data-src="/mt-demo/109600/109604/mt-content/uploads/2020/07/mt-2068_home_team03.jpg"
                                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0  '%3E%3C/svg%3E"
                                  className="moto-widget-image-picture moto-widget-deferred-content lazyload"
                                  data-id={156}
                                  title=""
                                  alt=""
                                />
                              </span>
                            </div>
                            <div
                              className="moto-widget moto-widget-text moto-preset-default moto-spacing-top-medium moto-spacing-right-auto moto-spacing-bottom-medium moto-spacing-left-auto"
                              data-widget="text"
                              data-preset="default"
                              data-spacing="mama"
                              data-visible-on="-"
                              data-animation=""
                            >
                              <div className="moto-widget-text-content moto-widget-text-editable">
                                <h3
                                  style={{ textAlign: "center" }}
                                  className="moto-text_204"
                                >
                                  <a
                                    href="#"
                                    target="_self"
                                    data-action="url"
                                    className="moto-link"
                                  >
                                    SANDRA VAN SOLO
                                  </a>
                                </h3>
                                <p
                                  className="moto-text_system_12"
                                  style={{ textAlign: "center" }}
                                >
                                  Pregnancy Expert
                                </p>
                                <p
                                  className="moto-text_system_12"
                                  style={{ textAlign: "center" }}
                                >
                                  &nbsp;
                                </p>
                                <p
                                  className="moto-text_system_12"
                                  style={{ textAlign: "center" }}
                                >
                                  After graduating from the Duke university with a
                                  magna
                                </p>
                              </div>
                            </div>
                          </div>
                          <div
                            className="moto-widget moto-widget-row__column moto-cell col-sm-3 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                            style={{}}
                            data-widget="row.column"
                            data-container="container"
                            data-spacing="aaaa"
                            data-bg-position="left top"
                          >
                            <div
                              data-widget-id="wid_1595845534_lmvhihtt5"
                              className="moto-widget moto-widget-image moto-widget_with-deferred-content moto-preset-default moto-align-center moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto  "
                              data-widget="image"
                            >
                              <span className="moto-widget-image-link">
                                <img
                                  data-src="/mt-demo/109600/109604/mt-content/uploads/2020/07/mt-2068_home_team04.jpg"
                                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0  '%3E%3C/svg%3E"
                                  className="moto-widget-image-picture moto-widget-deferred-content lazyload"
                                  data-id={157}
                                  title=""
                                  alt=""
                                />
                              </span>
                            </div>
                            <div
                              className="moto-widget moto-widget-text moto-preset-default moto-spacing-top-medium moto-spacing-right-auto moto-spacing-bottom-medium moto-spacing-left-auto"
                              data-widget="text"
                              data-preset="default"
                              data-spacing="mama"
                              data-visible-on="-"
                              data-animation=""
                            >
                              <div className="moto-widget-text-content moto-widget-text-editable">
                                <h3
                                  style={{ textAlign: "center" }}
                                  className="moto-text_204"
                                >
                                  <a
                                    href="#"
                                    target="_self"
                                    data-action="url"
                                    className="moto-link"
                                  >
                                    CRAIG TERRENCE
                                  </a>
                                </h3>
                                <p
                                  className="moto-text_system_12"
                                  style={{ textAlign: "center" }}
                                >
                                  Pregnancy Expert
                                </p>
                                <p
                                  className="moto-text_system_12"
                                  style={{ textAlign: "center" }}
                                >
                                  &nbsp;
                                </p>
                                <p
                                  className="moto-text_system_12"
                                  style={{ textAlign: "center" }}
                                >
                                  Craig is responsible for all bi-yearly general
                                  healthcare checkups.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> */}
                    {/* <div
                      data-widget-id="wid_1595845759_8fklspr43"
                      className="moto-widget moto-widget-spacer moto-preset-default moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto moto-visible-on_tablet_hidden moto-visible-on_mobile-h_hidden moto-visible-on_mobile-v_hidden"
                      data-widget="spacer"
                      data-preset="default"
                      data-spacing="aaaa"
                      data-visible-on="+desktop"
                    >
                      <div
                        className="moto-widget-spacer-block"
                        style={{ height: 30 }}
                      />
                    </div> */}
                    {/* <div
                      data-widget-id="wid_1595845749_m8gjm737c"
                      className="moto-widget moto-widget-button moto-preset-2 moto-preset-provider-default moto-align-center moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto  "
                      data-widget="button"
                    >
                      <a
                        href="our-team/index.html"
                        data-action="page"
                        className="moto-widget-button-link moto-size-large moto-link"
                      >
                        <span className="fa moto-widget-theme-icon" />
                        <span className="moto-widget-button-divider" />
                        <span className="moto-widget-button-label">Read more</span>
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
            {/* <div
              className="moto-widget moto-widget-row row-fixed moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
              data-grid-type="sm"
              data-widget="row"
              data-visible-on="-"
              data-spacing="aaaa"
              style={{
                backgroundImage:
                  "url(mt-demo/109600/109604/mt-content/uploads/2020/07/mt-2068_home_bg02.jpg)",
                backgroundPosition: "top",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
              }}
              data-bg-image="2020/07/mt-2068_home_bg02.jpg"
              data-bg-position="top"
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
                      className="moto-widget moto-widget-container undefined moto-container_content_5f1eb05d6"
                      data-visible-on=""
                      data-widget="container"
                      data-container="container"
                      data-css-name="moto-container_content_5f1eb05d6"
                      data-bg-position="left top"
                    >
                      <div
                        className="moto-widget moto-widget-row moto-spacing-top-large moto-spacing-right-auto moto-spacing-bottom-large moto-spacing-left-auto"
                        data-grid-type="md"
                        data-widget="row"
                        data-visible-on="-"
                        data-spacing="lala"
                        style={{}}
                        data-bg-position="left top"
                      >
                        <div className="container-fluid">
                          <div className="row" data-container="container">
                            <div
                              className="moto-widget moto-widget-row__column moto-cell col-md-9 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                              style={{}}
                              data-widget="row.column"
                              data-container="container"
                              data-spacing="aaaa"
                              data-bg-position="left top"
                            >
                              <div
                                data-widget-id="wid_1595846539_30sid3sgq"
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
                              <div
                                className="moto-widget moto-widget-text moto-preset-default moto-spacing-top-medium moto-spacing-right-auto moto-spacing-bottom-medium moto-spacing-left-auto"
                                data-widget="text"
                                data-preset="default"
                                data-spacing="mama"
                                data-visible-on="-"
                                data-animation=""
                              >
                                <div className="moto-widget-text-content moto-widget-text-editable">
                                  <h2 className="moto-text_system_6">
                                    HAPPY MOMS PRAISE US
                                  </h2>
                                  <p className="moto-text_normal">&nbsp;</p>
                                  <p className="moto-text_normal">&nbsp;</p>
                                  <p className="moto-text_normal">
                                    During the last 20 years of our center’s work we
                                    were able to consult, exam, help and guide
                                    thousands of happy couples, men and women.
                                  </p>
                                  <p className="moto-text_normal">&nbsp;</p>
                                  <p className="moto-text_normal">
                                    Starting with providing health screenings, exams,
                                    ultrasound and medical consultations for pregnant
                                    women and finishing with maternity and group
                                    support classes for both women and their partners.
                                  </p>
                                  <p className="moto-text_normal">&nbsp;</p>
                                  <p className="moto-text_normal">
                                    Our seasoned team time and again proved that the
                                    only goal in sight is to provide assitance and
                                    guidance!
                                  </p>
                                </div>
                              </div>
                              <div
                                data-widget-id="wid_1595846075_dd7rbyxyv"
                                className="moto-widget moto-widget-spacer moto-preset-default moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto moto-visible-on_tablet_hidden moto-visible-on_mobile-h_hidden moto-visible-on_mobile-v_hidden"
                                data-widget="spacer"
                                data-preset="default"
                                data-spacing="aaaa"
                                data-visible-on="+desktop"
                              >
                                <div
                                  className="moto-widget-spacer-block"
                                  style={{ height: 30 }}
                                />
                              </div>
                              <div
                                data-widget-id="wid_1595846075_5lsscuxj5"
                                className="moto-widget moto-widget-button moto-preset-default moto-preset-provider-default moto-align-left moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-medium moto-spacing-left-auto  "
                                data-widget="button"
                              >
                                <a
                                  href="read-more/index.html"
                                  data-action="page"
                                  className="moto-widget-button-link moto-size-large moto-link"
                                >
                                  <span className="fa moto-widget-theme-icon" />
                                  <span className="moto-widget-button-divider" />
                                  <span className="moto-widget-button-label">
                                    Read more
                                  </span>
                                </a>
                              </div>
                              <div
                                data-widget-id="wid_1595846565_l1v07jtc4"
                                className="moto-widget moto-widget-spacer moto-preset-default moto-spacing-top-large moto-spacing-right-auto moto-spacing-bottom-large moto-spacing-left-auto moto-visible-on_tablet_hidden moto-visible-on_mobile-h_hidden moto-visible-on_mobile-v_hidden"
                                data-widget="spacer"
                                data-preset="default"
                                data-spacing="lala"
                                data-visible-on="+desktop"
                              >
                                <div
                                  className="moto-widget-spacer-block"
                                  style={{ height: 50 }}
                                />
                              </div>
                            </div>
                            <div
                              className="moto-widget moto-widget-row__column moto-cell col-md-3 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                              style={{}}
                              data-widget="row.column"
                              data-container="container"
                              data-spacing="aaaa"
                              data-bg-position="left top"
                            ></div>
                          </div>
                        </div>
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
                      data-widget-id="wid_1595846075_vqgfcp2va"
                      className="moto-widget moto-widget-spacer moto-preset-default moto-spacing-top-large moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto moto-visible-on_tablet_hidden moto-visible-on_mobile-h_hidden moto-visible-on_mobile-v_hidden"
                      data-widget="spacer"
                      data-preset="default"
                      data-spacing="laaa"
                      data-visible-on="+desktop"
                    >
                      <div
                        className="moto-widget-spacer-block"
                        style={{ height: 40 }}
                      />
                    </div>
                    <div
                      data-widget-id="wid_1595846075_qwi1n9btb"
                      className="moto-widget moto-widget-spacer moto-preset-default moto-spacing-top-large moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto moto-visible-on_tablet_hidden moto-visible-on_mobile-h_hidden moto-visible-on_mobile-v_hidden"
                      data-widget="spacer"
                      data-preset="default"
                      data-spacing="laaa"
                      data-visible-on="+desktop"
                    >
                      <div
                        className="moto-widget-spacer-block"
                        style={{ height: 40 }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div
              className="moto-widget moto-widget-row row-fixed moto-spacing-top-large moto-spacing-right-auto moto-spacing-bottom-large moto-spacing-left-auto"
              data-grid-type="sm"
              data-widget="row"
              data-visible-on="-"
              data-spacing="lala"
              style={{
                backgroundImage:
                  "url(mt-demo/109600/109604/mt-content/uploads/2020/07/mt-2068_home_bg03.jpg)",
                backgroundPosition: "top",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
              }}
              data-bg-position="top"
              data-bg-image="2020/07/mt-2068_home_bg03.jpg"
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
                      className="moto-widget moto-widget-text moto-preset-default moto-spacing-top-medium moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                      data-widget="text"
                      data-preset="default"
                      data-spacing="maaa"
                      data-visible-on="-"
                      data-animation=""
                      data-draggable-disabled=""
                    >
                      <div
                        className="moto-widget-text-content moto-widget-text-editable"
                        aria-multiline="true"
                      >
                        <h2
                          style={{ textAlign: "center" }}
                          className="moto-text_system_6"
                        >
                          <span className="moto-color5_5">CLASSES THAT WE OFFER</span>
                        </h2>
                        <p
                          style={{ textAlign: "center" }}
                          className="moto-text_system_12"
                        >
                          <br />
                        </p>
                        <p
                          style={{ textAlign: "center" }}
                          className="moto-text_system_12"
                        >
                          <br />
                        </p>
                        <p
                          style={{ textAlign: "center" }}
                          className="moto-text_system_12"
                        >
                          We love to help pregnant women, their future children and
                          their partners on this complex, yet joyous journey of
                          becoming parents. Our pregnancy medical center’s staff are
                          determined to guide you in all of that, along the way
                          helping both mother and father wth a variety of issues.
                        </p>
                      </div>
                    </div>
                    <div
                      className="moto-widget moto-widget-row moto-spacing-top-large moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                      data-grid-type="sm"
                      data-widget="row"
                      data-visible-on="-"
                      data-spacing="laaa"
                      style={{}}
                      data-bg-position="left top"
                      data-draggable-disabled=""
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
                              className="moto-widget moto-widget-text moto-preset-default moto-spacing-top-auto moto-spacing-right-small moto-spacing-bottom-medium moto-spacing-left-small"
                              data-widget="text"
                              data-preset="default"
                              data-spacing="asms"
                              data-visible-on="-"
                              data-animation=""
                            >
                              <div className="moto-widget-text-content moto-widget-text-editable">
                                <h3
                                  style={{ textAlign: "center" }}
                                  className="moto-text_204"
                                >
                                  <a
                                    href="#"
                                    target="_self"
                                    data-action="url"
                                    className="moto-link"
                                  >
                                    MATERNITY COURSES
                                  </a>
                                </h3>
                                <p
                                  className="moto-text_system_12"
                                  style={{ textAlign: "center" }}
                                >
                                  &nbsp;
                                </p>
                                <p
                                  className="moto-text_system_12"
                                  style={{ textAlign: "center" }}
                                >
                                  &nbsp;
                                </p>
                                <p
                                  className="moto-text_system_12"
                                  style={{ textAlign: "center" }}
                                >
                                  Becoming a mother is a hugely important step for any
                                  woman, as the responsibility will now be doubled…
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
                              className="moto-widget moto-widget-text moto-preset-default moto-spacing-top-auto moto-spacing-right-small moto-spacing-bottom-medium moto-spacing-left-small"
                              data-widget="text"
                              data-preset="default"
                              data-spacing="asms"
                              data-visible-on="-"
                              data-animation=""
                            >
                              <div className="moto-widget-text-content moto-widget-text-editable">
                                <h3
                                  style={{ textAlign: "center" }}
                                  className="moto-text_204"
                                >
                                  <a
                                    target="_self"
                                    data-action="url"
                                    className="moto-link"
                                    href="#"
                                  >
                                    GROUP CLASSES
                                  </a>
                                </h3>
                                <p
                                  className="moto-text_system_12"
                                  style={{ textAlign: "center" }}
                                >
                                  &nbsp;
                                </p>
                                <p
                                  className="moto-text_system_12"
                                  style={{ textAlign: "center" }}
                                >
                                  &nbsp;
                                </p>
                                <p
                                  className="moto-text_system_12"
                                  style={{ textAlign: "center" }}
                                >
                                  Such things as breathing techniques, medical tips
                                  and psychological mutual support are what the group
                                  classes for moms-to-be
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
                              className="moto-widget moto-widget-text moto-preset-default moto-spacing-top-auto moto-spacing-right-small moto-spacing-bottom-medium moto-spacing-left-small"
                              data-widget="text"
                              data-preset="default"
                              data-spacing="asms"
                              data-visible-on="-"
                              data-animation=""
                              data-draggable-disabled=""
                            >
                              <div
                                className="moto-widget-text-content moto-widget-text-editable"
                                aria-multiline="true"
                              >
                                <p
                                  style={{ textAlign: "center" }}
                                  className="moto-text_204"
                                >
                                  <a
                                    href="#"
                                    target="_self"
                                    data-action="url"
                                    className="moto-link"
                                  >
                                    CONSULTATIONS FOR
                                    <br />
                                    MEN
                                  </a>
                                </p>
                                <p
                                  className="moto-text_system_12"
                                  style={{ textAlign: "center" }}
                                >
                                  <br />
                                </p>
                                <p
                                  className="moto-text_system_12"
                                  style={{ textAlign: "center" }}
                                >
                                  The news of becoming a father can easily come as a
                                  shocker for a majority of men. Our
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-widget-id="wid_1595847341_dr3injz3d"
                      className="moto-widget moto-widget-spacer moto-preset-default moto-spacing-top-medium moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto moto-visible-on_tablet_hidden moto-visible-on_mobile-h_hidden moto-visible-on_mobile-v_hidden"
                      data-widget="spacer"
                      data-preset="default"
                      data-spacing="maaa"
                      data-visible-on="+desktop"
                    >
                      <div
                        className="moto-widget-spacer-block"
                        style={{ height: 0 }}
                      />
                    </div>
                    <div
                      data-widget-id="wid_1595847278_brhfdxawj"
                      className="moto-widget moto-widget-button moto-preset-3 moto-preset-provider-default moto-align-center moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-medium moto-spacing-left-auto  "
                      data-widget="button"
                    >
                      <a
                        href="services/index.html"
                        data-action="page"
                        className="moto-widget-button-link moto-size-large moto-link"
                      >
                        <span className="fa moto-widget-theme-icon" />
                        <span className="moto-widget-button-divider" />
                        <span className="moto-widget-button-label">
                          View all services
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div
              className="moto-widget moto-widget-row row-fixed moto-spacing-top-large moto-spacing-right-auto moto-spacing-bottom-large moto-spacing-left-auto"
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
                        <h2
                          className="moto-text_system_6"
                          style={{ textAlign: "center" }}
                        >
                          SEE WHAT PARENTS-TO-BE HAVE TO SAY!
                        </h2>
                      </div>
                    </div>
                    <div
                      data-widget-id="wid_1595847637_gu907onpo"
                      className="moto-widget moto-widget-spacer moto-preset-default moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto moto-visible-on_tablet_hidden moto-visible-on_mobile-h_hidden moto-visible-on_mobile-v_hidden"
                      data-widget="spacer"
                      data-preset="default"
                      data-spacing="aaaa"
                      data-visible-on="+desktop"
                    >
                      <div
                        className="moto-widget-spacer-block"
                        style={{ height: 15 }}
                      />
                    </div>
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
                              data-widget-id="wid_1595847517_hv3f4tyt0"
                              className="moto-widget moto-widget-image moto-widget_with-deferred-content moto-preset-2 moto-align-center moto-spacing-top-medium moto-spacing-right-auto moto-spacing-bottom-medium moto-spacing-left-auto  "
                              data-widget="image"
                            >
                              <span className="moto-widget-image-link">
                                <img
                                  data-src="/mt-demo/109600/109604/mt-content/uploads/2020/07/mt-2068_home_testimonials01.jpg"
                                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0  '%3E%3C/svg%3E"
                                  className="moto-widget-image-picture moto-widget-deferred-content lazyload"
                                  data-id={160}
                                  title=""
                                  alt=""
                                />
                              </span>
                            </div>
                            <div
                              className="moto-widget moto-widget-text moto-preset-default moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                              data-widget="text"
                              data-preset="default"
                              data-spacing="aaaa"
                              data-visible-on="-"
                              data-animation=""
                            >
                              <div className="moto-widget-text-content moto-widget-text-editable">
                                <p
                                  style={{ textAlign: "center" }}
                                  className="moto-text_system_14"
                                >
                                  <span className="fa"></span>
                                </p>
                                <p
                                  style={{ textAlign: "center" }}
                                  className="moto-text_normal"
                                >
                                  &nbsp;
                                </p>
                                <p
                                  style={{ textAlign: "center" }}
                                  className="moto-text_normal"
                                >
                                  When I first knew that I got pregnant, I’ve panicked
                                  a little bit, to be honest. Luckily, my good friend
                                  Janine has referred me to this pregnancy center,
                                  setting me up for their medical exams and maternity
                                  courses.
                                </p>
                                <p
                                  style={{ textAlign: "center" }}
                                  className="moto-text_normal"
                                >
                                  &nbsp;
                                </p>
                                <h3
                                  style={{ textAlign: "center" }}
                                  className="moto-text_normal"
                                >
                                  <span className="moto-color_custom1">
                                    JANE HANSEY
                                  </span>
                                </h3>
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
                              data-widget-id="wid_1595847663_files256c"
                              className="moto-widget moto-widget-image moto-widget_with-deferred-content moto-preset-2 moto-align-center moto-spacing-top-medium moto-spacing-right-auto moto-spacing-bottom-medium moto-spacing-left-auto  "
                              data-widget="image"
                            >
                              <span className="moto-widget-image-link">
                                <img
                                  data-src="/mt-demo/109600/109604/mt-content/uploads/2020/07/mt-2068_home_testimonials03.jpg"
                                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0  '%3E%3C/svg%3E"
                                  className="moto-widget-image-picture moto-widget-deferred-content lazyload"
                                  data-id={161}
                                  title=""
                                  alt=""
                                />
                              </span>
                            </div>
                            <div
                              className="moto-widget moto-widget-text moto-preset-default moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                              data-widget="text"
                              data-preset="default"
                              data-spacing="aaaa"
                              data-visible-on="-"
                              data-animation=""
                            >
                              <div className="moto-widget-text-content moto-widget-text-editable">
                                <p
                                  style={{ textAlign: "center" }}
                                  className="moto-text_system_14"
                                >
                                  <span className="fa"></span>
                                </p>
                                <p
                                  style={{ textAlign: "center" }}
                                  className="moto-text_normal"
                                >
                                  &nbsp;
                                </p>
                                <p
                                  style={{ textAlign: "center" }}
                                  className="moto-text_normal"
                                >
                                  Immediately upon knowing of my pregnancy, I’ve
                                  gotten incredibly nervous about all the risks and
                                  dangers that I might have been up to. Thank God I
                                  was able to cope with it after visiting this
                                  center’s group support.
                                </p>
                                <p
                                  style={{ textAlign: "center" }}
                                  className="moto-text_normal"
                                >
                                  &nbsp;
                                </p>
                                <h3
                                  style={{ textAlign: "center" }}
                                  className="moto-text_normal"
                                >
                                  <span className="moto-color_custom1">
                                    THERESA PALMER
                                  </span>
                                </h3>
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
                              data-widget-id="wid_1595847665_9djqsrilq"
                              className="moto-widget moto-widget-image moto-widget_with-deferred-content moto-preset-2 moto-align-center moto-spacing-top-medium moto-spacing-right-auto moto-spacing-bottom-medium moto-spacing-left-auto  "
                              data-widget="image"
                            >
                              <span className="moto-widget-image-link">
                                <img
                                  data-src="/mt-demo/109600/109604/mt-content/uploads/2020/07/mt-2068_home_testimonials02.jpg"
                                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0  '%3E%3C/svg%3E"
                                  className="moto-widget-image-picture moto-widget-deferred-content lazyload"
                                  data-id={226}
                                  title=""
                                  alt=""
                                />
                              </span>
                            </div>
                            <div
                              className="moto-widget moto-widget-text moto-preset-default moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                              data-widget="text"
                              data-preset="default"
                              data-spacing="aaaa"
                              data-visible-on="-"
                              data-animation=""
                            >
                              <div className="moto-widget-text-content moto-widget-text-editable">
                                <p
                                  style={{ textAlign: "center" }}
                                  className="moto-text_system_14"
                                >
                                  <span className="fa"></span>
                                </p>
                                <p
                                  style={{ textAlign: "center" }}
                                  className="moto-text_normal"
                                >
                                  &nbsp;
                                </p>
                                <p
                                  style={{ textAlign: "center" }}
                                  className="moto-text_normal"
                                >
                                  Immediately upon knowing of my pregnancy, i felt
                                  very welcomed from the moment I walked into the
                                  facility. They were professional as well as sincere,
                                  generous and showed me true genuine concern. Thank
                                  you!
                                </p>
                                <p
                                  style={{ textAlign: "center" }}
                                  className="moto-text_normal"
                                >
                                  &nbsp;
                                </p>
                                <h3
                                  style={{ textAlign: "center" }}
                                  className="moto-text_normal"
                                >
                                  <span className="moto-color_custom1">MARY LEE</span>
                                </h3>
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
              style={{
                backgroundImage:
                  "url(mt-demo/109600/109604/mt-content/uploads/2020/07/mt-2068_home_bg04.jpg)",
                backgroundPosition: "left top",
                backgroundRepeat: "no-repeat",
                backgroundSize: "auto"
              }}
              data-bg-position="left top"
              data-bg-image="2020/07/mt-2068_home_bg04.jpg/index.html"
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
                      className="moto-widget moto-widget-row row-gutter-0 moto-justify-content_center moto-spacing-top-medium moto-spacing-right-auto moto-spacing-bottom-medium moto-spacing-left-auto"
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
                            className="moto-widget moto-widget-row__column moto-cell col-sm-8 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
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
                                <h2 className="moto-text_201">You are not on your own.</h2>
                                <p className="moto-text_202">
                                  <br />
                                </p>
                                <p className="moto-text_202">
                                We're here to support you with complimentary and confidential services.
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
                              data-widget-id="wid_1595848307_qx80eoie5"
                              className="moto-widget moto-widget-spacer moto-preset-default moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto moto-visible-on_desktop_hidden moto-visible-on_tablet_hidden"
                              data-widget="spacer"
                              data-preset="default"
                              data-spacing="aaaa"
                              data-visible-on="+mobile-h,mobile-v"
                            >
                              <div
                                className="moto-widget-spacer-block"
                                style={{ height: 30 }}
                              />
                            </div>
                            <div
                              data-widget-id="wid_1595848089_a6cm7954o"
                              className="moto-widget moto-widget-button moto-preset-4 moto-preset-provider-default moto-align-right moto-align-left_mobile-h moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto  "
                              data-widget="button"
                            >
                              <a
                                href="/"
                                data-action="popup"
                                data-popup-id={8}
                                className="moto-widget-button-link moto-size-large moto-link"
                              >
                                <span className="fa moto-widget-theme-icon" />
                                <span className="moto-widget-button-divider" />
                                <span className="moto-widget-button-label">
                                  Make an appointment&nbsp;
                                </span>
                              </a>
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
              className="moto-widget moto-widget-row row-fixed moto-spacing-top-large moto-spacing-right-auto moto-spacing-bottom-large moto-spacing-left-auto"
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
                      className="moto-widget moto-widget-text moto-preset-default moto-spacing-top-small moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                      data-widget="text"
                      data-preset="default"
                      data-spacing="saaa"
                      data-visible-on="-"
                      data-animation=""
                      data-draggable-disabled=""
                    >
                      <div
                        className="moto-widget-text-content moto-widget-text-editable"
                        aria-multiline="true"
                      >
                        <h2
                          className="moto-text_system_6"
                          style={{ textAlign: "center" }}
                        >
                          <span className="moto-color1_1">TIPS FOR PREGNANT</span>
                        </h2>
                      </div>
                    </div>
                    <div
                      className="moto-widget moto-widget-row moto-spacing-top-medium moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                      data-grid-type="sm"
                      data-widget="row"
                      data-visible-on="-"
                      data-spacing="maaa"
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
                              data-widget-id="wid_1595848666_4cdic4qqs"
                              className="moto-widget moto-widget-image moto-widget_with-deferred-content moto-preset-default moto-align-center moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-small moto-spacing-left-auto  "
                              data-widget="image"
                            >
                              <span className="moto-widget-image-link">
                                <img
                                  data-src="/mt-demo/109600/109604/mt-content/uploads/2020/07/mt-2068_home_img05.jpg"
                                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0  '%3E%3C/svg%3E"
                                  className="moto-widget-image-picture moto-widget-deferred-content lazyload"
                                  data-id={163}
                                  title=""
                                  alt=""
                                />
                              </span>
                            </div>
                            <div
                              className="moto-widget moto-widget-text moto-preset-default moto-spacing-top-small moto-spacing-right-auto moto-spacing-bottom-medium moto-spacing-left-auto"
                              data-widget="text"
                              data-preset="default"
                              data-spacing="sama"
                              data-visible-on="-"
                              data-animation=""
                            >
                              <div className="moto-widget-text-content moto-widget-text-editable">
                                <h3 className="moto-text_203">
                                  <a
                                    href="#"
                                    target="_self"
                                    data-action="url"
                                    className="moto-link"
                                  >
                                    VITAMINS FOR PREGNANT WOMEN
                                  </a>
                                </h3>
                                <p className="moto-text_normal">&nbsp;</p>
                                <p className="moto-text_normal">
                                  Yep, contrary to some widespread false belief that
                                  women who are pregnant should just stay at home and
                                  lie on the couch idly, the importance of a healthy
                                  dose of physical activity for moms-to-be cannot be
                                  overestimated, really...
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
                              data-widget-id="wid_1595848788_e3sr2wq70"
                              className="moto-widget moto-widget-image moto-widget_with-deferred-content moto-preset-default moto-align-center moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-small moto-spacing-left-auto  "
                              data-widget="image"
                            >
                              <span className="moto-widget-image-link">
                                <img
                                  data-src="/mt-demo/109600/109604/mt-content/uploads/2020/07/mt-2068_home_img06.jpg"
                                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0  '%3E%3C/svg%3E"
                                  className="moto-widget-image-picture moto-widget-deferred-content lazyload"
                                  data-id={164}
                                  title=""
                                  alt=""
                                />
                              </span>
                            </div>
                            <div
                              className="moto-widget moto-widget-text moto-preset-default moto-spacing-top-small moto-spacing-right-auto moto-spacing-bottom-medium moto-spacing-left-auto"
                              data-widget="text"
                              data-preset="default"
                              data-spacing="sama"
                              data-visible-on="-"
                              data-animation=""
                              data-draggable-disabled=""
                            >
                              <div
                                className="moto-widget-text-content moto-widget-text-editable"
                                aria-multiline="true"
                              >
                                <h3 className="moto-text_203">
                                  <a
                                    href="#"
                                    target="_self"
                                    data-action="url"
                                    className="moto-link"
                                  >
                                    EXERCISING FOR FUTURE MOMS
                                  </a>
                                </h3>
                                <p className="moto-text_normal">
                                  <br />
                                </p>
                                <p className="moto-text_normal">
                                  Just as it goes with everything else, knowing about
                                  the situation you're caught into is useful. And the
                                  more you know on any given subject (which in our
                                  case is a pregnancy), the more you are prepared for
                                  it.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-widget-id="wid_1595848892_6w0dg6spc"
                      className="moto-widget moto-widget-button moto-preset-default moto-preset-provider-default moto-align-center moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-small moto-spacing-left-auto  "
                      data-widget="button"
                    >
                      <a
                        href="blog/index.html"
                        data-action="blog.index"
                        className="moto-widget-button-link moto-size-medium moto-link"
                      >
                        <span className="fa moto-widget-theme-icon" />
                        <span className="moto-widget-button-divider" />
                        <span className="moto-widget-button-label">View all</span>
                      </a>
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
              style={{
                backgroundImage:
                  "url(mt-demo/109600/109604/mt-content/uploads/2020/07/mt-2068_home_bg05.jpg)",
                backgroundPosition: "top",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
              }}
              data-bg-position="top"
              data-bg-image="2020/07/mt-2068_home_bg05.jpg/index.html"
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
                      className="moto-widget moto-widget-text moto-preset-default moto-spacing-top-small moto-spacing-right-auto moto-spacing-bottom-small moto-spacing-left-auto"
                      data-widget="text"
                      data-preset="default"
                      data-spacing="sasa"
                      data-visible-on="-"
                      data-animation=""
                    >
                      <div className="moto-widget-text-content moto-widget-text-editable">
                        <h2
                          style={{ textAlign: "center" }}
                          className="moto-text_system_6"
                        >
                          <span className="moto-color5_5">NEWSLETTER SIGN UP</span>
                        </h2>
                        <p
                          style={{ textAlign: "center" }}
                          className="moto-text_system_12"
                        >
                          &nbsp;
                        </p>
                        <p
                          style={{ textAlign: "center" }}
                          className="moto-text_system_12"
                        >
                          &nbsp;
                        </p>
                        <p
                          style={{ textAlign: "center" }}
                          className="moto-text_system_12"
                        >
                          Sign up and get all the latest tips and tricks for all of
                          the future parents!
                        </p>
                      </div>
                    </div>
                    <div
                      className="moto-widget moto-widget-row moto-spacing-top-medium moto-spacing-right-auto moto-spacing-bottom-small moto-spacing-left-auto"
                      data-grid-type="sm"
                      data-widget="row"
                      data-visible-on="-"
                      data-spacing="masa"
                      style={{}}
                      data-bg-position="left top"
                    >
                      <div className="container-fluid">
                        <div className="row" data-container="container">
                          <div
                            className="moto-widget moto-widget-row__column moto-cell col-sm-2 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                            style={{}}
                            data-widget="row.column"
                            data-container="container"
                            data-spacing="aaaa"
                            data-bg-position="left top"
                          ></div>
                          <div
                            className="moto-widget moto-widget-row__column moto-cell col-sm-8 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                            style={{}}
                            data-widget="row.column"
                            data-container="container"
                            data-spacing="aaaa"
                            data-bg-position="left top"
                          >
                            <div
                              id="wid_1595849166_xol8twtkc"
                              className="moto-widget moto-widget-mail_chimp moto-widget-contact_form moto-preset-default moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto  "
                              data-widget="mail_chimp"
                              data-preset="default"
                            >
                              <div
                                ng-controller="widget.MailChimp.Controller"
                                ng-init='listId = &apos;&apos;;actionAfterSubmission={"action":"none","url":"","target":"_self","id":""};resetAfterSubmission=false;'
                              >
                                <form
                                  id="wid_1595849166_xol8twtkc__form"
                                  className="moto-widget-contact_form-form"
                                  // role="form"
                                  // name="subscribeForm"
                                  // ng-submit="submit()"
                                  noValidate=""
                                >
                                  <div
                                    ng-show="sending"
                                    className="contact-form-loading"
                                  />
                                  <div className="moto-widget-contact_form-group">
                                    <label
                                      htmlFor="field_email_wid_1595849166_xol8twtkc"
                                      className="moto-widget-contact_form-label"
                                    >
                                      enter your email
                                    </label>
                                    <input
                                      type="text"
                                      className="moto-widget-contact_form-field moto-widget-contact_form-input"
                                      placeholder="enter your email *"
                                      ng-blur="validate('email')"
                                      required=""
                                      ng-model-options="{ updateOn: 'blur' }"
                                      name="email"
                                      id="field_email_wid_1595849166_xol8twtkc"
                                      ng-model="message.email"
                                    />
                                    <span
                                      className="moto-widget-contact_form-field-error ng-cloak"
                                      ng-cloak=""
                                      // ng-show="subscribeForm.email.$invalid && !subscribeForm.email.$pristine && !subscribeForm.email.emailInvalid"
                                    >
                                      Field is required
                                    </span>
                                    <span
                                      className="moto-widget-contact_form-field-error ng-cloak"
                                      ng-cloak=""
                                      // ng-show="subscribeForm.email.emailInvalid && !subscribeForm.email.$pristine"
                                    >
                                      Incorrect email
                                    </span>
                                  </div>
                                  <input
                                    type="hidden"
                                    name="status"
                                    // defaultValue="subscribed"
                                  />
                                  <div
                                    className="moto-widget-contact_form-success ng-cloak"
                                    ng-cloak=""
                                    ng-show="showSuccessMessage"
                                  >
                                    You have successfully subscribed to the newsletter
                                  </div>
                                  <div
                                    className="moto-widget-contact_form-danger ng-cloak"
                                    ng-cloak=""
                                    ng-show="emailError && !isSubscribed"
                                  >
                                    You were not subscribed. Please try again
                                  </div>
                                  <div
                                    className="moto-widget-contact_form-danger ng-cloak"
                                    ng-cloak=""
                                    // ng-show="emailError && isSubscribed"
                                  >
                                    You are already subscribed to this newsletter
                                  </div>
                                  <div className="moto-widget-contact_form-buttons">
                                    <div
                                      data-widget-id="wid__button__65aa542f87418"
                                      className="moto-widget moto-widget-button moto-preset-5 moto-preset-provider-default moto-align-center moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto  "
                                      data-widget="button"
                                    >
                                      <button
                                        name="submit"
                                        className="moto-widget-button-link moto-size-medium moto-link"
                                      >
                                        <span className="fa moto-widget-theme-icon" />
                                        <span className="moto-widget-button-divider" />
                                        <span className="moto-widget-button-label">
                                          Subscribe
                                        </span>
                                      </button>
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                          <div
                            className="moto-widget moto-widget-row__column moto-cell col-sm-2 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                            style={{}}
                            data-widget="row.column"
                            data-container="container"
                            data-spacing="aaaa"
                            data-bg-position="left top"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div
              className="moto-widget moto-widget-row row-fixed moto-spacing-top-large moto-spacing-right-auto moto-spacing-bottom-large moto-spacing-left-auto"
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
                      data-widget-id="wid_1595849656_0vj628ugx"
                      className="moto-widget moto-widget-spacer moto-preset-default moto-spacing-top-large moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto moto-visible-on_tablet_hidden moto-visible-on_mobile-h_hidden moto-visible-on_mobile-v_hidden"
                      data-widget="spacer"
                      data-preset="default"
                      data-spacing="laaa"
                      data-visible-on="+desktop"
                    >
                      <div
                        className="moto-widget-spacer-block"
                        style={{ height: 10 }}
                      />
                    </div>
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
                              className="moto-widget moto-widget-text moto-preset-default moto-spacing-top-small moto-spacing-right-auto moto-spacing-bottom-medium moto-spacing-left-auto"
                              data-widget="text"
                              data-preset="default"
                              data-spacing="sama"
                              data-visible-on="-"
                              data-animation=""
                            >
                              <div className="moto-widget-text-content moto-widget-text-editable">
                                <h2 className="moto-text_system_6">CONTACT US</h2>
                              </div>
                            </div>
                            <div
                              className="moto-widget moto-widget-row moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                              data-grid-type="md"
                              data-widget="row"
                              data-visible-on="-"
                              data-spacing="aaaa"
                              style={{}}
                              data-bg-position="left top"
                            >
                              <div className="container-fluid">
                                <div className="row" data-container="container">
                                  <div
                                    className="moto-widget moto-widget-row__column moto-cell col-md-11 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                                    style={{}}
                                    data-widget="row.column"
                                    data-container="container"
                                    data-spacing="aaaa"
                                    data-bg-position="left top"
                                  >
                                    <div
                                      className="moto-widget moto-widget-text moto-preset-default moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-small moto-spacing-left-auto"
                                      data-widget="text"
                                      data-preset="default"
                                      data-spacing="aasa"
                                      data-visible-on="-"
                                      data-animation=""
                                    >
                                      <div className="moto-widget-text-content moto-widget-text-editable">
                                        <h3 className="moto-text_system_13">
                                          <strong>400 MADISON ST.,</strong>
                                        </h3>
                                        <h3 className="moto-text_system_13">
                                          <strong>ALEXANDRIA, VA, US</strong>
                                        </h3>
                                        <p className="moto-text_system_13">&nbsp;</p>
                                        <p className="moto-text_system_13">
                                          <a
                                            data-action="call"
                                            className="moto-link"
                                            href="tel:1234567890"
                                          >
                                            <span className="moto-color1_3">
                                              123.456.7890
                                            </span>
                                          </a>
                                        </p>
                                        <p className="moto-text_normal">&nbsp;</p>
                                        <p className="moto-text_system_9">
                                          <a
                                            data-action="mail"
                                            className="moto-link"
                                            href="mailto:ItsaGirl@demolink.org"
                                          >
                                            ItsaGirl@demolink.org
                                          </a>
                                        </p>
                                        <p className="moto-text_system_13">&nbsp;</p>
                                        <p className="moto-text_normal">
                                          Over the last few years our team of doctors,
                                          therapists and pregnancy experts have
                                          already helped thousands of mothers-to-be
                                          and fathers-to-be to bring new life into
                                          this world!f
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="moto-widget moto-widget-row__column moto-cell col-md-1 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                                    style={{}}
                                    data-widget="row.column"
                                    data-container="container"
                                    data-spacing="aaaa"
                                    data-bg-position="left top"
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="moto-widget moto-widget-row__column moto-cell col-sm-8 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                            style={{}}
                            data-widget="row.column"
                            data-container="container"
                            data-spacing="aaaa"
                            data-bg-position="left top"
                          >
                            <div
                              data-widget-id="wid_1595849512_pux6yub7s"
                              className="moto-widget moto-widget-map moto-widget_with-deferred-content moto-preset-default moto-spacing-top-small moto-spacing-right-auto moto-spacing-bottom-small moto-spacing-left-auto  "
                              data-widget="map"
                              data-spacing="sasa"
                            >
                              <div className="moto-widget-cover" />
                              <iframe
                                className="moto-widget-map-frame moto-widget-deferred-content lazyload"
                                height={415}
                                data-src="//maps.google.com/maps?q=400 MADISON ST., ALEXANDRIA, VA, US&z=14&t=m&output=embed"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-widget-id="wid_1595849668_duco49z6n"
                      className="moto-widget moto-widget-spacer moto-preset-default moto-spacing-top-large moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto moto-visible-on_tablet_hidden moto-visible-on_mobile-h_hidden moto-visible-on_mobile-v_hidden"
                      data-widget="spacer"
                      data-preset="default"
                      data-spacing="laaa"
                      data-visible-on="+desktop"
                    >
                      <div
                        className="moto-widget-spacer-block"
                        style={{ height: 10 }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </section>
        </div>
        <Footer />
        {/* <div data-moto-back-to-top-button="" className="moto-back-to-top-button">
          <a ng-click="toTop($event)" className="moto-back-to-top-button-link">
            <span className="moto-back-to-top-button-icon fa" />
          </a>
        </div> */}
        {/* <div
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
                      "url(mt-demo/109600/109604/mt-content/uploads/2020/07/mt-2068_doctors_team02.jpg)"
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
                      href="../t.me/index.html#"
                      className="moto-widget-callback__link moto-widget-callback__link-telegram_chat"
                      title="Telegram"
                      target="_blank"
                    />
                  </div>
                  <div className="moto-widget-callback__more-details-item">
                    <div className="moto-widget-callback__overlay moto-widget-callback__overlay_link" />
                    <a
                      href="../wa.me/index.html#"
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
{/* hhhhh */}


    </>
  )
}

export default Home
