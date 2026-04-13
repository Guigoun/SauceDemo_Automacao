import LoginPage from "../Pages/home";
import ProductsPage from "../Pages/products";
import YourCartPage from "../Pages/carrinho";
import CheckoutPage from "../Pages/checkout"

describe("Deve validar o fluxo de compra", () => {
  beforeEach(() => {
    LoginPage.visitarPagina();
  });

  it("Fluxo de compra E2E", () => {
    LoginPage.realizarLogin("standard_user", "secret_sauce");
    LoginPage.validarPaginaProdutos();
    ProductsPage.adicionarProdutosAoCarrinho();
    ProductsPage.validarContadorDoCarrinho(2);
    ProductsPage.acessarCarrinhoDeCompras();
    YourCartPage.validarPaginaCarrinho();
    YourCartPage.removerProdutos();
    YourCartPage.voltarPaginaProdutos();
    ProductsPage.adicionarProdutoAoCarrinho();
    ProductsPage.validarContadorDoCarrinho(1);
    ProductsPage.acessarCarrinhoDeCompras();
    YourCartPage.validarPaginaCarrinho();
    YourCartPage.avancarCheckout();
    CheckoutPage.validarCheckoutPage();
    CheckoutPage.preencherInformacoes('José', 'Brito', 72874359);
    CheckoutPage.avancarPagina();
    CheckoutPage.validarOverview();
    CheckoutPage.finalizarCompra();
    CheckoutPage.validarCompra();
  });
});
