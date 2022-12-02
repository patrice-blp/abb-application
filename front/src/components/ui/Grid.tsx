import styled from 'styled-components';

type GriProps = {
    cols: string | number;
    justify: string;
    gap: string;
    responsive: boolean;
    colMinSize: string;
}

const Grid = styled.div<Partial<GriProps>>`
  display: grid;
  grid-template-columns: repeat(${({cols}) => cols}, 1fr);
  justify-items: ${({justify}) => justify};
  gap: ${({gap}) => gap};
  ${({responsive, colMinSize}) => responsive && `grid-template-columns: repeat(auto-fit, minmax(${colMinSize}, 1fr));`}
`;

Grid.defaultProps = {
    gap: "1rem",
    cols: "1",
}

export default Grid;
