import {ApolloClient, HttpLink, InMemoryCache, split} from "@apollo/client";
import {GraphQLWsLink} from "@apollo/client/link/subscriptions";
import {createClient} from "graphql-ws";
import {getMainDefinition} from "@apollo/client/utilities";
import environments from "@common/environments";

const httpLink = new HttpLink({
    uri: environments.graphql
});

const wsLink = new GraphQLWsLink(createClient({
    url: environments.wsGraphql,
}));

const splitLink = split(
    ({query}) => {
        const definition = getMainDefinition(query);
        return (
            definition.kind === 'OperationDefinition' &&
            definition.operation === 'subscription'
        );
    },
    wsLink,
    httpLink,
);

const apolloClient = new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache({ addTypename: false }),
});

export default apolloClient;