import React, { Component } from 'react';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import { 
  Input, 
  Card, 
  CardSection, 
  Button, 
  Spinner 
} from './common';
import { changeEmail, changePassword, loginUser } from '../actions';

class LoginForm extends Component {
  onButtonPress() {
    const { email, password } = this.props;
    
    this.props.loginUser({ email, password })
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner />;
    }
    return (          
      <Button onPress={this.onButtonPress.bind(this)}>
        Log in
      </Button>
    );
  }


  render() {
    const { changeEmail, changePassword, errorMessage, email, password } = this.props;

    return (
      <Card>
        <CardSection>
          <Text style={styles.headerStyle}>
            Log in / Sign up:
          </Text>
        </CardSection>

        <CardSection>
          <Input 
            label="Email"
            placeholder="abc@gmail.com"
            value={email}
            onChangeText={changeEmail}/>
        </CardSection>

        <CardSection>
          <Input 
            label="Password"
            placeholder="password"
            value={password}
            onChangeText={changePassword}
            secureTextEntry/>
        </CardSection>

        <Text style={styles.errorStyle}>{errorMessage}</Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>

      </Card>
    );
  }
}

const styles = {
  headerStyle: {
    fontSize: 24,
    height: 40
  },
  errorStyle: {
    alignSelf: 'center',
    fontSize: 16,
    color: 'red',
    fontWeight: '400',
    marginTop: 5,
    marginBottom: 5
  }
}

const mapStateToProps = ({ auth }) => {
  return { email, password, errorMessage, loading } = auth;
}

export default connect(mapStateToProps, 
  { changeEmail, changePassword, loginUser }
)(LoginForm);