import React, { Component } from 'react';
import { BackHandler} from 'react-native';
import { WebView } from 'react-native-webview';

// ...
class App extends Component {
  webView = {
    canGoBack: false,
    ref: null,
  }

  onAndroidBackPress = () => {
    if (this.webView.canGoBack && this.webView.ref) {
      this.webView.ref.goBack();
      return true;
    }
    return false;
  }

  componentDidMount() {
    if (Platform.OS === 'android') {
      BackHandler.addEventListener('hardwareBackPress', this.onAndroidBackPress);
    }
  }

  componentWillUnmount() {
    if (Platform.OS === 'android') {
      BackHandler.removeEventListener('hardwareBackPress');
    }
  }

  render() {
    return (
      <WebView
        source={{ uri: "https://healthback.run.goorm.io/ " }}
        ref={(webView) => { this.webView.ref = webView; }}
        onNavigationStateChange={(navState) => { this.webView.canGoBack = navState.canGoBack; }}
      />
    );
  }
}

export default App


// import React, { Component } from 'react';
// import { WebView } from 'react-native-webview';

// // ...
// class App extends Component {
//   render() {
//     return (
//       <WebView 
// 		  source={{ uri: 'https://www.naver.com' }} 
// 		  />
//     );
//   }
// }

// export default App