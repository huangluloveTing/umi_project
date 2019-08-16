import React, { Component } from 'react'

export default class HomeP extends Component {

    componentDidMount(){
        console.log(' home p componentDidMount==')
        console.log(this)
    }

    render() {
        return (
            <div>
                this is homePPP page  <br/>
                {this.props.match.params.hh}
            </div>
        )
    }
}
