import React from "react";

import "./MenueItem.styles.scss";
import { useNavigate } from "react-router-dom";

interface MenueItemProps {
  title: string;
  subtitle?: string;
  imageUrl: string;
  size?: string;
  linkUrl?: string;
}

const MenuItem: React.FC<MenueItemProps> = ({
  title,
  subtitle = "SHOP NOW",
  imageUrl,
  size,
  linkUrl,
}) => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`${linkUrl}`)} className={`${size} menu-item`}>
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
        className="background-image"
      />
      <div className="content">
        <div className="title">{title.toUpperCase()}</div>
        <span className="subtitle">{subtitle}</span>
      </div>
    </div>
  );
};

export default MenuItem;
