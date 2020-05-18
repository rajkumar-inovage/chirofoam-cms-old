import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import ReactHtmlParser from 'react-html-parser'
import Header from '../components/header'
import Footer from '../components/footer'
import { Container, Row, Col } from 'reactstrap'
import SEO from '~/components/seo'
import ScrollAnimation from 'react-animate-on-scroll'
import TakeTest from '../components/TaketestSection'
import ReviewSection from '../components/ReviewSection'

export default props => {
  const { wordpressPage } = useStaticQuery(
    graphql`
      query {
        wordpressPage(acf: {}, slug: {eq: "our-guarantees"}) {
            acf {
              page_title
              page_subtitle
              guarantee1_title
              guarantee1_description
              guarantee1_image {
                localFile {
                  childImageSharp {
                    fluid {
                      src
                    }
                  }
                }
                alt_text
              }
              guarantee2_title
              guarantee2_description
              guarantee2_image {
                localFile {
                  childImageSharp {
                    fluid {
                      src
                    }
                  }
                }
                alt_text
              }
              guarantee3_title
              guarantee3_description
              guarantee3_image {
                localFile {
                  childImageSharp {
                    fluid {
                      src
                    }
                  }
                }
                alt_text
              }
              guarantee4_title
              guarantee4_description
              guarantee4_image {
                localFile {
                  childImageSharp {
                    fluid {
                      src
                    }
                  }
                }
                alt_text
              }
              guarantee5_title
              guarantee5_description
              guarantee5_image {
                localFile {
                  childImageSharp {
                    fluid {
                      src
                    }
                  }
                }
                alt_text
              }
          }
        }
      }
    `
    )
  return (
    <>
      <SEO title={wordpressPage.acf.page_title} description={wordpressPage.acf.page_subtitle} />
      <Header />
      <section className="mb-0 py-3 position-relative">
        <Container>
          <Row className="mx-0 text-center">
            <ScrollAnimation animateIn="fadeInUp" className="w-100"><h1 className="font-weight-bold display-5 erbaum-bold text-uppercase pt-5 space-2 pt-sm-1 pt-lg-5 pt-xl-5 color-primary w-100">{wordpressPage.acf.page_title}</h1></ScrollAnimation>
            <ScrollAnimation animateIn="fadeInUp" className="w-100"><p className="filson-pro-reg color-primary pt-2 space-4 proxima-r m-auto text-center px-0 px-sm-5 px-lg-5 px-xl-5 pt-sm-2 w-100" style={{fontSize:'26px'}}>{wordpressPage.acf.page_subtitle}</p></ScrollAnimation>
          </Row>

          <Row className="py-3 mb-0 mb-sm-5 charity-inner text-center mx-0">
            <Col
              sm="6"
              className="mb-3 mb-sm-5 mt-3 mt-sm-5 text-center px-0 px-sm-2 px-md-2 px-lg-4 px-xl-4"
            >
              <div className="text-center">
                <img
                  className="img-fluid"
                  src={wordpressPage.acf.guarantee1_image.localFile.childImageSharp.fluid.src}
                  alt={wordpressPage.acf.guarantee1_image.alt_text}
                />
              </div>
              <ScrollAnimation animateIn="fadeInUp">
                <h5 className="erbaum-bold color-primary pb-2 pb-sm-5 text-uppercase text-center">
                  {wordpressPage.acf.guarantee1_title}
                </h5>
              </ScrollAnimation>
              <div className="filson-pro-reg color-secondary pt-2 text-left text-1">
                {ReactHtmlParser(wordpressPage.acf.guarantee1_description)}
              </div>
            </Col>
            <Col
              sm="6"
              className="mb-3 mb-sm-5 mt-3 mt-sm-5 text-center px-0 px-sm-2 px-md-2 px-lg-4 px-xl-4"
            >
              <div className="text-center">
                <img
                  className="img-fluid"
                  src={wordpressPage.acf.guarantee2_image.localFile.childImageSharp.fluid.src}
                  alt={wordpressPage.acf.guarantee2_image.alt_text}
                />
              </div>
              <ScrollAnimation animateIn="fadeInUp">
                <h5 className="erbaum-bold color-primary pb-2 pb-sm-5 text-uppercase text-center">
                  QUALITY MATERIALS AND SKILLED CRAFTSMANSHIP
                </h5>
              </ScrollAnimation>
              <div className="filson-pro-reg color-secondary pt-2 text-left text-1">
                {ReactHtmlParser(wordpressPage.acf.guarantee2_description)}
              </div>
            </Col>
            <Col
              sm="6"
              className="mb-3 mb-sm-5 mt-3 mt-sm-5 text-center px-0 px-sm-2 px-md-2 px-lg-4 px-xl-4"
            >
              <div className="text-center">
                <img
                  className="img-fluid"
                  src={wordpressPage.acf.guarantee3_image.localFile.childImageSharp.fluid.src}
                  alt={wordpressPage.acf.guarantee3_image.alt_text}
                />
              </div>
              <ScrollAnimation animateIn="fadeInUp">
                <h5 className="erbaum-bold color-primary pb-2 pb-sm-5 text-uppercase text-center">
                  100 NIGHT IN HOME SLEEP TRIAL
                </h5>
              </ScrollAnimation>
              <div className="filson-pro-reg color-secondary pt-2 text-left text-1">
                {ReactHtmlParser(wordpressPage.acf.guarantee3_description)}
              </div>
            </Col>
            <Col
              sm="6"
              className="mb-3 mb-sm-5 mt-3 mt-sm-5 text-center px-0 px-sm-2 px-md-2 px-lg-4 px-xl-4"
            >
              <div className="text-center">
                <img
                  className="img-fluid"
                  src={wordpressPage.acf.guarantee4_image.localFile.childImageSharp.fluid.src}
                  alt={wordpressPage.acf.guarantee4_image.alt_text}
                />
              </div>
              <ScrollAnimation animateIn="fadeInUp">
                <h5 className="erbaum-bold color-primary pb-2 pb-sm-5 text-uppercase text-center">
                  15 YEAR TOTAL WARRANTY PROTECTION
                </h5>
              </ScrollAnimation>
              <div className="filson-pro-reg color-secondary pt-2 text-left text-1">
                {ReactHtmlParser(wordpressPage.acf.guarantee4_description)}
              </div>
            </Col>

            <Col sm="12" className="mb-3 mb-sm-5 mt-3 mt-sm-5 text-center px-0 px-sm-2 px-md-2 px-lg-4 px-xl-4 col-lg-8">
              <div className="charity-image text-center">
                <img
                  className="img-fluid"
                  src={wordpressPage.acf.guarantee5_image.localFile.childImageSharp.fluid.src}
                  alt={wordpressPage.acf.guarantee5_image.alt_text}
                />
              </div>
              <ScrollAnimation animateIn="fadeInUp">
                <h5 className="erbaum-bold color-primary pb-2 pb-sm-5 text-uppercase">
                  CHIROFOAM WILL DONATE 1 BEDKIT FOR EVERY MATTRESS SOLD
                </h5>
              </ScrollAnimation>
              <div className="filson-pro-reg color-secondary pt-2 text-1 text-left">
               {ReactHtmlParser(wordpressPage.acf.guarantee5_description)}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row className="py-3 py-sm-5 mb-0 mb-sm-5">
            <div className="m-auto text-center d-sm-flex">
              <TakeTest />
            </div>
          </Row>
        </Container>
      </section>
      <ScrollAnimation animateIn="fadeInUp">
        <section className="rating-and-review py-3 py-sm-5 mb-4 mb-sm-0">
          <Container className="pb-0 pb-sm-5">
            <Row>
             <ReviewSection />
            </Row>
          </Container>
        </section>
      </ScrollAnimation>
      <Footer />
    </>
  )
}
