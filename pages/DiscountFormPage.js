export class DiscountFormPage {
  constructor(page) {
    this.page = page;
  }

  async selecionarTipoDeCliente(tipoDeCliente) {
    await this.page
      .getByRole('combobox')
      .selectOption(tipoDeCliente);
  }

  async informarQuantidade(quantidade) {
    await this.page
      .getByRole('textbox', { name: 'Quantidade:' })
      .fill(String(quantidade));
  }

  async calcularDesconto() {
    await this.page
      .getByRole('button', { name: 'Calcular Desconto!' })
      .click();
  }

  async preencherFormulario(tipoDeCliente, quantidade) {
    await this.selecionarTipoDeCliente(tipoDeCliente);
    await this.informarQuantidade(quantidade);
  }
}