import { Email } from '../../../src/core/user/domain/valueObjects';

export class EmailMother {
  static create(value = 'john@example.com'): Email {
    return new Email(value);
  }
}
