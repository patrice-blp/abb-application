import {Fragment, useEffect} from "react";
import {useQuery} from "@apollo/client";
import {PartResponse} from "@common/types/parts.type";
import Feature from "@components/Feature";
import {Flex, Text} from "@components/ui";
import {LIST_PARTS_QUERY} from "@common/schemas/queries/parts.query";
import {LIST_PARTS_SUBSCRIPTION} from "@common/schemas/subscriptions/parts.subscription";

const Home = () => {
    const {
        data,
        loading,
        subscribeToMore
    } = useQuery<PartResponse>(LIST_PARTS_QUERY, {fetchPolicy: "cache-and-network"});

    useEffect(() => {
            const unsubscribe = subscribeToMore({
                document: LIST_PARTS_SUBSCRIPTION,
                variables: {},
                updateQuery: (previousQueryResult, {subscriptionData}) => {
                    return subscriptionData.data || previousQueryResult;
                },
            });

            return () => {
                unsubscribe();
            }
        }, // eslint-disable-next-line react-hooks/exhaustive-deps
        []);

    if (loading) {
        return <Text>loading...</Text>
    }

    return (
        <div>
            {data?.parts?.map(({features, name}) => {
                return (
                    <Fragment key={name}>
                        <h1>{name}</h1>
                        <Flex direction="row" isWrap align="start" gap="1rem" data-testid="part">
                            {features.map((feature, index) => <Feature key={index} {...feature}/>)}
                        </Flex>
                    </Fragment>
                )
            })}
        </div>
    );
};

export default Home;