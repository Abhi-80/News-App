import React from 'react';

export default function News({ item }) {
  if (!item) {
    return null; // or render an alternate component or message
  }

  const { urlToImage, title, description, url } = item;

  return (
    <div className="col-sm-3 mt-4">
      <div className="card">
        {urlToImage && <img src={urlToImage} className="card-img-top" alt={title} />}

        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          {url && (
            <a href={url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
             Read More..
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
