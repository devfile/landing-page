// eslint-disable-next-line spaced-comment
/// <reference types="cypress" />

export {};

describe('Testing links on the home page', () => {
  beforeEach(() => {
    // run these tests as if in a desktop
    // browser with a 720p monitor
    cy.viewport(1280, 720);
  });

  it('successfully loads', () => {
    cy.visit('/'); // change URL to match your dev URL
  });
});
