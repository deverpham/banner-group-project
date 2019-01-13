import React from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";
class Container extends React.Component {
  constructor() {
    super();
    this.state = {
      settings: {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    };
  }
  componentDidMount() {
    this.mapToSetting();
  }
  mapToSetting() {
    const data = this.props.data;
    console.log(data);
  }
  render() {
    return (
      <div>
        <Slider {...this.state.settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
export default function ($container, $data) {
  return ReactDOM.render(<Container data={$data} />, $container);
}
