import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import { SliderBox } from "react-native-image-slider-box";

export default class ImageSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        //"https://source.unsplash.com/1024x768/?nature",
        //"https://source.unsplash.com/1024x768/?water",
        //"https://source.unsplash.com/1024x768/?girl",
        //https://source.unsplash.com/1024x768/?tree",
        //require('../image/home.PNG'),
        require('../image/home.jpg'),
        require('../image/carrot.jpg'),
        require('../image/mustkit.jpg'),
      ]
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <SliderBox
          images={this.state.images}
          onCurrentImagePressed={index =>
            console.warn(`image ${index} pressed`)
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%'
  }
});
