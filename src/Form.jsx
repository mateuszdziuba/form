import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';

import {
  validateEmpty,
  validateEmail,
  validatePassword,
  validateUsername,
} from './utils/validators';

const initialState = {
  yourName: {
    error: null,
    value: '',
    valid: undefined,
  },
  surname: {
    error: null,
    value: '',
    valid: undefined,
  },
  username: {
    error: null,
    value: '',
    valid: undefined,
  },
  email: {
    error: null,
    value: '',
    valid: undefined,
  },
  password: {
    error: null,
    value: '',
    valid: undefined,
  },
};

const buttonStyle = {
  minWidth: '230px',
  width: '50%',
  borderRadius: '24px',
  fontFamily: 'Roboto',
  fontSize: '22px',
  fontWeight: '500',
  lineHeight: '30px',
  padding: '15px 30px',
  marginTop: '15px',
  alignSelf: 'center',
  // backgroundImage: 'linear-gradient(to right, #3b92ff 0%, #0770f3 100%)',
};
const formStyle = {
  width: '50%',
  maxWidth: '900px',
  border: '1px solid #eef3f6',
  padding: '50px 80px',
  marginTop: '20px',
  fontSize: '15px',
  boxShadow: '0 2px 4px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12)'
};

class Form extends React.Component {
  constructor() {
    super();
    this.state = initialState;
  }

  handleChange = (e, validators) => {
    const { name, value } = e.target;
    let valid;
    let error;
    for (let i = 0; i < validators.length; i += 1) {
      const rule = validators[i];
      ({ valid, error } = rule(value));

      if (!valid) {
        break;
      }
    }
    this.props.onChange({ [name]: value });
    this.setState(prevState => ({
      [name]: {
        ...prevState[name],
        value,
        error,
        valid,
      },
    }));
  };

  validateField = (e, validators) => {
    const { name, value } = e.target;
    let valid;
    let error;
    for (let i = 0; i < validators.length; i += 1) {
      const rule = validators[i];
      ({ valid, error } = rule(value));

      if (!valid) {
        break;
      }
    }
    this.setState(prevState => ({
      [name]: {
        ...prevState[name],
        error,
        valid,
      },
    }));
  };

  onSubmit = (e) => {
    e.preventDefault();
    let valid;
    let error;
    Object.keys(this.state).forEach((field) => {
      if (this.state[field].error === null) {
        ({ valid, error } = validateEmpty(this.state[field].value));
        this.setState(prevState => ({
          [field]: {
            ...prevState[field],
            error,
            valid,
          },
        }));
      }
    });
    const {
      yourName, surname, username, email, password,
    } = this.state;
    if (yourName.valid && surname.valid && username.valid && email.valid && password.valid) {
      alert('Registered succesfully');
      this.setState(
        initialState,
      );
      const fields = {
        yourName: '', surname: '', username: '', email: '', password: '',
      };
      this.props.onChange(fields);
    }
  };

  render() {
    const {
      yourName,
      surname,
      username,
      email,
      password,
    } = this.state;
    return (
      <FormControl style={formStyle}>
        <h1>Sign up</h1>
        <TextField
          name="yourName"
          label="Your Name"
          value={yourName.value}
          onChange={e => this.handleChange(e, [validateEmpty])}
          error={yourName.valid === false}
          helperText={yourName.valid !== false ? ' ' : yourName.error}
          onBlur={e => this.validateField(e, [validateEmpty])}
          fullWidth
        />
        <TextField
          name="surname"
          label="Surname"
          value={surname.value}
          onChange={e => this.handleChange(e, [validateEmpty])}
          error={surname.valid === false}
          helperText={surname.valid !== false ? ' ' : surname.error}
          onBlur={e => this.validateField(e, [validateEmpty])}
          fullWidth
        />
        <TextField
          name="username"
          label="Username"
          value={username.value}
          onChange={e => this.handleChange(e, [validateEmpty, validateUsername])}
          error={username.valid === false}
          helperText={username.valid !== false ? ' ' : username.error}
          onBlur={e => this.validateField(e, [validateEmpty, validateUsername])}
          fullWidth
        />
        <TextField
          name="email"
          label="E-mail address"
          type="email"
          value={email.value}
          onChange={e => this.handleChange(e, [validateEmpty, validateEmail])}
          error={email.valid === false}
          helperText={email.valid !== false ? ' ' : email.error}
          onBlur={e => this.validateField(e, [validateEmpty, validateEmail])}
          fullWidth
        />
        <TextField
          name="password"
          label="Password"
          type="password"
          value={password.value}
          onChange={e => this.handleChange(e, [validateEmpty, validatePassword])}
          error={password.valid === false}
          helperText={password.valid !== false ? ' ' : password.error}
          onBlur={e => this.validateField(e, [validateEmpty, validatePassword])}
          fullWidth
        />
        <Button
          onClick={e => this.onSubmit(e)}
          variant="raised"
          color="primary"
          // size="large"
          style={buttonStyle}
          children="submit"
        />
      </FormControl>
    );
  }
}

export default Form;
