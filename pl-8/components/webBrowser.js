import React, { Component } from "react";
import { View, Button, NetInfo } from "react-native";
import { WebView } from "react-native-webview";

class MyWeb extends Component {
  state = {
    renderButton: true
  };

  componentDidMount() {
    NetInfo.getConnectionInfo().then(connectionInfo => {
      console.log(
        "Initial, type: " +
          connectionInfo.type +
          ", effectiveType: " +
          connectionInfo.effectiveType
      );
    });
    function handleFirstConnectivityChange(connectionInfo) {
      console.log(
        "First change, type: " +
          connectionInfo.type +
          ", effectiveType: " +
          connectionInfo.effectiveType
      );
    }
    NetInfo.addEventListener("connectionChange", handleFirstConnectivityChange);
  }

  componentWillUnmount() {
    NetInfo.removeEventListener(
      "connectionChange",
      handleFirstConnectivityChange
    );
  }

  render() {
    const content = this.state.renderButton ? (
      <Button
        title="load"
        onPress={() => this.setState({ renderButton: false })}
      />
    ) : (
      <WebView
        automaticallyAdjustContentInsets={false}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
        source={{ uri: "https://www.google.com/" }}
        onLoadStart={console.log("start")}
      />
    );

    return <View>{content}</View>;
  }
}

export default MyWeb;
