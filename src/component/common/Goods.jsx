import React, {Component} from 'react';

class Goods extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: this.props.type || 1,
            productList: [
                {
                    "id": 1,
                    "productName": "产品1",
                    "content": "content描述",
                    "marketPrice": 188.8,
                    "salePrice": 188.8,
                    "img": "http://img1.shikee.com/try/2016/06/25/14244120933639105658.jpg_220x220.jpg"
                },
                {
                    "id": 1,
                    "productName": "产品1",
                    "content": "content描述",
                    "marketPrice": 188.8,
                    "salePrice": 188.8,
                    "img": "http://img1.shikee.com/try/2016/06/23/15395220917905380014.jpg_220x220.jpg"
                },
                {
                    "id": 1,
                    "productName": "产品1",
                    "content": "content描述",
                    "marketPrice": 188.8,
                    "salePrice": 188.8,
                    "img": "http://img1.shikee.com/try/2016/06/23/14381920926024616259.jpg_220x220.jpg"
                },
                {
                    "id": 1,
                    "productName": "产品1",
                    "content": "content描述",
                    "marketPrice": 188.8,
                    "salePrice": 188.8,
                    "img": "http://img1.shikee.com/try/2016/06/21/10172020923917672923.jpg_220x220.jpg"
                },
                {
                    "id": 1,
                    "productName": "产品1",
                    "content": "content描述",
                    "marketPrice": 188.8,
                    "salePrice": 188.8,
                    "img": "http://img1.shikee.com/try/2016/06/25/14244120933639105658.jpg_220x220.jpg"
                },
                {
                    "id": 1,
                    "productName": "产品1",
                    "content": "content描述",
                    "marketPrice": 188.8,
                    "salePrice": 188.8,
                    "img": "http://img1.shikee.com/try/2016/06/23/15395220917905380014.jpg_220x220.jpg"
                },
                {
                    "id": 1,
                    "productName": "产品1",
                    "content": "content描述",
                    "marketPrice": 188.8,
                    "salePrice": 188.8,
                    "img": "http://img1.shikee.com/try/2016/06/23/14381920926024616259.jpg_220x220.jpg"
                },
                {
                    "id": 1,
                    "productName": "产品1",
                    "content": "content描述",
                    "marketPrice": 188.8,
                    "salePrice": 188.8,
                    "img": "http://img1.shikee.com/try/2016/06/21/10172020923917672923.jpg_220x220.jpg"
                },
                {
                    "id": 1,
                    "productName": "产品1",
                    "content": "content描述",
                    "marketPrice": 188.8,
                    "salePrice": 188.8,
                    "img": "http://img1.shikee.com/try/2016/06/25/14244120933639105658.jpg_220x220.jpg"
                },
                {
                    "id": 1,
                    "productName": "产品1",
                    "content": "content描述",
                    "marketPrice": 188.8,
                    "salePrice": 188.8,
                    "img": "http://img1.shikee.com/try/2016/06/23/15395220917905380014.jpg_220x220.jpg"
                },
                {
                    "id": 1,
                    "productName": "产品1",
                    "content": "content描述",
                    "marketPrice": 188.8,
                    "salePrice": 188.8,
                    "img": "http://img1.shikee.com/try/2016/06/23/14381920926024616259.jpg_220x220.jpg"
                },
                {
                    "id": 1,
                    "productName": "产品1",
                    "content": "content描述",
                    "marketPrice": 188.8,
                    "salePrice": 188.8,
                    "img": "http://img1.shikee.com/try/2016/06/21/10172020923917672923.jpg_220x220.jpg"
                },

            ]
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            type: nextProps.type || this.state.type,
        })
    }

    render() {
        return (
            <article className={'list-' + this.state.type + ' GoodsList'}>
                {this.state.productList.map((v, i) => {
                    return <a className="list-item" key={i}>
                        <div className="list-img">
                            <div className="list-img-box">
                                <img src={v.img}/>
                            </div>
                        </div>
                        <div className="list-msg">
                            <div className="list-title">{v.productName}</div>
                            <div className="list-other">
                                <div>
                                    <span className="list-price"><em>¥</em>{v.salePrice}</span>
                                    <span className="list-del-price">¥{v.marketPrice}</span>
                                </div>
                                <div className="content">{v.content}</div>
                            </div>
                        </div>
                    </a>
                })}
            </article>

        );
    }
}

export default Goods;