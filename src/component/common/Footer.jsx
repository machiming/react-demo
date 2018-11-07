import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../../assets/font/iconfont.css'
class Footer extends Component {
    constructor() {
        super();
        this.state = {
            nav: [
                {id: 1, name: "首页", "icon": "icon-shouye", active: true, path: '/'},
                {id: 2, name: "分类", "icon": "icon-wodedingdan", active: false, path: '/page1/page2'},
                {id: 3, name: "购物车", "icon": "icon-gouwuche", active: false, path: '/page2'},
                {id: 4, name: "我的", "icon": "icon-wodejuhuasuan", active: false, path: '/page3'},
            ],
            name: 'zhangsan',
            id: 0
        }
    }

    step = (id) => {
        this.setState({
            nav: this.state.nav.map((v, i) => {
                i + 1 === id ? v['active'] = true : v['active'] = false;
                return v
            }),
            id: id
        });
    };

    render() {
        return (
            <div id='footer'>
                <nav>
                    {this.state.nav.map((v, i) => {
                        return (<Link to={v.path} key={i} onClick={this.step.bind(this, v.id)}
                                      className={v.id === this.state.id ? "active" : ''}><i className={v.icon+' iconfont'}></i><p>{v.name}</p></Link>)
                    })}
                </nav>
            </div>
        );
    }
}

export default Footer;