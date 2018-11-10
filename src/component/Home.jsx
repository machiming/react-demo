import React, {Component} from 'react';
import BootSwiper from "./common/BootSwiper";
import Goods from "./common/Goods";

class Home extends Component {
    render() {
        return (
            <div className="page">
                <BootSwiper/>
                <Goods/>
            </div>
        );
    }
}

export default Home;