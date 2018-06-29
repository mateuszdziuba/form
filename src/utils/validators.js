export function validateEmpty(value) {
  if (!value.trim()) {
    return {
      valid: false,
      error: 'This field is required',
    };
  }

  return {
    valid: true,
    error: '',
  };
}

export function validateEmail(value) {
  if (!value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) && value.length > 0) {
    return {
      valid: false,
      error: 'Email address is incorrect',
    };
  }

  return {
    valid: true,
    error: '',
  };
}

export function validatePassword(value) {
  if (value.length < 6 && value.length > 0) {
    return {
      valid: false,
      error: 'Password must be at least 6 characters long',
    };
  }

  return {
    valid: true,
    error: '',
  };
}

export function validateUsername(value) {
  if (value.length < 5 && value.length > 0) {
    return {
      valid: false,
      error: 'Username must be at least 5 characters long',
    };
  }

  return {
    valid: true,
    error: '',
  };
}
