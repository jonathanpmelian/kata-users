import { Address } from '../address';

describe('Address', () => {
  it('should return true for equal addresses', () => {
    const address1 = new Address('Long Street 123', '12345', 'City');
    const address2 = new Address('Long Street 123', '12345', 'City');

    expect(address1.equal(address2)).toBe(true);
  });

  it('should return false for different addresses', () => {
    const address1 = new Address('Long Street 123', '12345', 'City');
    const address2 = new Address('Long Street 124', '12345', 'City');

    expect(address1.equal(address2)).toBe(false);
  });

  it('should throw if any field is missing', () => {
    expect(() => new Address('', '12345', 'City')).toThrow(
      'All fields are required',
    );
    expect(() => new Address('Long Street 123', '', 'City')).toThrow(
      'All fields are required',
    );
    expect(() => new Address('Long Street 123', '12345', '')).toThrow(
      'All fields are required',
    );
  });
});
