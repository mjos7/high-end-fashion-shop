const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  // Categories
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Dresses' },
    { name: 'Tops' },
    { name: 'Pants' },
    { name: 'Jackets' },
    { name: 'Shoes' },
    { name: 'Bags' }
  ]);

  console.log('categories seeded');

  //Users
  await User.deleteMany();

  await User.create({
    firstName: 'Sandra',
    lastName: 'Lopez',
    email: 'Sandy@email.com',
    password: 'password12345'
  });

  await User.create({
    firstName: 'Alexandra',
    lastName: 'McKing',
    email: 'AlexM@email.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});