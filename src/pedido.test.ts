import { calcularTotal, ItemPedido, DescontoComum, DescontoVip, DescontoFuncionario } from './pedido';

test('sem desconto', () => {
  expect(calcularTotal([new ItemPedido(10, 2)], new DescontoComum())).toBe(20);
});
test('vip 10%', () => {
  expect(calcularTotal([new ItemPedido(100, 1)], new DescontoVip())).toBe(90);
});
test('funcionario 30%', () => {
  expect(calcularTotal([new ItemPedido(100, 1)], new DescontoFuncionario())).toBe(70);
});
