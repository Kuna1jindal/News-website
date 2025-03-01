import React from 'react'

const NewsItem=(props)=>{
  
    let {title,description,imagesource,newsurl,author,publishedAt,source}=props;
    
    return (
      <div className='container'>
        <div className="card my-3">
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
        style={{
          zIndex:"1",
          left: "90%"}}
          >
          {source.slice(0,20)}
  </span>
  <img src={imagesource} className="card-img-top" alt="error image load" style={{height:"160px"}}/>
  <div className="card-body">
    <h5 className="card-title">{title}.</h5>
    <p className="card-text">{description}...</p>
    <p className="card-text"><small className='text-muted'>By: {author?author:"Unknown"} on {new Date(publishedAt).toGMTString()}</small></p>
    <a rel="noreferrer" href={newsurl} target="_blank" className="btn btn-primary btn-sm">Read More</a>
  </div>
</div>
      </div>
    )
  
}

export default NewsItem