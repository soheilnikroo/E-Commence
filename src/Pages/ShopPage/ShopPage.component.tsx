import React, { Component } from "react";
import CollectionPreview from "../../components/CollectionPreview/CollectionPreview.component";
import SHOP_DATA from "./shop.data";

type MyState = {
  collections: {
    id: number;
    title: string;
    routeName: string;
    items: {
      id: number;
      name: string;
      imageUrl: string;
      price: number;
    }[];
  }[];
};
class ShopPage extends Component<{}, MyState> {
  constructor(props: any) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    return (
      <div className="shop-page">
        {this.state.collections.map(({ id, ...otherSectionProps }) => {
          return <CollectionPreview key={id} {...otherSectionProps} />;
        })}
      </div>
    );
  }
}

export default ShopPage;
