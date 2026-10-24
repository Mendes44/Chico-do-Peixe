import { site } from '@/content/site';

export type MotivoContato = 'reserva' | 'aniversario' | 'cardapio' | 'duvida';
export type DadosContato = {
  nome: string;
  telefone: string;
  motivo: MotivoContato;
  data?: string;
  horario?: string;
  pessoas?: string;
  observacoes?: string;
};

const assuntos: Record<MotivoContato, string> = {
  reserva: 'Gostaria de consultar uma reserva',
  aniversario: 'Gostaria de organizar uma comemoração de aniversário',
  cardapio: 'Gostaria de consultar o cardápio, os valores e a disponibilidade',
  duvida: 'Gostaria de tirar uma dúvida com a equipe',
};

export function prepararMensagemWhatsApp(dados: DadosContato) {
  const linhas = [
    `Olá, equipe do Chico do Peixe Santa Inês! ${assuntos[dados.motivo]}.`,
    '',
    `Meu nome: ${dados.nome.trim()}`,
    `Meu WhatsApp: ${dados.telefone.trim()}`,
  ];
  if (dados.data) {
    const [ano, mes, dia] = dados.data.split('-');
    linhas.push(`Data desejada: ${dia}/${mes}/${ano}`);
  }
  if (dados.horario) linhas.push(`Horário desejado: ${dados.horario}`);
  if (dados.pessoas) linhas.push(`Número de pessoas: ${dados.pessoas}`);
  if (dados.observacoes?.trim())
    linhas.push('', `Observações: ${dados.observacoes.trim()}`);
  linhas.push('', 'Podem me informar as condições e a disponibilidade?');
  const mensagem = linhas.join('\n');
  return {
    mensagem,
    destino: `https://wa.me/${site.whatsapp.replace('+', '')}?text=${encodeURIComponent(mensagem)}`,
  };
}
