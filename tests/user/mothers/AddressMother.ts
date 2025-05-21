import { Address } from '../../../src/core/user/domain/valueObjects';

export class AddressMother {
  static create({
    street = 'Main Street 1',
    zipCode = '12345',
    city = 'Cityville',
  }: Partial<{ street: string; zipCode: string; city: string }> = {}): Address {
    return new Address(street, zipCode, city);
  }
}
