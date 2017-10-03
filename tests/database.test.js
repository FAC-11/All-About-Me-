const test = require('tape');
const dbReset = require('../src/model/database/db_build');
const dbConnection = require('../src/model/database/db_connection');

const { addUser, getUser } = require('../src/model/db_queries');

test('Insert user into database', (t) => {
  dbReset()
    .then(() => {
      return addUser('jam', 'jam@gmail.com', 'password');
    })
    .then(id => {
      t.equal(typeof id, 'number', 'Returns an object containing user\'s id');
      t.end();
    });
});

test('Get user based on email', (t) => {
  dbReset()
    .then(() => {
      return addUser('jam', 'jam@gmail.com', 'password');
    })
    .then(() => {
      return getUser('jam@gmail.com');
    })
    .then(userObj => {
      const expected = {
        name: 'jam',
        email: 'jam@gmail.com',
        password: 'password',
      };
      Object.keys(expected).forEach(key => {
        t.equal(userObj[key], expected[key], `Returns object with same ${key}`);
      });
      t.end();
    });
});

test('Insert about_me section into database', (t) => {
  const aboutMe = {
    user_id: ,
    likes,
    dislikes,
    strengths,
    weaknesses,
    uncomfortable,
    safe
  }
  dbReset()
    .then(() => {
      return addUser(aboutMe);
    })
    .then(id => {
      t.equal(typeof id, 'number', 'Returns an object containing user\'s id');
      t.end();
    });
});
