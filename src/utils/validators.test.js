import * as validators from './validators';

describe('validateEmpty', () => {
  it('should mark field as empty', () => {
    const text = '';
    const expectedResult = {
      valid: false,
      error: 'This field is required',
    };
    expect(validators.validateEmpty(text)).toEqual(expectedResult);
  });
  it('should validate non empty field', () => {
    const text = 'testing';
    const expectedResult = {
      valid: true,
      error: '',
    };
    expect(validators.validateEmpty(text)).toEqual(expectedResult);
  });
});

describe('validateUsername', () => {
  it('should return error if username is too short', () => {
    const text = 'Kolo';
    const expectedResult = {
      valid: false,
      error: 'Username must be at least 5 characters long',
    };
    expect(validators.validateUsername(text)).toEqual(expectedResult);
  });
  it('should validate proper username', () => {
    const text = 'Bronek';
    const expectedResult = {
      valid: true,
      error: '',
    };
    expect(validators.validateUsername(text)).toEqual(expectedResult);
  });
});

describe('validateEmail', () => {
  it('it should return error if email format is wrong', () => {
    const text = 'poczta.polska';
    const expectedResult = {
      valid: false,
      error: 'Email address is incorrect',
    };
    expect(validators.validateEmail(text)).toEqual(expectedResult);
  });
  it('should validate right email address', () => {
    const text = 'poczta@buziaczek.pl';
    const expectedResult = {
      valid: true,
      error: '',
    };
    expect(validators.validateEmail(text)).toEqual(expectedResult);
  });
});

describe('validatePassword', () => {
  it('should return error if password is too short', () => {
    const text = 'lol12';
    const expectedResult = {
      valid: false,
      error: 'Password must be at least 6 characters long',
    };
    expect(validators.validatePassword(text)).toEqual(expectedResult);
  });
  it('should validate proper password', () => {
    const text = 'test123';
    const expectedResult = {
      valid: true,
      error: '',
    };
    expect(validators.validatePassword(text)).toEqual(expectedResult);
  });
});
