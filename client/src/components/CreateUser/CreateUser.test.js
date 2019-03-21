
const handlRegister = require('./CreateUser');

test('Testing an empty username', () => {
  expect(handlRegister('')).toEqual('not a valid username');
})