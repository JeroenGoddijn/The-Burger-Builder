import React, { Component } from "react";
import { connect } from "react-redux";

import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.css";
import axios from "../../../axios-orders";
import Spinner from "../../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../../hoc/withErrorHandler/withErrorHandler";
import * as actionTypes from "../../../store/actions/order";

import Input from "../../../components/UI/Input/Input";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      zipcode: "",
      city: "",
      region: "",
      country: ""
    },
    loading: false
  };

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({ loading: true });

    const order = {
      ingredients: this.props.ings,
      price: this.props.price,
      customer: {
        name: "Jeroen Goddijn",
        address: {
          street: "Test street 1",
          zipcode: "77002",
          city: "Houston",
          region: "Texas",
          country: "United States"
        },
        email: "test@test.com"
      },
      deliveryMethod: "asap"
    };

    this.props.onOrderBurger(order);
  };

  render() {
    let form = (
      <form>
        <Input type="text" name="name" placeholder="Your name" />
        <Input type="text" name="email" placeholder="Your email" />
        <Input type="text" name="street" placeholder="Your street" />
        <Input type="text" name="zipcode" placeholder="Your zipcode" />
        <Input type="text" name="city" placeholder="Your city" />
        <Input type="text" name="region" placeholder="Your region" />
        <Input type="text" name="country" placeholder="Your country" />
        <Button btnType="Success" clicked={this.orderHandler}>
          ORDER
        </Button>
      </form>
    );
    if (this.props.loading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ings: state.burgerBuilder.ingredients,
    price: state.burgerBuilder.totalPrice,
    loading: state.order.loading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onOrderBurger: (orderData) =>
      dispatch(actionTypes.purchaseBurger(orderData))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(ContactData, axios));
