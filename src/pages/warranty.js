import React from 'react'
import {useStaticQuery, Link } from 'gatsby'
import ReactHtmlParser from 'react-html-parser'
import Header from '../components/header'
import Footer from '../components/footer'
import { Container, Jumbotron, Row, Col } from 'reactstrap'
import ScrollAnimation from 'react-animate-on-scroll'
import SEO from '~/components/seo'
import TakeTest from '../components/TaketestSection'
import ReviewSection from '../components/ReviewSection'

export default props => {
  const { wordpressPage } = useStaticQuery(
    graphql`
      query {
        wordpressPage(acf: {}, slug: {eq:"warranty"}) {
            acf {
              banner_title
              banner_subtitle
              section1_title
              section1_description
              row1_title
              row1_description
              row2_title
              row2_description
              row3_title
              row3_description
              row4_title
              row4_description
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
      <section className="blue-bg warranty-banner height-350">
        <Jumbotron className="mb-0 text-center text-white bg-transparent space-1 Jumbotron">
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
      <section className="py-5 position-relative">
        <Container className="our-focus">
          <Row className="py-2 py-lg-3 py-xl-3">
            <div className="col-12">
              <ScrollAnimation animateIn="fadeInUp">
                <h3 className="text-center lead-text lead-sm-text lead-md-text lead-lg-text lead-xl-text color-primary erbaum-bold w-100 pb-2 pb-lg-5 pb-xl-5 mb-0 mb-lg-2 mb-xl-2">
                  {wordpressPage.acf.section1_title}
                </h3>
              </ScrollAnimation>
              <p className="filson-pro-reg color-secondary">
                {wordpressPage.acf.section1_description}
              </p>
              <ScrollAnimation animateIn="fadeInUp">
                <h5 className="erbaum-bold color-primary py-2 py-sm-2 py-lg-5 py-xl-5 my-0">
                  {wordpressPage.acf.row1_title}
                </h5>
              </ScrollAnimation>
              <p className="filson-pro-reg text-1 color-secondary">
                {ReactHtmlParser(wordpressPage.acf.row1_description)}
              </p>
              <h5
                className="erbaum-bold color-primary py-2 py-sm-3 my-0"
                style={{ fontSize: '16px' }}
              >
                {wordpressPage.acf.row2_title}
              </h5>
              <p className="filson-pro-reg text-1 color-secondary">
                {ReactHtmlParser(wordpressPage.acf.row2_description)}
              </p>
              <h5
                className="erbaum-bold color-primary py-2 py-sm-3 my-0"
                style={{ fontSize: '16px' }}
              >
                {wordpressPage.acf.row3_title}
              </h5>
              <p className="filson-pro-reg text-1 color-secondary">
               {ReactHtmlParser(wordpressPage.acf.row3_description)}
              </p>
              <h5
                className="erbaum-bold color-primary py-2 py-sm-3 my-0"
                style={{ fontSize: '16px' }}
              >
                {wordpressPage.acf.row4_title}
              </h5>
              <p className="filson-pro-reg text-1 color-secondary">
               {ReactHtmlParser(wordpressPage.acf.row4_description)}
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
        <section className="rating-and-review py-3 py-sm-5">
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
