import React, { Component } from 'react'
import { connect } from 'dva';

import {get} from '../../service/request'

class Home extends Component {

    componentDidMount() {
        console.log('home mount')
        console.log(this)
        get('/api/country').then(res => {

        }).catch(error => {

        })
    }

    render() {
        let {dispatch} = this.props
        return (
            <div>
                this is home page<br/>
                name: {this.props.name}
                <button onClick={() => {
                    console.log('click')
                    console.log(dispatch)
                    dispatch({
                        type:"user/netChange",
                        name:'home name'
                    })
                }}>
                    change model
                </button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log('mapStateToProps') 
    console.log(state) 
    return {
        name:state.user.name
    }
}

export default connect(mapStateToProps)(Home)
