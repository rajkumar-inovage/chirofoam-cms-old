import React from 'react'
import {useStaticQuery, Link } from 'gatsby'
import ReactHtmlParser from 'react-html-parser'
import Header from '../components/header'
import Footer from '../components/footer'
import { Container, Jumbotron, Row, Col } from 'reactstrap'
import SEO from '~/components/seo'
import ScrollAnimation from 'react-animate-on-scroll'

const Chiropractor = (data) => {
     const { wordpressPage } = useStaticQuery(
    graphql`
      query {
        wordpressPage(acf: {}, slug: {eq:"chiropractor-recommended"}) {
            acf {
              banner_subtitle
              banner_title
              section1_title1
              section1_description1
              section1_image1 {
                  alt_text
                  localFile {
                    childImageSharp {
                      fluid {
                        src
                      }
                    }
                  }
                }
              section1_title2
              section1_description2
              section1_image2 {
                  alt_text
                  localFile {
                    childImageSharp {
                      fluid {
                        src
                      }
                    }
                  }
                }
              section1_title3
              section1_description3
              section1_image3 {
                alt_text
                localFile {
                  childImageSharp {
                    fluid {
                      src
                    }
                  }
                }
              }
              section1_title4
              section1_description4
              section1_image4 {
                alt_text
                localFile {
                  childImageSharp {
                    fluid {
                      src
                    }
                  }
                }
              }
              section1_title5
              section1_description5
              section1_image5 {
                alt_text
                localFile {
                  childImageSharp {
                    fluid {
                      src
                    }
                  }
                }
              }
              section2_main_subtitle
              section2_main_title
              section2_image1 {
                alt_text
                localFile {
                  childImageSharp {
                    fluid {
                      src
                    }
                  }
                }
              }
              section2_image1_link
              section2_image2 {
                alt_text
                localFile {
                  childImageSharp {
                    fluid {
                      src
                    }
                  }
                }
              }
              section2_image2_link
              section2_image3 {
                alt_text
                localFile {
                  childImageSharp {
                    fluid {
                      src
                    }
                  }
                }
              }
              section2_image3_link
              section2_image4 {
                alt_text
                localFile {
                  childImageSharp {
                    fluid {
                      src
                    }
                  }
                }
              }
              section2_image4_link
              section2_image5 {
                alt_text
                localFile {
                  childImageSharp {
                    fluid {
                      src
                    }
                  }
                }
              }
              section2_image5_link
              section2_image6 {
                alt_text
                localFile {
                  childImageSharp {
                    fluid {
                      src
                    }
                  }
                }
              }
              section2_image6_link
              section2_image7 {
                alt_text
                localFile {
                  childImageSharp {
                    fluid {
                      src
                    }
                  }
                }
              }
              section2_image7_link
              section2_image8 {
                alt_text
                localFile {
                  childImageSharp {
                    fluid {
                      src
                    }
                  }
                }
              }
              section2_image8_link
              section3_title
              box1_text1
              box1_text2
              box2_text1
              box2_text2
              box3_text1
              box3_text2
              box4_text1
              box4_text2
            }
          }
      }
    `
    )
  return (
    <>
      <SEO title={wordpressPage.acf.banner_title} description={wordpressPage.acf.banner_subtitle} />
      <Header />
      <section className="blue-bg charity">
        <ScrollAnimation animateIn="fadeInUp">
          <Jumbotron className="mb-0 text-center text-white bg-transparent space-1">
            <h1 className="font-weight-bold display-5 erbaum-bold text-uppercase pt-5 space-2">
              {wordpressPage.acf.banner_title}
            </h1>
            <p
              className="space-4 proxima-r text-white m-auto text-center px-0 px-sm-5 px-lg-5 px-xl-5 pt-2 pt-sm-4"
              style={{ width: '90%', fontSize: '20px' }}
            >
              {wordpressPage.acf.banner_subtitle}
            </p>
          </Jumbotron>
        </ScrollAnimation>
      </section>
      <section className="mb-0 py-0 py-md-3 py-lg-5 py-xl-5 position-relative">
        <Container>
          <Row className="charity-inner text-center mx-0">
            <Col
              sm="6"
              className="mb-3 mb-sm-2 mb-md-2 mb-lg-4 mb-xl-5 px-0 px-sm-2 px-md-3 px-lg-3 px-xl-3"
            >
              <div className="charity-image text-center w-100 pb-2 pb-sm-0">
                <img className="img-fluid" src={wordpressPage.acf.section1_image1.localFile.childImageSharp.fluid.src} alt={wordpressPage.acf.section1_image1.alt_text} />
              </div>
              <ScrollAnimation animateIn="fadeInUp">
                <h5
                  className="erbaum-bold space-3 color-primary pb-2 pb-sm-2 pb-lg-4 pb-xl-4 mb-0 text-uppercase"
                  style={{ fontSize: '1.10rem' }}
                >
                  {wordpressPage.acf.section1_title1}
                </h5>
              </ScrollAnimation>
              <p className="filson-pro-reg color-secondary pt-2 text-1">
                {ReactHtmlParser(wordpressPage.acf.section1_description1)}
              </p>
            </Col>
            <Col
              sm="6"
              className="mb-3 mb-sm-2 mb-md-2 mb-lg-4 mb-xl-5 px-0 px-sm-2 px-md-3 px-lg-3 px-xl-3"
            >
              <div className="charity-image text-center w-100 pb-2 pb-sm-0">
                <img className="img-fluid" src={wordpressPage.acf.section1_image2.localFile.childImageSharp.fluid.src} alt={wordpressPage.acf.section1_image2.alt_text} />
              </div>
              <ScrollAnimation animateIn="fadeInUp">
                <h5
                  className="erbaum-bold space-3 color-primary pb-2 pb-sm-2 pb-lg-4 pb-xl-4 mb-0 text-uppercase"
                  style={{ fontSize: '1.10rem' }}
                >
                  {wordpressPage.acf.section1_title2}
                </h5>
              </ScrollAnimation>
              <p className="filson-pro-reg color-secondary pt-2 text-1">
                {ReactHtmlParser(wordpressPage.acf.section1_description2)}
              </p>
            </Col>
            <Col
              sm="6"
              className="mb-3 mb-sm-2 mb-md-2 mb-lg-4 mb-xl-5 px-0 px-sm-2 px-md-3 px-lg-3 px-xl-3"
            >
              <div className="charity-image text-center w-100 pb-2 pb-sm-0">
                <img className="img-fluid" src={wordpressPage.acf.section1_image3.localFile.childImageSharp.fluid.src} alt={wordpressPage.acf.section1_image3.alt_text} />
              </div>
              <ScrollAnimation animateIn="fadeInUp">
                <h5
                  className="erbaum-bold space-3 color-primary pb-2 pb-sm-2 pb-lg-4 pb-xl-4 mb-0 text-uppercase"
                  style={{ fontSize: '1.10rem' }}
                >
                  {wordpressPage.acf.section1_title3}
                </h5>
              </ScrollAnimation>
              <p className="filson-pro-reg color-secondary pt-2 text-1">
               {ReactHtmlParser(wordpressPage.acf.section1_description3)}
              </p>
            </Col>
            <Col
              sm="6"
              className="mb-3 mb-sm-2 mb-md-2 mb-lg-4 mb-xl-5 px-0 px-sm-2 px-md-3 px-lg-3 px-xl-3"
            >
              <div className="charity-image text-center w-100 pb-2 pb-sm-0">
                <img className="img-fluid" src={wordpressPage.acf.section1_image4.localFile.childImageSharp.fluid.src} alt={wordpressPage.acf.section1_image4.alt_text} />
              </div>
              <ScrollAnimation animateIn="fadeInUp">
                <h5
                  className="erbaum-bold space-3 color-primary pb-2 pb-sm-2 pb-lg-4 pb-xl-4 mb-0 text-uppercase"
                  style={{ fontSize: '1.10rem' }}
                >
                  {wordpressPage.acf.section1_title4}
                </h5>
              </ScrollAnimation>
              <p className="filson-pro-reg color-secondary pt-2 text-1">
               {ReactHtmlParser(wordpressPage.acf.section1_description4)}
              </p>
            </Col>
            <Col
              sm="6"
              className="mb-3 mb-sm-2 mb-md-2 mb-lg-4 mb-xl-5 px-0 px-sm-2 px-md-3 px-lg-3 px-xl-3"
            >
              <div className="charity-image text-center w-100 pb-2 pb-sm-0">
                <img className="img-fluid" src={wordpressPage.acf.section1_image5.localFile.childImageSharp.fluid.src} alt={wordpressPage.acf.section1_image5.alt_text} />
              </div>
              <ScrollAnimation animateIn="fadeInUp">
                <h5
                  className="erbaum-bold space-3 color-primary pb-2 pb-sm-2 pb-lg-4 pb-xl-4 mb-0 text-uppercase"
                  style={{ fontSize: '1.10rem' }}
                >
                  {wordpressPage.acf.section1_title5}
                </h5>
              </ScrollAnimation>
              <p className="filson-pro-reg color-secondary pt-2 text-1">
               {ReactHtmlParser(wordpressPage.acf.section1_description5)}
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <ScrollAnimation animateIn="fadeInUp">
        <section>
          <Container>
            <Row className="text-center">
              <h4 className="text-center lead-text-font color-primary erbaum-bold w-100 pb-2 pb-sm-5 text-uppercase">
                {wordpressPage.acf.section2_main_title}
              </h4>
              <p className="filson-pro-reg color-secondary w-100 m-auto">
               {wordpressPage.acf.section2_main_subtitle}
              </p>
            </Row>
            <Row className="py-3 py-sm-5">
              <Col sm="3" className="mb-5 mb-sm-5 mb-lg-3 mb-xl-3">
                <div className="recommend-image">
                  <a
                    href={wordpressPage.acf.section2_image1_link}
                    className="w-100 text-center d-block"
                  >
                    <img className="img-fluid" src={wordpressPage.acf.section2_image1.localFile.childImageSharp.fluid.src} alt={wordpressPage.acf.section2_image1.alt_text} />
                  </a>
                </div>
              </Col>
              <Col sm="3" className="mb-5 mb-sm-5 mb-lg-3 mb-xl-3">
                <div className="recommend-image">
                  <a
                    href={wordpressPage.acf.section2_image2_link}
                    className="w-100 text-center d-block"
                  >
                    <img className="img-fluid" src={wordpressPage.acf.section2_image2.localFile.childImageSharp.fluid.src} alt={wordpressPage.acf.section2_image2.alt_text} />
                  </a>
                </div>
              </Col>
              <Col sm="3" className="mb-5 mb-sm-5 mb-lg-3 mb-xl-3">
                <div className="recommend-image">
                  <a
                    href={wordpressPage.acf.section2_image3_link}
                    className="w-100 text-center d-block"
                  >
                    <img className="img-fluid" src={wordpressPage.acf.section2_image3.localFile.childImageSharp.fluid.src} alt={wordpressPage.acf.section2_image3.alt_text} />
                  </a>
                </div>
              </Col>
              <Col sm="3" className="mb-5 mb-sm-5 mb-lg-3 mb-xl-3">
                <div className="recommend-image">
                  <a
                    href={wordpressPage.acf.section2_image4_link}
                    className="w-100 text-center d-block"
                  >
                    <img className="img-fluid" src={wordpressPage.acf.section2_image4.localFile.childImageSharp.fluid.src} alt={wordpressPage.acf.section2_image4.alt_text} />
                  </a>
                </div>
              </Col>
              <Col sm="3" className="mb-5 mb-sm-5 mb-lg-3 mb-xl-3">
                <div className="recommend-image">
                  <a
                    href={wordpressPage.acf.section2_image5_link}
                    className="w-100 text-center d-block"
                  >
                   <img className="img-fluid" src={wordpressPage.acf.section2_image5.localFile.childImageSharp.fluid.src} alt={wordpressPage.acf.section2_image5.alt_text} />
                  </a>
                </div>
              </Col>
              <Col sm="3" className="mb-5 mb-sm-5 mb-lg-3 mb-xl-3">
                <div className="recommend-image">
                  <a
                    href={wordpressPage.acf.section2_image6_link}
                    className="w-100 text-center d-block"
                  >
                    <img className="img-fluid" src={wordpressPage.acf.section2_image6.localFile.childImageSharp.fluid.src} alt={wordpressPage.acf.section2_image6.alt_text} />
                  </a>
                </div>
              </Col>
              <Col sm="3" className="mb-5 mb-sm-5 mb-lg-3 mb-xl-3">
                <div className="recommend-image">
                  <a
                    href={wordpressPage.acf.section2_image7_link}
                    className="w-100 text-center d-block"
                  >
                   <img className="img-fluid" src={wordpressPage.acf.section2_image7.localFile.childImageSharp.fluid.src} alt={wordpressPage.acf.section2_image7.alt_text} />
                  </a>
                </div>
              </Col>
              <Col sm="3" className="mb-5 mb-sm-5 mb-lg-3 mb-xl-3">
                <div className="recommend-image">
                  <a
                    href={wordpressPage.acf.section2_image8_link}
                    className="w-100 text-center d-block"
                  >
                    <img className="img-fluid" src={wordpressPage.acf.section2_image8.localFile.childImageSharp.fluid.src} alt={wordpressPage.acf.section2_image8.alt_text} />
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeInUp">
        <section>
          <Container className="py-3 py-sm-5 py-lg-5 py-xl-5">
            <Row>
              <h3 className="text-center lead-text lead-sm-text lead-md-text lead-lg-text lead-xl-text color-primary erbaum-bold w-100 pb-2 pb-sm-5 text-uppercase">
                {wordpressPage.acf.section3_title}
              </h3>
            </Row>
            <Row>
              <Col
                sm="3"
                className="text-center px-2 erbaum text-uppercase check-text proxima-r"
              >
                <p className="mb-2">{wordpressPage.acf.box1_text1}</p>
                <p>{wordpressPage.acf.box1_text2}</p>
              </Col>
              <Col
                sm="3"
                className="text-center px-2 erbaum text-uppercase check-text proxima-r"
              >
                <p className="mb-2">{wordpressPage.acf.box2_text1}</p>
                <p>{wordpressPage.acf.box2_text2}</p>
              </Col>
              <Col
                sm="3"
                className="text-center px-2 erbaum text-uppercase check-text proxima-r"
              >
                <p className="mb-2">{wordpressPage.acf.box3_text1}</p>
                <p>{wordpressPage.acf.box3_text2}</p>
              </Col>
              <Col
                sm="3"
                className="text-center px-2 erbaum text-uppercase check-text proxima-r"
              >
                <p className="mb-2">
                 {wordpressPage.acf.box4_text1}
                </p>
              </Col>
            </Row>
          </Container>
        </section>
      </ScrollAnimation>
      <section>
        <Container>
          <Row className="py-3 py-sm-5 mb-0 mb-sm-5">
            <div className="m-auto text-center d-sm-flex">
              <Col
                sm="6"
                className="text-center filson-pro-reg color-secondary mb-5 mb-sm-0 px-sm-5"
              >
                <p className="cta mt-0 pt-sm-0 pt-lg-0 pt-xl-0 mb-sm-2">
                  <Link
                    to="/take-test/"
                    className="btn-cta color-primary erbaum-bold space-1"
                  >
                    TAKE THE TEST
                  </Link>
                </p>
                See if Chirofoam™ is right for you.
              </Col>
              <Col
                sm="6"
                className="text-center filson-pro-reg color-secondary mb-5 mb-sm-0 px-sm-5"
              >
                <p className="cta mt-0 pt-sm-0 pt-lg-0 pt-xl-0 mb-sm-2">
                  <Link
                    to="/shop-chirofoam/"
                    className="btn-cta color-primary erbaum-bold space-1 mr-3"
                  >
                    BUY NOW
                  </Link>
                </p>
                Start your journey to a better sleep!
              </Col>
            </div>
          </Row>
        </Container>
      </section>
      <ScrollAnimation animateIn="fadeInUp">
        <section className="rating-and-review py-3 py-sm-5 mb-4 mb-sm-0">
          <Container className="pb-0 pb-sm-5">
            <Row>
              <p className="text-center w-100 star">
                <i className="fa fa-star star-small"></i>
                <i className="fa fa-star star-medium ml-2"></i>
                <i className="fa fa-star star-large mx-2"></i>
                <i className="fa fa-star star-medium mr-2"></i>
                <i className="fa fa-star star-small"></i>
              </p>
              <p
                className="filson-pro-reg color-secondary pt-3 w-75 m-auto text-center space-1"
                style={{ fontSize: '20px' }}
              >
                “A great quality mattress I enjoy waking up on every day…”{' '}
                <br /> -Mark F. from Toronto, Ontario
              </p>
              <p className="cta mt-0 pt-sm-4 pt-lg-4 pt-xl-4 w-100 text-center mt-4 mt-sm-0">
                <Link
                  to="/reviews/"
                  className="btn-cta color-primary erbaum-bold space-1"
                >
                  SEE REVIEWS
                </Link>
              </p>
              <p
                className="filson-pro-reg color-secondary pt-3 w-75 m-auto text-center space-1"
                style={{ fontSize: '20px' }}
              >
                Chirofoam™ Memory Foam Mattresses are proudly developed and
                manufactured in Toronto, ON, Canada.
              </p>
            </Row>
          </Container>
        </section>
      </ScrollAnimation>
      <Footer />
    </>
  )
}

export default Chiropractor
