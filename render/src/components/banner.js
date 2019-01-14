import React, { Fragment } from 'react';
const { SLIDE_LINK } = require('./banner_var');
const BannerStyle = require('./banner.style');
export default class Banner extends React.Component {
    componentDidMount() {
        console.log(this.props);
    }
    renderStyle() {
        const bannerStyle = new BannerStyle(this.props.data);
        return bannerStyle.export();
    }
    renderBanner() {
        switch (this.props.data.slide_link) {
            case SLIDE_LINK.NO_LINK: {
                return (
                    <div>

                    </div>
                )
            }
            case SLIDE_LINK.LINK: {
                return (
                    <div >
                        <img src={this.props.data.image_url} style={{
                            width: '100%',
                            height: 'auto'
                        }}></img>
                    </div>
                )
            }
            default: {
                return (<div>
                    default
                </div>)
            }
        }
    }
    render() {
        return (
            <Fragment >
                {
                    this.renderBanner()
                }
            </Fragment>
        )
    }
}