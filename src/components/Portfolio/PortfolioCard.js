import React, { useState } from "react";

function PortfolioCard(props) {
  const [isShown, setIsShown] = useState(false);
  return (
    <div
      style={{
        
        width: "33%",
        paddingTop: "100px",
        minWidth: "300px",
      }}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
      onClick={() => window.open(props.url)}
    >
      <div className="card-grid">
        <h3 className="project-title">{props.title}</h3>
        <img
          src={props.assetpath}
          alt="portfolio card"
          className="img-thumbnail"
        ></img>
        <div className="card-btn-container">
          <button
            style={{
              margin: "5px",
            }}
            className="btn"
            onClick={() => window.open(props.githuburl)}
          >
            GitHub
          </button>
          <button className="btn" onClick={() => window.open(props.url)}>
            Webpage
          </button>
        </div>
      </div>
    </div>
  );
}

export default PortfolioCard;