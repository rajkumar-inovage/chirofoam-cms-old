import React from 'react'
import {useStaticQuery, Link } from 'gatsby'
import ReactHtmlParser from 'react-html-parser'
import Header from '../components/header'
import Footer from '../components/footer'
import { Container, Row, Col } from 'reactstrap'
import SEO from '../components/seo'
import Pur from '../assets/img/certipur-logo-nobkgrd-250px-1.png'
import Ecoinstitute from '../assets/img/ecoinstitute.png'
import conni1 from '../assets/img/conni1.jpg'
import ScrollAnimation from 'react-animate-on-scroll'
import TakeTest from '../components/TaketestSection'
import ReviewSection from '../components/ReviewSection'

export default props => {
  const { wordpressPage } = useStaticQuery(
    graphql`
      query {
        wordpressPage(acf: {}, slug: {eq:"extra-firm-design"}) {
          acf {
            top_section_title
            top_section_subtitle
            row1_title
            row1_description
            row1_image {
              localFile {
                childImageSharp {
                  fluid {
                    src
                  }
                }
              }
            }
            row2_title
            row2_description
            row2_image {
              localFile {
                childImageSharp {
                  fluid {
                    src
                  }
                }
              }
            }
            row3_title
            row3_description
            row3_image {
              localFile {
                childImageSharp {
                  fluid {
                    src
                  }
                }
              }
            }
            row4_title
            row4_description
            row4_image {
              localFile {
                childImageSharp {
                  fluid {
                    src
                  }
                }
              }
            }
            section3_description
            section3_image1 {
              localFile {
                childImageSharp {
                  fluid {
                    src
                  }
                }
              }
            }
            section3_image2 {
              localFile {
                childImageSharp {
                  fluid {
                    src
                  }
                }
              }
            }
            section3_image3 {
              localFile {
                childImageSharp {
                  fluid {
                    src
                  }
                }
              }
            }
            overview_title
            overview_content
            technical_specification_title
            technical_specification_content
          }

        }
      }
    `
    )
  return (
    <>
      <SEO title="design" description="The highest quality materials and skilled craftsmanship in every Chirofoam™ mattress." />
      <Header />
      <ScrollAnimation animateIn="fadeInUp">
        <section className="mb-0 py-3 position-relative">
          <Container>
            <Row className="mx-0 text-center">
              <h1 className="font-weight-bold display-5 erbaum-bold text-uppercase pt-5 space-2 pt-sm-1 pt-lg-5 pt-xl-5 color-primary w-100">
                {wordpressPage.acf.top_section_title}
              </h1>
              <p
                className="filson-pro-reg color-primary pt-2 space-4 proxima-r m-auto text-center px-0 px-sm-5 px-lg-5 px-xl-5 pt-sm-2 w-100"
                style={{ fontSize: '26px' }}
              >
                {ReactHtmlParser(wordpressPage.acf.top_section_subtitle)}
              </p>
            </Row>
          </Container>
        </section>
      </ScrollAnimation>
      <section className="py-4 pt-sm-5 pb-sm-4 our-customer">
        <Row className="pt-3 pb-3 pb-sm-0 no-gutters">
          <Col sm="6" className="coolgel-img design-imgs"></Col>
          <Col sm="6" className="pt-5 pb-5 px-3">
            <div
              className="pl-5 pl-sm-5 pt-2 pb-2 pt-sm-5 pb-sm-4"
              style={{ maxWidth: '500px' }}
            >
              <ScrollAnimation animateIn="fadeInUp">
                <h3 className="color-primary erbaum-bold lead-text">
                  {wordpressPage.acf.row1_title}
                </h3>
              </ScrollAnimation>
              <p
                className="text-left proxima-eb space-1 pt-5 mb-0 text-1 design-para"
                style={{ color: '#808080' }}
              >
                {ReactHtmlParser(wordpressPage.acf.row1_description)}
              </p>
            </div>
          </Col>
        </Row>
        <Row className="pb-3 pb-sm-0 no-gutters">
          <Col sm="6" className="pt-5 pb-5 px-3">
            <div
              className="pl-5 pl-sm-5 pt-2 pb-2 pt-sm-5 pb-sm-4"
              style={{ maxWidth: '600px' }}
            >
              <ScrollAnimation animateIn="fadeInUp">
                <h3 className="color-primary erbaum-bold lead-text pl-5">
                  {wordpressPage.acf.row2_title}
                </h3>
              </ScrollAnimation>
              <p
                className="text-left proxima-eb space-1 pl-5 pt-5 mb-0 text-1 design-para"
                style={{ color: '#808080' }}
              >
                {ReactHtmlParser(wordpressPage.acf.row2_description)}
              </p>
            </div>
          </Col>
          <Col sm="6" className="latex-img design-imgs"></Col>
        </Row>
        <Row className="pb-3 pb-sm-0 no-gutters">
          <Col sm="6" className="design-imgs support-img"></Col>
          <Col sm="6" className="pt-5 pb-5 px-3">
            <div
              className="pl-5 pl-sm-5 pt-2 pb-2 pt-sm-5 pb-sm-4"
              style={{ maxWidth: '500px' }}
            >
              <ScrollAnimation animateIn="fadeInUp">
                <h3 className="color-primary erbaum-bold lead-text">
                  {wordpressPage.acf.row3_title}
                </h3>
              </ScrollAnimation>
              <p
                className="text-left proxima-eb space-1 pt-5 mb-0 text-1 design-para"
                style={{ color: '#808080' }}
              >
                {ReactHtmlParser(wordpressPage.acf.row3_description)}
              </p>
            </div>
          </Col>
        </Row>
        <Row className="pb-3 pb-sm-0 no-gutters">
          <Col sm="6" className="pt-5 pb-5 px-3">
            <div
              className="pl-5 pl-sm-5 pt-2 pb-2 pt-sm-5 pb-sm-4"
              style={{ maxWidth: '500px' }}
            >
              <ScrollAnimation animateIn="fadeInUp">
                <h3 className="pl-4 color-primary erbaum-bold lead-text">
                  {wordpressPage.acf.row4_title}
                </h3>
              </ScrollAnimation>
              <p
                className="text-left proxima-eb space-1 pt-5 mb-0 text-1 pl-4 design-para"
                style={{ color: '#808080' }}
              >
                {ReactHtmlParser(wordpressPage.acf.row4_description)}
              </p>
            </div>
          </Col>
          <Col sm="6" className="design-imgs foam-img"></Col>
        </Row>
      </section>
      <ScrollAnimation animateIn="fadeInUp">
        <section className="m-auto text-center py-5 py-sm-0 py-md-2 py-lg-5 py-xl-5">
          <Container>
            <Row className="pt-3 pb-3 pb-sm-0 text-center">
              <Col className="col-8 col-sm-8 col-md-12 col-lg-8 col-xl-8 mx-auto">
                <div className="text-left text-sm-center text-md-left text-lg-left text-xl-left pt-5 pt-sm-2 pt-md-2 pt-lg-5 pt-xl-5 pb-5 mb-5 mb-sm-0 mb-md-0 mb-xl-5 mb-lg-5">
                  <div className="image-box d-table-cell px-3 px-sm-2 px-md-3 px-lg-3 px-xl-3">
                    <img
                      className="img-fluid"
                      src={Pur}
                      alt="Pur"
                      width="150px"
                      height="150px"
                    />
                  </div>
                  <div className="image-box d-table-cell px-3 px-sm-2 px-md-3 px-lg-3 px-xl-3">
                    <img
                      className="img-fluid"
                      src={Ecoinstitute}
                      alt="Ecoinstitute"
                      width="150px"
                      height="150px"
                    />
                  </div>
                  <div className="image-box d-table-cell px-3 px-sm-2 px-md-3 px-lg-3 px-xl-3">
                    <img
                      className="img-fluid"
                      src={conni1}
                      alt="conni1"
                      width="150px"
                      height="90px"
                    />
                  </div>
                </div>
                <p className="filson-pro-reg color-secondary pt-2 text-1 text-left">
                 {ReactHtmlParser(wordpressPage.acf.section3_description)}
                </p>
              </Col>
            </Row>
          </Container>
        </section>
      </ScrollAnimation>
      <section className="pt-3">
        <Container>
          <Row className="py-3 py-sm-5 mb-0 mb-sm-5">
            <div className="m-auto text-center d-sm-flex">
              <TakeTest />
            </div>
          </Row>
        </Container>
      </section>
      <section className="pt-3">
        <Container>
          <Row className="mx-0 no-gutters">
            <Col className="left-list col-12 col-md-6 col-lg-6 px-0 px-sm-0 px-md-2 px-lg-3 px-xl-3">
              <ScrollAnimation animateIn="fadeInUp">
                <h5 className="erbaum-bold color-primary pb-2 pb-sm-5 text-uppercase">
                  {wordpressPage.acf.overview_title}
                </h5>
              </ScrollAnimation>
              <div className="">
                  {ReactHtmlParser(wordpressPage.acf.overview_content)}
              </div>
            </Col>
            <Col className="right-list col-12 col-md-6 col-lg-6 px-0 px-sm-0 px-md-2 px-lg-3 px-xl-3">
              <ScrollAnimation animateIn="fadeInUp">
                <h5 className="erbaum-bold color-primary pb-2 pb-sm-5 text-uppercase">
                  {wordpressPage.acf.technical_specification_title}
                </h5>
              </ScrollAnimation>
              {ReactHtmlParser(wordpressPage.acf.technical_specification_content)}
            </Col>
          </Row>
        </Container>
      </section>
      <ScrollAnimation animateIn="fadeInUp">
        <section className="rating-and-review py-3 py-sm-5 mb-4 mb-sm-0">
          <Container className="pb-0 pb-sm-5">
            <Row className="mx-0">
              <ReviewSection />
            </Row>
          </Container>
        </section>
      </ScrollAnimation>
      <Footer />
    </>
  )
}
