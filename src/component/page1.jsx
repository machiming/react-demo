import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class Page1 extends Component {
    constructor(props) {
        super(props);
        console.log();
        this.state = {
            props: this.props,
            date: 1234
        }

    }

    changethis = () => {
        this.setState({
            date: 1234
        })
    };

    changethis2() {
        this.setState({
            date: this.state.date + "1"
        })
    }

    render() {
        return (
            <div className="page">
                page1 <div>{this.state.date}</div>
                <Link to="/page2">topage2</Link>
                <button onClick={this.changethis}>change</button>
                <button onClick={this.changethis2.bind(this)}>change</button>
            </div>
        );
    }
}

export default Page1;