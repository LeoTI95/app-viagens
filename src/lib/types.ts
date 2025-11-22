export interface User {
  id: string;
  email: string;
  name: string;
  created_at: string;
}

export interface Destino {
  id: string;
  nome: string;
  pais: string;
  cidade: string;
  descricao: string;
  imagem_url?: string;
}

export interface OfertaDinheiro {
  id: string;
  destino_id: string;
  companhia_aerea: string;
  preco: number;
  data_ida: string;
  data_volta: string;
  taxa_embarque: number;
  created_at: string;
}

export interface OfertaMilha {
  id: string;
  destino_id: string;
  programa_milhas: string;
  milhas_necessarias: number;
  valor_milha: number;
  taxa_embarque: number;
  created_at: string;
}

export interface PromoMilha {
  id: string;
  programa: string;
  titulo: string;
  descricao: string;
  desconto: number;
  validade: string;
  created_at: string;
}

export interface Hospedagem {
  id: string;
  destino_id: string;
  nome: string;
  tipo: string;
  preco_noite: number;
  avaliacao: number;
  imagem_url?: string;
}

export interface Restaurante {
  id: string;
  destino_id: string;
  nome: string;
  tipo_cozinha: string;
  preco_medio: number;
  avaliacao: number;
  imagem_url?: string;
}

export interface Passeio {
  id: string;
  destino_id: string;
  nome: string;
  descricao: string;
  preco: number;
  duracao: string;
  imagem_url?: string;
}

export interface ViagemSalva {
  id: string;
  user_id: string;
  oferta_id: string;
  tipo: 'dinheiro' | 'milha';
  created_at: string;
}