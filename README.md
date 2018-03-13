# ThinkThrough

Thought project that allows you to find the root cause of your what's been on your mind.

## Technologies

Besides the obvious, other technologies used in this project include:

* [expo](https://github.com/expo/expo) v25.0.0
* [react-redux](https://github.com/reactjs/react-redux) v5.0.7
* [react-navigation](https://github.com/react-navigation/react-navigation) v1.2.1

## Getting Started

#### 1. Clone the project

```
$ git clone git@github.com:binhxn/ThinkThrough.git
```

#### 2. Install dependencies

```
$ cd ThinkThrough
$ npm install
```

#### 3. Run Expo

If you don't have the Expo Development Tool, XDE, make sure to download it at: https://docs.expo.io/versions/latest/introduction/installation.html

Once downloaded, run the XDE and Open an Existing Project pointing to this directory. Then on the top right of the screen, click on Device -> iOS Simulator and let it run! Make sure you also have XCode installed on your computer.

Another way to simulate this app on your mobile device is if you download the Expo app on your mobile device AND globally install expo:

```
$ npm install -g exp
```

Once installed, navigate to this directory and run:

```
$ exp start
```

You should then receive a QR code or URL in which you can enter in to your Expo app.

## TODO

* :white_check_mark: Add all screens with content and flow
* :white_check_mark: Fix tabNavigation and stackNavigation flow
* :white_check_mark: Add basic TextInput validation
* :white_check_mark: Save all Thoughts into readable string
* :white_check_mark: Reset navigation on completion
* :white_check_mark: Add FlatList to render Thoughts
* :white_check_mark: Add redux-persist to save Thoughts to AsyncStorage
* :white_check_mark: Save date to AllThoughts
* :x: Add ability clear or delete individual Thought (by swipe)
* :x: Possibly remove persistGate from main component wrapper
* :x: Add tests with Jest/Enzyme
* :x: Research/implement styled-components
* :x: Research/implement react-native-elements
* :x: Optimize for Android
* :x: Organize file structure
* :x: REFACTOR REFACTOR REFACTOR

## BUGS

* :x: Investigate slow animation on Picker component
