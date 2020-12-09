export const apis = Object.freeze({
  dev: 'https://7cg8uz8p69.execute-api.us-east-1.amazonaws.com/',
  prod: 'https://7cg8uz8p69.execute-api.us-east-1.amazonaws.com/',
});

/**
 * production mode can be tested by visiting 127.0.0.1 instead of
 * localhost
 */

export const api = window.location.test(/localhost/) ? apis.dev : apis.prod;
