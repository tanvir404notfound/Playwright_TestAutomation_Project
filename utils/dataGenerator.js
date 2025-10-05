// Data generator using Faker
import { faker } from '@faker-js/faker';

export function generateUser() {
  return {
    name: faker.name.fullName(),
    email: faker.internet.email(),
  };
}
