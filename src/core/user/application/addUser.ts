import { Email, Password } from '../domain/valueObjects';
import User from '../domain/entities/User';
import UserRepository from './UserRepository';

export class AddUserCase {
  constructor(private readonly repository: UserRepository) {}

  async execute(name: string, email: string, password: string): Promise<User> {
    const emailVO = new Email(email);
    const passwordVO = new Password(password);

    const existingUser = await this.repository.findByEmail(emailVO);

    if (existingUser) {
      throw new Error('User already exists');
    }

    const user = new User(User.randomId(), name, emailVO, passwordVO);

    return this.repository.addUser(user);
  }
}
