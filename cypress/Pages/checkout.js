class CheckoutPage {

  get checkoutNamePage() { return cy.get('[data-test="title"]'); }
  get checkoutOverview() { return cy.get('[data-test="title"]')  }
  get checkoutComplete() { return cy.get('[data-test="title"]') }
  get firstName() { return cy.get('[id="first-name"]'); }
  get lastName() { return cy.get('[id="last-name"]'); }
  get postalCode() { return cy.get('[id="postal-code"]'); }
  get continueButton() { return cy.get('[id="continue"]'); }
  get finishButton() { return cy.get('[id="finish"]') }
  get successfullMessage() { return cy.get('[data-test="complete-header"]') }

  validarCheckoutPage() {
    this.checkoutNamePage.should('have.text', 'Checkout: Your Information');
  }
  preencherInformacoes(nome, sobrenome, cep) {
    this.firstName.type(nome);
    this.lastName.type(sobrenome);
    this.postalCode.type(cep);
  }

  avancarPagina() {
    this.continueButton.click();
  }

  finalizarCompra() {
    this.finishButton.click();
  }

  validarOverview() {
    this.checkoutOverview.should('have.text', 'Checkout: Overview');
  }

  validarCompra() {
    this.checkoutComplete.should('have.text', 'Checkout: Complete!');
    this.successfullMessage.should('have.text', 'Thank you for your order!');
  }

}

export default new CheckoutPage();
