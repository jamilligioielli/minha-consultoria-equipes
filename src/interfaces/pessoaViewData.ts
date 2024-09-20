export interface PessoaViewData {
  idConsultor: number;
  isLider: boolean;
  nomePessoa: string;
  totalVendido: number;
  totalInvestido: number;
  totalLucro: number;
  nivel: string;
  qtdCliente: number;
  nicho: string;
  vendasRealizadas: Venda[];
}

export interface Venda {
  valor: number;
  data: string;
  nomeProduto: string;
  canalVenda: string;
  nomeCliente: string;
}
