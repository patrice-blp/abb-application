import React from "react";
import {render, screen, within} from "@testing-library/react";
import Control from "@components/Control";
import partsMock from "@mocks/parts.mock";

describe("<Control />", () => {
    test("render component", async () => {
        render(<Control controls={partsMock[0].features[0].controls[0]}/>);

        const control = screen.getByTestId("control");

        const controlHeader = within(control).getByText("Control");
        const devHeader = within(control).getByText("Dev");
        const devOutHeader = within(control).getByText("Dev Out Tot");

        expect(controlHeader).toBeTruthy();
        expect(devHeader).toBeTruthy();
        expect(devOutHeader).toBeTruthy();

        const countControls = await within(control).findAllByTestId("control-name");
        expect(countControls).toHaveLength(7);

        const name = within(control).getByText("Rate 0");
        expect(name).toBeTruthy();

        const dev = within(control).getByText("0.46");
        expect(dev).toBeTruthy();

        const devOut = within(control).getByText("7.06");
        expect(devOut).toBeTruthy();
    });
});
