import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <a href={props.url} className="card-link">
        <img src={props.image} alt={props.title} className="card-image" />
        <div className="card-body">
          <h3 className="card-title">{props.title}</h3>
        </div>
      </a>
    </div>
  );
};

export default Card;
