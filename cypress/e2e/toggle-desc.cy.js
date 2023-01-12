describe('Accordion answers can be opened on click', () => {
  it('Hides first item and opens on click', () => {
    cy.visit('http://127.0.0.1:5500/')

    //First answer is not visible by default
    cy.get("[data-qa=item-desc]").first().should("not.be.visible")

    //Click on the first item
    cy.get("[data-qa=item-toggle]").first().click()

    //Answer should be visible and have a class 'open'
    cy.get("[data-qa=item-container]").first().should("have.class", "open")

    //Click on the second item
    cy.get("[data-qa=item-toggle]").eq(1).click()

    //Second answer should be visible and have a class 'open'
    cy.get("[data-qa=item-desc]").eq(1).should("be.visible")

    cy.get("[data-qa=item-container]").eq(1).should("have.class", "open")

    //First answer should be hidden and have a class 'close'
    cy.get("[data-qa=item-container]").first().should("have.class", "close")

    cy.get("[data-qa=item-desc]").first().should("not.be.visible")
  })
})