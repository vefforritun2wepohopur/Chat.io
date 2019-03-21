
const handlRegister = require('./CreateUser');

test('Testing an empty username', () => {
  expect(handlRegister('')).toBe('not a valid username');
})