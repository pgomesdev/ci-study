const sum = require('../src/sum');

describe('sum test', () => {
  it('should sum two values', () => {
    const result = sum(1, 3);

    expect(result).toBe(4);
  });

  it('should sum two values', () => {
    const result = sum(1, 3);

    expect(result).toBe(4);
  });
});
