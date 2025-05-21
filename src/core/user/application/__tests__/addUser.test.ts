import { InMemoryUserRepository } from '../../infrastructure/InMemoryUserRepository';
import { AddUserCase } from '../addUser';

describe('AddUserCase', () => {
  it('should add a new user', async () => {
    const repo = new InMemoryUserRepository();
    const useCase = new AddUserCase(repo);

    const user = await useCase.execute(
      'Jonathan',
      'jon@example.com',
      'Secure123',
    );

    expect(user.getEmail().getValue()).toBe('jon@example.com');
  });

  it('should throw if user already exists', async () => {
    const repo = new InMemoryUserRepository();
    const useCase = new AddUserCase(repo);

    await useCase.execute('Jonathan', 'jon@example.com', 'Secure123');

    await expect(
      useCase.execute('Jonathan', 'jon@example.com', 'Secure123'),
    ).rejects.toThrow('User already exists');
  });
});
