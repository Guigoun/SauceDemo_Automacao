class ProductsPage {
  get backpack() { return cy.get('[id="add-to-cart-sauce-labs-backpack"]'); }
  get jacket() { return cy.get('[id="add-to-cart-sauce-labs-fleece-jacket"]'); }
  get onesie() { return cy.get('[id="add-to-cart-sauce-labs-onesie"]'); }
  get shoppingCart() { return cy.get('[data-test="shopping-cart-link"]'); }

  adicionarProdutosAoCarrinho() {
    this.backpack.click();
    this.jacket.click();
  }

  adicionarProdutoAoCarrinho() {
    this.onesie.click();
  }

  validarContadorDoCarrinho(contador) {
    this.shoppingCart.should("have.text", contador);
  }

  acessarCarrinhoDeCompras() {
    this.shoppingCart.click();
  }
}

export default new ProductsPage();
