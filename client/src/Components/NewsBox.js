import React, { Component } from 'react'

export class NewsBox extends Component {
    render() {
        return (
            <div style = {{display: 'table-cell', padding: '5px'}}>
                <img style = {{height: '150px', width: '150px'}}
                src = {this.props.thumbnail}
                alt = {this.props.thumbnail}></img>
                <a style = {{display: 'block'}}href = {this.props.url}>{this.props.headline}</a>
            </div>
        )
    }
}

export default NewsBox
