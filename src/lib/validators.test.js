import { atLeastOneNumber, atLeastOneUpperAndLower, emailPattern} from "./validators";

describe('when validating emails', () => {
  test('pattern matches emails', () => {
    expect('vicente@gaslytics.com').toMatch(emailPattern)
  })
})

describe('when validating passwords', () => {
  test('it tests whether a password contains at least one number', () => {
    expect(atLeastOneNumber('Password')).toMatch(/Your password needs to include at least one number/)
    expect(atLeastOneNumber('P4ssword')).toBeTruthy()
  })
  test('it tests whether a password contains at least one uppercase and one lowercase char', () => {
    expect(atLeastOneUpperAndLower('1337Passw0rd')).toBeTruthy()
    expect(atLeastOneUpperAndLower('1337passw0rd')).toMatch(/It should contain at least one uppercase and one lowercase character/)
  })
})


