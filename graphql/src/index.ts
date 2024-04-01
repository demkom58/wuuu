import {ApolloServer} from '@apollo/server';
import {startStandaloneServer} from '@apollo/server/standalone';
import {ApolloGateway, IntrospectAndCompose} from'@apollo/gateway';

async function bootstrap() {
    const gateway = new ApolloGateway({
        supergraphSdl: new IntrospectAndCompose({
            subgraphs: [
                {name: 'auth', url: 'http://auth-service/graphql'},
                {name: 'backend', url: 'http://backend-service/graphql'},
            ],
        }),
    });

    const server = new ApolloServer({
        gateway,
    });

    const {url} = await startStandaloneServer(server, {listen: {port: 80}});
    console.log(`🚀 Server ready at ${url}`);
}

bootstrap().catch(console.error);