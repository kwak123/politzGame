module.exports = {

  // These are straight from HR's, I'll need to read more into how to properly define these
  defaultCorsHeaders: {
    'access-control-allow-origin': '*',
    'access-control-allow-methods': 'OK, POST, PUT, DELETE, OPTIONS',
    'access-control-allow-headers': 'content-type, accept',
    'access-control-max-age': 10 // Seconds.
  },

  allowedUrls: {
    DEFAULT: '/',
  },

  allowedRequests: {
    GET: 'GET',
    POST: 'POST',
    OPTIONS: 'OPTIONS',

  },

  statusCodes: {
    OK: 200,
    POST: 201,
    BAD_REQ: 400,
    FAIL: 404,
  },

  filePaths: {

  }

}