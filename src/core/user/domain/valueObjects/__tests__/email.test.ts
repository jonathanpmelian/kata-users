import { Email } from '../email';

describe('Email', () => {
  it('should throw an error if email is empty', () => {
    expect(() => new Email('')).toThrow('Email is required');
  });

  it('should throw an error if email is invalid', () => {
    expect(() => new Email('invalid-email')).toThrow('Email is not valid');
  });

  it('should return true for equal emails', () => {
    const email1 = new Email('username@domain.com');
    const email2 = new Email('username@domain.com');

    expect(email1.equals(email2)).toBe(true);
  });

  it('should return false for different emails', () => {
    const email1 = new Email('a@domain.com');
    const email2 = new Email('b@domain.com');

    expect(email1.equals(email2)).toBe(false);
  });

  it('should return the raw email value', () => {
    const email = new Email('a@domain.com');
    expect(email.getValue()).toBe('a@domain.com');
  });
});
