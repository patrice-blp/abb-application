import React from "react";
import {render, screen} from "@testing-library/react";
import Icon from "@components/Icon";
import {QUALITY_ICON} from "@common/const";

describe("<Icon />", () => {
    it("should render check_circle", () => {
        render(<Icon name={QUALITY_ICON[0]} />);
        expect(screen.getByText("check_circle")).toBeTruthy();
    });

    it("should fail rendering check_circle", async () => {
        render(<Icon name="fake" />);
        expect(screen.queryByText("check_circle")).toBeFalsy();
    });
});