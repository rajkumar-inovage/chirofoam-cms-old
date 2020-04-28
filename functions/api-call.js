const axios = require('axios')
const http = require("https")
const bodyParser = require('body-parser')
const hostname = "chirofoam-dev.myshopify.com"
const Access_Token = "44ad603380756bf8c733a15e818b9837"
const Content_Type = "application/json"
exports.handler = function(event, context, callback) {
  const eventMethod = event.httpMethod
  if (eventMethod.toLowerCase() === 'get') {
    const apiURL = event.queryStringParameters.api
    delete event.queryStringParameters.api
    const queryString = '?' + Object.keys(event.queryStringParameters).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(event.queryStringParameters[key])).join('&')
    const options = {
      "method": eventMethod,
      "hostname": hostname,
      "port": null,
      "path": apiURL + queryString,
      "headers": {
        "X-Shopify-Access-Token": Access_Token,
        "Content-Type": Content_Type
      }
    }
    const request = http.request(options, function(response) {
      let chunks = []
      response.on("data", function(chunk) {
        chunks.push(chunk)
      })
      response.on("end", function() {
        let body = Buffer.concat(chunks)
        callback(null, {
          statusCode: 200,
          headers: {
            'Content-Type': Content_Type
          },
          body: body.toString()
        })
      })
    })
    request.end()
  } else {
    const eventBody = JSON.parse(event.body)
    const apiURL = eventBody.api
    const apiQuery = eventBody.query
    const options = {
      "method": eventMethod,
      "hostname": hostname,
      "port": null,
      "path": apiURL,
      "headers": {
        "X-Shopify-Access-Token": Access_Token,
        "Content-Type": Content_Type
      }
    }
    const request = http.request(options, function(response) {
      let chunks = []
      response.on("data", function(chunk) {
        chunks.push(chunk)
      })
      response.on("end", function() {
        let body = Buffer.concat(chunks)
        callback(null, {
          statusCode: 200,
          headers: {
            'Content-Type': Content_Type
          },
          body: body.toString()
        })
      })
    })
    request.write(JSON.stringify(apiQuery))
    request.end()
  }
}