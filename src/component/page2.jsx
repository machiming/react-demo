import React, {Component} from 'react';
import {Link,} from 'react-router-dom'
// 引入action
class Page2 extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="page">
                page2
                <Link to="/page1">topage1</Link>
                <Link to="/">index</Link>
            </div>
        );
    }
}

export default Page2;