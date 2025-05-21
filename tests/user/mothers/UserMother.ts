import User from '../../../src/core/user/domain/entities/User';
import {
  Address,
  Email,
  Password,
} from '../../../src/core/user/domain/valueObjects';
import { EmailMother } from './EmailMother';
import { PasswordMother } from './PasswordMother';

export class UserMother {
  static create({
    id = 'user-123',
    name = 'John Doe',
    email = EmailMother.create(),
    password = PasswordMother.create(),
    address,
  }: Partial<{
    id: string;
    name: string;
    email: Email;
    password: Password;
    address?: Address;
  }> = {}): User {
    const user = new User(id, name, email, password);
    if (address) {
      user.setAddress(address);
    }
    return user;
  }
}
