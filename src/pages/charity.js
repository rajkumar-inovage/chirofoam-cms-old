import React from 'react'
import { useStaticQuery,Link } from 'gatsby'
import Header from '../components/header'
import Footer from '../components/footer'
import { Container, Jumbotron, Row, Col } from 'reactstrap'
import ReactHtmlParser from 'react-html-parser'
import SEO from '~/components/seo'
import ScrollAnimation from 'react-animate-on-scroll'

const Charity = (data) => {
     const { wordpressPage } = useStaticQuery(
    graphql`
      query {
        wordpressPage(acf: {}, slug: {eq:"charity"}) {
            acf {
                banner_title
                banner_subtitle
                title1
                description1
                image1 {
                  alt_text
                  localFile {
                    childImageSharp {
                      fluid {
                        src
                      }
                    }
                  }
                }
                title2
                description2
                image2 {
                  alt_text
                  localFile {
                    childImageSharp {
                      fluid {
                        src
                      }
                    }
                  }
                }
                title3
                description3
                image3 {
                  alt_text
                  localFile {
                    childImageSharp {
                      fluid {
                        src
                      }
                    }
                  }
                }
                title4
                description4
                image4 {
                  alt_text
                  localFile {
                    childImageSharp {
                      fluid {
                        src
                      }
                    }
                  }
                }
                title5
                description5
                image5 {
                  alt_text
                  localFile {
                    childImageSharp {
                      fluid {
                        src
                      }
                    }
                  }
                }
                section3_title
                section3_subtitle
              }
          }
      }
    `
    )
     
  return (
    <>
      <SEO
        title={wordpressPage.acf.banner_title}
        description={wordpressPage.acf.banner_subtitle}
      />
      <Header />
      <section className="blue-bg charity">
        <ScrollAnimation animateIn="fadeInUp">
          <Jumbotron className="mb-0 text-center text-white bg-transparent space-1 w-100 m-auto">
            <h1 className="display-5 font-weight-bold erbaum-bold text-uppercase pt-md-5 space-2 pt-sm-1">
              {wordpressPage.acf.banner_title}
            </h1>
            <p
              className="space-4 proxima-r text-white m-auto text-center px-0 px-sm-5 px-lg-5 px-xl-5 pt-2 pt-sm-4"
              style={{ width: '90%', fontSize: '26px' }}
            >
              {wordpressPage.acf.banner_subtitle}
            </p>
          </Jumbotron>
        </ScrollAnimation>
      </section>
      <section className="mb-0 py-3 position-relative">
        <Container>
          <Row className="charity-inner text-center mx-0">
            <Col
              sm="6"
              className="mb-3 mb-sm-5 mt-3 mt-sm-5 px-0 px-sm-2 px-md-2 px-lg-4 px-xl-4"
            >
              <ScrollAnimation animateIn="fadeInUp">
                <h5 className="erbaum-bold color-primary pb-2 pb-sm-5 text-uppercase">
                  {wordpressPage.acf.title1}
                </h5>
              </ScrollAnimation>
              <p className="filson-pro-reg color-secondary pt-2 text-1">
                {ReactHtmlParser(wordpressPage.acf.description1)}
              </p>
              <div className="charity-image text-center w-100">
                <img
                  className="img-fluid"
                  src={wordpressPage.acf.image1.localFile.childImageSharp.fluid.src}
                  alt={wordpressPage.acf.image1.alt_text}
                />
              </div>
            </Col>
            <Col
              sm="6"
              className="mb-3 mb-sm-5 mt-3 mt-sm-5 px-0 px-sm-2 px-md-2 px-lg-4 px-xl-4"
            >
              <ScrollAnimation animateIn="fadeInUp">
                <h5 className="erbaum-bold color-primary pb-2 pb-sm-5 text-uppercase">
                 {wordpressPage.acf.title2}
                </h5>
              </ScrollAnimation>
              <p className="filson-pro-reg color-secondary pt-2 text-1">
                {ReactHtmlParser(wordpressPage.acf.description2)}
              </p>
              
              <div className="charity-image text-center w-100">
                <img
                  className="img-fluid"
                  src={wordpressPage.acf.image2.localFile.childImageSharp.fluid.src}
                  alt={wordpressPage.acf.image2.alt_text}
                  width="100%"
                />
              </div>
            </Col>
            <Col
              sm="6"
              className="mb-3 mb-sm-5 mt-3 mt-sm-5 px-0 px-sm-2 px-md-2 px-lg-4 px-xl-4"
            >
              <ScrollAnimation animateIn="fadeInUp">
                <h5 className="erbaum-bold color-primary pb-2 pb-sm-5 text-uppercase">
                 {wordpressPage.acf.title3}
                </h5>
              </ScrollAnimation>
              <p className="filson-pro-reg color-secondary pt-2 text-1">
               {ReactHtmlParser(wordpressPage.acf.description3)}
              </p>
              
              <div className="charity-image text-center w-100">
                <img
                  className="img-fluid"
                  src={wordpressPage.acf.image3.localFile.childImageSharp.fluid.src}
                  alt={wordpressPage.acf.image3.alt_text}
                  width="100%"
                />
              </div>
            </Col>
            <Col
              sm="6"
              className="mb-3 mb-sm-5 mt-3 mt-sm-5 px-0 px-sm-2 px-md-2 px-lg-4 px-xl-4"
            >
              <ScrollAnimation animateIn="fadeInUp">
                <h5 className="erbaum-bold color-primary pb-2 pb-sm-5 text-uppercase">
                  {wordpressPage.acf.title4}
                </h5>
              </ScrollAnimation>
              <p className="filson-pro-reg color-secondary pt-2 text-1">
               {ReactHtmlParser(wordpressPage.acf.description4)}
              </p>
              <div className="charity-image text-center w-100">
                <img
                  className="img-fluid"
                  src={wordpressPage.acf.image4.localFile.childImageSharp.fluid.src}
                  alt={wordpressPage.acf.image4.alt_text}
                  width="100%"
                />
              </div>
            </Col>
            <Col
              sm="6"
              className="mb-3 mb-sm-5 mt-3 mt-sm-5 px-0 px-sm-2 px-md-2 px-lg-4 px-xl-4"
            >
              <ScrollAnimation animateIn="fadeInUp">
                <h5 className="erbaum-bold color-primary pb-2 pb-sm-5 text-uppercase">
                 {wordpressPage.acf.title5}
                </h5>
              </ScrollAnimation>
              <p className="filson-pro-reg color-secondary pt-2 text-1">
               {ReactHtmlParser(wordpressPage.acf.description5)}
              </p>
              <div className="charity-image text-center w-100">
                <img
                  className="img-fluid"
                  src={wordpressPage.acf.image5.localFile.childImageSharp.fluid.src}
                  alt={wordpressPage.acf.image5.alt_text}
                  width="100%"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pb-0 pb-sm-0 pb-md-2 pb-lg-4 pb-xl-4">
        <Container className="pb-0 pb-sm-5">
          <Row className="pb-0 pb-sm-5 mx-0">
            <ScrollAnimation animateIn="fadeInUp">
              <h4 className="text-center color-primary erbaum-bold text-uppercase w-100 pt-2 pt-sm-5 mt-0 mt-sm-0 mt-md-0 mt-lg-5 mt-xl-5">
                {wordpressPage.acf.section3_title}
              </h4>
            </ScrollAnimation>
            <p
              className="pt-0 text-uppercase text-center w-100 pt-2 pt-md-5"
              style={{ color: '#ba2154' }}
            >
              {ReactHtmlParser(wordpressPage.acf.section3_subtitle)}
            </p>
          </Row>
        </Container>
      </section>
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
            <Row className="mx-0">
              <p className="text-center w-100 star">
                <i className="fa fa-star star-small"></i>
                <i className="fa fa-star star-medium ml-2"></i>
                <i className="fa fa-star star-large mx-2"></i>
                <i className="fa fa-star star-medium mr-2"></i>
                <i className="fa fa-star star-small"></i>
              </p>
              <p
                className="filson-pro-reg color-secondary pt-3 w-75 m-auto text-center space-1 text-1"
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
export default Charity
