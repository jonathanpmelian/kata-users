import { Password } from '../../../src/core/user/domain/valueObjects';

export class PasswordMother {
  static create(value = 'Password123'): Password {
    return new Password(value);
  }
}
