import {FC} from "react";
import styled from "styled-components";

const IconBase = styled.span<{ color?: string; }>`
  color: ${({color}) => color};
  font-size: 1.5rem;
`;

type IconProps = {
    name: string;
    color?: string;
    testId?: string;
};

const Icon: FC<IconProps> = ({name, color, testId}) => {
    return (
        <IconBase
            data-testid={testId}
            color={color}
            className="material-symbols-outlined"
        >
            {name}
        </IconBase>
    );
}

Icon.defaultProps = {
    color: "white",
}

export default Icon;