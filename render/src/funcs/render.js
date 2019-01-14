import React from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";
import Banner from '../components/banner';
const BannerGroupStyle = require('./banner_group.style');
const bannerGroupVar = require('./banner_group.var');
class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      banner_detail: {
        banners: []
      },
      settings: {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: this.getSlideToShow(),
        slidesToScroll: this.getSlideToShow()
      }
    };
  }
  getSlideToShow() {
    if (this.props.data.type == 'single') {
      return 1;
    } else return 3;
  }
  componentDidMount() {
    this.mapToSetting();
  }
  mapToSetting() {
    const data = this.props.data;
    this.setState({
      banner_detail: data
    });
  }
  getBannerStyle() {
    const bannerStyle = new BannerGroupStyle(this.props.data);
    return bannerStyle.export();
  }
  getClass() {
    switch (this.props.data.corner_type) {
      case bannerGroupVar.CORNER_TYPE.ROUNDED: {
        return 'rounded'
      }
      case bannerGroupVar.CORNER_TYPE.SUPER_ROUND: {
        return 'super_round'
      }
      default: {
        return 'square'
      }
    }
  }
  render() {
    return (
      <div id={this.state.banner_detail.id} className={'slider_wrapper ' + this.getClass()} style={this.getBannerStyle()}>
        <Slider {...this.state.settings} >
          {this.state.banner_detail.banners.map(banner => <Banner key={banner.id} data={banner} />)}
        </Slider>
      </div>
    );
  }
}
export default function ($container, $data) {
  return ReactDOM.render(<Container data={$data} />, $container);
}
