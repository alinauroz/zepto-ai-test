export const apis = Object.freeze({
  dev: '',
  prod: '',
});

/**
 * production mode can be tested by visiting 127.0.0.1 instead of
 * localhost
 */

export const api = window.location.test(/localhost/) ? apis.dev : apis.prod;
