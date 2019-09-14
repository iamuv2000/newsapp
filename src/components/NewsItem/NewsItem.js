import React from 'react';
import './NewsItem.css'

const NewsItem = ({title,source,description,url,urlToImage}) => {
    return(
        <div id="NewsItem">
            <img src = {urlToImage} height="150px" width="200px" id='NewsImage'/>
            <div id= 'text'>
                <div id = 'title'>
                    {title}
                </div>
                <div id = 'desc'>
                    {description}
                </div>    
                <a href={url}>Read More >>></a>
            </div>
            
           
        </div>
    )
}

export default NewsItem;