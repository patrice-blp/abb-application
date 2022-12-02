import gql from "graphql-tag";

export const LIST_PARTS_SUBSCRIPTION = gql`
    subscription getParts {
        parts {
            name
            features {
                name
                quality
                controls {
                    name
                    dev
                    devOutTotal
                    quality
                }
            }
        }
    }
`;