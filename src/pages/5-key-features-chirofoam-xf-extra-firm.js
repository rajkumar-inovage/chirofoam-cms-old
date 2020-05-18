import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import ReactHtmlParser from 'react-html-parser'
import Header from '../components/header'
import Footer from '../components/footer'
import { Container, Row  } from 'reactstrap'
import SEO from '../components/seo'
import coolgel from '../assets/img/Cool-Gel-Memory-Foam-1.jpg'
import support from '../assets/img/support.jpg'
import latex from '../assets/img/latex-5keyfeatures.jpg'
import chirofoam_mattres_angle_5key from '../assets/img/chirofoam-mattress-angle-5key.jpg'
import chirofoam_mattress_5key from '../assets/img/chirofoam-mattress-5key.jpg'
import ScrollAnimation from 'react-animate-on-scroll'
import TakeTest from '../components/TaketestSection'
import ReviewSection from '../components/ReviewSection'

export default props => {
  const { wordpressPage } = useStaticQuery(
    graphql`
      query {
        wordpressPage(acf: {}, slug: {eq:"key-features-extra-firm"}) {
            acf {
              top_section_title
              top_section_subtitle
              feature1_number
              feature1_image {
                localFile {
                  childImageSharp {
                    fluid {
                      src
                    }
                  }
                }
              }
              feature1_title
              feature1_description
              feature2_number
              feature2_image {
                localFile {
                  childImageSharp {
                    fluid {
                      src
                    }
                  }
                }
              }
              feature2_title
              feature2_description
              feature3_number
              feature3_image {
                localFile {
                  childImageSharp {
                    fluid {
                      src
                    }
                  }
                }
              }
              feature3_title
              feature3_description
              feature4_number
              feature4_image {
                localFile {
                  childImageSharp {
                    fluid {
                      src
                    }
                  }
                }
              }
              feature4_title
              feature4_description
              feature5_number
              feature5_image {
                localFile {
                  childImageSharp {
                    fluid {
                      src
                    }
                  }
                }
              }
              feature5_title
              feature5_description
          }
        }
      }
    `
    )
  return (
    <>
      <SEO title="5-key-features" description={wordpressPage.acf.top_section_subtitle} />
      <Header />
      <section className="mb-0 py-3 position-relative">
        <ScrollAnimation animateIn="fadeInUp">
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
        </ScrollAnimation>
      </section>
      <section className="mb-0 py-3 position-relative features">
        <Container className="pt-5 five-key-features-outer">
          <Row className="mb-2 mb-sm-5 pb-0 pb-sm-5 mx-0 no-gutters">
            <div className="col-12 col-sm-5 col-lg-5 col-xl-5 pt-2 mt-0 right-card d-flex mb-2 mb-sm-5 mb-md-0 mb-lg-0 mb-xl-0">
              <h3 className="erbaum-bold pr-3 pr-sm-2 pr-md-4 pr-lg-5 pr-xl-5">
                <span>{wordpressPage.acf.feature1_number}</span>
              </h3>
              <img
                src={coolgel}
                alt="Cool-Gel-Memory-Foam-1"
                className="rounded-circle"
                width="250px"
                height="250px"
              />
            </div>
            <div className="col-12 col-sm-7 col-lg-7 col-xl-7 left-card">
              <ScrollAnimation animateIn="fadeInUp">
                <h5 className="erbaum-bold color-primary pb-2 pb-lg-3 pb-xl-3">
                  {wordpressPage.acf.feature1_title}
                </h5>
              </ScrollAnimation>
              <p className="filson-pro-reg color-secondary pt-2 text-1 space-1">
                {ReactHtmlParser(wordpressPage.acf.feature1_description)}
              </p>
            </div>
          </Row>
          <Row className="mb-2 mb-sm-5 pb-0 pb-sm-5 mx-0 no-gutters">
            <div className="col-12 col-sm-5 col-lg-5 col-xl-5 pt-2 mt-0 right-card d-flex mb-2 mb-sm-5 mb-md-0 mb-lg-0 mb-xl-0">
              <h3 className="erbaum-bold pr-3 pr-sm-2 pr-md-4 pr-lg-5 pr-xl-5">
                <span>{wordpressPage.acf.feature2_number}</span>
              </h3>
              <img
                src={support}
                alt="Support"
                className="rounded-circle"
                width="250px"
                height="250px"
              />
            </div>
            <div className="col-12 col-sm-7 col-lg-7 col-xl-7 left-card">
              <ScrollAnimation animateIn="fadeInUp">
                <h5 className="erbaum-bold color-primary pb-2 pb-lg-3 pb-xl-3">
                  {wordpressPage.acf.feature2_title}
                </h5>
              </ScrollAnimation>
              <p className="filson-pro-reg color-secondary pt-2 text-1 space-1">
                {ReactHtmlParser(wordpressPage.acf.feature2_description)}
              </p>
            </div>
          </Row>
          <Row className="mb-2 mb-sm-5 pb-0 pb-sm-5 mx-0 no-gutters">
            <div className="col-12 col-sm-5 col-lg-5 col-xl-5 pt-2 mt-0 right-card d-flex mb-2 mb-sm-5 mb-md-0 mb-lg-0 mb-xl-0">
              <h3 className="erbaum-bold pr-3 pr-sm-2 pr-md-4 pr-lg-5 pr-xl-5">
                <span>{wordpressPage.acf.feature3_number}</span>
              </h3>
              <img
                src={latex}
                alt="Latex"
                className="rounded-circle"
                width="250px"
                height="250px"
              />
            </div>
            <div className="col-12 col-sm-7 col-lg-7 col-xl-7 left-card">
              <ScrollAnimation animateIn="fadeInUp">
                <h5 className="erbaum-bold color-primary pb-2 pb-lg-3 pb-xl-3">
                 {wordpressPage.acf.feature3_title}
                </h5>
              </ScrollAnimation>
              <p className="filson-pro-reg color-secondary pt-2 text-1 space-1">
                {ReactHtmlParser(wordpressPage.acf.feature3_description)}
              </p>
            </div>
          </Row>
          <Row className="mb-2 mb-sm-5 pb-0 pb-sm-5 mx-0 no-gutters">
            <div className="col-12 col-sm-5 col-lg-5 col-xl-5 pt-2 mt-0 right-card d-flex mb-2 mb-sm-5 mb-md-0 mb-lg-0 mb-xl-0">
              <h3 className="erbaum-bold pr-3 pr-sm-2 pr-md-4 pr-lg-5 pr-xl-5">
                <span>{wordpressPage.acf.feature4_number}</span>
              </h3>
              <img
                src={chirofoam_mattres_angle_5key}
                alt="chirofoam-mattress-angle-5key"
                className="rounded-circle"
                width="250px"
                height="250px"
              />
            </div>
            <div className="col-12 col-sm-7 col-lg-7 col-xl-7 left-card">
              <ScrollAnimation animateIn="fadeInUp">
                <h5 className="erbaum-bold color-primary pb-2 pb-lg-3 pb-xl-3">
                  {wordpressPage.acf.feature4_title}
                </h5>
              </ScrollAnimation>
              <p className="filson-pro-reg color-secondary pt-2 text-1 space-1">
                {ReactHtmlParser(wordpressPage.acf.feature4_description)}
              </p>
            </div>
          </Row>
          <Row className="mb-2 mb-sm-5 pb-0 pb-sm-5 mx-0 no-gutters">
            <div className="col-12 col-sm-5 col-lg-5 col-xl-5 pt-2 mt-0 right-card d-flex mb-2 mb-sm-5 mb-md-0 mb-lg-0 mb-xl-0">
              <h3 className="erbaum-bold pr-3 pr-sm-2 pr-md-4 pr-lg-5 pr-xl-5">
                <span>{wordpressPage.acf.feature5_number}</span>
              </h3>
              <img
                src={chirofoam_mattress_5key}
                alt="chirofoam-mattress-5key"
                className="rounded-circle"
                width="250px"
                height="250px"
              />
            </div>
            <div className="col-12 col-sm-7 col-lg-7 col-xl-7 left-card">
              <ScrollAnimation animateIn="fadeInUp">
                <h5 className="erbaum-bold color-primary pb-2 pb-lg-3 pb-xl-3">
                  {wordpressPage.acf.feature5_title}
                </h5>
              </ScrollAnimation>
              <p className="filson-pro-reg color-secondary pt-2 text-1 space-1">
                {ReactHtmlParser(wordpressPage.acf.feature5_description)}
              </p>
            </div>
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
