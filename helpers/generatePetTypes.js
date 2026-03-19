const { faker } = require('@faker-js/faker');

exports.generatePetTypes = (count = 50) => {
  const petTypes = [];
  let i = 0;

  do {
    petTypes.push({ name: faker.animal.type() });
    i++;
  } while (i < 10);

  return petTypes;
};
