import React, { useState } from 'react'
import {
  Row,
  Col,
  Container,
  Media,
  Carousel,
  CarouselItem,
  CarouselControl,
} from 'reactstrap'
import ReactHtmlParser from 'react-html-parser'
import {useStaticQuery, Link } from 'gatsby'
import '~/assets/css/bootstrap.min.css'
import '~/assets/css/animate.css'
import run from '~/assets/img/only-man.webp'
import icon1 from '~/assets/img/ic1.png'
import icon2 from '~/assets/img/ic2.png'
import icon3 from '~/assets/img/ic3.png'
import icon4 from '~/assets/img/ic4.png'
import us from '~/assets/img/us.png'
import eco from '~/assets/img/eco.png'
import confidence from '~/assets/img/confidence.png'

const items = [
  {
    background: '',
  },
  {
    background: '',
  },
  {
    background: '',
  },
]

const HomePageSlider2 = props => {
   const { wordpressPage } = useStaticQuery(
    graphql`
      query {
        wordpressPage(acf: {}, wordpress_id: {eq: 6}) {
            acf {
                slider_1_title_1
                slider_1_text_1
                slider_1_button_1
                slider_1_text_2
                slider_1_button_2
                slider_2_block_1_title
                slider_2_block_1_text
                slider_2_block_2_title
                slider_2_block_2_text
                slider_2_block_3_title
                slider_2_block_3_text
                slider_2_block_4_title
                slider_2_block_4_text
                slider_3_title
                slider_3_text1
                slider_3_text2
                slider_3_text3
              }
          }
      }
    `
    )
  const [activeIndex, setActiveIndex] = useState(0)
  const [animating, setAnimating] = useState(false)

  const next = () => {
    if (animating) return
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1
    setActiveIndex(nextIndex)
  }

  const previous = () => {
    if (animating) return
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1
    setActiveIndex(nextIndex)
  }

  const slides = items.map((item, index) => {

    const slide = [
      <section className="py-4 pt-sm-4 pb-sm-4 approved bg-image">
        <Container className="">
          <Row className="pt-3 no-gutters m-0 position-relative">
            <Col className="align-middle col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5">
              <div className="white-dots">
                <img
                  src={run}
                  alt="run"
                  width="297"
                  height="536"
                  className="mt-sm-3 pl-sm-5 ml-sm-5 img-fluid"
                  useMap="#workmap"
                />
              </div>
            </Col>
            <Col className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7">
              <div className="text-white mb-4">
                <h3 className="approved-title text-white erbaum-bold lead-text lead-sm-text lead-md-text lead-lg-text lead-xl-text">
                   {wordpressPage.acf.slider_1_title_1}
                </h3>
                <p className="proxima-b space-1 p-0 pt-sm-1 text-1">
                  {wordpressPage.acf.slider_1_text_1}
                </p>
                <p className="cta mt-3 mt-sm-0 mt-lg-0 mt-xl-0 pt-sm-0 pt-lg-0 pt-xl-0 mb-sm-2">
                  <button className="btn-cta bg-transparent outline-none text-white erbaum-bold space-1 border-0">
                    CALL TO ACTION
                  </button>
                </p>
              </div>

              <div className="text-white mb-4 pt-1 pr-0 pr-sm-5">
                <h3 className="approved-title text-white erbaum-bold pt-0 pt-sm-3 lead-text lead-sm-text lead-md-text lead-lg-text lead-xl-text">
                  {wordpressPage.acf.slider_1_title_2}
                </h3>
                <p className="proxima-b space-1 p-0 pt-sm-2 text-1">
                  {wordpressPage.acf.slider_1_text_2}
                </p>
                <div className="ml-0 ml-sm-4 pt-0 pt-sm-0 pl-0 pr-sm-5">
                  <Media className="my-3">
                    <span className="white-dot-1 white-dot position-absolute"></span>
                    <div className="d-flex h-effect">
                      <Media
                        left={true}
                        middle={true}
                        className="my-0 pr-4 h4 erbaum-bold"
                        style={{
                          fontSize: '32px',
                        }}
                      >
                        97%
                      </Media>
                      <Media
                        body={true}
                        middle={true}
                        className="proxima-r pl-sm-3 text-1 align-self-center"
                      >
                        Improvement in sleep comfort and quality
                      </Media>
                    </div>
                  </Media>
                  <Media className="py-3">
                    <span className="white-dot-2 white-dot position-absolute"></span>
                    <div className="d-flex h-effect">
                      <Media
                        left={true}
                        middle={true}
                        className="my-0 pr-4 h4 erbaum-bold"
                        style={{
                          fontSize: '32px',
                        }}
                      >
                        94%
                      </Media>
                      <Media
                        body={true}
                        middle={true}
                        className="proxima-r pl-sm-3 text-1 align-self-center"
                      >
                        Increased energy in the morning and throughout the day
                      </Media>
                    </div>
                  </Media>
                  <Media className="py-3">
                    <span className="white-dot-3 white-dot position-absolute"></span>
                    <div className="d-flex h-effect">
                      <Media
                        left={true}
                        middle={true}
                        className="my-0 pr-4 h4 erbaum-bold"
                        style={{
                          fontSize: '32px',
                        }}
                      >
                        86%
                      </Media>
                      <Media
                        body={true}
                        middle={true}
                        className="proxima-r pl-sm-3 pt-sm-1 text-1 align-self-center"
                      >
                        Improved muscle recovery and/or relief in daliy
                        experienced back pain
                      </Media>
                    </div>
                  </Media>
                  <Media className="py-3">
                    <span className="white-dot-4 white-dot position-absolute"></span>
                    <div className="d-flex h-effect">
                      <Media
                        left={true}
                        middle={true}
                        className="my-0 pr-4 h4 erbaum-bold"
                        style={{
                          fontSize: '32px',
                        }}
                      >
                        82%
                      </Media>
                      <Media
                        body={true}
                        middle={true}
                        className="proxima-r pl-sm-3 pt-sm-2 text-1 align-self-center"
                      >
                        Improvement in sleep comfort and quality
                      </Media>
                    </div>
                  </Media>
                </div>
                <p className="cta mt-3 mt-sm-3 pt-sm-4 pt-lg-4 pt-xl-4 mb-sm-2 pl-0">
                  <Link
                    to={wordpressPage.acf.slider_1_button_2}
                    className="btn-cta text-white erbaum-bold space-1"
                  >
                    READ CUSTOMER REVIEWS
                  </Link>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>,
      <section>
        <div className="py-sm-4 feature bg-image">
          <div className="card-layer"></div>
          <Container className="py-0 py-sm-0 py-md-0 py-lg-5 py-xl-5">
            <Row className="pt-sm-5 pt-3">
              <div
                style={{
                  width: '100%',
                }}
              >
                <h4 className="lead-text-font text-white erbaum-bold display-5 position-relative text-center pb-5">
                  ONDIMENTUM QUISBIBENDUM SED
                </h4>
              </div>
              <Col sm="6">
                <Media className="px-2 px-sm-2 px-md-3 px-lg-5 px-xl-5 pb-3 pb-sm-5">
                  <Media left={true} middle={true}>
                    <img src={icon1} alt="icon1" width="85px" />
                  </Media>
                  <Media body={true} middle={true} className="pl-3 text-white">
                    <h4
                      className="erbaum-bold"
                      style={{
                        fontSize: '18px',
                      }}
                    >
                      {wordpressPage.acf.slider_2_block_1_title}
                    </h4>
                    <p
                      className="filson-pro-reg text-1 space-1"
                    >
                      {wordpressPage.acf.slider_2_block_1_text}
                    </p>
                  </Media>
                </Media>
              </Col>
              <Col sm="6">
                <Media className="px-2 px-sm-2 px-md-3 px-lg-5 px-xl-5 pb-3 pb-sm-5">
                  <Media left={true} middle={true}>
                    <img src={icon2} alt="icon2" width="85px" />
                  </Media>
                  <Media body={true} middle={true} className="pl-3 text-white">
                    <h4
                      className="erbaum-bold"
                      style={{
                        fontSize: '18px',
                      }}
                    >
                      {wordpressPage.acf.slider_2_block_2_title}
                    </h4>
                    <p
                      className="filson-pro-reg text-1 space-1"
                    >
                      {wordpressPage.acf.slider_2_block_2_text}
                    </p>
                  </Media>
                </Media>
              </Col>
              <Col sm="6">
                <Media className="px-2 px-sm-2 px-md-3 px-lg-5 px-xl-5 pb-3 pb-sm-5">
                  <Media left={true} middle={true}>
                    <img src={icon4} alt="icon4" width="85px" />
                  </Media>
                  <Media body={true} middle={true} className="pl-3 text-white">
                    <h4
                      className="erbaum-bold"
                      style={{
                        fontSize: '18px',
                      }}
                    >
                      {wordpressPage.acf.slider_2_block_3_title}
                    </h4>
                    <p
                      className="filson-pro-reg text-1 space-1"
                    >
                      {wordpressPage.acf.slider_2_block_3_text}
                    </p>
                  </Media>
                </Media>
              </Col>
              <Col sm="6">
                <Media className="px-2 px-sm-2 px-md-3 px-lg-5 px-xl-5 pb-3 pb-sm-5">
                  <Media left={true} middle={true}>
                    <img src={icon3} alt="icon3" width="85px" />
                  </Media>
                  <Media body={true} middle={true} className="pl-3 text-white">
                    <h4
                      className="erbaum-bold"
                      style={{
                        fontSize: '18px',
                      }}
                    >
                      {wordpressPage.acf.slider_2_block_4_title}
                    </h4>
                    <p
                      className="filson-pro-reg text-1 space-1"
                    >
                      {wordpressPage.acf.slider_2_block_4_text}
                    </p>
                  </Media>
                </Media>
              </Col>
            </Row>
          </Container>
        </div>
      </section>,
      <section>
        <div className="py-2 py-sm-2 feature bg-image">
          <div className="card-layer"></div>
          <Container
            className="position-relative"
            style={{
              zIndex: '9',
            }}
          >
            <Row className="py-5 my-sm-5 my-0 mx-0">
              <Media className="px-3 px-sm-5 mb-1 d-block d-sm-flex">
                <Media left={true} middle={true}>
                  <h3 className="lead-text lead-sm-text lead-md-text lead-lg-text lead-xl-text text-uppercase text-white erbaum-bold pr-0 pr-lg-5 pr-xl-5 mr-0 mr-lg-5 mr-xl-5 pb-3 pb-lg-3 pb-xl-3">
                    {wordpressPage.acf.slider_3_title}
                  </h3>
                  <p
                    className="text-white filson-pro-reg text-1 space-1"
                  >
                   {ReactHtmlParser(wordpressPage.acf.slider_3_text1)}
                  </p>
                </Media>
                <Media body={true} middle={true} className="pl-sm-4 pl-0 pb-0">
                  <img src={us} alt="us" width="150px" />
                </Media>
              </Media>
              <Media className="px-3 px-sm-5 mb-0 d-block d-sm-flex">
                <Media left={true} middle={true}>
                  <p
                    className="text-white filson-pro-reg text-1 space-1 mb-0 pt-2 pt-lg-4 pt-xl-4"
                  >
                    {ReactHtmlParser(wordpressPage.acf.slider_3_text2)}
                  </p>
                </Media>
                <Media body={true} middle={true} className="pl-sm-4 pl-0 pb-3">
                  <img src={eco} alt="eco" width="150px" />
                </Media>
              </Media>
              <Media className="px-3 px-sm-5 mb-1 d-block d-sm-flex">
                <Media left={true} middle={true}>
                  <p
                    className="text-white filson-pro-reg text-1 space-1"
                  >
                    {ReactHtmlParser(wordpressPage.acf.slider_3_text3)}
                  </p>
                </Media>
                <Media body={true} middle={true} className="pl-sm-4 pl-0 pb-3">
                  <img src={confidence} alt="confidence" width="150px" />
                </Media>
              </Media>
            </Row>
          </Container>
        </div>
      </section>,
    ]
   
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        style={index === 0 && { maxHeight: '500px' }}
        key={index}
      >
        {slide[index]}
      </CarouselItem>
    )
  })

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
        className="btn-cta"
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
        className="btn-cta"
      />
    </Carousel>
  )
}

export default HomePageSlider2
