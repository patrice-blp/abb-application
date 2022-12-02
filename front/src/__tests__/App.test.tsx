import React from "react";
import {render} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";
import App from "../App";
import {MockedProvider} from "@apollo/client/testing";
import {partsApolloMock} from "@mocks/parts-apollo.mock";

describe("<App />", () => {
    test('renders app', () => {
        render(
            <MockedProvider mocks={partsApolloMock} addTypename={false}>
                <App/>
            </MockedProvider>,
            {
                wrapper: BrowserRouter
            }
        );
    });
});