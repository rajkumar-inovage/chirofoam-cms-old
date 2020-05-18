import React from 'react'
import {useStaticQuery, Link, graphql } from 'gatsby'
import {Col} from 'reactstrap'


const TakeTest = (data) => {
  const { allWordpressAcfOptions } = useStaticQuery(
    graphql`
      query {
        allWordpressAcfOptions {
          nodes {
            options {
              take_test_button_link
              take_test_button_text
              take_test_description
              buy_now_button_link
              buy_now_button_text
              buy_now_description
            }
          }
        }
      }
    `
    )
  return (
    <>
          <Col
                sm="6"
                className="text-center filson-pro-reg color-secondary mb-5 mb-sm-0 px-sm-5"
              >
                <p className="cta mt-0 pt-sm-0 pt-lg-0 pt-xl-0 mb-sm-2">
                  <Link
                    to={allWordpressAcfOptions.nodes[0].options.take_test_button_link}
                    className="btn-cta color-primary erbaum-bold space-1"
                  >
                    {allWordpressAcfOptions.nodes[0].options.take_test_button_text}
                  </Link>
                </p>
                {allWordpressAcfOptions.nodes[0].options.take_test_description}
              </Col>
              <Col
                sm="6"
                className="text-center filson-pro-reg color-secondary mb-5 mb-sm-0 px-sm-5"
              >
                <p className="cta mt-0 pt-sm-0 pt-lg-0 pt-xl-0 mb-sm-2">
                  <Link
                    to={allWordpressAcfOptions.nodes[0].options.buy_now_button_link}
                    className="btn-cta color-primary erbaum-bold space-1 mr-3"
                  >
                    {allWordpressAcfOptions.nodes[0].options.buy_now_button_text}
                  </Link>
                </p>
                {allWordpressAcfOptions.nodes[0].options.buy_now_description}
              </Col>
    </>
  )
}
export default TakeTest

