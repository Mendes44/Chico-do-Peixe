import { site } from '@/content/site';

// Uma única configuração evita que variáveis ausentes ou antigas apontem para o legado.
export const enderecoPublico = new URL(site.url).origin;

export const capaCompartilhamento = {
  url: `${enderecoPublico}/capa-chico-whatsapp-v3.jpg`,
  width: 1080,
  height: 1080,
  type: 'image/jpeg',
  alt: 'Logo Chico do Peixe — Bar e Restaurante Santa Inês.',
};

// Redes com cartão horizontal mantêm a arte gastronômica sem recortar a miniatura quadrada.
export const capaHorizontalCompartilhamento = {
  url: `${enderecoPublico}/capa-chico-santa-ines-v2.jpg`,
  width: 1200,
  height: 630,
  type: 'image/jpeg',
  alt: 'Chico do Peixe Santa Inês — O sabor de estar junto começa no Chico.',
};
