import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import Goods from "./common/Goods";

class Page1 extends Component {
    constructor(props) {
        super(props);
        console.log();
        this.state = {
            props: this.props,
            date: 1234,
            type:1
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

    change = (i) => {
        this.setState({
            type: i
        })
    };

    render() {
        return (
            <div className="page">
                <div className="dealbox">
                    <div onClick={this.change.bind(this,1)}>1</div>
                    <div onClick={this.change.bind(this,2)}>2</div>
                    <div onClick={this.change.bind(this,3)}>3</div>
                </div>
                <Goods type={this.state.type}/>
            </div>
        );
    }
}

export default Page1;