class YourCartPage {

  get shoppingCarPage() { return cy.get('[data-test="title"]'); }
  get removeBackpack() { return cy.get('[id="remove-sauce-labs-backpack"]'); }
  get removeJacket() { return cy.get('[id="remove-sauce-labs-fleece-jacket"]'); }
  get continueShoppingButton() { return cy.get('[id="continue-shopping"]'); }
  get checkoutButton() { return cy.get('[id="checkout"]'); }

  validarPaginaCarrinho() {
    this.shoppingCarPage.should("have.text", "Your Cart");
  }

  removerProdutos() {
    this.removeBackpack.click();
    this.removeJacket.click();
  }

  voltarPaginaProdutos() {
    this.continueShoppingButton.click();
  }

  avancarCheckout() {
    this.checkoutButton.click();
  }
}

export default new YourCartPage();
