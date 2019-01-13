const { request } = require('../libs/request');
function getBannerById(id) {
  return request.get(`/api/group/${id}`);
}
module.exports = getBannerById;
