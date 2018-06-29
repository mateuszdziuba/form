import React, { Component } from 'react';
import './App.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import Form from './Form';

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
  typography: {
    fontFamily: '"PT Sans", sans-serif',
  },
});

class App extends Component {
  state = {
    fields: {},
  };

  onChange = (updatedValue) => {
    this.setState({
      fields: {
        ...this.state.fields,
        ...updatedValue,
      },
    });
  };

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Form onChange={fields => this.onChange(fields)} />
        </div>
        <p>{JSON.stringify(this.state.fields, null, 2)}</p>
      </MuiThemeProvider>
    );
  }
}

export default App;
