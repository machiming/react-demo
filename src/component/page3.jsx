import React, {Component} from 'react';
import axios from "axios";

class Page3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgList: [],
            addClass: false
        }
    }

    componentDidMount() {
        if (localStorage.getItem("photoList") != null) {
            this.setState({
                imgList: localStorage.getItem("photoList").split(",")
            });
        } else {
            axios.post("/api/getImgList",
                {
                    CategoryId: 0,
                    sortName: "UploadTime",
                    sortNum: -1
                },
                /*{emulateJSON: true}*/
            ).then(res => {
                let result = JSON.parse(res.data.d).map(v => {
                    return 'http://newshop.zhimaaa.com' + v.PhotoPath + v.PhotoName
                });
                localStorage.setItem("photoList", result.join(","));
                this.setState({
                    imgList: result
                });
            }).catch(e => {
                console.log(e)
            })
        }

    }

    choose = (event) => {
        event.persist();
        let target = event.currentTarget;
        target.classList.add("ashow");
        clearTimeout(t);
        let t = setTimeout(() => {
            target.classList.remove("ashow")
        }, 2000);
    };

    render() {
        return (
            <div className="page">
                <ul className="imglist">
                    {this.state.imgList.map((v, i) => {
                        return <li key={i} className={this.state.addClass ? 'ac' : 'ad'} onClick={this.choose}><p><img
                            alt="失败" src={v}/></p></li>
                    })}
                </ul>
            </div>
        );
    }
}

export default Page3;