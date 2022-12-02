import {LIST_PARTS_QUERY} from "@common/schemas/queries/parts.query";
import {LIST_PARTS_SUBSCRIPTION} from "@common/schemas/subscriptions/parts.subscription";
import partsMock from "./parts.mock";

export const partsApolloMock = [
    {
        request: {
            query: LIST_PARTS_QUERY,
        },
        result: {
            data: {
                parts: partsMock
            }
        }
    },
    {
        request: {
            query: LIST_PARTS_SUBSCRIPTION,
        },
        result: {
            data: {
                parts: partsMock
            }
        }
    }
];