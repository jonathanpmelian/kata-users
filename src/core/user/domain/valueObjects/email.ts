export class Email {
  private readonly value: string;

  private static readonly EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  constructor(value: string) {
    if (!value) {
      throw new Error('Email is required');
    }

    if (!Email.EMAIL_REGEX.test(value)) {
      throw new Error('Email is not valid');
    }

    this.value = value;
  }

  getValue(): string {
    return this.value;
  }

  equals(other: Email): boolean {
    return this.value === other.getValue();
  }
}
