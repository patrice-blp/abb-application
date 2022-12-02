import {FC, memo} from 'react';
import {PartFeature} from "@common/types/parts.type";
import {QUALITY_ICON} from "@common/const";
import {Flex, Text} from "@components/ui";
import Icon from "@components/Icon";
import Control from "@components/Control";

type FeatureProps = PartFeature;

const Feature: FC<FeatureProps> = ({name, quality, controls}) => {
    const controlLength = controls.length;
    return (
        <Flex align="stretch" data-testid="feature">
            <Flex
                padding="1rem"
                backgroundColor={quality}
                direction="row"
                justify="space-between"
                className="feat-header"
            >
                <Flex direction="row" align="center" grow={1}>
                    <Icon testId="feature-icon" name={QUALITY_ICON[100]}/>
                    <Text data-testid="feature-name" ml={6} colorWhite uppercase bold>{name}</Text>
                </Flex>
                <Icon testId="feature-quality" name={QUALITY_ICON[quality]}/>
            </Flex>

            {controlLength > 1 ? (
                <Flex direction="row">
                    {controls.map((control, index) => {
                        return <Control key={`control-${index}`} controls={control}/>
                    })}
                </Flex>
            ) : (
                <Control controls={controls[0]}/>
            )}

            <Flex direction="row" justify="center" backgroundColor="#ededed" padding="8px">
                <span className="material-symbols-outlined">more_horiz</span>
            </Flex>
        </Flex>
    );
}

export default memo(Feature);