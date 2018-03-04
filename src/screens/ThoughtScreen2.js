import React, { Component } from 'react';
import { View, StyleSheet, Picker, ActionSheetIOS } from 'react-native';
import { connect } from 'react-redux';

// import { updateAnswer1 } from '../actions';
import {
  Button,
  HeaderStyles,
  ThoughtText,
  ThoughtResponse
} from '../components';

const BUTTONS = ['Option 0', 'Option 1', 'Option 2', 'Destruct', 'Cancel'];
const DESTRUCTIVE_INDEX = 3;
const CANCEL_INDEX = 4;

class ThoughtScreen2 extends Component {
  static navigationOptions = () => HeaderStyles('New Thought', 'Home');

  constructor(props) {
    super(props);

    this.state = { emotion: '', clicked: 'none' };
  }

  showActionSheet = () => {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: BUTTONS,
        cancelButtonIndex: CANCEL_INDEX,
        destructiveButtonIndex: DESTRUCTIVE_INDEX
      },
      buttonIndex => {
        this.setState({ clicked: BUTTONS[buttonIndex] });
      }
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <ThoughtText>
          Why do you want to{' '}
          <ThoughtResponse>{this.props.answer1.toLowerCase()}</ThoughtResponse>?
        </ThoughtText>
        <View style={styles.responsePicker}>
          <ThoughtResponse onPress={this.showActionSheet}>
            Because I{' '}
          </ThoughtResponse>
          <Picker
            style={styles.picker}
            selectedValue={this.state.emotion}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ emotion: itemValue })
            }
          >
            <Picker.Item label="Want" value="Want" />
            <Picker.Item label="Need" value="Need" />
            <Picker.Item label="Feel" value="Feel" />
          </Picker>
          <ThoughtResponse> it</ThoughtResponse>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    marginBottom: 200,
    textAlign: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  picker: {
    height: 100,
    width: 100,
    marginTop: -97 // Forced value, fix later
  },
  responsePicker: {
    flexDirection: 'row',
    marginTop: 60
  }
});

const mapStateToProps = state => {
  const { answer1 } = state.thoughts;

  return { answer1 };
};

export default connect(mapStateToProps)(ThoughtScreen2);
