import React, { Component } from 'react'

export default class HomeDetailId extends Component {
    render() {
        return (
            <div>
                this is home detail id page <br />
                {this.props.match.params.id}
            </div>
        )
    }
}
