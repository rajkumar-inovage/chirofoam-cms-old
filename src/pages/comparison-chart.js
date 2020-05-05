import React from 'react'
import { useStaticQuery, Link } from 'gatsby'
import ReactHtmlParser from 'react-html-parser'
import Header from '../components/header'
import Footer from '../components/footer'
import { Container, Row, Col } from 'reactstrap'
import logo from '../assets/img/logo2.png'
import ScrollAnimation from 'react-animate-on-scroll'
import SEO from '~/components/seo'

export default props => {

  const { wordpressPage } = useStaticQuery(
    graphql`
      query {
        wordpressPage(acf: {}, wordpress_id: {eq: 404}) {
            acf {
              compare_chart_title
              compare_chart_subtitle
              compare_chart_description
              chart_data
          }
        }
      }
    `
    )
  return (
    <>
      <SEO
        title={wordpressPage.acf.compare_chart_title}
        description={wordpressPage.acf.compare_chart_subtitle}
      />
      <Header />
      <ScrollAnimation animateIn="fadeInUp">
        <section className="mb-0 py-3 py-sm-3 py-md-3 py-lg-5 py-xl-5 position-relative">
          <Container>
            <Row className="mx-0 text-center">
              <h1 className="font-weight-bold display-5 erbaum-bold text-uppercase pt-5 space-2 pt-sm-1 pt-lg-5 pt-xl-5 color-primary w-100">
                {wordpressPage.acf.compare_chart_title}
              </h1>
              <p
                className="filson-pro-reg color-primary pt-2 space-4 proxima-r m-auto text-center px-0 px-sm-5 px-lg-5 px-xl-5 pt-sm-2 w-100"
                style={{ fontSize: '26px' }}
              >
                {wordpressPage.acf.compare_chart_subtitle}
              </p>
            </Row>
          </Container>
        </section>
      </ScrollAnimation>
      <section className="py-3 py-sm-3 py-md-4 py-lg-5 py-xl-5">
        <Container>
          <Row className="mx-0">
            <p
              className="text-1 filson-pro-reg color-secondary text-center"
            >
             {ReactHtmlParser(wordpressPage.acf.compare_chart_description)}
            </p>
          </Row>
          <Row className="px-0 px-sm-3 px-md-3 px-lg-0 px-xl-0 pt-5">
            <div className="table-rows">
              {ReactHtmlParser(wordpressPage.acf.chart_data)}
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
        <section className="rating-and-review py-3">
          <Container className="pb-5 pb-lg-5 pb-xl-5">
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
              <p className="cta mt-0 pt-sm-4 pt-lg-4 pt-xl-4 w-100 text-center">
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
