import greet from '../helloWorld'

describe('app', () => {
  it("should return 'Hello World!'", () => {
    expect(greet()).toBe('Hello World!')
  })
})
