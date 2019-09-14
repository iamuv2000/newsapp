import React, {Component} from 'react';
import './HomepPage.css';
import axios from 'axios'
import NewsItem from '../components/NewsItem/NewsItem';

class HomePage extends Component{
    constructor(props){
        super(props);
        this.state={
            items:[],
            isLoaded:false,
        }
    }
    componentDidMount(){
        axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=6ac073307870487fa55bde541578ee02')
        .then((response)=>{
            this.setState({
                isLoaded:true,
                items:response.data
            })
        })
    }
    render(){

        var {isLoaded,items}=this.state;
        if(!isLoaded){
            return <div><h2 id='loading'>Loading...</h2></div>
        }

        return(
            <div id='HomePage'>
                <h2>TOP 5 TRENDING TOPICS IN INDIA!</h2>
                <h4>Yuvraj Singh (18BCE0614)</h4>
                <NewsItem 
                    title = {items.articles[0].title}
                    source = {items.articles[0].source.name}
                    description = {items.articles[0].description}
                    url ={items.articles[0].url}
                    urlToImage={items.articles[0].urlToImage}
                />
                <NewsItem 
                    title = {items.articles[1].title}
                    source = {items.articles[1].source.name}
                    description = {items.articles[1].description}
                    url ={items.articles[1].url}
                    urlToImage={items.articles[1].urlToImage}
                />
                <NewsItem 
                    title = {items.articles[2].title}
                    source = {items.articles[2].source.name}
                    description = {items.articles[2].description}
                    url ={items.articles[2].url}
                    urlToImage={items.articles[2].urlToImage}
                />
                <NewsItem 
                    title = {items.articles[3].title}
                    source = {items.articles[3].source.name}
                    description = {items.articles[3].description}
                    url ={items.articles[3].url}
                    urlToImage={items.articles[3].urlToImage}
                />
                <NewsItem 
                    title = {items.articles[4].title}
                    source = {items.articles[4].source.name}
                    description = {items.articles[4].description}
                    url ={items.articles[4].url}
                    urlToImage={items.articles[4].urlToImage}
                />
            </div>
        )
    }

}

export default HomePage;