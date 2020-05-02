import React from 'react'
import {useStaticQuery, Link } from 'gatsby'
import ReactHtmlParser from 'react-html-parser'
import Header from '../components/header'
import Footer from '../components/footer'
import { Container, Row, Col } from 'reactstrap'
import SEO from '~/components/seo'
import mattress_size from '../assets/img/mattress-size.png'
import xl_twin_size from '../assets/img/xl-twin-size.png'
import full_size from '../assets/img/full-size.png'
import queen_size from '../assets/img/queen-size.png'
import king_size from '../assets/img/size.png'
import cali_king from '../assets/img/cali-king-size.png'
import ScrollAnimation from 'react-animate-on-scroll'

export default props => {
  const { wordpressPage } = useStaticQuery(
    graphql`
      query {
        wordpressPage(acf: {}, wordpress_id: {eq: 316}) {
            acf {
            section1_title
            section1_description
            variant1_name
            variant1_dimension
            variant1_image {
              localFile {
                childImageSharp {
                  fluid {
                    src
                  }
                }
              }
            }
            variant2_name
            variant2_dimension
            variant2_image {
              localFile {
                childImageSharp {
                  fluid {
                    src
                  }
                }
              }
            }
            variant3_name
            variant3_dimension
            variant3_image {
              localFile {
                childImageSharp {
                  fluid {
                    src
                  }
                }
              }
            }
            variant4_name
            variant4_dimension
            variant4_image {
              localFile {
                childImageSharp {
                  fluid {
                    src
                  }
                }
              }
            }
            variant5_name
            variant5_dimension
            variant5_image {
              localFile {
                childImageSharp {
                  fluid {
                    src
                  }
                }
              }
            }
            variant6_name
            variant6_dimension
            variant6_image {
              localFile {
                childImageSharp {
                  fluid {
                    src
                  }
                }
              }
            }
            take_test_link
            buy_now_link
            variant1_title
            variant1_description
            variant1_button_text
            varaint1_logo {
              localFile {
                childImageSharp {
                  fluid {
                    src
                  }
                }
              }
            }
             variant2_title
            variant2_description
            variant2_button_text
            varaint2_logo {
              localFile {
                childImageSharp {
                  fluid {
                    src
                  }
                }
              }
            }
             variant3_title
            variant3_description
            variant3_button_text
            varaint3_logo {
              localFile {
                childImageSharp {
                  fluid {
                    src
                  }
                }
              }
            }
             variant4_title
            variant4_description
            variant4_button_text
            varaint4_logo {
              localFile {
                childImageSharp {
                  fluid {
                    src
                  }
                }
              }
            }
             variant5_title
            variant5_description
            variant5_button_text
            varaint5_logo {
              localFile {
                childImageSharp {
                  fluid {
                    src
                  }
                }
              }
            }
             variant6_title
            variant6_description
            variant6_button_text
            varaint6_logo {
              localFile {
                childImageSharp {
                  fluid {
                    src
                  }
                }
              }
            }
            section4_title
            section4_subtitle
            section4_button_text
            section4_button_link
          }
        }
      }
    `
    )
  return (
    <>
      <SEO
        title={wordpressPage.acf.section1_title}
        description="Choosing a mattress online without testing it for yourself can prove challenging. Bed selection differs between buyer preference as well as space available in varying bedrooms."
      />
      <Header />
      <section
        className="py-5 mattress-section1"
        style={{
          backgroundColor: '#efefef',
        }}
      >
        {' '}
        <Container>
          <Row>
            <Col sm="6" className="text-center">
              <ScrollAnimation animateIn="fadeInUp">
                <h1 className="display-5 font-weight-bold erbaum-bold text-uppercase pt-5 space-3 color-primary px-0 pb-3 text-center text-sm-left text-lg-center text-xl-center">
                  {wordpressPage.acf.section1_title}
                </h1>
              </ScrollAnimation>
              <p className="filson-pro-reg text-1 color-secondary text-center text-sm-left text-lg-center text-xl-center">
               {ReactHtmlParser(wordpressPage.acf.section1_description)}
              </p>
            </Col>
            <Col sm="6" className="m-size">
              <img
                src={mattress_size}
                alt="Mattress Sizes"
                style={{
                  width: '100%',
                }}
              />
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container className="py-3 py-sm-5">
          <Row className="pb-2 pb-sm-5">
            <Col sm="4" className="difference-sizes text-center">
              <img src={xl_twin_size} alt="XL Twin Size" />
              <h5 className="erbaum py-3 py-sm-4 m-0">{wordpressPage.acf.variant1_name}</h5>
              <span className="color-secondary proxima-r">{wordpressPage.acf.variant1_dimension}</span>
            </Col>
            <Col sm="4" className="difference-sizes text-center">
              <img src={xl_twin_size} alt="XL Twin Size" />
              <h5 className="erbaum py-3 py-sm-4 m-0">{wordpressPage.acf.variant2_name}</h5>
              <span className="color-secondary proxima-r">{wordpressPage.acf.variant2_dimension}</span>
            </Col>
            <Col sm="4" className="difference-sizes text-center">
              <img src={full_size} alt="Full Size" />
              <h5 className="erbaum py-3 py-sm-4 m-0">{wordpressPage.acf.variant3_name}</h5>
              <span className="color-secondary proxima-r">{wordpressPage.acf.variant3_dimension}</span>
            </Col>
            <Col sm="4" className="difference-sizes text-center">
              <img src={queen_size} alt="Queen Size" />
              <h5 className="erbaum py-3 py-sm-4 m-0">{wordpressPage.acf.variant4_name}</h5>
              <span className="color-secondary proxima-r">{wordpressPage.acf.variant4_dimension}</span>
            </Col>
            <Col sm="4" className="difference-sizes text-center">
              <img src={king_size} alt="King Size" />
              <h5 className="erbaum py-3 py-sm-4 m-0">{wordpressPage.acf.variant5_name}</h5>
              <span className="color-secondary proxima-r">{wordpressPage.acf.variant5_dimension}</span>
            </Col>
            <Col sm="4" className="difference-sizes text-center">
              <img src={cali_king} alt="Cali King Size" />
              <h5 className="erbaum py-3 py-sm-4 m-0">{wordpressPage.acf.variant6_name}</h5>
              <span className="color-secondary proxima-r">{wordpressPage.acf.variant6_dimension}</span>
            </Col>
          </Row>
          <Row className="py-3 py-sm-5 mb-0 mb-sm-5">
            <div className="m-auto text-center d-sm-flex">
              <Col
                sm="6"
                className="text-center filson-pro-reg color-secondary mb-5 mb-sm-0 px-sm-5"
              >
                <p className="cta mt-0 pt-sm-0 pt-lg-0 pt-xl-0 mb-sm-2">
                  <Link
                    to={wordpressPage.acf.take_test_link}
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
                    to={wordpressPage.acf.buy_now_link}
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
      <section
        className="py-5"
        style={{
          backgroundColor: '#efefef',
        }}
      >
        <Container>
          <Row className="m-0">
            <div className="all-mattress text-center mb-2 mb-sm-5 pb-0 pb-sm-5">
              <img src={xl_twin_size} alt="XL Twin Size" />
              <ScrollAnimation animateIn="fadeInUp">
                <h4 className="space-1 color-primary erbaum-bold text-uppercase py-2 py-sm-5 mb-0">
                  {wordpressPage.acf.variant1_titile}
                </h4>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeInUp">
                <p className="mattress-desc space-3 proxima-r color-primary m-auto text-center px-0 pb-2 pb-sm-5">
                  {wordpressPage.acf.variant1_description}
                </p>
              </ScrollAnimation>
              <p className="cta mt-0 pt-sm-0 pt-lg-0 pt-xl-0 mb-sm-2">
                <Link
                  to="/shop-chirofoam/"
                  className="btn-cta color-primary erbaum-bold space-1 mr-3"
                >
                  {wordpressPage.acf.variant1_button_text}
                </Link>
              </p>
            </div>
            <div className="all-mattress text-center mb-2 mb-sm-5 pb-0 pb-sm-5">
              <img src={xl_twin_size} alt="XL Twin Size" />
              <ScrollAnimation animateIn="fadeInUp">
                <h4 className="space-1 color-primary erbaum-bold text-uppercase py-2 py-sm-5 mb-0">
                  {wordpressPage.acf.variant2_titile}
                </h4>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeInUp">
                <p className="mattress-desc space-3 proxima-r color-primary m-auto text-center px-0 pb-2 pb-sm-5">
                  {wordpressPage.acf.variant2_description}
                </p>
              </ScrollAnimation>
              <p className="cta mt-0 pt-sm-0 pt-lg-0 pt-xl-0 mb-sm-2">
                <Link
                  to="/shop-chirofoam/"
                  className="btn-cta color-primary erbaum-bold space-1 mr-3"
                >
                  {wordpressPage.acf.variant2_button_text}
                </Link>
              </p>
            </div>
            <div className="all-mattress text-center mb-2 mb-sm-5 pb-0 pb-sm-5">
              <img src={full_size} alt="Full Size" />
              <ScrollAnimation animateIn="fadeInUp">
                <h4 className="space-1 color-primary erbaum-bold text-uppercase py-2 py-sm-5 mb-0">
                  {wordpressPage.acf.variant3_titile}
                </h4>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeInUp">
                <p className="mattress-desc space-3 proxima-r color-primary m-auto text-center px-0 pb-2 pb-sm-5">
                  {wordpressPage.acf.variant3_description}
                </p>
              </ScrollAnimation>
              <p className="cta mt-0 pt-sm-0 pt-lg-0 pt-xl-0 mb-sm-2">
                <Link
                  to="/shop-chirofoam/"
                  className="btn-cta color-primary erbaum-bold space-1 mr-3"
                >
                  {wordpressPage.acf.variant3_button_text}
                </Link>
              </p>
            </div>
            <div className="all-mattress text-center mb-2 mb-sm-5 pb-0 pb-sm-5">
              <img src={queen_size} alt="Queen Size" />
              <ScrollAnimation animateIn="fadeInUp">
                <h4 className="space-1 color-primary erbaum-bold text-uppercase py-2 py-sm-5 mb-0">
                  {wordpressPage.acf.variant4_titile}
                </h4>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeInUp">
                <p className="mattress-desc space-3 proxima-r color-primary m-auto text-center px-0 pb-2 pb-sm-5">
                  {wordpressPage.acf.variant4_description}
                </p>
              </ScrollAnimation>
              <p className="cta mt-0 pt-sm-0 pt-lg-0 pt-xl-0 mb-sm-2">
                <Link
                  to="/shop-chirofoam/"
                  className="btn-cta color-primary erbaum-bold space-1 mr-3"
                >
                  {wordpressPage.acf.variant4_button_text}
                </Link>
              </p>
            </div>
            <div className="all-mattress text-center mb-2 mb-sm-5 pb-0 pb-sm-5">
              <img src={cali_king} alt="King Size" />
              <ScrollAnimation animateIn="fadeInUp">
                <h4 className="space-1 color-primary erbaum-bold text-uppercase py-2 py-sm-5 mb-0">
                  {wordpressPage.acf.variant5_titile}
                </h4>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeInUp">
                <p className="mattress-desc space-3 proxima-r color-primary m-auto text-center px-0 pb-2 pb-sm-5">
                  {wordpressPage.acf.variant5_description}
                </p>
              </ScrollAnimation>
              <p className="cta mt-0 pt-sm-0 pt-lg-0 pt-xl-0 mb-sm-2">
                <Link
                  to="/shop-chirofoam/"
                  className="btn-cta color-primary erbaum-bold space-1 mr-3"
                >
                  {wordpressPage.acf.variant5_button_text}
                </Link>
              </p>
            </div>
            <div className="all-mattress text-center mb-2 mb-sm-5 pb-0 pb-sm-5">
              <img src={cali_king} alt="Cali King Size" />
              <ScrollAnimation animateIn="fadeInUp">
                <h4 className="space-1 color-primary erbaum-bold text-uppercase py-2 py-sm-5 mb-0">
                  {wordpressPage.acf.variant6_titile}
                </h4>
              </ScrollAnimation>
              <p className="mattress-desc space-3 proxima-r color-primary m-auto text-center px-0 pb-2 pb-sm-5">
                {wordpressPage.acf.variant6_description}
              </p>
              <p className="cta mt-0 pt-sm-0 pt-lg-0 pt-xl-0 mb-sm-2">
                <Link
                  to="/shop-chirofoam/"
                  className="btn-cta color-primary erbaum-bold space-1 mr-3"
                >
                  {wordpressPage.acf.variant6_button_text}
                </Link>
              </p>
            </div>
          </Row>
        </Container>
      </section>
      <section className="globe parallax">
        <Container>
          <Row className="text-center">
            <ScrollAnimation animateIn="fadeInUp" className="w-100">
              <h4 className="space-1 text-white erbaum-bold text-uppercase pb-2 pb-sm-5 w-100 mb-0 display-5 text-center">
                {wordpressPage.acf.section4_title}
              </h4>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInUp" className="w-100">
              <p
                className="space-4 proxima-r text-white w-100 m-auto text-center px-0 pb-2 pb-sm-5 text-center"
                style={{
                  fontSize: '26px',
                }}
              >
                {wordpressPage.acf.section4_subtitle}
              </p>
            </ScrollAnimation>
            <p className="cta mt-0 pt-sm-0 pt-lg-0 pt-xl-0 mb-sm-2 w-100">
              <Link
                to={wordpressPage.acf.section4_button_link}
                className="btn-cta text-white erbaum-bold space-1 mr-3"
              >
                {wordpressPage.acf.section4_button_text}
              </Link>
            </p>
          </Row>
        </Container>
      </section>{' '}
      <ScrollAnimation animateIn="fadeInUp">
        {' '}
        <section className="rating-and-review py-5 py-sm-5">
          <Container className="pb-0 pb-sm-5 mt-0 mt-sm-5">
            <Row className="py-0 py-sm-5">
              <p className="text-center w-100 star">
                <i className="fa fa-star star-small"></i>
                <i className="fa fa-star star-medium ml-2"></i>
                <i className="fa fa-star star-large mx-2"></i>
                <i className="fa fa-star star-medium mr-2"></i>
                <i className="fa fa-star star-small"></i>
              </p>
              <p
                className="filson-pro-reg color-secondary pt-3 w-75 m-auto text-center space-1"
                style={{
                  fontSize: '20px',
                }}
              >
                “A great quality mattress I enjoy waking up on every day…”
                <br />
                -Mark F. from Toronto, Ontario
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
                style={{
                  fontSize: '20px',
                }}
              >
                Chirofoam™ Memory Foam Mattresses are proudly developed and
                manufactured in Toronto, ON, Canada.
              </p>
            </Row>
          </Container>
        </section>{' '}
      </ScrollAnimation>
      <Footer />{' '}
    </>
  )
}
