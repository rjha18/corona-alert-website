import React, { Component } from 'react'
import NewsBox from './NewsBox'

export class News extends Component {
    render() {
        console.log(this.props.news)
        return (
            <div style = {{flexWrap : 'wrap', flex: 'auto', borderBottomStyle: 'solid', borderColor: 'black'}}>
                {this.props.news.map((singleArticle) => (
                    <NewsBox key = {singleArticle[1]} thumbnail = {singleArticle[0]} 
                    url = {singleArticle[1]}
                    headline = {singleArticle[2]}/>
                ))}
            </div>
        )
    }
}

export default News
