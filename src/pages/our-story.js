import React from 'react'
import { useStaticQuery, graphql} from 'gatsby'
import ReactHtmlParser from 'react-html-parser'
import Header from '../components/header'
import Footer from '../components/footer'
import { Container, Jumbotron, Row } from 'reactstrap'
import SEO from '~/components/seo'
import ScrollAnimation from 'react-animate-on-scroll'
import TakeTest from '../components/TaketestSection'
import ReviewSection from '../components/ReviewSection'

const Ourstory = (data) => {
     const { wordpressPage } = useStaticQuery(
    graphql`
      query {
        wordpressPage(acf: {}, slug: {eq:"our-story"}) {
            acf {
              banner_title
              banner_subtitle
              section2_main_title
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
              image3_img1 {
                alt_text
                localFile {
                  childImageSharp {
                    fluid {
                      src
                    }
                  }
                }
              }
              image3_img2 {
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
              image5{
                alt_text
                localFile {
                  childImageSharp {
                    fluid {
                      src
                    }
                  }
                }
              }
              title6
              description6
              image6{
                alt_text
                localFile {
                  childImageSharp {
                    fluid {
                      src
                    }
                  }
                }
              }
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
              <img src={wordpressPage.acf.image1.localFile.childImageSharp.fluid.src} alt={wordpressPage.acf.image1.alt_text} />
            </div>
          </Row>
          <Row className="mb-2 mb-sm-5 pb-0 pb-sm-5 mx-0">
            <div className="col-12 col-sm-4 col-lg-4 col-xl-4 pt-2 pt-sm-5 mt-0 mt-sm-5 right-card">
              <img src={wordpressPage.acf.image2.localFile.childImageSharp.fluid.src} alt={wordpressPage.acf.image2.alt_text} />
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
              <img src={wordpressPage.acf.image3_img1.localFile.childImageSharp.fluid.src} alt={wordpressPage.acf.image3_img1.alt_text} />
              <img src={wordpressPage.acf.image3_img2.localFile.childImageSharp.fluid.src} alt={wordpressPage.acf.image3_img2.alt_text}
                className="mt-2 mt-sm-5 pt-0 pt-sm-3"
              />
            </div>
          </Row>
          <Row className="mb-2 mb-sm-5 pb-0 pb-sm-5 mx-0">
            <div className="col-12 col-sm-4 col-lg-4 col-xl-4 pt-2 pt-sm-5 mt-0 mt-sm-5 right-card">
              <img src={wordpressPage.acf.image4.localFile.childImageSharp.fluid.src} alt={wordpressPage.acf.image4.alt_text} />
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
              <img src={wordpressPage.acf.image5.localFile.childImageSharp.fluid.src} alt={wordpressPage.acf.image5.alt_text} />
            </div>
          </Row>
          <Row className="mb-2 mb-sm-5 pb-0 mx-0">
            <div className="col-12 col-sm-4 col-lg-4 col-xl-4 py-4 py-sm-3 py-md-3 mt-0 mt-sm-5 right-card">
              <img src={wordpressPage.acf.image6.localFile.childImageSharp.fluid.src} alt={wordpressPage.acf.image6.alt_text} />
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

export default Ourstory
