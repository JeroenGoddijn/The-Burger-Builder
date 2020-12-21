import React from "react";

import classes from "./Order.css";

const order = (props) => {
  const customerName = props.customerName;
  const orderDateOptions = {
    // weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  const orderDate = new Date(props.orderDate).toLocaleDateString(
    undefined,
    orderDateOptions
  );
  const orderId = props.orderId;
  const ingredients = [];

  for (let ingredientName in props.ingredients) {
    ingredients.push({
      name: ingredientName,
      amount: props.ingredients[ingredientName]
    });
  }

  const ingredientOutput = ingredients.map((ig) => {
    return (
      <span
        style={{
          textTransform: "capitalize",
          display: "inline-block",
          margin: "0 8px",
          border: "1px solid #ccc",
          padding: "5px"
        }}
        key={ig.name}
      >
        {ig.name} ({ig.amount})
      </span>
    );
  });

  return (
    <div className={classes.Order}>
      <div className={classes.OrderInfo}>
        <div>Order#: {orderId}</div>
        <div>Order Date: {orderDate}</div>
        <div>Customer Name: {customerName}</div>
      </div>
      <p>Ingredients: {ingredientOutput}</p>
      <p>
        Price: <strong>USD {Number.parseFloat(props.price).toFixed(2)}</strong>
      </p>
    </div>
  );
};

export default order;
