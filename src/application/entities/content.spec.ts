import { Content } from './content';

describe('Notification content', () => {
  it('it should be able to create notification content', () => {
    const content = new Content('Você recebeu uma solicitação de ammizade');

    expect(content).toBeTruthy();
  });

  it('it should not be able to create notification content with less than 5 characters', () => {
    expect(() => new Content('test')).toThrow();
  });

  it('it should not be able to create notification content with more than 240 characters', () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
  });
});
