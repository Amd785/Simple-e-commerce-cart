import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import {Button, Card,} from "antd";


const { Meta } = Card;
export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    <Card className="Card" hoverable cover={< img src={ productImage} />} >
      <Meta title={<p>
          <b>{productName}</b>
        </p>} description={<p> ${price}</p>} />
      <Button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </Button>
      
    </Card>
    
  );
};
