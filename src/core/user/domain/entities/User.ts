import { Address, Email, Password } from '../valueObjects';

export default class User {
  private readonly id: string;
  private name: string;
  private email: Email;
  private password: Password;
  private address?: Address;

  constructor(id: string, name: string, email: Email, password: Password) {
    if (!name) {
      throw new Error('Name is required');
    }

    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
  }

  static randomId(): string {
    return Math.random().toString(36).substring(2, 15);
  }

  setAddress(address: Address): void {
    this.address = address;
  }

  equals(other: User): boolean {
    return this.id === other.id;
  }

  getId(): string {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getEmail(): Email {
    return this.email;
  }

  getPassword(): Password {
    return this.password;
  }

  getAddress(): Address | undefined {
    return this.address;
  }
}
