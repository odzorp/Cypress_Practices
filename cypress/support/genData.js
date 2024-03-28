// // Function to generate random email
// function generateRandomEmail() {
//     const randomString = Math.random().toString(36).substring(7);
//     return `${randomString}@gmail.com`;
// }

// // Function to generate random mobile number
// function generateRandomMobileNumber() {
//     const countryCode = '+233';
//     const randomNumber = Math.floor(Math.random() * 9000000000) + 1000000000;
//     return `${countryCode}${randomNumber}`;
// }

// // Generate random data
// const firstName = Math.random().toString(36).substring(7);
// const lastName = Math.random().toString(36).substring(7);

// const data = {
//     "name": `${firstName} ${lastName}`,
//     "email": generateRandomEmail(),
//     "title": "Mr",
//     "password": Math.random().toString(36).substring(7),
//     "dob_day": Math.floor(Math.random() * 28) + 1,
//     "dob_month": "July",
//     "dob_year": Math.floor(Math.random() * (2002 - 1980 + 1)) + 1980,
//     "newsletter": true,
//     "optin": true,
//     "first_name": firstName,
//     "last_name": lastName,
//     "company": "Amalitech",
//     "address": Math.floor(Math.random() * 10000) + " street",
//     "address2": "Apt " + Math.floor(Math.random() * 200),
//     "country": "Canada",
//     "state": "Ottawa",
//     "city": "Boston",
//     "zipcode": "00233",
//     "mobile_number": generateRandomMobileNumber()
// };

// // Export the data for Cypress to use
// module.exports = {
//     data
// };



const fs = require('fs');

// Function to generate random email
function generateRandomEmail() {
    const randomString = Math.random().toString(36).substring(7);
    return `${randomString}@gmail.com`;
}

// Function to generate random mobile number
function generateRandomMobileNumber() {
    const countryCode = '+233';
    const randomNumber = Math.floor(Math.random() * 9000000000) + 1000000000;
    return `${countryCode}${randomNumber}`;
}

// Generate random data
const firstName = Math.random().toString(36).substring(7);
const lastName = Math.random().toString(36).substring(7);

const data = {
    "name": `${firstName} ${lastName}`,
    "email": generateRandomEmail(),
    "title": "Mr",
    "password": Math.random().toString(36).substring(7),
    "dob_day": Math.floor(Math.random() * 28) + 1,
    "dob_month": "July",
    "dob_year": Math.floor(Math.random() * (2002 - 1980 + 1)) + 1980,
    "newsletter": true,
    "optin": true,
    "first_name": firstName,
    "last_name": lastName,
    "company": "Amalitech",
    "address": Math.floor(Math.random() * 10000) + " street",
    "address2": "Apt " + Math.floor(Math.random() * 200),
    "country": "Canada",
    "state": "Ottawa",
    "city": "Boston",
    "zipcode": "00233",
    "mobile_number": generateRandomMobileNumber()
};

//export data to fixture
module.exports ={
    data
}

// Convert data to JSON string
const jsonData = JSON.stringify(data, null, 2);

// Write JSON data to fixture file
fs.writeFileSync('cypress/fixtures/user.json', jsonData);

// Log confirmation message
console.log('Data has been written to user.json fixture file');
