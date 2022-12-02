import styled from 'styled-components';

type TextProps = {
    bold: boolean;
    uppercase: boolean;
    colorWhite: boolean;
    align: string;
    mr: number;
    ml: number;
    fontSize: string;
}

const Text = styled.p<Partial<TextProps>>`
    font-size: ${({fontSize})=> fontSize};
    margin: 0;
    ${({ ml }) => ml && `margin-left: ${ml}px;`}
    ${({ mr }) => mr && `margin-right: ${mr}px;`}
    ${({ align }) => align && `text-align: ${align}`}
    ${({colorWhite}) => colorWhite && `color: white; text-shadow: 0 0 black;`};
    ${({uppercase}) => uppercase && `text-transform: uppercase;`};
    ${({bold}) => bold && `font-weight: bold;`};
`;

Text.defaultProps = {
    fontSize: ".94rem",
}

export default Text;