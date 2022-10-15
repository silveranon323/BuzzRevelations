import React, { Component } from 'react'

export class NewsItem extends Component {
  constructor(){
    super();
    console.log("Constructor is im ")
  }
  render() {
    let{title , description , imageUrl ,newsUrl } = this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{width: "100rem;"}}>
  <img src={!imageUrl?"https://st.depositphotos.com/1011646/1255/i/950/depositphotos_12553000-stock-photo-breaking-news-screen.jpg" :imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={newsUrl}  target="_blank" className="btn btn-primary btn-sm">Read More</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem
