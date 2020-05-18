import React, { useState } from 'react'
import {useStaticQuery, Link } from 'gatsby'
import Header from '../components/header'
import Footer from '../components/footer'
import { Container, Jumbotron, Row, Col } from 'reactstrap'
import SEO from '~/components/seo'
import '~/assets/css/bootstrap.min.css'
import ScrollAnimation from 'react-animate-on-scroll'
import ReviewSection from '../components/ReviewSection'

export default props => {
  const [submitting, setSubmitting] = useState(false)

  const submitForm = event => {
    event.preventDefault()
    setSubmitting(true)
    const reviewForm = event.target
    const elements = event.target.elements
    const data = {
      domain: elements.domain.value,
      mail_to: elements.mail_to.value,
      name: elements.name.value,
      email: elements.email.value,
      subject: elements.subject.value,
      message: elements.message.value,
    }
    const sendFormData = async URL => {
      return await fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-requested-with': 'XMLHttpRequest',
        },
        body: JSON.stringify(data),
      })
        .then(response => {
          if (response.status === 200) {
            response.json().then(responseJson => {
              reviewForm.reset()
              setSubmitting(false)
            })
          }
        })
        .catch(error => {
          console.error(error)
        })
    }
    sendFormData('https://contactform.hulkapps.com/ajaxcall/customcontact')
  }
  const { wordpressPage } = useStaticQuery(
    graphql`
      query {
        wordpressPage(acf: {}, slug: {eq: "customer-service"}) {
            title
            acf {
              title
              description
              phone1
              phone2
              working_day
              secondary_phone
              address_line1
              address_line2
              address_line3
              address_line4
              address_line5
              office_hours
              center_address_line1
              center_address_line2
              center_address_line3
              center_address_line4
              center_address_line5
              last_description
            }
          }
      }
    `
    )

  return (
    <>
      {' '}
      <SEO title={wordpressPage.title} /> <Header />
      <ScrollAnimation animateIn="fadeInUp">
        <section>
          <div className="container-large">
            <Row>
              <Jumbotron className="mb-0 text-center text-white bg-transparent space-1 w-100 m-auto">
                <h1 className="font-weight-bold display-5 color-primary erbaum-bold text-uppercase pt-5 space-2">
                 {wordpressPage.title}
                </h1>
              </Jumbotron>
            </Row>
          </div>
        </section>
      </ScrollAnimation>
      <section className="mb-0 py-5 position-relative">
        <Container>
          <Row>
            <Col sm="6" className="mb-3 mb-sm-5">
              <ScrollAnimation animateIn="fadeInUp">
                <h5 className="erbaum-bold color-primary pb-2 pb-sm-5 mb-0 text-uppercase">
                  {wordpressPage.acf.title}
                </h5>
              </ScrollAnimation>
              <p className="filson-pro-reg color-secondary pt-2 text-1">
                {wordpressPage.acf.description}
              </p>
              <p className="filson-pro-reg color-secondary pt-2 text-1">
                Prefer to talk to us by phone?
                <br />
                Give us a call:
              </p>
              <p className="filson-pro-reg color-secondary pt-2 text-1">
                <strong>{wordpressPage.acf.phone1}</strong>
                <br />{wordpressPage.acf.phone2}
              </p>
              <p className="filson-pro-reg color-secondary pt-2 text-1">
                Our sleep experts are on call
                <br />
                {wordpressPage.acf.working_day}
              </p>
              <p className="filson-pro-reg color-secondary pt-2 pt-sm-2 pt-lg-5 pt-xl-5 text-1">
                You may also call our local Toronto, Ontario office at: {wordpressPage.acf.secondary_phone}
              </p>
              <p className="filson-pro-reg color-secondary pt-2 pt-sm-2 pt-lg-5 pt-xl-5 text-1">
                Chirofoam Mattress Company, Head Office
              </p>
              <p className="filson-pro-reg color-secondary pt-2 text-1">
                {wordpressPage.acf.address_line1}
                <br />
                {wordpressPage.acf.address_line2}
                <br />
                {wordpressPage.acf.address_line3}
                <br />
                {wordpressPage.acf.address_line4}
                <br />
                {wordpressPage.acf.address_line5}
              </p>
              <p className="filson-pro-reg color-secondary pt-2 text-1">
                Office hours:
                <br />
                {wordpressPage.acf.office_hours}
              </p>
              <p className="filson-pro-reg color-secondary pt-2 text-1 pt-sm-2 pt-lg-5 pt-xl-5">
                Distribution Center:
              </p>
              <p className="filson-pro-reg color-secondary pt-2 text-1">
                {wordpressPage.acf.center_address_line1}
                <br />
                {wordpressPage.acf.center_address_line2}
                <br />
                {wordpressPage.acf.center_address_line3}
                <br />
                {wordpressPage.acf.center_address_line4}
                <br />
                {wordpressPage.acf.center_address_line5}
              </p>
              <p className="filson-pro-reg color-secondary pt-2 text-1 pt-sm-2 pt-lg-5 pt-xl-5">
                {wordpressPage.acf.last_description}
              </p>
            </Col>
            <Col
              sm="6"
              className="mb-3 mb-sm-5 pt-3 pt-sm-3 pt-lg-5 pt-xl-5 email-form"
            >
              <iframe
                title="Contact Form"
                className="w-100 h-100"
                src="//contactform.hulkapps.com/corepage/contact?id=33933e908affc84cb6c02a"
                frameBorder="0"
                style={{ minHeight: '600px' }}
              ></iframe>
              <form
                action="#"
                method="post"
                className="d-none"
                id="contact_form_custom"
                encType="multipart/form-data"
                onSubmit={e => submitForm(e)}
              >
                <div className="modal-body py-0">
                  <div className="form-row">
                    <input
                      type="hidden"
                      name="domain"
                      value="chirofoam-dev.myshopify.com"
                    />
                    <input
                      type="hidden"
                      name="mail_to"
                      value="asifaziz01@gmail.com"
                    />
                    <div className="col-6 form-group">
                      <input
                        type="text"
                        className="form-control required error"
                        name="name"
                        id="name"
                        required={true}
                        placeholder="Your Name*"
                      />
                    </div>
                    <div className="col-6 form-group">
                      <input
                        type="email"
                        className="form-control rounded-0"
                        name="email"
                        placeholder="Your Email*"
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="col-12 form-group">
                      <input
                        type="text"
                        className="form-control rounded-0"
                        name="subject"
                        id="subject"
                        placeholder="Your Subject*"
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="col-sm-12 form-group">
                      <textarea
                        className="form-control rounded-0"
                        name="message"
                        id="message"
                        placeholder="Your Message*"
                        rows="10"
                        required={true}
                        style={{
                          resize: 'none',
                        }}
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="modal-footer border-top-0 justify-content-center">
                  <button
                    type="submit"
                    id="form_submit"
                    className={
                      submitting
                        ? 'btn btn-custom-primary color-primary position-relative w-100'
                        : 'btn btn-custom-primary text-white w-100'
                    }
                    style={{
                      opacity: 1,
                    }}
                    disabled={submitting}
                  >
                    {submitting && (
                      <div
                        className="h-100 w-100 bg-custom-primary d-flex justify-content-center align-items-center position-absolute"
                        style={{
                          zIndex: 1,
                          left: 0,
                          top: 0,
                        }}
                      >
                        {' '}
                        <div
                          className="spinner-border text-white"
                          role="status"
                        >
                          <span className="sr-only">Loading...</span>
                        </div>
                      </div>
                    )}
                    SEND
                  </button>
                </div>
              </form>
            </Col>
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
