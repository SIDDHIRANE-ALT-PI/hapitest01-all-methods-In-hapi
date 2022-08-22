'use strict';

const Hapi = require('@hapi/hapi');

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    server.route([{
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'get Hello World!';
        }
    },
    {
        method: 'PUT',
        path: '/',
        handler: (request, h) => {
            return 'put Hello World!';
        }
    },
    {
        method: 'POST',
        path: '/',
        handler: (request, h) => {
            return 'post Hello World!';
        }
    },
    {
        method: 'DELETE',
        path: '/',
        handler: (request, h) => {
            return 'Delete Method is called';
        }
    },
    {
        method: 'PATCH',
        path: '/',
        handler: (request, h) => {
            return 'PATCH Method is called';
        }
    }
]);

    await server.start();
    console.log('Server running on %s', server.info.uri);
};


process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();