/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import renderer from "react-test-renderer";

import { PrintIcon } from "../";

describe("PrintIcon", () => {
  it("large renders correctly", () => {
    const component = renderer.create(
      <PrintIcon>
        <title>Print Icon</title>
      </PrintIcon>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
