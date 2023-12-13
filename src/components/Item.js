import React, { useState } from "react";

function Item({ name, category }) {

  const [isInCart, setIsInCart] = useState(false);

  const inCart = isInCart ? "Remove From Cart" : "Add to Cart";
  const inCartClass = isInCart ? "in-cart" : null;
  const inCartButtonClass = isInCart ? "remove" : "add";

  function handleIsInCart() {
    setIsInCart(isInCart => !isInCart);
  }

  return (
    <li className={inCartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={inCartButtonClass} onClick={handleIsInCart}>{inCart}</button>
    </li>
  );
}

export default Item;
