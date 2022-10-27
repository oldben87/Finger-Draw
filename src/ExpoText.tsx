// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react'
import {TouchableOpacity, Image, Text, View, StyleSheet} from 'react-native'
import {Sketch} from 'expo-pixi'
import Constants from 'expo-constants'

export default class App extends React.Component {
  state = {
    signatureImage: null,
  }

  refSketch = React.createRef()

  render() {
    return (
      <View style={styles.container}>
        <Sketch
          ref={this.refSketch}
          style={{
            flex: 1,
            borderBottomWidth: 2,
            paddingBottom: 5,
            marginBottom: 5,
          }}
          strokeColor="black"
          strokeWidth={10}
          strokeAlpha={1}
          onChange={this.updateSignatureAsync}
        />
        <TouchableOpacity
          style={{borderWidth: 2, padding: 5, alignItems: 'center'}}
          onPress={this.updateSignatureAsync}>
          <Text>Capture</Text>
        </TouchableOpacity>
        {this.state.signatureImage ? (
          <Image
            source={this.state.signatureImage}
            resizeMode="contain"
            style={{flex: 1, alignSelf: 'center', marginTop: 5}}
          />
        ) : (
          <View style={{flex: 1}} />
        )}
      </View>
    )
  }

  updateSignatureAsync = async () => {
    try {
      const {uri} = await this.refSketch.current.takeSnapshotAsync({
        format: 'jpeg',
        quality: 0.5,
        result: 'file',
      })

      console.log('Signature', uri)
      this.setState({signatureImage: {uri}})
    } catch (e) {
      console.log('Exception - ', e.message)
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
})
