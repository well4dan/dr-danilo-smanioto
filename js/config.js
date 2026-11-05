/* config.js
   Ponto unico de verdade dos dados de contato.
   Trocar aqui vale para o site inteiro. */

export const CONTACT = {
  whatsapp: '5543999346705',
  phone: '+554333518889',
  phoneLabel: '(43) 3351-8889',
  mobileLabel: '(43) 99934-6705',
  emailUser: 'daniloneurosmanioto',
  emailDomain: 'gmail.com',
  instagram: 'https://www.instagram.com/danilosmaniotovet/',
  mapsQuery: 'Danilo Smanioto Neurologia Veterinária, Av. Santos Dumont, 1211, Londrina, PR',

  /* Preencher antes de publicar. Com o numero preenchido, o rodape passa a
     exibir "CRMV-PR 00000" automaticamente. Vazio, nada e exibido. */
  crmv: '',
};

/** Monta um link do WhatsApp com mensagem pre-preenchida e codificada. */
export function whatsappLink(message) {
  return `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`;
}
