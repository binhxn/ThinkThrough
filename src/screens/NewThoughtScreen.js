import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

import { Button } from '../components/Button';
import { HeaderStyles } from '../components/HeaderStyles';

class NewThoughtScreen extends Component {
  static navigationOptions = () => HeaderStyles('New Thought', 'Home');

  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>How are you feeling today?</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter goal"
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
        />
        <Button onPress={() => this.props.navigation.navigate('NextScreen3')}>
          Go to NextScreen3
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    marginBottom: 20
  },
  input: {
    height: 40,
    width: 200,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    marginBottom: 20,
    textAlign: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default NewThoughtScreen;
