import SignupPage from '../pages/SignupPage'

describe('Cadastro', () => {
  var signup = new SignupPage()

  beforeEach(function () {
    cy.fixture('deliver').then(function (d) {
      this.deliver = d
    })
  })

  it('Usuário deve se tornar um deliver', function () {
    signup.go()
    signup.fillForm(this.deliver.signup)
    signup.submit()

    const expectedMessage =
      'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'

    signup.modalContentShouldBe(expectedMessage)
  })

  it('CPF incorreto', function () {
    signup.go()
    signup.fillForm(this.deliver.cpf_inv)
    signup.submit()
    signup.alertMessageShouldBe('Oops! CPF inválido')
  })
})
