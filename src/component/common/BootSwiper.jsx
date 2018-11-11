import React, {Component} from 'react';
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';

class BootSwiper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bannerList: [
                {"img": "http://img1.shikee.com/try/2016/06/25/14244120933639105658.jpg_220x220.jpg", "url": ""},
                {"img": "http://img1.shikee.com/try/2016/06/23/15395220917905380014.jpg_220x220.jpg", "url": ""}
            ]
        }
    }

    componentDidMount() {
        new Swiper(this.refs.a, {
            loop: true,
            pagination: {
                el: '.swiper-pagination'
            },
            autoplay: 2001,
            paginationClickable: true
        });
    }


    render() {
        const swiperStyle = {
            width: "100%",
            height: "200px",
            display: "flex"
        };
        return (
            <div>
                <div style={swiperStyle} className="swiper-container" ref="a">
                    <div className="swiper-wrapper">
                        {this.state.bannerList.map((v, i) => {
                            return <div className="swiper-slide" key={i}><a href={v.url}><img src={v.img}/></a></div>
                        })}

                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        );
    }
}

export default BootSwiper;