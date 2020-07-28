import React, { Component } from 'react'
import NewsBox from './NewsBox'

export class News extends Component {
    render() {
        return (
            <div style = {{flexWrap : 'wrap', flex: 'auto', borderBottomStyle: 'solid', borderColor: 'black'}}>
                {this.props.news.map((singleArticle) => (
                    <NewsBox key = {singleArticle.url} thumbnail = {singleArticle.thumbnail} 
                    url = {singleArticle.url}
                    headline = {singleArticle.headline}/>
                ))}
            </div>
        )
    }
}

export default News
