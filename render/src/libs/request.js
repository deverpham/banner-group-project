const axios = require('axios');
const realRequest = axios.create({
  baseURL: "http://localhost:8080"
});
const MockData = require('../mock/mock');
const ENV = require('../environment');
class Mock {
  constructor() {
    this.time = 0.5
  }
  get(router) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          data: MockData['get'][router]
        })
      }, this.time * 1000)
    })
  }
}
const requestMock = new Mock();
module.exports = {
  request: !ENV.api_ready ? requestMock : realRequest
}
