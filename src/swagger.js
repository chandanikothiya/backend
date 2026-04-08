const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    version: '1.0.0',            // by default: '1.0.0'
    title: 'LMS Api',              // by default: 'REST API'
    description: 'All api related LMS'         // by default: ''
  },
  host: 'localhost:8080/',                 // by default: 'localhost:3000'
  basePath: 'api/v1',             // by default: '/'
  schemes: [],              // by default: ['http']
  consumes: [],             // by default: ['application/json']
  produces: [],             // by default: ['application/json']
  tags: [                   // by default: empty Array
    {
      name: 'Category',             // Tag name
      description: 'Category related api'       // Tag description
    },
    {
      name: 'Coures',             // Tag name
      description: 'Coures related api'       // Tag description
    },
    {
      name: 'Terms',             // Tag name
      description: 'Terms related api'       // Tag description
    },
    {
      name: 'User',             // Tag name
      description: 'User related api'       // Tag description
    },
    // { ... }
  ],
  securityDefinitions: {
    apiKeyAuth: {
      type: 'apiKey',
      in: 'header', // can be 'header', 'query' or 'cookie'
      name: 'Authorization', // name of the header, query parameter or cookie
      description: 'Some description...'
    }
  },  // by default: empty object
  definitions: {}           // by default: empty object
};

const outputFile = './swagger-output.json';
const routes = ['./routes/api/v1/index.js'];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen(outputFile, routes, doc);