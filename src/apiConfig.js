let apiUrl
const apiUrls = {
  production: 'https://still-fortress-56094.herokuapp.com',
  development: 'http://localhost:4741'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

const API_KEY = 'APgEMGS6KSeiwr0swzgWYz'

export {
  apiUrl,
  API_KEY,
  API
}

export default {
  apiUrl
}
