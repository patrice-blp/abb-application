import styled from "styled-components";
import {QUALITY_COLOR} from "@common/const";

export type FlexProps = {
    direction: string;
    align: string;
    justify: string;
    mt: string;
    mb: string;
    mr: string;
    ml: string;
    margin: string;
    padding: string;
    flex: number;
    maxWidth: string;
    backgroundColor: string | number;
    grow: number;
    isWrap: boolean;
    gap: string;
};

const Flex = styled.div<Partial<FlexProps>>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  align-items: ${({align}) => align};
  justify-content: ${({justify}) => justify};
  ${({ grow }) => grow && `flex-grow: ${grow};`}
  ${({ gap }) => gap && `gap: ${gap};`}
  ${({ isWrap }) => isWrap && `flex-wrap: wrap;`}
  ${({ mt }) => mt && `margin-top: ${mt};`}
  ${({ mb }) => mb && `margin-bottom: ${mb};`}
  ${({ ml }) => ml && `margin-left: ${ml};`}
  ${({ mr }) => mr && `margin-right: ${mr};`}
  ${({ margin }) => margin && `margin: ${margin};`}
  ${({ padding }) => padding && `padding: ${padding};`}
  ${({ flex }) => flex && `flex: ${flex};`}
  ${({ maxWidth }) => maxWidth && `max-width: ${maxWidth};`}
  
  ${({ backgroundColor }) => {
      if (backgroundColor === undefined) {
        return undefined;
      }
      
      const color = typeof backgroundColor === "string" ? backgroundColor : QUALITY_COLOR[backgroundColor]
      return `background-color: ${color};`
  }}
`;

Flex.defaultProps = {
    direction: "column",
    align: "center",
    justify: "flex-start"
}

export default Flex;
