import {ApolloServer} from "@apollo/server";
import {partsRevolver, partsTypeDefs} from "../common/schema/parts.schema.js";

const resolvers = {
    Query: {
        ...partsRevolver.Query
    },
    Subscription: {
        ...partsRevolver.Subscription
    },
};

const query = `
query GetParts {
  parts {
    name
    features {
      name
      quality
      controls {
        dev
        devOutTotal
        name
        quality
      }
    }
  }
}
`;

describe("Index", () => {
    test('should be able to start apollo server', async () => {
        const testServer = new ApolloServer({
            typeDefs: partsTypeDefs,
            resolvers,
        });

        const response = await testServer.executeOperation({
            query,
            variables: {},
        });

        expect(response.body.singleResult.errors).toBeUndefined();

        const data = response.body.singleResult.data?.parts;
        expect(data).toHaveLength(2);
        expect(data[0].name).toBe("Part A");
        expect(data[1].name).toBe("Part B");
        expect(data[0].features.length).toBeGreaterThan(0);
    });
});