export class ProductListPage {
  constructor(page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://calculadora.diegoquirino.net/');
    await this.page
  .locator('section')
  .getByRole('link', { name: 'Calcular Desconto' })
  .click();
  }

  async selecionarPrimeiroProdutoParaCalculo() {
    await this.page
      .getByRole('link', { name: '$' })
      .first()
      .click();
  }
}