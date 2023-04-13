/// <reference types="cypress" />
import { mount } from 'cypress/react';

declare global {
  namespace Cypress {
    interface Chainable {
      router: (path?: string) => {};
      mount: typeof mount;
      el(dataTestAttribute: string, args?: any): Chainable<JQuery<HTMLElement>>;
      like(
        dataTestAttribute: string,
        args?: any,
      ): Chainable<JQuery<HTMLElement>>;
    }
  }
}
