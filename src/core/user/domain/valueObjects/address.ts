export class Address {
  private readonly street: string;
  private readonly zipCode: string;
  private readonly city: string;

  constructor(street: string, zipCode: string, city: string) {
    if (!street || !zipCode || !city) {
      throw new Error('All fields are required');
    }

    this.street = street;
    this.zipCode = zipCode;
    this.city = city;
  }

  getStreet() {
    return this.street;
  }
  getZipCode() {
    return this.zipCode;
  }
  getCity() {
    return this.city;
  }

  equal(other: Address): boolean {
    return (
      this.street === other.getStreet() &&
      this.zipCode === other.getZipCode() &&
      this.city === other.getCity()
    );
  }
}
