import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, ScrollView, Image} from 'react-native';

import styles from './src/styles/style'
import RecipeRank from './src/components/RecipeRank'
import ImageSlider from './src/components/ImageSlider'


const App = () => {
  return (

      
        <ScrollView>
            <Image source={require('./src/image/real.jpg')} style={styles.appTitle} resizeMode='contain'></Image>
            <ImageSlider />
            <RecipeRank />
            
            <Text style={styles.title}>제철재료</Text>
            <Image source={require('./src/image/veggie.jpg')} style={styles.veggie} resizeMode='contain'></Image>
            <View style={styles.card}></View>
            

            <Text style={styles.title}>실시간 가격예측</Text>
            <View style={styles.pick}></View>

        </ScrollView>


  );
};


export default App;