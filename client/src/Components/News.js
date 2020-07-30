import React, { Component } from 'react'
import NewsBox from './NewsBox'

export class News extends Component {
    render() {
        return (
            <div class = 'row'>
                    {this.props.news.map((singleArticle) => (
                        <NewsBox key = {singleArticle.url} thumbnail = {singleArticle.thumbnail} 
                        url = {singleArticle.url} sent = {singleArticle.sent}
                        headline = {singleArticle.headline}/>
                    ))}
            </div>

        )
    }
}

export default News
