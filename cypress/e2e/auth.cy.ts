describe('Auth', () => {
  it('Logs in successfully', () => {
    cy.visit('/en/sign-in');

    cy.wait(1000);

    cy.get('input[name="email"]').type('babysitter@gmail.com');

    cy.get('input[name="password"]').type('babysitter');

    cy.get('[data-cy="submit-btn"]').click();

    cy.url().should('not.include', '/sign-in');
  });

  it('Fails to log in', () => {
    cy.visit('/en/sign-in');

    cy.wait(1000);

    cy.get('input[name="email"]').type('wrong@gmail.com');

    cy.get('input[name="password"]').type('Wrong123!');

    cy.get('[data-cy="submit-btn"]').click();

    cy.url().should('include', '/sign-in');
  });

  it('Signs up successfully without OTP', () => {
    const randomSuffix = Math.floor(Math.random() * 100000);
    const randomEmail = `user${randomSuffix}@gmail.com`;

    const randomPassword = `Pass${randomSuffix}!`;

    cy.visit('en/sign-up');
    cy.wait(1000);
    cy.get('input[name="email"]').type(randomEmail);
    cy.get('input[name="password"]').type(randomPassword);
    cy.get('[data-cy="submit-btn"]').click();

    cy.url().should('include', '/sign-up');
  });
  it('Signs up unsuccessfully without OTP', () => {
    // Generate random email
    const randomSuffix = Math.floor(Math.random() * 100000);
    const randomEmail = `user${randomSuffix}@example.com`;

    // Generate random password (optional, here just using a simple pattern)
    const randomPassword = `Pass${randomSuffix}!`;

    cy.visit('en/sign-up');
    cy.wait(1000);
    cy.get('input[name="email"]').type(randomEmail);
    cy.get('input[name="password"]').type(randomPassword);
    cy.get('[data-cy="submit-btn"]').click();

    cy.url().should('include', '/sign-up');
  });

  it('successfull log out', () => {
    cy.visit('/en/sign-in');

    cy.wait(1000);

    cy.get('input[name="email"]').type('babysitter@gmail.com');

    cy.get('input[name="password"]').type('babysitter');

    cy.get('[data-cy="submit-btn"]').click();

    cy.url().should('not.include', '/sign-in');

    cy.get('.hamburger-container').click();
    cy.get('[data-cy="logout-btn"]').click();
    cy.url().should('include', '/sign-in');
  });
});
