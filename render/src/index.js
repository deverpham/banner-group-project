const getBannerById = require('./funcs/get_banner_by_id');
const $ = require('jquery');
$('.bannergroup').each(function () {
    const id = $(this).attr('data-id');
    const container = $(this)[0];
    getBannerById(id)
        .then(res => {
            const { data } = res;
            renderBannerGroup(container, data);
        })
})