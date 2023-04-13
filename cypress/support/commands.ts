import { mount } from 'cypress/react18';
import * as NextRouter from 'next/router';

Cypress.Commands.add('mount', mount);

Cypress.Commands.add('el', (selector, ...args) => {
  return cy.get(`[data-test=${selector}]`, ...args);
});

Cypress.Commands.add('like', (selector, ...args) => {
  return cy.get(`[data-test*=${selector}]`, ...args);
});

Cypress.Commands.add('router', (path?) => {
  const pathname = path || '/';
  const push = cy.stub();
  cy.stub(NextRouter, 'useRouter').returns({ pathname, push });
});
