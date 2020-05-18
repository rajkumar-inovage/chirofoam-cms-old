import React from 'react'
import {useStaticQuery, Link } from 'gatsby'
import ReactHtmlParser from 'react-html-parser'
import Header from '../components/header'
import Footer from '../components/footer'
import { Container, Row, Col } from 'reactstrap'
import ScrollAnimation from 'react-animate-on-scroll'
import SEO from '~/components/seo'
import TakeTest from '../components/TaketestSection'
import ReviewSection from '../components/ReviewSection'

export default props => {
    const { wordpressPage } = useStaticQuery(
    graphql`
      query {
        wordpressPage(acf: {}, slug: {eq: "terms-and-conditions"}) {
            title
            content
        }
      }
    `
    )
  return (
    <>
      <SEO
        title={wordpressPage.title}
        description="Welcome to the Chirofoam™ website (the “Website” or Site”) maintained and operated by and on behalf of Chirofoam Mattress Company Inc. (“the Company”). This site is maintained as a service to our customers."
      />
      <Header />
      <section className="mb-0 position-relative">
        <Container className="our-focus">
          <Row className="mb-2 mb-sm-5 pb-0 pb-sm-5 mx-0">
            <div>
              <ScrollAnimation animateIn="fadeInUp">
                <h1 className="font-weight-bold display-5 erbaum-bold mt-0 mt-sm-2 mt-lg-4 mt-xl-4 py-2 py-sm-2 py-lg-5 py-xl-5 space-2 color-primary">
                  {wordpressPage.title}
                </h1>
              </ScrollAnimation>
              <p className="filson-pro-reg text-1 color-secondary order-list-css">
                {ReactHtmlParser(wordpressPage.content)}
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
