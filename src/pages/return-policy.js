import React from 'react'
import {useStaticQuery, Link } from 'gatsby'
import ReactHtmlParser from 'react-html-parser'
import Header from '../components/header'
import Footer from '../components/footer'
import { Container, Jumbotron, Row, Col } from 'reactstrap'
import ScrollAnimation from 'react-animate-on-scroll'
import SEO from '~/components/seo'

export default props => {
  const { wordpressPage } = useStaticQuery(
    graphql`
      query {
        wordpressPage(acf: {}, wordpress_id: {eq: 384}) {
            acf {
                banner_title
                banner_subtitle
                block1_title
                block1_description
                block2_title
                block2_description
                block3_title
                block3_description
                block4_title
                block4_description
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
        <Jumbotron className="mb-0 text-center text-white bg-transparent space-1">
          <ScrollAnimation animateIn="fadeInUp">
            <h1 className="font-weight-bold display-5 erbaum-bold text-uppercase pt-5 space-2">
              {wordpressPage.acf.banner_title}
            </h1>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp">
            <p
              className="space-4 proxima-r text-white m-auto text-center px-0 px-sm-5 px-lg-5 px-xl-5 pt-2 pt-sm-4"
              style={{ width: '90%', fontSize: '26px' }}
            >
              {wordpressPage.acf.banner_subtitle}
            </p>
          </ScrollAnimation>
        </Jumbotron>
      </section>
      <section className="mb-0 privacy-policy py-3 py-sm-5 mt-lg-3 mt-xl-3">
        <Container>
          <Row className="mb-2 mb-sm-5 pb-0 pb-sm-5">
            <div className="col-12">
              <ScrollAnimation animateIn="fadeInUp">
                <h3 className="lead-text lead-sm-text lead-md-text lead-lg-text lead-xl-text erbaum-bold font-weight-bold color-primary space-2 text-center">
                  {wordpressPage.acf.block1_title}
                </h3>
              </ScrollAnimation>
              <p className="filson-pro-reg color-secondary pt-5 text-1">
                {ReactHtmlParser(wordpressPage.acf.block1_description)}
              </p>
              <ScrollAnimation animateIn="fadeInUp">
                <h3 className="lead-text lead-sm-text lead-md-text lead-lg-text lead-xl-text erbaum-bold font-weight-bold color-primary space-2 text-center pt-5">
                  {wordpressPage.acf.block2_title}
                </h3>
              </ScrollAnimation>
              <p className="filson-pro-reg color-secondary pt-5 text-1">
                {ReactHtmlParser(wordpressPage.acf.block2_description)}
              </p>
              <ScrollAnimation animateIn="fadeInUp">
                <h3 className=" lead-text lead-sm-text lead-md-text lead-lg-text lead-xl-text erbaum-bold font-weight-bold color-primary space-2 text-center pt-5">
                  {wordpressPage.acf.block3_title}
                </h3>
              </ScrollAnimation>
              <div className="">
                  {ReactHtmlParser(wordpressPage.acf.block3_description)}
              </div>
              <h3 className="lead-text lead-sm-text lead-md-text lead-lg-text lead-xl-text erbaum-bold font-weight-bold color-primary space-2 text-center pt-5">
                <ScrollAnimation animateIn="fadeInUp">
                  {wordpressPage.acf.block4_title}
                </ScrollAnimation>
              </h3>
              <p className="filson-pro-reg color-secondary pt-5 text-1">
                {ReactHtmlParser(wordpressPage.acf.block4_description)}
              </p>
            </div>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row className="py-3 py-sm-5 mb-0 mb-sm-5">
            <div className="w-50 m-auto text-center d-sm-flex">
              <Col
                sm="6"
                className="text-center filson-pro-reg color-secondary mb-5 mb-sm-0"
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
                className="text-center filson-pro-reg color-secondary mb-5 mb-sm-0"
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
