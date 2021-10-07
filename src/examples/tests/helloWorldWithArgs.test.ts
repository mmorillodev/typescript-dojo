import greet from '../helloWorldWithArgs';

describe('app', () => {
  it("should return 'Hello {name}!'", () => {
    expect(greet('Matheus')).toBe('Hello Matheus!');
  });
});
