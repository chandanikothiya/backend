const swaggerAutogen = require('swagger-autogen')();


require('dotenv').config();
const doc = {
  info: {
    title: 'Project name API v1.0',
    description: 'Comprehensive API Documentation for Project name',
    version: '1.0.0'
  },
  host: `https://backend-chi-rosy-95.vercel.app`,
  schemes: ['http', 'https'],
  consumes: ['application/json'],
  produces: ['application/json'],
  securityDefinitions: {
    bearerAuth: {
      type: 'apiKey',
      name: 'Authorization',
      in: 'header',
      description: 'JWT token for authentication. Format: Bearer <token>'
    },
  },
  security: [
    {
      bearerAuth: []
    }
  ]
};
const outputFile = './swagger-output.json';
const endpointsFiles = [
  './routes/api/v1/index.js'
];

const options = {
  autoHeaders: true,
  autoQuery: true,
  autoBody: true,
  autoQuery: true
};

swaggerAutogen(outputFile, endpointsFiles, doc, options);