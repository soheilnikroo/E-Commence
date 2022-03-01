import React from "react";
import CollectionItem from "../CollectionItem/CollectionItem.component";

import "./CollectionPreview.styles.scss";

interface CollectionPreviewProps {
  title: string;
  items: {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
  }[];
}

const CollectionPreview: React.FC<CollectionPreviewProps> = ({
  title,
  items,
}) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map(({ id, ...itemProps }) => {
            return <CollectionItem key={id} id={id} {...itemProps} />;
          })}
      </div>
    </div>
  );
};

export default CollectionPreview;
