/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable unicorn/prefer-module */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable global-require */
// eslint-disable-next-line spaced-comment
/// <reference types="cypress" />

export {};

module.exports = (
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions,
): Cypress.PluginConfigOptions => {
  require('@cypress/code-coverage/task')(on, config);
  return config;
};
