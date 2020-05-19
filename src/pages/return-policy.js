import React from 'react'
import {useStaticQuery,graphql} from 'gatsby'
import ReactHtmlParser from 'react-html-parser'
import Header from '../components/header'
import Footer from '../components/footer'
import { Container, Jumbotron, Row } from 'reactstrap'
import ScrollAnimation from 'react-animate-on-scroll'
import SEO from '~/components/seo'
import TakeTest from '../components/TaketestSection'
import ReviewSection from '../components/ReviewSection'

export default props => {
  const { wordpressPage } = useStaticQuery(
    graphql`
      query {
        wordpressPage(acf: {}, slug: {eq: "return-policy"}) {
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
              <div className="filson-pro-reg color-secondary pt-5 text-1">
                {ReactHtmlParser(wordpressPage.acf.block1_description)}
              </div>
              <ScrollAnimation animateIn="fadeInUp">
                <h3 className="lead-text lead-sm-text lead-md-text lead-lg-text lead-xl-text erbaum-bold font-weight-bold color-primary space-2 text-center pt-5">
                  {wordpressPage.acf.block2_title}
                </h3>
              </ScrollAnimation>
              <div className="filson-pro-reg color-secondary pt-5 text-1">
                {ReactHtmlParser(wordpressPage.acf.block2_description)}
              </div>
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
              <div className="filson-pro-reg color-secondary pt-5 text-1">
                {ReactHtmlParser(wordpressPage.acf.block4_description)}
              </div>
            </div>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row className="py-3 py-sm-5 mb-0 mb-sm-5">
            <div className="w-75 m-auto text-center d-sm-flex">
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
