import React from "react";
import {render, screen} from "@testing-library/react";
import Feature from "@components/Feature";
import partsMock from "@mocks/parts.mock";

describe("<Feature />", function () {
    test("renders feature component", async () => {
        const {name, controls, quality} = partsMock[0].features[0];
        render(<Feature name={name} controls={controls} quality={quality}/>);

        expect(screen.getByTestId("feature-name")).toBeTruthy();
        expect(screen.getByTestId("feature-icon")).toHaveTextContent("circle");
        expect(screen.getByTestId("feature-quality")).toHaveTextContent("error");
        expect(screen.getByText("more_horiz")).toBeTruthy();
    });
});