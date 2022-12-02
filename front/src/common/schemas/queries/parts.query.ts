import gql from "graphql-tag";

export const LIST_PARTS_QUERY = gql`
    query getParts {
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