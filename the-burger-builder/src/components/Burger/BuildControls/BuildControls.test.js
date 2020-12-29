import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import BuildControls from "./BuildControls";
import BuildControl from "./BuildControl/BuildControl";

configure({ adapter: new Adapter() });

describe("<BuildControls />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <BuildControls
        price={5}
        controls={[
          { label: "Bacon", type: "bacon" },
          { label: "Cheese", type: "cheese" },
          { label: "Meat", type: "meat" },
          { label: "Lettuce", type: "lettuce" }
        ]}
        // ingredientAdded={() => {}}
        // ingredientRemoved={() => {}}
        disabled={false}
        isAuth={false}
      />
    );
  });

  it("should render four <BuildControl /> elements : one for each ingredient", () => {
    expect(wrapper.find(BuildControl)).toHaveLength(4);
  });

//   it("should render one <Button /> elements with 'ORDER NOW' as it's label when isAuth=true", () => {
//     expect(wrapper.contains(<button>ORDER NOW</button>)).toEqual(true);
//   });

//   it("should render one <Button /> elements with 'SIGN IN TO ORDER' as it's label when isAuth=false", () => {
//     expect(wrapper.contains(<button>SIGN IN TO ORDER</button>)).toEqual(true);
//   });
});
