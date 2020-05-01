import React from 'react'
import Slider from 'react-slick'
import {useStaticQuery, Link } from 'gatsby'
import { Row, Col } from 'reactstrap'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const HomeBannerSlider = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 5000,
    centerMode: false,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  const { wordpressPage } = useStaticQuery(
    graphql`
      query {
        wordpressPage(acf: {}, wordpress_id: {eq: 6}) {
           acf {
              banner_1_title_1
              banner_1_title_2
              banner_1_title_3
              banner_2_title_1
              banner_2_title_2
              banner_2_title_3
              banner_3_title_1
              banner_3_title_2
              banner_3_title_3
              banner_2_button
              banner_3_button
              banner_1_button
            }
          }
      }
    `
    )
  return (
    <div>
      <Slider {...settings}>
        <div className="home-banner bg-image">
          <div className="container-large position-relative">
            <div
              className=""
              style={{
                color: '#fff',
                right: '0',
                left: '0',
              }}
            >
              <div className="">
                <Row>
                  <Col md="6"></Col>
                  <Col
                    md="6"
                    className="text-center banner-home"
                    style={{
                      right: '0',
                    }}
                  >
                    <p className="leads filson-pro-reg space-4 pt-2 animated fadeInDown slow text-uppercase">
                      {wordpressPage.acf.banner_1_title_1}
                    </p>
                    <h2
                      className="erbaum-bold space-4 pl-sm-0 pl-xl-4 pl-lg-4 animated fadeInRight slow"
                      style={{
                        fontStyle: 'italic',
                      }}
                    >
                      {wordpressPage.acf.banner_1_title_2}
                    </h2>
                    <h3 className="erbaum animated fadeInUp slow">
                      {wordpressPage.acf.banner_1_title_3}
                    </h3>
                    <p className="cta mt-0 pt-sm-1 pt-lg-1 pt-xl-1 mb-sm-2 pl-0 animated fadeInLeft slow">
                      <Link
                        to={wordpressPage.acf.banner_1_button}
                        className="btn-cta text-white erbaum-bold space-1"
                      >
                        BUY NOW
                      </Link>
                    </p>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>
        <div className="home-banner bg-image">
          <div className="container-large position-relative">
            <div
              className=""
              style={{
                color: '#fff',
                right: '0',
                left: '0',
              }}
            >
              <div className="">
                <Row>
                  <Col md="6"></Col>
                  <Col
                    md="6"
                    className="text-center banner-home"
                    style={{
                      right: '0',
                    }}
                  >
                    <p className="leads filson-pro-reg space-4 pt-2 animated fadeInDown slow text-uppercase">
                      {wordpressPage.acf.banner_2_title_1}
                    </p>
                    <h2
                      className="erbaum-bold space-4 pl-sm-0 pl-xl-4 pl-lg-4 animated fadeInRight slow"
                      style={{
                        fontStyle: 'italic',
                      }}
                    >
                      {wordpressPage.acf.banner_2_title_2}
                    </h2>
                    <h3 className="erbaum animated fadeInUp slow">
                      {wordpressPage.acf.banner_2_title_3}
                    </h3>
                    <p className="cta mt-0 pt-sm-1 pt-lg-1 pt-xl-1 mb-sm-2 pl-0 animated fadeInLeft slow">
                      <Link
                        to={wordpressPage.acf.banner_2_button}
                        className="btn-cta text-white erbaum-bold space-1"
                      >
                        BUY NOW
                      </Link>
                    </p>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  )
}
export default HomeBannerSlider
