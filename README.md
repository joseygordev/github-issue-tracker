# github-issue-tracker
Simple Github Issue Tracker in React Native
### Tech Stack

- [React Native 0.68.1](https://reactnative.dev/ " React Native 0.68.1") (with hooks)

- [Expo SDK 45.0 ](https://expo.io/ "Expo SDK 45")

- [TypeScript 4.3.5](https://www.typescriptlang.org/ "TypeScript 4.3.5")

- [Redux 4.2.0](https://redux.js.org/introduction/installation "Redux 4.2.0") 

- [ Jest 26.6.3](https://jestjs.io/ " Jest 26.6.3") (with react-test-renderer)


<br />

### Installation

1. **Clone the repository**

 	`git clone https://github.com/iuliuvisovan/github-issue-tracker.git`
 
1. **Move to project folder**

 	`cd github-issue-tracker`
 
1. (if missing) **Install Yarn**

 	`npm install -g yarn`
1. **Install dependencies**

	`yarn`

1. (if missing) **Install Expo CLI**

	`npm install -g expo-cli`
	
<br />

### Running

- **On an iOS simulator** (MacOS + XCode installation needed):

	`yarn ios`
	
- **On an Android Emulator**:

	`yarn android`
	
- **On your own phone** (via the [Expo Android/iOS app](https://apps.apple.com/us/app/expo-client/id982107779 "Expo Client ")):

	 `yarn start`, then wait for a QR code to show up in console. Scan it with your iOS/Android **Camera** app. It will prompt you to open it with the **Expo Client** app.

<br />

### Testing

This app features testing using Jest and React Native Test Renderer.

- **Running the tests**:

	`yarn test`

- **Running the tests** & also updating the snapshots:

	`yarn test -u`

After running the tests, coverage information in HTML format is available in the `./coverage` folder.

<br />

### TODO
- [ ] 100% test coverage
- [ ] layout improvements
- [ ] husky