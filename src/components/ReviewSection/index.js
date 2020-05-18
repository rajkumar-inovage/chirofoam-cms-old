import React from 'react'
import {useStaticQuery, Link, graphql } from 'gatsby'
import ReactHtmlParser from 'react-html-parser'

const ReviewSection = (data) => {
  const { allWordpressAcfOptions } = useStaticQuery(
    graphql`
      query {
        allWordpressAcfOptions {
          nodes {
            options {
              review_button_link
              review_button_text
              review_description1
              review_description2
            }
          }
        }
      }
    `
    )
  return (
    <>
          <p className="text-center w-100 star">
                <i className="fa fa-star star-small"></i>
                <i className="fa fa-star star-medium ml-2"></i>
                <i className="fa fa-star star-large mx-2"></i>
                <i className="fa fa-star star-medium mr-2"></i>
                <i className="fa fa-star star-small"></i>
              </p>
              <p
                className="filson-pro-reg color-secondary pt-3 w-75 m-auto text-center space-1"
                style={{ fontSize: '20px' }}
              >
                {ReactHtmlParser(allWordpressAcfOptions.nodes[0].options.review_description1)}
              </p>
              <p className="cta mt-0 pt-sm-4 pt-lg-4 pt-xl-4 w-100 text-center mt-4 mt-sm-0">
                <Link
                  to={allWordpressAcfOptions.nodes[0].options.review_button_link}
                  className="btn-cta color-primary erbaum-bold space-1"
                >
                 {allWordpressAcfOptions.nodes[0].options.review_button_text}
                </Link>
              </p>
              <p
                className="filson-pro-reg color-secondary pt-3 w-75 m-auto text-center space-1"
                style={{ fontSize: '20px' }}
              >
                {allWordpressAcfOptions.nodes[0].options.review_description2}
              </p>
    </>
  )
}
export default ReviewSection

