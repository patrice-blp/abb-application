import React from "react";
import {render, screen, within} from "@testing-library/react";
import {MockedProvider} from "@apollo/client/testing";
import {partsApolloMock} from "@mocks/parts-apollo.mock";
import Home from "../../pages/Home";

describe("Page <Home />", () => {
    it("renders without error", async () => {
        render(
            <MockedProvider mocks={partsApolloMock} addTypename={false}>
                <Home/>
            </MockedProvider>
        );

        expect(await screen.findByText("Part A")).toBeInTheDocument();
        expect(await screen.findByText("Part B")).toBeInTheDocument();

        const part = screen.getAllByTestId("part");

        expect(part).toHaveLength(2);

        const firstPart = within(part[0]);
        expect(firstPart.getAllByTestId("feature")).toHaveLength(3);

        expect(firstPart.getByText(/SLOT 0/i)).toBeInTheDocument();
        expect(firstPart.getByText(/HOLE 1/i)).toBeInTheDocument();
        expect(firstPart.getByText(/SEAM 2/i)).toBeInTheDocument();
    });
});