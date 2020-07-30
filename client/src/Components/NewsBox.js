import React, { Component } from 'react'

export class NewsBox extends Component {
    sentToIcon(sent) {
        if (sent == 0){
            return '/neutral.png'
        } else if (sent == 1){
            return '/smile.png'
        } else {
            return '/sad.png'
        }
    }
    render() {
        return (
            <div className = 'col-sm' style = {{display: 'table-cell', padding: '5px'}}>
                <div className = 'row'>
                    <img className = 'col-sm' style = {{height: '150px', width: '150px'}}
                    src = {this.props.thumbnail}
                    alt = {this.props.thumbnail}></img>
                    <img className = 'col-sm'  style = {{height: '150px', width: '150px'}}
                    src = {this.sentToIcon(this.props.sent)}></img>
                </div>

                <a style = {{display: 'block'}}href = {this.props.url}>{this.props.headline}</a>
            </div>
        )
    }
}

export default NewsBox
