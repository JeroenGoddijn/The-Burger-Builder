import React, { Component } from "react";
import { connect } from "react-redux";

import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.css";
import axios from "../../../axios-orders";
import Spinner from "../../../components/UI/Spinner/Spinner";

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

  };

  render() {
    let form = (
      <form>
        <input
          className={classes.Input}
          type="text"
          name="name"
          placeholder="Your name"
        />
        <input
          className={classes.Input}
          type="text"
          name="email"
          placeholder="Your email"
        />
        <input
          className={classes.Input}
          type="text"
          name="street"
          placeholder="Your street"
        />
        <input
          className={classes.Input}
          type="text"
          name="zipcode"
          placeholder="Your zipcode"
        />
        <input
          className={classes.Input}
          type="text"
          name="city"
          placeholder="Your city"
        />
        <input
          className={classes.Input}
          type="text"
          name="region"
          placeholder="Your region"
        />
        <input
          className={classes.Input}
          type="text"
          name="country"
          placeholder="Your country"
        />
        <Button btnType="Success" clicked={this.orderHandler}>
          ORDER
        </Button>
      </form>
    );
    if (this.state.loading) {
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
    ings: state.ingredients,
    price: state.totalPrice
  };
};
export default connect(mapStateToProps)(ContactData);
