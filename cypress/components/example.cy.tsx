import Example from '@/components/example';

describe('Example', () => {
  it('render title', () => {
    cy.mount(<Example />);

    cy.el('example-image')
      .invoke('attr', 'src')
      .should('include', 'picsum.photos');

    cy.el('example-text').contains('Hello World');
  });
});
