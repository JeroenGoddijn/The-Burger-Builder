import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { Orders } from "./Orders";
import Order from "../../components/Order/Order";

configure({ adapter: new Adapter() });

describe("<Orders />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Orders
        onFetchOrders={() => {}}
        orders={[
          {
            customerId: "K8tyJPgxr0PqBtcbXDYg2pizarj2",
            ingredients: {
              bacon: 0,
              cheese: 0,
              lettuce: 4,
              meat: 0
            },
            orderData: {
              city: "CarrotVille",
              deliveryMethod: "fastest",
              email: "test@test.com",
              name: "Clover Bunny",
              region: "NM",
              street: "123 Carrot Ln",
              zipcode: "54312"
            },
            orderDate: "2020-12-23T20:35:28.404Z",
            price: 6.600000000000001,
            id: "-MPGJ41-9T1T2vWckWkz"
            },
            {
                "customerId" : "K8tyJPgxr0PqBtcbXDYg2pizarj2",
                "ingredients" : {
                  "bacon" : 4,
                  "cheese" : 0,
                  "lettuce" : 0,
                  "meat" : 0
                },
                "orderData" : {
                  "city" : "BaconVille",
                  "deliveryMethod" : "cheapest",
                  "email" : "test@test.com",
                  "name" : "Miss Piggy",
                  "region" : "TX",
                  "street" : "123 BaconLovers Ln",
                  "zipcode" : "66666"
                },
                "orderDate" : "2020-12-23T20:36:05.012Z",
                "price": 8,
                "id": "-MPGJCxv_VQUNc0Pvhvh"
              }
        ]}
      />
    );
  });

  it("should render two <Order /> when receiving orders", () => {
    wrapper.setProps({});
    expect(wrapper.find(Order)).toHaveLength(2);
  });
});
