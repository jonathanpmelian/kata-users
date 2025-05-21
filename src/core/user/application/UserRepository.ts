import User from '../domain/entities/User';
import { Email } from '../domain/valueObjects';

export default interface UserRepository {
  getAllUsers(): Promise<User[]>;
  addUser(user: User): Promise<User>;
  findByEmail(email: Email): Promise<User | null>;
}
