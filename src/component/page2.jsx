import React, {Component} from 'react';
import {Link,} from 'react-router-dom'
import BootSwiper from "./common/BootSwiper";
// 引入action
class Page2 extends Component {
    render() {
        return (
            <div className="page">
                <BootSwiper/>
                <Link to="/page1">topage1</Link>
                <Link to="/">index</Link>
            </div>
        );
    }
}

export default Page2;