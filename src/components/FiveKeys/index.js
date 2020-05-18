import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const SlickSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 10000,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: '0',
    autoplay: true,
    pauseOnHover: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1,
        },
      },
    ],
  }
  const { wordpressPage } = useStaticQuery(
    graphql`
      query {
        wordpressPage(acf: {}, slug: {eq:"homepage"}) {
            acf {
                key_features_card_1_title
                key_features_card_1_text
                key_features_card_1_image {
                  localFile {
                    childImageSharp {
                      fluid {
                        src
                      }
                    }
                  }
                }
                key_features_card_2_title
                key_features_card_2_text
                key_features_card_2_image {
                  localFile {
                    childImageSharp {
                      fluid {
                        src
                      }
                    }
                  }
                }
                key_features_card_3_title
                key_features_card_3_text
                key_features_card_3_image {
                  localFile {
                    childImageSharp {
                      fluid {
                        src
                      }
                    }
                  }
                }
                key_features_card_4_title
                key_features_card_4_text
                key_features_card_4_image {
                  localFile {
                    childImageSharp {
                      fluid {
                        src
                      }
                    }
                  }
                }
                key_features_card_5_title
                key_features_card_5_text
                key_features_card_5_image {
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
    <div>
      <Slider {...settings}>
        <div>
          <div className="card-bg1 keys card-bg bg-image mb-4 mb-sm-0" style={{backgroundImage:`url(${wordpressPage.acf.key_features_card_1_image.localFile.childImageSharp.fluid.src})`}}>
            <div className="card-layer">
              <h3 className="pt-0 pt-sm-3 text-right text-white pr-3 erbaum-bold">
                01
              </h3>
              <div className="card-data text-white position-absolute p-3">
                <h4
                  className="erbaum-bold pr-0 pr-sm-0 pr-lg-2 pf-xl-5 text-uppercase"
                  style={{
                    fontSize: '18px',
                  }}
                >
                  {wordpressPage.acf.key_features_card_1_title}
                </h4>
                <p
                  className="proxima-r text-1 text-justify text-md-left"
                  style={{
                    letterSpacing: '1px',
                  }}
                >
                  {wordpressPage.acf.key_features_card_1_text}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card-bg2 keys card-bg bg-image mb-4 mb-sm-0" style={{backgroundImage:`url(${wordpressPage.acf.key_features_card_2_image.localFile.childImageSharp.fluid.src})`}}>
            <div className="card-layer">
              <h3 className="pt-0 pt-sm-3 text-right text-white pr-3 erbaum-bold">
                02
              </h3>
              <div className="card-data text-white position-absolute p-3">
                <h4
                  className="erbaum-bold pr-0 pr-sm-0 pr-lg-2 pf-xl-5 text-uppercase"
                  style={{
                    fontSize: '18px',
                  }}
                >
                  {wordpressPage.acf.key_features_card_2_title}
                </h4>
                <p
                  className="proxima-r text-1 text-justify text-md-left"
                  style={{
                    letterSpacing: '1px',
                  }}
                >
                  {wordpressPage.acf.key_features_card_2_text}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card-bg3 keys card-bg bg-image" style={{backgroundImage:`url(${wordpressPage.acf.key_features_card_3_image.localFile.childImageSharp.fluid.src})`}}>
            <div className="card-layer">
              <h3 className="pt-0 pt-sm-3 text-right text-white pr-3 erbaum-bold">
                03
              </h3>
              <div className="card-data text-white position-absolute p-3">
                <h4
                  className="erbaum-bold pr-0 pr-sm-0 pr-lg-2 pf-xl-5 text-uppercase"
                  style={{
                    fontSize: '18px',
                  }}
                >
                  {wordpressPage.acf.key_features_card_3_title}
                </h4>
                <p
                  className="proxima-r text-1 text-justify text-md-left"
                  style={{
                    letterSpacing: '1px',
                  }}
                >
                  {wordpressPage.acf.key_features_card_3_text}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card-bg4 keys card-bg bg-image mb-4 mb-sm-0" style={{backgroundImage:`url(${wordpressPage.acf.key_features_card_4_image.localFile.childImageSharp.fluid.src})`}}>
            <div className="card-layer">
              <h3 className="pt-0 pt-sm-3 text-right text-white pr-3 erbaum-bold">
                04
              </h3>
              <div className="card-data text-white position-absolute p-3">
                <h4
                  className="erbaum-bold pr-0 pr-sm-0 pr-lg-2 pf-xl-5 text-uppercase"
                  style={{
                    fontSize: '18px',
                  }}
                >
                  {wordpressPage.acf.key_features_card_4_title}
                </h4>
                <p
                  className="proxima-r text-1 text-justify text-md-left"
                  style={{
                    letterSpacing: '1px',
                  }}
                >
                  {wordpressPage.acf.key_features_card_4_text}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card-bg5 keys card-bg bg-image mb-4 mb-sm-0" style={{backgroundImage:`url(${wordpressPage.acf.key_features_card_5_image.localFile.childImageSharp.fluid.src})`}}>
            <div className="card-layer">
              <h3 className="pt-0 pt-sm-3 text-right text-white pr-3 erbaum-bold">
                05
              </h3>
              <div className="card-data text-white position-absolute p-3">
                <h4
                  className="erbaum-bold pr-0 pr-sm-0 pr-lg-2 pf-xl-5 text-uppercase"
                  style={{
                    fontSize: '18px',
                  }}
                >
                  {wordpressPage.acf.key_features_card_5_title}
                </h4>
                <p
                  className="proxima-r text-1 text-justify text-md-left"
                  style={{
                    letterSpacing: '1px',
                  }}
                >
                  {wordpressPage.acf.key_features_card_5_text}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  )
}
export default SlickSlider
