import React from 'react'
import { useStaticQuery, graphql} from 'gatsby'
import ReactHtmlParser from 'react-html-parser'
import Header from '../components/header'
import Footer from '../components/footer'
import { Container, Row } from 'reactstrap'
import ScrollAnimation from 'react-animate-on-scroll'
import SEO from '~/components/seo'
import TakeTest from '../components/TaketestSection'
import ReviewSection from '../components/ReviewSection'

export default props => {

  const { wordpressPage } = useStaticQuery(
    graphql`
      query {
        wordpressPage(acf: {}, slug: {eq:"compare-chart"}) {
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
            <div
              className="text-1 filson-pro-reg color-secondary text-center"
            >
             {ReactHtmlParser(wordpressPage.acf.compare_chart_description)}
            </div>
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
              <TakeTest />
            </div>
          </Row>
        </Container>
      </section>
      <ScrollAnimation animateIn="fadeInUp">
        <section className="rating-and-review py-3">
          <Container className="pb-5 pb-lg-5 pb-xl-5">
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
