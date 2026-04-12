import LoginPage from "../Pages/home";

describe('Funcionalidade: Login no SauceDemo', () => {

    beforeEach(() => {
        LoginPage.visitarPagina()
    })

    it('Deve acessar o site e realizar o login', () => {
        LoginPage.realizarLogin('standard_user', 'secret_sauce')
        LoginPage.validarPaginaProdutos()
    })
})