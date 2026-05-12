import { test } from '@playwright/test';

import { ProductListPage } from '../pages/ProductListPage';
import { DiscountFormPage } from '../pages/DiscountFormPage';
import { DiscountResultPage } from '../pages/DiscountResultPage';

const casosDeTeste = [
  {
    id: 'CT01',
    tipo: 'A',
    quantidade: 0,
    erro: true
  },
  {
    id: 'CT02',
    tipo: 'B',
    quantidade: 0,
    erro: true
  },
  {
    id: 'CT03',
    tipo: 'C',
    quantidade: 0,
    erro: true
  },
  {
    id: 'CT04',
    tipo: 'A',
    quantidade: 99,
    fator: '0,90'
  },
  {
    id: 'CT05',
    tipo: 'B',
    quantidade: 99,
    fator: '0,85'
  },
  {
    id: 'CT06',
    tipo: 'C',
    quantidade: 99,
    fator: '0,80'
  },
  {
    id: 'CT07',
    tipo: 'A',
    quantidade: 100,
    fator: '0,95'
  },
  {
    id: 'CT08',
    tipo: 'B',
    quantidade: 100,
    fator: '0,90'
  },
  {
    id: 'CT09',
    tipo: 'C',
    quantidade: 100,
    fator: '0,85'
  },
  {
    id: 'CT10',
    tipo: 'A',
    quantidade: 1000,
    fator: '1,00'
  },
  {
    id: 'CT11',
    tipo: 'B',
    quantidade: 1000,
    fator: '0,95'
  },
  {
    id: 'CT12',
    tipo: 'C',
    quantidade: 1000,
    fator: '0,90'
  }
];

casosDeTeste.forEach((caso) => {

  test(`${caso.id} - Calcular desconto`, async ({ page }) => {

    const productListPage = new ProductListPage(page);
    const discountFormPage = new DiscountFormPage(page);
    const discountResultPage = new DiscountResultPage(page);

    // Arrange
    await productListPage.goto();
    await productListPage.selecionarPrimeiroProdutoParaCalculo();

    // Act
    await discountFormPage.preencherFormulario(
      caso.tipo,
      caso.quantidade
    );

    await discountFormPage.calcularDesconto();

    // Assert
    if (caso.erro) {

      await discountResultPage.validarMensagemDeErro();

    } else {

      await discountResultPage.validarTipoDeCliente(
        caso.tipo
      );

      await discountResultPage.validarQuantidade(
        caso.quantidade
      );

      await discountResultPage.validarFatorDeDesconto(
        caso.fator
      );

      await discountResultPage.validarMensagemDeSucesso();
    }
  });
});