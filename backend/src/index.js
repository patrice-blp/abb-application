import {ApolloServer} from "@apollo/server";
import {createServer} from 'http';
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import {ApolloServerPluginDrainHttpServer} from '@apollo/server/plugin/drainHttpServer';
import {makeExecutableSchema} from "@graphql-tools/schema";
import {WebSocketServer} from 'ws';
import {useServer} from 'graphql-ws/lib/use/ws';
import {expressMiddleware} from "@apollo/server/express4";

import {partsTypeDefs, partsRevolver} from "./common/schema/parts.schema.js";

const resolvers = {
    Query: {
        ...partsRevolver.Query
    },
    Subscription: {
        ...partsRevolver.Subscription
    },
};
const schema = makeExecutableSchema({typeDefs: partsTypeDefs, resolvers});

const app = express();
const httpServer = createServer(app);

const wsServer = new WebSocketServer({
    server: httpServer,
    path: '/graphql',
});

const serverCleanup = useServer({
    schema,
    onDisconnect: ({extra: {request}}) => {
        const socketId = request.headers["sec-websocket-key"];
        partsRevolver.OnDisconnect(socketId);
    },
    onSubscribe: (ctx) => {
        const socketId = ctx.extra.request.headers["sec-websocket-key"];
        partsRevolver.OnConnect(socketId);
    }
}, wsServer);

const server = new ApolloServer({
    schema,
    plugins: [
        ApolloServerPluginDrainHttpServer({httpServer}),
        {
            async serverWillStart() {
                return {
                    async drainServer() {
                        await serverCleanup.dispose();
                    },
                };
            },
        },
    ],
});

await server.start();
app.use("/graphql", cors(), bodyParser.json(), expressMiddleware(server));

const PORT = 4900;
httpServer.listen(PORT, () => {
    console.log(`Server is now running on http://localhost:${PORT}/graphql`);
});
