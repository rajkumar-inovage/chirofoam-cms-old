import React from 'react'
import { useStaticQuery,Link } from 'gatsby'
import ReactHtmlParser from 'react-html-parser'
import Header from '../components/header'
import Footer from '../components/footer'
import { Container, Jumbotron, Row, Col } from 'reactstrap'
import SEO from '~/components/seo'
import msize from '../assets/img/mattress-sizes.png'
import women from '../assets/img/woman-sleeeping.jpg'
import foam from '../assets/img/foam.jpg'
import support from '../assets/img/support.jpg'
import us from '../assets/img/pur.png'
import packing from '../assets/img/unpacking-chirofoam.jpg'
import logo from '../assets/img/logo2.png'
import ScrollAnimation from 'react-animate-on-scroll'

const Ourstory = (data) => {
     const { wordpressPage } = useStaticQuery(
    graphql`
      query {
        wordpressPage(acf: {}, wordpress_id: {eq: 90}) {
            acf {
              banner_title
              banner_subtitle
              section2_main_title
              title1
              description1
              title2
              description2
              title3
              description3
              title4
              description4
              title5
              description5
              title6
              description6
            }
          }
      }
    `
    )
  return (
    <>
      <SEO title={wordpressPage.acf.banner_title} />
      <Header />
      <section className="blue-bg">
        <ScrollAnimation animateIn="fadeInUp">
          <Jumbotron className="mb-0 text-center text-white bg-transparent space-1">
            <h1 className="font-weight-bold display-5 erbaum-bold text-uppercase pt-5 space-2">
              {wordpressPage.acf.banner_title}
            </h1>
          </Jumbotron>
        </ScrollAnimation>
      </section>
      <section className="mb-0 py-3 position-relative">
        <Container className="our-focus pt-5">
          <h4 className="text-center lead-text-font color-primary erbaum-bold text-uppercase w-100 pb-lg-3 pb-xl-3 m-0 pb-2 pb-sm-3">
            {wordpressPage.acf.section2_main_title}
          </h4>
          <Row className="mb-2 mb-sm-5 pb-0 pb-sm-5 pt-2 pt-sm-2 pt-lg-5 pt-xl-5 mx-0">
            <div className="col-12 col-sm-8 col-lg-8 col-xl-8 left-card">
              <ScrollAnimation animateIn="fadeInUp">
                <h5 className="erbaum-bold color-primary pb-2 pb-lg-3 pb-xl-3">
                  {wordpressPage.acf.title1}
                </h5>
              </ScrollAnimation>
              <p className="filson-pro-reg color-secondary pt-2 text-1">
                {ReactHtmlParser(wordpressPage.acf.description1)}
              </p>
            </div>
            <div className="col-12 col-sm-4 col-lg-4 col-xl-4 pt-2 pt-sm-5 mt-0 mt-sm-5 right-card">
              <img src={msize} alt="Mattress Sizes" />
            </div>
          </Row>
          <Row className="mb-2 mb-sm-5 pb-0 pb-sm-5 mx-0">
            <div className="col-12 col-sm-4 col-lg-4 col-xl-4 pt-2 pt-sm-5 mt-0 mt-sm-5 right-card">
              <img src={women} alt="women-sleeping" />
            </div>
            <div className="col-12 col-sm-8 col-lg-8 col-xl-8 left-card">
              <ScrollAnimation animateIn="fadeInUp">
                <h5 className="erbaum-bold color-primary pb-2 pb-lg-3 pb-xl-3">
                  {wordpressPage.acf.title2}
                </h5>
              </ScrollAnimation>
              <p className="filson-pro-reg color-secondary pt-2 text-1">
               {ReactHtmlParser(wordpressPage.acf.description2)}
              </p>
            </div>
          </Row>
          <Row className="mb-2 mb-sm-5 pb-0 pb-sm-5 mx-0">
            <div className="col-12 col-sm-8 col-lg-8 col-xl-8 left-card">
              <ScrollAnimation animateIn="fadeInUp">
                <h5 className="erbaum-bold color-primary pb-2 pb-lg-3 pb-xl-3">
                  {wordpressPage.acf.title3}
                </h5>
              </ScrollAnimation>
              <p className="filson-pro-reg color-secondary pt-2 text-1">
               {ReactHtmlParser(wordpressPage.acf.description3)}
              </p>
            </div>
            <div className="col-12 col-sm-4 col-lg-4 col-xl-4 pt-2 pt-sm-5 mt-0 mt-sm-5 right-card">
              <img src={foam} alt="foam" />
              <img
                src={support}
                alt="support"
                className="mt-2 mt-sm-5 pt-0 pt-sm-3"
              />
            </div>
          </Row>
          <Row className="mb-2 mb-sm-5 pb-0 pb-sm-5 mx-0">
            <div className="col-12 col-sm-4 col-lg-4 col-xl-4 pt-2 pt-sm-5 mt-0 mt-sm-5 right-card">
              <img src={us} alt="us" />
            </div>
            <div className="col-12 col-sm-8 col-lg-8 col-xl-8 left-card">
              <ScrollAnimation animateIn="fadeInUp">
                <h5 className="erbaum-bold color-primary pb-2 pb-lg-3 pb-xl-3">
                  {wordpressPage.acf.title4}
                </h5>
              </ScrollAnimation>
              <p className="filson-pro-reg color-secondary pt-2 text-1">
                {ReactHtmlParser(wordpressPage.acf.description4)}
              </p>
            </div>
          </Row>
          <Row className="mb-2 mb-sm-5 pb-0 pb-sm-5 mx-0">
            <div className="col-12 col-sm-8 col-lg-8 col-xl-8 left-card">
              <ScrollAnimation animateIn="fadeInUp">
                <h5 className="erbaum-bold color-primary pb-2 pb-lg-3 pb-xl-3">
                  {wordpressPage.acf.title5}
                </h5>
              </ScrollAnimation>
              <p className="filson-pro-reg color-secondary pt-2 text-1">
                {ReactHtmlParser(wordpressPage.acf.description5)}
              </p>
            </div>
            <div className="col-12 col-sm-4 col-lg-4 col-xl-4 pt-2 pt-sm-5 mt-0 mt-sm-5 right-card">
              <img src={packing} alt="packing" />
            </div>
          </Row>
          <Row className="mb-2 mb-sm-5 pb-0 mx-0">
            <div className="col-12 col-sm-4 col-lg-4 col-xl-4 py-4 py-sm-3 py-md-3 mt-0 mt-sm-5 right-card">
              <img src={logo} alt="chirofoam" />
            </div>
            <div className="col-12 col-sm-8 col-lg-8 col-xl-8 left-card">
              <ScrollAnimation animateIn="fadeInUp">
                <h5 className="erbaum-bold color-primary pb-2 pb-lg-3 pb-xl-3">
                  {wordpressPage.acf.title6}
                </h5>
              </ScrollAnimation>
              <p className="filson-pro-reg color-secondary pt-2 text-1">
                {ReactHtmlParser(wordpressPage.acf.description6)}
              </p>
            </div>
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

export default Ourstory
