import React from 'react'
import Banner from '../components/banner'
import Footer from '../components/footer'
import { Container, Row, Col } from 'reactstrap'
import SEO from '~/components/seo'
import ReactHtmlParser from 'react-html-parser'
import Logo from '../assets/img/logo-home.png'
import circle1 from '../assets/img/circle1.webp'
import circle2 from '../assets/img/circle2.webp'
import circle3 from '../assets/img/circle3.webp'
import circle4 from '../assets/img/circle4.webp'
import circle5 from '../assets/img/circle5.webp'
import {useStaticQuery, Link , graphql} from 'gatsby'
import HomePageSlider2 from '../components/HomePageSlider2'
import SlickSlider from '../components/FiveKeys'
import ScrollAnimation from 'react-animate-on-scroll'

export default props => {
  const { wordpressPage } = useStaticQuery(
    graphql`
      query {
        wordpressPage(acf: {}, slug: {eq: "homepage"}) {
            acf {
                section_1_title_1
                section_1_title_2
                section_1_text
                section_1_button_1
                section_1_button_2
                section_1_button_3
                section_1_image {
                  alt_text
                  localFile {
                    childImageSharp {
                      fluid {
                        src
                      }
                    }
                  }
                }
                key_features_title
                key_features_sub_title
                key_features_card_1_title
                key_features_card_1_text
                key_features_card_2_title
                key_features_card_2_text
                key_features_card_3_title
                key_features_card_3_text
                key_features_card_4_title
                key_features_card_4_text
                key_features_card_5_title
                key_features_card_5_text
                max_support_image {
                    localFile {
                      childImageSharp {
                        fluid {
                          src
                        }
                      }
                    }
                  }
                max_support_title
                max_support_text
                max_support_button
                product_showcase_title
                product_showcase_sub_title
                review_title
                review_sub_title
                review_text
                review_button
                product1_title
                product1_description
                product1_features
                product1_button_link
                product1_image {
                  alt_text
                  localFile {
                    childImageSharp {
                      fluid {
                        src
                      }
                    }
                  }
                }
                product2_title
                product2_description
                product2_features
                product2_button_link
                product2_image {
                  alt_text
                  localFile {
                    childImageSharp {
                      fluid {
                        src
                      }
                    }
                  }
                }
              }
          }
      }
    `
    )
  return (
    <>
      <SEO title="Home" image={Logo} imageWidth={200} imageHeight={44} />
      <main id="homepage">
        <Banner />
        <section className="py-4 py-sm-4 py-lg-4 py-xl-4 active-style">
          <ScrollAnimation animateIn="fadeInUp">
            <div className="container-large py-0 py-sm-5 py-lg-5 py-xl-5 px-3 px-sm-3">
              <Row className="pt-0 pt-sm-4 pt-lg-4 pt-xl-4 d-flex m-0">
                <Col
                  sm="12"
                  className="pt-0 pt-sm-12 pt-lg-12 pt-xl-2 col-md-6 col-lg-6 col-xl-6"
                >
                  <small
                    className="filson-pro-reg color-primary space-4 pl-0 pl-sm-2 pl-lg-2 pl-xl-2"
                    style={{ fontSize: '18px' }}
                  >
                    {wordpressPage.acf.section_1_title_1}
                  </small>
                  <h2 className="erbaum-bold color-primary pt-0 pt-sm-2 pt-lg-2 pt-xl-2 animated fadeInUp slow">
                    {wordpressPage.acf.section_1_title_2}
                  </h2>
                  <div className="proxima-eb color-primary space-1 pb-0 pb-sm-3 pb-lg-3 pb-xl-3 text-1 text-justify text-md-left">
                   {ReactHtmlParser(wordpressPage.acf.section_1_text)}
                  </div>
                  <p className="cta mt-0 pt-sm-2 pt-lg-2 pt-xl-2 d-none">
                    <button className="btn-cta bg-transparent border-0 color-primary erbaum-bold space-1">
                      CALL TO ACTION
                    </button>
                  </p>
                </Col>
                <Col
                  sm="12"
                  className="col-md-6 col-lg-6 col-xl-6 px-0 px-sm-0 px-md-2 px-lg-3 px-xl-4"
                >
                  {(wordpressPage.acf.section_1_image !== null) && <img src={wordpressPage.acf.section_1_image.localFile.childImageSharp.fluid.src} alt={wordpressPage.acf.section_1_image.alt_text} width="541" height="365" className="img-fluid" />}
                  <ul className="list-unstyled mt-3 extra-link text-center d-block text-lg-right text-xl-right text-md-right extra-link">
                    <li className="mr-1 mr-sm-2 mr-lg-3">
                      <Link
                        to={wordpressPage.acf.section_1_button_1}
                        className="mr-sm-3 mr-lg-3 mr-xl-3 color-primary erbaum-bold position-relative story"
                      >
                        OUR STORY
                      </Link>
                    </li>
                    <li className="mr-1 mr-sm-2 mr-lg-3">
                      <Link
                        to={wordpressPage.acf.section_1_button_2}
                        className="mr-sm-3 mr-lg-3 mr-xl-3 color-primary erbaum-bold position-relative location"
                      >
                        LOCATIONS
                      </Link>
                    </li>
                    <li className="mr-1 mr-sm-2 mr-lg-3">
                      <Link
                        to={wordpressPage.acf.section_1_button_3}
                        className="mr-sm-3 mr-lg-3 mr-xl-3 color-primary erbaum-bold position-relative online"
                      >
                        BUY ONLINE
                      </Link>
                    </li>
                  </ul>
                </Col>
              </Row>
            </div>
          </ScrollAnimation>
        </section>
        <section className="py-4 pt-sm-1 pb-sm-1 key-feature">
          <ScrollAnimation animateIn="fadeInUp">
            <Container className="py-0 pt-sm-0 pb-sm-1">
              <Row className="pb-sm-3 pb-lg-4 pb-xl-3 pb-0 m-0">
                <h3
                  className="text-center lead-text lead-sm-text lead-md-text lead-lg-text lead-xl-text color-primary erbaum-bold animated fadeInUp slow"
                  style={{ width: '100%' }}
                >
                  {wordpressPage.acf.key_features_title}
                </h3>
                <p className="text-center pb-5 pb-sm-4 pt-2 mb-5 color-primary proxima-b m-auto col-12 col-sm-10 col-lg-8 space-1 sub-text sub-sm-text sub-md-text sub-xl-text">
                  {wordpressPage.acf.key_features_sub_title}
                </p>
                <div
                  style={{ margin: '0px auto' }}
                  className="key-features-inner 5-key py-5 overflow-hidden my-0 my-sm-0 my-md-3 my-lg-4 my-xl-5"
                >
                  <SlickSlider />
                </div>
              </Row>
            </Container>
          </ScrollAnimation>
        </section>
        <section className="py-5 max-support position-relative">
          <ScrollAnimation animateIn="fadeInUp">
            <div className="container-large p-0">
              <Row className="mx-0">
                <Col className="col-12 col-md-5 col-lg-5 col-xl-5 pt-0 pt-lg-5 pt-xl-5 pb-3 pb-sm-0 pb-md-3 pb-lg-5 pb-xl-5">
                  <h2 className="erbaum-bold text-white ml-3 animated fadeInUp slow">
                    {wordpressPage.acf.max_support_title}
                  </h2>
                  <div className="text-white proxima-r feat pt-0 pt-sm-1 ml-3 text-1 mb-2">
                    {ReactHtmlParser(wordpressPage.acf.max_support_text)}
                  </div>
                  <p className="cta mt-0 pt-sm-3 pt-lg-3 pt-xl-3 mb-sm-2 ml-3">
                    <Link
                      to={wordpressPage.acf.max_support_button}
                      className="btn-cta text-white erbaum-bold space-1"
                    >
                      READ MORE
                    </Link>
                  </p>
                </Col>
                <Col className="col-12 col-md-7 col-lg-7 col-xl-7 key-tools">
                  <div className="key-tooltip key-tooltip-1">
                    <div className="tooltiptext tool-tip-1">
                      <div className="tooltip-image d-fex d-sm-flex">
                        <p className="filson-pro-reg text-1 pt-3">
                          Bio Foam Support Core
                        </p>
                        <img
                          src={circle1}
                          alt="Bio Foam Support Core"
                          width="150px"
                          height="150px"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="key-tooltip key-tooltip-2">
                    <div className="tooltiptext tool-tip-2">
                      <div className="tooltip-image d-flex d-sm-flex">
                        <p className="filson-pro-reg text-1 pt-3">
                          Chirofoam Lumbar Support
                        </p>
                        <img
                          src={circle4}
                          alt="Chirofoam Lumbar Support"
                          width="150px"
                          height="150px"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="key-tooltip key-tooltip-3">
                    <div className="tooltiptext tool-tip-3">
                      <div className="tooltip-image d-flex d-sm-flex">
                        <p className="filson-pro-reg text-1 pt-3">
                          Firm Support Chirofoam™
                        </p>
                        <img
                          src={circle5}
                          alt="Firm Support Chirofoam™"
                          width="150px"
                          height="150px"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="key-tooltip key-tooltip-4">
                    <div className="tooltiptext tool-tip-4">
                      <div className="tooltip-image d-flex d-sm-flex">
                        <p className="filson-pro-reg text-1 pt-3">
                          Cool Gel Infused Memory Foam
                        </p>
                        <img
                          src={circle2}
                          alt="Cool Gel Infused Memory Foam"
                          width="150px"
                          height="150px"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="key-tooltip key-tooltip-5">
                    <div className="tooltiptext tool-tip-5">
                      <div className="tooltip-image d-flex d-sm-flex">
                        <p className="filson-pro-reg text-1 pt-3">
                          Soft Cotton Cover with Ultra Durable Denim Border
                        </p>
                        <img
                          src={circle3}
                          alt="Soft Cotton Cover with Ultra Durable Denim Border"
                          width="150px"
                          height="150px"
                        />
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </ScrollAnimation>
        </section>

        <section className="py-5 mattresses">
          <ScrollAnimation animateIn="fadeInUp">
            <div className="container-large">
              <h3 className="text-center lead-text lead-sm-text lead-md-text lead-lg-text lead-xl-text color-primary erbaum-bold display-5 w-100">
                {wordpressPage.acf.product_showcase_title}
              </h3>
              <p className="col-12 col-sm-7 text-center pb-4 pb-sm-5 px-0 px-sm-2 pt-1 mb-5 color-primary proxima-b space-1 m-auto sub-text sub-sm-text sub-md-text sub-xl-text">
                {wordpressPage.acf.product_showcase_sub_title}
              </p>
              <Row className="no-gutters row-eq-height pb-0 pb-lg-5 m-0 px-0 px-sm-2 px-lg-0">
                <Col
                  sm="12"
                  className="col-lg-6 col-xl-6 product-border-right pr-0 pr-sm-2 position-relative"
                >
                  <div className="pr-0 pr-lg-5 pr-xl-5 mr-0 mr-sm-4">
                    <div className="text-center">
                      {wordpressPage.acf.product1_image && wordpressPage.acf.product1_image.localFile && (<img src={wordpressPage.acf.product1_image.localFile.childImageSharp.fluid.src} alt={wordpressPage.acf.product1_image.alt_text} className="img-fluid" width="524" height="285" />)}
                    </div>
                    <Link to={wordpressPage.acf.product1_button_link}>
                      <h3 className="text-left text-sm-left text-lg-right text-xl-right color-primary erbaum-bold pl-0">
                        {wordpressPage.acf.product1_title}
                      </h3>
                    </Link>
                    <p className="text-justify text-md-left text-lg-right text-xl-right color-primary proxima-eb space-1 pt-1 mb-4 text-1">
                      {wordpressPage.acf.product1_description}
                    </p>
                    <div className="text-left text-sm-left text-lg-right color-primary proxima-eb space-1 mb-4 text-1">
                        {ReactHtmlParser(wordpressPage.acf.product1_features)}
                    </div>
                  </div>
                  <p className="cta mt-0 pt-sm-0 pt-lg-0 pt-xl-0 position-absolute left-btn">
                    <Link
                      to={wordpressPage.acf.product1_button_link}
                      className="btn-cta color-primary erbaum-bold space-1"
                    >
                      BUY NOW
                    </Link>
                  </p>
                </Col>

                <Col
                  sm="12"
                  className="col-lg-6 col-xl-6 pl-0 pl-sm-0 pl-lg-2 pl-xl-2 position-relative mt-5 mt-lg-0 mt-xl-0"
                >
                  <div className="pl-0 pl-sm-0 pl-lg-5 pl-xl-5 ml-0 ml-sm-0 ml-lg-4 ml-xl-4">
                    <div className="text-center">
                     {wordpressPage.acf.product2_image && wordpressPage.acf.product2_image.localFile && (<img src={wordpressPage.acf.product2_image.localFile.childImageSharp.fluid.src} alt={wordpressPage.acf.product2_image.alt_text} className="img-fluid" width="524" height="285" />)}
                    </div>
                    <Link to={wordpressPage.acf.product2_button_link}>
                      <h3 className="color-primary erbaum-bold pr-0">
                        {wordpressPage.acf.product2_title}
                      </h3>
                    </Link>
                    <p className="text-justify text-md-left color-primary proxima-eb space-1 pt-1 mb-4 text-1">
                      {wordpressPage.acf.product2_description}
                    </p>
                    <div className="text-left color-primary proxima-eb space-1 mb-4 text-1">
                      {ReactHtmlParser(wordpressPage.acf.product2_features)}
                    </div>
                  </div>
                  <p className="cta mt-0 pt-sm-0 pt-lg-0 pt-xl-0 position-absolute right-btn">
                    <Link
                      to={wordpressPage.acf.product2_button_link}
                      className="btn-cta color-primary erbaum-bold space-1"
                    >
                      BUY NOW
                    </Link>
                  </p>
                </Col>
              </Row>
            </div>
          </ScrollAnimation>
        </section>

        <div className="homepage-slider-2">
          <HomePageSlider2 />
        </div>
        <section className="py-5 pt-sm-5 px-0 our-customer">
          <ScrollAnimation animateIn="fadeInUp">
            <div className="container-large py-0 py-sm-0 py-md-0 py-lg-5 py-xl-5">
              <Row className="pt-3 pb-3 pb-sm-0 no-gutters">
                <Col sm="6" className="px-0">
                  <div
                    className="pl-0 pl-sm-4 pt-0 pt-sm-3"
                    style={{ width: '100%', maxWidth: '605px', float: 'right' }}
                  >
                    <h3 className="color-primary erbaum-bold lead-text lead-sm-text lead-md-text lead-lg-text lead-xl-text text-uppercase">
                      {wordpressPage.acf.review_title}
                    </h3>
                    <h5 className="filson-pro-reg color-primary pt-2 text-2">
                      {wordpressPage.acf.review_sub_title}
                    </h5>
                    <div
                      className="text-left proxima-eb space-1 pt-1 mb-0 text-1"
                      style={{ color: '#808080' }}
                    >
                     {ReactHtmlParser(wordpressPage.acf.review_text)}
                    </div>
                    <p className="cta mt-3 pt-sm-4 pt-lg-4 pt-xl-4">
                      <Link
                        to="/reviews/"
                        className="btn-cta color-primary erbaum-bold space-1 text-uppercase"
                      >
                        Read Reviews
                      </Link>
                    </p>
                  </div>
                </Col>
                <Col sm="6" className="align-middle rating-and-review">
                  <p className="text-center w-100 pt-0 pt-sm-2 pt-md-3 pt-lg-5 pt-xl-5 pb-0 mb-0">
                    <i className="fa fa-star star-small"></i>
                    <i className="fa fa-star star-medium ml-2"></i>
                    <i className="fa fa-star star-large mx-2"></i>
                    <i className="fa fa-star star-medium mr-2"></i>
                    <i className="fa fa-star star-small"></i>
                  </p>
                </Col>
              </Row>
            </div>
          </ScrollAnimation>
        </section>
        <Footer />
      </main>
    </>
  )
}
