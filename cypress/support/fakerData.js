// Using Facker to generate Random Datas

const faker = require('faker');
const fs = require('fs');

function generateRandomUserData() {
  const randomUserData = {
    name: faker.name.findName(),
    email: faker.internet.email(),
    title: "Mr",
    password: faker.internet.password(),
    dob_day: faker.random.number({ min: 1, max: 31 }).toString(),
    dob_month: faker.date.month(),
    dob_year: faker.random.number({ min: 1950, max: 2000 }).toString(),
    newsletter: true,
    optin: true,
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    company: "Amalitech",
    address: faker.address.streetAddress(),
    address2: "Apt 101",
    country: faker.address.country(),
    state: faker.address.state(),
    city: faker.address.city(),
    zipcode: faker.address.zipCode(),
    mobile_number: faker.phone.phoneNumber()
  };

  const filePath = 'cypress/fixtures/user.json';
  fs.writeFileSync(filePath, JSON.stringify(randomUserData, null, 2));
}

generateRandomUserData();
