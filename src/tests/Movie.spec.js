import React from "react";
import { configure, shallow } from "enzyme";

import Movie from "../components/Movie";

// set-ups test
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("Movie component", () => {
  it("displays loading states when mounts first", () => {
    const wrapper = shallow(<Movie />);

    expect(wrapper.find("div").hasClass("loading")).toBe(true);
  });
});
