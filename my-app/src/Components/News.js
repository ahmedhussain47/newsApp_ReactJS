import React, { Component } from 'react'
import Newsitem from '../Newsitem'
import Spinza from './Spinza';
 
export class News extends Component {

        
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false, page: 1 
        }
    }
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=22d8498f87374f668071879da20b436b&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parseData = await data.json()
        console.log(parseData);
        this.setState({ articles: parseData.articles, 
            totalResults: parseData.totalResults,
        loading: false})
    }
    handlePreviousClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=22d8498f87374f668071879da20b436b&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        this.setState({loading: true});
        let parseData = await data.json()
        console.log(parseData);
        this.setState({
            page: this.state.page - 1,
            articles: parseData.articles,
            loading:false
        })
    }

    handleNextClick = async () => {
        console.log("dagashawrh")
        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {       
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=22d8498f87374f668071879da20b436b&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            let data = await fetch(url);
            let parseData = await data.json()
            this.setState({
                page: this.state.page + 1,
                articles: parseData.articles,
                loading:false
            })
        }
    }
   
    
    render() {

        return (
            <div className='container my-4'>
                {this.state.loading && <Spinza/>}
                <h2 className='text-center'>Insightify - Top News</h2>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4  my-4 d-flex justify-content-around" key={element.url ? "https://removed.com" : element.url + 1}>
                            <Newsitem title={element.title ? element.title.slice(0, 44) : ""} describtion={element.description ? element.description.slice(0, 72) : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })
                    }
                </div>
                <div className="container  my-4 d-flex justify-content-between align-items-center " >
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark " onClick={this.handlePreviousClick}>&larr; Previous</button>
                    <button href="/" className='btn btn-transparent cursor-arrow text-dark'>{this.state.page}</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}> Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
