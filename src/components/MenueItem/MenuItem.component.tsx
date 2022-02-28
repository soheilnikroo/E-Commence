import React from "react";

import "./MenueItem.styles.scss";

interface MenueItemProps {
  title: string;
  subtitle?: string;
  imageUrl: string;
  size?: string;
}

const MenuItem: React.FC<MenueItemProps> = ({
  title,
  subtitle = "SHOP NOW",
  imageUrl,
  size,
}) => {
  return (
    <div className={`${size} menu-item`}>
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
