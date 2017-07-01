import { default as handle } from "./graphql/index";

const createResponse = (statusCode, body) => (
  {
    statusCode,
    headers: {
      'Access-Control-Allow-Origin': '*', // Required for CORS
    },
    body: JSON.stringify(body),
  }
)

export const graphql: AWSLambda.Handler = (event, context, callback) => {
  const body = JSON.parse(event.body);

  handle(body.query, body.variables)
    .then((response) => callback(null, createResponse(200, response)))
    .catch((error) => callback(null, createResponse(error.responseStatusCode || 500, { message: error.message || 'Internal server error' })));
};
