class BannerStyle {
    constructor(banner) {
        this.data = banner;
    }
    getWidth() {
        switch (this.data.fit_type) {
            case 'width': case 'stretch': {
                return '100%';
            }
            case 'height': {
                return 'auto'
            }
        }
    }
    getHeight() {
        return '100%'
    }
    export() {
        console.log(this.data.image_url);
        return {
            background: `url(${this.data.image_url})`,
            width: this.getWidth(),
            height: this.getHeight()
        }
    }
}
module.exports = BannerStyle;