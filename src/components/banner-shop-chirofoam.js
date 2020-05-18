import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Spybutton from '../components/spybutton'
import {useStaticQuery, graphql} from 'gatsby'

const Banner = props => {
  const { wordpressPage } = useStaticQuery(
    graphql`
      query {
        wordpressPage(slug: {eq:"shop-chirofoam"}) {
          acf {
            banner_small_title
            banner_big_title
            banner_button_text
            banner_button_link
            banner_image {
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
    <section>
      <Container>
        <Row className="py-sm-5 py-4">
          <Col md="7">
            <span className="erbaum-bold color-primary space-1">{wordpressPage.acf.banner_small_title}</span>
            <h1 className="shop-banner-title erbaum-bold color-primary">
              {wordpressPage.acf.banner_big_title}
            </h1>
            <p className="cta mt-0 pt-sm-5 pt-lg-5 pt-xl-5">
              <Spybutton
                activeClass="active"
                className="btn-cta bg-transparent border-0 outline-none color-primary erbaum-bold space-1"
                type="button"
                value="BUY NOW"
                to="product"
                spy={true}
                smooth={true}
                duration={250}
              >
                {wordpressPage.acf.banner_button_text}
              </Spybutton>
            </p>
          </Col>
          <Col md="5">
            <img
                  src={wordpressPage.acf.banner_image.localFile.childImageSharp.fluid.src}
                  alt={wordpressPage.acf.banner_image.alt_text}
                  width="100%"
                />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Banner
