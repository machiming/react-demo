// Test.jsx
import React, {Component} from 'react'
// connect方法的作用：将额外的props传递给组件，并返回新的组件，组件在该过程中不会受到影响
import {connect} from 'react-redux'

// 引入action
import {setPageTitle} from '../model/action'

class Test extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        let {setPageTitle} = this.props;
        // 触发setPageTitle action
        setPageTitle('新的标题')
    }

    render() {
        // 从props中解构store
        let {pageTitle} = this.props;
        // 使用store
        return (
            <div>
                <h1>{pageTitle}</h1>
            </div>
        )
    }
}

// mapStateToProps：将state映射到组件的props中
const mapStateToProps = (state) => {
    return {
        pageTitle: state.pageTitle,
    }
};

// mapDispatchToProps：将dispatch映射到组件的props中
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        setPageTitle(data) {
            dispatch(setPageTitle(data))
        },

    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Test)