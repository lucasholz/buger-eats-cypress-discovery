class SignupPage {
  go() {
    cy.viewport(1440, 900)
    cy.visit('/')
    cy.get('a[href="/deliver"]').click() //faz clicar no elemento selecionado
    cy.get('#page-deliver form h1').should(
      'have.text',
      'Cadastre-se para  fazer entregas'
    )
  }

  fillForm(deliver) {
    cy.get('input[type="text"][name="fullName"]').type(deliver.name)
    cy.get('input[type="text"][name="cpf"]').type(deliver.cpf)
    cy.get('input[type="text"][name="email"]').type(deliver.email)
    cy.get('input[type="text"][name="whatsapp"]').type(deliver.whatsapp)

    cy.get('input[name="postalcode"').type(deliver.address.postalcode)
    cy.get('input[type=button][value="Buscar CEP"]').click()

    cy.get('input[name="address-number"]').type(deliver.address.number)
    cy.get('input[name="address-details"]').type(deliver.address.details)

    cy.get('input[name="address"]').should('have.value', deliver.address.street)
    cy.get('input[name="district"]').should(
      'have.value',
      deliver.address.district
    )
    cy.get('input[name="city-uf"]').should(
      'have.value',
      deliver.address.city_uf
    )

    cy.contains('.delivery-method li', deliver.delivery_method).click()
    cy.get('input[accept^="image/*"]').attachFile(deliver.cnh)
  }

  submit() {
    cy.get('form button[type="submit"]').click()
  }

  modalContentShouldBe(expectedMessage) {
    cy.get('div[class="swal2-html-container"]').should(
      'have.text',
      expectedMessage
    )
  }

  alertMessageShouldBe(expectedMessage) {
    //cy.get('.alert-error').should('have.text', expectedMessage)
    cy.contains('.alert-error', expectedMessage).should('be.visible')
  }
}

export default SignupPage
