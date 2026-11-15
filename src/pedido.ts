export interface Desconto {
  calcular(valor: number): number;
}
export class DescontoComum implements Desconto {
  calcular(valor: number): number { return valor; }
}
export class DescontoVip implements Desconto {
  calcular(valor: number): number { return valor * 0.9; }
}
export class DescontoFuncionario implements Desconto {
  calcular(valor: number): number { return valor * 0.7; }
}
export class ItemPedido {
  constructor(public p: number, public q: number) {}
}
export function calcularTotal(itens: ItemPedido[], desconto: Desconto): number {
  const total = itens.reduce((soma, item) => soma + item.p * item.q, 0);
  return desconto.calcular(total);
}
