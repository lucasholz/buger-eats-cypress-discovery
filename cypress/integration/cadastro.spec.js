import SignupPage from '../pages/SignupPage'

describe('Cadastro', () => {
  var signup = new SignupPage()

  it('Usuário deve se tornar um deliver', () => {
    var deliver = {
      name: 'Lucas Holz',
      cpf: '00000014141',
      email: 'holz@gmail.com',
      whatsapp: '53999100010',
      address: {
        postalcode: '04534011',
        street: 'Rua Joaquim Floriano',
        number: '1000',
        details: 'Ap 142',
        district: 'Itaim Bibi',
        city_uf: 'São Paulo/SP'
      },
      delivery_method: 'Moto',
      cnh: 'images/cnh-digital.jpg'
    }

    signup.go()
    signup.fillForm(deliver)
    signup.submit()

    const expectedMessage =
      'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'

    signup.modalContentShouldBe(expectedMessage)
  })

  it('CPF incorreto', () => {
    var deliver = {
      name: 'Lucas Holz',
      cpf: '00000014141AA',
      email: 'holz@gmail.com',
      whatsapp: '53999100010',
      address: {
        postalcode: '04534011',
        street: 'Rua Joaquim Floriano',
        number: '1000',
        details: 'Ap 142',
        district: 'Itaim Bibi',
        city_uf: 'São Paulo/SP'
      },
      delivery_method: 'Moto',
      cnh: 'images/cnh-digital.jpg'
    }

    signup.go()
    signup.fillForm(deliver)
    signup.submit()
    signup.alertMessageShouldBe('Oops! CPF inválido')
  })
})
