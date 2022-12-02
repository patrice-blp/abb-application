import {FC, Fragment, memo} from "react";
import styled from "styled-components";
import {PartControl} from "@common/types/parts.type";
import {Flex, Grid, Text} from "@components/ui";
import Icon from "@components/Icon";
import {QUALITY_COLOR, QUALITY_ICON} from "@common/const";

const GridBody = styled(Grid)`
  background-color: #D3D3D3FF;
  padding: 1rem;
`;

type ControlProps = {
    controls: PartControl[]
};

const Control: FC<ControlProps> = ({controls}) => {
    return (
        <GridBody cols={4} data-testid="control">
            <Text bold>Control</Text>
            <Text align="center" bold>Dev</Text>
            <Text align="center" bold>Dev Out Tot</Text>
            <Text align="center" bold/>

            {controls.map((control) => (
                <Fragment key={control.name}>
                    <Text data-testid="control-name">{control.name}</Text>
                    <Text align="center" data-testid="control-dev">{control.dev.toFixed(2)}</Text>
                    <Text align="center" data-testid="control-dev-out">{control.devOutTotal.toFixed(2)}</Text>
                    <Flex align="center">
                        <Icon
                            testId="control-icon"
                            name={QUALITY_ICON[control.quality]}
                            color={QUALITY_COLOR[control.quality]}
                        />
                    </Flex>
                </Fragment>
            ))}
        </GridBody>
    )
}

export default memo(Control);