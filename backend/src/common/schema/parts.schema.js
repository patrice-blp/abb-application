import {generateParts} from "../mocks/parts.js";
import pubSub from "../pub-sub.js";
import {SubscriptionEvents} from "../subscription.events.js";
import {startPolling, stopPolling} from "../intervals.js";

export const partsTypeDefs = `#graphql
type Control {
    name: String
    dev: Float
    devOutTotal: Float
    quality: Float
}

type Feature {
    name: String
    controls: [[Control]]
    quality: Float
}

type Part {
    name: String
    features: [Feature]
}

type Query {
    parts: [Part]
}


type Subscription {
    parts: [Part]
}
`;

export const partsRevolver = {
    Query: {
        parts: generateParts
    },
    Subscription: {
        parts: {
            subscribe: () => pubSub.asyncIterator([SubscriptionEvents.REFRESH]),
        }
    },
    OnConnect: (key) => startPolling(key, { schema: "parts", resolverFn: generateParts }),
    OnDisconnect: (key) => stopPolling(key),
}