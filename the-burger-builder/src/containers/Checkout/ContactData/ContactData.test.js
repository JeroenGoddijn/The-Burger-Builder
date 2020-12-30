import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { ContactData } from "./ContactData";
import Input from "../../../components/UI/Input/Input";
import Button from "../../../components/UI/Button/Button";

configure({ adapter: new Adapter() });

describe("<ContactData />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ContactData />);
  });

  it("should render seven <Input /> components ", () => {
    wrapper.setProps({
      match: {
        path: "/checkout/contact-data"
      }
    });
    expect(wrapper.find(Input)).toHaveLength(7);
  });

  it("should render one <Button /> component ", () => {
    wrapper.setProps({
      match: {
        path: "/checkout/contact-data"
      }
    });
    expect(wrapper.find(Button)).toHaveLength(1);
  });
});
