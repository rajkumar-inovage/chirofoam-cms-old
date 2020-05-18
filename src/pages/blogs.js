import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import { Jumbotron, Row } from 'reactstrap'
import SEO from '~/components/seo'
import Blogs from '../components/Blogs'
import RecentBlogs from '../components/Blogs/RecentBlogs'
import ScrollAnimation from 'react-animate-on-scroll'
import ReviewSection from '../components/ReviewSection'

export default props => {
  return (
    <>
      <SEO
        title="Chirofoam™ Memory Foam Mattresses"
        description="Sleep Education and Chirofoam™ News"
      />
      <Header />
      <section className="blue-bg charity">
        <Jumbotron className="mb-0 text-center text-white bg-transparent space-1 w-100 m-auto">
          <ScrollAnimation animateIn="fadeInUp">
            <h1 className="font-weight-bold erbaum-bold text-uppercase pt-md-5 space-2 pt-sm-1">
              Chirofoam™ Memory Foam Mattresses
            </h1>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp">
            <p
              className="space-4 proxima-r text-white m-auto text-center px-0 px-sm-5 px-lg-5 px-xl-5 pt-2 pt-sm-4"
              style={{ width: '90%', fontSize: '26px' }}
            >
              Sleep Education and Chirofoam™ News
            </p>
          </ScrollAnimation>
        </Jumbotron>
      </section>
      <section className="mb-0 py-5 position-relative">
        <div className="container-large">
          <Row>
            <Blogs />
            <RecentBlogs />
          </Row>
        </div>
      </section>
      <ScrollAnimation animateIn="fadeInUp">
        <section className="rating-and-review py-3 py-sm-5 mb-4 mb-sm-0">
          <div className="container-fluid pb-0 pb-sm-5">
            <Row>
              <ReviewSection />
            </Row>
          </div>
        </section>
      </ScrollAnimation>
      <Footer />
    </>
  )
}
