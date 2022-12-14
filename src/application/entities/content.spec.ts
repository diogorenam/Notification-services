import { Content } from './content';

describe('Notification content ', () => {
  it('Deve criar um novo conteudo', () => {
    const content = new Content('você recebeu uma nova solicitação de amizade');
    expect(content).toBeTruthy();
  });

  it('Deve disparar erro ao passa uma mensagem com menos de 5 caracteres', () => {
    expect(() => new Content('aaa')).toThrow();
  });

  it('Deve disparar erro ao passa uma mensagem com mais de 240 caracteres', () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
  })
})
