# Server Base - Proyecto ONG


## Envinroment setup

1) Create database
2) Copy .env.example to .env and fill with database credentials.

To install dependencies, run
``` bash
npm install
```

3) Migrations:
``` bash
npx sequelize-cli db:migrate
```

4) Seeders:
``` bash
npx sequelize-cli db:seed:all
```

## Start local server

``` bash
npm start
```

## User seeders

``` bash
{
        firstName: 'Jorge',
        lastName: 'Perez',
        email: 'jperez@test.com',
        password: '$2a$10$9ibGjlI6hra1snfbPyKzieXoJbJs2Y2PsIR8TULNfe14ZZ96H7Bn6', // Password: 123456
        roleId: 1,
        image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        firstName: 'Juan',
        lastName: 'Gonzalz',
        email: 'jgonzalez@test.com',
        password: '$2a$10$9ibGjlI6hra1snfbPyKzieXoJbJs2Y2PsIR8TULNfe14ZZ96H7Bn6', // Password: 123456
        roleId: 1,
        image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        firstName: 'Agustin',
        lastName: 'Lemo',
        email: 'alemo@test.com',
        password: '$2a$10$9ibGjlI6hra1snfbPyKzieXoJbJs2Y2PsIR8TULNfe14ZZ96H7Bn6', // Password: 123456
        roleId: 1,
        image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        firstName: 'Ramon',
        lastName: 'Diaz',
        email: 'rdiaz@test.com',
        password: '$2a$10$9ibGjlI6hra1snfbPyKzieXoJbJs2Y2PsIR8TULNfe14ZZ96H7Bn6', // Password: 123456
        roleId: 1,
        image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        firstName: 'Leon',
        lastName: 'Gieco',
        email: 'lgieco@test.com',
        password: '$2a$10$9ibGjlI6hra1snfbPyKzieXoJbJs2Y2PsIR8TULNfe14ZZ96H7Bn6', // Password: 123456
        roleId: 1,
        image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        firstName: 'Rosalia',
        lastName: 'Tobella',
        email: 'rtobella@test.com',
        password: '$2a$10$9ibGjlI6hra1snfbPyKzieXoJbJs2Y2PsIR8TULNfe14ZZ96H7Bn6', // Password: 123456
        roleId: 1,
        image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        firstName: 'Raton',
        lastName: 'Perez',
        email: 'rperez@test.com',
        password: '$2a$10$9ibGjlI6hra1snfbPyKzieXoJbJs2Y2PsIR8TULNfe14ZZ96H7Bn6', // Password: 123456
        roleId: 1,
        image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        firstName: 'Sergio',
        lastName: 'Denis',
        email: 'sdenis@test.com',
        password: '$2a$10$9ibGjlI6hra1snfbPyKzieXoJbJs2Y2PsIR8TULNfe14ZZ96H7Bn6', // Password: 123456
        roleId: 1,
        image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        firstName: 'Sandro',
        lastName: 'Sanchez',
        email: 'rosarosa@test.com',
        password: '$2a$10$9ibGjlI6hra1snfbPyKzieXoJbJs2Y2PsIR8TULNfe14ZZ96H7Bn6', // Password: 123456
        roleId: 1,
        image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        firstName: 'Patricio',
        lastName: 'Donald',
        email: 'patodonald@test.com',
        password: '$2a$10$9ibGjlI6hra1snfbPyKzieXoJbJs2Y2PsIR8TULNfe14ZZ96H7Bn6', // Password: 123456
        roleId: 1,
        image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        firstName: 'Ricardo',
        lastName: 'Gareca',
        email: 'richid@test.com',
        password: '$2a$10$9ibGjlI6hra1snfbPyKzieXoJbJs2Y2PsIR8TULNfe14ZZ96H7Bn6', // Password: 123456
        roleId: 2,
        image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        firstName: 'Hector',
        lastName: 'Baley',
        email: 'chocolatebaley@test.com',
        password: '$2a$10$9ibGjlI6hra1snfbPyKzieXoJbJs2Y2PsIR8TULNfe14ZZ96H7Bn6', // Password: 123456
        roleId: 2,
        image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        firstName: 'Albeiro',
        lastName: 'Usuriaga',
        email: 'palomo@test.com',
        password: '$2a$10$9ibGjlI6hra1snfbPyKzieXoJbJs2Y2PsIR8TULNfe14ZZ96H7Bn6', // Password: 123456
        roleId: 2,
        image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        firstName: 'Gabriel',
        lastName: 'Marquez',
        email: 'ggarciamarquez@test.com',
        password: '$2a$10$9ibGjlI6hra1snfbPyKzieXoJbJs2Y2PsIR8TULNfe14ZZ96H7Bn6', // Password: 123456
        roleId: 2,
        image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        firstName: 'Adolfo',
        lastName: 'Valencia',
        email: 'trenvalencia@test.com',
        password: '$2a$10$9ibGjlI6hra1snfbPyKzieXoJbJs2Y2PsIR8TULNfe14ZZ96H7Bn6', // Password: 123456
        roleId: 2,
        image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        firstName: 'Isabel',
        lastName: 'Ripoll',
        email: 'shakira@test.com',
        password: '$2a$10$9ibGjlI6hra1snfbPyKzieXoJbJs2Y2PsIR8TULNfe14ZZ96H7Bn6', // Password: 123456
        roleId: 2,
        image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        firstName: 'Gladys',
        lastName: 'Jimenez',
        email: 'lapollera@test.com',
        password: '$2a$10$9ibGjlI6hra1snfbPyKzieXoJbJs2Y2PsIR8TULNfe14ZZ96H7Bn6', // Password: 123456
        roleId: 2,
        image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        firstName: 'Carlos',
        lastName: 'Jimenez',
        email: 'lamona@test.com',
        password: '$2a$10$9ibGjlI6hra1snfbPyKzieXoJbJs2Y2PsIR8TULNfe14ZZ96H7Bn6', // Password: 123456
        roleId: 2,
        image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        firstName: 'Nicolino',
        lastName: 'Locche',
        email: 'elintocable@test.com',
        password: '$2a$10$9ibGjlI6hra1snfbPyKzieXoJbJs2Y2PsIR8TULNfe14ZZ96H7Bn6', // Password: 123456
        roleId: 2,
        image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        firstName: 'Oscar',
        lastName: 'Bonavena',
        email: 'ringo@test.com',
        password: '$2a$10$9ibGjlI6hra1snfbPyKzieXoJbJs2Y2PsIR8TULNfe14ZZ96H7Bn6', // Password: 123456
        roleId: 2,
        image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
        createdAt: new Date,
        updatedAt: new Date
      },
```
