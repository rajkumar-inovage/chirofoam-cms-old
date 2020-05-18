import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import { Jumbotron, Row } from 'reactstrap'
import SEO from '~/components/seo'
import { Link } from 'gatsby'
import Cart from '../components/Cart'
import ReviewSection from '../components/ReviewSection'

const cartPage = props => {
  return (
    <>
      {' '}
      <SEO title="Cart" /> <Header />
      <section>
        <div className="container-large">
          <Row>
            <Jumbotron className="mb-0 text-center text-white bg-transparent space-1 w-100 m-auto">
              <h1 className="font-weight-bold display-5 color-primary erbaum-bold text-uppercase pt-5 space-2">
                CART
              </h1>
            </Jumbotron>
          </Row>
        </div>
      </section>
      <Cart />
      <section className="rating-and-review py-3 py-sm-5 mb-4 mb-sm-0">
        <div className="container-large pb-0 pb-sm-5">
          <Row>
            <ReviewSection />
          </Row>
        </div>
      </section>
      <Footer />{' '}
    </>
  )
}
export default cartPage
