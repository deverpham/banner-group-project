const bannerGroupVar = require('./banner_group.var');
class BannerGroupStyle {
    constructor(data) {
        this.data = data;
    }
    getWidth() {
        if (this.data.responsive) return '100%'
        return this.data.width
    }
    getHeight() {
        return this.data.height
    }
    getCorner() {
        switch (this.data.corner_type) {
            case bannerGroupVar.CORNER_TYPE.ROUNDED: {
                return {
                    borderRadius: '5%',
                }
            }
            case bannerGroupVar.CORNER_TYPE.SUPER_ROUND: {
                return {
                    borderRadius: '10%'
                }
            }
            default: {
                return {}
            }
        }
    }
    export() {
        return {
            width: this.getWidth(),
            height: this.getHeight(),
            ...this.getCorner()
        }
    }
}
module.exports = BannerGroupStyle