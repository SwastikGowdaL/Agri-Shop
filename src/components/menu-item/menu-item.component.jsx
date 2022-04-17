import React from "react";

import { useLocation, useNavigate, useParams } from "react-router-dom";

import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  let location = useLocation();
  let navigate = useNavigate();
  let params = useParams();
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => {
        navigate(`/topics/${linkUrl}`);
      }}
    >
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
        className="background-image"
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">subtitle</span>
      </div>
    </div>
  );
};

export default MenuItem;
