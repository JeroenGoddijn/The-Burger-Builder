import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Redirect, Route } from "react-router-dom";

import { Checkout } from "./Checkout";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";

configure({ adapter: new Adapter() });

describe("<Checkout />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Checkout />);
  });

  it("should render one <CheckoutSummary /> when purchased = false", () => {
    wrapper.setProps({
      ings: {
        bacon: 2,
        cheese: 2,
        meat: 2,
        lettuce: 2
      },
      purchased: false,
      match: {
        path: "/checkout"
      }
    });
    expect(wrapper.find(CheckoutSummary)).toHaveLength(1);
  });
});
