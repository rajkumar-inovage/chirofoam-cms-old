import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import ReactHtmlParser from 'react-html-parser'
import Header from '../components/header'
import Footer from '../components/footer'
import { Container, Row, Col } from 'reactstrap'
import ScrollAnimation from 'react-animate-on-scroll'
import SEO from '~/components/seo'
import ReviewSection from '../components/ReviewSection'

export default props => {
  const { wordpressPage } = useStaticQuery(
    graphql`
      query {
        wordpressPage(acf: {}, slug: {eq: "privacy-policy"}) {
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
        description="This privacy policy has been compiled to better serve those who are concerned with how their ‘Personally identifiable information’ (PII) is being used online..."
      />
      <Header />
      <section className="mb-0 privacy-policy py-3 py-sm-5">
        <Container className="our-focus">
          <Row className="mb-2 mb-sm-5 pb-0 pb-sm-5 mx-0 no-gutters">
            <Col sm="12">
              <ScrollAnimation animateIn="fadeInUp">
                <h1 className="font-weight-bold display-5 erbaum-bold mt-0 mt-sm-2 mt-lg-4 mt-xl-4 py-2 py-sm-2 py-lg-5 py-xl-5 space-2 color-primary">
                  {wordpressPage.title}
                </h1>
              </ScrollAnimation>
              <p className="filson-pro-reg text-1 color-secondary">
                  {ReactHtmlParser(wordpressPage.content)}
              </p>
            </Col>
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
