import { expect } from '@playwright/test';

export class DiscountResultPage {
  constructor(page) {
    this.page = page;
  }

  async validarMensagemDeSucesso() {
    await expect(this.page.locator('section'))
      .toContainText(/calculado com sucesso/i);
  }

  async validarMensagemDeErro() {
    await expect(this.page.locator('section'))
      .toContainText(/erro|inválido|invalido/i);
  }

  async validarFatorDeDesconto(fator) {
    await expect(
      this.page.getByRole('textbox', {
        name: 'Fator de desconto:'
      })
    ).toHaveValue(new RegExp(fator));
  }

  async validarTipoDeCliente(tipoDeCliente) {
    await expect(
      this.page.getByRole('textbox', {
        name: 'Tipo de Cliente:'
      })
    ).toHaveValue(tipoDeCliente);
  }

  async validarQuantidade(quantidade) {
    await expect(
      this.page.getByRole('textbox', {
        name: 'Quantidade orçada:'
      })
    ).toHaveValue(String(quantidade));
  }
}