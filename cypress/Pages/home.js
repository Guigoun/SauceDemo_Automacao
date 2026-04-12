class LoginPage {

    get username() { return cy.get('[id="user-name"]') }

    get password() { return cy.get('[id="password"]'); }

    get loginButton() { return cy.get('[id="login-button"]'); }

    get productPage() { return cy.get('[data-test="title"]') }

    visitarPagina(){
        cy.visit('https://www.saucedemo.com/');
    }

    realizarLogin(usuario, senha) {
        this.username.type(usuario);
        this.password.type(senha);
        this.loginButton.click();
    }

    validarPaginaProdutos() {
        this.productPage.should('have.text', 'Products')
    }
}

export default new LoginPage()

