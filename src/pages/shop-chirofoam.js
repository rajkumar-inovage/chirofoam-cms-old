import React from 'react'
import {useStaticQuery, Link, graphql} from 'gatsby'
import ReactHtmlParser from 'react-html-parser'
import { Element } from 'react-scroll'
import Header from '../components/header'
import Footer from '../components/footer'
import Banner from '../components/banner-shop-chirofoam'
import { Container, Row, Col, Media } from 'reactstrap'
import SEO from '~/components/seo'
import run from '../assets/img/only-man.webp'
import ScrollAnimation from 'react-animate-on-scroll'

export default props => {
  const { wordpressPage } = useStaticQuery(
    graphql`
      query {
        wordpressPage(slug: {eq:"shop-chirofoam"}) {
          acf {
            grid1_text
            grid1_image {
              alt_text
              localFile {
                childImageSharp {
                  fluid {
                    src
                  }
                }
              }
            }
            grid2_text
            grid2_image {
              alt_text
              localFile {
                childImageSharp {
                  fluid {
                    src
                  }
                }
              }
            }
            grid3_text
            grid3_image {
              alt_text
              localFile {
                childImageSharp {
                  fluid {
                    src
                  }
                }
              }
            }
            chiropractor_title1
            chiropractor_text1
            chiropractor_button1_text
            chiropractor_button1_link
            chiropractor_title2
            chiropractor_text2
            chiropractor_value1
            chiropractor_value1_text
            chiropractor_value2
            chiropractor_value2_text
            chiropractor_value3
            chiropractor_value3_text
            chiropractor_value4
            chiropractor_value4_text
            chiropractor_button2_text
            chiropractor_button2_link
            lumber_support_title
            lumber_support_description
            lumber_support_button_text
            lumber_support_button_link
            lumber_support_image {
              alt_text
              localFile {
                childImageSharp {
                  fluid {
                    src
                  }
                }
              }
            }
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
      <SEO title={wordpressPage.title} description="THE COMFORT AND SUPPORT YOU NEED FOR A BETTER SLEEP We have two models to choose from. Whatever your needs are, Chirofoam has your back!" />
      <Header />
      <Banner />
      <section className="mt-4 mb py-4" style={{ backgroundColor: '#fff' }}>
        <ScrollAnimation animateIn="fadeInUp">
          <Row className="no-gutters">
            <Col
              sm="4"
              className="card1 com-card bg-image mx-3 mb-2 mb-sm-0 m-sm-0 m-lg-0" style={{backgroundImage:`url(${wordpressPage.acf.grid1_image.localFile.childImageSharp.fluid.src})`}}>
              <div className="card-layer">
                <span
                  className="proxima-b text-center text-white"
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '0',
                    right: '0',
                  }}
                >
                  {wordpressPage.acf.grid1_text}
                </span>
              </div>
            </Col>
            <Col
              sm="4"
              className="card2 com-card bg-image mx-3 mb-2 mb-sm-0 m-sm-0" style={{backgroundImage:`url(${wordpressPage.acf.grid2_image.localFile.childImageSharp.fluid.src})`}}>
              <div className="card-layer">
                <span
                  className="proxima-b text-center text-white"
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '0',
                    right: '0',
                  }}
                >
                  {wordpressPage.acf.grid2_text}
                </span>
              </div>
            </Col>
            <Col
              sm="4"
              className="card3 com-card bg-image mx-3 mb-2 mb-sm-0 m-sm-0" style={{backgroundImage:`url(${wordpressPage.acf.grid3_image.localFile.childImageSharp.fluid.src})`}}>
              <div className="card-layer">
                <span
                  className="proxima-b text-center text-white"
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '0',
                    right: '0',
                  }}
                >
                  {wordpressPage.acf.grid3_text}
                </span>
              </div>
            </Col>
          </Row>
        </ScrollAnimation>
      </section>

      <section className="py-4 pt-sm-4 pt-lg-4 pt-xl-4 pb-sm-4 pb-lg-4 pb-xl-4 mb-0 mb-sm-3 mb-lg-3 mb-xl-3 mattresses">
        <div className="pt-0 pt-sm-5 container-large">
          <Element name="product">
            <ScrollAnimation animateIn="fadeInUp">
              <h3 className="text-center lead-text lead-sm-text lead-md-text lead-lg-text lead-xl-text color-primary erbaum-bold display-5 w-100">
                THE COMFORT AND SUPPORT YOU NEED FOR A BETTER SLEEP
              </h3>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInUp">
              <p className="col-12 col-sm-7 text-center pb-4 pb-sm-5 px-0 px-sm-2 pt-1 mb-5 color-primary proxima-b space-1 m-auto sub-text sub-sm-text sub-md-text sub-xl-text">
                We have two models to choose from. Whatever your needs are,
                Chirofoam has your back!
              </p>
            </ScrollAnimation>
            <Row className="no-gutters row-eq-height pb-5 m-0">
              <Col
                sm="12"
                className="col-lg-6 col-xl-6 product-border-right pr-0 pr-sm-2 position-relative"
              >
                <div className="pr-0 pr-lg-5 pr-xl-5 mr-0 mr-sm-4">
                  {wordpressPage.acf.product1_image && wordpressPage.acf.product1_image.localFile && (<img src={wordpressPage.acf.product1_image.localFile.childImageSharp.fluid.src} alt={wordpressPage.acf.product1_image.alt_text} width="100%"/>)}
                  <Link to={wordpressPage.acf.product1_button_link}>
                    <h3 className="text-left text-sm-left text-lg-right text-xl-right color-primary erbaum-bold pl-0">
                      {wordpressPage.acf.product1_title}
                    </h3>
                  </Link>
                  <p className="text-left text-sm-left text-lg-right text-xl-right color-primary proxima-eb space-1 pt-1 mb-0 text-1">
                    {wordpressPage.acf.product1_description}
                  </p>
                  <br />
                  <div className="text-left text-sm-left text-lg-right color-primary proxima-eb space-1 mb-0 text-1">
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
                className="col-lg-6 col-xl-6 pl-0 pl-sm-0 pl-lg-2 pl-xl-2 position-relative mt-sm-5 mt-lg-0 mt-xl-0"
              >
                <div className="pl-0 pl-sm-0 pl-lg-5 pl-xl-5 ml-0 ml-sm-0 ml-lg-4 ml-xl-4">
                   {wordpressPage.acf.product2_image && wordpressPage.acf.product2_image.localFile && (<img src={wordpressPage.acf.product2_image.localFile.childImageSharp.fluid.src} alt={wordpressPage.acf.product2_image.alt_text} width="100%"/>)}
                  <Link to={wordpressPage.acf.product2_button_link}>
                    <h3 className="color-primary erbaum-bold pr-0">
                      {wordpressPage.acf.product2_title}
                    </h3>
                  </Link>
                  <p className="text-left color-primary proxima-eb space-1 pt-1 mb-0 text-1">
                    {wordpressPage.acf.product2_description}
                  </p>
                  <br />
                  <div className="text-left color-primary proxima-eb space-1 mb-0 text-1">
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
          </Element>
        </div>
      </section>
      <ScrollAnimation animateIn="fadeInUp">
        <section className="py-4 pt-sm-4 pb-sm-4 approved bg-image">
          <Container className="">
            <Row className="pt-3 no-gutters m-0 position-relative">
              <Col className="align-middle col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5">
                <div className="white-dots">
                  <img
                    src={run}
                    alt="run"
                    width="75%"
                    className="mt-sm-3 pl-sm-5 ml-sm-5"
                    useMap="#workmap"
                  />
                </div>
              </Col>
              <Col className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7">
                <div className="text-white mb-4">
                  <h3 className="approved-title text-white erbaum-bold lead-text lead-sm-text lead-md-text lead-lg-text lead-xl-text">
                    {wordpressPage.acf.chiropractor_title1}
                  </h3>
                  <p className="proxima-b space-1 p-0 pt-sm-1 text-1">
                    {wordpressPage.acf.chiropractor_text1}
                  </p>
                  <p className="cta mt-3 mt-sm-0 mt-lg-0 mt-xl-0 pt-sm-0 pt-lg-0 pt-xl-0 mb-sm-2">
                    <Link to={wordpressPage.acf.chiropractor_button1_link} className="btn-cta bg-transparent border-0 outline-none text-white erbaum-bold space-1">
                      {wordpressPage.acf.chiropractor_button1_text}
                    </Link>
                  </p>
                </div>

                <div className="text-white mb-4 pt-1 pr-0 pr-sm-5">
                  <h3 className="approved-title text-white erbaum-bold pt-0 pt-sm-3 lead-text lead-sm-text lead-md-text lead-lg-text lead-xl-text">
                    {wordpressPage.acf.chiropractor_title2}
                  </h3>
                  <p className="proxima-b space-1 p-0 pt-sm-2 text-1">
                   {wordpressPage.acf.chiropractor_text2}
                  </p>
                  <div className="ml-0 ml-sm-4 pt-0 pt-sm-0 pl-0 pr-sm-5">
                    <Media className="my-3">
                      <span className="white-dot-1 white-dot position-absolute"></span>
                      <div className="d-flex h-effect">
                        <Media
                          left
                          middle
                          className="my-0 pr-4 h4 erbaum-bold"
                          style={{ fontSize: '32px' }}
                        >
                          {wordpressPage.acf.chiropractor_value1}
                        </Media>
                        <Media
                          body
                          middle
                          className="proxima-r pl-sm-3 text-1 align-self-center"
                        >
                         {wordpressPage.acf.chiropractor_value1_text}
                        </Media>
                      </div>
                    </Media>
                    <Media className="py-3">
                      <span className="white-dot-2 white-dot position-absolute"></span>
                      <div className="d-flex h-effect">
                        <Media
                          left
                          middle
                          className="my-0 pr-4 h4 erbaum-bold"
                          style={{ fontSize: '32px' }}
                        >
                          {wordpressPage.acf.chiropractor_value2}
                        </Media>
                        <Media
                          body
                          middle
                          className="proxima-r pl-sm-3 text-1 align-self-center"
                        >
                          {wordpressPage.acf.chiropractor_value2_text}
                        </Media>
                      </div>
                    </Media>
                    <Media className="py-3">
                      <span className="white-dot-3 white-dot position-absolute"></span>
                      <div className="d-flex h-effect">
                        <Media
                          left
                          middle
                          className="my-0 pr-4 h4 erbaum-bold"
                          style={{ fontSize: '32px' }}
                        >
                          {wordpressPage.acf.chiropractor_value3}
                        </Media>
                        <Media
                          body
                          middle
                          className="proxima-r pl-sm-3 pt-sm-1 text-1 align-self-center"
                        >
                          {wordpressPage.acf.chiropractor_value3_text}
                        </Media>
                      </div>
                    </Media>
                    <Media className="py-3">
                      <span className="white-dot-4 white-dot position-absolute"></span>
                      <div className="d-flex h-effect">
                        <Media
                          left
                          middle
                          className="my-0 pr-4 h4 erbaum-bold"
                          style={{ fontSize: '32px' }}
                        >
                          {wordpressPage.acf.chiropractor_value4}
                        </Media>
                        <Media
                          body
                          middle
                          className="proxima-r pl-sm-3 pt-sm-2 text-1 align-self-center"
                        >
                          {wordpressPage.acf.chiropractor_value4_text}
                        </Media>
                      </div>
                    </Media>
                  </div>
                  <p className="cta mt-3 mt-sm-3 pt-sm-4 pt-lg-4 pt-xl-4 mb-sm-2 pl-0">
                    <Link
                      to={wordpressPage.acf.chiropractor_button2_link}
                      className="btn-cta text-white erbaum-bold space-1"
                    >
                      {wordpressPage.acf.chiropractor_button2_text}
                    </Link>
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </ScrollAnimation>
      <section className="py-sm-5 py-4">
        <Container>
          <Row>
            <Col sm="6" className="position-relative" style={{ zIndex: '9' }}>
              <ScrollAnimation animateIn="fadeInUp">
                <h4 className="lead-text-font color-primary erbaum-bold display-5">
                  {wordpressPage.acf.lumber_support_title}
                </h4>
              </ScrollAnimation>
              <div
                className="mt-4 color-primary proxima-r"
                style={{ fontSize: '0.9rem' }}
              >
                {ReactHtmlParser(wordpressPage.acf.lumber_support_description)}
              </div>
              <p className="cta pr-0 pt-3">
                <Link
                  to={wordpressPage.acf.lumber_support_button_link}
                  className="btn-cta color-primary erbaum-bold space-1"
                  style={{ marginRight: '1rem' }}
                >
                 {wordpressPage.acf.lumber_support_button_text}
                </Link>
              </p>
            </Col>
            <Col sm="6">
              <img          
                  src={wordpressPage.acf.lumber_support_image.localFile.childImageSharp.fluid.src}
                  alt={wordpressPage.acf.lumber_support_image.alt_text}
                   width="100%"
                />
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </>
  )
}

